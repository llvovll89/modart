var BL=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var RJ=BL((FJ,ff)=>{const VL=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};VL();var AT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function NT(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var L={exports:{}},Me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=Symbol.for("react.element"),zL=Symbol.for("react.portal"),jL=Symbol.for("react.fragment"),YL=Symbol.for("react.strict_mode"),WL=Symbol.for("react.profiler"),HL=Symbol.for("react.provider"),GL=Symbol.for("react.context"),qL=Symbol.for("react.forward_ref"),KL=Symbol.for("react.suspense"),QL=Symbol.for("react.memo"),XL=Symbol.for("react.lazy"),FE=Symbol.iterator;function JL(e){return e===null||typeof e!="object"?null:(e=FE&&e[FE]||e["@@iterator"],typeof e=="function"?e:null)}var OT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},RT=Object.assign,PT={};function Nl(e,t,n){this.props=e,this.context=t,this.refs=PT,this.updater=n||OT}Nl.prototype.isReactComponent={};Nl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function MT(){}MT.prototype=Nl.prototype;function S1(e,t,n){this.props=e,this.context=t,this.refs=PT,this.updater=n||OT}var E1=S1.prototype=new MT;E1.constructor=S1;RT(E1,Nl.prototype);E1.isPureReactComponent=!0;var UE=Array.isArray,LT=Object.prototype.hasOwnProperty,C1={current:null},$T={key:!0,ref:!0,__self:!0,__source:!0};function FT(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)LT.call(t,r)&&!$T.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:qc,type:e,key:s,ref:o,props:i,_owner:C1.current}}function ZL(e,t){return{$$typeof:qc,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function k1(e){return typeof e=="object"&&e!==null&&e.$$typeof===qc}function e6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var BE=/\/+/g;function Kg(e,t){return typeof e=="object"&&e!==null&&e.key!=null?e6(""+e.key):t.toString(36)}function Fd(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qc:case zL:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Kg(o,0):r,UE(i)?(n="",e!=null&&(n=e.replace(BE,"$&/")+"/"),Fd(i,t,n,"",function(c){return c})):i!=null&&(k1(i)&&(i=ZL(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(BE,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",UE(e))for(var a=0;a<e.length;a++){s=e[a];var u=r+Kg(s,a);o+=Fd(s,t,n,u,i)}else if(u=JL(e),typeof u=="function")for(e=u.call(e),a=0;!(s=e.next()).done;)s=s.value,u=r+Kg(s,a++),o+=Fd(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function id(e,t,n){if(e==null)return e;var r=[],i=0;return Fd(e,r,"","",function(s){return t.call(n,s,i++)}),r}function t6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Mn={current:null},Ud={transition:null},n6={ReactCurrentDispatcher:Mn,ReactCurrentBatchConfig:Ud,ReactCurrentOwner:C1};Me.Children={map:id,forEach:function(e,t,n){id(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return id(e,function(){t++}),t},toArray:function(e){return id(e,function(t){return t})||[]},only:function(e){if(!k1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Me.Component=Nl;Me.Fragment=jL;Me.Profiler=WL;Me.PureComponent=S1;Me.StrictMode=YL;Me.Suspense=KL;Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n6;Me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=RT({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=C1.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)LT.call(t,u)&&!$T.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:qc,type:e.type,key:i,ref:s,props:r,_owner:o}};Me.createContext=function(e){return e={$$typeof:GL,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:HL,_context:e},e.Consumer=e};Me.createElement=FT;Me.createFactory=function(e){var t=FT.bind(null,e);return t.type=e,t};Me.createRef=function(){return{current:null}};Me.forwardRef=function(e){return{$$typeof:qL,render:e}};Me.isValidElement=k1;Me.lazy=function(e){return{$$typeof:XL,_payload:{_status:-1,_result:e},_init:t6}};Me.memo=function(e,t){return{$$typeof:QL,type:e,compare:t===void 0?null:t}};Me.startTransition=function(e){var t=Ud.transition;Ud.transition={};try{e()}finally{Ud.transition=t}};Me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Me.useCallback=function(e,t){return Mn.current.useCallback(e,t)};Me.useContext=function(e){return Mn.current.useContext(e)};Me.useDebugValue=function(){};Me.useDeferredValue=function(e){return Mn.current.useDeferredValue(e)};Me.useEffect=function(e,t){return Mn.current.useEffect(e,t)};Me.useId=function(){return Mn.current.useId()};Me.useImperativeHandle=function(e,t,n){return Mn.current.useImperativeHandle(e,t,n)};Me.useInsertionEffect=function(e,t){return Mn.current.useInsertionEffect(e,t)};Me.useLayoutEffect=function(e,t){return Mn.current.useLayoutEffect(e,t)};Me.useMemo=function(e,t){return Mn.current.useMemo(e,t)};Me.useReducer=function(e,t,n){return Mn.current.useReducer(e,t,n)};Me.useRef=function(e){return Mn.current.useRef(e)};Me.useState=function(e){return Mn.current.useState(e)};Me.useSyncExternalStore=function(e,t,n){return Mn.current.useSyncExternalStore(e,t,n)};Me.useTransition=function(){return Mn.current.useTransition()};Me.version="18.2.0";L.exports=Me;var Kt=L.exports,dv={},x1={exports:{}},tr={},UT={exports:{}},BT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,z){var P=$.length;$.push(z);e:for(;0<P;){var ee=P-1>>>1,U=$[ee];if(0<i(U,z))$[ee]=z,$[P]=U,P=ee;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var z=$[0],P=$.pop();if(P!==z){$[0]=P;e:for(var ee=0,U=$.length,B=U>>>1;ee<B;){var Y=2*(ee+1)-1,V=$[Y],D=Y+1,le=$[D];if(0>i(V,P))D<U&&0>i(le,V)?($[ee]=le,$[D]=P,ee=D):($[ee]=V,$[Y]=P,ee=Y);else if(D<U&&0>i(le,P))$[ee]=le,$[D]=P,ee=D;else break e}}return z}function i($,z){var P=$.sortIndex-z.sortIndex;return P!==0?P:$.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,p=null,m=3,y=!1,_=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k($){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=$)r(c),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(c)}}function T($){if(S=!1,k($),!_)if(n(u)!==null)_=!0,Te(b);else{var z=n(c);z!==null&&ge(T,z.startTime-$)}}function b($,z){_=!1,S&&(S=!1,E(N),N=-1),y=!0;var P=m;try{for(k(z),p=n(u);p!==null&&(!(p.expirationTime>z)||$&&!j());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,m=p.priorityLevel;var U=ee(p.expirationTime<=z);z=e.unstable_now(),typeof U=="function"?p.callback=U:p===n(u)&&r(u),k(z)}else r(u);p=n(u)}if(p!==null)var B=!0;else{var Y=n(c);Y!==null&&ge(T,Y.startTime-z),B=!1}return B}finally{p=null,m=P,y=!1}}var R=!1,A=null,N=-1,Z=5,F=-1;function j(){return!(e.unstable_now()-F<Z)}function J(){if(A!==null){var $=e.unstable_now();F=$;var z=!0;try{z=A(!0,$)}finally{z?X():(R=!1,A=null)}}else R=!1}var X;if(typeof v=="function")X=function(){v(J)};else if(typeof MessageChannel!="undefined"){var ue=new MessageChannel,oe=ue.port2;ue.port1.onmessage=J,X=function(){oe.postMessage(null)}}else X=function(){x(J,0)};function Te($){A=$,R||(R=!0,X())}function ge($,z){N=x(function(){$(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){_||y||(_=!0,Te(b))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function($){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var P=m;m=z;try{return $()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,z){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var P=m;m=$;try{return z()}finally{m=P}},e.unstable_scheduleCallback=function($,z,P){var ee=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ee+P:ee):P=ee,$){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=P+U,$={id:d++,callback:z,priorityLevel:$,startTime:P,expirationTime:U,sortIndex:-1},P>ee?($.sortIndex=P,t(c,$),n(u)===null&&$===n(c)&&(S?(E(N),N=-1):S=!0,ge(T,P-ee))):($.sortIndex=U,t(u,$),_||y||(_=!0,Te(b))),$},e.unstable_shouldYield=j,e.unstable_wrapCallback=function($){var z=m;return function(){var P=m;m=z;try{return $.apply(this,arguments)}finally{m=P}}}})(BT);UT.exports=BT;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VT=L.exports,Jn=UT.exports;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zT=new Set,ec={};function ia(e,t){cl(e,t),cl(e+"Capture",t)}function cl(e,t){for(ec[e]=t,e=0;e<t.length;e++)zT.add(t[e])}var Yi=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),fv=Object.prototype.hasOwnProperty,r6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,VE={},zE={};function i6(e){return fv.call(zE,e)?!0:fv.call(VE,e)?!1:r6.test(e)?zE[e]=!0:(VE[e]=!0,!1)}function s6(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function o6(e,t,n,r){if(t===null||typeof t=="undefined"||s6(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ln(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){an[e]=new Ln(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];an[t]=new Ln(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){an[e]=new Ln(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){an[e]=new Ln(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){an[e]=new Ln(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){an[e]=new Ln(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){an[e]=new Ln(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){an[e]=new Ln(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){an[e]=new Ln(e,5,!1,e.toLowerCase(),null,!1,!1)});var T1=/[\-:]([a-z])/g;function D1(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(T1,D1);an[t]=new Ln(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(T1,D1);an[t]=new Ln(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(T1,D1);an[t]=new Ln(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){an[e]=new Ln(e,1,!1,e.toLowerCase(),null,!1,!1)});an.xlinkHref=new Ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){an[e]=new Ln(e,1,!1,e.toLowerCase(),null,!0,!0)});function I1(e,t,n,r){var i=an.hasOwnProperty(t)?an[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(o6(t,n,i,r)&&(n=null),r||i===null?i6(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rs=VT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sd=Symbol.for("react.element"),ba=Symbol.for("react.portal"),Aa=Symbol.for("react.fragment"),b1=Symbol.for("react.strict_mode"),pv=Symbol.for("react.profiler"),jT=Symbol.for("react.provider"),YT=Symbol.for("react.context"),A1=Symbol.for("react.forward_ref"),mv=Symbol.for("react.suspense"),gv=Symbol.for("react.suspense_list"),N1=Symbol.for("react.memo"),fs=Symbol.for("react.lazy"),WT=Symbol.for("react.offscreen"),jE=Symbol.iterator;function au(e){return e===null||typeof e!="object"?null:(e=jE&&e[jE]||e["@@iterator"],typeof e=="function"?e:null)}var St=Object.assign,Qg;function Su(e){if(Qg===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qg=t&&t[1]||""}return`
`+Qg+e}var Xg=!1;function Jg(e,t){if(!e||Xg)return"";Xg=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Xg=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Su(e):""}function a6(e){switch(e.tag){case 5:return Su(e.type);case 16:return Su("Lazy");case 13:return Su("Suspense");case 19:return Su("SuspenseList");case 0:case 2:case 15:return e=Jg(e.type,!1),e;case 11:return e=Jg(e.type.render,!1),e;case 1:return e=Jg(e.type,!0),e;default:return""}}function vv(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Aa:return"Fragment";case ba:return"Portal";case pv:return"Profiler";case b1:return"StrictMode";case mv:return"Suspense";case gv:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case YT:return(e.displayName||"Context")+".Consumer";case jT:return(e._context.displayName||"Context")+".Provider";case A1:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N1:return t=e.displayName||null,t!==null?t:vv(e.type)||"Memo";case fs:t=e._payload,e=e._init;try{return vv(e(t))}catch{}}return null}function l6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vv(t);case 8:return t===b1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Hs(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function HT(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function u6(e){var t=HT(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function od(e){e._valueTracker||(e._valueTracker=u6(e))}function GT(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=HT(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function pf(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function yv(e,t){var n=t.checked;return St({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function YE(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Hs(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qT(e,t){t=t.checked,t!=null&&I1(e,"checked",t,!1)}function wv(e,t){qT(e,t);var n=Hs(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_v(e,t.type,n):t.hasOwnProperty("defaultValue")&&_v(e,t.type,Hs(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function WE(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _v(e,t,n){(t!=="number"||pf(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Eu=Array.isArray;function Wa(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Hs(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Sv(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return St({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function HE(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(G(92));if(Eu(n)){if(1<n.length)throw Error(G(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Hs(n)}}function KT(e,t){var n=Hs(t.value),r=Hs(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function GE(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function QT(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ev(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?QT(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ad,XT=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ad=ad||document.createElement("div"),ad.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ad.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tc(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ru={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c6=["Webkit","ms","Moz","O"];Object.keys(Ru).forEach(function(e){c6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ru[t]=Ru[e]})});function JT(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ru.hasOwnProperty(e)&&Ru[e]?(""+t).trim():t+"px"}function ZT(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=JT(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var h6=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cv(e,t){if(t){if(h6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function kv(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xv=null;function O1(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tv=null,Ha=null,Ga=null;function qE(e){if(e=Xc(e)){if(typeof Tv!="function")throw Error(G(280));var t=e.stateNode;t&&(t=Lp(t),Tv(e.stateNode,e.type,t))}}function e2(e){Ha?Ga?Ga.push(e):Ga=[e]:Ha=e}function t2(){if(Ha){var e=Ha,t=Ga;if(Ga=Ha=null,qE(e),t)for(e=0;e<t.length;e++)qE(t[e])}}function n2(e,t){return e(t)}function r2(){}var Zg=!1;function i2(e,t,n){if(Zg)return e(t,n);Zg=!0;try{return n2(e,t,n)}finally{Zg=!1,(Ha!==null||Ga!==null)&&(r2(),t2())}}function nc(e,t){var n=e.stateNode;if(n===null)return null;var r=Lp(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(G(231,t,typeof n));return n}var Dv=!1;if(Yi)try{var lu={};Object.defineProperty(lu,"passive",{get:function(){Dv=!0}}),window.addEventListener("test",lu,lu),window.removeEventListener("test",lu,lu)}catch{Dv=!1}function d6(e,t,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Pu=!1,mf=null,gf=!1,Iv=null,f6={onError:function(e){Pu=!0,mf=e}};function p6(e,t,n,r,i,s,o,a,u){Pu=!1,mf=null,d6.apply(f6,arguments)}function m6(e,t,n,r,i,s,o,a,u){if(p6.apply(this,arguments),Pu){if(Pu){var c=mf;Pu=!1,mf=null}else throw Error(G(198));gf||(gf=!0,Iv=c)}}function sa(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function KE(e){if(sa(e)!==e)throw Error(G(188))}function g6(e){var t=e.alternate;if(!t){if(t=sa(e),t===null)throw Error(G(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return KE(i),e;if(s===r)return KE(i),t;s=s.sibling}throw Error(G(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?e:t}function o2(e){return e=g6(e),e!==null?a2(e):null}function a2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=a2(e);if(t!==null)return t;e=e.sibling}return null}var l2=Jn.unstable_scheduleCallback,QE=Jn.unstable_cancelCallback,v6=Jn.unstable_shouldYield,y6=Jn.unstable_requestPaint,Ot=Jn.unstable_now,w6=Jn.unstable_getCurrentPriorityLevel,R1=Jn.unstable_ImmediatePriority,u2=Jn.unstable_UserBlockingPriority,vf=Jn.unstable_NormalPriority,_6=Jn.unstable_LowPriority,c2=Jn.unstable_IdlePriority,Op=null,Zr=null;function S6(e){if(Zr&&typeof Zr.onCommitFiberRoot=="function")try{Zr.onCommitFiberRoot(Op,e,void 0,(e.current.flags&128)===128)}catch{}}var Lr=Math.clz32?Math.clz32:k6,E6=Math.log,C6=Math.LN2;function k6(e){return e>>>=0,e===0?32:31-(E6(e)/C6|0)|0}var ld=64,ud=4194304;function Cu(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yf(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Cu(a):(s&=o,s!==0&&(r=Cu(s)))}else o=n&~i,o!==0?r=Cu(o):s!==0&&(r=Cu(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Lr(t),i=1<<n,r|=e[n],t&=~i;return r}function x6(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T6(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Lr(s),a=1<<o,u=i[o];u===-1?((a&n)===0||(a&r)!==0)&&(i[o]=x6(a,t)):u<=t&&(e.expiredLanes|=a),s&=~a}}function bv(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function h2(){var e=ld;return ld<<=1,(ld&4194240)===0&&(ld=64),e}function e0(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kc(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lr(t),e[t]=n}function D6(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Lr(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function P1(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Lr(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ge=0;function d2(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var f2,M1,p2,m2,g2,Av=!1,cd=[],bs=null,As=null,Ns=null,rc=new Map,ic=new Map,ms=[],I6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function XE(e,t){switch(e){case"focusin":case"focusout":bs=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":Ns=null;break;case"pointerover":case"pointerout":rc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ic.delete(t.pointerId)}}function uu(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Xc(t),t!==null&&M1(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function b6(e,t,n,r,i){switch(t){case"focusin":return bs=uu(bs,e,t,n,r,i),!0;case"dragenter":return As=uu(As,e,t,n,r,i),!0;case"mouseover":return Ns=uu(Ns,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return rc.set(s,uu(rc.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ic.set(s,uu(ic.get(s)||null,e,t,n,r,i)),!0}return!1}function v2(e){var t=xo(e.target);if(t!==null){var n=sa(t);if(n!==null){if(t=n.tag,t===13){if(t=s2(n),t!==null){e.blockedOn=t,g2(e.priority,function(){p2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bd(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nv(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xv=r,n.target.dispatchEvent(r),xv=null}else return t=Xc(n),t!==null&&M1(t),e.blockedOn=n,!1;t.shift()}return!0}function JE(e,t,n){Bd(e)&&n.delete(t)}function A6(){Av=!1,bs!==null&&Bd(bs)&&(bs=null),As!==null&&Bd(As)&&(As=null),Ns!==null&&Bd(Ns)&&(Ns=null),rc.forEach(JE),ic.forEach(JE)}function cu(e,t){e.blockedOn===t&&(e.blockedOn=null,Av||(Av=!0,Jn.unstable_scheduleCallback(Jn.unstable_NormalPriority,A6)))}function sc(e){function t(i){return cu(i,e)}if(0<cd.length){cu(cd[0],e);for(var n=1;n<cd.length;n++){var r=cd[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bs!==null&&cu(bs,e),As!==null&&cu(As,e),Ns!==null&&cu(Ns,e),rc.forEach(t),ic.forEach(t),n=0;n<ms.length;n++)r=ms[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ms.length&&(n=ms[0],n.blockedOn===null);)v2(n),n.blockedOn===null&&ms.shift()}var qa=rs.ReactCurrentBatchConfig,wf=!0;function N6(e,t,n,r){var i=Ge,s=qa.transition;qa.transition=null;try{Ge=1,L1(e,t,n,r)}finally{Ge=i,qa.transition=s}}function O6(e,t,n,r){var i=Ge,s=qa.transition;qa.transition=null;try{Ge=4,L1(e,t,n,r)}finally{Ge=i,qa.transition=s}}function L1(e,t,n,r){if(wf){var i=Nv(e,t,n,r);if(i===null)c0(e,t,r,_f,n),XE(e,r);else if(b6(i,e,t,n,r))r.stopPropagation();else if(XE(e,r),t&4&&-1<I6.indexOf(e)){for(;i!==null;){var s=Xc(i);if(s!==null&&f2(s),s=Nv(e,t,n,r),s===null&&c0(e,t,r,_f,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else c0(e,t,r,null,n)}}var _f=null;function Nv(e,t,n,r){if(_f=null,e=O1(r),e=xo(e),e!==null)if(t=sa(e),t===null)e=null;else if(n=t.tag,n===13){if(e=s2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return _f=e,null}function y2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(w6()){case R1:return 1;case u2:return 4;case vf:case _6:return 16;case c2:return 536870912;default:return 16}default:return 16}}var Es=null,$1=null,Vd=null;function w2(){if(Vd)return Vd;var e,t=$1,n=t.length,r,i="value"in Es?Es.value:Es.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Vd=i.slice(e,1<r?1-r:void 0)}function zd(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hd(){return!0}function ZE(){return!1}function nr(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?hd:ZE,this.isPropagationStopped=ZE,this}return St(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hd)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hd)},persist:function(){},isPersistent:hd}),t}var Ol={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},F1=nr(Ol),Qc=St({},Ol,{view:0,detail:0}),R6=nr(Qc),t0,n0,hu,Rp=St({},Qc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:U1,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hu&&(hu&&e.type==="mousemove"?(t0=e.screenX-hu.screenX,n0=e.screenY-hu.screenY):n0=t0=0,hu=e),t0)},movementY:function(e){return"movementY"in e?e.movementY:n0}}),eC=nr(Rp),P6=St({},Rp,{dataTransfer:0}),M6=nr(P6),L6=St({},Qc,{relatedTarget:0}),r0=nr(L6),$6=St({},Ol,{animationName:0,elapsedTime:0,pseudoElement:0}),F6=nr($6),U6=St({},Ol,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),B6=nr(U6),V6=St({},Ol,{data:0}),tC=nr(V6),z6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W6(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Y6[e])?!!t[e]:!1}function U1(){return W6}var H6=St({},Qc,{key:function(e){if(e.key){var t=z6[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zd(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?j6[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:U1,charCode:function(e){return e.type==="keypress"?zd(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zd(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),G6=nr(H6),q6=St({},Rp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nC=nr(q6),K6=St({},Qc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:U1}),Q6=nr(K6),X6=St({},Ol,{propertyName:0,elapsedTime:0,pseudoElement:0}),J6=nr(X6),Z6=St({},Rp,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e$=nr(Z6),t$=[9,13,27,32],B1=Yi&&"CompositionEvent"in window,Mu=null;Yi&&"documentMode"in document&&(Mu=document.documentMode);var n$=Yi&&"TextEvent"in window&&!Mu,_2=Yi&&(!B1||Mu&&8<Mu&&11>=Mu),rC=String.fromCharCode(32),iC=!1;function S2(e,t){switch(e){case"keyup":return t$.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Na=!1;function r$(e,t){switch(e){case"compositionend":return E2(t);case"keypress":return t.which!==32?null:(iC=!0,rC);case"textInput":return e=t.data,e===rC&&iC?null:e;default:return null}}function i$(e,t){if(Na)return e==="compositionend"||!B1&&S2(e,t)?(e=w2(),Vd=$1=Es=null,Na=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _2&&t.locale!=="ko"?null:t.data;default:return null}}var s$={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sC(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!s$[e.type]:t==="textarea"}function C2(e,t,n,r){e2(r),t=Sf(t,"onChange"),0<t.length&&(n=new F1("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Lu=null,oc=null;function o$(e){P2(e,0)}function Pp(e){var t=Pa(e);if(GT(t))return e}function a$(e,t){if(e==="change")return t}var k2=!1;if(Yi){var i0;if(Yi){var s0="oninput"in document;if(!s0){var oC=document.createElement("div");oC.setAttribute("oninput","return;"),s0=typeof oC.oninput=="function"}i0=s0}else i0=!1;k2=i0&&(!document.documentMode||9<document.documentMode)}function aC(){Lu&&(Lu.detachEvent("onpropertychange",x2),oc=Lu=null)}function x2(e){if(e.propertyName==="value"&&Pp(oc)){var t=[];C2(t,oc,e,O1(e)),i2(o$,t)}}function l$(e,t,n){e==="focusin"?(aC(),Lu=t,oc=n,Lu.attachEvent("onpropertychange",x2)):e==="focusout"&&aC()}function u$(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pp(oc)}function c$(e,t){if(e==="click")return Pp(t)}function h$(e,t){if(e==="input"||e==="change")return Pp(t)}function d$(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fr=typeof Object.is=="function"?Object.is:d$;function ac(e,t){if(Fr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fv.call(t,i)||!Fr(e[i],t[i]))return!1}return!0}function lC(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uC(e,t){var n=lC(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lC(n)}}function T2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?T2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function D2(){for(var e=window,t=pf();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pf(e.document)}return t}function V1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function f$(e){var t=D2(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&T2(n.ownerDocument.documentElement,n)){if(r!==null&&V1(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=uC(n,s);var o=uC(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var p$=Yi&&"documentMode"in document&&11>=document.documentMode,Oa=null,Ov=null,$u=null,Rv=!1;function cC(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rv||Oa==null||Oa!==pf(r)||(r=Oa,"selectionStart"in r&&V1(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$u&&ac($u,r)||($u=r,r=Sf(Ov,"onSelect"),0<r.length&&(t=new F1("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Oa)))}function dd(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ra={animationend:dd("Animation","AnimationEnd"),animationiteration:dd("Animation","AnimationIteration"),animationstart:dd("Animation","AnimationStart"),transitionend:dd("Transition","TransitionEnd")},o0={},I2={};Yi&&(I2=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function Mp(e){if(o0[e])return o0[e];if(!Ra[e])return e;var t=Ra[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in I2)return o0[e]=t[n];return e}var b2=Mp("animationend"),A2=Mp("animationiteration"),N2=Mp("animationstart"),O2=Mp("transitionend"),R2=new Map,hC="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ro(e,t){R2.set(e,t),ia(t,[e])}for(var a0=0;a0<hC.length;a0++){var l0=hC[a0],m$=l0.toLowerCase(),g$=l0[0].toUpperCase()+l0.slice(1);ro(m$,"on"+g$)}ro(b2,"onAnimationEnd");ro(A2,"onAnimationIteration");ro(N2,"onAnimationStart");ro("dblclick","onDoubleClick");ro("focusin","onFocus");ro("focusout","onBlur");ro(O2,"onTransitionEnd");cl("onMouseEnter",["mouseout","mouseover"]);cl("onMouseLeave",["mouseout","mouseover"]);cl("onPointerEnter",["pointerout","pointerover"]);cl("onPointerLeave",["pointerout","pointerover"]);ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ia("onBeforeInput",["compositionend","keypress","textInput","paste"]);ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ku="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v$=new Set("cancel close invalid load scroll toggle".split(" ").concat(ku));function dC(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,m6(r,t,void 0,e),e.currentTarget=null}function P2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;dC(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;dC(i,a,c),s=u}}}if(gf)throw e=Iv,gf=!1,Iv=null,e}function st(e,t){var n=t[Fv];n===void 0&&(n=t[Fv]=new Set);var r=e+"__bubble";n.has(r)||(M2(t,e,2,!1),n.add(r))}function u0(e,t,n){var r=0;t&&(r|=4),M2(n,e,r,t)}var fd="_reactListening"+Math.random().toString(36).slice(2);function lc(e){if(!e[fd]){e[fd]=!0,zT.forEach(function(n){n!=="selectionchange"&&(v$.has(n)||u0(n,!1,e),u0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fd]||(t[fd]=!0,u0("selectionchange",!1,t))}}function M2(e,t,n,r){switch(y2(t)){case 1:var i=N6;break;case 4:i=O6;break;default:i=L1}n=i.bind(null,t,n,e),i=void 0,!Dv||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function c0(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=xo(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}i2(function(){var c=s,d=O1(n),p=[];e:{var m=R2.get(e);if(m!==void 0){var y=F1,_=e;switch(e){case"keypress":if(zd(n)===0)break e;case"keydown":case"keyup":y=G6;break;case"focusin":_="focus",y=r0;break;case"focusout":_="blur",y=r0;break;case"beforeblur":case"afterblur":y=r0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=eC;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=M6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Q6;break;case b2:case A2:case N2:y=F6;break;case O2:y=J6;break;case"scroll":y=R6;break;case"wheel":y=e$;break;case"copy":case"cut":case"paste":y=B6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=nC}var S=(t&4)!==0,x=!S&&e==="scroll",E=S?m!==null?m+"Capture":null:m;S=[];for(var v=c,k;v!==null;){k=v;var T=k.stateNode;if(k.tag===5&&T!==null&&(k=T,E!==null&&(T=nc(v,E),T!=null&&S.push(uc(v,T,k)))),x)break;v=v.return}0<S.length&&(m=new y(m,_,null,n,d),p.push({event:m,listeners:S}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==xv&&(_=n.relatedTarget||n.fromElement)&&(xo(_)||_[Wi]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=c,_=_?xo(_):null,_!==null&&(x=sa(_),_!==x||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=c),y!==_)){if(S=eC,T="onMouseLeave",E="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(S=nC,T="onPointerLeave",E="onPointerEnter",v="pointer"),x=y==null?m:Pa(y),k=_==null?m:Pa(_),m=new S(T,v+"leave",y,n,d),m.target=x,m.relatedTarget=k,T=null,xo(d)===c&&(S=new S(E,v+"enter",_,n,d),S.target=k,S.relatedTarget=x,T=S),x=T,y&&_)t:{for(S=y,E=_,v=0,k=S;k;k=Sa(k))v++;for(k=0,T=E;T;T=Sa(T))k++;for(;0<v-k;)S=Sa(S),v--;for(;0<k-v;)E=Sa(E),k--;for(;v--;){if(S===E||E!==null&&S===E.alternate)break t;S=Sa(S),E=Sa(E)}S=null}else S=null;y!==null&&fC(p,m,y,S,!1),_!==null&&x!==null&&fC(p,x,_,S,!0)}}e:{if(m=c?Pa(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var b=a$;else if(sC(m))if(k2)b=h$;else{b=u$;var R=l$}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=c$);if(b&&(b=b(e,c))){C2(p,b,n,d);break e}R&&R(e,m,c),e==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&_v(m,"number",m.value)}switch(R=c?Pa(c):window,e){case"focusin":(sC(R)||R.contentEditable==="true")&&(Oa=R,Ov=c,$u=null);break;case"focusout":$u=Ov=Oa=null;break;case"mousedown":Rv=!0;break;case"contextmenu":case"mouseup":case"dragend":Rv=!1,cC(p,n,d);break;case"selectionchange":if(p$)break;case"keydown":case"keyup":cC(p,n,d)}var A;if(B1)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Na?S2(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(_2&&n.locale!=="ko"&&(Na||N!=="onCompositionStart"?N==="onCompositionEnd"&&Na&&(A=w2()):(Es=d,$1="value"in Es?Es.value:Es.textContent,Na=!0)),R=Sf(c,N),0<R.length&&(N=new tC(N,e,null,n,d),p.push({event:N,listeners:R}),A?N.data=A:(A=E2(n),A!==null&&(N.data=A)))),(A=n$?r$(e,n):i$(e,n))&&(c=Sf(c,"onBeforeInput"),0<c.length&&(d=new tC("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=A))}P2(p,t)})}function uc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Sf(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=nc(e,n),s!=null&&r.unshift(uc(e,s,i)),s=nc(e,t),s!=null&&r.push(uc(e,s,i))),e=e.return}return r}function Sa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fC(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=nc(n,s),u!=null&&o.unshift(uc(n,u,a))):i||(u=nc(n,s),u!=null&&o.push(uc(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var y$=/\r\n?/g,w$=/\u0000|\uFFFD/g;function pC(e){return(typeof e=="string"?e:""+e).replace(y$,`
`).replace(w$,"")}function pd(e,t,n){if(t=pC(t),pC(e)!==t&&n)throw Error(G(425))}function Ef(){}var Pv=null,Mv=null;function Lv(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $v=typeof setTimeout=="function"?setTimeout:void 0,_$=typeof clearTimeout=="function"?clearTimeout:void 0,mC=typeof Promise=="function"?Promise:void 0,S$=typeof queueMicrotask=="function"?queueMicrotask:typeof mC!="undefined"?function(e){return mC.resolve(null).then(e).catch(E$)}:$v;function E$(e){setTimeout(function(){throw e})}function h0(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),sc(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);sc(t)}function Os(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gC(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rl=Math.random().toString(36).slice(2),Gr="__reactFiber$"+Rl,cc="__reactProps$"+Rl,Wi="__reactContainer$"+Rl,Fv="__reactEvents$"+Rl,C$="__reactListeners$"+Rl,k$="__reactHandles$"+Rl;function xo(e){var t=e[Gr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wi]||n[Gr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gC(e);e!==null;){if(n=e[Gr])return n;e=gC(e)}return t}e=n,n=e.parentNode}return null}function Xc(e){return e=e[Gr]||e[Wi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pa(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function Lp(e){return e[cc]||null}var Uv=[],Ma=-1;function io(e){return{current:e}}function ot(e){0>Ma||(e.current=Uv[Ma],Uv[Ma]=null,Ma--)}function tt(e,t){Ma++,Uv[Ma]=e.current,e.current=t}var Gs={},En=io(Gs),Vn=io(!1),Bo=Gs;function hl(e,t){var n=e.type.contextTypes;if(!n)return Gs;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function zn(e){return e=e.childContextTypes,e!=null}function Cf(){ot(Vn),ot(En)}function vC(e,t,n){if(En.current!==Gs)throw Error(G(168));tt(En,t),tt(Vn,n)}function L2(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(G(108,l6(e)||"Unknown",i));return St({},n,r)}function kf(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gs,Bo=En.current,tt(En,e),tt(Vn,Vn.current),!0}function yC(e,t,n){var r=e.stateNode;if(!r)throw Error(G(169));n?(e=L2(e,t,Bo),r.__reactInternalMemoizedMergedChildContext=e,ot(Vn),ot(En),tt(En,e)):ot(Vn),tt(Vn,n)}var Di=null,$p=!1,d0=!1;function $2(e){Di===null?Di=[e]:Di.push(e)}function x$(e){$p=!0,$2(e)}function so(){if(!d0&&Di!==null){d0=!0;var e=0,t=Ge;try{var n=Di;for(Ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Di=null,$p=!1}catch(i){throw Di!==null&&(Di=Di.slice(e+1)),l2(R1,so),i}finally{Ge=t,d0=!1}}return null}var La=[],$a=0,xf=null,Tf=0,sr=[],or=0,Vo=null,Ai=1,Ni="";function So(e,t){La[$a++]=Tf,La[$a++]=xf,xf=e,Tf=t}function F2(e,t,n){sr[or++]=Ai,sr[or++]=Ni,sr[or++]=Vo,Vo=e;var r=Ai;e=Ni;var i=32-Lr(r)-1;r&=~(1<<i),n+=1;var s=32-Lr(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ai=1<<32-Lr(t)+i|n<<i|r,Ni=s+e}else Ai=1<<s|n<<i|r,Ni=e}function z1(e){e.return!==null&&(So(e,1),F2(e,1,0))}function j1(e){for(;e===xf;)xf=La[--$a],La[$a]=null,Tf=La[--$a],La[$a]=null;for(;e===Vo;)Vo=sr[--or],sr[or]=null,Ni=sr[--or],sr[or]=null,Ai=sr[--or],sr[or]=null}var Qn=null,qn=null,pt=!1,Ar=null;function U2(e,t){var n=hr(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wC(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qn=e,qn=Os(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qn=e,qn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vo!==null?{id:Ai,overflow:Ni}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=hr(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qn=e,qn=null,!0):!1;default:return!1}}function Bv(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vv(e){if(pt){var t=qn;if(t){var n=t;if(!wC(e,t)){if(Bv(e))throw Error(G(418));t=Os(n.nextSibling);var r=Qn;t&&wC(e,t)?U2(r,n):(e.flags=e.flags&-4097|2,pt=!1,Qn=e)}}else{if(Bv(e))throw Error(G(418));e.flags=e.flags&-4097|2,pt=!1,Qn=e}}}function _C(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qn=e}function md(e){if(e!==Qn)return!1;if(!pt)return _C(e),pt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lv(e.type,e.memoizedProps)),t&&(t=qn)){if(Bv(e))throw B2(),Error(G(418));for(;t;)U2(e,t),t=Os(t.nextSibling)}if(_C(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qn=Os(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qn=null}}else qn=Qn?Os(e.stateNode.nextSibling):null;return!0}function B2(){for(var e=qn;e;)e=Os(e.nextSibling)}function dl(){qn=Qn=null,pt=!1}function Y1(e){Ar===null?Ar=[e]:Ar.push(e)}var T$=rs.ReactCurrentBatchConfig;function Ir(e,t){if(e&&e.defaultProps){t=St({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Df=io(null),If=null,Fa=null,W1=null;function H1(){W1=Fa=If=null}function G1(e){var t=Df.current;ot(Df),e._currentValue=t}function zv(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ka(e,t){If=e,W1=Fa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Un=!0),e.firstContext=null)}function pr(e){var t=e._currentValue;if(W1!==e)if(e={context:e,memoizedValue:t,next:null},Fa===null){if(If===null)throw Error(G(308));Fa=e,If.dependencies={lanes:0,firstContext:e}}else Fa=Fa.next=e;return t}var To=null;function q1(e){To===null?To=[e]:To.push(e)}function V2(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,q1(t)):(n.next=i.next,i.next=n),t.interleaved=n,Hi(e,r)}function Hi(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ps=!1;function K1(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rs(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ve&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Hi(e,n)}return i=r.interleaved,i===null?(t.next=t,q1(r)):(t.next=i.next,i.next=t),r.interleaved=t,Hi(e,n)}function jd(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,P1(e,n)}}function SC(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bf(e,t,n,r){var i=e.updateQueue;ps=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,y=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,S=a;switch(m=t,y=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){p=_.call(y,p,m);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,m=typeof _=="function"?_.call(y,p,m):_,m==null)break e;p=St({},p,m);break e;case 2:ps=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,u=p):d=d.next=y,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);jo|=o,e.lanes=o,e.memoizedState=p}}function EC(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(G(191,i));i.call(r)}}}var j2=new VT.Component().refs;function jv(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:St({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fp={isMounted:function(e){return(e=e._reactInternals)?sa(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Rn(),i=Ms(e),s=Bi(r,i);s.payload=t,n!=null&&(s.callback=n),t=Rs(e,s,i),t!==null&&($r(t,e,i,r),jd(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Rn(),i=Ms(e),s=Bi(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Rs(e,s,i),t!==null&&($r(t,e,i,r),jd(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Rn(),r=Ms(e),i=Bi(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rs(e,i,r),t!==null&&($r(t,e,r,n),jd(t,e,r))}};function CC(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!ac(n,r)||!ac(i,s):!0}function Y2(e,t,n){var r=!1,i=Gs,s=t.contextType;return typeof s=="object"&&s!==null?s=pr(s):(i=zn(t)?Bo:En.current,r=t.contextTypes,s=(r=r!=null)?hl(e,i):Gs),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fp,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function kC(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fp.enqueueReplaceState(t,t.state,null)}function Yv(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=j2,K1(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=pr(s):(s=zn(t)?Bo:En.current,i.context=hl(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(jv(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fp.enqueueReplaceState(i,i.state,null),bf(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function du(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===j2&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,e))}return e}function gd(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xC(e){var t=e._init;return t(e._payload)}function W2(e){function t(E,v){if(e){var k=E.deletions;k===null?(E.deletions=[v],E.flags|=16):k.push(v)}}function n(E,v){if(!e)return null;for(;v!==null;)t(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=Ls(E,v),E.index=0,E.sibling=null,E}function s(E,v,k){return E.index=k,e?(k=E.alternate,k!==null?(k=k.index,k<v?(E.flags|=2,v):k):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return e&&E.alternate===null&&(E.flags|=2),E}function a(E,v,k,T){return v===null||v.tag!==6?(v=w0(k,E.mode,T),v.return=E,v):(v=i(v,k),v.return=E,v)}function u(E,v,k,T){var b=k.type;return b===Aa?d(E,v,k.props.children,T,k.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===fs&&xC(b)===v.type)?(T=i(v,k.props),T.ref=du(E,v,k),T.return=E,T):(T=Kd(k.type,k.key,k.props,null,E.mode,T),T.ref=du(E,v,k),T.return=E,T)}function c(E,v,k,T){return v===null||v.tag!==4||v.stateNode.containerInfo!==k.containerInfo||v.stateNode.implementation!==k.implementation?(v=_0(k,E.mode,T),v.return=E,v):(v=i(v,k.children||[]),v.return=E,v)}function d(E,v,k,T,b){return v===null||v.tag!==7?(v=Po(k,E.mode,T,b),v.return=E,v):(v=i(v,k),v.return=E,v)}function p(E,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return v=w0(""+v,E.mode,k),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case sd:return k=Kd(v.type,v.key,v.props,null,E.mode,k),k.ref=du(E,null,v),k.return=E,k;case ba:return v=_0(v,E.mode,k),v.return=E,v;case fs:var T=v._init;return p(E,T(v._payload),k)}if(Eu(v)||au(v))return v=Po(v,E.mode,k,null),v.return=E,v;gd(E,v)}return null}function m(E,v,k,T){var b=v!==null?v.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return b!==null?null:a(E,v,""+k,T);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case sd:return k.key===b?u(E,v,k,T):null;case ba:return k.key===b?c(E,v,k,T):null;case fs:return b=k._init,m(E,v,b(k._payload),T)}if(Eu(k)||au(k))return b!==null?null:d(E,v,k,T,null);gd(E,k)}return null}function y(E,v,k,T,b){if(typeof T=="string"&&T!==""||typeof T=="number")return E=E.get(k)||null,a(v,E,""+T,b);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case sd:return E=E.get(T.key===null?k:T.key)||null,u(v,E,T,b);case ba:return E=E.get(T.key===null?k:T.key)||null,c(v,E,T,b);case fs:var R=T._init;return y(E,v,k,R(T._payload),b)}if(Eu(T)||au(T))return E=E.get(k)||null,d(v,E,T,b,null);gd(v,T)}return null}function _(E,v,k,T){for(var b=null,R=null,A=v,N=v=0,Z=null;A!==null&&N<k.length;N++){A.index>N?(Z=A,A=null):Z=A.sibling;var F=m(E,A,k[N],T);if(F===null){A===null&&(A=Z);break}e&&A&&F.alternate===null&&t(E,A),v=s(F,v,N),R===null?b=F:R.sibling=F,R=F,A=Z}if(N===k.length)return n(E,A),pt&&So(E,N),b;if(A===null){for(;N<k.length;N++)A=p(E,k[N],T),A!==null&&(v=s(A,v,N),R===null?b=A:R.sibling=A,R=A);return pt&&So(E,N),b}for(A=r(E,A);N<k.length;N++)Z=y(A,E,N,k[N],T),Z!==null&&(e&&Z.alternate!==null&&A.delete(Z.key===null?N:Z.key),v=s(Z,v,N),R===null?b=Z:R.sibling=Z,R=Z);return e&&A.forEach(function(j){return t(E,j)}),pt&&So(E,N),b}function S(E,v,k,T){var b=au(k);if(typeof b!="function")throw Error(G(150));if(k=b.call(k),k==null)throw Error(G(151));for(var R=b=null,A=v,N=v=0,Z=null,F=k.next();A!==null&&!F.done;N++,F=k.next()){A.index>N?(Z=A,A=null):Z=A.sibling;var j=m(E,A,F.value,T);if(j===null){A===null&&(A=Z);break}e&&A&&j.alternate===null&&t(E,A),v=s(j,v,N),R===null?b=j:R.sibling=j,R=j,A=Z}if(F.done)return n(E,A),pt&&So(E,N),b;if(A===null){for(;!F.done;N++,F=k.next())F=p(E,F.value,T),F!==null&&(v=s(F,v,N),R===null?b=F:R.sibling=F,R=F);return pt&&So(E,N),b}for(A=r(E,A);!F.done;N++,F=k.next())F=y(A,E,N,F.value,T),F!==null&&(e&&F.alternate!==null&&A.delete(F.key===null?N:F.key),v=s(F,v,N),R===null?b=F:R.sibling=F,R=F);return e&&A.forEach(function(J){return t(E,J)}),pt&&So(E,N),b}function x(E,v,k,T){if(typeof k=="object"&&k!==null&&k.type===Aa&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case sd:e:{for(var b=k.key,R=v;R!==null;){if(R.key===b){if(b=k.type,b===Aa){if(R.tag===7){n(E,R.sibling),v=i(R,k.props.children),v.return=E,E=v;break e}}else if(R.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===fs&&xC(b)===R.type){n(E,R.sibling),v=i(R,k.props),v.ref=du(E,R,k),v.return=E,E=v;break e}n(E,R);break}else t(E,R);R=R.sibling}k.type===Aa?(v=Po(k.props.children,E.mode,T,k.key),v.return=E,E=v):(T=Kd(k.type,k.key,k.props,null,E.mode,T),T.ref=du(E,v,k),T.return=E,E=T)}return o(E);case ba:e:{for(R=k.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===k.containerInfo&&v.stateNode.implementation===k.implementation){n(E,v.sibling),v=i(v,k.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else t(E,v);v=v.sibling}v=_0(k,E.mode,T),v.return=E,E=v}return o(E);case fs:return R=k._init,x(E,v,R(k._payload),T)}if(Eu(k))return _(E,v,k,T);if(au(k))return S(E,v,k,T);gd(E,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,k),v.return=E,E=v):(n(E,v),v=w0(k,E.mode,T),v.return=E,E=v),o(E)):n(E,v)}return x}var fl=W2(!0),H2=W2(!1),Jc={},ei=io(Jc),hc=io(Jc),dc=io(Jc);function Do(e){if(e===Jc)throw Error(G(174));return e}function Q1(e,t){switch(tt(dc,t),tt(hc,e),tt(ei,Jc),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ev(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ev(t,e)}ot(ei),tt(ei,t)}function pl(){ot(ei),ot(hc),ot(dc)}function G2(e){Do(dc.current);var t=Do(ei.current),n=Ev(t,e.type);t!==n&&(tt(hc,e),tt(ei,n))}function X1(e){hc.current===e&&(ot(ei),ot(hc))}var wt=io(0);function Af(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var f0=[];function J1(){for(var e=0;e<f0.length;e++)f0[e]._workInProgressVersionPrimary=null;f0.length=0}var Yd=rs.ReactCurrentDispatcher,p0=rs.ReactCurrentBatchConfig,zo=0,_t=null,Bt=null,qt=null,Nf=!1,Fu=!1,fc=0,D$=0;function cn(){throw Error(G(321))}function Z1(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fr(e[n],t[n]))return!1;return!0}function ew(e,t,n,r,i,s){if(zo=s,_t=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yd.current=e===null||e.memoizedState===null?N$:O$,e=n(r,i),Fu){s=0;do{if(Fu=!1,fc=0,25<=s)throw Error(G(301));s+=1,qt=Bt=null,t.updateQueue=null,Yd.current=R$,e=n(r,i)}while(Fu)}if(Yd.current=Of,t=Bt!==null&&Bt.next!==null,zo=0,qt=Bt=_t=null,Nf=!1,t)throw Error(G(300));return e}function tw(){var e=fc!==0;return fc=0,e}function Hr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?_t.memoizedState=qt=e:qt=qt.next=e,qt}function mr(){if(Bt===null){var e=_t.alternate;e=e!==null?e.memoizedState:null}else e=Bt.next;var t=qt===null?_t.memoizedState:qt.next;if(t!==null)qt=t,Bt=e;else{if(e===null)throw Error(G(310));Bt=e,e={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},qt===null?_t.memoizedState=qt=e:qt=qt.next=e}return qt}function pc(e,t){return typeof t=="function"?t(e):t}function m0(e){var t=mr(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=Bt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((zo&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,_t.lanes|=d,jo|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Fr(r,t.memoizedState)||(Un=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,_t.lanes|=s,jo|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function g0(e){var t=mr(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Fr(s,t.memoizedState)||(Un=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function q2(){}function K2(e,t){var n=_t,r=mr(),i=t(),s=!Fr(r.memoizedState,i);if(s&&(r.memoizedState=i,Un=!0),r=r.queue,nw(J2.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||qt!==null&&qt.memoizedState.tag&1){if(n.flags|=2048,mc(9,X2.bind(null,n,r,i,t),void 0,null),Qt===null)throw Error(G(349));(zo&30)!==0||Q2(n,t,i)}return i}function Q2(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_t.updateQueue,t===null?(t={lastEffect:null,stores:null},_t.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function X2(e,t,n,r){t.value=n,t.getSnapshot=r,Z2(t)&&eD(e)}function J2(e,t,n){return n(function(){Z2(t)&&eD(e)})}function Z2(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fr(e,n)}catch{return!0}}function eD(e){var t=Hi(e,1);t!==null&&$r(t,e,1,-1)}function TC(e){var t=Hr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pc,lastRenderedState:e},t.queue=e,e=e.dispatch=A$.bind(null,_t,e),[t.memoizedState,e]}function mc(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_t.updateQueue,t===null?(t={lastEffect:null,stores:null},_t.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tD(){return mr().memoizedState}function Wd(e,t,n,r){var i=Hr();_t.flags|=e,i.memoizedState=mc(1|t,n,void 0,r===void 0?null:r)}function Up(e,t,n,r){var i=mr();r=r===void 0?null:r;var s=void 0;if(Bt!==null){var o=Bt.memoizedState;if(s=o.destroy,r!==null&&Z1(r,o.deps)){i.memoizedState=mc(t,n,s,r);return}}_t.flags|=e,i.memoizedState=mc(1|t,n,s,r)}function DC(e,t){return Wd(8390656,8,e,t)}function nw(e,t){return Up(2048,8,e,t)}function nD(e,t){return Up(4,2,e,t)}function rD(e,t){return Up(4,4,e,t)}function iD(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sD(e,t,n){return n=n!=null?n.concat([e]):null,Up(4,4,iD.bind(null,t,e),n)}function rw(){}function oD(e,t){var n=mr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Z1(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function aD(e,t){var n=mr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Z1(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lD(e,t,n){return(zo&21)===0?(e.baseState&&(e.baseState=!1,Un=!0),e.memoizedState=n):(Fr(n,t)||(n=h2(),_t.lanes|=n,jo|=n,e.baseState=!0),t)}function I$(e,t){var n=Ge;Ge=n!==0&&4>n?n:4,e(!0);var r=p0.transition;p0.transition={};try{e(!1),t()}finally{Ge=n,p0.transition=r}}function uD(){return mr().memoizedState}function b$(e,t,n){var r=Ms(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cD(e))hD(t,n);else if(n=V2(e,t,n,r),n!==null){var i=Rn();$r(n,e,r,i),dD(n,t,r)}}function A$(e,t,n){var r=Ms(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cD(e))hD(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Fr(a,o)){var u=t.interleaved;u===null?(i.next=i,q1(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=V2(e,t,i,r),n!==null&&(i=Rn(),$r(n,e,r,i),dD(n,t,r))}}function cD(e){var t=e.alternate;return e===_t||t!==null&&t===_t}function hD(e,t){Fu=Nf=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dD(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,P1(e,n)}}var Of={readContext:pr,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},N$={readContext:pr,useCallback:function(e,t){return Hr().memoizedState=[e,t===void 0?null:t],e},useContext:pr,useEffect:DC,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wd(4194308,4,iD.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wd(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wd(4,2,e,t)},useMemo:function(e,t){var n=Hr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Hr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=b$.bind(null,_t,e),[r.memoizedState,e]},useRef:function(e){var t=Hr();return e={current:e},t.memoizedState=e},useState:TC,useDebugValue:rw,useDeferredValue:function(e){return Hr().memoizedState=e},useTransition:function(){var e=TC(!1),t=e[0];return e=I$.bind(null,e[1]),Hr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_t,i=Hr();if(pt){if(n===void 0)throw Error(G(407));n=n()}else{if(n=t(),Qt===null)throw Error(G(349));(zo&30)!==0||Q2(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,DC(J2.bind(null,r,s,e),[e]),r.flags|=2048,mc(9,X2.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Hr(),t=Qt.identifierPrefix;if(pt){var n=Ni,r=Ai;n=(r&~(1<<32-Lr(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fc++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=D$++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},O$={readContext:pr,useCallback:oD,useContext:pr,useEffect:nw,useImperativeHandle:sD,useInsertionEffect:nD,useLayoutEffect:rD,useMemo:aD,useReducer:m0,useRef:tD,useState:function(){return m0(pc)},useDebugValue:rw,useDeferredValue:function(e){var t=mr();return lD(t,Bt.memoizedState,e)},useTransition:function(){var e=m0(pc)[0],t=mr().memoizedState;return[e,t]},useMutableSource:q2,useSyncExternalStore:K2,useId:uD,unstable_isNewReconciler:!1},R$={readContext:pr,useCallback:oD,useContext:pr,useEffect:nw,useImperativeHandle:sD,useInsertionEffect:nD,useLayoutEffect:rD,useMemo:aD,useReducer:g0,useRef:tD,useState:function(){return g0(pc)},useDebugValue:rw,useDeferredValue:function(e){var t=mr();return Bt===null?t.memoizedState=e:lD(t,Bt.memoizedState,e)},useTransition:function(){var e=g0(pc)[0],t=mr().memoizedState;return[e,t]},useMutableSource:q2,useSyncExternalStore:K2,useId:uD,unstable_isNewReconciler:!1};function ml(e,t){try{var n="",r=t;do n+=a6(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function v0(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Wv(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var P$=typeof WeakMap=="function"?WeakMap:Map;function fD(e,t,n){n=Bi(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Pf||(Pf=!0,ty=r),Wv(e,t)},n}function pD(e,t,n){n=Bi(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Wv(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wv(e,t),typeof r!="function"&&(Ps===null?Ps=new Set([this]):Ps.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function IC(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new P$;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=q$.bind(null,e,t,n),t.then(e,e))}function bC(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function AC(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bi(-1,1),t.tag=2,Rs(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var M$=rs.ReactCurrentOwner,Un=!1;function An(e,t,n,r){t.child=e===null?H2(t,null,n,r):fl(t,e.child,n,r)}function NC(e,t,n,r,i){n=n.render;var s=t.ref;return Ka(t,i),r=ew(e,t,n,r,s,i),n=tw(),e!==null&&!Un?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gi(e,t,i)):(pt&&n&&z1(t),t.flags|=1,An(e,t,r,i),t.child)}function OC(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!hw(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,mD(e,t,s,r,i)):(e=Kd(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ac,n(o,r)&&e.ref===t.ref)return Gi(e,t,i)}return t.flags|=1,e=Ls(s,r),e.ref=t.ref,e.return=t,t.child=e}function mD(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ac(s,r)&&e.ref===t.ref)if(Un=!1,t.pendingProps=r=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Un=!0);else return t.lanes=e.lanes,Gi(e,t,i)}return Hv(e,t,n,r,i)}function gD(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(Ba,Hn),Hn|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,tt(Ba,Hn),Hn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,tt(Ba,Hn),Hn|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,tt(Ba,Hn),Hn|=r;return An(e,t,i,n),t.child}function vD(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hv(e,t,n,r,i){var s=zn(n)?Bo:En.current;return s=hl(t,s),Ka(t,i),n=ew(e,t,n,r,s,i),r=tw(),e!==null&&!Un?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gi(e,t,i)):(pt&&r&&z1(t),t.flags|=1,An(e,t,n,i),t.child)}function RC(e,t,n,r,i){if(zn(n)){var s=!0;kf(t)}else s=!1;if(Ka(t,i),t.stateNode===null)Hd(e,t),Y2(t,n,r),Yv(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=pr(c):(c=zn(n)?Bo:En.current,c=hl(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&kC(t,o,r,c),ps=!1;var m=t.memoizedState;o.state=m,bf(t,r,o,i),u=t.memoizedState,a!==r||m!==u||Vn.current||ps?(typeof d=="function"&&(jv(t,n,d,r),u=t.memoizedState),(a=ps||CC(t,n,a,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,z2(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ir(t.type,a),o.props=c,p=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=pr(u):(u=zn(n)?Bo:En.current,u=hl(t,u));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==u)&&kC(t,o,r,u),ps=!1,m=t.memoizedState,o.state=m,bf(t,r,o,i);var _=t.memoizedState;a!==p||m!==_||Vn.current||ps?(typeof y=="function"&&(jv(t,n,y,r),_=t.memoizedState),(c=ps||CC(t,n,c,r,m,_,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),o.props=r,o.state=_,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Gv(e,t,n,r,s,i)}function Gv(e,t,n,r,i,s){vD(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&yC(t,n,!1),Gi(e,t,s);r=t.stateNode,M$.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=fl(t,e.child,null,s),t.child=fl(t,null,a,s)):An(e,t,a,s),t.memoizedState=r.state,i&&yC(t,n,!0),t.child}function yD(e){var t=e.stateNode;t.pendingContext?vC(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vC(e,t.context,!1),Q1(e,t.containerInfo)}function PC(e,t,n,r,i){return dl(),Y1(i),t.flags|=256,An(e,t,n,r),t.child}var qv={dehydrated:null,treeContext:null,retryLane:0};function Kv(e){return{baseLanes:e,cachePool:null,transitions:null}}function wD(e,t,n){var r=t.pendingProps,i=wt.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),tt(wt,i&1),e===null)return Vv(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zp(o,r,0,null),e=Po(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Kv(n),t.memoizedState=qv,e):iw(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return L$(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ls(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ls(a,s):(s=Po(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Kv(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=qv,r}return s=e.child,e=s.sibling,r=Ls(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function iw(e,t){return t=zp({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vd(e,t,n,r){return r!==null&&Y1(r),fl(t,e.child,null,n),e=iw(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function L$(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=v0(Error(G(422))),vd(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=zp({mode:"visible",children:r.children},i,0,null),s=Po(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&fl(t,e.child,null,o),t.child.memoizedState=Kv(o),t.memoizedState=qv,s);if((t.mode&1)===0)return vd(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(G(419)),r=v0(s,r,void 0),vd(e,t,o,r)}if(a=(o&e.childLanes)!==0,Un||a){if(r=Qt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Hi(e,i),$r(r,e,i,-1))}return cw(),r=v0(Error(G(421))),vd(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=K$.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,qn=Os(i.nextSibling),Qn=t,pt=!0,Ar=null,e!==null&&(sr[or++]=Ai,sr[or++]=Ni,sr[or++]=Vo,Ai=e.id,Ni=e.overflow,Vo=t),t=iw(t,r.children),t.flags|=4096,t)}function MC(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zv(e.return,t,n)}function y0(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _D(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(An(e,t,r.children,n),r=wt.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&MC(e,n,t);else if(e.tag===19)MC(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(tt(wt,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Af(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),y0(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Af(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}y0(t,!0,n,null,s);break;case"together":y0(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hd(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jo|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,n=Ls(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ls(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $$(e,t,n){switch(t.tag){case 3:yD(t),dl();break;case 5:G2(t);break;case 1:zn(t.type)&&kf(t);break;case 4:Q1(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;tt(Df,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(tt(wt,wt.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?wD(e,t,n):(tt(wt,wt.current&1),e=Gi(e,t,n),e!==null?e.sibling:null);tt(wt,wt.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return _D(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),tt(wt,wt.current),r)break;return null;case 22:case 23:return t.lanes=0,gD(e,t,n)}return Gi(e,t,n)}var SD,Qv,ED,CD;SD=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qv=function(){};ED=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Do(ei.current);var s=null;switch(n){case"input":i=yv(e,i),r=yv(e,r),s=[];break;case"select":i=St({},i,{value:void 0}),r=St({},r,{value:void 0}),s=[];break;case"textarea":i=Sv(e,i),r=Sv(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ef)}Cv(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ec.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ec.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&st("scroll",e),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};CD=function(e,t,n,r){n!==r&&(t.flags|=4)};function fu(e,t){if(!pt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function hn(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function F$(e,t,n){var r=t.pendingProps;switch(j1(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(t),null;case 1:return zn(t.type)&&Cf(),hn(t),null;case 3:return r=t.stateNode,pl(),ot(Vn),ot(En),J1(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(md(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ar!==null&&(iy(Ar),Ar=null))),Qv(e,t),hn(t),null;case 5:X1(t);var i=Do(dc.current);if(n=t.type,e!==null&&t.stateNode!=null)ED(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(G(166));return hn(t),null}if(e=Do(ei.current),md(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Gr]=t,r[cc]=s,e=(t.mode&1)!==0,n){case"dialog":st("cancel",r),st("close",r);break;case"iframe":case"object":case"embed":st("load",r);break;case"video":case"audio":for(i=0;i<ku.length;i++)st(ku[i],r);break;case"source":st("error",r);break;case"img":case"image":case"link":st("error",r),st("load",r);break;case"details":st("toggle",r);break;case"input":YE(r,s),st("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},st("invalid",r);break;case"textarea":HE(r,s),st("invalid",r)}Cv(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&pd(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&pd(r.textContent,a,e),i=["children",""+a]):ec.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",r)}switch(n){case"input":od(r),WE(r,s,!0);break;case"textarea":od(r),GE(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ef)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=QT(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Gr]=t,e[cc]=r,SD(e,t,!1,!1),t.stateNode=e;e:{switch(o=kv(n,r),n){case"dialog":st("cancel",e),st("close",e),i=r;break;case"iframe":case"object":case"embed":st("load",e),i=r;break;case"video":case"audio":for(i=0;i<ku.length;i++)st(ku[i],e);i=r;break;case"source":st("error",e),i=r;break;case"img":case"image":case"link":st("error",e),st("load",e),i=r;break;case"details":st("toggle",e),i=r;break;case"input":YE(e,r),i=yv(e,r),st("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=St({},r,{value:void 0}),st("invalid",e);break;case"textarea":HE(e,r),i=Sv(e,r),st("invalid",e);break;default:i=r}Cv(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?ZT(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&XT(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&tc(e,u):typeof u=="number"&&tc(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ec.hasOwnProperty(s)?u!=null&&s==="onScroll"&&st("scroll",e):u!=null&&I1(e,s,u,o))}switch(n){case"input":od(e),WE(e,r,!1);break;case"textarea":od(e),GE(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Hs(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Wa(e,!!r.multiple,s,!1):r.defaultValue!=null&&Wa(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ef)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return hn(t),null;case 6:if(e&&t.stateNode!=null)CD(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(G(166));if(n=Do(dc.current),Do(ei.current),md(t)){if(r=t.stateNode,n=t.memoizedProps,r[Gr]=t,(s=r.nodeValue!==n)&&(e=Qn,e!==null))switch(e.tag){case 3:pd(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pd(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gr]=t,t.stateNode=r}return hn(t),null;case 13:if(ot(wt),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pt&&qn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)B2(),dl(),t.flags|=98560,s=!1;else if(s=md(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(G(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(G(317));s[Gr]=t}else dl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;hn(t),s=!1}else Ar!==null&&(iy(Ar),Ar=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(wt.current&1)!==0?zt===0&&(zt=3):cw())),t.updateQueue!==null&&(t.flags|=4),hn(t),null);case 4:return pl(),Qv(e,t),e===null&&lc(t.stateNode.containerInfo),hn(t),null;case 10:return G1(t.type._context),hn(t),null;case 17:return zn(t.type)&&Cf(),hn(t),null;case 19:if(ot(wt),s=t.memoizedState,s===null)return hn(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)fu(s,!1);else{if(zt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Af(e),o!==null){for(t.flags|=128,fu(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return tt(wt,wt.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ot()>gl&&(t.flags|=128,r=!0,fu(s,!1),t.lanes=4194304)}else{if(!r)if(e=Af(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fu(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return hn(t),null}else 2*Ot()-s.renderingStartTime>gl&&n!==1073741824&&(t.flags|=128,r=!0,fu(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ot(),t.sibling=null,n=wt.current,tt(wt,r?n&1|2:n&1),t):(hn(t),null);case 22:case 23:return uw(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Hn&1073741824)!==0&&(hn(t),t.subtreeFlags&6&&(t.flags|=8192)):hn(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function U$(e,t){switch(j1(t),t.tag){case 1:return zn(t.type)&&Cf(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pl(),ot(Vn),ot(En),J1(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return X1(t),null;case 13:if(ot(wt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));dl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ot(wt),null;case 4:return pl(),null;case 10:return G1(t.type._context),null;case 22:case 23:return uw(),null;case 24:return null;default:return null}}var yd=!1,mn=!1,B$=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Ua(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){kt(e,t,r)}else n.current=null}function Xv(e,t,n){try{n()}catch(r){kt(e,t,r)}}var LC=!1;function V$(e,t){if(Pv=wf,e=D2(),V1(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,p=e,m=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===e)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mv={focusedElem:e,selectionRange:n},wf=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var _=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,x=_.memoizedState,E=t.stateNode,v=E.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ir(t.type,S),x);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(T){kt(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return _=LC,LC=!1,_}function Uu(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xv(t,n,s)}i=i.next}while(i!==r)}}function Bp(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Jv(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function kD(e){var t=e.alternate;t!==null&&(e.alternate=null,kD(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gr],delete t[cc],delete t[Fv],delete t[C$],delete t[k$])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xD(e){return e.tag===5||e.tag===3||e.tag===4}function $C(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xD(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zv(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ef));else if(r!==4&&(e=e.child,e!==null))for(Zv(e,t,n),e=e.sibling;e!==null;)Zv(e,t,n),e=e.sibling}function ey(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ey(e,t,n),e=e.sibling;e!==null;)ey(e,t,n),e=e.sibling}var tn=null,br=!1;function hs(e,t,n){for(n=n.child;n!==null;)TD(e,t,n),n=n.sibling}function TD(e,t,n){if(Zr&&typeof Zr.onCommitFiberUnmount=="function")try{Zr.onCommitFiberUnmount(Op,n)}catch{}switch(n.tag){case 5:mn||Ua(n,t);case 6:var r=tn,i=br;tn=null,hs(e,t,n),tn=r,br=i,tn!==null&&(br?(e=tn,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(br?(e=tn,n=n.stateNode,e.nodeType===8?h0(e.parentNode,n):e.nodeType===1&&h0(e,n),sc(e)):h0(tn,n.stateNode));break;case 4:r=tn,i=br,tn=n.stateNode.containerInfo,br=!0,hs(e,t,n),tn=r,br=i;break;case 0:case 11:case 14:case 15:if(!mn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Xv(n,t,o),i=i.next}while(i!==r)}hs(e,t,n);break;case 1:if(!mn&&(Ua(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){kt(n,t,a)}hs(e,t,n);break;case 21:hs(e,t,n);break;case 22:n.mode&1?(mn=(r=mn)||n.memoizedState!==null,hs(e,t,n),mn=r):hs(e,t,n);break;default:hs(e,t,n)}}function FC(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new B$),t.forEach(function(r){var i=Q$.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dr(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:tn=a.stateNode,br=!1;break e;case 3:tn=a.stateNode.containerInfo,br=!0;break e;case 4:tn=a.stateNode.containerInfo,br=!0;break e}a=a.return}if(tn===null)throw Error(G(160));TD(s,o,i),tn=null,br=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){kt(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)DD(t,e),t=t.sibling}function DD(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Dr(t,e),Wr(e),r&4){try{Uu(3,e,e.return),Bp(3,e)}catch(S){kt(e,e.return,S)}try{Uu(5,e,e.return)}catch(S){kt(e,e.return,S)}}break;case 1:Dr(t,e),Wr(e),r&512&&n!==null&&Ua(n,n.return);break;case 5:if(Dr(t,e),Wr(e),r&512&&n!==null&&Ua(n,n.return),e.flags&32){var i=e.stateNode;try{tc(i,"")}catch(S){kt(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qT(i,s),kv(a,o);var c=kv(a,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?ZT(i,p):d==="dangerouslySetInnerHTML"?XT(i,p):d==="children"?tc(i,p):I1(i,d,p,c)}switch(a){case"input":wv(i,s);break;case"textarea":KT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Wa(i,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?Wa(i,!!s.multiple,s.defaultValue,!0):Wa(i,!!s.multiple,s.multiple?[]:"",!1))}i[cc]=s}catch(S){kt(e,e.return,S)}}break;case 6:if(Dr(t,e),Wr(e),r&4){if(e.stateNode===null)throw Error(G(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(S){kt(e,e.return,S)}}break;case 3:if(Dr(t,e),Wr(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sc(t.containerInfo)}catch(S){kt(e,e.return,S)}break;case 4:Dr(t,e),Wr(e);break;case 13:Dr(t,e),Wr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(aw=Ot())),r&4&&FC(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(mn=(c=mn)||d,Dr(t,e),mn=c):Dr(t,e),Wr(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&(e.mode&1)!==0)for(ae=e,d=e.child;d!==null;){for(p=ae=d;ae!==null;){switch(m=ae,y=m.child,m.tag){case 0:case 11:case 14:case 15:Uu(4,m,m.return);break;case 1:Ua(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(S){kt(r,n,S)}}break;case 5:Ua(m,m.return);break;case 22:if(m.memoizedState!==null){BC(p);continue}}y!==null?(y.return=m,ae=y):BC(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=JT("display",o))}catch(S){kt(e,e.return,S)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(S){kt(e,e.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Dr(t,e),Wr(e),r&4&&FC(e);break;case 21:break;default:Dr(t,e),Wr(e)}}function Wr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xD(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(tc(i,""),r.flags&=-33);var s=$C(e);ey(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=$C(e);Zv(e,a,o);break;default:throw Error(G(161))}}catch(u){kt(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function z$(e,t,n){ae=e,ID(e)}function ID(e,t,n){for(var r=(e.mode&1)!==0;ae!==null;){var i=ae,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||yd;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||mn;a=yd;var c=mn;if(yd=o,(mn=u)&&!c)for(ae=i;ae!==null;)o=ae,u=o.child,o.tag===22&&o.memoizedState!==null?VC(i):u!==null?(u.return=o,ae=u):VC(i);for(;s!==null;)ae=s,ID(s),s=s.sibling;ae=i,yd=a,mn=c}UC(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,ae=s):UC(e)}}function UC(e){for(;ae!==null;){var t=ae;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:mn||Bp(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!mn)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ir(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&EC(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}EC(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&sc(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}mn||t.flags&512&&Jv(t)}catch(m){kt(t,t.return,m)}}if(t===e){ae=null;break}if(n=t.sibling,n!==null){n.return=t.return,ae=n;break}ae=t.return}}function BC(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ae=n;break}ae=t.return}}function VC(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bp(4,t)}catch(u){kt(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){kt(t,i,u)}}var s=t.return;try{Jv(t)}catch(u){kt(t,s,u)}break;case 5:var o=t.return;try{Jv(t)}catch(u){kt(t,o,u)}}}catch(u){kt(t,t.return,u)}if(t===e){ae=null;break}var a=t.sibling;if(a!==null){a.return=t.return,ae=a;break}ae=t.return}}var j$=Math.ceil,Rf=rs.ReactCurrentDispatcher,sw=rs.ReactCurrentOwner,fr=rs.ReactCurrentBatchConfig,Ve=0,Qt=null,Mt=null,sn=0,Hn=0,Ba=io(0),zt=0,gc=null,jo=0,Vp=0,ow=0,Bu=null,Fn=null,aw=0,gl=1/0,xi=null,Pf=!1,ty=null,Ps=null,wd=!1,Cs=null,Mf=0,Vu=0,ny=null,Gd=-1,qd=0;function Rn(){return(Ve&6)!==0?Ot():Gd!==-1?Gd:Gd=Ot()}function Ms(e){return(e.mode&1)===0?1:(Ve&2)!==0&&sn!==0?sn&-sn:T$.transition!==null?(qd===0&&(qd=h2()),qd):(e=Ge,e!==0||(e=window.event,e=e===void 0?16:y2(e.type)),e)}function $r(e,t,n,r){if(50<Vu)throw Vu=0,ny=null,Error(G(185));Kc(e,n,r),((Ve&2)===0||e!==Qt)&&(e===Qt&&((Ve&2)===0&&(Vp|=n),zt===4&&gs(e,sn)),jn(e,r),n===1&&Ve===0&&(t.mode&1)===0&&(gl=Ot()+500,$p&&so()))}function jn(e,t){var n=e.callbackNode;T6(e,t);var r=yf(e,e===Qt?sn:0);if(r===0)n!==null&&QE(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&QE(n),t===1)e.tag===0?x$(zC.bind(null,e)):$2(zC.bind(null,e)),S$(function(){(Ve&6)===0&&so()}),n=null;else{switch(d2(r)){case 1:n=R1;break;case 4:n=u2;break;case 16:n=vf;break;case 536870912:n=c2;break;default:n=vf}n=LD(n,bD.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bD(e,t){if(Gd=-1,qd=0,(Ve&6)!==0)throw Error(G(327));var n=e.callbackNode;if(Qa()&&e.callbackNode!==n)return null;var r=yf(e,e===Qt?sn:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Lf(e,r);else{t=r;var i=Ve;Ve|=2;var s=ND();(Qt!==e||sn!==t)&&(xi=null,gl=Ot()+500,Ro(e,t));do try{H$();break}catch(a){AD(e,a)}while(1);H1(),Rf.current=s,Ve=i,Mt!==null?t=0:(Qt=null,sn=0,t=zt)}if(t!==0){if(t===2&&(i=bv(e),i!==0&&(r=i,t=ry(e,i))),t===1)throw n=gc,Ro(e,0),gs(e,r),jn(e,Ot()),n;if(t===6)gs(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Y$(i)&&(t=Lf(e,r),t===2&&(s=bv(e),s!==0&&(r=s,t=ry(e,s))),t===1))throw n=gc,Ro(e,0),gs(e,r),jn(e,Ot()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(G(345));case 2:Eo(e,Fn,xi);break;case 3:if(gs(e,r),(r&130023424)===r&&(t=aw+500-Ot(),10<t)){if(yf(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Rn(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$v(Eo.bind(null,e,Fn,xi),t);break}Eo(e,Fn,xi);break;case 4:if(gs(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Lr(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*j$(r/1960))-r,10<r){e.timeoutHandle=$v(Eo.bind(null,e,Fn,xi),r);break}Eo(e,Fn,xi);break;case 5:Eo(e,Fn,xi);break;default:throw Error(G(329))}}}return jn(e,Ot()),e.callbackNode===n?bD.bind(null,e):null}function ry(e,t){var n=Bu;return e.current.memoizedState.isDehydrated&&(Ro(e,t).flags|=256),e=Lf(e,t),e!==2&&(t=Fn,Fn=n,t!==null&&iy(t)),e}function iy(e){Fn===null?Fn=e:Fn.push.apply(Fn,e)}function Y$(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Fr(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gs(e,t){for(t&=~ow,t&=~Vp,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lr(t),r=1<<n;e[n]=-1,t&=~r}}function zC(e){if((Ve&6)!==0)throw Error(G(327));Qa();var t=yf(e,0);if((t&1)===0)return jn(e,Ot()),null;var n=Lf(e,t);if(e.tag!==0&&n===2){var r=bv(e);r!==0&&(t=r,n=ry(e,r))}if(n===1)throw n=gc,Ro(e,0),gs(e,t),jn(e,Ot()),n;if(n===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Eo(e,Fn,xi),jn(e,Ot()),null}function lw(e,t){var n=Ve;Ve|=1;try{return e(t)}finally{Ve=n,Ve===0&&(gl=Ot()+500,$p&&so())}}function Yo(e){Cs!==null&&Cs.tag===0&&(Ve&6)===0&&Qa();var t=Ve;Ve|=1;var n=fr.transition,r=Ge;try{if(fr.transition=null,Ge=1,e)return e()}finally{Ge=r,fr.transition=n,Ve=t,(Ve&6)===0&&so()}}function uw(){Hn=Ba.current,ot(Ba)}function Ro(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_$(n)),Mt!==null)for(n=Mt.return;n!==null;){var r=n;switch(j1(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cf();break;case 3:pl(),ot(Vn),ot(En),J1();break;case 5:X1(r);break;case 4:pl();break;case 13:ot(wt);break;case 19:ot(wt);break;case 10:G1(r.type._context);break;case 22:case 23:uw()}n=n.return}if(Qt=e,Mt=e=Ls(e.current,null),sn=Hn=t,zt=0,gc=null,ow=Vp=jo=0,Fn=Bu=null,To!==null){for(t=0;t<To.length;t++)if(n=To[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}To=null}return e}function AD(e,t){do{var n=Mt;try{if(H1(),Yd.current=Of,Nf){for(var r=_t.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nf=!1}if(zo=0,qt=Bt=_t=null,Fu=!1,fc=0,sw.current=null,n===null||n.return===null){zt=1,gc=t,Mt=null;break}e:{var s=e,o=n.return,a=n,u=t;if(t=sn,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,p=d.tag;if((d.mode&1)===0&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=bC(o);if(y!==null){y.flags&=-257,AC(y,o,a,s,t),y.mode&1&&IC(s,c,t),t=y,u=c;var _=t.updateQueue;if(_===null){var S=new Set;S.add(u),t.updateQueue=S}else _.add(u);break e}else{if((t&1)===0){IC(s,c,t),cw();break e}u=Error(G(426))}}else if(pt&&a.mode&1){var x=bC(o);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),AC(x,o,a,s,t),Y1(ml(u,a));break e}}s=u=ml(u,a),zt!==4&&(zt=2),Bu===null?Bu=[s]:Bu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var E=fD(s,u,t);SC(s,E);break e;case 1:a=u;var v=s.type,k=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Ps===null||!Ps.has(k)))){s.flags|=65536,t&=-t,s.lanes|=t;var T=pD(s,a,t);SC(s,T);break e}}s=s.return}while(s!==null)}RD(n)}catch(b){t=b,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(1)}function ND(){var e=Rf.current;return Rf.current=Of,e===null?Of:e}function cw(){(zt===0||zt===3||zt===2)&&(zt=4),Qt===null||(jo&268435455)===0&&(Vp&268435455)===0||gs(Qt,sn)}function Lf(e,t){var n=Ve;Ve|=2;var r=ND();(Qt!==e||sn!==t)&&(xi=null,Ro(e,t));do try{W$();break}catch(i){AD(e,i)}while(1);if(H1(),Ve=n,Rf.current=r,Mt!==null)throw Error(G(261));return Qt=null,sn=0,zt}function W$(){for(;Mt!==null;)OD(Mt)}function H$(){for(;Mt!==null&&!v6();)OD(Mt)}function OD(e){var t=MD(e.alternate,e,Hn);e.memoizedProps=e.pendingProps,t===null?RD(e):Mt=t,sw.current=null}function RD(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=F$(n,t,Hn),n!==null){Mt=n;return}}else{if(n=U$(n,t),n!==null){n.flags&=32767,Mt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{zt=6,Mt=null;return}}if(t=t.sibling,t!==null){Mt=t;return}Mt=t=e}while(t!==null);zt===0&&(zt=5)}function Eo(e,t,n){var r=Ge,i=fr.transition;try{fr.transition=null,Ge=1,G$(e,t,n,r)}finally{fr.transition=i,Ge=r}return null}function G$(e,t,n,r){do Qa();while(Cs!==null);if((Ve&6)!==0)throw Error(G(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(D6(e,s),e===Qt&&(Mt=Qt=null,sn=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||wd||(wd=!0,LD(vf,function(){return Qa(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=fr.transition,fr.transition=null;var o=Ge;Ge=1;var a=Ve;Ve|=4,sw.current=null,V$(e,n),DD(n,e),f$(Mv),wf=!!Pv,Mv=Pv=null,e.current=n,z$(n),y6(),Ve=a,Ge=o,fr.transition=s}else e.current=n;if(wd&&(wd=!1,Cs=e,Mf=i),s=e.pendingLanes,s===0&&(Ps=null),S6(n.stateNode),jn(e,Ot()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Pf)throw Pf=!1,e=ty,ty=null,e;return(Mf&1)!==0&&e.tag!==0&&Qa(),s=e.pendingLanes,(s&1)!==0?e===ny?Vu++:(Vu=0,ny=e):Vu=0,so(),null}function Qa(){if(Cs!==null){var e=d2(Mf),t=fr.transition,n=Ge;try{if(fr.transition=null,Ge=16>e?16:e,Cs===null)var r=!1;else{if(e=Cs,Cs=null,Mf=0,(Ve&6)!==0)throw Error(G(331));var i=Ve;for(Ve|=4,ae=e.current;ae!==null;){var s=ae,o=s.child;if((ae.flags&16)!==0){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(ae=c;ae!==null;){var d=ae;switch(d.tag){case 0:case 11:case 15:Uu(8,d,s)}var p=d.child;if(p!==null)p.return=d,ae=p;else for(;ae!==null;){d=ae;var m=d.sibling,y=d.return;if(kD(d),d===c){ae=null;break}if(m!==null){m.return=y,ae=m;break}ae=y}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var x=S.sibling;S.sibling=null,S=x}while(S!==null)}}ae=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,ae=o;else e:for(;ae!==null;){if(s=ae,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Uu(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,ae=E;break e}ae=s.return}}var v=e.current;for(ae=v;ae!==null;){o=ae;var k=o.child;if((o.subtreeFlags&2064)!==0&&k!==null)k.return=o,ae=k;else e:for(o=v;ae!==null;){if(a=ae,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Bp(9,a)}}catch(b){kt(a,a.return,b)}if(a===o){ae=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,ae=T;break e}ae=a.return}}if(Ve=i,so(),Zr&&typeof Zr.onPostCommitFiberRoot=="function")try{Zr.onPostCommitFiberRoot(Op,e)}catch{}r=!0}return r}finally{Ge=n,fr.transition=t}}return!1}function jC(e,t,n){t=ml(n,t),t=fD(e,t,1),e=Rs(e,t,1),t=Rn(),e!==null&&(Kc(e,1,t),jn(e,t))}function kt(e,t,n){if(e.tag===3)jC(e,e,n);else for(;t!==null;){if(t.tag===3){jC(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ps===null||!Ps.has(r))){e=ml(n,e),e=pD(t,e,1),t=Rs(t,e,1),e=Rn(),t!==null&&(Kc(t,1,e),jn(t,e));break}}t=t.return}}function q$(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Rn(),e.pingedLanes|=e.suspendedLanes&n,Qt===e&&(sn&n)===n&&(zt===4||zt===3&&(sn&130023424)===sn&&500>Ot()-aw?Ro(e,0):ow|=n),jn(e,t)}function PD(e,t){t===0&&((e.mode&1)===0?t=1:(t=ud,ud<<=1,(ud&130023424)===0&&(ud=4194304)));var n=Rn();e=Hi(e,t),e!==null&&(Kc(e,t,n),jn(e,n))}function K$(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),PD(e,n)}function Q$(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(t),PD(e,n)}var MD;MD=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Vn.current)Un=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Un=!1,$$(e,t,n);Un=(e.flags&131072)!==0}else Un=!1,pt&&(t.flags&1048576)!==0&&F2(t,Tf,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hd(e,t),e=t.pendingProps;var i=hl(t,En.current);Ka(t,n),i=ew(null,t,r,e,i,n);var s=tw();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zn(r)?(s=!0,kf(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,K1(t),i.updater=Fp,t.stateNode=i,i._reactInternals=t,Yv(t,r,e,n),t=Gv(null,t,r,!0,s,n)):(t.tag=0,pt&&s&&z1(t),An(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hd(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=J$(r),e=Ir(r,e),i){case 0:t=Hv(null,t,r,e,n);break e;case 1:t=RC(null,t,r,e,n);break e;case 11:t=NC(null,t,r,e,n);break e;case 14:t=OC(null,t,r,Ir(r.type,e),n);break e}throw Error(G(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ir(r,i),Hv(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ir(r,i),RC(e,t,r,i,n);case 3:e:{if(yD(t),e===null)throw Error(G(387));r=t.pendingProps,s=t.memoizedState,i=s.element,z2(e,t),bf(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=ml(Error(G(423)),t),t=PC(e,t,r,n,i);break e}else if(r!==i){i=ml(Error(G(424)),t),t=PC(e,t,r,n,i);break e}else for(qn=Os(t.stateNode.containerInfo.firstChild),Qn=t,pt=!0,Ar=null,n=H2(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dl(),r===i){t=Gi(e,t,n);break e}An(e,t,r,n)}t=t.child}return t;case 5:return G2(t),e===null&&Vv(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Lv(r,i)?o=null:s!==null&&Lv(r,s)&&(t.flags|=32),vD(e,t),An(e,t,o,n),t.child;case 6:return e===null&&Vv(t),null;case 13:return wD(e,t,n);case 4:return Q1(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fl(t,null,r,n):An(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ir(r,i),NC(e,t,r,i,n);case 7:return An(e,t,t.pendingProps,n),t.child;case 8:return An(e,t,t.pendingProps.children,n),t.child;case 12:return An(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,tt(Df,r._currentValue),r._currentValue=o,s!==null)if(Fr(s.value,o)){if(s.children===i.children&&!Vn.current){t=Gi(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Bi(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),zv(s.return,n,t),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(G(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zv(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}An(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ka(t,n),i=pr(i),r=r(i),t.flags|=1,An(e,t,r,n),t.child;case 14:return r=t.type,i=Ir(r,t.pendingProps),i=Ir(r.type,i),OC(e,t,r,i,n);case 15:return mD(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ir(r,i),Hd(e,t),t.tag=1,zn(r)?(e=!0,kf(t)):e=!1,Ka(t,n),Y2(t,r,i),Yv(t,r,i,n),Gv(null,t,r,!0,e,n);case 19:return _D(e,t,n);case 22:return gD(e,t,n)}throw Error(G(156,t.tag))};function LD(e,t){return l2(e,t)}function X$(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hr(e,t,n,r){return new X$(e,t,n,r)}function hw(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J$(e){if(typeof e=="function")return hw(e)?1:0;if(e!=null){if(e=e.$$typeof,e===A1)return 11;if(e===N1)return 14}return 2}function Ls(e,t){var n=e.alternate;return n===null?(n=hr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kd(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")hw(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Aa:return Po(n.children,i,s,t);case b1:o=8,i|=8;break;case pv:return e=hr(12,n,t,i|2),e.elementType=pv,e.lanes=s,e;case mv:return e=hr(13,n,t,i),e.elementType=mv,e.lanes=s,e;case gv:return e=hr(19,n,t,i),e.elementType=gv,e.lanes=s,e;case WT:return zp(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jT:o=10;break e;case YT:o=9;break e;case A1:o=11;break e;case N1:o=14;break e;case fs:o=16,r=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=hr(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Po(e,t,n,r){return e=hr(7,e,r,t),e.lanes=n,e}function zp(e,t,n,r){return e=hr(22,e,r,t),e.elementType=WT,e.lanes=n,e.stateNode={isHidden:!1},e}function w0(e,t,n){return e=hr(6,e,null,t),e.lanes=n,e}function _0(e,t,n){return t=hr(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Z$(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=e0(0),this.expirationTimes=e0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=e0(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dw(e,t,n,r,i,s,o,a,u){return e=new Z$(e,t,n,a,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=hr(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},K1(s),e}function e3(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ba,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $D(e){if(!e)return Gs;e=e._reactInternals;e:{if(sa(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var n=e.type;if(zn(n))return L2(e,n,t)}return t}function FD(e,t,n,r,i,s,o,a,u){return e=dw(n,r,!0,e,i,s,o,a,u),e.context=$D(null),n=e.current,r=Rn(),i=Ms(n),s=Bi(r,i),s.callback=t!=null?t:null,Rs(n,s,i),e.current.lanes=i,Kc(e,i,r),jn(e,r),e}function jp(e,t,n,r){var i=t.current,s=Rn(),o=Ms(i);return n=$D(n),t.context===null?t.context=n:t.pendingContext=n,t=Bi(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rs(i,t,o),e!==null&&($r(e,i,o,s),jd(e,i,o)),o}function $f(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function YC(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fw(e,t){YC(e,t),(e=e.alternate)&&YC(e,t)}function t3(){return null}var UD=typeof reportError=="function"?reportError:function(e){console.error(e)};function pw(e){this._internalRoot=e}Yp.prototype.render=pw.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));jp(e,t,null,null)};Yp.prototype.unmount=pw.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yo(function(){jp(null,e,null,null)}),t[Wi]=null}};function Yp(e){this._internalRoot=e}Yp.prototype.unstable_scheduleHydration=function(e){if(e){var t=m2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ms.length&&t!==0&&t<ms[n].priority;n++);ms.splice(n,0,e),n===0&&v2(e)}};function mw(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function WC(){}function n3(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=$f(o);s.call(c)}}var o=FD(t,r,e,0,null,!1,!1,"",WC);return e._reactRootContainer=o,e[Wi]=o.current,lc(e.nodeType===8?e.parentNode:e),Yo(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=$f(u);a.call(c)}}var u=dw(e,0,!1,null,null,!1,!1,"",WC);return e._reactRootContainer=u,e[Wi]=u.current,lc(e.nodeType===8?e.parentNode:e),Yo(function(){jp(t,u,n,r)}),u}function Hp(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=$f(o);a.call(u)}}jp(t,o,e,i)}else o=n3(n,t,e,i,r);return $f(o)}f2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cu(t.pendingLanes);n!==0&&(P1(t,n|1),jn(t,Ot()),(Ve&6)===0&&(gl=Ot()+500,so()))}break;case 13:Yo(function(){var r=Hi(e,1);if(r!==null){var i=Rn();$r(r,e,1,i)}}),fw(e,1)}};M1=function(e){if(e.tag===13){var t=Hi(e,134217728);if(t!==null){var n=Rn();$r(t,e,134217728,n)}fw(e,134217728)}};p2=function(e){if(e.tag===13){var t=Ms(e),n=Hi(e,t);if(n!==null){var r=Rn();$r(n,e,t,r)}fw(e,t)}};m2=function(){return Ge};g2=function(e,t){var n=Ge;try{return Ge=e,t()}finally{Ge=n}};Tv=function(e,t,n){switch(t){case"input":if(wv(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Lp(r);if(!i)throw Error(G(90));GT(r),wv(r,i)}}}break;case"textarea":KT(e,n);break;case"select":t=n.value,t!=null&&Wa(e,!!n.multiple,t,!1)}};n2=lw;r2=Yo;var r3={usingClientEntryPoint:!1,Events:[Xc,Pa,Lp,e2,t2,lw]},pu={findFiberByHostInstance:xo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},i3={bundleType:pu.bundleType,version:pu.version,rendererPackageName:pu.rendererPackageName,rendererConfig:pu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rs.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=o2(e),e===null?null:e.stateNode},findFiberByHostInstance:pu.findFiberByHostInstance||t3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var _d=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_d.isDisabled&&_d.supportsFiber)try{Op=_d.inject(i3),Zr=_d}catch{}}tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r3;tr.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mw(t))throw Error(G(200));return e3(e,t,null,n)};tr.createRoot=function(e,t){if(!mw(e))throw Error(G(299));var n=!1,r="",i=UD;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=dw(e,1,!1,null,null,n,!1,r,i),e[Wi]=t.current,lc(e.nodeType===8?e.parentNode:e),new pw(t)};tr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=o2(t),e=e===null?null:e.stateNode,e};tr.flushSync=function(e){return Yo(e)};tr.hydrate=function(e,t,n){if(!Wp(t))throw Error(G(200));return Hp(null,e,t,!0,n)};tr.hydrateRoot=function(e,t,n){if(!mw(e))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=UD;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=FD(t,null,e,1,n!=null?n:null,i,!1,s,o),e[Wi]=t.current,lc(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Yp(t)};tr.render=function(e,t,n){if(!Wp(t))throw Error(G(200));return Hp(null,e,t,!1,n)};tr.unmountComponentAtNode=function(e){if(!Wp(e))throw Error(G(40));return e._reactRootContainer?(Yo(function(){Hp(null,null,e,!1,function(){e._reactRootContainer=null,e[Wi]=null})}),!0):!1};tr.unstable_batchedUpdates=lw;tr.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wp(n))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return Hp(e,t,n,!1,r)};tr.version="18.2.0-next-9e3b772b8-20220608";function BD(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(BD)}catch(e){console.error(e)}}BD(),x1.exports=tr;var HC=x1.exports;dv.createRoot=HC.createRoot,dv.hydrateRoot=HC.hydrateRoot;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vc(){return vc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vc.apply(this,arguments)}var ks;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ks||(ks={}));const GC="popstate";function s3(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return sy("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ff(i)}return a3(t,n,null,e)}function $t(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function gw(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function o3(){return Math.random().toString(36).substr(2,8)}function qC(e,t){return{usr:e.state,key:e.key,idx:t}}function sy(e,t,n,r){return n===void 0&&(n=null),vc({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pl(t):t,{state:n,key:t&&t.key||r||o3()})}function Ff(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Pl(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function a3(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ks.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(vc({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){a=ks.Pop;let x=d(),E=x==null?null:x-c;c=x,u&&u({action:a,location:S.location,delta:E})}function m(x,E){a=ks.Push;let v=sy(S.location,x,E);n&&n(v,x),c=d()+1;let k=qC(v,c),T=S.createHref(v);try{o.pushState(k,"",T)}catch{i.location.assign(T)}s&&u&&u({action:a,location:S.location,delta:1})}function y(x,E){a=ks.Replace;let v=sy(S.location,x,E);n&&n(v,x),c=d();let k=qC(v,c),T=S.createHref(v);o.replaceState(k,"",T),s&&u&&u({action:a,location:S.location,delta:0})}function _(x){let E=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof x=="string"?x:Ff(x);return $t(E,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,E)}let S={get action(){return a},get location(){return e(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(GC,p),u=x,()=>{i.removeEventListener(GC,p),u=null}},createHref(x){return t(i,x)},createURL:_,encodeLocation(x){let E=_(x);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:y,go(x){return o.go(x)}};return S}var KC;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(KC||(KC={}));function l3(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Pl(t):t,i=vw(r.pathname||"/",n);if(i==null)return null;let s=VD(e);u3(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=y3(s[a],S3(i));return o}function VD(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&($t(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=$s([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&($t(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),VD(s.children,t,d,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:g3(c,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of zD(s.path))i(s,o,u)}),t}function zD(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=zD(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function u3(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:v3(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const c3=/^:\w+$/,h3=3,d3=2,f3=1,p3=10,m3=-2,QC=e=>e==="*";function g3(e,t){let n=e.split("/"),r=n.length;return n.some(QC)&&(r+=m3),t&&(r+=d3),n.filter(i=>!QC(i)).reduce((i,s)=>i+(c3.test(s)?h3:s===""?f3:p3),r)}function v3(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function y3(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=w3({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!d)return null;Object.assign(r,d.params);let p=a.route;s.push({params:r,pathname:$s([i,d.pathname]),pathnameBase:x3($s([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=$s([i,d.pathnameBase]))}return s}function w3(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_3(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,p)=>{if(d==="*"){let m=a[p]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}return c[d]=E3(a[p]||"",d),c},{}),pathname:s,pathnameBase:o,pattern:e}}function _3(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),gw(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function S3(e){try{return decodeURI(e)}catch(t){return gw(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function E3(e,t){try{return decodeURIComponent(e)}catch(n){return gw(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function vw(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function C3(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Pl(e):e;return{pathname:n?n.startsWith("/")?n:k3(n,t):t,search:T3(r),hash:D3(i)}}function k3(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function S0(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jD(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function YD(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Pl(e):(i=vc({},e),$t(!i.pathname||!i.pathname.includes("?"),S0("?","pathname","search",i)),$t(!i.pathname||!i.pathname.includes("#"),S0("#","pathname","hash",i)),$t(!i.search||!i.search.includes("#"),S0("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let p=t.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?t[p]:"/"}let u=C3(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const $s=e=>e.join("/").replace(/\/\/+/g,"/"),x3=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),T3=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,D3=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function I3(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const b3=["post","put","patch","delete"];[...b3];/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uf(){return Uf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uf.apply(this,arguments)}const WD=L.exports.createContext(null),A3=L.exports.createContext(null),Ml=L.exports.createContext(null),Gp=L.exports.createContext(null),oo=L.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),HD=L.exports.createContext(null);function N3(e,t){let{relative:n}=t===void 0?{}:t;Zc()||$t(!1);let{basename:r,navigator:i}=L.exports.useContext(Ml),{hash:s,pathname:o,search:a}=qD(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:$s([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Zc(){return L.exports.useContext(Gp)!=null}function eh(){return Zc()||$t(!1),L.exports.useContext(Gp).location}function GD(e){L.exports.useContext(Ml).static||L.exports.useLayoutEffect(e)}function yr(){let{isDataRoute:e}=L.exports.useContext(oo);return e?Y3():O3()}function O3(){Zc()||$t(!1);let{basename:e,navigator:t}=L.exports.useContext(Ml),{matches:n}=L.exports.useContext(oo),{pathname:r}=eh(),i=JSON.stringify(jD(n).map(a=>a.pathnameBase)),s=L.exports.useRef(!1);return GD(()=>{s.current=!0}),L.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){t.go(a);return}let c=YD(a,JSON.parse(i),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:$s([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,i,r])}function th(){let{matches:e}=L.exports.useContext(oo),t=e[e.length-1];return t?t.params:{}}function qD(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=L.exports.useContext(oo),{pathname:i}=eh(),s=JSON.stringify(jD(r).map(o=>o.pathnameBase));return L.exports.useMemo(()=>YD(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function R3(e,t){return P3(e,t)}function P3(e,t,n){Zc()||$t(!1);let{navigator:r}=L.exports.useContext(Ml),{matches:i}=L.exports.useContext(oo),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=eh(),c;if(t){var d;let S=typeof t=="string"?Pl(t):t;a==="/"||((d=S.pathname)==null?void 0:d.startsWith(a))||$t(!1),c=S}else c=u;let p=c.pathname||"/",m=a==="/"?p:p.slice(a.length)||"/",y=l3(e,{pathname:m}),_=U3(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},o,S.params),pathname:$s([a,r.encodeLocation?r.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:$s([a,r.encodeLocation?r.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n);return t&&_?L.exports.createElement(Gp.Provider,{value:{location:Uf({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ks.Pop}},_):_}function M3(){let e=j3(),t=I3(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return L.exports.createElement(L.exports.Fragment,null,L.exports.createElement("h2",null,"Unexpected Application Error!"),L.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?L.exports.createElement("pre",{style:i},n):null,s)}const L3=L.exports.createElement(M3,null);class $3 extends L.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?L.exports.createElement(oo.Provider,{value:this.props.routeContext},L.exports.createElement(HD.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function F3(e){let{routeContext:t,match:n,children:r}=e,i=L.exports.useContext(WD);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.exports.createElement(oo.Provider,{value:t},r)}function U3(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id]));a>=0||$t(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,u,c)=>{let d=u.route.id?o==null?void 0:o[u.route.id]:null,p=null;n&&(p=u.route.errorElement||L3);let m=t.concat(s.slice(0,c+1)),y=()=>{let _;return d?_=p:u.route.Component?_=L.exports.createElement(u.route.Component,null):u.route.element?_=u.route.element:_=a,L.exports.createElement(F3,{match:u,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:_})};return n&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?L.exports.createElement($3,{location:n.location,revalidation:n.revalidation,component:p,error:d,children:y(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):y()},null)}var oy;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(oy||(oy={}));var yc;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(yc||(yc={}));function B3(e){let t=L.exports.useContext(WD);return t||$t(!1),t}function V3(e){let t=L.exports.useContext(A3);return t||$t(!1),t}function z3(e){let t=L.exports.useContext(oo);return t||$t(!1),t}function KD(e){let t=z3(),n=t.matches[t.matches.length-1];return n.route.id||$t(!1),n.route.id}function j3(){var e;let t=L.exports.useContext(HD),n=V3(yc.UseRouteError),r=KD(yc.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Y3(){let{router:e}=B3(oy.UseNavigateStable),t=KD(yc.UseNavigateStable),n=L.exports.useRef(!1);return GD(()=>{n.current=!0}),L.exports.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Uf({fromRouteId:t},s)))},[e,t])}function QD(e){$t(!1)}function W3(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ks.Pop,navigator:s,static:o=!1}=e;Zc()&&$t(!1);let a=t.replace(/^\/*/,"/"),u=L.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Pl(r));let{pathname:c="/",search:d="",hash:p="",state:m=null,key:y="default"}=r,_=L.exports.useMemo(()=>{let S=vw(c,a);return S==null?null:{location:{pathname:S,search:d,hash:p,state:m,key:y},navigationType:i}},[a,c,d,p,m,y,i]);return _==null?null:L.exports.createElement(Ml.Provider,{value:u},L.exports.createElement(Gp.Provider,{children:n,value:_}))}function H3(e){let{children:t,location:n}=e;return R3(ay(t),n)}var XC;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(XC||(XC={}));new Promise(()=>{});function ay(e,t){t===void 0&&(t=[]);let n=[];return L.exports.Children.forEach(e,(r,i)=>{if(!L.exports.isValidElement(r))return;let s=[...t,i];if(r.type===L.exports.Fragment){n.push.apply(n,ay(r.props.children,s));return}r.type!==QD&&$t(!1),!r.props.index||!r.props.children||$t(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ay(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ly(){return ly=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ly.apply(this,arguments)}function G3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function q3(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function K3(e,t){return e.button===0&&(!t||t==="_self")&&!q3(e)}const Q3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function X3(e){let{basename:t,children:n,window:r}=e,i=L.exports.useRef();i.current==null&&(i.current=s3({window:r,v5Compat:!0}));let s=i.current,[o,a]=L.exports.useState({action:s.action,location:s.location});return L.exports.useLayoutEffect(()=>s.listen(a),[s]),L.exports.createElement(W3,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s})}const J3=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",Z3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nn=L.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d}=t,p=G3(t,Q3),{basename:m}=L.exports.useContext(Ml),y,_=!1;if(typeof c=="string"&&Z3.test(c)&&(y=c,J3))try{let v=new URL(window.location.href),k=c.startsWith("//")?new URL(v.protocol+c):new URL(c),T=vw(k.pathname,m);k.origin===v.origin&&T!=null?c=T+k.search+k.hash:_=!0}catch{}let S=N3(c,{relative:i}),x=e5(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i});function E(v){r&&r(v),v.defaultPrevented||x(v)}return L.exports.createElement("a",ly({},p,{href:y||S,onClick:_||s?r:E,ref:n,target:u}))});var JC;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(JC||(JC={}));var ZC;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ZC||(ZC={}));function e5(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=yr(),u=eh(),c=qD(e,{relative:o});return L.exports.useCallback(d=>{if(K3(d,n)){d.preventDefault();let p=r!==void 0?r:Ff(u)===Ff(c);a(e,{replace:p,state:i,preventScrollReset:s,relative:o})}},[u,a,c,r,i,n,e,s,o])}var yw={exports:{}},Ke={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ww=Symbol.for("react.element"),_w=Symbol.for("react.portal"),qp=Symbol.for("react.fragment"),Kp=Symbol.for("react.strict_mode"),Qp=Symbol.for("react.profiler"),Xp=Symbol.for("react.provider"),Jp=Symbol.for("react.context"),t5=Symbol.for("react.server_context"),Zp=Symbol.for("react.forward_ref"),em=Symbol.for("react.suspense"),tm=Symbol.for("react.suspense_list"),nm=Symbol.for("react.memo"),rm=Symbol.for("react.lazy"),n5=Symbol.for("react.offscreen"),XD;XD=Symbol.for("react.module.reference");function wr(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ww:switch(e=e.type,e){case qp:case Qp:case Kp:case em:case tm:return e;default:switch(e=e&&e.$$typeof,e){case t5:case Jp:case Zp:case rm:case nm:case Xp:return e;default:return t}}case _w:return t}}}Ke.ContextConsumer=Jp;Ke.ContextProvider=Xp;Ke.Element=ww;Ke.ForwardRef=Zp;Ke.Fragment=qp;Ke.Lazy=rm;Ke.Memo=nm;Ke.Portal=_w;Ke.Profiler=Qp;Ke.StrictMode=Kp;Ke.Suspense=em;Ke.SuspenseList=tm;Ke.isAsyncMode=function(){return!1};Ke.isConcurrentMode=function(){return!1};Ke.isContextConsumer=function(e){return wr(e)===Jp};Ke.isContextProvider=function(e){return wr(e)===Xp};Ke.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ww};Ke.isForwardRef=function(e){return wr(e)===Zp};Ke.isFragment=function(e){return wr(e)===qp};Ke.isLazy=function(e){return wr(e)===rm};Ke.isMemo=function(e){return wr(e)===nm};Ke.isPortal=function(e){return wr(e)===_w};Ke.isProfiler=function(e){return wr(e)===Qp};Ke.isStrictMode=function(e){return wr(e)===Kp};Ke.isSuspense=function(e){return wr(e)===em};Ke.isSuspenseList=function(e){return wr(e)===tm};Ke.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===qp||e===Qp||e===Kp||e===em||e===tm||e===n5||typeof e=="object"&&e!==null&&(e.$$typeof===rm||e.$$typeof===nm||e.$$typeof===Xp||e.$$typeof===Jp||e.$$typeof===Zp||e.$$typeof===XD||e.getModuleId!==void 0)};Ke.typeOf=wr;yw.exports=Ke;function r5(e){function t(U,B,Y,V,D){for(var le=0,W=0,we=0,me=0,Be,_e,ne=0,De=0,ke,ct=ke=Be=0,Le=0,Ft=0,mo=0,yt=0,It=Y.length,Ht=It-1,Dn,ve="",Ne="",Jl="",as="",bt;Le<It;){if(_e=Y.charCodeAt(Le),Le===Ht&&W+me+we+le!==0&&(W!==0&&(_e=W===47?10:47),me=we=le=0,It++,Ht++),W+me+we+le===0){if(Le===Ht&&(0<Ft&&(ve=ve.replace(m,"")),0<ve.trim().length)){switch(_e){case 32:case 9:case 59:case 13:case 10:break;default:ve+=Y.charAt(Le)}_e=59}switch(_e){case 123:for(ve=ve.trim(),Be=ve.charCodeAt(0),ke=1,yt=++Le;Le<It;){switch(_e=Y.charCodeAt(Le)){case 123:ke++;break;case 125:ke--;break;case 47:switch(_e=Y.charCodeAt(Le+1)){case 42:case 47:e:{for(ct=Le+1;ct<Ht;++ct)switch(Y.charCodeAt(ct)){case 47:if(_e===42&&Y.charCodeAt(ct-1)===42&&Le+2!==ct){Le=ct+1;break e}break;case 10:if(_e===47){Le=ct+1;break e}}Le=ct}}break;case 91:_e++;case 40:_e++;case 34:case 39:for(;Le++<Ht&&Y.charCodeAt(Le)!==_e;);}if(ke===0)break;Le++}switch(ke=Y.substring(yt,Le),Be===0&&(Be=(ve=ve.replace(p,"").trim()).charCodeAt(0)),Be){case 64:switch(0<Ft&&(ve=ve.replace(m,"")),_e=ve.charCodeAt(1),_e){case 100:case 109:case 115:case 45:Ft=B;break;default:Ft=Te}if(ke=t(B,Ft,ke,_e,D+1),yt=ke.length,0<$&&(Ft=n(Te,ve,mo),bt=a(3,ke,Ft,B,X,J,yt,_e,D,V),ve=Ft.join(""),bt!==void 0&&(yt=(ke=bt.trim()).length)===0&&(_e=0,ke="")),0<yt)switch(_e){case 115:ve=ve.replace(R,o);case 100:case 109:case 45:ke=ve+"{"+ke+"}";break;case 107:ve=ve.replace(v,"$1 $2"),ke=ve+"{"+ke+"}",ke=oe===1||oe===2&&s("@"+ke,3)?"@-webkit-"+ke+"@"+ke:"@"+ke;break;default:ke=ve+ke,V===112&&(ke=(Ne+=ke,""))}else ke="";break;default:ke=t(B,n(B,ve,mo),ke,V,D+1)}Jl+=ke,ke=mo=Ft=ct=Be=0,ve="",_e=Y.charCodeAt(++Le);break;case 125:case 59:if(ve=(0<Ft?ve.replace(m,""):ve).trim(),1<(yt=ve.length))switch(ct===0&&(Be=ve.charCodeAt(0),Be===45||96<Be&&123>Be)&&(yt=(ve=ve.replace(" ",":")).length),0<$&&(bt=a(1,ve,B,U,X,J,Ne.length,V,D,V))!==void 0&&(yt=(ve=bt.trim()).length)===0&&(ve="\0\0"),Be=ve.charCodeAt(0),_e=ve.charCodeAt(1),Be){case 0:break;case 64:if(_e===105||_e===99){as+=ve+Y.charAt(Le);break}default:ve.charCodeAt(yt-1)!==58&&(Ne+=i(ve,Be,_e,ve.charCodeAt(2)))}mo=Ft=ct=Be=0,ve="",_e=Y.charCodeAt(++Le)}}switch(_e){case 13:case 10:W===47?W=0:1+Be===0&&V!==107&&0<ve.length&&(Ft=1,ve+="\0"),0<$*P&&a(0,ve,B,U,X,J,Ne.length,V,D,V),J=1,X++;break;case 59:case 125:if(W+me+we+le===0){J++;break}default:switch(J++,Dn=Y.charAt(Le),_e){case 9:case 32:if(me+le+W===0)switch(ne){case 44:case 58:case 9:case 32:Dn="";break;default:_e!==32&&(Dn=" ")}break;case 0:Dn="\\0";break;case 12:Dn="\\f";break;case 11:Dn="\\v";break;case 38:me+W+le===0&&(Ft=mo=1,Dn="\f"+Dn);break;case 108:if(me+W+le+ue===0&&0<ct)switch(Le-ct){case 2:ne===112&&Y.charCodeAt(Le-3)===58&&(ue=ne);case 8:De===111&&(ue=De)}break;case 58:me+W+le===0&&(ct=Le);break;case 44:W+we+me+le===0&&(Ft=1,Dn+="\r");break;case 34:case 39:W===0&&(me=me===_e?0:me===0?_e:me);break;case 91:me+W+we===0&&le++;break;case 93:me+W+we===0&&le--;break;case 41:me+W+le===0&&we--;break;case 40:if(me+W+le===0){if(Be===0)switch(2*ne+3*De){case 533:break;default:Be=1}we++}break;case 64:W+we+me+le+ct+ke===0&&(ke=1);break;case 42:case 47:if(!(0<me+le+we))switch(W){case 0:switch(2*_e+3*Y.charCodeAt(Le+1)){case 235:W=47;break;case 220:yt=Le,W=42}break;case 42:_e===47&&ne===42&&yt+2!==Le&&(Y.charCodeAt(yt+2)===33&&(Ne+=Y.substring(yt,Le+1)),Dn="",W=0)}}W===0&&(ve+=Dn)}De=ne,ne=_e,Le++}if(yt=Ne.length,0<yt){if(Ft=B,0<$&&(bt=a(2,Ne,Ft,U,X,J,yt,V,D,V),bt!==void 0&&(Ne=bt).length===0))return as+Ne+Jl;if(Ne=Ft.join(",")+"{"+Ne+"}",oe*ue!==0){switch(oe!==2||s(Ne,2)||(ue=0),ue){case 111:Ne=Ne.replace(T,":-moz-$1")+Ne;break;case 112:Ne=Ne.replace(k,"::-webkit-input-$1")+Ne.replace(k,"::-moz-$1")+Ne.replace(k,":-ms-input-$1")+Ne}ue=0}}return as+Ne+Jl}function n(U,B,Y){var V=B.trim().split(x);B=V;var D=V.length,le=U.length;switch(le){case 0:case 1:var W=0;for(U=le===0?"":U[0]+" ";W<D;++W)B[W]=r(U,B[W],Y).trim();break;default:var we=W=0;for(B=[];W<D;++W)for(var me=0;me<le;++me)B[we++]=r(U[me]+" ",V[W],Y).trim()}return B}function r(U,B,Y){var V=B.charCodeAt(0);switch(33>V&&(V=(B=B.trim()).charCodeAt(0)),V){case 38:return B.replace(E,"$1"+U.trim());case 58:return U.trim()+B.replace(E,"$1"+U.trim());default:if(0<1*Y&&0<B.indexOf("\f"))return B.replace(E,(U.charCodeAt(0)===58?"":"$1")+U.trim())}return U+B}function i(U,B,Y,V){var D=U+";",le=2*B+3*Y+4*V;if(le===944){U=D.indexOf(":",9)+1;var W=D.substring(U,D.length-1).trim();return W=D.substring(0,U).trim()+W+";",oe===1||oe===2&&s(W,1)?"-webkit-"+W+W:W}if(oe===0||oe===2&&!s(D,1))return D;switch(le){case 1015:return D.charCodeAt(10)===97?"-webkit-"+D+D:D;case 951:return D.charCodeAt(3)===116?"-webkit-"+D+D:D;case 963:return D.charCodeAt(5)===110?"-webkit-"+D+D:D;case 1009:if(D.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+D+D;case 978:return"-webkit-"+D+"-moz-"+D+D;case 1019:case 983:return"-webkit-"+D+"-moz-"+D+"-ms-"+D+D;case 883:if(D.charCodeAt(8)===45)return"-webkit-"+D+D;if(0<D.indexOf("image-set(",11))return D.replace(j,"$1-webkit-$2")+D;break;case 932:if(D.charCodeAt(4)===45)switch(D.charCodeAt(5)){case 103:return"-webkit-box-"+D.replace("-grow","")+"-webkit-"+D+"-ms-"+D.replace("grow","positive")+D;case 115:return"-webkit-"+D+"-ms-"+D.replace("shrink","negative")+D;case 98:return"-webkit-"+D+"-ms-"+D.replace("basis","preferred-size")+D}return"-webkit-"+D+"-ms-"+D+D;case 964:return"-webkit-"+D+"-ms-flex-"+D+D;case 1023:if(D.charCodeAt(8)!==99)break;return W=D.substring(D.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+W+"-webkit-"+D+"-ms-flex-pack"+W+D;case 1005:return _.test(D)?D.replace(y,":-webkit-")+D.replace(y,":-moz-")+D:D;case 1e3:switch(W=D.substring(13).trim(),B=W.indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(B)){case 226:W=D.replace(b,"tb");break;case 232:W=D.replace(b,"tb-rl");break;case 220:W=D.replace(b,"lr");break;default:return D}return"-webkit-"+D+"-ms-"+W+D;case 1017:if(D.indexOf("sticky",9)===-1)break;case 975:switch(B=(D=U).length-10,W=(D.charCodeAt(B)===33?D.substring(0,B):D).substring(U.indexOf(":",7)+1).trim(),le=W.charCodeAt(0)+(W.charCodeAt(7)|0)){case 203:if(111>W.charCodeAt(8))break;case 115:D=D.replace(W,"-webkit-"+W)+";"+D;break;case 207:case 102:D=D.replace(W,"-webkit-"+(102<le?"inline-":"")+"box")+";"+D.replace(W,"-webkit-"+W)+";"+D.replace(W,"-ms-"+W+"box")+";"+D}return D+";";case 938:if(D.charCodeAt(5)===45)switch(D.charCodeAt(6)){case 105:return W=D.replace("-items",""),"-webkit-"+D+"-webkit-box-"+W+"-ms-flex-"+W+D;case 115:return"-webkit-"+D+"-ms-flex-item-"+D.replace(N,"")+D;default:return"-webkit-"+D+"-ms-flex-line-pack"+D.replace("align-content","").replace(N,"")+D}break;case 973:case 989:if(D.charCodeAt(3)!==45||D.charCodeAt(4)===122)break;case 931:case 953:if(F.test(U)===!0)return(W=U.substring(U.indexOf(":")+1)).charCodeAt(0)===115?i(U.replace("stretch","fill-available"),B,Y,V).replace(":fill-available",":stretch"):D.replace(W,"-webkit-"+W)+D.replace(W,"-moz-"+W.replace("fill-",""))+D;break;case 962:if(D="-webkit-"+D+(D.charCodeAt(5)===102?"-ms-"+D:"")+D,Y+V===211&&D.charCodeAt(13)===105&&0<D.indexOf("transform",10))return D.substring(0,D.indexOf(";",27)+1).replace(S,"$1-webkit-$2")+D}return D}function s(U,B){var Y=U.indexOf(B===1?":":"{"),V=U.substring(0,B!==3?Y:10);return Y=U.substring(Y+1,U.length-1),z(B!==2?V:V.replace(Z,"$1"),Y,B)}function o(U,B){var Y=i(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return Y!==B+";"?Y.replace(A," or ($1)").substring(4):"("+B+")"}function a(U,B,Y,V,D,le,W,we,me,Be){for(var _e=0,ne=B,De;_e<$;++_e)switch(De=ge[_e].call(d,U,ne,Y,V,D,le,W,we,me,Be)){case void 0:case!1:case!0:case null:break;default:ne=De}if(ne!==B)return ne}function u(U){switch(U){case void 0:case null:$=ge.length=0;break;default:if(typeof U=="function")ge[$++]=U;else if(typeof U=="object")for(var B=0,Y=U.length;B<Y;++B)u(U[B]);else P=!!U|0}return u}function c(U){return U=U.prefix,U!==void 0&&(z=null,U?typeof U!="function"?oe=1:(oe=2,z=U):oe=0),c}function d(U,B){var Y=U;if(33>Y.charCodeAt(0)&&(Y=Y.trim()),ee=Y,Y=[ee],0<$){var V=a(-1,B,Y,Y,X,J,0,0,0,0);V!==void 0&&typeof V=="string"&&(B=V)}var D=t(Te,Y,B,0,0);return 0<$&&(V=a(-2,D,Y,Y,X,J,D.length,0,0,0),V!==void 0&&(D=V)),ee="",ue=0,J=X=1,D}var p=/^\0+/g,m=/[\0\r\f]/g,y=/: */g,_=/zoo|gra/,S=/([,: ])(transform)/g,x=/,\r+?/g,E=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,k=/::(place)/g,T=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,A=/([\s\S]*?);/g,N=/-self|flex-/g,Z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,F=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,J=1,X=1,ue=0,oe=1,Te=[],ge=[],$=0,z=null,P=0,ee="";return d.use=u,d.set=c,e!==void 0&&c(e),d}var i5={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function s5(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var o5=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ek=s5(function(e){return o5.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),JD={exports:{}},Qe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zt=typeof Symbol=="function"&&Symbol.for,Sw=Zt?Symbol.for("react.element"):60103,Ew=Zt?Symbol.for("react.portal"):60106,im=Zt?Symbol.for("react.fragment"):60107,sm=Zt?Symbol.for("react.strict_mode"):60108,om=Zt?Symbol.for("react.profiler"):60114,am=Zt?Symbol.for("react.provider"):60109,lm=Zt?Symbol.for("react.context"):60110,Cw=Zt?Symbol.for("react.async_mode"):60111,um=Zt?Symbol.for("react.concurrent_mode"):60111,cm=Zt?Symbol.for("react.forward_ref"):60112,hm=Zt?Symbol.for("react.suspense"):60113,a5=Zt?Symbol.for("react.suspense_list"):60120,dm=Zt?Symbol.for("react.memo"):60115,fm=Zt?Symbol.for("react.lazy"):60116,l5=Zt?Symbol.for("react.block"):60121,u5=Zt?Symbol.for("react.fundamental"):60117,c5=Zt?Symbol.for("react.responder"):60118,h5=Zt?Symbol.for("react.scope"):60119;function rr(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Sw:switch(e=e.type,e){case Cw:case um:case im:case om:case sm:case hm:return e;default:switch(e=e&&e.$$typeof,e){case lm:case cm:case fm:case dm:case am:return e;default:return t}}case Ew:return t}}}function ZD(e){return rr(e)===um}Qe.AsyncMode=Cw;Qe.ConcurrentMode=um;Qe.ContextConsumer=lm;Qe.ContextProvider=am;Qe.Element=Sw;Qe.ForwardRef=cm;Qe.Fragment=im;Qe.Lazy=fm;Qe.Memo=dm;Qe.Portal=Ew;Qe.Profiler=om;Qe.StrictMode=sm;Qe.Suspense=hm;Qe.isAsyncMode=function(e){return ZD(e)||rr(e)===Cw};Qe.isConcurrentMode=ZD;Qe.isContextConsumer=function(e){return rr(e)===lm};Qe.isContextProvider=function(e){return rr(e)===am};Qe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sw};Qe.isForwardRef=function(e){return rr(e)===cm};Qe.isFragment=function(e){return rr(e)===im};Qe.isLazy=function(e){return rr(e)===fm};Qe.isMemo=function(e){return rr(e)===dm};Qe.isPortal=function(e){return rr(e)===Ew};Qe.isProfiler=function(e){return rr(e)===om};Qe.isStrictMode=function(e){return rr(e)===sm};Qe.isSuspense=function(e){return rr(e)===hm};Qe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===im||e===um||e===om||e===sm||e===hm||e===a5||typeof e=="object"&&e!==null&&(e.$$typeof===fm||e.$$typeof===dm||e.$$typeof===am||e.$$typeof===lm||e.$$typeof===cm||e.$$typeof===u5||e.$$typeof===c5||e.$$typeof===h5||e.$$typeof===l5)};Qe.typeOf=rr;JD.exports=Qe;var kw=JD.exports,d5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},f5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},p5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},eI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xw={};xw[kw.ForwardRef]=p5;xw[kw.Memo]=eI;function tk(e){return kw.isMemo(e)?eI:xw[e.$$typeof]||d5}var m5=Object.defineProperty,g5=Object.getOwnPropertyNames,nk=Object.getOwnPropertySymbols,v5=Object.getOwnPropertyDescriptor,y5=Object.getPrototypeOf,rk=Object.prototype;function tI(e,t,n){if(typeof t!="string"){if(rk){var r=y5(t);r&&r!==rk&&tI(e,r,n)}var i=g5(t);nk&&(i=i.concat(nk(t)));for(var s=tk(e),o=tk(t),a=0;a<i.length;++a){var u=i[a];if(!f5[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var c=v5(t,u);try{m5(e,u,c)}catch{}}}}return e}var w5=tI;function Qr(){return(Qr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ik=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},uy=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!yw.exports.typeOf(e)},Bf=Object.freeze([]),Fs=Object.freeze({});function wc(e){return typeof e=="function"}function sk(e){return e.displayName||e.name||"Component"}function Tw(e){return e&&typeof e.styledComponentId=="string"}var vl=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Dw=typeof window!="undefined"&&"HTMLElement"in window,_5=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),S5={};function nh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var E5=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&nh(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),c=0,d=r.length;c<d;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Qd=new Map,Vf=new Map,zu=1,Sd=function(e){if(Qd.has(e))return Qd.get(e);for(;Vf.has(zu);)zu++;var t=zu++;return Qd.set(e,t),Vf.set(t,e),t},C5=function(e){return Vf.get(e)},k5=function(e,t){t>=zu&&(zu=t+1),Qd.set(e,t),Vf.set(t,e)},x5="style["+vl+'][data-styled-version="5.3.10"]',T5=new RegExp("^"+vl+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),D5=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},I5=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(T5);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(k5(c,u),D5(e,c,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},b5=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},nI=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,c=u.length;c>=0;c--){var d=u[c];if(d&&d.nodeType===1&&d.hasAttribute(vl))return d}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(vl,"active"),r.setAttribute("data-styled-version","5.3.10");var o=b5();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},A5=function(){function e(n){var r=this.element=nI(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}nh(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),N5=function(){function e(n){var r=this.element=nI(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),O5=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ok=Dw,R5={isServer:!Dw,useCSSOMInjection:!_5},zf=function(){function e(n,r,i){n===void 0&&(n=Fs),r===void 0&&(r={}),this.options=Qr({},R5,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Dw&&ok&&(ok=!1,function(s){for(var o=document.querySelectorAll(x5),a=0,u=o.length;a<u;a++){var c=o[a];c&&c.getAttribute(vl)!=="active"&&(I5(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Sd(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Qr({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new O5(o):s?new A5(o):new N5(o),new E5(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Sd(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Sd(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Sd(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=C5(o);if(a!==void 0){var u=n.names.get(a),c=r.getGroup(o);if(u&&c&&u.size){var d=vl+".g"+o+'[id="'+a+'"]',p="";u!==void 0&&u.forEach(function(m){m.length>0&&(p+=m+",")}),s+=""+c+d+'{content:"'+p+`"}/*!sc*/
`}}}return s}(this)},e}(),P5=/(a)(d)/gi,ak=function(e){return String.fromCharCode(e+(e>25?39:97))};function cy(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ak(t%52)+n;return(ak(t%52)+n).replace(P5,"$1-$2")}var Va=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},rI=function(e){return Va(5381,e)};function iI(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(wc(n)&&!Tw(n))return!1}return!0}var M5=rI("5.3.10"),L5=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&iI(t),this.componentId=n,this.baseHash=Va(M5,n),this.baseStyle=r,zf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Wo(this.rules,t,n,r).join(""),a=cy(Va(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,d=Va(this.baseHash,r.hash),p="",m=0;m<c;m++){var y=this.rules[m];if(typeof y=="string")p+=y;else if(y){var _=Wo(y,t,n,r),S=Array.isArray(_)?_.join(""):_;d=Va(d,S+m),p+=S}}if(p){var x=cy(d>>>0);if(!n.hasNameForId(i,x)){var E=r(p,"."+x,void 0,i);n.insertRules(i,x,E)}s.push(x)}}return s.join(" ")},e}(),$5=/^\s*\/\/.*$/gm,F5=[":","[",".","#"];function U5(e){var t,n,r,i,s=e===void 0?Fs:e,o=s.options,a=o===void 0?Fs:o,u=s.plugins,c=u===void 0?Bf:u,d=new r5(a),p=[],m=function(S){function x(E){if(E)try{S(E+"}")}catch{}}return function(E,v,k,T,b,R,A,N,Z,F){switch(E){case 1:if(Z===0&&v.charCodeAt(0)===64)return S(v+";"),"";break;case 2:if(N===0)return v+"/*|*/";break;case 3:switch(N){case 102:case 112:return S(k[0]+v),"";default:return v+(F===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(x)}}}(function(S){p.push(S)}),y=function(S,x,E){return x===0&&F5.indexOf(E[n.length])!==-1||E.match(i)?S:"."+t};function _(S,x,E,v){v===void 0&&(v="&");var k=S.replace($5,""),T=x&&E?E+" "+x+" { "+k+" }":k;return t=v,n=x,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(E||!x?"":x,T)}return d.use([].concat(c,[function(S,x,E){S===2&&E.length&&E[0].lastIndexOf(n)>0&&(E[0]=E[0].replace(r,y))},m,function(S){if(S===-2){var x=p;return p=[],x}}])),_.hash=c.length?c.reduce(function(S,x){return x.name||nh(15),Va(S,x.name)},5381).toString():"",_}var sI=Kt.createContext();sI.Consumer;var oI=Kt.createContext(),B5=(oI.Consumer,new zf),hy=U5();function aI(){return L.exports.useContext(sI)||B5}function lI(){return L.exports.useContext(oI)||hy}var uI=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=hy);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return nh(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=hy),this.name+t.hash},e}(),V5=/([A-Z])/,z5=/([A-Z])/g,j5=/^ms-/,Y5=function(e){return"-"+e.toLowerCase()};function lk(e){return V5.test(e)?e.replace(z5,Y5).replace(j5,"-ms-"):e}var uk=function(e){return e==null||e===!1||e===""};function Wo(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,a=e.length;o<a;o+=1)(i=Wo(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(uk(e))return"";if(Tw(e))return"."+e.styledComponentId;if(wc(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return Wo(u,t,n,r)}var c;return e instanceof uI?n?(e.inject(n,r),e.getName(r)):e:uy(e)?function d(p,m){var y,_,S=[];for(var x in p)p.hasOwnProperty(x)&&!uk(p[x])&&(Array.isArray(p[x])&&p[x].isCss||wc(p[x])?S.push(lk(x)+":",p[x],";"):uy(p[x])?S.push.apply(S,d(p[x],x)):S.push(lk(x)+": "+(y=x,(_=p[x])==null||typeof _=="boolean"||_===""?"":typeof _!="number"||_===0||y in i5||y.startsWith("--")?String(_).trim():_+"px")+";"));return m?[m+" {"].concat(S,["}"]):S}(e):e.toString()}var ck=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ll(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return wc(e)||uy(e)?ck(Wo(ik(Bf,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:ck(Wo(ik(e,n)))}var cI=function(e,t,n){return n===void 0&&(n=Fs),e.theme!==n.theme&&e.theme||t||n.theme},W5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,H5=/(^-|-$)/g;function E0(e){return e.replace(W5,"-").replace(H5,"")}var Iw=function(e){return cy(rI(e)>>>0)};function Ed(e){return typeof e=="string"&&!0}var dy=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},G5=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function q5(e,t,n){var r=e[n];dy(t)&&dy(r)?hI(r,t):e[n]=t}function hI(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(dy(o))for(var a in o)G5(a)&&q5(e,o[a],a)}return e}var bw=Kt.createContext();bw.Consumer;var C0={};function dI(e,t,n){var r=Tw(e),i=!Ed(e),s=t.attrs,o=s===void 0?Bf:s,a=t.componentId,u=a===void 0?function(v,k){var T=typeof v!="string"?"sc":E0(v);C0[T]=(C0[T]||0)+1;var b=T+"-"+Iw("5.3.10"+T+C0[T]);return k?k+"-"+b:b}(t.displayName,t.parentComponentId):a,c=t.displayName,d=c===void 0?function(v){return Ed(v)?"styled."+v:"Styled("+sk(v)+")"}(e):c,p=t.displayName&&t.componentId?E0(t.displayName)+"-"+t.componentId:t.componentId||u,m=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,y=t.shouldForwardProp;r&&e.shouldForwardProp&&(y=t.shouldForwardProp?function(v,k,T){return e.shouldForwardProp(v,k,T)&&t.shouldForwardProp(v,k,T)}:e.shouldForwardProp);var _,S=new L5(n,p,r?e.componentStyle:void 0),x=S.isStatic&&o.length===0,E=function(v,k){return function(T,b,R,A){var N=T.attrs,Z=T.componentStyle,F=T.defaultProps,j=T.foldedComponentIds,J=T.shouldForwardProp,X=T.styledComponentId,ue=T.target,oe=function(V,D,le){V===void 0&&(V=Fs);var W=Qr({},D,{theme:V}),we={};return le.forEach(function(me){var Be,_e,ne,De=me;for(Be in wc(De)&&(De=De(W)),De)W[Be]=we[Be]=Be==="className"?(_e=we[Be],ne=De[Be],_e&&ne?_e+" "+ne:_e||ne):De[Be]}),[W,we]}(cI(b,L.exports.useContext(bw),F)||Fs,b,N),Te=oe[0],ge=oe[1],$=function(V,D,le,W){var we=aI(),me=lI(),Be=D?V.generateAndInjectStyles(Fs,we,me):V.generateAndInjectStyles(le,we,me);return Be}(Z,A,Te),z=R,P=ge.$as||b.$as||ge.as||b.as||ue,ee=Ed(P),U=ge!==b?Qr({},b,{},ge):b,B={};for(var Y in U)Y[0]!=="$"&&Y!=="as"&&(Y==="forwardedAs"?B.as=U[Y]:(J?J(Y,ek,P):!ee||ek(Y))&&(B[Y]=U[Y]));return b.style&&ge.style!==b.style&&(B.style=Qr({},b.style,{},ge.style)),B.className=Array.prototype.concat(j,X,$!==X?$:null,b.className,ge.className).filter(Boolean).join(" "),B.ref=z,L.exports.createElement(P,B)}(_,v,k,x)};return E.displayName=d,(_=Kt.forwardRef(E)).attrs=m,_.componentStyle=S,_.displayName=d,_.shouldForwardProp=y,_.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Bf,_.styledComponentId=p,_.target=r?e.target:e,_.withComponent=function(v){var k=t.componentId,T=function(R,A){if(R==null)return{};var N,Z,F={},j=Object.keys(R);for(Z=0;Z<j.length;Z++)N=j[Z],A.indexOf(N)>=0||(F[N]=R[N]);return F}(t,["componentId"]),b=k&&k+"-"+(Ed(v)?v:E0(sk(v)));return dI(v,Qr({},T,{attrs:m,componentId:b}),n)},Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?hI({},e.defaultProps,v):v}}),Object.defineProperty(_,"toString",{value:function(){return"."+_.styledComponentId}}),i&&w5(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),_}var fy=function(e){return function t(n,r,i){if(i===void 0&&(i=Fs),!yw.exports.isValidElementType(r))return nh(1,String(r));var s=function(){return n(r,i,Ll.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,Qr({},i,{},o))},s.attrs=function(o){return t(n,r,Qr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(dI,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){fy[e]=fy(e)});var K5=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=iI(n),zf.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,s){var o=s(Wo(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,s){n>2&&zf.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},e}();function Q5(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ll.apply(void 0,[e].concat(n)),s="sc-global-"+Iw(JSON.stringify(i)),o=new K5(i,s);function a(c){var d=aI(),p=lI(),m=L.exports.useContext(bw),y=L.exports.useRef(d.allocateGSInstance(s)).current;return d.server&&u(y,c,d,m,p),L.exports.useLayoutEffect(function(){if(!d.server)return u(y,c,d,m,p),function(){return o.removeStyles(y,d)}},[y,c,d,m,p]),null}function u(c,d,p,m,y){if(o.isStatic)o.renderStyles(c,S5,p,y);else{var _=Qr({},d,{theme:cI(d,m,a.defaultProps)});o.renderStyles(c,_,p,y)}}return Kt.memo(a)}function X5(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ll.apply(void 0,[e].concat(n)).join(""),s=Iw(i);return new uI(s,i)}var Ze=fy;const J5=Q5`
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
`,Z5=Ze.div`
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
`,eF=Ze.header`
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
`;var fI={exports:{}},pI={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=L.exports;function tF(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nF=typeof Object.is=="function"?Object.is:tF,rF=yl.useState,iF=yl.useEffect,sF=yl.useLayoutEffect,oF=yl.useDebugValue;function aF(e,t){var n=t(),r=rF({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return sF(function(){i.value=n,i.getSnapshot=t,k0(i)&&s({inst:i})},[e,n,t]),iF(function(){return k0(i)&&s({inst:i}),e(function(){k0(i)&&s({inst:i})})},[e]),oF(n),n}function k0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nF(e,n)}catch{return!0}}function lF(e,t){return t()}var uF=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?lF:aF;pI.useSyncExternalStore=yl.useSyncExternalStore!==void 0?yl.useSyncExternalStore:uF;fI.exports=pI;var mI={exports:{}},gI={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm=L.exports,cF=fI.exports;function hF(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dF=typeof Object.is=="function"?Object.is:hF,fF=cF.useSyncExternalStore,pF=pm.useRef,mF=pm.useEffect,gF=pm.useMemo,vF=pm.useDebugValue;gI.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=pF(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=gF(function(){function u(y){if(!c){if(c=!0,d=y,y=r(y),i!==void 0&&o.hasValue){var _=o.value;if(i(_,y))return p=_}return p=y}if(_=p,dF(d,y))return _;var S=r(y);return i!==void 0&&i(_,S)?_:(d=y,p=S)}var c=!1,d,p,m=n===void 0?null:n;return[function(){return u(t())},m===null?void 0:function(){return u(m())}]},[t,n,r,i]);var a=fF(e,s[0],s[1]);return mF(function(){o.hasValue=!0,o.value=a},[a]),vF(a),a};mI.exports=gI;function yF(e){e()}let vI=yF;const wF=e=>vI=e,_F=()=>vI,qs=L.exports.createContext(null);function yI(){return L.exports.useContext(qs)}const SF=()=>{throw new Error("uSES not initialized!")};let wI=SF;const EF=e=>{wI=e},CF=(e,t)=>e===t;function kF(e=qs){const t=e===qs?yI:()=>L.exports.useContext(e);return function(r,i=CF){const{store:s,subscription:o,getServerState:a}=t(),u=wI(o.addNestedSub,s.getState,a||s.getState,r,i);return L.exports.useDebugValue(u),u}}const vt=kF();function xF(){const e=_F();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:t=s,function(){!i||t===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}const hk={notify(){},get:()=>[]};function TF(e,t){let n,r=hk;function i(p){return u(),r.subscribe(p)}function s(){r.notify()}function o(){d.onStateChange&&d.onStateChange()}function a(){return Boolean(n)}function u(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=xF())}function c(){n&&(n(),n=void 0,r.clear(),r=hk)}const d={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:u,tryUnsubscribe:c,getListeners:()=>r};return d}const DF=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",IF=DF?L.exports.useLayoutEffect:L.exports.useEffect;var mm={exports:{}},gm={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bF=L.exports,AF=Symbol.for("react.element"),NF=Symbol.for("react.fragment"),OF=Object.prototype.hasOwnProperty,RF=bF.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,PF={key:!0,ref:!0,__self:!0,__source:!0};function _I(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)OF.call(t,r)&&!PF.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:AF,type:e,key:s,ref:o,props:i,_owner:RF.current}}gm.Fragment=NF;gm.jsx=_I;gm.jsxs=_I;mm.exports=gm;const w=mm.exports.jsx,O=mm.exports.jsxs,py=mm.exports.Fragment;function MF({store:e,context:t,children:n,serverState:r}){const i=L.exports.useMemo(()=>{const a=TF(e);return{store:e,subscription:a,getServerState:r?()=>r:void 0}},[e,r]),s=L.exports.useMemo(()=>e.getState(),[e]);return IF(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]),w((t||qs).Provider,{value:i,children:n})}function SI(e=qs){const t=e===qs?yI:()=>L.exports.useContext(e);return function(){const{store:r}=t();return r}}const LF=SI();function $F(e=qs){const t=e===qs?LF:SI(e);return function(){return t().dispatch}}const ln=$F();EF(mI.exports.useSyncExternalStoreWithSelector);wF(x1.exports.unstable_batchedUpdates);function Or(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Ks(e){return!!e&&!!e[ft]}function qi(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===HF}(e)||Array.isArray(e)||!!e[yk]||!!(!((t=e.constructor)===null||t===void 0)&&t[yk])||Aw(e)||Nw(e))}function Ho(e,t,n){n===void 0&&(n=!1),$l(e)===0?(n?Object.keys:Ja)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function $l(e){var t=e[ft];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Aw(e)?2:Nw(e)?3:0}function Xa(e,t){return $l(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function FF(e,t){return $l(e)===2?e.get(t):e[t]}function EI(e,t,n){var r=$l(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function CI(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Aw(e){return YF&&e instanceof Map}function Nw(e){return WF&&e instanceof Set}function Co(e){return e.o||e.t}function Ow(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=xI(e);delete t[ft];for(var n=Ja(t),r=0;r<n.length;r++){var i=n[r],s=t[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Rw(e,t){return t===void 0&&(t=!1),Pw(e)||Ks(e)||!qi(e)||($l(e)>1&&(e.set=e.add=e.clear=e.delete=UF),Object.freeze(e),t&&Ho(e,function(n,r){return Rw(r,!0)},!0)),e}function UF(){Or(2)}function Pw(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function ti(e){var t=yy[e];return t||Or(18,e),t}function BF(e,t){yy[e]||(yy[e]=t)}function my(){return _c}function x0(e,t){t&&(ti("Patches"),e.u=[],e.s=[],e.v=t)}function jf(e){gy(e),e.p.forEach(VF),e.p=null}function gy(e){e===_c&&(_c=e.l)}function dk(e){return _c={p:[],l:_c,h:e,m:!0,_:0}}function VF(e){var t=e[ft];t.i===0||t.i===1?t.j():t.g=!0}function T0(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||ti("ES5").S(t,e,r),r?(n[ft].P&&(jf(t),Or(4)),qi(e)&&(e=Yf(t,e),t.l||Wf(t,e)),t.u&&ti("Patches").M(n[ft].t,e,t.u,t.s)):e=Yf(t,n,[]),jf(t),t.u&&t.v(t.u,t.s),e!==kI?e:void 0}function Yf(e,t,n){if(Pw(t))return t;var r=t[ft];if(!r)return Ho(t,function(a,u){return fk(e,r,t,a,u,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Wf(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Ow(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),Ho(s,function(a,u){return fk(e,r,i,a,u,n,o)}),Wf(e,i,!1),n&&e.u&&ti("Patches").N(r,n,e.u,e.s)}return r.o}function fk(e,t,n,r,i,s,o){if(Ks(i)){var a=Yf(e,i,s&&t&&t.i!==3&&!Xa(t.R,r)?s.concat(r):void 0);if(EI(n,r,a),!Ks(a))return;e.m=!1}else o&&n.add(i);if(qi(i)&&!Pw(i)){if(!e.h.D&&e._<1)return;Yf(e,i),t&&t.A.l||Wf(e,i)}}function Wf(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Rw(t,n)}function D0(e,t){var n=e[ft];return(n?Co(n):e)[t]}function pk(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function vs(e){e.P||(e.P=!0,e.l&&vs(e.l))}function I0(e){e.o||(e.o=Ow(e.t))}function vy(e,t,n){var r=Aw(t)?ti("MapSet").F(t,n):Nw(t)?ti("MapSet").T(t,n):e.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:my(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},u=a,c=Sc;o&&(u=[a],c=xu);var d=Proxy.revocable(u,c),p=d.revoke,m=d.proxy;return a.k=m,a.j=p,m}(t,n):ti("ES5").J(t,n);return(n?n.A:my()).p.push(r),r}function zF(e){return Ks(e)||Or(22,e),function t(n){if(!qi(n))return n;var r,i=n[ft],s=$l(n);if(i){if(!i.P&&(i.i<4||!ti("ES5").K(i)))return i.t;i.I=!0,r=mk(n,s),i.I=!1}else r=mk(n,s);return Ho(r,function(o,a){i&&FF(i.t,o)===a||EI(r,o,t(a))}),s===3?new Set(r):r}(e)}function mk(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Ow(e)}function jF(){function e(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var u=this[ft];return Sc.get(u,s)},set:function(u){var c=this[ft];Sc.set(c,s,u)}},a}function t(s){for(var o=s.length-1;o>=0;o--){var a=s[o][ft];if(!a.P)switch(a.i){case 5:r(a)&&vs(a);break;case 4:n(a)&&vs(a)}}}function n(s){for(var o=s.t,a=s.k,u=Ja(a),c=u.length-1;c>=0;c--){var d=u[c];if(d!==ft){var p=o[d];if(p===void 0&&!Xa(o,d))return!0;var m=a[d],y=m&&m[ft];if(y?y.t!==p:!CI(m,p))return!0}}var _=!!o[ft];return u.length!==Ja(o).length+(_?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var u=0;u<o.length;u++)if(!o.hasOwnProperty(u))return!0;return!1}var i={};BF("ES5",{J:function(s,o){var a=Array.isArray(s),u=function(d,p){if(d){for(var m=Array(p.length),y=0;y<p.length;y++)Object.defineProperty(m,""+y,e(y,!0));return m}var _=xI(p);delete _[ft];for(var S=Ja(_),x=0;x<S.length;x++){var E=S[x];_[E]=e(E,d||!!_[E].enumerable)}return Object.create(Object.getPrototypeOf(p),_)}(a,s),c={i:a?5:4,A:o?o.A:my(),P:!1,I:!1,R:{},l:o,t:s,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,ft,{value:c,writable:!0}),u},S:function(s,o,a){a?Ks(o)&&o[ft].A===s&&t(s.p):(s.u&&function u(c){if(c&&typeof c=="object"){var d=c[ft];if(d){var p=d.t,m=d.k,y=d.R,_=d.i;if(_===4)Ho(m,function(k){k!==ft&&(p[k]!==void 0||Xa(p,k)?y[k]||u(m[k]):(y[k]=!0,vs(d)))}),Ho(p,function(k){m[k]!==void 0||Xa(m,k)||(y[k]=!1,vs(d))});else if(_===5){if(r(d)&&(vs(d),y.length=!0),m.length<p.length)for(var S=m.length;S<p.length;S++)y[S]=!1;else for(var x=p.length;x<m.length;x++)y[x]=!0;for(var E=Math.min(m.length,p.length),v=0;v<E;v++)m.hasOwnProperty(v)||(y[v]=!0),y[v]===void 0&&u(m[v])}}}}(s.p[0]),t(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var gk,_c,Mw=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",YF=typeof Map!="undefined",WF=typeof Set!="undefined",vk=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",kI=Mw?Symbol.for("immer-nothing"):((gk={})["immer-nothing"]=!0,gk),yk=Mw?Symbol.for("immer-draftable"):"__$immer_draftable",ft=Mw?Symbol.for("immer-state"):"__$immer_state",HF=""+Object.prototype.constructor,Ja=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,xI=Object.getOwnPropertyDescriptors||function(e){var t={};return Ja(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},yy={},Sc={get:function(e,t){if(t===ft)return e;var n=Co(e);if(!Xa(n,t))return function(i,s,o){var a,u=pk(s,o);return u?"value"in u?u.value:(a=u.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!qi(r)?r:r===D0(e.t,t)?(I0(e),e.o[t]=vy(e.A.h,r,e)):r},has:function(e,t){return t in Co(e)},ownKeys:function(e){return Reflect.ownKeys(Co(e))},set:function(e,t,n){var r=pk(Co(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=D0(Co(e),t),s=i==null?void 0:i[ft];if(s&&s.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(CI(n,i)&&(n!==void 0||Xa(e.t,t)))return!0;I0(e),vs(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return D0(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,I0(e),vs(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Co(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Or(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Or(12)}},xu={};Ho(Sc,function(e,t){xu[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),xu.deleteProperty=function(e,t){return xu.set.call(this,e,t,void 0)},xu.set=function(e,t,n){return Sc.set.call(this,e[0],t,n,e[0])};var GF=function(){function e(n){var r=this;this.O=vk,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var u=r;return function(S){var x=this;S===void 0&&(S=a);for(var E=arguments.length,v=Array(E>1?E-1:0),k=1;k<E;k++)v[k-1]=arguments[k];return u.produce(S,function(T){var b;return(b=s).call.apply(b,[x,T].concat(v))})}}var c;if(typeof s!="function"&&Or(6),o!==void 0&&typeof o!="function"&&Or(7),qi(i)){var d=dk(r),p=vy(r,i,void 0),m=!0;try{c=s(p),m=!1}finally{m?jf(d):gy(d)}return typeof Promise!="undefined"&&c instanceof Promise?c.then(function(S){return x0(d,o),T0(S,d)},function(S){throw jf(d),S}):(x0(d,o),T0(c,d))}if(!i||typeof i!="object"){if((c=s(i))===void 0&&(c=i),c===kI&&(c=void 0),r.D&&Rw(c,!0),o){var y=[],_=[];ti("Patches").M(i,c,y,_),o(y,_)}return c}Or(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(c){for(var d=arguments.length,p=Array(d>1?d-1:0),m=1;m<d;m++)p[m-1]=arguments[m];return r.produceWithPatches(c,function(y){return i.apply(void 0,[y].concat(p))})};var o,a,u=r.produce(i,s,function(c,d){o=c,a=d});return typeof Promise!="undefined"&&u instanceof Promise?u.then(function(c){return[c,o,a]}):[u,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){qi(n)||Or(8),Ks(n)&&(n=zF(n));var r=dk(this),i=vy(this,n,void 0);return i[ft].C=!0,gy(r),i},t.finishDraft=function(n,r){var i=n&&n[ft],s=i.A;return x0(s,r),T0(void 0,s)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!vk&&Or(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=ti("Patches").$;return Ks(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},e}(),Zn=new GF,TI=Zn.produce;Zn.produceWithPatches.bind(Zn);Zn.setAutoFreeze.bind(Zn);Zn.setUseProxies.bind(Zn);Zn.applyPatches.bind(Zn);Zn.createDraft.bind(Zn);Zn.finishDraft.bind(Zn);function Ec(e){return Ec=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ec(e)}function qF(e,t){if(Ec(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Ec(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function KF(e){var t=qF(e,"string");return Ec(t)==="symbol"?t:String(t)}function QF(e,t,n){return t=KF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wk(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _k(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wk(Object(n),!0).forEach(function(r){QF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wk(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fn(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Sk=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),b0=function(){return Math.random().toString(36).substring(7).split("").join(".")},Hf={INIT:"@@redux/INIT"+b0(),REPLACE:"@@redux/REPLACE"+b0(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+b0()}};function XF(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function DI(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(fn(0));if(typeof t=="function"&&typeof n=="undefined"&&(n=t,t=void 0),typeof n!="undefined"){if(typeof n!="function")throw new Error(fn(1));return n(DI)(e,t)}if(typeof e!="function")throw new Error(fn(2));var i=e,s=t,o=[],a=o,u=!1;function c(){a===o&&(a=o.slice())}function d(){if(u)throw new Error(fn(3));return s}function p(S){if(typeof S!="function")throw new Error(fn(4));if(u)throw new Error(fn(5));var x=!0;return c(),a.push(S),function(){if(!!x){if(u)throw new Error(fn(6));x=!1,c();var v=a.indexOf(S);a.splice(v,1),o=null}}}function m(S){if(!XF(S))throw new Error(fn(7));if(typeof S.type=="undefined")throw new Error(fn(8));if(u)throw new Error(fn(9));try{u=!0,s=i(s,S)}finally{u=!1}for(var x=o=a,E=0;E<x.length;E++){var v=x[E];v()}return S}function y(S){if(typeof S!="function")throw new Error(fn(10));i=S,m({type:Hf.REPLACE})}function _(){var S,x=p;return S={subscribe:function(v){if(typeof v!="object"||v===null)throw new Error(fn(11));function k(){v.next&&v.next(d())}k();var T=x(k);return{unsubscribe:T}}},S[Sk]=function(){return this},S}return m({type:Hf.INIT}),r={dispatch:m,subscribe:p,getState:d,replaceReducer:y},r[Sk]=_,r}function JF(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Hf.INIT});if(typeof r=="undefined")throw new Error(fn(12));if(typeof n(void 0,{type:Hf.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(fn(13))})}function ZF(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var s=Object.keys(n),o;try{JF(n)}catch(a){o=a}return function(u,c){if(u===void 0&&(u={}),o)throw o;for(var d=!1,p={},m=0;m<s.length;m++){var y=s[m],_=n[y],S=u[y],x=_(S,c);if(typeof x=="undefined")throw c&&c.type,new Error(fn(14));p[y]=x,d=d||x!==S}return d=d||s.length!==Object.keys(u).length,d?p:u}}function Gf(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function e8(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(fn(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=t.map(function(u){return u(o)});return s=Gf.apply(void 0,a)(i.dispatch),_k(_k({},i),{},{dispatch:s})}}}function II(e){var t=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,e):o(a)}}};return t}var bI=II();bI.withExtraArgument=II;var Ek=bI,AI=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),t8=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(d){return u([c,d])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(d){c=[6,d],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},wl=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},n8=Object.defineProperty,r8=Object.defineProperties,i8=Object.getOwnPropertyDescriptors,Ck=Object.getOwnPropertySymbols,s8=Object.prototype.hasOwnProperty,o8=Object.prototype.propertyIsEnumerable,kk=function(e,t,n){return t in e?n8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Us=function(e,t){for(var n in t||(t={}))s8.call(t,n)&&kk(e,n,t[n]);if(Ck)for(var r=0,i=Ck(t);r<i.length;r++){var n=i[r];o8.call(t,n)&&kk(e,n,t[n])}return e},A0=function(e,t){return r8(e,i8(t))},a8=function(e,t,n){return new Promise(function(r,i){var s=function(u){try{a(n.next(u))}catch(c){i(c)}},o=function(u){try{a(n.throw(u))}catch(c){i(c)}},a=function(u){return u.done?r(u.value):Promise.resolve(u.value).then(s,o)};a((n=n.apply(e,t)).next())})},l8=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Gf:Gf.apply(null,arguments)};function u8(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var c8=function(e){AI(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,wl([void 0],n[0].concat(this)))):new(t.bind.apply(t,wl([void 0],n.concat(this))))},t}(Array),h8=function(e){AI(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,wl([void 0],n[0].concat(this)))):new(t.bind.apply(t,wl([void 0],n.concat(this))))},t}(Array);function wy(e){return qi(e)?TI(e,function(){}):e}function d8(e){return typeof e=="boolean"}function f8(){return function(t){return p8(t)}}function p8(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new c8;return n&&(d8(n)?r.push(Ek):r.push(Ek.withExtraArgument(n.extraArgument))),r}var m8=!0;function g8(e){var t=f8(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?t():s,a=n.devTools,u=a===void 0?!0:a,c=n.preloadedState,d=c===void 0?void 0:c,p=n.enhancers,m=p===void 0?void 0:p,y;if(typeof i=="function")y=i;else if(u8(i))y=ZF(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var _=o;typeof _=="function"&&(_=_(t));var S=e8.apply(void 0,_),x=Gf;u&&(x=l8(Us({trace:!m8},typeof u=="object"&&u)));var E=new h8(S),v=E;Array.isArray(m)?v=wl([S],m):typeof m=="function"&&(v=m(E));var k=x.apply(void 0,v);return DI(y,d,k)}function Bs(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var s=t.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return Us(Us({type:e,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function NI(e){var t={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return e(i),[t,n,r]}function v8(e){return typeof e=="function"}function y8(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?NI(t):[t,n,r],s=i[0],o=i[1],a=i[2],u;if(v8(e))u=function(){return wy(e())};else{var c=wy(e);u=function(){return c}}function d(p,m){p===void 0&&(p=u());var y=wl([s[m.type]],o.filter(function(_){var S=_.matcher;return S(m)}).map(function(_){var S=_.reducer;return S}));return y.filter(function(_){return!!_}).length===0&&(y=[a]),y.reduce(function(_,S){if(S)if(Ks(_)){var x=_,E=S(x,m);return E===void 0?_:E}else{if(qi(_))return TI(_,function(v){return S(v,m)});var E=S(_,m);if(E===void 0){if(_===null)return _;throw Error("A case reducer on a non-draftable value must not return undefined")}return E}return _},p)}return d.getInitialState=u,d}function w8(e,t){return e+"/"+t}function oa(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var n=typeof e.initialState=="function"?e.initialState:wy(e.initialState),r=e.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(d){var p=r[d],m=w8(t,d),y,_;"reducer"in p?(y=p.reducer,_=p.prepare):y=p,s[d]=y,o[m]=y,a[d]=_?Bs(m,_):Bs(m)});function u(){var d=typeof e.extraReducers=="function"?NI(e.extraReducers):[e.extraReducers],p=d[0],m=p===void 0?{}:p,y=d[1],_=y===void 0?[]:y,S=d[2],x=S===void 0?void 0:S,E=Us(Us({},m),o);return y8(n,function(v){for(var k in E)v.addCase(k,E[k]);for(var T=0,b=_;T<b.length;T++){var R=b[T];v.addMatcher(R.matcher,R.reducer)}x&&v.addDefaultCase(x)})}var c;return{name:t,reducer:function(d,p){return c||(c=u()),c(d,p)},actions:a,caseReducers:s,getInitialState:function(){return c||(c=u()),c.getInitialState()}}}var _8="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",S8=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=_8[Math.random()*64|0];return t},E8=["name","message","stack","code"],N0=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),xk=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),C8=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=E8;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},_r=function(){function e(t,n,r){var i=Bs(t+"/fulfilled",function(c,d,p,m){return{payload:c,meta:A0(Us({},m||{}),{arg:p,requestId:d,requestStatus:"fulfilled"})}}),s=Bs(t+"/pending",function(c,d,p){return{payload:void 0,meta:A0(Us({},p||{}),{arg:d,requestId:c,requestStatus:"pending"})}}),o=Bs(t+"/rejected",function(c,d,p,m,y){return{payload:m,error:(r&&r.serializeError||C8)(c||"Rejected"),meta:A0(Us({},y||{}),{arg:p,requestId:d,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),a=typeof AbortController!="undefined"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function u(c){return function(d,p,m){var y=r!=null&&r.idGenerator?r.idGenerator(c):S8(),_=new a,S;function x(v){S=v,_.abort()}var E=function(){return a8(this,null,function(){var v,k,T,b,R,A,N;return t8(this,function(Z){switch(Z.label){case 0:return Z.trys.push([0,4,,5]),b=(v=r==null?void 0:r.condition)==null?void 0:v.call(r,c,{getState:p,extra:m}),x8(b)?[4,b]:[3,2];case 1:b=Z.sent(),Z.label=2;case 2:if(b===!1||_.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return R=new Promise(function(F,j){return _.signal.addEventListener("abort",function(){return j({name:"AbortError",message:S||"Aborted"})})}),d(s(y,c,(k=r==null?void 0:r.getPendingMeta)==null?void 0:k.call(r,{requestId:y,arg:c},{getState:p,extra:m}))),[4,Promise.race([R,Promise.resolve(n(c,{dispatch:d,getState:p,extra:m,requestId:y,signal:_.signal,abort:x,rejectWithValue:function(F,j){return new N0(F,j)},fulfillWithValue:function(F,j){return new xk(F,j)}})).then(function(F){if(F instanceof N0)throw F;return F instanceof xk?i(F.payload,y,c,F.meta):i(F,y,c)})])];case 3:return T=Z.sent(),[3,5];case 4:return A=Z.sent(),T=A instanceof N0?o(null,y,c,A.payload,A.meta):o(A,y,c),[3,5];case 5:return N=r&&!r.dispatchConditionRejection&&o.match(T)&&T.meta.condition,N||d(T),[2,T]}})})}();return Object.assign(E,{abort:x,requestId:y,arg:c,unwrap:function(){return E.then(k8)}})}}return Object.assign(u,{pending:s,rejected:o,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function k8(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function x8(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var T8=function(e){return e&&typeof e.match=="function"},OI=function(e,t){return T8(e)?e.match(t):e(t)};function D8(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(n){return e.some(function(r){return OI(r,n)})}}function Tk(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(n){return e.every(function(r){return OI(r,n)})}}function I8(e,t){if(!e||!e.meta)return!1;var n=typeof e.meta.requestId=="string",r=t.indexOf(e.meta.requestStatus)>-1;return n&&r}function RI(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function _y(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length===0?function(n){return I8(n,["rejected"])}:RI(e)?function(n){var r=e.map(function(s){return s.rejected}),i=D8.apply(void 0,r);return i(n)}:_y()(e[0])}function Lw(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=function(r){return r&&r.meta&&r.meta.rejectedWithValue};return e.length===0?function(r){var i=Tk(_y.apply(void 0,e),n);return i(r)}:RI(e)?function(r){var i=Tk(_y.apply(void 0,e),n);return i(r)}:Lw()(e[0])}var $w="listenerMiddleware";Bs($w+"/add");Bs($w+"/removeAll");Bs($w+"/remove");var Dk;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window!="undefined"?window:typeof global!="undefined"?global:globalThis);jF();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const PI=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},b8=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},MI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,d=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,y=c&63;u||(y=64,o||(m=64)),r.push(n[d],n[p],n[m],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(PI(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):b8(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new A8;const m=s<<2|a>>4;if(r.push(m),c!==64){const y=a<<4&240|c>>2;if(r.push(y),p!==64){const _=c<<6&192|p;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class A8 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N8=function(e){const t=PI(e);return MI.encodeByteArray(t,!0)},qf=function(e){return N8(e).replace(/\./g,"")},LI=function(e){try{return MI.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function O8(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const R8=()=>O8().__FIREBASE_DEFAULTS__,P8=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},M8=()=>{if(typeof document=="undefined")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&LI(e[1]);return t&&JSON.parse(t)},vm=()=>{try{return R8()||P8()||M8()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},$I=e=>{var t,n;return(n=(t=vm())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},FI=e=>{const t=$I(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},L8=()=>{var e;return(e=vm())===null||e===void 0?void 0:e.config},UI=e=>{var t;return(t=vm())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $8{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function BI(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[qf(JSON.stringify(n)),qf(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function F8(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Cn())}function U8(){var e;const t=(e=vm())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function B8(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function V8(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function z8(){const e=Cn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function j8(){try{return typeof indexedDB=="object"}catch{return!1}}function Y8(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W8="FirebaseError";class di extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=W8,Object.setPrototypeOf(this,di.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rh.prototype.create)}}class rh{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?H8(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new di(i,a,r)}}function H8(e,t){return e.replace(G8,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const G8=/\{\$([^}]+)}/g;function q8(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Kf(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Ik(s)&&Ik(o)){if(!Kf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ik(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Tu(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Du(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function K8(e,t){const n=new Q8(e,t);return n.subscribe.bind(n)}class Q8{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");X8(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=O0),i.error===void 0&&(i.error=O0),i.complete===void 0&&(i.complete=O0);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function X8(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function O0(){}/**
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
 */function Xt(e){return e&&e._delegate?e._delegate:e}class Qs{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ko="[DEFAULT]";/**
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
 */class J8{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new $8;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(eU(t))try{this.getOrInitializeService({instanceIdentifier:ko})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=ko){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ko){return this.instances.has(t)}getOptions(t=ko){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Z8(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ko){return this.component?this.component.multipleInstances?t:ko:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Z8(e){return e===ko?void 0:e}function eU(e){return e.instantiationMode==="EAGER"}/**
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
 */class tU{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new J8(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(je||(je={}));const nU={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},rU=je.INFO,iU={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},sU=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=iU[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fw{constructor(t){this.name=t,this._logLevel=rU,this._logHandler=sU,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in je))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?nU[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...t),this._logHandler(this,je.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...t),this._logHandler(this,je.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,je.INFO,...t),this._logHandler(this,je.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,je.WARN,...t),this._logHandler(this,je.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...t),this._logHandler(this,je.ERROR,...t)}}const oU=(e,t)=>t.some(n=>e instanceof n);let bk,Ak;function aU(){return bk||(bk=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lU(){return Ak||(Ak=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const VI=new WeakMap,Sy=new WeakMap,zI=new WeakMap,R0=new WeakMap,Uw=new WeakMap;function uU(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Vs(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&VI.set(n,e)}).catch(()=>{}),Uw.set(t,e),t}function cU(e){if(Sy.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Sy.set(e,t)}let Ey={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Sy.get(e);if(t==="objectStoreNames")return e.objectStoreNames||zI.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vs(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function hU(e){Ey=e(Ey)}function dU(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(P0(this),t,...n);return zI.set(r,t.sort?t.sort():[t]),Vs(r)}:lU().includes(e)?function(...t){return e.apply(P0(this),t),Vs(VI.get(this))}:function(...t){return Vs(e.apply(P0(this),t))}}function fU(e){return typeof e=="function"?dU(e):(e instanceof IDBTransaction&&cU(e),oU(e,aU())?new Proxy(e,Ey):e)}function Vs(e){if(e instanceof IDBRequest)return uU(e);if(R0.has(e))return R0.get(e);const t=fU(e);return t!==e&&(R0.set(e,t),Uw.set(t,e)),t}const P0=e=>Uw.get(e);function pU(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Vs(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Vs(o.result),u.oldVersion,u.newVersion,Vs(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const mU=["get","getKey","getAll","getAllKeys","count"],gU=["put","add","delete","clear"],M0=new Map;function Nk(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(M0.get(t))return M0.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=gU.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mU.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return M0.set(t,s),s}hU(e=>({...e,get:(t,n,r)=>Nk(t,n)||e.get(t,n,r),has:(t,n)=>!!Nk(t,n)||e.has(t,n)}));/**
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
 */class vU{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yU(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yU(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Cy="@firebase/app",Ok="0.9.9";/**
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
 */const Go=new Fw("@firebase/app"),wU="@firebase/app-compat",_U="@firebase/analytics-compat",SU="@firebase/analytics",EU="@firebase/app-check-compat",CU="@firebase/app-check",kU="@firebase/auth",xU="@firebase/auth-compat",TU="@firebase/database",DU="@firebase/database-compat",IU="@firebase/functions",bU="@firebase/functions-compat",AU="@firebase/installations",NU="@firebase/installations-compat",OU="@firebase/messaging",RU="@firebase/messaging-compat",PU="@firebase/performance",MU="@firebase/performance-compat",LU="@firebase/remote-config",$U="@firebase/remote-config-compat",FU="@firebase/storage",UU="@firebase/storage-compat",BU="@firebase/firestore",VU="@firebase/firestore-compat",zU="firebase",jU="9.21.0";/**
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
 */const ky="[DEFAULT]",YU={[Cy]:"fire-core",[wU]:"fire-core-compat",[SU]:"fire-analytics",[_U]:"fire-analytics-compat",[CU]:"fire-app-check",[EU]:"fire-app-check-compat",[kU]:"fire-auth",[xU]:"fire-auth-compat",[TU]:"fire-rtdb",[DU]:"fire-rtdb-compat",[IU]:"fire-fn",[bU]:"fire-fn-compat",[AU]:"fire-iid",[NU]:"fire-iid-compat",[OU]:"fire-fcm",[RU]:"fire-fcm-compat",[PU]:"fire-perf",[MU]:"fire-perf-compat",[LU]:"fire-rc",[$U]:"fire-rc-compat",[FU]:"fire-gcs",[UU]:"fire-gcs-compat",[BU]:"fire-fst",[VU]:"fire-fst-compat","fire-js":"fire-js",[zU]:"fire-js-all"};/**
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
 */const Qf=new Map,xy=new Map;function WU(e,t){try{e.container.addComponent(t)}catch(n){Go.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function qo(e){const t=e.name;if(xy.has(t))return Go.debug(`There were multiple attempts to register component ${t}.`),!1;xy.set(t,e);for(const n of Qf.values())WU(n,e);return!0}function ym(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const HU={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zs=new rh("app","Firebase",HU);/**
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
 */class GU{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zs.create("app-deleted",{appName:this._name})}}/**
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
 */const aa=jU;function jI(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ky,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw zs.create("bad-app-name",{appName:String(i)});if(n||(n=L8()),!n)throw zs.create("no-options");const s=Qf.get(i);if(s){if(Kf(n,s.options)&&Kf(r,s.config))return s;throw zs.create("duplicate-app",{appName:i})}const o=new tU(i);for(const u of xy.values())o.addComponent(u);const a=new GU(n,r,o);return Qf.set(i,a),a}function Bw(e=ky){const t=Qf.get(e);if(!t&&e===ky)return jI();if(!t)throw zs.create("no-app",{appName:e});return t}function ni(e,t,n){var r;let i=(r=YU[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Go.warn(a.join(" "));return}qo(new Qs(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const qU="firebase-heartbeat-database",KU=1,Cc="firebase-heartbeat-store";let L0=null;function YI(){return L0||(L0=pU(qU,KU,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Cc)}}}).catch(e=>{throw zs.create("idb-open",{originalErrorMessage:e.message})})),L0}async function QU(e){try{return(await YI()).transaction(Cc).objectStore(Cc).get(WI(e))}catch(t){if(t instanceof di)Go.warn(t.message);else{const n=zs.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Go.warn(n.message)}}}async function Rk(e,t){try{const r=(await YI()).transaction(Cc,"readwrite");return await r.objectStore(Cc).put(t,WI(e)),r.done}catch(n){if(n instanceof di)Go.warn(n.message);else{const r=zs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Go.warn(r.message)}}}function WI(e){return`${e.name}!${e.options.appId}`}/**
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
 */const XU=1024,JU=30*24*60*60*1e3;class ZU{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new t9(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pk();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=JU}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pk(),{heartbeatsToSend:n,unsentEntries:r}=e9(this._heartbeatsCache.heartbeats),i=qf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pk(){return new Date().toISOString().substring(0,10)}function e9(e,t=XU){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mk(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mk(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class t9{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return j8()?Y8().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await QU(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rk(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rk(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Mk(e){return qf(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function n9(e){qo(new Qs("platform-logger",t=>new vU(t),"PRIVATE")),qo(new Qs("heartbeat",t=>new ZU(t),"PRIVATE")),ni(Cy,Ok,e),ni(Cy,Ok,"esm2017"),ni("fire-js","")}n9("");function Vw(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function HI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const r9=HI,GI=new rh("auth","Firebase",HI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=new Fw("@firebase/auth");function i9(e,...t){Xf.logLevel<=je.WARN&&Xf.warn(`Auth (${aa}): ${e}`,...t)}function Xd(e,...t){Xf.logLevel<=je.ERROR&&Xf.error(`Auth (${aa}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(e,...t){throw zw(e,...t)}function ri(e,...t){return zw(e,...t)}function qI(e,t,n){const r=Object.assign(Object.assign({},r9()),{[t]:n});return new rh("auth","Firebase",r).create(t,{appName:e.name})}function s9(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&gr(e,"argument-error"),qI(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zw(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return GI.create(e,...t)}function ye(e,t,...n){if(!e)throw zw(t,...n)}function Oi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Xd(t),new Error(t)}function Ki(e,t){e||Oi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function o9(){return Lk()==="http:"||Lk()==="https:"}function Lk(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a9(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(o9()||B8()||"connection"in navigator)?navigator.onLine:!0}function l9(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ki(n>t,"Short delay should be less than long delay!"),this.isMobile=F8()||V8()}get(){return a9()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(e,t){Ki(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Oi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Oi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Oi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u9={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c9=new sh(3e4,6e4);function Fl(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ul(e,t,n,r,i={}){return QI(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=ih(Object.assign({key:e.config.apiKey},o)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),KI.fetch()(XI(e,e.config.apiHost,n,a),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},s))})}async function QI(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},u9),t);try{const i=new h9(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Cd(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cd(e,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Cd(e,"email-already-in-use",o);if(u==="USER_DISABLED")throw Cd(e,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw qI(e,d,c);gr(e,d)}}catch(i){if(i instanceof di)throw i;gr(e,"network-request-failed",{message:String(i)})}}async function oh(e,t,n,r,i={}){const s=await Ul(e,t,n,r,i);return"mfaPendingCredential"in s&&gr(e,"multi-factor-auth-required",{_serverResponse:s}),s}function XI(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?jw(e.config,i):`${e.config.apiScheme}://${i}`}class h9{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ri(this.auth,"network-request-failed")),c9.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cd(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ri(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d9(e,t){return Ul(e,"POST","/v1/accounts:delete",t)}async function f9(e,t){return Ul(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function p9(e,t=!1){const n=Xt(e),r=await n.getIdToken(t),i=Yw(r);ye(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ju($0(i.auth_time)),issuedAtTime:ju($0(i.iat)),expirationTime:ju($0(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $0(e){return Number(e)*1e3}function Yw(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Xd("JWT malformed, contained fewer than 3 sections"),null;try{const i=LI(n);return i?JSON.parse(i):(Xd("Failed to decode base64 JWT payload"),null)}catch(i){return Xd("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function m9(e){const t=Yw(e);return ye(t,"internal-error"),ye(typeof t.exp!="undefined","internal-error"),ye(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kc(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof di&&g9(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function g9({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v9{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ju(this.lastLoginAt),this.creationTime=ju(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Jf(e){var t;const n=e.auth,r=await e.getIdToken(),i=await kc(e,f9(n,{idToken:r}));ye(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?_9(s.providerUserInfo):[],a=w9(e.providerData,o),u=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new JI(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}async function y9(e){const t=Xt(e);await Jf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function w9(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function _9(e){return e.map(t=>{var{providerId:n}=t,r=Vw(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S9(e,t){const n=await QI(e,{},async()=>{const r=ih({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=XI(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",KI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ye(t.idToken,"internal-error"),ye(typeof t.idToken!="undefined","internal-error"),ye(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):m9(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return ye(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await S9(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new xc;return r&&(ye(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(ye(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(ye(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new xc,this.toJSON())}_performRefresh(){return Oi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(e,t){ye(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class Mo{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Vw(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new v9(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new JI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await kc(this,this.stsTokenManager.getToken(this.auth,t));return ye(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return p9(this,t)}reload(){return y9(this)}_assign(t){this!==t&&(ye(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Mo(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Jf(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await kc(this,d9(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:k,emailVerified:T,isAnonymous:b,providerData:R,stsTokenManager:A}=n;ye(k&&A,t,"internal-error");const N=xc.fromJSON(this.name,A);ye(typeof k=="string",t,"internal-error"),ds(p,t.name),ds(m,t.name),ye(typeof T=="boolean",t,"internal-error"),ye(typeof b=="boolean",t,"internal-error"),ds(y,t.name),ds(_,t.name),ds(S,t.name),ds(x,t.name),ds(E,t.name),ds(v,t.name);const Z=new Mo({uid:k,auth:t,email:m,emailVerified:T,displayName:p,isAnonymous:b,photoURL:_,phoneNumber:y,tenantId:S,stsTokenManager:N,createdAt:E,lastLoginAt:v});return R&&Array.isArray(R)&&(Z.providerData=R.map(F=>Object.assign({},F))),x&&(Z._redirectEventId=x),Z}static async _fromIdTokenResponse(t,n,r=!1){const i=new xc;i.updateFromServerResponse(n);const s=new Mo({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Jf(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=new Map;function Ri(e){Ki(e instanceof Function,"Expected a class definition");let t=$k.get(e);return t?(Ki(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,$k.set(e,t),t)}/**
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
 */class ZI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ZI.type="NONE";const Fk=ZI;/**
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
 */function Jd(e,t,n){return`firebase:${e}:${t}:${n}`}class Za{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Jd(this.userKey,i.apiKey,s),this.fullPersistenceKey=Jd("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Mo._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Za(Ri(Fk),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ri(Fk);const o=Jd(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Mo._fromJSON(t,d);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Za(s,t,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Za(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(nb(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(eb(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ib(t))return"Blackberry";if(sb(t))return"Webos";if(Ww(t))return"Safari";if((t.includes("chrome/")||tb(t))&&!t.includes("edge/"))return"Chrome";if(rb(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function eb(e=Cn()){return/firefox\//i.test(e)}function Ww(e=Cn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function tb(e=Cn()){return/crios\//i.test(e)}function nb(e=Cn()){return/iemobile/i.test(e)}function rb(e=Cn()){return/android/i.test(e)}function ib(e=Cn()){return/blackberry/i.test(e)}function sb(e=Cn()){return/webos/i.test(e)}function wm(e=Cn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function E9(e=Cn()){var t;return wm(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function C9(){return z8()&&document.documentMode===10}function ob(e=Cn()){return wm(e)||rb(e)||sb(e)||ib(e)||/windows phone/i.test(e)||nb(e)}function k9(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(e,t=[]){let n;switch(e){case"Browser":n=Uk(Cn());break;case"Worker":n=`${Uk(Cn())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${aa}/${r}`}async function lb(e,t){return Ul(e,"GET","/v2/recaptchaConfig",Fl(e,t))}function Bk(e){return e!==void 0&&e.enterprise!==void 0}class ub{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x9(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function cb(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ri("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",x9().appendChild(r)})}function T9(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const D9="https://www.google.com/recaptcha/enterprise.js?render=",I9="recaptcha-enterprise",b9="NO_RECAPTCHA";class hb{constructor(t){this.type=I9,this.auth=la(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{lb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ub(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Bk(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:t}).then(c=>{o(c)}).catch(()=>{o(b9)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Bk(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}cb(D9+a).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Zf(e,t,n,r=!1){const i=new hb(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class N9{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vk(this),this.idTokenSubscription=new Vk(this),this.beforeStateQueue=new A9(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=GI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ri(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Za.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!o||o===a)&&(u==null?void 0:u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Jf(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=l9()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Xt(t):null;return n&&ye(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ye(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ri(t))})}async initializeRecaptchaConfig(){const t=await lb(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ub(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new hb(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new rh("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ri(t)||this._popupRedirectResolver;ye(n,this,"argument-error"),this.redirectPersistenceManager=await Za.create(this,[Ri(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ye(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ab(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&i9(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function la(e){return Xt(e)}class Vk{constructor(t){this.auth=t,this.observer=null,this.addObserver=K8(n=>this.observer=n)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O9(e,t){const n=ym(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Kf(s,t!=null?t:{}))return i;gr(i,"already-initialized")}return n.initialize({options:t})}function R9(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ri);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function P9(e,t,n){const r=la(e);ye(r._canInitEmulator,r,"emulator-config-failed"),ye(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=db(t),{host:o,port:a}=M9(t),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||L9()}function db(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function M9(e){const t=db(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:zk(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:zk(o)}}}function zk(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function L9(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Oi("not implemented")}_getIdTokenResponse(t){return Oi("not implemented")}_linkToIdToken(t,n){return Oi("not implemented")}_getReauthenticationResolver(t){return Oi("not implemented")}}async function $9(e,t){return Ul(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(e,t){return oh(e,"POST","/v1/accounts:signInWithPassword",Fl(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F9(e,t){return oh(e,"POST","/v1/accounts:signInWithEmailLink",Fl(e,t))}async function U9(e,t){return oh(e,"POST","/v1/accounts:signInWithEmailLink",Fl(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends Hw{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Tc(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Tc(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Zf(t,r,"signInWithPassword");return F0(t,i)}else return F0(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Zf(t,r,"signInWithPassword");return F0(t,s)}else return Promise.reject(i)});case"emailLink":return F9(t,{email:this._email,oobCode:this._password});default:gr(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return $9(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return U9(t,{idToken:n,email:this._email,oobCode:this._password});default:gr(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(e,t){return oh(e,"POST","/v1/accounts:signInWithIdp",Fl(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B9="http://localhost";class Ko extends Hw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ko(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):gr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Vw(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ko(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return el(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,el(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,el(t,n)}buildRequest(){const t={requestUri:B9,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ih(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V9(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function z9(e){const t=Tu(Du(e)).link,n=t?Tu(Du(t)).deep_link_id:null,r=Tu(Du(e)).deep_link_id;return(r?Tu(Du(r)).link:null)||r||n||t||e}class Gw{constructor(t){var n,r,i,s,o,a;const u=Tu(Du(t)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=V9((i=u.mode)!==null&&i!==void 0?i:null);ye(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=z9(t);try{return new Gw(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.providerId=Bl.PROVIDER_ID}static credential(t,n){return Tc._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Gw.parseLink(n);return ye(r,"argument-error"),Tc._fromEmailAndCode(t,r.code,r.tenantId)}}Bl.PROVIDER_ID="password";Bl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ah extends qw{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends ah{constructor(){super("facebook.com")}static credential(t){return Ko._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ys.credentialFromTaggedObject(t)}static credentialFromError(t){return ys.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ys.credential(t.oauthAccessToken)}catch{return null}}}ys.FACEBOOK_SIGN_IN_METHOD="facebook.com";ys.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends ah{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ko._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return bi.credentialFromTaggedObject(t)}static credentialFromError(t){return bi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return bi.credential(n,r)}catch{return null}}}bi.GOOGLE_SIGN_IN_METHOD="google.com";bi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends ah{constructor(){super("github.com")}static credential(t){return Ko._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ws.credentialFromTaggedObject(t)}static credentialFromError(t){return ws.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ws.credential(t.oauthAccessToken)}catch{return null}}}ws.GITHUB_SIGN_IN_METHOD="github.com";ws.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends ah{constructor(){super("twitter.com")}static credential(t,n){return Ko._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return _s.credentialFromTaggedObject(t)}static credentialFromError(t){return _s.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return _s.credential(n,r)}catch{return null}}}_s.TWITTER_SIGN_IN_METHOD="twitter.com";_s.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(e,t){return oh(e,"POST","/v1/accounts:signUp",Fl(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Mo._fromIdTokenResponse(t,r,i),o=jk(r);return new Qo({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=jk(r);return new Qo({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function jk(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep extends di{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ep.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ep(t,n,r,i)}}function fb(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ep._fromErrorAndOperation(e,s,t,r):s})}async function j9(e,t,n=!1){const r=await kc(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Qo._forOperation(e,"link",r)}/**
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
 */async function Y9(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await kc(e,fb(r,i,t,e),n);ye(s.idToken,r,"internal-error");const o=Yw(s.idToken);ye(o,r,"internal-error");const{sub:a}=o;return ye(e.uid===a,r,"user-mismatch"),Qo._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&gr(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pb(e,t,n=!1){const r="signIn",i=await fb(e,r,t),s=await Qo._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function W9(e,t){return pb(la(e),t)}async function H9(e,t,n){var r;const i=la(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await Zf(i,s,"signUpPassword");o=U0(i,c)}else o=U0(i,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const d=await Zf(i,s,"signUpPassword");return U0(i,d)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),u=await Qo._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(u.user),u}function G9(e,t,n){return W9(Xt(e),Bl.credential(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(e,t){return Xt(e).setPersistence(t)}function q9(e,t,n,r){return Xt(e).onIdTokenChanged(t,n,r)}function K9(e,t,n){return Xt(e).beforeAuthStateChanged(t,n)}function Q9(e){return Xt(e).signOut()}const tp="__sak";/**
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
 */class gb{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tp,"1"),this.storage.removeItem(tp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X9(){const e=Cn();return Ww(e)||wm(e)}const J9=1e3,Z9=10;class vb extends gb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=X9()&&k9(),this.fallbackToPolling=ob(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);C9()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Z9):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},J9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}vb.type="LOCAL";const Kw=vb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb extends gb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}yb.type="SESSION";const wb=yb;/**
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
 */function e7(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _m{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new _m(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await e7(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_m.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class t7{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Qw("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(){return window}function n7(e){ii().location.href=e}/**
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
 */function _b(){return typeof ii().WorkerGlobalScope!="undefined"&&typeof ii().importScripts=="function"}async function r7(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function i7(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function s7(){return _b()?self:null}/**
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
 */const Sb="firebaseLocalStorageDb",o7=1,np="firebaseLocalStorage",Eb="fbase_key";class lh{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sm(e,t){return e.transaction([np],t?"readwrite":"readonly").objectStore(np)}function a7(){const e=indexedDB.deleteDatabase(Sb);return new lh(e).toPromise()}function Dy(){const e=indexedDB.open(Sb,o7);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(np,{keyPath:Eb})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(np)?t(r):(r.close(),await a7(),t(await Dy()))})})}async function Yk(e,t,n){const r=Sm(e,!0).put({[Eb]:t,value:n});return new lh(r).toPromise()}async function l7(e,t){const n=Sm(e,!1).get(t),r=await new lh(n).toPromise();return r===void 0?null:r.value}function Wk(e,t){const n=Sm(e,!0).delete(t);return new lh(n).toPromise()}const u7=800,c7=3;class Cb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dy(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>c7)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _b()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_m._getInstance(s7()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await r7(),!this.activeServiceWorker)return;this.sender=new t7(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||i7()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Dy();return await Yk(t,tp,"1"),await Wk(t,tp),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yk(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>l7(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wk(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Sm(i,!1).getAll();return new lh(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),u7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cb.type="LOCAL";const h7=Cb;new sh(3e4,6e4);/**
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
 */function kb(e,t){return t?Ri(t):(ye(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Xw extends Hw{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return el(t,this._buildIdpRequest())}_linkToIdToken(t,n){return el(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return el(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function d7(e){return pb(e.auth,new Xw(e),e.bypassAuthState)}function f7(e){const{auth:t,user:n}=e;return ye(n,t,"internal-error"),Y9(n,new Xw(e),e.bypassAuthState)}async function p7(e){const{auth:t,user:n}=e;return ye(n,t,"internal-error"),j9(n,new Xw(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return d7;case"linkViaPopup":case"linkViaRedirect":return p7;case"reauthViaPopup":case"reauthViaRedirect":return f7;default:gr(this.auth,"internal-error")}}resolve(t){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m7=new sh(2e3,1e4);async function g7(e,t,n){const r=la(e);s9(e,t,qw);const i=kb(r,n);return new Io(r,"signInViaPopup",t,i).executeNotNull()}class Io extends xb{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Io.currentPopupAction&&Io.currentPopupAction.cancel(),Io.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ye(t,this.auth,"internal-error"),t}async onExecution(){Ki(this.filter.length===1,"Popup operations only handle one event");const t=Qw();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ri(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ri(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Io.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ri(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,m7.get())};t()}}Io.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v7="pendingRedirect",Zd=new Map;class y7 extends xb{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Zd.get(this.auth._key());if(!t){try{const r=await w7(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Zd.set(this.auth._key(),t)}return this.bypassAuthState||Zd.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function w7(e,t){const n=E7(t),r=S7(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _7(e,t){Zd.set(e._key(),t)}function S7(e){return Ri(e._redirectPersistence)}function E7(e){return Jd(v7,e.config.apiKey,e.name)}async function C7(e,t,n=!1){const r=la(e),i=kb(r,t),o=await new y7(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k7=10*60*1e3;class x7{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!T7(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Tb(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ri(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=k7&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hk(t))}saveEventToCache(t){this.cachedEventUids.add(Hk(t)),this.lastProcessedEventTime=Date.now()}}function Hk(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Tb({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function T7(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tb(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D7(e,t={}){return Ul(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I7=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b7=/^https?/;async function A7(e){if(e.config.emulator)return;const{authorizedDomains:t}=await D7(e);for(const n of t)try{if(N7(n))return}catch{}gr(e,"unauthorized-domain")}function N7(e){const t=Ty(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!b7.test(n))return!1;if(I7.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const O7=new sh(3e4,6e4);function Gk(){const e=ii().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function R7(e){return new Promise((t,n)=>{var r,i,s;function o(){Gk(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Gk(),n(ri(e,"network-request-failed"))},timeout:O7.get()})}if(!((i=(r=ii().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ii().gapi)===null||s===void 0)&&s.load)o();else{const a=T9("iframefcb");return ii()[a]=()=>{gapi.load?o():n(ri(e,"network-request-failed"))},cb(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(t=>{throw ef=null,t})}let ef=null;function P7(e){return ef=ef||R7(e),ef}/**
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
 */const M7=new sh(5e3,15e3),L7="__/auth/iframe",$7="emulator/auth/iframe",F7={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},U7=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function B7(e){const t=e.config;ye(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?jw(t,$7):`https://${e.config.authDomain}/${L7}`,r={apiKey:t.apiKey,appName:e.name,v:aa},i=U7.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ih(r).slice(1)}`}async function V7(e){const t=await P7(e),n=ii().gapi;return ye(n,e,"internal-error"),t.open({where:document.body,url:B7(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:F7,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ri(e,"network-request-failed"),a=ii().setTimeout(()=>{s(o)},M7.get());function u(){ii().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const z7={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},j7=500,Y7=600,W7="_blank",H7="http://localhost";class qk{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function G7(e,t,n,r=j7,i=Y7){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},z7),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Cn().toLowerCase();n&&(a=tb(c)?W7:n),eb(c)&&(t=t||H7,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[y,_])=>`${m}${y}=${_},`,"");if(E9(c)&&a!=="_self")return q7(t||"",a),new qk(null);const p=window.open(t||"",a,d);ye(p,e,"popup-blocked");try{p.focus()}catch{}return new qk(p)}function q7(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const K7="__/auth/handler",Q7="emulator/auth/handler",X7=encodeURIComponent("fac");async function Kk(e,t,n,r,i,s){ye(e.config.authDomain,e,"auth-domain-config-required"),ye(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:aa,eventId:i};if(t instanceof qw){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",q8(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,p]of Object.entries(s||{}))o[d]=p}if(t instanceof ah){const d=t.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await e._getAppCheckToken(),c=u?`#${X7}=${encodeURIComponent(u)}`:"";return`${J7(e)}?${ih(a).slice(1)}${c}`}function J7({config:e}){return e.emulator?jw(e,Q7):`https://${e.authDomain}/${K7}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="webStorageSupport";class Z7{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wb,this._completeRedirectFn=C7,this._overrideRedirectResult=_7}async _openPopup(t,n,r,i){var s;Ki((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Kk(t,n,r,Ty(),i);return G7(t,o,Qw())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Kk(t,n,r,Ty(),i);return n7(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ki(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await V7(t),r=new x7(t);return n.register("authEvent",i=>(ye(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(B0,{type:B0},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[B0];o!==void 0&&n(!!o),gr(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=A7(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ob()||Ww()||wm()}}const eB=Z7;var Qk="@firebase/auth",Xk="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tB{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nB(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rB(e){qo(new Qs("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ye(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),ye(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ab(e)},c=new N9(r,i,s,u);return R9(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),qo(new Qs("auth-internal",t=>{const n=la(t.getProvider("auth").getImmediate());return(r=>new tB(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ni(Qk,Xk,nB(e)),ni(Qk,Xk,"esm2017")}/**
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
 */const iB=5*60,sB=UI("authIdTokenMaxAge")||iB;let Jk=null;const oB=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sB)return;const i=n==null?void 0:n.token;Jk!==i&&(Jk=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aB(e=Bw()){const t=ym(e,"auth");if(t.isInitialized())return t.getImmediate();const n=O9(e,{popupRedirectResolver:eB,persistence:[h7,Kw,wb]}),r=UI("authTokenSyncURL");if(r){const s=oB(r);K9(n,s,()=>s(n.currentUser)),q9(n,o=>s(o))}const i=$I("auth");return i&&P9(n,`http://${i}`),n}rB("Browser");var lB="firebase",uB="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ni(lB,uB,"app");var cB=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},re,Jw=Jw||{},Ee=cB||self;function rp(){}function Em(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function uh(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function hB(e){return Object.prototype.hasOwnProperty.call(e,V0)&&e[V0]||(e[V0]=++dB)}var V0="closure_uid_"+(1e9*Math.random()>>>0),dB=0;function fB(e,t,n){return e.call.apply(e.bind,arguments)}function pB(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function yn(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?yn=fB:yn=pB,yn.apply(null,arguments)}function kd(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function en(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function ao(){this.s=this.s,this.o=this.o}var mB=0;ao.prototype.s=!1;ao.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),mB!=0)&&hB(this)};ao.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Db=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Zw(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Zk(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Em(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function wn(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}wn.prototype.h=function(){this.defaultPrevented=!0};var gB=function(){if(!Ee.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Ee.addEventListener("test",rp,t),Ee.removeEventListener("test",rp,t)}catch{}return e}();function ip(e){return/^[\s\xa0]*$/.test(e)}var ex=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function z0(e,t){return e<t?-1:e>t?1:0}function Cm(){var e=Ee.navigator;return e&&(e=e.userAgent)?e:""}function qr(e){return Cm().indexOf(e)!=-1}function e_(e){return e_[" "](e),e}e_[" "]=rp;function Ib(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}var vB=qr("Opera"),_l=qr("Trident")||qr("MSIE"),bb=qr("Edge"),Iy=bb||_l,Ab=qr("Gecko")&&!(Cm().toLowerCase().indexOf("webkit")!=-1&&!qr("Edge"))&&!(qr("Trident")||qr("MSIE"))&&!qr("Edge"),yB=Cm().toLowerCase().indexOf("webkit")!=-1&&!qr("Edge");function Nb(){var e=Ee.document;return e?e.documentMode:void 0}var sp;e:{var j0="",Y0=function(){var e=Cm();if(Ab)return/rv:([^\);]+)(\)|;)/.exec(e);if(bb)return/Edge\/([\d\.]+)/.exec(e);if(_l)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(yB)return/WebKit\/(\S+)/.exec(e);if(vB)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Y0&&(j0=Y0?Y0[1]:""),_l){var W0=Nb();if(W0!=null&&W0>parseFloat(j0)){sp=String(W0);break e}}sp=j0}var wB={};function _B(){return Ib(wB,9,function(){let e=0;const t=ex(String(sp)).split("."),n=ex("9").split("."),r=Math.max(t.length,n.length);for(let o=0;e==0&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;e=z0(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||z0(i[2].length==0,s[2].length==0)||z0(i[2],s[2]),i=i[3],s=s[3]}while(e==0)}return 0<=e})}var by;if(Ee.document&&_l){var tx=Nb();by=tx||parseInt(sp,10)||void 0}else by=void 0;var SB=by;function Dc(e,t){if(wn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ab){e:{try{e_(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:EB[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Dc.$.h.call(this)}}en(Dc,wn);var EB={2:"touch",3:"pen",4:"mouse"};Dc.prototype.h=function(){Dc.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ch="closure_listenable_"+(1e6*Math.random()|0),CB=0;function kB(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++CB,this.fa=this.ia=!1}function km(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function t_(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Ob(e){const t={};for(const n in e)t[n]=e[n];return t}const nx="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rb(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<nx.length;s++)n=nx[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function xm(e){this.src=e,this.g={},this.h=0}xm.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Ny(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new kB(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Ay(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Db(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(km(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ny(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var n_="closure_lm_"+(1e6*Math.random()|0),H0={};function Pb(e,t,n,r,i){if(r&&r.once)return Lb(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Pb(e,t[s],n,r,i);return null}return n=s_(n),e&&e[ch]?e.O(t,n,uh(r)?!!r.capture:!!r,i):Mb(e,t,n,!1,r,i)}function Mb(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=uh(i)?!!i.capture:!!i,a=i_(e);if(a||(e[n_]=a=new xm(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=xB(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)gB||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Fb(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xB(){function e(n){return t.call(e.src,e.listener,n)}const t=TB;return e}function Lb(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Lb(e,t[s],n,r,i);return null}return n=s_(n),e&&e[ch]?e.P(t,n,uh(r)?!!r.capture:!!r,i):Mb(e,t,n,!0,r,i)}function $b(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)$b(e,t[s],n,r,i);else r=uh(r)?!!r.capture:!!r,n=s_(n),e&&e[ch]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Ny(s,n,r,i),-1<n&&(km(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=i_(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ny(t,n,r,i)),(n=-1<e?t[e]:null)&&r_(n))}function r_(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[ch])Ay(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Fb(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=i_(t))?(Ay(n,e),n.h==0&&(n.src=null,t[n_]=null)):km(e)}}}function Fb(e){return e in H0?H0[e]:H0[e]="on"+e}function TB(e,t){if(e.fa)e=!0;else{t=new Dc(t,this);var n=e.listener,r=e.la||e.src;e.ia&&r_(e),e=n.call(r,t)}return e}function i_(e){return e=e[n_],e instanceof xm?e:null}var G0="__closure_events_fn_"+(1e9*Math.random()>>>0);function s_(e){return typeof e=="function"?e:(e[G0]||(e[G0]=function(t){return e.handleEvent(t)}),e[G0])}function Jt(){ao.call(this),this.i=new xm(this),this.S=this,this.J=null}en(Jt,ao);Jt.prototype[ch]=!0;Jt.prototype.removeEventListener=function(e,t,n,r){$b(this,e,t,n,r)};function on(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new wn(t,e);else if(t instanceof wn)t.target=t.target||e;else{var i=t;t=new wn(r,e),Rb(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=xd(o,r,!0,t)&&i}if(o=t.g=e,i=xd(o,r,!0,t)&&i,i=xd(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=xd(o,r,!1,t)&&i}Jt.prototype.N=function(){if(Jt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)km(n[r]);delete e.g[t],e.h--}}this.J=null};Jt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Jt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function xd(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Ay(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var o_=Ee.JSON.stringify;function DB(){var e=Vb;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class IB{constructor(){this.h=this.g=null}add(t,n){const r=Ub.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ub=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new bB,e=>e.reset());class bB{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function AB(e){Ee.setTimeout(()=>{throw e},0)}function Bb(e,t){Oy||NB(),Ry||(Oy(),Ry=!0),Vb.add(e,t)}var Oy;function NB(){var e=Ee.Promise.resolve(void 0);Oy=function(){e.then(OB)}}var Ry=!1,Vb=new IB;function OB(){for(var e;e=DB();){try{e.h.call(e.g)}catch(n){AB(n)}var t=Ub;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ry=!1}function Tm(e,t){Jt.call(this),this.h=e||1,this.g=t||Ee,this.j=yn(this.qb,this),this.l=Date.now()}en(Tm,Jt);re=Tm.prototype;re.ga=!1;re.T=null;re.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),on(this,"tick"),this.ga&&(a_(this),this.start()))}};re.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function a_(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}re.N=function(){Tm.$.N.call(this),a_(this),delete this.g};function l_(e,t,n){if(typeof e=="function")n&&(e=yn(e,n));else if(e&&typeof e.handleEvent=="function")e=yn(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:Ee.setTimeout(e,t||0)}function zb(e){e.g=l_(()=>{e.g=null,e.i&&(e.i=!1,zb(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class RB extends ao{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zb(this)}N(){super.N(),this.g&&(Ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ic(e){ao.call(this),this.h=e,this.g={}}en(Ic,ao);var rx=[];function jb(e,t,n,r){Array.isArray(n)||(n&&(rx[0]=n.toString()),n=rx);for(var i=0;i<n.length;i++){var s=Pb(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Yb(e){t_(e.g,function(t,n){this.g.hasOwnProperty(n)&&r_(t)},e),e.g={}}Ic.prototype.N=function(){Ic.$.N.call(this),Yb(this)};Ic.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Dm(){this.g=!0}Dm.prototype.Ea=function(){this.g=!1};function PB(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var d=c[0];c=c[1];var p=d.split("_");o=2<=p.length&&p[1]=="type"?o+(d+"="+c+"&"):o+(d+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function MB(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function za(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+$B(e,n)+(r?" "+r:"")})}function LB(e,t){e.info(function(){return"TIMEOUT: "+t})}Dm.prototype.info=function(){};function $B(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return o_(n)}catch{return t}}var ua={},ix=null;function Im(){return ix=ix||new Jt}ua.Ta="serverreachability";function Wb(e){wn.call(this,ua.Ta,e)}en(Wb,wn);function bc(e){const t=Im();on(t,new Wb(t))}ua.STAT_EVENT="statevent";function Hb(e,t){wn.call(this,ua.STAT_EVENT,e),this.stat=t}en(Hb,wn);function On(e){const t=Im();on(t,new Hb(t,e))}ua.Ua="timingevent";function Gb(e,t){wn.call(this,ua.Ua,e),this.size=t}en(Gb,wn);function hh(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return Ee.setTimeout(function(){e()},t)}var bm={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},qb={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function u_(){}u_.prototype.h=null;function sx(e){return e.h||(e.h=e.i())}function Kb(){}var dh={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function c_(){wn.call(this,"d")}en(c_,wn);function h_(){wn.call(this,"c")}en(h_,wn);var Py;function Am(){}en(Am,u_);Am.prototype.g=function(){return new XMLHttpRequest};Am.prototype.i=function(){return{}};Py=new Am;function fh(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ic(this),this.P=FB,e=Iy?125:void 0,this.V=new Tm(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Qb}function Qb(){this.i=null,this.g="",this.h=!1}var FB=45e3,My={},op={};re=fh.prototype;re.setTimeout=function(e){this.P=e};function Ly(e,t,n){e.L=1,e.v=Om(Qi(t)),e.s=n,e.S=!0,Xb(e,null)}function Xb(e,t){e.G=Date.now(),ph(e),e.A=Qi(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),sA(n.i,"t",r),e.C=0,n=e.l.I,e.h=new Qb,e.g=TA(e.l,n?t:null,!e.s),0<e.O&&(e.M=new RB(yn(e.Pa,e,e.g),e.O)),jb(e.U,e.g,"readystatechange",e.nb),t=e.I?Ob(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),bc(),PB(e.j,e.u,e.A,e.m,e.W,e.s)}re.nb=function(e){e=e.target;const t=this.M;t&&Pi(e)==3?t.l():this.Pa(e)};re.Pa=function(e){try{if(e==this.g)e:{const d=Pi(this.g);var t=this.g.Ia();const p=this.g.da();if(!(3>d)&&(d!=3||Iy||this.g&&(this.h.h||this.g.ja()||ux(this.g)))){this.J||d!=4||t==7||(t==8||0>=p?bc(3):bc(2)),Nm(this);var n=this.g.da();this.aa=n;t:if(Jb(this)){var r=ux(this.g);e="";var i=r.length,s=Pi(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){bo(this),Yu(this);var o="";break t}this.h.i=new Ee.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,MB(this.j,this.u,this.A,this.m,this.W,d,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ip(a)){var c=a;break t}}c=null}if(n=c)za(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$y(this,n);else{this.i=!1,this.o=3,On(12),bo(this),Yu(this);break e}}this.S?(Zb(this,d,o),Iy&&this.i&&d==3&&(jb(this.U,this.V,"tick",this.mb),this.V.start())):(za(this.j,this.m,o,null),$y(this,o)),d==4&&bo(this),this.i&&!this.J&&(d==4?EA(this.l,this):(this.i=!1,ph(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,On(12)):(this.o=0,On(13)),bo(this),Yu(this)}}}catch{}finally{}};function Jb(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Zb(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=UB(e,n),i==op){t==4&&(e.o=4,On(14),r=!1),za(e.j,e.m,null,"[Incomplete Response]");break}else if(i==My){e.o=4,On(15),za(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else za(e.j,e.m,i,null),$y(e,i);Jb(e)&&i!=op&&i!=My&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,On(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),y_(t),t.L=!0,On(11))):(za(e.j,e.m,n,"[Invalid Chunked Response]"),bo(e),Yu(e))}re.mb=function(){if(this.g){var e=Pi(this.g),t=this.g.ja();this.C<t.length&&(Nm(this),Zb(this,e,t),this.i&&e!=4&&ph(this))}};function UB(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?op:(n=Number(t.substring(n,r)),isNaN(n)?My:(r+=1,r+n>t.length?op:(t=t.substr(r,n),e.C=r+n,t)))}re.cancel=function(){this.J=!0,bo(this)};function ph(e){e.Y=Date.now()+e.P,eA(e,e.P)}function eA(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=hh(yn(e.lb,e),t)}function Nm(e){e.B&&(Ee.clearTimeout(e.B),e.B=null)}re.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(LB(this.j,this.A),this.L!=2&&(bc(),On(17)),bo(this),this.o=2,Yu(this)):eA(this,this.Y-e)};function Yu(e){e.l.H==0||e.J||EA(e.l,e)}function bo(e){Nm(e);var t=e.M;t&&typeof t.ra=="function"&&t.ra(),e.M=null,a_(e.V),Yb(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function $y(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Fy(n.h,e))){if(!e.K&&Fy(n.h,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)up(n),Mm(n);else break e;v_(n),On(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=hh(yn(n.ib,n),6e3));if(1>=lA(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Ao(n,11)}else if((e.K||n.g==e)&&up(n),!ip(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const d=c[3];d!=null&&(n.qa=d,n.j.info("VER="+n.qa));const p=c[4];p!=null&&(n.Ga=p,n.j.info("SVER="+n.Ga));const m=c[5];m!=null&&typeof m=="number"&&0<m&&(r=1.5*m,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=e.g;if(y){const _=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.h;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(d_(s,s.h),s.h=null))}if(r.F){const S=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.Da=S,mt(r.G,r.F,S))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=xA(r,r.I?r.oa:null,r.Y),o.K){uA(r.h,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(Nm(a),ph(a)),r.g=o}else _A(r);0<n.i.length&&Lm(n)}else c[0]!="stop"&&c[0]!="close"||Ao(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ao(n,7):g_(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}bc(4)}catch{}}function BB(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map!="undefined"&&e instanceof Map||typeof Set!="undefined"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Em(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function VB(e){if(e.sa&&typeof e.sa=="function")return e.sa();if(!e.Z||typeof e.Z!="function"){if(typeof Map!="undefined"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set!="undefined"&&e instanceof Set)){if(Em(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function tA(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Em(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=VB(e),r=BB(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var nA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zB(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Lo(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Lo){this.h=t!==void 0?t:e.h,ap(this,e.j),this.s=e.s,this.g=e.g,lp(this,e.m),this.l=e.l,t=e.i;var n=new Ac;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ox(this,n),this.o=e.o}else e&&(n=String(e).match(nA))?(this.h=!!t,ap(this,n[1]||"",!0),this.s=Iu(n[2]||""),this.g=Iu(n[3]||"",!0),lp(this,n[4]),this.l=Iu(n[5]||"",!0),ox(this,n[6]||"",!0),this.o=Iu(n[7]||"")):(this.h=!!t,this.i=new Ac(null,this.h))}Lo.prototype.toString=function(){var e=[],t=this.j;t&&e.push(bu(t,ax,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(bu(t,ax,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(bu(n,n.charAt(0)=="/"?WB:YB,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",bu(n,GB)),e.join("")};function Qi(e){return new Lo(e)}function ap(e,t,n){e.j=n?Iu(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function lp(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ox(e,t,n){t instanceof Ac?(e.i=t,qB(e.i,e.h)):(n||(t=bu(t,HB)),e.i=new Ac(t,e.h))}function mt(e,t,n){e.i.set(t,n)}function Om(e){return mt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Iu(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function bu(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,jB),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function jB(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ax=/[#\/\?@]/g,YB=/[#\?:]/g,WB=/[#\?]/g,HB=/[#\?@]/g,GB=/#/g;function Ac(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function lo(e){e.g||(e.g=new Map,e.h=0,e.i&&zB(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}re=Ac.prototype;re.add=function(e,t){lo(this),this.i=null,e=Vl(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function rA(e,t){lo(e),t=Vl(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function iA(e,t){return lo(e),t=Vl(e,t),e.g.has(t)}re.forEach=function(e,t){lo(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};re.sa=function(){lo(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};re.Z=function(e){lo(this);let t=[];if(typeof e=="string")iA(this,e)&&(t=t.concat(this.g.get(Vl(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};re.set=function(e,t){return lo(this),this.i=null,e=Vl(this,e),iA(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};re.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function sA(e,t,n){rA(e,t),0<n.length&&(e.i=null,e.g.set(Vl(e,t),Zw(n)),e.h+=n.length)}re.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Vl(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function qB(e,t){t&&!e.j&&(lo(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(rA(this,r),sA(this,i,n))},e)),e.j=t}var KB=class{constructor(e,t){this.h=e,this.g=t}};function oA(e){this.l=e||QB,Ee.PerformanceNavigationTiming?(e=Ee.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(Ee.g&&Ee.g.Ka&&Ee.g.Ka()&&Ee.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QB=10;function aA(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function lA(e){return e.h?1:e.g?e.g.size:0}function Fy(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function d_(e,t){e.g?e.g.add(t):e.h=t}function uA(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}oA.prototype.cancel=function(){if(this.i=cA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function cA(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Zw(e.i)}function f_(){}f_.prototype.stringify=function(e){return Ee.JSON.stringify(e,void 0)};f_.prototype.parse=function(e){return Ee.JSON.parse(e,void 0)};function XB(){this.g=new f_}function JB(e,t,n){const r=n||"";try{tA(e,function(i,s){let o=i;uh(i)&&(o=o_(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function ZB(e,t){const n=new Dm;if(Ee.Image){const r=new Image;r.onload=kd(Td,n,r,"TestLoadImage: loaded",!0,t),r.onerror=kd(Td,n,r,"TestLoadImage: error",!1,t),r.onabort=kd(Td,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=kd(Td,n,r,"TestLoadImage: timeout",!1,t),Ee.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Td(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function mh(e){this.l=e.fc||null,this.j=e.ob||!1}en(mh,u_);mh.prototype.g=function(){return new Rm(this.l,this.j)};mh.prototype.i=function(e){return function(){return e}}({});function Rm(e,t){Jt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=p_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}en(Rm,Jt);var p_=0;re=Rm.prototype;re.open=function(e,t){if(this.readyState!=p_)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Nc(this)};re.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Ee).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};re.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gh(this)),this.readyState=p_};re.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Nc(this)),this.g&&(this.readyState=3,Nc(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Ee.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hA(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function hA(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}re.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?gh(this):Nc(this),this.readyState==3&&hA(this)}};re.Za=function(e){this.g&&(this.response=this.responseText=e,gh(this))};re.Ya=function(e){this.g&&(this.response=e,gh(this))};re.ka=function(){this.g&&gh(this)};function gh(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Nc(e)}re.setRequestHeader=function(e,t){this.v.append(e,t)};re.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};re.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Nc(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Rm.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var eV=Ee.JSON.parse;function xt(e){Jt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=dA,this.L=this.M=!1}en(xt,Jt);var dA="",tV=/^https?$/i,nV=["POST","PUT"];re=xt.prototype;re.Oa=function(e){this.M=e};re.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Py.g(),this.C=this.u?sx(this.u):sx(Py),this.g.onreadystatechange=yn(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){lx(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Ee.FormData&&e instanceof Ee.FormData,!(0<=Db(nV,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{mA(this),0<this.B&&((this.L=rV(this.g))?(this.g.timeout=this.B,this.g.ontimeout=yn(this.ua,this)):this.A=l_(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){lx(this,s)}};function rV(e){return _l&&_B()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}re.ua=function(){typeof Jw!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,on(this,"timeout"),this.abort(8))};function lx(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,fA(e),Pm(e)}function fA(e){e.F||(e.F=!0,on(e,"complete"),on(e,"error"))}re.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,on(this,"complete"),on(this,"abort"),Pm(this))};re.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pm(this,!0)),xt.$.N.call(this)};re.La=function(){this.s||(this.G||this.v||this.l?pA(this):this.kb())};re.kb=function(){pA(this)};function pA(e){if(e.h&&typeof Jw!="undefined"&&(!e.C[1]||Pi(e)!=4||e.da()!=2)){if(e.v&&Pi(e)==4)l_(e.La,0,e);else if(on(e,"readystatechange"),Pi(e)==4){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.I).match(nA)[1]||null;if(!i&&Ee.self&&Ee.self.location){var s=Ee.self.location.protocol;i=s.substr(0,s.length-1)}r=!tV.test(i?i.toLowerCase():"")}n=r}if(n)on(e,"complete"),on(e,"success");else{e.m=6;try{var o=2<Pi(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",fA(e)}}finally{Pm(e)}}}}function Pm(e,t){if(e.g){mA(e);const n=e.g,r=e.C[0]?rp:null;e.g=null,e.C=null,t||on(e,"ready");try{n.onreadystatechange=r}catch{}}}function mA(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Ee.clearTimeout(e.A),e.A=null)}function Pi(e){return e.g?e.g.readyState:0}re.da=function(){try{return 2<Pi(this)?this.g.status:-1}catch{return-1}};re.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};re.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),eV(t)}};function ux(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case dA:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}re.Ia=function(){return this.m};re.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function gA(e){let t="";return t_(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function m_(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=gA(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):mt(e,t,n))}function mu(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function vA(e){this.Ga=0,this.i=[],this.j=new Dm,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=mu("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=mu("baseRetryDelayMs",5e3,e),this.hb=mu("retryDelaySeedMs",1e4,e),this.eb=mu("forwardChannelMaxRetries",2,e),this.xa=mu("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new oA(e&&e.concurrentRequestLimit),this.Ja=new XB,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}re=vA.prototype;re.qa=8;re.H=1;function g_(e){if(yA(e),e.H==3){var t=e.W++,n=Qi(e.G);mt(n,"SID",e.J),mt(n,"RID",t),mt(n,"TYPE","terminate"),vh(e,n),t=new fh(e,e.j,t,void 0),t.L=2,t.v=Om(Qi(n)),n=!1,Ee.navigator&&Ee.navigator.sendBeacon&&(n=Ee.navigator.sendBeacon(t.v.toString(),"")),!n&&Ee.Image&&(new Image().src=t.v,n=!0),n||(t.g=TA(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ph(t)}kA(e)}function Mm(e){e.g&&(y_(e),e.g.cancel(),e.g=null)}function yA(e){Mm(e),e.u&&(Ee.clearTimeout(e.u),e.u=null),up(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&Ee.clearTimeout(e.m),e.m=null)}function Lm(e){aA(e.h)||e.m||(e.m=!0,Bb(e.Na,e),e.C=0)}function iV(e,t){return lA(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.F.concat(e.i),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=hh(yn(e.Na,e,t),CA(e,e.C)),e.C++,!0)}re.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new fh(this,this.j,e,void 0);let s=this.s;if(this.U&&(s?(s=Ob(s),Rb(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=wA(this,i,t),n=Qi(this.G),mt(n,"RID",e),mt(n,"CVER",22),this.F&&mt(n,"X-HTTP-Session-Id",this.F),vh(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(gA(s)))+"&"+t:this.o&&m_(n,this.o,s)),d_(this.h,i),this.bb&&mt(n,"TYPE","init"),this.P?(mt(n,"$req",t),mt(n,"SID","null"),i.ba=!0,Ly(i,n,null)):Ly(i,n,t),this.H=2}}else this.H==3&&(e?cx(this,e):this.i.length==0||aA(this.h)||cx(this))};function cx(e,t){var n;t?n=t.m:n=e.W++;const r=Qi(e.G);mt(r,"SID",e.J),mt(r,"RID",n),mt(r,"AID",e.V),vh(e,r),e.o&&e.s&&m_(r,e.o,e.s),n=new fh(e,e.j,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=wA(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),d_(e.h,n),Ly(n,r,t)}function vh(e,t){e.ma&&t_(e.ma,function(n,r){mt(t,r,n)}),e.l&&tA({},function(n,r){mt(t,r,n)})}function wA(e,t,n){n=Math.min(e.i.length,n);var r=e.l?yn(e.l.Va,e.l,e):null;e:{var i=e.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let c=i[u].h;const d=i[u].g;if(c-=s,0>c)s=Math.max(0,i[u].h-100),a=!1;else try{JB(d,o,"req"+c+"_")}catch{r&&r(d)}}if(a){r=o.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,r}function _A(e){e.g||e.u||(e.ba=1,Bb(e.Ma,e),e.A=0)}function v_(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=hh(yn(e.Ma,e),CA(e,e.A)),e.A++,!0)}re.Ma=function(){if(this.u=null,SA(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=hh(yn(this.jb,this),e)}};re.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,On(10),Mm(this),SA(this))};function y_(e){e.B!=null&&(Ee.clearTimeout(e.B),e.B=null)}function SA(e){e.g=new fh(e,e.j,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Qi(e.wa);mt(t,"RID","rpc"),mt(t,"SID",e.J),mt(t,"CI",e.M?"0":"1"),mt(t,"AID",e.V),mt(t,"TYPE","xmlhttp"),vh(e,t),e.o&&e.s&&m_(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Om(Qi(t)),n.s=null,n.S=!0,Xb(n,e)}re.ib=function(){this.v!=null&&(this.v=null,Mm(this),v_(this),On(19))};function up(e){e.v!=null&&(Ee.clearTimeout(e.v),e.v=null)}function EA(e,t){var n=null;if(e.g==t){up(e),y_(e),e.g=null;var r=2}else if(Fy(e.h,t))n=t.F,uA(e.h,t),r=1;else return;if(e.H!=0){if(e.ta=t.aa,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Im(),on(r,new Gb(r,n)),Lm(e)}else _A(e);else if(i=t.o,i==3||i==0&&0<e.ta||!(r==1&&iV(e,t)||r==2&&v_(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Ao(e,5);break;case 4:Ao(e,10);break;case 3:Ao(e,6);break;default:Ao(e,2)}}}function CA(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Ao(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=yn(e.pb,e);n||(n=new Lo("//www.google.com/images/cleardot.gif"),Ee.location&&Ee.location.protocol=="http"||ap(n,"https"),Om(n)),ZB(n.toString(),r)}else On(2);e.H=0,e.l&&e.l.za(t),kA(e),yA(e)}re.pb=function(e){e?(this.j.info("Successfully pinged google.com"),On(2)):(this.j.info("Failed to ping google.com"),On(1))};function kA(e){if(e.H=0,e.pa=[],e.l){const t=cA(e.h);(t.length!=0||e.i.length!=0)&&(Zk(e.pa,t),Zk(e.pa,e.i),e.h.i.length=0,Zw(e.i),e.i.length=0),e.l.ya()}}function xA(e,t,n){var r=n instanceof Lo?Qi(n):new Lo(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),lp(r,r.m);else{var i=Ee.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Lo(null,void 0);r&&ap(s,r),t&&(s.g=t),i&&lp(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&mt(r,n,t),mt(r,"VER",e.qa),vh(e,r),r}function TA(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new xt(new mh({ob:!0})):new xt(e.va),t.Oa(e.I),t}function DA(){}re=DA.prototype;re.Ba=function(){};re.Aa=function(){};re.za=function(){};re.ya=function(){};re.Va=function(){};function cp(){if(_l&&!(10<=Number(SB)))throw Error("Environmental error: no available transport.")}cp.prototype.g=function(e,t){return new er(e,t)};function er(e,t){Jt.call(this),this.g=new vA(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ip(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ip(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new zl(this)}en(er,Jt);er.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;On(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=xA(e,null,e.Y),Lm(e)};er.prototype.close=function(){g_(this.g)};er.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=o_(e),e=n);t.i.push(new KB(t.fb++,e)),t.H==3&&Lm(t)};er.prototype.N=function(){this.g.l=null,delete this.j,g_(this.g),delete this.g,er.$.N.call(this)};function IA(e){c_.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}en(IA,c_);function bA(){h_.call(this),this.status=1}en(bA,h_);function zl(e){this.g=e}en(zl,DA);zl.prototype.Ba=function(){on(this.g,"a")};zl.prototype.Aa=function(e){on(this.g,new IA(e))};zl.prototype.za=function(e){on(this.g,new bA)};zl.prototype.ya=function(){on(this.g,"b")};function sV(){this.blockSize=-1}function Ur(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}en(Ur,sV);Ur.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function q0(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Ur.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)q0(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){q0(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){q0(this,r),i=0;break}}this.h=i,this.i+=t};Ur.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function qe(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var oV={};function w_(e){return-128<=e&&128>e?Ib(oV,e,function(t){return new qe([t|0],0>t?-1:0)}):new qe([e|0],0>e?-1:0)}function Xr(e){if(isNaN(e)||!isFinite(e))return tl;if(0>e)return rn(Xr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Uy;return new qe(t,0)}function AA(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return rn(AA(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Xr(Math.pow(t,8)),r=tl,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Xr(Math.pow(t,s)),r=r.R(s).add(Xr(o))):(r=r.R(n),r=r.add(Xr(o)))}return r}var Uy=4294967296,tl=w_(0),By=w_(1),hx=w_(16777216);re=qe.prototype;re.ea=function(){if(ur(this))return-rn(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Uy+r)*t,t*=Uy}return e};re.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Mi(this))return"0";if(ur(this))return"-"+rn(this).toString(e);for(var t=Xr(Math.pow(e,6)),n=this,r="";;){var i=dp(n,t).g;n=hp(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Mi(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};re.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Mi(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ur(e){return e.h==-1}re.X=function(e){return e=hp(this,e),ur(e)?-1:Mi(e)?0:1};function rn(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new qe(n,~e.h).add(By)}re.abs=function(){return ur(this)?rn(this):this};re.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new qe(n,n[n.length-1]&-2147483648?-1:0)};function hp(e,t){return e.add(rn(t))}re.R=function(e){if(Mi(this)||Mi(e))return tl;if(ur(this))return ur(e)?rn(this).R(rn(e)):rn(rn(this).R(e));if(ur(e))return rn(this.R(rn(e)));if(0>this.X(hx)&&0>e.X(hx))return Xr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,Dd(n,2*r+2*i),n[2*r+2*i+1]+=s*u,Dd(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Dd(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Dd(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new qe(n,0)};function Dd(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function gu(e,t){this.g=e,this.h=t}function dp(e,t){if(Mi(t))throw Error("division by zero");if(Mi(e))return new gu(tl,tl);if(ur(e))return t=dp(rn(e),t),new gu(rn(t.g),rn(t.h));if(ur(t))return t=dp(e,rn(t)),new gu(rn(t.g),t.h);if(30<e.g.length){if(ur(e)||ur(t))throw Error("slowDivide_ only works with positive integers.");for(var n=By,r=t;0>=r.X(e);)n=dx(n),r=dx(r);var i=Ea(n,1),s=Ea(r,1);for(r=Ea(r,2),n=Ea(n,2);!Mi(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Ea(r,1),n=Ea(n,1)}return t=hp(e,i.R(t)),new gu(i,t)}for(i=tl;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Xr(n),o=s.R(t);ur(o)||0<o.X(e);)n-=r,s=Xr(n),o=s.R(t);Mi(s)&&(s=By),i=i.add(s),e=hp(e,o)}return new gu(i,e)}re.gb=function(e){return dp(this,e).h};re.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new qe(n,this.h&e.h)};re.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new qe(n,this.h|e.h)};re.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new qe(n,this.h^e.h)};function dx(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new qe(n,e.h)}function Ea(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new qe(i,e.h)}cp.prototype.createWebChannel=cp.prototype.g;er.prototype.send=er.prototype.u;er.prototype.open=er.prototype.m;er.prototype.close=er.prototype.close;bm.NO_ERROR=0;bm.TIMEOUT=8;bm.HTTP_ERROR=6;qb.COMPLETE="complete";Kb.EventType=dh;dh.OPEN="a";dh.CLOSE="b";dh.ERROR="c";dh.MESSAGE="d";Jt.prototype.listen=Jt.prototype.O;xt.prototype.listenOnce=xt.prototype.P;xt.prototype.getLastError=xt.prototype.Sa;xt.prototype.getLastErrorCode=xt.prototype.Ia;xt.prototype.getStatus=xt.prototype.da;xt.prototype.getResponseJson=xt.prototype.Wa;xt.prototype.getResponseText=xt.prototype.ja;xt.prototype.send=xt.prototype.ha;xt.prototype.setWithCredentials=xt.prototype.Oa;Ur.prototype.digest=Ur.prototype.l;Ur.prototype.reset=Ur.prototype.reset;Ur.prototype.update=Ur.prototype.j;qe.prototype.add=qe.prototype.add;qe.prototype.multiply=qe.prototype.R;qe.prototype.modulo=qe.prototype.gb;qe.prototype.compare=qe.prototype.X;qe.prototype.toNumber=qe.prototype.ea;qe.prototype.toString=qe.prototype.toString;qe.prototype.getBits=qe.prototype.D;qe.fromNumber=Xr;qe.fromString=AA;var aV=function(){return new cp},lV=function(){return Im()},K0=bm,uV=qb,cV=ua,fx={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},hV=mh,Id=Kb,dV=xt,fV=Ur,nl=qe;const px="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let jl="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Fw("@firebase/firestore");function mx(){return Xo.logLevel}function ce(e,...t){if(Xo.logLevel<=je.DEBUG){const n=t.map(__);Xo.debug(`Firestore (${jl}): ${e}`,...n)}}function Xi(e,...t){if(Xo.logLevel<=je.ERROR){const n=t.map(__);Xo.error(`Firestore (${jl}): ${e}`,...n)}}function Sl(e,...t){if(Xo.logLevel<=je.WARN){const n=t.map(__);Xo.warn(`Firestore (${jl}): ${e}`,...n)}}function __(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Se(e="Unexpected state"){const t=`FIRESTORE (${jl}) INTERNAL ASSERTION FAILED: `+e;throw Xi(t),new Error(t)}function at(e,t){e||Se()}function xe(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class NA{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(pn.UNAUTHENTICATED))}shutdown(){}}class mV{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gV{constructor(t){this.t=t,this.currentUser=pn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Vi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vi,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vi)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(at(typeof r.accessToken=="string"),new NA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return at(t===null||typeof t=="string"),new pn(t)}}class vV{constructor(t,n,r){this.h=t,this.l=n,this.m=r,this.type="FirstParty",this.user=pn.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class yV{constructor(t,n,r){this.h=t,this.l=n,this.m=r}getToken(){return Promise.resolve(new vV(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(pn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wV{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _V{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const r=s=>{s.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,ce("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(at(typeof n.token=="string"),this.T=n.token,new wV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SV(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=SV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function He(e,t){return e<t?-1:e>t?1:0}function El(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Oc{constructor(t,n,r){n===void 0?n=0:n>t.length&&Se(),r===void 0?r=t.length-n:r>t.length-n&&Se(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Oc.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Oc?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class gt extends Oc{construct(t,n,r){return new gt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new fe(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new gt(n)}static emptyPath(){return new gt([])}}const EV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vn extends Oc{construct(t,n,r){return new vn(t,n,r)}static isValidIdentifier(t){return EV.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vn.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vn(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new fe(H.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new fe(H.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new fe(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new fe(H.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new vn(n)}static emptyPath(){return new vn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t){this.path=t}static fromPath(t){return new pe(gt.fromString(t))}static fromName(t){return new pe(gt.fromString(t).popFirst(5))}static empty(){return new pe(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&gt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return gt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new pe(new gt(t.slice()))}}function CV(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ce.fromTimestamp(r===1e9?new Yt(n+1,0):new Yt(n,r));return new Xs(i,pe.empty(),t)}function kV(e){return new Xs(e.readTime,e.key,-1)}class Xs{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Xs(Ce.min(),pe.empty(),-1)}static max(){return new Xs(Ce.max(),pe.empty(),-1)}}function xV(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=pe.comparator(e.documentKey,t.documentKey),n!==0?n:He(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yh(e){if(e.code!==H.FAILED_PRECONDITION||e.message!==TV)throw e;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Q((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.reject(n)}static resolve(t){return new Q((n,r)=>{n(t)})}static reject(t){return new Q((n,r)=>{r(t)})}static waitFor(t){return new Q((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=Q.resolve(!1);for(const r of t)n=n.next(i=>i?Q.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new Q((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(t[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(t,n){return new Q((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function wh(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class S_{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}S_.ct=-1;function $m(e){return e==null}function fp(e){return e===0&&1/e==-1/0}function IV(e){return typeof e=="number"&&Number.isInteger(e)&&!fp(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Yl(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function RA(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,n){this.comparator=t,this.root=n||nn.EMPTY}insert(t,n){return new Et(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,nn.BLACK,null,null))}remove(t){return new Et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,nn.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new bd(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new bd(this.root,t,this.comparator,!1)}getReverseIterator(){return new bd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new bd(this.root,t,this.comparator,!0)}}class bd{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class nn{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r!=null?r:nn.RED,this.left=i!=null?i:nn.EMPTY,this.right=s!=null?s:nn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new nn(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return nn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,nn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,nn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Se();const t=this.left.check();if(t!==this.right.check())throw Se();return t+(this.isRed()?0:1)}}nn.EMPTY=null,nn.RED=!0,nn.BLACK=!1;nn.EMPTY=new class{constructor(){this.size=0}get key(){throw Se()}get value(){throw Se()}get color(){throw Se()}get left(){throw Se()}get right(){throw Se()}copy(e,t,n,r,i){return this}insert(e,t,n){return new nn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t){this.comparator=t,this.data=new Et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new vx(this.data.getIterator())}getIteratorFrom(t){return new vx(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof _n)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new _n(this.comparator);return n.data=t,n}}class vx{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t){this.fields=t,t.sort(vn.comparator)}static empty(){return new Rr([])}unionWith(t){let n=new _n(vn.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Rr(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return El(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class PA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException!="undefined"&&i instanceof DOMException?new PA("Invalid base64 string: "+i):i}}(t);return new kn(n)}static fromUint8Array(t){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(t);return new kn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return He(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}kn.EMPTY_BYTE_STRING=new kn("");const bV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Js(e){if(at(!!e),typeof e=="string"){let t=0;const n=bV.exec(e);if(at(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Pt(e.seconds),nanos:Pt(e.nanos)}}function Pt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Jo(e){return typeof e=="string"?kn.fromBase64String(e):kn.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function C_(e){const t=e.mapValue.fields.__previous_value__;return E_(t)?C_(t):t}function Rc(e){const t=Js(e.mapValue.fields.__local_write_time__.timestampValue);return new Yt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(t,n,r,i,s,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Pc{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Pc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Pc&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zo(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?E_(e)?4:NV(e)?9007199254740991:10:Se()}function ai(e,t){if(e===t)return!0;const n=Zo(e);if(n!==Zo(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Rc(e).isEqual(Rc(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Js(r.timestampValue),o=Js(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return Jo(r.bytesValue).isEqual(Jo(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return Pt(r.geoPointValue.latitude)===Pt(i.geoPointValue.latitude)&&Pt(r.geoPointValue.longitude)===Pt(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Pt(r.integerValue)===Pt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Pt(r.doubleValue),o=Pt(i.doubleValue);return s===o?fp(s)===fp(o):isNaN(s)&&isNaN(o)}return!1}(e,t);case 9:return El(e.arrayValue.values||[],t.arrayValue.values||[],ai);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(gx(s)!==gx(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!ai(s[a],o[a])))return!1;return!0}(e,t);default:return Se()}}function Mc(e,t){return(e.values||[]).find(n=>ai(n,t))!==void 0}function Cl(e,t){if(e===t)return 0;const n=Zo(e),r=Zo(t);if(n!==r)return He(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return He(e.booleanValue,t.booleanValue);case 2:return function(i,s){const o=Pt(i.integerValue||i.doubleValue),a=Pt(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return yx(e.timestampValue,t.timestampValue);case 4:return yx(Rc(e),Rc(t));case 5:return He(e.stringValue,t.stringValue);case 6:return function(i,s){const o=Jo(i),a=Jo(s);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=He(o[u],a[u]);if(c!==0)return c}return He(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,s){const o=He(Pt(i.latitude),Pt(s.latitude));return o!==0?o:He(Pt(i.longitude),Pt(s.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=Cl(o[u],a[u]);if(c)return c}return He(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,s){if(i===Ad.mapValue&&s===Ad.mapValue)return 0;if(i===Ad.mapValue)return 1;if(s===Ad.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let d=0;d<a.length&&d<c.length;++d){const p=He(a[d],c[d]);if(p!==0)return p;const m=Cl(o[a[d]],u[c[d]]);if(m!==0)return m}return He(a.length,c.length)}(e.mapValue,t.mapValue);default:throw Se()}}function yx(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return He(e,t);const n=Js(e),r=Js(t),i=He(n.seconds,r.seconds);return i!==0?i:He(n.nanos,r.nanos)}function kl(e){return Vy(e)}function Vy(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(r){const i=Js(r);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Jo(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,pe.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Vy(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Vy(r.fields[a])}`;return s+"}"}(e.mapValue):Se();var t,n}function zy(e){return!!e&&"integerValue"in e}function k_(e){return!!e&&"arrayValue"in e}function wx(e){return!!e&&"nullValue"in e}function _x(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function tf(e){return!!e&&"mapValue"in e}function Wu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Yl(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Wu(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Wu(e.arrayValue.values[n]);return t}return Object.assign({},e)}function NV(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t){this.value=t}static empty(){return new cr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!tf(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Wu(n)}setAll(t){let n=vn.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Wu(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());tf(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ai(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];tf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Yl(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new cr(Wu(this.value))}}function MA(e){const t=[];return Yl(e.fields,(n,r)=>{const i=new vn([n]);if(tf(r)){const s=MA(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Rr(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new gn(t,0,Ce.min(),Ce.min(),Ce.min(),cr.empty(),0)}static newFoundDocument(t,n,r,i){return new gn(t,1,n,Ce.min(),r,i,0)}static newNoDocument(t,n){return new gn(t,2,n,Ce.min(),Ce.min(),cr.empty(),0)}static newUnknownDocument(t,n){return new gn(t,3,n,Ce.min(),Ce.min(),cr.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=cr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=cr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pp{constructor(t,n){this.position=t,this.inclusive=n}}function Sx(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=pe.comparator(pe.fromName(o.referenceValue),n.key):r=Cl(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ex(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ai(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Hu{constructor(t,n="asc"){this.field=t,this.dir=n}}function OV(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class LA{}class Vt extends LA{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new PV(t,n,r):n==="array-contains"?new $V(t,r):n==="in"?new FV(t,r):n==="not-in"?new UV(t,r):n==="array-contains-any"?new BV(t,r):new Vt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new MV(t,r):new LV(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Cl(n,this.value)):n!==null&&Zo(this.value)===Zo(n)&&this.matchesComparison(Cl(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class li extends LA{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new li(t,n)}matches(t){return $A(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function $A(e){return e.op==="and"}function FA(e){return RV(e)&&$A(e)}function RV(e){for(const t of e.filters)if(t instanceof li)return!1;return!0}function jy(e){if(e instanceof Vt)return e.field.canonicalString()+e.op.toString()+kl(e.value);if(FA(e))return e.filters.map(t=>jy(t)).join(",");{const t=e.filters.map(n=>jy(n)).join(",");return`${e.op}(${t})`}}function UA(e,t){return e instanceof Vt?function(n,r){return r instanceof Vt&&n.op===r.op&&n.field.isEqual(r.field)&&ai(n.value,r.value)}(e,t):e instanceof li?function(n,r){return r instanceof li&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&UA(s,r.filters[o]),!0):!1}(e,t):void Se()}function BA(e){return e instanceof Vt?function(t){return`${t.field.canonicalString()} ${t.op} ${kl(t.value)}`}(e):e instanceof li?function(t){return t.op.toString()+" {"+t.getFilters().map(BA).join(" ,")+"}"}(e):"Filter"}class PV extends Vt{constructor(t,n,r){super(t,n,r),this.key=pe.fromName(r.referenceValue)}matches(t){const n=pe.comparator(t.key,this.key);return this.matchesComparison(n)}}class MV extends Vt{constructor(t,n){super(t,"in",n),this.keys=VA("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class LV extends Vt{constructor(t,n){super(t,"not-in",n),this.keys=VA("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function VA(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>pe.fromName(r.referenceValue))}class $V extends Vt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return k_(n)&&Mc(n.arrayValue,this.value)}}class FV extends Vt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Mc(this.value.arrayValue,n)}}class UV extends Vt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Mc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Mc(this.value.arrayValue,n)}}class BV extends Vt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!k_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mc(this.value.arrayValue,r))}}/**
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
 */class VV{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Cx(e,t=null,n=[],r=[],i=null,s=null,o=null){return new VV(e,t,n,r,i,s,o)}function x_(e){const t=xe(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>jy(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),$m(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>kl(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>kl(r)).join(",")),t.ft=n}return t.ft}function T_(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!OV(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!UA(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ex(e.startAt,t.startAt)&&Ex(e.endAt,t.endAt)}function Yy(e){return pe.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function zV(e,t,n,r,i,s,o,a){return new Fm(e,t,n,r,i,s,o,a)}function D_(e){return new Fm(e)}function kx(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function jV(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function YV(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function WV(e){return e.collectionGroup!==null}function rl(e){const t=xe(e);if(t.dt===null){t.dt=[];const n=YV(t),r=jV(t);if(n!==null&&r===null)n.isKeyField()||t.dt.push(new Hu(n)),t.dt.push(new Hu(vn.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Hu(vn.keyField(),s))}}}return t.dt}function Ji(e){const t=xe(e);if(!t._t)if(t.limitType==="F")t._t=Cx(t.path,t.collectionGroup,rl(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of rl(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new Hu(s.field,o))}const r=t.endAt?new pp(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new pp(t.startAt.position,t.startAt.inclusive):null;t._t=Cx(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t._t}function Wy(e,t,n){return new Fm(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Um(e,t){return T_(Ji(e),Ji(t))&&e.limitType===t.limitType}function zA(e){return`${x_(Ji(e))}|lt:${e.limitType}`}function Hy(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(r=>BA(r)).join(", ")}]`),$m(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>kl(r)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>kl(r)).join(",")),`Target(${n})`}(Ji(e))}; limitType=${e.limitType})`}function Bm(e,t){return t.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):pe.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,r){for(const i of rl(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Sx(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,rl(n),r)||n.endAt&&!function(i,s,o){const a=Sx(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,rl(n),r))}(e,t)}function HV(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function jA(e){return(t,n)=>{let r=!1;for(const i of rl(e)){const s=GV(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function GV(e,t,n){const r=e.field.isKeyField()?pe.comparator(t.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Cl(a,u):Se()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Se()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Yl(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return RA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qV=new Et(pe.comparator);function Zi(){return qV}const YA=new Et(pe.comparator);function Au(...e){let t=YA;for(const n of e)t=t.insert(n.key,n);return t}function WA(e){let t=YA;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function No(){return Gu()}function HA(){return Gu()}function Gu(){return new Wl(e=>e.toString(),(e,t)=>e.isEqual(t))}const KV=new Et(pe.comparator),QV=new _n(pe.comparator);function Pe(...e){let t=QV;for(const n of e)t=t.add(n);return t}const XV=new _n(He);function JV(){return XV}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fp(t)?"-0":t}}function qA(e){return{integerValue:""+e}}function ZV(e,t){return IV(t)?qA(t):GA(e,t)}/**
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
 */class Vm{constructor(){this._=void 0}}function ez(e,t,n){return e instanceof mp?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&E_(i)&&(i=C_(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,t):e instanceof Lc?QA(e,t):e instanceof $c?XA(e,t):function(r,i){const s=KA(r,i),o=xx(s)+xx(r.wt);return zy(s)&&zy(r.wt)?qA(o):GA(r.serializer,o)}(e,t)}function tz(e,t,n){return e instanceof Lc?QA(e,t):e instanceof $c?XA(e,t):n}function KA(e,t){return e instanceof gp?zy(n=t)||function(r){return!!r&&"doubleValue"in r}(n)?t:{integerValue:0}:null;var n}class mp extends Vm{}class Lc extends Vm{constructor(t){super(),this.elements=t}}function QA(e,t){const n=JA(t);for(const r of e.elements)n.some(i=>ai(i,r))||n.push(r);return{arrayValue:{values:n}}}class $c extends Vm{constructor(t){super(),this.elements=t}}function XA(e,t){let n=JA(t);for(const r of e.elements)n=n.filter(i=>!ai(i,r));return{arrayValue:{values:n}}}class gp extends Vm{constructor(t,n){super(),this.serializer=t,this.wt=n}}function xx(e){return Pt(e.integerValue||e.doubleValue)}function JA(e){return k_(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function nz(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof Lc&&r instanceof Lc||n instanceof $c&&r instanceof $c?El(n.elements,r.elements,ai):n instanceof gp&&r instanceof gp?ai(n.wt,r.wt):n instanceof mp&&r instanceof mp}(e.transform,t.transform)}class rz{constructor(t,n){this.version=t,this.transformResults=n}}class si{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new si}static exists(t){return new si(void 0,t)}static updateTime(t){return new si(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function nf(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class zm{}function ZA(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new tN(e.key,si.none()):new _h(e.key,e.data,si.none());{const n=e.data,r=cr.empty();let i=new _n(vn.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ca(e.key,r,new Rr(i.toArray()),si.none())}}function iz(e,t,n){e instanceof _h?function(r,i,s){const o=r.value.clone(),a=Dx(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(e,t,n):e instanceof ca?function(r,i,s){if(!nf(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Dx(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(eN(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(e,t,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,t,n)}function qu(e,t,n,r){return e instanceof _h?function(i,s,o,a){if(!nf(i.precondition,s))return o;const u=i.value.clone(),c=Ix(i.fieldTransforms,a,s);return u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof ca?function(i,s,o,a){if(!nf(i.precondition,s))return o;const u=Ix(i.fieldTransforms,a,s),c=s.data;return c.setAll(eN(i)),c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(e,t,n,r):function(i,s,o){return nf(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(e,t,n)}function sz(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=KA(r.transform,i||null);s!=null&&(n===null&&(n=cr.empty()),n.set(r.field,s))}return n||null}function Tx(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&El(n,r,(i,s)=>nz(i,s))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class _h extends zm{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ca extends zm{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function eN(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Dx(e,t,n){const r=new Map;at(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,tz(o,a,n[i]))}return r}function Ix(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ez(s,o,t))}return r}class tN extends zm{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oz extends zm{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class az{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&iz(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=qu(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=qu(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=HA();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=ZA(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Ce.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Pe())}isEqual(t){return this.batchId===t.batchId&&El(this.mutations,t.mutations,(n,r)=>Tx(n,r))&&El(this.baseMutations,t.baseMutations,(n,r)=>Tx(n,r))}}class I_{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){at(t.mutations.length===r.length);let i=KV;const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new I_(t,n,r,i)}}/**
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
 */class lz{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class uz{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt,Fe;function cz(e){switch(e){default:return Se();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function nN(e){if(e===void 0)return Xi("GRPC error has no .code"),H.UNKNOWN;switch(e){case Rt.OK:return H.OK;case Rt.CANCELLED:return H.CANCELLED;case Rt.UNKNOWN:return H.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return H.INTERNAL;case Rt.UNAVAILABLE:return H.UNAVAILABLE;case Rt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Rt.NOT_FOUND:return H.NOT_FOUND;case Rt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Rt.ABORTED:return H.ABORTED;case Rt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Rt.DATA_LOSS:return H.DATA_LOSS;default:return Se()}}(Fe=Rt||(Rt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class b_{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Nd}static getOrCreateInstance(){return Nd===null&&(Nd=new b_),Nd}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Nd=null;/**
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
 */function hz(){return new TextEncoder}/**
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
 */const dz=new nl([4294967295,4294967295],0);function bx(e){const t=hz().encode(e),n=new fV;return n.update(t),new Uint8Array(n.digest())}function Ax(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new nl([n,r],0),new nl([i,s],0)]}class A_{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Nu(`Invalid padding: ${n}`);if(r<0)throw new Nu(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Nu(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Nu(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*t.length-n,this.It=nl.fromNumber(this.yt)}Tt(t,n,r){let i=t.add(n.multiply(nl.fromNumber(r)));return i.compare(dz)===1&&(i=new nl([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}At(t){if(this.yt===0)return!1;const n=bx(t),[r,i]=Ax(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new A_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.yt===0)return;const n=bx(t),[r,i]=Ax(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Nu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Sh.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new jm(Ce.min(),i,new Et(He),Zi(),Pe())}}class Sh{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Sh(r,n,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,n,r,i){this.vt=t,this.removedTargetIds=n,this.key=r,this.Pt=i}}class rN{constructor(t,n){this.targetId=t,this.bt=n}}class iN{constructor(t,n,r=kn.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Nx{constructor(){this.Vt=0,this.St=Rx(),this.Dt=kn.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(t){t.approximateByteSize()>0&&(this.xt=!0,this.Dt=t)}Ot(){let t=Pe(),n=Pe(),r=Pe();return this.St.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Se()}}),new Sh(this.Dt,this.Ct,t,n,r)}$t(){this.xt=!1,this.St=Rx()}Ft(t,n){this.xt=!0,this.St=this.St.insert(t,n)}Bt(t){this.xt=!0,this.St=this.St.remove(t)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class fz{constructor(t){this.Kt=t,this.Gt=new Map,this.Qt=Zi(),this.jt=Ox(),this.zt=new Et(He)}Wt(t){for(const n of t.vt)t.Pt&&t.Pt.isFoundDocument()?this.Ht(n,t.Pt):this.Jt(n,t.key,t.Pt);for(const n of t.removedTargetIds)this.Jt(n,t.key,t.Pt)}Yt(t){this.forEachTarget(t,n=>{const r=this.Xt(n);switch(t.state){case 0:this.Zt(n)&&r.Mt(t.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(t.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(t.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(t.resumeToken));break;default:Se()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(t){var n;const r=t.targetId,i=t.bt.count,s=this.ne(r);if(s){const o=s.target;if(Yy(o))if(i===0){const a=new pe(o.path);this.Jt(r,a,gn.newNoDocument(a,Ce.min()))}else at(i===1);else{const a=this.se(r);if(a!==i){const u=this.ie(t,a);if(u!==0){this.te(r);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,c)}(n=b_.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,d,p){var m,y,_,S,x,E;const v={localCacheCount:d,existenceFilterCount:p.count},k=p.unchangedNames;return k&&(v.bloomFilter={applied:c===0,hashCount:(m=k==null?void 0:k.hashCount)!==null&&m!==void 0?m:0,bitmapLength:(S=(_=(y=k==null?void 0:k.bits)===null||y===void 0?void 0:y.bitmap)===null||_===void 0?void 0:_.length)!==null&&S!==void 0?S:0,padding:(E=(x=k==null?void 0:k.bits)===null||x===void 0?void 0:x.padding)!==null&&E!==void 0?E:0}),v}(u,a,t.bt))}}}}ie(t,n){const{unchangedNames:r,count:i}=t.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let u,c;try{u=Jo(s).toUint8Array()}catch(d){if(d instanceof PA)return Sl("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw d}try{c=new A_(u,o,a)}catch(d){return Sl(d instanceof Nu?"BloomFilter error: ":"Applying bloom filter failed: ",d),1}return c.yt===0?1:i!==n-this.re(t.targetId,c)?2:0}re(t,n){const r=this.Kt.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(t,s,null),i++)}),i}ue(t){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&Yy(a.target)){const u=new pe(a.target.path);this.Qt.get(u)!==null||this.ce(o,u)||this.Jt(o,u,gn.newNoDocument(u,t))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=Pe();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.ne(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(t));const i=new jm(t,n,this.zt,this.Qt,r);return this.Qt=Zi(),this.jt=Ox(),this.zt=new Et(He),i}Ht(t,n){if(!this.Zt(t))return;const r=this.ce(t,n.key)?2:0;this.Xt(t).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(t))}Jt(t,n,r){if(!this.Zt(t))return;const i=this.Xt(t);this.ce(t,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(t)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(t){this.Gt.delete(t)}se(t){const n=this.Xt(t).Ot();return this.Kt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Lt(t){this.Xt(t).Lt()}Xt(t){let n=this.Gt.get(t);return n||(n=new Nx,this.Gt.set(t,n)),n}ae(t){let n=this.jt.get(t);return n||(n=new _n(He),this.jt=this.jt.insert(t,n)),n}Zt(t){const n=this.ne(t)!==null;return n||ce("WatchChangeAggregator","Detected inactive target",t),n}ne(t){const n=this.Gt.get(t);return n&&n.Nt?null:this.Kt.he(t)}te(t){this.Gt.set(t,new Nx),this.Kt.getRemoteKeysForTarget(t).forEach(n=>{this.Jt(t,n,null)})}ce(t,n){return this.Kt.getRemoteKeysForTarget(t).has(n)}}function Ox(){return new Et(pe.comparator)}function Rx(){return new Et(pe.comparator)}const pz=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),mz=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),gz=(()=>({and:"AND",or:"OR"}))();class vz{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Gy(e,t){return e.useProto3Json||$m(t)?t:{value:t}}function vp(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sN(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function yz(e,t){return vp(e,t.toTimestamp())}function oi(e){return at(!!e),Ce.fromTimestamp(function(t){const n=Js(t);return new Yt(n.seconds,n.nanos)}(e))}function N_(e,t){return function(n){return new gt(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function oN(e){const t=gt.fromString(e);return at(cN(t)),t}function qy(e,t){return N_(e.databaseId,t.path)}function Q0(e,t){const n=oN(t);if(n.get(1)!==e.databaseId.projectId)throw new fe(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new fe(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new pe(aN(n))}function Ky(e,t){return N_(e.databaseId,t)}function wz(e){const t=oN(e);return t.length===4?gt.emptyPath():aN(t)}function Qy(e){return new gt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function aN(e){return at(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Px(e,t,n){return{name:qy(e,t),fields:n.value.mapValue.fields}}function _z(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Se()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(at(c===void 0||typeof c=="string"),kn.fromBase64String(c||"")):(at(c===void 0||c instanceof Uint8Array),kn.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?H.UNKNOWN:nN(u.code);return new fe(c,u.message||"")}(o);n=new iN(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Q0(e,r.document.name),s=oi(r.document.updateTime),o=r.document.createTime?oi(r.document.createTime):Ce.min(),a=new cr({mapValue:{fields:r.document.fields}}),u=gn.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new rf(c,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Q0(e,r.document),s=r.readTime?oi(r.readTime):Ce.min(),o=gn.newNoDocument(i,s),a=r.removedTargetIds||[];n=new rf([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Q0(e,r.document),s=r.removedTargetIds||[];n=new rf([],s,i,null)}else{if(!("filter"in t))return Se();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new uz(i,s),a=r.targetId;n=new rN(a,o)}}return n}function Sz(e,t){let n;if(t instanceof _h)n={update:Px(e,t.key,t.value)};else if(t instanceof tN)n={delete:qy(e,t.key)};else if(t instanceof ca)n={update:Px(e,t.key,t.data),updateMask:Az(t.fieldMask)};else{if(!(t instanceof oz))return Se();n={verify:qy(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof mp)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Lc)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $c)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof gp)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw Se()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:yz(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Se()}(e,t.precondition)),n}function Ez(e,t){return e&&e.length>0?(at(t!==void 0),e.map(n=>function(r,i){let s=r.updateTime?oi(r.updateTime):oi(i);return s.isEqual(Ce.min())&&(s=oi(i)),new rz(s,r.transformResults||[])}(n,t))):[]}function Cz(e,t){return{documents:[Ky(e,t.path)]}}function kz(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Ky(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ky(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return uN(li.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:ka(d.field),direction:Dz(d.dir)}}(c))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Gy(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function xz(e){let t=wz(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){at(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:t=t.child(d.collectionId)}let s=[];n.where&&(s=function(d){const p=lN(d);return p instanceof li&&FA(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(d=>function(p){return new Hu(xa(p.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d)));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,$m(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(d){const p=!!d.before,m=d.values||[];return new pp(m,p)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const p=!d.before,m=d.values||[];return new pp(m,p)}(n.endAt)),zV(t,i,o,s,a,"F",u,c)}function Tz(e,t){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function lN(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=xa(t.unaryFilter.field);return Vt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=xa(t.unaryFilter.field);return Vt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xa(t.unaryFilter.field);return Vt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=xa(t.unaryFilter.field);return Vt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Se()}}(e):e.fieldFilter!==void 0?function(t){return Vt.create(xa(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return li.create(t.compositeFilter.filters.map(n=>lN(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Se()}}(t.compositeFilter.op))}(e):Se()}function Dz(e){return pz[e]}function Iz(e){return mz[e]}function bz(e){return gz[e]}function ka(e){return{fieldPath:e.canonicalString()}}function xa(e){return vn.fromServerFormat(e.fieldPath)}function uN(e){return e instanceof Vt?function(t){if(t.op==="=="){if(_x(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NAN"}};if(wx(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_x(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NOT_NAN"}};if(wx(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ka(t.field),op:Iz(t.op),value:t.value}}}(e):e instanceof li?function(t){const n=t.getFilters().map(r=>uN(r));return n.length===1?n[0]:{compositeFilter:{op:bz(t.op),filters:n}}}(e):Se()}function Az(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function cN(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,n,r,i,s=Ce.min(),o=Ce.min(),a=kn.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new xs(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new xs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new xs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new xs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nz{constructor(t){this.le=t}}function Oz(e){const t=xz({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Wy(t,t.limit,"L"):t}/**
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
 */class Rz{constructor(){this.sn=new Pz}addToCollectionParentIndex(t,n){return this.sn.add(n),Q.resolve()}getCollectionParents(t,n){return Q.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return Q.resolve()}deleteFieldIndex(t,n){return Q.resolve()}getDocumentsMatchingTarget(t,n){return Q.resolve(null)}getIndexType(t,n){return Q.resolve(0)}getFieldIndexes(t,n){return Q.resolve([])}getNextCollectionGroupToUpdate(t){return Q.resolve(null)}getMinOffset(t,n){return Q.resolve(Xs.min())}getMinOffsetFromCollectionGroup(t,n){return Q.resolve(Xs.min())}updateCollectionGroup(t,n,r){return Q.resolve()}updateIndexEntries(t,n){return Q.resolve()}}class Pz{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new _n(gt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new _n(gt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static Nn(){return new xl(0)}static kn(){return new xl(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mz{constructor(){this.changes=new Wl(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,gn.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?Q.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Lz{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $z{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&qu(r.mutation,i,Rr.empty(),Yt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Pe()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Pe()){const i=No();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Au();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=No();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Pe()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Zi();const o=Gu(),a=Gu();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ca)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),qu(d.mutation,c,d.mutation.getFieldMask(),Yt.now())):o.set(c.key,Rr.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return a.set(c,new Lz(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Gu();let i=new Et((o,a)=>o-a),s=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Rr.empty();d=a.applyToLocalView(c,d),r.set(u,d);const p=(i.get(a.batchId)||Pe()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,p=HA();d.forEach(m=>{if(!s.has(m)){const y=ZA(n.get(m),r.get(m));y!==null&&p.set(m,y),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,p))}return Q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return pe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):WV(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):Q.resolve(No());let a=-1,u=s;return o.next(c=>Q.forEach(c,(d,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(d)?Q.resolve():this.remoteDocumentCache.getEntry(t,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,Pe())).next(d=>({batchId:a,changes:WA(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new pe(n)).next(r=>{let i=Au();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=Au();return this.indexManager.getCollectionParents(t,i).next(o=>Q.forEach(o,a=>{const u=function(c,d){return new Fm(d,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r).next(c=>{c.forEach((d,p)=>{s=s.insert(d,p)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,u)=>{const c=u.getKey();s.get(c)===null&&(s=s.insert(c,gn.newInvalidDocument(c)))});let o=Au();return s.forEach((a,u)=>{const c=i.get(a);c!==void 0&&qu(c.mutation,u,Rr.empty(),Yt.now()),Bm(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fz{constructor(t){this.serializer=t,this.us=new Map,this.cs=new Map}getBundleMetadata(t,n){return Q.resolve(this.us.get(n))}saveBundleMetadata(t,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:oi(r.createTime)}),Q.resolve()}getNamedQuery(t,n){return Q.resolve(this.cs.get(n))}saveNamedQuery(t,n){return this.cs.set(n.name,function(r){return{name:r.name,query:Oz(r.bundledQuery),readTime:oi(r.readTime)}}(n)),Q.resolve()}}/**
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
 */class Uz{constructor(){this.overlays=new Et(pe.comparator),this.hs=new Map}getOverlay(t,n){return Q.resolve(this.overlays.get(n))}getOverlays(t,n){const r=No();return Q.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.de(t,n,s)}),Q.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),Q.resolve()}getOverlaysForCollection(t,n,r){const i=No(),s=n.length+1,o=new pe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return Q.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new Et((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=No(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=No(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return Q.resolve(a)}de(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lz(n,r));let s=this.hs.get(n);s===void 0&&(s=Pe(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(){this.ls=new _n(Gt.fs),this.ds=new _n(Gt._s)}isEmpty(){return this.ls.isEmpty()}addReference(t,n){const r=new Gt(t,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.gs(new Gt(t,n))}ys(t,n){t.forEach(r=>this.removeReference(r,n))}ps(t){const n=new pe(new gt([])),r=new Gt(n,t),i=new Gt(n,t+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(t=>this.gs(t))}gs(t){this.ls=this.ls.delete(t),this.ds=this.ds.delete(t)}Ts(t){const n=new pe(new gt([])),r=new Gt(n,t),i=new Gt(n,t+1);let s=Pe();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Gt(t,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Gt{constructor(t,n){this.key=t,this.Es=n}static fs(t,n){return pe.comparator(t.key,n.key)||He(t.Es,n.Es)}static _s(t,n){return He(t.Es,n.Es)||pe.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bz{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new _n(Gt.fs)}checkEmpty(t){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new az(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Gt(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return Q.resolve(o)}lookupMutationBatch(t,n){return Q.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return Q.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(t){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Gt(n,0),i=new Gt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),Q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new _n(He);return n.forEach(i=>{const s=new Gt(i,0),o=new Gt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),Q.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;pe.isDocumentKey(s)||(s=s.child(""));const o=new Gt(new pe(s),0);let a=new _n(He);return this.Rs.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.Es)),!0)},o),Q.resolve(this.bs(a))}bs(t){const n=[];return t.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){at(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return Q.forEach(n.mutations,i=>{const s=new Gt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=r})}Dn(t){}containsKey(t,n){const r=new Gt(n,0),i=this.Rs.firstAfterOrEqual(r);return Q.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,Q.resolve()}Vs(t,n){return this.Ps(t)}Ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}vs(t){const n=this.Ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vz{constructor(t){this.Ss=t,this.docs=new Et(pe.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return Q.resolve(r?r.document.mutableCopy():gn.newInvalidDocument(n))}getEntries(t,n){let r=Zi();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gn.newInvalidDocument(i))}),Q.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Zi();const o=n.path,a=new pe(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||xV(kV(d),r)<=0||(i.has(d.key)||Bm(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return Q.resolve(s)}getAllFromCollectionGroup(t,n,r,i){Se()}Ds(t,n){return Q.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new zz(this)}getSize(t){return Q.resolve(this.size)}}class zz extends Mz{constructor(t){super(),this.rs=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(t,i)):this.rs.removeEntry(r)}),Q.waitFor(n)}getFromCache(t,n){return this.rs.getEntry(t,n)}getAllFromCache(t,n){return this.rs.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jz{constructor(t){this.persistence=t,this.Cs=new Wl(n=>x_(n),T_),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.xs=0,this.Ns=new O_,this.targetCount=0,this.ks=xl.Nn()}forEachTarget(t,n){return this.Cs.forEach((r,i)=>n(i)),Q.resolve()}getLastRemoteSnapshotVersion(t){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Q.resolve(this.xs)}allocateTargetId(t){return this.highestTargetId=this.ks.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),Q.resolve()}$n(t){this.Cs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ks=new xl(n),this.highestTargetId=n),t.sequenceNumber>this.xs&&(this.xs=t.sequenceNumber)}addTargetData(t,n){return this.$n(n),this.targetCount+=1,Q.resolve()}updateTargetData(t,n){return this.$n(n),Q.resolve()}removeTargetData(t,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),Q.waitFor(s).next(()=>i)}getTargetCount(t){return Q.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cs.get(n)||null;return Q.resolve(r)}addMatchingKeys(t,n,r){return this.Ns.ws(n,r),Q.resolve()}removeMatchingKeys(t,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),Q.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Ns.ps(n),Q.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ns.Ts(n);return Q.resolve(r)}containsKey(t,n){return Q.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yz{constructor(t,n){this.Ms={},this.overlays={},this.Os=new S_(0),this.$s=!1,this.$s=!0,this.referenceDelegate=t(this),this.Fs=new jz(this),this.indexManager=new Rz,this.remoteDocumentCache=function(r){return new Vz(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new Nz(n),this.Ls=new Fz(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Uz,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Ms[t.toKey()];return r||(r=new Bz(n,this.referenceDelegate),this.Ms[t.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(t,n,r){ce("MemoryPersistence","Starting transaction:",t);const i=new Wz(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(t,n){return Q.or(Object.values(this.Ms).map(r=>()=>r.containsKey(t,n)))}}class Wz extends DV{constructor(t){super(),this.currentSequenceNumber=t}}class R_{constructor(t){this.persistence=t,this.Gs=new O_,this.Qs=null}static js(t){return new R_(t)}get zs(){if(this.Qs)return this.Qs;throw Se()}addReference(t,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),Q.resolve()}removeReference(t,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),Q.resolve()}markPotentiallyOrphaned(t,n){return this.zs.add(n.toString()),Q.resolve()}removeTarget(t,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}qs(){this.Qs=new Set}Us(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.zs,r=>{const i=pe.fromPath(r);return this.Ws(t,i).next(s=>{s||n.removeEntry(i,Ce.min())})}).next(()=>(this.Qs=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ws(t,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(t){return 0}Ws(t,n){return Q.or([()=>Q.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ks(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(t,n){let r=Pe(),i=Pe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new P_(t,n.fromCache,r,i)}}/**
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
 */class Hz{constructor(){this.Li=!1}initialize(t,n){this.qi=t,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(t,n,r,i){return this.Ui(t,n).next(s=>s||this.Ki(t,n,i,r)).next(s=>s||this.Gi(t,n))}Ui(t,n){if(kx(n))return Q.resolve(null);let r=Ji(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wy(n,null,"F"),r=Ji(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=Pe(...s);return this.qi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Qi(n,a);return this.ji(n,c,o,u.readTime)?this.Ui(t,Wy(n,null,"F")):this.zi(t,c,n,u)}))})))}Ki(t,n,r,i){return kx(n)||i.isEqual(Ce.min())?this.Gi(t,n):this.qi.getDocuments(t,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(t,n):(mx()<=je.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hy(n)),this.zi(t,o,n,CV(i,-1)))})}Qi(t,n){let r=new _n(jA(t));return n.forEach((i,s)=>{Bm(t,s)&&(r=r.add(s))}),r}ji(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(t,n){return mx()<=je.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Hy(n)),this.qi.getDocumentsMatchingQuery(t,n,Xs.min())}zi(t,n,r,i){return this.qi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gz{constructor(t,n,r,i){this.persistence=t,this.Wi=n,this.serializer=i,this.Hi=new Et(He),this.Ji=new Wl(s=>x_(s),T_),this.Yi=new Map,this.Xi=t.getRemoteDocumentCache(),this.Fs=t.getTargetCache(),this.Ls=t.getBundleCache(),this.Zi(r)}Zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new $z(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Hi))}}function qz(e,t,n,r){return new Gz(e,t,n,r)}async function hN(e,t){const n=xe(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Pe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function Kz(e,t){const n=xe(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const d=u.batch,p=d.keys();let m=Q.resolve();return p.forEach(y=>{m=m.next(()=>c.getEntry(a,y)).next(_=>{const S=u.docVersions.get(y);at(S!==null),_.version.compareTo(S)<0&&(d.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),m.next(()=>o.mutationQueue.removeMutationBatch(a,d))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Pe();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function dN(e){const t=xe(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Fs.getLastRemoteSnapshotVersion(n))}function Qz(e,t){const n=xe(e),r=t.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];t.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;a.push(n.Fs.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Fs.addMatchingKeys(s,d.addedDocuments,p)));let y=m.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(p)!==null?y=y.withResumeToken(kn.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(p,y),function(_,S,x){return _.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,y,d)&&a.push(n.Fs.updateTargetData(s,y))});let u=Zi(),c=Pe();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(Xz(s,o,t.documentUpdates).next(d=>{u=d.er,c=d.nr})),!r.isEqual(Ce.min())){const d=n.Fs.getLastRemoteSnapshotVersion(s).next(p=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return Q.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Hi=i,s))}function Xz(e,t,n){let r=Pe(),i=Pe();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Zi();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Ce.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):ce("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{er:o,nr:i}})}function Jz(e,t){const n=xe(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Zz(e,t){const n=xe(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,t).next(s=>s?(i=s,Q.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new xs(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(t,r.targetId)),r})}async function Xy(e,t,n){const r=xe(e),i=r.Hi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wh(o))throw o;ce("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Hi=r.Hi.remove(t),r.Ji.delete(i.target)}function Mx(e,t,n){const r=xe(e);let i=Ce.min(),s=Pe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const d=xe(a),p=d.Ji.get(c);return p!==void 0?Q.resolve(d.Hi.get(p)):d.Fs.getTargetData(u,c)}(r,o,Ji(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,t,n?i:Ce.min(),n?s:Pe())).next(a=>(ej(r,HV(t),a),{documents:a,sr:s})))}function ej(e,t,n){let r=e.Yi.get(t)||Ce.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Yi.set(t,r)}class Lx{constructor(){this.activeTargetIds=JV()}hr(t){this.activeTargetIds=this.activeTargetIds.add(t)}lr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ar(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class tj{constructor(){this.Wr=new Lx,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Wr.hr(t),this.Hr[t]||"not-current"}updateQueryState(t,n,r){this.Hr[t]=n}removeLocalQueryTarget(t){this.Wr.lr(t)}isLocalQueryTarget(t){return this.Wr.activeTargetIds.has(t)}clearQueryState(t){delete this.Hr[t]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(t){return this.Wr.activeTargetIds.has(t)}start(){return this.Wr=new Lx,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class nj{Jr(t){}shutdown(){}}/**
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
 */class $x{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(t){this.no.push(t)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){ce("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.no)t(0)}eo(){ce("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.no)t(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Od=null;function X0(){return Od===null?Od=268435456+Math.round(2147483648*Math.random()):Od++,"0x"+Od.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ij{constructor(t){this.io=t.io,this.ro=t.ro}oo(t){this.uo=t}co(t){this.ao=t}onMessage(t){this.ho=t}close(){this.ro()}send(t){this.io(t)}lo(){this.uo()}fo(t){this.ao(t)}_o(t){this.ho(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn="WebChannelConnection";class sj extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.wo=n+"://"+t.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(t,n,r,i,s){const o=X0(),a=this.Io(t,n);ce("RestConnection",`Sending RPC '${t}' ${o}:`,a,r);const u={};return this.To(u,i,s),this.Eo(t,a,u,r).then(c=>(ce("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw Sl("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}Ao(t,n,r,i,s,o){return this.po(t,n,r,i,s)}To(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+jl,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>t[s]=i),r&&r.headers.forEach((i,s)=>t[s]=i)}Io(t,n){const r=rj[t];return`${this.wo}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Eo(t,n,r,i){const s=X0();return new Promise((o,a)=>{const u=new dV;u.setWithCredentials(!0),u.listenOnce(uV.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case K0.NO_ERROR:const d=u.getResponseJson();ce(dn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(d)),o(d);break;case K0.TIMEOUT:ce(dn,`RPC '${t}' ${s} timed out`),a(new fe(H.DEADLINE_EXCEEDED,"Request time out"));break;case K0.HTTP_ERROR:const p=u.getStatus();if(ce(dn,`RPC '${t}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const _=function(S){const x=S.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(x)>=0?x:H.UNKNOWN}(y.status);a(new fe(_,y.message))}else a(new fe(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new fe(H.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{ce(dn,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);ce(dn,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Ro(t,n,r){const i=X0(),s=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=aV(),a=lV(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(u.xmlHttpFactory=new hV({})),this.To(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=s.join("");ce(dn,`Creating RPC '${t}' stream ${i}: ${c}`,u);const d=o.createWebChannel(c,u);let p=!1,m=!1;const y=new ij({io:S=>{m?ce(dn,`Not sending because RPC '${t}' stream ${i} is closed:`,S):(p||(ce(dn,`Opening RPC '${t}' stream ${i} transport.`),d.open(),p=!0),ce(dn,`RPC '${t}' stream ${i} sending:`,S),d.send(S))},ro:()=>d.close()}),_=(S,x,E)=>{S.listen(x,v=>{try{E(v)}catch(k){setTimeout(()=>{throw k},0)}})};return _(d,Id.EventType.OPEN,()=>{m||ce(dn,`RPC '${t}' stream ${i} transport opened.`)}),_(d,Id.EventType.CLOSE,()=>{m||(m=!0,ce(dn,`RPC '${t}' stream ${i} transport closed`),y.fo())}),_(d,Id.EventType.ERROR,S=>{m||(m=!0,Sl(dn,`RPC '${t}' stream ${i} transport errored:`,S),y.fo(new fe(H.UNAVAILABLE,"The operation could not be completed")))}),_(d,Id.EventType.MESSAGE,S=>{var x;if(!m){const E=S.data[0];at(!!E);const v=E,k=v.error||((x=v[0])===null||x===void 0?void 0:x.error);if(k){ce(dn,`RPC '${t}' stream ${i} received error:`,k);const T=k.status;let b=function(A){const N=Rt[A];if(N!==void 0)return nN(N)}(T),R=k.message;b===void 0&&(b=H.INTERNAL,R="Unknown error status: "+T+" with message "+k.message),m=!0,y.fo(new fe(b,R)),d.close()}else ce(dn,`RPC '${t}' stream ${i} received:`,E),y._o(E)}}),_(a,cV.STAT_EVENT,S=>{S.stat===fx.PROXY?ce(dn,`RPC '${t}' stream ${i} detected buffering proxy`):S.stat===fx.NOPROXY&&ce(dn,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.lo()},0),y}}function J0(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(e){return new vz(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(t){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&ce("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),t())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(t,n,r,i,s,o,a,u){this.si=t,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new fN(t,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(t){this.Wo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(t,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,t!==4?this.Lo.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Xi(n.toString()),Xi("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(n)}Jo(){}auth(){this.state=1;const t=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{t(()=>{const i=new fe(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(t,n){const r=this.Yo(this.$o);this.stream=this.tu(t,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(t){return ce("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Yo(t){return n=>{this.si.enqueueAndForget(()=>this.$o===t?n():(ce("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oj extends pN{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.Lo.reset();const n=_z(this.serializer,t),r=function(i){if(!("targetChange"in i))return Ce.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Ce.min():s.readTime?oi(s.readTime):Ce.min()}(t);return this.listener.eu(n,r)}nu(t){const n={};n.database=Qy(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Yy(a)?{documents:Cz(i,a)}:{query:kz(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=sN(i,s.resumeToken);const u=Gy(i,s.expectedCount);u!==null&&(o.expectedCount=u)}else if(s.snapshotVersion.compareTo(Ce.min())>0){o.readTime=vp(i,s.snapshotVersion.toTimestamp());const u=Gy(i,s.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,t);const r=Tz(this.serializer,t);r&&(n.labels=r),this.zo(n)}su(t){const n={};n.database=Qy(this.serializer),n.removeTarget=t,this.zo(n)}}class aj extends pN{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(at(!!t.streamToken),this.lastStreamToken=t.streamToken,this.iu){this.Lo.reset();const n=Ez(t.writeResults,t.commitTime),r=oi(t.commitTime);return this.listener.uu(r,n)}return at(!t.writeResults||t.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const t={};t.database=Qy(this.serializer),this.zo(t)}ou(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Sz(this.serializer,r))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lj extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new fe(H.FAILED_PRECONDITION,"The client has already been terminated.")}po(t,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new fe(H.UNKNOWN,i.toString())})}Ao(t,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new fe(H.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class uj{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(t){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.gu("Offline")))}set(t){this.Iu(),this.du=0,t==="Online"&&(this.wu=!1),this.gu(t)}gu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}yu(t){const n=`Could not reach Cloud Firestore backend. ${t}
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
 */class cj{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{ha(this)&&(ce("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=xe(a);u.Au.add(4),await Eh(u),u.Pu.set("Unknown"),u.Au.delete(4),await Wm(u)}(this))})}),this.Pu=new uj(r,i)}}async function Wm(e){if(ha(e))for(const t of e.Ru)await t(!0)}async function Eh(e){for(const t of e.Ru)await t(!1)}function mN(e,t){const n=xe(e);n.Eu.has(t.targetId)||(n.Eu.set(t.targetId,t),$_(n)?L_(n):Hl(n).Uo()&&M_(n,t))}function gN(e,t){const n=xe(e),r=Hl(n);n.Eu.delete(t),r.Uo()&&vN(n,t),n.Eu.size===0&&(r.Uo()?r.Qo():ha(n)&&n.Pu.set("Unknown"))}function M_(e,t){if(e.bu.Lt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ce.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Hl(e).nu(t)}function vN(e,t){e.bu.Lt(t),Hl(e).su(t)}function L_(e){e.bu=new fz({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),he:t=>e.Eu.get(t)||null,oe:()=>e.datastore.serializer.databaseId}),Hl(e).start(),e.Pu.mu()}function $_(e){return ha(e)&&!Hl(e).qo()&&e.Eu.size>0}function ha(e){return xe(e).Au.size===0}function yN(e){e.bu=void 0}async function hj(e){e.Eu.forEach((t,n)=>{M_(e,t)})}async function dj(e,t){yN(e),$_(e)?(e.Pu.pu(t),L_(e)):e.Pu.set("Unknown")}async function fj(e,t,n){if(e.Pu.set("Online"),t instanceof iN&&t.state===2&&t.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(e,t)}catch(r){ce("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await yp(e,r)}else if(t instanceof rf?e.bu.Wt(t):t instanceof rN?e.bu.ee(t):e.bu.Yt(t),!n.isEqual(Ce.min()))try{const r=await dN(e.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Eu.get(u);c&&i.Eu.set(u,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,u)=>{const c=i.Eu.get(a);if(!c)return;i.Eu.set(a,c.withResumeToken(kn.EMPTY_BYTE_STRING,c.snapshotVersion)),vN(i,a);const d=new xs(c.target,a,u,c.sequenceNumber);M_(i,d)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(r){ce("RemoteStore","Failed to raise snapshot:",r),await yp(e,r)}}async function yp(e,t,n){if(!wh(t))throw t;e.Au.add(1),await Eh(e),e.Pu.set("Offline"),n||(n=()=>dN(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{ce("RemoteStore","Retrying IndexedDB access"),await n(),e.Au.delete(1),await Wm(e)})}function wN(e,t){return t().catch(n=>yp(e,n,t))}async function Hm(e){const t=xe(e),n=Zs(t);let r=t.Tu.length>0?t.Tu[t.Tu.length-1].batchId:-1;for(;pj(t);)try{const i=await Jz(t.localStore,r);if(i===null){t.Tu.length===0&&n.Qo();break}r=i.batchId,mj(t,i)}catch(i){await yp(t,i)}_N(t)&&SN(t)}function pj(e){return ha(e)&&e.Tu.length<10}function mj(e,t){e.Tu.push(t);const n=Zs(e);n.Uo()&&n.ru&&n.ou(t.mutations)}function _N(e){return ha(e)&&!Zs(e).qo()&&e.Tu.length>0}function SN(e){Zs(e).start()}async function gj(e){Zs(e).au()}async function vj(e){const t=Zs(e);for(const n of e.Tu)t.ou(n.mutations)}async function yj(e,t,n){const r=e.Tu.shift(),i=I_.from(r,t,n);await wN(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Hm(e)}async function wj(e,t){t&&Zs(e).ru&&await async function(n,r){if(i=r.code,cz(i)&&i!==H.ABORTED){const s=n.Tu.shift();Zs(n).Go(),await wN(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Hm(n)}var i}(e,t),_N(e)&&SN(e)}async function Fx(e,t){const n=xe(e);n.asyncQueue.verifyOperationInProgress(),ce("RemoteStore","RemoteStore received new credentials");const r=ha(n);n.Au.add(3),await Eh(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Au.delete(3),await Wm(n)}async function _j(e,t){const n=xe(e);t?(n.Au.delete(2),await Wm(n)):t||(n.Au.add(2),await Eh(n),n.Pu.set("Unknown"))}function Hl(e){return e.Vu||(e.Vu=function(t,n,r){const i=xe(t);return i.lu(),new oj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{oo:hj.bind(null,e),co:dj.bind(null,e),eu:fj.bind(null,e)}),e.Ru.push(async t=>{t?(e.Vu.Go(),$_(e)?L_(e):e.Pu.set("Unknown")):(await e.Vu.stop(),yN(e))})),e.Vu}function Zs(e){return e.Su||(e.Su=function(t,n,r){const i=xe(t);return i.lu(),new aj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{oo:gj.bind(null,e),co:wj.bind(null,e),cu:vj.bind(null,e),uu:yj.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Go(),await Hm(e)):(await e.Su.stop(),e.Tu.length>0&&(ce("RemoteStore",`Stopping write stream with ${e.Tu.length} pending writes`),e.Tu=[]))})),e.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new F_(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(H.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function U_(e,t){if(Xi("AsyncQueue",`${t}: ${e}`),wh(e))return new fe(H.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t){this.comparator=t?(n,r)=>t(n,r)||pe.comparator(n.key,r.key):(n,r)=>pe.comparator(n.key,r.key),this.keyedMap=Au(),this.sortedSet=new Et(this.comparator)}static emptySet(t){return new il(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof il)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new il;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(){this.Du=new Et(pe.comparator)}track(t){const n=t.doc.key,r=this.Du.get(n);r?t.type!==0&&r.type===3?this.Du=this.Du.insert(n,t):t.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Du=this.Du.remove(n):t.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):Se():this.Du=this.Du.insert(n,t)}Cu(){const t=[];return this.Du.inorderTraversal((n,r)=>{t.push(r)}),t}}class Tl{constructor(t,n,r,i,s,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Tl(t,n,il.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Um(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sj{constructor(){this.xu=void 0,this.listeners=[]}}class Ej{constructor(){this.queries=new Wl(t=>zA(t),Um),this.onlineState="Unknown",this.Nu=new Set}}async function EN(e,t){const n=xe(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Sj),i)try{s.xu=await n.onListen(r)}catch(o){const a=U_(o,`Initialization of query '${Hy(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.ku(n.onlineState),s.xu&&t.Mu(s.xu)&&B_(n)}async function CN(e,t){const n=xe(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Cj(e,t){const n=xe(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&B_(n)}function kj(e,t,n){const r=xe(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function B_(e){e.Nu.forEach(t=>{t.next()})}class kN{constructor(t,n,r){this.query=t,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Tl(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.$u?this.Bu(t)&&(this.Ou.next(t),n=!0):this.Lu(t,this.onlineState)&&(this.qu(t),n=!0),this.Fu=t,n}onError(t){this.Ou.error(t)}ku(t){this.onlineState=t;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,t)&&(this.qu(this.Fu),n=!0),n}Lu(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Bu(t){if(t.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(t){t=Tl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.$u=!0,this.Ou.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(t){this.key=t}}class TN{constructor(t){this.key=t}}class xj{constructor(t,n){this.query=t,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Pe(),this.mutatedKeys=Pe(),this.Zu=jA(t),this.tc=new il(this.Zu)}get ec(){return this.Ju}nc(t,n){const r=n?n.sc:new Ux,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((d,p)=>{const m=i.get(d),y=Bm(this.query,p)?p:null,_=!!m&&this.mutatedKeys.has(m.key),S=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let x=!1;m&&y?m.data.isEqual(y.data)?_!==S&&(r.track({type:3,doc:y}),x=!0):this.ic(m,y)||(r.track({type:2,doc:y}),x=!0,(u&&this.Zu(y,u)>0||c&&this.Zu(y,c)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),x=!0):m&&!y&&(r.track({type:1,doc:m}),x=!0,(u||c)&&(a=!0)),x&&(y?(o=o.add(y),s=S?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.tc;this.tc=t.tc,this.mutatedKeys=t.mutatedKeys;const s=t.sc.Cu();s.sort((c,d)=>function(p,m){const y=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return y(p)-y(m)}(c.type,d.type)||this.Zu(c.doc,d.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,u=a!==this.Yu;return this.Yu=a,s.length!==0||u?{snapshot:new Tl(this.query,t.tc,i,s,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Ux,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(t){return!this.Ju.has(t)&&!!this.tc.has(t)&&!this.tc.get(t).hasLocalMutations}rc(t){t&&(t.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=t.current)}oc(){if(!this.current)return[];const t=this.Xu;this.Xu=Pe(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return t.forEach(r=>{this.Xu.has(r)||n.push(new TN(r))}),this.Xu.forEach(r=>{t.has(r)||n.push(new xN(r))}),n}ac(t){this.Ju=t.sr,this.Xu=Pe();const n=this.nc(t.documents);return this.applyChanges(n,!0)}hc(){return Tl.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class Tj{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Dj{constructor(t){this.key=t,this.lc=!1}}class Ij{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Wl(a=>zA(a),Um),this._c=new Map,this.wc=new Set,this.mc=new Et(pe.comparator),this.gc=new Map,this.yc=new O_,this.Ic={},this.Tc=new Map,this.Ec=xl.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function bj(e,t){const n=Uj(e);let r,i;const s=n.dc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await Zz(n.localStore,Ji(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Aj(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&mN(n.remoteStore,o)}return i}async function Aj(e,t,n,r,i){e.Rc=(p,m,y)=>async function(_,S,x,E){let v=S.view.nc(x);v.ji&&(v=await Mx(_.localStore,S.query,!1).then(({documents:b})=>S.view.nc(b,v)));const k=E&&E.targetChanges.get(S.targetId),T=S.view.applyChanges(v,_.isPrimaryClient,k);return Vx(_,S.targetId,T.uc),T.snapshot}(e,p,m,y);const s=await Mx(e.localStore,t,!0),o=new xj(t,s.sr),a=o.nc(s.documents),u=Sh.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,u);Vx(e,n,c.uc);const d=new Tj(t,n,o);return e.dc.set(t,d),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function Nj(e,t){const n=xe(e),r=n.dc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Um(s,t))),void n.dc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xy(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),gN(n.remoteStore,r.targetId),Jy(n,r.targetId)}).catch(yh)):(Jy(n,r.targetId),await Xy(n.localStore,r.targetId,!0))}async function Oj(e,t,n){const r=Bj(e);try{const i=await function(s,o){const a=xe(s),u=Yt.now(),c=o.reduce((m,y)=>m.add(y.key),Pe());let d,p;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=Zi(),_=Pe();return a.Xi.getEntries(m,c).next(S=>{y=S,y.forEach((x,E)=>{E.isValidDocument()||(_=_.add(x))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,y)).next(S=>{d=S;const x=[];for(const E of o){const v=sz(E,d.get(E.key).overlayedDocument);v!=null&&x.push(new ca(E.key,v,MA(v.value.mapValue),si.exists(!0)))}return a.mutationQueue.addMutationBatch(m,u,x,o)}).next(S=>{p=S;const x=S.applyToLocalDocumentSet(d,_);return a.documentOverlayCache.saveOverlays(m,S.batchId,x)})}).then(()=>({batchId:p.batchId,changes:WA(d)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Ic[s.currentUser.toKey()];u||(u=new Et(He)),u=u.insert(o,a),s.Ic[s.currentUser.toKey()]=u}(r,i.batchId,n),await Ch(r,i.changes),await Hm(r.remoteStore)}catch(i){const s=U_(i,"Failed to persist write");n.reject(s)}}async function DN(e,t){const n=xe(e);try{const r=await Qz(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(at(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?at(o.lc):i.removedDocuments.size>0&&(at(o.lc),o.lc=!1))}),await Ch(n,r,t)}catch(r){await yh(r)}}function Bx(e,t,n){const r=xe(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(t);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=xe(s);a.onlineState=o;let u=!1;a.queries.forEach((c,d)=>{for(const p of d.listeners)p.ku(o)&&(u=!0)}),u&&B_(a)}(r.eventManager,t),i.length&&r.fc.eu(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Rj(e,t,n){const r=xe(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.gc.get(t),s=i&&i.key;if(s){let o=new Et(pe.comparator);o=o.insert(s,gn.newNoDocument(s,Ce.min()));const a=Pe().add(s),u=new jm(Ce.min(),new Map,new Et(He),o,a);await DN(r,u),r.mc=r.mc.remove(s),r.gc.delete(t),V_(r)}else await Xy(r.localStore,t,!1).then(()=>Jy(r,t,n)).catch(yh)}async function Pj(e,t){const n=xe(e),r=t.batch.batchId;try{const i=await Kz(n.localStore,t);bN(n,r,null),IN(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ch(n,i)}catch(i){await yh(i)}}async function Mj(e,t,n){const r=xe(e);try{const i=await function(s,o){const a=xe(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(d=>(at(d!==null),c=d.keys(),a.mutationQueue.removeMutationBatch(u,d))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(r.localStore,t);bN(r,t,n),IN(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ch(r,i)}catch(i){await yh(i)}}function IN(e,t){(e.Tc.get(t)||[]).forEach(n=>{n.resolve()}),e.Tc.delete(t)}function bN(e,t,n){const r=xe(e);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Ic[r.currentUser.toKey()]=i}}function Jy(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.dc.delete(r),n&&e.fc.vc(r,n);e._c.delete(t),e.isPrimaryClient&&e.yc.ps(t).forEach(r=>{e.yc.containsKey(r)||AN(e,r)})}function AN(e,t){e.wc.delete(t.path.canonicalString());const n=e.mc.get(t);n!==null&&(gN(e.remoteStore,n),e.mc=e.mc.remove(t),e.gc.delete(n),V_(e))}function Vx(e,t,n){for(const r of n)r instanceof xN?(e.yc.addReference(r.key,t),Lj(e,r)):r instanceof TN?(ce("SyncEngine","Document no longer in limbo: "+r.key),e.yc.removeReference(r.key,t),e.yc.containsKey(r.key)||AN(e,r.key)):Se()}function Lj(e,t){const n=t.key,r=n.path.canonicalString();e.mc.get(n)||e.wc.has(r)||(ce("SyncEngine","New document in limbo: "+n),e.wc.add(r),V_(e))}function V_(e){for(;e.wc.size>0&&e.mc.size<e.maxConcurrentLimboResolutions;){const t=e.wc.values().next().value;e.wc.delete(t);const n=new pe(gt.fromString(t)),r=e.Ec.next();e.gc.set(r,new Dj(n)),e.mc=e.mc.insert(n,r),mN(e.remoteStore,new xs(Ji(D_(n.path)),r,"TargetPurposeLimboResolution",S_.ct))}}async function Ch(e,t,n){const r=xe(e),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,u)=>{o.push(r.Rc(u,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const d=P_.Bi(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,u){const c=xe(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>Q.forEach(u,p=>Q.forEach(p.$i,m=>c.persistence.referenceDelegate.addReference(d,p.targetId,m)).next(()=>Q.forEach(p.Fi,m=>c.persistence.referenceDelegate.removeReference(d,p.targetId,m)))))}catch(d){if(!wh(d))throw d;ce("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const m=c.Hi.get(p),y=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(y);c.Hi=c.Hi.insert(p,_)}}}(r.localStore,s))}async function $j(e,t){const n=xe(e);if(!n.currentUser.isEqual(t)){ce("SyncEngine","User change. New user:",t.toKey());const r=await hN(n.localStore,t);n.currentUser=t,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new fe(H.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ch(n,r.tr)}}function Fj(e,t){const n=xe(e),r=n.gc.get(t);if(r&&r.lc)return Pe().add(r.key);{let i=Pe();const s=n._c.get(t);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function Uj(e){const t=xe(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=DN.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fj.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Rj.bind(null,t),t.fc.eu=Cj.bind(null,t.eventManager),t.fc.vc=kj.bind(null,t.eventManager),t}function Bj(e){const t=xe(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Pj.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Mj.bind(null,t),t}class zx{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ym(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return qz(this.persistence,new Hz,t.initialUser,this.serializer)}createPersistence(t){return new Yz(R_.js,this.serializer)}createSharedClientState(t){return new tj}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vj{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bx(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$j.bind(null,this.syncEngine),await _j(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ej}createDatastore(t){const n=Ym(t.databaseInfo.databaseId),r=(i=t.databaseInfo,new sj(i));var i;return function(s,o,a,u){return new lj(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return n=this.localStore,r=this.datastore,i=t.asyncQueue,s=a=>Bx(this.syncEngine,a,0),o=$x.D()?new $x:new nj,new cj(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(t,n){return function(r,i,s,o,a,u,c){const d=new Ij(r,i,s,o,a,u);return c&&(d.Ac=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=xe(t);ce("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Eh(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class NN{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Vc(this.observer.next,t)}error(t){this.observer.error?this.Vc(this.observer.error,t):Xi("Uncaught Error in snapshot listener:",t.toString())}Sc(){this.muted=!0}Vc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zj{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pn.UNAUTHENTICATED,this.clientId=OA.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ce("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ce("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new fe(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=U_(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Z0(e,t){e.asyncQueue.verifyOperationInProgress(),ce("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await hN(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function jx(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Yj(e);ce("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Fx(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Fx(t.remoteStore,s)),e._onlineComponents=t}function jj(e){return e.name==="FirebaseError"?e.code===H.FAILED_PRECONDITION||e.code===H.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Yj(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ce("FirestoreClient","Using user provided OfflineComponentProvider");try{await Z0(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!jj(n))throw n;Sl("Error using user provided cache. Falling back to memory cache: "+n),await Z0(e,new zx)}}else ce("FirestoreClient","Using default OfflineComponentProvider"),await Z0(e,new zx);return e._offlineComponents}async function ON(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ce("FirestoreClient","Using user provided OnlineComponentProvider"),await jx(e,e._uninitializedComponentsProvider._online)):(ce("FirestoreClient","Using default OnlineComponentProvider"),await jx(e,new Vj))),e._onlineComponents}function Wj(e){return ON(e).then(t=>t.syncEngine)}async function RN(e){const t=await ON(e),n=t.eventManager;return n.onListen=bj.bind(null,t.syncEngine),n.onUnlisten=Nj.bind(null,t.syncEngine),n}function Hj(e,t,n={}){const r=new Vi;return e.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const c=new NN({next:p=>{s.enqueueAndForget(()=>CN(i,d));const m=p.docs.has(o);!m&&p.fromCache?u.reject(new fe(H.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&a&&a.source==="server"?u.reject(new fe(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new kN(D_(o.path),c,{includeMetadataChanges:!0,Uu:!0});return EN(i,d)}(await RN(e),e.asyncQueue,t,n,r)),r.promise}function Gj(e,t,n={}){const r=new Vi;return e.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const c=new NN({next:p=>{s.enqueueAndForget(()=>CN(i,d)),p.fromCache&&a.source==="server"?u.reject(new fe(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new kN(o,c,{includeMetadataChanges:!0,Uu:!0});return EN(i,d)}(await RN(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(e,t,n){if(!n)throw new fe(H.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function qj(e,t,n,r){if(t===!0&&r===!0)throw new fe(H.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Wx(e){if(!pe.isDocumentKey(e))throw new fe(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Hx(e){if(pe.isDocumentKey(e))throw new fe(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function z_(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Se()}function eo(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new fe(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=z_(e);throw new fe(H.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new fe(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new fe(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qj("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gx({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new fe(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new fe(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gx(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new pV;switch(n.type){case"firstParty":return new yV(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new fe(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Yx.get(t);n&&(ce("ComponentProvider","Removing Datastore"),Yx.delete(t),n.terminate())}(this),Promise.resolve()}}function Kj(e,t,n,r={}){var i;const s=(e=eo(e,Gm))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&Sl("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=pn.MOCK_USER;else{o=BI(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new fe(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new pn(u)}e._authCredentials=new mV(new NA(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new js(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Xn(this.firestore,t,this._key)}}class qm{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new qm(this.firestore,t,this._query)}}class js extends qm{constructor(t,n,r){super(t,n,D_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Xn(this.firestore,null,new pe(t))}withConverter(t){return new js(this.firestore,t,this._path)}}function uo(e,t,...n){if(e=Xt(e),PN("collection","path",t),e instanceof Gm){const r=gt.fromString(t,...n);return Hx(r),new js(e,null,r)}{if(!(e instanceof Xn||e instanceof js))throw new fe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(gt.fromString(t,...n));return Hx(r),new js(e.firestore,null,r)}}function kh(e,t,...n){if(e=Xt(e),arguments.length===1&&(t=OA.A()),PN("doc","path",t),e instanceof Gm){const r=gt.fromString(t,...n);return Wx(r),new Xn(e,null,new pe(r))}{if(!(e instanceof Xn||e instanceof js))throw new fe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(gt.fromString(t,...n));return Wx(r),new Xn(e.firestore,e instanceof js?e.converter:null,new pe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qj{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new fN(this,"async_queue_retry"),this.Yc=()=>{const n=J0();n&&ce("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const t=J0();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xc(),this.Zc(t)}enterRestrictedMode(t){if(!this.Qc){this.Qc=!0,this.Hc=t||!1;const n=J0();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(t){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Vi;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Gc.push(t),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(t){if(!wh(t))throw t;ce("AsyncQueue","Operation failed with retryable error: "+t)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(t){const n=this.Kc.then(()=>(this.Wc=!0,t().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Xi("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(t,n,r){this.Xc(),this.Jc.indexOf(t)>-1&&(n=0);const i=F_.createAndSchedule(this,t,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&Se()}verifyOperationInProgress(){}async na(){let t;do t=this.Kc,await t;while(t!==this.Kc)}sa(t){for(const n of this.jc)if(n.timerId===t)return!0;return!1}ia(t){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.na()})}ra(t){this.Jc.push(t)}ea(t){const n=this.jc.indexOf(t);this.jc.splice(n,1)}}class xh extends Gm{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new Qj,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||MN(this),this._firestoreClient.terminate()}}function Xj(e,t){const n=typeof e=="object"?e:Bw(),r=typeof e=="string"?e:t||"(default)",i=ym(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=FI("firestore");s&&Kj(i,...s)}return i}function j_(e){return e._firestoreClient||MN(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function MN(e){var t,n,r;const i=e._freezeSettings(),s=function(o,a,u,c){return new AV(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new zj(e._authCredentials,e._appCheckCredentials,e._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Dl(kn.fromBase64String(t))}catch(n){throw new fe(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Dl(kn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new fe(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new fe(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new fe(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return He(this._lat,t._lat)||He(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jj=/^__.*__$/;class Zj{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ca(t,this.data,this.fieldMask,n,this.fieldTransforms):new _h(t,this.data,n,this.fieldTransforms)}}function $N(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class H_{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(t){return new H_(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ca({path:r,ha:!1});return i.la(t),i}fa(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ca({path:r,ha:!1});return i.oa(),i}da(t){return this.ca({path:void 0,ha:!0})}_a(t){return wp(t,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let t=0;t<this.path.length;t++)this.la(this.path.get(t))}la(t){if(t.length===0)throw this._a("Document fields must not be empty");if($N(this.ua)&&Jj.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class eY{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ym(t)}ga(t,n,r,i=!1){return new H_({ua:t,methodName:n,ma:r,path:vn.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function FN(e){const t=e._freezeSettings(),n=Ym(e._databaseId);return new eY(e._databaseId,!!t.ignoreUndefinedProperties,n)}function UN(e,t,n,r,i,s={}){const o=e.ga(s.merge||s.mergeFields?2:0,t,n,i);jN("Data must be an object, but it was:",o,r);const a=VN(r,o);let u,c;if(s.merge)u=new Rr(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=tY(t,p,n);if(!o.contains(m))throw new fe(H.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);rY(d,m)||d.push(m)}u=new Rr(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new Zj(new cr(a),u,c)}function BN(e,t){if(zN(e=Xt(e)))return jN("Unsupported field value:",t,e),VN(e,t);if(e instanceof LN)return function(n,r){if(!$N(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ha&&t.ua!==4)throw t._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=BN(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(e,t)}return function(n,r){if((n=Xt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ZV(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Yt.fromDate(n);return{timestampValue:vp(r.serializer,i)}}if(n instanceof Yt){const i=new Yt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:vp(r.serializer,i)}}if(n instanceof W_)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Dl)return{bytesValue:sN(r.serializer,n._byteString)};if(n instanceof Xn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:N_(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${z_(n)}`)}(e,t)}function VN(e,t){const n={};return RA(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Yl(e,(r,i)=>{const s=BN(i,t.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function zN(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Yt||e instanceof W_||e instanceof Dl||e instanceof Xn||e instanceof LN)}function jN(e,t,n){if(!zN(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=z_(n);throw r==="an object"?t._a(e+" a custom object"):t._a(e+" "+r)}}function tY(e,t,n){if((t=Xt(t))instanceof Y_)return t._internalPath;if(typeof t=="string")return YN(e,t);throw wp("Field path arguments must be of type string or ",e,!1,void 0,n)}const nY=new RegExp("[~\\*/\\[\\]]");function YN(e,t,n){if(t.search(nY)>=0)throw wp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Y_(...t.split("."))._internalPath}catch{throw wp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function wp(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new fe(H.INVALID_ARGUMENT,a+e+u)}function rY(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Xn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new iY(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(HN("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iY extends WN{data(){return super.data()}}function HN(e,t){return typeof t=="string"?YN(e,t):t instanceof Y_?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sY(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new fe(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oY{convertValue(t,n="none"){switch(Zo(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Pt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Jo(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Se()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Yl(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new W_(Pt(t.latitude),Pt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=C_(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Rc(t));default:return null}}convertTimestamp(t){const n=Js(t);return new Yt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=gt.fromString(t);at(cN(r));const i=new Pc(r.get(1),r.get(3)),s=new pe(r.popFirst(5));return i.isEqual(n)||Xi(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class qN extends WN{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new sf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(HN("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class sf extends qN{data(t={}){return super.data(t)}}class aY{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ou(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new sf(this._firestore,this._userDataWriter,r.key,r,new Ou(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new sf(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ou(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new sf(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ou(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,c=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:lY(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lY(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(e){e=eo(e,Xn);const t=eo(e.firestore,xh);return Hj(j_(t),e._key).then(n=>cY(t,e,n))}class KN extends oY{constructor(t){super(),this.firestore=t}convertBytes(t){return new Dl(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Xn(this.firestore,null,n)}}function Km(e){e=eo(e,qm);const t=eo(e.firestore,xh),n=j_(t),r=new KN(t);return sY(e._query),Gj(n,e._query).then(i=>new aY(t,r,e,i))}function uY(e,t,n){e=eo(e,Xn);const r=eo(e.firestore,xh),i=GN(e.converter,t,n);return QN(r,[UN(FN(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,si.none())])}function Qm(e,t){const n=eo(e.firestore,xh),r=kh(e),i=GN(e.converter,t);return QN(n,[UN(FN(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,si.exists(!1))]).then(()=>r)}function QN(e,t){return function(n,r){const i=new Vi;return n.asyncQueue.enqueueAndForget(async()=>Oj(await Wj(n),r,i)),i.promise}(j_(e),t)}function cY(e,t,n){const r=n.docs.get(t._key),i=new KN(e);return new qN(e,i,t._key,r,new Ou(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){jl=n})(aa),qo(new Qs("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new xh(new gV(n.getProvider("auth-internal")),new _V(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new fe(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pc(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ni(px,"3.11.0",e),ni(px,"3.11.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN="firebasestorage.googleapis.com",JN="storageBucket",hY=2*60*1e3,dY=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends di{constructor(t,n,r=0){super(ev(t),`Firebase Storage: ${n} (${ev(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Dt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ev(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Tt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Tt||(Tt={}));function ev(e){return"storage/"+e}function q_(){const e="An unknown error occurred, please check the error payload for server response.";return new Dt(Tt.UNKNOWN,e)}function fY(e){return new Dt(Tt.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function pY(e){return new Dt(Tt.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mY(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Dt(Tt.UNAUTHENTICATED,e)}function gY(){return new Dt(Tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function vY(e){return new Dt(Tt.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function yY(){return new Dt(Tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wY(){return new Dt(Tt.CANCELED,"User canceled the upload/download.")}function _Y(e){return new Dt(Tt.INVALID_URL,"Invalid URL '"+e+"'.")}function SY(e){return new Dt(Tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function EY(){return new Dt(Tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+JN+"' property when initializing the app?")}function CY(){return new Dt(Tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function kY(){return new Dt(Tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function xY(e){return new Dt(Tt.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Zy(e){return new Dt(Tt.INVALID_ARGUMENT,e)}function ZN(){return new Dt(Tt.APP_DELETED,"The Firebase app was deleted.")}function TY(e){return new Dt(Tt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ku(e,t){return new Dt(Tt.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function vu(e){throw new Dt(Tt.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Kn.makeFromUrl(t,n)}catch{return new Kn(t,"")}if(r.path==="")return r;throw SY(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),_={bucket:1,path:3},S=n===XN?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",E=new RegExp(`^https?://${S}/${i}/${x}`,"i"),k=[{regex:a,indices:u,postModify:s},{regex:y,indices:_,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<k.length;T++){const b=k[T],R=b.regex.exec(t);if(R){const A=R[b.indices.bucket];let N=R[b.indices.path];N||(N=""),r=new Kn(A,N),b.postModify(r);break}}if(r==null)throw _Y(t);return r}}class DY{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IY(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...x){c||(c=!0,t.apply(null,x))}function p(x){i=setTimeout(()=>{i=null,e(y,u())},x)}function m(){s&&clearTimeout(s)}function y(x,...E){if(c){m();return}if(x){m(),d.call(null,x,...E);return}if(u()||o){m(),d.call(null,x,...E);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,p(k)}let _=!1;function S(x){_||(_=!0,m(),!c&&(i!==null?(x||(a=2),clearTimeout(i),p(0)):x||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,S(!0)},n),S}function bY(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AY(e){return e!==void 0}function NY(e){return typeof e=="object"&&!Array.isArray(e)}function K_(e){return typeof e=="string"||e instanceof String}function qx(e){return Q_()&&e instanceof Blob}function Q_(){return typeof Blob!="undefined"&&!U8()}function Kx(e,t,n,r){if(r<t)throw Zy(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Zy(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function eO(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $o;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})($o||($o={}));/**
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
 */function OY(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RY{constructor(t,n,r,i,s,o,a,u,c,d,p,m=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,_)=>{this.resolve_=y,this.reject_=_,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Rd(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===$o.NO_ERROR,u=s.getStatus();if(!a||OY(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===$o.ABORT;r(!1,new Rd(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Rd(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());AY(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=q_();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?ZN():wY();o(u)}else{const u=yY();o(u)}};this.canceled_?n(!1,new Rd(!1,null,!0)):this.backoffId_=IY(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&bY(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Rd{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function PY(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function MY(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function LY(e,t){t&&(e["X-Firebase-GMPID"]=t)}function $Y(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function FY(e,t,n,r,i,s,o=!0){const a=eO(e.urlParams),u=e.url+a,c=Object.assign({},e.headers);return LY(c,t),PY(c,n),MY(c,s),$Y(c,r),new RY(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UY(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function BY(...e){const t=UY();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(Q_())return new Blob(e);throw new Dt(Tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function VY(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function zY(e){if(typeof atob=="undefined")throw xY("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class tv{constructor(t,n){this.data=t,this.contentType=n||null}}function jY(e,t){switch(e){case Jr.RAW:return new tv(tO(t));case Jr.BASE64:case Jr.BASE64URL:return new tv(nO(e,t));case Jr.DATA_URL:return new tv(WY(t),HY(t))}throw q_()}function tO(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,o=e.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function YY(e){let t;try{t=decodeURIComponent(e)}catch{throw Ku(Jr.DATA_URL,"Malformed data URL.")}return tO(t)}function nO(e,t){switch(e){case Jr.BASE64:{const i=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(i||s)throw Ku(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Jr.BASE64URL:{const i=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(i||s)throw Ku(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=zY(t)}catch(i){throw i.message.includes("polyfill")?i:Ku(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class rO{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw Ku(Jr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=GY(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function WY(e){const t=new rO(e);return t.base64?nO(Jr.BASE64,t.rest):YY(t.rest)}function HY(e){return new rO(e).contentType}function GY(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,n){let r=0,i="";qx(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(qx(this.data_)){const r=this.data_,i=VY(r,t,n);return i===null?null:new Ss(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Ss(r,!0)}}static getBlob(...t){if(Q_()){const n=t.map(r=>r instanceof Ss?r.data_:r);return new Ss(BY.apply(null,n))}else{const n=t.map(o=>K_(o)?jY(Jr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ss(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(e){let t;try{t=JSON.parse(e)}catch{return null}return NY(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qY(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function KY(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function sO(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QY(e,t){return t}class bn{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||QY}}let Pd=null;function XY(e){return!K_(e)||e.length<2?e:sO(e)}function oO(){if(Pd)return Pd;const e=[];e.push(new bn("bucket")),e.push(new bn("generation")),e.push(new bn("metageneration")),e.push(new bn("name","fullPath",!0));function t(s,o){return XY(o)}const n=new bn("name");n.xform=t,e.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new bn("size");return i.xform=r,e.push(i),e.push(new bn("timeCreated")),e.push(new bn("updated")),e.push(new bn("md5Hash",null,!0)),e.push(new bn("cacheControl",null,!0)),e.push(new bn("contentDisposition",null,!0)),e.push(new bn("contentEncoding",null,!0)),e.push(new bn("contentLanguage",null,!0)),e.push(new bn("contentType",null,!0)),e.push(new bn("metadata","customMetadata",!0)),Pd=e,Pd}function JY(e,t){function n(){const r=e.bucket,i=e.fullPath,s=new Kn(r,i);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function ZY(e,t,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,t[o.server])}return JY(r,e),r}function aO(e,t,n){const r=iO(t);return r===null?null:ZY(e,r,n)}function eW(e,t,n,r){const i=iO(t);if(i===null||!K_(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=e.bucket,p=e.fullPath,m="/b/"+o(d)+"/o/"+o(p),y=X_(m,n,r),_=eO({alt:"media",token:c});return y+_})[0]}function tW(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class lO{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(e){if(!e)throw q_()}function nW(e,t){function n(r,i){const s=aO(e,i,t);return uO(s!==null),s}return n}function rW(e,t){function n(r,i){const s=aO(e,i,t);return uO(s!==null),eW(s,i,e.host,e._protocol)}return n}function cO(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=gY():i=mY():n.getStatus()===402?i=pY(e.bucket):n.getStatus()===403?i=vY(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function iW(e){const t=cO(e);function n(r,i){let s=t(r,i);return r.getStatus()===404&&(s=fY(e.path)),s.serverResponse=i.serverResponse,s}return n}function sW(e,t,n){const r=t.fullServerUrl(),i=X_(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new lO(i,s,rW(e,n),o);return a.errorHandler=iW(t),a}function oW(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function aW(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=oW(null,t)),r}function lW(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let T=0;T<2;T++)k=k+Math.random().toString().slice(2);return k}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=aW(t,r,i),d=tW(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",y=Ss.getBlob(p,r,m);if(y===null)throw CY();const _={name:c.fullPath},S=X_(s,e.host,e._protocol),x="POST",E=e.maxUploadRetryTime,v=new lO(S,x,nW(e,n),E);return v.urlParams=_,v.headers=o,v.body=y.uploadData(),v.errorHandler=cO(t),v}class uW{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$o.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$o.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$o.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw vu("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw vu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class cW extends uW{initXhr(){this.xhr_.responseType="text"}}function hO(){return new cW}/**
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
 */class ea{constructor(t,n){this._service=t,n instanceof Kn?this._location=n:this._location=Kn.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new ea(t,n)}get root(){const t=new Kn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sO(this._location.path)}get storage(){return this._service}get parent(){const t=qY(this._location.path);if(t===null)return null;const n=new Kn(this._location.bucket,t);return new ea(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw TY(t)}}function hW(e,t,n){e._throwIfRoot("uploadBytes");const r=lW(e.storage,e._location,oO(),new Ss(t,!0),n);return e.storage.makeRequestWithTokens(r,hO).then(i=>({metadata:i,ref:e}))}function dW(e){e._throwIfRoot("getDownloadURL");const t=sW(e.storage,e._location,oO());return e.storage.makeRequestWithTokens(t,hO).then(n=>{if(n===null)throw kY();return n})}function fW(e,t){const n=KY(e._location.path,t),r=new Kn(e._location.bucket,n);return new ea(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pW(e){return/^[A-Za-z]+:\/\//.test(e)}function mW(e,t){return new ea(e,t)}function dO(e,t){if(e instanceof J_){const n=e;if(n._bucket==null)throw EY();const r=new ea(n,n._bucket);return t!=null?dO(r,t):r}else return t!==void 0?fW(e,t):e}function gW(e,t){if(t&&pW(t)){if(e instanceof J_)return mW(e,t);throw Zy("To use ref(service, url), the first argument must be a Storage instance.")}else return dO(e,t)}function Qx(e,t){const n=t==null?void 0:t[JN];return n==null?null:Kn.makeFromBucketSpec(n,e)}function vW(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:BI(i,e.app.options.projectId))}class J_{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=XN,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hY,this._maxUploadRetryTime=dY,this._requests=new Set,i!=null?this._bucket=Kn.makeFromBucketSpec(i,this._host):this._bucket=Qx(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Kn.makeFromBucketSpec(this._url,t):this._bucket=Qx(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Kx("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Kx("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ea(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new DY(ZN());{const o=FY(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Xx="@firebase/storage",Jx="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO="storage";function Xm(e,t,n){return e=Xt(e),hW(e,t,n)}function Jm(e){return e=Xt(e),dW(e)}function co(e,t){return e=Xt(e),gW(e,t)}function yW(e=Bw(),t){e=Xt(e);const r=ym(e,fO).getImmediate({identifier:t}),i=FI("storage");return i&&wW(r,...i),r}function wW(e,t,n,r={}){vW(e,t,n,r)}function _W(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new J_(n,r,i,t,aa)}function SW(){qo(new Qs(fO,_W,"PUBLIC").setMultipleInstances(!0)),ni(Xx,Jx,""),ni(Xx,Jx,"esm2017")}SW();const EW={apiKey:"AIzaSyB6eD_2vEo_ZIjZbDoRg7cX92y81sB0Auc",authDomain:"myclothesapp-cf59a.firebaseapp.com",projectId:"myclothesapp-cf59a",storageBucket:"myclothesapp-cf59a.appspot.com",messagingSenderId:"610226156284",appId:"1:610226156284:web:9336ebebf0a17d99eb1d79",measurementId:"G-LNG72F75QC"},pO=jI(EW),ta=aB(pO),Sr=Xj(pO),Zm=yW(),e1=_r("login/googleLogin",async()=>{const e=new bi,n=(await g7(ta,e)).user;console.log(n);const r=kh(Sr,"users",n.uid);return(await G_(r)).data()}),t1=_r("auth/login",async e=>{try{const{email:t,password:n}=e;await mb(ta,Kw);const i=(await G9(ta,t,n)).user,s=kh(Sr,"users",i.uid),o=await G_(s);if(!o.exists())throw new Error("\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC720\uC800\uC785\uB2C8\uB2E4.");return o.data()}catch(t){return Lw(t.message)}}),n1=_r("auth/signOut",async()=>{try{await Q9(ta),await mb(ta,Kw)}catch(e){return Lw(e.message)}}),CW=()=>e=>{ta.onAuthStateChanged(async t=>{if(t){const n=kh(Sr,"users",t.uid),r=await G_(n);if(r.exists()){const i=r.data();e({type:"login/loginSuccess",payload:i}),localStorage.setItem("user",JSON.stringify(i))}}else e({type:"login/logout"}),localStorage.removeItem("user")})},kW=()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):null},xW=oa({name:"login",initialState:{user:kW()},extraReducers:e=>{e.addCase(`${e1.fulfilled}`,(t,n)=>{t.user=n.payload}),e.addCase(`${e1.rejected}`,(t,n)=>{alert("\uB85C\uADF8\uC778 \uC2E4\uD328!"),console.log(n.payload)}),e.addCase(`${t1.fulfilled}`,(t,n)=>{t.user=n.payload}),e.addCase(`${t1.rejected}`,(t,n)=>n.error),e.addCase(`${n1.fulfilled}`,(t,n)=>{alert("\uB85C\uADF8\uC544\uC6C3 \uC131\uACF5!"),t.user=null}),e.addCase(`${n1.rejected}`,(t,n)=>{alert("\uB85C\uADF8\uC544\uC6C3 \uC2E4\uD328!"),console.log(n.payload)})}});var TW=xW.reducer,mO={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Zx=Kt.createContext&&Kt.createContext(mO),Ys=globalThis&&globalThis.__assign||function(){return Ys=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ys.apply(this,arguments)},DW=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function gO(e){return e&&e.map(function(t,n){return Kt.createElement(t.tag,Ys({key:n},t.attr),gO(t.child))})}function Er(e){return function(t){return Kt.createElement(IW,Ys({attr:Ys({},e.attr)},t),gO(e.child))}}function IW(e){var t=function(n){var r=e.attr,i=e.size,s=e.title,o=DW(e,["attr","size","title"]),a=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),Kt.createElement("svg",Ys({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Ys(Ys({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Kt.createElement("title",null,s),e.children)};return Zx!==void 0?Kt.createElement(Zx.Consumer,null,function(n){return t(n)}):t(mO)}function bW(e){return Er({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(e)}function AW(e){return Er({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}}]})(e)}function NW(e){return Er({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z"}}]})(e)}function OW(e){return Er({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"}}]})(e)}function RW(e){return Er({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44z"}}]})(e)}function eg(e){return Er({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z"}}]})(e)}function PW(e){return Er({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"}}]})(e)}function MW(e){return Er({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M3,3 L21,21 M3,21 L21,3"}}]})(e)}const LW=({toggle:e,toggleMenu:t})=>{const[n,r]=L.exports.useState(!1),[i,s]=L.exports.useState(null),o=vt(x=>x.login.user),a=yr(),u=eh(),c=ln(),d=o==null?void 0:o.nickname,p=()=>{confirm("\uC815\uB9D0 \uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&(c(n1()),a("/"))},m=x=>{s(x),window.innerWidth<=768&&y()},y=()=>{s(null),t()},_=()=>o?O("div",{className:"users",children:[w("li",{className:"item user_nickname",children:w(Nn,{to:"/account",onClick:()=>m(null),children:d})}),w("li",{className:"item logOut",children:w("span",{onClick:p,children:w(PW,{})})})]}):w("div",{className:"users sign",children:w("li",{className:"item_account",children:w(Nn,{to:"account/login",className:"account",onClick:()=>m(null),children:"\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785"})})});return L.exports.useEffect(()=>{const x=()=>{window.scrollY>=60?r(!0):r(!1)};return window.addEventListener("scroll",x),()=>{window.removeEventListener("scroll",x)}},[]),u.pathname==="/account/signup"||u.pathname==="/account/login"?null:w(eF,{style:{borderBottom:n?"1px solid #e3e3e3":""},children:O("div",{className:"contents",children:[w("div",{className:"logo",children:w("h1",{onClick:()=>{a("/"),s(null)},children:"ModArt"})}),O("ul",{className:`navbar${e?" mobile":""}`,children:[O("div",{className:"list",children:[w("li",{className:`item ${i===0?"active":""}`,children:w(Nn,{to:"/",onClick:m,children:"HOME"})}),w("li",{className:`item ${i===1?"active":""}`,children:w(Nn,{to:"/board",onClick:()=>m(1),children:"OOTD"})}),w("li",{className:`item ${i===2?"active":""}`,children:w(Nn,{to:"/photo",onClick:()=>m(2),children:"Photo"})}),w("li",{className:`item ${i===3?"active":""}`,children:w(Nn,{to:"/today",onClick:()=>m(3),children:"TodayStory"})}),w("li",{className:`item ${i===4?"active":""}`,children:w(Nn,{to:"/qna",onClick:()=>m(4),children:"QnA"})})]}),_()]}),w("div",{className:"toggle",onClick:y,children:e?w(MW,{}):w(bW,{})})]})})};var $W=Kt.memo(LW);function eT(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function FW(e,t,n){return t&&eT(e.prototype,t),n&&eT(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var tT="(prefers-reduced-motion: reduce)",ja=1,UW=2,Il=3,Gl=4,Th=5,of=6,_p=7,BW={CREATED:ja,MOUNTED:UW,IDLE:Il,MOVING:Gl,SCROLLING:Th,DRAGGING:of,DESTROYED:_p};function es(e){e.length=0}function ho(e,t,n){return Array.prototype.slice.call(e,t,n)}function nt(e){return e.bind.apply(e,[null].concat(ho(arguments,1)))}var vO=setTimeout,r1=function(){};function nT(e){return requestAnimationFrame(e)}function tg(e,t){return typeof t===e}function Fc(e){return!eS(e)&&tg("object",e)}var Z_=Array.isArray,yO=nt(tg,"function"),to=nt(tg,"string"),Dh=nt(tg,"undefined");function eS(e){return e===null}function wO(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Ih(e){return Z_(e)?e:[e]}function vr(e,t){Ih(e).forEach(t)}function tS(e,t){return e.indexOf(t)>-1}function af(e,t){return e.push.apply(e,Ih(t)),e}function Li(e,t,n){e&&vr(t,function(r){r&&e.classList[n?"add":"remove"](r)})}function ui(e,t){Li(e,to(t)?t.split(" "):t,!0)}function bh(e,t){vr(t,e.appendChild.bind(e))}function nS(e,t){vr(e,function(n){var r=(t||n).parentNode;r&&r.insertBefore(n,t)})}function Uc(e,t){return wO(e)&&(e.msMatchesSelector||e.matches).call(e,t)}function _O(e,t){var n=e?ho(e.children):[];return t?n.filter(function(r){return Uc(r,t)}):n}function Ah(e,t){return t?_O(e,t)[0]:e.firstElementChild}var Bc=Object.keys;function Fo(e,t,n){return e&&(n?Bc(e).reverse():Bc(e)).forEach(function(r){r!=="__proto__"&&t(e[r],r)}),e}function Vc(e){return ho(arguments,1).forEach(function(t){Fo(t,function(n,r){e[r]=t[r]})}),e}function Ts(e){return ho(arguments,1).forEach(function(t){Fo(t,function(n,r){Z_(n)?e[r]=n.slice():Fc(n)?e[r]=Ts({},Fc(e[r])?e[r]:{},n):e[r]=n})}),e}function rT(e,t){vr(t||Bc(e),function(n){delete e[n]})}function ci(e,t){vr(e,function(n){vr(t,function(r){n&&n.removeAttribute(r)})})}function Ie(e,t,n){Fc(t)?Fo(t,function(r,i){Ie(e,i,r)}):vr(e,function(r){eS(n)||n===""?ci(r,t):r.setAttribute(t,String(n))})}function sl(e,t,n){var r=document.createElement(e);return t&&(to(t)?ui(r,t):Ie(r,t)),n&&bh(n,r),r}function Nr(e,t,n){if(Dh(n))return getComputedStyle(e)[t];eS(n)||(e.style[t]=""+n)}function zc(e,t){Nr(e,"display",t)}function SO(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function Pr(e,t){return e.getAttribute(t)}function iT(e,t){return e&&e.classList.contains(t)}function ar(e){return e.getBoundingClientRect()}function na(e){vr(e,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function EO(e){return Ah(new DOMParser().parseFromString(e,"text/html").body)}function Ii(e,t){e.preventDefault(),t&&(e.stopPropagation(),e.stopImmediatePropagation())}function CO(e,t){return e&&e.querySelector(t)}function rS(e,t){return t?ho(e.querySelectorAll(t)):[]}function $i(e,t){Li(e,t,!1)}function i1(e){return e.timeStamp}function wo(e){return to(e)?e:e?e+"px":""}var Nh="splide",iS="data-"+Nh;function Qu(e,t){if(!e)throw new Error("["+Nh+"] "+(t||""))}var no=Math.min,Sp=Math.max,Ep=Math.floor,jc=Math.ceil,Bn=Math.abs;function kO(e,t,n){return Bn(e-t)<n}function lf(e,t,n,r){var i=no(t,n),s=Sp(t,n);return r?i<e&&e<s:i<=e&&e<=s}function Ta(e,t,n){var r=no(t,n),i=Sp(t,n);return no(Sp(r,e),i)}function s1(e){return+(e>0)-+(e<0)}function o1(e,t){return vr(t,function(n){e=e.replace("%s",""+n)}),e}function sS(e){return e<10?"0"+e:""+e}var sT={};function VW(e){return""+e+sS(sT[e]=(sT[e]||0)+1)}function xO(){var e=[];function t(o,a,u,c){i(o,a,function(d,p,m){var y="addEventListener"in d,_=y?d.removeEventListener.bind(d,p,u,c):d.removeListener.bind(d,u);y?d.addEventListener(p,u,c):d.addListener(u),e.push([d,p,m,u,_])})}function n(o,a,u){i(o,a,function(c,d,p){e=e.filter(function(m){return m[0]===c&&m[1]===d&&m[2]===p&&(!u||m[3]===u)?(m[4](),!1):!0})})}function r(o,a,u){var c,d=!0;return typeof CustomEvent=="function"?c=new CustomEvent(a,{bubbles:d,detail:u}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(a,d,!1,u)),o.dispatchEvent(c),c}function i(o,a,u){vr(o,function(c){c&&vr(a,function(d){d.split(" ").forEach(function(p){var m=p.split(".");u(c,m[0],m[1])})})})}function s(){e.forEach(function(o){o[4]()}),es(e)}return{bind:t,unbind:n,dispatch:r,destroy:s}}var fo="mounted",a1="ready",ts="move",ql="moved",oS="click",TO="active",DO="inactive",IO="visible",bO="hidden",Lt="refresh",Pn="updated",bl="resize",ng="resized",AO="drag",NO="dragging",OO="dragged",rg="scroll",da="scrolled",zW="overflow",aS="destroy",RO="arrows:mounted",PO="arrows:updated",MO="pagination:mounted",LO="pagination:updated",lS="navigation:mounted",uS="autoplay:play",$O="autoplay:playing",cS="autoplay:pause",hS="lazyload:loaded",FO="sk",UO="sh",Cp="ei";function Ct(e){var t=e?e.event.bus:document.createDocumentFragment(),n=xO();function r(s,o){n.bind(t,Ih(s).join(" "),function(a){o.apply(o,Z_(a.detail)?a.detail:[])})}function i(s){n.dispatch(t,s,ho(arguments,1))}return e&&e.event.on(aS,n.destroy),Vc(n,{bus:t,on:r,off:nt(n.unbind,t),emit:i})}function ig(e,t,n,r){var i=Date.now,s,o=0,a,u=!0,c=0;function d(){if(!u){if(o=e?no((i()-s)/e,1):1,n&&n(o),o>=1&&(t(),s=i(),r&&++c>=r))return m();a=nT(d)}}function p(E){E||_(),s=i()-(E?o*e:0),u=!1,a=nT(d)}function m(){u=!0}function y(){s=i(),o=0,n&&n(o)}function _(){a&&cancelAnimationFrame(a),o=0,a=0,u=!0}function S(E){e=E}function x(){return u}return{start:p,rewind:y,pause:m,cancel:_,set:S,isPaused:x}}function jW(e){var t=e;function n(i){t=i}function r(i){return tS(Ih(i),t)}return{set:n,is:r}}function YW(e,t){var n=ig(t||0,e,null,1);return function(){n.isPaused()&&n.start()}}function WW(e,t,n){var r=e.state,i=n.breakpoints||{},s=n.reducedMotion||{},o=xO(),a=[];function u(){var _=n.mediaQuery==="min";Bc(i).sort(function(S,x){return _?+S-+x:+x-+S}).forEach(function(S){d(i[S],"("+(_?"min":"max")+"-width:"+S+"px)")}),d(s,tT),p()}function c(_){_&&o.destroy()}function d(_,S){var x=matchMedia(S);o.bind(x,"change",p),a.push([_,x])}function p(){var _=r.is(_p),S=n.direction,x=a.reduce(function(E,v){return Ts(E,v[1].matches?v[0]:{})},{});rT(n),y(x),n.destroy?e.destroy(n.destroy==="completely"):_?(c(!0),e.mount()):S!==n.direction&&e.refresh()}function m(_){matchMedia(tT).matches&&(_?Ts(n,s):rT(n,Bc(s)))}function y(_,S,x){Ts(n,_),S&&Ts(Object.getPrototypeOf(n),_),(x||!r.is(ja))&&e.emit(Pn,n)}return{setup:u,destroy:c,reduce:m,set:y}}var sg="Arrow",og=sg+"Left",ag=sg+"Right",BO=sg+"Up",VO=sg+"Down",oT="rtl",lg="ttb",nv={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[BO,ag],ArrowRight:[VO,og]};function HW(e,t,n){function r(s,o,a){a=a||n.direction;var u=a===oT&&!o?1:a===lg?0:-1;return nv[s]&&nv[s][u]||s.replace(/width|left|right/i,function(c,d){var p=nv[c.toLowerCase()][u]||c;return d>0?p.charAt(0).toUpperCase()+p.slice(1):p})}function i(s){return s*(n.direction===oT?1:-1)}return{resolve:r,orient:i}}var zi="role",ol="tabindex",GW="disabled",zr="aria-",Oh=zr+"controls",zO=zr+"current",aT=zr+"selected",dr=zr+"label",dS=zr+"labelledby",jO=zr+"hidden",fS=zr+"orientation",Yc=zr+"roledescription",lT=zr+"live",uT=zr+"busy",cT=zr+"atomic",pS=[zi,ol,GW,Oh,zO,dr,dS,jO,fS,Yc],fi=Nh+"__",po="is-",rv=Nh,hT=fi+"track",qW=fi+"list",ug=fi+"slide",YO=ug+"--clone",KW=ug+"__container",mS=fi+"arrows",cg=fi+"arrow",WO=cg+"--prev",HO=cg+"--next",hg=fi+"pagination",GO=hg+"__page",QW=fi+"progress",XW=QW+"__bar",JW=fi+"toggle",ZW=fi+"spinner",eH=fi+"sr",tH=po+"initialized",ra=po+"active",qO=po+"prev",KO=po+"next",l1=po+"visible",u1=po+"loading",QO=po+"focus-in",XO=po+"overflow",nH=[ra,l1,qO,KO,u1,QO,XO],rH={slide:ug,clone:YO,arrows:mS,arrow:cg,prev:WO,next:HO,pagination:hg,page:GO,spinner:ZW};function iH(e,t){if(yO(e.closest))return e.closest(t);for(var n=e;n&&n.nodeType===1&&!Uc(n,t);)n=n.parentElement;return n}var sH=5,dT=200,JO="touchstart mousedown",iv="touchmove mousemove",sv="touchend touchcancel mouseup click";function oH(e,t,n){var r=Ct(e),i=r.on,s=r.bind,o=e.root,a=n.i18n,u={},c=[],d=[],p=[],m,y,_;function S(){k(),T(),v()}function x(){i(Lt,E),i(Lt,S),i(Pn,v),s(document,JO+" keydown",function(A){_=A.type==="keydown"},{capture:!0}),s(o,"focusin",function(){Li(o,QO,!!_)})}function E(A){var N=pS.concat("style");es(c),$i(o,d),$i(m,p),ci([m,y],N),ci(o,A?N:["style",Yc])}function v(){$i(o,d),$i(m,p),d=R(rv),p=R(hT),ui(o,d),ui(m,p),Ie(o,dr,n.label),Ie(o,dS,n.labelledby)}function k(){m=b("."+hT),y=Ah(m,"."+qW),Qu(m&&y,"A track/list element is missing."),af(c,_O(y,"."+ug+":not(."+YO+")")),Fo({arrows:mS,pagination:hg,prev:WO,next:HO,bar:XW,toggle:JW},function(A,N){u[N]=b("."+A)}),Vc(u,{root:o,track:m,list:y,slides:c})}function T(){var A=o.id||VW(Nh),N=n.role;o.id=A,m.id=m.id||A+"-track",y.id=y.id||A+"-list",!Pr(o,zi)&&o.tagName!=="SECTION"&&N&&Ie(o,zi,N),Ie(o,Yc,a.carousel),Ie(y,zi,"presentation")}function b(A){var N=CO(o,A);return N&&iH(N,"."+rv)===o?N:void 0}function R(A){return[A+"--"+n.type,A+"--"+n.direction,n.drag&&A+"--draggable",n.isNavigation&&A+"--nav",A===rv&&ra]}return Vc(u,{setup:S,mount:x,destroy:E})}var Al="slide",Kl="loop",Rh="fade";function aH(e,t,n,r){var i=Ct(e),s=i.on,o=i.emit,a=i.bind,u=e.Components,c=e.root,d=e.options,p=d.isNavigation,m=d.updateOnMove,y=d.i18n,_=d.pagination,S=d.slideFocus,x=u.Direction.resolve,E=Pr(r,"style"),v=Pr(r,dr),k=n>-1,T=Ah(r,"."+KW),b;function R(){k||(r.id=c.id+"-slide"+sS(t+1),Ie(r,zi,_?"tabpanel":"group"),Ie(r,Yc,y.slide),Ie(r,dr,v||o1(y.slideLabel,[t+1,e.length]))),A()}function A(){a(r,"click",nt(o,oS,$)),a(r,"keydown",nt(o,FO,$)),s([ql,UO,da],j),s(lS,Z),m&&s(ts,F)}function N(){b=!0,i.destroy(),$i(r,nH),ci(r,pS),Ie(r,"style",E),Ie(r,dr,v||"")}function Z(){var z=e.splides.map(function(P){var ee=P.splide.Components.Slides.getAt(t);return ee?ee.slide.id:""}).join(" ");Ie(r,dr,o1(y.slideX,(k?n:t)+1)),Ie(r,Oh,z),Ie(r,zi,S?"button":""),S&&ci(r,Yc)}function F(){b||j()}function j(){if(!b){var z=e.index;J(),X(),Li(r,qO,t===z-1),Li(r,KO,t===z+1)}}function J(){var z=oe();z!==iT(r,ra)&&(Li(r,ra,z),Ie(r,zO,p&&z||""),o(z?TO:DO,$))}function X(){var z=Te(),P=!z&&(!oe()||k);if(e.state.is([Gl,Th])||Ie(r,jO,P||""),Ie(rS(r,d.focusableNodes||""),ol,P?-1:""),S&&Ie(r,ol,P?-1:0),z!==iT(r,l1)&&(Li(r,l1,z),o(z?IO:bO,$)),!z&&document.activeElement===r){var ee=u.Slides.getAt(e.index);ee&&SO(ee.slide)}}function ue(z,P,ee){Nr(ee&&T||r,z,P)}function oe(){var z=e.index;return z===t||d.cloneStatus&&z===n}function Te(){if(e.is(Rh))return oe();var z=ar(u.Elements.track),P=ar(r),ee=x("left",!0),U=x("right",!0);return Ep(z[ee])<=jc(P[ee])&&Ep(P[U])<=jc(z[U])}function ge(z,P){var ee=Bn(z-t);return!k&&(d.rewind||e.is(Kl))&&(ee=no(ee,e.length-ee)),ee<=P}var $={index:t,slideIndex:n,slide:r,container:T,isClone:k,mount:R,destroy:N,update:j,style:ue,isWithin:ge};return $}function lH(e,t,n){var r=Ct(e),i=r.on,s=r.emit,o=r.bind,a=t.Elements,u=a.slides,c=a.list,d=[];function p(){m(),i(Lt,y),i(Lt,m)}function m(){u.forEach(function(j,J){S(j,J,-1)})}function y(){b(function(j){j.destroy()}),es(d)}function _(){b(function(j){j.update()})}function S(j,J,X){var ue=aH(e,J,X,j);ue.mount(),d.push(ue),d.sort(function(oe,Te){return oe.index-Te.index})}function x(j){return j?R(function(J){return!J.isClone}):d}function E(j){var J=t.Controller,X=J.toIndex(j),ue=J.hasFocus()?1:n.perPage;return R(function(oe){return lf(oe.index,X,X+ue-1)})}function v(j){return R(j)[0]}function k(j,J){vr(j,function(X){if(to(X)&&(X=EO(X)),wO(X)){var ue=u[J];ue?nS(X,ue):bh(c,X),ui(X,n.classes.slide),N(X,nt(s,bl))}}),s(Lt)}function T(j){na(R(j).map(function(J){return J.slide})),s(Lt)}function b(j,J){x(J).forEach(j)}function R(j){return d.filter(yO(j)?j:function(J){return to(j)?Uc(J.slide,j):tS(Ih(j),J.index)})}function A(j,J,X){b(function(ue){ue.style(j,J,X)})}function N(j,J){var X=rS(j,"img"),ue=X.length;ue?X.forEach(function(oe){o(oe,"load error",function(){--ue||J()})}):J()}function Z(j){return j?u.length:d.length}function F(){return d.length>n.perPage}return{mount:p,destroy:y,update:_,register:S,get:x,getIn:E,getAt:v,add:k,remove:T,forEach:b,filter:R,style:A,getLength:Z,isEnough:F}}function uH(e,t,n){var r=Ct(e),i=r.on,s=r.bind,o=r.emit,a=t.Slides,u=t.Direction.resolve,c=t.Elements,d=c.root,p=c.track,m=c.list,y=a.getAt,_=a.style,S,x,E;function v(){k(),s(window,"resize load",YW(nt(o,bl))),i([Pn,Lt],k),i(bl,T)}function k(){S=n.direction===lg,Nr(d,"maxWidth",wo(n.width)),Nr(p,u("paddingLeft"),b(!1)),Nr(p,u("paddingRight"),b(!0)),T(!0)}function T($){var z=ar(d);($||x.width!==z.width||x.height!==z.height)&&(Nr(p,"height",R()),_(u("marginRight"),wo(n.gap)),_("width",N()),_("height",Z(),!0),x=z,o(ng),E!==(E=ge())&&(Li(d,XO,E),o(zW,E)))}function b($){var z=n.padding,P=u($?"right":"left");return z&&wo(z[P]||(Fc(z)?0:z))||"0px"}function R(){var $="";return S&&($=A(),Qu($,"height or heightRatio is missing."),$="calc("+$+" - "+b(!1)+" - "+b(!0)+")"),$}function A(){return wo(n.height||ar(m).width*n.heightRatio)}function N(){return n.autoWidth?null:wo(n.fixedWidth)||(S?"":F())}function Z(){return wo(n.fixedHeight)||(S?n.autoHeight?null:F():A())}function F(){var $=wo(n.gap);return"calc((100%"+($&&" + "+$)+")/"+(n.perPage||1)+($&&" - "+$)+")"}function j(){return ar(m)[u("width")]}function J($,z){var P=y($||0);return P?ar(P.slide)[u("width")]+(z?0:oe()):0}function X($,z){var P=y($);if(P){var ee=ar(P.slide)[u("right")],U=ar(m)[u("left")];return Bn(ee-U)+(z?0:oe())}return 0}function ue($){return X(e.length-1)-X(0)+J(0,$)}function oe(){var $=y(0);return $&&parseFloat(Nr($.slide,u("marginRight")))||0}function Te($){return parseFloat(Nr(p,u("padding"+($?"Right":"Left"))))||0}function ge(){return e.is(Rh)||ue(!0)>j()}return{mount:v,resize:T,listSize:j,slideSize:J,sliderSize:ue,totalSize:X,getPadding:Te,isOverflow:ge}}var cH=2;function hH(e,t,n){var r=Ct(e),i=r.on,s=t.Elements,o=t.Slides,a=t.Direction.resolve,u=[],c;function d(){i(Lt,p),i([Pn,bl],y),(c=x())&&(_(c),t.Layout.resize(!0))}function p(){m(),d()}function m(){na(u),es(u),r.destroy()}function y(){var E=x();c!==E&&(c<E||!E)&&r.emit(Lt)}function _(E){var v=o.get().slice(),k=v.length;if(k){for(;v.length<E;)af(v,v);af(v.slice(-E),v.slice(0,E)).forEach(function(T,b){var R=b<E,A=S(T.slide,b);R?nS(A,v[0].slide):bh(s.list,A),af(u,A),o.register(A,b-E+(R?0:k),T.index)})}}function S(E,v){var k=E.cloneNode(!0);return ui(k,n.classes.clone),k.id=e.root.id+"-clone"+sS(v+1),k}function x(){var E=n.clones;if(!e.is(Kl))E=0;else if(Dh(E)){var v=n[a("fixedWidth")]&&t.Layout.slideSize(0),k=v&&jc(ar(s.track)[a("width")]/v);E=k||n[a("autoWidth")]&&e.length||n.perPage*cH}return E}return{mount:d,destroy:m}}function dH(e,t,n){var r=Ct(e),i=r.on,s=r.emit,o=e.state.set,a=t.Layout,u=a.slideSize,c=a.getPadding,d=a.totalSize,p=a.listSize,m=a.sliderSize,y=t.Direction,_=y.resolve,S=y.orient,x=t.Elements,E=x.list,v=x.track,k;function T(){k=t.Transition,i([fo,ng,Pn,Lt],b)}function b(){t.Controller.isBusy()||(t.Scroll.cancel(),A(e.index),t.Slides.update())}function R(P,ee,U,B){P!==ee&&$(P>U)&&(j(),N(F(ue(),P>U),!0)),o(Gl),s(ts,ee,U,P),k.start(ee,function(){o(Il),s(ql,ee,U,P),B&&B()})}function A(P){N(X(P,!0))}function N(P,ee){if(!e.is(Rh)){var U=ee?P:Z(P);Nr(E,"transform","translate"+_("X")+"("+U+"px)"),P!==U&&s(UO)}}function Z(P){if(e.is(Kl)){var ee=J(P),U=ee>t.Controller.getEnd(),B=ee<0;(B||U)&&(P=F(P,U))}return P}function F(P,ee){var U=P-ge(ee),B=m();return P-=S(B*(jc(Bn(U)/B)||1))*(ee?1:-1),P}function j(){N(ue(),!0),k.cancel()}function J(P){for(var ee=t.Slides.get(),U=0,B=1/0,Y=0;Y<ee.length;Y++){var V=ee[Y].index,D=Bn(X(V,!0)-P);if(D<=B)B=D,U=V;else break}return U}function X(P,ee){var U=S(d(P-1)-Te(P));return ee?oe(U):U}function ue(){var P=_("left");return ar(E)[P]-ar(v)[P]+S(c(!1))}function oe(P){return n.trimSpace&&e.is(Al)&&(P=Ta(P,0,S(m(!0)-p()))),P}function Te(P){var ee=n.focus;return ee==="center"?(p()-u(P,!0))/2:+ee*u(P)||0}function ge(P){return X(P?t.Controller.getEnd():0,!!n.trimSpace)}function $(P){var ee=S(F(ue(),P));return P?ee>=0:ee<=E[_("scrollWidth")]-ar(v)[_("width")]}function z(P,ee){ee=Dh(ee)?ue():ee;var U=P!==!0&&S(ee)<S(ge(!1)),B=P!==!1&&S(ee)>S(ge(!0));return U||B}return{mount:T,move:R,jump:A,translate:N,shift:F,cancel:j,toIndex:J,toPosition:X,getPosition:ue,getLimit:ge,exceededLimit:z,reposition:b}}function fH(e,t,n){var r=Ct(e),i=r.on,s=r.emit,o=t.Move,a=o.getPosition,u=o.getLimit,c=o.toPosition,d=t.Slides,p=d.isEnough,m=d.getLength,y=n.omitEnd,_=e.is(Kl),S=e.is(Al),x=nt(ue,!1),E=nt(ue,!0),v=n.start||0,k,T=v,b,R,A;function N(){Z(),i([Pn,Lt,Cp],Z),i(ng,F)}function Z(){b=m(!0),R=n.perMove,A=n.perPage,k=$();var D=Ta(v,0,y?k:b-1);D!==v&&(v=D,o.reposition())}function F(){k!==$()&&s(Cp)}function j(D,le,W){if(!V()){var we=X(D),me=ge(we);me>-1&&(le||me!==v)&&(U(me),o.move(we,me,T,W))}}function J(D,le,W,we){t.Scroll.scroll(D,le,W,function(){var me=ge(o.toIndex(a()));U(y?no(me,k):me),we&&we()})}function X(D){var le=v;if(to(D)){var W=D.match(/([+\-<>])(\d+)?/)||[],we=W[1],me=W[2];we==="+"||we==="-"?le=oe(v+ +(""+we+(+me||1)),v):we===">"?le=me?z(+me):x(!0):we==="<"&&(le=E(!0))}else le=_?D:Ta(D,0,k);return le}function ue(D,le){var W=R||(Y()?1:A),we=oe(v+W*(D?-1:1),v,!(R||Y()));return we===-1&&S&&!kO(a(),u(!D),1)?D?0:k:le?we:ge(we)}function oe(D,le,W){if(p()||Y()){var we=Te(D);we!==D&&(le=D,D=we,W=!1),D<0||D>k?!R&&(lf(0,D,le,!0)||lf(k,le,D,!0))?D=z(P(D)):_?D=W?D<0?-(b%A||A):b:D:n.rewind?D=D<0?k:0:D=-1:W&&D!==le&&(D=z(P(le)+(D<le?-1:1)))}else D=-1;return D}function Te(D){if(S&&n.trimSpace==="move"&&D!==v)for(var le=a();le===c(D,!0)&&lf(D,0,e.length-1,!n.rewind);)D<v?--D:++D;return D}function ge(D){return _?(D+b)%b||0:D}function $(){for(var D=b-(Y()||_&&R?1:A);y&&D-- >0;)if(c(b-1,!0)!==c(D,!0)){D++;break}return Ta(D,0,b-1)}function z(D){return Ta(Y()?D:A*D,0,k)}function P(D){return Y()?no(D,k):Ep((D>=k?b-1:D)/A)}function ee(D){var le=o.toIndex(D);return S?Ta(le,0,k):le}function U(D){D!==v&&(T=v,v=D)}function B(D){return D?T:v}function Y(){return!Dh(n.focus)||n.isNavigation}function V(){return e.state.is([Gl,Th])&&!!n.waitForTransition}return{mount:N,go:j,scroll:J,getNext:x,getPrev:E,getAdjacent:ue,getEnd:$,setIndex:U,getIndex:B,toIndex:z,toPage:P,toDest:ee,hasFocus:Y,isBusy:V}}var pH="http://www.w3.org/2000/svg",mH="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",Md=40;function gH(e,t,n){var r=Ct(e),i=r.on,s=r.bind,o=r.emit,a=n.classes,u=n.i18n,c=t.Elements,d=t.Controller,p=c.arrows,m=c.track,y=p,_=c.prev,S=c.next,x,E,v={};function k(){b(),i(Pn,T)}function T(){R(),k()}function b(){var J=n.arrows;J&&!(_&&S)&&Z(),_&&S&&(Vc(v,{prev:_,next:S}),zc(y,J?"":"none"),ui(y,E=mS+"--"+n.direction),J&&(A(),j(),Ie([_,S],Oh,m.id),o(RO,_,S)))}function R(){r.destroy(),$i(y,E),x?(na(p?[_,S]:y),_=S=null):ci([_,S],pS)}function A(){i([fo,ql,Lt,da,Cp],j),s(S,"click",nt(N,">")),s(_,"click",nt(N,"<"))}function N(J){d.go(J,!0)}function Z(){y=p||sl("div",a.arrows),_=F(!0),S=F(!1),x=!0,bh(y,[_,S]),!p&&nS(y,m)}function F(J){var X='<button class="'+a.arrow+" "+(J?a.prev:a.next)+'" type="button"><svg xmlns="'+pH+'" viewBox="0 0 '+Md+" "+Md+'" width="'+Md+'" height="'+Md+'" focusable="false"><path d="'+(n.arrowPath||mH)+'" />';return EO(X)}function j(){if(_&&S){var J=e.index,X=d.getPrev(),ue=d.getNext(),oe=X>-1&&J<X?u.last:u.prev,Te=ue>-1&&J>ue?u.first:u.next;_.disabled=X<0,S.disabled=ue<0,Ie(_,dr,oe),Ie(S,dr,Te),o(PO,_,S,X,ue)}}return{arrows:v,mount:k,destroy:R,update:j}}var vH=iS+"-interval";function yH(e,t,n){var r=Ct(e),i=r.on,s=r.bind,o=r.emit,a=ig(n.interval,e.go.bind(e,">"),A),u=a.isPaused,c=t.Elements,d=t.Elements,p=d.root,m=d.toggle,y=n.autoplay,_,S,x=y==="pause";function E(){y&&(v(),m&&Ie(m,Oh,c.track.id),x||k(),R())}function v(){n.pauseOnHover&&s(p,"mouseenter mouseleave",function(Z){_=Z.type==="mouseenter",b()}),n.pauseOnFocus&&s(p,"focusin focusout",function(Z){S=Z.type==="focusin",b()}),m&&s(m,"click",function(){x?k():T(!0)}),i([ts,rg,Lt],a.rewind),i(ts,N)}function k(){u()&&t.Slides.isEnough()&&(a.start(!n.resetProgress),S=_=x=!1,R(),o(uS))}function T(Z){Z===void 0&&(Z=!0),x=!!Z,R(),u()||(a.pause(),o(cS))}function b(){x||(_||S?T(!1):k())}function R(){m&&(Li(m,ra,!x),Ie(m,dr,n.i18n[x?"play":"pause"]))}function A(Z){var F=c.bar;F&&Nr(F,"width",Z*100+"%"),o($O,Z)}function N(Z){var F=t.Slides.getAt(Z);a.set(F&&+Pr(F.slide,vH)||n.interval)}return{mount:E,destroy:a.cancel,play:k,pause:T,isPaused:u}}function wH(e,t,n){var r=Ct(e),i=r.on;function s(){n.cover&&(i(hS,nt(a,!0)),i([fo,Pn,Lt],nt(o,!0)))}function o(u){t.Slides.forEach(function(c){var d=Ah(c.container||c.slide,"img");d&&d.src&&a(u,d,c)})}function a(u,c,d){d.style("background",u?'center/cover no-repeat url("'+c.src+'")':"",!0),zc(c,u?"none":"")}return{mount:s,destroy:nt(o,!1)}}var _H=10,SH=600,EH=.6,CH=1.5,kH=800;function xH(e,t,n){var r=Ct(e),i=r.on,s=r.emit,o=e.state.set,a=t.Move,u=a.getPosition,c=a.getLimit,d=a.exceededLimit,p=a.translate,m=e.is(Al),y,_,S=1;function x(){i(ts,T),i([Pn,Lt],b)}function E(A,N,Z,F,j){var J=u();if(T(),Z&&(!m||!d())){var X=t.Layout.sliderSize(),ue=s1(A)*X*Ep(Bn(A)/X)||0;A=a.toPosition(t.Controller.toDest(A%X))+ue}var oe=kO(J,A,1);S=1,N=oe?0:N||Sp(Bn(A-J)/CH,kH),_=F,y=ig(N,v,nt(k,J,A,j),1),o(Th),s(rg),y.start()}function v(){o(Il),_&&_(),s(da)}function k(A,N,Z,F){var j=u(),J=A+(N-A)*R(F),X=(J-j)*S;p(j+X),m&&!Z&&d()&&(S*=EH,Bn(X)<_H&&E(c(d(!0)),SH,!1,_,!0))}function T(){y&&y.cancel()}function b(){y&&!y.isPaused()&&(T(),v())}function R(A){var N=n.easingFunc;return N?N(A):1-Math.pow(1-A,4)}return{mount:x,destroy:T,scroll:E,cancel:b}}var Da={passive:!1,capture:!0};function TH(e,t,n){var r=Ct(e),i=r.on,s=r.emit,o=r.bind,a=r.unbind,u=e.state,c=t.Move,d=t.Scroll,p=t.Controller,m=t.Elements.track,y=t.Media.reduce,_=t.Direction,S=_.resolve,x=_.orient,E=c.getPosition,v=c.exceededLimit,k,T,b,R,A,N=!1,Z,F,j;function J(){o(m,iv,r1,Da),o(m,sv,r1,Da),o(m,JO,ue,Da),o(m,"click",ge,{capture:!0}),o(m,"dragstart",Ii),i([fo,Pn],X)}function X(){var ne=n.drag;_e(!ne),R=ne==="free"}function ue(ne){if(Z=!1,!F){var De=me(ne);we(ne.target)&&(De||!ne.button)&&(p.isBusy()?Ii(ne,!0):(j=De?m:window,A=u.is([Gl,Th]),b=null,o(j,iv,oe,Da),o(j,sv,Te,Da),c.cancel(),d.cancel(),$(ne)))}}function oe(ne){if(u.is(of)||(u.set(of),s(AO)),ne.cancelable)if(A){c.translate(k+W(Y(ne)));var De=V(ne)>dT,ke=N!==(N=v());(De||ke)&&$(ne),Z=!0,s(NO),Ii(ne)}else ee(ne)&&(A=P(ne),Ii(ne))}function Te(ne){u.is(of)&&(u.set(Il),s(OO)),A&&(z(ne),Ii(ne)),a(j,iv,oe),a(j,sv,Te),A=!1}function ge(ne){!F&&Z&&Ii(ne,!0)}function $(ne){b=T,T=ne,k=E()}function z(ne){var De=U(ne),ke=B(De),ct=n.rewind&&n.rewindByDrag;y(!1),R?p.scroll(ke,0,n.snap):e.is(Rh)?p.go(x(s1(De))<0?ct?"<":"-":ct?">":"+"):e.is(Al)&&N&&ct?p.go(v(!0)?">":"<"):p.go(p.toDest(ke),!0),y(!0)}function P(ne){var De=n.dragMinThreshold,ke=Fc(De),ct=ke&&De.mouse||0,Le=(ke?De.touch:+De)||10;return Bn(Y(ne))>(me(ne)?Le:ct)}function ee(ne){return Bn(Y(ne))>Bn(Y(ne,!0))}function U(ne){if(e.is(Kl)||!N){var De=V(ne);if(De&&De<dT)return Y(ne)/De}return 0}function B(ne){return E()+s1(ne)*no(Bn(ne)*(n.flickPower||600),R?1/0:t.Layout.listSize()*(n.flickMaxPages||1))}function Y(ne,De){return le(ne,De)-le(D(ne),De)}function V(ne){return i1(ne)-i1(D(ne))}function D(ne){return T===ne&&b||T}function le(ne,De){return(me(ne)?ne.changedTouches[0]:ne)["page"+S(De?"Y":"X")]}function W(ne){return ne/(N&&e.is(Al)?sH:1)}function we(ne){var De=n.noDrag;return!Uc(ne,"."+GO+", ."+cg)&&(!De||!Uc(ne,De))}function me(ne){return typeof TouchEvent!="undefined"&&ne instanceof TouchEvent}function Be(){return A}function _e(ne){F=ne}return{mount:J,disable:_e,isDragging:Be}}var DH={Spacebar:" ",Right:ag,Left:og,Up:BO,Down:VO};function gS(e){return e=to(e)?e:e.key,DH[e]||e}var fT="keydown";function IH(e,t,n){var r=Ct(e),i=r.on,s=r.bind,o=r.unbind,a=e.root,u=t.Direction.resolve,c,d;function p(){m(),i(Pn,y),i(Pn,m),i(ts,S)}function m(){var E=n.keyboard;E&&(c=E==="global"?window:a,s(c,fT,x))}function y(){o(c,fT)}function _(E){d=E}function S(){var E=d;d=!0,vO(function(){d=E})}function x(E){if(!d){var v=gS(E);v===u(og)?e.go("<"):v===u(ag)&&e.go(">")}}return{mount:p,destroy:y,disable:_}}var Xu=iS+"-lazy",uf=Xu+"-srcset",bH="["+Xu+"], ["+uf+"]";function AH(e,t,n){var r=Ct(e),i=r.on,s=r.off,o=r.bind,a=r.emit,u=n.lazyLoad==="sequential",c=[ql,da],d=[];function p(){n.lazyLoad&&(m(),i(Lt,m))}function m(){es(d),y(),u?E():(s(c),i(c,_),_())}function y(){t.Slides.forEach(function(v){rS(v.slide,bH).forEach(function(k){var T=Pr(k,Xu),b=Pr(k,uf);if(T!==k.src||b!==k.srcset){var R=n.classes.spinner,A=k.parentElement,N=Ah(A,"."+R)||sl("span",R,A);d.push([k,v,N]),k.src||zc(k,"none")}})})}function _(){d=d.filter(function(v){var k=n.perPage*((n.preloadPages||1)+1)-1;return v[1].isWithin(e.index,k)?S(v):!0}),d.length||s(c)}function S(v){var k=v[0];ui(v[1].slide,u1),o(k,"load error",nt(x,v)),Ie(k,"src",Pr(k,Xu)),Ie(k,"srcset",Pr(k,uf)),ci(k,Xu),ci(k,uf)}function x(v,k){var T=v[0],b=v[1];$i(b.slide,u1),k.type!=="error"&&(na(v[2]),zc(T,""),a(hS,T,b),a(bl)),u&&E()}function E(){d.length&&S(d.shift())}return{mount:p,destroy:nt(es,d),check:_}}function NH(e,t,n){var r=Ct(e),i=r.on,s=r.emit,o=r.bind,a=t.Slides,u=t.Elements,c=t.Controller,d=c.hasFocus,p=c.getIndex,m=c.go,y=t.Direction.resolve,_=u.pagination,S=[],x,E;function v(){k(),i([Pn,Lt,Cp],v);var F=n.pagination;_&&zc(_,F?"":"none"),F&&(i([ts,rg,da],Z),T(),Z(),s(MO,{list:x,items:S},N(e.index)))}function k(){x&&(na(_?ho(x.children):x),$i(x,E),es(S),x=null),r.destroy()}function T(){var F=e.length,j=n.classes,J=n.i18n,X=n.perPage,ue=d()?c.getEnd()+1:jc(F/X);x=_||sl("ul",j.pagination,u.track.parentElement),ui(x,E=hg+"--"+A()),Ie(x,zi,"tablist"),Ie(x,dr,J.select),Ie(x,fS,A()===lg?"vertical":"");for(var oe=0;oe<ue;oe++){var Te=sl("li",null,x),ge=sl("button",{class:j.page,type:"button"},Te),$=a.getIn(oe).map(function(P){return P.slide.id}),z=!d()&&X>1?J.pageX:J.slideX;o(ge,"click",nt(b,oe)),n.paginationKeyboard&&o(ge,"keydown",nt(R,oe)),Ie(Te,zi,"presentation"),Ie(ge,zi,"tab"),Ie(ge,Oh,$.join(" ")),Ie(ge,dr,o1(z,oe+1)),Ie(ge,ol,-1),S.push({li:Te,button:ge,page:oe})}}function b(F){m(">"+F,!0)}function R(F,j){var J=S.length,X=gS(j),ue=A(),oe=-1;X===y(ag,!1,ue)?oe=++F%J:X===y(og,!1,ue)?oe=(--F+J)%J:X==="Home"?oe=0:X==="End"&&(oe=J-1);var Te=S[oe];Te&&(SO(Te.button),m(">"+oe),Ii(j,!0))}function A(){return n.paginationDirection||n.direction}function N(F){return S[c.toPage(F)]}function Z(){var F=N(p(!0)),j=N(p());if(F){var J=F.button;$i(J,ra),ci(J,aT),Ie(J,ol,-1)}if(j){var X=j.button;ui(X,ra),Ie(X,aT,!0),Ie(X,ol,"")}s(LO,{list:x,items:S},F,j)}return{items:S,mount:v,destroy:k,getAt:N,update:Z}}var OH=[" ","Enter"];function RH(e,t,n){var r=n.isNavigation,i=n.slideFocus,s=[];function o(){e.splides.forEach(function(_){_.isParent||(c(e,_.splide),c(_.splide,e))}),r&&d()}function a(){s.forEach(function(_){_.destroy()}),es(s)}function u(){a(),o()}function c(_,S){var x=Ct(_);x.on(ts,function(E,v,k){S.go(S.is(Kl)?k:E)}),s.push(x)}function d(){var _=Ct(e),S=_.on;S(oS,m),S(FO,y),S([fo,Pn],p),s.push(_),_.emit(lS,e.splides)}function p(){Ie(t.Elements.list,fS,n.direction===lg?"vertical":"")}function m(_){e.go(_.index)}function y(_,S){tS(OH,gS(S))&&(m(_),Ii(S))}return{setup:nt(t.Media.set,{slideFocus:Dh(i)?r:i},!0),mount:o,destroy:a,remount:u}}function PH(e,t,n){var r=Ct(e),i=r.bind,s=0;function o(){n.wheel&&i(t.Elements.track,"wheel",a,Da)}function a(c){if(c.cancelable){var d=c.deltaY,p=d<0,m=i1(c),y=n.wheelMinThreshold||0,_=n.wheelSleep||0;Bn(d)>y&&m-s>_&&(e.go(p?"<":">"),s=m),u(p)&&Ii(c)}}function u(c){return!n.releaseWheel||e.state.is(Gl)||t.Controller.getAdjacent(c)!==-1}return{mount:o}}var MH=90;function LH(e,t,n){var r=Ct(e),i=r.on,s=t.Elements.track,o=n.live&&!n.isNavigation,a=sl("span",eH),u=ig(MH,nt(d,!1));function c(){o&&(m(!t.Autoplay.isPaused()),Ie(s,cT,!0),a.textContent="\u2026",i(uS,nt(m,!0)),i(cS,nt(m,!1)),i([ql,da],nt(d,!0)))}function d(y){Ie(s,uT,y),y?(bh(s,a),u.start()):(na(a),u.cancel())}function p(){ci(s,[lT,cT,uT]),na(a)}function m(y){o&&Ie(s,lT,y?"off":"polite")}return{mount:c,disable:m,destroy:p}}var $H=Object.freeze({__proto__:null,Media:WW,Direction:HW,Elements:oH,Slides:lH,Layout:uH,Clones:hH,Move:dH,Controller:fH,Arrows:gH,Autoplay:yH,Cover:wH,Scroll:xH,Drag:TH,Keyboard:IH,LazyLoad:AH,Pagination:NH,Sync:RH,Wheel:PH,Live:LH}),FH={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},UH={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:rH,i18n:FH,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function BH(e,t,n){var r=t.Slides;function i(){Ct(e).on([fo,Lt],s)}function s(){r.forEach(function(a){a.style("transform","translateX(-"+100*a.index+"%)")})}function o(a,u){r.style("transition","opacity "+n.speed+"ms "+n.easing),vO(u)}return{mount:i,start:o,cancel:r1}}function VH(e,t,n){var r=t.Move,i=t.Controller,s=t.Scroll,o=t.Elements.list,a=nt(Nr,o,"transition"),u;function c(){Ct(e).bind(o,"transitionend",function(y){y.target===o&&u&&(p(),u())})}function d(y,_){var S=r.toPosition(y,!0),x=r.getPosition(),E=m(y);Bn(S-x)>=1&&E>=1?n.useScroll?s.scroll(S,E,!1,_):(a("transform "+E+"ms "+n.easing),r.translate(S,!0),u=_):(r.jump(y),_())}function p(){a(""),s.cancel()}function m(y){var _=n.rewindSpeed;if(e.is(Al)&&_){var S=i.getIndex(!0),x=i.getEnd();if(S===0&&y>=x||S>=x&&y===0)return _}return n.speed}return{mount:c,start:d,cancel:p}}var zH=function(){function e(n,r){this.event=Ct(),this.Components={},this.state=jW(ja),this.splides=[],this._o={},this._E={};var i=to(n)?CO(document,n):n;Qu(i,i+" is invalid."),this.root=i,r=Ts({label:Pr(i,dr)||"",labelledby:Pr(i,dS)||""},UH,e.defaults,r||{});try{Ts(r,JSON.parse(Pr(i,iS)))}catch{Qu(!1,"Invalid JSON")}this._o=Object.create(Ts({},r))}var t=e.prototype;return t.mount=function(r,i){var s=this,o=this.state,a=this.Components;Qu(o.is([ja,_p]),"Already mounted!"),o.set(ja),this._C=a,this._T=i||this._T||(this.is(Rh)?BH:VH),this._E=r||this._E;var u=Vc({},$H,this._E,{Transition:this._T});return Fo(u,function(c,d){var p=c(s,a,s._o);a[d]=p,p.setup&&p.setup()}),Fo(a,function(c){c.mount&&c.mount()}),this.emit(fo),ui(this.root,tH),o.set(Il),this.emit(a1),this},t.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(Il)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},t.go=function(r){return this._C.Controller.go(r),this},t.on=function(r,i){return this.event.on(r,i),this},t.off=function(r){return this.event.off(r),this},t.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(ho(arguments,1))),this},t.add=function(r,i){return this._C.Slides.add(r,i),this},t.remove=function(r){return this._C.Slides.remove(r),this},t.is=function(r){return this._o.type===r},t.refresh=function(){return this.emit(Lt),this},t.destroy=function(r){r===void 0&&(r=!0);var i=this.event,s=this.state;return s.is(ja)?Ct(this).on(a1,this.destroy.bind(this,r)):(Fo(this._C,function(o){o.destroy&&o.destroy(r)},!0),i.emit(aS),i.destroy(),r&&es(this.splides),s.set(_p)),this},FW(e,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),vS=zH;vS.defaults={};vS.STATES=BW;var pT=[[fo,"onMounted"],[a1,"onReady"],[ts,"onMove"],[ql,"onMoved"],[oS,"onClick"],[TO,"onActive"],[DO,"onInactive"],[IO,"onVisible"],[bO,"onHidden"],[Lt,"onRefresh"],[Pn,"onUpdated"],[bl,"onResize"],[ng,"onResized"],[AO,"onDrag"],[NO,"onDragging"],[OO,"onDragged"],[rg,"onScroll"],[da,"onScrolled"],[aS,"onDestroy"],[RO,"onArrowsMounted"],[PO,"onArrowsUpdated"],[MO,"onPaginationMounted"],[LO,"onPaginationUpdated"],[lS,"onNavigationMounted"],[uS,"onAutoplayPlay"],[$O,"onAutoplayPlaying"],[cS,"onAutoplayPause"],[hS,"onLazyLoadLoaded"]];function yS(...e){return e.filter(Boolean).join(" ")}function kp(e){return e!==null&&typeof e=="object"}function c1(e,t){if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&!e.some((n,r)=>!c1(n,t[r]));if(kp(e)&&kp(t)){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&!n.some(i=>!Object.prototype.hasOwnProperty.call(t,i)||!c1(e[i],t[i]))}return e===t}function jH(e,t){return e.length===t.length&&!e.some((n,r)=>n!==t[r])}function YH(e,t){if(e){const n=Object.keys(e);for(let r=0;r<n.length;r++){const i=n[r];if(i!=="__proto__"&&t(e[i],i)===!1)break}}return e}function h1(e,t){const n=e;return YH(t,(r,i)=>{Array.isArray(r)?n[i]=r.slice():kp(r)?n[i]=h1(kp(n[i])?n[i]:{},r):n[i]=r}),n}var WH=({children:e,className:t,...n})=>w("div",{className:yS("splide__track",t),...n,children:w("ul",{className:"splide__list",children:e})}),wS=class extends Kt.Component{constructor(){super(...arguments),this.splideRef=Kt.createRef(),this.slides=[]}componentDidMount(){const{options:e,extensions:t,transition:n}=this.props,{current:r}=this.splideRef;r&&(this.splide=new vS(r,e),this.bind(this.splide),this.splide.mount(t,n),this.options=h1({},e||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:e}=this.props;e&&!c1(this.options,e)&&(this.splide.options=e,this.options=h1({},e));const t=this.getSlides();jH(this.slides,t)||(this.splide.refresh(),this.slides=t)}sync(e){var t;(t=this.splide)==null||t.sync(e)}go(e){var t;(t=this.splide)==null||t.go(e)}getSlides(){var e;if(this.splide){const t=(e=this.splide.Components.Elements)==null?void 0:e.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(e){pT.forEach(([t,n])=>{const r=this.props[n];typeof r=="function"&&e.on(t,(...i)=>{r(e,...i)})})}omit(e,t){return t.forEach(n=>{Object.prototype.hasOwnProperty.call(e,n)&&delete e[n]}),e}render(){const{className:e,tag:t="div",hasTrack:n=!0,children:r,...i}=this.props;return Kt.createElement(t,{className:yS("splide",e),ref:this.splideRef,...this.omit(i,["options",...pT.map(s=>s[1])])},n?Kt.createElement(WH,null,r):r)}},_S=({children:e,className:t,...n})=>Kt.createElement("li",{className:yS("splide__slide",t),...n},e);/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 *///! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var ZO;function te(){return ZO.apply(null,arguments)}function HH(e){ZO=e}function Br(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Uo(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function Ye(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function SS(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(Ye(e,t))return!1;return!0}function $n(e){return e===void 0}function ns(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Ph(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function eR(e,t){var n=[],r,i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function Ds(e,t){for(var n in t)Ye(t,n)&&(e[n]=t[n]);return Ye(t,"toString")&&(e.toString=t.toString),Ye(t,"valueOf")&&(e.valueOf=t.valueOf),e}function pi(e,t,n,r){return kR(e,t,n,r,!0).utc()}function GH(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function be(e){return e._pf==null&&(e._pf=GH()),e._pf}var d1;Array.prototype.some?d1=Array.prototype.some:d1=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function ES(e){if(e._isValid==null){var t=be(e),n=d1.call(t.parsedDateParts,function(i){return i!=null}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r}return e._isValid}function dg(e){var t=pi(NaN);return e!=null?Ds(be(t),e):be(t).userInvalidated=!0,t}var mT=te.momentProperties=[],ov=!1;function CS(e,t){var n,r,i,s=mT.length;if($n(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),$n(t._i)||(e._i=t._i),$n(t._f)||(e._f=t._f),$n(t._l)||(e._l=t._l),$n(t._strict)||(e._strict=t._strict),$n(t._tzm)||(e._tzm=t._tzm),$n(t._isUTC)||(e._isUTC=t._isUTC),$n(t._offset)||(e._offset=t._offset),$n(t._pf)||(e._pf=be(t)),$n(t._locale)||(e._locale=t._locale),s>0)for(n=0;n<s;n++)r=mT[n],i=t[r],$n(i)||(e[r]=i);return e}function Mh(e){CS(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ov===!1&&(ov=!0,te.updateOffset(this),ov=!1)}function Vr(e){return e instanceof Mh||e!=null&&e._isAMomentObject!=null}function tR(e){te.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+e)}function Cr(e,t){var n=!0;return Ds(function(){if(te.deprecationHandler!=null&&te.deprecationHandler(null,e),n){var r=[],i,s,o,a=arguments.length;for(s=0;s<a;s++){if(i="",typeof arguments[s]=="object"){i+=`
[`+s+"] ";for(o in arguments[0])Ye(arguments[0],o)&&(i+=o+": "+arguments[0][o]+", ");i=i.slice(0,-2)}else i=arguments[s];r.push(i)}tR(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var gT={};function nR(e,t){te.deprecationHandler!=null&&te.deprecationHandler(e,t),gT[e]||(tR(t),gT[e]=!0)}te.suppressDeprecationWarnings=!1;te.deprecationHandler=null;function mi(e){return typeof Function!="undefined"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function qH(e){var t,n;for(n in e)Ye(e,n)&&(t=e[n],mi(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function f1(e,t){var n=Ds({},e),r;for(r in t)Ye(t,r)&&(Uo(e[r])&&Uo(t[r])?(n[r]={},Ds(n[r],e[r]),Ds(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)Ye(e,r)&&!Ye(t,r)&&Uo(e[r])&&(n[r]=Ds({},n[r]));return n}function kS(e){e!=null&&this.set(e)}var p1;Object.keys?p1=Object.keys:p1=function(e){var t,n=[];for(t in e)Ye(e,t)&&n.push(t);return n};var KH={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function QH(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return mi(r)?r.call(t,n):r}function hi(e,t,n){var r=""+Math.abs(e),i=t-r.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var xS=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Ld=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,av={},al={};function de(e,t,n,r){var i=r;typeof r=="string"&&(i=function(){return this[r]()}),e&&(al[e]=i),t&&(al[t[0]]=function(){return hi(i.apply(this,arguments),t[1],t[2])}),n&&(al[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function XH(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function JH(e){var t=e.match(xS),n,r;for(n=0,r=t.length;n<r;n++)al[t[n]]?t[n]=al[t[n]]:t[n]=XH(t[n]);return function(i){var s="",o;for(o=0;o<r;o++)s+=mi(t[o])?t[o].call(i,e):t[o];return s}}function cf(e,t){return e.isValid()?(t=rR(t,e.localeData()),av[t]=av[t]||JH(t),av[t](e)):e.localeData().invalidDate()}function rR(e,t){var n=5;function r(i){return t.longDateFormat(i)||i}for(Ld.lastIndex=0;n>=0&&Ld.test(e);)e=e.replace(Ld,r),Ld.lastIndex=0,n-=1;return e}var ZH={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function eG(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(xS).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var tG="Invalid date";function nG(){return this._invalidDate}var rG="%d",iG=/\d{1,2}/;function sG(e){return this._ordinal.replace("%d",e)}var oG={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function aG(e,t,n,r){var i=this._relativeTime[n];return mi(i)?i(e,t,n,r):i.replace(/%d/i,e)}function lG(e,t){var n=this._relativeTime[e>0?"future":"past"];return mi(n)?n(t):n.replace(/%s/i,t)}var Ju={};function xn(e,t){var n=e.toLowerCase();Ju[n]=Ju[n+"s"]=Ju[t]=e}function kr(e){return typeof e=="string"?Ju[e]||Ju[e.toLowerCase()]:void 0}function TS(e){var t={},n,r;for(r in e)Ye(e,r)&&(n=kr(r),n&&(t[n]=e[r]));return t}var iR={};function Tn(e,t){iR[e]=t}function uG(e){var t=[],n;for(n in e)Ye(e,n)&&t.push({unit:n,priority:iR[n]});return t.sort(function(r,i){return r.priority-i.priority}),t}function fg(e){return e%4===0&&e%100!==0||e%400===0}function lr(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function Re(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=lr(t)),n}function Ql(e,t){return function(n){return n!=null?(sR(this,e,n),te.updateOffset(this,t),this):xp(this,e)}}function xp(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function sR(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&fg(e.year())&&e.month()===1&&e.date()===29?(n=Re(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),wg(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function cG(e){return e=kr(e),mi(this[e])?this[e]():this}function hG(e,t){if(typeof e=="object"){e=TS(e);var n=uG(e),r,i=n.length;for(r=0;r<i;r++)this[n[r].unit](e[n[r].unit])}else if(e=kr(e),mi(this[e]))return this[e](t);return this}var oR=/\d/,ir=/\d\d/,aR=/\d{3}/,DS=/\d{4}/,pg=/[+-]?\d{6}/,ut=/\d\d?/,lR=/\d\d\d\d?/,uR=/\d\d\d\d\d\d?/,mg=/\d{1,3}/,IS=/\d{1,4}/,gg=/[+-]?\d{1,6}/,Xl=/\d+/,vg=/[+-]?\d+/,dG=/Z|[+-]\d\d:?\d\d/gi,yg=/Z|[+-]\d\d(?::?\d\d)?/gi,fG=/[+-]?\d+(\.\d{1,3})?/,Lh=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Tp;Tp={};function se(e,t,n){Tp[e]=mi(t)?t:function(r,i){return r&&n?n:t}}function pG(e,t){return Ye(Tp,e)?Tp[e](t._strict,t._locale):new RegExp(mG(e))}function mG(e){return Gn(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,i,s){return n||r||i||s}))}function Gn(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var m1={};function et(e,t){var n,r=t,i;for(typeof e=="string"&&(e=[e]),ns(t)&&(r=function(s,o){o[t]=Re(s)}),i=e.length,n=0;n<i;n++)m1[e[n]]=r}function $h(e,t){et(e,function(n,r,i,s){i._w=i._w||{},t(n,i._w,i,s)})}function gG(e,t,n){t!=null&&Ye(m1,e)&&m1[e](t,n._a,n,e)}var Sn=0,Fi=1,Kr=2,jt=3,Mr=4,Ui=5,Oo=6,vG=7,yG=8;function wG(e,t){return(e%t+t)%t}var Nt;Array.prototype.indexOf?Nt=Array.prototype.indexOf:Nt=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function wg(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=wG(t,12);return e+=(t-n)/12,n===1?fg(e)?29:28:31-n%7%2}de("M",["MM",2],"Mo",function(){return this.month()+1});de("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});de("MMMM",0,0,function(e){return this.localeData().months(this,e)});xn("month","M");Tn("month",8);se("M",ut);se("MM",ut,ir);se("MMM",function(e,t){return t.monthsShortRegex(e)});se("MMMM",function(e,t){return t.monthsRegex(e)});et(["M","MM"],function(e,t){t[Fi]=Re(e)-1});et(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);i!=null?t[Fi]=i:be(n).invalidMonth=e});var _G="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),cR="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),hR=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,SG=Lh,EG=Lh;function CG(e,t){return e?Br(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||hR).test(t)?"format":"standalone"][e.month()]:Br(this._months)?this._months:this._months.standalone}function kG(e,t){return e?Br(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[hR.test(t)?"format":"standalone"][e.month()]:Br(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function xG(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)s=pi([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(s,"").toLocaleLowerCase();return n?t==="MMM"?(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:null):(i=Nt.call(this._longMonthsParse,o),i!==-1?i:null):t==="MMM"?(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:(i=Nt.call(this._longMonthsParse,o),i!==-1?i:null)):(i=Nt.call(this._longMonthsParse,o),i!==-1?i:(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:null))}function TG(e,t,n){var r,i,s;if(this._monthsParseExact)return xG.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=pi([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(s="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function dR(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=Re(t);else if(t=e.localeData().monthsParse(t),!ns(t))return e}return n=Math.min(e.date(),wg(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function fR(e){return e!=null?(dR(this,e),te.updateOffset(this,!0),this):xp(this,"Month")}function DG(){return wg(this.year(),this.month())}function IG(e){return this._monthsParseExact?(Ye(this,"_monthsRegex")||pR.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(Ye(this,"_monthsShortRegex")||(this._monthsShortRegex=SG),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function bG(e){return this._monthsParseExact?(Ye(this,"_monthsRegex")||pR.call(this),e?this._monthsStrictRegex:this._monthsRegex):(Ye(this,"_monthsRegex")||(this._monthsRegex=EG),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function pR(){function e(o,a){return a.length-o.length}var t=[],n=[],r=[],i,s;for(i=0;i<12;i++)s=pi([2e3,i]),t.push(this.monthsShort(s,"")),n.push(this.months(s,"")),r.push(this.months(s,"")),r.push(this.monthsShort(s,""));for(t.sort(e),n.sort(e),r.sort(e),i=0;i<12;i++)t[i]=Gn(t[i]),n[i]=Gn(n[i]);for(i=0;i<24;i++)r[i]=Gn(r[i]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}de("Y",0,0,function(){var e=this.year();return e<=9999?hi(e,4):"+"+e});de(0,["YY",2],0,function(){return this.year()%100});de(0,["YYYY",4],0,"year");de(0,["YYYYY",5],0,"year");de(0,["YYYYYY",6,!0],0,"year");xn("year","y");Tn("year",1);se("Y",vg);se("YY",ut,ir);se("YYYY",IS,DS);se("YYYYY",gg,pg);se("YYYYYY",gg,pg);et(["YYYYY","YYYYYY"],Sn);et("YYYY",function(e,t){t[Sn]=e.length===2?te.parseTwoDigitYear(e):Re(e)});et("YY",function(e,t){t[Sn]=te.parseTwoDigitYear(e)});et("Y",function(e,t){t[Sn]=parseInt(e,10)});function Zu(e){return fg(e)?366:365}te.parseTwoDigitYear=function(e){return Re(e)+(Re(e)>68?1900:2e3)};var mR=Ql("FullYear",!0);function AG(){return fg(this.year())}function NG(e,t,n,r,i,s,o){var a;return e<100&&e>=0?(a=new Date(e+400,t,n,r,i,s,o),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,n,r,i,s,o),a}function Wc(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Dp(e,t,n){var r=7+t-n,i=(7+Wc(e,0,r).getUTCDay()-t)%7;return-i+r-1}function gR(e,t,n,r,i){var s=(7+n-r)%7,o=Dp(e,r,i),a=1+7*(t-1)+s+o,u,c;return a<=0?(u=e-1,c=Zu(u)+a):a>Zu(e)?(u=e+1,c=a-Zu(e)):(u=e,c=a),{year:u,dayOfYear:c}}function Hc(e,t,n){var r=Dp(e.year(),t,n),i=Math.floor((e.dayOfYear()-r-1)/7)+1,s,o;return i<1?(o=e.year()-1,s=i+ji(o,t,n)):i>ji(e.year(),t,n)?(s=i-ji(e.year(),t,n),o=e.year()+1):(o=e.year(),s=i),{week:s,year:o}}function ji(e,t,n){var r=Dp(e,t,n),i=Dp(e+1,t,n);return(Zu(e)-r+i)/7}de("w",["ww",2],"wo","week");de("W",["WW",2],"Wo","isoWeek");xn("week","w");xn("isoWeek","W");Tn("week",5);Tn("isoWeek",5);se("w",ut);se("ww",ut,ir);se("W",ut);se("WW",ut,ir);$h(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=Re(e)});function OG(e){return Hc(e,this._week.dow,this._week.doy).week}var RG={dow:0,doy:6};function PG(){return this._week.dow}function MG(){return this._week.doy}function LG(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function $G(e){var t=Hc(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}de("d",0,"do","day");de("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});de("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});de("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});de("e",0,0,"weekday");de("E",0,0,"isoWeekday");xn("day","d");xn("weekday","e");xn("isoWeekday","E");Tn("day",11);Tn("weekday",11);Tn("isoWeekday",11);se("d",ut);se("e",ut);se("E",ut);se("dd",function(e,t){return t.weekdaysMinRegex(e)});se("ddd",function(e,t){return t.weekdaysShortRegex(e)});se("dddd",function(e,t){return t.weekdaysRegex(e)});$h(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);i!=null?t.d=i:be(n).invalidWeekday=e});$h(["d","e","E"],function(e,t,n,r){t[r]=Re(e)});function FG(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function UG(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function bS(e,t){return e.slice(t,7).concat(e.slice(0,t))}var BG="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),vR="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),VG="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),zG=Lh,jG=Lh,YG=Lh;function WG(e,t){var n=Br(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?bS(n,this._week.dow):e?n[e.day()]:n}function HG(e){return e===!0?bS(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function GG(e){return e===!0?bS(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function qG(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)s=pi([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(s,"").toLocaleLowerCase();return n?t==="dddd"?(i=Nt.call(this._weekdaysParse,o),i!==-1?i:null):t==="ddd"?(i=Nt.call(this._shortWeekdaysParse,o),i!==-1?i:null):(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null):t==="dddd"?(i=Nt.call(this._weekdaysParse,o),i!==-1||(i=Nt.call(this._shortWeekdaysParse,o),i!==-1)?i:(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null)):t==="ddd"?(i=Nt.call(this._shortWeekdaysParse,o),i!==-1||(i=Nt.call(this._weekdaysParse,o),i!==-1)?i:(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null)):(i=Nt.call(this._minWeekdaysParse,o),i!==-1||(i=Nt.call(this._weekdaysParse,o),i!==-1)?i:(i=Nt.call(this._shortWeekdaysParse,o),i!==-1?i:null))}function KG(e,t,n){var r,i,s;if(this._weekdaysParseExact)return qG.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=pi([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(s="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function QG(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=FG(e,this.localeData()),this.add(e-t,"d")):t}function XG(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function JG(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=UG(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function ZG(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||AS.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(Ye(this,"_weekdaysRegex")||(this._weekdaysRegex=zG),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function eq(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||AS.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(Ye(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=jG),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function tq(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||AS.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(Ye(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=YG),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function AS(){function e(d,p){return p.length-d.length}var t=[],n=[],r=[],i=[],s,o,a,u,c;for(s=0;s<7;s++)o=pi([2e3,1]).day(s),a=Gn(this.weekdaysMin(o,"")),u=Gn(this.weekdaysShort(o,"")),c=Gn(this.weekdays(o,"")),t.push(a),n.push(u),r.push(c),i.push(a),i.push(u),i.push(c);t.sort(e),n.sort(e),r.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function NS(){return this.hours()%12||12}function nq(){return this.hours()||24}de("H",["HH",2],0,"hour");de("h",["hh",2],0,NS);de("k",["kk",2],0,nq);de("hmm",0,0,function(){return""+NS.apply(this)+hi(this.minutes(),2)});de("hmmss",0,0,function(){return""+NS.apply(this)+hi(this.minutes(),2)+hi(this.seconds(),2)});de("Hmm",0,0,function(){return""+this.hours()+hi(this.minutes(),2)});de("Hmmss",0,0,function(){return""+this.hours()+hi(this.minutes(),2)+hi(this.seconds(),2)});function yR(e,t){de(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}yR("a",!0);yR("A",!1);xn("hour","h");Tn("hour",13);function wR(e,t){return t._meridiemParse}se("a",wR);se("A",wR);se("H",ut);se("h",ut);se("k",ut);se("HH",ut,ir);se("hh",ut,ir);se("kk",ut,ir);se("hmm",lR);se("hmmss",uR);se("Hmm",lR);se("Hmmss",uR);et(["H","HH"],jt);et(["k","kk"],function(e,t,n){var r=Re(e);t[jt]=r===24?0:r});et(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});et(["h","hh"],function(e,t,n){t[jt]=Re(e),be(n).bigHour=!0});et("hmm",function(e,t,n){var r=e.length-2;t[jt]=Re(e.substr(0,r)),t[Mr]=Re(e.substr(r)),be(n).bigHour=!0});et("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[jt]=Re(e.substr(0,r)),t[Mr]=Re(e.substr(r,2)),t[Ui]=Re(e.substr(i)),be(n).bigHour=!0});et("Hmm",function(e,t,n){var r=e.length-2;t[jt]=Re(e.substr(0,r)),t[Mr]=Re(e.substr(r))});et("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[jt]=Re(e.substr(0,r)),t[Mr]=Re(e.substr(r,2)),t[Ui]=Re(e.substr(i))});function rq(e){return(e+"").toLowerCase().charAt(0)==="p"}var iq=/[ap]\.?m?\.?/i,sq=Ql("Hours",!0);function oq(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var _R={calendar:KH,longDateFormat:ZH,invalidDate:tG,ordinal:rG,dayOfMonthOrdinalParse:iG,relativeTime:oG,months:_G,monthsShort:cR,week:RG,weekdays:BG,weekdaysMin:VG,weekdaysShort:vR,meridiemParse:iq},dt={},yu={},Gc;function aq(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function vT(e){return e&&e.toLowerCase().replace("_","-")}function lq(e){for(var t=0,n,r,i,s;t<e.length;){for(s=vT(e[t]).split("-"),n=s.length,r=vT(e[t+1]),r=r?r.split("-"):null;n>0;){if(i=_g(s.slice(0,n).join("-")),i)return i;if(r&&r.length>=n&&aq(s,r)>=n-1)break;n--}t++}return Gc}function uq(e){return e.match("^[^/\\\\]*$")!=null}function _g(e){var t=null,n;if(dt[e]===void 0&&typeof ff!="undefined"&&ff&&ff.exports&&uq(e))try{t=Gc._abbr,n=require,n("./locale/"+e),Ws(t)}catch{dt[e]=null}return dt[e]}function Ws(e,t){var n;return e&&($n(t)?n=is(e):n=OS(e,t),n?Gc=n:typeof console!="undefined"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Gc._abbr}function OS(e,t){if(t!==null){var n,r=_R;if(t.abbr=e,dt[e]!=null)nR("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=dt[e]._config;else if(t.parentLocale!=null)if(dt[t.parentLocale]!=null)r=dt[t.parentLocale]._config;else if(n=_g(t.parentLocale),n!=null)r=n._config;else return yu[t.parentLocale]||(yu[t.parentLocale]=[]),yu[t.parentLocale].push({name:e,config:t}),null;return dt[e]=new kS(f1(r,t)),yu[e]&&yu[e].forEach(function(i){OS(i.name,i.config)}),Ws(e),dt[e]}else return delete dt[e],null}function cq(e,t){if(t!=null){var n,r,i=_R;dt[e]!=null&&dt[e].parentLocale!=null?dt[e].set(f1(dt[e]._config,t)):(r=_g(e),r!=null&&(i=r._config),t=f1(i,t),r==null&&(t.abbr=e),n=new kS(t),n.parentLocale=dt[e],dt[e]=n),Ws(e)}else dt[e]!=null&&(dt[e].parentLocale!=null?(dt[e]=dt[e].parentLocale,e===Ws()&&Ws(e)):dt[e]!=null&&delete dt[e]);return dt[e]}function is(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Gc;if(!Br(e)){if(t=_g(e),t)return t;e=[e]}return lq(e)}function hq(){return p1(dt)}function RS(e){var t,n=e._a;return n&&be(e).overflow===-2&&(t=n[Fi]<0||n[Fi]>11?Fi:n[Kr]<1||n[Kr]>wg(n[Sn],n[Fi])?Kr:n[jt]<0||n[jt]>24||n[jt]===24&&(n[Mr]!==0||n[Ui]!==0||n[Oo]!==0)?jt:n[Mr]<0||n[Mr]>59?Mr:n[Ui]<0||n[Ui]>59?Ui:n[Oo]<0||n[Oo]>999?Oo:-1,be(e)._overflowDayOfYear&&(t<Sn||t>Kr)&&(t=Kr),be(e)._overflowWeeks&&t===-1&&(t=vG),be(e)._overflowWeekday&&t===-1&&(t=yG),be(e).overflow=t),e}var dq=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,fq=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,pq=/Z|[+-]\d\d(?::?\d\d)?/,$d=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],lv=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],mq=/^\/?Date\((-?\d+)/i,gq=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,vq={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function SR(e){var t,n,r=e._i,i=dq.exec(r)||fq.exec(r),s,o,a,u,c=$d.length,d=lv.length;if(i){for(be(e).iso=!0,t=0,n=c;t<n;t++)if($d[t][1].exec(i[1])){o=$d[t][0],s=$d[t][2]!==!1;break}if(o==null){e._isValid=!1;return}if(i[3]){for(t=0,n=d;t<n;t++)if(lv[t][1].exec(i[3])){a=(i[2]||" ")+lv[t][0];break}if(a==null){e._isValid=!1;return}}if(!s&&a!=null){e._isValid=!1;return}if(i[4])if(pq.exec(i[4]))u="Z";else{e._isValid=!1;return}e._f=o+(a||"")+(u||""),MS(e)}else e._isValid=!1}function yq(e,t,n,r,i,s){var o=[wq(e),cR.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return s&&o.push(parseInt(s,10)),o}function wq(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function _q(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Sq(e,t,n){if(e){var r=vR.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(r!==i)return be(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Eq(e,t,n){if(e)return vq[e];if(t)return 0;var r=parseInt(n,10),i=r%100,s=(r-i)/100;return s*60+i}function ER(e){var t=gq.exec(_q(e._i)),n;if(t){if(n=yq(t[4],t[3],t[2],t[5],t[6],t[7]),!Sq(t[1],n,e))return;e._a=n,e._tzm=Eq(t[8],t[9],t[10]),e._d=Wc.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),be(e).rfc2822=!0}else e._isValid=!1}function Cq(e){var t=mq.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(SR(e),e._isValid===!1)delete e._isValid;else return;if(ER(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:te.createFromInputFallback(e)}te.createFromInputFallback=Cr("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Ia(e,t,n){return e!=null?e:t!=null?t:n}function kq(e){var t=new Date(te.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function PS(e){var t,n,r=[],i,s,o;if(!e._d){for(i=kq(e),e._w&&e._a[Kr]==null&&e._a[Fi]==null&&xq(e),e._dayOfYear!=null&&(o=Ia(e._a[Sn],i[Sn]),(e._dayOfYear>Zu(o)||e._dayOfYear===0)&&(be(e)._overflowDayOfYear=!0),n=Wc(o,0,e._dayOfYear),e._a[Fi]=n.getUTCMonth(),e._a[Kr]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=i[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[jt]===24&&e._a[Mr]===0&&e._a[Ui]===0&&e._a[Oo]===0&&(e._nextDay=!0,e._a[jt]=0),e._d=(e._useUTC?Wc:NG).apply(null,r),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[jt]=24),e._w&&typeof e._w.d!="undefined"&&e._w.d!==s&&(be(e).weekdayMismatch=!0)}}function xq(e){var t,n,r,i,s,o,a,u,c;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(s=1,o=4,n=Ia(t.GG,e._a[Sn],Hc(lt(),1,4).year),r=Ia(t.W,1),i=Ia(t.E,1),(i<1||i>7)&&(u=!0)):(s=e._locale._week.dow,o=e._locale._week.doy,c=Hc(lt(),s,o),n=Ia(t.gg,e._a[Sn],c.year),r=Ia(t.w,c.week),t.d!=null?(i=t.d,(i<0||i>6)&&(u=!0)):t.e!=null?(i=t.e+s,(t.e<0||t.e>6)&&(u=!0)):i=s),r<1||r>ji(n,s,o)?be(e)._overflowWeeks=!0:u!=null?be(e)._overflowWeekday=!0:(a=gR(n,r,i,s,o),e._a[Sn]=a.year,e._dayOfYear=a.dayOfYear)}te.ISO_8601=function(){};te.RFC_2822=function(){};function MS(e){if(e._f===te.ISO_8601){SR(e);return}if(e._f===te.RFC_2822){ER(e);return}e._a=[],be(e).empty=!0;var t=""+e._i,n,r,i,s,o,a=t.length,u=0,c,d;for(i=rR(e._f,e._locale).match(xS)||[],d=i.length,n=0;n<d;n++)s=i[n],r=(t.match(pG(s,e))||[])[0],r&&(o=t.substr(0,t.indexOf(r)),o.length>0&&be(e).unusedInput.push(o),t=t.slice(t.indexOf(r)+r.length),u+=r.length),al[s]?(r?be(e).empty=!1:be(e).unusedTokens.push(s),gG(s,r,e)):e._strict&&!r&&be(e).unusedTokens.push(s);be(e).charsLeftOver=a-u,t.length>0&&be(e).unusedInput.push(t),e._a[jt]<=12&&be(e).bigHour===!0&&e._a[jt]>0&&(be(e).bigHour=void 0),be(e).parsedDateParts=e._a.slice(0),be(e).meridiem=e._meridiem,e._a[jt]=Tq(e._locale,e._a[jt],e._meridiem),c=be(e).era,c!==null&&(e._a[Sn]=e._locale.erasConvertYear(c,e._a[Sn])),PS(e),RS(e)}function Tq(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function Dq(e){var t,n,r,i,s,o,a=!1,u=e._f.length;if(u===0){be(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<u;i++)s=0,o=!1,t=CS({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],MS(t),ES(t)&&(o=!0),s+=be(t).charsLeftOver,s+=be(t).unusedTokens.length*10,be(t).score=s,a?s<r&&(r=s,n=t):(r==null||s<r||o)&&(r=s,n=t,o&&(a=!0));Ds(e,n||t)}function Iq(e){if(!e._d){var t=TS(e._i),n=t.day===void 0?t.date:t.day;e._a=eR([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),PS(e)}}function bq(e){var t=new Mh(RS(CR(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function CR(e){var t=e._i,n=e._f;return e._locale=e._locale||is(e._l),t===null||n===void 0&&t===""?dg({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),Vr(t)?new Mh(RS(t)):(Ph(t)?e._d=t:Br(n)?Dq(e):n?MS(e):Aq(e),ES(e)||(e._d=null),e))}function Aq(e){var t=e._i;$n(t)?e._d=new Date(te.now()):Ph(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Cq(e):Br(t)?(e._a=eR(t.slice(0),function(n){return parseInt(n,10)}),PS(e)):Uo(t)?Iq(e):ns(t)?e._d=new Date(t):te.createFromInputFallback(e)}function kR(e,t,n,r,i){var s={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(Uo(e)&&SS(e)||Br(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=i,s._l=n,s._i=e,s._f=t,s._strict=r,bq(s)}function lt(e,t,n,r){return kR(e,t,n,r,!1)}var Nq=Cr("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=lt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:dg()}),Oq=Cr("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=lt.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:dg()});function xR(e,t){var n,r;if(t.length===1&&Br(t[0])&&(t=t[0]),!t.length)return lt();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function Rq(){var e=[].slice.call(arguments,0);return xR("isBefore",e)}function Pq(){var e=[].slice.call(arguments,0);return xR("isAfter",e)}var Mq=function(){return Date.now?Date.now():+new Date},wu=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Lq(e){var t,n=!1,r,i=wu.length;for(t in e)if(Ye(e,t)&&!(Nt.call(wu,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<i;++r)if(e[wu[r]]){if(n)return!1;parseFloat(e[wu[r]])!==Re(e[wu[r]])&&(n=!0)}return!0}function $q(){return this._isValid}function Fq(){return jr(NaN)}function Sg(e){var t=TS(e),n=t.year||0,r=t.quarter||0,i=t.month||0,s=t.week||t.isoWeek||0,o=t.day||0,a=t.hour||0,u=t.minute||0,c=t.second||0,d=t.millisecond||0;this._isValid=Lq(t),this._milliseconds=+d+c*1e3+u*6e4+a*1e3*60*60,this._days=+o+s*7,this._months=+i+r*3+n*12,this._data={},this._locale=is(),this._bubble()}function hf(e){return e instanceof Sg}function g1(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Uq(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),s=0,o;for(o=0;o<r;o++)(n&&e[o]!==t[o]||!n&&Re(e[o])!==Re(t[o]))&&s++;return s+i}function TR(e,t){de(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+hi(~~(n/60),2)+t+hi(~~n%60,2)})}TR("Z",":");TR("ZZ","");se("Z",yg);se("ZZ",yg);et(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=LS(yg,e)});var Bq=/([\+\-]|\d\d)/gi;function LS(e,t){var n=(t||"").match(e),r,i,s;return n===null?null:(r=n[n.length-1]||[],i=(r+"").match(Bq)||["-",0,0],s=+(i[1]*60)+Re(i[2]),s===0?0:i[0]==="+"?s:-s)}function $S(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(Vr(e)||Ph(e)?e.valueOf():lt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),te.updateOffset(n,!1),n):lt(e).local()}function v1(e){return-Math.round(e._d.getTimezoneOffset())}te.updateOffset=function(){};function Vq(e,t,n){var r=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=LS(yg,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(i=v1(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?bR(this,jr(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,te.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:v1(this)}function zq(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function jq(e){return this.utcOffset(0,e)}function Yq(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(v1(this),"m")),this}function Wq(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=LS(dG,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Hq(e){return this.isValid()?(e=e?lt(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Gq(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function qq(){if(!$n(this._isDSTShifted))return this._isDSTShifted;var e={},t;return CS(e,this),e=CR(e),e._a?(t=e._isUTC?pi(e._a):lt(e._a),this._isDSTShifted=this.isValid()&&Uq(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Kq(){return this.isValid()?!this._isUTC:!1}function Qq(){return this.isValid()?this._isUTC:!1}function DR(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Xq=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Jq=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function jr(e,t){var n=e,r=null,i,s,o;return hf(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:ns(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=Xq.exec(e))?(i=r[1]==="-"?-1:1,n={y:0,d:Re(r[Kr])*i,h:Re(r[jt])*i,m:Re(r[Mr])*i,s:Re(r[Ui])*i,ms:Re(g1(r[Oo]*1e3))*i}):(r=Jq.exec(e))?(i=r[1]==="-"?-1:1,n={y:_o(r[2],i),M:_o(r[3],i),w:_o(r[4],i),d:_o(r[5],i),h:_o(r[6],i),m:_o(r[7],i),s:_o(r[8],i)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(o=Zq(lt(n.from),lt(n.to)),n={},n.ms=o.milliseconds,n.M=o.months),s=new Sg(n),hf(e)&&Ye(e,"_locale")&&(s._locale=e._locale),hf(e)&&Ye(e,"_isValid")&&(s._isValid=e._isValid),s}jr.fn=Sg.prototype;jr.invalid=Fq;function _o(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function yT(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Zq(e,t){var n;return e.isValid()&&t.isValid()?(t=$S(t,e),e.isBefore(t)?n=yT(e,t):(n=yT(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function IR(e,t){return function(n,r){var i,s;return r!==null&&!isNaN(+r)&&(nR(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=r,r=s),i=jr(n,r),bR(this,i,e),this}}function bR(e,t,n,r){var i=t._milliseconds,s=g1(t._days),o=g1(t._months);!e.isValid()||(r=r==null?!0:r,o&&dR(e,xp(e,"Month")+o*n),s&&sR(e,"Date",xp(e,"Date")+s*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&te.updateOffset(e,s||o))}var eK=IR(1,"add"),tK=IR(-1,"subtract");function AR(e){return typeof e=="string"||e instanceof String}function nK(e){return Vr(e)||Ph(e)||AR(e)||ns(e)||iK(e)||rK(e)||e===null||e===void 0}function rK(e){var t=Uo(e)&&!SS(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,s,o=r.length;for(i=0;i<o;i+=1)s=r[i],n=n||Ye(e,s);return t&&n}function iK(e){var t=Br(e),n=!1;return t&&(n=e.filter(function(r){return!ns(r)&&AR(e)}).length===0),t&&n}function sK(e){var t=Uo(e)&&!SS(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,s;for(i=0;i<r.length;i+=1)s=r[i],n=n||Ye(e,s);return t&&n}function oK(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function aK(e,t){arguments.length===1&&(arguments[0]?nK(arguments[0])?(e=arguments[0],t=void 0):sK(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||lt(),r=$S(n,this).startOf("day"),i=te.calendarFormat(this,r)||"sameElse",s=t&&(mi(t[i])?t[i].call(this,n):t[i]);return this.format(s||this.localeData().calendar(i,this,lt(n)))}function lK(){return new Mh(this)}function uK(e,t){var n=Vr(e)?e:lt(e);return this.isValid()&&n.isValid()?(t=kr(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function cK(e,t){var n=Vr(e)?e:lt(e);return this.isValid()&&n.isValid()?(t=kr(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function hK(e,t,n,r){var i=Vr(e)?e:lt(e),s=Vr(t)?t:lt(t);return this.isValid()&&i.isValid()&&s.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(i,n):!this.isBefore(i,n))&&(r[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function dK(e,t){var n=Vr(e)?e:lt(e),r;return this.isValid()&&n.isValid()?(t=kr(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function fK(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function pK(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function mK(e,t,n){var r,i,s;if(!this.isValid())return NaN;if(r=$S(e,this),!r.isValid())return NaN;switch(i=(r.utcOffset()-this.utcOffset())*6e4,t=kr(t),t){case"year":s=df(this,r)/12;break;case"month":s=df(this,r);break;case"quarter":s=df(this,r)/3;break;case"second":s=(this-r)/1e3;break;case"minute":s=(this-r)/6e4;break;case"hour":s=(this-r)/36e5;break;case"day":s=(this-r-i)/864e5;break;case"week":s=(this-r-i)/6048e5;break;default:s=this-r}return n?s:lr(s)}function df(e,t){if(e.date()<t.date())return-df(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),i,s;return t-r<0?(i=e.clone().add(n-1,"months"),s=(t-r)/(r-i)):(i=e.clone().add(n+1,"months"),s=(t-r)/(i-r)),-(n+s)||0}te.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";te.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function gK(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function vK(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?cf(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):mi(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",cf(n,"Z")):cf(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function yK(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,i,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",s=t+'[")]',this.format(n+r+i+s)}function wK(e){e||(e=this.isUtc()?te.defaultFormatUtc:te.defaultFormat);var t=cf(this,e);return this.localeData().postformat(t)}function _K(e,t){return this.isValid()&&(Vr(e)&&e.isValid()||lt(e).isValid())?jr({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function SK(e){return this.from(lt(),e)}function EK(e,t){return this.isValid()&&(Vr(e)&&e.isValid()||lt(e).isValid())?jr({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function CK(e){return this.to(lt(),e)}function NR(e){var t;return e===void 0?this._locale._abbr:(t=is(e),t!=null&&(this._locale=t),this)}var OR=Cr("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function RR(){return this._locale}var Ip=1e3,ll=60*Ip,bp=60*ll,PR=(365*400+97)*24*bp;function ul(e,t){return(e%t+t)%t}function MR(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-PR:new Date(e,t,n).valueOf()}function LR(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-PR:Date.UTC(e,t,n)}function kK(e){var t,n;if(e=kr(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?LR:MR,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=ul(t+(this._isUTC?0:this.utcOffset()*ll),bp);break;case"minute":t=this._d.valueOf(),t-=ul(t,ll);break;case"second":t=this._d.valueOf(),t-=ul(t,Ip);break}return this._d.setTime(t),te.updateOffset(this,!0),this}function xK(e){var t,n;if(e=kr(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?LR:MR,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=bp-ul(t+(this._isUTC?0:this.utcOffset()*ll),bp)-1;break;case"minute":t=this._d.valueOf(),t+=ll-ul(t,ll)-1;break;case"second":t=this._d.valueOf(),t+=Ip-ul(t,Ip)-1;break}return this._d.setTime(t),te.updateOffset(this,!0),this}function TK(){return this._d.valueOf()-(this._offset||0)*6e4}function DK(){return Math.floor(this.valueOf()/1e3)}function IK(){return new Date(this.valueOf())}function bK(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function AK(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function NK(){return this.isValid()?this.toISOString():null}function OK(){return ES(this)}function RK(){return Ds({},be(this))}function PK(){return be(this).overflow}function MK(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}de("N",0,0,"eraAbbr");de("NN",0,0,"eraAbbr");de("NNN",0,0,"eraAbbr");de("NNNN",0,0,"eraName");de("NNNNN",0,0,"eraNarrow");de("y",["y",1],"yo","eraYear");de("y",["yy",2],0,"eraYear");de("y",["yyy",3],0,"eraYear");de("y",["yyyy",4],0,"eraYear");se("N",FS);se("NN",FS);se("NNN",FS);se("NNNN",HK);se("NNNNN",GK);et(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?be(n).era=i:be(n).invalidEra=e});se("y",Xl);se("yy",Xl);se("yyy",Xl);se("yyyy",Xl);se("yo",qK);et(["y","yy","yyy","yyyy"],Sn);et(["yo"],function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[Sn]=n._locale.eraYearOrdinalParse(e,i):t[Sn]=parseInt(e,10)});function LK(e,t){var n,r,i,s=this._eras||is("en")._eras;for(n=0,r=s.length;n<r;++n){switch(typeof s[n].since){case"string":i=te(s[n].since).startOf("day"),s[n].since=i.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":i=te(s[n].until).startOf("day").valueOf(),s[n].until=i.valueOf();break}}return s}function $K(e,t,n){var r,i,s=this.eras(),o,a,u;for(e=e.toUpperCase(),r=0,i=s.length;r<i;++r)if(o=s[r].name.toUpperCase(),a=s[r].abbr.toUpperCase(),u=s[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(a===e)return s[r];break;case"NNNN":if(o===e)return s[r];break;case"NNNNN":if(u===e)return s[r];break}else if([o,a,u].indexOf(e)>=0)return s[r]}function FK(e,t){var n=e.since<=e.until?1:-1;return t===void 0?te(e.since).year():te(e.since).year()+(t-e.offset)*n}function UK(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function BK(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function VK(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function zK(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-te(i[e].since).year())*n+i[e].offset;return this.year()}function jK(e){return Ye(this,"_erasNameRegex")||US.call(this),e?this._erasNameRegex:this._erasRegex}function YK(e){return Ye(this,"_erasAbbrRegex")||US.call(this),e?this._erasAbbrRegex:this._erasRegex}function WK(e){return Ye(this,"_erasNarrowRegex")||US.call(this),e?this._erasNarrowRegex:this._erasRegex}function FS(e,t){return t.erasAbbrRegex(e)}function HK(e,t){return t.erasNameRegex(e)}function GK(e,t){return t.erasNarrowRegex(e)}function qK(e,t){return t._eraYearOrdinalRegex||Xl}function US(){var e=[],t=[],n=[],r=[],i,s,o=this.eras();for(i=0,s=o.length;i<s;++i)t.push(Gn(o[i].name)),e.push(Gn(o[i].abbr)),n.push(Gn(o[i].narrow)),r.push(Gn(o[i].name)),r.push(Gn(o[i].abbr)),r.push(Gn(o[i].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}de(0,["gg",2],0,function(){return this.weekYear()%100});de(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Eg(e,t){de(0,[e,e.length],0,t)}Eg("gggg","weekYear");Eg("ggggg","weekYear");Eg("GGGG","isoWeekYear");Eg("GGGGG","isoWeekYear");xn("weekYear","gg");xn("isoWeekYear","GG");Tn("weekYear",1);Tn("isoWeekYear",1);se("G",vg);se("g",vg);se("GG",ut,ir);se("gg",ut,ir);se("GGGG",IS,DS);se("gggg",IS,DS);se("GGGGG",gg,pg);se("ggggg",gg,pg);$h(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=Re(e)});$h(["gg","GG"],function(e,t,n,r){t[r]=te.parseTwoDigitYear(e)});function KK(e){return $R.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function QK(e){return $R.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function XK(){return ji(this.year(),1,4)}function JK(){return ji(this.isoWeekYear(),1,4)}function ZK(){var e=this.localeData()._week;return ji(this.year(),e.dow,e.doy)}function eQ(){var e=this.localeData()._week;return ji(this.weekYear(),e.dow,e.doy)}function $R(e,t,n,r,i){var s;return e==null?Hc(this,r,i).year:(s=ji(e,r,i),t>s&&(t=s),tQ.call(this,e,t,n,r,i))}function tQ(e,t,n,r,i){var s=gR(e,t,n,r,i),o=Wc(s.year,0,s.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}de("Q",0,"Qo","quarter");xn("quarter","Q");Tn("quarter",7);se("Q",oR);et("Q",function(e,t){t[Fi]=(Re(e)-1)*3});function nQ(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}de("D",["DD",2],"Do","date");xn("date","D");Tn("date",9);se("D",ut);se("DD",ut,ir);se("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});et(["D","DD"],Kr);et("Do",function(e,t){t[Kr]=Re(e.match(ut)[0])});var FR=Ql("Date",!0);de("DDD",["DDDD",3],"DDDo","dayOfYear");xn("dayOfYear","DDD");Tn("dayOfYear",4);se("DDD",mg);se("DDDD",aR);et(["DDD","DDDD"],function(e,t,n){n._dayOfYear=Re(e)});function rQ(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}de("m",["mm",2],0,"minute");xn("minute","m");Tn("minute",14);se("m",ut);se("mm",ut,ir);et(["m","mm"],Mr);var iQ=Ql("Minutes",!1);de("s",["ss",2],0,"second");xn("second","s");Tn("second",15);se("s",ut);se("ss",ut,ir);et(["s","ss"],Ui);var sQ=Ql("Seconds",!1);de("S",0,0,function(){return~~(this.millisecond()/100)});de(0,["SS",2],0,function(){return~~(this.millisecond()/10)});de(0,["SSS",3],0,"millisecond");de(0,["SSSS",4],0,function(){return this.millisecond()*10});de(0,["SSSSS",5],0,function(){return this.millisecond()*100});de(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});de(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});de(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});de(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});xn("millisecond","ms");Tn("millisecond",16);se("S",mg,oR);se("SS",mg,ir);se("SSS",mg,aR);var Is,UR;for(Is="SSSS";Is.length<=9;Is+="S")se(Is,Xl);function oQ(e,t){t[Oo]=Re(("0."+e)*1e3)}for(Is="S";Is.length<=9;Is+="S")et(Is,oQ);UR=Ql("Milliseconds",!1);de("z",0,0,"zoneAbbr");de("zz",0,0,"zoneName");function aQ(){return this._isUTC?"UTC":""}function lQ(){return this._isUTC?"Coordinated Universal Time":""}var K=Mh.prototype;K.add=eK;K.calendar=aK;K.clone=lK;K.diff=mK;K.endOf=xK;K.format=wK;K.from=_K;K.fromNow=SK;K.to=EK;K.toNow=CK;K.get=cG;K.invalidAt=PK;K.isAfter=uK;K.isBefore=cK;K.isBetween=hK;K.isSame=dK;K.isSameOrAfter=fK;K.isSameOrBefore=pK;K.isValid=OK;K.lang=OR;K.locale=NR;K.localeData=RR;K.max=Oq;K.min=Nq;K.parsingFlags=RK;K.set=hG;K.startOf=kK;K.subtract=tK;K.toArray=bK;K.toObject=AK;K.toDate=IK;K.toISOString=vK;K.inspect=yK;typeof Symbol!="undefined"&&Symbol.for!=null&&(K[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});K.toJSON=NK;K.toString=gK;K.unix=DK;K.valueOf=TK;K.creationData=MK;K.eraName=UK;K.eraNarrow=BK;K.eraAbbr=VK;K.eraYear=zK;K.year=mR;K.isLeapYear=AG;K.weekYear=KK;K.isoWeekYear=QK;K.quarter=K.quarters=nQ;K.month=fR;K.daysInMonth=DG;K.week=K.weeks=LG;K.isoWeek=K.isoWeeks=$G;K.weeksInYear=ZK;K.weeksInWeekYear=eQ;K.isoWeeksInYear=XK;K.isoWeeksInISOWeekYear=JK;K.date=FR;K.day=K.days=QG;K.weekday=XG;K.isoWeekday=JG;K.dayOfYear=rQ;K.hour=K.hours=sq;K.minute=K.minutes=iQ;K.second=K.seconds=sQ;K.millisecond=K.milliseconds=UR;K.utcOffset=Vq;K.utc=jq;K.local=Yq;K.parseZone=Wq;K.hasAlignedHourOffset=Hq;K.isDST=Gq;K.isLocal=Kq;K.isUtcOffset=Qq;K.isUtc=DR;K.isUTC=DR;K.zoneAbbr=aQ;K.zoneName=lQ;K.dates=Cr("dates accessor is deprecated. Use date instead.",FR);K.months=Cr("months accessor is deprecated. Use month instead",fR);K.years=Cr("years accessor is deprecated. Use year instead",mR);K.zone=Cr("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",zq);K.isDSTShifted=Cr("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",qq);function uQ(e){return lt(e*1e3)}function cQ(){return lt.apply(null,arguments).parseZone()}function BR(e){return e}var We=kS.prototype;We.calendar=QH;We.longDateFormat=eG;We.invalidDate=nG;We.ordinal=sG;We.preparse=BR;We.postformat=BR;We.relativeTime=aG;We.pastFuture=lG;We.set=qH;We.eras=LK;We.erasParse=$K;We.erasConvertYear=FK;We.erasAbbrRegex=YK;We.erasNameRegex=jK;We.erasNarrowRegex=WK;We.months=CG;We.monthsShort=kG;We.monthsParse=TG;We.monthsRegex=bG;We.monthsShortRegex=IG;We.week=OG;We.firstDayOfYear=MG;We.firstDayOfWeek=PG;We.weekdays=WG;We.weekdaysMin=GG;We.weekdaysShort=HG;We.weekdaysParse=KG;We.weekdaysRegex=ZG;We.weekdaysShortRegex=eq;We.weekdaysMinRegex=tq;We.isPM=rq;We.meridiem=oq;function Ap(e,t,n,r){var i=is(),s=pi().set(r,t);return i[n](s,e)}function VR(e,t,n){if(ns(e)&&(t=e,e=void 0),e=e||"",t!=null)return Ap(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=Ap(e,r,n,"month");return i}function BS(e,t,n,r){typeof e=="boolean"?(ns(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,ns(t)&&(n=t,t=void 0),t=t||"");var i=is(),s=e?i._week.dow:0,o,a=[];if(n!=null)return Ap(t,(n+s)%7,r,"day");for(o=0;o<7;o++)a[o]=Ap(t,(o+s)%7,r,"day");return a}function hQ(e,t){return VR(e,t,"months")}function dQ(e,t){return VR(e,t,"monthsShort")}function fQ(e,t,n){return BS(e,t,n,"weekdays")}function pQ(e,t,n){return BS(e,t,n,"weekdaysShort")}function mQ(e,t,n){return BS(e,t,n,"weekdaysMin")}Ws("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=Re(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});te.lang=Cr("moment.lang is deprecated. Use moment.locale instead.",Ws);te.langData=Cr("moment.langData is deprecated. Use moment.localeData instead.",is);var ki=Math.abs;function gQ(){var e=this._data;return this._milliseconds=ki(this._milliseconds),this._days=ki(this._days),this._months=ki(this._months),e.milliseconds=ki(e.milliseconds),e.seconds=ki(e.seconds),e.minutes=ki(e.minutes),e.hours=ki(e.hours),e.months=ki(e.months),e.years=ki(e.years),this}function zR(e,t,n,r){var i=jr(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function vQ(e,t){return zR(this,e,t,1)}function yQ(e,t){return zR(this,e,t,-1)}function wT(e){return e<0?Math.floor(e):Math.ceil(e)}function wQ(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,s,o,a,u;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=wT(y1(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,i=lr(e/1e3),r.seconds=i%60,s=lr(i/60),r.minutes=s%60,o=lr(s/60),r.hours=o%24,t+=lr(o/24),u=lr(jR(t)),n+=u,t-=wT(y1(u)),a=lr(n/12),n%=12,r.days=t,r.months=n,r.years=a,this}function jR(e){return e*4800/146097}function y1(e){return e*146097/4800}function _Q(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=kr(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+jR(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(y1(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function SQ(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+Re(this._months/12)*31536e6:NaN}function ss(e){return function(){return this.as(e)}}var EQ=ss("ms"),CQ=ss("s"),kQ=ss("m"),xQ=ss("h"),TQ=ss("d"),DQ=ss("w"),IQ=ss("M"),bQ=ss("Q"),AQ=ss("y");function NQ(){return jr(this)}function OQ(e){return e=kr(e),this.isValid()?this[e+"s"]():NaN}function fa(e){return function(){return this.isValid()?this._data[e]:NaN}}var RQ=fa("milliseconds"),PQ=fa("seconds"),MQ=fa("minutes"),LQ=fa("hours"),$Q=fa("days"),FQ=fa("months"),UQ=fa("years");function BQ(){return lr(this.days()/7)}var Ti=Math.round,Ya={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function VQ(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function zQ(e,t,n,r){var i=jr(e).abs(),s=Ti(i.as("s")),o=Ti(i.as("m")),a=Ti(i.as("h")),u=Ti(i.as("d")),c=Ti(i.as("M")),d=Ti(i.as("w")),p=Ti(i.as("y")),m=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||o<=1&&["m"]||o<n.m&&["mm",o]||a<=1&&["h"]||a<n.h&&["hh",a]||u<=1&&["d"]||u<n.d&&["dd",u];return n.w!=null&&(m=m||d<=1&&["w"]||d<n.w&&["ww",d]),m=m||c<=1&&["M"]||c<n.M&&["MM",c]||p<=1&&["y"]||["yy",p],m[2]=t,m[3]=+e>0,m[4]=r,VQ.apply(null,m)}function jQ(e){return e===void 0?Ti:typeof e=="function"?(Ti=e,!0):!1}function YQ(e,t){return Ya[e]===void 0?!1:t===void 0?Ya[e]:(Ya[e]=t,e==="s"&&(Ya.ss=t-1),!0)}function WQ(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=Ya,i,s;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},Ya,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),i=this.localeData(),s=zQ(this,!n,r,i),n&&(s=i.pastFuture(+this,s)),i.postformat(s)}var uv=Math.abs;function Ca(e){return(e>0)-(e<0)||+e}function Cg(){if(!this.isValid())return this.localeData().invalidDate();var e=uv(this._milliseconds)/1e3,t=uv(this._days),n=uv(this._months),r,i,s,o,a=this.asSeconds(),u,c,d,p;return a?(r=lr(e/60),i=lr(r/60),e%=60,r%=60,s=lr(n/12),n%=12,o=e?e.toFixed(3).replace(/\.?0+$/,""):"",u=a<0?"-":"",c=Ca(this._months)!==Ca(a)?"-":"",d=Ca(this._days)!==Ca(a)?"-":"",p=Ca(this._milliseconds)!==Ca(a)?"-":"",u+"P"+(s?c+s+"Y":"")+(n?c+n+"M":"")+(t?d+t+"D":"")+(i||r||e?"T":"")+(i?p+i+"H":"")+(r?p+r+"M":"")+(e?p+o+"S":"")):"P0D"}var Ue=Sg.prototype;Ue.isValid=$q;Ue.abs=gQ;Ue.add=vQ;Ue.subtract=yQ;Ue.as=_Q;Ue.asMilliseconds=EQ;Ue.asSeconds=CQ;Ue.asMinutes=kQ;Ue.asHours=xQ;Ue.asDays=TQ;Ue.asWeeks=DQ;Ue.asMonths=IQ;Ue.asQuarters=bQ;Ue.asYears=AQ;Ue.valueOf=SQ;Ue._bubble=wQ;Ue.clone=NQ;Ue.get=OQ;Ue.milliseconds=RQ;Ue.seconds=PQ;Ue.minutes=MQ;Ue.hours=LQ;Ue.days=$Q;Ue.weeks=BQ;Ue.months=FQ;Ue.years=UQ;Ue.humanize=WQ;Ue.toISOString=Cg;Ue.toString=Cg;Ue.toJSON=Cg;Ue.locale=NR;Ue.localeData=RR;Ue.toIsoString=Cr("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Cg);Ue.lang=OR;de("X",0,0,"unix");de("x",0,0,"valueOf");se("x",vg);se("X",fG);et("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});et("x",function(e,t,n){n._d=new Date(Re(e))});//! moment.js
te.version="2.29.4";HH(lt);te.fn=K;te.min=Rq;te.max=Pq;te.now=Mq;te.utc=pi;te.unix=uQ;te.months=hQ;te.isDate=Ph;te.locale=Ws;te.invalid=dg;te.duration=jr;te.isMoment=Vr;te.weekdays=fQ;te.parseZone=cQ;te.localeData=is;te.isDuration=hf;te.monthsShort=dQ;te.weekdaysMin=mQ;te.defineLocale=OS;te.updateLocale=cq;te.locales=hq;te.weekdaysShort=pQ;te.normalizeUnits=kr;te.relativeTimeRounding=jQ;te.relativeTimeThreshold=YQ;te.calendarFormat=oK;te.prototype=K;te.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};var VS={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(AT,function(){var n;function r(){return n.apply(null,arguments)}function i(l){n=l}function s(l){return l instanceof Array||Object.prototype.toString.call(l)==="[object Array]"}function o(l){return l!=null&&Object.prototype.toString.call(l)==="[object Object]"}function a(l,h){return Object.prototype.hasOwnProperty.call(l,h)}function u(l){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(l).length===0;var h;for(h in l)if(a(l,h))return!1;return!0}function c(l){return l===void 0}function d(l){return typeof l=="number"||Object.prototype.toString.call(l)==="[object Number]"}function p(l){return l instanceof Date||Object.prototype.toString.call(l)==="[object Date]"}function m(l,h){var f=[],g,C=l.length;for(g=0;g<C;++g)f.push(h(l[g],g));return f}function y(l,h){for(var f in h)a(h,f)&&(l[f]=h[f]);return a(h,"toString")&&(l.toString=h.toString),a(h,"valueOf")&&(l.valueOf=h.valueOf),l}function _(l,h,f,g){return gE(l,h,f,g,!0).utc()}function S(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function x(l){return l._pf==null&&(l._pf=S()),l._pf}var E;Array.prototype.some?E=Array.prototype.some:E=function(l){var h=Object(this),f=h.length>>>0,g;for(g=0;g<f;g++)if(g in h&&l.call(this,h[g],g,h))return!0;return!1};function v(l){if(l._isValid==null){var h=x(l),f=E.call(h.parsedDateParts,function(C){return C!=null}),g=!isNaN(l._d.getTime())&&h.overflow<0&&!h.empty&&!h.invalidEra&&!h.invalidMonth&&!h.invalidWeekday&&!h.weekdayMismatch&&!h.nullInput&&!h.invalidFormat&&!h.userInvalidated&&(!h.meridiem||h.meridiem&&f);if(l._strict&&(g=g&&h.charsLeftOver===0&&h.unusedTokens.length===0&&h.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(l))l._isValid=g;else return g}return l._isValid}function k(l){var h=_(NaN);return l!=null?y(x(h),l):x(h).userInvalidated=!0,h}var T=r.momentProperties=[],b=!1;function R(l,h){var f,g,C,I=T.length;if(c(h._isAMomentObject)||(l._isAMomentObject=h._isAMomentObject),c(h._i)||(l._i=h._i),c(h._f)||(l._f=h._f),c(h._l)||(l._l=h._l),c(h._strict)||(l._strict=h._strict),c(h._tzm)||(l._tzm=h._tzm),c(h._isUTC)||(l._isUTC=h._isUTC),c(h._offset)||(l._offset=h._offset),c(h._pf)||(l._pf=x(h)),c(h._locale)||(l._locale=h._locale),I>0)for(f=0;f<I;f++)g=T[f],C=h[g],c(C)||(l[g]=C);return l}function A(l){R(this,l),this._d=new Date(l._d!=null?l._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),b===!1&&(b=!0,r.updateOffset(this),b=!1)}function N(l){return l instanceof A||l!=null&&l._isAMomentObject!=null}function Z(l){r.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+l)}function F(l,h){var f=!0;return y(function(){if(r.deprecationHandler!=null&&r.deprecationHandler(null,l),f){var g=[],C,I,M,he=arguments.length;for(I=0;I<he;I++){if(C="",typeof arguments[I]=="object"){C+=`
[`+I+"] ";for(M in arguments[0])a(arguments[0],M)&&(C+=M+": "+arguments[0][M]+", ");C=C.slice(0,-2)}else C=arguments[I];g.push(C)}Z(l+`
Arguments: `+Array.prototype.slice.call(g).join("")+`
`+new Error().stack),f=!1}return h.apply(this,arguments)},h)}var j={};function J(l,h){r.deprecationHandler!=null&&r.deprecationHandler(l,h),j[l]||(Z(h),j[l]=!0)}r.suppressDeprecationWarnings=!1,r.deprecationHandler=null;function X(l){return typeof Function!="undefined"&&l instanceof Function||Object.prototype.toString.call(l)==="[object Function]"}function ue(l){var h,f;for(f in l)a(l,f)&&(h=l[f],X(h)?this[f]=h:this["_"+f]=h);this._config=l,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function oe(l,h){var f=y({},l),g;for(g in h)a(h,g)&&(o(l[g])&&o(h[g])?(f[g]={},y(f[g],l[g]),y(f[g],h[g])):h[g]!=null?f[g]=h[g]:delete f[g]);for(g in l)a(l,g)&&!a(h,g)&&o(l[g])&&(f[g]=y({},f[g]));return f}function Te(l){l!=null&&this.set(l)}var ge;Object.keys?ge=Object.keys:ge=function(l){var h,f=[];for(h in l)a(l,h)&&f.push(h);return f};var $={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function z(l,h,f){var g=this._calendar[l]||this._calendar.sameElse;return X(g)?g.call(h,f):g}function P(l,h,f){var g=""+Math.abs(l),C=h-g.length,I=l>=0;return(I?f?"+":"":"-")+Math.pow(10,Math.max(0,C)).toString().substr(1)+g}var ee=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,U=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,B={},Y={};function V(l,h,f,g){var C=g;typeof g=="string"&&(C=function(){return this[g]()}),l&&(Y[l]=C),h&&(Y[h[0]]=function(){return P(C.apply(this,arguments),h[1],h[2])}),f&&(Y[f]=function(){return this.localeData().ordinal(C.apply(this,arguments),l)})}function D(l){return l.match(/\[[\s\S]/)?l.replace(/^\[|\]$/g,""):l.replace(/\\/g,"")}function le(l){var h=l.match(ee),f,g;for(f=0,g=h.length;f<g;f++)Y[h[f]]?h[f]=Y[h[f]]:h[f]=D(h[f]);return function(C){var I="",M;for(M=0;M<g;M++)I+=X(h[M])?h[M].call(C,l):h[M];return I}}function W(l,h){return l.isValid()?(h=we(h,l.localeData()),B[h]=B[h]||le(h),B[h](l)):l.localeData().invalidDate()}function we(l,h){var f=5;function g(C){return h.longDateFormat(C)||C}for(U.lastIndex=0;f>=0&&U.test(l);)l=l.replace(U,g),U.lastIndex=0,f-=1;return l}var me={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Be(l){var h=this._longDateFormat[l],f=this._longDateFormat[l.toUpperCase()];return h||!f?h:(this._longDateFormat[l]=f.match(ee).map(function(g){return g==="MMMM"||g==="MM"||g==="DD"||g==="dddd"?g.slice(1):g}).join(""),this._longDateFormat[l])}var _e="Invalid date";function ne(){return this._invalidDate}var De="%d",ke=/\d{1,2}/;function ct(l){return this._ordinal.replace("%d",l)}var Le={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ft(l,h,f,g){var C=this._relativeTime[f];return X(C)?C(l,h,f,g):C.replace(/%d/i,l)}function mo(l,h){var f=this._relativeTime[l>0?"future":"past"];return X(f)?f(h):f.replace(/%s/i,h)}var yt={};function It(l,h){var f=l.toLowerCase();yt[f]=yt[f+"s"]=yt[h]=l}function Ht(l){return typeof l=="string"?yt[l]||yt[l.toLowerCase()]:void 0}function Dn(l){var h={},f,g;for(g in l)a(l,g)&&(f=Ht(g),f&&(h[f]=l[g]));return h}var ve={};function Ne(l,h){ve[l]=h}function Jl(l){var h=[],f;for(f in l)a(l,f)&&h.push({unit:f,priority:ve[f]});return h.sort(function(g,C){return g.priority-C.priority}),h}function as(l){return l%4===0&&l%100!==0||l%400===0}function bt(l){return l<0?Math.ceil(l)||0:Math.floor(l)}function Oe(l){var h=+l,f=0;return h!==0&&isFinite(h)&&(f=bt(h)),f}function pa(l,h){return function(f){return f!=null?(QS(this,l,f),r.updateOffset(this,h),this):Uh(this,l)}}function Uh(l,h){return l.isValid()?l._d["get"+(l._isUTC?"UTC":"")+h]():NaN}function QS(l,h,f){l.isValid()&&!isNaN(f)&&(h==="FullYear"&&as(l.year())&&l.month()===1&&l.date()===29?(f=Oe(f),l._d["set"+(l._isUTC?"UTC":"")+h](f,l.month(),Hh(f,l.month()))):l._d["set"+(l._isUTC?"UTC":"")+h](f))}function iP(l){return l=Ht(l),X(this[l])?this[l]():this}function sP(l,h){if(typeof l=="object"){l=Dn(l);var f=Jl(l),g,C=f.length;for(g=0;g<C;g++)this[f[g].unit](l[f[g].unit])}else if(l=Ht(l),X(this[l]))return this[l](h);return this}var XS=/\d/,Yn=/\d\d/,JS=/\d{3}/,bg=/\d{4}/,Bh=/[+-]?\d{6}/,rt=/\d\d?/,ZS=/\d\d\d\d?/,eE=/\d\d\d\d\d\d?/,Vh=/\d{1,3}/,Ag=/\d{1,4}/,zh=/[+-]?\d{1,6}/,ma=/\d+/,jh=/[+-]?\d+/,oP=/Z|[+-]\d\d:?\d\d/gi,Yh=/Z|[+-]\d\d(?::?\d\d)?/gi,aP=/[+-]?\d+(\.\d{1,3})?/,Zl=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Wh;Wh={};function ie(l,h,f){Wh[l]=X(h)?h:function(g,C){return g&&f?f:h}}function lP(l,h){return a(Wh,l)?Wh[l](h._strict,h._locale):new RegExp(uP(l))}function uP(l){return Wn(l.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(h,f,g,C,I){return f||g||C||I}))}function Wn(l){return l.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Ng={};function Xe(l,h){var f,g=h,C;for(typeof l=="string"&&(l=[l]),d(h)&&(g=function(I,M){M[h]=Oe(I)}),C=l.length,f=0;f<C;f++)Ng[l[f]]=g}function eu(l,h){Xe(l,function(f,g,C,I){C._w=C._w||{},h(f,C._w,C,I)})}function cP(l,h,f){h!=null&&a(Ng,l)&&Ng[l](h,f._a,f,l)}var un=0,gi=1,Yr=2,Ut=3,xr=4,vi=5,go=6,hP=7,dP=8;function fP(l,h){return(l%h+h)%h}var At;Array.prototype.indexOf?At=Array.prototype.indexOf:At=function(l){var h;for(h=0;h<this.length;++h)if(this[h]===l)return h;return-1};function Hh(l,h){if(isNaN(l)||isNaN(h))return NaN;var f=fP(h,12);return l+=(h-f)/12,f===1?as(l)?29:28:31-f%7%2}V("M",["MM",2],"Mo",function(){return this.month()+1}),V("MMM",0,0,function(l){return this.localeData().monthsShort(this,l)}),V("MMMM",0,0,function(l){return this.localeData().months(this,l)}),It("month","M"),Ne("month",8),ie("M",rt),ie("MM",rt,Yn),ie("MMM",function(l,h){return h.monthsShortRegex(l)}),ie("MMMM",function(l,h){return h.monthsRegex(l)}),Xe(["M","MM"],function(l,h){h[gi]=Oe(l)-1}),Xe(["MMM","MMMM"],function(l,h,f,g){var C=f._locale.monthsParse(l,g,f._strict);C!=null?h[gi]=C:x(f).invalidMonth=l});var pP="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),tE="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),nE=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,mP=Zl,gP=Zl;function vP(l,h){return l?s(this._months)?this._months[l.month()]:this._months[(this._months.isFormat||nE).test(h)?"format":"standalone"][l.month()]:s(this._months)?this._months:this._months.standalone}function yP(l,h){return l?s(this._monthsShort)?this._monthsShort[l.month()]:this._monthsShort[nE.test(h)?"format":"standalone"][l.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function wP(l,h,f){var g,C,I,M=l.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],g=0;g<12;++g)I=_([2e3,g]),this._shortMonthsParse[g]=this.monthsShort(I,"").toLocaleLowerCase(),this._longMonthsParse[g]=this.months(I,"").toLocaleLowerCase();return f?h==="MMM"?(C=At.call(this._shortMonthsParse,M),C!==-1?C:null):(C=At.call(this._longMonthsParse,M),C!==-1?C:null):h==="MMM"?(C=At.call(this._shortMonthsParse,M),C!==-1?C:(C=At.call(this._longMonthsParse,M),C!==-1?C:null)):(C=At.call(this._longMonthsParse,M),C!==-1?C:(C=At.call(this._shortMonthsParse,M),C!==-1?C:null))}function _P(l,h,f){var g,C,I;if(this._monthsParseExact)return wP.call(this,l,h,f);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),g=0;g<12;g++){if(C=_([2e3,g]),f&&!this._longMonthsParse[g]&&(this._longMonthsParse[g]=new RegExp("^"+this.months(C,"").replace(".","")+"$","i"),this._shortMonthsParse[g]=new RegExp("^"+this.monthsShort(C,"").replace(".","")+"$","i")),!f&&!this._monthsParse[g]&&(I="^"+this.months(C,"")+"|^"+this.monthsShort(C,""),this._monthsParse[g]=new RegExp(I.replace(".",""),"i")),f&&h==="MMMM"&&this._longMonthsParse[g].test(l))return g;if(f&&h==="MMM"&&this._shortMonthsParse[g].test(l))return g;if(!f&&this._monthsParse[g].test(l))return g}}function rE(l,h){var f;if(!l.isValid())return l;if(typeof h=="string"){if(/^\d+$/.test(h))h=Oe(h);else if(h=l.localeData().monthsParse(h),!d(h))return l}return f=Math.min(l.date(),Hh(l.year(),h)),l._d["set"+(l._isUTC?"UTC":"")+"Month"](h,f),l}function iE(l){return l!=null?(rE(this,l),r.updateOffset(this,!0),this):Uh(this,"Month")}function SP(){return Hh(this.year(),this.month())}function EP(l){return this._monthsParseExact?(a(this,"_monthsRegex")||sE.call(this),l?this._monthsShortStrictRegex:this._monthsShortRegex):(a(this,"_monthsShortRegex")||(this._monthsShortRegex=mP),this._monthsShortStrictRegex&&l?this._monthsShortStrictRegex:this._monthsShortRegex)}function CP(l){return this._monthsParseExact?(a(this,"_monthsRegex")||sE.call(this),l?this._monthsStrictRegex:this._monthsRegex):(a(this,"_monthsRegex")||(this._monthsRegex=gP),this._monthsStrictRegex&&l?this._monthsStrictRegex:this._monthsRegex)}function sE(){function l(M,he){return he.length-M.length}var h=[],f=[],g=[],C,I;for(C=0;C<12;C++)I=_([2e3,C]),h.push(this.monthsShort(I,"")),f.push(this.months(I,"")),g.push(this.months(I,"")),g.push(this.monthsShort(I,""));for(h.sort(l),f.sort(l),g.sort(l),C=0;C<12;C++)h[C]=Wn(h[C]),f[C]=Wn(f[C]);for(C=0;C<24;C++)g[C]=Wn(g[C]);this._monthsRegex=new RegExp("^("+g.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+h.join("|")+")","i")}V("Y",0,0,function(){var l=this.year();return l<=9999?P(l,4):"+"+l}),V(0,["YY",2],0,function(){return this.year()%100}),V(0,["YYYY",4],0,"year"),V(0,["YYYYY",5],0,"year"),V(0,["YYYYYY",6,!0],0,"year"),It("year","y"),Ne("year",1),ie("Y",jh),ie("YY",rt,Yn),ie("YYYY",Ag,bg),ie("YYYYY",zh,Bh),ie("YYYYYY",zh,Bh),Xe(["YYYYY","YYYYYY"],un),Xe("YYYY",function(l,h){h[un]=l.length===2?r.parseTwoDigitYear(l):Oe(l)}),Xe("YY",function(l,h){h[un]=r.parseTwoDigitYear(l)}),Xe("Y",function(l,h){h[un]=parseInt(l,10)});function tu(l){return as(l)?366:365}r.parseTwoDigitYear=function(l){return Oe(l)+(Oe(l)>68?1900:2e3)};var oE=pa("FullYear",!0);function kP(){return as(this.year())}function xP(l,h,f,g,C,I,M){var he;return l<100&&l>=0?(he=new Date(l+400,h,f,g,C,I,M),isFinite(he.getFullYear())&&he.setFullYear(l)):he=new Date(l,h,f,g,C,I,M),he}function nu(l){var h,f;return l<100&&l>=0?(f=Array.prototype.slice.call(arguments),f[0]=l+400,h=new Date(Date.UTC.apply(null,f)),isFinite(h.getUTCFullYear())&&h.setUTCFullYear(l)):h=new Date(Date.UTC.apply(null,arguments)),h}function Gh(l,h,f){var g=7+h-f,C=(7+nu(l,0,g).getUTCDay()-h)%7;return-C+g-1}function aE(l,h,f,g,C){var I=(7+f-g)%7,M=Gh(l,g,C),he=1+7*(h-1)+I+M,Ae,Je;return he<=0?(Ae=l-1,Je=tu(Ae)+he):he>tu(l)?(Ae=l+1,Je=he-tu(l)):(Ae=l,Je=he),{year:Ae,dayOfYear:Je}}function ru(l,h,f){var g=Gh(l.year(),h,f),C=Math.floor((l.dayOfYear()-g-1)/7)+1,I,M;return C<1?(M=l.year()-1,I=C+yi(M,h,f)):C>yi(l.year(),h,f)?(I=C-yi(l.year(),h,f),M=l.year()+1):(M=l.year(),I=C),{week:I,year:M}}function yi(l,h,f){var g=Gh(l,h,f),C=Gh(l+1,h,f);return(tu(l)-g+C)/7}V("w",["ww",2],"wo","week"),V("W",["WW",2],"Wo","isoWeek"),It("week","w"),It("isoWeek","W"),Ne("week",5),Ne("isoWeek",5),ie("w",rt),ie("ww",rt,Yn),ie("W",rt),ie("WW",rt,Yn),eu(["w","ww","W","WW"],function(l,h,f,g){h[g.substr(0,1)]=Oe(l)});function TP(l){return ru(l,this._week.dow,this._week.doy).week}var DP={dow:0,doy:6};function IP(){return this._week.dow}function bP(){return this._week.doy}function AP(l){var h=this.localeData().week(this);return l==null?h:this.add((l-h)*7,"d")}function NP(l){var h=ru(this,1,4).week;return l==null?h:this.add((l-h)*7,"d")}V("d",0,"do","day"),V("dd",0,0,function(l){return this.localeData().weekdaysMin(this,l)}),V("ddd",0,0,function(l){return this.localeData().weekdaysShort(this,l)}),V("dddd",0,0,function(l){return this.localeData().weekdays(this,l)}),V("e",0,0,"weekday"),V("E",0,0,"isoWeekday"),It("day","d"),It("weekday","e"),It("isoWeekday","E"),Ne("day",11),Ne("weekday",11),Ne("isoWeekday",11),ie("d",rt),ie("e",rt),ie("E",rt),ie("dd",function(l,h){return h.weekdaysMinRegex(l)}),ie("ddd",function(l,h){return h.weekdaysShortRegex(l)}),ie("dddd",function(l,h){return h.weekdaysRegex(l)}),eu(["dd","ddd","dddd"],function(l,h,f,g){var C=f._locale.weekdaysParse(l,g,f._strict);C!=null?h.d=C:x(f).invalidWeekday=l}),eu(["d","e","E"],function(l,h,f,g){h[g]=Oe(l)});function OP(l,h){return typeof l!="string"?l:isNaN(l)?(l=h.weekdaysParse(l),typeof l=="number"?l:null):parseInt(l,10)}function RP(l,h){return typeof l=="string"?h.weekdaysParse(l)%7||7:isNaN(l)?null:l}function Og(l,h){return l.slice(h,7).concat(l.slice(0,h))}var PP="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),lE="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),MP="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),LP=Zl,$P=Zl,FP=Zl;function UP(l,h){var f=s(this._weekdays)?this._weekdays:this._weekdays[l&&l!==!0&&this._weekdays.isFormat.test(h)?"format":"standalone"];return l===!0?Og(f,this._week.dow):l?f[l.day()]:f}function BP(l){return l===!0?Og(this._weekdaysShort,this._week.dow):l?this._weekdaysShort[l.day()]:this._weekdaysShort}function VP(l){return l===!0?Og(this._weekdaysMin,this._week.dow):l?this._weekdaysMin[l.day()]:this._weekdaysMin}function zP(l,h,f){var g,C,I,M=l.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],g=0;g<7;++g)I=_([2e3,1]).day(g),this._minWeekdaysParse[g]=this.weekdaysMin(I,"").toLocaleLowerCase(),this._shortWeekdaysParse[g]=this.weekdaysShort(I,"").toLocaleLowerCase(),this._weekdaysParse[g]=this.weekdays(I,"").toLocaleLowerCase();return f?h==="dddd"?(C=At.call(this._weekdaysParse,M),C!==-1?C:null):h==="ddd"?(C=At.call(this._shortWeekdaysParse,M),C!==-1?C:null):(C=At.call(this._minWeekdaysParse,M),C!==-1?C:null):h==="dddd"?(C=At.call(this._weekdaysParse,M),C!==-1||(C=At.call(this._shortWeekdaysParse,M),C!==-1)?C:(C=At.call(this._minWeekdaysParse,M),C!==-1?C:null)):h==="ddd"?(C=At.call(this._shortWeekdaysParse,M),C!==-1||(C=At.call(this._weekdaysParse,M),C!==-1)?C:(C=At.call(this._minWeekdaysParse,M),C!==-1?C:null)):(C=At.call(this._minWeekdaysParse,M),C!==-1||(C=At.call(this._weekdaysParse,M),C!==-1)?C:(C=At.call(this._shortWeekdaysParse,M),C!==-1?C:null))}function jP(l,h,f){var g,C,I;if(this._weekdaysParseExact)return zP.call(this,l,h,f);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),g=0;g<7;g++){if(C=_([2e3,1]).day(g),f&&!this._fullWeekdaysParse[g]&&(this._fullWeekdaysParse[g]=new RegExp("^"+this.weekdays(C,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[g]=new RegExp("^"+this.weekdaysShort(C,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[g]=new RegExp("^"+this.weekdaysMin(C,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[g]||(I="^"+this.weekdays(C,"")+"|^"+this.weekdaysShort(C,"")+"|^"+this.weekdaysMin(C,""),this._weekdaysParse[g]=new RegExp(I.replace(".",""),"i")),f&&h==="dddd"&&this._fullWeekdaysParse[g].test(l))return g;if(f&&h==="ddd"&&this._shortWeekdaysParse[g].test(l))return g;if(f&&h==="dd"&&this._minWeekdaysParse[g].test(l))return g;if(!f&&this._weekdaysParse[g].test(l))return g}}function YP(l){if(!this.isValid())return l!=null?this:NaN;var h=this._isUTC?this._d.getUTCDay():this._d.getDay();return l!=null?(l=OP(l,this.localeData()),this.add(l-h,"d")):h}function WP(l){if(!this.isValid())return l!=null?this:NaN;var h=(this.day()+7-this.localeData()._week.dow)%7;return l==null?h:this.add(l-h,"d")}function HP(l){if(!this.isValid())return l!=null?this:NaN;if(l!=null){var h=RP(l,this.localeData());return this.day(this.day()%7?h:h-7)}else return this.day()||7}function GP(l){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Rg.call(this),l?this._weekdaysStrictRegex:this._weekdaysRegex):(a(this,"_weekdaysRegex")||(this._weekdaysRegex=LP),this._weekdaysStrictRegex&&l?this._weekdaysStrictRegex:this._weekdaysRegex)}function qP(l){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Rg.call(this),l?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(a(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=$P),this._weekdaysShortStrictRegex&&l?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function KP(l){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Rg.call(this),l?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(a(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=FP),this._weekdaysMinStrictRegex&&l?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Rg(){function l(In,Ci){return Ci.length-In.length}var h=[],f=[],g=[],C=[],I,M,he,Ae,Je;for(I=0;I<7;I++)M=_([2e3,1]).day(I),he=Wn(this.weekdaysMin(M,"")),Ae=Wn(this.weekdaysShort(M,"")),Je=Wn(this.weekdays(M,"")),h.push(he),f.push(Ae),g.push(Je),C.push(he),C.push(Ae),C.push(Je);h.sort(l),f.sort(l),g.sort(l),C.sort(l),this._weekdaysRegex=new RegExp("^("+C.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+g.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+f.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+h.join("|")+")","i")}function Pg(){return this.hours()%12||12}function QP(){return this.hours()||24}V("H",["HH",2],0,"hour"),V("h",["hh",2],0,Pg),V("k",["kk",2],0,QP),V("hmm",0,0,function(){return""+Pg.apply(this)+P(this.minutes(),2)}),V("hmmss",0,0,function(){return""+Pg.apply(this)+P(this.minutes(),2)+P(this.seconds(),2)}),V("Hmm",0,0,function(){return""+this.hours()+P(this.minutes(),2)}),V("Hmmss",0,0,function(){return""+this.hours()+P(this.minutes(),2)+P(this.seconds(),2)});function uE(l,h){V(l,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),h)})}uE("a",!0),uE("A",!1),It("hour","h"),Ne("hour",13);function cE(l,h){return h._meridiemParse}ie("a",cE),ie("A",cE),ie("H",rt),ie("h",rt),ie("k",rt),ie("HH",rt,Yn),ie("hh",rt,Yn),ie("kk",rt,Yn),ie("hmm",ZS),ie("hmmss",eE),ie("Hmm",ZS),ie("Hmmss",eE),Xe(["H","HH"],Ut),Xe(["k","kk"],function(l,h,f){var g=Oe(l);h[Ut]=g===24?0:g}),Xe(["a","A"],function(l,h,f){f._isPm=f._locale.isPM(l),f._meridiem=l}),Xe(["h","hh"],function(l,h,f){h[Ut]=Oe(l),x(f).bigHour=!0}),Xe("hmm",function(l,h,f){var g=l.length-2;h[Ut]=Oe(l.substr(0,g)),h[xr]=Oe(l.substr(g)),x(f).bigHour=!0}),Xe("hmmss",function(l,h,f){var g=l.length-4,C=l.length-2;h[Ut]=Oe(l.substr(0,g)),h[xr]=Oe(l.substr(g,2)),h[vi]=Oe(l.substr(C)),x(f).bigHour=!0}),Xe("Hmm",function(l,h,f){var g=l.length-2;h[Ut]=Oe(l.substr(0,g)),h[xr]=Oe(l.substr(g))}),Xe("Hmmss",function(l,h,f){var g=l.length-4,C=l.length-2;h[Ut]=Oe(l.substr(0,g)),h[xr]=Oe(l.substr(g,2)),h[vi]=Oe(l.substr(C))});function XP(l){return(l+"").toLowerCase().charAt(0)==="p"}var JP=/[ap]\.?m?\.?/i,ZP=pa("Hours",!0);function e4(l,h,f){return l>11?f?"pm":"PM":f?"am":"AM"}var hE={calendar:$,longDateFormat:me,invalidDate:_e,ordinal:De,dayOfMonthOrdinalParse:ke,relativeTime:Le,months:pP,monthsShort:tE,week:DP,weekdays:PP,weekdaysMin:MP,weekdaysShort:lE,meridiemParse:JP},ht={},iu={},su;function t4(l,h){var f,g=Math.min(l.length,h.length);for(f=0;f<g;f+=1)if(l[f]!==h[f])return f;return g}function dE(l){return l&&l.toLowerCase().replace("_","-")}function n4(l){for(var h=0,f,g,C,I;h<l.length;){for(I=dE(l[h]).split("-"),f=I.length,g=dE(l[h+1]),g=g?g.split("-"):null;f>0;){if(C=qh(I.slice(0,f).join("-")),C)return C;if(g&&g.length>=f&&t4(I,g)>=f-1)break;f--}h++}return su}function r4(l){return l.match("^[^/\\\\]*$")!=null}function qh(l){var h=null,f;if(ht[l]===void 0&&!0&&e&&e.exports&&r4(l))try{h=su._abbr,f=NT,f("./locale/"+l),ls(h)}catch{ht[l]=null}return ht[l]}function ls(l,h){var f;return l&&(c(h)?f=wi(l):f=Mg(l,h),f?su=f:typeof console!="undefined"&&console.warn&&console.warn("Locale "+l+" not found. Did you forget to load it?")),su._abbr}function Mg(l,h){if(h!==null){var f,g=hE;if(h.abbr=l,ht[l]!=null)J("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),g=ht[l]._config;else if(h.parentLocale!=null)if(ht[h.parentLocale]!=null)g=ht[h.parentLocale]._config;else if(f=qh(h.parentLocale),f!=null)g=f._config;else return iu[h.parentLocale]||(iu[h.parentLocale]=[]),iu[h.parentLocale].push({name:l,config:h}),null;return ht[l]=new Te(oe(g,h)),iu[l]&&iu[l].forEach(function(C){Mg(C.name,C.config)}),ls(l),ht[l]}else return delete ht[l],null}function i4(l,h){if(h!=null){var f,g,C=hE;ht[l]!=null&&ht[l].parentLocale!=null?ht[l].set(oe(ht[l]._config,h)):(g=qh(l),g!=null&&(C=g._config),h=oe(C,h),g==null&&(h.abbr=l),f=new Te(h),f.parentLocale=ht[l],ht[l]=f),ls(l)}else ht[l]!=null&&(ht[l].parentLocale!=null?(ht[l]=ht[l].parentLocale,l===ls()&&ls(l)):ht[l]!=null&&delete ht[l]);return ht[l]}function wi(l){var h;if(l&&l._locale&&l._locale._abbr&&(l=l._locale._abbr),!l)return su;if(!s(l)){if(h=qh(l),h)return h;l=[l]}return n4(l)}function s4(){return ge(ht)}function Lg(l){var h,f=l._a;return f&&x(l).overflow===-2&&(h=f[gi]<0||f[gi]>11?gi:f[Yr]<1||f[Yr]>Hh(f[un],f[gi])?Yr:f[Ut]<0||f[Ut]>24||f[Ut]===24&&(f[xr]!==0||f[vi]!==0||f[go]!==0)?Ut:f[xr]<0||f[xr]>59?xr:f[vi]<0||f[vi]>59?vi:f[go]<0||f[go]>999?go:-1,x(l)._overflowDayOfYear&&(h<un||h>Yr)&&(h=Yr),x(l)._overflowWeeks&&h===-1&&(h=hP),x(l)._overflowWeekday&&h===-1&&(h=dP),x(l).overflow=h),l}var o4=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,a4=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,l4=/Z|[+-]\d\d(?::?\d\d)?/,Kh=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],$g=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],u4=/^\/?Date\((-?\d+)/i,c4=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,h4={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function fE(l){var h,f,g=l._i,C=o4.exec(g)||a4.exec(g),I,M,he,Ae,Je=Kh.length,In=$g.length;if(C){for(x(l).iso=!0,h=0,f=Je;h<f;h++)if(Kh[h][1].exec(C[1])){M=Kh[h][0],I=Kh[h][2]!==!1;break}if(M==null){l._isValid=!1;return}if(C[3]){for(h=0,f=In;h<f;h++)if($g[h][1].exec(C[3])){he=(C[2]||" ")+$g[h][0];break}if(he==null){l._isValid=!1;return}}if(!I&&he!=null){l._isValid=!1;return}if(C[4])if(l4.exec(C[4]))Ae="Z";else{l._isValid=!1;return}l._f=M+(he||"")+(Ae||""),Ug(l)}else l._isValid=!1}function d4(l,h,f,g,C,I){var M=[f4(l),tE.indexOf(h),parseInt(f,10),parseInt(g,10),parseInt(C,10)];return I&&M.push(parseInt(I,10)),M}function f4(l){var h=parseInt(l,10);return h<=49?2e3+h:h<=999?1900+h:h}function p4(l){return l.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function m4(l,h,f){if(l){var g=lE.indexOf(l),C=new Date(h[0],h[1],h[2]).getDay();if(g!==C)return x(f).weekdayMismatch=!0,f._isValid=!1,!1}return!0}function g4(l,h,f){if(l)return h4[l];if(h)return 0;var g=parseInt(f,10),C=g%100,I=(g-C)/100;return I*60+C}function pE(l){var h=c4.exec(p4(l._i)),f;if(h){if(f=d4(h[4],h[3],h[2],h[5],h[6],h[7]),!m4(h[1],f,l))return;l._a=f,l._tzm=g4(h[8],h[9],h[10]),l._d=nu.apply(null,l._a),l._d.setUTCMinutes(l._d.getUTCMinutes()-l._tzm),x(l).rfc2822=!0}else l._isValid=!1}function v4(l){var h=u4.exec(l._i);if(h!==null){l._d=new Date(+h[1]);return}if(fE(l),l._isValid===!1)delete l._isValid;else return;if(pE(l),l._isValid===!1)delete l._isValid;else return;l._strict?l._isValid=!1:r.createFromInputFallback(l)}r.createFromInputFallback=F("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(l){l._d=new Date(l._i+(l._useUTC?" UTC":""))});function ga(l,h,f){return l!=null?l:h!=null?h:f}function y4(l){var h=new Date(r.now());return l._useUTC?[h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate()]:[h.getFullYear(),h.getMonth(),h.getDate()]}function Fg(l){var h,f,g=[],C,I,M;if(!l._d){for(C=y4(l),l._w&&l._a[Yr]==null&&l._a[gi]==null&&w4(l),l._dayOfYear!=null&&(M=ga(l._a[un],C[un]),(l._dayOfYear>tu(M)||l._dayOfYear===0)&&(x(l)._overflowDayOfYear=!0),f=nu(M,0,l._dayOfYear),l._a[gi]=f.getUTCMonth(),l._a[Yr]=f.getUTCDate()),h=0;h<3&&l._a[h]==null;++h)l._a[h]=g[h]=C[h];for(;h<7;h++)l._a[h]=g[h]=l._a[h]==null?h===2?1:0:l._a[h];l._a[Ut]===24&&l._a[xr]===0&&l._a[vi]===0&&l._a[go]===0&&(l._nextDay=!0,l._a[Ut]=0),l._d=(l._useUTC?nu:xP).apply(null,g),I=l._useUTC?l._d.getUTCDay():l._d.getDay(),l._tzm!=null&&l._d.setUTCMinutes(l._d.getUTCMinutes()-l._tzm),l._nextDay&&(l._a[Ut]=24),l._w&&typeof l._w.d!="undefined"&&l._w.d!==I&&(x(l).weekdayMismatch=!0)}}function w4(l){var h,f,g,C,I,M,he,Ae,Je;h=l._w,h.GG!=null||h.W!=null||h.E!=null?(I=1,M=4,f=ga(h.GG,l._a[un],ru(it(),1,4).year),g=ga(h.W,1),C=ga(h.E,1),(C<1||C>7)&&(Ae=!0)):(I=l._locale._week.dow,M=l._locale._week.doy,Je=ru(it(),I,M),f=ga(h.gg,l._a[un],Je.year),g=ga(h.w,Je.week),h.d!=null?(C=h.d,(C<0||C>6)&&(Ae=!0)):h.e!=null?(C=h.e+I,(h.e<0||h.e>6)&&(Ae=!0)):C=I),g<1||g>yi(f,I,M)?x(l)._overflowWeeks=!0:Ae!=null?x(l)._overflowWeekday=!0:(he=aE(f,g,C,I,M),l._a[un]=he.year,l._dayOfYear=he.dayOfYear)}r.ISO_8601=function(){},r.RFC_2822=function(){};function Ug(l){if(l._f===r.ISO_8601){fE(l);return}if(l._f===r.RFC_2822){pE(l);return}l._a=[],x(l).empty=!0;var h=""+l._i,f,g,C,I,M,he=h.length,Ae=0,Je,In;for(C=we(l._f,l._locale).match(ee)||[],In=C.length,f=0;f<In;f++)I=C[f],g=(h.match(lP(I,l))||[])[0],g&&(M=h.substr(0,h.indexOf(g)),M.length>0&&x(l).unusedInput.push(M),h=h.slice(h.indexOf(g)+g.length),Ae+=g.length),Y[I]?(g?x(l).empty=!1:x(l).unusedTokens.push(I),cP(I,g,l)):l._strict&&!g&&x(l).unusedTokens.push(I);x(l).charsLeftOver=he-Ae,h.length>0&&x(l).unusedInput.push(h),l._a[Ut]<=12&&x(l).bigHour===!0&&l._a[Ut]>0&&(x(l).bigHour=void 0),x(l).parsedDateParts=l._a.slice(0),x(l).meridiem=l._meridiem,l._a[Ut]=_4(l._locale,l._a[Ut],l._meridiem),Je=x(l).era,Je!==null&&(l._a[un]=l._locale.erasConvertYear(Je,l._a[un])),Fg(l),Lg(l)}function _4(l,h,f){var g;return f==null?h:l.meridiemHour!=null?l.meridiemHour(h,f):(l.isPM!=null&&(g=l.isPM(f),g&&h<12&&(h+=12),!g&&h===12&&(h=0)),h)}function S4(l){var h,f,g,C,I,M,he=!1,Ae=l._f.length;if(Ae===0){x(l).invalidFormat=!0,l._d=new Date(NaN);return}for(C=0;C<Ae;C++)I=0,M=!1,h=R({},l),l._useUTC!=null&&(h._useUTC=l._useUTC),h._f=l._f[C],Ug(h),v(h)&&(M=!0),I+=x(h).charsLeftOver,I+=x(h).unusedTokens.length*10,x(h).score=I,he?I<g&&(g=I,f=h):(g==null||I<g||M)&&(g=I,f=h,M&&(he=!0));y(l,f||h)}function E4(l){if(!l._d){var h=Dn(l._i),f=h.day===void 0?h.date:h.day;l._a=m([h.year,h.month,f,h.hour,h.minute,h.second,h.millisecond],function(g){return g&&parseInt(g,10)}),Fg(l)}}function C4(l){var h=new A(Lg(mE(l)));return h._nextDay&&(h.add(1,"d"),h._nextDay=void 0),h}function mE(l){var h=l._i,f=l._f;return l._locale=l._locale||wi(l._l),h===null||f===void 0&&h===""?k({nullInput:!0}):(typeof h=="string"&&(l._i=h=l._locale.preparse(h)),N(h)?new A(Lg(h)):(p(h)?l._d=h:s(f)?S4(l):f?Ug(l):k4(l),v(l)||(l._d=null),l))}function k4(l){var h=l._i;c(h)?l._d=new Date(r.now()):p(h)?l._d=new Date(h.valueOf()):typeof h=="string"?v4(l):s(h)?(l._a=m(h.slice(0),function(f){return parseInt(f,10)}),Fg(l)):o(h)?E4(l):d(h)?l._d=new Date(h):r.createFromInputFallback(l)}function gE(l,h,f,g,C){var I={};return(h===!0||h===!1)&&(g=h,h=void 0),(f===!0||f===!1)&&(g=f,f=void 0),(o(l)&&u(l)||s(l)&&l.length===0)&&(l=void 0),I._isAMomentObject=!0,I._useUTC=I._isUTC=C,I._l=f,I._i=l,I._f=h,I._strict=g,C4(I)}function it(l,h,f,g){return gE(l,h,f,g,!1)}var x4=F("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var l=it.apply(null,arguments);return this.isValid()&&l.isValid()?l<this?this:l:k()}),T4=F("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var l=it.apply(null,arguments);return this.isValid()&&l.isValid()?l>this?this:l:k()});function vE(l,h){var f,g;if(h.length===1&&s(h[0])&&(h=h[0]),!h.length)return it();for(f=h[0],g=1;g<h.length;++g)(!h[g].isValid()||h[g][l](f))&&(f=h[g]);return f}function D4(){var l=[].slice.call(arguments,0);return vE("isBefore",l)}function I4(){var l=[].slice.call(arguments,0);return vE("isAfter",l)}var b4=function(){return Date.now?Date.now():+new Date},ou=["year","quarter","month","week","day","hour","minute","second","millisecond"];function A4(l){var h,f=!1,g,C=ou.length;for(h in l)if(a(l,h)&&!(At.call(ou,h)!==-1&&(l[h]==null||!isNaN(l[h]))))return!1;for(g=0;g<C;++g)if(l[ou[g]]){if(f)return!1;parseFloat(l[ou[g]])!==Oe(l[ou[g]])&&(f=!0)}return!0}function N4(){return this._isValid}function O4(){return Tr(NaN)}function Qh(l){var h=Dn(l),f=h.year||0,g=h.quarter||0,C=h.month||0,I=h.week||h.isoWeek||0,M=h.day||0,he=h.hour||0,Ae=h.minute||0,Je=h.second||0,In=h.millisecond||0;this._isValid=A4(h),this._milliseconds=+In+Je*1e3+Ae*6e4+he*1e3*60*60,this._days=+M+I*7,this._months=+C+g*3+f*12,this._data={},this._locale=wi(),this._bubble()}function Xh(l){return l instanceof Qh}function Bg(l){return l<0?Math.round(-1*l)*-1:Math.round(l)}function R4(l,h,f){var g=Math.min(l.length,h.length),C=Math.abs(l.length-h.length),I=0,M;for(M=0;M<g;M++)(f&&l[M]!==h[M]||!f&&Oe(l[M])!==Oe(h[M]))&&I++;return I+C}function yE(l,h){V(l,0,0,function(){var f=this.utcOffset(),g="+";return f<0&&(f=-f,g="-"),g+P(~~(f/60),2)+h+P(~~f%60,2)})}yE("Z",":"),yE("ZZ",""),ie("Z",Yh),ie("ZZ",Yh),Xe(["Z","ZZ"],function(l,h,f){f._useUTC=!0,f._tzm=Vg(Yh,l)});var P4=/([\+\-]|\d\d)/gi;function Vg(l,h){var f=(h||"").match(l),g,C,I;return f===null?null:(g=f[f.length-1]||[],C=(g+"").match(P4)||["-",0,0],I=+(C[1]*60)+Oe(C[2]),I===0?0:C[0]==="+"?I:-I)}function zg(l,h){var f,g;return h._isUTC?(f=h.clone(),g=(N(l)||p(l)?l.valueOf():it(l).valueOf())-f.valueOf(),f._d.setTime(f._d.valueOf()+g),r.updateOffset(f,!1),f):it(l).local()}function jg(l){return-Math.round(l._d.getTimezoneOffset())}r.updateOffset=function(){};function M4(l,h,f){var g=this._offset||0,C;if(!this.isValid())return l!=null?this:NaN;if(l!=null){if(typeof l=="string"){if(l=Vg(Yh,l),l===null)return this}else Math.abs(l)<16&&!f&&(l=l*60);return!this._isUTC&&h&&(C=jg(this)),this._offset=l,this._isUTC=!0,C!=null&&this.add(C,"m"),g!==l&&(!h||this._changeInProgress?EE(this,Tr(l-g,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,r.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?g:jg(this)}function L4(l,h){return l!=null?(typeof l!="string"&&(l=-l),this.utcOffset(l,h),this):-this.utcOffset()}function $4(l){return this.utcOffset(0,l)}function F4(l){return this._isUTC&&(this.utcOffset(0,l),this._isUTC=!1,l&&this.subtract(jg(this),"m")),this}function U4(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var l=Vg(oP,this._i);l!=null?this.utcOffset(l):this.utcOffset(0,!0)}return this}function B4(l){return this.isValid()?(l=l?it(l).utcOffset():0,(this.utcOffset()-l)%60===0):!1}function V4(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function z4(){if(!c(this._isDSTShifted))return this._isDSTShifted;var l={},h;return R(l,this),l=mE(l),l._a?(h=l._isUTC?_(l._a):it(l._a),this._isDSTShifted=this.isValid()&&R4(l._a,h.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function j4(){return this.isValid()?!this._isUTC:!1}function Y4(){return this.isValid()?this._isUTC:!1}function wE(){return this.isValid()?this._isUTC&&this._offset===0:!1}var W4=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,H4=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Tr(l,h){var f=l,g=null,C,I,M;return Xh(l)?f={ms:l._milliseconds,d:l._days,M:l._months}:d(l)||!isNaN(+l)?(f={},h?f[h]=+l:f.milliseconds=+l):(g=W4.exec(l))?(C=g[1]==="-"?-1:1,f={y:0,d:Oe(g[Yr])*C,h:Oe(g[Ut])*C,m:Oe(g[xr])*C,s:Oe(g[vi])*C,ms:Oe(Bg(g[go]*1e3))*C}):(g=H4.exec(l))?(C=g[1]==="-"?-1:1,f={y:vo(g[2],C),M:vo(g[3],C),w:vo(g[4],C),d:vo(g[5],C),h:vo(g[6],C),m:vo(g[7],C),s:vo(g[8],C)}):f==null?f={}:typeof f=="object"&&("from"in f||"to"in f)&&(M=G4(it(f.from),it(f.to)),f={},f.ms=M.milliseconds,f.M=M.months),I=new Qh(f),Xh(l)&&a(l,"_locale")&&(I._locale=l._locale),Xh(l)&&a(l,"_isValid")&&(I._isValid=l._isValid),I}Tr.fn=Qh.prototype,Tr.invalid=O4;function vo(l,h){var f=l&&parseFloat(l.replace(",","."));return(isNaN(f)?0:f)*h}function _E(l,h){var f={};return f.months=h.month()-l.month()+(h.year()-l.year())*12,l.clone().add(f.months,"M").isAfter(h)&&--f.months,f.milliseconds=+h-+l.clone().add(f.months,"M"),f}function G4(l,h){var f;return l.isValid()&&h.isValid()?(h=zg(h,l),l.isBefore(h)?f=_E(l,h):(f=_E(h,l),f.milliseconds=-f.milliseconds,f.months=-f.months),f):{milliseconds:0,months:0}}function SE(l,h){return function(f,g){var C,I;return g!==null&&!isNaN(+g)&&(J(h,"moment()."+h+"(period, number) is deprecated. Please use moment()."+h+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),I=f,f=g,g=I),C=Tr(f,g),EE(this,C,l),this}}function EE(l,h,f,g){var C=h._milliseconds,I=Bg(h._days),M=Bg(h._months);!l.isValid()||(g=g==null?!0:g,M&&rE(l,Uh(l,"Month")+M*f),I&&QS(l,"Date",Uh(l,"Date")+I*f),C&&l._d.setTime(l._d.valueOf()+C*f),g&&r.updateOffset(l,I||M))}var q4=SE(1,"add"),K4=SE(-1,"subtract");function CE(l){return typeof l=="string"||l instanceof String}function Q4(l){return N(l)||p(l)||CE(l)||d(l)||J4(l)||X4(l)||l===null||l===void 0}function X4(l){var h=o(l)&&!u(l),f=!1,g=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],C,I,M=g.length;for(C=0;C<M;C+=1)I=g[C],f=f||a(l,I);return h&&f}function J4(l){var h=s(l),f=!1;return h&&(f=l.filter(function(g){return!d(g)&&CE(l)}).length===0),h&&f}function Z4(l){var h=o(l)&&!u(l),f=!1,g=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],C,I;for(C=0;C<g.length;C+=1)I=g[C],f=f||a(l,I);return h&&f}function eM(l,h){var f=l.diff(h,"days",!0);return f<-6?"sameElse":f<-1?"lastWeek":f<0?"lastDay":f<1?"sameDay":f<2?"nextDay":f<7?"nextWeek":"sameElse"}function tM(l,h){arguments.length===1&&(arguments[0]?Q4(arguments[0])?(l=arguments[0],h=void 0):Z4(arguments[0])&&(h=arguments[0],l=void 0):(l=void 0,h=void 0));var f=l||it(),g=zg(f,this).startOf("day"),C=r.calendarFormat(this,g)||"sameElse",I=h&&(X(h[C])?h[C].call(this,f):h[C]);return this.format(I||this.localeData().calendar(C,this,it(f)))}function nM(){return new A(this)}function rM(l,h){var f=N(l)?l:it(l);return this.isValid()&&f.isValid()?(h=Ht(h)||"millisecond",h==="millisecond"?this.valueOf()>f.valueOf():f.valueOf()<this.clone().startOf(h).valueOf()):!1}function iM(l,h){var f=N(l)?l:it(l);return this.isValid()&&f.isValid()?(h=Ht(h)||"millisecond",h==="millisecond"?this.valueOf()<f.valueOf():this.clone().endOf(h).valueOf()<f.valueOf()):!1}function sM(l,h,f,g){var C=N(l)?l:it(l),I=N(h)?h:it(h);return this.isValid()&&C.isValid()&&I.isValid()?(g=g||"()",(g[0]==="("?this.isAfter(C,f):!this.isBefore(C,f))&&(g[1]===")"?this.isBefore(I,f):!this.isAfter(I,f))):!1}function oM(l,h){var f=N(l)?l:it(l),g;return this.isValid()&&f.isValid()?(h=Ht(h)||"millisecond",h==="millisecond"?this.valueOf()===f.valueOf():(g=f.valueOf(),this.clone().startOf(h).valueOf()<=g&&g<=this.clone().endOf(h).valueOf())):!1}function aM(l,h){return this.isSame(l,h)||this.isAfter(l,h)}function lM(l,h){return this.isSame(l,h)||this.isBefore(l,h)}function uM(l,h,f){var g,C,I;if(!this.isValid())return NaN;if(g=zg(l,this),!g.isValid())return NaN;switch(C=(g.utcOffset()-this.utcOffset())*6e4,h=Ht(h),h){case"year":I=Jh(this,g)/12;break;case"month":I=Jh(this,g);break;case"quarter":I=Jh(this,g)/3;break;case"second":I=(this-g)/1e3;break;case"minute":I=(this-g)/6e4;break;case"hour":I=(this-g)/36e5;break;case"day":I=(this-g-C)/864e5;break;case"week":I=(this-g-C)/6048e5;break;default:I=this-g}return f?I:bt(I)}function Jh(l,h){if(l.date()<h.date())return-Jh(h,l);var f=(h.year()-l.year())*12+(h.month()-l.month()),g=l.clone().add(f,"months"),C,I;return h-g<0?(C=l.clone().add(f-1,"months"),I=(h-g)/(g-C)):(C=l.clone().add(f+1,"months"),I=(h-g)/(C-g)),-(f+I)||0}r.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",r.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function cM(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function hM(l){if(!this.isValid())return null;var h=l!==!0,f=h?this.clone().utc():this;return f.year()<0||f.year()>9999?W(f,h?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):X(Date.prototype.toISOString)?h?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",W(f,"Z")):W(f,h?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function dM(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var l="moment",h="",f,g,C,I;return this.isLocal()||(l=this.utcOffset()===0?"moment.utc":"moment.parseZone",h="Z"),f="["+l+'("]',g=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",C="-MM-DD[T]HH:mm:ss.SSS",I=h+'[")]',this.format(f+g+C+I)}function fM(l){l||(l=this.isUtc()?r.defaultFormatUtc:r.defaultFormat);var h=W(this,l);return this.localeData().postformat(h)}function pM(l,h){return this.isValid()&&(N(l)&&l.isValid()||it(l).isValid())?Tr({to:this,from:l}).locale(this.locale()).humanize(!h):this.localeData().invalidDate()}function mM(l){return this.from(it(),l)}function gM(l,h){return this.isValid()&&(N(l)&&l.isValid()||it(l).isValid())?Tr({from:this,to:l}).locale(this.locale()).humanize(!h):this.localeData().invalidDate()}function vM(l){return this.to(it(),l)}function kE(l){var h;return l===void 0?this._locale._abbr:(h=wi(l),h!=null&&(this._locale=h),this)}var xE=F("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(l){return l===void 0?this.localeData():this.locale(l)});function TE(){return this._locale}var Zh=1e3,va=60*Zh,ed=60*va,DE=(365*400+97)*24*ed;function ya(l,h){return(l%h+h)%h}function IE(l,h,f){return l<100&&l>=0?new Date(l+400,h,f)-DE:new Date(l,h,f).valueOf()}function bE(l,h,f){return l<100&&l>=0?Date.UTC(l+400,h,f)-DE:Date.UTC(l,h,f)}function yM(l){var h,f;if(l=Ht(l),l===void 0||l==="millisecond"||!this.isValid())return this;switch(f=this._isUTC?bE:IE,l){case"year":h=f(this.year(),0,1);break;case"quarter":h=f(this.year(),this.month()-this.month()%3,1);break;case"month":h=f(this.year(),this.month(),1);break;case"week":h=f(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":h=f(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":h=f(this.year(),this.month(),this.date());break;case"hour":h=this._d.valueOf(),h-=ya(h+(this._isUTC?0:this.utcOffset()*va),ed);break;case"minute":h=this._d.valueOf(),h-=ya(h,va);break;case"second":h=this._d.valueOf(),h-=ya(h,Zh);break}return this._d.setTime(h),r.updateOffset(this,!0),this}function wM(l){var h,f;if(l=Ht(l),l===void 0||l==="millisecond"||!this.isValid())return this;switch(f=this._isUTC?bE:IE,l){case"year":h=f(this.year()+1,0,1)-1;break;case"quarter":h=f(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":h=f(this.year(),this.month()+1,1)-1;break;case"week":h=f(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":h=f(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":h=f(this.year(),this.month(),this.date()+1)-1;break;case"hour":h=this._d.valueOf(),h+=ed-ya(h+(this._isUTC?0:this.utcOffset()*va),ed)-1;break;case"minute":h=this._d.valueOf(),h+=va-ya(h,va)-1;break;case"second":h=this._d.valueOf(),h+=Zh-ya(h,Zh)-1;break}return this._d.setTime(h),r.updateOffset(this,!0),this}function _M(){return this._d.valueOf()-(this._offset||0)*6e4}function SM(){return Math.floor(this.valueOf()/1e3)}function EM(){return new Date(this.valueOf())}function CM(){var l=this;return[l.year(),l.month(),l.date(),l.hour(),l.minute(),l.second(),l.millisecond()]}function kM(){var l=this;return{years:l.year(),months:l.month(),date:l.date(),hours:l.hours(),minutes:l.minutes(),seconds:l.seconds(),milliseconds:l.milliseconds()}}function xM(){return this.isValid()?this.toISOString():null}function TM(){return v(this)}function DM(){return y({},x(this))}function IM(){return x(this).overflow}function bM(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}V("N",0,0,"eraAbbr"),V("NN",0,0,"eraAbbr"),V("NNN",0,0,"eraAbbr"),V("NNNN",0,0,"eraName"),V("NNNNN",0,0,"eraNarrow"),V("y",["y",1],"yo","eraYear"),V("y",["yy",2],0,"eraYear"),V("y",["yyy",3],0,"eraYear"),V("y",["yyyy",4],0,"eraYear"),ie("N",Yg),ie("NN",Yg),ie("NNN",Yg),ie("NNNN",BM),ie("NNNNN",VM),Xe(["N","NN","NNN","NNNN","NNNNN"],function(l,h,f,g){var C=f._locale.erasParse(l,g,f._strict);C?x(f).era=C:x(f).invalidEra=l}),ie("y",ma),ie("yy",ma),ie("yyy",ma),ie("yyyy",ma),ie("yo",zM),Xe(["y","yy","yyy","yyyy"],un),Xe(["yo"],function(l,h,f,g){var C;f._locale._eraYearOrdinalRegex&&(C=l.match(f._locale._eraYearOrdinalRegex)),f._locale.eraYearOrdinalParse?h[un]=f._locale.eraYearOrdinalParse(l,C):h[un]=parseInt(l,10)});function AM(l,h){var f,g,C,I=this._eras||wi("en")._eras;for(f=0,g=I.length;f<g;++f){switch(typeof I[f].since){case"string":C=r(I[f].since).startOf("day"),I[f].since=C.valueOf();break}switch(typeof I[f].until){case"undefined":I[f].until=1/0;break;case"string":C=r(I[f].until).startOf("day").valueOf(),I[f].until=C.valueOf();break}}return I}function NM(l,h,f){var g,C,I=this.eras(),M,he,Ae;for(l=l.toUpperCase(),g=0,C=I.length;g<C;++g)if(M=I[g].name.toUpperCase(),he=I[g].abbr.toUpperCase(),Ae=I[g].narrow.toUpperCase(),f)switch(h){case"N":case"NN":case"NNN":if(he===l)return I[g];break;case"NNNN":if(M===l)return I[g];break;case"NNNNN":if(Ae===l)return I[g];break}else if([M,he,Ae].indexOf(l)>=0)return I[g]}function OM(l,h){var f=l.since<=l.until?1:-1;return h===void 0?r(l.since).year():r(l.since).year()+(h-l.offset)*f}function RM(){var l,h,f,g=this.localeData().eras();for(l=0,h=g.length;l<h;++l)if(f=this.clone().startOf("day").valueOf(),g[l].since<=f&&f<=g[l].until||g[l].until<=f&&f<=g[l].since)return g[l].name;return""}function PM(){var l,h,f,g=this.localeData().eras();for(l=0,h=g.length;l<h;++l)if(f=this.clone().startOf("day").valueOf(),g[l].since<=f&&f<=g[l].until||g[l].until<=f&&f<=g[l].since)return g[l].narrow;return""}function MM(){var l,h,f,g=this.localeData().eras();for(l=0,h=g.length;l<h;++l)if(f=this.clone().startOf("day").valueOf(),g[l].since<=f&&f<=g[l].until||g[l].until<=f&&f<=g[l].since)return g[l].abbr;return""}function LM(){var l,h,f,g,C=this.localeData().eras();for(l=0,h=C.length;l<h;++l)if(f=C[l].since<=C[l].until?1:-1,g=this.clone().startOf("day").valueOf(),C[l].since<=g&&g<=C[l].until||C[l].until<=g&&g<=C[l].since)return(this.year()-r(C[l].since).year())*f+C[l].offset;return this.year()}function $M(l){return a(this,"_erasNameRegex")||Wg.call(this),l?this._erasNameRegex:this._erasRegex}function FM(l){return a(this,"_erasAbbrRegex")||Wg.call(this),l?this._erasAbbrRegex:this._erasRegex}function UM(l){return a(this,"_erasNarrowRegex")||Wg.call(this),l?this._erasNarrowRegex:this._erasRegex}function Yg(l,h){return h.erasAbbrRegex(l)}function BM(l,h){return h.erasNameRegex(l)}function VM(l,h){return h.erasNarrowRegex(l)}function zM(l,h){return h._eraYearOrdinalRegex||ma}function Wg(){var l=[],h=[],f=[],g=[],C,I,M=this.eras();for(C=0,I=M.length;C<I;++C)h.push(Wn(M[C].name)),l.push(Wn(M[C].abbr)),f.push(Wn(M[C].narrow)),g.push(Wn(M[C].name)),g.push(Wn(M[C].abbr)),g.push(Wn(M[C].narrow));this._erasRegex=new RegExp("^("+g.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+h.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+l.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+f.join("|")+")","i")}V(0,["gg",2],0,function(){return this.weekYear()%100}),V(0,["GG",2],0,function(){return this.isoWeekYear()%100});function td(l,h){V(0,[l,l.length],0,h)}td("gggg","weekYear"),td("ggggg","weekYear"),td("GGGG","isoWeekYear"),td("GGGGG","isoWeekYear"),It("weekYear","gg"),It("isoWeekYear","GG"),Ne("weekYear",1),Ne("isoWeekYear",1),ie("G",jh),ie("g",jh),ie("GG",rt,Yn),ie("gg",rt,Yn),ie("GGGG",Ag,bg),ie("gggg",Ag,bg),ie("GGGGG",zh,Bh),ie("ggggg",zh,Bh),eu(["gggg","ggggg","GGGG","GGGGG"],function(l,h,f,g){h[g.substr(0,2)]=Oe(l)}),eu(["gg","GG"],function(l,h,f,g){h[g]=r.parseTwoDigitYear(l)});function jM(l){return AE.call(this,l,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function YM(l){return AE.call(this,l,this.isoWeek(),this.isoWeekday(),1,4)}function WM(){return yi(this.year(),1,4)}function HM(){return yi(this.isoWeekYear(),1,4)}function GM(){var l=this.localeData()._week;return yi(this.year(),l.dow,l.doy)}function qM(){var l=this.localeData()._week;return yi(this.weekYear(),l.dow,l.doy)}function AE(l,h,f,g,C){var I;return l==null?ru(this,g,C).year:(I=yi(l,g,C),h>I&&(h=I),KM.call(this,l,h,f,g,C))}function KM(l,h,f,g,C){var I=aE(l,h,f,g,C),M=nu(I.year,0,I.dayOfYear);return this.year(M.getUTCFullYear()),this.month(M.getUTCMonth()),this.date(M.getUTCDate()),this}V("Q",0,"Qo","quarter"),It("quarter","Q"),Ne("quarter",7),ie("Q",XS),Xe("Q",function(l,h){h[gi]=(Oe(l)-1)*3});function QM(l){return l==null?Math.ceil((this.month()+1)/3):this.month((l-1)*3+this.month()%3)}V("D",["DD",2],"Do","date"),It("date","D"),Ne("date",9),ie("D",rt),ie("DD",rt,Yn),ie("Do",function(l,h){return l?h._dayOfMonthOrdinalParse||h._ordinalParse:h._dayOfMonthOrdinalParseLenient}),Xe(["D","DD"],Yr),Xe("Do",function(l,h){h[Yr]=Oe(l.match(rt)[0])});var NE=pa("Date",!0);V("DDD",["DDDD",3],"DDDo","dayOfYear"),It("dayOfYear","DDD"),Ne("dayOfYear",4),ie("DDD",Vh),ie("DDDD",JS),Xe(["DDD","DDDD"],function(l,h,f){f._dayOfYear=Oe(l)});function XM(l){var h=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return l==null?h:this.add(l-h,"d")}V("m",["mm",2],0,"minute"),It("minute","m"),Ne("minute",14),ie("m",rt),ie("mm",rt,Yn),Xe(["m","mm"],xr);var JM=pa("Minutes",!1);V("s",["ss",2],0,"second"),It("second","s"),Ne("second",15),ie("s",rt),ie("ss",rt,Yn),Xe(["s","ss"],vi);var ZM=pa("Seconds",!1);V("S",0,0,function(){return~~(this.millisecond()/100)}),V(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),V(0,["SSS",3],0,"millisecond"),V(0,["SSSS",4],0,function(){return this.millisecond()*10}),V(0,["SSSSS",5],0,function(){return this.millisecond()*100}),V(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),V(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),V(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),V(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),It("millisecond","ms"),Ne("millisecond",16),ie("S",Vh,XS),ie("SS",Vh,Yn),ie("SSS",Vh,JS);var us,OE;for(us="SSSS";us.length<=9;us+="S")ie(us,ma);function eL(l,h){h[go]=Oe(("0."+l)*1e3)}for(us="S";us.length<=9;us+="S")Xe(us,eL);OE=pa("Milliseconds",!1),V("z",0,0,"zoneAbbr"),V("zz",0,0,"zoneName");function tL(){return this._isUTC?"UTC":""}function nL(){return this._isUTC?"Coordinated Universal Time":""}var q=A.prototype;q.add=q4,q.calendar=tM,q.clone=nM,q.diff=uM,q.endOf=wM,q.format=fM,q.from=pM,q.fromNow=mM,q.to=gM,q.toNow=vM,q.get=iP,q.invalidAt=IM,q.isAfter=rM,q.isBefore=iM,q.isBetween=sM,q.isSame=oM,q.isSameOrAfter=aM,q.isSameOrBefore=lM,q.isValid=TM,q.lang=xE,q.locale=kE,q.localeData=TE,q.max=T4,q.min=x4,q.parsingFlags=DM,q.set=sP,q.startOf=yM,q.subtract=K4,q.toArray=CM,q.toObject=kM,q.toDate=EM,q.toISOString=hM,q.inspect=dM,typeof Symbol!="undefined"&&Symbol.for!=null&&(q[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),q.toJSON=xM,q.toString=cM,q.unix=SM,q.valueOf=_M,q.creationData=bM,q.eraName=RM,q.eraNarrow=PM,q.eraAbbr=MM,q.eraYear=LM,q.year=oE,q.isLeapYear=kP,q.weekYear=jM,q.isoWeekYear=YM,q.quarter=q.quarters=QM,q.month=iE,q.daysInMonth=SP,q.week=q.weeks=AP,q.isoWeek=q.isoWeeks=NP,q.weeksInYear=GM,q.weeksInWeekYear=qM,q.isoWeeksInYear=WM,q.isoWeeksInISOWeekYear=HM,q.date=NE,q.day=q.days=YP,q.weekday=WP,q.isoWeekday=HP,q.dayOfYear=XM,q.hour=q.hours=ZP,q.minute=q.minutes=JM,q.second=q.seconds=ZM,q.millisecond=q.milliseconds=OE,q.utcOffset=M4,q.utc=$4,q.local=F4,q.parseZone=U4,q.hasAlignedHourOffset=B4,q.isDST=V4,q.isLocal=j4,q.isUtcOffset=Y4,q.isUtc=wE,q.isUTC=wE,q.zoneAbbr=tL,q.zoneName=nL,q.dates=F("dates accessor is deprecated. Use date instead.",NE),q.months=F("months accessor is deprecated. Use month instead",iE),q.years=F("years accessor is deprecated. Use year instead",oE),q.zone=F("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",L4),q.isDSTShifted=F("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",z4);function rL(l){return it(l*1e3)}function iL(){return it.apply(null,arguments).parseZone()}function RE(l){return l}var ze=Te.prototype;ze.calendar=z,ze.longDateFormat=Be,ze.invalidDate=ne,ze.ordinal=ct,ze.preparse=RE,ze.postformat=RE,ze.relativeTime=Ft,ze.pastFuture=mo,ze.set=ue,ze.eras=AM,ze.erasParse=NM,ze.erasConvertYear=OM,ze.erasAbbrRegex=FM,ze.erasNameRegex=$M,ze.erasNarrowRegex=UM,ze.months=vP,ze.monthsShort=yP,ze.monthsParse=_P,ze.monthsRegex=CP,ze.monthsShortRegex=EP,ze.week=TP,ze.firstDayOfYear=bP,ze.firstDayOfWeek=IP,ze.weekdays=UP,ze.weekdaysMin=VP,ze.weekdaysShort=BP,ze.weekdaysParse=jP,ze.weekdaysRegex=GP,ze.weekdaysShortRegex=qP,ze.weekdaysMinRegex=KP,ze.isPM=XP,ze.meridiem=e4;function nd(l,h,f,g){var C=wi(),I=_().set(g,h);return C[f](I,l)}function PE(l,h,f){if(d(l)&&(h=l,l=void 0),l=l||"",h!=null)return nd(l,h,f,"month");var g,C=[];for(g=0;g<12;g++)C[g]=nd(l,g,f,"month");return C}function Hg(l,h,f,g){typeof l=="boolean"?(d(h)&&(f=h,h=void 0),h=h||""):(h=l,f=h,l=!1,d(h)&&(f=h,h=void 0),h=h||"");var C=wi(),I=l?C._week.dow:0,M,he=[];if(f!=null)return nd(h,(f+I)%7,g,"day");for(M=0;M<7;M++)he[M]=nd(h,(M+I)%7,g,"day");return he}function sL(l,h){return PE(l,h,"months")}function oL(l,h){return PE(l,h,"monthsShort")}function aL(l,h,f){return Hg(l,h,f,"weekdays")}function lL(l,h,f){return Hg(l,h,f,"weekdaysShort")}function uL(l,h,f){return Hg(l,h,f,"weekdaysMin")}ls("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(l){var h=l%10,f=Oe(l%100/10)===1?"th":h===1?"st":h===2?"nd":h===3?"rd":"th";return l+f}}),r.lang=F("moment.lang is deprecated. Use moment.locale instead.",ls),r.langData=F("moment.langData is deprecated. Use moment.localeData instead.",wi);var _i=Math.abs;function cL(){var l=this._data;return this._milliseconds=_i(this._milliseconds),this._days=_i(this._days),this._months=_i(this._months),l.milliseconds=_i(l.milliseconds),l.seconds=_i(l.seconds),l.minutes=_i(l.minutes),l.hours=_i(l.hours),l.months=_i(l.months),l.years=_i(l.years),this}function ME(l,h,f,g){var C=Tr(h,f);return l._milliseconds+=g*C._milliseconds,l._days+=g*C._days,l._months+=g*C._months,l._bubble()}function hL(l,h){return ME(this,l,h,1)}function dL(l,h){return ME(this,l,h,-1)}function LE(l){return l<0?Math.floor(l):Math.ceil(l)}function fL(){var l=this._milliseconds,h=this._days,f=this._months,g=this._data,C,I,M,he,Ae;return l>=0&&h>=0&&f>=0||l<=0&&h<=0&&f<=0||(l+=LE(Gg(f)+h)*864e5,h=0,f=0),g.milliseconds=l%1e3,C=bt(l/1e3),g.seconds=C%60,I=bt(C/60),g.minutes=I%60,M=bt(I/60),g.hours=M%24,h+=bt(M/24),Ae=bt($E(h)),f+=Ae,h-=LE(Gg(Ae)),he=bt(f/12),f%=12,g.days=h,g.months=f,g.years=he,this}function $E(l){return l*4800/146097}function Gg(l){return l*146097/4800}function pL(l){if(!this.isValid())return NaN;var h,f,g=this._milliseconds;if(l=Ht(l),l==="month"||l==="quarter"||l==="year")switch(h=this._days+g/864e5,f=this._months+$E(h),l){case"month":return f;case"quarter":return f/3;case"year":return f/12}else switch(h=this._days+Math.round(Gg(this._months)),l){case"week":return h/7+g/6048e5;case"day":return h+g/864e5;case"hour":return h*24+g/36e5;case"minute":return h*1440+g/6e4;case"second":return h*86400+g/1e3;case"millisecond":return Math.floor(h*864e5)+g;default:throw new Error("Unknown unit "+l)}}function mL(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+Oe(this._months/12)*31536e6:NaN}function Si(l){return function(){return this.as(l)}}var gL=Si("ms"),vL=Si("s"),yL=Si("m"),wL=Si("h"),_L=Si("d"),SL=Si("w"),EL=Si("M"),CL=Si("Q"),kL=Si("y");function xL(){return Tr(this)}function TL(l){return l=Ht(l),this.isValid()?this[l+"s"]():NaN}function yo(l){return function(){return this.isValid()?this._data[l]:NaN}}var DL=yo("milliseconds"),IL=yo("seconds"),bL=yo("minutes"),AL=yo("hours"),NL=yo("days"),OL=yo("months"),RL=yo("years");function PL(){return bt(this.days()/7)}var Ei=Math.round,wa={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function ML(l,h,f,g,C){return C.relativeTime(h||1,!!f,l,g)}function LL(l,h,f,g){var C=Tr(l).abs(),I=Ei(C.as("s")),M=Ei(C.as("m")),he=Ei(C.as("h")),Ae=Ei(C.as("d")),Je=Ei(C.as("M")),In=Ei(C.as("w")),Ci=Ei(C.as("y")),cs=I<=f.ss&&["s",I]||I<f.s&&["ss",I]||M<=1&&["m"]||M<f.m&&["mm",M]||he<=1&&["h"]||he<f.h&&["hh",he]||Ae<=1&&["d"]||Ae<f.d&&["dd",Ae];return f.w!=null&&(cs=cs||In<=1&&["w"]||In<f.w&&["ww",In]),cs=cs||Je<=1&&["M"]||Je<f.M&&["MM",Je]||Ci<=1&&["y"]||["yy",Ci],cs[2]=h,cs[3]=+l>0,cs[4]=g,ML.apply(null,cs)}function $L(l){return l===void 0?Ei:typeof l=="function"?(Ei=l,!0):!1}function FL(l,h){return wa[l]===void 0?!1:h===void 0?wa[l]:(wa[l]=h,l==="s"&&(wa.ss=h-1),!0)}function UL(l,h){if(!this.isValid())return this.localeData().invalidDate();var f=!1,g=wa,C,I;return typeof l=="object"&&(h=l,l=!1),typeof l=="boolean"&&(f=l),typeof h=="object"&&(g=Object.assign({},wa,h),h.s!=null&&h.ss==null&&(g.ss=h.s-1)),C=this.localeData(),I=LL(this,!f,g,C),f&&(I=C.pastFuture(+this,I)),C.postformat(I)}var qg=Math.abs;function _a(l){return(l>0)-(l<0)||+l}function rd(){if(!this.isValid())return this.localeData().invalidDate();var l=qg(this._milliseconds)/1e3,h=qg(this._days),f=qg(this._months),g,C,I,M,he=this.asSeconds(),Ae,Je,In,Ci;return he?(g=bt(l/60),C=bt(g/60),l%=60,g%=60,I=bt(f/12),f%=12,M=l?l.toFixed(3).replace(/\.?0+$/,""):"",Ae=he<0?"-":"",Je=_a(this._months)!==_a(he)?"-":"",In=_a(this._days)!==_a(he)?"-":"",Ci=_a(this._milliseconds)!==_a(he)?"-":"",Ae+"P"+(I?Je+I+"Y":"")+(f?Je+f+"M":"")+(h?In+h+"D":"")+(C||g||l?"T":"")+(C?Ci+C+"H":"")+(g?Ci+g+"M":"")+(l?Ci+M+"S":"")):"P0D"}var $e=Qh.prototype;$e.isValid=N4,$e.abs=cL,$e.add=hL,$e.subtract=dL,$e.as=pL,$e.asMilliseconds=gL,$e.asSeconds=vL,$e.asMinutes=yL,$e.asHours=wL,$e.asDays=_L,$e.asWeeks=SL,$e.asMonths=EL,$e.asQuarters=CL,$e.asYears=kL,$e.valueOf=mL,$e._bubble=fL,$e.clone=xL,$e.get=TL,$e.milliseconds=DL,$e.seconds=IL,$e.minutes=bL,$e.hours=AL,$e.days=NL,$e.weeks=PL,$e.months=OL,$e.years=RL,$e.humanize=UL,$e.toISOString=rd,$e.toString=rd,$e.toJSON=rd,$e.locale=kE,$e.localeData=TE,$e.toIsoString=F("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",rd),$e.lang=xE,V("X",0,0,"unix"),V("x",0,0,"valueOf"),ie("x",jh),ie("X",aP),Xe("X",function(l,h,f){f._d=new Date(parseFloat(l)*1e3)}),Xe("x",function(l,h,f){f._d=new Date(Oe(l))});//! moment.js
return r.version="2.29.4",i(it),r.fn=q,r.min=D4,r.max=I4,r.now=b4,r.utc=_,r.unix=rL,r.months=sL,r.isDate=p,r.locale=ls,r.invalid=k,r.duration=Tr,r.isMoment=N,r.weekdays=aL,r.parseZone=iL,r.localeData=wi,r.isDuration=Xh,r.monthsShort=oL,r.weekdaysMin=uL,r.defineLocale=Mg,r.updateLocale=i4,r.locales=s4,r.weekdaysShort=lL,r.normalizeUnits=Ht,r.relativeTimeRounding=$L,r.relativeTimeThreshold=FL,r.calendarFormat=eM,r.prototype=q,r.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},r})})(VS);var cv=VS.exports;(function(e,t){(function(n,r){r(typeof NT=="function"?VS.exports:n.moment)})(AT,function(n){//! moment.js locale configuration
var r=n.defineLocale("ko",{months:"1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),monthsShort:"1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),weekdays:"\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split("_"),weekdaysShort:"\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),weekdaysMin:"\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY\uB144 MMMM D\uC77C",LLL:"YYYY\uB144 MMMM D\uC77C A h:mm",LLLL:"YYYY\uB144 MMMM D\uC77C dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY\uB144 MMMM D\uC77C",lll:"YYYY\uB144 MMMM D\uC77C A h:mm",llll:"YYYY\uB144 MMMM D\uC77C dddd A h:mm"},calendar:{sameDay:"\uC624\uB298 LT",nextDay:"\uB0B4\uC77C LT",nextWeek:"dddd LT",lastDay:"\uC5B4\uC81C LT",lastWeek:"\uC9C0\uB09C\uC8FC dddd LT",sameElse:"L"},relativeTime:{future:"%s \uD6C4",past:"%s \uC804",s:"\uBA87 \uCD08",ss:"%d\uCD08",m:"1\uBD84",mm:"%d\uBD84",h:"\uD55C \uC2DC\uAC04",hh:"%d\uC2DC\uAC04",d:"\uD558\uB8E8",dd:"%d\uC77C",M:"\uD55C \uB2EC",MM:"%d\uB2EC",y:"\uC77C \uB144",yy:"%d\uB144"},dayOfMonthOrdinalParse:/\d{1,2}(일|월|주)/,ordinal:function(i,s){switch(s){case"d":case"D":case"DDD":return i+"\uC77C";case"M":return i+"\uC6D4";case"w":case"W":return i+"\uC8FC";default:return i}},meridiemParse:/오전|오후/,isPM:function(i){return i==="\uC624\uD6C4"},meridiem:function(i,s,o){return i<12?"\uC624\uC804":"\uC624\uD6C4"}});return r})})();const HQ=co(Zm,"board_photos"),GQ=async e=>{const t=co(HQ,e.name);return await Xm(t,e),await Jm(t)},YR=_r("boards/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("boardData is undefined");const{brand:n,height:r,weight:i,title:s,desc:o,photo:a,nickname:u}=e,c=await GQ(a);return{id:(await Qm(uo(Sr,"boards"),{brand:n,height:r,weight:i,title:s,desc:o,photo:c,nickname:u,createdAt:Date.now()})).id,brand:n,height:r,weight:i,title:s,desc:o,photo:c,nickname:u,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),kg=_r("boards/get",async()=>(te.locale("ko"),(await Km(uo(Sr,"boards"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=te(),u=te(i);return a.diff(u,"days")<=1?o=u.fromNow():o=u.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}}))),qQ=oa({name:"board",initialState:{boards:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(YR.fulfilled,(t,n)=>{const r=n.payload;return{...t,boards:[...t.boards,r],postCount:t.postCount+1}}).addCase(kg.fulfilled,(t,n)=>({...t,boards:n.payload,postCount:n.payload.length}))}});var KQ=qQ.reducer;const QQ=Ll`
  width: 100%;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  padding: 16px;
  cursor: pointer;
`,XQ=Ll`
  width: 100%;
  padding: 6px 12px;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  cursor: pointer;
`,JQ=Ll`
  width: 100%;
  display: flex;
  flex-direction: column;
`,ZQ=X5`
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
`,Wt=Ze.section`
  width: 100%;
  padding-top: 60px;
  min-height: 100vh;
  background: #ffffff;

  @media screen and (max-width: 768px) {
    /* padding-left: 16px;
    padding-right: 16px; */
  }
`,xg=Ze.div`
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
`,eX=Ze.div`
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
`,zS=Ze.div`
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
`,Fh=Ze.div`
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
`,tX=Ze.div`
  width: 100%;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.86);
  background: #f8d7da;
  text-align: center;

  p {
    padding: 12px;
    font-size: clamp(14px, 2vw, 15px);
  }
`;Ze.form`
  ${JQ}
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1 1 50%;

  h1 {
    font-size: clamp(18px, 2.5vw, 20px);
    margin: 12px 0;
  }
`;const _u=Ze.input`
  ${QQ}
`,hv=Ze.button`
  ${XQ}
`;Ze.div`
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
`;const nX=Ze.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .loader {
    width: 70px;
    height: 70px;
    border: 12px solid #eeeeee;
    border-top-color: #08f;
    border-radius: 50%;
    margin-bottom: 12px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.16);
    animation: ${ZQ} 1.5s ease infinite;
  }

  h1 {
    font-size: clamp(20px, 2.5vw, 26px);
    font-weight: 700;
    letter-spacing: -0.075rem;
  }

`;/*!
 * @splidejs/splide-extension-auto-scroll
 * Version  : 0.5.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */function rX(e){e.length=0}function jS(e,t,n){return Array.prototype.slice.call(e,t,n)}function Tg(e){return e.bind.apply(e,[null].concat(jS(arguments,1)))}function _T(e){return requestAnimationFrame(e)}function YS(e,t){return typeof t===e}var WR=Array.isArray;Tg(YS,"function");Tg(YS,"string");Tg(YS,"undefined");function HR(e){return WR(e)?e:[e]}function ST(e,t){HR(e).forEach(t)}var iX=Object.keys;function sX(e,t,n){if(e){var r=iX(e);r=n?r.reverse():r;for(var i=0;i<r.length;i++){var s=r[i];if(s!=="__proto__"&&t(e[s],s)===!1)break}}return e}function oX(e){return jS(arguments,1).forEach(function(t){sX(t,function(n,r){e[r]=t[r]})}),e}var aX=Math.min;function lX(){var e=[];function t(o,a,u,c){i(o,a,function(d,p,m){var y="addEventListener"in d,_=y?d.removeEventListener.bind(d,p,u,c):d.removeListener.bind(d,u);y?d.addEventListener(p,u,c):d.addListener(u),e.push([d,p,m,u,_])})}function n(o,a,u){i(o,a,function(c,d,p){e=e.filter(function(m){return m[0]===c&&m[1]===d&&m[2]===p&&(!u||m[3]===u)?(m[4](),!1):!0})})}function r(o,a,u){var c,d=!0;return typeof CustomEvent=="function"?c=new CustomEvent(a,{bubbles:d,detail:u}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(a,d,!1,u)),o.dispatchEvent(c),c}function i(o,a,u){ST(o,function(c){c&&ST(a,function(d){d.split(" ").forEach(function(p){var m=p.split(".");u(c,m[0],m[1])})})})}function s(){e.forEach(function(o){o[4]()}),rX(e)}return{bind:t,unbind:n,dispatch:r,destroy:s}}var ET="move",CT="moved",uX="updated",kT="drag",cX="dragged",xT="scroll",TT="scrolled",hX="destroy";function dX(e){var t=e?e.event.bus:document.createDocumentFragment(),n=lX();function r(s,o){n.bind(t,HR(s).join(" "),function(a){o.apply(o,WR(a.detail)?a.detail:[])})}function i(s){n.dispatch(t,s,jS(arguments,1))}return e&&e.event.on(hX,n.destroy),oX(n,{bus:t,on:r,off:Tg(n.unbind,t),emit:i})}function GR(e,t,n,r){var i=Date.now,s,o=0,a,u=!0,c=0;function d(){if(!u){if(o=e?aX((i()-s)/e,1):1,n&&n(o),o>=1&&(t(),s=i(),r&&++c>=r))return m();_T(d)}}function p(E){!E&&_(),s=i()-(E?o*e:0),u=!1,_T(d)}function m(){u=!0}function y(){s=i(),o=0,n&&n(o)}function _(){a&&cancelAnimationFrame(a),o=0,a=0,u=!0}function S(E){e=E}function x(){return u}return{start:p,rewind:y,pause:m,cancel:_,set:S,isPaused:x}}function fX(e,t){var n;function r(){n||(n=GR(t||0,function(){e(),n=null},null,1),n.start())}return r}var pX="is-active",mX="slide",gX="fade";function qR(e,t,n){return Array.prototype.slice.call(e,t,n)}function WS(e){return e.bind(null,...qR(arguments,1))}function Dg(e,t){return typeof t===e}function w1(e){return!KR(e)&&Dg("object",e)}const vX=Array.isArray;WS(Dg,"function");WS(Dg,"string");const yX=WS(Dg,"undefined");function KR(e){return e===null}function wX(e){return vX(e)?e:[e]}function Np(e,t){wX(e).forEach(t)}function _X(e,t,n){e&&Np(t,r=>{r&&e.classList[n?"add":"remove"](r)})}const SX=Object.keys;function QR(e,t,n){if(e){let r=SX(e);r=n?r.reverse():r;for(let i=0;i<r.length;i++){const s=r[i];if(s!=="__proto__"&&t(e[s],s)===!1)break}}return e}function DT(e){return qR(arguments,1).forEach(t=>{QR(t,(n,r)=>{e[r]=t[r]})}),e}function EX(e,t){Np(e,n=>{Np(t,r=>{n&&n.removeAttribute(r)})})}function XR(e,t,n){w1(t)?QR(t,(r,i)=>{XR(e,i,r)}):Np(e,r=>{KR(n)||n===""?EX(r,t):r.setAttribute(t,String(n))})}const{min:IT,max:bT,floor:MJ,ceil:LJ,abs:$J}=Math;function CX(e,t,n){const r=IT(t,n),i=bT(t,n);return IT(bT(r,e),i)}const kX={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},xX={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function HS(e,t,n){const{on:r,off:i,bind:s,unbind:o}=dX(e),{translate:a,getPosition:u,toIndex:c,getLimit:d}=t.Move,{setIndex:p,getIndex:m}=t.Controller,{orient:y}=t.Direction,{toggle:_}=t.Elements,{Live:S}=t,{root:x}=e,E=fX(t.Arrows.update,500);let v={},k,T,b,R,A,N;function Z(){const{autoScroll:B}=n;v=DT({},kX,w1(B)?B:{})}function F(){e.is(gX)||!k&&n.autoScroll!==!1&&(k=GR(0,$),J(),ue())}function j(){k&&(k.cancel(),k=null,N=void 0,i([ET,kT,xT,CT,TT]),o(x,"mouseenter mouseleave focusin focusout"),o(_,"click"))}function J(){v.pauseOnHover&&s(x,"mouseenter mouseleave",B=>{b=B.type==="mouseenter",ge()}),v.pauseOnFocus&&s(x,"focusin focusout",B=>{R=B.type==="focusin",ge()}),v.useToggleButton&&s(_,"click",()=>{T?oe():Te()}),r(uX,X),r([ET,kT,xT],()=>{A=!0,Te(!1)}),r([CT,cX,TT],()=>{A=!1,ge()})}function X(){const{autoScroll:B}=n;B!==!1?(v=DT({},v,w1(B)?B:{}),F()):j(),k&&!yX(N)&&a(N)}function ue(){v.autoStart&&(document.readyState==="complete"?oe():s(window,"load",oe))}function oe(){U()&&(k.start(!0),S.disable(!0),R=b=T=!1,ee())}function Te(B=!0){T||(T=B,ee(),U()||(k.pause(),S.disable(!1)))}function ge(){T||(b||R||A?Te(!1):oe())}function $(){const B=u(),Y=z(B);B!==Y?(a(Y),P(N=u())):(Te(!1),v.rewind&&e.go(v.speed>0?0:t.Controller.getEnd())),E()}function z(B){const Y=v.speed||1;return B+=y(Y),e.is(mX)&&(B=CX(B,d(!1),d(!0))),B}function P(B){const{length:Y}=e,V=(c(B)+Y)%Y;V!==m()&&(p(V),t.Slides.update(),t.Pagination.update(),n.lazyLoad==="nearby"&&t.LazyLoad.check())}function ee(){if(_){const B=T?"startScroll":"pauseScroll";_X(_,pX,!T),XR(_,"aria-label",n.i18n[B]||xX[B])}}function U(){return!k||k.isPaused()}return{setup:Z,mount:F,destroy:j,play:oe,pause:Te,isPaused:U}}const os=()=>w(Wt,{children:O(nX,{children:[w("div",{className:"loader"}),w("h1",{children:"Loading...wait for website.."})]})}),TX=()=>{const e=vt(c=>c.board.boards),[t,n]=L.exports.useState(e.length),[r,i]=L.exports.useState("16px"),[s,o]=L.exports.useState("left"),a=ln(),u=L.exports.useCallback(()=>{window.innerWidth>=1280?(n(5),o("left")):window.innerWidth>=1024?(n(4),i("14px"),o("left")):window.innerWidth>=768?(n(3),i("12px"),o("center")):(n(2),i("10px"),o("center"))},[]);return L.exports.useEffect(()=>(a(kg()),u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)),[a,u]),w(Wt,{children:O(xg,{children:[O("div",{className:"title",children:[w("h1",{children:"OOTD"}),w("span",{children:"\uCD5C\uC2E0 OOTD \uB9AC\uC2A4\uD2B8"})]}),w("div",{className:"contents",children:e.length>0?w(wS,{options:{type:"loop",perPage:t,gap:r,focus:s,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!1,pauseOnFocus:!1,rewind:!1,speed:2}},extensions:{AutoScroll:HS},children:e.slice(0,10).map(c=>w(_S,{children:O(zS,{children:[w("div",{className:"top",children:w(Nn,{to:`board/details/${c.id}`,children:w("img",{src:c.photo,alt:"board"})})}),O("div",{className:"bottom",children:[w("p",{className:"board_nickname",children:c.nickname}),w("p",{className:"board_title",children:c.title}),w("p",{className:"board_desc",children:c.desc.length>60?c.desc.slice(0,50)+"...":c.desc})]})]})},c.id))}):w(os,{})})]})})},DX=co(Zm,"questions_photos"),IX=async e=>{const t=co(DX,e.name);return await Xm(t,e),await Jm(t)},JR=_r("question/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("qnaData is Not Fount");const{category:n,title:r,desc:i,photo:s,nickname:o}=e,a=await IX(s);return{id:(await Qm(uo(Sr,"questions"),{category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()})).id,category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),GS=_r("question/get",async()=>(te.locale("ko"),(await Km(uo(Sr,"questions"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=te(),u=te(i);return a.diff(u,"days")<=1?o=u.fromNow():o=u.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}}))),bX=oa({name:"qna",initialState:{questions:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(JR.fulfilled,(t,n)=>{const r=n.payload;return{...t,questions:[...t.questions,r],postCount:t.postCount+1}}).addCase(GS.fulfilled,(t,n)=>({...t,questions:n.payload,postCount:n.payload.length}))}});var AX=bX.reducer;const NX=()=>{const e=vt(n=>n.qna.questions),t=ln();return L.exports.useEffect(()=>{t(GS())},[t]),w(Wt,{children:O(xg,{children:[O("div",{className:"title",children:[w("h1",{children:"QnA"}),w("span",{children:"\uCD5C\uC2E0 QnA \uB9AC\uC2A4\uD2B8"})]}),e.length>0?w("div",{className:"qna_card"}):w(os,{})]})})},OX=co(Zm,"photos_png"),RX=async e=>{const t=co(OX,e.name);return await Xm(t,e),await Jm(t)},ZR=_r("photos/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("photoData is Not Fount");const{category:n,title:r,desc:i,photo:s,nickname:o}=e,a=await RX(s);return{id:(await Qm(uo(Sr,"photos"),{category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()})).id,category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),Ig=_r("photos/get",async()=>(cv.locale("ko"),(await Km(uo(Sr,"photos"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=cv(),u=cv(i);return a.diff(u,"days")<=1?o=u.fromNow():o=u.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}}))),PX=oa({name:"photo",initialState:{photos:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(ZR.fulfilled,(t,n)=>{const r=n.payload;return{...t,photos:[...t.photos,r],postCount:t.postCount+1}}).addCase(Ig.fulfilled,(t,n)=>({...t,photos:n.payload,postCount:n.payload.length}))}});var MX=PX.reducer;const LX=()=>{const e=vt(p=>p.photo.photos),[t,n]=L.exports.useState([]),[r,i]=L.exports.useState(e.length),[s,o]=L.exports.useState("16px"),[a,u]=L.exports.useState("left"),c=ln(),d=L.exports.useCallback(()=>{window.innerWidth>=1280?(i(5),u("left")):window.innerWidth>=1024?(i(4),o("14px"),u("left")):window.innerWidth>=768?(i(3),o("12px"),u("center")):(i(2),o("10px"),u("center"))},[]);return L.exports.useEffect(()=>(c(Ig()),d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)),[c,d]),L.exports.useEffect(()=>{const p=[...e].sort((m,y)=>y.createdAt-m.createdAt);n(p)},[e]),w(Wt,{children:O(xg,{children:[O("div",{className:"title",children:[w("h1",{children:"Photos"}),w("span",{children:"\uCD5C\uC2E0 photo \uB9AC\uC2A4\uD2B8"})]}),w("div",{className:"contents",children:t.length>0?w(wS,{options:{type:"loop",perPage:r,gap:s,focus:a,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!1,pauseOnFocus:!1,rewind:!1,speed:1.5}},extensions:{AutoScroll:HS},children:t.slice(0,10).map(p=>w(_S,{children:O(zS,{children:[w("div",{className:"top",children:w(Nn,{to:`photo/details/${p.id}`,children:w("img",{src:p.photo,alt:"photo"})})}),O("div",{className:"bottom",children:[w("p",{className:"photo_category",children:`<${p.category}>`}),w("p",{className:"photo_nickname",children:p.nickname}),w("p",{className:"photo_title",children:p.title}),w("p",{className:"photo_desc",children:p.desc.length>60?p.desc.slice(0,50)+"...":p.desc})]})]})},p.id))}):w(os,{})})]})})};Ze.main`
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
`;var qS="/modart/assets/main.eb927103.gif";const $X=co(Zm,"todays_photos"),FX=async e=>{if(e){const t=co($X,e.name);return await Xm(t,e),await Jm(t)}return null},eP=_r("todays/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("todaysData Not Found..");const{title:n,desc:r,type:i,photo:s,nickname:o}=e,a=await FX(s),u={title:n,desc:r,type:i,nickname:o,createdAt:Date.now()};return a&&(u.photo=a),{id:(await Qm(uo(Sr,"todays"),u)).id,...u}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),KS=_r("todays/get",async()=>(te.locale("ko"),(await Km(uo(Sr,"todays"))).docs.map((n,r)=>{const i=n.data(),{createdAt:s,...o}=i;let a;const u=te(),c=te(s);return u.diff(c,"days")<=1?a=c.fromNow():a=c.format("YYYY.MM.DD"),{id:n.id,number:r+1,createdAt:a,...o}}))),UX=oa({name:"today",initialState:{todays:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(eP.fulfilled,(t,n)=>{const r=n.payload;return{...t,todays:[...t.todays,r],postCount:t.postCount+1}}).addCase(KS.fulfilled,(t,n)=>({...t,todays:n.payload,postCount:n.payload.length}))}});var BX=UX.reducer;const VX=()=>{const e=vt(d=>d.today.todays),[t,n]=L.exports.useState(e.length),[r,i]=L.exports.useState("16px"),[s,o]=L.exports.useState("left"),a=ln(),u="https://via.placeholder.com/500x750.png?text=No+Image",c=L.exports.useCallback(()=>{window.innerWidth>=1280?(n(5),o("left")):window.innerWidth>=1024?(n(4),i("14px"),o("left")):window.innerWidth>=768?(n(3),i("12px"),o("center")):(n(2),i("10px"),o("center"))},[]);return L.exports.useEffect(()=>(a(KS()),c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)),[a,c]),w(Wt,{children:O(xg,{children:[O("div",{className:"title",children:[w("h1",{children:"Today Story"}),w("span",{children:"\uCD5C\uC2E0 \uC77C\uC0C1\uC774\uC57C\uAE30 \uB9AC\uC2A4\uD2B8"})]}),e.length>0?w(wS,{options:{type:"loop",perPage:t,gap:r,focus:s,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!0,pauseOnFocus:!1,rewind:!1,speed:-1}},extensions:{AutoScroll:HS},children:e.slice(0,10).map(d=>w(_S,{children:O(zS,{children:[w("div",{className:"top",children:w(Nn,{to:`today/details/${d.id}`,children:d.photo?w("img",{src:d.photo,alt:"today"}):w("img",{src:u,alt:d.title})})}),O("div",{className:"bottom",children:[w("p",{className:"today_category",children:`<${d.type}>`}),w("p",{className:"today_nickname",children:d.nickname}),w("p",{className:"today_title",children:d.title}),w("p",{className:"today_desc",children:d.desc.length>60?d.desc.slice(0,50)+"...":d.desc})]})]})},d.id))}):w(os,{})]})})},zX=()=>O(py,{children:[w(TX,{}),w(VX,{}),w(LX,{}),w(NX,{})]}),jX=Ze.div`
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
`,YX=Ze.div`
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
`,WX=()=>{const e=vt(t=>t.login.user);return w(Wt,{children:w(jX,{children:e?O("div",{className:"contents",children:[O("div",{className:"users",children:[O("div",{className:"user_detail",children:[w("div",{className:"user_thumb",children:w("img",{src:"",alt:""})}),w("div",{className:"user_info",children:O("div",{className:"info_box",children:[w("strong",{className:"name",children:e.nickname}),w("p",{className:"email",children:e.email}),w(Nn,{to:"/account/edit",children:"\uD504\uB85C\uD544 \uC218\uC815"})]})})]}),O("div",{className:"board_detail",children:[O(Nn,{to:"/",className:"board_item",children:[w("strong",{className:"info",children:"\uAC8C\uC2DC\uAE00"}),w("p",{className:"title",children:"2 (\uAC1C)"})]}),O(Nn,{to:"/",className:"board_item",children:[w("strong",{className:"info",children:"2100P"}),w("p",{className:"title",children:"\uD3EC\uC778\uD2B8"})]})]})]}),w("div",{className:"items"}),w("div",{className:"items"})]}):w(os,{})})})},_1=_r("auth/signUp",async e=>{try{const{email:t,password:n,nickname:r}=e,s=(await H9(ta,t,n)).user;return await uY(kh(Sr,"users",s.uid),{uid:s.uid,nickname:r,email:t}),{uid:s.uid,email:t,nickname:r}}catch(t){throw t}}),HX=oa({name:"auth",initialState:null,extraReducers:e=>{e.addCase(_1.fulfilled,(t,n)=>{const{uid:r,email:i,nickname:s}=n.payload;return{...t,uid:r,email:i,nickname:s}}),e.addCase(_1.rejected,(t,n)=>n.error.message)}});var GX=HX.reducer;function qX(e){return Er({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(e)}function KX(e){return Er({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(e)}const QX=({text:e})=>w(tX,{children:w("p",{children:e})}),tP=({text:e,link:t})=>{const[n,r]=L.exports.useState({});L.exports.useState({});const[i,s]=L.exports.useState(!1),[o,a]=L.exports.useState(""),u=ln(),c=yr(),d=y=>{r({...n,[y.target.name]:y.target.value})};return O(eX,{children:[O("div",{className:"left",children:[w("div",{className:"toggle",onClick:()=>c("/"),children:w(qX,{})}),O("div",{className:"textbox",children:[w("strong",{className:"title",children:"ModArt"}),w("span",{children:"< \uBAA8\uB4DC\uC544\uD2B8 />"})]})]}),O("div",{className:"right",children:[i&&w(QX,{text:o}),w("form",{onSubmit:async y=>{if(y.preventDefault(),Object.values(n).every(S=>S!=="")){if(e==="\uD68C\uC6D0\uAC00\uC785")try{await u(_1(n)).unwrap(),a("\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC131\uACF5\uD558\uC600\uC2B5\uB2C8\uB2E4."),s(!0),c("/account/login")}catch{a("\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."),s(!0),setTimeout(()=>{s(!1)},2e3)}else if(e==="\uB85C\uADF8\uC778")try{if(!await u(t1(n)).unwrap()){a("\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC720\uC800\uC785\uB2C8\uB2E4."),s(!0),setTimeout(()=>{s(!1)},2e3);return}c("/")}catch{a("\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),s(!0),setTimeout(()=>{s(!1)},2e3)}}},children:e==="\uD68C\uC6D0\uAC00\uC785"?O(py,{children:[O("div",{className:"area",children:[w(_u,{type:"email",name:"email",onChange:d,autoComplete:"off"}),w("label",{htmlFor:"email",children:"Email"})]}),O("div",{className:"area",children:[w(_u,{type:"password",name:"password",onChange:d,autoComplete:"off"}),w("label",{htmlFor:"password",children:"Password"})]}),O("div",{className:"area",children:[w(_u,{type:"text",name:"nickname",onChange:d,autoComplete:"off"}),w("label",{htmlFor:"nickname",children:"\uB2C9\uB124\uC784"})]}),w(hv,{type:"submit",children:e})]}):O(py,{children:[O("div",{className:"area",children:[w(_u,{type:"email",name:"email",onChange:d}),w("label",{htmlFor:"email",children:"email"})]}),O("div",{className:"area",children:[w(_u,{type:"password",name:"password",onChange:d}),w("label",{htmlFor:"password",children:"Password"})]}),w(hv,{type:"submit",children:e})]})}),w("div",{className:"socialLogin",children:O(hv,{className:"googleLogin",onClick:async()=>{try{await u(e1()).unwrap(),a("\uAD6C\uAE00\uACC4\uC815 \uB85C\uADF8\uC778 \uB418\uC168\uC2B5\uB2C8\uB2E4."),c("/")}catch(y){a(y.message)}},children:[w("div",{className:"googleIcon",children:w(KX,{})}),w("p",{className:"googleText",children:"Sign In With Google"})]})}),w("div",{className:"signUp_link",children:w(Nn,{to:`/account/${t==="\uD68C\uC6D0\uAC00\uC785"?"signup":"login"}`,children:t})})]})]})},nP=Ze.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 0 16px;
    }
`,XX=()=>w(nP,{children:w(tP,{text:"\uD68C\uC6D0\uAC00\uC785",link:"\uB85C\uADF8\uC778"})}),JX=()=>w(nP,{children:w(tP,{text:"\uB85C\uADF8\uC778",link:"\uD68C\uC6D0\uAC00\uC785"})});(()=>{var e={d:(s,o)=>{for(var a in o)e.o(o,a)&&!e.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:o[a]})},o:(s,o)=>Object.prototype.hasOwnProperty.call(s,o),r:s=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}},t={};function n(s,o){for(var a=0;a<o.length;a++){var u=o[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(s,u.key,u)}}e.r(t),e.d(t,{default:()=>i});var r=function(){function s(){(function(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")})(this,s)}var o,a;return o=s,a=[{key:"changeHeightWidth",value:function(u,c,d,p,m,y){return d>p&&(u=Math.round(u*p/d),d=p),u>c&&(d=Math.round(d*c/u),u=c),m&&d<m&&(u=Math.round(u*m/d),d=m),y&&u<y&&(d=Math.round(d*y/u),u=y),{height:u,width:d}}},{key:"resizeAndRotateImage",value:function(u,c,d,p,m){var y=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"jpeg",_=arguments.length>6&&arguments[6]!==void 0?arguments[6]:100,S=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,x=_/100,E=document.createElement("canvas"),v=u.width,k=u.height,T=this.changeHeightWidth(k,d,v,c,p,m);!S||S!==90&&S!==270?(E.width=T.width,E.height=T.height):(E.width=T.height,E.height=T.width),v=T.width,k=T.height;var b=E.getContext("2d");return b.fillStyle="rgba(0, 0, 0, 0)",b.fillRect(0,0,v,k),b.imageSmoothingEnabled&&b.imageSmoothingQuality&&(b.imageSmoothingQuality="high"),S&&(b.rotate(S*Math.PI/180),S===90?b.translate(0,-E.width):S===180?b.translate(-E.width,-E.height):S===270?b.translate(-E.height,0):S!==0&&S!==360||b.translate(0,0)),b.drawImage(u,0,0,v,k),E.toDataURL("image/".concat(y),x)}},{key:"b64toByteArrays",value:function(u,c){for(var d=atob(u.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),p=[],m=0;m<d.length;m+=512){for(var y=d.slice(m,m+512),_=new Array(y.length),S=0;S<y.length;S++)_[S]=y.charCodeAt(S);var x=new Uint8Array(_);p.push(x)}return p}},{key:"b64toBlob",value:function(u,c){var d=this.b64toByteArrays(u,c);return new Blob(d,{type:c,lastModified:new Date})}},{key:"b64toFile",value:function(u,c,d){var p=this.b64toByteArrays(u,d);return new File(p,c,{type:d,lastModified:new Date})}},{key:"createResizedImage",value:function(u,c,d,p,m,y,_){var S=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"base64",x=arguments.length>8&&arguments[8]!==void 0?arguments[8]:null,E=arguments.length>9&&arguments[9]!==void 0?arguments[9]:null,v=new FileReader;if(!u)throw Error("File Not Found!");if(u.type&&!u.type.includes("image"))throw Error("File Is NOT Image!");v.readAsDataURL(u),v.onload=function(){var k=new Image;k.src=v.result,k.onload=function(){var T=s.resizeAndRotateImage(k,c,d,x,E,p,m,y),b="image/".concat(p);switch(S){case"blob":var R=s.b64toBlob(T,b);_(R);break;case"base64":_(T);break;case"file":var A=u.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(p.toString()),N=s.b64toFile(T,A,b);_(N);break;default:_(T)}}},v.onerror=function(k){throw Error(k)}}}],a&&n(o,a),s}();const i={imageFileResizer:function(s,o,a,u,c,d,p,m,y,_){return r.createResizedImage(s,o,a,u,c,d,p,m,y,_)}}})();const ZX=()=>{const e=vt(c=>c.login.user),t=e==null?void 0:e.nickname,n=L.exports.useRef(),[r,i]=L.exports.useState({}),s=ln(),o=yr(),a=c=>{c.target.name==="photo"?i({...r,[c.target.name]:c.target.files[0]}):i({...r,[c.target.name]:c.target.value})};return L.exports.useEffect(()=>{n.current.focus()},[n]),w(Wt,{children:O(Fh,{children:[w("div",{className:"post_title",children:w("h1",{children:"<OOTD>"})}),O("form",{onSubmit:async c=>{c.preventDefault();try{const d={...r,nickname:t};await s(YR(d)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),o(-1),console.log(r)}catch(d){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(d)}},encType:"multipart/form-data",children:[O("p",{className:"nickname",children:[w("span",{className:"author",children:"\uC791\uC131\uC790"}),t]}),w("input",{ref:n,type:"text",onChange:a,autoComplete:"off",name:"title",placeholder:"\uAE00\uC81C\uBAA9"}),w("input",{type:"text",onChange:a,autoComplete:"off",name:"brand",placeholder:"\uBE0C\uB79C\uB4DC\uBA85 ex) \uB098\uC774\uD0A4"}),w("input",{type:"text",onChange:a,autoComplete:"off",name:"height",placeholder:"\uD0A4"}),w("input",{type:"text",onChange:a,autoComplete:"off",name:"weight",placeholder:"\uBAB8\uBB34\uAC8C"}),w("textarea",{type:"text",name:"desc",onChange:a,placeholder:"contents.."}),w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:a}),w("label",{htmlFor:"photo",className:"file_label",children:O("p",{children:[w("span",{children:w(eg,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30"]})}),w("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},eJ=()=>(vt(e=>e.login.user),th(),w(Wt,{children:w(Fh,{children:w("form",{children:w("p",{className:"nickname"})})})})),tJ=Ze.div`
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
`,nJ=Ze.div`
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
`,rJ=Ze.div`
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
`,iJ=()=>{const{id:e}=th(),t=vt(i=>i.board.boards),n=ln(),r=t.find(i=>i.id===e);return L.exports.useEffect(()=>{n(kg())},[n]),L.exports.useEffect(()=>{const i=t.find(s=>s.id===e);console.log(i)},[t,e]),w(Wt,{children:w(rJ,{children:r&&O("div",{className:"contents",children:[O("div",{className:"board",children:[w("div",{className:"boardImg",children:w("img",{src:r.photo,alt:r.nickname})}),O("div",{className:"boardInfo",children:[O("div",{className:"title",children:[O("h1",{children:["Information ",w("span",{children:"< \uC2A4\uD0C0\uC77C \uC815\uBCF4 >"})]}),O("p",{className:"date",children:[r.createdAt,"..."]})]}),O("div",{className:"info",children:[O("div",{className:"area",children:[w("div",{className:"user_img",children:w("img",{src:qS,alt:r.nickname})}),w("p",{children:r.nickname})]}),O("div",{className:"area",children:[w("label",{children:"Title"}),w("p",{children:r.title})]}),O("div",{className:"area",children:[w("label",{children:"Brand"}),w("p",{children:r.brand})]}),O("div",{className:"area",children:[w("label",{children:"Spec"}),O("div",{className:"spec",children:[O("p",{children:["Height: ",r.height]}),O("p",{children:["Weight: ",r.weight]})]})]}),O("div",{className:"area",children:[w("label",{children:"Contents"}),w("p",{children:r.desc})]})]})]})]}),O("div",{className:"comment",children:[O("div",{className:"comment_form",children:[w("div",{className:"users"}),w("div",{className:"form"})]}),w("ul",{className:"comment_list",children:w("li",{})})]})]})})})},sJ=Ze.div`
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
`,oJ=Ze.div`
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
`,aJ=Ze.div`
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
`,lJ=()=>{const e=vt(u=>u.login.user),t=vt(u=>u.photo.photos)||null,n=ln(),r=yr(),[i,s]=L.exports.useState([]),o=()=>e?r("/photo/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),a=u=>{r(`/photo/details/${u.id}`)};return L.exports.useEffect(()=>{n(Ig())},[n]),L.exports.useEffect(()=>{const u=[...t].sort((c,d)=>d.createdAt-c.createdAt);s(u)},[t]),O(Wt,{children:[w(sJ,{children:O("div",{className:"contents",children:[O("div",{className:"text",children:[w("p",{children:"Free PhotoZone"}),w("span",{children:"\uC790\uC2E0\uC758 \uC0AC\uC9C4\uC2E4\uB825\uC744 \uBF50\uB0B4\uC8FC\uC138\uC694!"}),w("button",{className:"link-btn",onClick:o,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),w("div",{className:"image",children:w(NW,{})})]})}),O(oJ,{children:[w("div",{className:"filter"}),w("ul",{className:"photo_list",children:i.length>0?i.slice(0,10).map(u=>O("li",{className:"photo_card",children:[w("div",{className:"photo_img",onClick:()=>a(u),children:w("img",{src:u.photo,alt:u.title})}),O("div",{className:"items",children:[w("h3",{className:"photo_title",onClick:()=>a(u),children:u.title.length>30?u.title.subString(0,30)+"...":u.title}),O("div",{className:"item_contents",children:[w("span",{className:"item_category",children:u.category}),O("div",{className:"sub_items",children:[w("span",{className:"item_nickname",children:u.nickname}),w("span",{className:"item_date",children:u.createdAt})]})]})]})]},u.id)):w(os,{})})]})]})},uJ=()=>{const[e,t]=L.exports.useState({}),[n,r]=L.exports.useState([]),i=vt(d=>d.login.user),s=i==null?void 0:i.nickname,o=ln(),a=yr(),u=d=>{if(d.target.name==="photo")t({...e,[d.target.name]:d.target.files[0]});else if(d.target.name==="category"){const{value:p,checked:m}=d.target;r(m?[...n,p]:n.filter(y=>y!==p))}else t({...e,[d.target.name]:d.target.value})};return w(Wt,{children:O(Fh,{children:[w("div",{className:"post_title",children:w("h1",{children:"<Photos>"})}),O("form",{encType:"multipart/form-data",onSubmit:async d=>{d.preventDefault();try{const p={...e,nickname:s,category:n};await o(ZR(p)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),a(-1)}catch(p){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(p)}},children:[O("p",{className:"nickname",children:[w("span",{className:"author",children:"\uC791\uC131\uC790"}),s]}),O("div",{className:"category-wrap",children:[O("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uC790\uC5F0",onChange:u}),w("i",{}),w("span",{children:"\uC790\uC5F0"})]}),O("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uC778\uBB3C",onChange:u}),w("i",{}),w("span",{children:"\uC778\uBB3C"})]}),O("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uC74C\uC2DD",onChange:u}),w("i",{}),w("span",{children:"\uC74C\uC2DD"})]}),O("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uC77C\uC0C1",onChange:u}),w("i",{}),w("span",{children:"\uC77C\uC0C1"})]})]}),w("input",{type:"text",placeholder:"\uC81C\uBAA9",name:"title",autoComplete:"off",onChange:u}),w("input",{type:"text",placeholder:"\uC124\uBA85",name:"desc",autoComplete:"off",onChange:u}),w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:u}),w("label",{htmlFor:"photo",className:"file_label",children:O("p",{children:[w("span",{children:w(eg,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30"]})}),w("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},cJ=()=>{const e=vt(o=>o.login.user),t=vt(o=>o.board.boards)||null,n=yr(),r=ln(),i=()=>e?n("/board/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),s=o=>{n(`/board/details/${o.id}`)};return L.exports.useEffect(()=>{r(kg())},[r]),O(Wt,{children:[w(tJ,{children:O("div",{className:"contents",children:[O("div",{className:"text",children:[w("p",{children:"OOTD of the day"}),w("span",{children:"\uC790\uC2E0\uC758 OOTD\uB97C \uACF5\uC720 \uD574\uC8FC\uC138\uC694!"}),w("button",{className:"link-btn",onClick:i,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),w("div",{className:"image",children:w(RW,{})})]})}),w(nJ,{children:w("ul",{className:"board_list",children:t.length>0?t.map(o=>O("li",{className:"board_card",children:[w("div",{className:"board_img",onClick:()=>s(o),children:w("img",{src:o.photo,alt:o.title})}),O("div",{className:"items",children:[w("h3",{className:"board_title",onClick:()=>s(o),children:o.title.length>30?o.title.subString(0,30)+"...":o.title}),O("div",{className:"item_contents",children:[w("span",{className:"item_brand",children:o.brand}),O("div",{className:"sub_items",children:[w("span",{className:"item_nickname",children:o.nickname}),w("span",{className:"item_date",children:o.createdAt})]})]})]})]},o.id)):w(os,{})})})]})},hJ=()=>{const{id:e}=th();return console.log(e),w("div",{children:"PhotoEdit"})};function dJ(e){return Er({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 1c4.418 0 8 2.91 8 6.5s-3.582 6.5-8 6.5c-0.424 0-0.841-0.027-1.247-0.079-1.718 1.718-3.77 2.027-5.753 2.072v-0.421c1.071-0.525 2-1.48 2-2.572 0-0.152-0.012-0.302-0.034-0.448-1.809-1.192-2.966-3.012-2.966-5.052 0-3.59 3.582-6.5 8-6.5z"}}]})(e)}const fJ=()=>{const{id:e}=th(),t=vt(i=>i.photo.photos),n=ln();yr();const r=t.find(i=>i.id===e);return L.exports.useEffect(()=>{n(Ig())},[n]),w(Wt,{children:w(aJ,{children:r&&O("div",{className:"contents",children:[O("div",{className:"photo_users",children:[w("div",{className:"user_img",children:w("img",{src:qS,alt:r.nickname})}),O("div",{className:"user",children:[w("p",{children:r.nickname}),w("span",{children:r.category})]})]}),w("div",{className:"snapImg",children:w("img",{src:r.photo,alt:r.nickname})}),O("div",{className:"photo_info",children:[O("div",{className:"icon",children:[O("div",{className:"link",children:[w("button",{className:"like",children:w(AW,{})}),w("button",{className:"comment",children:w(dJ,{})})]}),O("span",{className:"date",children:[r.createdAt," ..."]})]}),O("div",{className:"photo_title",children:[w("h1",{children:r.title}),w("p",{children:r.desc})]})]})]})})})},pJ=()=>w("div",{children:"TodayDetail"}),mJ=()=>{const[e,t]=L.exports.useState({photo:null,fileName:""}),n=vt(u=>u.login.user),r=n==null?void 0:n.nickname,i=ln(),s=yr(),o=u=>{if(u.target.name==="photo"){const c=u.target.file[0];c&&t({...e,photo:c,fileName:c.name})}else t({...e,[u.target.name]:u.target.value})};return w(Wt,{children:O(Fh,{children:[w("div",{className:"post_title",children:w("h1",{children:"<Todays Story>"})}),O("form",{encType:"multipart/form-data",onSubmit:async u=>{u.preventDefault();try{const c={...e,nickname:r};await i(eP(c)).unwrap(),s(-1),console.log(e)}catch(c){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(c)}},children:[O("p",{className:"nickname",children:[w("span",{className:"author",children:"\uC791\uC131\uC790"}),r]}),w("input",{type:"text",name:"title",placeholder:"\uC81C\uBAA9",autoComplete:"off",onChange:o}),w("input",{type:"text",name:"desc",placeholder:"\uB0B4\uC6A9",autoComplete:"off",onChange:o}),O("select",{name:"type",value:e.type||"",placeholder:"\uC885\uB958",autoComplete:"off",onChange:o,children:[w("option",{value:"",children:"\uC885\uB958 \uC120\uD0DD"}),w("option",{value:"\uD328\uC158",children:"\uD328\uC158"}),w("option",{value:"\uC5F0\uC608\uC778",children:"\uC5F0\uC608\uC778"}),w("option",{value:"\uC6B4\uB3D9",children:"\uC6B4\uB3D9"}),w("option",{value:"\uC720\uBA38",children:"\uC720\uBA38"}),w("option",{value:"\uBBF8\uC6A9",children:"\uBBF8\uC6A9"}),w("option",{value:"\uBBF8\uC2A4\uD130\uB9AC",children:"\uBBF8\uC2A4\uD130\uB9AC"})]}),w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:o}),w("label",{htmlFor:"photo",className:"file_label",children:O("p",{children:[w("span",{children:w(eg,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30",w("span",{className:"label_text",children:e.fileName})]})}),w("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},gJ=Ze.div`
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
`,vJ=Ze.div`
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
`;function yJ(e){return Er({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M11.667 0h-8.651v1.984h-0.516c-0.827 0-1.5 0.673-1.5 1.5v8.588l2.521 4.956 2.464-4.959v-8.585c0-0.827-0.673-1.5-1.5-1.5h-0.469v-0.984h6.984v5h5v10h-11.5v1h12.5v-11.692l-5.333-5.308zM3.908 14.002h-0.804l-1.104-2.17v-5.848h1v6.027h1v-6.027h0.984v5.851l-1.076 2.167zM4.984 3.484v1.5h-2.984v-1.5c0-0.275 0.225-0.5 0.5-0.5h1.984c0.276 0 0.5 0.225 0.5 0.5zM12 1.742l3.273 3.258h-3.273v-3.258z"}}]})(e)}const wJ=()=>{const e=vt(u=>u.login.user),t=vt(u=>u.today.todays),[n,r]=L.exports.useState([]),i=yr(),s=ln(),o="https://via.placeholder.com/500x750.png?text=No+Image",a=()=>e?i("/today/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null);return L.exports.useEffect(()=>{s(KS())},[s]),L.exports.useEffect(()=>{const u=[...t].sort((c,d)=>d.createdAt-c.createdAt);r(u),console.log(u)},[t]),O(Wt,{children:[w(gJ,{children:O("div",{className:"contents",children:[O("div",{className:"text",children:[w("p",{children:"Free Talking"}),w("span",{children:"\uD558\uB8E8\uC758 \uC77C\uC0C1\uC744 \uACF5\uC720\uD574\uBCF4\uC138\uC694:)"}),w("button",{className:"link-btn",onClick:a,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),w("div",{className:"image",children:w(yJ,{})})]})}),w(vJ,{children:w("ul",{className:"today_list",children:n?n.slice(0,10).map(u=>O("li",{className:"today_card",children:[w("div",{className:"numbers",children:O("span",{children:["#",u.number]})}),w("div",{className:"today_img",children:u.photo?w("img",{src:u.photo,loading:"lazy",alt:u.title}):w("img",{src:o,loading:"lazy",alt:u.title})}),O("div",{className:"items",children:[w("h3",{className:"today_title",onClick:()=>detailClick(u),children:u.title.length>30?u.title.subString(0,30)+"...":u.title}),O("div",{className:"item_contents",children:[w("span",{className:"item_type",children:u.type}),O("div",{className:"sub_items",children:[w("span",{className:"item_nickname",children:u.nickname}),w("span",{className:"item_date",children:u.createdAt})]})]})]})]},u.id)):w(os,{})})})]})},_J=Ze.div`
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
`,SJ=Ze.article`
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
`,EJ=Ze.div`
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
`,CJ=()=>{const e=vt(i=>i.login.user),t=vt(i=>i.qna.questions),n=yr();return O(Wt,{children:[w(_J,{children:O("div",{className:"contents",children:[O("div",{className:"text",children:[w("p",{children:"Ask me any questions"}),w("span",{children:"\uC9C8\uBB38\uACFC \uB2F5\uBCC0\uC744 \uD574\uC8FC\uC138\uC694!"}),w("button",{className:"link-btn",onClick:()=>e?n("/qna/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),children:"\uC9C8\uBB38\uD558\uAE30"})]}),w("div",{className:"image",children:w(OW,{})})]})}),w(EJ,{children:w("ul",{className:"qna_list",children:t.length>0?t.slice(0,10).map(i=>O("li",{className:"qna_card",children:[w("div",{className:"qna_img",children:w("img",{src:i.photo,loading:"lazy",alt:i.title})}),O("div",{className:"items",children:[w("h3",{className:"qna_title",children:i.title}),O("div",{className:"item_contents",children:[w("span",{className:"item_category",children:i.category}),w("span",{className:"item_date",children:"\uB0A0\uC9DC"}),w("span",{className:"item_nickname",children:i.nickname})]})]})]},i.id)):w(os,{})})})]})},kJ=()=>{const{id:e}=th(),[t,n]=L.exports.useState(!1),r=vt(u=>u.qna.questions),i=vt(u=>u.login.user),s=ln(),o=r.find(u=>u.id===e);console.log(o);const a=()=>(i||window.alert("\uB85C\uADF8\uC778\uD558\uC5EC\uC57C \uC785\uB825\uAC00\uB2A5\uD569\uB2C8\uB2E4!"),null);return L.exports.useEffect(()=>{s(GS())},[s]),w(Wt,{children:w(SJ,{children:O("div",{className:"qna_card",children:[O("header",{className:"card_header",children:[O("h1",{children:[w("span",{children:"Q."}),"\uC9C8\uBB38 title"]}),O("div",{className:"card_info",children:[O("div",{className:"inner",children:[w("span",{children:"\uC720\uC800\uC774\uBBF8\uC9C0?!"}),w("span",{children:"\uC720\uC800nickname"})]}),w("span",{className:"date",children:"2023-05-18"})]})]}),w("div",{className:"card_contents",children:w("p",{className:"card_desc",children:"qna\uB0B4\uC6A9"})}),O("footer",{className:"card_footer",children:[O("div",{className:"inner",children:[w("button",{children:"\uC88B\uC544\uC694"}),w("button",{onClick:()=>n(!t),children:"\uB313\uAE00"}),w("button",{children:"\uACF5\uC720\uD558\uAE30"})]}),t?w("div",{className:"comment",children:O("div",{className:"comment_in",children:[O("div",{className:"top",children:[w("span",{children:i?i.nickname:w(Nn,{to:"/account/login",children:"\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694."})}),w("button",{children:"\uB4F1\uB85D"})]}),w("div",{className:"bottom",children:w("textarea",{cols:"30",rows:"10",onClick:a,children:"\uB313\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."})})]})}):null]})]})})})},xJ=()=>w("div",{children:"QnaEdit"}),TJ=()=>{const[e,t]=L.exports.useState({}),[n,r]=L.exports.useState([]),i=vt(d=>d.login.user),s=i==null?void 0:i.nickname,o=ln(),a=yr(),u=d=>{if(d.target.name==="photo")t({...e,[d.target.name]:d.target.files[0]});else if(d.target.name==="category"){const{value:p,checked:m}=d.target;r(m?[...n,p]:n.filter(y=>y!==p))}else t({...e,[d.target.name]:d.target.value})};return w(Wt,{children:O(Fh,{children:[w("div",{className:"post_title",children:w("h1",{children:"<Question>"})}),O("form",{encType:"multipart/form-data",onSubmit:async d=>{d.preventDefault();try{const p={...e,nickname:s,category:n};await o(JR(p)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),a(-1)}catch(p){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(p)}},children:[O("p",{className:"nickname",children:[w("span",{className:"author",children:"\uC791\uC131\uC790"}),s]}),O("div",{className:"category-wrap",children:[O("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uAC74\uAC15",onChange:u}),w("i",{}),w("span",{children:"\uAC74\uAC15"})]}),O("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uD328\uC158",onChange:u}),w("i",{}),w("span",{children:"\uD328\uC158"})]}),O("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uACF5\uBD80",onChange:u}),w("i",{}),w("span",{children:"\uACF5\uBD80"})]}),O("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uC77C\uC0C1",onChange:u}),w("i",{}),w("span",{children:"\uC77C\uC0C1"})]})]}),w("input",{type:"text",name:"title",placeholder:"\uC81C\uBAA9",autoComplete:"off",onChange:u}),w("input",{type:"text",name:"desc",placeholder:"\uB0B4\uC6A9",autoComplete:"off",onChange:u}),w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo",onChange:u}),w("label",{htmlFor:"photo",className:"file_label",children:O("p",{children:[w("span",{children:w(eg,{})}),"\uC0AC\uC9C4\uC62C\uB9AC\uAE30"]})}),w("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},DJ=()=>w("div",{children:"TodayEdit"}),IJ=()=>{const[e,t]=L.exports.useState({}),n=vt(i=>i.login.user);ln();const r=i=>{t(s=>({...s,name:i==="name"?!s.name:s.name,email:i==="email"?!s.email:s.email,intro:i==="intro"?!s.intro:s.intro,password:i==="password"?!s.password:s.password}))};return w(Wt,{children:w(YX,{children:O("div",{className:"contents",children:[w("div",{className:"contents_title",children:w("h3",{children:"\uD504\uB85C\uD544 \uAD00\uB9AC"})}),O("div",{className:"user_profile",children:[w("div",{className:"user_img",children:w("img",{src:qS,alt:n.nickname})}),O("div",{className:"user_detail",children:[w("div",{className:"user_nickname",children:w("p",{children:n.nickname})}),O("div",{className:"profile_btn",children:[O("div",{className:"img_change",children:[w("input",{type:"file",id:"photo",style:{display:"none"},name:"photo"}),w("label",{htmlFor:"photo",className:"file_label",children:w("p",{children:"\uC774\uBBF8\uC9C0\uBCC0\uACBD"})})]}),w("div",{className:"img_delete",children:w("p",{children:"\uC0AD\uC81C\uD558\uAE30"})})]})]})]}),O("div",{className:"profile_info",children:[w("div",{className:"info_title",children:w("h3",{children:"\uD504\uB85C\uD544 \uC815\uBCF4"})}),O("div",{className:`area${e.name?" active":""}`,children:[w("label",{children:"\uD504\uB85C\uD544 \uC774\uB984"}),O("div",{className:`input_area${e.name?" active":""}`,children:[e.name?w("input",{type:"text",placeholder:n.nickname}):w("p",{children:n.nickname}),e.name?O("div",{className:"btn_area",children:[w("button",{className:"back",onClick:()=>r("name"),children:"\uB3CC\uC544\uAC00\uAE30"}),w("button",{className:"submit",children:"\uC800\uC7A5\uD558\uAE30"})]}):w("button",{className:"change_btn",onClick:()=>r("name"),children:"\uBCC0\uACBD"})]})]}),O("div",{className:`area${e.email?" active":""}`,children:[w("label",{children:"Email"}),O("div",{className:`input_area${e.email?" active":""}`,children:[e.email?w("input",{type:"text",placeholder:n.email}):w("p",{children:n.email}),e.email?O("div",{className:"btn_area",children:[w("button",{className:"back",onClick:()=>r("email"),children:"\uB3CC\uC544\uAC00\uAE30"}),w("button",{className:"submit",children:"\uC800\uC7A5\uD558\uAE30"})]}):w("button",{className:"change_btn",onClick:()=>r("email"),children:"\uBCC0\uACBD"})]})]}),O("div",{className:`area${e.intro?" active":""}`,children:[w("label",{children:"\uC18C\uAC1C"}),O("div",{className:`input_area${e.intro?" active":""}`,children:[e.intro?w("input",{type:"text",placeholder:n.intro?n.intro:"\uC790\uC2E0\uC744 \uC18C\uAC1C \uD574\uC8FC\uC138\uC694..."}):w("p",{children:n.intro?n.intro:"\uC790\uC2E0\uC744 \uC18C\uAC1C \uD574\uC8FC\uC138\uC694..."}),e.intro?O("div",{className:"btn_area",children:[w("button",{className:"back",onClick:()=>r("intro"),children:"\uB3CC\uC544\uAC00\uAE30"}),w("button",{className:"submit",children:"\uC800\uC7A5\uD558\uAE30"})]}):w("button",{className:"change_btn",onClick:()=>r("intro"),children:"\uBCC0\uACBD"})]})]}),O("div",{className:`area${e.password?" active":""}`,children:[w("label",{children:"\uBE44\uBC00\uBC88\uD638\uBCC0\uACBD"}),O("div",{className:`input_area${e.password?" active":""}`,children:[e.password?w("input",{type:"password"}):w("p",{children:"\uBE44\uBC00\uBC88\uD638\uBCC0\uACBD"}),e.password?O("div",{className:"btn_area",children:[w("button",{className:"back",onClick:()=>r("password"),children:"\uB3CC\uC544\uAC00\uAE30"}),w("button",{className:"submit",children:"\uC800\uC7A5\uD558\uAE30"})]}):w("button",{className:"change_btn",onClick:()=>r("password"),children:"\uBCC0\uACBD"})]})]})]})]})})})},bJ=[{path:"/",element:w(zX,{})},{path:"/account",element:w(WX,{})},{path:"/account/:id",element:w(IJ,{})},{path:"/account/signup",element:w(XX,{})},{path:"/account/login",element:w(JX,{})},{path:"/board",element:w(cJ,{})},{path:"/board/write",element:w(ZX,{})},{path:"/board/:id",element:w(eJ,{})},{path:"/photo",element:w(lJ,{})},{path:"/photo/write",element:w(uJ,{})},{path:"/photo/:id",element:w(hJ,{})},{path:"/today",element:w(wJ,{})},{path:"/today/write",element:w(mJ,{})},{path:"/today/:id",element:w(DJ,{})},{path:"/qna",element:w(CJ,{})},{path:"/qna/write",element:w(TJ,{})},{path:"/qna/:id",element:w(xJ,{})},{path:"/today/details/:id",element:w(pJ,{})},{path:"/board/details/:id",element:w(iJ,{})},{path:"/photo/details/:id",element:w(fJ,{})},{path:"/qna/details/:id",element:w(kJ,{})}];function AJ(){const[e,t]=L.exports.useState(!1),n=()=>{t(i=>!i)},r=()=>{window.innerWidth>768&&t(!1)};return L.exports.useEffect(()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[]),w(Z5,{className:e?" active":"",style:{height:e?"100vh":"auto",overflow:e?"hidden":"auto"},children:O(X3,{basename:"modart",children:[w(J5,{}),w($W,{toggleMenu:n,toggle:e}),w(H3,{children:bJ.map((i,s)=>w(QD,{path:i.path,element:i.element},s))})]})})}const NJ=oa({name:"users",initialState:{currentUser:null,postCount:0},reducers:{setCurrentUser:(e,t)=>{e.currentUser=t.payload,e.postCount=t.payload?t.payload.postCount:0},incrementPostCount:e=>{e.postCount+=1}}});var OJ=NJ.reducer;const rP=g8({reducer:{auth:GX,login:TW,users:OJ,board:KQ,photo:MX,today:BX,qna:AX}});rP.dispatch(CW());dv.createRoot(document.getElementById("root")).render(w(MF,{store:rP,children:w(AJ,{})}))});export default RJ();
