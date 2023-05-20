var UL=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var kJ=UL((AJ,df)=>{const BL=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};BL();var IT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function AT(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var L={exports:{}},Me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc=Symbol.for("react.element"),VL=Symbol.for("react.portal"),zL=Symbol.for("react.fragment"),jL=Symbol.for("react.strict_mode"),YL=Symbol.for("react.profiler"),WL=Symbol.for("react.provider"),HL=Symbol.for("react.context"),GL=Symbol.for("react.forward_ref"),qL=Symbol.for("react.suspense"),KL=Symbol.for("react.memo"),QL=Symbol.for("react.lazy"),LE=Symbol.iterator;function XL(e){return e===null||typeof e!="object"?null:(e=LE&&e[LE]||e["@@iterator"],typeof e=="function"?e:null)}var bT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},NT=Object.assign,OT={};function bl(e,t,n){this.props=e,this.context=t,this.refs=OT,this.updater=n||bT}bl.prototype.isReactComponent={};bl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function RT(){}RT.prototype=bl.prototype;function S1(e,t,n){this.props=e,this.context=t,this.refs=OT,this.updater=n||bT}var E1=S1.prototype=new RT;E1.constructor=S1;NT(E1,bl.prototype);E1.isPureReactComponent=!0;var $E=Array.isArray,PT=Object.prototype.hasOwnProperty,C1={current:null},MT={key:!0,ref:!0,__self:!0,__source:!0};function LT(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)PT.call(t,r)&&!MT.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Hc,type:e,key:s,ref:o,props:i,_owner:C1.current}}function JL(e,t){return{$$typeof:Hc,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function k1(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hc}function ZL(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var FE=/\/+/g;function Kg(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ZL(""+e.key):t.toString(36)}function $d(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Hc:case VL:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Kg(o,0):r,$E(i)?(n="",e!=null&&(n=e.replace(FE,"$&/")+"/"),$d(i,t,n,"",function(c){return c})):i!=null&&(k1(i)&&(i=JL(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(FE,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",$E(e))for(var a=0;a<e.length;a++){s=e[a];var u=r+Kg(s,a);o+=$d(s,t,n,u,i)}else if(u=XL(e),typeof u=="function")for(e=u.call(e),a=0;!(s=e.next()).done;)s=s.value,u=r+Kg(s,a++),o+=$d(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function nd(e,t,n){if(e==null)return e;var r=[],i=0;return $d(e,r,"","",function(s){return t.call(n,s,i++)}),r}function e6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Mn={current:null},Fd={transition:null},t6={ReactCurrentDispatcher:Mn,ReactCurrentBatchConfig:Fd,ReactCurrentOwner:C1};Me.Children={map:nd,forEach:function(e,t,n){nd(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nd(e,function(){t++}),t},toArray:function(e){return nd(e,function(t){return t})||[]},only:function(e){if(!k1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Me.Component=bl;Me.Fragment=zL;Me.Profiler=YL;Me.PureComponent=S1;Me.StrictMode=jL;Me.Suspense=qL;Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t6;Me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=NT({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=C1.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)PT.call(t,u)&&!MT.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Hc,type:e.type,key:i,ref:s,props:r,_owner:o}};Me.createContext=function(e){return e={$$typeof:HL,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:WL,_context:e},e.Consumer=e};Me.createElement=LT;Me.createFactory=function(e){var t=LT.bind(null,e);return t.type=e,t};Me.createRef=function(){return{current:null}};Me.forwardRef=function(e){return{$$typeof:GL,render:e}};Me.isValidElement=k1;Me.lazy=function(e){return{$$typeof:QL,_payload:{_status:-1,_result:e},_init:e6}};Me.memo=function(e,t){return{$$typeof:KL,type:e,compare:t===void 0?null:t}};Me.startTransition=function(e){var t=Fd.transition;Fd.transition={};try{e()}finally{Fd.transition=t}};Me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Me.useCallback=function(e,t){return Mn.current.useCallback(e,t)};Me.useContext=function(e){return Mn.current.useContext(e)};Me.useDebugValue=function(){};Me.useDeferredValue=function(e){return Mn.current.useDeferredValue(e)};Me.useEffect=function(e,t){return Mn.current.useEffect(e,t)};Me.useId=function(){return Mn.current.useId()};Me.useImperativeHandle=function(e,t,n){return Mn.current.useImperativeHandle(e,t,n)};Me.useInsertionEffect=function(e,t){return Mn.current.useInsertionEffect(e,t)};Me.useLayoutEffect=function(e,t){return Mn.current.useLayoutEffect(e,t)};Me.useMemo=function(e,t){return Mn.current.useMemo(e,t)};Me.useReducer=function(e,t,n){return Mn.current.useReducer(e,t,n)};Me.useRef=function(e){return Mn.current.useRef(e)};Me.useState=function(e){return Mn.current.useState(e)};Me.useSyncExternalStore=function(e,t,n){return Mn.current.useSyncExternalStore(e,t,n)};Me.useTransition=function(){return Mn.current.useTransition()};Me.version="18.2.0";L.exports=Me;var qt=L.exports,dy={},x1={exports:{}},tr={},$T={exports:{}},FT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,z){var R=$.length;$.push(z);e:for(;0<R;){var ee=R-1>>>1,U=$[ee];if(0<i(U,z))$[ee]=z,$[R]=U,R=ee;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var z=$[0],R=$.pop();if(R!==z){$[0]=R;e:for(var ee=0,U=$.length,B=U>>>1;ee<B;){var Y=2*(ee+1)-1,V=$[Y],D=Y+1,le=$[D];if(0>i(V,R))D<U&&0>i(le,V)?($[ee]=le,$[D]=R,ee=D):($[ee]=V,$[Y]=R,ee=Y);else if(D<U&&0>i(le,R))$[ee]=le,$[D]=R,ee=D;else break e}}return z}function i($,z){var R=$.sortIndex-z.sortIndex;return R!==0?R:$.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,p=null,m=3,v=!1,w=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C($){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=$)r(c),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(c)}}function T($){if(_=!1,C($),!w)if(n(u)!==null)w=!0,Te(A);else{var z=n(c);z!==null&&ge(T,z.startTime-$)}}function A($,z){w=!1,_&&(_=!1,S(N),N=-1),v=!0;var R=m;try{for(C(z),p=n(u);p!==null&&(!(p.expirationTime>z)||$&&!j());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,m=p.priorityLevel;var U=ee(p.expirationTime<=z);z=e.unstable_now(),typeof U=="function"?p.callback=U:p===n(u)&&r(u),C(z)}else r(u);p=n(u)}if(p!==null)var B=!0;else{var Y=n(c);Y!==null&&ge(T,Y.startTime-z),B=!1}return B}finally{p=null,m=R,v=!1}}var O=!1,b=null,N=-1,Z=5,F=-1;function j(){return!(e.unstable_now()-F<Z)}function J(){if(b!==null){var $=e.unstable_now();F=$;var z=!0;try{z=b(!0,$)}finally{z?X():(O=!1,b=null)}}else O=!1}var X;if(typeof y=="function")X=function(){y(J)};else if(typeof MessageChannel!="undefined"){var ue=new MessageChannel,oe=ue.port2;ue.port1.onmessage=J,X=function(){oe.postMessage(null)}}else X=function(){x(J,0)};function Te($){b=$,O||(O=!0,X())}function ge($,z){N=x(function(){$(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Te(A))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function($){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var R=m;m=z;try{return $()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,z){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var R=m;m=$;try{return z()}finally{m=R}},e.unstable_scheduleCallback=function($,z,R){var ee=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?ee+R:ee):R=ee,$){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=R+U,$={id:d++,callback:z,priorityLevel:$,startTime:R,expirationTime:U,sortIndex:-1},R>ee?($.sortIndex=R,t(c,$),n(u)===null&&$===n(c)&&(_?(S(N),N=-1):_=!0,ge(T,R-ee))):($.sortIndex=U,t(u,$),w||v||(w=!0,Te(A))),$},e.unstable_shouldYield=j,e.unstable_wrapCallback=function($){var z=m;return function(){var R=m;m=z;try{return $.apply(this,arguments)}finally{m=R}}}})(FT);$T.exports=FT;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UT=L.exports,Jn=$T.exports;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var BT=new Set,Ju={};function ra(e,t){ul(e,t),ul(e+"Capture",t)}function ul(e,t){for(Ju[e]=t,e=0;e<t.length;e++)BT.add(t[e])}var Yi=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),fy=Object.prototype.hasOwnProperty,n6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,UE={},BE={};function r6(e){return fy.call(BE,e)?!0:fy.call(UE,e)?!1:n6.test(e)?BE[e]=!0:(UE[e]=!0,!1)}function i6(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function s6(e,t,n,r){if(t===null||typeof t=="undefined"||i6(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ln(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var on={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){on[e]=new Ln(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];on[t]=new Ln(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){on[e]=new Ln(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){on[e]=new Ln(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){on[e]=new Ln(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){on[e]=new Ln(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){on[e]=new Ln(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){on[e]=new Ln(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){on[e]=new Ln(e,5,!1,e.toLowerCase(),null,!1,!1)});var T1=/[\-:]([a-z])/g;function D1(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(T1,D1);on[t]=new Ln(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(T1,D1);on[t]=new Ln(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(T1,D1);on[t]=new Ln(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){on[e]=new Ln(e,1,!1,e.toLowerCase(),null,!1,!1)});on.xlinkHref=new Ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){on[e]=new Ln(e,1,!1,e.toLowerCase(),null,!0,!0)});function I1(e,t,n,r){var i=on.hasOwnProperty(t)?on[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(s6(t,n,i,r)&&(n=null),r||i===null?r6(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rs=UT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rd=Symbol.for("react.element"),Ia=Symbol.for("react.portal"),Aa=Symbol.for("react.fragment"),A1=Symbol.for("react.strict_mode"),py=Symbol.for("react.profiler"),VT=Symbol.for("react.provider"),zT=Symbol.for("react.context"),b1=Symbol.for("react.forward_ref"),my=Symbol.for("react.suspense"),gy=Symbol.for("react.suspense_list"),N1=Symbol.for("react.memo"),ds=Symbol.for("react.lazy"),jT=Symbol.for("react.offscreen"),VE=Symbol.iterator;function su(e){return e===null||typeof e!="object"?null:(e=VE&&e[VE]||e["@@iterator"],typeof e=="function"?e:null)}var _t=Object.assign,Qg;function wu(e){if(Qg===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qg=t&&t[1]||""}return`
`+Qg+e}var Xg=!1;function Jg(e,t){if(!e||Xg)return"";Xg=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Xg=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wu(e):""}function o6(e){switch(e.tag){case 5:return wu(e.type);case 16:return wu("Lazy");case 13:return wu("Suspense");case 19:return wu("SuspenseList");case 0:case 2:case 15:return e=Jg(e.type,!1),e;case 11:return e=Jg(e.type.render,!1),e;case 1:return e=Jg(e.type,!0),e;default:return""}}function yy(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Aa:return"Fragment";case Ia:return"Portal";case py:return"Profiler";case A1:return"StrictMode";case my:return"Suspense";case gy:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zT:return(e.displayName||"Context")+".Consumer";case VT:return(e._context.displayName||"Context")+".Provider";case b1:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N1:return t=e.displayName||null,t!==null?t:yy(e.type)||"Memo";case ds:t=e._payload,e=e._init;try{return yy(e(t))}catch{}}return null}function a6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yy(t);case 8:return t===A1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ws(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function YT(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function l6(e){var t=YT(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function id(e){e._valueTracker||(e._valueTracker=l6(e))}function WT(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=YT(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ff(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function vy(e,t){var n=t.checked;return _t({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function zE(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ws(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function HT(e,t){t=t.checked,t!=null&&I1(e,"checked",t,!1)}function wy(e,t){HT(e,t);var n=Ws(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_y(e,t.type,n):t.hasOwnProperty("defaultValue")&&_y(e,t.type,Ws(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jE(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _y(e,t,n){(t!=="number"||ff(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _u=Array.isArray;function Ya(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ws(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Sy(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return _t({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function YE(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(G(92));if(_u(n)){if(1<n.length)throw Error(G(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ws(n)}}function GT(e,t){var n=Ws(t.value),r=Ws(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function WE(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qT(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ey(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qT(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sd,KT=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sd=sd||document.createElement("div"),sd.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sd.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zu(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u6=["Webkit","ms","Moz","O"];Object.keys(Nu).forEach(function(e){u6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nu[t]=Nu[e]})});function QT(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nu.hasOwnProperty(e)&&Nu[e]?(""+t).trim():t+"px"}function XT(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=QT(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var c6=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cy(e,t){if(t){if(c6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function ky(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xy=null;function O1(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ty=null,Wa=null,Ha=null;function HE(e){if(e=Kc(e)){if(typeof Ty!="function")throw Error(G(280));var t=e.stateNode;t&&(t=Mp(t),Ty(e.stateNode,e.type,t))}}function JT(e){Wa?Ha?Ha.push(e):Ha=[e]:Wa=e}function ZT(){if(Wa){var e=Wa,t=Ha;if(Ha=Wa=null,HE(e),t)for(e=0;e<t.length;e++)HE(t[e])}}function e2(e,t){return e(t)}function t2(){}var Zg=!1;function n2(e,t,n){if(Zg)return e(t,n);Zg=!0;try{return e2(e,t,n)}finally{Zg=!1,(Wa!==null||Ha!==null)&&(t2(),ZT())}}function ec(e,t){var n=e.stateNode;if(n===null)return null;var r=Mp(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(G(231,t,typeof n));return n}var Dy=!1;if(Yi)try{var ou={};Object.defineProperty(ou,"passive",{get:function(){Dy=!0}}),window.addEventListener("test",ou,ou),window.removeEventListener("test",ou,ou)}catch{Dy=!1}function h6(e,t,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Ou=!1,pf=null,mf=!1,Iy=null,d6={onError:function(e){Ou=!0,pf=e}};function f6(e,t,n,r,i,s,o,a,u){Ou=!1,pf=null,h6.apply(d6,arguments)}function p6(e,t,n,r,i,s,o,a,u){if(f6.apply(this,arguments),Ou){if(Ou){var c=pf;Ou=!1,pf=null}else throw Error(G(198));mf||(mf=!0,Iy=c)}}function ia(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function r2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function GE(e){if(ia(e)!==e)throw Error(G(188))}function m6(e){var t=e.alternate;if(!t){if(t=ia(e),t===null)throw Error(G(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return GE(i),e;if(s===r)return GE(i),t;s=s.sibling}throw Error(G(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?e:t}function i2(e){return e=m6(e),e!==null?s2(e):null}function s2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=s2(e);if(t!==null)return t;e=e.sibling}return null}var o2=Jn.unstable_scheduleCallback,qE=Jn.unstable_cancelCallback,g6=Jn.unstable_shouldYield,y6=Jn.unstable_requestPaint,Ot=Jn.unstable_now,v6=Jn.unstable_getCurrentPriorityLevel,R1=Jn.unstable_ImmediatePriority,a2=Jn.unstable_UserBlockingPriority,gf=Jn.unstable_NormalPriority,w6=Jn.unstable_LowPriority,l2=Jn.unstable_IdlePriority,Np=null,Zr=null;function _6(e){if(Zr&&typeof Zr.onCommitFiberRoot=="function")try{Zr.onCommitFiberRoot(Np,e,void 0,(e.current.flags&128)===128)}catch{}}var Lr=Math.clz32?Math.clz32:C6,S6=Math.log,E6=Math.LN2;function C6(e){return e>>>=0,e===0?32:31-(S6(e)/E6|0)|0}var od=64,ad=4194304;function Su(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yf(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Su(a):(s&=o,s!==0&&(r=Su(s)))}else o=n&~i,o!==0?r=Su(o):s!==0&&(r=Su(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Lr(t),i=1<<n,r|=e[n],t&=~i;return r}function k6(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x6(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Lr(s),a=1<<o,u=i[o];u===-1?((a&n)===0||(a&r)!==0)&&(i[o]=k6(a,t)):u<=t&&(e.expiredLanes|=a),s&=~a}}function Ay(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function u2(){var e=od;return od<<=1,(od&4194240)===0&&(od=64),e}function e0(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gc(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lr(t),e[t]=n}function T6(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Lr(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function P1(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Lr(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ge=0;function c2(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var h2,M1,d2,f2,p2,by=!1,ld=[],Is=null,As=null,bs=null,tc=new Map,nc=new Map,ps=[],D6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function KE(e,t){switch(e){case"focusin":case"focusout":Is=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":bs=null;break;case"pointerover":case"pointerout":tc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":nc.delete(t.pointerId)}}function au(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Kc(t),t!==null&&M1(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function I6(e,t,n,r,i){switch(t){case"focusin":return Is=au(Is,e,t,n,r,i),!0;case"dragenter":return As=au(As,e,t,n,r,i),!0;case"mouseover":return bs=au(bs,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return tc.set(s,au(tc.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,nc.set(s,au(nc.get(s)||null,e,t,n,r,i)),!0}return!1}function m2(e){var t=ko(e.target);if(t!==null){var n=ia(t);if(n!==null){if(t=n.tag,t===13){if(t=r2(n),t!==null){e.blockedOn=t,p2(e.priority,function(){d2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ud(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ny(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xy=r,n.target.dispatchEvent(r),xy=null}else return t=Kc(n),t!==null&&M1(t),e.blockedOn=n,!1;t.shift()}return!0}function QE(e,t,n){Ud(e)&&n.delete(t)}function A6(){by=!1,Is!==null&&Ud(Is)&&(Is=null),As!==null&&Ud(As)&&(As=null),bs!==null&&Ud(bs)&&(bs=null),tc.forEach(QE),nc.forEach(QE)}function lu(e,t){e.blockedOn===t&&(e.blockedOn=null,by||(by=!0,Jn.unstable_scheduleCallback(Jn.unstable_NormalPriority,A6)))}function rc(e){function t(i){return lu(i,e)}if(0<ld.length){lu(ld[0],e);for(var n=1;n<ld.length;n++){var r=ld[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Is!==null&&lu(Is,e),As!==null&&lu(As,e),bs!==null&&lu(bs,e),tc.forEach(t),nc.forEach(t),n=0;n<ps.length;n++)r=ps[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ps.length&&(n=ps[0],n.blockedOn===null);)m2(n),n.blockedOn===null&&ps.shift()}var Ga=rs.ReactCurrentBatchConfig,vf=!0;function b6(e,t,n,r){var i=Ge,s=Ga.transition;Ga.transition=null;try{Ge=1,L1(e,t,n,r)}finally{Ge=i,Ga.transition=s}}function N6(e,t,n,r){var i=Ge,s=Ga.transition;Ga.transition=null;try{Ge=4,L1(e,t,n,r)}finally{Ge=i,Ga.transition=s}}function L1(e,t,n,r){if(vf){var i=Ny(e,t,n,r);if(i===null)c0(e,t,r,wf,n),KE(e,r);else if(I6(i,e,t,n,r))r.stopPropagation();else if(KE(e,r),t&4&&-1<D6.indexOf(e)){for(;i!==null;){var s=Kc(i);if(s!==null&&h2(s),s=Ny(e,t,n,r),s===null&&c0(e,t,r,wf,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else c0(e,t,r,null,n)}}var wf=null;function Ny(e,t,n,r){if(wf=null,e=O1(r),e=ko(e),e!==null)if(t=ia(e),t===null)e=null;else if(n=t.tag,n===13){if(e=r2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wf=e,null}function g2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v6()){case R1:return 1;case a2:return 4;case gf:case w6:return 16;case l2:return 536870912;default:return 16}default:return 16}}var Ss=null,$1=null,Bd=null;function y2(){if(Bd)return Bd;var e,t=$1,n=t.length,r,i="value"in Ss?Ss.value:Ss.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Bd=i.slice(e,1<r?1-r:void 0)}function Vd(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ud(){return!0}function XE(){return!1}function nr(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ud:XE,this.isPropagationStopped=XE,this}return _t(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ud)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ud)},persist:function(){},isPersistent:ud}),t}var Nl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},F1=nr(Nl),qc=_t({},Nl,{view:0,detail:0}),O6=nr(qc),t0,n0,uu,Op=_t({},qc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:U1,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==uu&&(uu&&e.type==="mousemove"?(t0=e.screenX-uu.screenX,n0=e.screenY-uu.screenY):n0=t0=0,uu=e),t0)},movementY:function(e){return"movementY"in e?e.movementY:n0}}),JE=nr(Op),R6=_t({},Op,{dataTransfer:0}),P6=nr(R6),M6=_t({},qc,{relatedTarget:0}),r0=nr(M6),L6=_t({},Nl,{animationName:0,elapsedTime:0,pseudoElement:0}),$6=nr(L6),F6=_t({},Nl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),U6=nr(F6),B6=_t({},Nl,{data:0}),ZE=nr(B6),V6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y6(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=j6[e])?!!t[e]:!1}function U1(){return Y6}var W6=_t({},qc,{key:function(e){if(e.key){var t=V6[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vd(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z6[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:U1,charCode:function(e){return e.type==="keypress"?Vd(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vd(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),H6=nr(W6),G6=_t({},Op,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eC=nr(G6),q6=_t({},qc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:U1}),K6=nr(q6),Q6=_t({},Nl,{propertyName:0,elapsedTime:0,pseudoElement:0}),X6=nr(Q6),J6=_t({},Op,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Z6=nr(J6),e$=[9,13,27,32],B1=Yi&&"CompositionEvent"in window,Ru=null;Yi&&"documentMode"in document&&(Ru=document.documentMode);var t$=Yi&&"TextEvent"in window&&!Ru,v2=Yi&&(!B1||Ru&&8<Ru&&11>=Ru),tC=String.fromCharCode(32),nC=!1;function w2(e,t){switch(e){case"keyup":return e$.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ba=!1;function n$(e,t){switch(e){case"compositionend":return _2(t);case"keypress":return t.which!==32?null:(nC=!0,tC);case"textInput":return e=t.data,e===tC&&nC?null:e;default:return null}}function r$(e,t){if(ba)return e==="compositionend"||!B1&&w2(e,t)?(e=y2(),Bd=$1=Ss=null,ba=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return v2&&t.locale!=="ko"?null:t.data;default:return null}}var i$={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rC(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!i$[e.type]:t==="textarea"}function S2(e,t,n,r){JT(r),t=_f(t,"onChange"),0<t.length&&(n=new F1("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pu=null,ic=null;function s$(e){O2(e,0)}function Rp(e){var t=Ra(e);if(WT(t))return e}function o$(e,t){if(e==="change")return t}var E2=!1;if(Yi){var i0;if(Yi){var s0="oninput"in document;if(!s0){var iC=document.createElement("div");iC.setAttribute("oninput","return;"),s0=typeof iC.oninput=="function"}i0=s0}else i0=!1;E2=i0&&(!document.documentMode||9<document.documentMode)}function sC(){Pu&&(Pu.detachEvent("onpropertychange",C2),ic=Pu=null)}function C2(e){if(e.propertyName==="value"&&Rp(ic)){var t=[];S2(t,ic,e,O1(e)),n2(s$,t)}}function a$(e,t,n){e==="focusin"?(sC(),Pu=t,ic=n,Pu.attachEvent("onpropertychange",C2)):e==="focusout"&&sC()}function l$(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rp(ic)}function u$(e,t){if(e==="click")return Rp(t)}function c$(e,t){if(e==="input"||e==="change")return Rp(t)}function h$(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fr=typeof Object.is=="function"?Object.is:h$;function sc(e,t){if(Fr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fy.call(t,i)||!Fr(e[i],t[i]))return!1}return!0}function oC(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function aC(e,t){var n=oC(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oC(n)}}function k2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?k2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function x2(){for(var e=window,t=ff();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ff(e.document)}return t}function V1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function d$(e){var t=x2(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&k2(n.ownerDocument.documentElement,n)){if(r!==null&&V1(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=aC(n,s);var o=aC(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var f$=Yi&&"documentMode"in document&&11>=document.documentMode,Na=null,Oy=null,Mu=null,Ry=!1;function lC(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ry||Na==null||Na!==ff(r)||(r=Na,"selectionStart"in r&&V1(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mu&&sc(Mu,r)||(Mu=r,r=_f(Oy,"onSelect"),0<r.length&&(t=new F1("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Na)))}function cd(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Oa={animationend:cd("Animation","AnimationEnd"),animationiteration:cd("Animation","AnimationIteration"),animationstart:cd("Animation","AnimationStart"),transitionend:cd("Transition","TransitionEnd")},o0={},T2={};Yi&&(T2=document.createElement("div").style,"AnimationEvent"in window||(delete Oa.animationend.animation,delete Oa.animationiteration.animation,delete Oa.animationstart.animation),"TransitionEvent"in window||delete Oa.transitionend.transition);function Pp(e){if(o0[e])return o0[e];if(!Oa[e])return e;var t=Oa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in T2)return o0[e]=t[n];return e}var D2=Pp("animationend"),I2=Pp("animationiteration"),A2=Pp("animationstart"),b2=Pp("transitionend"),N2=new Map,uC="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function no(e,t){N2.set(e,t),ra(t,[e])}for(var a0=0;a0<uC.length;a0++){var l0=uC[a0],p$=l0.toLowerCase(),m$=l0[0].toUpperCase()+l0.slice(1);no(p$,"on"+m$)}no(D2,"onAnimationEnd");no(I2,"onAnimationIteration");no(A2,"onAnimationStart");no("dblclick","onDoubleClick");no("focusin","onFocus");no("focusout","onBlur");no(b2,"onTransitionEnd");ul("onMouseEnter",["mouseout","mouseover"]);ul("onMouseLeave",["mouseout","mouseover"]);ul("onPointerEnter",["pointerout","pointerover"]);ul("onPointerLeave",["pointerout","pointerover"]);ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ra("onBeforeInput",["compositionend","keypress","textInput","paste"]);ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g$=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eu));function cC(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,p6(r,t,void 0,e),e.currentTarget=null}function O2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;cC(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;cC(i,a,c),s=u}}}if(mf)throw e=Iy,mf=!1,Iy=null,e}function st(e,t){var n=t[Fy];n===void 0&&(n=t[Fy]=new Set);var r=e+"__bubble";n.has(r)||(R2(t,e,2,!1),n.add(r))}function u0(e,t,n){var r=0;t&&(r|=4),R2(n,e,r,t)}var hd="_reactListening"+Math.random().toString(36).slice(2);function oc(e){if(!e[hd]){e[hd]=!0,BT.forEach(function(n){n!=="selectionchange"&&(g$.has(n)||u0(n,!1,e),u0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hd]||(t[hd]=!0,u0("selectionchange",!1,t))}}function R2(e,t,n,r){switch(g2(t)){case 1:var i=b6;break;case 4:i=N6;break;default:i=L1}n=i.bind(null,t,n,e),i=void 0,!Dy||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function c0(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ko(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}n2(function(){var c=s,d=O1(n),p=[];e:{var m=N2.get(e);if(m!==void 0){var v=F1,w=e;switch(e){case"keypress":if(Vd(n)===0)break e;case"keydown":case"keyup":v=H6;break;case"focusin":w="focus",v=r0;break;case"focusout":w="blur",v=r0;break;case"beforeblur":case"afterblur":v=r0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=JE;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=P6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=K6;break;case D2:case I2:case A2:v=$6;break;case b2:v=X6;break;case"scroll":v=O6;break;case"wheel":v=Z6;break;case"copy":case"cut":case"paste":v=U6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=eC}var _=(t&4)!==0,x=!_&&e==="scroll",S=_?m!==null?m+"Capture":null:m;_=[];for(var y=c,C;y!==null;){C=y;var T=C.stateNode;if(C.tag===5&&T!==null&&(C=T,S!==null&&(T=ec(y,S),T!=null&&_.push(ac(y,T,C)))),x)break;y=y.return}0<_.length&&(m=new v(m,w,null,n,d),p.push({event:m,listeners:_}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==xy&&(w=n.relatedTarget||n.fromElement)&&(ko(w)||w[Wi]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?ko(w):null,w!==null&&(x=ia(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(_=JE,T="onMouseLeave",S="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(_=eC,T="onPointerLeave",S="onPointerEnter",y="pointer"),x=v==null?m:Ra(v),C=w==null?m:Ra(w),m=new _(T,y+"leave",v,n,d),m.target=x,m.relatedTarget=C,T=null,ko(d)===c&&(_=new _(S,y+"enter",w,n,d),_.target=C,_.relatedTarget=x,T=_),x=T,v&&w)t:{for(_=v,S=w,y=0,C=_;C;C=_a(C))y++;for(C=0,T=S;T;T=_a(T))C++;for(;0<y-C;)_=_a(_),y--;for(;0<C-y;)S=_a(S),C--;for(;y--;){if(_===S||S!==null&&_===S.alternate)break t;_=_a(_),S=_a(S)}_=null}else _=null;v!==null&&hC(p,m,v,_,!1),w!==null&&x!==null&&hC(p,x,w,_,!0)}}e:{if(m=c?Ra(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var A=o$;else if(rC(m))if(E2)A=c$;else{A=l$;var O=a$}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(A=u$);if(A&&(A=A(e,c))){S2(p,A,n,d);break e}O&&O(e,m,c),e==="focusout"&&(O=m._wrapperState)&&O.controlled&&m.type==="number"&&_y(m,"number",m.value)}switch(O=c?Ra(c):window,e){case"focusin":(rC(O)||O.contentEditable==="true")&&(Na=O,Oy=c,Mu=null);break;case"focusout":Mu=Oy=Na=null;break;case"mousedown":Ry=!0;break;case"contextmenu":case"mouseup":case"dragend":Ry=!1,lC(p,n,d);break;case"selectionchange":if(f$)break;case"keydown":case"keyup":lC(p,n,d)}var b;if(B1)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ba?w2(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(v2&&n.locale!=="ko"&&(ba||N!=="onCompositionStart"?N==="onCompositionEnd"&&ba&&(b=y2()):(Ss=d,$1="value"in Ss?Ss.value:Ss.textContent,ba=!0)),O=_f(c,N),0<O.length&&(N=new ZE(N,e,null,n,d),p.push({event:N,listeners:O}),b?N.data=b:(b=_2(n),b!==null&&(N.data=b)))),(b=t$?n$(e,n):r$(e,n))&&(c=_f(c,"onBeforeInput"),0<c.length&&(d=new ZE("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=b))}O2(p,t)})}function ac(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _f(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ec(e,n),s!=null&&r.unshift(ac(e,s,i)),s=ec(e,t),s!=null&&r.push(ac(e,s,i))),e=e.return}return r}function _a(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hC(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ec(n,s),u!=null&&o.unshift(ac(n,u,a))):i||(u=ec(n,s),u!=null&&o.push(ac(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var y$=/\r\n?/g,v$=/\u0000|\uFFFD/g;function dC(e){return(typeof e=="string"?e:""+e).replace(y$,`
`).replace(v$,"")}function dd(e,t,n){if(t=dC(t),dC(e)!==t&&n)throw Error(G(425))}function Sf(){}var Py=null,My=null;function Ly(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $y=typeof setTimeout=="function"?setTimeout:void 0,w$=typeof clearTimeout=="function"?clearTimeout:void 0,fC=typeof Promise=="function"?Promise:void 0,_$=typeof queueMicrotask=="function"?queueMicrotask:typeof fC!="undefined"?function(e){return fC.resolve(null).then(e).catch(S$)}:$y;function S$(e){setTimeout(function(){throw e})}function h0(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),rc(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);rc(t)}function Ns(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pC(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ol=Math.random().toString(36).slice(2),Gr="__reactFiber$"+Ol,lc="__reactProps$"+Ol,Wi="__reactContainer$"+Ol,Fy="__reactEvents$"+Ol,E$="__reactListeners$"+Ol,C$="__reactHandles$"+Ol;function ko(e){var t=e[Gr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wi]||n[Gr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pC(e);e!==null;){if(n=e[Gr])return n;e=pC(e)}return t}e=n,n=e.parentNode}return null}function Kc(e){return e=e[Gr]||e[Wi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ra(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function Mp(e){return e[lc]||null}var Uy=[],Pa=-1;function ro(e){return{current:e}}function ot(e){0>Pa||(e.current=Uy[Pa],Uy[Pa]=null,Pa--)}function et(e,t){Pa++,Uy[Pa]=e.current,e.current=t}var Hs={},Sn=ro(Hs),Vn=ro(!1),Uo=Hs;function cl(e,t){var n=e.type.contextTypes;if(!n)return Hs;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function zn(e){return e=e.childContextTypes,e!=null}function Ef(){ot(Vn),ot(Sn)}function mC(e,t,n){if(Sn.current!==Hs)throw Error(G(168));et(Sn,t),et(Vn,n)}function P2(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(G(108,a6(e)||"Unknown",i));return _t({},n,r)}function Cf(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hs,Uo=Sn.current,et(Sn,e),et(Vn,Vn.current),!0}function gC(e,t,n){var r=e.stateNode;if(!r)throw Error(G(169));n?(e=P2(e,t,Uo),r.__reactInternalMemoizedMergedChildContext=e,ot(Vn),ot(Sn),et(Sn,e)):ot(Vn),et(Vn,n)}var Di=null,Lp=!1,d0=!1;function M2(e){Di===null?Di=[e]:Di.push(e)}function k$(e){Lp=!0,M2(e)}function io(){if(!d0&&Di!==null){d0=!0;var e=0,t=Ge;try{var n=Di;for(Ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Di=null,Lp=!1}catch(i){throw Di!==null&&(Di=Di.slice(e+1)),o2(R1,io),i}finally{Ge=t,d0=!1}}return null}var Ma=[],La=0,kf=null,xf=0,sr=[],or=0,Bo=null,bi=1,Ni="";function _o(e,t){Ma[La++]=xf,Ma[La++]=kf,kf=e,xf=t}function L2(e,t,n){sr[or++]=bi,sr[or++]=Ni,sr[or++]=Bo,Bo=e;var r=bi;e=Ni;var i=32-Lr(r)-1;r&=~(1<<i),n+=1;var s=32-Lr(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bi=1<<32-Lr(t)+i|n<<i|r,Ni=s+e}else bi=1<<s|n<<i|r,Ni=e}function z1(e){e.return!==null&&(_o(e,1),L2(e,1,0))}function j1(e){for(;e===kf;)kf=Ma[--La],Ma[La]=null,xf=Ma[--La],Ma[La]=null;for(;e===Bo;)Bo=sr[--or],sr[or]=null,Ni=sr[--or],sr[or]=null,bi=sr[--or],sr[or]=null}var Qn=null,qn=null,pt=!1,br=null;function $2(e,t){var n=hr(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yC(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qn=e,qn=Ns(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qn=e,qn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bo!==null?{id:bi,overflow:Ni}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=hr(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qn=e,qn=null,!0):!1;default:return!1}}function By(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vy(e){if(pt){var t=qn;if(t){var n=t;if(!yC(e,t)){if(By(e))throw Error(G(418));t=Ns(n.nextSibling);var r=Qn;t&&yC(e,t)?$2(r,n):(e.flags=e.flags&-4097|2,pt=!1,Qn=e)}}else{if(By(e))throw Error(G(418));e.flags=e.flags&-4097|2,pt=!1,Qn=e}}}function vC(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qn=e}function fd(e){if(e!==Qn)return!1;if(!pt)return vC(e),pt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ly(e.type,e.memoizedProps)),t&&(t=qn)){if(By(e))throw F2(),Error(G(418));for(;t;)$2(e,t),t=Ns(t.nextSibling)}if(vC(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qn=Ns(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qn=null}}else qn=Qn?Ns(e.stateNode.nextSibling):null;return!0}function F2(){for(var e=qn;e;)e=Ns(e.nextSibling)}function hl(){qn=Qn=null,pt=!1}function Y1(e){br===null?br=[e]:br.push(e)}var x$=rs.ReactCurrentBatchConfig;function Ir(e,t){if(e&&e.defaultProps){t=_t({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Tf=ro(null),Df=null,$a=null,W1=null;function H1(){W1=$a=Df=null}function G1(e){var t=Tf.current;ot(Tf),e._currentValue=t}function zy(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qa(e,t){Df=e,W1=$a=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Un=!0),e.firstContext=null)}function pr(e){var t=e._currentValue;if(W1!==e)if(e={context:e,memoizedValue:t,next:null},$a===null){if(Df===null)throw Error(G(308));$a=e,Df.dependencies={lanes:0,firstContext:e}}else $a=$a.next=e;return t}var xo=null;function q1(e){xo===null?xo=[e]:xo.push(e)}function U2(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,q1(t)):(n.next=i.next,i.next=n),t.interleaved=n,Hi(e,r)}function Hi(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var fs=!1;function K1(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function B2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Os(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ve&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Hi(e,n)}return i=r.interleaved,i===null?(t.next=t,q1(r)):(t.next=i.next,i.next=t),r.interleaved=t,Hi(e,n)}function zd(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,P1(e,n)}}function wC(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function If(e,t,n,r){var i=e.updateQueue;fs=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,_=a;switch(m=t,v=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){p=w.call(v,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,m=typeof w=="function"?w.call(v,p,m):w,m==null)break e;p=_t({},p,m);break e;case 2:fs=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,u=p):d=d.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);zo|=o,e.lanes=o,e.memoizedState=p}}function _C(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(G(191,i));i.call(r)}}}var V2=new UT.Component().refs;function jy(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:_t({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $p={isMounted:function(e){return(e=e._reactInternals)?ia(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Rn(),i=Ps(e),s=Bi(r,i);s.payload=t,n!=null&&(s.callback=n),t=Os(e,s,i),t!==null&&($r(t,e,i,r),zd(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Rn(),i=Ps(e),s=Bi(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Os(e,s,i),t!==null&&($r(t,e,i,r),zd(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Rn(),r=Ps(e),i=Bi(n,r);i.tag=2,t!=null&&(i.callback=t),t=Os(e,i,r),t!==null&&($r(t,e,r,n),zd(t,e,r))}};function SC(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!sc(n,r)||!sc(i,s):!0}function z2(e,t,n){var r=!1,i=Hs,s=t.contextType;return typeof s=="object"&&s!==null?s=pr(s):(i=zn(t)?Uo:Sn.current,r=t.contextTypes,s=(r=r!=null)?cl(e,i):Hs),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$p,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function EC(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$p.enqueueReplaceState(t,t.state,null)}function Yy(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=V2,K1(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=pr(s):(s=zn(t)?Uo:Sn.current,i.context=cl(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(jy(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&$p.enqueueReplaceState(i,i.state,null),If(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function cu(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===V2&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,e))}return e}function pd(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function CC(e){var t=e._init;return t(e._payload)}function j2(e){function t(S,y){if(e){var C=S.deletions;C===null?(S.deletions=[y],S.flags|=16):C.push(y)}}function n(S,y){if(!e)return null;for(;y!==null;)t(S,y),y=y.sibling;return null}function r(S,y){for(S=new Map;y!==null;)y.key!==null?S.set(y.key,y):S.set(y.index,y),y=y.sibling;return S}function i(S,y){return S=Ms(S,y),S.index=0,S.sibling=null,S}function s(S,y,C){return S.index=C,e?(C=S.alternate,C!==null?(C=C.index,C<y?(S.flags|=2,y):C):(S.flags|=2,y)):(S.flags|=1048576,y)}function o(S){return e&&S.alternate===null&&(S.flags|=2),S}function a(S,y,C,T){return y===null||y.tag!==6?(y=w0(C,S.mode,T),y.return=S,y):(y=i(y,C),y.return=S,y)}function u(S,y,C,T){var A=C.type;return A===Aa?d(S,y,C.props.children,T,C.key):y!==null&&(y.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ds&&CC(A)===y.type)?(T=i(y,C.props),T.ref=cu(S,y,C),T.return=S,T):(T=qd(C.type,C.key,C.props,null,S.mode,T),T.ref=cu(S,y,C),T.return=S,T)}function c(S,y,C,T){return y===null||y.tag!==4||y.stateNode.containerInfo!==C.containerInfo||y.stateNode.implementation!==C.implementation?(y=_0(C,S.mode,T),y.return=S,y):(y=i(y,C.children||[]),y.return=S,y)}function d(S,y,C,T,A){return y===null||y.tag!==7?(y=Ro(C,S.mode,T,A),y.return=S,y):(y=i(y,C),y.return=S,y)}function p(S,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return y=w0(""+y,S.mode,C),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case rd:return C=qd(y.type,y.key,y.props,null,S.mode,C),C.ref=cu(S,null,y),C.return=S,C;case Ia:return y=_0(y,S.mode,C),y.return=S,y;case ds:var T=y._init;return p(S,T(y._payload),C)}if(_u(y)||su(y))return y=Ro(y,S.mode,C,null),y.return=S,y;pd(S,y)}return null}function m(S,y,C,T){var A=y!==null?y.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return A!==null?null:a(S,y,""+C,T);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case rd:return C.key===A?u(S,y,C,T):null;case Ia:return C.key===A?c(S,y,C,T):null;case ds:return A=C._init,m(S,y,A(C._payload),T)}if(_u(C)||su(C))return A!==null?null:d(S,y,C,T,null);pd(S,C)}return null}function v(S,y,C,T,A){if(typeof T=="string"&&T!==""||typeof T=="number")return S=S.get(C)||null,a(y,S,""+T,A);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case rd:return S=S.get(T.key===null?C:T.key)||null,u(y,S,T,A);case Ia:return S=S.get(T.key===null?C:T.key)||null,c(y,S,T,A);case ds:var O=T._init;return v(S,y,C,O(T._payload),A)}if(_u(T)||su(T))return S=S.get(C)||null,d(y,S,T,A,null);pd(y,T)}return null}function w(S,y,C,T){for(var A=null,O=null,b=y,N=y=0,Z=null;b!==null&&N<C.length;N++){b.index>N?(Z=b,b=null):Z=b.sibling;var F=m(S,b,C[N],T);if(F===null){b===null&&(b=Z);break}e&&b&&F.alternate===null&&t(S,b),y=s(F,y,N),O===null?A=F:O.sibling=F,O=F,b=Z}if(N===C.length)return n(S,b),pt&&_o(S,N),A;if(b===null){for(;N<C.length;N++)b=p(S,C[N],T),b!==null&&(y=s(b,y,N),O===null?A=b:O.sibling=b,O=b);return pt&&_o(S,N),A}for(b=r(S,b);N<C.length;N++)Z=v(b,S,N,C[N],T),Z!==null&&(e&&Z.alternate!==null&&b.delete(Z.key===null?N:Z.key),y=s(Z,y,N),O===null?A=Z:O.sibling=Z,O=Z);return e&&b.forEach(function(j){return t(S,j)}),pt&&_o(S,N),A}function _(S,y,C,T){var A=su(C);if(typeof A!="function")throw Error(G(150));if(C=A.call(C),C==null)throw Error(G(151));for(var O=A=null,b=y,N=y=0,Z=null,F=C.next();b!==null&&!F.done;N++,F=C.next()){b.index>N?(Z=b,b=null):Z=b.sibling;var j=m(S,b,F.value,T);if(j===null){b===null&&(b=Z);break}e&&b&&j.alternate===null&&t(S,b),y=s(j,y,N),O===null?A=j:O.sibling=j,O=j,b=Z}if(F.done)return n(S,b),pt&&_o(S,N),A;if(b===null){for(;!F.done;N++,F=C.next())F=p(S,F.value,T),F!==null&&(y=s(F,y,N),O===null?A=F:O.sibling=F,O=F);return pt&&_o(S,N),A}for(b=r(S,b);!F.done;N++,F=C.next())F=v(b,S,N,F.value,T),F!==null&&(e&&F.alternate!==null&&b.delete(F.key===null?N:F.key),y=s(F,y,N),O===null?A=F:O.sibling=F,O=F);return e&&b.forEach(function(J){return t(S,J)}),pt&&_o(S,N),A}function x(S,y,C,T){if(typeof C=="object"&&C!==null&&C.type===Aa&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case rd:e:{for(var A=C.key,O=y;O!==null;){if(O.key===A){if(A=C.type,A===Aa){if(O.tag===7){n(S,O.sibling),y=i(O,C.props.children),y.return=S,S=y;break e}}else if(O.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ds&&CC(A)===O.type){n(S,O.sibling),y=i(O,C.props),y.ref=cu(S,O,C),y.return=S,S=y;break e}n(S,O);break}else t(S,O);O=O.sibling}C.type===Aa?(y=Ro(C.props.children,S.mode,T,C.key),y.return=S,S=y):(T=qd(C.type,C.key,C.props,null,S.mode,T),T.ref=cu(S,y,C),T.return=S,S=T)}return o(S);case Ia:e:{for(O=C.key;y!==null;){if(y.key===O)if(y.tag===4&&y.stateNode.containerInfo===C.containerInfo&&y.stateNode.implementation===C.implementation){n(S,y.sibling),y=i(y,C.children||[]),y.return=S,S=y;break e}else{n(S,y);break}else t(S,y);y=y.sibling}y=_0(C,S.mode,T),y.return=S,S=y}return o(S);case ds:return O=C._init,x(S,y,O(C._payload),T)}if(_u(C))return w(S,y,C,T);if(su(C))return _(S,y,C,T);pd(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,y!==null&&y.tag===6?(n(S,y.sibling),y=i(y,C),y.return=S,S=y):(n(S,y),y=w0(C,S.mode,T),y.return=S,S=y),o(S)):n(S,y)}return x}var dl=j2(!0),Y2=j2(!1),Qc={},ei=ro(Qc),uc=ro(Qc),cc=ro(Qc);function To(e){if(e===Qc)throw Error(G(174));return e}function Q1(e,t){switch(et(cc,t),et(uc,e),et(ei,Qc),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ey(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ey(t,e)}ot(ei),et(ei,t)}function fl(){ot(ei),ot(uc),ot(cc)}function W2(e){To(cc.current);var t=To(ei.current),n=Ey(t,e.type);t!==n&&(et(uc,e),et(ei,n))}function X1(e){uc.current===e&&(ot(ei),ot(uc))}var vt=ro(0);function Af(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var f0=[];function J1(){for(var e=0;e<f0.length;e++)f0[e]._workInProgressVersionPrimary=null;f0.length=0}var jd=rs.ReactCurrentDispatcher,p0=rs.ReactCurrentBatchConfig,Vo=0,wt=null,Bt=null,Gt=null,bf=!1,Lu=!1,hc=0,T$=0;function un(){throw Error(G(321))}function Z1(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fr(e[n],t[n]))return!1;return!0}function ew(e,t,n,r,i,s){if(Vo=s,wt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,jd.current=e===null||e.memoizedState===null?b$:N$,e=n(r,i),Lu){s=0;do{if(Lu=!1,hc=0,25<=s)throw Error(G(301));s+=1,Gt=Bt=null,t.updateQueue=null,jd.current=O$,e=n(r,i)}while(Lu)}if(jd.current=Nf,t=Bt!==null&&Bt.next!==null,Vo=0,Gt=Bt=wt=null,bf=!1,t)throw Error(G(300));return e}function tw(){var e=hc!==0;return hc=0,e}function Hr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?wt.memoizedState=Gt=e:Gt=Gt.next=e,Gt}function mr(){if(Bt===null){var e=wt.alternate;e=e!==null?e.memoizedState:null}else e=Bt.next;var t=Gt===null?wt.memoizedState:Gt.next;if(t!==null)Gt=t,Bt=e;else{if(e===null)throw Error(G(310));Bt=e,e={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Gt===null?wt.memoizedState=Gt=e:Gt=Gt.next=e}return Gt}function dc(e,t){return typeof t=="function"?t(e):t}function m0(e){var t=mr(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=Bt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Vo&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,wt.lanes|=d,zo|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Fr(r,t.memoizedState)||(Un=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,wt.lanes|=s,zo|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function g0(e){var t=mr(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Fr(s,t.memoizedState)||(Un=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function H2(){}function G2(e,t){var n=wt,r=mr(),i=t(),s=!Fr(r.memoizedState,i);if(s&&(r.memoizedState=i,Un=!0),r=r.queue,nw(Q2.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,fc(9,K2.bind(null,n,r,i,t),void 0,null),Kt===null)throw Error(G(349));(Vo&30)!==0||q2(n,t,i)}return i}function q2(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=wt.updateQueue,t===null?(t={lastEffect:null,stores:null},wt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function K2(e,t,n,r){t.value=n,t.getSnapshot=r,X2(t)&&J2(e)}function Q2(e,t,n){return n(function(){X2(t)&&J2(e)})}function X2(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fr(e,n)}catch{return!0}}function J2(e){var t=Hi(e,1);t!==null&&$r(t,e,1,-1)}function kC(e){var t=Hr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dc,lastRenderedState:e},t.queue=e,e=e.dispatch=A$.bind(null,wt,e),[t.memoizedState,e]}function fc(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=wt.updateQueue,t===null?(t={lastEffect:null,stores:null},wt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Z2(){return mr().memoizedState}function Yd(e,t,n,r){var i=Hr();wt.flags|=e,i.memoizedState=fc(1|t,n,void 0,r===void 0?null:r)}function Fp(e,t,n,r){var i=mr();r=r===void 0?null:r;var s=void 0;if(Bt!==null){var o=Bt.memoizedState;if(s=o.destroy,r!==null&&Z1(r,o.deps)){i.memoizedState=fc(t,n,s,r);return}}wt.flags|=e,i.memoizedState=fc(1|t,n,s,r)}function xC(e,t){return Yd(8390656,8,e,t)}function nw(e,t){return Fp(2048,8,e,t)}function eD(e,t){return Fp(4,2,e,t)}function tD(e,t){return Fp(4,4,e,t)}function nD(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rD(e,t,n){return n=n!=null?n.concat([e]):null,Fp(4,4,nD.bind(null,t,e),n)}function rw(){}function iD(e,t){var n=mr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Z1(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sD(e,t){var n=mr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Z1(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function oD(e,t,n){return(Vo&21)===0?(e.baseState&&(e.baseState=!1,Un=!0),e.memoizedState=n):(Fr(n,t)||(n=u2(),wt.lanes|=n,zo|=n,e.baseState=!0),t)}function D$(e,t){var n=Ge;Ge=n!==0&&4>n?n:4,e(!0);var r=p0.transition;p0.transition={};try{e(!1),t()}finally{Ge=n,p0.transition=r}}function aD(){return mr().memoizedState}function I$(e,t,n){var r=Ps(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lD(e))uD(t,n);else if(n=U2(e,t,n,r),n!==null){var i=Rn();$r(n,e,r,i),cD(n,t,r)}}function A$(e,t,n){var r=Ps(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lD(e))uD(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Fr(a,o)){var u=t.interleaved;u===null?(i.next=i,q1(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=U2(e,t,i,r),n!==null&&(i=Rn(),$r(n,e,r,i),cD(n,t,r))}}function lD(e){var t=e.alternate;return e===wt||t!==null&&t===wt}function uD(e,t){Lu=bf=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cD(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,P1(e,n)}}var Nf={readContext:pr,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},b$={readContext:pr,useCallback:function(e,t){return Hr().memoizedState=[e,t===void 0?null:t],e},useContext:pr,useEffect:xC,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Yd(4194308,4,nD.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yd(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yd(4,2,e,t)},useMemo:function(e,t){var n=Hr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Hr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=I$.bind(null,wt,e),[r.memoizedState,e]},useRef:function(e){var t=Hr();return e={current:e},t.memoizedState=e},useState:kC,useDebugValue:rw,useDeferredValue:function(e){return Hr().memoizedState=e},useTransition:function(){var e=kC(!1),t=e[0];return e=D$.bind(null,e[1]),Hr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=wt,i=Hr();if(pt){if(n===void 0)throw Error(G(407));n=n()}else{if(n=t(),Kt===null)throw Error(G(349));(Vo&30)!==0||q2(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,xC(Q2.bind(null,r,s,e),[e]),r.flags|=2048,fc(9,K2.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Hr(),t=Kt.identifierPrefix;if(pt){var n=Ni,r=bi;n=(r&~(1<<32-Lr(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hc++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=T$++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},N$={readContext:pr,useCallback:iD,useContext:pr,useEffect:nw,useImperativeHandle:rD,useInsertionEffect:eD,useLayoutEffect:tD,useMemo:sD,useReducer:m0,useRef:Z2,useState:function(){return m0(dc)},useDebugValue:rw,useDeferredValue:function(e){var t=mr();return oD(t,Bt.memoizedState,e)},useTransition:function(){var e=m0(dc)[0],t=mr().memoizedState;return[e,t]},useMutableSource:H2,useSyncExternalStore:G2,useId:aD,unstable_isNewReconciler:!1},O$={readContext:pr,useCallback:iD,useContext:pr,useEffect:nw,useImperativeHandle:rD,useInsertionEffect:eD,useLayoutEffect:tD,useMemo:sD,useReducer:g0,useRef:Z2,useState:function(){return g0(dc)},useDebugValue:rw,useDeferredValue:function(e){var t=mr();return Bt===null?t.memoizedState=e:oD(t,Bt.memoizedState,e)},useTransition:function(){var e=g0(dc)[0],t=mr().memoizedState;return[e,t]},useMutableSource:H2,useSyncExternalStore:G2,useId:aD,unstable_isNewReconciler:!1};function pl(e,t){try{var n="",r=t;do n+=o6(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function y0(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Wy(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var R$=typeof WeakMap=="function"?WeakMap:Map;function hD(e,t,n){n=Bi(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Rf||(Rf=!0,tv=r),Wy(e,t)},n}function dD(e,t,n){n=Bi(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Wy(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wy(e,t),typeof r!="function"&&(Rs===null?Rs=new Set([this]):Rs.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function TC(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new R$;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=G$.bind(null,e,t,n),t.then(e,e))}function DC(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function IC(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bi(-1,1),t.tag=2,Os(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var P$=rs.ReactCurrentOwner,Un=!1;function bn(e,t,n,r){t.child=e===null?Y2(t,null,n,r):dl(t,e.child,n,r)}function AC(e,t,n,r,i){n=n.render;var s=t.ref;return qa(t,i),r=ew(e,t,n,r,s,i),n=tw(),e!==null&&!Un?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gi(e,t,i)):(pt&&n&&z1(t),t.flags|=1,bn(e,t,r,i),t.child)}function bC(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!hw(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,fD(e,t,s,r,i)):(e=qd(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:sc,n(o,r)&&e.ref===t.ref)return Gi(e,t,i)}return t.flags|=1,e=Ms(s,r),e.ref=t.ref,e.return=t,t.child=e}function fD(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(sc(s,r)&&e.ref===t.ref)if(Un=!1,t.pendingProps=r=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Un=!0);else return t.lanes=e.lanes,Gi(e,t,i)}return Hy(e,t,n,r,i)}function pD(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Ua,Hn),Hn|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,et(Ua,Hn),Hn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,et(Ua,Hn),Hn|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,et(Ua,Hn),Hn|=r;return bn(e,t,i,n),t.child}function mD(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hy(e,t,n,r,i){var s=zn(n)?Uo:Sn.current;return s=cl(t,s),qa(t,i),n=ew(e,t,n,r,s,i),r=tw(),e!==null&&!Un?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gi(e,t,i)):(pt&&r&&z1(t),t.flags|=1,bn(e,t,n,i),t.child)}function NC(e,t,n,r,i){if(zn(n)){var s=!0;Cf(t)}else s=!1;if(qa(t,i),t.stateNode===null)Wd(e,t),z2(t,n,r),Yy(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=pr(c):(c=zn(n)?Uo:Sn.current,c=cl(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&EC(t,o,r,c),fs=!1;var m=t.memoizedState;o.state=m,If(t,r,o,i),u=t.memoizedState,a!==r||m!==u||Vn.current||fs?(typeof d=="function"&&(jy(t,n,d,r),u=t.memoizedState),(a=fs||SC(t,n,a,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,B2(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ir(t.type,a),o.props=c,p=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=pr(u):(u=zn(n)?Uo:Sn.current,u=cl(t,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==u)&&EC(t,o,r,u),fs=!1,m=t.memoizedState,o.state=m,If(t,r,o,i);var w=t.memoizedState;a!==p||m!==w||Vn.current||fs?(typeof v=="function"&&(jy(t,n,v,r),w=t.memoizedState),(c=fs||SC(t,n,c,r,m,w,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Gy(e,t,n,r,s,i)}function Gy(e,t,n,r,i,s){mD(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&gC(t,n,!1),Gi(e,t,s);r=t.stateNode,P$.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=dl(t,e.child,null,s),t.child=dl(t,null,a,s)):bn(e,t,a,s),t.memoizedState=r.state,i&&gC(t,n,!0),t.child}function gD(e){var t=e.stateNode;t.pendingContext?mC(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mC(e,t.context,!1),Q1(e,t.containerInfo)}function OC(e,t,n,r,i){return hl(),Y1(i),t.flags|=256,bn(e,t,n,r),t.child}var qy={dehydrated:null,treeContext:null,retryLane:0};function Ky(e){return{baseLanes:e,cachePool:null,transitions:null}}function yD(e,t,n){var r=t.pendingProps,i=vt.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),et(vt,i&1),e===null)return Vy(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Vp(o,r,0,null),e=Ro(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ky(n),t.memoizedState=qy,e):iw(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return M$(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ms(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ms(a,s):(s=Ro(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Ky(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=qy,r}return s=e.child,e=s.sibling,r=Ms(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function iw(e,t){return t=Vp({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function md(e,t,n,r){return r!==null&&Y1(r),dl(t,e.child,null,n),e=iw(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function M$(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=y0(Error(G(422))),md(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Vp({mode:"visible",children:r.children},i,0,null),s=Ro(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&dl(t,e.child,null,o),t.child.memoizedState=Ky(o),t.memoizedState=qy,s);if((t.mode&1)===0)return md(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(G(419)),r=y0(s,r,void 0),md(e,t,o,r)}if(a=(o&e.childLanes)!==0,Un||a){if(r=Kt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Hi(e,i),$r(r,e,i,-1))}return cw(),r=y0(Error(G(421))),md(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=q$.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,qn=Ns(i.nextSibling),Qn=t,pt=!0,br=null,e!==null&&(sr[or++]=bi,sr[or++]=Ni,sr[or++]=Bo,bi=e.id,Ni=e.overflow,Bo=t),t=iw(t,r.children),t.flags|=4096,t)}function RC(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zy(e.return,t,n)}function v0(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vD(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(bn(e,t,r.children,n),r=vt.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&RC(e,n,t);else if(e.tag===19)RC(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(et(vt,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Af(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),v0(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Af(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}v0(t,!0,n,null,s);break;case"together":v0(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wd(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zo|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,n=Ms(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ms(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function L$(e,t,n){switch(t.tag){case 3:gD(t),hl();break;case 5:W2(t);break;case 1:zn(t.type)&&Cf(t);break;case 4:Q1(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;et(Tf,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(et(vt,vt.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?yD(e,t,n):(et(vt,vt.current&1),e=Gi(e,t,n),e!==null?e.sibling:null);et(vt,vt.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return vD(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),et(vt,vt.current),r)break;return null;case 22:case 23:return t.lanes=0,pD(e,t,n)}return Gi(e,t,n)}var wD,Qy,_D,SD;wD=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qy=function(){};_D=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,To(ei.current);var s=null;switch(n){case"input":i=vy(e,i),r=vy(e,r),s=[];break;case"select":i=_t({},i,{value:void 0}),r=_t({},r,{value:void 0}),s=[];break;case"textarea":i=Sy(e,i),r=Sy(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Sf)}Cy(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ju.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ju.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&st("scroll",e),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};SD=function(e,t,n,r){n!==r&&(t.flags|=4)};function hu(e,t){if(!pt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function cn(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $$(e,t,n){var r=t.pendingProps;switch(j1(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(t),null;case 1:return zn(t.type)&&Ef(),cn(t),null;case 3:return r=t.stateNode,fl(),ot(Vn),ot(Sn),J1(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fd(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,br!==null&&(iv(br),br=null))),Qy(e,t),cn(t),null;case 5:X1(t);var i=To(cc.current);if(n=t.type,e!==null&&t.stateNode!=null)_D(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(G(166));return cn(t),null}if(e=To(ei.current),fd(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Gr]=t,r[lc]=s,e=(t.mode&1)!==0,n){case"dialog":st("cancel",r),st("close",r);break;case"iframe":case"object":case"embed":st("load",r);break;case"video":case"audio":for(i=0;i<Eu.length;i++)st(Eu[i],r);break;case"source":st("error",r);break;case"img":case"image":case"link":st("error",r),st("load",r);break;case"details":st("toggle",r);break;case"input":zE(r,s),st("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},st("invalid",r);break;case"textarea":YE(r,s),st("invalid",r)}Cy(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&dd(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&dd(r.textContent,a,e),i=["children",""+a]):Ju.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",r)}switch(n){case"input":id(r),jE(r,s,!0);break;case"textarea":id(r),WE(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sf)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qT(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Gr]=t,e[lc]=r,wD(e,t,!1,!1),t.stateNode=e;e:{switch(o=ky(n,r),n){case"dialog":st("cancel",e),st("close",e),i=r;break;case"iframe":case"object":case"embed":st("load",e),i=r;break;case"video":case"audio":for(i=0;i<Eu.length;i++)st(Eu[i],e);i=r;break;case"source":st("error",e),i=r;break;case"img":case"image":case"link":st("error",e),st("load",e),i=r;break;case"details":st("toggle",e),i=r;break;case"input":zE(e,r),i=vy(e,r),st("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=_t({},r,{value:void 0}),st("invalid",e);break;case"textarea":YE(e,r),i=Sy(e,r),st("invalid",e);break;default:i=r}Cy(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?XT(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&KT(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zu(e,u):typeof u=="number"&&Zu(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ju.hasOwnProperty(s)?u!=null&&s==="onScroll"&&st("scroll",e):u!=null&&I1(e,s,u,o))}switch(n){case"input":id(e),jE(e,r,!1);break;case"textarea":id(e),WE(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ws(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ya(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ya(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Sf)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return cn(t),null;case 6:if(e&&t.stateNode!=null)SD(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(G(166));if(n=To(cc.current),To(ei.current),fd(t)){if(r=t.stateNode,n=t.memoizedProps,r[Gr]=t,(s=r.nodeValue!==n)&&(e=Qn,e!==null))switch(e.tag){case 3:dd(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dd(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gr]=t,t.stateNode=r}return cn(t),null;case 13:if(ot(vt),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pt&&qn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)F2(),hl(),t.flags|=98560,s=!1;else if(s=fd(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(G(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(G(317));s[Gr]=t}else hl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;cn(t),s=!1}else br!==null&&(iv(br),br=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(vt.current&1)!==0?zt===0&&(zt=3):cw())),t.updateQueue!==null&&(t.flags|=4),cn(t),null);case 4:return fl(),Qy(e,t),e===null&&oc(t.stateNode.containerInfo),cn(t),null;case 10:return G1(t.type._context),cn(t),null;case 17:return zn(t.type)&&Ef(),cn(t),null;case 19:if(ot(vt),s=t.memoizedState,s===null)return cn(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)hu(s,!1);else{if(zt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Af(e),o!==null){for(t.flags|=128,hu(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return et(vt,vt.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ot()>ml&&(t.flags|=128,r=!0,hu(s,!1),t.lanes=4194304)}else{if(!r)if(e=Af(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hu(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return cn(t),null}else 2*Ot()-s.renderingStartTime>ml&&n!==1073741824&&(t.flags|=128,r=!0,hu(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ot(),t.sibling=null,n=vt.current,et(vt,r?n&1|2:n&1),t):(cn(t),null);case 22:case 23:return uw(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Hn&1073741824)!==0&&(cn(t),t.subtreeFlags&6&&(t.flags|=8192)):cn(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function F$(e,t){switch(j1(t),t.tag){case 1:return zn(t.type)&&Ef(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fl(),ot(Vn),ot(Sn),J1(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return X1(t),null;case 13:if(ot(vt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));hl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ot(vt),null;case 4:return fl(),null;case 10:return G1(t.type._context),null;case 22:case 23:return uw(),null;case 24:return null;default:return null}}var gd=!1,pn=!1,U$=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Fa(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ct(e,t,r)}else n.current=null}function Xy(e,t,n){try{n()}catch(r){Ct(e,t,r)}}var PC=!1;function B$(e,t){if(Py=vf,e=x2(),V1(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,p=e,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===e)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(My={focusedElem:e,selectionRange:n},vf=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var w=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,x=w.memoizedState,S=t.stateNode,y=S.getSnapshotBeforeUpdate(t.elementType===t.type?_:Ir(t.type,_),x);S.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(T){Ct(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return w=PC,PC=!1,w}function $u(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xy(t,n,s)}i=i.next}while(i!==r)}}function Up(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Jy(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ED(e){var t=e.alternate;t!==null&&(e.alternate=null,ED(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gr],delete t[lc],delete t[Fy],delete t[E$],delete t[C$])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function CD(e){return e.tag===5||e.tag===3||e.tag===4}function MC(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||CD(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zy(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Sf));else if(r!==4&&(e=e.child,e!==null))for(Zy(e,t,n),e=e.sibling;e!==null;)Zy(e,t,n),e=e.sibling}function ev(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ev(e,t,n),e=e.sibling;e!==null;)ev(e,t,n),e=e.sibling}var en=null,Ar=!1;function cs(e,t,n){for(n=n.child;n!==null;)kD(e,t,n),n=n.sibling}function kD(e,t,n){if(Zr&&typeof Zr.onCommitFiberUnmount=="function")try{Zr.onCommitFiberUnmount(Np,n)}catch{}switch(n.tag){case 5:pn||Fa(n,t);case 6:var r=en,i=Ar;en=null,cs(e,t,n),en=r,Ar=i,en!==null&&(Ar?(e=en,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):en.removeChild(n.stateNode));break;case 18:en!==null&&(Ar?(e=en,n=n.stateNode,e.nodeType===8?h0(e.parentNode,n):e.nodeType===1&&h0(e,n),rc(e)):h0(en,n.stateNode));break;case 4:r=en,i=Ar,en=n.stateNode.containerInfo,Ar=!0,cs(e,t,n),en=r,Ar=i;break;case 0:case 11:case 14:case 15:if(!pn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Xy(n,t,o),i=i.next}while(i!==r)}cs(e,t,n);break;case 1:if(!pn&&(Fa(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ct(n,t,a)}cs(e,t,n);break;case 21:cs(e,t,n);break;case 22:n.mode&1?(pn=(r=pn)||n.memoizedState!==null,cs(e,t,n),pn=r):cs(e,t,n);break;default:cs(e,t,n)}}function LC(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new U$),t.forEach(function(r){var i=K$.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dr(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:en=a.stateNode,Ar=!1;break e;case 3:en=a.stateNode.containerInfo,Ar=!0;break e;case 4:en=a.stateNode.containerInfo,Ar=!0;break e}a=a.return}if(en===null)throw Error(G(160));kD(s,o,i),en=null,Ar=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ct(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xD(t,e),t=t.sibling}function xD(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Dr(t,e),Wr(e),r&4){try{$u(3,e,e.return),Up(3,e)}catch(_){Ct(e,e.return,_)}try{$u(5,e,e.return)}catch(_){Ct(e,e.return,_)}}break;case 1:Dr(t,e),Wr(e),r&512&&n!==null&&Fa(n,n.return);break;case 5:if(Dr(t,e),Wr(e),r&512&&n!==null&&Fa(n,n.return),e.flags&32){var i=e.stateNode;try{Zu(i,"")}catch(_){Ct(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&HT(i,s),ky(a,o);var c=ky(a,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?XT(i,p):d==="dangerouslySetInnerHTML"?KT(i,p):d==="children"?Zu(i,p):I1(i,d,p,c)}switch(a){case"input":wy(i,s);break;case"textarea":GT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Ya(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ya(i,!!s.multiple,s.defaultValue,!0):Ya(i,!!s.multiple,s.multiple?[]:"",!1))}i[lc]=s}catch(_){Ct(e,e.return,_)}}break;case 6:if(Dr(t,e),Wr(e),r&4){if(e.stateNode===null)throw Error(G(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){Ct(e,e.return,_)}}break;case 3:if(Dr(t,e),Wr(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rc(t.containerInfo)}catch(_){Ct(e,e.return,_)}break;case 4:Dr(t,e),Wr(e);break;case 13:Dr(t,e),Wr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(aw=Ot())),r&4&&LC(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(pn=(c=pn)||d,Dr(t,e),pn=c):Dr(t,e),Wr(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&(e.mode&1)!==0)for(ae=e,d=e.child;d!==null;){for(p=ae=d;ae!==null;){switch(m=ae,v=m.child,m.tag){case 0:case 11:case 14:case 15:$u(4,m,m.return);break;case 1:Fa(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){Ct(r,n,_)}}break;case 5:Fa(m,m.return);break;case 22:if(m.memoizedState!==null){FC(p);continue}}v!==null?(v.return=m,ae=v):FC(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=QT("display",o))}catch(_){Ct(e,e.return,_)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(_){Ct(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Dr(t,e),Wr(e),r&4&&LC(e);break;case 21:break;default:Dr(t,e),Wr(e)}}function Wr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(CD(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zu(i,""),r.flags&=-33);var s=MC(e);ev(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=MC(e);Zy(e,a,o);break;default:throw Error(G(161))}}catch(u){Ct(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function V$(e,t,n){ae=e,TD(e)}function TD(e,t,n){for(var r=(e.mode&1)!==0;ae!==null;){var i=ae,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gd;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||pn;a=gd;var c=pn;if(gd=o,(pn=u)&&!c)for(ae=i;ae!==null;)o=ae,u=o.child,o.tag===22&&o.memoizedState!==null?UC(i):u!==null?(u.return=o,ae=u):UC(i);for(;s!==null;)ae=s,TD(s),s=s.sibling;ae=i,gd=a,pn=c}$C(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,ae=s):$C(e)}}function $C(e){for(;ae!==null;){var t=ae;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:pn||Up(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pn)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ir(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&_C(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_C(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&rc(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}pn||t.flags&512&&Jy(t)}catch(m){Ct(t,t.return,m)}}if(t===e){ae=null;break}if(n=t.sibling,n!==null){n.return=t.return,ae=n;break}ae=t.return}}function FC(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ae=n;break}ae=t.return}}function UC(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Up(4,t)}catch(u){Ct(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Ct(t,i,u)}}var s=t.return;try{Jy(t)}catch(u){Ct(t,s,u)}break;case 5:var o=t.return;try{Jy(t)}catch(u){Ct(t,o,u)}}}catch(u){Ct(t,t.return,u)}if(t===e){ae=null;break}var a=t.sibling;if(a!==null){a.return=t.return,ae=a;break}ae=t.return}}var z$=Math.ceil,Of=rs.ReactCurrentDispatcher,sw=rs.ReactCurrentOwner,fr=rs.ReactCurrentBatchConfig,Ve=0,Kt=null,Mt=null,rn=0,Hn=0,Ua=ro(0),zt=0,pc=null,zo=0,Bp=0,ow=0,Fu=null,Fn=null,aw=0,ml=1/0,xi=null,Rf=!1,tv=null,Rs=null,yd=!1,Es=null,Pf=0,Uu=0,nv=null,Hd=-1,Gd=0;function Rn(){return(Ve&6)!==0?Ot():Hd!==-1?Hd:Hd=Ot()}function Ps(e){return(e.mode&1)===0?1:(Ve&2)!==0&&rn!==0?rn&-rn:x$.transition!==null?(Gd===0&&(Gd=u2()),Gd):(e=Ge,e!==0||(e=window.event,e=e===void 0?16:g2(e.type)),e)}function $r(e,t,n,r){if(50<Uu)throw Uu=0,nv=null,Error(G(185));Gc(e,n,r),((Ve&2)===0||e!==Kt)&&(e===Kt&&((Ve&2)===0&&(Bp|=n),zt===4&&ms(e,rn)),jn(e,r),n===1&&Ve===0&&(t.mode&1)===0&&(ml=Ot()+500,Lp&&io()))}function jn(e,t){var n=e.callbackNode;x6(e,t);var r=yf(e,e===Kt?rn:0);if(r===0)n!==null&&qE(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qE(n),t===1)e.tag===0?k$(BC.bind(null,e)):M2(BC.bind(null,e)),_$(function(){(Ve&6)===0&&io()}),n=null;else{switch(c2(r)){case 1:n=R1;break;case 4:n=a2;break;case 16:n=gf;break;case 536870912:n=l2;break;default:n=gf}n=PD(n,DD.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function DD(e,t){if(Hd=-1,Gd=0,(Ve&6)!==0)throw Error(G(327));var n=e.callbackNode;if(Ka()&&e.callbackNode!==n)return null;var r=yf(e,e===Kt?rn:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Mf(e,r);else{t=r;var i=Ve;Ve|=2;var s=AD();(Kt!==e||rn!==t)&&(xi=null,ml=Ot()+500,Oo(e,t));do try{W$();break}catch(a){ID(e,a)}while(1);H1(),Of.current=s,Ve=i,Mt!==null?t=0:(Kt=null,rn=0,t=zt)}if(t!==0){if(t===2&&(i=Ay(e),i!==0&&(r=i,t=rv(e,i))),t===1)throw n=pc,Oo(e,0),ms(e,r),jn(e,Ot()),n;if(t===6)ms(e,r);else{if(i=e.current.alternate,(r&30)===0&&!j$(i)&&(t=Mf(e,r),t===2&&(s=Ay(e),s!==0&&(r=s,t=rv(e,s))),t===1))throw n=pc,Oo(e,0),ms(e,r),jn(e,Ot()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(G(345));case 2:So(e,Fn,xi);break;case 3:if(ms(e,r),(r&130023424)===r&&(t=aw+500-Ot(),10<t)){if(yf(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Rn(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$y(So.bind(null,e,Fn,xi),t);break}So(e,Fn,xi);break;case 4:if(ms(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Lr(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*z$(r/1960))-r,10<r){e.timeoutHandle=$y(So.bind(null,e,Fn,xi),r);break}So(e,Fn,xi);break;case 5:So(e,Fn,xi);break;default:throw Error(G(329))}}}return jn(e,Ot()),e.callbackNode===n?DD.bind(null,e):null}function rv(e,t){var n=Fu;return e.current.memoizedState.isDehydrated&&(Oo(e,t).flags|=256),e=Mf(e,t),e!==2&&(t=Fn,Fn=n,t!==null&&iv(t)),e}function iv(e){Fn===null?Fn=e:Fn.push.apply(Fn,e)}function j$(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Fr(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ms(e,t){for(t&=~ow,t&=~Bp,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lr(t),r=1<<n;e[n]=-1,t&=~r}}function BC(e){if((Ve&6)!==0)throw Error(G(327));Ka();var t=yf(e,0);if((t&1)===0)return jn(e,Ot()),null;var n=Mf(e,t);if(e.tag!==0&&n===2){var r=Ay(e);r!==0&&(t=r,n=rv(e,r))}if(n===1)throw n=pc,Oo(e,0),ms(e,t),jn(e,Ot()),n;if(n===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,So(e,Fn,xi),jn(e,Ot()),null}function lw(e,t){var n=Ve;Ve|=1;try{return e(t)}finally{Ve=n,Ve===0&&(ml=Ot()+500,Lp&&io())}}function jo(e){Es!==null&&Es.tag===0&&(Ve&6)===0&&Ka();var t=Ve;Ve|=1;var n=fr.transition,r=Ge;try{if(fr.transition=null,Ge=1,e)return e()}finally{Ge=r,fr.transition=n,Ve=t,(Ve&6)===0&&io()}}function uw(){Hn=Ua.current,ot(Ua)}function Oo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,w$(n)),Mt!==null)for(n=Mt.return;n!==null;){var r=n;switch(j1(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ef();break;case 3:fl(),ot(Vn),ot(Sn),J1();break;case 5:X1(r);break;case 4:fl();break;case 13:ot(vt);break;case 19:ot(vt);break;case 10:G1(r.type._context);break;case 22:case 23:uw()}n=n.return}if(Kt=e,Mt=e=Ms(e.current,null),rn=Hn=t,zt=0,pc=null,ow=Bp=zo=0,Fn=Fu=null,xo!==null){for(t=0;t<xo.length;t++)if(n=xo[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xo=null}return e}function ID(e,t){do{var n=Mt;try{if(H1(),jd.current=Nf,bf){for(var r=wt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bf=!1}if(Vo=0,Gt=Bt=wt=null,Lu=!1,hc=0,sw.current=null,n===null||n.return===null){zt=1,pc=t,Mt=null;break}e:{var s=e,o=n.return,a=n,u=t;if(t=rn,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,p=d.tag;if((d.mode&1)===0&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=DC(o);if(v!==null){v.flags&=-257,IC(v,o,a,s,t),v.mode&1&&TC(s,c,t),t=v,u=c;var w=t.updateQueue;if(w===null){var _=new Set;_.add(u),t.updateQueue=_}else w.add(u);break e}else{if((t&1)===0){TC(s,c,t),cw();break e}u=Error(G(426))}}else if(pt&&a.mode&1){var x=DC(o);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),IC(x,o,a,s,t),Y1(pl(u,a));break e}}s=u=pl(u,a),zt!==4&&(zt=2),Fu===null?Fu=[s]:Fu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var S=hD(s,u,t);wC(s,S);break e;case 1:a=u;var y=s.type,C=s.stateNode;if((s.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Rs===null||!Rs.has(C)))){s.flags|=65536,t&=-t,s.lanes|=t;var T=dD(s,a,t);wC(s,T);break e}}s=s.return}while(s!==null)}ND(n)}catch(A){t=A,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(1)}function AD(){var e=Of.current;return Of.current=Nf,e===null?Nf:e}function cw(){(zt===0||zt===3||zt===2)&&(zt=4),Kt===null||(zo&268435455)===0&&(Bp&268435455)===0||ms(Kt,rn)}function Mf(e,t){var n=Ve;Ve|=2;var r=AD();(Kt!==e||rn!==t)&&(xi=null,Oo(e,t));do try{Y$();break}catch(i){ID(e,i)}while(1);if(H1(),Ve=n,Of.current=r,Mt!==null)throw Error(G(261));return Kt=null,rn=0,zt}function Y$(){for(;Mt!==null;)bD(Mt)}function W$(){for(;Mt!==null&&!g6();)bD(Mt)}function bD(e){var t=RD(e.alternate,e,Hn);e.memoizedProps=e.pendingProps,t===null?ND(e):Mt=t,sw.current=null}function ND(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=$$(n,t,Hn),n!==null){Mt=n;return}}else{if(n=F$(n,t),n!==null){n.flags&=32767,Mt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{zt=6,Mt=null;return}}if(t=t.sibling,t!==null){Mt=t;return}Mt=t=e}while(t!==null);zt===0&&(zt=5)}function So(e,t,n){var r=Ge,i=fr.transition;try{fr.transition=null,Ge=1,H$(e,t,n,r)}finally{fr.transition=i,Ge=r}return null}function H$(e,t,n,r){do Ka();while(Es!==null);if((Ve&6)!==0)throw Error(G(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(T6(e,s),e===Kt&&(Mt=Kt=null,rn=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yd||(yd=!0,PD(gf,function(){return Ka(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=fr.transition,fr.transition=null;var o=Ge;Ge=1;var a=Ve;Ve|=4,sw.current=null,B$(e,n),xD(n,e),d$(My),vf=!!Py,My=Py=null,e.current=n,V$(n),y6(),Ve=a,Ge=o,fr.transition=s}else e.current=n;if(yd&&(yd=!1,Es=e,Pf=i),s=e.pendingLanes,s===0&&(Rs=null),_6(n.stateNode),jn(e,Ot()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rf)throw Rf=!1,e=tv,tv=null,e;return(Pf&1)!==0&&e.tag!==0&&Ka(),s=e.pendingLanes,(s&1)!==0?e===nv?Uu++:(Uu=0,nv=e):Uu=0,io(),null}function Ka(){if(Es!==null){var e=c2(Pf),t=fr.transition,n=Ge;try{if(fr.transition=null,Ge=16>e?16:e,Es===null)var r=!1;else{if(e=Es,Es=null,Pf=0,(Ve&6)!==0)throw Error(G(331));var i=Ve;for(Ve|=4,ae=e.current;ae!==null;){var s=ae,o=s.child;if((ae.flags&16)!==0){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(ae=c;ae!==null;){var d=ae;switch(d.tag){case 0:case 11:case 15:$u(8,d,s)}var p=d.child;if(p!==null)p.return=d,ae=p;else for(;ae!==null;){d=ae;var m=d.sibling,v=d.return;if(ED(d),d===c){ae=null;break}if(m!==null){m.return=v,ae=m;break}ae=v}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}ae=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,ae=o;else e:for(;ae!==null;){if(s=ae,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:$u(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,ae=S;break e}ae=s.return}}var y=e.current;for(ae=y;ae!==null;){o=ae;var C=o.child;if((o.subtreeFlags&2064)!==0&&C!==null)C.return=o,ae=C;else e:for(o=y;ae!==null;){if(a=ae,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Up(9,a)}}catch(A){Ct(a,a.return,A)}if(a===o){ae=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,ae=T;break e}ae=a.return}}if(Ve=i,io(),Zr&&typeof Zr.onPostCommitFiberRoot=="function")try{Zr.onPostCommitFiberRoot(Np,e)}catch{}r=!0}return r}finally{Ge=n,fr.transition=t}}return!1}function VC(e,t,n){t=pl(n,t),t=hD(e,t,1),e=Os(e,t,1),t=Rn(),e!==null&&(Gc(e,1,t),jn(e,t))}function Ct(e,t,n){if(e.tag===3)VC(e,e,n);else for(;t!==null;){if(t.tag===3){VC(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rs===null||!Rs.has(r))){e=pl(n,e),e=dD(t,e,1),t=Os(t,e,1),e=Rn(),t!==null&&(Gc(t,1,e),jn(t,e));break}}t=t.return}}function G$(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Rn(),e.pingedLanes|=e.suspendedLanes&n,Kt===e&&(rn&n)===n&&(zt===4||zt===3&&(rn&130023424)===rn&&500>Ot()-aw?Oo(e,0):ow|=n),jn(e,t)}function OD(e,t){t===0&&((e.mode&1)===0?t=1:(t=ad,ad<<=1,(ad&130023424)===0&&(ad=4194304)));var n=Rn();e=Hi(e,t),e!==null&&(Gc(e,t,n),jn(e,n))}function q$(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),OD(e,n)}function K$(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(t),OD(e,n)}var RD;RD=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Vn.current)Un=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Un=!1,L$(e,t,n);Un=(e.flags&131072)!==0}else Un=!1,pt&&(t.flags&1048576)!==0&&L2(t,xf,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wd(e,t),e=t.pendingProps;var i=cl(t,Sn.current);qa(t,n),i=ew(null,t,r,e,i,n);var s=tw();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zn(r)?(s=!0,Cf(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,K1(t),i.updater=$p,t.stateNode=i,i._reactInternals=t,Yy(t,r,e,n),t=Gy(null,t,r,!0,s,n)):(t.tag=0,pt&&s&&z1(t),bn(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wd(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=X$(r),e=Ir(r,e),i){case 0:t=Hy(null,t,r,e,n);break e;case 1:t=NC(null,t,r,e,n);break e;case 11:t=AC(null,t,r,e,n);break e;case 14:t=bC(null,t,r,Ir(r.type,e),n);break e}throw Error(G(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ir(r,i),Hy(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ir(r,i),NC(e,t,r,i,n);case 3:e:{if(gD(t),e===null)throw Error(G(387));r=t.pendingProps,s=t.memoizedState,i=s.element,B2(e,t),If(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=pl(Error(G(423)),t),t=OC(e,t,r,n,i);break e}else if(r!==i){i=pl(Error(G(424)),t),t=OC(e,t,r,n,i);break e}else for(qn=Ns(t.stateNode.containerInfo.firstChild),Qn=t,pt=!0,br=null,n=Y2(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hl(),r===i){t=Gi(e,t,n);break e}bn(e,t,r,n)}t=t.child}return t;case 5:return W2(t),e===null&&Vy(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Ly(r,i)?o=null:s!==null&&Ly(r,s)&&(t.flags|=32),mD(e,t),bn(e,t,o,n),t.child;case 6:return e===null&&Vy(t),null;case 13:return yD(e,t,n);case 4:return Q1(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dl(t,null,r,n):bn(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ir(r,i),AC(e,t,r,i,n);case 7:return bn(e,t,t.pendingProps,n),t.child;case 8:return bn(e,t,t.pendingProps.children,n),t.child;case 12:return bn(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,et(Tf,r._currentValue),r._currentValue=o,s!==null)if(Fr(s.value,o)){if(s.children===i.children&&!Vn.current){t=Gi(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Bi(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),zy(s.return,n,t),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(G(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zy(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}bn(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,qa(t,n),i=pr(i),r=r(i),t.flags|=1,bn(e,t,r,n),t.child;case 14:return r=t.type,i=Ir(r,t.pendingProps),i=Ir(r.type,i),bC(e,t,r,i,n);case 15:return fD(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ir(r,i),Wd(e,t),t.tag=1,zn(r)?(e=!0,Cf(t)):e=!1,qa(t,n),z2(t,r,i),Yy(t,r,i,n),Gy(null,t,r,!0,e,n);case 19:return vD(e,t,n);case 22:return pD(e,t,n)}throw Error(G(156,t.tag))};function PD(e,t){return o2(e,t)}function Q$(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hr(e,t,n,r){return new Q$(e,t,n,r)}function hw(e){return e=e.prototype,!(!e||!e.isReactComponent)}function X$(e){if(typeof e=="function")return hw(e)?1:0;if(e!=null){if(e=e.$$typeof,e===b1)return 11;if(e===N1)return 14}return 2}function Ms(e,t){var n=e.alternate;return n===null?(n=hr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qd(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")hw(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Aa:return Ro(n.children,i,s,t);case A1:o=8,i|=8;break;case py:return e=hr(12,n,t,i|2),e.elementType=py,e.lanes=s,e;case my:return e=hr(13,n,t,i),e.elementType=my,e.lanes=s,e;case gy:return e=hr(19,n,t,i),e.elementType=gy,e.lanes=s,e;case jT:return Vp(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case VT:o=10;break e;case zT:o=9;break e;case b1:o=11;break e;case N1:o=14;break e;case ds:o=16,r=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=hr(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Ro(e,t,n,r){return e=hr(7,e,r,t),e.lanes=n,e}function Vp(e,t,n,r){return e=hr(22,e,r,t),e.elementType=jT,e.lanes=n,e.stateNode={isHidden:!1},e}function w0(e,t,n){return e=hr(6,e,null,t),e.lanes=n,e}function _0(e,t,n){return t=hr(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function J$(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=e0(0),this.expirationTimes=e0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=e0(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dw(e,t,n,r,i,s,o,a,u){return e=new J$(e,t,n,a,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=hr(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},K1(s),e}function Z$(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ia,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function MD(e){if(!e)return Hs;e=e._reactInternals;e:{if(ia(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var n=e.type;if(zn(n))return P2(e,n,t)}return t}function LD(e,t,n,r,i,s,o,a,u){return e=dw(n,r,!0,e,i,s,o,a,u),e.context=MD(null),n=e.current,r=Rn(),i=Ps(n),s=Bi(r,i),s.callback=t!=null?t:null,Os(n,s,i),e.current.lanes=i,Gc(e,i,r),jn(e,r),e}function zp(e,t,n,r){var i=t.current,s=Rn(),o=Ps(i);return n=MD(n),t.context===null?t.context=n:t.pendingContext=n,t=Bi(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Os(i,t,o),e!==null&&($r(e,i,o,s),zd(e,i,o)),o}function Lf(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zC(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fw(e,t){zC(e,t),(e=e.alternate)&&zC(e,t)}function e3(){return null}var $D=typeof reportError=="function"?reportError:function(e){console.error(e)};function pw(e){this._internalRoot=e}jp.prototype.render=pw.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));zp(e,t,null,null)};jp.prototype.unmount=pw.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jo(function(){zp(null,e,null,null)}),t[Wi]=null}};function jp(e){this._internalRoot=e}jp.prototype.unstable_scheduleHydration=function(e){if(e){var t=f2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ps.length&&t!==0&&t<ps[n].priority;n++);ps.splice(n,0,e),n===0&&m2(e)}};function mw(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jC(){}function t3(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Lf(o);s.call(c)}}var o=LD(t,r,e,0,null,!1,!1,"",jC);return e._reactRootContainer=o,e[Wi]=o.current,oc(e.nodeType===8?e.parentNode:e),jo(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Lf(u);a.call(c)}}var u=dw(e,0,!1,null,null,!1,!1,"",jC);return e._reactRootContainer=u,e[Wi]=u.current,oc(e.nodeType===8?e.parentNode:e),jo(function(){zp(t,u,n,r)}),u}function Wp(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Lf(o);a.call(u)}}zp(t,o,e,i)}else o=t3(n,t,e,i,r);return Lf(o)}h2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Su(t.pendingLanes);n!==0&&(P1(t,n|1),jn(t,Ot()),(Ve&6)===0&&(ml=Ot()+500,io()))}break;case 13:jo(function(){var r=Hi(e,1);if(r!==null){var i=Rn();$r(r,e,1,i)}}),fw(e,1)}};M1=function(e){if(e.tag===13){var t=Hi(e,134217728);if(t!==null){var n=Rn();$r(t,e,134217728,n)}fw(e,134217728)}};d2=function(e){if(e.tag===13){var t=Ps(e),n=Hi(e,t);if(n!==null){var r=Rn();$r(n,e,t,r)}fw(e,t)}};f2=function(){return Ge};p2=function(e,t){var n=Ge;try{return Ge=e,t()}finally{Ge=n}};Ty=function(e,t,n){switch(t){case"input":if(wy(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Mp(r);if(!i)throw Error(G(90));WT(r),wy(r,i)}}}break;case"textarea":GT(e,n);break;case"select":t=n.value,t!=null&&Ya(e,!!n.multiple,t,!1)}};e2=lw;t2=jo;var n3={usingClientEntryPoint:!1,Events:[Kc,Ra,Mp,JT,ZT,lw]},du={findFiberByHostInstance:ko,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},r3={bundleType:du.bundleType,version:du.version,rendererPackageName:du.rendererPackageName,rendererConfig:du.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rs.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=i2(e),e===null?null:e.stateNode},findFiberByHostInstance:du.findFiberByHostInstance||e3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var vd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vd.isDisabled&&vd.supportsFiber)try{Np=vd.inject(r3),Zr=vd}catch{}}tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n3;tr.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mw(t))throw Error(G(200));return Z$(e,t,null,n)};tr.createRoot=function(e,t){if(!mw(e))throw Error(G(299));var n=!1,r="",i=$D;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=dw(e,1,!1,null,null,n,!1,r,i),e[Wi]=t.current,oc(e.nodeType===8?e.parentNode:e),new pw(t)};tr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=i2(t),e=e===null?null:e.stateNode,e};tr.flushSync=function(e){return jo(e)};tr.hydrate=function(e,t,n){if(!Yp(t))throw Error(G(200));return Wp(null,e,t,!0,n)};tr.hydrateRoot=function(e,t,n){if(!mw(e))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$D;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=LD(t,null,e,1,n!=null?n:null,i,!1,s,o),e[Wi]=t.current,oc(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new jp(t)};tr.render=function(e,t,n){if(!Yp(t))throw Error(G(200));return Wp(null,e,t,!1,n)};tr.unmountComponentAtNode=function(e){if(!Yp(e))throw Error(G(40));return e._reactRootContainer?(jo(function(){Wp(null,null,e,!1,function(){e._reactRootContainer=null,e[Wi]=null})}),!0):!1};tr.unstable_batchedUpdates=lw;tr.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yp(n))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return Wp(e,t,n,!1,r)};tr.version="18.2.0-next-9e3b772b8-20220608";function FD(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(FD)}catch(e){console.error(e)}}FD(),x1.exports=tr;var YC=x1.exports;dy.createRoot=YC.createRoot,dy.hydrateRoot=YC.hydrateRoot;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mc(){return mc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mc.apply(this,arguments)}var Cs;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Cs||(Cs={}));const WC="popstate";function i3(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return sv("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:$f(i)}return o3(t,n,null,e)}function $t(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function gw(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function s3(){return Math.random().toString(36).substr(2,8)}function HC(e,t){return{usr:e.state,key:e.key,idx:t}}function sv(e,t,n,r){return n===void 0&&(n=null),mc({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Rl(t):t,{state:n,key:t&&t.key||r||s3()})}function $f(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Rl(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function o3(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Cs.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(mc({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){a=Cs.Pop;let x=d(),S=x==null?null:x-c;c=x,u&&u({action:a,location:_.location,delta:S})}function m(x,S){a=Cs.Push;let y=sv(_.location,x,S);n&&n(y,x),c=d()+1;let C=HC(y,c),T=_.createHref(y);try{o.pushState(C,"",T)}catch{i.location.assign(T)}s&&u&&u({action:a,location:_.location,delta:1})}function v(x,S){a=Cs.Replace;let y=sv(_.location,x,S);n&&n(y,x),c=d();let C=HC(y,c),T=_.createHref(y);o.replaceState(C,"",T),s&&u&&u({action:a,location:_.location,delta:0})}function w(x){let S=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof x=="string"?x:$f(x);return $t(S,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,S)}let _={get action(){return a},get location(){return e(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(WC,p),u=x,()=>{i.removeEventListener(WC,p),u=null}},createHref(x){return t(i,x)},createURL:w,encodeLocation(x){let S=w(x);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:v,go(x){return o.go(x)}};return _}var GC;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(GC||(GC={}));function a3(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Rl(t):t,i=yw(r.pathname||"/",n);if(i==null)return null;let s=UD(e);l3(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=y3(s[a],_3(i));return o}function UD(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&($t(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ls([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&($t(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),UD(s.children,t,d,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:m3(c,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of BD(s.path))i(s,o,u)}),t}function BD(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=BD(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function l3(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:g3(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const u3=/^:\w+$/,c3=3,h3=2,d3=1,f3=10,p3=-2,qC=e=>e==="*";function m3(e,t){let n=e.split("/"),r=n.length;return n.some(qC)&&(r+=p3),t&&(r+=h3),n.filter(i=>!qC(i)).reduce((i,s)=>i+(u3.test(s)?c3:s===""?d3:f3),r)}function g3(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function y3(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=v3({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!d)return null;Object.assign(r,d.params);let p=a.route;s.push({params:r,pathname:Ls([i,d.pathname]),pathnameBase:k3(Ls([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=Ls([i,d.pathnameBase]))}return s}function v3(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=w3(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,p)=>{if(d==="*"){let m=a[p]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}return c[d]=S3(a[p]||"",d),c},{}),pathname:s,pathnameBase:o,pattern:e}}function w3(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),gw(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function _3(e){try{return decodeURI(e)}catch(t){return gw(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function S3(e,t){try{return decodeURIComponent(e)}catch(n){return gw(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function yw(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function E3(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Rl(e):e;return{pathname:n?n.startsWith("/")?n:C3(n,t):t,search:x3(r),hash:T3(i)}}function C3(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function S0(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function VD(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function zD(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Rl(e):(i=mc({},e),$t(!i.pathname||!i.pathname.includes("?"),S0("?","pathname","search",i)),$t(!i.pathname||!i.pathname.includes("#"),S0("#","pathname","hash",i)),$t(!i.search||!i.search.includes("#"),S0("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let p=t.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?t[p]:"/"}let u=E3(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Ls=e=>e.join("/").replace(/\/\/+/g,"/"),k3=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),x3=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,T3=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function D3(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const I3=["post","put","patch","delete"];[...I3];/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ff(){return Ff=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ff.apply(this,arguments)}const jD=L.exports.createContext(null),A3=L.exports.createContext(null),Pl=L.exports.createContext(null),Hp=L.exports.createContext(null),so=L.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),YD=L.exports.createContext(null);function b3(e,t){let{relative:n}=t===void 0?{}:t;Xc()||$t(!1);let{basename:r,navigator:i}=L.exports.useContext(Pl),{hash:s,pathname:o,search:a}=HD(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ls([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Xc(){return L.exports.useContext(Hp)!=null}function Jc(){return Xc()||$t(!1),L.exports.useContext(Hp).location}function WD(e){L.exports.useContext(Pl).static||L.exports.useLayoutEffect(e)}function vr(){let{isDataRoute:e}=L.exports.useContext(so);return e?j3():N3()}function N3(){Xc()||$t(!1);let{basename:e,navigator:t}=L.exports.useContext(Pl),{matches:n}=L.exports.useContext(so),{pathname:r}=Jc(),i=JSON.stringify(VD(n).map(a=>a.pathnameBase)),s=L.exports.useRef(!1);return WD(()=>{s.current=!0}),L.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){t.go(a);return}let c=zD(a,JSON.parse(i),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Ls([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,i,r])}function Gp(){let{matches:e}=L.exports.useContext(so),t=e[e.length-1];return t?t.params:{}}function HD(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=L.exports.useContext(so),{pathname:i}=Jc(),s=JSON.stringify(VD(r).map(o=>o.pathnameBase));return L.exports.useMemo(()=>zD(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function O3(e,t){return R3(e,t)}function R3(e,t,n){Xc()||$t(!1);let{navigator:r}=L.exports.useContext(Pl),{matches:i}=L.exports.useContext(so),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=Jc(),c;if(t){var d;let _=typeof t=="string"?Rl(t):t;a==="/"||((d=_.pathname)==null?void 0:d.startsWith(a))||$t(!1),c=_}else c=u;let p=c.pathname||"/",m=a==="/"?p:p.slice(a.length)||"/",v=a3(e,{pathname:m}),w=F3(v&&v.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Ls([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Ls([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return t&&w?L.exports.createElement(Hp.Provider,{value:{location:Ff({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Cs.Pop}},w):w}function P3(){let e=z3(),t=D3(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return L.exports.createElement(L.exports.Fragment,null,L.exports.createElement("h2",null,"Unexpected Application Error!"),L.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?L.exports.createElement("pre",{style:i},n):null,s)}const M3=L.exports.createElement(P3,null);class L3 extends L.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?L.exports.createElement(so.Provider,{value:this.props.routeContext},L.exports.createElement(YD.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $3(e){let{routeContext:t,match:n,children:r}=e,i=L.exports.useContext(jD);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.exports.createElement(so.Provider,{value:t},r)}function F3(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id]));a>=0||$t(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,u,c)=>{let d=u.route.id?o==null?void 0:o[u.route.id]:null,p=null;n&&(p=u.route.errorElement||M3);let m=t.concat(s.slice(0,c+1)),v=()=>{let w;return d?w=p:u.route.Component?w=L.exports.createElement(u.route.Component,null):u.route.element?w=u.route.element:w=a,L.exports.createElement($3,{match:u,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:w})};return n&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?L.exports.createElement(L3,{location:n.location,revalidation:n.revalidation,component:p,error:d,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()},null)}var ov;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(ov||(ov={}));var gc;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(gc||(gc={}));function U3(e){let t=L.exports.useContext(jD);return t||$t(!1),t}function B3(e){let t=L.exports.useContext(A3);return t||$t(!1),t}function V3(e){let t=L.exports.useContext(so);return t||$t(!1),t}function GD(e){let t=V3(),n=t.matches[t.matches.length-1];return n.route.id||$t(!1),n.route.id}function z3(){var e;let t=L.exports.useContext(YD),n=B3(gc.UseRouteError),r=GD(gc.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function j3(){let{router:e}=U3(ov.UseNavigateStable),t=GD(gc.UseNavigateStable),n=L.exports.useRef(!1);return WD(()=>{n.current=!0}),L.exports.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ff({fromRouteId:t},s)))},[e,t])}function qD(e){$t(!1)}function Y3(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Cs.Pop,navigator:s,static:o=!1}=e;Xc()&&$t(!1);let a=t.replace(/^\/*/,"/"),u=L.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Rl(r));let{pathname:c="/",search:d="",hash:p="",state:m=null,key:v="default"}=r,w=L.exports.useMemo(()=>{let _=yw(c,a);return _==null?null:{location:{pathname:_,search:d,hash:p,state:m,key:v},navigationType:i}},[a,c,d,p,m,v,i]);return w==null?null:L.exports.createElement(Pl.Provider,{value:u},L.exports.createElement(Hp.Provider,{children:n,value:w}))}function W3(e){let{children:t,location:n}=e;return O3(av(t),n)}var KC;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(KC||(KC={}));new Promise(()=>{});function av(e,t){t===void 0&&(t=[]);let n=[];return L.exports.Children.forEach(e,(r,i)=>{if(!L.exports.isValidElement(r))return;let s=[...t,i];if(r.type===L.exports.Fragment){n.push.apply(n,av(r.props.children,s));return}r.type!==qD&&$t(!1),!r.props.index||!r.props.children||$t(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=av(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lv(){return lv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lv.apply(this,arguments)}function H3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function G3(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function q3(e,t){return e.button===0&&(!t||t==="_self")&&!G3(e)}const K3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Q3(e){let{basename:t,children:n,window:r}=e,i=L.exports.useRef();i.current==null&&(i.current=i3({window:r,v5Compat:!0}));let s=i.current,[o,a]=L.exports.useState({action:s.action,location:s.location});return L.exports.useLayoutEffect(()=>s.listen(a),[s]),L.exports.createElement(Y3,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s})}const X3=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",J3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nn=L.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d}=t,p=H3(t,K3),{basename:m}=L.exports.useContext(Pl),v,w=!1;if(typeof c=="string"&&J3.test(c)&&(v=c,X3))try{let y=new URL(window.location.href),C=c.startsWith("//")?new URL(y.protocol+c):new URL(c),T=yw(C.pathname,m);C.origin===y.origin&&T!=null?c=T+C.search+C.hash:w=!0}catch{}let _=b3(c,{relative:i}),x=Z3(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i});function S(y){r&&r(y),y.defaultPrevented||x(y)}return L.exports.createElement("a",lv({},p,{href:v||_,onClick:w||s?r:S,ref:n,target:u}))});var QC;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(QC||(QC={}));var XC;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(XC||(XC={}));function Z3(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=vr(),u=Jc(),c=HD(e,{relative:o});return L.exports.useCallback(d=>{if(q3(d,n)){d.preventDefault();let p=r!==void 0?r:$f(u)===$f(c);a(e,{replace:p,state:i,preventScrollReset:s,relative:o})}},[u,a,c,r,i,n,e,s,o])}var vw={exports:{}},Ke={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ww=Symbol.for("react.element"),_w=Symbol.for("react.portal"),qp=Symbol.for("react.fragment"),Kp=Symbol.for("react.strict_mode"),Qp=Symbol.for("react.profiler"),Xp=Symbol.for("react.provider"),Jp=Symbol.for("react.context"),e5=Symbol.for("react.server_context"),Zp=Symbol.for("react.forward_ref"),em=Symbol.for("react.suspense"),tm=Symbol.for("react.suspense_list"),nm=Symbol.for("react.memo"),rm=Symbol.for("react.lazy"),t5=Symbol.for("react.offscreen"),KD;KD=Symbol.for("react.module.reference");function wr(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ww:switch(e=e.type,e){case qp:case Qp:case Kp:case em:case tm:return e;default:switch(e=e&&e.$$typeof,e){case e5:case Jp:case Zp:case rm:case nm:case Xp:return e;default:return t}}case _w:return t}}}Ke.ContextConsumer=Jp;Ke.ContextProvider=Xp;Ke.Element=ww;Ke.ForwardRef=Zp;Ke.Fragment=qp;Ke.Lazy=rm;Ke.Memo=nm;Ke.Portal=_w;Ke.Profiler=Qp;Ke.StrictMode=Kp;Ke.Suspense=em;Ke.SuspenseList=tm;Ke.isAsyncMode=function(){return!1};Ke.isConcurrentMode=function(){return!1};Ke.isContextConsumer=function(e){return wr(e)===Jp};Ke.isContextProvider=function(e){return wr(e)===Xp};Ke.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ww};Ke.isForwardRef=function(e){return wr(e)===Zp};Ke.isFragment=function(e){return wr(e)===qp};Ke.isLazy=function(e){return wr(e)===rm};Ke.isMemo=function(e){return wr(e)===nm};Ke.isPortal=function(e){return wr(e)===_w};Ke.isProfiler=function(e){return wr(e)===Qp};Ke.isStrictMode=function(e){return wr(e)===Kp};Ke.isSuspense=function(e){return wr(e)===em};Ke.isSuspenseList=function(e){return wr(e)===tm};Ke.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===qp||e===Qp||e===Kp||e===em||e===tm||e===t5||typeof e=="object"&&e!==null&&(e.$$typeof===rm||e.$$typeof===nm||e.$$typeof===Xp||e.$$typeof===Jp||e.$$typeof===Zp||e.$$typeof===KD||e.getModuleId!==void 0)};Ke.typeOf=wr;vw.exports=Ke;function n5(e){function t(U,B,Y,V,D){for(var le=0,W=0,we=0,me=0,Be,_e,ne=0,De=0,ke,ct=ke=Be=0,Le=0,Ft=0,po=0,yt=0,It=Y.length,Wt=It-1,Dn,ye="",Ne="",Ql="",os="",At;Le<It;){if(_e=Y.charCodeAt(Le),Le===Wt&&W+me+we+le!==0&&(W!==0&&(_e=W===47?10:47),me=we=le=0,It++,Wt++),W+me+we+le===0){if(Le===Wt&&(0<Ft&&(ye=ye.replace(m,"")),0<ye.trim().length)){switch(_e){case 32:case 9:case 59:case 13:case 10:break;default:ye+=Y.charAt(Le)}_e=59}switch(_e){case 123:for(ye=ye.trim(),Be=ye.charCodeAt(0),ke=1,yt=++Le;Le<It;){switch(_e=Y.charCodeAt(Le)){case 123:ke++;break;case 125:ke--;break;case 47:switch(_e=Y.charCodeAt(Le+1)){case 42:case 47:e:{for(ct=Le+1;ct<Wt;++ct)switch(Y.charCodeAt(ct)){case 47:if(_e===42&&Y.charCodeAt(ct-1)===42&&Le+2!==ct){Le=ct+1;break e}break;case 10:if(_e===47){Le=ct+1;break e}}Le=ct}}break;case 91:_e++;case 40:_e++;case 34:case 39:for(;Le++<Wt&&Y.charCodeAt(Le)!==_e;);}if(ke===0)break;Le++}switch(ke=Y.substring(yt,Le),Be===0&&(Be=(ye=ye.replace(p,"").trim()).charCodeAt(0)),Be){case 64:switch(0<Ft&&(ye=ye.replace(m,"")),_e=ye.charCodeAt(1),_e){case 100:case 109:case 115:case 45:Ft=B;break;default:Ft=Te}if(ke=t(B,Ft,ke,_e,D+1),yt=ke.length,0<$&&(Ft=n(Te,ye,po),At=a(3,ke,Ft,B,X,J,yt,_e,D,V),ye=Ft.join(""),At!==void 0&&(yt=(ke=At.trim()).length)===0&&(_e=0,ke="")),0<yt)switch(_e){case 115:ye=ye.replace(O,o);case 100:case 109:case 45:ke=ye+"{"+ke+"}";break;case 107:ye=ye.replace(y,"$1 $2"),ke=ye+"{"+ke+"}",ke=oe===1||oe===2&&s("@"+ke,3)?"@-webkit-"+ke+"@"+ke:"@"+ke;break;default:ke=ye+ke,V===112&&(ke=(Ne+=ke,""))}else ke="";break;default:ke=t(B,n(B,ye,po),ke,V,D+1)}Ql+=ke,ke=po=Ft=ct=Be=0,ye="",_e=Y.charCodeAt(++Le);break;case 125:case 59:if(ye=(0<Ft?ye.replace(m,""):ye).trim(),1<(yt=ye.length))switch(ct===0&&(Be=ye.charCodeAt(0),Be===45||96<Be&&123>Be)&&(yt=(ye=ye.replace(" ",":")).length),0<$&&(At=a(1,ye,B,U,X,J,Ne.length,V,D,V))!==void 0&&(yt=(ye=At.trim()).length)===0&&(ye="\0\0"),Be=ye.charCodeAt(0),_e=ye.charCodeAt(1),Be){case 0:break;case 64:if(_e===105||_e===99){os+=ye+Y.charAt(Le);break}default:ye.charCodeAt(yt-1)!==58&&(Ne+=i(ye,Be,_e,ye.charCodeAt(2)))}po=Ft=ct=Be=0,ye="",_e=Y.charCodeAt(++Le)}}switch(_e){case 13:case 10:W===47?W=0:1+Be===0&&V!==107&&0<ye.length&&(Ft=1,ye+="\0"),0<$*R&&a(0,ye,B,U,X,J,Ne.length,V,D,V),J=1,X++;break;case 59:case 125:if(W+me+we+le===0){J++;break}default:switch(J++,Dn=Y.charAt(Le),_e){case 9:case 32:if(me+le+W===0)switch(ne){case 44:case 58:case 9:case 32:Dn="";break;default:_e!==32&&(Dn=" ")}break;case 0:Dn="\\0";break;case 12:Dn="\\f";break;case 11:Dn="\\v";break;case 38:me+W+le===0&&(Ft=po=1,Dn="\f"+Dn);break;case 108:if(me+W+le+ue===0&&0<ct)switch(Le-ct){case 2:ne===112&&Y.charCodeAt(Le-3)===58&&(ue=ne);case 8:De===111&&(ue=De)}break;case 58:me+W+le===0&&(ct=Le);break;case 44:W+we+me+le===0&&(Ft=1,Dn+="\r");break;case 34:case 39:W===0&&(me=me===_e?0:me===0?_e:me);break;case 91:me+W+we===0&&le++;break;case 93:me+W+we===0&&le--;break;case 41:me+W+le===0&&we--;break;case 40:if(me+W+le===0){if(Be===0)switch(2*ne+3*De){case 533:break;default:Be=1}we++}break;case 64:W+we+me+le+ct+ke===0&&(ke=1);break;case 42:case 47:if(!(0<me+le+we))switch(W){case 0:switch(2*_e+3*Y.charCodeAt(Le+1)){case 235:W=47;break;case 220:yt=Le,W=42}break;case 42:_e===47&&ne===42&&yt+2!==Le&&(Y.charCodeAt(yt+2)===33&&(Ne+=Y.substring(yt,Le+1)),Dn="",W=0)}}W===0&&(ye+=Dn)}De=ne,ne=_e,Le++}if(yt=Ne.length,0<yt){if(Ft=B,0<$&&(At=a(2,Ne,Ft,U,X,J,yt,V,D,V),At!==void 0&&(Ne=At).length===0))return os+Ne+Ql;if(Ne=Ft.join(",")+"{"+Ne+"}",oe*ue!==0){switch(oe!==2||s(Ne,2)||(ue=0),ue){case 111:Ne=Ne.replace(T,":-moz-$1")+Ne;break;case 112:Ne=Ne.replace(C,"::-webkit-input-$1")+Ne.replace(C,"::-moz-$1")+Ne.replace(C,":-ms-input-$1")+Ne}ue=0}}return os+Ne+Ql}function n(U,B,Y){var V=B.trim().split(x);B=V;var D=V.length,le=U.length;switch(le){case 0:case 1:var W=0;for(U=le===0?"":U[0]+" ";W<D;++W)B[W]=r(U,B[W],Y).trim();break;default:var we=W=0;for(B=[];W<D;++W)for(var me=0;me<le;++me)B[we++]=r(U[me]+" ",V[W],Y).trim()}return B}function r(U,B,Y){var V=B.charCodeAt(0);switch(33>V&&(V=(B=B.trim()).charCodeAt(0)),V){case 38:return B.replace(S,"$1"+U.trim());case 58:return U.trim()+B.replace(S,"$1"+U.trim());default:if(0<1*Y&&0<B.indexOf("\f"))return B.replace(S,(U.charCodeAt(0)===58?"":"$1")+U.trim())}return U+B}function i(U,B,Y,V){var D=U+";",le=2*B+3*Y+4*V;if(le===944){U=D.indexOf(":",9)+1;var W=D.substring(U,D.length-1).trim();return W=D.substring(0,U).trim()+W+";",oe===1||oe===2&&s(W,1)?"-webkit-"+W+W:W}if(oe===0||oe===2&&!s(D,1))return D;switch(le){case 1015:return D.charCodeAt(10)===97?"-webkit-"+D+D:D;case 951:return D.charCodeAt(3)===116?"-webkit-"+D+D:D;case 963:return D.charCodeAt(5)===110?"-webkit-"+D+D:D;case 1009:if(D.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+D+D;case 978:return"-webkit-"+D+"-moz-"+D+D;case 1019:case 983:return"-webkit-"+D+"-moz-"+D+"-ms-"+D+D;case 883:if(D.charCodeAt(8)===45)return"-webkit-"+D+D;if(0<D.indexOf("image-set(",11))return D.replace(j,"$1-webkit-$2")+D;break;case 932:if(D.charCodeAt(4)===45)switch(D.charCodeAt(5)){case 103:return"-webkit-box-"+D.replace("-grow","")+"-webkit-"+D+"-ms-"+D.replace("grow","positive")+D;case 115:return"-webkit-"+D+"-ms-"+D.replace("shrink","negative")+D;case 98:return"-webkit-"+D+"-ms-"+D.replace("basis","preferred-size")+D}return"-webkit-"+D+"-ms-"+D+D;case 964:return"-webkit-"+D+"-ms-flex-"+D+D;case 1023:if(D.charCodeAt(8)!==99)break;return W=D.substring(D.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+W+"-webkit-"+D+"-ms-flex-pack"+W+D;case 1005:return w.test(D)?D.replace(v,":-webkit-")+D.replace(v,":-moz-")+D:D;case 1e3:switch(W=D.substring(13).trim(),B=W.indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(B)){case 226:W=D.replace(A,"tb");break;case 232:W=D.replace(A,"tb-rl");break;case 220:W=D.replace(A,"lr");break;default:return D}return"-webkit-"+D+"-ms-"+W+D;case 1017:if(D.indexOf("sticky",9)===-1)break;case 975:switch(B=(D=U).length-10,W=(D.charCodeAt(B)===33?D.substring(0,B):D).substring(U.indexOf(":",7)+1).trim(),le=W.charCodeAt(0)+(W.charCodeAt(7)|0)){case 203:if(111>W.charCodeAt(8))break;case 115:D=D.replace(W,"-webkit-"+W)+";"+D;break;case 207:case 102:D=D.replace(W,"-webkit-"+(102<le?"inline-":"")+"box")+";"+D.replace(W,"-webkit-"+W)+";"+D.replace(W,"-ms-"+W+"box")+";"+D}return D+";";case 938:if(D.charCodeAt(5)===45)switch(D.charCodeAt(6)){case 105:return W=D.replace("-items",""),"-webkit-"+D+"-webkit-box-"+W+"-ms-flex-"+W+D;case 115:return"-webkit-"+D+"-ms-flex-item-"+D.replace(N,"")+D;default:return"-webkit-"+D+"-ms-flex-line-pack"+D.replace("align-content","").replace(N,"")+D}break;case 973:case 989:if(D.charCodeAt(3)!==45||D.charCodeAt(4)===122)break;case 931:case 953:if(F.test(U)===!0)return(W=U.substring(U.indexOf(":")+1)).charCodeAt(0)===115?i(U.replace("stretch","fill-available"),B,Y,V).replace(":fill-available",":stretch"):D.replace(W,"-webkit-"+W)+D.replace(W,"-moz-"+W.replace("fill-",""))+D;break;case 962:if(D="-webkit-"+D+(D.charCodeAt(5)===102?"-ms-"+D:"")+D,Y+V===211&&D.charCodeAt(13)===105&&0<D.indexOf("transform",10))return D.substring(0,D.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+D}return D}function s(U,B){var Y=U.indexOf(B===1?":":"{"),V=U.substring(0,B!==3?Y:10);return Y=U.substring(Y+1,U.length-1),z(B!==2?V:V.replace(Z,"$1"),Y,B)}function o(U,B){var Y=i(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return Y!==B+";"?Y.replace(b," or ($1)").substring(4):"("+B+")"}function a(U,B,Y,V,D,le,W,we,me,Be){for(var _e=0,ne=B,De;_e<$;++_e)switch(De=ge[_e].call(d,U,ne,Y,V,D,le,W,we,me,Be)){case void 0:case!1:case!0:case null:break;default:ne=De}if(ne!==B)return ne}function u(U){switch(U){case void 0:case null:$=ge.length=0;break;default:if(typeof U=="function")ge[$++]=U;else if(typeof U=="object")for(var B=0,Y=U.length;B<Y;++B)u(U[B]);else R=!!U|0}return u}function c(U){return U=U.prefix,U!==void 0&&(z=null,U?typeof U!="function"?oe=1:(oe=2,z=U):oe=0),c}function d(U,B){var Y=U;if(33>Y.charCodeAt(0)&&(Y=Y.trim()),ee=Y,Y=[ee],0<$){var V=a(-1,B,Y,Y,X,J,0,0,0,0);V!==void 0&&typeof V=="string"&&(B=V)}var D=t(Te,Y,B,0,0);return 0<$&&(V=a(-2,D,Y,Y,X,J,D.length,0,0,0),V!==void 0&&(D=V)),ee="",ue=0,J=X=1,D}var p=/^\0+/g,m=/[\0\r\f]/g,v=/: */g,w=/zoo|gra/,_=/([,: ])(transform)/g,x=/,\r+?/g,S=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,C=/::(place)/g,T=/:(read-only)/g,A=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,N=/-self|flex-/g,Z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,F=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,J=1,X=1,ue=0,oe=1,Te=[],ge=[],$=0,z=null,R=0,ee="";return d.use=u,d.set=c,e!==void 0&&c(e),d}var r5={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function i5(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var s5=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,JC=i5(function(e){return s5.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),QD={exports:{}},Qe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jt=typeof Symbol=="function"&&Symbol.for,Sw=Jt?Symbol.for("react.element"):60103,Ew=Jt?Symbol.for("react.portal"):60106,im=Jt?Symbol.for("react.fragment"):60107,sm=Jt?Symbol.for("react.strict_mode"):60108,om=Jt?Symbol.for("react.profiler"):60114,am=Jt?Symbol.for("react.provider"):60109,lm=Jt?Symbol.for("react.context"):60110,Cw=Jt?Symbol.for("react.async_mode"):60111,um=Jt?Symbol.for("react.concurrent_mode"):60111,cm=Jt?Symbol.for("react.forward_ref"):60112,hm=Jt?Symbol.for("react.suspense"):60113,o5=Jt?Symbol.for("react.suspense_list"):60120,dm=Jt?Symbol.for("react.memo"):60115,fm=Jt?Symbol.for("react.lazy"):60116,a5=Jt?Symbol.for("react.block"):60121,l5=Jt?Symbol.for("react.fundamental"):60117,u5=Jt?Symbol.for("react.responder"):60118,c5=Jt?Symbol.for("react.scope"):60119;function rr(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Sw:switch(e=e.type,e){case Cw:case um:case im:case om:case sm:case hm:return e;default:switch(e=e&&e.$$typeof,e){case lm:case cm:case fm:case dm:case am:return e;default:return t}}case Ew:return t}}}function XD(e){return rr(e)===um}Qe.AsyncMode=Cw;Qe.ConcurrentMode=um;Qe.ContextConsumer=lm;Qe.ContextProvider=am;Qe.Element=Sw;Qe.ForwardRef=cm;Qe.Fragment=im;Qe.Lazy=fm;Qe.Memo=dm;Qe.Portal=Ew;Qe.Profiler=om;Qe.StrictMode=sm;Qe.Suspense=hm;Qe.isAsyncMode=function(e){return XD(e)||rr(e)===Cw};Qe.isConcurrentMode=XD;Qe.isContextConsumer=function(e){return rr(e)===lm};Qe.isContextProvider=function(e){return rr(e)===am};Qe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sw};Qe.isForwardRef=function(e){return rr(e)===cm};Qe.isFragment=function(e){return rr(e)===im};Qe.isLazy=function(e){return rr(e)===fm};Qe.isMemo=function(e){return rr(e)===dm};Qe.isPortal=function(e){return rr(e)===Ew};Qe.isProfiler=function(e){return rr(e)===om};Qe.isStrictMode=function(e){return rr(e)===sm};Qe.isSuspense=function(e){return rr(e)===hm};Qe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===im||e===um||e===om||e===sm||e===hm||e===o5||typeof e=="object"&&e!==null&&(e.$$typeof===fm||e.$$typeof===dm||e.$$typeof===am||e.$$typeof===lm||e.$$typeof===cm||e.$$typeof===l5||e.$$typeof===u5||e.$$typeof===c5||e.$$typeof===a5)};Qe.typeOf=rr;QD.exports=Qe;var kw=QD.exports,h5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},d5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},f5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},JD={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xw={};xw[kw.ForwardRef]=f5;xw[kw.Memo]=JD;function ZC(e){return kw.isMemo(e)?JD:xw[e.$$typeof]||h5}var p5=Object.defineProperty,m5=Object.getOwnPropertyNames,ek=Object.getOwnPropertySymbols,g5=Object.getOwnPropertyDescriptor,y5=Object.getPrototypeOf,tk=Object.prototype;function ZD(e,t,n){if(typeof t!="string"){if(tk){var r=y5(t);r&&r!==tk&&ZD(e,r,n)}var i=m5(t);ek&&(i=i.concat(ek(t)));for(var s=ZC(e),o=ZC(t),a=0;a<i.length;++a){var u=i[a];if(!d5[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var c=g5(t,u);try{p5(e,u,c)}catch{}}}}return e}var v5=ZD;function Qr(){return(Qr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var nk=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},uv=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!vw.exports.typeOf(e)},Uf=Object.freeze([]),$s=Object.freeze({});function yc(e){return typeof e=="function"}function rk(e){return e.displayName||e.name||"Component"}function Tw(e){return e&&typeof e.styledComponentId=="string"}var gl=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Dw=typeof window!="undefined"&&"HTMLElement"in window,w5=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),_5={};function Zc(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var S5=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Zc(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),c=0,d=r.length;c<d;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Kd=new Map,Bf=new Map,Bu=1,wd=function(e){if(Kd.has(e))return Kd.get(e);for(;Bf.has(Bu);)Bu++;var t=Bu++;return Kd.set(e,t),Bf.set(t,e),t},E5=function(e){return Bf.get(e)},C5=function(e,t){t>=Bu&&(Bu=t+1),Kd.set(e,t),Bf.set(t,e)},k5="style["+gl+'][data-styled-version="5.3.10"]',x5=new RegExp("^"+gl+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),T5=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},D5=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(x5);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(C5(c,u),T5(e,c,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},I5=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},eI=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,c=u.length;c>=0;c--){var d=u[c];if(d&&d.nodeType===1&&d.hasAttribute(gl))return d}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(gl,"active"),r.setAttribute("data-styled-version","5.3.10");var o=I5();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},A5=function(){function e(n){var r=this.element=eI(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}Zc(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),b5=function(){function e(n){var r=this.element=eI(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),N5=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ik=Dw,O5={isServer:!Dw,useCSSOMInjection:!w5},Vf=function(){function e(n,r,i){n===void 0&&(n=$s),r===void 0&&(r={}),this.options=Qr({},O5,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Dw&&ik&&(ik=!1,function(s){for(var o=document.querySelectorAll(k5),a=0,u=o.length;a<u;a++){var c=o[a];c&&c.getAttribute(gl)!=="active"&&(D5(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return wd(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Qr({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new N5(o):s?new A5(o):new b5(o),new S5(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(wd(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(wd(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(wd(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=E5(o);if(a!==void 0){var u=n.names.get(a),c=r.getGroup(o);if(u&&c&&u.size){var d=gl+".g"+o+'[id="'+a+'"]',p="";u!==void 0&&u.forEach(function(m){m.length>0&&(p+=m+",")}),s+=""+c+d+'{content:"'+p+`"}/*!sc*/
`}}}return s}(this)},e}(),R5=/(a)(d)/gi,sk=function(e){return String.fromCharCode(e+(e>25?39:97))};function cv(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=sk(t%52)+n;return(sk(t%52)+n).replace(R5,"$1-$2")}var Ba=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},tI=function(e){return Ba(5381,e)};function nI(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(yc(n)&&!Tw(n))return!1}return!0}var P5=tI("5.3.10"),M5=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&nI(t),this.componentId=n,this.baseHash=Ba(P5,n),this.baseStyle=r,Vf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Yo(this.rules,t,n,r).join(""),a=cv(Ba(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,d=Ba(this.baseHash,r.hash),p="",m=0;m<c;m++){var v=this.rules[m];if(typeof v=="string")p+=v;else if(v){var w=Yo(v,t,n,r),_=Array.isArray(w)?w.join(""):w;d=Ba(d,_+m),p+=_}}if(p){var x=cv(d>>>0);if(!n.hasNameForId(i,x)){var S=r(p,"."+x,void 0,i);n.insertRules(i,x,S)}s.push(x)}}return s.join(" ")},e}(),L5=/^\s*\/\/.*$/gm,$5=[":","[",".","#"];function F5(e){var t,n,r,i,s=e===void 0?$s:e,o=s.options,a=o===void 0?$s:o,u=s.plugins,c=u===void 0?Uf:u,d=new n5(a),p=[],m=function(_){function x(S){if(S)try{_(S+"}")}catch{}}return function(S,y,C,T,A,O,b,N,Z,F){switch(S){case 1:if(Z===0&&y.charCodeAt(0)===64)return _(y+";"),"";break;case 2:if(N===0)return y+"/*|*/";break;case 3:switch(N){case 102:case 112:return _(C[0]+y),"";default:return y+(F===0?"/*|*/":"")}case-2:y.split("/*|*/}").forEach(x)}}}(function(_){p.push(_)}),v=function(_,x,S){return x===0&&$5.indexOf(S[n.length])!==-1||S.match(i)?_:"."+t};function w(_,x,S,y){y===void 0&&(y="&");var C=_.replace(L5,""),T=x&&S?S+" "+x+" { "+C+" }":C;return t=y,n=x,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(S||!x?"":x,T)}return d.use([].concat(c,[function(_,x,S){_===2&&S.length&&S[0].lastIndexOf(n)>0&&(S[0]=S[0].replace(r,v))},m,function(_){if(_===-2){var x=p;return p=[],x}}])),w.hash=c.length?c.reduce(function(_,x){return x.name||Zc(15),Ba(_,x.name)},5381).toString():"",w}var rI=qt.createContext();rI.Consumer;var iI=qt.createContext(),U5=(iI.Consumer,new Vf),hv=F5();function sI(){return L.exports.useContext(rI)||U5}function oI(){return L.exports.useContext(iI)||hv}var B5=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=hv);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Zc(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=hv),this.name+t.hash},e}(),V5=/([A-Z])/,z5=/([A-Z])/g,j5=/^ms-/,Y5=function(e){return"-"+e.toLowerCase()};function ok(e){return V5.test(e)?e.replace(z5,Y5).replace(j5,"-ms-"):e}var ak=function(e){return e==null||e===!1||e===""};function Yo(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,a=e.length;o<a;o+=1)(i=Yo(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(ak(e))return"";if(Tw(e))return"."+e.styledComponentId;if(yc(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return Yo(u,t,n,r)}var c;return e instanceof B5?n?(e.inject(n,r),e.getName(r)):e:uv(e)?function d(p,m){var v,w,_=[];for(var x in p)p.hasOwnProperty(x)&&!ak(p[x])&&(Array.isArray(p[x])&&p[x].isCss||yc(p[x])?_.push(ok(x)+":",p[x],";"):uv(p[x])?_.push.apply(_,d(p[x],x)):_.push(ok(x)+": "+(v=x,(w=p[x])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||v in r5||v.startsWith("--")?String(w).trim():w+"px")+";"));return m?[m+" {"].concat(_,["}"]):_}(e):e.toString()}var lk=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function eh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return yc(e)||uv(e)?lk(Yo(nk(Uf,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:lk(Yo(nk(e,n)))}var aI=function(e,t,n){return n===void 0&&(n=$s),e.theme!==n.theme&&e.theme||t||n.theme},W5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,H5=/(^-|-$)/g;function E0(e){return e.replace(W5,"-").replace(H5,"")}var lI=function(e){return cv(tI(e)>>>0)};function _d(e){return typeof e=="string"&&!0}var dv=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},G5=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function q5(e,t,n){var r=e[n];dv(t)&&dv(r)?uI(r,t):e[n]=t}function uI(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(dv(o))for(var a in o)G5(a)&&q5(e,o[a],a)}return e}var Iw=qt.createContext();Iw.Consumer;var C0={};function cI(e,t,n){var r=Tw(e),i=!_d(e),s=t.attrs,o=s===void 0?Uf:s,a=t.componentId,u=a===void 0?function(y,C){var T=typeof y!="string"?"sc":E0(y);C0[T]=(C0[T]||0)+1;var A=T+"-"+lI("5.3.10"+T+C0[T]);return C?C+"-"+A:A}(t.displayName,t.parentComponentId):a,c=t.displayName,d=c===void 0?function(y){return _d(y)?"styled."+y:"Styled("+rk(y)+")"}(e):c,p=t.displayName&&t.componentId?E0(t.displayName)+"-"+t.componentId:t.componentId||u,m=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(y,C,T){return e.shouldForwardProp(y,C,T)&&t.shouldForwardProp(y,C,T)}:e.shouldForwardProp);var w,_=new M5(n,p,r?e.componentStyle:void 0),x=_.isStatic&&o.length===0,S=function(y,C){return function(T,A,O,b){var N=T.attrs,Z=T.componentStyle,F=T.defaultProps,j=T.foldedComponentIds,J=T.shouldForwardProp,X=T.styledComponentId,ue=T.target,oe=function(V,D,le){V===void 0&&(V=$s);var W=Qr({},D,{theme:V}),we={};return le.forEach(function(me){var Be,_e,ne,De=me;for(Be in yc(De)&&(De=De(W)),De)W[Be]=we[Be]=Be==="className"?(_e=we[Be],ne=De[Be],_e&&ne?_e+" "+ne:_e||ne):De[Be]}),[W,we]}(aI(A,L.exports.useContext(Iw),F)||$s,A,N),Te=oe[0],ge=oe[1],$=function(V,D,le,W){var we=sI(),me=oI(),Be=D?V.generateAndInjectStyles($s,we,me):V.generateAndInjectStyles(le,we,me);return Be}(Z,b,Te),z=O,R=ge.$as||A.$as||ge.as||A.as||ue,ee=_d(R),U=ge!==A?Qr({},A,{},ge):A,B={};for(var Y in U)Y[0]!=="$"&&Y!=="as"&&(Y==="forwardedAs"?B.as=U[Y]:(J?J(Y,JC,R):!ee||JC(Y))&&(B[Y]=U[Y]));return A.style&&ge.style!==A.style&&(B.style=Qr({},A.style,{},ge.style)),B.className=Array.prototype.concat(j,X,$!==X?$:null,A.className,ge.className).filter(Boolean).join(" "),B.ref=z,L.exports.createElement(R,B)}(w,y,C,x)};return S.displayName=d,(w=qt.forwardRef(S)).attrs=m,w.componentStyle=_,w.displayName=d,w.shouldForwardProp=v,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Uf,w.styledComponentId=p,w.target=r?e.target:e,w.withComponent=function(y){var C=t.componentId,T=function(O,b){if(O==null)return{};var N,Z,F={},j=Object.keys(O);for(Z=0;Z<j.length;Z++)N=j[Z],b.indexOf(N)>=0||(F[N]=O[N]);return F}(t,["componentId"]),A=C&&C+"-"+(_d(y)?y:E0(rk(y)));return cI(y,Qr({},T,{attrs:m,componentId:A}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?uI({},e.defaultProps,y):y}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&v5(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var fv=function(e){return function t(n,r,i){if(i===void 0&&(i=$s),!vw.exports.isValidElementType(r))return Zc(1,String(r));var s=function(){return n(r,i,eh.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,Qr({},i,{},o))},s.attrs=function(o){return t(n,r,Qr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(cI,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){fv[e]=fv(e)});var K5=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=nI(n),Vf.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,s){var o=s(Yo(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,s){n>2&&Vf.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},e}();function Q5(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=eh.apply(void 0,[e].concat(n)),s="sc-global-"+lI(JSON.stringify(i)),o=new K5(i,s);function a(c){var d=sI(),p=oI(),m=L.exports.useContext(Iw),v=L.exports.useRef(d.allocateGSInstance(s)).current;return d.server&&u(v,c,d,m,p),L.exports.useLayoutEffect(function(){if(!d.server)return u(v,c,d,m,p),function(){return o.removeStyles(v,d)}},[v,c,d,m,p]),null}function u(c,d,p,m,v){if(o.isStatic)o.renderStyles(c,_5,p,v);else{var w=Qr({},d,{theme:aI(d,m,a.defaultProps)});o.renderStyles(c,w,p,v)}}return qt.memo(a)}var nt=fv;const X5=Q5`
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
`,J5=nt.div`
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
`,Z5=nt.header`
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

          &:last-of-type {
            min-width: 0;
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
            display: flex;
            align-items: center;
            font-size: clamp(15px, 2vw, 16px);
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
`;var hI={exports:{}},dI={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=L.exports;function eF(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tF=typeof Object.is=="function"?Object.is:eF,nF=yl.useState,rF=yl.useEffect,iF=yl.useLayoutEffect,sF=yl.useDebugValue;function oF(e,t){var n=t(),r=nF({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return iF(function(){i.value=n,i.getSnapshot=t,k0(i)&&s({inst:i})},[e,n,t]),rF(function(){return k0(i)&&s({inst:i}),e(function(){k0(i)&&s({inst:i})})},[e]),sF(n),n}function k0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tF(e,n)}catch{return!0}}function aF(e,t){return t()}var lF=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?aF:oF;dI.useSyncExternalStore=yl.useSyncExternalStore!==void 0?yl.useSyncExternalStore:lF;hI.exports=dI;var fI={exports:{}},pI={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm=L.exports,uF=hI.exports;function cF(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hF=typeof Object.is=="function"?Object.is:cF,dF=uF.useSyncExternalStore,fF=pm.useRef,pF=pm.useEffect,mF=pm.useMemo,gF=pm.useDebugValue;pI.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=fF(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=mF(function(){function u(v){if(!c){if(c=!0,d=v,v=r(v),i!==void 0&&o.hasValue){var w=o.value;if(i(w,v))return p=w}return p=v}if(w=p,hF(d,v))return w;var _=r(v);return i!==void 0&&i(w,_)?w:(d=v,p=_)}var c=!1,d,p,m=n===void 0?null:n;return[function(){return u(t())},m===null?void 0:function(){return u(m())}]},[t,n,r,i]);var a=dF(e,s[0],s[1]);return pF(function(){o.hasValue=!0,o.value=a},[a]),gF(a),a};fI.exports=pI;function yF(e){e()}let mI=yF;const vF=e=>mI=e,wF=()=>mI,Gs=L.exports.createContext(null);function gI(){return L.exports.useContext(Gs)}const _F=()=>{throw new Error("uSES not initialized!")};let yI=_F;const SF=e=>{yI=e},EF=(e,t)=>e===t;function CF(e=Gs){const t=e===Gs?gI:()=>L.exports.useContext(e);return function(r,i=EF){const{store:s,subscription:o,getServerState:a}=t(),u=yI(o.addNestedSub,s.getState,a||s.getState,r,i);return L.exports.useDebugValue(u),u}}const kt=CF();function kF(){const e=wF();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:t=s,function(){!i||t===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}const uk={notify(){},get:()=>[]};function xF(e,t){let n,r=uk;function i(p){return u(),r.subscribe(p)}function s(){r.notify()}function o(){d.onStateChange&&d.onStateChange()}function a(){return Boolean(n)}function u(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=kF())}function c(){n&&(n(),n=void 0,r.clear(),r=uk)}const d={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:u,tryUnsubscribe:c,getListeners:()=>r};return d}const TF=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",DF=TF?L.exports.useLayoutEffect:L.exports.useEffect;var mm={exports:{}},gm={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IF=L.exports,AF=Symbol.for("react.element"),bF=Symbol.for("react.fragment"),NF=Object.prototype.hasOwnProperty,OF=IF.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RF={key:!0,ref:!0,__self:!0,__source:!0};function vI(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)NF.call(t,r)&&!RF.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:AF,type:e,key:s,ref:o,props:i,_owner:OF.current}}gm.Fragment=bF;gm.jsx=vI;gm.jsxs=vI;mm.exports=gm;const k=mm.exports.jsx,M=mm.exports.jsxs,pv=mm.exports.Fragment;function PF({store:e,context:t,children:n,serverState:r}){const i=L.exports.useMemo(()=>{const a=xF(e);return{store:e,subscription:a,getServerState:r?()=>r:void 0}},[e,r]),s=L.exports.useMemo(()=>e.getState(),[e]);return DF(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]),k((t||Gs).Provider,{value:i,children:n})}function wI(e=Gs){const t=e===Gs?gI:()=>L.exports.useContext(e);return function(){const{store:r}=t();return r}}const MF=wI();function LF(e=Gs){const t=e===Gs?MF:wI(e);return function(){return t().dispatch}}const kn=LF();SF(fI.exports.useSyncExternalStoreWithSelector);vF(x1.exports.unstable_batchedUpdates);function Or(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function qs(e){return!!e&&!!e[ft]}function qi(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===WF}(e)||Array.isArray(e)||!!e[gk]||!!(!((t=e.constructor)===null||t===void 0)&&t[gk])||Aw(e)||bw(e))}function Wo(e,t,n){n===void 0&&(n=!1),Ml(e)===0?(n?Object.keys:Xa)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Ml(e){var t=e[ft];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Aw(e)?2:bw(e)?3:0}function Qa(e,t){return Ml(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function $F(e,t){return Ml(e)===2?e.get(t):e[t]}function _I(e,t,n){var r=Ml(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function SI(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Aw(e){return jF&&e instanceof Map}function bw(e){return YF&&e instanceof Set}function Eo(e){return e.o||e.t}function Nw(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=CI(e);delete t[ft];for(var n=Xa(t),r=0;r<n.length;r++){var i=n[r],s=t[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Ow(e,t){return t===void 0&&(t=!1),Rw(e)||qs(e)||!qi(e)||(Ml(e)>1&&(e.set=e.add=e.clear=e.delete=FF),Object.freeze(e),t&&Wo(e,function(n,r){return Ow(r,!0)},!0)),e}function FF(){Or(2)}function Rw(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function ti(e){var t=vv[e];return t||Or(18,e),t}function UF(e,t){vv[e]||(vv[e]=t)}function mv(){return vc}function x0(e,t){t&&(ti("Patches"),e.u=[],e.s=[],e.v=t)}function zf(e){gv(e),e.p.forEach(BF),e.p=null}function gv(e){e===vc&&(vc=e.l)}function ck(e){return vc={p:[],l:vc,h:e,m:!0,_:0}}function BF(e){var t=e[ft];t.i===0||t.i===1?t.j():t.g=!0}function T0(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||ti("ES5").S(t,e,r),r?(n[ft].P&&(zf(t),Or(4)),qi(e)&&(e=jf(t,e),t.l||Yf(t,e)),t.u&&ti("Patches").M(n[ft].t,e,t.u,t.s)):e=jf(t,n,[]),zf(t),t.u&&t.v(t.u,t.s),e!==EI?e:void 0}function jf(e,t,n){if(Rw(t))return t;var r=t[ft];if(!r)return Wo(t,function(a,u){return hk(e,r,t,a,u,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Yf(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Nw(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),Wo(s,function(a,u){return hk(e,r,i,a,u,n,o)}),Yf(e,i,!1),n&&e.u&&ti("Patches").N(r,n,e.u,e.s)}return r.o}function hk(e,t,n,r,i,s,o){if(qs(i)){var a=jf(e,i,s&&t&&t.i!==3&&!Qa(t.R,r)?s.concat(r):void 0);if(_I(n,r,a),!qs(a))return;e.m=!1}else o&&n.add(i);if(qi(i)&&!Rw(i)){if(!e.h.D&&e._<1)return;jf(e,i),t&&t.A.l||Yf(e,i)}}function Yf(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Ow(t,n)}function D0(e,t){var n=e[ft];return(n?Eo(n):e)[t]}function dk(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function gs(e){e.P||(e.P=!0,e.l&&gs(e.l))}function I0(e){e.o||(e.o=Nw(e.t))}function yv(e,t,n){var r=Aw(t)?ti("MapSet").F(t,n):bw(t)?ti("MapSet").T(t,n):e.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:mv(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},u=a,c=wc;o&&(u=[a],c=Cu);var d=Proxy.revocable(u,c),p=d.revoke,m=d.proxy;return a.k=m,a.j=p,m}(t,n):ti("ES5").J(t,n);return(n?n.A:mv()).p.push(r),r}function VF(e){return qs(e)||Or(22,e),function t(n){if(!qi(n))return n;var r,i=n[ft],s=Ml(n);if(i){if(!i.P&&(i.i<4||!ti("ES5").K(i)))return i.t;i.I=!0,r=fk(n,s),i.I=!1}else r=fk(n,s);return Wo(r,function(o,a){i&&$F(i.t,o)===a||_I(r,o,t(a))}),s===3?new Set(r):r}(e)}function fk(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Nw(e)}function zF(){function e(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var u=this[ft];return wc.get(u,s)},set:function(u){var c=this[ft];wc.set(c,s,u)}},a}function t(s){for(var o=s.length-1;o>=0;o--){var a=s[o][ft];if(!a.P)switch(a.i){case 5:r(a)&&gs(a);break;case 4:n(a)&&gs(a)}}}function n(s){for(var o=s.t,a=s.k,u=Xa(a),c=u.length-1;c>=0;c--){var d=u[c];if(d!==ft){var p=o[d];if(p===void 0&&!Qa(o,d))return!0;var m=a[d],v=m&&m[ft];if(v?v.t!==p:!SI(m,p))return!0}}var w=!!o[ft];return u.length!==Xa(o).length+(w?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var u=0;u<o.length;u++)if(!o.hasOwnProperty(u))return!0;return!1}var i={};UF("ES5",{J:function(s,o){var a=Array.isArray(s),u=function(d,p){if(d){for(var m=Array(p.length),v=0;v<p.length;v++)Object.defineProperty(m,""+v,e(v,!0));return m}var w=CI(p);delete w[ft];for(var _=Xa(w),x=0;x<_.length;x++){var S=_[x];w[S]=e(S,d||!!w[S].enumerable)}return Object.create(Object.getPrototypeOf(p),w)}(a,s),c={i:a?5:4,A:o?o.A:mv(),P:!1,I:!1,R:{},l:o,t:s,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,ft,{value:c,writable:!0}),u},S:function(s,o,a){a?qs(o)&&o[ft].A===s&&t(s.p):(s.u&&function u(c){if(c&&typeof c=="object"){var d=c[ft];if(d){var p=d.t,m=d.k,v=d.R,w=d.i;if(w===4)Wo(m,function(C){C!==ft&&(p[C]!==void 0||Qa(p,C)?v[C]||u(m[C]):(v[C]=!0,gs(d)))}),Wo(p,function(C){m[C]!==void 0||Qa(m,C)||(v[C]=!1,gs(d))});else if(w===5){if(r(d)&&(gs(d),v.length=!0),m.length<p.length)for(var _=m.length;_<p.length;_++)v[_]=!1;else for(var x=p.length;x<m.length;x++)v[x]=!0;for(var S=Math.min(m.length,p.length),y=0;y<S;y++)m.hasOwnProperty(y)||(v[y]=!0),v[y]===void 0&&u(m[y])}}}}(s.p[0]),t(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var pk,vc,Pw=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",jF=typeof Map!="undefined",YF=typeof Set!="undefined",mk=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",EI=Pw?Symbol.for("immer-nothing"):((pk={})["immer-nothing"]=!0,pk),gk=Pw?Symbol.for("immer-draftable"):"__$immer_draftable",ft=Pw?Symbol.for("immer-state"):"__$immer_state",WF=""+Object.prototype.constructor,Xa=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,CI=Object.getOwnPropertyDescriptors||function(e){var t={};return Xa(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},vv={},wc={get:function(e,t){if(t===ft)return e;var n=Eo(e);if(!Qa(n,t))return function(i,s,o){var a,u=dk(s,o);return u?"value"in u?u.value:(a=u.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!qi(r)?r:r===D0(e.t,t)?(I0(e),e.o[t]=yv(e.A.h,r,e)):r},has:function(e,t){return t in Eo(e)},ownKeys:function(e){return Reflect.ownKeys(Eo(e))},set:function(e,t,n){var r=dk(Eo(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=D0(Eo(e),t),s=i==null?void 0:i[ft];if(s&&s.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(SI(n,i)&&(n!==void 0||Qa(e.t,t)))return!0;I0(e),gs(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return D0(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,I0(e),gs(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Eo(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Or(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Or(12)}},Cu={};Wo(wc,function(e,t){Cu[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Cu.deleteProperty=function(e,t){return Cu.set.call(this,e,t,void 0)},Cu.set=function(e,t,n){return wc.set.call(this,e[0],t,n,e[0])};var HF=function(){function e(n){var r=this;this.O=mk,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var u=r;return function(_){var x=this;_===void 0&&(_=a);for(var S=arguments.length,y=Array(S>1?S-1:0),C=1;C<S;C++)y[C-1]=arguments[C];return u.produce(_,function(T){var A;return(A=s).call.apply(A,[x,T].concat(y))})}}var c;if(typeof s!="function"&&Or(6),o!==void 0&&typeof o!="function"&&Or(7),qi(i)){var d=ck(r),p=yv(r,i,void 0),m=!0;try{c=s(p),m=!1}finally{m?zf(d):gv(d)}return typeof Promise!="undefined"&&c instanceof Promise?c.then(function(_){return x0(d,o),T0(_,d)},function(_){throw zf(d),_}):(x0(d,o),T0(c,d))}if(!i||typeof i!="object"){if((c=s(i))===void 0&&(c=i),c===EI&&(c=void 0),r.D&&Ow(c,!0),o){var v=[],w=[];ti("Patches").M(i,c,v,w),o(v,w)}return c}Or(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(c){for(var d=arguments.length,p=Array(d>1?d-1:0),m=1;m<d;m++)p[m-1]=arguments[m];return r.produceWithPatches(c,function(v){return i.apply(void 0,[v].concat(p))})};var o,a,u=r.produce(i,s,function(c,d){o=c,a=d});return typeof Promise!="undefined"&&u instanceof Promise?u.then(function(c){return[c,o,a]}):[u,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){qi(n)||Or(8),qs(n)&&(n=VF(n));var r=ck(this),i=yv(this,n,void 0);return i[ft].C=!0,gv(r),i},t.finishDraft=function(n,r){var i=n&&n[ft],s=i.A;return x0(s,r),T0(void 0,s)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!mk&&Or(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=ti("Patches").$;return qs(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},e}(),Zn=new HF,kI=Zn.produce;Zn.produceWithPatches.bind(Zn);Zn.setAutoFreeze.bind(Zn);Zn.setUseProxies.bind(Zn);Zn.applyPatches.bind(Zn);Zn.createDraft.bind(Zn);Zn.finishDraft.bind(Zn);function _c(e){return _c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_c(e)}function GF(e,t){if(_c(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(_c(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qF(e){var t=GF(e,"string");return _c(t)==="symbol"?t:String(t)}function KF(e,t,n){return t=qF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yk(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function vk(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yk(Object(n),!0).forEach(function(r){KF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yk(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dn(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var wk=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),A0=function(){return Math.random().toString(36).substring(7).split("").join(".")},Wf={INIT:"@@redux/INIT"+A0(),REPLACE:"@@redux/REPLACE"+A0(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+A0()}};function QF(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function xI(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(dn(0));if(typeof t=="function"&&typeof n=="undefined"&&(n=t,t=void 0),typeof n!="undefined"){if(typeof n!="function")throw new Error(dn(1));return n(xI)(e,t)}if(typeof e!="function")throw new Error(dn(2));var i=e,s=t,o=[],a=o,u=!1;function c(){a===o&&(a=o.slice())}function d(){if(u)throw new Error(dn(3));return s}function p(_){if(typeof _!="function")throw new Error(dn(4));if(u)throw new Error(dn(5));var x=!0;return c(),a.push(_),function(){if(!!x){if(u)throw new Error(dn(6));x=!1,c();var y=a.indexOf(_);a.splice(y,1),o=null}}}function m(_){if(!QF(_))throw new Error(dn(7));if(typeof _.type=="undefined")throw new Error(dn(8));if(u)throw new Error(dn(9));try{u=!0,s=i(s,_)}finally{u=!1}for(var x=o=a,S=0;S<x.length;S++){var y=x[S];y()}return _}function v(_){if(typeof _!="function")throw new Error(dn(10));i=_,m({type:Wf.REPLACE})}function w(){var _,x=p;return _={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(dn(11));function C(){y.next&&y.next(d())}C();var T=x(C);return{unsubscribe:T}}},_[wk]=function(){return this},_}return m({type:Wf.INIT}),r={dispatch:m,subscribe:p,getState:d,replaceReducer:v},r[wk]=w,r}function XF(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Wf.INIT});if(typeof r=="undefined")throw new Error(dn(12));if(typeof n(void 0,{type:Wf.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(dn(13))})}function JF(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var s=Object.keys(n),o;try{XF(n)}catch(a){o=a}return function(u,c){if(u===void 0&&(u={}),o)throw o;for(var d=!1,p={},m=0;m<s.length;m++){var v=s[m],w=n[v],_=u[v],x=w(_,c);if(typeof x=="undefined")throw c&&c.type,new Error(dn(14));p[v]=x,d=d||x!==_}return d=d||s.length!==Object.keys(u).length,d?p:u}}function Hf(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function ZF(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(dn(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=t.map(function(u){return u(o)});return s=Hf.apply(void 0,a)(i.dispatch),vk(vk({},i),{},{dispatch:s})}}}function TI(e){var t=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,e):o(a)}}};return t}var DI=TI();DI.withExtraArgument=TI;var _k=DI,II=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),e8=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(d){return u([c,d])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(d){c=[6,d],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},vl=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},t8=Object.defineProperty,n8=Object.defineProperties,r8=Object.getOwnPropertyDescriptors,Sk=Object.getOwnPropertySymbols,i8=Object.prototype.hasOwnProperty,s8=Object.prototype.propertyIsEnumerable,Ek=function(e,t,n){return t in e?t8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Fs=function(e,t){for(var n in t||(t={}))i8.call(t,n)&&Ek(e,n,t[n]);if(Sk)for(var r=0,i=Sk(t);r<i.length;r++){var n=i[r];s8.call(t,n)&&Ek(e,n,t[n])}return e},b0=function(e,t){return n8(e,r8(t))},o8=function(e,t,n){return new Promise(function(r,i){var s=function(u){try{a(n.next(u))}catch(c){i(c)}},o=function(u){try{a(n.throw(u))}catch(c){i(c)}},a=function(u){return u.done?r(u.value):Promise.resolve(u.value).then(s,o)};a((n=n.apply(e,t)).next())})},a8=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Hf:Hf.apply(null,arguments)};function l8(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var u8=function(e){II(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,vl([void 0],n[0].concat(this)))):new(t.bind.apply(t,vl([void 0],n.concat(this))))},t}(Array),c8=function(e){II(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,vl([void 0],n[0].concat(this)))):new(t.bind.apply(t,vl([void 0],n.concat(this))))},t}(Array);function wv(e){return qi(e)?kI(e,function(){}):e}function h8(e){return typeof e=="boolean"}function d8(){return function(t){return f8(t)}}function f8(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new u8;return n&&(h8(n)?r.push(_k):r.push(_k.withExtraArgument(n.extraArgument))),r}var p8=!0;function m8(e){var t=d8(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?t():s,a=n.devTools,u=a===void 0?!0:a,c=n.preloadedState,d=c===void 0?void 0:c,p=n.enhancers,m=p===void 0?void 0:p,v;if(typeof i=="function")v=i;else if(l8(i))v=JF(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var w=o;typeof w=="function"&&(w=w(t));var _=ZF.apply(void 0,w),x=Hf;u&&(x=a8(Fs({trace:!p8},typeof u=="object"&&u)));var S=new c8(_),y=S;Array.isArray(m)?y=vl([_],m):typeof m=="function"&&(y=m(S));var C=x.apply(void 0,y);return xI(v,d,C)}function Us(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var s=t.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return Fs(Fs({type:e,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function AI(e){var t={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return e(i),[t,n,r]}function g8(e){return typeof e=="function"}function y8(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?AI(t):[t,n,r],s=i[0],o=i[1],a=i[2],u;if(g8(e))u=function(){return wv(e())};else{var c=wv(e);u=function(){return c}}function d(p,m){p===void 0&&(p=u());var v=vl([s[m.type]],o.filter(function(w){var _=w.matcher;return _(m)}).map(function(w){var _=w.reducer;return _}));return v.filter(function(w){return!!w}).length===0&&(v=[a]),v.reduce(function(w,_){if(_)if(qs(w)){var x=w,S=_(x,m);return S===void 0?w:S}else{if(qi(w))return kI(w,function(y){return _(y,m)});var S=_(w,m);if(S===void 0){if(w===null)return w;throw Error("A case reducer on a non-draftable value must not return undefined")}return S}return w},p)}return d.getInitialState=u,d}function v8(e,t){return e+"/"+t}function sa(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var n=typeof e.initialState=="function"?e.initialState:wv(e.initialState),r=e.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(d){var p=r[d],m=v8(t,d),v,w;"reducer"in p?(v=p.reducer,w=p.prepare):v=p,s[d]=v,o[m]=v,a[d]=w?Us(m,w):Us(m)});function u(){var d=typeof e.extraReducers=="function"?AI(e.extraReducers):[e.extraReducers],p=d[0],m=p===void 0?{}:p,v=d[1],w=v===void 0?[]:v,_=d[2],x=_===void 0?void 0:_,S=Fs(Fs({},m),o);return y8(n,function(y){for(var C in S)y.addCase(C,S[C]);for(var T=0,A=w;T<A.length;T++){var O=A[T];y.addMatcher(O.matcher,O.reducer)}x&&y.addDefaultCase(x)})}var c;return{name:t,reducer:function(d,p){return c||(c=u()),c(d,p)},actions:a,caseReducers:s,getInitialState:function(){return c||(c=u()),c.getInitialState()}}}var w8="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",_8=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=w8[Math.random()*64|0];return t},S8=["name","message","stack","code"],N0=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Ck=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),E8=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=S8;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},_r=function(){function e(t,n,r){var i=Us(t+"/fulfilled",function(c,d,p,m){return{payload:c,meta:b0(Fs({},m||{}),{arg:p,requestId:d,requestStatus:"fulfilled"})}}),s=Us(t+"/pending",function(c,d,p){return{payload:void 0,meta:b0(Fs({},p||{}),{arg:d,requestId:c,requestStatus:"pending"})}}),o=Us(t+"/rejected",function(c,d,p,m,v){return{payload:m,error:(r&&r.serializeError||E8)(c||"Rejected"),meta:b0(Fs({},v||{}),{arg:p,requestId:d,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),a=typeof AbortController!="undefined"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function u(c){return function(d,p,m){var v=r!=null&&r.idGenerator?r.idGenerator(c):_8(),w=new a,_;function x(y){_=y,w.abort()}var S=function(){return o8(this,null,function(){var y,C,T,A,O,b,N;return e8(this,function(Z){switch(Z.label){case 0:return Z.trys.push([0,4,,5]),A=(y=r==null?void 0:r.condition)==null?void 0:y.call(r,c,{getState:p,extra:m}),k8(A)?[4,A]:[3,2];case 1:A=Z.sent(),Z.label=2;case 2:if(A===!1||w.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return O=new Promise(function(F,j){return w.signal.addEventListener("abort",function(){return j({name:"AbortError",message:_||"Aborted"})})}),d(s(v,c,(C=r==null?void 0:r.getPendingMeta)==null?void 0:C.call(r,{requestId:v,arg:c},{getState:p,extra:m}))),[4,Promise.race([O,Promise.resolve(n(c,{dispatch:d,getState:p,extra:m,requestId:v,signal:w.signal,abort:x,rejectWithValue:function(F,j){return new N0(F,j)},fulfillWithValue:function(F,j){return new Ck(F,j)}})).then(function(F){if(F instanceof N0)throw F;return F instanceof Ck?i(F.payload,v,c,F.meta):i(F,v,c)})])];case 3:return T=Z.sent(),[3,5];case 4:return b=Z.sent(),T=b instanceof N0?o(null,v,c,b.payload,b.meta):o(b,v,c),[3,5];case 5:return N=r&&!r.dispatchConditionRejection&&o.match(T)&&T.meta.condition,N||d(T),[2,T]}})})}();return Object.assign(S,{abort:x,requestId:v,arg:c,unwrap:function(){return S.then(C8)}})}}return Object.assign(u,{pending:s,rejected:o,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function C8(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function k8(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var x8=function(e){return e&&typeof e.match=="function"},bI=function(e,t){return x8(e)?e.match(t):e(t)};function T8(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(n){return e.some(function(r){return bI(r,n)})}}function kk(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(n){return e.every(function(r){return bI(r,n)})}}function D8(e,t){if(!e||!e.meta)return!1;var n=typeof e.meta.requestId=="string",r=t.indexOf(e.meta.requestStatus)>-1;return n&&r}function NI(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function _v(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length===0?function(n){return D8(n,["rejected"])}:NI(e)?function(n){var r=e.map(function(s){return s.rejected}),i=T8.apply(void 0,r);return i(n)}:_v()(e[0])}function Mw(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=function(r){return r&&r.meta&&r.meta.rejectedWithValue};return e.length===0?function(r){var i=kk(_v.apply(void 0,e),n);return i(r)}:NI(e)?function(r){var i=kk(_v.apply(void 0,e),n);return i(r)}:Mw()(e[0])}var Lw="listenerMiddleware";Us(Lw+"/add");Us(Lw+"/removeAll");Us(Lw+"/remove");var xk;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window!="undefined"?window:typeof global!="undefined"?global:globalThis);zF();/**
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
 */const OI=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},I8=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},RI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,d=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,v=c&63;u||(v=64,o||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(OI(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):I8(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new A8;const m=s<<2|a>>4;if(r.push(m),c!==64){const v=a<<4&240|c>>2;if(r.push(v),p!==64){const w=c<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class A8 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const b8=function(e){const t=OI(e);return RI.encodeByteArray(t,!0)},Gf=function(e){return b8(e).replace(/\./g,"")},PI=function(e){try{return RI.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function N8(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const O8=()=>N8().__FIREBASE_DEFAULTS__,R8=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},P8=()=>{if(typeof document=="undefined")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&PI(e[1]);return t&&JSON.parse(t)},ym=()=>{try{return O8()||R8()||P8()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},MI=e=>{var t,n;return(n=(t=ym())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},LI=e=>{const t=MI(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},M8=()=>{var e;return(e=ym())===null||e===void 0?void 0:e.config},$I=e=>{var t;return(t=ym())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class L8{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function FI(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Gf(JSON.stringify(n)),Gf(JSON.stringify(o)),a].join(".")}/**
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
 */function En(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $8(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(En())}function F8(){var e;const t=(e=ym())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function U8(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function B8(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function V8(){const e=En();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function z8(){try{return typeof indexedDB=="object"}catch{return!1}}function j8(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Y8="FirebaseError";class di extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Y8,Object.setPrototypeOf(this,di.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,th.prototype.create)}}class th{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?W8(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new di(i,a,r)}}function W8(e,t){return e.replace(H8,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const H8=/\{\$([^}]+)}/g;function G8(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function qf(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Tk(s)&&Tk(o)){if(!qf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tk(e){return e!==null&&typeof e=="object"}/**
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
 */function nh(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ku(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function xu(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function q8(e,t){const n=new K8(e,t);return n.subscribe.bind(n)}class K8{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Q8(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=O0),i.error===void 0&&(i.error=O0),i.complete===void 0&&(i.complete=O0);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Q8(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function O0(){}/**
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
 */function Qt(e){return e&&e._delegate?e._delegate:e}class Ks{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Co="[DEFAULT]";/**
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
 */class X8{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new L8;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Z8(t))try{this.getOrInitializeService({instanceIdentifier:Co})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Co){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Co){return this.instances.has(t)}getOptions(t=Co){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:J8(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Co){return this.component?this.component.multipleInstances?t:Co:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J8(e){return e===Co?void 0:e}function Z8(e){return e.instantiationMode==="EAGER"}/**
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
 */class eU{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new X8(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var je;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(je||(je={}));const tU={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},nU=je.INFO,rU={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},iU=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=rU[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $w{constructor(t){this.name=t,this._logLevel=nU,this._logHandler=iU,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in je))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?tU[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...t),this._logHandler(this,je.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...t),this._logHandler(this,je.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,je.INFO,...t),this._logHandler(this,je.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,je.WARN,...t),this._logHandler(this,je.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...t),this._logHandler(this,je.ERROR,...t)}}const sU=(e,t)=>t.some(n=>e instanceof n);let Dk,Ik;function oU(){return Dk||(Dk=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aU(){return Ik||(Ik=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const UI=new WeakMap,Sv=new WeakMap,BI=new WeakMap,R0=new WeakMap,Fw=new WeakMap;function lU(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Bs(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&UI.set(n,e)}).catch(()=>{}),Fw.set(t,e),t}function uU(e){if(Sv.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Sv.set(e,t)}let Ev={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Sv.get(e);if(t==="objectStoreNames")return e.objectStoreNames||BI.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bs(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function cU(e){Ev=e(Ev)}function hU(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(P0(this),t,...n);return BI.set(r,t.sort?t.sort():[t]),Bs(r)}:aU().includes(e)?function(...t){return e.apply(P0(this),t),Bs(UI.get(this))}:function(...t){return Bs(e.apply(P0(this),t))}}function dU(e){return typeof e=="function"?hU(e):(e instanceof IDBTransaction&&uU(e),sU(e,oU())?new Proxy(e,Ev):e)}function Bs(e){if(e instanceof IDBRequest)return lU(e);if(R0.has(e))return R0.get(e);const t=dU(e);return t!==e&&(R0.set(e,t),Fw.set(t,e)),t}const P0=e=>Fw.get(e);function fU(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Bs(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Bs(o.result),u.oldVersion,u.newVersion,Bs(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const pU=["get","getKey","getAll","getAllKeys","count"],mU=["put","add","delete","clear"],M0=new Map;function Ak(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(M0.get(t))return M0.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=mU.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pU.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return M0.set(t,s),s}cU(e=>({...e,get:(t,n,r)=>Ak(t,n)||e.get(t,n,r),has:(t,n)=>!!Ak(t,n)||e.has(t,n)}));/**
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
 */class gU{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yU(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yU(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Cv="@firebase/app",bk="0.9.9";/**
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
 */const Ho=new $w("@firebase/app"),vU="@firebase/app-compat",wU="@firebase/analytics-compat",_U="@firebase/analytics",SU="@firebase/app-check-compat",EU="@firebase/app-check",CU="@firebase/auth",kU="@firebase/auth-compat",xU="@firebase/database",TU="@firebase/database-compat",DU="@firebase/functions",IU="@firebase/functions-compat",AU="@firebase/installations",bU="@firebase/installations-compat",NU="@firebase/messaging",OU="@firebase/messaging-compat",RU="@firebase/performance",PU="@firebase/performance-compat",MU="@firebase/remote-config",LU="@firebase/remote-config-compat",$U="@firebase/storage",FU="@firebase/storage-compat",UU="@firebase/firestore",BU="@firebase/firestore-compat",VU="firebase",zU="9.21.0";/**
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
 */const kv="[DEFAULT]",jU={[Cv]:"fire-core",[vU]:"fire-core-compat",[_U]:"fire-analytics",[wU]:"fire-analytics-compat",[EU]:"fire-app-check",[SU]:"fire-app-check-compat",[CU]:"fire-auth",[kU]:"fire-auth-compat",[xU]:"fire-rtdb",[TU]:"fire-rtdb-compat",[DU]:"fire-fn",[IU]:"fire-fn-compat",[AU]:"fire-iid",[bU]:"fire-iid-compat",[NU]:"fire-fcm",[OU]:"fire-fcm-compat",[RU]:"fire-perf",[PU]:"fire-perf-compat",[MU]:"fire-rc",[LU]:"fire-rc-compat",[$U]:"fire-gcs",[FU]:"fire-gcs-compat",[UU]:"fire-fst",[BU]:"fire-fst-compat","fire-js":"fire-js",[VU]:"fire-js-all"};/**
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
 */const Kf=new Map,xv=new Map;function YU(e,t){try{e.container.addComponent(t)}catch(n){Ho.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Go(e){const t=e.name;if(xv.has(t))return Ho.debug(`There were multiple attempts to register component ${t}.`),!1;xv.set(t,e);for(const n of Kf.values())YU(n,e);return!0}function vm(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const WU={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vs=new th("app","Firebase",WU);/**
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
 */class HU{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vs.create("app-deleted",{appName:this._name})}}/**
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
 */const oa=zU;function VI(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:kv,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Vs.create("bad-app-name",{appName:String(i)});if(n||(n=M8()),!n)throw Vs.create("no-options");const s=Kf.get(i);if(s){if(qf(n,s.options)&&qf(r,s.config))return s;throw Vs.create("duplicate-app",{appName:i})}const o=new eU(i);for(const u of xv.values())o.addComponent(u);const a=new HU(n,r,o);return Kf.set(i,a),a}function Uw(e=kv){const t=Kf.get(e);if(!t&&e===kv)return VI();if(!t)throw Vs.create("no-app",{appName:e});return t}function ni(e,t,n){var r;let i=(r=jU[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ho.warn(a.join(" "));return}Go(new Ks(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const GU="firebase-heartbeat-database",qU=1,Sc="firebase-heartbeat-store";let L0=null;function zI(){return L0||(L0=fU(GU,qU,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Sc)}}}).catch(e=>{throw Vs.create("idb-open",{originalErrorMessage:e.message})})),L0}async function KU(e){try{return(await zI()).transaction(Sc).objectStore(Sc).get(jI(e))}catch(t){if(t instanceof di)Ho.warn(t.message);else{const n=Vs.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ho.warn(n.message)}}}async function Nk(e,t){try{const r=(await zI()).transaction(Sc,"readwrite");return await r.objectStore(Sc).put(t,jI(e)),r.done}catch(n){if(n instanceof di)Ho.warn(n.message);else{const r=Vs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ho.warn(r.message)}}}function jI(e){return`${e.name}!${e.options.appId}`}/**
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
 */const QU=1024,XU=30*24*60*60*1e3;class JU{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new e9(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ok();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=XU}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ok(),{heartbeatsToSend:n,unsentEntries:r}=ZU(this._heartbeatsCache.heartbeats),i=Gf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ok(){return new Date().toISOString().substring(0,10)}function ZU(e,t=QU){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Rk(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rk(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class e9{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z8()?j8().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await KU(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nk(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nk(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Rk(e){return Gf(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function t9(e){Go(new Ks("platform-logger",t=>new gU(t),"PRIVATE")),Go(new Ks("heartbeat",t=>new JU(t),"PRIVATE")),ni(Cv,bk,e),ni(Cv,bk,"esm2017"),ni("fire-js","")}t9("");function Bw(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function YI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const n9=YI,WI=new th("auth","Firebase",YI());/**
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
 */const Qf=new $w("@firebase/auth");function r9(e,...t){Qf.logLevel<=je.WARN&&Qf.warn(`Auth (${oa}): ${e}`,...t)}function Qd(e,...t){Qf.logLevel<=je.ERROR&&Qf.error(`Auth (${oa}): ${e}`,...t)}/**
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
 */function gr(e,...t){throw Vw(e,...t)}function ri(e,...t){return Vw(e,...t)}function HI(e,t,n){const r=Object.assign(Object.assign({},n9()),{[t]:n});return new th("auth","Firebase",r).create(t,{appName:e.name})}function i9(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&gr(e,"argument-error"),HI(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vw(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return WI.create(e,...t)}function ve(e,t,...n){if(!e)throw Vw(t,...n)}function Oi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Qd(t),new Error(t)}function Ki(e,t){e||Oi(t)}/**
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
 */function Tv(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function s9(){return Pk()==="http:"||Pk()==="https:"}function Pk(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function o9(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(s9()||U8()||"connection"in navigator)?navigator.onLine:!0}function a9(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class rh{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ki(n>t,"Short delay should be less than long delay!"),this.isMobile=$8()||B8()}get(){return o9()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zw(e,t){Ki(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class GI{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Oi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Oi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Oi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const l9={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const u9=new rh(3e4,6e4);function Ll(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function $l(e,t,n,r,i={}){return qI(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=nh(Object.assign({key:e.config.apiKey},o)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),GI.fetch()(KI(e,e.config.apiHost,n,a),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},s))})}async function qI(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},l9),t);try{const i=new c9(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Sd(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sd(e,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Sd(e,"email-already-in-use",o);if(u==="USER_DISABLED")throw Sd(e,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw HI(e,d,c);gr(e,d)}}catch(i){if(i instanceof di)throw i;gr(e,"network-request-failed",{message:String(i)})}}async function ih(e,t,n,r,i={}){const s=await $l(e,t,n,r,i);return"mfaPendingCredential"in s&&gr(e,"multi-factor-auth-required",{_serverResponse:s}),s}function KI(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?zw(e.config,i):`${e.config.apiScheme}://${i}`}class c9{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ri(this.auth,"network-request-failed")),u9.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sd(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ri(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function h9(e,t){return $l(e,"POST","/v1/accounts:delete",t)}async function d9(e,t){return $l(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Vu(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function f9(e,t=!1){const n=Qt(e),r=await n.getIdToken(t),i=jw(r);ve(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vu($0(i.auth_time)),issuedAtTime:Vu($0(i.iat)),expirationTime:Vu($0(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $0(e){return Number(e)*1e3}function jw(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Qd("JWT malformed, contained fewer than 3 sections"),null;try{const i=PI(n);return i?JSON.parse(i):(Qd("Failed to decode base64 JWT payload"),null)}catch(i){return Qd("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function p9(e){const t=jw(e);return ve(t,"internal-error"),ve(typeof t.exp!="undefined","internal-error"),ve(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ec(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof di&&m9(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function m9({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class g9{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class QI{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vu(this.lastLoginAt),this.creationTime=Vu(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xf(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ec(e,d9(n,{idToken:r}));ve(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?w9(s.providerUserInfo):[],a=v9(e.providerData,o),u=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new QI(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}async function y9(e){const t=Qt(e);await Xf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function v9(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function w9(e){return e.map(t=>{var{providerId:n}=t,r=Bw(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _9(e,t){const n=await qI(e,{},async()=>{const r=nh({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=KI(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",GI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Cc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ve(t.idToken,"internal-error"),ve(typeof t.idToken!="undefined","internal-error"),ve(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):p9(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return ve(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _9(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Cc;return r&&(ve(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(ve(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(ve(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Cc,this.toJSON())}_performRefresh(){return Oi("not implemented")}}/**
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
 */function hs(e,t){ve(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class Po{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Bw(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new g9(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new QI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ec(this,this.stsTokenManager.getToken(this.auth,t));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return f9(this,t)}reload(){return y9(this)}_assign(t){this!==t&&(ve(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Po(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Xf(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ec(this,h9(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:T,isAnonymous:A,providerData:O,stsTokenManager:b}=n;ve(C&&b,t,"internal-error");const N=Cc.fromJSON(this.name,b);ve(typeof C=="string",t,"internal-error"),hs(p,t.name),hs(m,t.name),ve(typeof T=="boolean",t,"internal-error"),ve(typeof A=="boolean",t,"internal-error"),hs(v,t.name),hs(w,t.name),hs(_,t.name),hs(x,t.name),hs(S,t.name),hs(y,t.name);const Z=new Po({uid:C,auth:t,email:m,emailVerified:T,displayName:p,isAnonymous:A,photoURL:w,phoneNumber:v,tenantId:_,stsTokenManager:N,createdAt:S,lastLoginAt:y});return O&&Array.isArray(O)&&(Z.providerData=O.map(F=>Object.assign({},F))),x&&(Z._redirectEventId=x),Z}static async _fromIdTokenResponse(t,n,r=!1){const i=new Cc;i.updateFromServerResponse(n);const s=new Po({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Xf(s),s}}/**
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
 */const Mk=new Map;function Ri(e){Ki(e instanceof Function,"Expected a class definition");let t=Mk.get(e);return t?(Ki(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Mk.set(e,t),t)}/**
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
 */class XI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}XI.type="NONE";const Lk=XI;/**
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
 */function Xd(e,t,n){return`firebase:${e}:${t}:${n}`}class Ja{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xd(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xd("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Po._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Ja(Ri(Lk),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ri(Lk);const o=Xd(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Po._fromJSON(t,d);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ja(s,t,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ja(s,t,r))}}/**
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
 */function $k(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(eA(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(JI(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(nA(t))return"Blackberry";if(rA(t))return"Webos";if(Yw(t))return"Safari";if((t.includes("chrome/")||ZI(t))&&!t.includes("edge/"))return"Chrome";if(tA(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function JI(e=En()){return/firefox\//i.test(e)}function Yw(e=En()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ZI(e=En()){return/crios\//i.test(e)}function eA(e=En()){return/iemobile/i.test(e)}function tA(e=En()){return/android/i.test(e)}function nA(e=En()){return/blackberry/i.test(e)}function rA(e=En()){return/webos/i.test(e)}function wm(e=En()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function S9(e=En()){var t;return wm(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function E9(){return V8()&&document.documentMode===10}function iA(e=En()){return wm(e)||tA(e)||rA(e)||nA(e)||/windows phone/i.test(e)||eA(e)}function C9(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function sA(e,t=[]){let n;switch(e){case"Browser":n=$k(En());break;case"Worker":n=`${$k(En())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${oa}/${r}`}async function oA(e,t){return $l(e,"GET","/v2/recaptchaConfig",Ll(e,t))}function Fk(e){return e!==void 0&&e.enterprise!==void 0}class aA{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function k9(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function lA(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ri("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",k9().appendChild(r)})}function x9(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const T9="https://www.google.com/recaptcha/enterprise.js?render=",D9="recaptcha-enterprise",I9="NO_RECAPTCHA";class uA{constructor(t){this.type=D9,this.auth=aa(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{oA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new aA(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Fk(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:t}).then(c=>{o(c)}).catch(()=>{o(I9)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Fk(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}lA(T9+a).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Jf(e,t,n,r=!1){const i=new uA(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class A9{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const u=t(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class b9{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uk(this),this.idTokenSubscription=new Uk(this),this.beforeStateQueue=new A9(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=WI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ri(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ja.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!o||o===a)&&(u==null?void 0:u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Xf(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=a9()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Qt(t):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ve(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ri(t))})}async initializeRecaptchaConfig(){const t=await oA(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new aA(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new uA(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new th("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ri(t)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await Ja.create(this,[Ri(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ve(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=sA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&r9(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function aa(e){return Qt(e)}class Uk{constructor(t){this.auth=t,this.observer=null,this.addObserver=q8(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function N9(e,t){const n=vm(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(qf(s,t!=null?t:{}))return i;gr(i,"already-initialized")}return n.initialize({options:t})}function O9(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ri);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function R9(e,t,n){const r=aa(e);ve(r._canInitEmulator,r,"emulator-config-failed"),ve(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=cA(t),{host:o,port:a}=P9(t),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||M9()}function cA(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function P9(e){const t=cA(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Bk(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Bk(o)}}}function Bk(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function M9(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Ww{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Oi("not implemented")}_getIdTokenResponse(t){return Oi("not implemented")}_linkToIdToken(t,n){return Oi("not implemented")}_getReauthenticationResolver(t){return Oi("not implemented")}}async function L9(e,t){return $l(e,"POST","/v1/accounts:update",t)}/**
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
 */async function F0(e,t){return ih(e,"POST","/v1/accounts:signInWithPassword",Ll(e,t))}/**
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
 */async function $9(e,t){return ih(e,"POST","/v1/accounts:signInWithEmailLink",Ll(e,t))}async function F9(e,t){return ih(e,"POST","/v1/accounts:signInWithEmailLink",Ll(e,t))}/**
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
 */class kc extends Ww{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new kc(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new kc(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Jf(t,r,"signInWithPassword");return F0(t,i)}else return F0(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Jf(t,r,"signInWithPassword");return F0(t,s)}else return Promise.reject(i)});case"emailLink":return $9(t,{email:this._email,oobCode:this._password});default:gr(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return L9(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return F9(t,{idToken:n,email:this._email,oobCode:this._password});default:gr(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Za(e,t){return ih(e,"POST","/v1/accounts:signInWithIdp",Ll(e,t))}/**
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
 */const U9="http://localhost";class qo extends Ww{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new qo(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):gr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Bw(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qo(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Za(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Za(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Za(t,n)}buildRequest(){const t={requestUri:U9,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=nh(n)}return t}}/**
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
 */function B9(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function V9(e){const t=ku(xu(e)).link,n=t?ku(xu(t)).deep_link_id:null,r=ku(xu(e)).deep_link_id;return(r?ku(xu(r)).link:null)||r||n||t||e}class Hw{constructor(t){var n,r,i,s,o,a;const u=ku(xu(t)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=B9((i=u.mode)!==null&&i!==void 0?i:null);ve(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=V9(t);try{return new Hw(n)}catch{return null}}}/**
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
 */class Fl{constructor(){this.providerId=Fl.PROVIDER_ID}static credential(t,n){return kc._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Hw.parseLink(n);return ve(r,"argument-error"),kc._fromEmailAndCode(t,r.code,r.tenantId)}}Fl.PROVIDER_ID="password";Fl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gw{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class sh extends Gw{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ys extends sh{constructor(){super("facebook.com")}static credential(t){return qo._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ys.credentialFromTaggedObject(t)}static credentialFromError(t){return ys.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ys.credential(t.oauthAccessToken)}catch{return null}}}ys.FACEBOOK_SIGN_IN_METHOD="facebook.com";ys.PROVIDER_ID="facebook.com";/**
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
 */class Ai extends sh{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return qo._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ai.credentialFromTaggedObject(t)}static credentialFromError(t){return Ai.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ai.credential(n,r)}catch{return null}}}Ai.GOOGLE_SIGN_IN_METHOD="google.com";Ai.PROVIDER_ID="google.com";/**
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
 */class vs extends sh{constructor(){super("github.com")}static credential(t){return qo._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return vs.credentialFromTaggedObject(t)}static credentialFromError(t){return vs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return vs.credential(t.oauthAccessToken)}catch{return null}}}vs.GITHUB_SIGN_IN_METHOD="github.com";vs.PROVIDER_ID="github.com";/**
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
 */class ws extends sh{constructor(){super("twitter.com")}static credential(t,n){return qo._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ws.credentialFromTaggedObject(t)}static credentialFromError(t){return ws.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return ws.credential(n,r)}catch{return null}}}ws.TWITTER_SIGN_IN_METHOD="twitter.com";ws.PROVIDER_ID="twitter.com";/**
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
 */async function U0(e,t){return ih(e,"POST","/v1/accounts:signUp",Ll(e,t))}/**
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
 */class Ko{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Po._fromIdTokenResponse(t,r,i),o=Vk(r);return new Ko({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Vk(r);return new Ko({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Vk(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Zf extends di{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zf.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Zf(t,n,r,i)}}function hA(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zf._fromErrorAndOperation(e,s,t,r):s})}async function z9(e,t,n=!1){const r=await Ec(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ko._forOperation(e,"link",r)}/**
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
 */async function j9(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Ec(e,hA(r,i,t,e),n);ve(s.idToken,r,"internal-error");const o=jw(s.idToken);ve(o,r,"internal-error");const{sub:a}=o;return ve(e.uid===a,r,"user-mismatch"),Ko._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&gr(r,"user-mismatch"),s}}/**
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
 */async function dA(e,t,n=!1){const r="signIn",i=await hA(e,r,t),s=await Ko._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Y9(e,t){return dA(aa(e),t)}async function W9(e,t,n){var r;const i=aa(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await Jf(i,s,"signUpPassword");o=U0(i,c)}else o=U0(i,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const d=await Jf(i,s,"signUpPassword");return U0(i,d)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),u=await Ko._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(u.user),u}function H9(e,t,n){return Y9(Qt(e),Fl.credential(t,n))}/**
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
 */function fA(e,t){return Qt(e).setPersistence(t)}function G9(e,t,n,r){return Qt(e).onIdTokenChanged(t,n,r)}function q9(e,t,n){return Qt(e).beforeAuthStateChanged(t,n)}function K9(e){return Qt(e).signOut()}const ep="__sak";/**
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
 */class pA{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ep,"1"),this.storage.removeItem(ep),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Q9(){const e=En();return Yw(e)||wm(e)}const X9=1e3,J9=10;class mA extends pA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Q9()&&C9(),this.fallbackToPolling=iA(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);E9()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,J9):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},X9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}mA.type="LOCAL";const qw=mA;/**
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
 */class gA extends pA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}gA.type="SESSION";const yA=gA;/**
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
 */function Z9(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _m{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new _m(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await Z9(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_m.receivers=[];/**
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
 */function Kw(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class e7{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Kw("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ii(){return window}function t7(e){ii().location.href=e}/**
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
 */function vA(){return typeof ii().WorkerGlobalScope!="undefined"&&typeof ii().importScripts=="function"}async function n7(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r7(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function i7(){return vA()?self:null}/**
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
 */const wA="firebaseLocalStorageDb",s7=1,tp="firebaseLocalStorage",_A="fbase_key";class oh{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sm(e,t){return e.transaction([tp],t?"readwrite":"readonly").objectStore(tp)}function o7(){const e=indexedDB.deleteDatabase(wA);return new oh(e).toPromise()}function Dv(){const e=indexedDB.open(wA,s7);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(tp,{keyPath:_A})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(tp)?t(r):(r.close(),await o7(),t(await Dv()))})})}async function zk(e,t,n){const r=Sm(e,!0).put({[_A]:t,value:n});return new oh(r).toPromise()}async function a7(e,t){const n=Sm(e,!1).get(t),r=await new oh(n).toPromise();return r===void 0?null:r.value}function jk(e,t){const n=Sm(e,!0).delete(t);return new oh(n).toPromise()}const l7=800,u7=3;class SA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dv(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>u7)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_m._getInstance(i7()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await n7(),!this.activeServiceWorker)return;this.sender=new e7(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||r7()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Dv();return await zk(t,ep,"1"),await jk(t,ep),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zk(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>a7(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>jk(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Sm(i,!1).getAll();return new oh(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),l7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}SA.type="LOCAL";const c7=SA;new rh(3e4,6e4);/**
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
 */function EA(e,t){return t?Ri(t):(ve(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Qw extends Ww{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Za(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Za(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Za(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function h7(e){return dA(e.auth,new Qw(e),e.bypassAuthState)}function d7(e){const{auth:t,user:n}=e;return ve(n,t,"internal-error"),j9(n,new Qw(e),e.bypassAuthState)}async function f7(e){const{auth:t,user:n}=e;return ve(n,t,"internal-error"),z9(n,new Qw(e),e.bypassAuthState)}/**
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
 */class CA{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return h7;case"linkViaPopup":case"linkViaRedirect":return f7;case"reauthViaPopup":case"reauthViaRedirect":return d7;default:gr(this.auth,"internal-error")}}resolve(t){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const p7=new rh(2e3,1e4);async function m7(e,t,n){const r=aa(e);i9(e,t,Gw);const i=EA(r,n);return new Do(r,"signInViaPopup",t,i).executeNotNull()}class Do extends CA{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Do.currentPopupAction&&Do.currentPopupAction.cancel(),Do.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ve(t,this.auth,"internal-error"),t}async onExecution(){Ki(this.filter.length===1,"Popup operations only handle one event");const t=Kw();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ri(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ri(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Do.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ri(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,p7.get())};t()}}Do.currentPopupAction=null;/**
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
 */const g7="pendingRedirect",Jd=new Map;class y7 extends CA{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Jd.get(this.auth._key());if(!t){try{const r=await v7(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Jd.set(this.auth._key(),t)}return this.bypassAuthState||Jd.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function v7(e,t){const n=S7(t),r=_7(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function w7(e,t){Jd.set(e._key(),t)}function _7(e){return Ri(e._redirectPersistence)}function S7(e){return Xd(g7,e.config.apiKey,e.name)}async function E7(e,t,n=!1){const r=aa(e),i=EA(r,t),o=await new y7(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const C7=10*60*1e3;class k7{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!x7(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!kA(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ri(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=C7&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yk(t))}saveEventToCache(t){this.cachedEventUids.add(Yk(t)),this.lastProcessedEventTime=Date.now()}}function Yk(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function kA({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function x7(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kA(e);default:return!1}}/**
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
 */async function T7(e,t={}){return $l(e,"GET","/v1/projects",t)}/**
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
 */const D7=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,I7=/^https?/;async function A7(e){if(e.config.emulator)return;const{authorizedDomains:t}=await T7(e);for(const n of t)try{if(b7(n))return}catch{}gr(e,"unauthorized-domain")}function b7(e){const t=Tv(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!I7.test(n))return!1;if(D7.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const N7=new rh(3e4,6e4);function Wk(){const e=ii().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function O7(e){return new Promise((t,n)=>{var r,i,s;function o(){Wk(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Wk(),n(ri(e,"network-request-failed"))},timeout:N7.get()})}if(!((i=(r=ii().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ii().gapi)===null||s===void 0)&&s.load)o();else{const a=x9("iframefcb");return ii()[a]=()=>{gapi.load?o():n(ri(e,"network-request-failed"))},lA(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(t=>{throw Zd=null,t})}let Zd=null;function R7(e){return Zd=Zd||O7(e),Zd}/**
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
 */const P7=new rh(5e3,15e3),M7="__/auth/iframe",L7="emulator/auth/iframe",$7={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},F7=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function U7(e){const t=e.config;ve(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?zw(t,L7):`https://${e.config.authDomain}/${M7}`,r={apiKey:t.apiKey,appName:e.name,v:oa},i=F7.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${nh(r).slice(1)}`}async function B7(e){const t=await R7(e),n=ii().gapi;return ve(n,e,"internal-error"),t.open({where:document.body,url:U7(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$7,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ri(e,"network-request-failed"),a=ii().setTimeout(()=>{s(o)},P7.get());function u(){ii().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const V7={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},z7=500,j7=600,Y7="_blank",W7="http://localhost";class Hk{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function H7(e,t,n,r=z7,i=j7){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},V7),{width:r.toString(),height:i.toString(),top:s,left:o}),c=En().toLowerCase();n&&(a=ZI(c)?Y7:n),JI(c)&&(t=t||W7,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[v,w])=>`${m}${v}=${w},`,"");if(S9(c)&&a!=="_self")return G7(t||"",a),new Hk(null);const p=window.open(t||"",a,d);ve(p,e,"popup-blocked");try{p.focus()}catch{}return new Hk(p)}function G7(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const q7="__/auth/handler",K7="emulator/auth/handler",Q7=encodeURIComponent("fac");async function Gk(e,t,n,r,i,s){ve(e.config.authDomain,e,"auth-domain-config-required"),ve(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:oa,eventId:i};if(t instanceof Gw){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",G8(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,p]of Object.entries(s||{}))o[d]=p}if(t instanceof sh){const d=t.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await e._getAppCheckToken(),c=u?`#${Q7}=${encodeURIComponent(u)}`:"";return`${X7(e)}?${nh(a).slice(1)}${c}`}function X7({config:e}){return e.emulator?zw(e,K7):`https://${e.authDomain}/${q7}`}/**
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
 */const B0="webStorageSupport";class J7{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yA,this._completeRedirectFn=E7,this._overrideRedirectResult=w7}async _openPopup(t,n,r,i){var s;Ki((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Gk(t,n,r,Tv(),i);return H7(t,o,Kw())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Gk(t,n,r,Tv(),i);return t7(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ki(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await B7(t),r=new k7(t);return n.register("authEvent",i=>(ve(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(B0,{type:B0},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[B0];o!==void 0&&n(!!o),gr(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=A7(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return iA()||Yw()||wm()}}const Z7=J7;var qk="@firebase/auth",Kk="0.23.1";/**
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
 */class eB{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tB(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nB(e){Go(new Ks("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),ve(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sA(e)},c=new b9(r,i,s,u);return O9(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Go(new Ks("auth-internal",t=>{const n=aa(t.getProvider("auth").getImmediate());return(r=>new eB(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ni(qk,Kk,tB(e)),ni(qk,Kk,"esm2017")}/**
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
 */const rB=5*60,iB=$I("authIdTokenMaxAge")||rB;let Qk=null;const sB=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iB)return;const i=n==null?void 0:n.token;Qk!==i&&(Qk=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oB(e=Uw()){const t=vm(e,"auth");if(t.isInitialized())return t.getImmediate();const n=N9(e,{popupRedirectResolver:Z7,persistence:[c7,qw,yA]}),r=$I("authTokenSyncURL");if(r){const s=sB(r);q9(n,s,()=>s(n.currentUser)),G9(n,o=>s(o))}const i=MI("auth");return i&&R9(n,`http://${i}`),n}nB("Browser");var aB="firebase",lB="9.21.0";/**
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
 */ni(aB,lB,"app");var uB=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},re,Xw=Xw||{},Ee=uB||self;function np(){}function Em(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ah(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function cB(e){return Object.prototype.hasOwnProperty.call(e,V0)&&e[V0]||(e[V0]=++hB)}var V0="closure_uid_"+(1e9*Math.random()>>>0),hB=0;function dB(e,t,n){return e.call.apply(e.bind,arguments)}function fB(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function yn(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?yn=dB:yn=fB,yn.apply(null,arguments)}function Ed(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Zt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function oo(){this.s=this.s,this.o=this.o}var pB=0;oo.prototype.s=!1;oo.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),pB!=0)&&cB(this)};oo.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xA=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Jw(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Xk(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Em(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function vn(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}vn.prototype.h=function(){this.defaultPrevented=!0};var mB=function(){if(!Ee.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Ee.addEventListener("test",np,t),Ee.removeEventListener("test",np,t)}catch{}return e}();function rp(e){return/^[\s\xa0]*$/.test(e)}var Jk=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function z0(e,t){return e<t?-1:e>t?1:0}function Cm(){var e=Ee.navigator;return e&&(e=e.userAgent)?e:""}function qr(e){return Cm().indexOf(e)!=-1}function Zw(e){return Zw[" "](e),e}Zw[" "]=np;function TA(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}var gB=qr("Opera"),wl=qr("Trident")||qr("MSIE"),DA=qr("Edge"),Iv=DA||wl,IA=qr("Gecko")&&!(Cm().toLowerCase().indexOf("webkit")!=-1&&!qr("Edge"))&&!(qr("Trident")||qr("MSIE"))&&!qr("Edge"),yB=Cm().toLowerCase().indexOf("webkit")!=-1&&!qr("Edge");function AA(){var e=Ee.document;return e?e.documentMode:void 0}var ip;e:{var j0="",Y0=function(){var e=Cm();if(IA)return/rv:([^\);]+)(\)|;)/.exec(e);if(DA)return/Edge\/([\d\.]+)/.exec(e);if(wl)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(yB)return/WebKit\/(\S+)/.exec(e);if(gB)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Y0&&(j0=Y0?Y0[1]:""),wl){var W0=AA();if(W0!=null&&W0>parseFloat(j0)){ip=String(W0);break e}}ip=j0}var vB={};function wB(){return TA(vB,9,function(){let e=0;const t=Jk(String(ip)).split("."),n=Jk("9").split("."),r=Math.max(t.length,n.length);for(let o=0;e==0&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;e=z0(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||z0(i[2].length==0,s[2].length==0)||z0(i[2],s[2]),i=i[3],s=s[3]}while(e==0)}return 0<=e})}var Av;if(Ee.document&&wl){var Zk=AA();Av=Zk||parseInt(ip,10)||void 0}else Av=void 0;var _B=Av;function xc(e,t){if(vn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(IA){e:{try{Zw(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:SB[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&xc.$.h.call(this)}}Zt(xc,vn);var SB={2:"touch",3:"pen",4:"mouse"};xc.prototype.h=function(){xc.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var lh="closure_listenable_"+(1e6*Math.random()|0),EB=0;function CB(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++EB,this.fa=this.ia=!1}function km(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function e_(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function bA(e){const t={};for(const n in e)t[n]=e[n];return t}const ex="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function NA(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<ex.length;s++)n=ex[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function xm(e){this.src=e,this.g={},this.h=0}xm.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Nv(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new CB(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function bv(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=xA(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(km(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Nv(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var t_="closure_lm_"+(1e6*Math.random()|0),H0={};function OA(e,t,n,r,i){if(r&&r.once)return PA(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)OA(e,t[s],n,r,i);return null}return n=i_(n),e&&e[lh]?e.O(t,n,ah(r)?!!r.capture:!!r,i):RA(e,t,n,!1,r,i)}function RA(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=ah(i)?!!i.capture:!!i,a=r_(e);if(a||(e[t_]=a=new xm(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=kB(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)mB||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(LA(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function kB(){function e(n){return t.call(e.src,e.listener,n)}const t=xB;return e}function PA(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)PA(e,t[s],n,r,i);return null}return n=i_(n),e&&e[lh]?e.P(t,n,ah(r)?!!r.capture:!!r,i):RA(e,t,n,!0,r,i)}function MA(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)MA(e,t[s],n,r,i);else r=ah(r)?!!r.capture:!!r,n=i_(n),e&&e[lh]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Nv(s,n,r,i),-1<n&&(km(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=r_(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Nv(t,n,r,i)),(n=-1<e?t[e]:null)&&n_(n))}function n_(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[lh])bv(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(LA(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=r_(t))?(bv(n,e),n.h==0&&(n.src=null,t[t_]=null)):km(e)}}}function LA(e){return e in H0?H0[e]:H0[e]="on"+e}function xB(e,t){if(e.fa)e=!0;else{t=new xc(t,this);var n=e.listener,r=e.la||e.src;e.ia&&n_(e),e=n.call(r,t)}return e}function r_(e){return e=e[t_],e instanceof xm?e:null}var G0="__closure_events_fn_"+(1e9*Math.random()>>>0);function i_(e){return typeof e=="function"?e:(e[G0]||(e[G0]=function(t){return e.handleEvent(t)}),e[G0])}function Xt(){oo.call(this),this.i=new xm(this),this.S=this,this.J=null}Zt(Xt,oo);Xt.prototype[lh]=!0;Xt.prototype.removeEventListener=function(e,t,n,r){MA(this,e,t,n,r)};function sn(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new vn(t,e);else if(t instanceof vn)t.target=t.target||e;else{var i=t;t=new vn(r,e),NA(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Cd(o,r,!0,t)&&i}if(o=t.g=e,i=Cd(o,r,!0,t)&&i,i=Cd(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Cd(o,r,!1,t)&&i}Xt.prototype.N=function(){if(Xt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)km(n[r]);delete e.g[t],e.h--}}this.J=null};Xt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Xt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Cd(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&bv(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var s_=Ee.JSON.stringify;function TB(){var e=UA;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class DB{constructor(){this.h=this.g=null}add(t,n){const r=$A.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var $A=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new IB,e=>e.reset());class IB{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function AB(e){Ee.setTimeout(()=>{throw e},0)}function FA(e,t){Ov||bB(),Rv||(Ov(),Rv=!0),UA.add(e,t)}var Ov;function bB(){var e=Ee.Promise.resolve(void 0);Ov=function(){e.then(NB)}}var Rv=!1,UA=new DB;function NB(){for(var e;e=TB();){try{e.h.call(e.g)}catch(n){AB(n)}var t=$A;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Rv=!1}function Tm(e,t){Xt.call(this),this.h=e||1,this.g=t||Ee,this.j=yn(this.qb,this),this.l=Date.now()}Zt(Tm,Xt);re=Tm.prototype;re.ga=!1;re.T=null;re.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),sn(this,"tick"),this.ga&&(o_(this),this.start()))}};re.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function o_(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}re.N=function(){Tm.$.N.call(this),o_(this),delete this.g};function a_(e,t,n){if(typeof e=="function")n&&(e=yn(e,n));else if(e&&typeof e.handleEvent=="function")e=yn(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:Ee.setTimeout(e,t||0)}function BA(e){e.g=a_(()=>{e.g=null,e.i&&(e.i=!1,BA(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class OB extends oo{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:BA(this)}N(){super.N(),this.g&&(Ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tc(e){oo.call(this),this.h=e,this.g={}}Zt(Tc,oo);var tx=[];function VA(e,t,n,r){Array.isArray(n)||(n&&(tx[0]=n.toString()),n=tx);for(var i=0;i<n.length;i++){var s=OA(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function zA(e){e_(e.g,function(t,n){this.g.hasOwnProperty(n)&&n_(t)},e),e.g={}}Tc.prototype.N=function(){Tc.$.N.call(this),zA(this)};Tc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Dm(){this.g=!0}Dm.prototype.Ea=function(){this.g=!1};function RB(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var d=c[0];c=c[1];var p=d.split("_");o=2<=p.length&&p[1]=="type"?o+(d+"="+c+"&"):o+(d+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function PB(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Va(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+LB(e,n)+(r?" "+r:"")})}function MB(e,t){e.info(function(){return"TIMEOUT: "+t})}Dm.prototype.info=function(){};function LB(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return s_(n)}catch{return t}}var la={},nx=null;function Im(){return nx=nx||new Xt}la.Ta="serverreachability";function jA(e){vn.call(this,la.Ta,e)}Zt(jA,vn);function Dc(e){const t=Im();sn(t,new jA(t))}la.STAT_EVENT="statevent";function YA(e,t){vn.call(this,la.STAT_EVENT,e),this.stat=t}Zt(YA,vn);function On(e){const t=Im();sn(t,new YA(t,e))}la.Ua="timingevent";function WA(e,t){vn.call(this,la.Ua,e),this.size=t}Zt(WA,vn);function uh(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return Ee.setTimeout(function(){e()},t)}var Am={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},HA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function l_(){}l_.prototype.h=null;function rx(e){return e.h||(e.h=e.i())}function GA(){}var ch={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function u_(){vn.call(this,"d")}Zt(u_,vn);function c_(){vn.call(this,"c")}Zt(c_,vn);var Pv;function bm(){}Zt(bm,l_);bm.prototype.g=function(){return new XMLHttpRequest};bm.prototype.i=function(){return{}};Pv=new bm;function hh(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Tc(this),this.P=$B,e=Iv?125:void 0,this.V=new Tm(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new qA}function qA(){this.i=null,this.g="",this.h=!1}var $B=45e3,Mv={},sp={};re=hh.prototype;re.setTimeout=function(e){this.P=e};function Lv(e,t,n){e.L=1,e.v=Om(Qi(t)),e.s=n,e.S=!0,KA(e,null)}function KA(e,t){e.G=Date.now(),dh(e),e.A=Qi(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),rb(n.i,"t",r),e.C=0,n=e.l.I,e.h=new qA,e.g=kb(e.l,n?t:null,!e.s),0<e.O&&(e.M=new OB(yn(e.Pa,e,e.g),e.O)),VA(e.U,e.g,"readystatechange",e.nb),t=e.I?bA(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Dc(),RB(e.j,e.u,e.A,e.m,e.W,e.s)}re.nb=function(e){e=e.target;const t=this.M;t&&Pi(e)==3?t.l():this.Pa(e)};re.Pa=function(e){try{if(e==this.g)e:{const d=Pi(this.g);var t=this.g.Ia();const p=this.g.da();if(!(3>d)&&(d!=3||Iv||this.g&&(this.h.h||this.g.ja()||ax(this.g)))){this.J||d!=4||t==7||(t==8||0>=p?Dc(3):Dc(2)),Nm(this);var n=this.g.da();this.aa=n;t:if(QA(this)){var r=ax(this.g);e="";var i=r.length,s=Pi(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Io(this),zu(this);var o="";break t}this.h.i=new Ee.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,PB(this.j,this.u,this.A,this.m,this.W,d,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rp(a)){var c=a;break t}}c=null}if(n=c)Va(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$v(this,n);else{this.i=!1,this.o=3,On(12),Io(this),zu(this);break e}}this.S?(XA(this,d,o),Iv&&this.i&&d==3&&(VA(this.U,this.V,"tick",this.mb),this.V.start())):(Va(this.j,this.m,o,null),$v(this,o)),d==4&&Io(this),this.i&&!this.J&&(d==4?_b(this.l,this):(this.i=!1,dh(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,On(12)):(this.o=0,On(13)),Io(this),zu(this)}}}catch{}finally{}};function QA(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function XA(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=FB(e,n),i==sp){t==4&&(e.o=4,On(14),r=!1),Va(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Mv){e.o=4,On(15),Va(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Va(e.j,e.m,i,null),$v(e,i);QA(e)&&i!=sp&&i!=Mv&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,On(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),y_(t),t.L=!0,On(11))):(Va(e.j,e.m,n,"[Invalid Chunked Response]"),Io(e),zu(e))}re.mb=function(){if(this.g){var e=Pi(this.g),t=this.g.ja();this.C<t.length&&(Nm(this),XA(this,e,t),this.i&&e!=4&&dh(this))}};function FB(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?sp:(n=Number(t.substring(n,r)),isNaN(n)?Mv:(r+=1,r+n>t.length?sp:(t=t.substr(r,n),e.C=r+n,t)))}re.cancel=function(){this.J=!0,Io(this)};function dh(e){e.Y=Date.now()+e.P,JA(e,e.P)}function JA(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=uh(yn(e.lb,e),t)}function Nm(e){e.B&&(Ee.clearTimeout(e.B),e.B=null)}re.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(MB(this.j,this.A),this.L!=2&&(Dc(),On(17)),Io(this),this.o=2,zu(this)):JA(this,this.Y-e)};function zu(e){e.l.H==0||e.J||_b(e.l,e)}function Io(e){Nm(e);var t=e.M;t&&typeof t.ra=="function"&&t.ra(),e.M=null,o_(e.V),zA(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function $v(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Fv(n.h,e))){if(!e.K&&Fv(n.h,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)lp(n),Mm(n);else break e;g_(n),On(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=uh(yn(n.ib,n),6e3));if(1>=ob(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Ao(n,11)}else if((e.K||n.g==e)&&lp(n),!rp(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const d=c[3];d!=null&&(n.qa=d,n.j.info("VER="+n.qa));const p=c[4];p!=null&&(n.Ga=p,n.j.info("SVER="+n.Ga));const m=c[5];m!=null&&typeof m=="number"&&0<m&&(r=1.5*m,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const v=e.g;if(v){const w=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.h;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(h_(s,s.h),s.h=null))}if(r.F){const _=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,mt(r.G,r.F,_))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Cb(r,r.I?r.oa:null,r.Y),o.K){ab(r.h,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(Nm(a),dh(a)),r.g=o}else vb(r);0<n.i.length&&Lm(n)}else c[0]!="stop"&&c[0]!="close"||Ao(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ao(n,7):m_(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}Dc(4)}catch{}}function UB(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map!="undefined"&&e instanceof Map||typeof Set!="undefined"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Em(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function BB(e){if(e.sa&&typeof e.sa=="function")return e.sa();if(!e.Z||typeof e.Z!="function"){if(typeof Map!="undefined"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set!="undefined"&&e instanceof Set)){if(Em(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function ZA(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Em(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=BB(e),r=UB(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var eb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VB(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Mo(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Mo){this.h=t!==void 0?t:e.h,op(this,e.j),this.s=e.s,this.g=e.g,ap(this,e.m),this.l=e.l,t=e.i;var n=new Ic;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ix(this,n),this.o=e.o}else e&&(n=String(e).match(eb))?(this.h=!!t,op(this,n[1]||"",!0),this.s=Tu(n[2]||""),this.g=Tu(n[3]||"",!0),ap(this,n[4]),this.l=Tu(n[5]||"",!0),ix(this,n[6]||"",!0),this.o=Tu(n[7]||"")):(this.h=!!t,this.i=new Ic(null,this.h))}Mo.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Du(t,sx,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Du(t,sx,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Du(n,n.charAt(0)=="/"?YB:jB,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Du(n,HB)),e.join("")};function Qi(e){return new Mo(e)}function op(e,t,n){e.j=n?Tu(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ap(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ix(e,t,n){t instanceof Ic?(e.i=t,GB(e.i,e.h)):(n||(t=Du(t,WB)),e.i=new Ic(t,e.h))}function mt(e,t,n){e.i.set(t,n)}function Om(e){return mt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Tu(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Du(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,zB),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function zB(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var sx=/[#\/\?@]/g,jB=/[#\?:]/g,YB=/[#\?]/g,WB=/[#\?@]/g,HB=/#/g;function Ic(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ao(e){e.g||(e.g=new Map,e.h=0,e.i&&VB(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}re=Ic.prototype;re.add=function(e,t){ao(this),this.i=null,e=Ul(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function tb(e,t){ao(e),t=Ul(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nb(e,t){return ao(e),t=Ul(e,t),e.g.has(t)}re.forEach=function(e,t){ao(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};re.sa=function(){ao(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};re.Z=function(e){ao(this);let t=[];if(typeof e=="string")nb(this,e)&&(t=t.concat(this.g.get(Ul(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};re.set=function(e,t){return ao(this),this.i=null,e=Ul(this,e),nb(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};re.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function rb(e,t,n){tb(e,t),0<n.length&&(e.i=null,e.g.set(Ul(e,t),Jw(n)),e.h+=n.length)}re.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Ul(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function GB(e,t){t&&!e.j&&(ao(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(tb(this,r),rb(this,i,n))},e)),e.j=t}var qB=class{constructor(e,t){this.h=e,this.g=t}};function ib(e){this.l=e||KB,Ee.PerformanceNavigationTiming?(e=Ee.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(Ee.g&&Ee.g.Ka&&Ee.g.Ka()&&Ee.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var KB=10;function sb(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ob(e){return e.h?1:e.g?e.g.size:0}function Fv(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function h_(e,t){e.g?e.g.add(t):e.h=t}function ab(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ib.prototype.cancel=function(){if(this.i=lb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function lb(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Jw(e.i)}function d_(){}d_.prototype.stringify=function(e){return Ee.JSON.stringify(e,void 0)};d_.prototype.parse=function(e){return Ee.JSON.parse(e,void 0)};function QB(){this.g=new d_}function XB(e,t,n){const r=n||"";try{ZA(e,function(i,s){let o=i;ah(i)&&(o=s_(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function JB(e,t){const n=new Dm;if(Ee.Image){const r=new Image;r.onload=Ed(kd,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ed(kd,n,r,"TestLoadImage: error",!1,t),r.onabort=Ed(kd,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ed(kd,n,r,"TestLoadImage: timeout",!1,t),Ee.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function kd(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function fh(e){this.l=e.fc||null,this.j=e.ob||!1}Zt(fh,l_);fh.prototype.g=function(){return new Rm(this.l,this.j)};fh.prototype.i=function(e){return function(){return e}}({});function Rm(e,t){Xt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=f_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Zt(Rm,Xt);var f_=0;re=Rm.prototype;re.open=function(e,t){if(this.readyState!=f_)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ac(this)};re.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Ee).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};re.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ph(this)),this.readyState=f_};re.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ac(this)),this.g&&(this.readyState=3,Ac(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Ee.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ub(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function ub(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}re.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ph(this):Ac(this),this.readyState==3&&ub(this)}};re.Za=function(e){this.g&&(this.response=this.responseText=e,ph(this))};re.Ya=function(e){this.g&&(this.response=e,ph(this))};re.ka=function(){this.g&&ph(this)};function ph(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ac(e)}re.setRequestHeader=function(e,t){this.v.append(e,t)};re.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};re.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ac(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Rm.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ZB=Ee.JSON.parse;function xt(e){Xt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=cb,this.L=this.M=!1}Zt(xt,Xt);var cb="",eV=/^https?$/i,tV=["POST","PUT"];re=xt.prototype;re.Oa=function(e){this.M=e};re.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Pv.g(),this.C=this.u?rx(this.u):rx(Pv),this.g.onreadystatechange=yn(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){ox(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Ee.FormData&&e instanceof Ee.FormData,!(0<=xA(tV,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{fb(this),0<this.B&&((this.L=nV(this.g))?(this.g.timeout=this.B,this.g.ontimeout=yn(this.ua,this)):this.A=a_(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){ox(this,s)}};function nV(e){return wl&&wB()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}re.ua=function(){typeof Xw!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,sn(this,"timeout"),this.abort(8))};function ox(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,hb(e),Pm(e)}function hb(e){e.F||(e.F=!0,sn(e,"complete"),sn(e,"error"))}re.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,sn(this,"complete"),sn(this,"abort"),Pm(this))};re.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pm(this,!0)),xt.$.N.call(this)};re.La=function(){this.s||(this.G||this.v||this.l?db(this):this.kb())};re.kb=function(){db(this)};function db(e){if(e.h&&typeof Xw!="undefined"&&(!e.C[1]||Pi(e)!=4||e.da()!=2)){if(e.v&&Pi(e)==4)a_(e.La,0,e);else if(sn(e,"readystatechange"),Pi(e)==4){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.I).match(eb)[1]||null;if(!i&&Ee.self&&Ee.self.location){var s=Ee.self.location.protocol;i=s.substr(0,s.length-1)}r=!eV.test(i?i.toLowerCase():"")}n=r}if(n)sn(e,"complete"),sn(e,"success");else{e.m=6;try{var o=2<Pi(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",hb(e)}}finally{Pm(e)}}}}function Pm(e,t){if(e.g){fb(e);const n=e.g,r=e.C[0]?np:null;e.g=null,e.C=null,t||sn(e,"ready");try{n.onreadystatechange=r}catch{}}}function fb(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Ee.clearTimeout(e.A),e.A=null)}function Pi(e){return e.g?e.g.readyState:0}re.da=function(){try{return 2<Pi(this)?this.g.status:-1}catch{return-1}};re.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};re.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ZB(t)}};function ax(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case cb:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}re.Ia=function(){return this.m};re.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function pb(e){let t="";return e_(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function p_(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=pb(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):mt(e,t,n))}function fu(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function mb(e){this.Ga=0,this.i=[],this.j=new Dm,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=fu("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=fu("baseRetryDelayMs",5e3,e),this.hb=fu("retryDelaySeedMs",1e4,e),this.eb=fu("forwardChannelMaxRetries",2,e),this.xa=fu("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new ib(e&&e.concurrentRequestLimit),this.Ja=new QB,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}re=mb.prototype;re.qa=8;re.H=1;function m_(e){if(gb(e),e.H==3){var t=e.W++,n=Qi(e.G);mt(n,"SID",e.J),mt(n,"RID",t),mt(n,"TYPE","terminate"),mh(e,n),t=new hh(e,e.j,t,void 0),t.L=2,t.v=Om(Qi(n)),n=!1,Ee.navigator&&Ee.navigator.sendBeacon&&(n=Ee.navigator.sendBeacon(t.v.toString(),"")),!n&&Ee.Image&&(new Image().src=t.v,n=!0),n||(t.g=kb(t.l,null),t.g.ha(t.v)),t.G=Date.now(),dh(t)}Eb(e)}function Mm(e){e.g&&(y_(e),e.g.cancel(),e.g=null)}function gb(e){Mm(e),e.u&&(Ee.clearTimeout(e.u),e.u=null),lp(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&Ee.clearTimeout(e.m),e.m=null)}function Lm(e){sb(e.h)||e.m||(e.m=!0,FA(e.Na,e),e.C=0)}function rV(e,t){return ob(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.F.concat(e.i),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=uh(yn(e.Na,e,t),Sb(e,e.C)),e.C++,!0)}re.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new hh(this,this.j,e,void 0);let s=this.s;if(this.U&&(s?(s=bA(s),NA(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=yb(this,i,t),n=Qi(this.G),mt(n,"RID",e),mt(n,"CVER",22),this.F&&mt(n,"X-HTTP-Session-Id",this.F),mh(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(pb(s)))+"&"+t:this.o&&p_(n,this.o,s)),h_(this.h,i),this.bb&&mt(n,"TYPE","init"),this.P?(mt(n,"$req",t),mt(n,"SID","null"),i.ba=!0,Lv(i,n,null)):Lv(i,n,t),this.H=2}}else this.H==3&&(e?lx(this,e):this.i.length==0||sb(this.h)||lx(this))};function lx(e,t){var n;t?n=t.m:n=e.W++;const r=Qi(e.G);mt(r,"SID",e.J),mt(r,"RID",n),mt(r,"AID",e.V),mh(e,r),e.o&&e.s&&p_(r,e.o,e.s),n=new hh(e,e.j,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=yb(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),h_(e.h,n),Lv(n,r,t)}function mh(e,t){e.ma&&e_(e.ma,function(n,r){mt(t,r,n)}),e.l&&ZA({},function(n,r){mt(t,r,n)})}function yb(e,t,n){n=Math.min(e.i.length,n);var r=e.l?yn(e.l.Va,e.l,e):null;e:{var i=e.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let c=i[u].h;const d=i[u].g;if(c-=s,0>c)s=Math.max(0,i[u].h-100),a=!1;else try{XB(d,o,"req"+c+"_")}catch{r&&r(d)}}if(a){r=o.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,r}function vb(e){e.g||e.u||(e.ba=1,FA(e.Ma,e),e.A=0)}function g_(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=uh(yn(e.Ma,e),Sb(e,e.A)),e.A++,!0)}re.Ma=function(){if(this.u=null,wb(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=uh(yn(this.jb,this),e)}};re.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,On(10),Mm(this),wb(this))};function y_(e){e.B!=null&&(Ee.clearTimeout(e.B),e.B=null)}function wb(e){e.g=new hh(e,e.j,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Qi(e.wa);mt(t,"RID","rpc"),mt(t,"SID",e.J),mt(t,"CI",e.M?"0":"1"),mt(t,"AID",e.V),mt(t,"TYPE","xmlhttp"),mh(e,t),e.o&&e.s&&p_(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Om(Qi(t)),n.s=null,n.S=!0,KA(n,e)}re.ib=function(){this.v!=null&&(this.v=null,Mm(this),g_(this),On(19))};function lp(e){e.v!=null&&(Ee.clearTimeout(e.v),e.v=null)}function _b(e,t){var n=null;if(e.g==t){lp(e),y_(e),e.g=null;var r=2}else if(Fv(e.h,t))n=t.F,ab(e.h,t),r=1;else return;if(e.H!=0){if(e.ta=t.aa,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Im(),sn(r,new WA(r,n)),Lm(e)}else vb(e);else if(i=t.o,i==3||i==0&&0<e.ta||!(r==1&&rV(e,t)||r==2&&g_(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Ao(e,5);break;case 4:Ao(e,10);break;case 3:Ao(e,6);break;default:Ao(e,2)}}}function Sb(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Ao(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=yn(e.pb,e);n||(n=new Mo("//www.google.com/images/cleardot.gif"),Ee.location&&Ee.location.protocol=="http"||op(n,"https"),Om(n)),JB(n.toString(),r)}else On(2);e.H=0,e.l&&e.l.za(t),Eb(e),gb(e)}re.pb=function(e){e?(this.j.info("Successfully pinged google.com"),On(2)):(this.j.info("Failed to ping google.com"),On(1))};function Eb(e){if(e.H=0,e.pa=[],e.l){const t=lb(e.h);(t.length!=0||e.i.length!=0)&&(Xk(e.pa,t),Xk(e.pa,e.i),e.h.i.length=0,Jw(e.i),e.i.length=0),e.l.ya()}}function Cb(e,t,n){var r=n instanceof Mo?Qi(n):new Mo(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),ap(r,r.m);else{var i=Ee.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Mo(null,void 0);r&&op(s,r),t&&(s.g=t),i&&ap(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&mt(r,n,t),mt(r,"VER",e.qa),mh(e,r),r}function kb(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new xt(new fh({ob:!0})):new xt(e.va),t.Oa(e.I),t}function xb(){}re=xb.prototype;re.Ba=function(){};re.Aa=function(){};re.za=function(){};re.ya=function(){};re.Va=function(){};function up(){if(wl&&!(10<=Number(_B)))throw Error("Environmental error: no available transport.")}up.prototype.g=function(e,t){return new er(e,t)};function er(e,t){Xt.call(this),this.g=new mb(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!rp(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!rp(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Bl(this)}Zt(er,Xt);er.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;On(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=Cb(e,null,e.Y),Lm(e)};er.prototype.close=function(){m_(this.g)};er.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=s_(e),e=n);t.i.push(new qB(t.fb++,e)),t.H==3&&Lm(t)};er.prototype.N=function(){this.g.l=null,delete this.j,m_(this.g),delete this.g,er.$.N.call(this)};function Tb(e){u_.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Zt(Tb,u_);function Db(){c_.call(this),this.status=1}Zt(Db,c_);function Bl(e){this.g=e}Zt(Bl,xb);Bl.prototype.Ba=function(){sn(this.g,"a")};Bl.prototype.Aa=function(e){sn(this.g,new Tb(e))};Bl.prototype.za=function(e){sn(this.g,new Db)};Bl.prototype.ya=function(){sn(this.g,"b")};function iV(){this.blockSize=-1}function Ur(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Zt(Ur,iV);Ur.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function q0(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Ur.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)q0(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){q0(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){q0(this,r),i=0;break}}this.h=i,this.i+=t};Ur.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function qe(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var sV={};function v_(e){return-128<=e&&128>e?TA(sV,e,function(t){return new qe([t|0],0>t?-1:0)}):new qe([e|0],0>e?-1:0)}function Xr(e){if(isNaN(e)||!isFinite(e))return el;if(0>e)return nn(Xr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Uv;return new qe(t,0)}function Ib(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return nn(Ib(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Xr(Math.pow(t,8)),r=el,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Xr(Math.pow(t,s)),r=r.R(s).add(Xr(o))):(r=r.R(n),r=r.add(Xr(o)))}return r}var Uv=4294967296,el=v_(0),Bv=v_(1),ux=v_(16777216);re=qe.prototype;re.ea=function(){if(ur(this))return-nn(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Uv+r)*t,t*=Uv}return e};re.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Mi(this))return"0";if(ur(this))return"-"+nn(this).toString(e);for(var t=Xr(Math.pow(e,6)),n=this,r="";;){var i=hp(n,t).g;n=cp(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Mi(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};re.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Mi(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ur(e){return e.h==-1}re.X=function(e){return e=cp(this,e),ur(e)?-1:Mi(e)?0:1};function nn(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new qe(n,~e.h).add(Bv)}re.abs=function(){return ur(this)?nn(this):this};re.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new qe(n,n[n.length-1]&-2147483648?-1:0)};function cp(e,t){return e.add(nn(t))}re.R=function(e){if(Mi(this)||Mi(e))return el;if(ur(this))return ur(e)?nn(this).R(nn(e)):nn(nn(this).R(e));if(ur(e))return nn(this.R(nn(e)));if(0>this.X(ux)&&0>e.X(ux))return Xr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,xd(n,2*r+2*i),n[2*r+2*i+1]+=s*u,xd(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,xd(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,xd(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new qe(n,0)};function xd(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function pu(e,t){this.g=e,this.h=t}function hp(e,t){if(Mi(t))throw Error("division by zero");if(Mi(e))return new pu(el,el);if(ur(e))return t=hp(nn(e),t),new pu(nn(t.g),nn(t.h));if(ur(t))return t=hp(e,nn(t)),new pu(nn(t.g),t.h);if(30<e.g.length){if(ur(e)||ur(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Bv,r=t;0>=r.X(e);)n=cx(n),r=cx(r);var i=Sa(n,1),s=Sa(r,1);for(r=Sa(r,2),n=Sa(n,2);!Mi(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Sa(r,1),n=Sa(n,1)}return t=cp(e,i.R(t)),new pu(i,t)}for(i=el;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Xr(n),o=s.R(t);ur(o)||0<o.X(e);)n-=r,s=Xr(n),o=s.R(t);Mi(s)&&(s=Bv),i=i.add(s),e=cp(e,o)}return new pu(i,e)}re.gb=function(e){return hp(this,e).h};re.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new qe(n,this.h&e.h)};re.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new qe(n,this.h|e.h)};re.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new qe(n,this.h^e.h)};function cx(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new qe(n,e.h)}function Sa(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new qe(i,e.h)}up.prototype.createWebChannel=up.prototype.g;er.prototype.send=er.prototype.u;er.prototype.open=er.prototype.m;er.prototype.close=er.prototype.close;Am.NO_ERROR=0;Am.TIMEOUT=8;Am.HTTP_ERROR=6;HA.COMPLETE="complete";GA.EventType=ch;ch.OPEN="a";ch.CLOSE="b";ch.ERROR="c";ch.MESSAGE="d";Xt.prototype.listen=Xt.prototype.O;xt.prototype.listenOnce=xt.prototype.P;xt.prototype.getLastError=xt.prototype.Sa;xt.prototype.getLastErrorCode=xt.prototype.Ia;xt.prototype.getStatus=xt.prototype.da;xt.prototype.getResponseJson=xt.prototype.Wa;xt.prototype.getResponseText=xt.prototype.ja;xt.prototype.send=xt.prototype.ha;xt.prototype.setWithCredentials=xt.prototype.Oa;Ur.prototype.digest=Ur.prototype.l;Ur.prototype.reset=Ur.prototype.reset;Ur.prototype.update=Ur.prototype.j;qe.prototype.add=qe.prototype.add;qe.prototype.multiply=qe.prototype.R;qe.prototype.modulo=qe.prototype.gb;qe.prototype.compare=qe.prototype.X;qe.prototype.toNumber=qe.prototype.ea;qe.prototype.toString=qe.prototype.toString;qe.prototype.getBits=qe.prototype.D;qe.fromNumber=Xr;qe.fromString=Ib;var oV=function(){return new up},aV=function(){return Im()},K0=Am,lV=HA,uV=la,hx={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},cV=fh,Td=GA,hV=xt,dV=Ur,tl=qe;const dx="@firebase/firestore";/**
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
 */class fn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}fn.UNAUTHENTICATED=new fn(null),fn.GOOGLE_CREDENTIALS=new fn("google-credentials-uid"),fn.FIRST_PARTY=new fn("first-party-uid"),fn.MOCK_USER=new fn("mock-user");/**
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
 */let Vl="9.21.0";/**
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
 */const Qo=new $w("@firebase/firestore");function fx(){return Qo.logLevel}function ce(e,...t){if(Qo.logLevel<=je.DEBUG){const n=t.map(w_);Qo.debug(`Firestore (${Vl}): ${e}`,...n)}}function Xi(e,...t){if(Qo.logLevel<=je.ERROR){const n=t.map(w_);Qo.error(`Firestore (${Vl}): ${e}`,...n)}}function _l(e,...t){if(Qo.logLevel<=je.WARN){const n=t.map(w_);Qo.warn(`Firestore (${Vl}): ${e}`,...n)}}function w_(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function Se(e="Unexpected state"){const t=`FIRESTORE (${Vl}) INTERNAL ASSERTION FAILED: `+e;throw Xi(t),new Error(t)}function at(e,t){e||Se()}function xe(e,t){return e}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends di{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vi{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Ab{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(fn.UNAUTHENTICATED))}shutdown(){}}class pV{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mV{constructor(t){this.t=t,this.currentUser=fn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Vi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vi,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vi)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(at(typeof r.accessToken=="string"),new Ab(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return at(t===null||typeof t=="string"),new fn(t)}}class gV{constructor(t,n,r){this.h=t,this.l=n,this.m=r,this.type="FirstParty",this.user=fn.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class yV{constructor(t,n,r){this.h=t,this.l=n,this.m=r}getToken(){return Promise.resolve(new gV(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(fn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vV{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wV{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const r=s=>{s.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,ce("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(at(typeof n.token=="string"),this.T=n.token,new vV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function _V(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class bb{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=_V(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function He(e,t){return e<t?-1:e>t?1:0}function Sl(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class Yt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new fe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new fe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new fe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new fe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Yt.fromMillis(Date.now())}static fromDate(t){return Yt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Yt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?He(this.nanoseconds,t.nanoseconds):He(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ce{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ce(t)}static min(){return new Ce(new Yt(0,0))}static max(){return new Ce(new Yt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class bc{constructor(t,n,r){n===void 0?n=0:n>t.length&&Se(),r===void 0?r=t.length-n:r>t.length-n&&Se(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return bc.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof bc?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class gt extends bc{construct(t,n,r){return new gt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new fe(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new gt(n)}static emptyPath(){return new gt([])}}const SV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gn extends bc{construct(t,n,r){return new gn(t,n,r)}static isValidIdentifier(t){return SV.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gn.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gn(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new fe(H.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new fe(H.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new fe(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new fe(H.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gn(n)}static emptyPath(){return new gn([])}}/**
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
 */class pe{constructor(t){this.path=t}static fromPath(t){return new pe(gt.fromString(t))}static fromName(t){return new pe(gt.fromString(t).popFirst(5))}static empty(){return new pe(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&gt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return gt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new pe(new gt(t.slice()))}}function EV(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ce.fromTimestamp(r===1e9?new Yt(n+1,0):new Yt(n,r));return new Qs(i,pe.empty(),t)}function CV(e){return new Qs(e.readTime,e.key,-1)}class Qs{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Qs(Ce.min(),pe.empty(),-1)}static max(){return new Qs(Ce.max(),pe.empty(),-1)}}function kV(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=pe.comparator(e.documentKey,t.documentKey),n!==0?n:He(e.largestBatchId,t.largestBatchId))}/**
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
 */const xV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function gh(e){if(e.code!==H.FAILED_PRECONDITION||e.message!==xV)throw e;ce("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Q{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Q((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.reject(n)}static resolve(t){return new Q((n,r)=>{n(t)})}static reject(t){return new Q((n,r)=>{r(t)})}static waitFor(t){return new Q((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=Q.resolve(!1);for(const r of t)n=n.next(i=>i?Q.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new Q((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(t[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(t,n){return new Q((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function yh(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class __{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}__.ct=-1;function $m(e){return e==null}function dp(e){return e===0&&1/e==-1/0}function DV(e){return typeof e=="number"&&Number.isInteger(e)&&!dp(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function px(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function zl(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Nb(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class St{constructor(t,n){this.comparator=t,this.root=n||tn.EMPTY}insert(t,n){return new St(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,tn.BLACK,null,null))}remove(t){return new St(this.comparator,this.root.remove(t,this.comparator).copy(null,null,tn.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dd(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dd(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dd(this.root,t,this.comparator,!0)}}class Dd{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class tn{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r!=null?r:tn.RED,this.left=i!=null?i:tn.EMPTY,this.right=s!=null?s:tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new tn(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return tn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Se();const t=this.left.check();if(t!==this.right.check())throw Se();return t+(this.isRed()?0:1)}}tn.EMPTY=null,tn.RED=!0,tn.BLACK=!1;tn.EMPTY=new class{constructor(){this.size=0}get key(){throw Se()}get value(){throw Se()}get color(){throw Se()}get left(){throw Se()}get right(){throw Se()}copy(e,t,n,r,i){return this}insert(e,t,n){return new tn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wn{constructor(t){this.comparator=t,this.data=new St(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new mx(this.data.getIterator())}getIteratorFrom(t){return new mx(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof wn)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new wn(this.comparator);return n.data=t,n}}class mx{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rr{constructor(t){this.fields=t,t.sort(gn.comparator)}static empty(){return new Rr([])}unionWith(t){let n=new wn(gn.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Rr(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Sl(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ob extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Cn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException!="undefined"&&i instanceof DOMException?new Ob("Invalid base64 string: "+i):i}}(t);return new Cn(n)}static fromUint8Array(t){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(t);return new Cn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return He(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Cn.EMPTY_BYTE_STRING=new Cn("");const IV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xs(e){if(at(!!e),typeof e=="string"){let t=0;const n=IV.exec(e);if(at(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Pt(e.seconds),nanos:Pt(e.nanos)}}function Pt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Xo(e){return typeof e=="string"?Cn.fromBase64String(e):Cn.fromUint8Array(e)}/**
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
 */function S_(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function E_(e){const t=e.mapValue.fields.__previous_value__;return S_(t)?E_(t):t}function Nc(e){const t=Xs(e.mapValue.fields.__local_write_time__.timestampValue);return new Yt(t.seconds,t.nanos)}/**
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
 */class AV{constructor(t,n,r,i,s,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Oc{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Oc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Oc&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Id={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jo(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?S_(e)?4:bV(e)?9007199254740991:10:Se()}function ai(e,t){if(e===t)return!0;const n=Jo(e);if(n!==Jo(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Nc(e).isEqual(Nc(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Xs(r.timestampValue),o=Xs(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return Xo(r.bytesValue).isEqual(Xo(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return Pt(r.geoPointValue.latitude)===Pt(i.geoPointValue.latitude)&&Pt(r.geoPointValue.longitude)===Pt(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Pt(r.integerValue)===Pt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Pt(r.doubleValue),o=Pt(i.doubleValue);return s===o?dp(s)===dp(o):isNaN(s)&&isNaN(o)}return!1}(e,t);case 9:return Sl(e.arrayValue.values||[],t.arrayValue.values||[],ai);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(px(s)!==px(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!ai(s[a],o[a])))return!1;return!0}(e,t);default:return Se()}}function Rc(e,t){return(e.values||[]).find(n=>ai(n,t))!==void 0}function El(e,t){if(e===t)return 0;const n=Jo(e),r=Jo(t);if(n!==r)return He(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return He(e.booleanValue,t.booleanValue);case 2:return function(i,s){const o=Pt(i.integerValue||i.doubleValue),a=Pt(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return gx(e.timestampValue,t.timestampValue);case 4:return gx(Nc(e),Nc(t));case 5:return He(e.stringValue,t.stringValue);case 6:return function(i,s){const o=Xo(i),a=Xo(s);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=He(o[u],a[u]);if(c!==0)return c}return He(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,s){const o=He(Pt(i.latitude),Pt(s.latitude));return o!==0?o:He(Pt(i.longitude),Pt(s.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=El(o[u],a[u]);if(c)return c}return He(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,s){if(i===Id.mapValue&&s===Id.mapValue)return 0;if(i===Id.mapValue)return 1;if(s===Id.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let d=0;d<a.length&&d<c.length;++d){const p=He(a[d],c[d]);if(p!==0)return p;const m=El(o[a[d]],u[c[d]]);if(m!==0)return m}return He(a.length,c.length)}(e.mapValue,t.mapValue);default:throw Se()}}function gx(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return He(e,t);const n=Xs(e),r=Xs(t),i=He(n.seconds,r.seconds);return i!==0?i:He(n.nanos,r.nanos)}function Cl(e){return Vv(e)}function Vv(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(r){const i=Xs(r);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Xo(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,pe.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Vv(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Vv(r.fields[a])}`;return s+"}"}(e.mapValue):Se();var t,n}function zv(e){return!!e&&"integerValue"in e}function C_(e){return!!e&&"arrayValue"in e}function yx(e){return!!e&&"nullValue"in e}function vx(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ef(e){return!!e&&"mapValue"in e}function ju(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return zl(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=ju(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ju(e.arrayValue.values[n]);return t}return Object.assign({},e)}function bV(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class cr{constructor(t){this.value=t}static empty(){return new cr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!ef(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ju(n)}setAll(t){let n=gn.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ju(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());ef(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ai(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];ef(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){zl(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new cr(ju(this.value))}}function Rb(e){const t=[];return zl(e.fields,(n,r)=>{const i=new gn([n]);if(ef(r)){const s=Rb(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Rr(t)}/**
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
 */class mn{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new mn(t,0,Ce.min(),Ce.min(),Ce.min(),cr.empty(),0)}static newFoundDocument(t,n,r,i){return new mn(t,1,n,Ce.min(),r,i,0)}static newNoDocument(t,n){return new mn(t,2,n,Ce.min(),Ce.min(),cr.empty(),0)}static newUnknownDocument(t,n){return new mn(t,3,n,Ce.min(),Ce.min(),cr.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=cr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=cr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof mn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new mn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fp{constructor(t,n){this.position=t,this.inclusive=n}}function wx(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=pe.comparator(pe.fromName(o.referenceValue),n.key):r=El(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _x(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ai(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Yu{constructor(t,n="asc"){this.field=t,this.dir=n}}function NV(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Pb{}class Vt extends Pb{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new RV(t,n,r):n==="array-contains"?new LV(t,r):n==="in"?new $V(t,r):n==="not-in"?new FV(t,r):n==="array-contains-any"?new UV(t,r):new Vt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new PV(t,r):new MV(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(El(n,this.value)):n!==null&&Jo(this.value)===Jo(n)&&this.matchesComparison(El(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class li extends Pb{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new li(t,n)}matches(t){return Mb(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Mb(e){return e.op==="and"}function Lb(e){return OV(e)&&Mb(e)}function OV(e){for(const t of e.filters)if(t instanceof li)return!1;return!0}function jv(e){if(e instanceof Vt)return e.field.canonicalString()+e.op.toString()+Cl(e.value);if(Lb(e))return e.filters.map(t=>jv(t)).join(",");{const t=e.filters.map(n=>jv(n)).join(",");return`${e.op}(${t})`}}function $b(e,t){return e instanceof Vt?function(n,r){return r instanceof Vt&&n.op===r.op&&n.field.isEqual(r.field)&&ai(n.value,r.value)}(e,t):e instanceof li?function(n,r){return r instanceof li&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&$b(s,r.filters[o]),!0):!1}(e,t):void Se()}function Fb(e){return e instanceof Vt?function(t){return`${t.field.canonicalString()} ${t.op} ${Cl(t.value)}`}(e):e instanceof li?function(t){return t.op.toString()+" {"+t.getFilters().map(Fb).join(" ,")+"}"}(e):"Filter"}class RV extends Vt{constructor(t,n,r){super(t,n,r),this.key=pe.fromName(r.referenceValue)}matches(t){const n=pe.comparator(t.key,this.key);return this.matchesComparison(n)}}class PV extends Vt{constructor(t,n){super(t,"in",n),this.keys=Ub("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class MV extends Vt{constructor(t,n){super(t,"not-in",n),this.keys=Ub("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ub(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>pe.fromName(r.referenceValue))}class LV extends Vt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return C_(n)&&Rc(n.arrayValue,this.value)}}class $V extends Vt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Rc(this.value.arrayValue,n)}}class FV extends Vt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Rc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Rc(this.value.arrayValue,n)}}class UV extends Vt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!C_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Rc(this.value.arrayValue,r))}}/**
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
 */class BV{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Sx(e,t=null,n=[],r=[],i=null,s=null,o=null){return new BV(e,t,n,r,i,s,o)}function k_(e){const t=xe(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>jv(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),$m(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Cl(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Cl(r)).join(",")),t.ft=n}return t.ft}function x_(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!NV(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!$b(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!_x(e.startAt,t.startAt)&&_x(e.endAt,t.endAt)}function Yv(e){return pe.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Fm{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function VV(e,t,n,r,i,s,o,a){return new Fm(e,t,n,r,i,s,o,a)}function T_(e){return new Fm(e)}function Ex(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function zV(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function jV(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function YV(e){return e.collectionGroup!==null}function nl(e){const t=xe(e);if(t.dt===null){t.dt=[];const n=jV(t),r=zV(t);if(n!==null&&r===null)n.isKeyField()||t.dt.push(new Yu(n)),t.dt.push(new Yu(gn.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Yu(gn.keyField(),s))}}}return t.dt}function Ji(e){const t=xe(e);if(!t._t)if(t.limitType==="F")t._t=Sx(t.path,t.collectionGroup,nl(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of nl(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new Yu(s.field,o))}const r=t.endAt?new fp(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new fp(t.startAt.position,t.startAt.inclusive):null;t._t=Sx(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t._t}function Wv(e,t,n){return new Fm(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Um(e,t){return x_(Ji(e),Ji(t))&&e.limitType===t.limitType}function Bb(e){return`${k_(Ji(e))}|lt:${e.limitType}`}function Hv(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(r=>Fb(r)).join(", ")}]`),$m(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Cl(r)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Cl(r)).join(",")),`Target(${n})`}(Ji(e))}; limitType=${e.limitType})`}function Bm(e,t){return t.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):pe.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,r){for(const i of nl(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=wx(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,nl(n),r)||n.endAt&&!function(i,s,o){const a=wx(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,nl(n),r))}(e,t)}function WV(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Vb(e){return(t,n)=>{let r=!1;for(const i of nl(e)){const s=HV(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function HV(e,t,n){const r=e.field.isKeyField()?pe.comparator(t.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?El(a,u):Se()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Se()}}/**
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
 */class jl{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){zl(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Nb(this.inner)}size(){return this.innerSize}}/**
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
 */const GV=new St(pe.comparator);function Zi(){return GV}const zb=new St(pe.comparator);function Iu(...e){let t=zb;for(const n of e)t=t.insert(n.key,n);return t}function jb(e){let t=zb;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function bo(){return Wu()}function Yb(){return Wu()}function Wu(){return new jl(e=>e.toString(),(e,t)=>e.isEqual(t))}const qV=new St(pe.comparator),KV=new wn(pe.comparator);function Pe(...e){let t=KV;for(const n of e)t=t.add(n);return t}const QV=new wn(He);function XV(){return QV}/**
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
 */function Wb(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dp(t)?"-0":t}}function Hb(e){return{integerValue:""+e}}function JV(e,t){return DV(t)?Hb(t):Wb(e,t)}/**
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
 */class Vm{constructor(){this._=void 0}}function ZV(e,t,n){return e instanceof pp?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&S_(i)&&(i=E_(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,t):e instanceof Pc?qb(e,t):e instanceof Mc?Kb(e,t):function(r,i){const s=Gb(r,i),o=Cx(s)+Cx(r.wt);return zv(s)&&zv(r.wt)?Hb(o):Wb(r.serializer,o)}(e,t)}function ez(e,t,n){return e instanceof Pc?qb(e,t):e instanceof Mc?Kb(e,t):n}function Gb(e,t){return e instanceof mp?zv(n=t)||function(r){return!!r&&"doubleValue"in r}(n)?t:{integerValue:0}:null;var n}class pp extends Vm{}class Pc extends Vm{constructor(t){super(),this.elements=t}}function qb(e,t){const n=Qb(t);for(const r of e.elements)n.some(i=>ai(i,r))||n.push(r);return{arrayValue:{values:n}}}class Mc extends Vm{constructor(t){super(),this.elements=t}}function Kb(e,t){let n=Qb(t);for(const r of e.elements)n=n.filter(i=>!ai(i,r));return{arrayValue:{values:n}}}class mp extends Vm{constructor(t,n){super(),this.serializer=t,this.wt=n}}function Cx(e){return Pt(e.integerValue||e.doubleValue)}function Qb(e){return C_(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function tz(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof Pc&&r instanceof Pc||n instanceof Mc&&r instanceof Mc?Sl(n.elements,r.elements,ai):n instanceof mp&&r instanceof mp?ai(n.wt,r.wt):n instanceof pp&&r instanceof pp}(e.transform,t.transform)}class nz{constructor(t,n){this.version=t,this.transformResults=n}}class si{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new si}static exists(t){return new si(void 0,t)}static updateTime(t){return new si(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function tf(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class zm{}function Xb(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Zb(e.key,si.none()):new vh(e.key,e.data,si.none());{const n=e.data,r=cr.empty();let i=new wn(gn.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ua(e.key,r,new Rr(i.toArray()),si.none())}}function rz(e,t,n){e instanceof vh?function(r,i,s){const o=r.value.clone(),a=xx(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(e,t,n):e instanceof ua?function(r,i,s){if(!tf(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=xx(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Jb(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(e,t,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,t,n)}function Hu(e,t,n,r){return e instanceof vh?function(i,s,o,a){if(!tf(i.precondition,s))return o;const u=i.value.clone(),c=Tx(i.fieldTransforms,a,s);return u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof ua?function(i,s,o,a){if(!tf(i.precondition,s))return o;const u=Tx(i.fieldTransforms,a,s),c=s.data;return c.setAll(Jb(i)),c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(e,t,n,r):function(i,s,o){return tf(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(e,t,n)}function iz(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Gb(r.transform,i||null);s!=null&&(n===null&&(n=cr.empty()),n.set(r.field,s))}return n||null}function kx(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Sl(n,r,(i,s)=>tz(i,s))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class vh extends zm{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ua extends zm{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Jb(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function xx(e,t,n){const r=new Map;at(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,ez(o,a,n[i]))}return r}function Tx(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ZV(s,o,t))}return r}class Zb extends zm{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sz extends zm{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class oz{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&rz(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Hu(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Hu(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Yb();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=Xb(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Ce.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Pe())}isEqual(t){return this.batchId===t.batchId&&Sl(this.mutations,t.mutations,(n,r)=>kx(n,r))&&Sl(this.baseMutations,t.baseMutations,(n,r)=>kx(n,r))}}class D_{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){at(t.mutations.length===r.length);let i=qV;const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new D_(t,n,r,i)}}/**
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
 */class az{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class lz{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Rt,Fe;function uz(e){switch(e){default:return Se();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function eN(e){if(e===void 0)return Xi("GRPC error has no .code"),H.UNKNOWN;switch(e){case Rt.OK:return H.OK;case Rt.CANCELLED:return H.CANCELLED;case Rt.UNKNOWN:return H.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return H.INTERNAL;case Rt.UNAVAILABLE:return H.UNAVAILABLE;case Rt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Rt.NOT_FOUND:return H.NOT_FOUND;case Rt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Rt.ABORTED:return H.ABORTED;case Rt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Rt.DATA_LOSS:return H.DATA_LOSS;default:return Se()}}(Fe=Rt||(Rt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class I_{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ad}static getOrCreateInstance(){return Ad===null&&(Ad=new I_),Ad}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Ad=null;/**
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
 */function cz(){return new TextEncoder}/**
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
 */const hz=new tl([4294967295,4294967295],0);function Dx(e){const t=cz().encode(e),n=new dV;return n.update(t),new Uint8Array(n.digest())}function Ix(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new tl([n,r],0),new tl([i,s],0)]}class A_{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Au(`Invalid padding: ${n}`);if(r<0)throw new Au(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Au(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Au(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*t.length-n,this.It=tl.fromNumber(this.yt)}Tt(t,n,r){let i=t.add(n.multiply(tl.fromNumber(r)));return i.compare(hz)===1&&(i=new tl([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}At(t){if(this.yt===0)return!1;const n=Dx(t),[r,i]=Ix(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new A_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.yt===0)return;const n=Dx(t),[r,i]=Ix(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Au extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class jm{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,wh.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new jm(Ce.min(),i,new St(He),Zi(),Pe())}}class wh{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new wh(r,n,Pe(),Pe(),Pe())}}/**
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
 */class nf{constructor(t,n,r,i){this.vt=t,this.removedTargetIds=n,this.key=r,this.Pt=i}}class tN{constructor(t,n){this.targetId=t,this.bt=n}}class nN{constructor(t,n,r=Cn.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ax{constructor(){this.Vt=0,this.St=Nx(),this.Dt=Cn.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(t){t.approximateByteSize()>0&&(this.xt=!0,this.Dt=t)}Ot(){let t=Pe(),n=Pe(),r=Pe();return this.St.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Se()}}),new wh(this.Dt,this.Ct,t,n,r)}$t(){this.xt=!1,this.St=Nx()}Ft(t,n){this.xt=!0,this.St=this.St.insert(t,n)}Bt(t){this.xt=!0,this.St=this.St.remove(t)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class dz{constructor(t){this.Kt=t,this.Gt=new Map,this.Qt=Zi(),this.jt=bx(),this.zt=new St(He)}Wt(t){for(const n of t.vt)t.Pt&&t.Pt.isFoundDocument()?this.Ht(n,t.Pt):this.Jt(n,t.key,t.Pt);for(const n of t.removedTargetIds)this.Jt(n,t.key,t.Pt)}Yt(t){this.forEachTarget(t,n=>{const r=this.Xt(n);switch(t.state){case 0:this.Zt(n)&&r.Mt(t.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(t.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(t.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(t.resumeToken));break;default:Se()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(t){var n;const r=t.targetId,i=t.bt.count,s=this.ne(r);if(s){const o=s.target;if(Yv(o))if(i===0){const a=new pe(o.path);this.Jt(r,a,mn.newNoDocument(a,Ce.min()))}else at(i===1);else{const a=this.se(r);if(a!==i){const u=this.ie(t,a);if(u!==0){this.te(r);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,c)}(n=I_.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,d,p){var m,v,w,_,x,S;const y={localCacheCount:d,existenceFilterCount:p.count},C=p.unchangedNames;return C&&(y.bloomFilter={applied:c===0,hashCount:(m=C==null?void 0:C.hashCount)!==null&&m!==void 0?m:0,bitmapLength:(_=(w=(v=C==null?void 0:C.bits)===null||v===void 0?void 0:v.bitmap)===null||w===void 0?void 0:w.length)!==null&&_!==void 0?_:0,padding:(S=(x=C==null?void 0:C.bits)===null||x===void 0?void 0:x.padding)!==null&&S!==void 0?S:0}),y}(u,a,t.bt))}}}}ie(t,n){const{unchangedNames:r,count:i}=t.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let u,c;try{u=Xo(s).toUint8Array()}catch(d){if(d instanceof Ob)return _l("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw d}try{c=new A_(u,o,a)}catch(d){return _l(d instanceof Au?"BloomFilter error: ":"Applying bloom filter failed: ",d),1}return c.yt===0?1:i!==n-this.re(t.targetId,c)?2:0}re(t,n){const r=this.Kt.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(t,s,null),i++)}),i}ue(t){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&Yv(a.target)){const u=new pe(a.target.path);this.Qt.get(u)!==null||this.ce(o,u)||this.Jt(o,u,mn.newNoDocument(u,t))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=Pe();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.ne(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(t));const i=new jm(t,n,this.zt,this.Qt,r);return this.Qt=Zi(),this.jt=bx(),this.zt=new St(He),i}Ht(t,n){if(!this.Zt(t))return;const r=this.ce(t,n.key)?2:0;this.Xt(t).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(t))}Jt(t,n,r){if(!this.Zt(t))return;const i=this.Xt(t);this.ce(t,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(t)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(t){this.Gt.delete(t)}se(t){const n=this.Xt(t).Ot();return this.Kt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Lt(t){this.Xt(t).Lt()}Xt(t){let n=this.Gt.get(t);return n||(n=new Ax,this.Gt.set(t,n)),n}ae(t){let n=this.jt.get(t);return n||(n=new wn(He),this.jt=this.jt.insert(t,n)),n}Zt(t){const n=this.ne(t)!==null;return n||ce("WatchChangeAggregator","Detected inactive target",t),n}ne(t){const n=this.Gt.get(t);return n&&n.Nt?null:this.Kt.he(t)}te(t){this.Gt.set(t,new Ax),this.Kt.getRemoteKeysForTarget(t).forEach(n=>{this.Jt(t,n,null)})}ce(t,n){return this.Kt.getRemoteKeysForTarget(t).has(n)}}function bx(){return new St(pe.comparator)}function Nx(){return new St(pe.comparator)}const fz=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pz=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),mz=(()=>({and:"AND",or:"OR"}))();class gz{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Gv(e,t){return e.useProto3Json||$m(t)?t:{value:t}}function gp(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rN(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function yz(e,t){return gp(e,t.toTimestamp())}function oi(e){return at(!!e),Ce.fromTimestamp(function(t){const n=Xs(t);return new Yt(n.seconds,n.nanos)}(e))}function b_(e,t){return function(n){return new gt(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function iN(e){const t=gt.fromString(e);return at(lN(t)),t}function qv(e,t){return b_(e.databaseId,t.path)}function Q0(e,t){const n=iN(t);if(n.get(1)!==e.databaseId.projectId)throw new fe(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new fe(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new pe(sN(n))}function Kv(e,t){return b_(e.databaseId,t)}function vz(e){const t=iN(e);return t.length===4?gt.emptyPath():sN(t)}function Qv(e){return new gt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function sN(e){return at(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ox(e,t,n){return{name:qv(e,t),fields:n.value.mapValue.fields}}function wz(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Se()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(at(c===void 0||typeof c=="string"),Cn.fromBase64String(c||"")):(at(c===void 0||c instanceof Uint8Array),Cn.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?H.UNKNOWN:eN(u.code);return new fe(c,u.message||"")}(o);n=new nN(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Q0(e,r.document.name),s=oi(r.document.updateTime),o=r.document.createTime?oi(r.document.createTime):Ce.min(),a=new cr({mapValue:{fields:r.document.fields}}),u=mn.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new nf(c,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Q0(e,r.document),s=r.readTime?oi(r.readTime):Ce.min(),o=mn.newNoDocument(i,s),a=r.removedTargetIds||[];n=new nf([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Q0(e,r.document),s=r.removedTargetIds||[];n=new nf([],s,i,null)}else{if(!("filter"in t))return Se();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new lz(i,s),a=r.targetId;n=new tN(a,o)}}return n}function _z(e,t){let n;if(t instanceof vh)n={update:Ox(e,t.key,t.value)};else if(t instanceof Zb)n={delete:qv(e,t.key)};else if(t instanceof ua)n={update:Ox(e,t.key,t.data),updateMask:Az(t.fieldMask)};else{if(!(t instanceof sz))return Se();n={verify:qv(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof pp)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Pc)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Mc)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof mp)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw Se()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:yz(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Se()}(e,t.precondition)),n}function Sz(e,t){return e&&e.length>0?(at(t!==void 0),e.map(n=>function(r,i){let s=r.updateTime?oi(r.updateTime):oi(i);return s.isEqual(Ce.min())&&(s=oi(i)),new nz(s,r.transformResults||[])}(n,t))):[]}function Ez(e,t){return{documents:[Kv(e,t.path)]}}function Cz(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Kv(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Kv(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return aN(li.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:Ca(d.field),direction:Tz(d.dir)}}(c))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Gv(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function kz(e){let t=vz(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){at(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:t=t.child(d.collectionId)}let s=[];n.where&&(s=function(d){const p=oN(d);return p instanceof li&&Lb(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(d=>function(p){return new Yu(ka(p.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d)));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,$m(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(d){const p=!!d.before,m=d.values||[];return new fp(m,p)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const p=!d.before,m=d.values||[];return new fp(m,p)}(n.endAt)),VV(t,i,o,s,a,"F",u,c)}function xz(e,t){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function oN(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ka(t.unaryFilter.field);return Vt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ka(t.unaryFilter.field);return Vt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ka(t.unaryFilter.field);return Vt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ka(t.unaryFilter.field);return Vt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Se()}}(e):e.fieldFilter!==void 0?function(t){return Vt.create(ka(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return li.create(t.compositeFilter.filters.map(n=>oN(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Se()}}(t.compositeFilter.op))}(e):Se()}function Tz(e){return fz[e]}function Dz(e){return pz[e]}function Iz(e){return mz[e]}function Ca(e){return{fieldPath:e.canonicalString()}}function ka(e){return gn.fromServerFormat(e.fieldPath)}function aN(e){return e instanceof Vt?function(t){if(t.op==="=="){if(vx(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NAN"}};if(yx(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vx(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NOT_NAN"}};if(yx(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ca(t.field),op:Dz(t.op),value:t.value}}}(e):e instanceof li?function(t){const n=t.getFilters().map(r=>aN(r));return n.length===1?n[0]:{compositeFilter:{op:Iz(t.op),filters:n}}}(e):Se()}function Az(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function lN(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class ks{constructor(t,n,r,i,s=Ce.min(),o=Ce.min(),a=Cn.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new ks(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new ks(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ks(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ks(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class bz{constructor(t){this.le=t}}function Nz(e){const t=kz({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Wv(t,t.limit,"L"):t}/**
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
 */class Oz{constructor(){this.sn=new Rz}addToCollectionParentIndex(t,n){return this.sn.add(n),Q.resolve()}getCollectionParents(t,n){return Q.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return Q.resolve()}deleteFieldIndex(t,n){return Q.resolve()}getDocumentsMatchingTarget(t,n){return Q.resolve(null)}getIndexType(t,n){return Q.resolve(0)}getFieldIndexes(t,n){return Q.resolve([])}getNextCollectionGroupToUpdate(t){return Q.resolve(null)}getMinOffset(t,n){return Q.resolve(Qs.min())}getMinOffsetFromCollectionGroup(t,n){return Q.resolve(Qs.min())}updateCollectionGroup(t,n,r){return Q.resolve()}updateIndexEntries(t,n){return Q.resolve()}}class Rz{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new wn(gt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new wn(gt.comparator)).toArray()}}/**
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
 */class kl{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static Nn(){return new kl(0)}static kn(){return new kl(-1)}}/**
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
 */class Pz{constructor(){this.changes=new jl(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,mn.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?Q.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Mz{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Lz{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Hu(r.mutation,i,Rr.empty(),Yt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Pe()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Pe()){const i=bo();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Iu();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=bo();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Pe()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Zi();const o=Wu(),a=Wu();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ua)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Hu(d.mutation,c,d.mutation.getFieldMask(),Yt.now())):o.set(c.key,Rr.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return a.set(c,new Mz(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Wu();let i=new St((o,a)=>o-a),s=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Rr.empty();d=a.applyToLocalView(c,d),r.set(u,d);const p=(i.get(a.batchId)||Pe()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,p=Yb();d.forEach(m=>{if(!s.has(m)){const v=Xb(n.get(m),r.get(m));v!==null&&p.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,p))}return Q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return pe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):YV(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):Q.resolve(bo());let a=-1,u=s;return o.next(c=>Q.forEach(c,(d,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(d)?Q.resolve():this.remoteDocumentCache.getEntry(t,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,Pe())).next(d=>({batchId:a,changes:jb(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new pe(n)).next(r=>{let i=Iu();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=Iu();return this.indexManager.getCollectionParents(t,i).next(o=>Q.forEach(o,a=>{const u=function(c,d){return new Fm(d,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r).next(c=>{c.forEach((d,p)=>{s=s.insert(d,p)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,u)=>{const c=u.getKey();s.get(c)===null&&(s=s.insert(c,mn.newInvalidDocument(c)))});let o=Iu();return s.forEach((a,u)=>{const c=i.get(a);c!==void 0&&Hu(c.mutation,u,Rr.empty(),Yt.now()),Bm(n,u)&&(o=o.insert(a,u))}),o})}}/**
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
 */class $z{constructor(t){this.serializer=t,this.us=new Map,this.cs=new Map}getBundleMetadata(t,n){return Q.resolve(this.us.get(n))}saveBundleMetadata(t,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:oi(r.createTime)}),Q.resolve()}getNamedQuery(t,n){return Q.resolve(this.cs.get(n))}saveNamedQuery(t,n){return this.cs.set(n.name,function(r){return{name:r.name,query:Nz(r.bundledQuery),readTime:oi(r.readTime)}}(n)),Q.resolve()}}/**
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
 */class Fz{constructor(){this.overlays=new St(pe.comparator),this.hs=new Map}getOverlay(t,n){return Q.resolve(this.overlays.get(n))}getOverlays(t,n){const r=bo();return Q.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.de(t,n,s)}),Q.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),Q.resolve()}getOverlaysForCollection(t,n,r){const i=bo(),s=n.length+1,o=new pe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return Q.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new St((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=bo(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=bo(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return Q.resolve(a)}de(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new az(n,r));let s=this.hs.get(n);s===void 0&&(s=Pe(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
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
 */class N_{constructor(){this.ls=new wn(Ht.fs),this.ds=new wn(Ht._s)}isEmpty(){return this.ls.isEmpty()}addReference(t,n){const r=new Ht(t,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.gs(new Ht(t,n))}ys(t,n){t.forEach(r=>this.removeReference(r,n))}ps(t){const n=new pe(new gt([])),r=new Ht(n,t),i=new Ht(n,t+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(t=>this.gs(t))}gs(t){this.ls=this.ls.delete(t),this.ds=this.ds.delete(t)}Ts(t){const n=new pe(new gt([])),r=new Ht(n,t),i=new Ht(n,t+1);let s=Pe();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Ht(t,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ht{constructor(t,n){this.key=t,this.Es=n}static fs(t,n){return pe.comparator(t.key,n.key)||He(t.Es,n.Es)}static _s(t,n){return He(t.Es,n.Es)||pe.comparator(t.key,n.key)}}/**
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
 */class Uz{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new wn(Ht.fs)}checkEmpty(t){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oz(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Ht(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return Q.resolve(o)}lookupMutationBatch(t,n){return Q.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return Q.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(t){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ht(n,0),i=new Ht(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),Q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new wn(He);return n.forEach(i=>{const s=new Ht(i,0),o=new Ht(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),Q.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;pe.isDocumentKey(s)||(s=s.child(""));const o=new Ht(new pe(s),0);let a=new wn(He);return this.Rs.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.Es)),!0)},o),Q.resolve(this.bs(a))}bs(t){const n=[];return t.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){at(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return Q.forEach(n.mutations,i=>{const s=new Ht(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=r})}Dn(t){}containsKey(t,n){const r=new Ht(n,0),i=this.Rs.firstAfterOrEqual(r);return Q.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,Q.resolve()}Vs(t,n){return this.Ps(t)}Ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}vs(t){const n=this.Ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Bz{constructor(t){this.Ss=t,this.docs=new St(pe.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return Q.resolve(r?r.document.mutableCopy():mn.newInvalidDocument(n))}getEntries(t,n){let r=Zi();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():mn.newInvalidDocument(i))}),Q.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Zi();const o=n.path,a=new pe(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||kV(CV(d),r)<=0||(i.has(d.key)||Bm(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return Q.resolve(s)}getAllFromCollectionGroup(t,n,r,i){Se()}Ds(t,n){return Q.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Vz(this)}getSize(t){return Q.resolve(this.size)}}class Vz extends Pz{constructor(t){super(),this.rs=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(t,i)):this.rs.removeEntry(r)}),Q.waitFor(n)}getFromCache(t,n){return this.rs.getEntry(t,n)}getAllFromCache(t,n){return this.rs.getEntries(t,n)}}/**
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
 */class zz{constructor(t){this.persistence=t,this.Cs=new jl(n=>k_(n),x_),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.xs=0,this.Ns=new N_,this.targetCount=0,this.ks=kl.Nn()}forEachTarget(t,n){return this.Cs.forEach((r,i)=>n(i)),Q.resolve()}getLastRemoteSnapshotVersion(t){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Q.resolve(this.xs)}allocateTargetId(t){return this.highestTargetId=this.ks.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),Q.resolve()}$n(t){this.Cs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ks=new kl(n),this.highestTargetId=n),t.sequenceNumber>this.xs&&(this.xs=t.sequenceNumber)}addTargetData(t,n){return this.$n(n),this.targetCount+=1,Q.resolve()}updateTargetData(t,n){return this.$n(n),Q.resolve()}removeTargetData(t,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),Q.waitFor(s).next(()=>i)}getTargetCount(t){return Q.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cs.get(n)||null;return Q.resolve(r)}addMatchingKeys(t,n,r){return this.Ns.ws(n,r),Q.resolve()}removeMatchingKeys(t,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),Q.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Ns.ps(n),Q.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ns.Ts(n);return Q.resolve(r)}containsKey(t,n){return Q.resolve(this.Ns.containsKey(n))}}/**
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
 */class jz{constructor(t,n){this.Ms={},this.overlays={},this.Os=new __(0),this.$s=!1,this.$s=!0,this.referenceDelegate=t(this),this.Fs=new zz(this),this.indexManager=new Oz,this.remoteDocumentCache=function(r){return new Bz(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new bz(n),this.Ls=new $z(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Fz,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Ms[t.toKey()];return r||(r=new Uz(n,this.referenceDelegate),this.Ms[t.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(t,n,r){ce("MemoryPersistence","Starting transaction:",t);const i=new Yz(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(t,n){return Q.or(Object.values(this.Ms).map(r=>()=>r.containsKey(t,n)))}}class Yz extends TV{constructor(t){super(),this.currentSequenceNumber=t}}class O_{constructor(t){this.persistence=t,this.Gs=new N_,this.Qs=null}static js(t){return new O_(t)}get zs(){if(this.Qs)return this.Qs;throw Se()}addReference(t,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),Q.resolve()}removeReference(t,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),Q.resolve()}markPotentiallyOrphaned(t,n){return this.zs.add(n.toString()),Q.resolve()}removeTarget(t,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}qs(){this.Qs=new Set}Us(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.zs,r=>{const i=pe.fromPath(r);return this.Ws(t,i).next(s=>{s||n.removeEntry(i,Ce.min())})}).next(()=>(this.Qs=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ws(t,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(t){return 0}Ws(t,n){return Q.or([()=>Q.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ks(t,n)])}}/**
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
 */class R_{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(t,n){let r=Pe(),i=Pe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new R_(t,n.fromCache,r,i)}}/**
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
 */class Wz{constructor(){this.Li=!1}initialize(t,n){this.qi=t,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(t,n,r,i){return this.Ui(t,n).next(s=>s||this.Ki(t,n,i,r)).next(s=>s||this.Gi(t,n))}Ui(t,n){if(Ex(n))return Q.resolve(null);let r=Ji(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wv(n,null,"F"),r=Ji(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=Pe(...s);return this.qi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Qi(n,a);return this.ji(n,c,o,u.readTime)?this.Ui(t,Wv(n,null,"F")):this.zi(t,c,n,u)}))})))}Ki(t,n,r,i){return Ex(n)||i.isEqual(Ce.min())?this.Gi(t,n):this.qi.getDocuments(t,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(t,n):(fx()<=je.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hv(n)),this.zi(t,o,n,EV(i,-1)))})}Qi(t,n){let r=new wn(Vb(t));return n.forEach((i,s)=>{Bm(t,s)&&(r=r.add(s))}),r}ji(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(t,n){return fx()<=je.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Hv(n)),this.qi.getDocumentsMatchingQuery(t,n,Qs.min())}zi(t,n,r,i){return this.qi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Hz{constructor(t,n,r,i){this.persistence=t,this.Wi=n,this.serializer=i,this.Hi=new St(He),this.Ji=new jl(s=>k_(s),x_),this.Yi=new Map,this.Xi=t.getRemoteDocumentCache(),this.Fs=t.getTargetCache(),this.Ls=t.getBundleCache(),this.Zi(r)}Zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Lz(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Hi))}}function Gz(e,t,n,r){return new Hz(e,t,n,r)}async function uN(e,t){const n=xe(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Pe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function qz(e,t){const n=xe(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const d=u.batch,p=d.keys();let m=Q.resolve();return p.forEach(v=>{m=m.next(()=>c.getEntry(a,v)).next(w=>{const _=u.docVersions.get(v);at(_!==null),w.version.compareTo(_)<0&&(d.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),m.next(()=>o.mutationQueue.removeMutationBatch(a,d))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Pe();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function cN(e){const t=xe(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Fs.getLastRemoteSnapshotVersion(n))}function Kz(e,t){const n=xe(e),r=t.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];t.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;a.push(n.Fs.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Fs.addMatchingKeys(s,d.addedDocuments,p)));let v=m.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(p)!==null?v=v.withResumeToken(Cn.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(p,v),function(w,_,x){return w.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,v,d)&&a.push(n.Fs.updateTargetData(s,v))});let u=Zi(),c=Pe();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(Qz(s,o,t.documentUpdates).next(d=>{u=d.er,c=d.nr})),!r.isEqual(Ce.min())){const d=n.Fs.getLastRemoteSnapshotVersion(s).next(p=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return Q.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Hi=i,s))}function Qz(e,t,n){let r=Pe(),i=Pe();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Zi();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Ce.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):ce("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{er:o,nr:i}})}function Xz(e,t){const n=xe(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Jz(e,t){const n=xe(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,t).next(s=>s?(i=s,Q.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new ks(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(t,r.targetId)),r})}async function Xv(e,t,n){const r=xe(e),i=r.Hi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!yh(o))throw o;ce("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Hi=r.Hi.remove(t),r.Ji.delete(i.target)}function Rx(e,t,n){const r=xe(e);let i=Ce.min(),s=Pe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const d=xe(a),p=d.Ji.get(c);return p!==void 0?Q.resolve(d.Hi.get(p)):d.Fs.getTargetData(u,c)}(r,o,Ji(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,t,n?i:Ce.min(),n?s:Pe())).next(a=>(Zz(r,WV(t),a),{documents:a,sr:s})))}function Zz(e,t,n){let r=e.Yi.get(t)||Ce.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Yi.set(t,r)}class Px{constructor(){this.activeTargetIds=XV()}hr(t){this.activeTargetIds=this.activeTargetIds.add(t)}lr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ar(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ej{constructor(){this.Wr=new Px,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Wr.hr(t),this.Hr[t]||"not-current"}updateQueryState(t,n,r){this.Hr[t]=n}removeLocalQueryTarget(t){this.Wr.lr(t)}isLocalQueryTarget(t){return this.Wr.activeTargetIds.has(t)}clearQueryState(t){delete this.Hr[t]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(t){return this.Wr.activeTargetIds.has(t)}start(){return this.Wr=new Px,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class tj{Jr(t){}shutdown(){}}/**
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
 */class Mx{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(t){this.no.push(t)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){ce("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.no)t(0)}eo(){ce("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.no)t(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bd=null;function X0(){return bd===null?bd=268435456+Math.round(2147483648*Math.random()):bd++,"0x"+bd.toString(16)}/**
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
 */const nj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class rj{constructor(t){this.io=t.io,this.ro=t.ro}oo(t){this.uo=t}co(t){this.ao=t}onMessage(t){this.ho=t}close(){this.ro()}send(t){this.io(t)}lo(){this.uo()}fo(t){this.ao(t)}_o(t){this.ho(t)}}/**
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
 */const hn="WebChannelConnection";class ij extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.wo=n+"://"+t.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(t,n,r,i,s){const o=X0(),a=this.Io(t,n);ce("RestConnection",`Sending RPC '${t}' ${o}:`,a,r);const u={};return this.To(u,i,s),this.Eo(t,a,u,r).then(c=>(ce("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw _l("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}Ao(t,n,r,i,s,o){return this.po(t,n,r,i,s)}To(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+Vl,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>t[s]=i),r&&r.headers.forEach((i,s)=>t[s]=i)}Io(t,n){const r=nj[t];return`${this.wo}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Eo(t,n,r,i){const s=X0();return new Promise((o,a)=>{const u=new hV;u.setWithCredentials(!0),u.listenOnce(lV.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case K0.NO_ERROR:const d=u.getResponseJson();ce(hn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(d)),o(d);break;case K0.TIMEOUT:ce(hn,`RPC '${t}' ${s} timed out`),a(new fe(H.DEADLINE_EXCEEDED,"Request time out"));break;case K0.HTTP_ERROR:const p=u.getStatus();if(ce(hn,`RPC '${t}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const w=function(_){const x=_.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(x)>=0?x:H.UNKNOWN}(v.status);a(new fe(w,v.message))}else a(new fe(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new fe(H.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{ce(hn,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);ce(hn,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Ro(t,n,r){const i=X0(),s=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=oV(),a=aV(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(u.xmlHttpFactory=new cV({})),this.To(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=s.join("");ce(hn,`Creating RPC '${t}' stream ${i}: ${c}`,u);const d=o.createWebChannel(c,u);let p=!1,m=!1;const v=new rj({io:_=>{m?ce(hn,`Not sending because RPC '${t}' stream ${i} is closed:`,_):(p||(ce(hn,`Opening RPC '${t}' stream ${i} transport.`),d.open(),p=!0),ce(hn,`RPC '${t}' stream ${i} sending:`,_),d.send(_))},ro:()=>d.close()}),w=(_,x,S)=>{_.listen(x,y=>{try{S(y)}catch(C){setTimeout(()=>{throw C},0)}})};return w(d,Td.EventType.OPEN,()=>{m||ce(hn,`RPC '${t}' stream ${i} transport opened.`)}),w(d,Td.EventType.CLOSE,()=>{m||(m=!0,ce(hn,`RPC '${t}' stream ${i} transport closed`),v.fo())}),w(d,Td.EventType.ERROR,_=>{m||(m=!0,_l(hn,`RPC '${t}' stream ${i} transport errored:`,_),v.fo(new fe(H.UNAVAILABLE,"The operation could not be completed")))}),w(d,Td.EventType.MESSAGE,_=>{var x;if(!m){const S=_.data[0];at(!!S);const y=S,C=y.error||((x=y[0])===null||x===void 0?void 0:x.error);if(C){ce(hn,`RPC '${t}' stream ${i} received error:`,C);const T=C.status;let A=function(b){const N=Rt[b];if(N!==void 0)return eN(N)}(T),O=C.message;A===void 0&&(A=H.INTERNAL,O="Unknown error status: "+T+" with message "+C.message),m=!0,v.fo(new fe(A,O)),d.close()}else ce(hn,`RPC '${t}' stream ${i} received:`,S),v._o(S)}}),w(a,uV.STAT_EVENT,_=>{_.stat===hx.PROXY?ce(hn,`RPC '${t}' stream ${i} detected buffering proxy`):_.stat===hx.NOPROXY&&ce(hn,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.lo()},0),v}}function J0(){return typeof document!="undefined"?document:null}/**
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
 */function Ym(e){return new gz(e,!0)}/**
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
 */class hN{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(t){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&ce("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),t())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class dN{constructor(t,n,r,i,s,o,a,u){this.si=t,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new hN(t,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(t){this.Wo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(t,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,t!==4?this.Lo.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Xi(n.toString()),Xi("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(n)}Jo(){}auth(){this.state=1;const t=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{t(()=>{const i=new fe(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(t,n){const r=this.Yo(this.$o);this.stream=this.tu(t,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(t){return ce("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Yo(t){return n=>{this.si.enqueueAndForget(()=>this.$o===t?n():(ce("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sj extends dN{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.Lo.reset();const n=wz(this.serializer,t),r=function(i){if(!("targetChange"in i))return Ce.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Ce.min():s.readTime?oi(s.readTime):Ce.min()}(t);return this.listener.eu(n,r)}nu(t){const n={};n.database=Qv(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Yv(a)?{documents:Ez(i,a)}:{query:Cz(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=rN(i,s.resumeToken);const u=Gv(i,s.expectedCount);u!==null&&(o.expectedCount=u)}else if(s.snapshotVersion.compareTo(Ce.min())>0){o.readTime=gp(i,s.snapshotVersion.toTimestamp());const u=Gv(i,s.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,t);const r=xz(this.serializer,t);r&&(n.labels=r),this.zo(n)}su(t){const n={};n.database=Qv(this.serializer),n.removeTarget=t,this.zo(n)}}class oj extends dN{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(at(!!t.streamToken),this.lastStreamToken=t.streamToken,this.iu){this.Lo.reset();const n=Sz(t.writeResults,t.commitTime),r=oi(t.commitTime);return this.listener.uu(r,n)}return at(!t.writeResults||t.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const t={};t.database=Qv(this.serializer),this.zo(t)}ou(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>_z(this.serializer,r))};this.zo(n)}}/**
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
 */class aj extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new fe(H.FAILED_PRECONDITION,"The client has already been terminated.")}po(t,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new fe(H.UNKNOWN,i.toString())})}Ao(t,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new fe(H.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class lj{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(t){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.gu("Offline")))}set(t){this.Iu(),this.du=0,t==="Online"&&(this.wu=!1),this.gu(t)}gu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}yu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Xi(n),this.wu=!1):ce("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class uj{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{ca(this)&&(ce("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=xe(a);u.Au.add(4),await _h(u),u.Pu.set("Unknown"),u.Au.delete(4),await Wm(u)}(this))})}),this.Pu=new lj(r,i)}}async function Wm(e){if(ca(e))for(const t of e.Ru)await t(!0)}async function _h(e){for(const t of e.Ru)await t(!1)}function fN(e,t){const n=xe(e);n.Eu.has(t.targetId)||(n.Eu.set(t.targetId,t),L_(n)?M_(n):Yl(n).Uo()&&P_(n,t))}function pN(e,t){const n=xe(e),r=Yl(n);n.Eu.delete(t),r.Uo()&&mN(n,t),n.Eu.size===0&&(r.Uo()?r.Qo():ca(n)&&n.Pu.set("Unknown"))}function P_(e,t){if(e.bu.Lt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ce.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Yl(e).nu(t)}function mN(e,t){e.bu.Lt(t),Yl(e).su(t)}function M_(e){e.bu=new dz({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),he:t=>e.Eu.get(t)||null,oe:()=>e.datastore.serializer.databaseId}),Yl(e).start(),e.Pu.mu()}function L_(e){return ca(e)&&!Yl(e).qo()&&e.Eu.size>0}function ca(e){return xe(e).Au.size===0}function gN(e){e.bu=void 0}async function cj(e){e.Eu.forEach((t,n)=>{P_(e,t)})}async function hj(e,t){gN(e),L_(e)?(e.Pu.pu(t),M_(e)):e.Pu.set("Unknown")}async function dj(e,t,n){if(e.Pu.set("Online"),t instanceof nN&&t.state===2&&t.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(e,t)}catch(r){ce("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await yp(e,r)}else if(t instanceof nf?e.bu.Wt(t):t instanceof tN?e.bu.ee(t):e.bu.Yt(t),!n.isEqual(Ce.min()))try{const r=await cN(e.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Eu.get(u);c&&i.Eu.set(u,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,u)=>{const c=i.Eu.get(a);if(!c)return;i.Eu.set(a,c.withResumeToken(Cn.EMPTY_BYTE_STRING,c.snapshotVersion)),mN(i,a);const d=new ks(c.target,a,u,c.sequenceNumber);P_(i,d)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(r){ce("RemoteStore","Failed to raise snapshot:",r),await yp(e,r)}}async function yp(e,t,n){if(!yh(t))throw t;e.Au.add(1),await _h(e),e.Pu.set("Offline"),n||(n=()=>cN(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{ce("RemoteStore","Retrying IndexedDB access"),await n(),e.Au.delete(1),await Wm(e)})}function yN(e,t){return t().catch(n=>yp(e,n,t))}async function Hm(e){const t=xe(e),n=Js(t);let r=t.Tu.length>0?t.Tu[t.Tu.length-1].batchId:-1;for(;fj(t);)try{const i=await Xz(t.localStore,r);if(i===null){t.Tu.length===0&&n.Qo();break}r=i.batchId,pj(t,i)}catch(i){await yp(t,i)}vN(t)&&wN(t)}function fj(e){return ca(e)&&e.Tu.length<10}function pj(e,t){e.Tu.push(t);const n=Js(e);n.Uo()&&n.ru&&n.ou(t.mutations)}function vN(e){return ca(e)&&!Js(e).qo()&&e.Tu.length>0}function wN(e){Js(e).start()}async function mj(e){Js(e).au()}async function gj(e){const t=Js(e);for(const n of e.Tu)t.ou(n.mutations)}async function yj(e,t,n){const r=e.Tu.shift(),i=D_.from(r,t,n);await yN(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Hm(e)}async function vj(e,t){t&&Js(e).ru&&await async function(n,r){if(i=r.code,uz(i)&&i!==H.ABORTED){const s=n.Tu.shift();Js(n).Go(),await yN(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Hm(n)}var i}(e,t),vN(e)&&wN(e)}async function Lx(e,t){const n=xe(e);n.asyncQueue.verifyOperationInProgress(),ce("RemoteStore","RemoteStore received new credentials");const r=ca(n);n.Au.add(3),await _h(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Au.delete(3),await Wm(n)}async function wj(e,t){const n=xe(e);t?(n.Au.delete(2),await Wm(n)):t||(n.Au.add(2),await _h(n),n.Pu.set("Unknown"))}function Yl(e){return e.Vu||(e.Vu=function(t,n,r){const i=xe(t);return i.lu(),new sj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{oo:cj.bind(null,e),co:hj.bind(null,e),eu:dj.bind(null,e)}),e.Ru.push(async t=>{t?(e.Vu.Go(),L_(e)?M_(e):e.Pu.set("Unknown")):(await e.Vu.stop(),gN(e))})),e.Vu}function Js(e){return e.Su||(e.Su=function(t,n,r){const i=xe(t);return i.lu(),new oj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{oo:mj.bind(null,e),co:vj.bind(null,e),cu:gj.bind(null,e),uu:yj.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Go(),await Hm(e)):(await e.Su.stop(),e.Tu.length>0&&(ce("RemoteStore",`Stopping write stream with ${e.Tu.length} pending writes`),e.Tu=[]))})),e.Su}/**
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
 */class $_{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new $_(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(H.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function F_(e,t){if(Xi("AsyncQueue",`${t}: ${e}`),yh(e))return new fe(H.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class rl{constructor(t){this.comparator=t?(n,r)=>t(n,r)||pe.comparator(n.key,r.key):(n,r)=>pe.comparator(n.key,r.key),this.keyedMap=Iu(),this.sortedSet=new St(this.comparator)}static emptySet(t){return new rl(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof rl)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new rl;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class $x{constructor(){this.Du=new St(pe.comparator)}track(t){const n=t.doc.key,r=this.Du.get(n);r?t.type!==0&&r.type===3?this.Du=this.Du.insert(n,t):t.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Du=this.Du.remove(n):t.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):Se():this.Du=this.Du.insert(n,t)}Cu(){const t=[];return this.Du.inorderTraversal((n,r)=>{t.push(r)}),t}}class xl{constructor(t,n,r,i,s,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xl(t,n,rl.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Um(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class _j{constructor(){this.xu=void 0,this.listeners=[]}}class Sj{constructor(){this.queries=new jl(t=>Bb(t),Um),this.onlineState="Unknown",this.Nu=new Set}}async function _N(e,t){const n=xe(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new _j),i)try{s.xu=await n.onListen(r)}catch(o){const a=F_(o,`Initialization of query '${Hv(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.ku(n.onlineState),s.xu&&t.Mu(s.xu)&&U_(n)}async function SN(e,t){const n=xe(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Ej(e,t){const n=xe(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&U_(n)}function Cj(e,t,n){const r=xe(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function U_(e){e.Nu.forEach(t=>{t.next()})}class EN{constructor(t,n,r){this.query=t,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new xl(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.$u?this.Bu(t)&&(this.Ou.next(t),n=!0):this.Lu(t,this.onlineState)&&(this.qu(t),n=!0),this.Fu=t,n}onError(t){this.Ou.error(t)}ku(t){this.onlineState=t;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,t)&&(this.qu(this.Fu),n=!0),n}Lu(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Bu(t){if(t.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(t){t=xl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.$u=!0,this.Ou.next(t)}}/**
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
 */class CN{constructor(t){this.key=t}}class kN{constructor(t){this.key=t}}class kj{constructor(t,n){this.query=t,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Pe(),this.mutatedKeys=Pe(),this.Zu=Vb(t),this.tc=new rl(this.Zu)}get ec(){return this.Ju}nc(t,n){const r=n?n.sc:new $x,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((d,p)=>{const m=i.get(d),v=Bm(this.query,p)?p:null,w=!!m&&this.mutatedKeys.has(m.key),_=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let x=!1;m&&v?m.data.isEqual(v.data)?w!==_&&(r.track({type:3,doc:v}),x=!0):this.ic(m,v)||(r.track({type:2,doc:v}),x=!0,(u&&this.Zu(v,u)>0||c&&this.Zu(v,c)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),x=!0):m&&!v&&(r.track({type:1,doc:m}),x=!0,(u||c)&&(a=!0)),x&&(v?(o=o.add(v),s=_?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.tc;this.tc=t.tc,this.mutatedKeys=t.mutatedKeys;const s=t.sc.Cu();s.sort((c,d)=>function(p,m){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return v(p)-v(m)}(c.type,d.type)||this.Zu(c.doc,d.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,u=a!==this.Yu;return this.Yu=a,s.length!==0||u?{snapshot:new xl(this.query,t.tc,i,s,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new $x,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(t){return!this.Ju.has(t)&&!!this.tc.has(t)&&!this.tc.get(t).hasLocalMutations}rc(t){t&&(t.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=t.current)}oc(){if(!this.current)return[];const t=this.Xu;this.Xu=Pe(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return t.forEach(r=>{this.Xu.has(r)||n.push(new kN(r))}),this.Xu.forEach(r=>{t.has(r)||n.push(new CN(r))}),n}ac(t){this.Ju=t.sr,this.Xu=Pe();const n=this.nc(t.documents);return this.applyChanges(n,!0)}hc(){return xl.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class xj{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Tj{constructor(t){this.key=t,this.lc=!1}}class Dj{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new jl(a=>Bb(a),Um),this._c=new Map,this.wc=new Set,this.mc=new St(pe.comparator),this.gc=new Map,this.yc=new N_,this.Ic={},this.Tc=new Map,this.Ec=kl.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function Ij(e,t){const n=Fj(e);let r,i;const s=n.dc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await Jz(n.localStore,Ji(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Aj(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&fN(n.remoteStore,o)}return i}async function Aj(e,t,n,r,i){e.Rc=(p,m,v)=>async function(w,_,x,S){let y=_.view.nc(x);y.ji&&(y=await Rx(w.localStore,_.query,!1).then(({documents:A})=>_.view.nc(A,y)));const C=S&&S.targetChanges.get(_.targetId),T=_.view.applyChanges(y,w.isPrimaryClient,C);return Ux(w,_.targetId,T.uc),T.snapshot}(e,p,m,v);const s=await Rx(e.localStore,t,!0),o=new kj(t,s.sr),a=o.nc(s.documents),u=wh.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,u);Ux(e,n,c.uc);const d=new xj(t,n,o);return e.dc.set(t,d),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function bj(e,t){const n=xe(e),r=n.dc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Um(s,t))),void n.dc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xv(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),pN(n.remoteStore,r.targetId),Jv(n,r.targetId)}).catch(gh)):(Jv(n,r.targetId),await Xv(n.localStore,r.targetId,!0))}async function Nj(e,t,n){const r=Uj(e);try{const i=await function(s,o){const a=xe(s),u=Yt.now(),c=o.reduce((m,v)=>m.add(v.key),Pe());let d,p;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=Zi(),w=Pe();return a.Xi.getEntries(m,c).next(_=>{v=_,v.forEach((x,S)=>{S.isValidDocument()||(w=w.add(x))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,v)).next(_=>{d=_;const x=[];for(const S of o){const y=iz(S,d.get(S.key).overlayedDocument);y!=null&&x.push(new ua(S.key,y,Rb(y.value.mapValue),si.exists(!0)))}return a.mutationQueue.addMutationBatch(m,u,x,o)}).next(_=>{p=_;const x=_.applyToLocalDocumentSet(d,w);return a.documentOverlayCache.saveOverlays(m,_.batchId,x)})}).then(()=>({batchId:p.batchId,changes:jb(d)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Ic[s.currentUser.toKey()];u||(u=new St(He)),u=u.insert(o,a),s.Ic[s.currentUser.toKey()]=u}(r,i.batchId,n),await Sh(r,i.changes),await Hm(r.remoteStore)}catch(i){const s=F_(i,"Failed to persist write");n.reject(s)}}async function xN(e,t){const n=xe(e);try{const r=await Kz(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(at(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?at(o.lc):i.removedDocuments.size>0&&(at(o.lc),o.lc=!1))}),await Sh(n,r,t)}catch(r){await gh(r)}}function Fx(e,t,n){const r=xe(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(t);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=xe(s);a.onlineState=o;let u=!1;a.queries.forEach((c,d)=>{for(const p of d.listeners)p.ku(o)&&(u=!0)}),u&&U_(a)}(r.eventManager,t),i.length&&r.fc.eu(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Oj(e,t,n){const r=xe(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.gc.get(t),s=i&&i.key;if(s){let o=new St(pe.comparator);o=o.insert(s,mn.newNoDocument(s,Ce.min()));const a=Pe().add(s),u=new jm(Ce.min(),new Map,new St(He),o,a);await xN(r,u),r.mc=r.mc.remove(s),r.gc.delete(t),B_(r)}else await Xv(r.localStore,t,!1).then(()=>Jv(r,t,n)).catch(gh)}async function Rj(e,t){const n=xe(e),r=t.batch.batchId;try{const i=await qz(n.localStore,t);DN(n,r,null),TN(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Sh(n,i)}catch(i){await gh(i)}}async function Pj(e,t,n){const r=xe(e);try{const i=await function(s,o){const a=xe(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(d=>(at(d!==null),c=d.keys(),a.mutationQueue.removeMutationBatch(u,d))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(r.localStore,t);DN(r,t,n),TN(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Sh(r,i)}catch(i){await gh(i)}}function TN(e,t){(e.Tc.get(t)||[]).forEach(n=>{n.resolve()}),e.Tc.delete(t)}function DN(e,t,n){const r=xe(e);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Ic[r.currentUser.toKey()]=i}}function Jv(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.dc.delete(r),n&&e.fc.vc(r,n);e._c.delete(t),e.isPrimaryClient&&e.yc.ps(t).forEach(r=>{e.yc.containsKey(r)||IN(e,r)})}function IN(e,t){e.wc.delete(t.path.canonicalString());const n=e.mc.get(t);n!==null&&(pN(e.remoteStore,n),e.mc=e.mc.remove(t),e.gc.delete(n),B_(e))}function Ux(e,t,n){for(const r of n)r instanceof CN?(e.yc.addReference(r.key,t),Mj(e,r)):r instanceof kN?(ce("SyncEngine","Document no longer in limbo: "+r.key),e.yc.removeReference(r.key,t),e.yc.containsKey(r.key)||IN(e,r.key)):Se()}function Mj(e,t){const n=t.key,r=n.path.canonicalString();e.mc.get(n)||e.wc.has(r)||(ce("SyncEngine","New document in limbo: "+n),e.wc.add(r),B_(e))}function B_(e){for(;e.wc.size>0&&e.mc.size<e.maxConcurrentLimboResolutions;){const t=e.wc.values().next().value;e.wc.delete(t);const n=new pe(gt.fromString(t)),r=e.Ec.next();e.gc.set(r,new Tj(n)),e.mc=e.mc.insert(n,r),fN(e.remoteStore,new ks(Ji(T_(n.path)),r,"TargetPurposeLimboResolution",__.ct))}}async function Sh(e,t,n){const r=xe(e),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,u)=>{o.push(r.Rc(u,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const d=R_.Bi(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,u){const c=xe(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>Q.forEach(u,p=>Q.forEach(p.$i,m=>c.persistence.referenceDelegate.addReference(d,p.targetId,m)).next(()=>Q.forEach(p.Fi,m=>c.persistence.referenceDelegate.removeReference(d,p.targetId,m)))))}catch(d){if(!yh(d))throw d;ce("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const m=c.Hi.get(p),v=m.snapshotVersion,w=m.withLastLimboFreeSnapshotVersion(v);c.Hi=c.Hi.insert(p,w)}}}(r.localStore,s))}async function Lj(e,t){const n=xe(e);if(!n.currentUser.isEqual(t)){ce("SyncEngine","User change. New user:",t.toKey());const r=await uN(n.localStore,t);n.currentUser=t,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new fe(H.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Sh(n,r.tr)}}function $j(e,t){const n=xe(e),r=n.gc.get(t);if(r&&r.lc)return Pe().add(r.key);{let i=Pe();const s=n._c.get(t);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function Fj(e){const t=xe(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=xN.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=$j.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Oj.bind(null,t),t.fc.eu=Ej.bind(null,t.eventManager),t.fc.vc=Cj.bind(null,t.eventManager),t}function Uj(e){const t=xe(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Rj.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Pj.bind(null,t),t}class Bx{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ym(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Gz(this.persistence,new Wz,t.initialUser,this.serializer)}createPersistence(t){return new jz(O_.js,this.serializer)}createSharedClientState(t){return new ej}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Bj{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fx(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lj.bind(null,this.syncEngine),await wj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Sj}createDatastore(t){const n=Ym(t.databaseInfo.databaseId),r=(i=t.databaseInfo,new ij(i));var i;return function(s,o,a,u){return new aj(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return n=this.localStore,r=this.datastore,i=t.asyncQueue,s=a=>Fx(this.syncEngine,a,0),o=Mx.D()?new Mx:new tj,new uj(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(t,n){return function(r,i,s,o,a,u,c){const d=new Dj(r,i,s,o,a,u);return c&&(d.Ac=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=xe(t);ce("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await _h(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class AN{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Vc(this.observer.next,t)}error(t){this.observer.error?this.Vc(this.observer.error,t):Xi("Uncaught Error in snapshot listener:",t.toString())}Sc(){this.muted=!0}Vc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class Vj{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=fn.UNAUTHENTICATED,this.clientId=bb.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ce("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ce("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new fe(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=F_(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Z0(e,t){e.asyncQueue.verifyOperationInProgress(),ce("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await uN(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Vx(e,t){e.asyncQueue.verifyOperationInProgress();const n=await jj(e);ce("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Lx(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Lx(t.remoteStore,s)),e._onlineComponents=t}function zj(e){return e.name==="FirebaseError"?e.code===H.FAILED_PRECONDITION||e.code===H.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function jj(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ce("FirestoreClient","Using user provided OfflineComponentProvider");try{await Z0(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!zj(n))throw n;_l("Error using user provided cache. Falling back to memory cache: "+n),await Z0(e,new Bx)}}else ce("FirestoreClient","Using default OfflineComponentProvider"),await Z0(e,new Bx);return e._offlineComponents}async function bN(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ce("FirestoreClient","Using user provided OnlineComponentProvider"),await Vx(e,e._uninitializedComponentsProvider._online)):(ce("FirestoreClient","Using default OnlineComponentProvider"),await Vx(e,new Bj))),e._onlineComponents}function Yj(e){return bN(e).then(t=>t.syncEngine)}async function NN(e){const t=await bN(e),n=t.eventManager;return n.onListen=Ij.bind(null,t.syncEngine),n.onUnlisten=bj.bind(null,t.syncEngine),n}function Wj(e,t,n={}){const r=new Vi;return e.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const c=new AN({next:p=>{s.enqueueAndForget(()=>SN(i,d));const m=p.docs.has(o);!m&&p.fromCache?u.reject(new fe(H.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&a&&a.source==="server"?u.reject(new fe(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new EN(T_(o.path),c,{includeMetadataChanges:!0,Uu:!0});return _N(i,d)}(await NN(e),e.asyncQueue,t,n,r)),r.promise}function Hj(e,t,n={}){const r=new Vi;return e.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const c=new AN({next:p=>{s.enqueueAndForget(()=>SN(i,d)),p.fromCache&&a.source==="server"?u.reject(new fe(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new EN(o,c,{includeMetadataChanges:!0,Uu:!0});return _N(i,d)}(await NN(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */const zx=new Map;/**
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
 */function ON(e,t,n){if(!n)throw new fe(H.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Gj(e,t,n,r){if(t===!0&&r===!0)throw new fe(H.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function jx(e){if(!pe.isDocumentKey(e))throw new fe(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Yx(e){if(pe.isDocumentKey(e))throw new fe(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function V_(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Se()}function Zs(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new fe(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=V_(e);throw new fe(H.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Wx{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new fe(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new fe(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Gj("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Gm{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wx({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new fe(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new fe(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wx(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new fV;switch(n.type){case"firstParty":return new yV(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new fe(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=zx.get(t);n&&(ce("ComponentProvider","Removing Datastore"),zx.delete(t),n.terminate())}(this),Promise.resolve()}}function qj(e,t,n,r={}){var i;const s=(e=Zs(e,Gm))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&_l("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=fn.MOCK_USER;else{o=FI(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new fe(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new fn(u)}e._authCredentials=new pV(new Ab(o,a))}}/**
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
 */class Xn{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Xn(this.firestore,t,this._key)}}class qm{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new qm(this.firestore,t,this._query)}}class zs extends qm{constructor(t,n,r){super(t,n,T_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Xn(this.firestore,null,new pe(t))}withConverter(t){return new zs(this.firestore,t,this._path)}}function lo(e,t,...n){if(e=Qt(e),ON("collection","path",t),e instanceof Gm){const r=gt.fromString(t,...n);return Yx(r),new zs(e,null,r)}{if(!(e instanceof Xn||e instanceof zs))throw new fe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(gt.fromString(t,...n));return Yx(r),new zs(e.firestore,null,r)}}function Eh(e,t,...n){if(e=Qt(e),arguments.length===1&&(t=bb.A()),ON("doc","path",t),e instanceof Gm){const r=gt.fromString(t,...n);return jx(r),new Xn(e,null,new pe(r))}{if(!(e instanceof Xn||e instanceof zs))throw new fe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(gt.fromString(t,...n));return jx(r),new Xn(e.firestore,e instanceof zs?e.converter:null,new pe(r))}}/**
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
 */class Kj{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new hN(this,"async_queue_retry"),this.Yc=()=>{const n=J0();n&&ce("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const t=J0();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xc(),this.Zc(t)}enterRestrictedMode(t){if(!this.Qc){this.Qc=!0,this.Hc=t||!1;const n=J0();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(t){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Vi;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Gc.push(t),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(t){if(!yh(t))throw t;ce("AsyncQueue","Operation failed with retryable error: "+t)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(t){const n=this.Kc.then(()=>(this.Wc=!0,t().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Xi("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(t,n,r){this.Xc(),this.Jc.indexOf(t)>-1&&(n=0);const i=$_.createAndSchedule(this,t,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&Se()}verifyOperationInProgress(){}async na(){let t;do t=this.Kc,await t;while(t!==this.Kc)}sa(t){for(const n of this.jc)if(n.timerId===t)return!0;return!1}ia(t){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.na()})}ra(t){this.Jc.push(t)}ea(t){const n=this.jc.indexOf(t);this.jc.splice(n,1)}}class Ch extends Gm{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new Kj,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||RN(this),this._firestoreClient.terminate()}}function Qj(e,t){const n=typeof e=="object"?e:Uw(),r=typeof e=="string"?e:t||"(default)",i=vm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=LI("firestore");s&&qj(i,...s)}return i}function z_(e){return e._firestoreClient||RN(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function RN(e){var t,n,r;const i=e._freezeSettings(),s=function(o,a,u,c){return new AV(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Vj(e._authCredentials,e._appCheckCredentials,e._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Tl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Tl(Cn.fromBase64String(t))}catch(n){throw new fe(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Tl(Cn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class j_{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new fe(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class PN{constructor(t){this._methodName=t}}/**
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
 */class Y_{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new fe(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new fe(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return He(this._lat,t._lat)||He(this._long,t._long)}}/**
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
 */const Xj=/^__.*__$/;class Jj{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ua(t,this.data,this.fieldMask,n,this.fieldTransforms):new vh(t,this.data,n,this.fieldTransforms)}}function MN(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class W_{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(t){return new W_(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ca({path:r,ha:!1});return i.la(t),i}fa(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ca({path:r,ha:!1});return i.oa(),i}da(t){return this.ca({path:void 0,ha:!0})}_a(t){return vp(t,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let t=0;t<this.path.length;t++)this.la(this.path.get(t))}la(t){if(t.length===0)throw this._a("Document fields must not be empty");if(MN(this.ua)&&Xj.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class Zj{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ym(t)}ga(t,n,r,i=!1){return new W_({ua:t,methodName:n,ma:r,path:gn.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function LN(e){const t=e._freezeSettings(),n=Ym(e._databaseId);return new Zj(e._databaseId,!!t.ignoreUndefinedProperties,n)}function $N(e,t,n,r,i,s={}){const o=e.ga(s.merge||s.mergeFields?2:0,t,n,i);VN("Data must be an object, but it was:",o,r);const a=UN(r,o);let u,c;if(s.merge)u=new Rr(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=eY(t,p,n);if(!o.contains(m))throw new fe(H.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);nY(d,m)||d.push(m)}u=new Rr(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new Jj(new cr(a),u,c)}function FN(e,t){if(BN(e=Qt(e)))return VN("Unsupported field value:",t,e),UN(e,t);if(e instanceof PN)return function(n,r){if(!MN(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ha&&t.ua!==4)throw t._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=FN(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(e,t)}return function(n,r){if((n=Qt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return JV(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Yt.fromDate(n);return{timestampValue:gp(r.serializer,i)}}if(n instanceof Yt){const i=new Yt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:gp(r.serializer,i)}}if(n instanceof Y_)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Tl)return{bytesValue:rN(r.serializer,n._byteString)};if(n instanceof Xn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:b_(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${V_(n)}`)}(e,t)}function UN(e,t){const n={};return Nb(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):zl(e,(r,i)=>{const s=FN(i,t.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function BN(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Yt||e instanceof Y_||e instanceof Tl||e instanceof Xn||e instanceof PN)}function VN(e,t,n){if(!BN(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=V_(n);throw r==="an object"?t._a(e+" a custom object"):t._a(e+" "+r)}}function eY(e,t,n){if((t=Qt(t))instanceof j_)return t._internalPath;if(typeof t=="string")return zN(e,t);throw vp("Field path arguments must be of type string or ",e,!1,void 0,n)}const tY=new RegExp("[~\\*/\\[\\]]");function zN(e,t,n){if(t.search(tY)>=0)throw vp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new j_(...t.split("."))._internalPath}catch{throw vp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function vp(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new fe(H.INVALID_ARGUMENT,a+e+u)}function nY(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class jN{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Xn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new rY(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(YN("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rY extends jN{data(){return super.data()}}function YN(e,t){return typeof t=="string"?zN(e,t):t instanceof j_?t._internalPath:t._delegate._internalPath}/**
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
 */function iY(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new fe(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sY{convertValue(t,n="none"){switch(Jo(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Pt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Xo(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Se()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return zl(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Y_(Pt(t.latitude),Pt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=E_(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Nc(t));default:return null}}convertTimestamp(t){const n=Xs(t);return new Yt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=gt.fromString(t);at(lN(r));const i=new Oc(r.get(1),r.get(3)),s=new pe(r.popFirst(5));return i.isEqual(n)||Xi(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function WN(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class bu{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class HN extends jN{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new rf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(YN("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class rf extends HN{data(t={}){return super.data(t)}}class oY{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new bu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new rf(this._firestore,this._userDataWriter,r.key,r,new bu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new rf(r._firestore,r._userDataWriter,o.doc.key,o.doc,new bu(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new rf(r._firestore,r._userDataWriter,o.doc.key,o.doc,new bu(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,c=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:aY(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function aY(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se()}}/**
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
 */function H_(e){e=Zs(e,Xn);const t=Zs(e.firestore,Ch);return Wj(z_(t),e._key).then(n=>uY(t,e,n))}class GN extends sY{constructor(t){super(),this.firestore=t}convertBytes(t){return new Tl(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Xn(this.firestore,null,n)}}function Km(e){e=Zs(e,qm);const t=Zs(e.firestore,Ch),n=z_(t),r=new GN(t);return iY(e._query),Hj(n,e._query).then(i=>new oY(t,r,e,i))}function lY(e,t,n){e=Zs(e,Xn);const r=Zs(e.firestore,Ch),i=WN(e.converter,t,n);return qN(r,[$N(LN(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,si.none())])}function Qm(e,t){const n=Zs(e.firestore,Ch),r=Eh(e),i=WN(e.converter,t);return qN(n,[$N(LN(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,si.exists(!1))]).then(()=>r)}function qN(e,t){return function(n,r){const i=new Vi;return n.asyncQueue.enqueueAndForget(async()=>Nj(await Yj(n),r,i)),i.promise}(z_(e),t)}function uY(e,t,n){const r=n.docs.get(t._key),i=new GN(e);return new HN(e,i,t._key,r,new bu(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Vl=n})(oa),Go(new Ks("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ch(new mV(n.getProvider("auth-internal")),new wV(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new fe(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oc(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ni(dx,"3.11.0",e),ni(dx,"3.11.0","esm2017")})();/**
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
 */const KN="firebasestorage.googleapis.com",QN="storageBucket",cY=2*60*1e3,hY=10*60*1e3;/**
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
 */class Dt extends di{constructor(t,n,r=0){super(ey(t),`Firebase Storage: ${n} (${ey(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Dt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ey(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Tt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Tt||(Tt={}));function ey(e){return"storage/"+e}function G_(){const e="An unknown error occurred, please check the error payload for server response.";return new Dt(Tt.UNKNOWN,e)}function dY(e){return new Dt(Tt.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function fY(e){return new Dt(Tt.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function pY(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Dt(Tt.UNAUTHENTICATED,e)}function mY(){return new Dt(Tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gY(e){return new Dt(Tt.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function yY(){return new Dt(Tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vY(){return new Dt(Tt.CANCELED,"User canceled the upload/download.")}function wY(e){return new Dt(Tt.INVALID_URL,"Invalid URL '"+e+"'.")}function _Y(e){return new Dt(Tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function SY(){return new Dt(Tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+QN+"' property when initializing the app?")}function EY(){return new Dt(Tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function CY(){return new Dt(Tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function kY(e){return new Dt(Tt.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Zv(e){return new Dt(Tt.INVALID_ARGUMENT,e)}function XN(){return new Dt(Tt.APP_DELETED,"The Firebase app was deleted.")}function xY(e){return new Dt(Tt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gu(e,t){return new Dt(Tt.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function mu(e){throw new Dt(Tt.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class Kn{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Kn.makeFromUrl(t,n)}catch{return new Kn(t,"")}if(r.path==="")return r;throw _Y(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),w={bucket:1,path:3},_=n===KN?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",S=new RegExp(`^https?://${_}/${i}/${x}`,"i"),C=[{regex:a,indices:u,postModify:s},{regex:v,indices:w,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<C.length;T++){const A=C[T],O=A.regex.exec(t);if(O){const b=O[A.indices.bucket];let N=O[A.indices.path];N||(N=""),r=new Kn(b,N),A.postModify(r);break}}if(r==null)throw wY(t);return r}}class TY{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function DY(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...x){c||(c=!0,t.apply(null,x))}function p(x){i=setTimeout(()=>{i=null,e(v,u())},x)}function m(){s&&clearTimeout(s)}function v(x,...S){if(c){m();return}if(x){m(),d.call(null,x,...S);return}if(u()||o){m(),d.call(null,x,...S);return}r<64&&(r*=2);let C;a===1?(a=2,C=0):C=(r+Math.random())*1e3,p(C)}let w=!1;function _(x){w||(w=!0,m(),!c&&(i!==null?(x||(a=2),clearTimeout(i),p(0)):x||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function IY(e){e(!1)}/**
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
 */function AY(e){return e!==void 0}function bY(e){return typeof e=="object"&&!Array.isArray(e)}function q_(e){return typeof e=="string"||e instanceof String}function Hx(e){return K_()&&e instanceof Blob}function K_(){return typeof Blob!="undefined"&&!F8()}function Gx(e,t,n,r){if(r<t)throw Zv(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Zv(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function Q_(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function JN(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Lo;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Lo||(Lo={}));/**
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
 */function NY(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class OY{constructor(t,n,r,i,s,o,a,u,c,d,p,m=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,w)=>{this.resolve_=v,this.reject_=w,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Nd(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Lo.NO_ERROR,u=s.getStatus();if(!a||NY(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Lo.ABORT;r(!1,new Nd(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Nd(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());AY(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=G_();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?XN():vY();o(u)}else{const u=yY();o(u)}};this.canceled_?n(!1,new Nd(!1,null,!0)):this.backoffId_=DY(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&IY(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Nd{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function RY(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function PY(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function MY(e,t){t&&(e["X-Firebase-GMPID"]=t)}function LY(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function $Y(e,t,n,r,i,s,o=!0){const a=JN(e.urlParams),u=e.url+a,c=Object.assign({},e.headers);return MY(c,t),RY(c,n),PY(c,s),LY(c,r),new OY(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
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
 */function FY(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function UY(...e){const t=FY();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(K_())return new Blob(e);throw new Dt(Tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function BY(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function VY(e){if(typeof atob=="undefined")throw kY("base-64");return atob(e)}/**
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
 */const Jr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ty{constructor(t,n){this.data=t,this.contentType=n||null}}function zY(e,t){switch(e){case Jr.RAW:return new ty(ZN(t));case Jr.BASE64:case Jr.BASE64URL:return new ty(eO(e,t));case Jr.DATA_URL:return new ty(YY(t),WY(t))}throw G_()}function ZN(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,o=e.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function jY(e){let t;try{t=decodeURIComponent(e)}catch{throw Gu(Jr.DATA_URL,"Malformed data URL.")}return ZN(t)}function eO(e,t){switch(e){case Jr.BASE64:{const i=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(i||s)throw Gu(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Jr.BASE64URL:{const i=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(i||s)throw Gu(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=VY(t)}catch(i){throw i.message.includes("polyfill")?i:Gu(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class tO{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw Gu(Jr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=HY(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function YY(e){const t=new tO(e);return t.base64?eO(Jr.BASE64,t.rest):jY(t.rest)}function WY(e){return new tO(e).contentType}function HY(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class _s{constructor(t,n){let r=0,i="";Hx(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(Hx(this.data_)){const r=this.data_,i=BY(r,t,n);return i===null?null:new _s(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new _s(r,!0)}}static getBlob(...t){if(K_()){const n=t.map(r=>r instanceof _s?r.data_:r);return new _s(UY.apply(null,n))}else{const n=t.map(o=>q_(o)?zY(Jr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new _s(i,!0)}}uploadData(){return this.data_}}/**
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
 */function nO(e){let t;try{t=JSON.parse(e)}catch{return null}return bY(t)?t:null}/**
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
 */function GY(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function qY(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function rO(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function KY(e,t){return t}class An{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||KY}}let Od=null;function QY(e){return!q_(e)||e.length<2?e:rO(e)}function iO(){if(Od)return Od;const e=[];e.push(new An("bucket")),e.push(new An("generation")),e.push(new An("metageneration")),e.push(new An("name","fullPath",!0));function t(s,o){return QY(o)}const n=new An("name");n.xform=t,e.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new An("size");return i.xform=r,e.push(i),e.push(new An("timeCreated")),e.push(new An("updated")),e.push(new An("md5Hash",null,!0)),e.push(new An("cacheControl",null,!0)),e.push(new An("contentDisposition",null,!0)),e.push(new An("contentEncoding",null,!0)),e.push(new An("contentLanguage",null,!0)),e.push(new An("contentType",null,!0)),e.push(new An("metadata","customMetadata",!0)),Od=e,Od}function XY(e,t){function n(){const r=e.bucket,i=e.fullPath,s=new Kn(r,i);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function JY(e,t,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,t[o.server])}return XY(r,e),r}function sO(e,t,n){const r=nO(t);return r===null?null:JY(e,r,n)}function ZY(e,t,n,r){const i=nO(t);if(i===null||!q_(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=e.bucket,p=e.fullPath,m="/b/"+o(d)+"/o/"+o(p),v=Q_(m,n,r),w=JN({alt:"media",token:c});return v+w})[0]}function eW(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class oO{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function aO(e){if(!e)throw G_()}function tW(e,t){function n(r,i){const s=sO(e,i,t);return aO(s!==null),s}return n}function nW(e,t){function n(r,i){const s=sO(e,i,t);return aO(s!==null),ZY(s,i,e.host,e._protocol)}return n}function lO(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=mY():i=pY():n.getStatus()===402?i=fY(e.bucket):n.getStatus()===403?i=gY(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function rW(e){const t=lO(e);function n(r,i){let s=t(r,i);return r.getStatus()===404&&(s=dY(e.path)),s.serverResponse=i.serverResponse,s}return n}function iW(e,t,n){const r=t.fullServerUrl(),i=Q_(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new oO(i,s,nW(e,n),o);return a.errorHandler=rW(t),a}function sW(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function oW(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=sW(null,t)),r}function aW(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let T=0;T<2;T++)C=C+Math.random().toString().slice(2);return C}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=oW(t,r,i),d=eW(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",v=_s.getBlob(p,r,m);if(v===null)throw EY();const w={name:c.fullPath},_=Q_(s,e.host,e._protocol),x="POST",S=e.maxUploadRetryTime,y=new oO(_,x,tW(e,n),S);return y.urlParams=w,y.headers=o,y.body=v.uploadData(),y.errorHandler=lO(t),y}class lW{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Lo.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Lo.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Lo.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw mu("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw mu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw mu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw mu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw mu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class uW extends lW{initXhr(){this.xhr_.responseType="text"}}function uO(){return new uW}/**
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
 */class Zo{constructor(t,n){this._service=t,n instanceof Kn?this._location=n:this._location=Kn.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Zo(t,n)}get root(){const t=new Kn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rO(this._location.path)}get storage(){return this._service}get parent(){const t=GY(this._location.path);if(t===null)return null;const n=new Kn(this._location.bucket,t);return new Zo(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw xY(t)}}function cW(e,t,n){e._throwIfRoot("uploadBytes");const r=aW(e.storage,e._location,iO(),new _s(t,!0),n);return e.storage.makeRequestWithTokens(r,uO).then(i=>({metadata:i,ref:e}))}function hW(e){e._throwIfRoot("getDownloadURL");const t=iW(e.storage,e._location,iO());return e.storage.makeRequestWithTokens(t,uO).then(n=>{if(n===null)throw CY();return n})}function dW(e,t){const n=qY(e._location.path,t),r=new Kn(e._location.bucket,n);return new Zo(e.storage,r)}/**
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
 */function fW(e){return/^[A-Za-z]+:\/\//.test(e)}function pW(e,t){return new Zo(e,t)}function cO(e,t){if(e instanceof X_){const n=e;if(n._bucket==null)throw SY();const r=new Zo(n,n._bucket);return t!=null?cO(r,t):r}else return t!==void 0?dW(e,t):e}function mW(e,t){if(t&&fW(t)){if(e instanceof X_)return pW(e,t);throw Zv("To use ref(service, url), the first argument must be a Storage instance.")}else return cO(e,t)}function qx(e,t){const n=t==null?void 0:t[QN];return n==null?null:Kn.makeFromBucketSpec(n,e)}function gW(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:FI(i,e.app.options.projectId))}class X_{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=KN,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=cY,this._maxUploadRetryTime=hY,this._requests=new Set,i!=null?this._bucket=Kn.makeFromBucketSpec(i,this._host):this._bucket=qx(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Kn.makeFromBucketSpec(this._url,t):this._bucket=qx(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Gx("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Gx("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Zo(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new TY(XN());{const o=$Y(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Kx="@firebase/storage",Qx="0.11.2";/**
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
 */const hO="storage";function Xm(e,t,n){return e=Qt(e),cW(e,t,n)}function Jm(e){return e=Qt(e),hW(e)}function uo(e,t){return e=Qt(e),mW(e,t)}function yW(e=Uw(),t){e=Qt(e);const r=vm(e,hO).getImmediate({identifier:t}),i=LI("storage");return i&&vW(r,...i),r}function vW(e,t,n,r={}){gW(e,t,n,r)}function wW(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new X_(n,r,i,t,oa)}function _W(){Go(new Ks(hO,wW,"PUBLIC").setMultipleInstances(!0)),ni(Kx,Qx,""),ni(Kx,Qx,"esm2017")}_W();const SW={apiKey:"AIzaSyB6eD_2vEo_ZIjZbDoRg7cX92y81sB0Auc",authDomain:"myclothesapp-cf59a.firebaseapp.com",projectId:"myclothesapp-cf59a",storageBucket:"myclothesapp-cf59a.appspot.com",messagingSenderId:"610226156284",appId:"1:610226156284:web:9336ebebf0a17d99eb1d79",measurementId:"G-LNG72F75QC"},dO=VI(SW),ea=oB(dO),Sr=Qj(dO),Zm=yW(),e1=_r("login/googleLogin",async()=>{const e=new Ai,n=(await m7(ea,e)).user;console.log(n);const r=Eh(Sr,"users",n.uid);return(await H_(r)).data()}),t1=_r("auth/login",async e=>{try{const{email:t,password:n}=e;await fA(ea,qw);const i=(await H9(ea,t,n)).user,s=Eh(Sr,"users",i.uid),o=await H_(s);if(!o.exists())throw new Error("\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC720\uC800\uC785\uB2C8\uB2E4.");return o.data()}catch(t){return Mw(t.message)}}),n1=_r("auth/signOut",async()=>{try{await K9(ea),await fA(ea,qw)}catch(e){return Mw(e.message)}}),EW=()=>e=>{ea.onAuthStateChanged(async t=>{if(t){const n=Eh(Sr,"users",t.uid),r=await H_(n);if(r.exists()){const i=r.data();e({type:"login/loginSuccess",payload:i}),localStorage.setItem("user",JSON.stringify(i))}}else e({type:"login/logout"}),localStorage.removeItem("user")})},CW=()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):null},kW=sa({name:"login",initialState:{user:CW()},extraReducers:e=>{e.addCase(`${e1.fulfilled}`,(t,n)=>{t.user=n.payload}),e.addCase(`${e1.rejected}`,(t,n)=>{alert("\uB85C\uADF8\uC778 \uC2E4\uD328!"),console.log(n.payload)}),e.addCase(`${t1.fulfilled}`,(t,n)=>{t.user=n.payload}),e.addCase(`${t1.rejected}`,(t,n)=>n.error),e.addCase(`${n1.fulfilled}`,(t,n)=>{alert("\uB85C\uADF8\uC544\uC6C3 \uC131\uACF5!"),t.user=null}),e.addCase(`${n1.rejected}`,(t,n)=>{alert("\uB85C\uADF8\uC544\uC6C3 \uC2E4\uD328!"),console.log(n.payload)})}});var xW=kW.reducer,fO={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xx=qt.createContext&&qt.createContext(fO),js=globalThis&&globalThis.__assign||function(){return js=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},js.apply(this,arguments)},TW=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function pO(e){return e&&e.map(function(t,n){return qt.createElement(t.tag,js({key:n},t.attr),pO(t.child))})}function Er(e){return function(t){return qt.createElement(DW,js({attr:js({},e.attr)},t),pO(e.child))}}function DW(e){var t=function(n){var r=e.attr,i=e.size,s=e.title,o=TW(e,["attr","size","title"]),a=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),qt.createElement("svg",js({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:js(js({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&qt.createElement("title",null,s),e.children)};return Xx!==void 0?qt.createElement(Xx.Consumer,null,function(n){return t(n)}):t(fO)}function IW(e){return Er({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(e)}function AW(e){return Er({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}}]})(e)}function bW(e){return Er({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z"}}]})(e)}function NW(e){return Er({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"}}]})(e)}function OW(e){return Er({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44z"}}]})(e)}function eg(e){return Er({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z"}}]})(e)}function RW(e){return Er({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"}}]})(e)}function PW(e){return Er({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M3,3 L21,21 M3,21 L21,3"}}]})(e)}const MW=({toggle:e,toggleMenu:t})=>{const[n,r]=L.exports.useState(!1),[i,s]=L.exports.useState(null),o=kt(x=>x.login.user),a=vr(),u=Jc(),c=kn(),d=o==null?void 0:o.nickname,p=()=>{confirm("\uC815\uB9D0 \uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&(c(n1()),a("/"))},m=x=>{s(x),window.innerWidth<=768&&v()},v=()=>{s(null),t()},w=()=>o?M("div",{className:"users",children:[k("li",{className:"item user_nickname",children:k(Nn,{to:"/account",onClick:()=>m(null),children:d})}),k("li",{className:"item logOut",children:k("span",{onClick:p,children:k(RW,{})})})]}):k("div",{className:"users sign",children:k("li",{className:"item_account",children:k(Nn,{to:"account/login",className:"account",onClick:()=>m(null),children:"\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785"})})});return L.exports.useEffect(()=>{const x=()=>{window.scrollY>=60?r(!0):r(!1)};return window.addEventListener("scroll",x),()=>{window.removeEventListener("scroll",x)}},[]),u.pathname==="/account/signup"||u.pathname==="/account/login"?null:k(Z5,{style:{borderBottom:n?"1px solid #e3e3e3":""},children:M("div",{className:"contents",children:[k("div",{className:"logo",children:k("h1",{onClick:()=>{a("/"),s(null)},children:"ModArt"})}),M("ul",{className:`navbar${e?" mobile":""}`,children:[M("div",{className:"list",children:[k("li",{className:`item ${i===0?"active":""}`,children:k(Nn,{to:"/",onClick:m,children:"HOME"})}),k("li",{className:`item ${i===1?"active":""}`,children:k(Nn,{to:"/board",onClick:()=>m(1),children:"OOTD"})}),k("li",{className:`item ${i===2?"active":""}`,children:k(Nn,{to:"/photo",onClick:()=>m(2),children:"Photo"})}),k("li",{className:`item ${i===3?"active":""}`,children:k(Nn,{to:"/today",onClick:()=>m(3),children:"TodayStory"})}),k("li",{className:`item ${i===4?"active":""}`,children:k(Nn,{to:"/qna",onClick:()=>m(4),children:"QnA"})})]}),w()]}),k("div",{className:"toggle",onClick:v,children:e?k(PW,{}):k(IW,{})})]})})};var LW=qt.memo(MW);function Jx(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $W(e,t,n){return t&&Jx(e.prototype,t),n&&Jx(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Zx="(prefers-reduced-motion: reduce)",za=1,FW=2,Dl=3,Wl=4,kh=5,sf=6,wp=7,UW={CREATED:za,MOUNTED:FW,IDLE:Dl,MOVING:Wl,SCROLLING:kh,DRAGGING:sf,DESTROYED:wp};function es(e){e.length=0}function co(e,t,n){return Array.prototype.slice.call(e,t,n)}function tt(e){return e.bind.apply(e,[null].concat(co(arguments,1)))}var mO=setTimeout,r1=function(){};function eT(e){return requestAnimationFrame(e)}function tg(e,t){return typeof t===e}function Lc(e){return!Z_(e)&&tg("object",e)}var J_=Array.isArray,gO=tt(tg,"function"),eo=tt(tg,"string"),xh=tt(tg,"undefined");function Z_(e){return e===null}function yO(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Th(e){return J_(e)?e:[e]}function yr(e,t){Th(e).forEach(t)}function eS(e,t){return e.indexOf(t)>-1}function of(e,t){return e.push.apply(e,Th(t)),e}function Li(e,t,n){e&&yr(t,function(r){r&&e.classList[n?"add":"remove"](r)})}function ui(e,t){Li(e,eo(t)?t.split(" "):t,!0)}function Dh(e,t){yr(t,e.appendChild.bind(e))}function tS(e,t){yr(e,function(n){var r=(t||n).parentNode;r&&r.insertBefore(n,t)})}function $c(e,t){return yO(e)&&(e.msMatchesSelector||e.matches).call(e,t)}function vO(e,t){var n=e?co(e.children):[];return t?n.filter(function(r){return $c(r,t)}):n}function Ih(e,t){return t?vO(e,t)[0]:e.firstElementChild}var Fc=Object.keys;function $o(e,t,n){return e&&(n?Fc(e).reverse():Fc(e)).forEach(function(r){r!=="__proto__"&&t(e[r],r)}),e}function Uc(e){return co(arguments,1).forEach(function(t){$o(t,function(n,r){e[r]=t[r]})}),e}function xs(e){return co(arguments,1).forEach(function(t){$o(t,function(n,r){J_(n)?e[r]=n.slice():Lc(n)?e[r]=xs({},Lc(e[r])?e[r]:{},n):e[r]=n})}),e}function tT(e,t){yr(t||Fc(e),function(n){delete e[n]})}function ci(e,t){yr(e,function(n){yr(t,function(r){n&&n.removeAttribute(r)})})}function Ie(e,t,n){Lc(t)?$o(t,function(r,i){Ie(e,i,r)}):yr(e,function(r){Z_(n)||n===""?ci(r,t):r.setAttribute(t,String(n))})}function il(e,t,n){var r=document.createElement(e);return t&&(eo(t)?ui(r,t):Ie(r,t)),n&&Dh(n,r),r}function Nr(e,t,n){if(xh(n))return getComputedStyle(e)[t];Z_(n)||(e.style[t]=""+n)}function Bc(e,t){Nr(e,"display",t)}function wO(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function Pr(e,t){return e.getAttribute(t)}function nT(e,t){return e&&e.classList.contains(t)}function ar(e){return e.getBoundingClientRect()}function ta(e){yr(e,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function _O(e){return Ih(new DOMParser().parseFromString(e,"text/html").body)}function Ii(e,t){e.preventDefault(),t&&(e.stopPropagation(),e.stopImmediatePropagation())}function SO(e,t){return e&&e.querySelector(t)}function nS(e,t){return t?co(e.querySelectorAll(t)):[]}function $i(e,t){Li(e,t,!1)}function i1(e){return e.timeStamp}function vo(e){return eo(e)?e:e?e+"px":""}var Ah="splide",rS="data-"+Ah;function qu(e,t){if(!e)throw new Error("["+Ah+"] "+(t||""))}var to=Math.min,_p=Math.max,Sp=Math.floor,Vc=Math.ceil,Bn=Math.abs;function EO(e,t,n){return Bn(e-t)<n}function af(e,t,n,r){var i=to(t,n),s=_p(t,n);return r?i<e&&e<s:i<=e&&e<=s}function xa(e,t,n){var r=to(t,n),i=_p(t,n);return to(_p(r,e),i)}function s1(e){return+(e>0)-+(e<0)}function o1(e,t){return yr(t,function(n){e=e.replace("%s",""+n)}),e}function iS(e){return e<10?"0"+e:""+e}var rT={};function BW(e){return""+e+iS(rT[e]=(rT[e]||0)+1)}function CO(){var e=[];function t(o,a,u,c){i(o,a,function(d,p,m){var v="addEventListener"in d,w=v?d.removeEventListener.bind(d,p,u,c):d.removeListener.bind(d,u);v?d.addEventListener(p,u,c):d.addListener(u),e.push([d,p,m,u,w])})}function n(o,a,u){i(o,a,function(c,d,p){e=e.filter(function(m){return m[0]===c&&m[1]===d&&m[2]===p&&(!u||m[3]===u)?(m[4](),!1):!0})})}function r(o,a,u){var c,d=!0;return typeof CustomEvent=="function"?c=new CustomEvent(a,{bubbles:d,detail:u}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(a,d,!1,u)),o.dispatchEvent(c),c}function i(o,a,u){yr(o,function(c){c&&yr(a,function(d){d.split(" ").forEach(function(p){var m=p.split(".");u(c,m[0],m[1])})})})}function s(){e.forEach(function(o){o[4]()}),es(e)}return{bind:t,unbind:n,dispatch:r,destroy:s}}var ho="mounted",a1="ready",ts="move",Hl="moved",sS="click",kO="active",xO="inactive",TO="visible",DO="hidden",Lt="refresh",Pn="updated",Il="resize",ng="resized",IO="drag",AO="dragging",bO="dragged",rg="scroll",ha="scrolled",VW="overflow",oS="destroy",NO="arrows:mounted",OO="arrows:updated",RO="pagination:mounted",PO="pagination:updated",aS="navigation:mounted",lS="autoplay:play",MO="autoplay:playing",uS="autoplay:pause",cS="lazyload:loaded",LO="sk",$O="sh",Ep="ei";function Et(e){var t=e?e.event.bus:document.createDocumentFragment(),n=CO();function r(s,o){n.bind(t,Th(s).join(" "),function(a){o.apply(o,J_(a.detail)?a.detail:[])})}function i(s){n.dispatch(t,s,co(arguments,1))}return e&&e.event.on(oS,n.destroy),Uc(n,{bus:t,on:r,off:tt(n.unbind,t),emit:i})}function ig(e,t,n,r){var i=Date.now,s,o=0,a,u=!0,c=0;function d(){if(!u){if(o=e?to((i()-s)/e,1):1,n&&n(o),o>=1&&(t(),s=i(),r&&++c>=r))return m();a=eT(d)}}function p(S){S||w(),s=i()-(S?o*e:0),u=!1,a=eT(d)}function m(){u=!0}function v(){s=i(),o=0,n&&n(o)}function w(){a&&cancelAnimationFrame(a),o=0,a=0,u=!0}function _(S){e=S}function x(){return u}return{start:p,rewind:v,pause:m,cancel:w,set:_,isPaused:x}}function zW(e){var t=e;function n(i){t=i}function r(i){return eS(Th(i),t)}return{set:n,is:r}}function jW(e,t){var n=ig(t||0,e,null,1);return function(){n.isPaused()&&n.start()}}function YW(e,t,n){var r=e.state,i=n.breakpoints||{},s=n.reducedMotion||{},o=CO(),a=[];function u(){var w=n.mediaQuery==="min";Fc(i).sort(function(_,x){return w?+_-+x:+x-+_}).forEach(function(_){d(i[_],"("+(w?"min":"max")+"-width:"+_+"px)")}),d(s,Zx),p()}function c(w){w&&o.destroy()}function d(w,_){var x=matchMedia(_);o.bind(x,"change",p),a.push([w,x])}function p(){var w=r.is(wp),_=n.direction,x=a.reduce(function(S,y){return xs(S,y[1].matches?y[0]:{})},{});tT(n),v(x),n.destroy?e.destroy(n.destroy==="completely"):w?(c(!0),e.mount()):_!==n.direction&&e.refresh()}function m(w){matchMedia(Zx).matches&&(w?xs(n,s):tT(n,Fc(s)))}function v(w,_,x){xs(n,w),_&&xs(Object.getPrototypeOf(n),w),(x||!r.is(za))&&e.emit(Pn,n)}return{setup:u,destroy:c,reduce:m,set:v}}var sg="Arrow",og=sg+"Left",ag=sg+"Right",FO=sg+"Up",UO=sg+"Down",iT="rtl",lg="ttb",ny={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[FO,ag],ArrowRight:[UO,og]};function WW(e,t,n){function r(s,o,a){a=a||n.direction;var u=a===iT&&!o?1:a===lg?0:-1;return ny[s]&&ny[s][u]||s.replace(/width|left|right/i,function(c,d){var p=ny[c.toLowerCase()][u]||c;return d>0?p.charAt(0).toUpperCase()+p.slice(1):p})}function i(s){return s*(n.direction===iT?1:-1)}return{resolve:r,orient:i}}var zi="role",sl="tabindex",HW="disabled",zr="aria-",bh=zr+"controls",BO=zr+"current",sT=zr+"selected",dr=zr+"label",hS=zr+"labelledby",VO=zr+"hidden",dS=zr+"orientation",zc=zr+"roledescription",oT=zr+"live",aT=zr+"busy",lT=zr+"atomic",fS=[zi,sl,HW,bh,BO,dr,hS,VO,dS,zc],fi=Ah+"__",fo="is-",ry=Ah,uT=fi+"track",GW=fi+"list",ug=fi+"slide",zO=ug+"--clone",qW=ug+"__container",pS=fi+"arrows",cg=fi+"arrow",jO=cg+"--prev",YO=cg+"--next",hg=fi+"pagination",WO=hg+"__page",KW=fi+"progress",QW=KW+"__bar",XW=fi+"toggle",JW=fi+"spinner",ZW=fi+"sr",eH=fo+"initialized",na=fo+"active",HO=fo+"prev",GO=fo+"next",l1=fo+"visible",u1=fo+"loading",qO=fo+"focus-in",KO=fo+"overflow",tH=[na,l1,HO,GO,u1,qO,KO],nH={slide:ug,clone:zO,arrows:pS,arrow:cg,prev:jO,next:YO,pagination:hg,page:WO,spinner:JW};function rH(e,t){if(gO(e.closest))return e.closest(t);for(var n=e;n&&n.nodeType===1&&!$c(n,t);)n=n.parentElement;return n}var iH=5,cT=200,QO="touchstart mousedown",iy="touchmove mousemove",sy="touchend touchcancel mouseup click";function sH(e,t,n){var r=Et(e),i=r.on,s=r.bind,o=e.root,a=n.i18n,u={},c=[],d=[],p=[],m,v,w;function _(){C(),T(),y()}function x(){i(Lt,S),i(Lt,_),i(Pn,y),s(document,QO+" keydown",function(b){w=b.type==="keydown"},{capture:!0}),s(o,"focusin",function(){Li(o,qO,!!w)})}function S(b){var N=fS.concat("style");es(c),$i(o,d),$i(m,p),ci([m,v],N),ci(o,b?N:["style",zc])}function y(){$i(o,d),$i(m,p),d=O(ry),p=O(uT),ui(o,d),ui(m,p),Ie(o,dr,n.label),Ie(o,hS,n.labelledby)}function C(){m=A("."+uT),v=Ih(m,"."+GW),qu(m&&v,"A track/list element is missing."),of(c,vO(v,"."+ug+":not(."+zO+")")),$o({arrows:pS,pagination:hg,prev:jO,next:YO,bar:QW,toggle:XW},function(b,N){u[N]=A("."+b)}),Uc(u,{root:o,track:m,list:v,slides:c})}function T(){var b=o.id||BW(Ah),N=n.role;o.id=b,m.id=m.id||b+"-track",v.id=v.id||b+"-list",!Pr(o,zi)&&o.tagName!=="SECTION"&&N&&Ie(o,zi,N),Ie(o,zc,a.carousel),Ie(v,zi,"presentation")}function A(b){var N=SO(o,b);return N&&rH(N,"."+ry)===o?N:void 0}function O(b){return[b+"--"+n.type,b+"--"+n.direction,n.drag&&b+"--draggable",n.isNavigation&&b+"--nav",b===ry&&na]}return Uc(u,{setup:_,mount:x,destroy:S})}var Al="slide",Gl="loop",Nh="fade";function oH(e,t,n,r){var i=Et(e),s=i.on,o=i.emit,a=i.bind,u=e.Components,c=e.root,d=e.options,p=d.isNavigation,m=d.updateOnMove,v=d.i18n,w=d.pagination,_=d.slideFocus,x=u.Direction.resolve,S=Pr(r,"style"),y=Pr(r,dr),C=n>-1,T=Ih(r,"."+qW),A;function O(){C||(r.id=c.id+"-slide"+iS(t+1),Ie(r,zi,w?"tabpanel":"group"),Ie(r,zc,v.slide),Ie(r,dr,y||o1(v.slideLabel,[t+1,e.length]))),b()}function b(){a(r,"click",tt(o,sS,$)),a(r,"keydown",tt(o,LO,$)),s([Hl,$O,ha],j),s(aS,Z),m&&s(ts,F)}function N(){A=!0,i.destroy(),$i(r,tH),ci(r,fS),Ie(r,"style",S),Ie(r,dr,y||"")}function Z(){var z=e.splides.map(function(R){var ee=R.splide.Components.Slides.getAt(t);return ee?ee.slide.id:""}).join(" ");Ie(r,dr,o1(v.slideX,(C?n:t)+1)),Ie(r,bh,z),Ie(r,zi,_?"button":""),_&&ci(r,zc)}function F(){A||j()}function j(){if(!A){var z=e.index;J(),X(),Li(r,HO,t===z-1),Li(r,GO,t===z+1)}}function J(){var z=oe();z!==nT(r,na)&&(Li(r,na,z),Ie(r,BO,p&&z||""),o(z?kO:xO,$))}function X(){var z=Te(),R=!z&&(!oe()||C);if(e.state.is([Wl,kh])||Ie(r,VO,R||""),Ie(nS(r,d.focusableNodes||""),sl,R?-1:""),_&&Ie(r,sl,R?-1:0),z!==nT(r,l1)&&(Li(r,l1,z),o(z?TO:DO,$)),!z&&document.activeElement===r){var ee=u.Slides.getAt(e.index);ee&&wO(ee.slide)}}function ue(z,R,ee){Nr(ee&&T||r,z,R)}function oe(){var z=e.index;return z===t||d.cloneStatus&&z===n}function Te(){if(e.is(Nh))return oe();var z=ar(u.Elements.track),R=ar(r),ee=x("left",!0),U=x("right",!0);return Sp(z[ee])<=Vc(R[ee])&&Sp(R[U])<=Vc(z[U])}function ge(z,R){var ee=Bn(z-t);return!C&&(d.rewind||e.is(Gl))&&(ee=to(ee,e.length-ee)),ee<=R}var $={index:t,slideIndex:n,slide:r,container:T,isClone:C,mount:O,destroy:N,update:j,style:ue,isWithin:ge};return $}function aH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=r.bind,a=t.Elements,u=a.slides,c=a.list,d=[];function p(){m(),i(Lt,v),i(Lt,m)}function m(){u.forEach(function(j,J){_(j,J,-1)})}function v(){A(function(j){j.destroy()}),es(d)}function w(){A(function(j){j.update()})}function _(j,J,X){var ue=oH(e,J,X,j);ue.mount(),d.push(ue),d.sort(function(oe,Te){return oe.index-Te.index})}function x(j){return j?O(function(J){return!J.isClone}):d}function S(j){var J=t.Controller,X=J.toIndex(j),ue=J.hasFocus()?1:n.perPage;return O(function(oe){return af(oe.index,X,X+ue-1)})}function y(j){return O(j)[0]}function C(j,J){yr(j,function(X){if(eo(X)&&(X=_O(X)),yO(X)){var ue=u[J];ue?tS(X,ue):Dh(c,X),ui(X,n.classes.slide),N(X,tt(s,Il))}}),s(Lt)}function T(j){ta(O(j).map(function(J){return J.slide})),s(Lt)}function A(j,J){x(J).forEach(j)}function O(j){return d.filter(gO(j)?j:function(J){return eo(j)?$c(J.slide,j):eS(Th(j),J.index)})}function b(j,J,X){A(function(ue){ue.style(j,J,X)})}function N(j,J){var X=nS(j,"img"),ue=X.length;ue?X.forEach(function(oe){o(oe,"load error",function(){--ue||J()})}):J()}function Z(j){return j?u.length:d.length}function F(){return d.length>n.perPage}return{mount:p,destroy:v,update:w,register:_,get:x,getIn:S,getAt:y,add:C,remove:T,forEach:A,filter:O,style:b,getLength:Z,isEnough:F}}function lH(e,t,n){var r=Et(e),i=r.on,s=r.bind,o=r.emit,a=t.Slides,u=t.Direction.resolve,c=t.Elements,d=c.root,p=c.track,m=c.list,v=a.getAt,w=a.style,_,x,S;function y(){C(),s(window,"resize load",jW(tt(o,Il))),i([Pn,Lt],C),i(Il,T)}function C(){_=n.direction===lg,Nr(d,"maxWidth",vo(n.width)),Nr(p,u("paddingLeft"),A(!1)),Nr(p,u("paddingRight"),A(!0)),T(!0)}function T($){var z=ar(d);($||x.width!==z.width||x.height!==z.height)&&(Nr(p,"height",O()),w(u("marginRight"),vo(n.gap)),w("width",N()),w("height",Z(),!0),x=z,o(ng),S!==(S=ge())&&(Li(d,KO,S),o(VW,S)))}function A($){var z=n.padding,R=u($?"right":"left");return z&&vo(z[R]||(Lc(z)?0:z))||"0px"}function O(){var $="";return _&&($=b(),qu($,"height or heightRatio is missing."),$="calc("+$+" - "+A(!1)+" - "+A(!0)+")"),$}function b(){return vo(n.height||ar(m).width*n.heightRatio)}function N(){return n.autoWidth?null:vo(n.fixedWidth)||(_?"":F())}function Z(){return vo(n.fixedHeight)||(_?n.autoHeight?null:F():b())}function F(){var $=vo(n.gap);return"calc((100%"+($&&" + "+$)+")/"+(n.perPage||1)+($&&" - "+$)+")"}function j(){return ar(m)[u("width")]}function J($,z){var R=v($||0);return R?ar(R.slide)[u("width")]+(z?0:oe()):0}function X($,z){var R=v($);if(R){var ee=ar(R.slide)[u("right")],U=ar(m)[u("left")];return Bn(ee-U)+(z?0:oe())}return 0}function ue($){return X(e.length-1)-X(0)+J(0,$)}function oe(){var $=v(0);return $&&parseFloat(Nr($.slide,u("marginRight")))||0}function Te($){return parseFloat(Nr(p,u("padding"+($?"Right":"Left"))))||0}function ge(){return e.is(Nh)||ue(!0)>j()}return{mount:y,resize:T,listSize:j,slideSize:J,sliderSize:ue,totalSize:X,getPadding:Te,isOverflow:ge}}var uH=2;function cH(e,t,n){var r=Et(e),i=r.on,s=t.Elements,o=t.Slides,a=t.Direction.resolve,u=[],c;function d(){i(Lt,p),i([Pn,Il],v),(c=x())&&(w(c),t.Layout.resize(!0))}function p(){m(),d()}function m(){ta(u),es(u),r.destroy()}function v(){var S=x();c!==S&&(c<S||!S)&&r.emit(Lt)}function w(S){var y=o.get().slice(),C=y.length;if(C){for(;y.length<S;)of(y,y);of(y.slice(-S),y.slice(0,S)).forEach(function(T,A){var O=A<S,b=_(T.slide,A);O?tS(b,y[0].slide):Dh(s.list,b),of(u,b),o.register(b,A-S+(O?0:C),T.index)})}}function _(S,y){var C=S.cloneNode(!0);return ui(C,n.classes.clone),C.id=e.root.id+"-clone"+iS(y+1),C}function x(){var S=n.clones;if(!e.is(Gl))S=0;else if(xh(S)){var y=n[a("fixedWidth")]&&t.Layout.slideSize(0),C=y&&Vc(ar(s.track)[a("width")]/y);S=C||n[a("autoWidth")]&&e.length||n.perPage*uH}return S}return{mount:d,destroy:m}}function hH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=e.state.set,a=t.Layout,u=a.slideSize,c=a.getPadding,d=a.totalSize,p=a.listSize,m=a.sliderSize,v=t.Direction,w=v.resolve,_=v.orient,x=t.Elements,S=x.list,y=x.track,C;function T(){C=t.Transition,i([ho,ng,Pn,Lt],A)}function A(){t.Controller.isBusy()||(t.Scroll.cancel(),b(e.index),t.Slides.update())}function O(R,ee,U,B){R!==ee&&$(R>U)&&(j(),N(F(ue(),R>U),!0)),o(Wl),s(ts,ee,U,R),C.start(ee,function(){o(Dl),s(Hl,ee,U,R),B&&B()})}function b(R){N(X(R,!0))}function N(R,ee){if(!e.is(Nh)){var U=ee?R:Z(R);Nr(S,"transform","translate"+w("X")+"("+U+"px)"),R!==U&&s($O)}}function Z(R){if(e.is(Gl)){var ee=J(R),U=ee>t.Controller.getEnd(),B=ee<0;(B||U)&&(R=F(R,U))}return R}function F(R,ee){var U=R-ge(ee),B=m();return R-=_(B*(Vc(Bn(U)/B)||1))*(ee?1:-1),R}function j(){N(ue(),!0),C.cancel()}function J(R){for(var ee=t.Slides.get(),U=0,B=1/0,Y=0;Y<ee.length;Y++){var V=ee[Y].index,D=Bn(X(V,!0)-R);if(D<=B)B=D,U=V;else break}return U}function X(R,ee){var U=_(d(R-1)-Te(R));return ee?oe(U):U}function ue(){var R=w("left");return ar(S)[R]-ar(y)[R]+_(c(!1))}function oe(R){return n.trimSpace&&e.is(Al)&&(R=xa(R,0,_(m(!0)-p()))),R}function Te(R){var ee=n.focus;return ee==="center"?(p()-u(R,!0))/2:+ee*u(R)||0}function ge(R){return X(R?t.Controller.getEnd():0,!!n.trimSpace)}function $(R){var ee=_(F(ue(),R));return R?ee>=0:ee<=S[w("scrollWidth")]-ar(y)[w("width")]}function z(R,ee){ee=xh(ee)?ue():ee;var U=R!==!0&&_(ee)<_(ge(!1)),B=R!==!1&&_(ee)>_(ge(!0));return U||B}return{mount:T,move:O,jump:b,translate:N,shift:F,cancel:j,toIndex:J,toPosition:X,getPosition:ue,getLimit:ge,exceededLimit:z,reposition:A}}function dH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=t.Move,a=o.getPosition,u=o.getLimit,c=o.toPosition,d=t.Slides,p=d.isEnough,m=d.getLength,v=n.omitEnd,w=e.is(Gl),_=e.is(Al),x=tt(ue,!1),S=tt(ue,!0),y=n.start||0,C,T=y,A,O,b;function N(){Z(),i([Pn,Lt,Ep],Z),i(ng,F)}function Z(){A=m(!0),O=n.perMove,b=n.perPage,C=$();var D=xa(y,0,v?C:A-1);D!==y&&(y=D,o.reposition())}function F(){C!==$()&&s(Ep)}function j(D,le,W){if(!V()){var we=X(D),me=ge(we);me>-1&&(le||me!==y)&&(U(me),o.move(we,me,T,W))}}function J(D,le,W,we){t.Scroll.scroll(D,le,W,function(){var me=ge(o.toIndex(a()));U(v?to(me,C):me),we&&we()})}function X(D){var le=y;if(eo(D)){var W=D.match(/([+\-<>])(\d+)?/)||[],we=W[1],me=W[2];we==="+"||we==="-"?le=oe(y+ +(""+we+(+me||1)),y):we===">"?le=me?z(+me):x(!0):we==="<"&&(le=S(!0))}else le=w?D:xa(D,0,C);return le}function ue(D,le){var W=O||(Y()?1:b),we=oe(y+W*(D?-1:1),y,!(O||Y()));return we===-1&&_&&!EO(a(),u(!D),1)?D?0:C:le?we:ge(we)}function oe(D,le,W){if(p()||Y()){var we=Te(D);we!==D&&(le=D,D=we,W=!1),D<0||D>C?!O&&(af(0,D,le,!0)||af(C,le,D,!0))?D=z(R(D)):w?D=W?D<0?-(A%b||b):A:D:n.rewind?D=D<0?C:0:D=-1:W&&D!==le&&(D=z(R(le)+(D<le?-1:1)))}else D=-1;return D}function Te(D){if(_&&n.trimSpace==="move"&&D!==y)for(var le=a();le===c(D,!0)&&af(D,0,e.length-1,!n.rewind);)D<y?--D:++D;return D}function ge(D){return w?(D+A)%A||0:D}function $(){for(var D=A-(Y()||w&&O?1:b);v&&D-- >0;)if(c(A-1,!0)!==c(D,!0)){D++;break}return xa(D,0,A-1)}function z(D){return xa(Y()?D:b*D,0,C)}function R(D){return Y()?to(D,C):Sp((D>=C?A-1:D)/b)}function ee(D){var le=o.toIndex(D);return _?xa(le,0,C):le}function U(D){D!==y&&(T=y,y=D)}function B(D){return D?T:y}function Y(){return!xh(n.focus)||n.isNavigation}function V(){return e.state.is([Wl,kh])&&!!n.waitForTransition}return{mount:N,go:j,scroll:J,getNext:x,getPrev:S,getAdjacent:ue,getEnd:$,setIndex:U,getIndex:B,toIndex:z,toPage:R,toDest:ee,hasFocus:Y,isBusy:V}}var fH="http://www.w3.org/2000/svg",pH="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",Rd=40;function mH(e,t,n){var r=Et(e),i=r.on,s=r.bind,o=r.emit,a=n.classes,u=n.i18n,c=t.Elements,d=t.Controller,p=c.arrows,m=c.track,v=p,w=c.prev,_=c.next,x,S,y={};function C(){A(),i(Pn,T)}function T(){O(),C()}function A(){var J=n.arrows;J&&!(w&&_)&&Z(),w&&_&&(Uc(y,{prev:w,next:_}),Bc(v,J?"":"none"),ui(v,S=pS+"--"+n.direction),J&&(b(),j(),Ie([w,_],bh,m.id),o(NO,w,_)))}function O(){r.destroy(),$i(v,S),x?(ta(p?[w,_]:v),w=_=null):ci([w,_],fS)}function b(){i([ho,Hl,Lt,ha,Ep],j),s(_,"click",tt(N,">")),s(w,"click",tt(N,"<"))}function N(J){d.go(J,!0)}function Z(){v=p||il("div",a.arrows),w=F(!0),_=F(!1),x=!0,Dh(v,[w,_]),!p&&tS(v,m)}function F(J){var X='<button class="'+a.arrow+" "+(J?a.prev:a.next)+'" type="button"><svg xmlns="'+fH+'" viewBox="0 0 '+Rd+" "+Rd+'" width="'+Rd+'" height="'+Rd+'" focusable="false"><path d="'+(n.arrowPath||pH)+'" />';return _O(X)}function j(){if(w&&_){var J=e.index,X=d.getPrev(),ue=d.getNext(),oe=X>-1&&J<X?u.last:u.prev,Te=ue>-1&&J>ue?u.first:u.next;w.disabled=X<0,_.disabled=ue<0,Ie(w,dr,oe),Ie(_,dr,Te),o(OO,w,_,X,ue)}}return{arrows:y,mount:C,destroy:O,update:j}}var gH=rS+"-interval";function yH(e,t,n){var r=Et(e),i=r.on,s=r.bind,o=r.emit,a=ig(n.interval,e.go.bind(e,">"),b),u=a.isPaused,c=t.Elements,d=t.Elements,p=d.root,m=d.toggle,v=n.autoplay,w,_,x=v==="pause";function S(){v&&(y(),m&&Ie(m,bh,c.track.id),x||C(),O())}function y(){n.pauseOnHover&&s(p,"mouseenter mouseleave",function(Z){w=Z.type==="mouseenter",A()}),n.pauseOnFocus&&s(p,"focusin focusout",function(Z){_=Z.type==="focusin",A()}),m&&s(m,"click",function(){x?C():T(!0)}),i([ts,rg,Lt],a.rewind),i(ts,N)}function C(){u()&&t.Slides.isEnough()&&(a.start(!n.resetProgress),_=w=x=!1,O(),o(lS))}function T(Z){Z===void 0&&(Z=!0),x=!!Z,O(),u()||(a.pause(),o(uS))}function A(){x||(w||_?T(!1):C())}function O(){m&&(Li(m,na,!x),Ie(m,dr,n.i18n[x?"play":"pause"]))}function b(Z){var F=c.bar;F&&Nr(F,"width",Z*100+"%"),o(MO,Z)}function N(Z){var F=t.Slides.getAt(Z);a.set(F&&+Pr(F.slide,gH)||n.interval)}return{mount:S,destroy:a.cancel,play:C,pause:T,isPaused:u}}function vH(e,t,n){var r=Et(e),i=r.on;function s(){n.cover&&(i(cS,tt(a,!0)),i([ho,Pn,Lt],tt(o,!0)))}function o(u){t.Slides.forEach(function(c){var d=Ih(c.container||c.slide,"img");d&&d.src&&a(u,d,c)})}function a(u,c,d){d.style("background",u?'center/cover no-repeat url("'+c.src+'")':"",!0),Bc(c,u?"none":"")}return{mount:s,destroy:tt(o,!1)}}var wH=10,_H=600,SH=.6,EH=1.5,CH=800;function kH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=e.state.set,a=t.Move,u=a.getPosition,c=a.getLimit,d=a.exceededLimit,p=a.translate,m=e.is(Al),v,w,_=1;function x(){i(ts,T),i([Pn,Lt],A)}function S(b,N,Z,F,j){var J=u();if(T(),Z&&(!m||!d())){var X=t.Layout.sliderSize(),ue=s1(b)*X*Sp(Bn(b)/X)||0;b=a.toPosition(t.Controller.toDest(b%X))+ue}var oe=EO(J,b,1);_=1,N=oe?0:N||_p(Bn(b-J)/EH,CH),w=F,v=ig(N,y,tt(C,J,b,j),1),o(kh),s(rg),v.start()}function y(){o(Dl),w&&w(),s(ha)}function C(b,N,Z,F){var j=u(),J=b+(N-b)*O(F),X=(J-j)*_;p(j+X),m&&!Z&&d()&&(_*=SH,Bn(X)<wH&&S(c(d(!0)),_H,!1,w,!0))}function T(){v&&v.cancel()}function A(){v&&!v.isPaused()&&(T(),y())}function O(b){var N=n.easingFunc;return N?N(b):1-Math.pow(1-b,4)}return{mount:x,destroy:T,scroll:S,cancel:A}}var Ta={passive:!1,capture:!0};function xH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=r.bind,a=r.unbind,u=e.state,c=t.Move,d=t.Scroll,p=t.Controller,m=t.Elements.track,v=t.Media.reduce,w=t.Direction,_=w.resolve,x=w.orient,S=c.getPosition,y=c.exceededLimit,C,T,A,O,b,N=!1,Z,F,j;function J(){o(m,iy,r1,Ta),o(m,sy,r1,Ta),o(m,QO,ue,Ta),o(m,"click",ge,{capture:!0}),o(m,"dragstart",Ii),i([ho,Pn],X)}function X(){var ne=n.drag;_e(!ne),O=ne==="free"}function ue(ne){if(Z=!1,!F){var De=me(ne);we(ne.target)&&(De||!ne.button)&&(p.isBusy()?Ii(ne,!0):(j=De?m:window,b=u.is([Wl,kh]),A=null,o(j,iy,oe,Ta),o(j,sy,Te,Ta),c.cancel(),d.cancel(),$(ne)))}}function oe(ne){if(u.is(sf)||(u.set(sf),s(IO)),ne.cancelable)if(b){c.translate(C+W(Y(ne)));var De=V(ne)>cT,ke=N!==(N=y());(De||ke)&&$(ne),Z=!0,s(AO),Ii(ne)}else ee(ne)&&(b=R(ne),Ii(ne))}function Te(ne){u.is(sf)&&(u.set(Dl),s(bO)),b&&(z(ne),Ii(ne)),a(j,iy,oe),a(j,sy,Te),b=!1}function ge(ne){!F&&Z&&Ii(ne,!0)}function $(ne){A=T,T=ne,C=S()}function z(ne){var De=U(ne),ke=B(De),ct=n.rewind&&n.rewindByDrag;v(!1),O?p.scroll(ke,0,n.snap):e.is(Nh)?p.go(x(s1(De))<0?ct?"<":"-":ct?">":"+"):e.is(Al)&&N&&ct?p.go(y(!0)?">":"<"):p.go(p.toDest(ke),!0),v(!0)}function R(ne){var De=n.dragMinThreshold,ke=Lc(De),ct=ke&&De.mouse||0,Le=(ke?De.touch:+De)||10;return Bn(Y(ne))>(me(ne)?Le:ct)}function ee(ne){return Bn(Y(ne))>Bn(Y(ne,!0))}function U(ne){if(e.is(Gl)||!N){var De=V(ne);if(De&&De<cT)return Y(ne)/De}return 0}function B(ne){return S()+s1(ne)*to(Bn(ne)*(n.flickPower||600),O?1/0:t.Layout.listSize()*(n.flickMaxPages||1))}function Y(ne,De){return le(ne,De)-le(D(ne),De)}function V(ne){return i1(ne)-i1(D(ne))}function D(ne){return T===ne&&A||T}function le(ne,De){return(me(ne)?ne.changedTouches[0]:ne)["page"+_(De?"Y":"X")]}function W(ne){return ne/(N&&e.is(Al)?iH:1)}function we(ne){var De=n.noDrag;return!$c(ne,"."+WO+", ."+cg)&&(!De||!$c(ne,De))}function me(ne){return typeof TouchEvent!="undefined"&&ne instanceof TouchEvent}function Be(){return b}function _e(ne){F=ne}return{mount:J,disable:_e,isDragging:Be}}var TH={Spacebar:" ",Right:ag,Left:og,Up:FO,Down:UO};function mS(e){return e=eo(e)?e:e.key,TH[e]||e}var hT="keydown";function DH(e,t,n){var r=Et(e),i=r.on,s=r.bind,o=r.unbind,a=e.root,u=t.Direction.resolve,c,d;function p(){m(),i(Pn,v),i(Pn,m),i(ts,_)}function m(){var S=n.keyboard;S&&(c=S==="global"?window:a,s(c,hT,x))}function v(){o(c,hT)}function w(S){d=S}function _(){var S=d;d=!0,mO(function(){d=S})}function x(S){if(!d){var y=mS(S);y===u(og)?e.go("<"):y===u(ag)&&e.go(">")}}return{mount:p,destroy:v,disable:w}}var Ku=rS+"-lazy",lf=Ku+"-srcset",IH="["+Ku+"], ["+lf+"]";function AH(e,t,n){var r=Et(e),i=r.on,s=r.off,o=r.bind,a=r.emit,u=n.lazyLoad==="sequential",c=[Hl,ha],d=[];function p(){n.lazyLoad&&(m(),i(Lt,m))}function m(){es(d),v(),u?S():(s(c),i(c,w),w())}function v(){t.Slides.forEach(function(y){nS(y.slide,IH).forEach(function(C){var T=Pr(C,Ku),A=Pr(C,lf);if(T!==C.src||A!==C.srcset){var O=n.classes.spinner,b=C.parentElement,N=Ih(b,"."+O)||il("span",O,b);d.push([C,y,N]),C.src||Bc(C,"none")}})})}function w(){d=d.filter(function(y){var C=n.perPage*((n.preloadPages||1)+1)-1;return y[1].isWithin(e.index,C)?_(y):!0}),d.length||s(c)}function _(y){var C=y[0];ui(y[1].slide,u1),o(C,"load error",tt(x,y)),Ie(C,"src",Pr(C,Ku)),Ie(C,"srcset",Pr(C,lf)),ci(C,Ku),ci(C,lf)}function x(y,C){var T=y[0],A=y[1];$i(A.slide,u1),C.type!=="error"&&(ta(y[2]),Bc(T,""),a(cS,T,A),a(Il)),u&&S()}function S(){d.length&&_(d.shift())}return{mount:p,destroy:tt(es,d),check:w}}function bH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=r.bind,a=t.Slides,u=t.Elements,c=t.Controller,d=c.hasFocus,p=c.getIndex,m=c.go,v=t.Direction.resolve,w=u.pagination,_=[],x,S;function y(){C(),i([Pn,Lt,Ep],y);var F=n.pagination;w&&Bc(w,F?"":"none"),F&&(i([ts,rg,ha],Z),T(),Z(),s(RO,{list:x,items:_},N(e.index)))}function C(){x&&(ta(w?co(x.children):x),$i(x,S),es(_),x=null),r.destroy()}function T(){var F=e.length,j=n.classes,J=n.i18n,X=n.perPage,ue=d()?c.getEnd()+1:Vc(F/X);x=w||il("ul",j.pagination,u.track.parentElement),ui(x,S=hg+"--"+b()),Ie(x,zi,"tablist"),Ie(x,dr,J.select),Ie(x,dS,b()===lg?"vertical":"");for(var oe=0;oe<ue;oe++){var Te=il("li",null,x),ge=il("button",{class:j.page,type:"button"},Te),$=a.getIn(oe).map(function(R){return R.slide.id}),z=!d()&&X>1?J.pageX:J.slideX;o(ge,"click",tt(A,oe)),n.paginationKeyboard&&o(ge,"keydown",tt(O,oe)),Ie(Te,zi,"presentation"),Ie(ge,zi,"tab"),Ie(ge,bh,$.join(" ")),Ie(ge,dr,o1(z,oe+1)),Ie(ge,sl,-1),_.push({li:Te,button:ge,page:oe})}}function A(F){m(">"+F,!0)}function O(F,j){var J=_.length,X=mS(j),ue=b(),oe=-1;X===v(ag,!1,ue)?oe=++F%J:X===v(og,!1,ue)?oe=(--F+J)%J:X==="Home"?oe=0:X==="End"&&(oe=J-1);var Te=_[oe];Te&&(wO(Te.button),m(">"+oe),Ii(j,!0))}function b(){return n.paginationDirection||n.direction}function N(F){return _[c.toPage(F)]}function Z(){var F=N(p(!0)),j=N(p());if(F){var J=F.button;$i(J,na),ci(J,sT),Ie(J,sl,-1)}if(j){var X=j.button;ui(X,na),Ie(X,sT,!0),Ie(X,sl,"")}s(PO,{list:x,items:_},F,j)}return{items:_,mount:y,destroy:C,getAt:N,update:Z}}var NH=[" ","Enter"];function OH(e,t,n){var r=n.isNavigation,i=n.slideFocus,s=[];function o(){e.splides.forEach(function(w){w.isParent||(c(e,w.splide),c(w.splide,e))}),r&&d()}function a(){s.forEach(function(w){w.destroy()}),es(s)}function u(){a(),o()}function c(w,_){var x=Et(w);x.on(ts,function(S,y,C){_.go(_.is(Gl)?C:S)}),s.push(x)}function d(){var w=Et(e),_=w.on;_(sS,m),_(LO,v),_([ho,Pn],p),s.push(w),w.emit(aS,e.splides)}function p(){Ie(t.Elements.list,dS,n.direction===lg?"vertical":"")}function m(w){e.go(w.index)}function v(w,_){eS(NH,mS(_))&&(m(w),Ii(_))}return{setup:tt(t.Media.set,{slideFocus:xh(i)?r:i},!0),mount:o,destroy:a,remount:u}}function RH(e,t,n){var r=Et(e),i=r.bind,s=0;function o(){n.wheel&&i(t.Elements.track,"wheel",a,Ta)}function a(c){if(c.cancelable){var d=c.deltaY,p=d<0,m=i1(c),v=n.wheelMinThreshold||0,w=n.wheelSleep||0;Bn(d)>v&&m-s>w&&(e.go(p?"<":">"),s=m),u(p)&&Ii(c)}}function u(c){return!n.releaseWheel||e.state.is(Wl)||t.Controller.getAdjacent(c)!==-1}return{mount:o}}var PH=90;function MH(e,t,n){var r=Et(e),i=r.on,s=t.Elements.track,o=n.live&&!n.isNavigation,a=il("span",ZW),u=ig(PH,tt(d,!1));function c(){o&&(m(!t.Autoplay.isPaused()),Ie(s,lT,!0),a.textContent="\u2026",i(lS,tt(m,!0)),i(uS,tt(m,!1)),i([Hl,ha],tt(d,!0)))}function d(v){Ie(s,aT,v),v?(Dh(s,a),u.start()):(ta(a),u.cancel())}function p(){ci(s,[oT,lT,aT]),ta(a)}function m(v){o&&Ie(s,oT,v?"off":"polite")}return{mount:c,disable:m,destroy:p}}var LH=Object.freeze({__proto__:null,Media:YW,Direction:WW,Elements:sH,Slides:aH,Layout:lH,Clones:cH,Move:hH,Controller:dH,Arrows:mH,Autoplay:yH,Cover:vH,Scroll:kH,Drag:xH,Keyboard:DH,LazyLoad:AH,Pagination:bH,Sync:OH,Wheel:RH,Live:MH}),$H={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},FH={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:nH,i18n:$H,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function UH(e,t,n){var r=t.Slides;function i(){Et(e).on([ho,Lt],s)}function s(){r.forEach(function(a){a.style("transform","translateX(-"+100*a.index+"%)")})}function o(a,u){r.style("transition","opacity "+n.speed+"ms "+n.easing),mO(u)}return{mount:i,start:o,cancel:r1}}function BH(e,t,n){var r=t.Move,i=t.Controller,s=t.Scroll,o=t.Elements.list,a=tt(Nr,o,"transition"),u;function c(){Et(e).bind(o,"transitionend",function(v){v.target===o&&u&&(p(),u())})}function d(v,w){var _=r.toPosition(v,!0),x=r.getPosition(),S=m(v);Bn(_-x)>=1&&S>=1?n.useScroll?s.scroll(_,S,!1,w):(a("transform "+S+"ms "+n.easing),r.translate(_,!0),u=w):(r.jump(v),w())}function p(){a(""),s.cancel()}function m(v){var w=n.rewindSpeed;if(e.is(Al)&&w){var _=i.getIndex(!0),x=i.getEnd();if(_===0&&v>=x||_>=x&&v===0)return w}return n.speed}return{mount:c,start:d,cancel:p}}var VH=function(){function e(n,r){this.event=Et(),this.Components={},this.state=zW(za),this.splides=[],this._o={},this._E={};var i=eo(n)?SO(document,n):n;qu(i,i+" is invalid."),this.root=i,r=xs({label:Pr(i,dr)||"",labelledby:Pr(i,hS)||""},FH,e.defaults,r||{});try{xs(r,JSON.parse(Pr(i,rS)))}catch{qu(!1,"Invalid JSON")}this._o=Object.create(xs({},r))}var t=e.prototype;return t.mount=function(r,i){var s=this,o=this.state,a=this.Components;qu(o.is([za,wp]),"Already mounted!"),o.set(za),this._C=a,this._T=i||this._T||(this.is(Nh)?UH:BH),this._E=r||this._E;var u=Uc({},LH,this._E,{Transition:this._T});return $o(u,function(c,d){var p=c(s,a,s._o);a[d]=p,p.setup&&p.setup()}),$o(a,function(c){c.mount&&c.mount()}),this.emit(ho),ui(this.root,eH),o.set(Dl),this.emit(a1),this},t.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(Dl)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},t.go=function(r){return this._C.Controller.go(r),this},t.on=function(r,i){return this.event.on(r,i),this},t.off=function(r){return this.event.off(r),this},t.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(co(arguments,1))),this},t.add=function(r,i){return this._C.Slides.add(r,i),this},t.remove=function(r){return this._C.Slides.remove(r),this},t.is=function(r){return this._o.type===r},t.refresh=function(){return this.emit(Lt),this},t.destroy=function(r){r===void 0&&(r=!0);var i=this.event,s=this.state;return s.is(za)?Et(this).on(a1,this.destroy.bind(this,r)):($o(this._C,function(o){o.destroy&&o.destroy(r)},!0),i.emit(oS),i.destroy(),r&&es(this.splides),s.set(wp)),this},$W(e,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),gS=VH;gS.defaults={};gS.STATES=UW;var dT=[[ho,"onMounted"],[a1,"onReady"],[ts,"onMove"],[Hl,"onMoved"],[sS,"onClick"],[kO,"onActive"],[xO,"onInactive"],[TO,"onVisible"],[DO,"onHidden"],[Lt,"onRefresh"],[Pn,"onUpdated"],[Il,"onResize"],[ng,"onResized"],[IO,"onDrag"],[AO,"onDragging"],[bO,"onDragged"],[rg,"onScroll"],[ha,"onScrolled"],[oS,"onDestroy"],[NO,"onArrowsMounted"],[OO,"onArrowsUpdated"],[RO,"onPaginationMounted"],[PO,"onPaginationUpdated"],[aS,"onNavigationMounted"],[lS,"onAutoplayPlay"],[MO,"onAutoplayPlaying"],[uS,"onAutoplayPause"],[cS,"onLazyLoadLoaded"]];function yS(...e){return e.filter(Boolean).join(" ")}function Cp(e){return e!==null&&typeof e=="object"}function c1(e,t){if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&!e.some((n,r)=>!c1(n,t[r]));if(Cp(e)&&Cp(t)){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&!n.some(i=>!Object.prototype.hasOwnProperty.call(t,i)||!c1(e[i],t[i]))}return e===t}function zH(e,t){return e.length===t.length&&!e.some((n,r)=>n!==t[r])}function jH(e,t){if(e){const n=Object.keys(e);for(let r=0;r<n.length;r++){const i=n[r];if(i!=="__proto__"&&t(e[i],i)===!1)break}}return e}function h1(e,t){const n=e;return jH(t,(r,i)=>{Array.isArray(r)?n[i]=r.slice():Cp(r)?n[i]=h1(Cp(n[i])?n[i]:{},r):n[i]=r}),n}var YH=({children:e,className:t,...n})=>k("div",{className:yS("splide__track",t),...n,children:k("ul",{className:"splide__list",children:e})}),vS=class extends qt.Component{constructor(){super(...arguments),this.splideRef=qt.createRef(),this.slides=[]}componentDidMount(){const{options:e,extensions:t,transition:n}=this.props,{current:r}=this.splideRef;r&&(this.splide=new gS(r,e),this.bind(this.splide),this.splide.mount(t,n),this.options=h1({},e||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:e}=this.props;e&&!c1(this.options,e)&&(this.splide.options=e,this.options=h1({},e));const t=this.getSlides();zH(this.slides,t)||(this.splide.refresh(),this.slides=t)}sync(e){var t;(t=this.splide)==null||t.sync(e)}go(e){var t;(t=this.splide)==null||t.go(e)}getSlides(){var e;if(this.splide){const t=(e=this.splide.Components.Elements)==null?void 0:e.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(e){dT.forEach(([t,n])=>{const r=this.props[n];typeof r=="function"&&e.on(t,(...i)=>{r(e,...i)})})}omit(e,t){return t.forEach(n=>{Object.prototype.hasOwnProperty.call(e,n)&&delete e[n]}),e}render(){const{className:e,tag:t="div",hasTrack:n=!0,children:r,...i}=this.props;return qt.createElement(t,{className:yS("splide",e),ref:this.splideRef,...this.omit(i,["options",...dT.map(s=>s[1])])},n?qt.createElement(YH,null,r):r)}},wS=({children:e,className:t,...n})=>qt.createElement("li",{className:yS("splide__slide",t),...n},e);/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 *///! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var XO;function te(){return XO.apply(null,arguments)}function WH(e){XO=e}function Br(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Fo(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function Ye(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _S(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(Ye(e,t))return!1;return!0}function $n(e){return e===void 0}function ns(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Oh(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function JO(e,t){var n=[],r,i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function Ts(e,t){for(var n in t)Ye(t,n)&&(e[n]=t[n]);return Ye(t,"toString")&&(e.toString=t.toString),Ye(t,"valueOf")&&(e.valueOf=t.valueOf),e}function pi(e,t,n,r){return ER(e,t,n,r,!0).utc()}function HH(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function Ae(e){return e._pf==null&&(e._pf=HH()),e._pf}var d1;Array.prototype.some?d1=Array.prototype.some:d1=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function SS(e){if(e._isValid==null){var t=Ae(e),n=d1.call(t.parsedDateParts,function(i){return i!=null}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r}return e._isValid}function dg(e){var t=pi(NaN);return e!=null?Ts(Ae(t),e):Ae(t).userInvalidated=!0,t}var fT=te.momentProperties=[],oy=!1;function ES(e,t){var n,r,i,s=fT.length;if($n(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),$n(t._i)||(e._i=t._i),$n(t._f)||(e._f=t._f),$n(t._l)||(e._l=t._l),$n(t._strict)||(e._strict=t._strict),$n(t._tzm)||(e._tzm=t._tzm),$n(t._isUTC)||(e._isUTC=t._isUTC),$n(t._offset)||(e._offset=t._offset),$n(t._pf)||(e._pf=Ae(t)),$n(t._locale)||(e._locale=t._locale),s>0)for(n=0;n<s;n++)r=fT[n],i=t[r],$n(i)||(e[r]=i);return e}function Rh(e){ES(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),oy===!1&&(oy=!0,te.updateOffset(this),oy=!1)}function Vr(e){return e instanceof Rh||e!=null&&e._isAMomentObject!=null}function ZO(e){te.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+e)}function Cr(e,t){var n=!0;return Ts(function(){if(te.deprecationHandler!=null&&te.deprecationHandler(null,e),n){var r=[],i,s,o,a=arguments.length;for(s=0;s<a;s++){if(i="",typeof arguments[s]=="object"){i+=`
[`+s+"] ";for(o in arguments[0])Ye(arguments[0],o)&&(i+=o+": "+arguments[0][o]+", ");i=i.slice(0,-2)}else i=arguments[s];r.push(i)}ZO(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var pT={};function eR(e,t){te.deprecationHandler!=null&&te.deprecationHandler(e,t),pT[e]||(ZO(t),pT[e]=!0)}te.suppressDeprecationWarnings=!1;te.deprecationHandler=null;function mi(e){return typeof Function!="undefined"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function GH(e){var t,n;for(n in e)Ye(e,n)&&(t=e[n],mi(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function f1(e,t){var n=Ts({},e),r;for(r in t)Ye(t,r)&&(Fo(e[r])&&Fo(t[r])?(n[r]={},Ts(n[r],e[r]),Ts(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)Ye(e,r)&&!Ye(t,r)&&Fo(e[r])&&(n[r]=Ts({},n[r]));return n}function CS(e){e!=null&&this.set(e)}var p1;Object.keys?p1=Object.keys:p1=function(e){var t,n=[];for(t in e)Ye(e,t)&&n.push(t);return n};var qH={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function KH(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return mi(r)?r.call(t,n):r}function hi(e,t,n){var r=""+Math.abs(e),i=t-r.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var kS=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Pd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ay={},ol={};function de(e,t,n,r){var i=r;typeof r=="string"&&(i=function(){return this[r]()}),e&&(ol[e]=i),t&&(ol[t[0]]=function(){return hi(i.apply(this,arguments),t[1],t[2])}),n&&(ol[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function QH(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function XH(e){var t=e.match(kS),n,r;for(n=0,r=t.length;n<r;n++)ol[t[n]]?t[n]=ol[t[n]]:t[n]=QH(t[n]);return function(i){var s="",o;for(o=0;o<r;o++)s+=mi(t[o])?t[o].call(i,e):t[o];return s}}function uf(e,t){return e.isValid()?(t=tR(t,e.localeData()),ay[t]=ay[t]||XH(t),ay[t](e)):e.localeData().invalidDate()}function tR(e,t){var n=5;function r(i){return t.longDateFormat(i)||i}for(Pd.lastIndex=0;n>=0&&Pd.test(e);)e=e.replace(Pd,r),Pd.lastIndex=0,n-=1;return e}var JH={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function ZH(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(kS).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var eG="Invalid date";function tG(){return this._invalidDate}var nG="%d",rG=/\d{1,2}/;function iG(e){return this._ordinal.replace("%d",e)}var sG={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function oG(e,t,n,r){var i=this._relativeTime[n];return mi(i)?i(e,t,n,r):i.replace(/%d/i,e)}function aG(e,t){var n=this._relativeTime[e>0?"future":"past"];return mi(n)?n(t):n.replace(/%s/i,t)}var Qu={};function xn(e,t){var n=e.toLowerCase();Qu[n]=Qu[n+"s"]=Qu[t]=e}function kr(e){return typeof e=="string"?Qu[e]||Qu[e.toLowerCase()]:void 0}function xS(e){var t={},n,r;for(r in e)Ye(e,r)&&(n=kr(r),n&&(t[n]=e[r]));return t}var nR={};function Tn(e,t){nR[e]=t}function lG(e){var t=[],n;for(n in e)Ye(e,n)&&t.push({unit:n,priority:nR[n]});return t.sort(function(r,i){return r.priority-i.priority}),t}function fg(e){return e%4===0&&e%100!==0||e%400===0}function lr(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function Re(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=lr(t)),n}function ql(e,t){return function(n){return n!=null?(rR(this,e,n),te.updateOffset(this,t),this):kp(this,e)}}function kp(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function rR(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&fg(e.year())&&e.month()===1&&e.date()===29?(n=Re(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),wg(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function uG(e){return e=kr(e),mi(this[e])?this[e]():this}function cG(e,t){if(typeof e=="object"){e=xS(e);var n=lG(e),r,i=n.length;for(r=0;r<i;r++)this[n[r].unit](e[n[r].unit])}else if(e=kr(e),mi(this[e]))return this[e](t);return this}var iR=/\d/,ir=/\d\d/,sR=/\d{3}/,TS=/\d{4}/,pg=/[+-]?\d{6}/,ut=/\d\d?/,oR=/\d\d\d\d?/,aR=/\d\d\d\d\d\d?/,mg=/\d{1,3}/,DS=/\d{1,4}/,gg=/[+-]?\d{1,6}/,Kl=/\d+/,yg=/[+-]?\d+/,hG=/Z|[+-]\d\d:?\d\d/gi,vg=/Z|[+-]\d\d(?::?\d\d)?/gi,dG=/[+-]?\d+(\.\d{1,3})?/,Ph=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,xp;xp={};function se(e,t,n){xp[e]=mi(t)?t:function(r,i){return r&&n?n:t}}function fG(e,t){return Ye(xp,e)?xp[e](t._strict,t._locale):new RegExp(pG(e))}function pG(e){return Gn(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,i,s){return n||r||i||s}))}function Gn(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var m1={};function Ze(e,t){var n,r=t,i;for(typeof e=="string"&&(e=[e]),ns(t)&&(r=function(s,o){o[t]=Re(s)}),i=e.length,n=0;n<i;n++)m1[e[n]]=r}function Mh(e,t){Ze(e,function(n,r,i,s){i._w=i._w||{},t(n,i._w,i,s)})}function mG(e,t,n){t!=null&&Ye(m1,e)&&m1[e](t,n._a,n,e)}var _n=0,Fi=1,Kr=2,jt=3,Mr=4,Ui=5,No=6,gG=7,yG=8;function vG(e,t){return(e%t+t)%t}var Nt;Array.prototype.indexOf?Nt=Array.prototype.indexOf:Nt=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function wg(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=vG(t,12);return e+=(t-n)/12,n===1?fg(e)?29:28:31-n%7%2}de("M",["MM",2],"Mo",function(){return this.month()+1});de("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});de("MMMM",0,0,function(e){return this.localeData().months(this,e)});xn("month","M");Tn("month",8);se("M",ut);se("MM",ut,ir);se("MMM",function(e,t){return t.monthsShortRegex(e)});se("MMMM",function(e,t){return t.monthsRegex(e)});Ze(["M","MM"],function(e,t){t[Fi]=Re(e)-1});Ze(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);i!=null?t[Fi]=i:Ae(n).invalidMonth=e});var wG="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),lR="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),uR=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,_G=Ph,SG=Ph;function EG(e,t){return e?Br(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||uR).test(t)?"format":"standalone"][e.month()]:Br(this._months)?this._months:this._months.standalone}function CG(e,t){return e?Br(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[uR.test(t)?"format":"standalone"][e.month()]:Br(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function kG(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)s=pi([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(s,"").toLocaleLowerCase();return n?t==="MMM"?(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:null):(i=Nt.call(this._longMonthsParse,o),i!==-1?i:null):t==="MMM"?(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:(i=Nt.call(this._longMonthsParse,o),i!==-1?i:null)):(i=Nt.call(this._longMonthsParse,o),i!==-1?i:(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:null))}function xG(e,t,n){var r,i,s;if(this._monthsParseExact)return kG.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=pi([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(s="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function cR(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=Re(t);else if(t=e.localeData().monthsParse(t),!ns(t))return e}return n=Math.min(e.date(),wg(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function hR(e){return e!=null?(cR(this,e),te.updateOffset(this,!0),this):kp(this,"Month")}function TG(){return wg(this.year(),this.month())}function DG(e){return this._monthsParseExact?(Ye(this,"_monthsRegex")||dR.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(Ye(this,"_monthsShortRegex")||(this._monthsShortRegex=_G),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function IG(e){return this._monthsParseExact?(Ye(this,"_monthsRegex")||dR.call(this),e?this._monthsStrictRegex:this._monthsRegex):(Ye(this,"_monthsRegex")||(this._monthsRegex=SG),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function dR(){function e(o,a){return a.length-o.length}var t=[],n=[],r=[],i,s;for(i=0;i<12;i++)s=pi([2e3,i]),t.push(this.monthsShort(s,"")),n.push(this.months(s,"")),r.push(this.months(s,"")),r.push(this.monthsShort(s,""));for(t.sort(e),n.sort(e),r.sort(e),i=0;i<12;i++)t[i]=Gn(t[i]),n[i]=Gn(n[i]);for(i=0;i<24;i++)r[i]=Gn(r[i]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}de("Y",0,0,function(){var e=this.year();return e<=9999?hi(e,4):"+"+e});de(0,["YY",2],0,function(){return this.year()%100});de(0,["YYYY",4],0,"year");de(0,["YYYYY",5],0,"year");de(0,["YYYYYY",6,!0],0,"year");xn("year","y");Tn("year",1);se("Y",yg);se("YY",ut,ir);se("YYYY",DS,TS);se("YYYYY",gg,pg);se("YYYYYY",gg,pg);Ze(["YYYYY","YYYYYY"],_n);Ze("YYYY",function(e,t){t[_n]=e.length===2?te.parseTwoDigitYear(e):Re(e)});Ze("YY",function(e,t){t[_n]=te.parseTwoDigitYear(e)});Ze("Y",function(e,t){t[_n]=parseInt(e,10)});function Xu(e){return fg(e)?366:365}te.parseTwoDigitYear=function(e){return Re(e)+(Re(e)>68?1900:2e3)};var fR=ql("FullYear",!0);function AG(){return fg(this.year())}function bG(e,t,n,r,i,s,o){var a;return e<100&&e>=0?(a=new Date(e+400,t,n,r,i,s,o),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,n,r,i,s,o),a}function jc(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Tp(e,t,n){var r=7+t-n,i=(7+jc(e,0,r).getUTCDay()-t)%7;return-i+r-1}function pR(e,t,n,r,i){var s=(7+n-r)%7,o=Tp(e,r,i),a=1+7*(t-1)+s+o,u,c;return a<=0?(u=e-1,c=Xu(u)+a):a>Xu(e)?(u=e+1,c=a-Xu(e)):(u=e,c=a),{year:u,dayOfYear:c}}function Yc(e,t,n){var r=Tp(e.year(),t,n),i=Math.floor((e.dayOfYear()-r-1)/7)+1,s,o;return i<1?(o=e.year()-1,s=i+ji(o,t,n)):i>ji(e.year(),t,n)?(s=i-ji(e.year(),t,n),o=e.year()+1):(o=e.year(),s=i),{week:s,year:o}}function ji(e,t,n){var r=Tp(e,t,n),i=Tp(e+1,t,n);return(Xu(e)-r+i)/7}de("w",["ww",2],"wo","week");de("W",["WW",2],"Wo","isoWeek");xn("week","w");xn("isoWeek","W");Tn("week",5);Tn("isoWeek",5);se("w",ut);se("ww",ut,ir);se("W",ut);se("WW",ut,ir);Mh(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=Re(e)});function NG(e){return Yc(e,this._week.dow,this._week.doy).week}var OG={dow:0,doy:6};function RG(){return this._week.dow}function PG(){return this._week.doy}function MG(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function LG(e){var t=Yc(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}de("d",0,"do","day");de("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});de("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});de("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});de("e",0,0,"weekday");de("E",0,0,"isoWeekday");xn("day","d");xn("weekday","e");xn("isoWeekday","E");Tn("day",11);Tn("weekday",11);Tn("isoWeekday",11);se("d",ut);se("e",ut);se("E",ut);se("dd",function(e,t){return t.weekdaysMinRegex(e)});se("ddd",function(e,t){return t.weekdaysShortRegex(e)});se("dddd",function(e,t){return t.weekdaysRegex(e)});Mh(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);i!=null?t.d=i:Ae(n).invalidWeekday=e});Mh(["d","e","E"],function(e,t,n,r){t[r]=Re(e)});function $G(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function FG(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function IS(e,t){return e.slice(t,7).concat(e.slice(0,t))}var UG="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),mR="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),BG="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),VG=Ph,zG=Ph,jG=Ph;function YG(e,t){var n=Br(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?IS(n,this._week.dow):e?n[e.day()]:n}function WG(e){return e===!0?IS(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function HG(e){return e===!0?IS(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function GG(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)s=pi([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(s,"").toLocaleLowerCase();return n?t==="dddd"?(i=Nt.call(this._weekdaysParse,o),i!==-1?i:null):t==="ddd"?(i=Nt.call(this._shortWeekdaysParse,o),i!==-1?i:null):(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null):t==="dddd"?(i=Nt.call(this._weekdaysParse,o),i!==-1||(i=Nt.call(this._shortWeekdaysParse,o),i!==-1)?i:(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null)):t==="ddd"?(i=Nt.call(this._shortWeekdaysParse,o),i!==-1||(i=Nt.call(this._weekdaysParse,o),i!==-1)?i:(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null)):(i=Nt.call(this._minWeekdaysParse,o),i!==-1||(i=Nt.call(this._weekdaysParse,o),i!==-1)?i:(i=Nt.call(this._shortWeekdaysParse,o),i!==-1?i:null))}function qG(e,t,n){var r,i,s;if(this._weekdaysParseExact)return GG.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=pi([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(s="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function KG(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=$G(e,this.localeData()),this.add(e-t,"d")):t}function QG(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function XG(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=FG(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function JG(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||AS.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(Ye(this,"_weekdaysRegex")||(this._weekdaysRegex=VG),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function ZG(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||AS.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(Ye(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=zG),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function eq(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||AS.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(Ye(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=jG),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function AS(){function e(d,p){return p.length-d.length}var t=[],n=[],r=[],i=[],s,o,a,u,c;for(s=0;s<7;s++)o=pi([2e3,1]).day(s),a=Gn(this.weekdaysMin(o,"")),u=Gn(this.weekdaysShort(o,"")),c=Gn(this.weekdays(o,"")),t.push(a),n.push(u),r.push(c),i.push(a),i.push(u),i.push(c);t.sort(e),n.sort(e),r.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function bS(){return this.hours()%12||12}function tq(){return this.hours()||24}de("H",["HH",2],0,"hour");de("h",["hh",2],0,bS);de("k",["kk",2],0,tq);de("hmm",0,0,function(){return""+bS.apply(this)+hi(this.minutes(),2)});de("hmmss",0,0,function(){return""+bS.apply(this)+hi(this.minutes(),2)+hi(this.seconds(),2)});de("Hmm",0,0,function(){return""+this.hours()+hi(this.minutes(),2)});de("Hmmss",0,0,function(){return""+this.hours()+hi(this.minutes(),2)+hi(this.seconds(),2)});function gR(e,t){de(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}gR("a",!0);gR("A",!1);xn("hour","h");Tn("hour",13);function yR(e,t){return t._meridiemParse}se("a",yR);se("A",yR);se("H",ut);se("h",ut);se("k",ut);se("HH",ut,ir);se("hh",ut,ir);se("kk",ut,ir);se("hmm",oR);se("hmmss",aR);se("Hmm",oR);se("Hmmss",aR);Ze(["H","HH"],jt);Ze(["k","kk"],function(e,t,n){var r=Re(e);t[jt]=r===24?0:r});Ze(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});Ze(["h","hh"],function(e,t,n){t[jt]=Re(e),Ae(n).bigHour=!0});Ze("hmm",function(e,t,n){var r=e.length-2;t[jt]=Re(e.substr(0,r)),t[Mr]=Re(e.substr(r)),Ae(n).bigHour=!0});Ze("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[jt]=Re(e.substr(0,r)),t[Mr]=Re(e.substr(r,2)),t[Ui]=Re(e.substr(i)),Ae(n).bigHour=!0});Ze("Hmm",function(e,t,n){var r=e.length-2;t[jt]=Re(e.substr(0,r)),t[Mr]=Re(e.substr(r))});Ze("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[jt]=Re(e.substr(0,r)),t[Mr]=Re(e.substr(r,2)),t[Ui]=Re(e.substr(i))});function nq(e){return(e+"").toLowerCase().charAt(0)==="p"}var rq=/[ap]\.?m?\.?/i,iq=ql("Hours",!0);function sq(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var vR={calendar:qH,longDateFormat:JH,invalidDate:eG,ordinal:nG,dayOfMonthOrdinalParse:rG,relativeTime:sG,months:wG,monthsShort:lR,week:OG,weekdays:UG,weekdaysMin:BG,weekdaysShort:mR,meridiemParse:rq},dt={},gu={},Wc;function oq(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function mT(e){return e&&e.toLowerCase().replace("_","-")}function aq(e){for(var t=0,n,r,i,s;t<e.length;){for(s=mT(e[t]).split("-"),n=s.length,r=mT(e[t+1]),r=r?r.split("-"):null;n>0;){if(i=_g(s.slice(0,n).join("-")),i)return i;if(r&&r.length>=n&&oq(s,r)>=n-1)break;n--}t++}return Wc}function lq(e){return e.match("^[^/\\\\]*$")!=null}function _g(e){var t=null,n;if(dt[e]===void 0&&typeof df!="undefined"&&df&&df.exports&&lq(e))try{t=Wc._abbr,n=require,n("./locale/"+e),Ys(t)}catch{dt[e]=null}return dt[e]}function Ys(e,t){var n;return e&&($n(t)?n=is(e):n=NS(e,t),n?Wc=n:typeof console!="undefined"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Wc._abbr}function NS(e,t){if(t!==null){var n,r=vR;if(t.abbr=e,dt[e]!=null)eR("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=dt[e]._config;else if(t.parentLocale!=null)if(dt[t.parentLocale]!=null)r=dt[t.parentLocale]._config;else if(n=_g(t.parentLocale),n!=null)r=n._config;else return gu[t.parentLocale]||(gu[t.parentLocale]=[]),gu[t.parentLocale].push({name:e,config:t}),null;return dt[e]=new CS(f1(r,t)),gu[e]&&gu[e].forEach(function(i){NS(i.name,i.config)}),Ys(e),dt[e]}else return delete dt[e],null}function uq(e,t){if(t!=null){var n,r,i=vR;dt[e]!=null&&dt[e].parentLocale!=null?dt[e].set(f1(dt[e]._config,t)):(r=_g(e),r!=null&&(i=r._config),t=f1(i,t),r==null&&(t.abbr=e),n=new CS(t),n.parentLocale=dt[e],dt[e]=n),Ys(e)}else dt[e]!=null&&(dt[e].parentLocale!=null?(dt[e]=dt[e].parentLocale,e===Ys()&&Ys(e)):dt[e]!=null&&delete dt[e]);return dt[e]}function is(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Wc;if(!Br(e)){if(t=_g(e),t)return t;e=[e]}return aq(e)}function cq(){return p1(dt)}function OS(e){var t,n=e._a;return n&&Ae(e).overflow===-2&&(t=n[Fi]<0||n[Fi]>11?Fi:n[Kr]<1||n[Kr]>wg(n[_n],n[Fi])?Kr:n[jt]<0||n[jt]>24||n[jt]===24&&(n[Mr]!==0||n[Ui]!==0||n[No]!==0)?jt:n[Mr]<0||n[Mr]>59?Mr:n[Ui]<0||n[Ui]>59?Ui:n[No]<0||n[No]>999?No:-1,Ae(e)._overflowDayOfYear&&(t<_n||t>Kr)&&(t=Kr),Ae(e)._overflowWeeks&&t===-1&&(t=gG),Ae(e)._overflowWeekday&&t===-1&&(t=yG),Ae(e).overflow=t),e}var hq=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,dq=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,fq=/Z|[+-]\d\d(?::?\d\d)?/,Md=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],ly=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pq=/^\/?Date\((-?\d+)/i,mq=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,gq={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function wR(e){var t,n,r=e._i,i=hq.exec(r)||dq.exec(r),s,o,a,u,c=Md.length,d=ly.length;if(i){for(Ae(e).iso=!0,t=0,n=c;t<n;t++)if(Md[t][1].exec(i[1])){o=Md[t][0],s=Md[t][2]!==!1;break}if(o==null){e._isValid=!1;return}if(i[3]){for(t=0,n=d;t<n;t++)if(ly[t][1].exec(i[3])){a=(i[2]||" ")+ly[t][0];break}if(a==null){e._isValid=!1;return}}if(!s&&a!=null){e._isValid=!1;return}if(i[4])if(fq.exec(i[4]))u="Z";else{e._isValid=!1;return}e._f=o+(a||"")+(u||""),PS(e)}else e._isValid=!1}function yq(e,t,n,r,i,s){var o=[vq(e),lR.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return s&&o.push(parseInt(s,10)),o}function vq(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function wq(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function _q(e,t,n){if(e){var r=mR.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(r!==i)return Ae(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Sq(e,t,n){if(e)return gq[e];if(t)return 0;var r=parseInt(n,10),i=r%100,s=(r-i)/100;return s*60+i}function _R(e){var t=mq.exec(wq(e._i)),n;if(t){if(n=yq(t[4],t[3],t[2],t[5],t[6],t[7]),!_q(t[1],n,e))return;e._a=n,e._tzm=Sq(t[8],t[9],t[10]),e._d=jc.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),Ae(e).rfc2822=!0}else e._isValid=!1}function Eq(e){var t=pq.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(wR(e),e._isValid===!1)delete e._isValid;else return;if(_R(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:te.createFromInputFallback(e)}te.createFromInputFallback=Cr("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Da(e,t,n){return e!=null?e:t!=null?t:n}function Cq(e){var t=new Date(te.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function RS(e){var t,n,r=[],i,s,o;if(!e._d){for(i=Cq(e),e._w&&e._a[Kr]==null&&e._a[Fi]==null&&kq(e),e._dayOfYear!=null&&(o=Da(e._a[_n],i[_n]),(e._dayOfYear>Xu(o)||e._dayOfYear===0)&&(Ae(e)._overflowDayOfYear=!0),n=jc(o,0,e._dayOfYear),e._a[Fi]=n.getUTCMonth(),e._a[Kr]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=i[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[jt]===24&&e._a[Mr]===0&&e._a[Ui]===0&&e._a[No]===0&&(e._nextDay=!0,e._a[jt]=0),e._d=(e._useUTC?jc:bG).apply(null,r),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[jt]=24),e._w&&typeof e._w.d!="undefined"&&e._w.d!==s&&(Ae(e).weekdayMismatch=!0)}}function kq(e){var t,n,r,i,s,o,a,u,c;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(s=1,o=4,n=Da(t.GG,e._a[_n],Yc(lt(),1,4).year),r=Da(t.W,1),i=Da(t.E,1),(i<1||i>7)&&(u=!0)):(s=e._locale._week.dow,o=e._locale._week.doy,c=Yc(lt(),s,o),n=Da(t.gg,e._a[_n],c.year),r=Da(t.w,c.week),t.d!=null?(i=t.d,(i<0||i>6)&&(u=!0)):t.e!=null?(i=t.e+s,(t.e<0||t.e>6)&&(u=!0)):i=s),r<1||r>ji(n,s,o)?Ae(e)._overflowWeeks=!0:u!=null?Ae(e)._overflowWeekday=!0:(a=pR(n,r,i,s,o),e._a[_n]=a.year,e._dayOfYear=a.dayOfYear)}te.ISO_8601=function(){};te.RFC_2822=function(){};function PS(e){if(e._f===te.ISO_8601){wR(e);return}if(e._f===te.RFC_2822){_R(e);return}e._a=[],Ae(e).empty=!0;var t=""+e._i,n,r,i,s,o,a=t.length,u=0,c,d;for(i=tR(e._f,e._locale).match(kS)||[],d=i.length,n=0;n<d;n++)s=i[n],r=(t.match(fG(s,e))||[])[0],r&&(o=t.substr(0,t.indexOf(r)),o.length>0&&Ae(e).unusedInput.push(o),t=t.slice(t.indexOf(r)+r.length),u+=r.length),ol[s]?(r?Ae(e).empty=!1:Ae(e).unusedTokens.push(s),mG(s,r,e)):e._strict&&!r&&Ae(e).unusedTokens.push(s);Ae(e).charsLeftOver=a-u,t.length>0&&Ae(e).unusedInput.push(t),e._a[jt]<=12&&Ae(e).bigHour===!0&&e._a[jt]>0&&(Ae(e).bigHour=void 0),Ae(e).parsedDateParts=e._a.slice(0),Ae(e).meridiem=e._meridiem,e._a[jt]=xq(e._locale,e._a[jt],e._meridiem),c=Ae(e).era,c!==null&&(e._a[_n]=e._locale.erasConvertYear(c,e._a[_n])),RS(e),OS(e)}function xq(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function Tq(e){var t,n,r,i,s,o,a=!1,u=e._f.length;if(u===0){Ae(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<u;i++)s=0,o=!1,t=ES({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],PS(t),SS(t)&&(o=!0),s+=Ae(t).charsLeftOver,s+=Ae(t).unusedTokens.length*10,Ae(t).score=s,a?s<r&&(r=s,n=t):(r==null||s<r||o)&&(r=s,n=t,o&&(a=!0));Ts(e,n||t)}function Dq(e){if(!e._d){var t=xS(e._i),n=t.day===void 0?t.date:t.day;e._a=JO([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),RS(e)}}function Iq(e){var t=new Rh(OS(SR(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function SR(e){var t=e._i,n=e._f;return e._locale=e._locale||is(e._l),t===null||n===void 0&&t===""?dg({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),Vr(t)?new Rh(OS(t)):(Oh(t)?e._d=t:Br(n)?Tq(e):n?PS(e):Aq(e),SS(e)||(e._d=null),e))}function Aq(e){var t=e._i;$n(t)?e._d=new Date(te.now()):Oh(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Eq(e):Br(t)?(e._a=JO(t.slice(0),function(n){return parseInt(n,10)}),RS(e)):Fo(t)?Dq(e):ns(t)?e._d=new Date(t):te.createFromInputFallback(e)}function ER(e,t,n,r,i){var s={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(Fo(e)&&_S(e)||Br(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=i,s._l=n,s._i=e,s._f=t,s._strict=r,Iq(s)}function lt(e,t,n,r){return ER(e,t,n,r,!1)}var bq=Cr("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=lt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:dg()}),Nq=Cr("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=lt.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:dg()});function CR(e,t){var n,r;if(t.length===1&&Br(t[0])&&(t=t[0]),!t.length)return lt();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function Oq(){var e=[].slice.call(arguments,0);return CR("isBefore",e)}function Rq(){var e=[].slice.call(arguments,0);return CR("isAfter",e)}var Pq=function(){return Date.now?Date.now():+new Date},yu=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Mq(e){var t,n=!1,r,i=yu.length;for(t in e)if(Ye(e,t)&&!(Nt.call(yu,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<i;++r)if(e[yu[r]]){if(n)return!1;parseFloat(e[yu[r]])!==Re(e[yu[r]])&&(n=!0)}return!0}function Lq(){return this._isValid}function $q(){return jr(NaN)}function Sg(e){var t=xS(e),n=t.year||0,r=t.quarter||0,i=t.month||0,s=t.week||t.isoWeek||0,o=t.day||0,a=t.hour||0,u=t.minute||0,c=t.second||0,d=t.millisecond||0;this._isValid=Mq(t),this._milliseconds=+d+c*1e3+u*6e4+a*1e3*60*60,this._days=+o+s*7,this._months=+i+r*3+n*12,this._data={},this._locale=is(),this._bubble()}function cf(e){return e instanceof Sg}function g1(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Fq(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),s=0,o;for(o=0;o<r;o++)(n&&e[o]!==t[o]||!n&&Re(e[o])!==Re(t[o]))&&s++;return s+i}function kR(e,t){de(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+hi(~~(n/60),2)+t+hi(~~n%60,2)})}kR("Z",":");kR("ZZ","");se("Z",vg);se("ZZ",vg);Ze(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=MS(vg,e)});var Uq=/([\+\-]|\d\d)/gi;function MS(e,t){var n=(t||"").match(e),r,i,s;return n===null?null:(r=n[n.length-1]||[],i=(r+"").match(Uq)||["-",0,0],s=+(i[1]*60)+Re(i[2]),s===0?0:i[0]==="+"?s:-s)}function LS(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(Vr(e)||Oh(e)?e.valueOf():lt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),te.updateOffset(n,!1),n):lt(e).local()}function y1(e){return-Math.round(e._d.getTimezoneOffset())}te.updateOffset=function(){};function Bq(e,t,n){var r=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=MS(vg,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(i=y1(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?DR(this,jr(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,te.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:y1(this)}function Vq(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function zq(e){return this.utcOffset(0,e)}function jq(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(y1(this),"m")),this}function Yq(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=MS(hG,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Wq(e){return this.isValid()?(e=e?lt(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Hq(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Gq(){if(!$n(this._isDSTShifted))return this._isDSTShifted;var e={},t;return ES(e,this),e=SR(e),e._a?(t=e._isUTC?pi(e._a):lt(e._a),this._isDSTShifted=this.isValid()&&Fq(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function qq(){return this.isValid()?!this._isUTC:!1}function Kq(){return this.isValid()?this._isUTC:!1}function xR(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Qq=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Xq=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function jr(e,t){var n=e,r=null,i,s,o;return cf(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:ns(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=Qq.exec(e))?(i=r[1]==="-"?-1:1,n={y:0,d:Re(r[Kr])*i,h:Re(r[jt])*i,m:Re(r[Mr])*i,s:Re(r[Ui])*i,ms:Re(g1(r[No]*1e3))*i}):(r=Xq.exec(e))?(i=r[1]==="-"?-1:1,n={y:wo(r[2],i),M:wo(r[3],i),w:wo(r[4],i),d:wo(r[5],i),h:wo(r[6],i),m:wo(r[7],i),s:wo(r[8],i)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(o=Jq(lt(n.from),lt(n.to)),n={},n.ms=o.milliseconds,n.M=o.months),s=new Sg(n),cf(e)&&Ye(e,"_locale")&&(s._locale=e._locale),cf(e)&&Ye(e,"_isValid")&&(s._isValid=e._isValid),s}jr.fn=Sg.prototype;jr.invalid=$q;function wo(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function gT(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Jq(e,t){var n;return e.isValid()&&t.isValid()?(t=LS(t,e),e.isBefore(t)?n=gT(e,t):(n=gT(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function TR(e,t){return function(n,r){var i,s;return r!==null&&!isNaN(+r)&&(eR(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=r,r=s),i=jr(n,r),DR(this,i,e),this}}function DR(e,t,n,r){var i=t._milliseconds,s=g1(t._days),o=g1(t._months);!e.isValid()||(r=r==null?!0:r,o&&cR(e,kp(e,"Month")+o*n),s&&rR(e,"Date",kp(e,"Date")+s*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&te.updateOffset(e,s||o))}var Zq=TR(1,"add"),eK=TR(-1,"subtract");function IR(e){return typeof e=="string"||e instanceof String}function tK(e){return Vr(e)||Oh(e)||IR(e)||ns(e)||rK(e)||nK(e)||e===null||e===void 0}function nK(e){var t=Fo(e)&&!_S(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,s,o=r.length;for(i=0;i<o;i+=1)s=r[i],n=n||Ye(e,s);return t&&n}function rK(e){var t=Br(e),n=!1;return t&&(n=e.filter(function(r){return!ns(r)&&IR(e)}).length===0),t&&n}function iK(e){var t=Fo(e)&&!_S(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,s;for(i=0;i<r.length;i+=1)s=r[i],n=n||Ye(e,s);return t&&n}function sK(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function oK(e,t){arguments.length===1&&(arguments[0]?tK(arguments[0])?(e=arguments[0],t=void 0):iK(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||lt(),r=LS(n,this).startOf("day"),i=te.calendarFormat(this,r)||"sameElse",s=t&&(mi(t[i])?t[i].call(this,n):t[i]);return this.format(s||this.localeData().calendar(i,this,lt(n)))}function aK(){return new Rh(this)}function lK(e,t){var n=Vr(e)?e:lt(e);return this.isValid()&&n.isValid()?(t=kr(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function uK(e,t){var n=Vr(e)?e:lt(e);return this.isValid()&&n.isValid()?(t=kr(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function cK(e,t,n,r){var i=Vr(e)?e:lt(e),s=Vr(t)?t:lt(t);return this.isValid()&&i.isValid()&&s.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(i,n):!this.isBefore(i,n))&&(r[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function hK(e,t){var n=Vr(e)?e:lt(e),r;return this.isValid()&&n.isValid()?(t=kr(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function dK(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function fK(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function pK(e,t,n){var r,i,s;if(!this.isValid())return NaN;if(r=LS(e,this),!r.isValid())return NaN;switch(i=(r.utcOffset()-this.utcOffset())*6e4,t=kr(t),t){case"year":s=hf(this,r)/12;break;case"month":s=hf(this,r);break;case"quarter":s=hf(this,r)/3;break;case"second":s=(this-r)/1e3;break;case"minute":s=(this-r)/6e4;break;case"hour":s=(this-r)/36e5;break;case"day":s=(this-r-i)/864e5;break;case"week":s=(this-r-i)/6048e5;break;default:s=this-r}return n?s:lr(s)}function hf(e,t){if(e.date()<t.date())return-hf(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),i,s;return t-r<0?(i=e.clone().add(n-1,"months"),s=(t-r)/(r-i)):(i=e.clone().add(n+1,"months"),s=(t-r)/(i-r)),-(n+s)||0}te.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";te.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function mK(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function gK(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?uf(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):mi(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",uf(n,"Z")):uf(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function yK(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,i,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",s=t+'[")]',this.format(n+r+i+s)}function vK(e){e||(e=this.isUtc()?te.defaultFormatUtc:te.defaultFormat);var t=uf(this,e);return this.localeData().postformat(t)}function wK(e,t){return this.isValid()&&(Vr(e)&&e.isValid()||lt(e).isValid())?jr({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function _K(e){return this.from(lt(),e)}function SK(e,t){return this.isValid()&&(Vr(e)&&e.isValid()||lt(e).isValid())?jr({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function EK(e){return this.to(lt(),e)}function AR(e){var t;return e===void 0?this._locale._abbr:(t=is(e),t!=null&&(this._locale=t),this)}var bR=Cr("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function NR(){return this._locale}var Dp=1e3,al=60*Dp,Ip=60*al,OR=(365*400+97)*24*Ip;function ll(e,t){return(e%t+t)%t}function RR(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-OR:new Date(e,t,n).valueOf()}function PR(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-OR:Date.UTC(e,t,n)}function CK(e){var t,n;if(e=kr(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?PR:RR,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=ll(t+(this._isUTC?0:this.utcOffset()*al),Ip);break;case"minute":t=this._d.valueOf(),t-=ll(t,al);break;case"second":t=this._d.valueOf(),t-=ll(t,Dp);break}return this._d.setTime(t),te.updateOffset(this,!0),this}function kK(e){var t,n;if(e=kr(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?PR:RR,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Ip-ll(t+(this._isUTC?0:this.utcOffset()*al),Ip)-1;break;case"minute":t=this._d.valueOf(),t+=al-ll(t,al)-1;break;case"second":t=this._d.valueOf(),t+=Dp-ll(t,Dp)-1;break}return this._d.setTime(t),te.updateOffset(this,!0),this}function xK(){return this._d.valueOf()-(this._offset||0)*6e4}function TK(){return Math.floor(this.valueOf()/1e3)}function DK(){return new Date(this.valueOf())}function IK(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function AK(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function bK(){return this.isValid()?this.toISOString():null}function NK(){return SS(this)}function OK(){return Ts({},Ae(this))}function RK(){return Ae(this).overflow}function PK(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}de("N",0,0,"eraAbbr");de("NN",0,0,"eraAbbr");de("NNN",0,0,"eraAbbr");de("NNNN",0,0,"eraName");de("NNNNN",0,0,"eraNarrow");de("y",["y",1],"yo","eraYear");de("y",["yy",2],0,"eraYear");de("y",["yyy",3],0,"eraYear");de("y",["yyyy",4],0,"eraYear");se("N",$S);se("NN",$S);se("NNN",$S);se("NNNN",WK);se("NNNNN",HK);Ze(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?Ae(n).era=i:Ae(n).invalidEra=e});se("y",Kl);se("yy",Kl);se("yyy",Kl);se("yyyy",Kl);se("yo",GK);Ze(["y","yy","yyy","yyyy"],_n);Ze(["yo"],function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[_n]=n._locale.eraYearOrdinalParse(e,i):t[_n]=parseInt(e,10)});function MK(e,t){var n,r,i,s=this._eras||is("en")._eras;for(n=0,r=s.length;n<r;++n){switch(typeof s[n].since){case"string":i=te(s[n].since).startOf("day"),s[n].since=i.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":i=te(s[n].until).startOf("day").valueOf(),s[n].until=i.valueOf();break}}return s}function LK(e,t,n){var r,i,s=this.eras(),o,a,u;for(e=e.toUpperCase(),r=0,i=s.length;r<i;++r)if(o=s[r].name.toUpperCase(),a=s[r].abbr.toUpperCase(),u=s[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(a===e)return s[r];break;case"NNNN":if(o===e)return s[r];break;case"NNNNN":if(u===e)return s[r];break}else if([o,a,u].indexOf(e)>=0)return s[r]}function $K(e,t){var n=e.since<=e.until?1:-1;return t===void 0?te(e.since).year():te(e.since).year()+(t-e.offset)*n}function FK(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function UK(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function BK(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function VK(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-te(i[e].since).year())*n+i[e].offset;return this.year()}function zK(e){return Ye(this,"_erasNameRegex")||FS.call(this),e?this._erasNameRegex:this._erasRegex}function jK(e){return Ye(this,"_erasAbbrRegex")||FS.call(this),e?this._erasAbbrRegex:this._erasRegex}function YK(e){return Ye(this,"_erasNarrowRegex")||FS.call(this),e?this._erasNarrowRegex:this._erasRegex}function $S(e,t){return t.erasAbbrRegex(e)}function WK(e,t){return t.erasNameRegex(e)}function HK(e,t){return t.erasNarrowRegex(e)}function GK(e,t){return t._eraYearOrdinalRegex||Kl}function FS(){var e=[],t=[],n=[],r=[],i,s,o=this.eras();for(i=0,s=o.length;i<s;++i)t.push(Gn(o[i].name)),e.push(Gn(o[i].abbr)),n.push(Gn(o[i].narrow)),r.push(Gn(o[i].name)),r.push(Gn(o[i].abbr)),r.push(Gn(o[i].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}de(0,["gg",2],0,function(){return this.weekYear()%100});de(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Eg(e,t){de(0,[e,e.length],0,t)}Eg("gggg","weekYear");Eg("ggggg","weekYear");Eg("GGGG","isoWeekYear");Eg("GGGGG","isoWeekYear");xn("weekYear","gg");xn("isoWeekYear","GG");Tn("weekYear",1);Tn("isoWeekYear",1);se("G",yg);se("g",yg);se("GG",ut,ir);se("gg",ut,ir);se("GGGG",DS,TS);se("gggg",DS,TS);se("GGGGG",gg,pg);se("ggggg",gg,pg);Mh(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=Re(e)});Mh(["gg","GG"],function(e,t,n,r){t[r]=te.parseTwoDigitYear(e)});function qK(e){return MR.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function KK(e){return MR.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function QK(){return ji(this.year(),1,4)}function XK(){return ji(this.isoWeekYear(),1,4)}function JK(){var e=this.localeData()._week;return ji(this.year(),e.dow,e.doy)}function ZK(){var e=this.localeData()._week;return ji(this.weekYear(),e.dow,e.doy)}function MR(e,t,n,r,i){var s;return e==null?Yc(this,r,i).year:(s=ji(e,r,i),t>s&&(t=s),eQ.call(this,e,t,n,r,i))}function eQ(e,t,n,r,i){var s=pR(e,t,n,r,i),o=jc(s.year,0,s.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}de("Q",0,"Qo","quarter");xn("quarter","Q");Tn("quarter",7);se("Q",iR);Ze("Q",function(e,t){t[Fi]=(Re(e)-1)*3});function tQ(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}de("D",["DD",2],"Do","date");xn("date","D");Tn("date",9);se("D",ut);se("DD",ut,ir);se("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});Ze(["D","DD"],Kr);Ze("Do",function(e,t){t[Kr]=Re(e.match(ut)[0])});var LR=ql("Date",!0);de("DDD",["DDDD",3],"DDDo","dayOfYear");xn("dayOfYear","DDD");Tn("dayOfYear",4);se("DDD",mg);se("DDDD",sR);Ze(["DDD","DDDD"],function(e,t,n){n._dayOfYear=Re(e)});function nQ(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}de("m",["mm",2],0,"minute");xn("minute","m");Tn("minute",14);se("m",ut);se("mm",ut,ir);Ze(["m","mm"],Mr);var rQ=ql("Minutes",!1);de("s",["ss",2],0,"second");xn("second","s");Tn("second",15);se("s",ut);se("ss",ut,ir);Ze(["s","ss"],Ui);var iQ=ql("Seconds",!1);de("S",0,0,function(){return~~(this.millisecond()/100)});de(0,["SS",2],0,function(){return~~(this.millisecond()/10)});de(0,["SSS",3],0,"millisecond");de(0,["SSSS",4],0,function(){return this.millisecond()*10});de(0,["SSSSS",5],0,function(){return this.millisecond()*100});de(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});de(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});de(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});de(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});xn("millisecond","ms");Tn("millisecond",16);se("S",mg,iR);se("SS",mg,ir);se("SSS",mg,sR);var Ds,$R;for(Ds="SSSS";Ds.length<=9;Ds+="S")se(Ds,Kl);function sQ(e,t){t[No]=Re(("0."+e)*1e3)}for(Ds="S";Ds.length<=9;Ds+="S")Ze(Ds,sQ);$R=ql("Milliseconds",!1);de("z",0,0,"zoneAbbr");de("zz",0,0,"zoneName");function oQ(){return this._isUTC?"UTC":""}function aQ(){return this._isUTC?"Coordinated Universal Time":""}var K=Rh.prototype;K.add=Zq;K.calendar=oK;K.clone=aK;K.diff=pK;K.endOf=kK;K.format=vK;K.from=wK;K.fromNow=_K;K.to=SK;K.toNow=EK;K.get=uG;K.invalidAt=RK;K.isAfter=lK;K.isBefore=uK;K.isBetween=cK;K.isSame=hK;K.isSameOrAfter=dK;K.isSameOrBefore=fK;K.isValid=NK;K.lang=bR;K.locale=AR;K.localeData=NR;K.max=Nq;K.min=bq;K.parsingFlags=OK;K.set=cG;K.startOf=CK;K.subtract=eK;K.toArray=IK;K.toObject=AK;K.toDate=DK;K.toISOString=gK;K.inspect=yK;typeof Symbol!="undefined"&&Symbol.for!=null&&(K[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});K.toJSON=bK;K.toString=mK;K.unix=TK;K.valueOf=xK;K.creationData=PK;K.eraName=FK;K.eraNarrow=UK;K.eraAbbr=BK;K.eraYear=VK;K.year=fR;K.isLeapYear=AG;K.weekYear=qK;K.isoWeekYear=KK;K.quarter=K.quarters=tQ;K.month=hR;K.daysInMonth=TG;K.week=K.weeks=MG;K.isoWeek=K.isoWeeks=LG;K.weeksInYear=JK;K.weeksInWeekYear=ZK;K.isoWeeksInYear=QK;K.isoWeeksInISOWeekYear=XK;K.date=LR;K.day=K.days=KG;K.weekday=QG;K.isoWeekday=XG;K.dayOfYear=nQ;K.hour=K.hours=iq;K.minute=K.minutes=rQ;K.second=K.seconds=iQ;K.millisecond=K.milliseconds=$R;K.utcOffset=Bq;K.utc=zq;K.local=jq;K.parseZone=Yq;K.hasAlignedHourOffset=Wq;K.isDST=Hq;K.isLocal=qq;K.isUtcOffset=Kq;K.isUtc=xR;K.isUTC=xR;K.zoneAbbr=oQ;K.zoneName=aQ;K.dates=Cr("dates accessor is deprecated. Use date instead.",LR);K.months=Cr("months accessor is deprecated. Use month instead",hR);K.years=Cr("years accessor is deprecated. Use year instead",fR);K.zone=Cr("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Vq);K.isDSTShifted=Cr("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Gq);function lQ(e){return lt(e*1e3)}function uQ(){return lt.apply(null,arguments).parseZone()}function FR(e){return e}var We=CS.prototype;We.calendar=KH;We.longDateFormat=ZH;We.invalidDate=tG;We.ordinal=iG;We.preparse=FR;We.postformat=FR;We.relativeTime=oG;We.pastFuture=aG;We.set=GH;We.eras=MK;We.erasParse=LK;We.erasConvertYear=$K;We.erasAbbrRegex=jK;We.erasNameRegex=zK;We.erasNarrowRegex=YK;We.months=EG;We.monthsShort=CG;We.monthsParse=xG;We.monthsRegex=IG;We.monthsShortRegex=DG;We.week=NG;We.firstDayOfYear=PG;We.firstDayOfWeek=RG;We.weekdays=YG;We.weekdaysMin=HG;We.weekdaysShort=WG;We.weekdaysParse=qG;We.weekdaysRegex=JG;We.weekdaysShortRegex=ZG;We.weekdaysMinRegex=eq;We.isPM=nq;We.meridiem=sq;function Ap(e,t,n,r){var i=is(),s=pi().set(r,t);return i[n](s,e)}function UR(e,t,n){if(ns(e)&&(t=e,e=void 0),e=e||"",t!=null)return Ap(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=Ap(e,r,n,"month");return i}function US(e,t,n,r){typeof e=="boolean"?(ns(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,ns(t)&&(n=t,t=void 0),t=t||"");var i=is(),s=e?i._week.dow:0,o,a=[];if(n!=null)return Ap(t,(n+s)%7,r,"day");for(o=0;o<7;o++)a[o]=Ap(t,(o+s)%7,r,"day");return a}function cQ(e,t){return UR(e,t,"months")}function hQ(e,t){return UR(e,t,"monthsShort")}function dQ(e,t,n){return US(e,t,n,"weekdays")}function fQ(e,t,n){return US(e,t,n,"weekdaysShort")}function pQ(e,t,n){return US(e,t,n,"weekdaysMin")}Ys("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=Re(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});te.lang=Cr("moment.lang is deprecated. Use moment.locale instead.",Ys);te.langData=Cr("moment.langData is deprecated. Use moment.localeData instead.",is);var ki=Math.abs;function mQ(){var e=this._data;return this._milliseconds=ki(this._milliseconds),this._days=ki(this._days),this._months=ki(this._months),e.milliseconds=ki(e.milliseconds),e.seconds=ki(e.seconds),e.minutes=ki(e.minutes),e.hours=ki(e.hours),e.months=ki(e.months),e.years=ki(e.years),this}function BR(e,t,n,r){var i=jr(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function gQ(e,t){return BR(this,e,t,1)}function yQ(e,t){return BR(this,e,t,-1)}function yT(e){return e<0?Math.floor(e):Math.ceil(e)}function vQ(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,s,o,a,u;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=yT(v1(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,i=lr(e/1e3),r.seconds=i%60,s=lr(i/60),r.minutes=s%60,o=lr(s/60),r.hours=o%24,t+=lr(o/24),u=lr(VR(t)),n+=u,t-=yT(v1(u)),a=lr(n/12),n%=12,r.days=t,r.months=n,r.years=a,this}function VR(e){return e*4800/146097}function v1(e){return e*146097/4800}function wQ(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=kr(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+VR(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(v1(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function _Q(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+Re(this._months/12)*31536e6:NaN}function ss(e){return function(){return this.as(e)}}var SQ=ss("ms"),EQ=ss("s"),CQ=ss("m"),kQ=ss("h"),xQ=ss("d"),TQ=ss("w"),DQ=ss("M"),IQ=ss("Q"),AQ=ss("y");function bQ(){return jr(this)}function NQ(e){return e=kr(e),this.isValid()?this[e+"s"]():NaN}function da(e){return function(){return this.isValid()?this._data[e]:NaN}}var OQ=da("milliseconds"),RQ=da("seconds"),PQ=da("minutes"),MQ=da("hours"),LQ=da("days"),$Q=da("months"),FQ=da("years");function UQ(){return lr(this.days()/7)}var Ti=Math.round,ja={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function BQ(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function VQ(e,t,n,r){var i=jr(e).abs(),s=Ti(i.as("s")),o=Ti(i.as("m")),a=Ti(i.as("h")),u=Ti(i.as("d")),c=Ti(i.as("M")),d=Ti(i.as("w")),p=Ti(i.as("y")),m=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||o<=1&&["m"]||o<n.m&&["mm",o]||a<=1&&["h"]||a<n.h&&["hh",a]||u<=1&&["d"]||u<n.d&&["dd",u];return n.w!=null&&(m=m||d<=1&&["w"]||d<n.w&&["ww",d]),m=m||c<=1&&["M"]||c<n.M&&["MM",c]||p<=1&&["y"]||["yy",p],m[2]=t,m[3]=+e>0,m[4]=r,BQ.apply(null,m)}function zQ(e){return e===void 0?Ti:typeof e=="function"?(Ti=e,!0):!1}function jQ(e,t){return ja[e]===void 0?!1:t===void 0?ja[e]:(ja[e]=t,e==="s"&&(ja.ss=t-1),!0)}function YQ(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=ja,i,s;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},ja,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),i=this.localeData(),s=VQ(this,!n,r,i),n&&(s=i.pastFuture(+this,s)),i.postformat(s)}var uy=Math.abs;function Ea(e){return(e>0)-(e<0)||+e}function Cg(){if(!this.isValid())return this.localeData().invalidDate();var e=uy(this._milliseconds)/1e3,t=uy(this._days),n=uy(this._months),r,i,s,o,a=this.asSeconds(),u,c,d,p;return a?(r=lr(e/60),i=lr(r/60),e%=60,r%=60,s=lr(n/12),n%=12,o=e?e.toFixed(3).replace(/\.?0+$/,""):"",u=a<0?"-":"",c=Ea(this._months)!==Ea(a)?"-":"",d=Ea(this._days)!==Ea(a)?"-":"",p=Ea(this._milliseconds)!==Ea(a)?"-":"",u+"P"+(s?c+s+"Y":"")+(n?c+n+"M":"")+(t?d+t+"D":"")+(i||r||e?"T":"")+(i?p+i+"H":"")+(r?p+r+"M":"")+(e?p+o+"S":"")):"P0D"}var Ue=Sg.prototype;Ue.isValid=Lq;Ue.abs=mQ;Ue.add=gQ;Ue.subtract=yQ;Ue.as=wQ;Ue.asMilliseconds=SQ;Ue.asSeconds=EQ;Ue.asMinutes=CQ;Ue.asHours=kQ;Ue.asDays=xQ;Ue.asWeeks=TQ;Ue.asMonths=DQ;Ue.asQuarters=IQ;Ue.asYears=AQ;Ue.valueOf=_Q;Ue._bubble=vQ;Ue.clone=bQ;Ue.get=NQ;Ue.milliseconds=OQ;Ue.seconds=RQ;Ue.minutes=PQ;Ue.hours=MQ;Ue.days=LQ;Ue.weeks=UQ;Ue.months=$Q;Ue.years=FQ;Ue.humanize=YQ;Ue.toISOString=Cg;Ue.toString=Cg;Ue.toJSON=Cg;Ue.locale=AR;Ue.localeData=NR;Ue.toIsoString=Cr("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Cg);Ue.lang=bR;de("X",0,0,"unix");de("x",0,0,"valueOf");se("x",yg);se("X",dG);Ze("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});Ze("x",function(e,t,n){n._d=new Date(Re(e))});//! moment.js
te.version="2.29.4";WH(lt);te.fn=K;te.min=Oq;te.max=Rq;te.now=Pq;te.utc=pi;te.unix=lQ;te.months=cQ;te.isDate=Oh;te.locale=Ys;te.invalid=dg;te.duration=jr;te.isMoment=Vr;te.weekdays=dQ;te.parseZone=uQ;te.localeData=is;te.isDuration=cf;te.monthsShort=hQ;te.weekdaysMin=pQ;te.defineLocale=NS;te.updateLocale=uq;te.locales=cq;te.weekdaysShort=fQ;te.normalizeUnits=kr;te.relativeTimeRounding=zQ;te.relativeTimeThreshold=jQ;te.calendarFormat=sK;te.prototype=K;te.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};var BS={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(IT,function(){var n;function r(){return n.apply(null,arguments)}function i(l){n=l}function s(l){return l instanceof Array||Object.prototype.toString.call(l)==="[object Array]"}function o(l){return l!=null&&Object.prototype.toString.call(l)==="[object Object]"}function a(l,h){return Object.prototype.hasOwnProperty.call(l,h)}function u(l){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(l).length===0;var h;for(h in l)if(a(l,h))return!1;return!0}function c(l){return l===void 0}function d(l){return typeof l=="number"||Object.prototype.toString.call(l)==="[object Number]"}function p(l){return l instanceof Date||Object.prototype.toString.call(l)==="[object Date]"}function m(l,h){var f=[],g,E=l.length;for(g=0;g<E;++g)f.push(h(l[g],g));return f}function v(l,h){for(var f in h)a(h,f)&&(l[f]=h[f]);return a(h,"toString")&&(l.toString=h.toString),a(h,"valueOf")&&(l.valueOf=h.valueOf),l}function w(l,h,f,g){return pE(l,h,f,g,!0).utc()}function _(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function x(l){return l._pf==null&&(l._pf=_()),l._pf}var S;Array.prototype.some?S=Array.prototype.some:S=function(l){var h=Object(this),f=h.length>>>0,g;for(g=0;g<f;g++)if(g in h&&l.call(this,h[g],g,h))return!0;return!1};function y(l){if(l._isValid==null){var h=x(l),f=S.call(h.parsedDateParts,function(E){return E!=null}),g=!isNaN(l._d.getTime())&&h.overflow<0&&!h.empty&&!h.invalidEra&&!h.invalidMonth&&!h.invalidWeekday&&!h.weekdayMismatch&&!h.nullInput&&!h.invalidFormat&&!h.userInvalidated&&(!h.meridiem||h.meridiem&&f);if(l._strict&&(g=g&&h.charsLeftOver===0&&h.unusedTokens.length===0&&h.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(l))l._isValid=g;else return g}return l._isValid}function C(l){var h=w(NaN);return l!=null?v(x(h),l):x(h).userInvalidated=!0,h}var T=r.momentProperties=[],A=!1;function O(l,h){var f,g,E,I=T.length;if(c(h._isAMomentObject)||(l._isAMomentObject=h._isAMomentObject),c(h._i)||(l._i=h._i),c(h._f)||(l._f=h._f),c(h._l)||(l._l=h._l),c(h._strict)||(l._strict=h._strict),c(h._tzm)||(l._tzm=h._tzm),c(h._isUTC)||(l._isUTC=h._isUTC),c(h._offset)||(l._offset=h._offset),c(h._pf)||(l._pf=x(h)),c(h._locale)||(l._locale=h._locale),I>0)for(f=0;f<I;f++)g=T[f],E=h[g],c(E)||(l[g]=E);return l}function b(l){O(this,l),this._d=new Date(l._d!=null?l._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),A===!1&&(A=!0,r.updateOffset(this),A=!1)}function N(l){return l instanceof b||l!=null&&l._isAMomentObject!=null}function Z(l){r.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+l)}function F(l,h){var f=!0;return v(function(){if(r.deprecationHandler!=null&&r.deprecationHandler(null,l),f){var g=[],E,I,P,he=arguments.length;for(I=0;I<he;I++){if(E="",typeof arguments[I]=="object"){E+=`
[`+I+"] ";for(P in arguments[0])a(arguments[0],P)&&(E+=P+": "+arguments[0][P]+", ");E=E.slice(0,-2)}else E=arguments[I];g.push(E)}Z(l+`
Arguments: `+Array.prototype.slice.call(g).join("")+`
`+new Error().stack),f=!1}return h.apply(this,arguments)},h)}var j={};function J(l,h){r.deprecationHandler!=null&&r.deprecationHandler(l,h),j[l]||(Z(h),j[l]=!0)}r.suppressDeprecationWarnings=!1,r.deprecationHandler=null;function X(l){return typeof Function!="undefined"&&l instanceof Function||Object.prototype.toString.call(l)==="[object Function]"}function ue(l){var h,f;for(f in l)a(l,f)&&(h=l[f],X(h)?this[f]=h:this["_"+f]=h);this._config=l,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function oe(l,h){var f=v({},l),g;for(g in h)a(h,g)&&(o(l[g])&&o(h[g])?(f[g]={},v(f[g],l[g]),v(f[g],h[g])):h[g]!=null?f[g]=h[g]:delete f[g]);for(g in l)a(l,g)&&!a(h,g)&&o(l[g])&&(f[g]=v({},f[g]));return f}function Te(l){l!=null&&this.set(l)}var ge;Object.keys?ge=Object.keys:ge=function(l){var h,f=[];for(h in l)a(l,h)&&f.push(h);return f};var $={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function z(l,h,f){var g=this._calendar[l]||this._calendar.sameElse;return X(g)?g.call(h,f):g}function R(l,h,f){var g=""+Math.abs(l),E=h-g.length,I=l>=0;return(I?f?"+":"":"-")+Math.pow(10,Math.max(0,E)).toString().substr(1)+g}var ee=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,U=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,B={},Y={};function V(l,h,f,g){var E=g;typeof g=="string"&&(E=function(){return this[g]()}),l&&(Y[l]=E),h&&(Y[h[0]]=function(){return R(E.apply(this,arguments),h[1],h[2])}),f&&(Y[f]=function(){return this.localeData().ordinal(E.apply(this,arguments),l)})}function D(l){return l.match(/\[[\s\S]/)?l.replace(/^\[|\]$/g,""):l.replace(/\\/g,"")}function le(l){var h=l.match(ee),f,g;for(f=0,g=h.length;f<g;f++)Y[h[f]]?h[f]=Y[h[f]]:h[f]=D(h[f]);return function(E){var I="",P;for(P=0;P<g;P++)I+=X(h[P])?h[P].call(E,l):h[P];return I}}function W(l,h){return l.isValid()?(h=we(h,l.localeData()),B[h]=B[h]||le(h),B[h](l)):l.localeData().invalidDate()}function we(l,h){var f=5;function g(E){return h.longDateFormat(E)||E}for(U.lastIndex=0;f>=0&&U.test(l);)l=l.replace(U,g),U.lastIndex=0,f-=1;return l}var me={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Be(l){var h=this._longDateFormat[l],f=this._longDateFormat[l.toUpperCase()];return h||!f?h:(this._longDateFormat[l]=f.match(ee).map(function(g){return g==="MMMM"||g==="MM"||g==="DD"||g==="dddd"?g.slice(1):g}).join(""),this._longDateFormat[l])}var _e="Invalid date";function ne(){return this._invalidDate}var De="%d",ke=/\d{1,2}/;function ct(l){return this._ordinal.replace("%d",l)}var Le={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ft(l,h,f,g){var E=this._relativeTime[f];return X(E)?E(l,h,f,g):E.replace(/%d/i,l)}function po(l,h){var f=this._relativeTime[l>0?"future":"past"];return X(f)?f(h):f.replace(/%s/i,h)}var yt={};function It(l,h){var f=l.toLowerCase();yt[f]=yt[f+"s"]=yt[h]=l}function Wt(l){return typeof l=="string"?yt[l]||yt[l.toLowerCase()]:void 0}function Dn(l){var h={},f,g;for(g in l)a(l,g)&&(f=Wt(g),f&&(h[f]=l[g]));return h}var ye={};function Ne(l,h){ye[l]=h}function Ql(l){var h=[],f;for(f in l)a(l,f)&&h.push({unit:f,priority:ye[f]});return h.sort(function(g,E){return g.priority-E.priority}),h}function os(l){return l%4===0&&l%100!==0||l%400===0}function At(l){return l<0?Math.ceil(l)||0:Math.floor(l)}function Oe(l){var h=+l,f=0;return h!==0&&isFinite(h)&&(f=At(h)),f}function fa(l,h){return function(f){return f!=null?(qS(this,l,f),r.updateOffset(this,h),this):$h(this,l)}}function $h(l,h){return l.isValid()?l._d["get"+(l._isUTC?"UTC":"")+h]():NaN}function qS(l,h,f){l.isValid()&&!isNaN(f)&&(h==="FullYear"&&os(l.year())&&l.month()===1&&l.date()===29?(f=Oe(f),l._d["set"+(l._isUTC?"UTC":"")+h](f,l.month(),Yh(f,l.month()))):l._d["set"+(l._isUTC?"UTC":"")+h](f))}function rP(l){return l=Wt(l),X(this[l])?this[l]():this}function iP(l,h){if(typeof l=="object"){l=Dn(l);var f=Ql(l),g,E=f.length;for(g=0;g<E;g++)this[f[g].unit](l[f[g].unit])}else if(l=Wt(l),X(this[l]))return this[l](h);return this}var KS=/\d/,Yn=/\d\d/,QS=/\d{3}/,Ag=/\d{4}/,Fh=/[+-]?\d{6}/,rt=/\d\d?/,XS=/\d\d\d\d?/,JS=/\d\d\d\d\d\d?/,Uh=/\d{1,3}/,bg=/\d{1,4}/,Bh=/[+-]?\d{1,6}/,pa=/\d+/,Vh=/[+-]?\d+/,sP=/Z|[+-]\d\d:?\d\d/gi,zh=/Z|[+-]\d\d(?::?\d\d)?/gi,oP=/[+-]?\d+(\.\d{1,3})?/,Xl=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,jh;jh={};function ie(l,h,f){jh[l]=X(h)?h:function(g,E){return g&&f?f:h}}function aP(l,h){return a(jh,l)?jh[l](h._strict,h._locale):new RegExp(lP(l))}function lP(l){return Wn(l.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(h,f,g,E,I){return f||g||E||I}))}function Wn(l){return l.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Ng={};function Xe(l,h){var f,g=h,E;for(typeof l=="string"&&(l=[l]),d(h)&&(g=function(I,P){P[h]=Oe(I)}),E=l.length,f=0;f<E;f++)Ng[l[f]]=g}function Jl(l,h){Xe(l,function(f,g,E,I){E._w=E._w||{},h(f,E._w,E,I)})}function uP(l,h,f){h!=null&&a(Ng,l)&&Ng[l](h,f._a,f,l)}var ln=0,gi=1,Yr=2,Ut=3,xr=4,yi=5,mo=6,cP=7,hP=8;function dP(l,h){return(l%h+h)%h}var bt;Array.prototype.indexOf?bt=Array.prototype.indexOf:bt=function(l){var h;for(h=0;h<this.length;++h)if(this[h]===l)return h;return-1};function Yh(l,h){if(isNaN(l)||isNaN(h))return NaN;var f=dP(h,12);return l+=(h-f)/12,f===1?os(l)?29:28:31-f%7%2}V("M",["MM",2],"Mo",function(){return this.month()+1}),V("MMM",0,0,function(l){return this.localeData().monthsShort(this,l)}),V("MMMM",0,0,function(l){return this.localeData().months(this,l)}),It("month","M"),Ne("month",8),ie("M",rt),ie("MM",rt,Yn),ie("MMM",function(l,h){return h.monthsShortRegex(l)}),ie("MMMM",function(l,h){return h.monthsRegex(l)}),Xe(["M","MM"],function(l,h){h[gi]=Oe(l)-1}),Xe(["MMM","MMMM"],function(l,h,f,g){var E=f._locale.monthsParse(l,g,f._strict);E!=null?h[gi]=E:x(f).invalidMonth=l});var fP="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ZS="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),eE=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,pP=Xl,mP=Xl;function gP(l,h){return l?s(this._months)?this._months[l.month()]:this._months[(this._months.isFormat||eE).test(h)?"format":"standalone"][l.month()]:s(this._months)?this._months:this._months.standalone}function yP(l,h){return l?s(this._monthsShort)?this._monthsShort[l.month()]:this._monthsShort[eE.test(h)?"format":"standalone"][l.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function vP(l,h,f){var g,E,I,P=l.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],g=0;g<12;++g)I=w([2e3,g]),this._shortMonthsParse[g]=this.monthsShort(I,"").toLocaleLowerCase(),this._longMonthsParse[g]=this.months(I,"").toLocaleLowerCase();return f?h==="MMM"?(E=bt.call(this._shortMonthsParse,P),E!==-1?E:null):(E=bt.call(this._longMonthsParse,P),E!==-1?E:null):h==="MMM"?(E=bt.call(this._shortMonthsParse,P),E!==-1?E:(E=bt.call(this._longMonthsParse,P),E!==-1?E:null)):(E=bt.call(this._longMonthsParse,P),E!==-1?E:(E=bt.call(this._shortMonthsParse,P),E!==-1?E:null))}function wP(l,h,f){var g,E,I;if(this._monthsParseExact)return vP.call(this,l,h,f);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),g=0;g<12;g++){if(E=w([2e3,g]),f&&!this._longMonthsParse[g]&&(this._longMonthsParse[g]=new RegExp("^"+this.months(E,"").replace(".","")+"$","i"),this._shortMonthsParse[g]=new RegExp("^"+this.monthsShort(E,"").replace(".","")+"$","i")),!f&&!this._monthsParse[g]&&(I="^"+this.months(E,"")+"|^"+this.monthsShort(E,""),this._monthsParse[g]=new RegExp(I.replace(".",""),"i")),f&&h==="MMMM"&&this._longMonthsParse[g].test(l))return g;if(f&&h==="MMM"&&this._shortMonthsParse[g].test(l))return g;if(!f&&this._monthsParse[g].test(l))return g}}function tE(l,h){var f;if(!l.isValid())return l;if(typeof h=="string"){if(/^\d+$/.test(h))h=Oe(h);else if(h=l.localeData().monthsParse(h),!d(h))return l}return f=Math.min(l.date(),Yh(l.year(),h)),l._d["set"+(l._isUTC?"UTC":"")+"Month"](h,f),l}function nE(l){return l!=null?(tE(this,l),r.updateOffset(this,!0),this):$h(this,"Month")}function _P(){return Yh(this.year(),this.month())}function SP(l){return this._monthsParseExact?(a(this,"_monthsRegex")||rE.call(this),l?this._monthsShortStrictRegex:this._monthsShortRegex):(a(this,"_monthsShortRegex")||(this._monthsShortRegex=pP),this._monthsShortStrictRegex&&l?this._monthsShortStrictRegex:this._monthsShortRegex)}function EP(l){return this._monthsParseExact?(a(this,"_monthsRegex")||rE.call(this),l?this._monthsStrictRegex:this._monthsRegex):(a(this,"_monthsRegex")||(this._monthsRegex=mP),this._monthsStrictRegex&&l?this._monthsStrictRegex:this._monthsRegex)}function rE(){function l(P,he){return he.length-P.length}var h=[],f=[],g=[],E,I;for(E=0;E<12;E++)I=w([2e3,E]),h.push(this.monthsShort(I,"")),f.push(this.months(I,"")),g.push(this.months(I,"")),g.push(this.monthsShort(I,""));for(h.sort(l),f.sort(l),g.sort(l),E=0;E<12;E++)h[E]=Wn(h[E]),f[E]=Wn(f[E]);for(E=0;E<24;E++)g[E]=Wn(g[E]);this._monthsRegex=new RegExp("^("+g.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+h.join("|")+")","i")}V("Y",0,0,function(){var l=this.year();return l<=9999?R(l,4):"+"+l}),V(0,["YY",2],0,function(){return this.year()%100}),V(0,["YYYY",4],0,"year"),V(0,["YYYYY",5],0,"year"),V(0,["YYYYYY",6,!0],0,"year"),It("year","y"),Ne("year",1),ie("Y",Vh),ie("YY",rt,Yn),ie("YYYY",bg,Ag),ie("YYYYY",Bh,Fh),ie("YYYYYY",Bh,Fh),Xe(["YYYYY","YYYYYY"],ln),Xe("YYYY",function(l,h){h[ln]=l.length===2?r.parseTwoDigitYear(l):Oe(l)}),Xe("YY",function(l,h){h[ln]=r.parseTwoDigitYear(l)}),Xe("Y",function(l,h){h[ln]=parseInt(l,10)});function Zl(l){return os(l)?366:365}r.parseTwoDigitYear=function(l){return Oe(l)+(Oe(l)>68?1900:2e3)};var iE=fa("FullYear",!0);function CP(){return os(this.year())}function kP(l,h,f,g,E,I,P){var he;return l<100&&l>=0?(he=new Date(l+400,h,f,g,E,I,P),isFinite(he.getFullYear())&&he.setFullYear(l)):he=new Date(l,h,f,g,E,I,P),he}function eu(l){var h,f;return l<100&&l>=0?(f=Array.prototype.slice.call(arguments),f[0]=l+400,h=new Date(Date.UTC.apply(null,f)),isFinite(h.getUTCFullYear())&&h.setUTCFullYear(l)):h=new Date(Date.UTC.apply(null,arguments)),h}function Wh(l,h,f){var g=7+h-f,E=(7+eu(l,0,g).getUTCDay()-h)%7;return-E+g-1}function sE(l,h,f,g,E){var I=(7+f-g)%7,P=Wh(l,g,E),he=1+7*(h-1)+I+P,be,Je;return he<=0?(be=l-1,Je=Zl(be)+he):he>Zl(l)?(be=l+1,Je=he-Zl(l)):(be=l,Je=he),{year:be,dayOfYear:Je}}function tu(l,h,f){var g=Wh(l.year(),h,f),E=Math.floor((l.dayOfYear()-g-1)/7)+1,I,P;return E<1?(P=l.year()-1,I=E+vi(P,h,f)):E>vi(l.year(),h,f)?(I=E-vi(l.year(),h,f),P=l.year()+1):(P=l.year(),I=E),{week:I,year:P}}function vi(l,h,f){var g=Wh(l,h,f),E=Wh(l+1,h,f);return(Zl(l)-g+E)/7}V("w",["ww",2],"wo","week"),V("W",["WW",2],"Wo","isoWeek"),It("week","w"),It("isoWeek","W"),Ne("week",5),Ne("isoWeek",5),ie("w",rt),ie("ww",rt,Yn),ie("W",rt),ie("WW",rt,Yn),Jl(["w","ww","W","WW"],function(l,h,f,g){h[g.substr(0,1)]=Oe(l)});function xP(l){return tu(l,this._week.dow,this._week.doy).week}var TP={dow:0,doy:6};function DP(){return this._week.dow}function IP(){return this._week.doy}function AP(l){var h=this.localeData().week(this);return l==null?h:this.add((l-h)*7,"d")}function bP(l){var h=tu(this,1,4).week;return l==null?h:this.add((l-h)*7,"d")}V("d",0,"do","day"),V("dd",0,0,function(l){return this.localeData().weekdaysMin(this,l)}),V("ddd",0,0,function(l){return this.localeData().weekdaysShort(this,l)}),V("dddd",0,0,function(l){return this.localeData().weekdays(this,l)}),V("e",0,0,"weekday"),V("E",0,0,"isoWeekday"),It("day","d"),It("weekday","e"),It("isoWeekday","E"),Ne("day",11),Ne("weekday",11),Ne("isoWeekday",11),ie("d",rt),ie("e",rt),ie("E",rt),ie("dd",function(l,h){return h.weekdaysMinRegex(l)}),ie("ddd",function(l,h){return h.weekdaysShortRegex(l)}),ie("dddd",function(l,h){return h.weekdaysRegex(l)}),Jl(["dd","ddd","dddd"],function(l,h,f,g){var E=f._locale.weekdaysParse(l,g,f._strict);E!=null?h.d=E:x(f).invalidWeekday=l}),Jl(["d","e","E"],function(l,h,f,g){h[g]=Oe(l)});function NP(l,h){return typeof l!="string"?l:isNaN(l)?(l=h.weekdaysParse(l),typeof l=="number"?l:null):parseInt(l,10)}function OP(l,h){return typeof l=="string"?h.weekdaysParse(l)%7||7:isNaN(l)?null:l}function Og(l,h){return l.slice(h,7).concat(l.slice(0,h))}var RP="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),oE="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),PP="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),MP=Xl,LP=Xl,$P=Xl;function FP(l,h){var f=s(this._weekdays)?this._weekdays:this._weekdays[l&&l!==!0&&this._weekdays.isFormat.test(h)?"format":"standalone"];return l===!0?Og(f,this._week.dow):l?f[l.day()]:f}function UP(l){return l===!0?Og(this._weekdaysShort,this._week.dow):l?this._weekdaysShort[l.day()]:this._weekdaysShort}function BP(l){return l===!0?Og(this._weekdaysMin,this._week.dow):l?this._weekdaysMin[l.day()]:this._weekdaysMin}function VP(l,h,f){var g,E,I,P=l.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],g=0;g<7;++g)I=w([2e3,1]).day(g),this._minWeekdaysParse[g]=this.weekdaysMin(I,"").toLocaleLowerCase(),this._shortWeekdaysParse[g]=this.weekdaysShort(I,"").toLocaleLowerCase(),this._weekdaysParse[g]=this.weekdays(I,"").toLocaleLowerCase();return f?h==="dddd"?(E=bt.call(this._weekdaysParse,P),E!==-1?E:null):h==="ddd"?(E=bt.call(this._shortWeekdaysParse,P),E!==-1?E:null):(E=bt.call(this._minWeekdaysParse,P),E!==-1?E:null):h==="dddd"?(E=bt.call(this._weekdaysParse,P),E!==-1||(E=bt.call(this._shortWeekdaysParse,P),E!==-1)?E:(E=bt.call(this._minWeekdaysParse,P),E!==-1?E:null)):h==="ddd"?(E=bt.call(this._shortWeekdaysParse,P),E!==-1||(E=bt.call(this._weekdaysParse,P),E!==-1)?E:(E=bt.call(this._minWeekdaysParse,P),E!==-1?E:null)):(E=bt.call(this._minWeekdaysParse,P),E!==-1||(E=bt.call(this._weekdaysParse,P),E!==-1)?E:(E=bt.call(this._shortWeekdaysParse,P),E!==-1?E:null))}function zP(l,h,f){var g,E,I;if(this._weekdaysParseExact)return VP.call(this,l,h,f);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),g=0;g<7;g++){if(E=w([2e3,1]).day(g),f&&!this._fullWeekdaysParse[g]&&(this._fullWeekdaysParse[g]=new RegExp("^"+this.weekdays(E,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[g]=new RegExp("^"+this.weekdaysShort(E,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[g]=new RegExp("^"+this.weekdaysMin(E,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[g]||(I="^"+this.weekdays(E,"")+"|^"+this.weekdaysShort(E,"")+"|^"+this.weekdaysMin(E,""),this._weekdaysParse[g]=new RegExp(I.replace(".",""),"i")),f&&h==="dddd"&&this._fullWeekdaysParse[g].test(l))return g;if(f&&h==="ddd"&&this._shortWeekdaysParse[g].test(l))return g;if(f&&h==="dd"&&this._minWeekdaysParse[g].test(l))return g;if(!f&&this._weekdaysParse[g].test(l))return g}}function jP(l){if(!this.isValid())return l!=null?this:NaN;var h=this._isUTC?this._d.getUTCDay():this._d.getDay();return l!=null?(l=NP(l,this.localeData()),this.add(l-h,"d")):h}function YP(l){if(!this.isValid())return l!=null?this:NaN;var h=(this.day()+7-this.localeData()._week.dow)%7;return l==null?h:this.add(l-h,"d")}function WP(l){if(!this.isValid())return l!=null?this:NaN;if(l!=null){var h=OP(l,this.localeData());return this.day(this.day()%7?h:h-7)}else return this.day()||7}function HP(l){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Rg.call(this),l?this._weekdaysStrictRegex:this._weekdaysRegex):(a(this,"_weekdaysRegex")||(this._weekdaysRegex=MP),this._weekdaysStrictRegex&&l?this._weekdaysStrictRegex:this._weekdaysRegex)}function GP(l){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Rg.call(this),l?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(a(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=LP),this._weekdaysShortStrictRegex&&l?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function qP(l){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Rg.call(this),l?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(a(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=$P),this._weekdaysMinStrictRegex&&l?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Rg(){function l(In,Ci){return Ci.length-In.length}var h=[],f=[],g=[],E=[],I,P,he,be,Je;for(I=0;I<7;I++)P=w([2e3,1]).day(I),he=Wn(this.weekdaysMin(P,"")),be=Wn(this.weekdaysShort(P,"")),Je=Wn(this.weekdays(P,"")),h.push(he),f.push(be),g.push(Je),E.push(he),E.push(be),E.push(Je);h.sort(l),f.sort(l),g.sort(l),E.sort(l),this._weekdaysRegex=new RegExp("^("+E.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+g.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+f.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+h.join("|")+")","i")}function Pg(){return this.hours()%12||12}function KP(){return this.hours()||24}V("H",["HH",2],0,"hour"),V("h",["hh",2],0,Pg),V("k",["kk",2],0,KP),V("hmm",0,0,function(){return""+Pg.apply(this)+R(this.minutes(),2)}),V("hmmss",0,0,function(){return""+Pg.apply(this)+R(this.minutes(),2)+R(this.seconds(),2)}),V("Hmm",0,0,function(){return""+this.hours()+R(this.minutes(),2)}),V("Hmmss",0,0,function(){return""+this.hours()+R(this.minutes(),2)+R(this.seconds(),2)});function aE(l,h){V(l,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),h)})}aE("a",!0),aE("A",!1),It("hour","h"),Ne("hour",13);function lE(l,h){return h._meridiemParse}ie("a",lE),ie("A",lE),ie("H",rt),ie("h",rt),ie("k",rt),ie("HH",rt,Yn),ie("hh",rt,Yn),ie("kk",rt,Yn),ie("hmm",XS),ie("hmmss",JS),ie("Hmm",XS),ie("Hmmss",JS),Xe(["H","HH"],Ut),Xe(["k","kk"],function(l,h,f){var g=Oe(l);h[Ut]=g===24?0:g}),Xe(["a","A"],function(l,h,f){f._isPm=f._locale.isPM(l),f._meridiem=l}),Xe(["h","hh"],function(l,h,f){h[Ut]=Oe(l),x(f).bigHour=!0}),Xe("hmm",function(l,h,f){var g=l.length-2;h[Ut]=Oe(l.substr(0,g)),h[xr]=Oe(l.substr(g)),x(f).bigHour=!0}),Xe("hmmss",function(l,h,f){var g=l.length-4,E=l.length-2;h[Ut]=Oe(l.substr(0,g)),h[xr]=Oe(l.substr(g,2)),h[yi]=Oe(l.substr(E)),x(f).bigHour=!0}),Xe("Hmm",function(l,h,f){var g=l.length-2;h[Ut]=Oe(l.substr(0,g)),h[xr]=Oe(l.substr(g))}),Xe("Hmmss",function(l,h,f){var g=l.length-4,E=l.length-2;h[Ut]=Oe(l.substr(0,g)),h[xr]=Oe(l.substr(g,2)),h[yi]=Oe(l.substr(E))});function QP(l){return(l+"").toLowerCase().charAt(0)==="p"}var XP=/[ap]\.?m?\.?/i,JP=fa("Hours",!0);function ZP(l,h,f){return l>11?f?"pm":"PM":f?"am":"AM"}var uE={calendar:$,longDateFormat:me,invalidDate:_e,ordinal:De,dayOfMonthOrdinalParse:ke,relativeTime:Le,months:fP,monthsShort:ZS,week:TP,weekdays:RP,weekdaysMin:PP,weekdaysShort:oE,meridiemParse:XP},ht={},nu={},ru;function eM(l,h){var f,g=Math.min(l.length,h.length);for(f=0;f<g;f+=1)if(l[f]!==h[f])return f;return g}function cE(l){return l&&l.toLowerCase().replace("_","-")}function tM(l){for(var h=0,f,g,E,I;h<l.length;){for(I=cE(l[h]).split("-"),f=I.length,g=cE(l[h+1]),g=g?g.split("-"):null;f>0;){if(E=Hh(I.slice(0,f).join("-")),E)return E;if(g&&g.length>=f&&eM(I,g)>=f-1)break;f--}h++}return ru}function nM(l){return l.match("^[^/\\\\]*$")!=null}function Hh(l){var h=null,f;if(ht[l]===void 0&&!0&&e&&e.exports&&nM(l))try{h=ru._abbr,f=AT,f("./locale/"+l),as(h)}catch{ht[l]=null}return ht[l]}function as(l,h){var f;return l&&(c(h)?f=wi(l):f=Mg(l,h),f?ru=f:typeof console!="undefined"&&console.warn&&console.warn("Locale "+l+" not found. Did you forget to load it?")),ru._abbr}function Mg(l,h){if(h!==null){var f,g=uE;if(h.abbr=l,ht[l]!=null)J("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),g=ht[l]._config;else if(h.parentLocale!=null)if(ht[h.parentLocale]!=null)g=ht[h.parentLocale]._config;else if(f=Hh(h.parentLocale),f!=null)g=f._config;else return nu[h.parentLocale]||(nu[h.parentLocale]=[]),nu[h.parentLocale].push({name:l,config:h}),null;return ht[l]=new Te(oe(g,h)),nu[l]&&nu[l].forEach(function(E){Mg(E.name,E.config)}),as(l),ht[l]}else return delete ht[l],null}function rM(l,h){if(h!=null){var f,g,E=uE;ht[l]!=null&&ht[l].parentLocale!=null?ht[l].set(oe(ht[l]._config,h)):(g=Hh(l),g!=null&&(E=g._config),h=oe(E,h),g==null&&(h.abbr=l),f=new Te(h),f.parentLocale=ht[l],ht[l]=f),as(l)}else ht[l]!=null&&(ht[l].parentLocale!=null?(ht[l]=ht[l].parentLocale,l===as()&&as(l)):ht[l]!=null&&delete ht[l]);return ht[l]}function wi(l){var h;if(l&&l._locale&&l._locale._abbr&&(l=l._locale._abbr),!l)return ru;if(!s(l)){if(h=Hh(l),h)return h;l=[l]}return tM(l)}function iM(){return ge(ht)}function Lg(l){var h,f=l._a;return f&&x(l).overflow===-2&&(h=f[gi]<0||f[gi]>11?gi:f[Yr]<1||f[Yr]>Yh(f[ln],f[gi])?Yr:f[Ut]<0||f[Ut]>24||f[Ut]===24&&(f[xr]!==0||f[yi]!==0||f[mo]!==0)?Ut:f[xr]<0||f[xr]>59?xr:f[yi]<0||f[yi]>59?yi:f[mo]<0||f[mo]>999?mo:-1,x(l)._overflowDayOfYear&&(h<ln||h>Yr)&&(h=Yr),x(l)._overflowWeeks&&h===-1&&(h=cP),x(l)._overflowWeekday&&h===-1&&(h=hP),x(l).overflow=h),l}var sM=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,oM=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,aM=/Z|[+-]\d\d(?::?\d\d)?/,Gh=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],$g=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],lM=/^\/?Date\((-?\d+)/i,uM=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,cM={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function hE(l){var h,f,g=l._i,E=sM.exec(g)||oM.exec(g),I,P,he,be,Je=Gh.length,In=$g.length;if(E){for(x(l).iso=!0,h=0,f=Je;h<f;h++)if(Gh[h][1].exec(E[1])){P=Gh[h][0],I=Gh[h][2]!==!1;break}if(P==null){l._isValid=!1;return}if(E[3]){for(h=0,f=In;h<f;h++)if($g[h][1].exec(E[3])){he=(E[2]||" ")+$g[h][0];break}if(he==null){l._isValid=!1;return}}if(!I&&he!=null){l._isValid=!1;return}if(E[4])if(aM.exec(E[4]))be="Z";else{l._isValid=!1;return}l._f=P+(he||"")+(be||""),Ug(l)}else l._isValid=!1}function hM(l,h,f,g,E,I){var P=[dM(l),ZS.indexOf(h),parseInt(f,10),parseInt(g,10),parseInt(E,10)];return I&&P.push(parseInt(I,10)),P}function dM(l){var h=parseInt(l,10);return h<=49?2e3+h:h<=999?1900+h:h}function fM(l){return l.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function pM(l,h,f){if(l){var g=oE.indexOf(l),E=new Date(h[0],h[1],h[2]).getDay();if(g!==E)return x(f).weekdayMismatch=!0,f._isValid=!1,!1}return!0}function mM(l,h,f){if(l)return cM[l];if(h)return 0;var g=parseInt(f,10),E=g%100,I=(g-E)/100;return I*60+E}function dE(l){var h=uM.exec(fM(l._i)),f;if(h){if(f=hM(h[4],h[3],h[2],h[5],h[6],h[7]),!pM(h[1],f,l))return;l._a=f,l._tzm=mM(h[8],h[9],h[10]),l._d=eu.apply(null,l._a),l._d.setUTCMinutes(l._d.getUTCMinutes()-l._tzm),x(l).rfc2822=!0}else l._isValid=!1}function gM(l){var h=lM.exec(l._i);if(h!==null){l._d=new Date(+h[1]);return}if(hE(l),l._isValid===!1)delete l._isValid;else return;if(dE(l),l._isValid===!1)delete l._isValid;else return;l._strict?l._isValid=!1:r.createFromInputFallback(l)}r.createFromInputFallback=F("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(l){l._d=new Date(l._i+(l._useUTC?" UTC":""))});function ma(l,h,f){return l!=null?l:h!=null?h:f}function yM(l){var h=new Date(r.now());return l._useUTC?[h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate()]:[h.getFullYear(),h.getMonth(),h.getDate()]}function Fg(l){var h,f,g=[],E,I,P;if(!l._d){for(E=yM(l),l._w&&l._a[Yr]==null&&l._a[gi]==null&&vM(l),l._dayOfYear!=null&&(P=ma(l._a[ln],E[ln]),(l._dayOfYear>Zl(P)||l._dayOfYear===0)&&(x(l)._overflowDayOfYear=!0),f=eu(P,0,l._dayOfYear),l._a[gi]=f.getUTCMonth(),l._a[Yr]=f.getUTCDate()),h=0;h<3&&l._a[h]==null;++h)l._a[h]=g[h]=E[h];for(;h<7;h++)l._a[h]=g[h]=l._a[h]==null?h===2?1:0:l._a[h];l._a[Ut]===24&&l._a[xr]===0&&l._a[yi]===0&&l._a[mo]===0&&(l._nextDay=!0,l._a[Ut]=0),l._d=(l._useUTC?eu:kP).apply(null,g),I=l._useUTC?l._d.getUTCDay():l._d.getDay(),l._tzm!=null&&l._d.setUTCMinutes(l._d.getUTCMinutes()-l._tzm),l._nextDay&&(l._a[Ut]=24),l._w&&typeof l._w.d!="undefined"&&l._w.d!==I&&(x(l).weekdayMismatch=!0)}}function vM(l){var h,f,g,E,I,P,he,be,Je;h=l._w,h.GG!=null||h.W!=null||h.E!=null?(I=1,P=4,f=ma(h.GG,l._a[ln],tu(it(),1,4).year),g=ma(h.W,1),E=ma(h.E,1),(E<1||E>7)&&(be=!0)):(I=l._locale._week.dow,P=l._locale._week.doy,Je=tu(it(),I,P),f=ma(h.gg,l._a[ln],Je.year),g=ma(h.w,Je.week),h.d!=null?(E=h.d,(E<0||E>6)&&(be=!0)):h.e!=null?(E=h.e+I,(h.e<0||h.e>6)&&(be=!0)):E=I),g<1||g>vi(f,I,P)?x(l)._overflowWeeks=!0:be!=null?x(l)._overflowWeekday=!0:(he=sE(f,g,E,I,P),l._a[ln]=he.year,l._dayOfYear=he.dayOfYear)}r.ISO_8601=function(){},r.RFC_2822=function(){};function Ug(l){if(l._f===r.ISO_8601){hE(l);return}if(l._f===r.RFC_2822){dE(l);return}l._a=[],x(l).empty=!0;var h=""+l._i,f,g,E,I,P,he=h.length,be=0,Je,In;for(E=we(l._f,l._locale).match(ee)||[],In=E.length,f=0;f<In;f++)I=E[f],g=(h.match(aP(I,l))||[])[0],g&&(P=h.substr(0,h.indexOf(g)),P.length>0&&x(l).unusedInput.push(P),h=h.slice(h.indexOf(g)+g.length),be+=g.length),Y[I]?(g?x(l).empty=!1:x(l).unusedTokens.push(I),uP(I,g,l)):l._strict&&!g&&x(l).unusedTokens.push(I);x(l).charsLeftOver=he-be,h.length>0&&x(l).unusedInput.push(h),l._a[Ut]<=12&&x(l).bigHour===!0&&l._a[Ut]>0&&(x(l).bigHour=void 0),x(l).parsedDateParts=l._a.slice(0),x(l).meridiem=l._meridiem,l._a[Ut]=wM(l._locale,l._a[Ut],l._meridiem),Je=x(l).era,Je!==null&&(l._a[ln]=l._locale.erasConvertYear(Je,l._a[ln])),Fg(l),Lg(l)}function wM(l,h,f){var g;return f==null?h:l.meridiemHour!=null?l.meridiemHour(h,f):(l.isPM!=null&&(g=l.isPM(f),g&&h<12&&(h+=12),!g&&h===12&&(h=0)),h)}function _M(l){var h,f,g,E,I,P,he=!1,be=l._f.length;if(be===0){x(l).invalidFormat=!0,l._d=new Date(NaN);return}for(E=0;E<be;E++)I=0,P=!1,h=O({},l),l._useUTC!=null&&(h._useUTC=l._useUTC),h._f=l._f[E],Ug(h),y(h)&&(P=!0),I+=x(h).charsLeftOver,I+=x(h).unusedTokens.length*10,x(h).score=I,he?I<g&&(g=I,f=h):(g==null||I<g||P)&&(g=I,f=h,P&&(he=!0));v(l,f||h)}function SM(l){if(!l._d){var h=Dn(l._i),f=h.day===void 0?h.date:h.day;l._a=m([h.year,h.month,f,h.hour,h.minute,h.second,h.millisecond],function(g){return g&&parseInt(g,10)}),Fg(l)}}function EM(l){var h=new b(Lg(fE(l)));return h._nextDay&&(h.add(1,"d"),h._nextDay=void 0),h}function fE(l){var h=l._i,f=l._f;return l._locale=l._locale||wi(l._l),h===null||f===void 0&&h===""?C({nullInput:!0}):(typeof h=="string"&&(l._i=h=l._locale.preparse(h)),N(h)?new b(Lg(h)):(p(h)?l._d=h:s(f)?_M(l):f?Ug(l):CM(l),y(l)||(l._d=null),l))}function CM(l){var h=l._i;c(h)?l._d=new Date(r.now()):p(h)?l._d=new Date(h.valueOf()):typeof h=="string"?gM(l):s(h)?(l._a=m(h.slice(0),function(f){return parseInt(f,10)}),Fg(l)):o(h)?SM(l):d(h)?l._d=new Date(h):r.createFromInputFallback(l)}function pE(l,h,f,g,E){var I={};return(h===!0||h===!1)&&(g=h,h=void 0),(f===!0||f===!1)&&(g=f,f=void 0),(o(l)&&u(l)||s(l)&&l.length===0)&&(l=void 0),I._isAMomentObject=!0,I._useUTC=I._isUTC=E,I._l=f,I._i=l,I._f=h,I._strict=g,EM(I)}function it(l,h,f,g){return pE(l,h,f,g,!1)}var kM=F("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var l=it.apply(null,arguments);return this.isValid()&&l.isValid()?l<this?this:l:C()}),xM=F("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var l=it.apply(null,arguments);return this.isValid()&&l.isValid()?l>this?this:l:C()});function mE(l,h){var f,g;if(h.length===1&&s(h[0])&&(h=h[0]),!h.length)return it();for(f=h[0],g=1;g<h.length;++g)(!h[g].isValid()||h[g][l](f))&&(f=h[g]);return f}function TM(){var l=[].slice.call(arguments,0);return mE("isBefore",l)}function DM(){var l=[].slice.call(arguments,0);return mE("isAfter",l)}var IM=function(){return Date.now?Date.now():+new Date},iu=["year","quarter","month","week","day","hour","minute","second","millisecond"];function AM(l){var h,f=!1,g,E=iu.length;for(h in l)if(a(l,h)&&!(bt.call(iu,h)!==-1&&(l[h]==null||!isNaN(l[h]))))return!1;for(g=0;g<E;++g)if(l[iu[g]]){if(f)return!1;parseFloat(l[iu[g]])!==Oe(l[iu[g]])&&(f=!0)}return!0}function bM(){return this._isValid}function NM(){return Tr(NaN)}function qh(l){var h=Dn(l),f=h.year||0,g=h.quarter||0,E=h.month||0,I=h.week||h.isoWeek||0,P=h.day||0,he=h.hour||0,be=h.minute||0,Je=h.second||0,In=h.millisecond||0;this._isValid=AM(h),this._milliseconds=+In+Je*1e3+be*6e4+he*1e3*60*60,this._days=+P+I*7,this._months=+E+g*3+f*12,this._data={},this._locale=wi(),this._bubble()}function Kh(l){return l instanceof qh}function Bg(l){return l<0?Math.round(-1*l)*-1:Math.round(l)}function OM(l,h,f){var g=Math.min(l.length,h.length),E=Math.abs(l.length-h.length),I=0,P;for(P=0;P<g;P++)(f&&l[P]!==h[P]||!f&&Oe(l[P])!==Oe(h[P]))&&I++;return I+E}function gE(l,h){V(l,0,0,function(){var f=this.utcOffset(),g="+";return f<0&&(f=-f,g="-"),g+R(~~(f/60),2)+h+R(~~f%60,2)})}gE("Z",":"),gE("ZZ",""),ie("Z",zh),ie("ZZ",zh),Xe(["Z","ZZ"],function(l,h,f){f._useUTC=!0,f._tzm=Vg(zh,l)});var RM=/([\+\-]|\d\d)/gi;function Vg(l,h){var f=(h||"").match(l),g,E,I;return f===null?null:(g=f[f.length-1]||[],E=(g+"").match(RM)||["-",0,0],I=+(E[1]*60)+Oe(E[2]),I===0?0:E[0]==="+"?I:-I)}function zg(l,h){var f,g;return h._isUTC?(f=h.clone(),g=(N(l)||p(l)?l.valueOf():it(l).valueOf())-f.valueOf(),f._d.setTime(f._d.valueOf()+g),r.updateOffset(f,!1),f):it(l).local()}function jg(l){return-Math.round(l._d.getTimezoneOffset())}r.updateOffset=function(){};function PM(l,h,f){var g=this._offset||0,E;if(!this.isValid())return l!=null?this:NaN;if(l!=null){if(typeof l=="string"){if(l=Vg(zh,l),l===null)return this}else Math.abs(l)<16&&!f&&(l=l*60);return!this._isUTC&&h&&(E=jg(this)),this._offset=l,this._isUTC=!0,E!=null&&this.add(E,"m"),g!==l&&(!h||this._changeInProgress?_E(this,Tr(l-g,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,r.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?g:jg(this)}function MM(l,h){return l!=null?(typeof l!="string"&&(l=-l),this.utcOffset(l,h),this):-this.utcOffset()}function LM(l){return this.utcOffset(0,l)}function $M(l){return this._isUTC&&(this.utcOffset(0,l),this._isUTC=!1,l&&this.subtract(jg(this),"m")),this}function FM(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var l=Vg(sP,this._i);l!=null?this.utcOffset(l):this.utcOffset(0,!0)}return this}function UM(l){return this.isValid()?(l=l?it(l).utcOffset():0,(this.utcOffset()-l)%60===0):!1}function BM(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function VM(){if(!c(this._isDSTShifted))return this._isDSTShifted;var l={},h;return O(l,this),l=fE(l),l._a?(h=l._isUTC?w(l._a):it(l._a),this._isDSTShifted=this.isValid()&&OM(l._a,h.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function zM(){return this.isValid()?!this._isUTC:!1}function jM(){return this.isValid()?this._isUTC:!1}function yE(){return this.isValid()?this._isUTC&&this._offset===0:!1}var YM=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,WM=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Tr(l,h){var f=l,g=null,E,I,P;return Kh(l)?f={ms:l._milliseconds,d:l._days,M:l._months}:d(l)||!isNaN(+l)?(f={},h?f[h]=+l:f.milliseconds=+l):(g=YM.exec(l))?(E=g[1]==="-"?-1:1,f={y:0,d:Oe(g[Yr])*E,h:Oe(g[Ut])*E,m:Oe(g[xr])*E,s:Oe(g[yi])*E,ms:Oe(Bg(g[mo]*1e3))*E}):(g=WM.exec(l))?(E=g[1]==="-"?-1:1,f={y:go(g[2],E),M:go(g[3],E),w:go(g[4],E),d:go(g[5],E),h:go(g[6],E),m:go(g[7],E),s:go(g[8],E)}):f==null?f={}:typeof f=="object"&&("from"in f||"to"in f)&&(P=HM(it(f.from),it(f.to)),f={},f.ms=P.milliseconds,f.M=P.months),I=new qh(f),Kh(l)&&a(l,"_locale")&&(I._locale=l._locale),Kh(l)&&a(l,"_isValid")&&(I._isValid=l._isValid),I}Tr.fn=qh.prototype,Tr.invalid=NM;function go(l,h){var f=l&&parseFloat(l.replace(",","."));return(isNaN(f)?0:f)*h}function vE(l,h){var f={};return f.months=h.month()-l.month()+(h.year()-l.year())*12,l.clone().add(f.months,"M").isAfter(h)&&--f.months,f.milliseconds=+h-+l.clone().add(f.months,"M"),f}function HM(l,h){var f;return l.isValid()&&h.isValid()?(h=zg(h,l),l.isBefore(h)?f=vE(l,h):(f=vE(h,l),f.milliseconds=-f.milliseconds,f.months=-f.months),f):{milliseconds:0,months:0}}function wE(l,h){return function(f,g){var E,I;return g!==null&&!isNaN(+g)&&(J(h,"moment()."+h+"(period, number) is deprecated. Please use moment()."+h+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),I=f,f=g,g=I),E=Tr(f,g),_E(this,E,l),this}}function _E(l,h,f,g){var E=h._milliseconds,I=Bg(h._days),P=Bg(h._months);!l.isValid()||(g=g==null?!0:g,P&&tE(l,$h(l,"Month")+P*f),I&&qS(l,"Date",$h(l,"Date")+I*f),E&&l._d.setTime(l._d.valueOf()+E*f),g&&r.updateOffset(l,I||P))}var GM=wE(1,"add"),qM=wE(-1,"subtract");function SE(l){return typeof l=="string"||l instanceof String}function KM(l){return N(l)||p(l)||SE(l)||d(l)||XM(l)||QM(l)||l===null||l===void 0}function QM(l){var h=o(l)&&!u(l),f=!1,g=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],E,I,P=g.length;for(E=0;E<P;E+=1)I=g[E],f=f||a(l,I);return h&&f}function XM(l){var h=s(l),f=!1;return h&&(f=l.filter(function(g){return!d(g)&&SE(l)}).length===0),h&&f}function JM(l){var h=o(l)&&!u(l),f=!1,g=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],E,I;for(E=0;E<g.length;E+=1)I=g[E],f=f||a(l,I);return h&&f}function ZM(l,h){var f=l.diff(h,"days",!0);return f<-6?"sameElse":f<-1?"lastWeek":f<0?"lastDay":f<1?"sameDay":f<2?"nextDay":f<7?"nextWeek":"sameElse"}function e4(l,h){arguments.length===1&&(arguments[0]?KM(arguments[0])?(l=arguments[0],h=void 0):JM(arguments[0])&&(h=arguments[0],l=void 0):(l=void 0,h=void 0));var f=l||it(),g=zg(f,this).startOf("day"),E=r.calendarFormat(this,g)||"sameElse",I=h&&(X(h[E])?h[E].call(this,f):h[E]);return this.format(I||this.localeData().calendar(E,this,it(f)))}function t4(){return new b(this)}function n4(l,h){var f=N(l)?l:it(l);return this.isValid()&&f.isValid()?(h=Wt(h)||"millisecond",h==="millisecond"?this.valueOf()>f.valueOf():f.valueOf()<this.clone().startOf(h).valueOf()):!1}function r4(l,h){var f=N(l)?l:it(l);return this.isValid()&&f.isValid()?(h=Wt(h)||"millisecond",h==="millisecond"?this.valueOf()<f.valueOf():this.clone().endOf(h).valueOf()<f.valueOf()):!1}function i4(l,h,f,g){var E=N(l)?l:it(l),I=N(h)?h:it(h);return this.isValid()&&E.isValid()&&I.isValid()?(g=g||"()",(g[0]==="("?this.isAfter(E,f):!this.isBefore(E,f))&&(g[1]===")"?this.isBefore(I,f):!this.isAfter(I,f))):!1}function s4(l,h){var f=N(l)?l:it(l),g;return this.isValid()&&f.isValid()?(h=Wt(h)||"millisecond",h==="millisecond"?this.valueOf()===f.valueOf():(g=f.valueOf(),this.clone().startOf(h).valueOf()<=g&&g<=this.clone().endOf(h).valueOf())):!1}function o4(l,h){return this.isSame(l,h)||this.isAfter(l,h)}function a4(l,h){return this.isSame(l,h)||this.isBefore(l,h)}function l4(l,h,f){var g,E,I;if(!this.isValid())return NaN;if(g=zg(l,this),!g.isValid())return NaN;switch(E=(g.utcOffset()-this.utcOffset())*6e4,h=Wt(h),h){case"year":I=Qh(this,g)/12;break;case"month":I=Qh(this,g);break;case"quarter":I=Qh(this,g)/3;break;case"second":I=(this-g)/1e3;break;case"minute":I=(this-g)/6e4;break;case"hour":I=(this-g)/36e5;break;case"day":I=(this-g-E)/864e5;break;case"week":I=(this-g-E)/6048e5;break;default:I=this-g}return f?I:At(I)}function Qh(l,h){if(l.date()<h.date())return-Qh(h,l);var f=(h.year()-l.year())*12+(h.month()-l.month()),g=l.clone().add(f,"months"),E,I;return h-g<0?(E=l.clone().add(f-1,"months"),I=(h-g)/(g-E)):(E=l.clone().add(f+1,"months"),I=(h-g)/(E-g)),-(f+I)||0}r.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",r.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function u4(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function c4(l){if(!this.isValid())return null;var h=l!==!0,f=h?this.clone().utc():this;return f.year()<0||f.year()>9999?W(f,h?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):X(Date.prototype.toISOString)?h?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",W(f,"Z")):W(f,h?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function h4(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var l="moment",h="",f,g,E,I;return this.isLocal()||(l=this.utcOffset()===0?"moment.utc":"moment.parseZone",h="Z"),f="["+l+'("]',g=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",E="-MM-DD[T]HH:mm:ss.SSS",I=h+'[")]',this.format(f+g+E+I)}function d4(l){l||(l=this.isUtc()?r.defaultFormatUtc:r.defaultFormat);var h=W(this,l);return this.localeData().postformat(h)}function f4(l,h){return this.isValid()&&(N(l)&&l.isValid()||it(l).isValid())?Tr({to:this,from:l}).locale(this.locale()).humanize(!h):this.localeData().invalidDate()}function p4(l){return this.from(it(),l)}function m4(l,h){return this.isValid()&&(N(l)&&l.isValid()||it(l).isValid())?Tr({from:this,to:l}).locale(this.locale()).humanize(!h):this.localeData().invalidDate()}function g4(l){return this.to(it(),l)}function EE(l){var h;return l===void 0?this._locale._abbr:(h=wi(l),h!=null&&(this._locale=h),this)}var CE=F("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(l){return l===void 0?this.localeData():this.locale(l)});function kE(){return this._locale}var Xh=1e3,ga=60*Xh,Jh=60*ga,xE=(365*400+97)*24*Jh;function ya(l,h){return(l%h+h)%h}function TE(l,h,f){return l<100&&l>=0?new Date(l+400,h,f)-xE:new Date(l,h,f).valueOf()}function DE(l,h,f){return l<100&&l>=0?Date.UTC(l+400,h,f)-xE:Date.UTC(l,h,f)}function y4(l){var h,f;if(l=Wt(l),l===void 0||l==="millisecond"||!this.isValid())return this;switch(f=this._isUTC?DE:TE,l){case"year":h=f(this.year(),0,1);break;case"quarter":h=f(this.year(),this.month()-this.month()%3,1);break;case"month":h=f(this.year(),this.month(),1);break;case"week":h=f(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":h=f(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":h=f(this.year(),this.month(),this.date());break;case"hour":h=this._d.valueOf(),h-=ya(h+(this._isUTC?0:this.utcOffset()*ga),Jh);break;case"minute":h=this._d.valueOf(),h-=ya(h,ga);break;case"second":h=this._d.valueOf(),h-=ya(h,Xh);break}return this._d.setTime(h),r.updateOffset(this,!0),this}function v4(l){var h,f;if(l=Wt(l),l===void 0||l==="millisecond"||!this.isValid())return this;switch(f=this._isUTC?DE:TE,l){case"year":h=f(this.year()+1,0,1)-1;break;case"quarter":h=f(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":h=f(this.year(),this.month()+1,1)-1;break;case"week":h=f(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":h=f(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":h=f(this.year(),this.month(),this.date()+1)-1;break;case"hour":h=this._d.valueOf(),h+=Jh-ya(h+(this._isUTC?0:this.utcOffset()*ga),Jh)-1;break;case"minute":h=this._d.valueOf(),h+=ga-ya(h,ga)-1;break;case"second":h=this._d.valueOf(),h+=Xh-ya(h,Xh)-1;break}return this._d.setTime(h),r.updateOffset(this,!0),this}function w4(){return this._d.valueOf()-(this._offset||0)*6e4}function _4(){return Math.floor(this.valueOf()/1e3)}function S4(){return new Date(this.valueOf())}function E4(){var l=this;return[l.year(),l.month(),l.date(),l.hour(),l.minute(),l.second(),l.millisecond()]}function C4(){var l=this;return{years:l.year(),months:l.month(),date:l.date(),hours:l.hours(),minutes:l.minutes(),seconds:l.seconds(),milliseconds:l.milliseconds()}}function k4(){return this.isValid()?this.toISOString():null}function x4(){return y(this)}function T4(){return v({},x(this))}function D4(){return x(this).overflow}function I4(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}V("N",0,0,"eraAbbr"),V("NN",0,0,"eraAbbr"),V("NNN",0,0,"eraAbbr"),V("NNNN",0,0,"eraName"),V("NNNNN",0,0,"eraNarrow"),V("y",["y",1],"yo","eraYear"),V("y",["yy",2],0,"eraYear"),V("y",["yyy",3],0,"eraYear"),V("y",["yyyy",4],0,"eraYear"),ie("N",Yg),ie("NN",Yg),ie("NNN",Yg),ie("NNNN",U4),ie("NNNNN",B4),Xe(["N","NN","NNN","NNNN","NNNNN"],function(l,h,f,g){var E=f._locale.erasParse(l,g,f._strict);E?x(f).era=E:x(f).invalidEra=l}),ie("y",pa),ie("yy",pa),ie("yyy",pa),ie("yyyy",pa),ie("yo",V4),Xe(["y","yy","yyy","yyyy"],ln),Xe(["yo"],function(l,h,f,g){var E;f._locale._eraYearOrdinalRegex&&(E=l.match(f._locale._eraYearOrdinalRegex)),f._locale.eraYearOrdinalParse?h[ln]=f._locale.eraYearOrdinalParse(l,E):h[ln]=parseInt(l,10)});function A4(l,h){var f,g,E,I=this._eras||wi("en")._eras;for(f=0,g=I.length;f<g;++f){switch(typeof I[f].since){case"string":E=r(I[f].since).startOf("day"),I[f].since=E.valueOf();break}switch(typeof I[f].until){case"undefined":I[f].until=1/0;break;case"string":E=r(I[f].until).startOf("day").valueOf(),I[f].until=E.valueOf();break}}return I}function b4(l,h,f){var g,E,I=this.eras(),P,he,be;for(l=l.toUpperCase(),g=0,E=I.length;g<E;++g)if(P=I[g].name.toUpperCase(),he=I[g].abbr.toUpperCase(),be=I[g].narrow.toUpperCase(),f)switch(h){case"N":case"NN":case"NNN":if(he===l)return I[g];break;case"NNNN":if(P===l)return I[g];break;case"NNNNN":if(be===l)return I[g];break}else if([P,he,be].indexOf(l)>=0)return I[g]}function N4(l,h){var f=l.since<=l.until?1:-1;return h===void 0?r(l.since).year():r(l.since).year()+(h-l.offset)*f}function O4(){var l,h,f,g=this.localeData().eras();for(l=0,h=g.length;l<h;++l)if(f=this.clone().startOf("day").valueOf(),g[l].since<=f&&f<=g[l].until||g[l].until<=f&&f<=g[l].since)return g[l].name;return""}function R4(){var l,h,f,g=this.localeData().eras();for(l=0,h=g.length;l<h;++l)if(f=this.clone().startOf("day").valueOf(),g[l].since<=f&&f<=g[l].until||g[l].until<=f&&f<=g[l].since)return g[l].narrow;return""}function P4(){var l,h,f,g=this.localeData().eras();for(l=0,h=g.length;l<h;++l)if(f=this.clone().startOf("day").valueOf(),g[l].since<=f&&f<=g[l].until||g[l].until<=f&&f<=g[l].since)return g[l].abbr;return""}function M4(){var l,h,f,g,E=this.localeData().eras();for(l=0,h=E.length;l<h;++l)if(f=E[l].since<=E[l].until?1:-1,g=this.clone().startOf("day").valueOf(),E[l].since<=g&&g<=E[l].until||E[l].until<=g&&g<=E[l].since)return(this.year()-r(E[l].since).year())*f+E[l].offset;return this.year()}function L4(l){return a(this,"_erasNameRegex")||Wg.call(this),l?this._erasNameRegex:this._erasRegex}function $4(l){return a(this,"_erasAbbrRegex")||Wg.call(this),l?this._erasAbbrRegex:this._erasRegex}function F4(l){return a(this,"_erasNarrowRegex")||Wg.call(this),l?this._erasNarrowRegex:this._erasRegex}function Yg(l,h){return h.erasAbbrRegex(l)}function U4(l,h){return h.erasNameRegex(l)}function B4(l,h){return h.erasNarrowRegex(l)}function V4(l,h){return h._eraYearOrdinalRegex||pa}function Wg(){var l=[],h=[],f=[],g=[],E,I,P=this.eras();for(E=0,I=P.length;E<I;++E)h.push(Wn(P[E].name)),l.push(Wn(P[E].abbr)),f.push(Wn(P[E].narrow)),g.push(Wn(P[E].name)),g.push(Wn(P[E].abbr)),g.push(Wn(P[E].narrow));this._erasRegex=new RegExp("^("+g.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+h.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+l.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+f.join("|")+")","i")}V(0,["gg",2],0,function(){return this.weekYear()%100}),V(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Zh(l,h){V(0,[l,l.length],0,h)}Zh("gggg","weekYear"),Zh("ggggg","weekYear"),Zh("GGGG","isoWeekYear"),Zh("GGGGG","isoWeekYear"),It("weekYear","gg"),It("isoWeekYear","GG"),Ne("weekYear",1),Ne("isoWeekYear",1),ie("G",Vh),ie("g",Vh),ie("GG",rt,Yn),ie("gg",rt,Yn),ie("GGGG",bg,Ag),ie("gggg",bg,Ag),ie("GGGGG",Bh,Fh),ie("ggggg",Bh,Fh),Jl(["gggg","ggggg","GGGG","GGGGG"],function(l,h,f,g){h[g.substr(0,2)]=Oe(l)}),Jl(["gg","GG"],function(l,h,f,g){h[g]=r.parseTwoDigitYear(l)});function z4(l){return IE.call(this,l,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function j4(l){return IE.call(this,l,this.isoWeek(),this.isoWeekday(),1,4)}function Y4(){return vi(this.year(),1,4)}function W4(){return vi(this.isoWeekYear(),1,4)}function H4(){var l=this.localeData()._week;return vi(this.year(),l.dow,l.doy)}function G4(){var l=this.localeData()._week;return vi(this.weekYear(),l.dow,l.doy)}function IE(l,h,f,g,E){var I;return l==null?tu(this,g,E).year:(I=vi(l,g,E),h>I&&(h=I),q4.call(this,l,h,f,g,E))}function q4(l,h,f,g,E){var I=sE(l,h,f,g,E),P=eu(I.year,0,I.dayOfYear);return this.year(P.getUTCFullYear()),this.month(P.getUTCMonth()),this.date(P.getUTCDate()),this}V("Q",0,"Qo","quarter"),It("quarter","Q"),Ne("quarter",7),ie("Q",KS),Xe("Q",function(l,h){h[gi]=(Oe(l)-1)*3});function K4(l){return l==null?Math.ceil((this.month()+1)/3):this.month((l-1)*3+this.month()%3)}V("D",["DD",2],"Do","date"),It("date","D"),Ne("date",9),ie("D",rt),ie("DD",rt,Yn),ie("Do",function(l,h){return l?h._dayOfMonthOrdinalParse||h._ordinalParse:h._dayOfMonthOrdinalParseLenient}),Xe(["D","DD"],Yr),Xe("Do",function(l,h){h[Yr]=Oe(l.match(rt)[0])});var AE=fa("Date",!0);V("DDD",["DDDD",3],"DDDo","dayOfYear"),It("dayOfYear","DDD"),Ne("dayOfYear",4),ie("DDD",Uh),ie("DDDD",QS),Xe(["DDD","DDDD"],function(l,h,f){f._dayOfYear=Oe(l)});function Q4(l){var h=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return l==null?h:this.add(l-h,"d")}V("m",["mm",2],0,"minute"),It("minute","m"),Ne("minute",14),ie("m",rt),ie("mm",rt,Yn),Xe(["m","mm"],xr);var X4=fa("Minutes",!1);V("s",["ss",2],0,"second"),It("second","s"),Ne("second",15),ie("s",rt),ie("ss",rt,Yn),Xe(["s","ss"],yi);var J4=fa("Seconds",!1);V("S",0,0,function(){return~~(this.millisecond()/100)}),V(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),V(0,["SSS",3],0,"millisecond"),V(0,["SSSS",4],0,function(){return this.millisecond()*10}),V(0,["SSSSS",5],0,function(){return this.millisecond()*100}),V(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),V(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),V(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),V(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),It("millisecond","ms"),Ne("millisecond",16),ie("S",Uh,KS),ie("SS",Uh,Yn),ie("SSS",Uh,QS);var ls,bE;for(ls="SSSS";ls.length<=9;ls+="S")ie(ls,pa);function Z4(l,h){h[mo]=Oe(("0."+l)*1e3)}for(ls="S";ls.length<=9;ls+="S")Xe(ls,Z4);bE=fa("Milliseconds",!1),V("z",0,0,"zoneAbbr"),V("zz",0,0,"zoneName");function eL(){return this._isUTC?"UTC":""}function tL(){return this._isUTC?"Coordinated Universal Time":""}var q=b.prototype;q.add=GM,q.calendar=e4,q.clone=t4,q.diff=l4,q.endOf=v4,q.format=d4,q.from=f4,q.fromNow=p4,q.to=m4,q.toNow=g4,q.get=rP,q.invalidAt=D4,q.isAfter=n4,q.isBefore=r4,q.isBetween=i4,q.isSame=s4,q.isSameOrAfter=o4,q.isSameOrBefore=a4,q.isValid=x4,q.lang=CE,q.locale=EE,q.localeData=kE,q.max=xM,q.min=kM,q.parsingFlags=T4,q.set=iP,q.startOf=y4,q.subtract=qM,q.toArray=E4,q.toObject=C4,q.toDate=S4,q.toISOString=c4,q.inspect=h4,typeof Symbol!="undefined"&&Symbol.for!=null&&(q[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),q.toJSON=k4,q.toString=u4,q.unix=_4,q.valueOf=w4,q.creationData=I4,q.eraName=O4,q.eraNarrow=R4,q.eraAbbr=P4,q.eraYear=M4,q.year=iE,q.isLeapYear=CP,q.weekYear=z4,q.isoWeekYear=j4,q.quarter=q.quarters=K4,q.month=nE,q.daysInMonth=_P,q.week=q.weeks=AP,q.isoWeek=q.isoWeeks=bP,q.weeksInYear=H4,q.weeksInWeekYear=G4,q.isoWeeksInYear=Y4,q.isoWeeksInISOWeekYear=W4,q.date=AE,q.day=q.days=jP,q.weekday=YP,q.isoWeekday=WP,q.dayOfYear=Q4,q.hour=q.hours=JP,q.minute=q.minutes=X4,q.second=q.seconds=J4,q.millisecond=q.milliseconds=bE,q.utcOffset=PM,q.utc=LM,q.local=$M,q.parseZone=FM,q.hasAlignedHourOffset=UM,q.isDST=BM,q.isLocal=zM,q.isUtcOffset=jM,q.isUtc=yE,q.isUTC=yE,q.zoneAbbr=eL,q.zoneName=tL,q.dates=F("dates accessor is deprecated. Use date instead.",AE),q.months=F("months accessor is deprecated. Use month instead",nE),q.years=F("years accessor is deprecated. Use year instead",iE),q.zone=F("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",MM),q.isDSTShifted=F("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",VM);function nL(l){return it(l*1e3)}function rL(){return it.apply(null,arguments).parseZone()}function NE(l){return l}var ze=Te.prototype;ze.calendar=z,ze.longDateFormat=Be,ze.invalidDate=ne,ze.ordinal=ct,ze.preparse=NE,ze.postformat=NE,ze.relativeTime=Ft,ze.pastFuture=po,ze.set=ue,ze.eras=A4,ze.erasParse=b4,ze.erasConvertYear=N4,ze.erasAbbrRegex=$4,ze.erasNameRegex=L4,ze.erasNarrowRegex=F4,ze.months=gP,ze.monthsShort=yP,ze.monthsParse=wP,ze.monthsRegex=EP,ze.monthsShortRegex=SP,ze.week=xP,ze.firstDayOfYear=IP,ze.firstDayOfWeek=DP,ze.weekdays=FP,ze.weekdaysMin=BP,ze.weekdaysShort=UP,ze.weekdaysParse=zP,ze.weekdaysRegex=HP,ze.weekdaysShortRegex=GP,ze.weekdaysMinRegex=qP,ze.isPM=QP,ze.meridiem=ZP;function ed(l,h,f,g){var E=wi(),I=w().set(g,h);return E[f](I,l)}function OE(l,h,f){if(d(l)&&(h=l,l=void 0),l=l||"",h!=null)return ed(l,h,f,"month");var g,E=[];for(g=0;g<12;g++)E[g]=ed(l,g,f,"month");return E}function Hg(l,h,f,g){typeof l=="boolean"?(d(h)&&(f=h,h=void 0),h=h||""):(h=l,f=h,l=!1,d(h)&&(f=h,h=void 0),h=h||"");var E=wi(),I=l?E._week.dow:0,P,he=[];if(f!=null)return ed(h,(f+I)%7,g,"day");for(P=0;P<7;P++)he[P]=ed(h,(P+I)%7,g,"day");return he}function iL(l,h){return OE(l,h,"months")}function sL(l,h){return OE(l,h,"monthsShort")}function oL(l,h,f){return Hg(l,h,f,"weekdays")}function aL(l,h,f){return Hg(l,h,f,"weekdaysShort")}function lL(l,h,f){return Hg(l,h,f,"weekdaysMin")}as("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(l){var h=l%10,f=Oe(l%100/10)===1?"th":h===1?"st":h===2?"nd":h===3?"rd":"th";return l+f}}),r.lang=F("moment.lang is deprecated. Use moment.locale instead.",as),r.langData=F("moment.langData is deprecated. Use moment.localeData instead.",wi);var _i=Math.abs;function uL(){var l=this._data;return this._milliseconds=_i(this._milliseconds),this._days=_i(this._days),this._months=_i(this._months),l.milliseconds=_i(l.milliseconds),l.seconds=_i(l.seconds),l.minutes=_i(l.minutes),l.hours=_i(l.hours),l.months=_i(l.months),l.years=_i(l.years),this}function RE(l,h,f,g){var E=Tr(h,f);return l._milliseconds+=g*E._milliseconds,l._days+=g*E._days,l._months+=g*E._months,l._bubble()}function cL(l,h){return RE(this,l,h,1)}function hL(l,h){return RE(this,l,h,-1)}function PE(l){return l<0?Math.floor(l):Math.ceil(l)}function dL(){var l=this._milliseconds,h=this._days,f=this._months,g=this._data,E,I,P,he,be;return l>=0&&h>=0&&f>=0||l<=0&&h<=0&&f<=0||(l+=PE(Gg(f)+h)*864e5,h=0,f=0),g.milliseconds=l%1e3,E=At(l/1e3),g.seconds=E%60,I=At(E/60),g.minutes=I%60,P=At(I/60),g.hours=P%24,h+=At(P/24),be=At(ME(h)),f+=be,h-=PE(Gg(be)),he=At(f/12),f%=12,g.days=h,g.months=f,g.years=he,this}function ME(l){return l*4800/146097}function Gg(l){return l*146097/4800}function fL(l){if(!this.isValid())return NaN;var h,f,g=this._milliseconds;if(l=Wt(l),l==="month"||l==="quarter"||l==="year")switch(h=this._days+g/864e5,f=this._months+ME(h),l){case"month":return f;case"quarter":return f/3;case"year":return f/12}else switch(h=this._days+Math.round(Gg(this._months)),l){case"week":return h/7+g/6048e5;case"day":return h+g/864e5;case"hour":return h*24+g/36e5;case"minute":return h*1440+g/6e4;case"second":return h*86400+g/1e3;case"millisecond":return Math.floor(h*864e5)+g;default:throw new Error("Unknown unit "+l)}}function pL(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+Oe(this._months/12)*31536e6:NaN}function Si(l){return function(){return this.as(l)}}var mL=Si("ms"),gL=Si("s"),yL=Si("m"),vL=Si("h"),wL=Si("d"),_L=Si("w"),SL=Si("M"),EL=Si("Q"),CL=Si("y");function kL(){return Tr(this)}function xL(l){return l=Wt(l),this.isValid()?this[l+"s"]():NaN}function yo(l){return function(){return this.isValid()?this._data[l]:NaN}}var TL=yo("milliseconds"),DL=yo("seconds"),IL=yo("minutes"),AL=yo("hours"),bL=yo("days"),NL=yo("months"),OL=yo("years");function RL(){return At(this.days()/7)}var Ei=Math.round,va={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function PL(l,h,f,g,E){return E.relativeTime(h||1,!!f,l,g)}function ML(l,h,f,g){var E=Tr(l).abs(),I=Ei(E.as("s")),P=Ei(E.as("m")),he=Ei(E.as("h")),be=Ei(E.as("d")),Je=Ei(E.as("M")),In=Ei(E.as("w")),Ci=Ei(E.as("y")),us=I<=f.ss&&["s",I]||I<f.s&&["ss",I]||P<=1&&["m"]||P<f.m&&["mm",P]||he<=1&&["h"]||he<f.h&&["hh",he]||be<=1&&["d"]||be<f.d&&["dd",be];return f.w!=null&&(us=us||In<=1&&["w"]||In<f.w&&["ww",In]),us=us||Je<=1&&["M"]||Je<f.M&&["MM",Je]||Ci<=1&&["y"]||["yy",Ci],us[2]=h,us[3]=+l>0,us[4]=g,PL.apply(null,us)}function LL(l){return l===void 0?Ei:typeof l=="function"?(Ei=l,!0):!1}function $L(l,h){return va[l]===void 0?!1:h===void 0?va[l]:(va[l]=h,l==="s"&&(va.ss=h-1),!0)}function FL(l,h){if(!this.isValid())return this.localeData().invalidDate();var f=!1,g=va,E,I;return typeof l=="object"&&(h=l,l=!1),typeof l=="boolean"&&(f=l),typeof h=="object"&&(g=Object.assign({},va,h),h.s!=null&&h.ss==null&&(g.ss=h.s-1)),E=this.localeData(),I=ML(this,!f,g,E),f&&(I=E.pastFuture(+this,I)),E.postformat(I)}var qg=Math.abs;function wa(l){return(l>0)-(l<0)||+l}function td(){if(!this.isValid())return this.localeData().invalidDate();var l=qg(this._milliseconds)/1e3,h=qg(this._days),f=qg(this._months),g,E,I,P,he=this.asSeconds(),be,Je,In,Ci;return he?(g=At(l/60),E=At(g/60),l%=60,g%=60,I=At(f/12),f%=12,P=l?l.toFixed(3).replace(/\.?0+$/,""):"",be=he<0?"-":"",Je=wa(this._months)!==wa(he)?"-":"",In=wa(this._days)!==wa(he)?"-":"",Ci=wa(this._milliseconds)!==wa(he)?"-":"",be+"P"+(I?Je+I+"Y":"")+(f?Je+f+"M":"")+(h?In+h+"D":"")+(E||g||l?"T":"")+(E?Ci+E+"H":"")+(g?Ci+g+"M":"")+(l?Ci+P+"S":"")):"P0D"}var $e=qh.prototype;$e.isValid=bM,$e.abs=uL,$e.add=cL,$e.subtract=hL,$e.as=fL,$e.asMilliseconds=mL,$e.asSeconds=gL,$e.asMinutes=yL,$e.asHours=vL,$e.asDays=wL,$e.asWeeks=_L,$e.asMonths=SL,$e.asQuarters=EL,$e.asYears=CL,$e.valueOf=pL,$e._bubble=dL,$e.clone=kL,$e.get=xL,$e.milliseconds=TL,$e.seconds=DL,$e.minutes=IL,$e.hours=AL,$e.days=bL,$e.weeks=RL,$e.months=NL,$e.years=OL,$e.humanize=FL,$e.toISOString=td,$e.toString=td,$e.toJSON=td,$e.locale=EE,$e.localeData=kE,$e.toIsoString=F("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",td),$e.lang=CE,V("X",0,0,"unix"),V("x",0,0,"valueOf"),ie("x",Vh),ie("X",oP),Xe("X",function(l,h,f){f._d=new Date(parseFloat(l)*1e3)}),Xe("x",function(l,h,f){f._d=new Date(Oe(l))});//! moment.js
return r.version="2.29.4",i(it),r.fn=q,r.min=TM,r.max=DM,r.now=IM,r.utc=w,r.unix=nL,r.months=iL,r.isDate=p,r.locale=as,r.invalid=C,r.duration=Tr,r.isMoment=N,r.weekdays=oL,r.parseZone=rL,r.localeData=wi,r.isDuration=Kh,r.monthsShort=sL,r.weekdaysMin=lL,r.defineLocale=Mg,r.updateLocale=rM,r.locales=iM,r.weekdaysShort=aL,r.normalizeUnits=Wt,r.relativeTimeRounding=LL,r.relativeTimeThreshold=$L,r.calendarFormat=ZM,r.prototype=q,r.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},r})})(BS);var cy=BS.exports;(function(e,t){(function(n,r){r(typeof AT=="function"?BS.exports:n.moment)})(IT,function(n){//! moment.js locale configuration
var r=n.defineLocale("ko",{months:"1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),monthsShort:"1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),weekdays:"\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split("_"),weekdaysShort:"\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),weekdaysMin:"\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY\uB144 MMMM D\uC77C",LLL:"YYYY\uB144 MMMM D\uC77C A h:mm",LLLL:"YYYY\uB144 MMMM D\uC77C dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY\uB144 MMMM D\uC77C",lll:"YYYY\uB144 MMMM D\uC77C A h:mm",llll:"YYYY\uB144 MMMM D\uC77C dddd A h:mm"},calendar:{sameDay:"\uC624\uB298 LT",nextDay:"\uB0B4\uC77C LT",nextWeek:"dddd LT",lastDay:"\uC5B4\uC81C LT",lastWeek:"\uC9C0\uB09C\uC8FC dddd LT",sameElse:"L"},relativeTime:{future:"%s \uD6C4",past:"%s \uC804",s:"\uBA87 \uCD08",ss:"%d\uCD08",m:"1\uBD84",mm:"%d\uBD84",h:"\uD55C \uC2DC\uAC04",hh:"%d\uC2DC\uAC04",d:"\uD558\uB8E8",dd:"%d\uC77C",M:"\uD55C \uB2EC",MM:"%d\uB2EC",y:"\uC77C \uB144",yy:"%d\uB144"},dayOfMonthOrdinalParse:/\d{1,2}(일|월|주)/,ordinal:function(i,s){switch(s){case"d":case"D":case"DDD":return i+"\uC77C";case"M":return i+"\uC6D4";case"w":case"W":return i+"\uC8FC";default:return i}},meridiemParse:/오전|오후/,isPM:function(i){return i==="\uC624\uD6C4"},meridiem:function(i,s,o){return i<12?"\uC624\uC804":"\uC624\uD6C4"}});return r})})();const WQ=uo(Zm,"board_photos"),HQ=async e=>{const t=uo(WQ,e.name);return await Xm(t,e),await Jm(t)},zR=_r("boards/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("boardData is undefined");const{brand:n,height:r,weight:i,title:s,desc:o,photo:a,nickname:u}=e,c=await HQ(a);return{id:(await Qm(lo(Sr,"boards"),{brand:n,height:r,weight:i,title:s,desc:o,photo:c,nickname:u,createdAt:Date.now()})).id,brand:n,height:r,weight:i,title:s,desc:o,photo:c,nickname:u,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),kg=_r("boards/get",async()=>(te.locale("ko"),(await Km(lo(Sr,"boards"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=te(),u=te(i);return a.diff(u,"days")<=1?o=u.fromNow():o=u.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}}))),GQ=sa({name:"board",initialState:{boards:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(zR.fulfilled,(t,n)=>{const r=n.payload;return{...t,boards:[...t.boards,r],postCount:t.postCount+1}}).addCase(kg.fulfilled,(t,n)=>({...t,boards:n.payload,postCount:n.payload.length}))}});var qQ=GQ.reducer;const KQ=eh`
  width: 100%;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  padding: 16px;
  cursor: pointer;
`,QQ=eh`
  width: 100%;
  padding: 6px 12px;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  cursor: pointer;
`,XQ=eh`
  width: 100%;
  display: flex;
  flex-direction: column;
`,an=nt.section`
  width: 100%;
  padding-top: 60px;
  min-height: 100vh;
  background: #ffffff;

  @media screen and (max-width: 768px) {
    /* padding-left: 16px;
    padding-right: 16px; */
  }
`,xg=nt.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 40px;

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
`,JQ=nt.div`
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
          margin-bottom: 14px;
          border-bottom: 1px solid #999;
          height: 46px;
        }

        input:active,
        input:focus {
          border-bottom: 2px solid #09f;
        }

        label {
          position: absolute;
          left: 10px;
          top: 0px;
          font-size: clamp(12px, 1.5vw, 13px);
          transition: top 0.25s ease-in-out;
          color: #625f5f;
          cursor: pointer;
        }

        input:focus + label {
          top: -6px;
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
`,VS=nt.div`
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

    .photo_category {
      vertical-align: middle;
      overflow: hidden;
      color: #222;
      font-weight: 700;
      font-size: clamp(11px, 1.5vw, 12.5px);
    }

    .board_nickname,
    .photo_nickname {
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
    .photo_desc {
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
`,Lh=nt.div`
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
`,ZQ=nt.div`
  width: 100%;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.86);
  background: #f8d7da;
  text-align: center;

  p {
    padding: 12px;
    font-size: clamp(14px, 2vw, 15px);
  }
`;nt.form`
  ${XQ}
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1 1 50%;

  h1 {
    font-size: clamp(18px, 2.5vw, 20px);
    margin: 12px 0;
  }
`;const vu=nt.input`
  ${KQ}
`,hy=nt.button`
  ${QQ}
`;nt.div`
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
`;/*!
 * @splidejs/splide-extension-auto-scroll
 * Version  : 0.5.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */function eX(e){e.length=0}function zS(e,t,n){return Array.prototype.slice.call(e,t,n)}function Tg(e){return e.bind.apply(e,[null].concat(zS(arguments,1)))}function vT(e){return requestAnimationFrame(e)}function jS(e,t){return typeof t===e}var jR=Array.isArray;Tg(jS,"function");Tg(jS,"string");Tg(jS,"undefined");function YR(e){return jR(e)?e:[e]}function wT(e,t){YR(e).forEach(t)}var tX=Object.keys;function nX(e,t,n){if(e){var r=tX(e);r=n?r.reverse():r;for(var i=0;i<r.length;i++){var s=r[i];if(s!=="__proto__"&&t(e[s],s)===!1)break}}return e}function rX(e){return zS(arguments,1).forEach(function(t){nX(t,function(n,r){e[r]=t[r]})}),e}var iX=Math.min;function sX(){var e=[];function t(o,a,u,c){i(o,a,function(d,p,m){var v="addEventListener"in d,w=v?d.removeEventListener.bind(d,p,u,c):d.removeListener.bind(d,u);v?d.addEventListener(p,u,c):d.addListener(u),e.push([d,p,m,u,w])})}function n(o,a,u){i(o,a,function(c,d,p){e=e.filter(function(m){return m[0]===c&&m[1]===d&&m[2]===p&&(!u||m[3]===u)?(m[4](),!1):!0})})}function r(o,a,u){var c,d=!0;return typeof CustomEvent=="function"?c=new CustomEvent(a,{bubbles:d,detail:u}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(a,d,!1,u)),o.dispatchEvent(c),c}function i(o,a,u){wT(o,function(c){c&&wT(a,function(d){d.split(" ").forEach(function(p){var m=p.split(".");u(c,m[0],m[1])})})})}function s(){e.forEach(function(o){o[4]()}),eX(e)}return{bind:t,unbind:n,dispatch:r,destroy:s}}var _T="move",ST="moved",oX="updated",ET="drag",aX="dragged",CT="scroll",kT="scrolled",lX="destroy";function uX(e){var t=e?e.event.bus:document.createDocumentFragment(),n=sX();function r(s,o){n.bind(t,YR(s).join(" "),function(a){o.apply(o,jR(a.detail)?a.detail:[])})}function i(s){n.dispatch(t,s,zS(arguments,1))}return e&&e.event.on(lX,n.destroy),rX(n,{bus:t,on:r,off:Tg(n.unbind,t),emit:i})}function WR(e,t,n,r){var i=Date.now,s,o=0,a,u=!0,c=0;function d(){if(!u){if(o=e?iX((i()-s)/e,1):1,n&&n(o),o>=1&&(t(),s=i(),r&&++c>=r))return m();vT(d)}}function p(S){!S&&w(),s=i()-(S?o*e:0),u=!1,vT(d)}function m(){u=!0}function v(){s=i(),o=0,n&&n(o)}function w(){a&&cancelAnimationFrame(a),o=0,a=0,u=!0}function _(S){e=S}function x(){return u}return{start:p,rewind:v,pause:m,cancel:w,set:_,isPaused:x}}function cX(e,t){var n;function r(){n||(n=WR(t||0,function(){e(),n=null},null,1),n.start())}return r}var hX="is-active",dX="slide",fX="fade";function HR(e,t,n){return Array.prototype.slice.call(e,t,n)}function YS(e){return e.bind(null,...HR(arguments,1))}function Dg(e,t){return typeof t===e}function w1(e){return!GR(e)&&Dg("object",e)}const pX=Array.isArray;YS(Dg,"function");YS(Dg,"string");const mX=YS(Dg,"undefined");function GR(e){return e===null}function gX(e){return pX(e)?e:[e]}function bp(e,t){gX(e).forEach(t)}function yX(e,t,n){e&&bp(t,r=>{r&&e.classList[n?"add":"remove"](r)})}const vX=Object.keys;function qR(e,t,n){if(e){let r=vX(e);r=n?r.reverse():r;for(let i=0;i<r.length;i++){const s=r[i];if(s!=="__proto__"&&t(e[s],s)===!1)break}}return e}function xT(e){return HR(arguments,1).forEach(t=>{qR(t,(n,r)=>{e[r]=t[r]})}),e}function wX(e,t){bp(e,n=>{bp(t,r=>{n&&n.removeAttribute(r)})})}function KR(e,t,n){w1(t)?qR(t,(r,i)=>{KR(e,i,r)}):bp(e,r=>{GR(n)||n===""?wX(r,t):r.setAttribute(t,String(n))})}const{min:TT,max:DT,floor:TJ,ceil:DJ,abs:IJ}=Math;function _X(e,t,n){const r=TT(t,n),i=DT(t,n);return TT(DT(r,e),i)}const SX={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},EX={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function WS(e,t,n){const{on:r,off:i,bind:s,unbind:o}=uX(e),{translate:a,getPosition:u,toIndex:c,getLimit:d}=t.Move,{setIndex:p,getIndex:m}=t.Controller,{orient:v}=t.Direction,{toggle:w}=t.Elements,{Live:_}=t,{root:x}=e,S=cX(t.Arrows.update,500);let y={},C,T,A,O,b,N;function Z(){const{autoScroll:B}=n;y=xT({},SX,w1(B)?B:{})}function F(){e.is(fX)||!C&&n.autoScroll!==!1&&(C=WR(0,$),J(),ue())}function j(){C&&(C.cancel(),C=null,N=void 0,i([_T,ET,CT,ST,kT]),o(x,"mouseenter mouseleave focusin focusout"),o(w,"click"))}function J(){y.pauseOnHover&&s(x,"mouseenter mouseleave",B=>{A=B.type==="mouseenter",ge()}),y.pauseOnFocus&&s(x,"focusin focusout",B=>{O=B.type==="focusin",ge()}),y.useToggleButton&&s(w,"click",()=>{T?oe():Te()}),r(oX,X),r([_T,ET,CT],()=>{b=!0,Te(!1)}),r([ST,aX,kT],()=>{b=!1,ge()})}function X(){const{autoScroll:B}=n;B!==!1?(y=xT({},y,w1(B)?B:{}),F()):j(),C&&!mX(N)&&a(N)}function ue(){y.autoStart&&(document.readyState==="complete"?oe():s(window,"load",oe))}function oe(){U()&&(C.start(!0),_.disable(!0),O=A=T=!1,ee())}function Te(B=!0){T||(T=B,ee(),U()||(C.pause(),_.disable(!1)))}function ge(){T||(A||O||b?Te(!1):oe())}function $(){const B=u(),Y=z(B);B!==Y?(a(Y),R(N=u())):(Te(!1),y.rewind&&e.go(y.speed>0?0:t.Controller.getEnd())),S()}function z(B){const Y=y.speed||1;return B+=v(Y),e.is(dX)&&(B=_X(B,d(!1),d(!0))),B}function R(B){const{length:Y}=e,V=(c(B)+Y)%Y;V!==m()&&(p(V),t.Slides.update(),t.Pagination.update(),n.lazyLoad==="nearby"&&t.LazyLoad.check())}function ee(){if(w){const B=T?"startScroll":"pauseScroll";yX(w,hX,!T),KR(w,"aria-label",n.i18n[B]||EX[B])}}function U(){return!C||C.isPaused()}return{setup:Z,mount:F,destroy:j,play:oe,pause:Te,isPaused:U}}const CX=()=>{const e=kt(c=>c.board.boards),[t,n]=L.exports.useState(e.length),[r,i]=L.exports.useState("16px"),[s,o]=L.exports.useState("left"),a=kn(),u=L.exports.useCallback(()=>{window.innerWidth>=1280?(n(5),o("left")):window.innerWidth>=1024?(n(4),i("14px"),o("left")):window.innerWidth>=768?(n(3),i("12px"),o("center")):(n(2),i("10px"),o("center"))},[]);return L.exports.useEffect(()=>(a(kg()),u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)),[a,u]),k(an,{children:M(xg,{children:[M("div",{className:"title",children:[k("h1",{children:"OOTD"}),k("span",{children:"\uCD5C\uC2E0 OOTD \uB9AC\uC2A4\uD2B8"})]}),k("div",{className:"contents",children:e.length>0?k(vS,{options:{type:"loop",perPage:t,gap:r,focus:s,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!1,pauseOnFocus:!1,rewind:!1,speed:2}},extensions:{AutoScroll:WS},children:e.slice(0,10).map(c=>k(wS,{children:M(VS,{children:[k("div",{className:"top",children:k(Nn,{to:`board/details/${c.id}`,children:k("img",{src:c.photo,alt:"board"})})}),M("div",{className:"bottom",children:[k("p",{className:"board_nickname",children:c.nickname}),k("p",{className:"board_title",children:c.title}),k("p",{className:"board_desc",children:c.desc.length>60?c.desc.slice(0,50)+"...":c.desc})]})]})},c.id))}):k("div",{className:"no-boards",children:"No Boards available && Loading.."})})]})})},kX=uo(Zm,"questions_photos"),xX=async e=>{const t=uo(kX,e.name);return await Xm(t,e),await Jm(t)},QR=_r("question/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("qnaData is Not Fount");const{category:n,title:r,desc:i,photo:s,nickname:o}=e,a=await xX(s);return{id:(await Qm(lo(Sr,"questions"),{category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()})).id,category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),HS=_r("question/get",async()=>(te.locale("ko"),(await Km(lo(Sr,"questions"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=te(),u=te(i);return a.diff(u,"days")<=1?o=u.fromNow():o=u.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}}))),TX=sa({name:"qna",initialState:{questions:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(QR.fulfilled,(t,n)=>{const r=n.payload;return{...t,questions:[...t.questions,r],postCount:t.postCount+1}}).addCase(HS.fulfilled,(t,n)=>({...t,questions:n.payload,postCount:n.payload.length}))}});var DX=TX.reducer;const IX=()=>{const e=kt(n=>n.qna.questions),t=kn();return L.exports.useEffect(()=>{t(HS())},[t]),k(an,{children:M(xg,{children:[M("div",{className:"title",children:[k("h1",{children:"QnA"}),k("span",{children:"\uCD5C\uC2E0 QnA \uB9AC\uC2A4\uD2B8"})]}),e.length>0?k("div",{className:"qna_card"}):k("div",{className:"no-qna",children:"No Questions available && Loading.. "})]})})},AX=uo(Zm,"photos_png"),bX=async e=>{const t=uo(AX,e.name);return await Xm(t,e),await Jm(t)},XR=_r("photos/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("photoData is Not Fount");const{category:n,title:r,desc:i,photo:s,nickname:o}=e,a=await bX(s);return{id:(await Qm(lo(Sr,"photos"),{category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()})).id,category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),Ig=_r("photos/get",async()=>(cy.locale("ko"),(await Km(lo(Sr,"photos"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=cy(),u=cy(i);return a.diff(u,"days")<=1?o=u.fromNow():o=u.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}}))),NX=sa({name:"photo",initialState:{photos:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(XR.fulfilled,(t,n)=>{const r=n.payload;return{...t,photos:[...t.photos,r],postCount:t.postCount+1}}).addCase(Ig.fulfilled,(t,n)=>({...t,photos:n.payload,postCount:n.payload.length}))}});var OX=NX.reducer;const RX=()=>{const e=kt(p=>p.photo.photos),[t,n]=L.exports.useState([]),[r,i]=L.exports.useState(e.length),[s,o]=L.exports.useState("16px"),[a,u]=L.exports.useState("left"),c=kn(),d=L.exports.useCallback(()=>{window.innerWidth>=1280?(i(5),u("left")):window.innerWidth>=1024?(i(4),o("14px"),u("left")):window.innerWidth>=768?(i(3),o("12px"),u("center")):(i(2),o("10px"),u("center"))},[]);return L.exports.useEffect(()=>(c(Ig()),d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)),[c,d]),L.exports.useEffect(()=>{const p=[...e].sort((m,v)=>v.createdAt-m.createdAt);n(p)},[e]),k(an,{children:M(xg,{children:[M("div",{className:"title",children:[k("h1",{children:"Photos"}),k("span",{children:"\uCD5C\uC2E0 photo \uB9AC\uC2A4\uD2B8"})]}),k("div",{className:"contents",children:t.length>0?k(vS,{options:{type:"loop",perPage:r,gap:s,focus:a,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!1,pauseOnFocus:!1,rewind:!1,speed:1.5}},extensions:{AutoScroll:WS},children:t.slice(0,10).map(p=>k(wS,{children:M(VS,{children:[k("div",{className:"top",children:k(Nn,{to:`photo/details/${p.id}`,children:k("img",{src:p.photo,alt:"photo"})})}),M("div",{className:"bottom",children:[k("p",{className:"photo_category",children:`<${p.category}>`}),k("p",{className:"photo_nickname",children:p.nickname}),k("p",{className:"photo_title",children:p.title}),k("p",{className:"photo_desc",children:p.desc.length>60?p.desc.slice(0,50)+"...":p.desc})]})]})},p.id))}):k("div",{className:"no-photos",children:"No photos available && Loading.."})})]})})};nt.main`
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
`;var JR="/modart/assets/main.eb927103.gif";const PX=uo(Zm,"todays_photos"),MX=async e=>{if(e){const t=uo(PX,e.name);return await Xm(t,e),await Jm(t)}return null},ZR=_r("todays/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("todaysData Not Found..");const{title:n,desc:r,type:i,photo:s,nickname:o}=e,a=await MX(s),u={title:n,desc:r,type:i,nickname:o,createdAt:Date.now()};return a&&(u.photo=a),{id:(await Qm(lo(Sr,"todays"),u)).id,...u}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),GS=_r("todays/get",async()=>(te.locale("ko"),(await Km(lo(Sr,"todays"))).docs.map((n,r)=>{const i=n.data(),{createdAt:s,...o}=i;let a;const u=te(),c=te(s);return u.diff(c,"days")<=1?a=c.fromNow():a=c.format("YYYY.MM.DD"),{id:n.id,number:r+1,createdAt:a,...o}}))),LX=sa({name:"today",initialState:{todays:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(ZR.fulfilled,(t,n)=>{const r=n.payload;return{...t,todays:[...t.todays,r],postCount:t.postCount+1}}).addCase(GS.fulfilled,(t,n)=>({...t,todays:n.payload,postCount:n.payload.length}))}});var $X=LX.reducer;const FX=()=>{const e=kt(d=>d.today.todays),[t,n]=L.exports.useState(e.length),[r,i]=L.exports.useState("16px"),[s,o]=L.exports.useState("left"),a=kn(),u="https://via.placeholder.com/500x750.png?text=No+Image",c=L.exports.useCallback(()=>{window.innerWidth>=1280?(n(5),o("left")):window.innerWidth>=1024?(n(4),i("14px"),o("left")):window.innerWidth>=768?(n(3),i("12px"),o("center")):(n(2),i("10px"),o("center"))},[]);return L.exports.useEffect(()=>(a(GS()),c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)),[a,c]),k(an,{children:M(xg,{children:[M("div",{className:"title",children:[k("h1",{children:"Today Story"}),k("span",{children:"\uCD5C\uC2E0 \uC77C\uC0C1\uC774\uC57C\uAE30 \uB9AC\uC2A4\uD2B8"})]}),e.length>0?k(vS,{options:{type:"loop",perPage:t,gap:r,focus:s,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!0,pauseOnFocus:!1,rewind:!1,speed:-1}},extensions:{AutoScroll:WS},children:e.slice(0,10).map(d=>k(wS,{children:M(VS,{children:[k("div",{className:"top",children:k(Nn,{to:`today/details/${d.id}`,children:d.photo?k("img",{src:d.photo,alt:"today"}):k("img",{src:u,alt:d.title})})}),M("div",{className:"bottom",children:[k("p",{className:"today_category",children:`<${d.type}>`}),k("p",{className:"today_nickname",children:d.nickname}),k("p",{className:"today_title",children:d.title}),k("p",{className:"today_desc",children:d.desc.length>60?d.desc.slice(0,50)+"...":d.desc})]})]})},d.id))}):k("div",{className:"no-qna",children:"No TodayList available && Loading.. "})]})})},UX=()=>M(pv,{children:[k(CX,{}),k(FX,{}),k(RX,{}),k(IX,{})]}),BX=nt.div`
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
              display: flex;
              line-height: 21px;
              font-size: clamp(16px, 1.5vw, 18px);
              letter-spacing: -0.27px;
              font-weight: 600;
              color: #000;
            }

            .email {
              line-height: 18px;
              font-size: clamp(12px, 1.25vw, 14px);
              letter-spacing: -0.21px;
              letter-spacing: -0.05px;
              color: rgba(34, 34, 34, 0.5);
            }

            a {
              margin-top: 12px;
              display: inline-flex;
              cursor: pointer;
              align-items: center;
              justify-content: center;
              vertical-align: middle;
              text-align: center;
              color: rgba(34, 34, 34, 0.8);
              background-color: #fff;
              height: 36px;
              line-height: 34px;
              margin-top: 12px;
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
            background: #FEFEFE;
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
`,VX=()=>{const e=kt(t=>t.login.user);return k(an,{children:k(BX,{children:e?M("div",{className:"contents",children:[M("div",{className:"users",children:[M("div",{className:"user_detail",children:[k("div",{className:"user_thumb",children:k("img",{src:"",alt:""})}),k("div",{className:"user_info",children:M("div",{className:"info_box",children:[k("strong",{className:"name",children:e.nickname}),k("p",{className:"email",children:e.email}),k(Nn,{to:"/",children:"\uD504\uB85C\uD544 \uC218\uC815"})]})})]}),M("div",{className:"board_detail",children:[M(Nn,{to:"/",className:"board_item",children:[k("strong",{className:"info",children:"\uAC8C\uC2DC\uAE00"}),k("p",{className:"title",children:"2 (\uAC1C)"})]}),M(Nn,{to:"/",className:"board_item",children:[k("strong",{className:"info",children:"2100P"}),k("p",{className:"title",children:"\uD3EC\uC778\uD2B8"})]})]})]}),k("div",{className:"items"}),k("div",{className:"items"})]}):k("div",{children:"No Data"})})})},_1=_r("auth/signUp",async e=>{try{const{email:t,password:n,nickname:r}=e,s=(await W9(ea,t,n)).user;return await lY(Eh(Sr,"users",s.uid),{uid:s.uid,nickname:r,email:t}),{uid:s.uid,email:t,nickname:r}}catch(t){throw t}}),zX=sa({name:"auth",initialState:null,extraReducers:e=>{e.addCase(_1.fulfilled,(t,n)=>{const{uid:r,email:i,nickname:s}=n.payload;return{...t,uid:r,email:i,nickname:s}}),e.addCase(_1.rejected,(t,n)=>n.error.message)}});var jX=zX.reducer;function YX(e){return Er({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(e)}function WX(e){return Er({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(e)}const HX=({text:e})=>k(ZQ,{children:k("p",{children:e})}),eP=({text:e,link:t})=>{const[n,r]=L.exports.useState({});L.exports.useState({});const[i,s]=L.exports.useState(!1),[o,a]=L.exports.useState(""),u=kn(),c=vr(),d=v=>{r({...n,[v.target.name]:v.target.value})};return M(JQ,{children:[M("div",{className:"left",children:[k("div",{className:"toggle",onClick:()=>c("/"),children:k(YX,{})}),M("div",{className:"textbox",children:[k("strong",{className:"title",children:"ModArt"}),k("span",{children:"< \uBAA8\uB4DC\uC544\uD2B8 />"})]})]}),M("div",{className:"right",children:[i&&k(HX,{text:o}),k("form",{onSubmit:async v=>{if(v.preventDefault(),Object.values(n).every(_=>_!=="")){if(e==="\uD68C\uC6D0\uAC00\uC785")try{await u(_1(n)).unwrap(),a("\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC131\uACF5\uD558\uC600\uC2B5\uB2C8\uB2E4."),s(!0),c("/account/login")}catch{a("\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."),s(!0),setTimeout(()=>{s(!1)},2e3)}else if(e==="\uB85C\uADF8\uC778")try{if(!await u(t1(n)).unwrap()){a("\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC720\uC800\uC785\uB2C8\uB2E4."),s(!0),setTimeout(()=>{s(!1)},2e3);return}c("/")}catch{a("\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),s(!0),setTimeout(()=>{s(!1)},2e3)}}},children:e==="\uD68C\uC6D0\uAC00\uC785"?M(pv,{children:[M("div",{className:"area",children:[k(vu,{type:"email",name:"email",onChange:d,autoComplete:"off"}),k("label",{htmlFor:"email",children:"Email"})]}),M("div",{className:"area",children:[k(vu,{type:"password",name:"password",onChange:d,autoComplete:"off"}),k("label",{htmlFor:"password",children:"Password"})]}),M("div",{className:"area",children:[k(vu,{type:"text",name:"nickname",onChange:d,autoComplete:"off"}),k("label",{htmlFor:"nickname",children:"\uB2C9\uB124\uC784"})]}),k(hy,{type:"submit",children:e})]}):M(pv,{children:[M("div",{className:"area",children:[k(vu,{type:"email",name:"email",onChange:d}),k("label",{htmlFor:"email",children:"email"})]}),M("div",{className:"area",children:[k(vu,{type:"password",name:"password",onChange:d}),k("label",{htmlFor:"password",children:"Password"})]}),k(hy,{type:"submit",children:e})]})}),k("div",{className:"socialLogin",children:M(hy,{className:"googleLogin",onClick:async()=>{try{await u(e1()).unwrap(),a("\uAD6C\uAE00\uACC4\uC815 \uB85C\uADF8\uC778 \uB418\uC168\uC2B5\uB2C8\uB2E4."),c("/")}catch(v){a(v.message)}},children:[k("div",{className:"googleIcon",children:k(WX,{})}),k("p",{className:"googleText",children:"Sign In With Google"})]})}),k("div",{className:"signUp_link",children:k(Nn,{to:`/account/${t==="\uD68C\uC6D0\uAC00\uC785"?"signup":"login"}`,children:t})})]})]})},tP=nt.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 0 16px;
    }
`,GX=()=>k(tP,{children:k(eP,{text:"\uD68C\uC6D0\uAC00\uC785",link:"\uB85C\uADF8\uC778"})}),qX=()=>k(tP,{children:k(eP,{text:"\uB85C\uADF8\uC778",link:"\uD68C\uC6D0\uAC00\uC785"})});(()=>{var e={d:(s,o)=>{for(var a in o)e.o(o,a)&&!e.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:o[a]})},o:(s,o)=>Object.prototype.hasOwnProperty.call(s,o),r:s=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}},t={};function n(s,o){for(var a=0;a<o.length;a++){var u=o[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(s,u.key,u)}}e.r(t),e.d(t,{default:()=>i});var r=function(){function s(){(function(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")})(this,s)}var o,a;return o=s,a=[{key:"changeHeightWidth",value:function(u,c,d,p,m,v){return d>p&&(u=Math.round(u*p/d),d=p),u>c&&(d=Math.round(d*c/u),u=c),m&&d<m&&(u=Math.round(u*m/d),d=m),v&&u<v&&(d=Math.round(d*v/u),u=v),{height:u,width:d}}},{key:"resizeAndRotateImage",value:function(u,c,d,p,m){var v=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"jpeg",w=arguments.length>6&&arguments[6]!==void 0?arguments[6]:100,_=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,x=w/100,S=document.createElement("canvas"),y=u.width,C=u.height,T=this.changeHeightWidth(C,d,y,c,p,m);!_||_!==90&&_!==270?(S.width=T.width,S.height=T.height):(S.width=T.height,S.height=T.width),y=T.width,C=T.height;var A=S.getContext("2d");return A.fillStyle="rgba(0, 0, 0, 0)",A.fillRect(0,0,y,C),A.imageSmoothingEnabled&&A.imageSmoothingQuality&&(A.imageSmoothingQuality="high"),_&&(A.rotate(_*Math.PI/180),_===90?A.translate(0,-S.width):_===180?A.translate(-S.width,-S.height):_===270?A.translate(-S.height,0):_!==0&&_!==360||A.translate(0,0)),A.drawImage(u,0,0,y,C),S.toDataURL("image/".concat(v),x)}},{key:"b64toByteArrays",value:function(u,c){for(var d=atob(u.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),p=[],m=0;m<d.length;m+=512){for(var v=d.slice(m,m+512),w=new Array(v.length),_=0;_<v.length;_++)w[_]=v.charCodeAt(_);var x=new Uint8Array(w);p.push(x)}return p}},{key:"b64toBlob",value:function(u,c){var d=this.b64toByteArrays(u,c);return new Blob(d,{type:c,lastModified:new Date})}},{key:"b64toFile",value:function(u,c,d){var p=this.b64toByteArrays(u,d);return new File(p,c,{type:d,lastModified:new Date})}},{key:"createResizedImage",value:function(u,c,d,p,m,v,w){var _=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"base64",x=arguments.length>8&&arguments[8]!==void 0?arguments[8]:null,S=arguments.length>9&&arguments[9]!==void 0?arguments[9]:null,y=new FileReader;if(!u)throw Error("File Not Found!");if(u.type&&!u.type.includes("image"))throw Error("File Is NOT Image!");y.readAsDataURL(u),y.onload=function(){var C=new Image;C.src=y.result,C.onload=function(){var T=s.resizeAndRotateImage(C,c,d,x,S,p,m,v),A="image/".concat(p);switch(_){case"blob":var O=s.b64toBlob(T,A);w(O);break;case"base64":w(T);break;case"file":var b=u.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(p.toString()),N=s.b64toFile(T,b,A);w(N);break;default:w(T)}}},y.onerror=function(C){throw Error(C)}}}],a&&n(o,a),s}();const i={imageFileResizer:function(s,o,a,u,c,d,p,m,v,w){return r.createResizedImage(s,o,a,u,c,d,p,m,v,w)}}})();const KX=()=>{const e=kt(c=>c.login.user),t=e==null?void 0:e.nickname,n=L.exports.useRef(),[r,i]=L.exports.useState({}),s=kn(),o=vr(),a=c=>{c.target.name==="photo"?i({...r,[c.target.name]:c.target.files[0]}):i({...r,[c.target.name]:c.target.value})};return L.exports.useEffect(()=>{n.current.focus()},[n]),k(an,{children:M(Lh,{children:[k("div",{className:"post_title",children:k("h1",{children:"<OOTD>"})}),M("form",{onSubmit:async c=>{c.preventDefault();try{const d={...r,nickname:t};await s(zR(d)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),o(-1),console.log(r)}catch(d){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(d)}},encType:"multipart/form-data",children:[M("p",{className:"nickname",children:[k("span",{className:"author",children:"\uC791\uC131\uC790"}),t]}),k("input",{ref:n,type:"text",onChange:a,autoComplete:"off",name:"title",placeholder:"\uAE00\uC81C\uBAA9"}),k("input",{type:"text",onChange:a,autoComplete:"off",name:"brand",placeholder:"\uBE0C\uB79C\uB4DC\uBA85 ex) \uB098\uC774\uD0A4"}),k("input",{type:"text",onChange:a,autoComplete:"off",name:"height",placeholder:"\uD0A4"}),k("input",{type:"text",onChange:a,autoComplete:"off",name:"weight",placeholder:"\uBAB8\uBB34\uAC8C"}),k("textarea",{type:"text",name:"desc",onChange:a,placeholder:"contents.."}),k("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:a}),k("label",{htmlFor:"photo",className:"file_label",children:M("p",{children:[k("span",{children:k(eg,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30"]})}),k("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},Ld=()=>(Gp(),k(an,{children:k(Lh,{children:k("form",{children:k("p",{className:"nickname"})})})})),QX=nt.div`
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
`,XX=nt.div`
  width: 100%;
  background: #fefefe;

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
      background-color: #f6f6f6;
      border-bottom: 1px solid #fff;
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
`,JX=nt.div`
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
`,ZX=()=>{const{id:e}=Gp(),t=kt(i=>i.board.boards),n=kn(),r=t.find(i=>i.id===e);return L.exports.useEffect(()=>{n(kg())},[n]),L.exports.useEffect(()=>{const i=t.find(s=>s.id===e);console.log(i)},[t,e]),k(an,{children:k(JX,{children:r&&M("div",{className:"contents",children:[M("div",{className:"board",children:[k("div",{className:"boardImg",children:k("img",{src:r.photo,alt:r.nickname})}),M("div",{className:"boardInfo",children:[M("div",{className:"title",children:[M("h1",{children:["Information ",k("span",{children:"< \uC2A4\uD0C0\uC77C \uC815\uBCF4 >"})]}),M("p",{className:"date",children:[r.createdAt,"..."]})]}),M("div",{className:"info",children:[M("div",{className:"area",children:[k("div",{className:"user_img",children:k("img",{src:JR,alt:r.nickname})}),k("p",{children:r.nickname})]}),M("div",{className:"area",children:[k("label",{children:"Title"}),k("p",{children:r.title})]}),M("div",{className:"area",children:[k("label",{children:"Brand"}),k("p",{children:r.brand})]}),M("div",{className:"area",children:[k("label",{children:"Spec"}),M("div",{className:"spec",children:[M("p",{children:["Height: ",r.height]}),M("p",{children:["Weight: ",r.weight]})]})]}),M("div",{className:"area",children:[k("label",{children:"Contents"}),k("p",{children:r.desc})]})]})]})]}),M("div",{className:"comment",children:[M("div",{className:"comment_form",children:[k("div",{className:"users"}),k("div",{className:"form"})]}),k("ul",{className:"comment_list",children:k("li",{})})]})]})})})},eJ=nt.div`
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
`,tJ=nt.div`
  width: 100%;
  background: #fefefe;

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
      background-color: #f6f6f6;
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
`,nJ=nt.div`
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
`,rJ=()=>{const e=kt(u=>u.login.user),t=kt(u=>u.photo.photos)||null,n=kn(),r=vr(),[i,s]=L.exports.useState([]),o=()=>e?r("/photo/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),a=u=>{r(`/photo/details/${u.id}`)};return L.exports.useEffect(()=>{n(Ig())},[n]),L.exports.useEffect(()=>{const u=[...t].sort((c,d)=>d.createdAt-c.createdAt);s(u)},[t]),M(an,{children:[k(eJ,{children:M("div",{className:"contents",children:[M("div",{className:"text",children:[k("p",{children:"Free PhotoZone"}),k("span",{children:"\uC790\uC2E0\uC758 \uC0AC\uC9C4\uC2E4\uB825\uC744 \uBF50\uB0B4\uC8FC\uC138\uC694!"}),k("button",{className:"link-btn",onClick:o,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),k("div",{className:"image",children:k(bW,{})})]})}),M(tJ,{children:[k("div",{className:"filter"}),k("ul",{className:"photo_list",children:i.length>0?i.slice(0,10).map(u=>M("li",{className:"photo_card",children:[k("div",{className:"photo_img",onClick:()=>a(u),children:k("img",{src:u.photo,alt:u.title})}),M("div",{className:"items",children:[k("h3",{className:"photo_title",onClick:()=>a(u),children:u.title.length>30?u.title.subString(0,30)+"...":u.title}),M("div",{className:"item_contents",children:[k("span",{className:"item_category",children:u.category}),M("div",{className:"sub_items",children:[k("span",{className:"item_nickname",children:u.nickname}),k("span",{className:"item_date",children:u.createdAt})]})]})]})]},u.id)):k("div",{className:"no-data",children:k("h3",{children:"\uC800\uC7A5\uB41C \uAC8C\uC2DC\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4..."})})})]})]})},iJ=()=>{const[e,t]=L.exports.useState({}),[n,r]=L.exports.useState([]),i=kt(d=>d.login.user),s=i==null?void 0:i.nickname,o=kn(),a=vr(),u=d=>{if(d.target.name==="photo")t({...e,[d.target.name]:d.target.files[0]});else if(d.target.name==="category"){const{value:p,checked:m}=d.target;r(m?[...n,p]:n.filter(v=>v!==p))}else t({...e,[d.target.name]:d.target.value})};return k(an,{children:M(Lh,{children:[k("div",{className:"post_title",children:k("h1",{children:"<Photos>"})}),M("form",{encType:"multipart/form-data",onSubmit:async d=>{d.preventDefault();try{const p={...e,nickname:s,category:n};await o(XR(p)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),a(-1)}catch(p){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(p)}},children:[M("p",{className:"nickname",children:[k("span",{className:"author",children:"\uC791\uC131\uC790"}),s]}),M("div",{className:"category-wrap",children:[M("label",{children:[k("input",{type:"checkbox",name:"category",value:"\uC790\uC5F0",onChange:u}),k("i",{}),k("span",{children:"\uC790\uC5F0"})]}),M("label",{children:[k("input",{type:"checkbox",name:"category",value:"\uC778\uBB3C",onChange:u}),k("i",{}),k("span",{children:"\uC778\uBB3C"})]}),M("label",{children:[k("input",{type:"checkbox",name:"category",value:"\uC74C\uC2DD",onChange:u}),k("i",{}),k("span",{children:"\uC74C\uC2DD"})]}),M("label",{children:[k("input",{type:"checkbox",name:"category",value:"\uC77C\uC0C1",onChange:u}),k("i",{}),k("span",{children:"\uC77C\uC0C1"})]})]}),k("input",{type:"text",placeholder:"\uC81C\uBAA9",name:"title",autoComplete:"off",onChange:u}),k("input",{type:"text",placeholder:"\uC124\uBA85",name:"desc",autoComplete:"off",onChange:u}),k("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:u}),k("label",{htmlFor:"photo",className:"file_label",children:M("p",{children:[k("span",{children:k(eg,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30"]})}),k("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},sJ=()=>{const e=kt(o=>o.login.user),t=kt(o=>o.board.boards)||null,n=vr(),r=kn(),i=()=>e?n("/board/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),s=o=>{n(`/board/details/${o.id}`)};return L.exports.useEffect(()=>{r(kg())},[r]),M(an,{children:[k(QX,{children:M("div",{className:"contents",children:[M("div",{className:"text",children:[k("p",{children:"OOTD of the day"}),k("span",{children:"\uC790\uC2E0\uC758 OOTD\uB97C \uACF5\uC720 \uD574\uC8FC\uC138\uC694!"}),k("button",{className:"link-btn",onClick:i,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),k("div",{className:"image",children:k(OW,{})})]})}),k(XX,{children:k("ul",{className:"board_list",children:t.length>0?t.map(o=>M("li",{className:"board_card",children:[k("div",{className:"board_img",onClick:()=>s(o),children:k("img",{src:o.photo,alt:o.title})}),M("div",{className:"items",children:[k("h3",{className:"board_title",onClick:()=>s(o),children:o.title.length>30?o.title.subString(0,30)+"...":o.title}),M("div",{className:"item_contents",children:[k("span",{className:"item_brand",children:o.brand}),M("div",{className:"sub_items",children:[k("span",{className:"item_nickname",children:o.nickname}),k("span",{className:"item_date",children:o.createdAt})]})]})]})]},o.id)):k("div",{className:"no-data",children:k("h3",{children:"Loading..."})})})})]})};function oJ(e){return Er({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 1c4.418 0 8 2.91 8 6.5s-3.582 6.5-8 6.5c-0.424 0-0.841-0.027-1.247-0.079-1.718 1.718-3.77 2.027-5.753 2.072v-0.421c1.071-0.525 2-1.48 2-2.572 0-0.152-0.012-0.302-0.034-0.448-1.809-1.192-2.966-3.012-2.966-5.052 0-3.59 3.582-6.5 8-6.5z"}}]})(e)}const aJ=()=>{const{id:e}=Gp(),t=kt(i=>i.photo.photos),n=kn();vr();const r=t.find(i=>i.id===e);return L.exports.useEffect(()=>{n(Ig())},[n]),k(an,{children:k(nJ,{children:r&&M("div",{className:"contents",children:[M("div",{className:"photo_users",children:[k("div",{className:"user_img",children:k("img",{src:JR,alt:r.nickname})}),M("div",{className:"user",children:[k("p",{children:r.nickname}),k("span",{children:r.category})]})]}),k("div",{className:"snapImg",children:k("img",{src:r.photo,alt:r.nickname})}),M("div",{className:"photo_info",children:[M("div",{className:"icon",children:[M("div",{className:"link",children:[k("button",{className:"like",children:k(AW,{})}),k("button",{className:"comment",children:k(oJ,{})})]}),M("span",{className:"date",children:[r.createdAt," ..."]})]}),M("div",{className:"photo_title",children:[k("h1",{children:r.title}),k("p",{children:r.desc})]})]})]})})})},lJ=()=>k("div",{children:"TodayDetail"}),uJ=()=>{const[e,t]=L.exports.useState({photo:null,fileName:""}),n=kt(u=>u.login.user),r=n==null?void 0:n.nickname,i=kn(),s=vr(),o=u=>{if(u.target.name==="photo"){const c=u.target.file[0];c&&t({...e,photo:c,fileName:c.name})}else t({...e,[u.target.name]:u.target.value})};return k(an,{children:M(Lh,{children:[k("div",{className:"post_title",children:k("h1",{children:"<Todays Story>"})}),M("form",{encType:"multipart/form-data",onSubmit:async u=>{u.preventDefault();try{const c={...e,nickname:r};await i(ZR(c)).unwrap(),s(-1),console.log(e)}catch(c){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(c)}},children:[M("p",{className:"nickname",children:[k("span",{className:"author",children:"\uC791\uC131\uC790"}),r]}),k("input",{type:"text",name:"title",placeholder:"\uC81C\uBAA9",autoComplete:"off",onChange:o}),k("input",{type:"text",name:"desc",placeholder:"\uB0B4\uC6A9",autoComplete:"off",onChange:o}),M("select",{name:"type",value:e.type||"",placeholder:"\uC885\uB958",autoComplete:"off",onChange:o,children:[k("option",{value:"",children:"\uC885\uB958 \uC120\uD0DD"}),k("option",{value:"\uD328\uC158",children:"\uD328\uC158"}),k("option",{value:"\uC5F0\uC608\uC778",children:"\uC5F0\uC608\uC778"}),k("option",{value:"\uC6B4\uB3D9",children:"\uC6B4\uB3D9"}),k("option",{value:"\uC720\uBA38",children:"\uC720\uBA38"}),k("option",{value:"\uBBF8\uC6A9",children:"\uBBF8\uC6A9"}),k("option",{value:"\uBBF8\uC2A4\uD130\uB9AC",children:"\uBBF8\uC2A4\uD130\uB9AC"})]}),k("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:o}),k("label",{htmlFor:"photo",className:"file_label",children:M("p",{children:[k("span",{children:k(eg,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30",k("span",{className:"label_text",children:e.fileName})]})}),k("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},cJ=nt.div`
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
`,hJ=nt.div`
  width: 100%;
  background: #fefefe;

  .today_list {
    margin: 12px auto 0px auto;
    max-width: 1280px;
    padding: 3px 6px;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', arial,
      sans-serif;

    .today_card {
      display: flex;
      padding: 3px;
      min-height: 57px;
      max-height: 70px;
      margin-bottom: 6px;
      background-color: #f6f6f6;
      border-bottom: 1px solid #fff;
      gap: 12px;

      &:last-child {
        margin-bottom: 0;
      }

      .numbers {
        min-width: 30px;
        span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
      }

      .today_img {
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
`;function dJ(e){return Er({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M11.667 0h-8.651v1.984h-0.516c-0.827 0-1.5 0.673-1.5 1.5v8.588l2.521 4.956 2.464-4.959v-8.585c0-0.827-0.673-1.5-1.5-1.5h-0.469v-0.984h6.984v5h5v10h-11.5v1h12.5v-11.692l-5.333-5.308zM3.908 14.002h-0.804l-1.104-2.17v-5.848h1v6.027h1v-6.027h0.984v5.851l-1.076 2.167zM4.984 3.484v1.5h-2.984v-1.5c0-0.275 0.225-0.5 0.5-0.5h1.984c0.276 0 0.5 0.225 0.5 0.5zM12 1.742l3.273 3.258h-3.273v-3.258z"}}]})(e)}const fJ=()=>{const e=kt(u=>u.login.user),t=kt(u=>u.today.todays),[n,r]=L.exports.useState([]),i=vr(),s=kn(),o="https://via.placeholder.com/500x750.png?text=No+Image",a=()=>e?i("/today/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null);return L.exports.useEffect(()=>{s(GS())},[s]),L.exports.useEffect(()=>{const u=[...t].sort((c,d)=>d.createdAt-c.createdAt);r(u),console.log(u)},[t]),M(an,{children:[k(cJ,{children:M("div",{className:"contents",children:[M("div",{className:"text",children:[k("p",{children:"Free Talking"}),k("span",{children:"\uD558\uB8E8\uC758 \uC77C\uC0C1\uC744 \uACF5\uC720\uD574\uBCF4\uC138\uC694:)"}),k("button",{className:"link-btn",onClick:a,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),k("div",{className:"image",children:k(dJ,{})})]})}),k(hJ,{children:k("ul",{className:"today_list",children:n?n.slice(0,10).map(u=>M("li",{className:"today_card",children:[k("div",{className:"numbers",children:M("span",{children:["#",u.number]})}),k("div",{className:"today_img",children:u.photo?k("img",{src:u.photo,loading:"lazy",alt:u.title}):k("img",{src:o,loading:"lazy",alt:u.title})}),M("div",{className:"items",children:[k("h3",{className:"today_title",onClick:()=>detailClick(u),children:u.title.length>30?u.title.subString(0,30)+"...":u.title}),M("div",{className:"item_contents",children:[k("span",{className:"item_type",children:u.type}),M("div",{className:"sub_items",children:[k("span",{className:"item_nickname",children:u.nickname}),k("span",{className:"item_date",children:u.createdAt})]})]})]})]},u.id)):k("div",{className:"no-data",children:k("h3",{children:"\uC800\uC7A5\uB41C \uAC8C\uC2DC\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4..."})})})})]})},pJ=nt.div`
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
`,mJ=nt.article`
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
`,gJ=nt.div`
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
`,yJ=()=>{const e=kt(i=>i.login.user),t=kt(i=>i.qna.questions),n=vr();return M(an,{children:[k(pJ,{children:M("div",{className:"contents",children:[M("div",{className:"text",children:[k("p",{children:"Ask me any questions"}),k("span",{children:"\uC9C8\uBB38\uACFC \uB2F5\uBCC0\uC744 \uD574\uC8FC\uC138\uC694!"}),k("button",{className:"link-btn",onClick:()=>e?n("/qna/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),children:"\uC9C8\uBB38\uD558\uAE30"})]}),k("div",{className:"image",children:k(NW,{})})]})}),k(gJ,{children:k("ul",{className:"qna_list",children:t.length>0?t.slice(0,10).map(i=>M("li",{className:"qna_card",children:[k("div",{className:"qna_img",children:k("img",{src:i.photo,loading:"lazy",alt:i.title})}),M("div",{className:"items",children:[k("h3",{className:"qna_title",children:i.title}),M("div",{className:"item_contents",children:[k("span",{className:"item_category",children:i.category}),k("span",{className:"item_date",children:"\uB0A0\uC9DC"}),k("span",{className:"item_nickname",children:i.nickname})]})]})]},i.id)):k("div",{className:"no-data",children:k("h3",{children:"\uC800\uC7A5\uB41C \uAC8C\uC2DC\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4..."})})})})]})},vJ=()=>{const{id:e}=Gp(),[t,n]=L.exports.useState(!1),r=kt(u=>u.qna.questions),i=kt(u=>u.login.user),s=kn(),o=r.find(u=>u.id===e);console.log(o);const a=()=>(i||window.alert("\uB85C\uADF8\uC778\uD558\uC5EC\uC57C \uC785\uB825\uAC00\uB2A5\uD569\uB2C8\uB2E4!"),null);return L.exports.useEffect(()=>{s(HS())},[s]),k(an,{children:k(mJ,{children:M("div",{className:"qna_card",children:[M("header",{className:"card_header",children:[M("h1",{children:[k("span",{children:"Q."}),"\uC9C8\uBB38 title"]}),M("div",{className:"card_info",children:[M("div",{className:"inner",children:[k("span",{children:"\uC720\uC800\uC774\uBBF8\uC9C0?!"}),k("span",{children:"\uC720\uC800nickname"})]}),k("span",{className:"date",children:"2023-05-18"})]})]}),k("div",{className:"card_contents",children:k("p",{className:"card_desc",children:"qna\uB0B4\uC6A9"})}),M("footer",{className:"card_footer",children:[M("div",{className:"inner",children:[k("button",{children:"\uC88B\uC544\uC694"}),k("button",{onClick:()=>n(!t),children:"\uB313\uAE00"}),k("button",{children:"\uACF5\uC720\uD558\uAE30"})]}),t?k("div",{className:"comment",children:M("div",{className:"comment_in",children:[M("div",{className:"top",children:[k("span",{children:i?i.nickname:k(Nn,{to:"/account/login",children:"\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694."})}),k("button",{children:"\uB4F1\uB85D"})]}),k("div",{className:"bottom",children:k("textarea",{cols:"30",rows:"10",onClick:a,children:"\uB313\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."})})]})}):null]})]})})})},wJ=()=>{const[e,t]=L.exports.useState({}),[n,r]=L.exports.useState([]),i=kt(d=>d.login.user),s=i==null?void 0:i.nickname,o=kn(),a=vr(),u=d=>{if(d.target.name==="photo")t({...e,[d.target.name]:d.target.files[0]});else if(d.target.name==="category"){const{value:p,checked:m}=d.target;r(m?[...n,p]:n.filter(v=>v!==p))}else t({...e,[d.target.name]:d.target.value})};return k(an,{children:M(Lh,{children:[k("div",{className:"post_title",children:k("h1",{children:"<Question>"})}),M("form",{encType:"multipart/form-data",onSubmit:async d=>{d.preventDefault();try{const p={...e,nickname:s,category:n};await o(QR(p)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),a(-1)}catch(p){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(p)}},children:[M("p",{className:"nickname",children:[k("span",{className:"author",children:"\uC791\uC131\uC790"}),s]}),M("div",{className:"category-wrap",children:[M("label",{children:[k("input",{type:"checkbox",name:"category",value:"\uAC74\uAC15",onChange:u}),k("i",{}),k("span",{children:"\uAC74\uAC15"})]}),M("label",{children:[k("input",{type:"checkbox",name:"category",value:"\uD328\uC158",onChange:u}),k("i",{}),k("span",{children:"\uD328\uC158"})]}),M("label",{children:[k("input",{type:"checkbox",name:"category",value:"\uACF5\uBD80",onChange:u}),k("i",{}),k("span",{children:"\uACF5\uBD80"})]}),M("label",{children:[k("input",{type:"checkbox",name:"category",value:"\uC77C\uC0C1",onChange:u}),k("i",{}),k("span",{children:"\uC77C\uC0C1"})]})]}),k("input",{type:"text",name:"title",placeholder:"\uC81C\uBAA9",autoComplete:"off",onChange:u}),k("input",{type:"text",name:"desc",placeholder:"\uB0B4\uC6A9",autoComplete:"off",onChange:u}),k("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:u}),k("label",{htmlFor:"photo",className:"file_label",children:M("p",{children:[k("span",{children:k(eg,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30"]})}),k("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},_J=[{path:"/",element:k(UX,{})},{path:"/account",element:k(VX,{})},{path:"/account/signup",element:k(GX,{})},{path:"/account/login",element:k(qX,{})},{path:"/board",element:k(sJ,{})},{path:"/board/write",element:k(KX,{})},{path:"/board/:id",element:k(Ld,{})},{path:"/photo",element:k(rJ,{})},{path:"/photo/write",element:k(iJ,{})},{path:"/photo/:id",element:k(Ld,{})},{path:"/today",element:k(fJ,{})},{path:"/today/write",element:k(uJ,{})},{path:"/today/:id",element:k(Ld,{})},{path:"/qna",element:k(yJ,{})},{path:"/qna/write",element:k(wJ,{})},{path:"/qna/:id",element:k(Ld,{})},{path:"/today/details/:id",element:k(lJ,{})},{path:"/board/details/:id",element:k(ZX,{})},{path:"/photo/details/:id",element:k(aJ,{})},{path:"/qna/details/:id",element:k(vJ,{})}];function SJ(){const[e,t]=L.exports.useState(!1),n=()=>{t(i=>!i)},r=()=>{window.innerWidth>768&&t(!1)};return L.exports.useEffect(()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[]),k(J5,{className:e?" active":"",style:{height:e?"100vh":"auto",overflow:e?"hidden":"auto"},children:M(Q3,{basename:"modart",children:[k(X5,{}),k(LW,{toggleMenu:n,toggle:e}),k(W3,{children:_J.map((i,s)=>k(qD,{path:i.path,element:i.element},s))})]})})}const EJ=sa({name:"users",initialState:{currentUser:null,postCount:0},reducers:{setCurrentUser:(e,t)=>{e.currentUser=t.payload,e.postCount=t.payload?t.payload.postCount:0},incrementPostCount:e=>{e.postCount+=1}}});var CJ=EJ.reducer;const nP=m8({reducer:{auth:jX,login:xW,users:CJ,board:qQ,photo:OX,today:$X,qna:DX}});nP.dispatch(EW());dy.createRoot(document.getElementById("root")).render(k(PF,{store:nP,children:k(SJ,{})}))});export default kJ();
