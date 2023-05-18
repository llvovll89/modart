var BL=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var kJ=BL((AJ,gf)=>{const zL=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};zL();var Cx=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function kx(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var $={exports:{}},Me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=Symbol.for("react.element"),jL=Symbol.for("react.portal"),YL=Symbol.for("react.fragment"),WL=Symbol.for("react.strict_mode"),HL=Symbol.for("react.profiler"),GL=Symbol.for("react.provider"),qL=Symbol.for("react.context"),KL=Symbol.for("react.forward_ref"),QL=Symbol.for("react.suspense"),XL=Symbol.for("react.memo"),JL=Symbol.for("react.lazy"),OE=Symbol.iterator;function ZL(e){return e===null||typeof e!="object"?null:(e=OE&&e[OE]||e["@@iterator"],typeof e=="function"?e:null)}var Tx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xx=Object.assign,Dx={};function Ol(e,t,n){this.props=e,this.context=t,this.refs=Dx,this.updater=n||Tx}Ol.prototype.isReactComponent={};Ol.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ol.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ix(){}Ix.prototype=Ol.prototype;function _1(e,t,n){this.props=e,this.context=t,this.refs=Dx,this.updater=n||Tx}var S1=_1.prototype=new Ix;S1.constructor=_1;xx(S1,Ol.prototype);S1.isPureReactComponent=!0;var RE=Array.isArray,Ax=Object.prototype.hasOwnProperty,E1={current:null},Nx={key:!0,ref:!0,__self:!0,__source:!0};function Ox(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Ax.call(t,r)&&!Nx.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:qc,type:e,key:s,ref:o,props:i,_owner:E1.current}}function e$(e,t){return{$$typeof:qc,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function C1(e){return typeof e=="object"&&e!==null&&e.$$typeof===qc}function t$(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bE=/\/+/g;function Qg(e,t){return typeof e=="object"&&e!==null&&e.key!=null?t$(""+e.key):t.toString(36)}function Bd(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qc:case jL:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Qg(o,0):r,RE(i)?(n="",e!=null&&(n=e.replace(bE,"$&/")+"/"),Bd(i,t,n,"",function(c){return c})):i!=null&&(C1(i)&&(i=e$(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bE,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",RE(e))for(var a=0;a<e.length;a++){s=e[a];var u=r+Qg(s,a);o+=Bd(s,t,n,u,i)}else if(u=ZL(e),typeof u=="function")for(e=u.call(e),a=0;!(s=e.next()).done;)s=s.value,u=r+Qg(s,a++),o+=Bd(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function od(e,t,n){if(e==null)return e;var r=[],i=0;return Bd(e,r,"","",function(s){return t.call(n,s,i++)}),r}function n$(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var bn={current:null},zd={transition:null},r$={ReactCurrentDispatcher:bn,ReactCurrentBatchConfig:zd,ReactCurrentOwner:E1};Me.Children={map:od,forEach:function(e,t,n){od(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return od(e,function(){t++}),t},toArray:function(e){return od(e,function(t){return t})||[]},only:function(e){if(!C1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Me.Component=Ol;Me.Fragment=YL;Me.Profiler=HL;Me.PureComponent=_1;Me.StrictMode=WL;Me.Suspense=QL;Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r$;Me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xx({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=E1.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Ax.call(t,u)&&!Nx.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:qc,type:e.type,key:i,ref:s,props:r,_owner:o}};Me.createContext=function(e){return e={$$typeof:qL,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:GL,_context:e},e.Consumer=e};Me.createElement=Ox;Me.createFactory=function(e){var t=Ox.bind(null,e);return t.type=e,t};Me.createRef=function(){return{current:null}};Me.forwardRef=function(e){return{$$typeof:KL,render:e}};Me.isValidElement=C1;Me.lazy=function(e){return{$$typeof:JL,_payload:{_status:-1,_result:e},_init:n$}};Me.memo=function(e,t){return{$$typeof:XL,type:e,compare:t===void 0?null:t}};Me.startTransition=function(e){var t=zd.transition;zd.transition={};try{e()}finally{zd.transition=t}};Me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Me.useCallback=function(e,t){return bn.current.useCallback(e,t)};Me.useContext=function(e){return bn.current.useContext(e)};Me.useDebugValue=function(){};Me.useDeferredValue=function(e){return bn.current.useDeferredValue(e)};Me.useEffect=function(e,t){return bn.current.useEffect(e,t)};Me.useId=function(){return bn.current.useId()};Me.useImperativeHandle=function(e,t,n){return bn.current.useImperativeHandle(e,t,n)};Me.useInsertionEffect=function(e,t){return bn.current.useInsertionEffect(e,t)};Me.useLayoutEffect=function(e,t){return bn.current.useLayoutEffect(e,t)};Me.useMemo=function(e,t){return bn.current.useMemo(e,t)};Me.useReducer=function(e,t,n){return bn.current.useReducer(e,t,n)};Me.useRef=function(e){return bn.current.useRef(e)};Me.useState=function(e){return bn.current.useState(e)};Me.useSyncExternalStore=function(e,t,n){return bn.current.useSyncExternalStore(e,t,n)};Me.useTransition=function(){return bn.current.useTransition()};Me.version="18.2.0";$.exports=Me;var qt=$.exports,dv={},k1={exports:{}},nr={},Rx={exports:{}},bx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,z){var b=M.length;M.push(z);e:for(;0<b;){var ee=b-1>>>1,F=M[ee];if(0<i(F,z))M[ee]=z,M[b]=F,b=ee;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var z=M[0],b=M.pop();if(b!==z){M[0]=b;e:for(var ee=0,F=M.length,V=F>>>1;ee<V;){var Y=2*(ee+1)-1,B=M[Y],D=Y+1,le=M[D];if(0>i(B,b))D<F&&0>i(le,B)?(M[ee]=le,M[D]=b,ee=D):(M[ee]=B,M[Y]=b,ee=Y);else if(D<F&&0>i(le,b))M[ee]=le,M[D]=b,ee=D;else break e}}return z}function i(M,z){var b=M.sortIndex-z.sortIndex;return b!==0?b:M.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,p=null,m=3,v=!1,w=!1,_=!1,k=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(M){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=M)r(c),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(c)}}function x(M){if(_=!1,C(M),!w)if(n(u)!==null)w=!0,xe(A);else{var z=n(c);z!==null&&ge(x,z.startTime-M)}}function A(M,z){w=!1,_&&(_=!1,S(O),O=-1),v=!0;var b=m;try{for(C(z),p=n(u);p!==null&&(!(p.expirationTime>z)||M&&!j());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,m=p.priorityLevel;var F=ee(p.expirationTime<=z);z=e.unstable_now(),typeof F=="function"?p.callback=F:p===n(u)&&r(u),C(z)}else r(u);p=n(u)}if(p!==null)var V=!0;else{var Y=n(c);Y!==null&&ge(x,Y.startTime-z),V=!1}return V}finally{p=null,m=b,v=!1}}var R=!1,N=null,O=-1,Z=5,L=-1;function j(){return!(e.unstable_now()-L<Z)}function J(){if(N!==null){var M=e.unstable_now();L=M;var z=!0;try{z=N(!0,M)}finally{z?X():(R=!1,N=null)}}else R=!1}var X;if(typeof y=="function")X=function(){y(J)};else if(typeof MessageChannel!="undefined"){var ue=new MessageChannel,oe=ue.port2;ue.port1.onmessage=J,X=function(){oe.postMessage(null)}}else X=function(){k(J,0)};function xe(M){N=M,R||(R=!0,X())}function ge(M,z){O=k(function(){M(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,xe(A))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(M){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var b=m;m=z;try{return M()}finally{m=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,z){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var b=m;m=M;try{return z()}finally{m=b}},e.unstable_scheduleCallback=function(M,z,b){var ee=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?ee+b:ee):b=ee,M){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=b+F,M={id:d++,callback:z,priorityLevel:M,startTime:b,expirationTime:F,sortIndex:-1},b>ee?(M.sortIndex=b,t(c,M),n(u)===null&&M===n(c)&&(_?(S(O),O=-1):_=!0,ge(x,b-ee))):(M.sortIndex=F,t(u,M),w||v||(w=!0,xe(A))),M},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(M){var z=m;return function(){var b=m;m=z;try{return M.apply(this,arguments)}finally{m=b}}}})(bx);Rx.exports=bx;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Px=$.exports,Zn=Rx.exports;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mx=new Set,Zu={};function ia(e,t){cl(e,t),cl(e+"Capture",t)}function cl(e,t){for(Zu[e]=t,e=0;e<t.length;e++)Mx.add(t[e])}var Wi=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),fv=Object.prototype.hasOwnProperty,i$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,PE={},ME={};function s$(e){return fv.call(ME,e)?!0:fv.call(PE,e)?!1:i$.test(e)?ME[e]=!0:(PE[e]=!0,!1)}function o$(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function a$(e,t,n,r){if(t===null||typeof t=="undefined"||o$(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pn(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var on={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){on[e]=new Pn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];on[t]=new Pn(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){on[e]=new Pn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){on[e]=new Pn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){on[e]=new Pn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){on[e]=new Pn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){on[e]=new Pn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){on[e]=new Pn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){on[e]=new Pn(e,5,!1,e.toLowerCase(),null,!1,!1)});var T1=/[\-:]([a-z])/g;function x1(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(T1,x1);on[t]=new Pn(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(T1,x1);on[t]=new Pn(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(T1,x1);on[t]=new Pn(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){on[e]=new Pn(e,1,!1,e.toLowerCase(),null,!1,!1)});on.xlinkHref=new Pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){on[e]=new Pn(e,1,!1,e.toLowerCase(),null,!0,!0)});function D1(e,t,n,r){var i=on.hasOwnProperty(t)?on[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(a$(t,n,i,r)&&(n=null),r||i===null?s$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var is=Px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ad=Symbol.for("react.element"),Ia=Symbol.for("react.portal"),Aa=Symbol.for("react.fragment"),I1=Symbol.for("react.strict_mode"),pv=Symbol.for("react.profiler"),Lx=Symbol.for("react.provider"),$x=Symbol.for("react.context"),A1=Symbol.for("react.forward_ref"),mv=Symbol.for("react.suspense"),gv=Symbol.for("react.suspense_list"),N1=Symbol.for("react.memo"),ps=Symbol.for("react.lazy"),Fx=Symbol.for("react.offscreen"),LE=Symbol.iterator;function ou(e){return e===null||typeof e!="object"?null:(e=LE&&e[LE]||e["@@iterator"],typeof e=="function"?e:null)}var _t=Object.assign,Xg;function _u(e){if(Xg===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xg=t&&t[1]||""}return`
`+Xg+e}var Jg=!1;function Zg(e,t){if(!e||Jg)return"";Jg=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Jg=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_u(e):""}function l$(e){switch(e.tag){case 5:return _u(e.type);case 16:return _u("Lazy");case 13:return _u("Suspense");case 19:return _u("SuspenseList");case 0:case 2:case 15:return e=Zg(e.type,!1),e;case 11:return e=Zg(e.type.render,!1),e;case 1:return e=Zg(e.type,!0),e;default:return""}}function yv(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Aa:return"Fragment";case Ia:return"Portal";case pv:return"Profiler";case I1:return"StrictMode";case mv:return"Suspense";case gv:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $x:return(e.displayName||"Context")+".Consumer";case Lx:return(e._context.displayName||"Context")+".Provider";case A1:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N1:return t=e.displayName||null,t!==null?t:yv(e.type)||"Memo";case ps:t=e._payload,e=e._init;try{return yv(e(t))}catch{}}return null}function u$(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yv(t);case 8:return t===I1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gs(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ux(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function c$(e){var t=Ux(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ld(e){e._valueTracker||(e._valueTracker=c$(e))}function Vx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ux(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yf(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function vv(e,t){var n=t.checked;return _t({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function $E(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gs(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bx(e,t){t=t.checked,t!=null&&D1(e,"checked",t,!1)}function wv(e,t){Bx(e,t);var n=Gs(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_v(e,t.type,n):t.hasOwnProperty("defaultValue")&&_v(e,t.type,Gs(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function FE(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _v(e,t,n){(t!=="number"||yf(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Su=Array.isArray;function Ya(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gs(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Sv(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return _t({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function UE(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(G(92));if(Su(n)){if(1<n.length)throw Error(G(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gs(n)}}function zx(e,t){var n=Gs(t.value),r=Gs(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function VE(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jx(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ev(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jx(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ud,Yx=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ud=ud||document.createElement("div"),ud.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ud.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ec(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ru={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h$=["Webkit","ms","Moz","O"];Object.keys(Ru).forEach(function(e){h$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ru[t]=Ru[e]})});function Wx(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ru.hasOwnProperty(e)&&Ru[e]?(""+t).trim():t+"px"}function Hx(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wx(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var d$=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cv(e,t){if(t){if(d$[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function kv(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tv=null;function O1(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xv=null,Wa=null,Ha=null;function BE(e){if(e=Xc(e)){if(typeof xv!="function")throw Error(G(280));var t=e.stateNode;t&&(t=Up(t),xv(e.stateNode,e.type,t))}}function Gx(e){Wa?Ha?Ha.push(e):Ha=[e]:Wa=e}function qx(){if(Wa){var e=Wa,t=Ha;if(Ha=Wa=null,BE(e),t)for(e=0;e<t.length;e++)BE(t[e])}}function Kx(e,t){return e(t)}function Qx(){}var ey=!1;function Xx(e,t,n){if(ey)return e(t,n);ey=!0;try{return Kx(e,t,n)}finally{ey=!1,(Wa!==null||Ha!==null)&&(Qx(),qx())}}function tc(e,t){var n=e.stateNode;if(n===null)return null;var r=Up(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(G(231,t,typeof n));return n}var Dv=!1;if(Wi)try{var au={};Object.defineProperty(au,"passive",{get:function(){Dv=!0}}),window.addEventListener("test",au,au),window.removeEventListener("test",au,au)}catch{Dv=!1}function f$(e,t,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var bu=!1,vf=null,wf=!1,Iv=null,p$={onError:function(e){bu=!0,vf=e}};function m$(e,t,n,r,i,s,o,a,u){bu=!1,vf=null,f$.apply(p$,arguments)}function g$(e,t,n,r,i,s,o,a,u){if(m$.apply(this,arguments),bu){if(bu){var c=vf;bu=!1,vf=null}else throw Error(G(198));wf||(wf=!0,Iv=c)}}function sa(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zE(e){if(sa(e)!==e)throw Error(G(188))}function y$(e){var t=e.alternate;if(!t){if(t=sa(e),t===null)throw Error(G(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zE(i),e;if(s===r)return zE(i),t;s=s.sibling}throw Error(G(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?e:t}function Zx(e){return e=y$(e),e!==null?e2(e):null}function e2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=e2(e);if(t!==null)return t;e=e.sibling}return null}var t2=Zn.unstable_scheduleCallback,jE=Zn.unstable_cancelCallback,v$=Zn.unstable_shouldYield,w$=Zn.unstable_requestPaint,Ot=Zn.unstable_now,_$=Zn.unstable_getCurrentPriorityLevel,R1=Zn.unstable_ImmediatePriority,n2=Zn.unstable_UserBlockingPriority,_f=Zn.unstable_NormalPriority,S$=Zn.unstable_LowPriority,r2=Zn.unstable_IdlePriority,Mp=null,Jr=null;function E$(e){if(Jr&&typeof Jr.onCommitFiberRoot=="function")try{Jr.onCommitFiberRoot(Mp,e,void 0,(e.current.flags&128)===128)}catch{}}var Pr=Math.clz32?Math.clz32:T$,C$=Math.log,k$=Math.LN2;function T$(e){return e>>>=0,e===0?32:31-(C$(e)/k$|0)|0}var cd=64,hd=4194304;function Eu(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Sf(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Eu(a):(s&=o,s!==0&&(r=Eu(s)))}else o=n&~i,o!==0?r=Eu(o):s!==0&&(r=Eu(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pr(t),i=1<<n,r|=e[n],t&=~i;return r}function x$(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D$(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Pr(s),a=1<<o,u=i[o];u===-1?((a&n)===0||(a&r)!==0)&&(i[o]=x$(a,t)):u<=t&&(e.expiredLanes|=a),s&=~a}}function Av(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function i2(){var e=cd;return cd<<=1,(cd&4194240)===0&&(cd=64),e}function ty(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kc(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pr(t),e[t]=n}function I$(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Pr(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function b1(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pr(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ge=0;function s2(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var o2,P1,a2,l2,u2,Nv=!1,dd=[],Ns=null,Os=null,Rs=null,nc=new Map,rc=new Map,gs=[],A$="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function YE(e,t){switch(e){case"focusin":case"focusout":Ns=null;break;case"dragenter":case"dragleave":Os=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":nc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rc.delete(t.pointerId)}}function lu(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Xc(t),t!==null&&P1(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function N$(e,t,n,r,i){switch(t){case"focusin":return Ns=lu(Ns,e,t,n,r,i),!0;case"dragenter":return Os=lu(Os,e,t,n,r,i),!0;case"mouseover":return Rs=lu(Rs,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return nc.set(s,lu(nc.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,rc.set(s,lu(rc.get(s)||null,e,t,n,r,i)),!0}return!1}function c2(e){var t=To(e.target);if(t!==null){var n=sa(t);if(n!==null){if(t=n.tag,t===13){if(t=Jx(n),t!==null){e.blockedOn=t,u2(e.priority,function(){a2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jd(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ov(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Tv=r,n.target.dispatchEvent(r),Tv=null}else return t=Xc(n),t!==null&&P1(t),e.blockedOn=n,!1;t.shift()}return!0}function WE(e,t,n){jd(e)&&n.delete(t)}function O$(){Nv=!1,Ns!==null&&jd(Ns)&&(Ns=null),Os!==null&&jd(Os)&&(Os=null),Rs!==null&&jd(Rs)&&(Rs=null),nc.forEach(WE),rc.forEach(WE)}function uu(e,t){e.blockedOn===t&&(e.blockedOn=null,Nv||(Nv=!0,Zn.unstable_scheduleCallback(Zn.unstable_NormalPriority,O$)))}function ic(e){function t(i){return uu(i,e)}if(0<dd.length){uu(dd[0],e);for(var n=1;n<dd.length;n++){var r=dd[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ns!==null&&uu(Ns,e),Os!==null&&uu(Os,e),Rs!==null&&uu(Rs,e),nc.forEach(t),rc.forEach(t),n=0;n<gs.length;n++)r=gs[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gs.length&&(n=gs[0],n.blockedOn===null);)c2(n),n.blockedOn===null&&gs.shift()}var Ga=is.ReactCurrentBatchConfig,Ef=!0;function R$(e,t,n,r){var i=Ge,s=Ga.transition;Ga.transition=null;try{Ge=1,M1(e,t,n,r)}finally{Ge=i,Ga.transition=s}}function b$(e,t,n,r){var i=Ge,s=Ga.transition;Ga.transition=null;try{Ge=4,M1(e,t,n,r)}finally{Ge=i,Ga.transition=s}}function M1(e,t,n,r){if(Ef){var i=Ov(e,t,n,r);if(i===null)hy(e,t,r,Cf,n),YE(e,r);else if(N$(i,e,t,n,r))r.stopPropagation();else if(YE(e,r),t&4&&-1<A$.indexOf(e)){for(;i!==null;){var s=Xc(i);if(s!==null&&o2(s),s=Ov(e,t,n,r),s===null&&hy(e,t,r,Cf,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else hy(e,t,r,null,n)}}var Cf=null;function Ov(e,t,n,r){if(Cf=null,e=O1(r),e=To(e),e!==null)if(t=sa(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Jx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Cf=e,null}function h2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_$()){case R1:return 1;case n2:return 4;case _f:case S$:return 16;case r2:return 536870912;default:return 16}default:return 16}}var Cs=null,L1=null,Yd=null;function d2(){if(Yd)return Yd;var e,t=L1,n=t.length,r,i="value"in Cs?Cs.value:Cs.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Yd=i.slice(e,1<r?1-r:void 0)}function Wd(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fd(){return!0}function HE(){return!1}function rr(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fd:HE,this.isPropagationStopped=HE,this}return _t(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fd)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fd)},persist:function(){},isPersistent:fd}),t}var Rl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$1=rr(Rl),Qc=_t({},Rl,{view:0,detail:0}),P$=rr(Qc),ny,ry,cu,Lp=_t({},Qc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:F1,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cu&&(cu&&e.type==="mousemove"?(ny=e.screenX-cu.screenX,ry=e.screenY-cu.screenY):ry=ny=0,cu=e),ny)},movementY:function(e){return"movementY"in e?e.movementY:ry}}),GE=rr(Lp),M$=_t({},Lp,{dataTransfer:0}),L$=rr(M$),$$=_t({},Qc,{relatedTarget:0}),iy=rr($$),F$=_t({},Rl,{animationName:0,elapsedTime:0,pseudoElement:0}),U$=rr(F$),V$=_t({},Rl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),B$=rr(V$),z$=_t({},Rl,{data:0}),qE=rr(z$),j$={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y$={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W$={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H$(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=W$[e])?!!t[e]:!1}function F1(){return H$}var G$=_t({},Qc,{key:function(e){if(e.key){var t=j$[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wd(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Y$[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:F1,charCode:function(e){return e.type==="keypress"?Wd(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wd(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),q$=rr(G$),K$=_t({},Lp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),KE=rr(K$),Q$=_t({},Qc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:F1}),X$=rr(Q$),J$=_t({},Rl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z$=rr(J$),e6=_t({},Lp,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t6=rr(e6),n6=[9,13,27,32],U1=Wi&&"CompositionEvent"in window,Pu=null;Wi&&"documentMode"in document&&(Pu=document.documentMode);var r6=Wi&&"TextEvent"in window&&!Pu,f2=Wi&&(!U1||Pu&&8<Pu&&11>=Pu),QE=String.fromCharCode(32),XE=!1;function p2(e,t){switch(e){case"keyup":return n6.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function m2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Na=!1;function i6(e,t){switch(e){case"compositionend":return m2(t);case"keypress":return t.which!==32?null:(XE=!0,QE);case"textInput":return e=t.data,e===QE&&XE?null:e;default:return null}}function s6(e,t){if(Na)return e==="compositionend"||!U1&&p2(e,t)?(e=d2(),Yd=L1=Cs=null,Na=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return f2&&t.locale!=="ko"?null:t.data;default:return null}}var o6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function JE(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!o6[e.type]:t==="textarea"}function g2(e,t,n,r){Gx(r),t=kf(t,"onChange"),0<t.length&&(n=new $1("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mu=null,sc=null;function a6(e){D2(e,0)}function $p(e){var t=ba(e);if(Vx(t))return e}function l6(e,t){if(e==="change")return t}var y2=!1;if(Wi){var sy;if(Wi){var oy="oninput"in document;if(!oy){var ZE=document.createElement("div");ZE.setAttribute("oninput","return;"),oy=typeof ZE.oninput=="function"}sy=oy}else sy=!1;y2=sy&&(!document.documentMode||9<document.documentMode)}function eC(){Mu&&(Mu.detachEvent("onpropertychange",v2),sc=Mu=null)}function v2(e){if(e.propertyName==="value"&&$p(sc)){var t=[];g2(t,sc,e,O1(e)),Xx(a6,t)}}function u6(e,t,n){e==="focusin"?(eC(),Mu=t,sc=n,Mu.attachEvent("onpropertychange",v2)):e==="focusout"&&eC()}function c6(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $p(sc)}function h6(e,t){if(e==="click")return $p(t)}function d6(e,t){if(e==="input"||e==="change")return $p(t)}function f6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lr=typeof Object.is=="function"?Object.is:f6;function oc(e,t){if(Lr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fv.call(t,i)||!Lr(e[i],t[i]))return!1}return!0}function tC(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nC(e,t){var n=tC(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tC(n)}}function w2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?w2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _2(){for(var e=window,t=yf();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yf(e.document)}return t}function V1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function p6(e){var t=_2(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&w2(n.ownerDocument.documentElement,n)){if(r!==null&&V1(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=nC(n,s);var o=nC(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var m6=Wi&&"documentMode"in document&&11>=document.documentMode,Oa=null,Rv=null,Lu=null,bv=!1;function rC(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bv||Oa==null||Oa!==yf(r)||(r=Oa,"selectionStart"in r&&V1(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lu&&oc(Lu,r)||(Lu=r,r=kf(Rv,"onSelect"),0<r.length&&(t=new $1("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Oa)))}function pd(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ra={animationend:pd("Animation","AnimationEnd"),animationiteration:pd("Animation","AnimationIteration"),animationstart:pd("Animation","AnimationStart"),transitionend:pd("Transition","TransitionEnd")},ay={},S2={};Wi&&(S2=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function Fp(e){if(ay[e])return ay[e];if(!Ra[e])return e;var t=Ra[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in S2)return ay[e]=t[n];return e}var E2=Fp("animationend"),C2=Fp("animationiteration"),k2=Fp("animationstart"),T2=Fp("transitionend"),x2=new Map,iC="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function io(e,t){x2.set(e,t),ia(t,[e])}for(var ly=0;ly<iC.length;ly++){var uy=iC[ly],g6=uy.toLowerCase(),y6=uy[0].toUpperCase()+uy.slice(1);io(g6,"on"+y6)}io(E2,"onAnimationEnd");io(C2,"onAnimationIteration");io(k2,"onAnimationStart");io("dblclick","onDoubleClick");io("focusin","onFocus");io("focusout","onBlur");io(T2,"onTransitionEnd");cl("onMouseEnter",["mouseout","mouseover"]);cl("onMouseLeave",["mouseout","mouseover"]);cl("onPointerEnter",["pointerout","pointerover"]);cl("onPointerLeave",["pointerout","pointerover"]);ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ia("onBeforeInput",["compositionend","keypress","textInput","paste"]);ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v6=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cu));function sC(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,g$(r,t,void 0,e),e.currentTarget=null}function D2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;sC(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;sC(i,a,c),s=u}}}if(wf)throw e=Iv,wf=!1,Iv=null,e}function it(e,t){var n=t[Fv];n===void 0&&(n=t[Fv]=new Set);var r=e+"__bubble";n.has(r)||(I2(t,e,2,!1),n.add(r))}function cy(e,t,n){var r=0;t&&(r|=4),I2(n,e,r,t)}var md="_reactListening"+Math.random().toString(36).slice(2);function ac(e){if(!e[md]){e[md]=!0,Mx.forEach(function(n){n!=="selectionchange"&&(v6.has(n)||cy(n,!1,e),cy(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[md]||(t[md]=!0,cy("selectionchange",!1,t))}}function I2(e,t,n,r){switch(h2(t)){case 1:var i=R$;break;case 4:i=b$;break;default:i=M1}n=i.bind(null,t,n,e),i=void 0,!Dv||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function hy(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=To(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Xx(function(){var c=s,d=O1(n),p=[];e:{var m=x2.get(e);if(m!==void 0){var v=$1,w=e;switch(e){case"keypress":if(Wd(n)===0)break e;case"keydown":case"keyup":v=q$;break;case"focusin":w="focus",v=iy;break;case"focusout":w="blur",v=iy;break;case"beforeblur":case"afterblur":v=iy;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=GE;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=L$;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=X$;break;case E2:case C2:case k2:v=U$;break;case T2:v=Z$;break;case"scroll":v=P$;break;case"wheel":v=t6;break;case"copy":case"cut":case"paste":v=B$;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=KE}var _=(t&4)!==0,k=!_&&e==="scroll",S=_?m!==null?m+"Capture":null:m;_=[];for(var y=c,C;y!==null;){C=y;var x=C.stateNode;if(C.tag===5&&x!==null&&(C=x,S!==null&&(x=tc(y,S),x!=null&&_.push(lc(y,x,C)))),k)break;y=y.return}0<_.length&&(m=new v(m,w,null,n,d),p.push({event:m,listeners:_}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Tv&&(w=n.relatedTarget||n.fromElement)&&(To(w)||w[Hi]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?To(w):null,w!==null&&(k=sa(w),w!==k||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(_=GE,x="onMouseLeave",S="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(_=KE,x="onPointerLeave",S="onPointerEnter",y="pointer"),k=v==null?m:ba(v),C=w==null?m:ba(w),m=new _(x,y+"leave",v,n,d),m.target=k,m.relatedTarget=C,x=null,To(d)===c&&(_=new _(S,y+"enter",w,n,d),_.target=C,_.relatedTarget=k,x=_),k=x,v&&w)t:{for(_=v,S=w,y=0,C=_;C;C=_a(C))y++;for(C=0,x=S;x;x=_a(x))C++;for(;0<y-C;)_=_a(_),y--;for(;0<C-y;)S=_a(S),C--;for(;y--;){if(_===S||S!==null&&_===S.alternate)break t;_=_a(_),S=_a(S)}_=null}else _=null;v!==null&&oC(p,m,v,_,!1),w!==null&&k!==null&&oC(p,k,w,_,!0)}}e:{if(m=c?ba(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var A=l6;else if(JE(m))if(y2)A=d6;else{A=c6;var R=u6}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(A=h6);if(A&&(A=A(e,c))){g2(p,A,n,d);break e}R&&R(e,m,c),e==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&_v(m,"number",m.value)}switch(R=c?ba(c):window,e){case"focusin":(JE(R)||R.contentEditable==="true")&&(Oa=R,Rv=c,Lu=null);break;case"focusout":Lu=Rv=Oa=null;break;case"mousedown":bv=!0;break;case"contextmenu":case"mouseup":case"dragend":bv=!1,rC(p,n,d);break;case"selectionchange":if(m6)break;case"keydown":case"keyup":rC(p,n,d)}var N;if(U1)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Na?p2(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(f2&&n.locale!=="ko"&&(Na||O!=="onCompositionStart"?O==="onCompositionEnd"&&Na&&(N=d2()):(Cs=d,L1="value"in Cs?Cs.value:Cs.textContent,Na=!0)),R=kf(c,O),0<R.length&&(O=new qE(O,e,null,n,d),p.push({event:O,listeners:R}),N?O.data=N:(N=m2(n),N!==null&&(O.data=N)))),(N=r6?i6(e,n):s6(e,n))&&(c=kf(c,"onBeforeInput"),0<c.length&&(d=new qE("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=N))}D2(p,t)})}function lc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kf(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=tc(e,n),s!=null&&r.unshift(lc(e,s,i)),s=tc(e,t),s!=null&&r.push(lc(e,s,i))),e=e.return}return r}function _a(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oC(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=tc(n,s),u!=null&&o.unshift(lc(n,u,a))):i||(u=tc(n,s),u!=null&&o.push(lc(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var w6=/\r\n?/g,_6=/\u0000|\uFFFD/g;function aC(e){return(typeof e=="string"?e:""+e).replace(w6,`
`).replace(_6,"")}function gd(e,t,n){if(t=aC(t),aC(e)!==t&&n)throw Error(G(425))}function Tf(){}var Pv=null,Mv=null;function Lv(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $v=typeof setTimeout=="function"?setTimeout:void 0,S6=typeof clearTimeout=="function"?clearTimeout:void 0,lC=typeof Promise=="function"?Promise:void 0,E6=typeof queueMicrotask=="function"?queueMicrotask:typeof lC!="undefined"?function(e){return lC.resolve(null).then(e).catch(C6)}:$v;function C6(e){setTimeout(function(){throw e})}function dy(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ic(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ic(t)}function bs(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uC(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bl=Math.random().toString(36).slice(2),Hr="__reactFiber$"+bl,uc="__reactProps$"+bl,Hi="__reactContainer$"+bl,Fv="__reactEvents$"+bl,k6="__reactListeners$"+bl,T6="__reactHandles$"+bl;function To(e){var t=e[Hr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hi]||n[Hr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uC(e);e!==null;){if(n=e[Hr])return n;e=uC(e)}return t}e=n,n=e.parentNode}return null}function Xc(e){return e=e[Hr]||e[Hi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ba(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function Up(e){return e[uc]||null}var Uv=[],Pa=-1;function so(e){return{current:e}}function st(e){0>Pa||(e.current=Uv[Pa],Uv[Pa]=null,Pa--)}function et(e,t){Pa++,Uv[Pa]=e.current,e.current=t}var qs={},Sn=so(qs),Vn=so(!1),Vo=qs;function hl(e,t){var n=e.type.contextTypes;if(!n)return qs;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Bn(e){return e=e.childContextTypes,e!=null}function xf(){st(Vn),st(Sn)}function cC(e,t,n){if(Sn.current!==qs)throw Error(G(168));et(Sn,t),et(Vn,n)}function A2(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(G(108,u$(e)||"Unknown",i));return _t({},n,r)}function Df(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qs,Vo=Sn.current,et(Sn,e),et(Vn,Vn.current),!0}function hC(e,t,n){var r=e.stateNode;if(!r)throw Error(G(169));n?(e=A2(e,t,Vo),r.__reactInternalMemoizedMergedChildContext=e,st(Vn),st(Sn),et(Sn,e)):st(Vn),et(Vn,n)}var Ii=null,Vp=!1,fy=!1;function N2(e){Ii===null?Ii=[e]:Ii.push(e)}function x6(e){Vp=!0,N2(e)}function oo(){if(!fy&&Ii!==null){fy=!0;var e=0,t=Ge;try{var n=Ii;for(Ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ii=null,Vp=!1}catch(i){throw Ii!==null&&(Ii=Ii.slice(e+1)),t2(R1,oo),i}finally{Ge=t,fy=!1}}return null}var Ma=[],La=0,If=null,Af=0,or=[],ar=0,Bo=null,Oi=1,Ri="";function So(e,t){Ma[La++]=Af,Ma[La++]=If,If=e,Af=t}function O2(e,t,n){or[ar++]=Oi,or[ar++]=Ri,or[ar++]=Bo,Bo=e;var r=Oi;e=Ri;var i=32-Pr(r)-1;r&=~(1<<i),n+=1;var s=32-Pr(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Oi=1<<32-Pr(t)+i|n<<i|r,Ri=s+e}else Oi=1<<s|n<<i|r,Ri=e}function B1(e){e.return!==null&&(So(e,1),O2(e,1,0))}function z1(e){for(;e===If;)If=Ma[--La],Ma[La]=null,Af=Ma[--La],Ma[La]=null;for(;e===Bo;)Bo=or[--ar],or[ar]=null,Ri=or[--ar],or[ar]=null,Oi=or[--ar],or[ar]=null}var Xn=null,Kn=null,ft=!1,Ir=null;function R2(e,t){var n=dr(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dC(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xn=e,Kn=bs(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xn=e,Kn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bo!==null?{id:Oi,overflow:Ri}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dr(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xn=e,Kn=null,!0):!1;default:return!1}}function Vv(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bv(e){if(ft){var t=Kn;if(t){var n=t;if(!dC(e,t)){if(Vv(e))throw Error(G(418));t=bs(n.nextSibling);var r=Xn;t&&dC(e,t)?R2(r,n):(e.flags=e.flags&-4097|2,ft=!1,Xn=e)}}else{if(Vv(e))throw Error(G(418));e.flags=e.flags&-4097|2,ft=!1,Xn=e}}}function fC(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xn=e}function yd(e){if(e!==Xn)return!1;if(!ft)return fC(e),ft=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lv(e.type,e.memoizedProps)),t&&(t=Kn)){if(Vv(e))throw b2(),Error(G(418));for(;t;)R2(e,t),t=bs(t.nextSibling)}if(fC(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Kn=bs(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Kn=null}}else Kn=Xn?bs(e.stateNode.nextSibling):null;return!0}function b2(){for(var e=Kn;e;)e=bs(e.nextSibling)}function dl(){Kn=Xn=null,ft=!1}function j1(e){Ir===null?Ir=[e]:Ir.push(e)}var D6=is.ReactCurrentBatchConfig;function xr(e,t){if(e&&e.defaultProps){t=_t({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Nf=so(null),Of=null,$a=null,Y1=null;function W1(){Y1=$a=Of=null}function H1(e){var t=Nf.current;st(Nf),e._currentValue=t}function zv(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qa(e,t){Of=e,Y1=$a=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Fn=!0),e.firstContext=null)}function mr(e){var t=e._currentValue;if(Y1!==e)if(e={context:e,memoizedValue:t,next:null},$a===null){if(Of===null)throw Error(G(308));$a=e,Of.dependencies={lanes:0,firstContext:e}}else $a=$a.next=e;return t}var xo=null;function G1(e){xo===null?xo=[e]:xo.push(e)}function P2(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,G1(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gi(e,r)}function Gi(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ms=!1;function q1(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function M2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ps(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Be&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gi(e,n)}return i=r.interleaved,i===null?(t.next=t,G1(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gi(e,n)}function Hd(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,b1(e,n)}}function pC(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Rf(e,t,n,r){var i=e.updateQueue;ms=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,_=a;switch(m=t,v=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){p=w.call(v,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,m=typeof w=="function"?w.call(v,p,m):w,m==null)break e;p=_t({},p,m);break e;case 2:ms=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,u=p):d=d.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);jo|=o,e.lanes=o,e.memoizedState=p}}function mC(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(G(191,i));i.call(r)}}}var L2=new Px.Component().refs;function jv(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:_t({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bp={isMounted:function(e){return(e=e._reactInternals)?sa(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=On(),i=Ls(e),s=Bi(r,i);s.payload=t,n!=null&&(s.callback=n),t=Ps(e,s,i),t!==null&&(Mr(t,e,i,r),Hd(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=On(),i=Ls(e),s=Bi(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ps(e,s,i),t!==null&&(Mr(t,e,i,r),Hd(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=On(),r=Ls(e),i=Bi(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ps(e,i,r),t!==null&&(Mr(t,e,r,n),Hd(t,e,r))}};function gC(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!oc(n,r)||!oc(i,s):!0}function $2(e,t,n){var r=!1,i=qs,s=t.contextType;return typeof s=="object"&&s!==null?s=mr(s):(i=Bn(t)?Vo:Sn.current,r=t.contextTypes,s=(r=r!=null)?hl(e,i):qs),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bp,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function yC(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bp.enqueueReplaceState(t,t.state,null)}function Yv(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=L2,q1(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=mr(s):(s=Bn(t)?Vo:Sn.current,i.context=hl(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(jv(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Bp.enqueueReplaceState(i,i.state,null),Rf(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function hu(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===L2&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,e))}return e}function vd(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vC(e){var t=e._init;return t(e._payload)}function F2(e){function t(S,y){if(e){var C=S.deletions;C===null?(S.deletions=[y],S.flags|=16):C.push(y)}}function n(S,y){if(!e)return null;for(;y!==null;)t(S,y),y=y.sibling;return null}function r(S,y){for(S=new Map;y!==null;)y.key!==null?S.set(y.key,y):S.set(y.index,y),y=y.sibling;return S}function i(S,y){return S=$s(S,y),S.index=0,S.sibling=null,S}function s(S,y,C){return S.index=C,e?(C=S.alternate,C!==null?(C=C.index,C<y?(S.flags|=2,y):C):(S.flags|=2,y)):(S.flags|=1048576,y)}function o(S){return e&&S.alternate===null&&(S.flags|=2),S}function a(S,y,C,x){return y===null||y.tag!==6?(y=_y(C,S.mode,x),y.return=S,y):(y=i(y,C),y.return=S,y)}function u(S,y,C,x){var A=C.type;return A===Aa?d(S,y,C.props.children,x,C.key):y!==null&&(y.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ps&&vC(A)===y.type)?(x=i(y,C.props),x.ref=hu(S,y,C),x.return=S,x):(x=Jd(C.type,C.key,C.props,null,S.mode,x),x.ref=hu(S,y,C),x.return=S,x)}function c(S,y,C,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==C.containerInfo||y.stateNode.implementation!==C.implementation?(y=Sy(C,S.mode,x),y.return=S,y):(y=i(y,C.children||[]),y.return=S,y)}function d(S,y,C,x,A){return y===null||y.tag!==7?(y=Po(C,S.mode,x,A),y.return=S,y):(y=i(y,C),y.return=S,y)}function p(S,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return y=_y(""+y,S.mode,C),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ad:return C=Jd(y.type,y.key,y.props,null,S.mode,C),C.ref=hu(S,null,y),C.return=S,C;case Ia:return y=Sy(y,S.mode,C),y.return=S,y;case ps:var x=y._init;return p(S,x(y._payload),C)}if(Su(y)||ou(y))return y=Po(y,S.mode,C,null),y.return=S,y;vd(S,y)}return null}function m(S,y,C,x){var A=y!==null?y.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return A!==null?null:a(S,y,""+C,x);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ad:return C.key===A?u(S,y,C,x):null;case Ia:return C.key===A?c(S,y,C,x):null;case ps:return A=C._init,m(S,y,A(C._payload),x)}if(Su(C)||ou(C))return A!==null?null:d(S,y,C,x,null);vd(S,C)}return null}function v(S,y,C,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return S=S.get(C)||null,a(y,S,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ad:return S=S.get(x.key===null?C:x.key)||null,u(y,S,x,A);case Ia:return S=S.get(x.key===null?C:x.key)||null,c(y,S,x,A);case ps:var R=x._init;return v(S,y,C,R(x._payload),A)}if(Su(x)||ou(x))return S=S.get(C)||null,d(y,S,x,A,null);vd(y,x)}return null}function w(S,y,C,x){for(var A=null,R=null,N=y,O=y=0,Z=null;N!==null&&O<C.length;O++){N.index>O?(Z=N,N=null):Z=N.sibling;var L=m(S,N,C[O],x);if(L===null){N===null&&(N=Z);break}e&&N&&L.alternate===null&&t(S,N),y=s(L,y,O),R===null?A=L:R.sibling=L,R=L,N=Z}if(O===C.length)return n(S,N),ft&&So(S,O),A;if(N===null){for(;O<C.length;O++)N=p(S,C[O],x),N!==null&&(y=s(N,y,O),R===null?A=N:R.sibling=N,R=N);return ft&&So(S,O),A}for(N=r(S,N);O<C.length;O++)Z=v(N,S,O,C[O],x),Z!==null&&(e&&Z.alternate!==null&&N.delete(Z.key===null?O:Z.key),y=s(Z,y,O),R===null?A=Z:R.sibling=Z,R=Z);return e&&N.forEach(function(j){return t(S,j)}),ft&&So(S,O),A}function _(S,y,C,x){var A=ou(C);if(typeof A!="function")throw Error(G(150));if(C=A.call(C),C==null)throw Error(G(151));for(var R=A=null,N=y,O=y=0,Z=null,L=C.next();N!==null&&!L.done;O++,L=C.next()){N.index>O?(Z=N,N=null):Z=N.sibling;var j=m(S,N,L.value,x);if(j===null){N===null&&(N=Z);break}e&&N&&j.alternate===null&&t(S,N),y=s(j,y,O),R===null?A=j:R.sibling=j,R=j,N=Z}if(L.done)return n(S,N),ft&&So(S,O),A;if(N===null){for(;!L.done;O++,L=C.next())L=p(S,L.value,x),L!==null&&(y=s(L,y,O),R===null?A=L:R.sibling=L,R=L);return ft&&So(S,O),A}for(N=r(S,N);!L.done;O++,L=C.next())L=v(N,S,O,L.value,x),L!==null&&(e&&L.alternate!==null&&N.delete(L.key===null?O:L.key),y=s(L,y,O),R===null?A=L:R.sibling=L,R=L);return e&&N.forEach(function(J){return t(S,J)}),ft&&So(S,O),A}function k(S,y,C,x){if(typeof C=="object"&&C!==null&&C.type===Aa&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case ad:e:{for(var A=C.key,R=y;R!==null;){if(R.key===A){if(A=C.type,A===Aa){if(R.tag===7){n(S,R.sibling),y=i(R,C.props.children),y.return=S,S=y;break e}}else if(R.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ps&&vC(A)===R.type){n(S,R.sibling),y=i(R,C.props),y.ref=hu(S,R,C),y.return=S,S=y;break e}n(S,R);break}else t(S,R);R=R.sibling}C.type===Aa?(y=Po(C.props.children,S.mode,x,C.key),y.return=S,S=y):(x=Jd(C.type,C.key,C.props,null,S.mode,x),x.ref=hu(S,y,C),x.return=S,S=x)}return o(S);case Ia:e:{for(R=C.key;y!==null;){if(y.key===R)if(y.tag===4&&y.stateNode.containerInfo===C.containerInfo&&y.stateNode.implementation===C.implementation){n(S,y.sibling),y=i(y,C.children||[]),y.return=S,S=y;break e}else{n(S,y);break}else t(S,y);y=y.sibling}y=Sy(C,S.mode,x),y.return=S,S=y}return o(S);case ps:return R=C._init,k(S,y,R(C._payload),x)}if(Su(C))return w(S,y,C,x);if(ou(C))return _(S,y,C,x);vd(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,y!==null&&y.tag===6?(n(S,y.sibling),y=i(y,C),y.return=S,S=y):(n(S,y),y=_y(C,S.mode,x),y.return=S,S=y),o(S)):n(S,y)}return k}var fl=F2(!0),U2=F2(!1),Jc={},Zr=so(Jc),cc=so(Jc),hc=so(Jc);function Do(e){if(e===Jc)throw Error(G(174));return e}function K1(e,t){switch(et(hc,t),et(cc,e),et(Zr,Jc),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ev(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ev(t,e)}st(Zr),et(Zr,t)}function pl(){st(Zr),st(cc),st(hc)}function V2(e){Do(hc.current);var t=Do(Zr.current),n=Ev(t,e.type);t!==n&&(et(cc,e),et(Zr,n))}function Q1(e){cc.current===e&&(st(Zr),st(cc))}var vt=so(0);function bf(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var py=[];function X1(){for(var e=0;e<py.length;e++)py[e]._workInProgressVersionPrimary=null;py.length=0}var Gd=is.ReactCurrentDispatcher,my=is.ReactCurrentBatchConfig,zo=0,wt=null,Vt=null,Gt=null,Pf=!1,$u=!1,dc=0,I6=0;function un(){throw Error(G(321))}function J1(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lr(e[n],t[n]))return!1;return!0}function Z1(e,t,n,r,i,s){if(zo=s,wt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gd.current=e===null||e.memoizedState===null?R6:b6,e=n(r,i),$u){s=0;do{if($u=!1,dc=0,25<=s)throw Error(G(301));s+=1,Gt=Vt=null,t.updateQueue=null,Gd.current=P6,e=n(r,i)}while($u)}if(Gd.current=Mf,t=Vt!==null&&Vt.next!==null,zo=0,Gt=Vt=wt=null,Pf=!1,t)throw Error(G(300));return e}function ew(){var e=dc!==0;return dc=0,e}function Wr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?wt.memoizedState=Gt=e:Gt=Gt.next=e,Gt}function gr(){if(Vt===null){var e=wt.alternate;e=e!==null?e.memoizedState:null}else e=Vt.next;var t=Gt===null?wt.memoizedState:Gt.next;if(t!==null)Gt=t,Vt=e;else{if(e===null)throw Error(G(310));Vt=e,e={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Gt===null?wt.memoizedState=Gt=e:Gt=Gt.next=e}return Gt}function fc(e,t){return typeof t=="function"?t(e):t}function gy(e){var t=gr(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=Vt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((zo&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,wt.lanes|=d,jo|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Lr(r,t.memoizedState)||(Fn=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,wt.lanes|=s,jo|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yy(e){var t=gr(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Lr(s,t.memoizedState)||(Fn=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function B2(){}function z2(e,t){var n=wt,r=gr(),i=t(),s=!Lr(r.memoizedState,i);if(s&&(r.memoizedState=i,Fn=!0),r=r.queue,tw(W2.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,pc(9,Y2.bind(null,n,r,i,t),void 0,null),Kt===null)throw Error(G(349));(zo&30)!==0||j2(n,t,i)}return i}function j2(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=wt.updateQueue,t===null?(t={lastEffect:null,stores:null},wt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Y2(e,t,n,r){t.value=n,t.getSnapshot=r,H2(t)&&G2(e)}function W2(e,t,n){return n(function(){H2(t)&&G2(e)})}function H2(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lr(e,n)}catch{return!0}}function G2(e){var t=Gi(e,1);t!==null&&Mr(t,e,1,-1)}function wC(e){var t=Wr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fc,lastRenderedState:e},t.queue=e,e=e.dispatch=O6.bind(null,wt,e),[t.memoizedState,e]}function pc(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=wt.updateQueue,t===null?(t={lastEffect:null,stores:null},wt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function q2(){return gr().memoizedState}function qd(e,t,n,r){var i=Wr();wt.flags|=e,i.memoizedState=pc(1|t,n,void 0,r===void 0?null:r)}function zp(e,t,n,r){var i=gr();r=r===void 0?null:r;var s=void 0;if(Vt!==null){var o=Vt.memoizedState;if(s=o.destroy,r!==null&&J1(r,o.deps)){i.memoizedState=pc(t,n,s,r);return}}wt.flags|=e,i.memoizedState=pc(1|t,n,s,r)}function _C(e,t){return qd(8390656,8,e,t)}function tw(e,t){return zp(2048,8,e,t)}function K2(e,t){return zp(4,2,e,t)}function Q2(e,t){return zp(4,4,e,t)}function X2(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function J2(e,t,n){return n=n!=null?n.concat([e]):null,zp(4,4,X2.bind(null,t,e),n)}function nw(){}function Z2(e,t){var n=gr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&J1(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function eD(e,t){var n=gr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&J1(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tD(e,t,n){return(zo&21)===0?(e.baseState&&(e.baseState=!1,Fn=!0),e.memoizedState=n):(Lr(n,t)||(n=i2(),wt.lanes|=n,jo|=n,e.baseState=!0),t)}function A6(e,t){var n=Ge;Ge=n!==0&&4>n?n:4,e(!0);var r=my.transition;my.transition={};try{e(!1),t()}finally{Ge=n,my.transition=r}}function nD(){return gr().memoizedState}function N6(e,t,n){var r=Ls(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rD(e))iD(t,n);else if(n=P2(e,t,n,r),n!==null){var i=On();Mr(n,e,r,i),sD(n,t,r)}}function O6(e,t,n){var r=Ls(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rD(e))iD(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Lr(a,o)){var u=t.interleaved;u===null?(i.next=i,G1(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=P2(e,t,i,r),n!==null&&(i=On(),Mr(n,e,r,i),sD(n,t,r))}}function rD(e){var t=e.alternate;return e===wt||t!==null&&t===wt}function iD(e,t){$u=Pf=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sD(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,b1(e,n)}}var Mf={readContext:mr,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},R6={readContext:mr,useCallback:function(e,t){return Wr().memoizedState=[e,t===void 0?null:t],e},useContext:mr,useEffect:_C,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qd(4194308,4,X2.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qd(4194308,4,e,t)},useInsertionEffect:function(e,t){return qd(4,2,e,t)},useMemo:function(e,t){var n=Wr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Wr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=N6.bind(null,wt,e),[r.memoizedState,e]},useRef:function(e){var t=Wr();return e={current:e},t.memoizedState=e},useState:wC,useDebugValue:nw,useDeferredValue:function(e){return Wr().memoizedState=e},useTransition:function(){var e=wC(!1),t=e[0];return e=A6.bind(null,e[1]),Wr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=wt,i=Wr();if(ft){if(n===void 0)throw Error(G(407));n=n()}else{if(n=t(),Kt===null)throw Error(G(349));(zo&30)!==0||j2(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,_C(W2.bind(null,r,s,e),[e]),r.flags|=2048,pc(9,Y2.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Wr(),t=Kt.identifierPrefix;if(ft){var n=Ri,r=Oi;n=(r&~(1<<32-Pr(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dc++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=I6++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},b6={readContext:mr,useCallback:Z2,useContext:mr,useEffect:tw,useImperativeHandle:J2,useInsertionEffect:K2,useLayoutEffect:Q2,useMemo:eD,useReducer:gy,useRef:q2,useState:function(){return gy(fc)},useDebugValue:nw,useDeferredValue:function(e){var t=gr();return tD(t,Vt.memoizedState,e)},useTransition:function(){var e=gy(fc)[0],t=gr().memoizedState;return[e,t]},useMutableSource:B2,useSyncExternalStore:z2,useId:nD,unstable_isNewReconciler:!1},P6={readContext:mr,useCallback:Z2,useContext:mr,useEffect:tw,useImperativeHandle:J2,useInsertionEffect:K2,useLayoutEffect:Q2,useMemo:eD,useReducer:yy,useRef:q2,useState:function(){return yy(fc)},useDebugValue:nw,useDeferredValue:function(e){var t=gr();return Vt===null?t.memoizedState=e:tD(t,Vt.memoizedState,e)},useTransition:function(){var e=yy(fc)[0],t=gr().memoizedState;return[e,t]},useMutableSource:B2,useSyncExternalStore:z2,useId:nD,unstable_isNewReconciler:!1};function ml(e,t){try{var n="",r=t;do n+=l$(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function vy(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Wv(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var M6=typeof WeakMap=="function"?WeakMap:Map;function oD(e,t,n){n=Bi(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$f||($f=!0,t0=r),Wv(e,t)},n}function aD(e,t,n){n=Bi(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Wv(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wv(e,t),typeof r!="function"&&(Ms===null?Ms=new Set([this]):Ms.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function SC(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new M6;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=K6.bind(null,e,t,n),t.then(e,e))}function EC(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function CC(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bi(-1,1),t.tag=2,Ps(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var L6=is.ReactCurrentOwner,Fn=!1;function An(e,t,n,r){t.child=e===null?U2(t,null,n,r):fl(t,e.child,n,r)}function kC(e,t,n,r,i){n=n.render;var s=t.ref;return qa(t,i),r=Z1(e,t,n,r,s,i),n=ew(),e!==null&&!Fn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qi(e,t,i)):(ft&&n&&B1(t),t.flags|=1,An(e,t,r,i),t.child)}function TC(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!cw(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,lD(e,t,s,r,i)):(e=Jd(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:oc,n(o,r)&&e.ref===t.ref)return qi(e,t,i)}return t.flags|=1,e=$s(s,r),e.ref=t.ref,e.return=t,t.child=e}function lD(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(oc(s,r)&&e.ref===t.ref)if(Fn=!1,t.pendingProps=r=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Fn=!0);else return t.lanes=e.lanes,qi(e,t,i)}return Hv(e,t,n,r,i)}function uD(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Ua,Hn),Hn|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,et(Ua,Hn),Hn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,et(Ua,Hn),Hn|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,et(Ua,Hn),Hn|=r;return An(e,t,i,n),t.child}function cD(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hv(e,t,n,r,i){var s=Bn(n)?Vo:Sn.current;return s=hl(t,s),qa(t,i),n=Z1(e,t,n,r,s,i),r=ew(),e!==null&&!Fn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qi(e,t,i)):(ft&&r&&B1(t),t.flags|=1,An(e,t,n,i),t.child)}function xC(e,t,n,r,i){if(Bn(n)){var s=!0;Df(t)}else s=!1;if(qa(t,i),t.stateNode===null)Kd(e,t),$2(t,n,r),Yv(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=mr(c):(c=Bn(n)?Vo:Sn.current,c=hl(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&yC(t,o,r,c),ms=!1;var m=t.memoizedState;o.state=m,Rf(t,r,o,i),u=t.memoizedState,a!==r||m!==u||Vn.current||ms?(typeof d=="function"&&(jv(t,n,d,r),u=t.memoizedState),(a=ms||gC(t,n,a,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,M2(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:xr(t.type,a),o.props=c,p=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=mr(u):(u=Bn(n)?Vo:Sn.current,u=hl(t,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==u)&&yC(t,o,r,u),ms=!1,m=t.memoizedState,o.state=m,Rf(t,r,o,i);var w=t.memoizedState;a!==p||m!==w||Vn.current||ms?(typeof v=="function"&&(jv(t,n,v,r),w=t.memoizedState),(c=ms||gC(t,n,c,r,m,w,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Gv(e,t,n,r,s,i)}function Gv(e,t,n,r,i,s){cD(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&hC(t,n,!1),qi(e,t,s);r=t.stateNode,L6.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=fl(t,e.child,null,s),t.child=fl(t,null,a,s)):An(e,t,a,s),t.memoizedState=r.state,i&&hC(t,n,!0),t.child}function hD(e){var t=e.stateNode;t.pendingContext?cC(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cC(e,t.context,!1),K1(e,t.containerInfo)}function DC(e,t,n,r,i){return dl(),j1(i),t.flags|=256,An(e,t,n,r),t.child}var qv={dehydrated:null,treeContext:null,retryLane:0};function Kv(e){return{baseLanes:e,cachePool:null,transitions:null}}function dD(e,t,n){var r=t.pendingProps,i=vt.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),et(vt,i&1),e===null)return Bv(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wp(o,r,0,null),e=Po(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Kv(n),t.memoizedState=qv,e):rw(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $6(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=$s(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=$s(a,s):(s=Po(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Kv(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=qv,r}return s=e.child,e=s.sibling,r=$s(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rw(e,t){return t=Wp({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wd(e,t,n,r){return r!==null&&j1(r),fl(t,e.child,null,n),e=rw(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $6(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=vy(Error(G(422))),wd(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Wp({mode:"visible",children:r.children},i,0,null),s=Po(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&fl(t,e.child,null,o),t.child.memoizedState=Kv(o),t.memoizedState=qv,s);if((t.mode&1)===0)return wd(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(G(419)),r=vy(s,r,void 0),wd(e,t,o,r)}if(a=(o&e.childLanes)!==0,Fn||a){if(r=Kt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gi(e,i),Mr(r,e,i,-1))}return uw(),r=vy(Error(G(421))),wd(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Q6.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Kn=bs(i.nextSibling),Xn=t,ft=!0,Ir=null,e!==null&&(or[ar++]=Oi,or[ar++]=Ri,or[ar++]=Bo,Oi=e.id,Ri=e.overflow,Bo=t),t=rw(t,r.children),t.flags|=4096,t)}function IC(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zv(e.return,t,n)}function wy(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fD(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(An(e,t,r.children,n),r=vt.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&IC(e,n,t);else if(e.tag===19)IC(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(et(vt,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bf(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wy(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bf(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wy(t,!0,n,null,s);break;case"together":wy(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kd(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jo|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,n=$s(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$s(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function F6(e,t,n){switch(t.tag){case 3:hD(t),dl();break;case 5:V2(t);break;case 1:Bn(t.type)&&Df(t);break;case 4:K1(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;et(Nf,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(et(vt,vt.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?dD(e,t,n):(et(vt,vt.current&1),e=qi(e,t,n),e!==null?e.sibling:null);et(vt,vt.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return fD(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),et(vt,vt.current),r)break;return null;case 22:case 23:return t.lanes=0,uD(e,t,n)}return qi(e,t,n)}var pD,Qv,mD,gD;pD=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qv=function(){};mD=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Do(Zr.current);var s=null;switch(n){case"input":i=vv(e,i),r=vv(e,r),s=[];break;case"select":i=_t({},i,{value:void 0}),r=_t({},r,{value:void 0}),s=[];break;case"textarea":i=Sv(e,i),r=Sv(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Tf)}Cv(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zu.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zu.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&it("scroll",e),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};gD=function(e,t,n,r){n!==r&&(t.flags|=4)};function du(e,t){if(!ft)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function cn(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function U6(e,t,n){var r=t.pendingProps;switch(z1(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(t),null;case 1:return Bn(t.type)&&xf(),cn(t),null;case 3:return r=t.stateNode,pl(),st(Vn),st(Sn),X1(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yd(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ir!==null&&(i0(Ir),Ir=null))),Qv(e,t),cn(t),null;case 5:Q1(t);var i=Do(hc.current);if(n=t.type,e!==null&&t.stateNode!=null)mD(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(G(166));return cn(t),null}if(e=Do(Zr.current),yd(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Hr]=t,r[uc]=s,e=(t.mode&1)!==0,n){case"dialog":it("cancel",r),it("close",r);break;case"iframe":case"object":case"embed":it("load",r);break;case"video":case"audio":for(i=0;i<Cu.length;i++)it(Cu[i],r);break;case"source":it("error",r);break;case"img":case"image":case"link":it("error",r),it("load",r);break;case"details":it("toggle",r);break;case"input":$E(r,s),it("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},it("invalid",r);break;case"textarea":UE(r,s),it("invalid",r)}Cv(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&gd(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gd(r.textContent,a,e),i=["children",""+a]):Zu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",r)}switch(n){case"input":ld(r),FE(r,s,!0);break;case"textarea":ld(r),VE(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Tf)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jx(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Hr]=t,e[uc]=r,pD(e,t,!1,!1),t.stateNode=e;e:{switch(o=kv(n,r),n){case"dialog":it("cancel",e),it("close",e),i=r;break;case"iframe":case"object":case"embed":it("load",e),i=r;break;case"video":case"audio":for(i=0;i<Cu.length;i++)it(Cu[i],e);i=r;break;case"source":it("error",e),i=r;break;case"img":case"image":case"link":it("error",e),it("load",e),i=r;break;case"details":it("toggle",e),i=r;break;case"input":$E(e,r),i=vv(e,r),it("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=_t({},r,{value:void 0}),it("invalid",e);break;case"textarea":UE(e,r),i=Sv(e,r),it("invalid",e);break;default:i=r}Cv(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Hx(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Yx(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ec(e,u):typeof u=="number"&&ec(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zu.hasOwnProperty(s)?u!=null&&s==="onScroll"&&it("scroll",e):u!=null&&D1(e,s,u,o))}switch(n){case"input":ld(e),FE(e,r,!1);break;case"textarea":ld(e),VE(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gs(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ya(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ya(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Tf)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return cn(t),null;case 6:if(e&&t.stateNode!=null)gD(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(G(166));if(n=Do(hc.current),Do(Zr.current),yd(t)){if(r=t.stateNode,n=t.memoizedProps,r[Hr]=t,(s=r.nodeValue!==n)&&(e=Xn,e!==null))switch(e.tag){case 3:gd(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gd(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Hr]=t,t.stateNode=r}return cn(t),null;case 13:if(st(vt),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ft&&Kn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)b2(),dl(),t.flags|=98560,s=!1;else if(s=yd(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(G(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(G(317));s[Hr]=t}else dl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;cn(t),s=!1}else Ir!==null&&(i0(Ir),Ir=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(vt.current&1)!==0?zt===0&&(zt=3):uw())),t.updateQueue!==null&&(t.flags|=4),cn(t),null);case 4:return pl(),Qv(e,t),e===null&&ac(t.stateNode.containerInfo),cn(t),null;case 10:return H1(t.type._context),cn(t),null;case 17:return Bn(t.type)&&xf(),cn(t),null;case 19:if(st(vt),s=t.memoizedState,s===null)return cn(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)du(s,!1);else{if(zt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=bf(e),o!==null){for(t.flags|=128,du(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return et(vt,vt.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ot()>gl&&(t.flags|=128,r=!0,du(s,!1),t.lanes=4194304)}else{if(!r)if(e=bf(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),du(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return cn(t),null}else 2*Ot()-s.renderingStartTime>gl&&n!==1073741824&&(t.flags|=128,r=!0,du(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ot(),t.sibling=null,n=vt.current,et(vt,r?n&1|2:n&1),t):(cn(t),null);case 22:case 23:return lw(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Hn&1073741824)!==0&&(cn(t),t.subtreeFlags&6&&(t.flags|=8192)):cn(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function V6(e,t){switch(z1(t),t.tag){case 1:return Bn(t.type)&&xf(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pl(),st(Vn),st(Sn),X1(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Q1(t),null;case 13:if(st(vt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));dl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return st(vt),null;case 4:return pl(),null;case 10:return H1(t.type._context),null;case 22:case 23:return lw(),null;case 24:return null;default:return null}}var _d=!1,pn=!1,B6=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Fa(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ct(e,t,r)}else n.current=null}function Xv(e,t,n){try{n()}catch(r){Ct(e,t,r)}}var AC=!1;function z6(e,t){if(Pv=Ef,e=_2(),V1(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,p=e,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===e)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mv={focusedElem:e,selectionRange:n},Ef=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var w=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,k=w.memoizedState,S=t.stateNode,y=S.getSnapshotBeforeUpdate(t.elementType===t.type?_:xr(t.type,_),k);S.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(x){Ct(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return w=AC,AC=!1,w}function Fu(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xv(t,n,s)}i=i.next}while(i!==r)}}function jp(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Jv(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yD(e){var t=e.alternate;t!==null&&(e.alternate=null,yD(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Hr],delete t[uc],delete t[Fv],delete t[k6],delete t[T6])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vD(e){return e.tag===5||e.tag===3||e.tag===4}function NC(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vD(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zv(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tf));else if(r!==4&&(e=e.child,e!==null))for(Zv(e,t,n),e=e.sibling;e!==null;)Zv(e,t,n),e=e.sibling}function e0(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(e0(e,t,n),e=e.sibling;e!==null;)e0(e,t,n),e=e.sibling}var en=null,Dr=!1;function ds(e,t,n){for(n=n.child;n!==null;)wD(e,t,n),n=n.sibling}function wD(e,t,n){if(Jr&&typeof Jr.onCommitFiberUnmount=="function")try{Jr.onCommitFiberUnmount(Mp,n)}catch{}switch(n.tag){case 5:pn||Fa(n,t);case 6:var r=en,i=Dr;en=null,ds(e,t,n),en=r,Dr=i,en!==null&&(Dr?(e=en,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):en.removeChild(n.stateNode));break;case 18:en!==null&&(Dr?(e=en,n=n.stateNode,e.nodeType===8?dy(e.parentNode,n):e.nodeType===1&&dy(e,n),ic(e)):dy(en,n.stateNode));break;case 4:r=en,i=Dr,en=n.stateNode.containerInfo,Dr=!0,ds(e,t,n),en=r,Dr=i;break;case 0:case 11:case 14:case 15:if(!pn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Xv(n,t,o),i=i.next}while(i!==r)}ds(e,t,n);break;case 1:if(!pn&&(Fa(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ct(n,t,a)}ds(e,t,n);break;case 21:ds(e,t,n);break;case 22:n.mode&1?(pn=(r=pn)||n.memoizedState!==null,ds(e,t,n),pn=r):ds(e,t,n);break;default:ds(e,t,n)}}function OC(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new B6),t.forEach(function(r){var i=X6.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tr(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:en=a.stateNode,Dr=!1;break e;case 3:en=a.stateNode.containerInfo,Dr=!0;break e;case 4:en=a.stateNode.containerInfo,Dr=!0;break e}a=a.return}if(en===null)throw Error(G(160));wD(s,o,i),en=null,Dr=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ct(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_D(t,e),t=t.sibling}function _D(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tr(t,e),Yr(e),r&4){try{Fu(3,e,e.return),jp(3,e)}catch(_){Ct(e,e.return,_)}try{Fu(5,e,e.return)}catch(_){Ct(e,e.return,_)}}break;case 1:Tr(t,e),Yr(e),r&512&&n!==null&&Fa(n,n.return);break;case 5:if(Tr(t,e),Yr(e),r&512&&n!==null&&Fa(n,n.return),e.flags&32){var i=e.stateNode;try{ec(i,"")}catch(_){Ct(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bx(i,s),kv(a,o);var c=kv(a,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?Hx(i,p):d==="dangerouslySetInnerHTML"?Yx(i,p):d==="children"?ec(i,p):D1(i,d,p,c)}switch(a){case"input":wv(i,s);break;case"textarea":zx(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Ya(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ya(i,!!s.multiple,s.defaultValue,!0):Ya(i,!!s.multiple,s.multiple?[]:"",!1))}i[uc]=s}catch(_){Ct(e,e.return,_)}}break;case 6:if(Tr(t,e),Yr(e),r&4){if(e.stateNode===null)throw Error(G(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){Ct(e,e.return,_)}}break;case 3:if(Tr(t,e),Yr(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ic(t.containerInfo)}catch(_){Ct(e,e.return,_)}break;case 4:Tr(t,e),Yr(e);break;case 13:Tr(t,e),Yr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ow=Ot())),r&4&&OC(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(pn=(c=pn)||d,Tr(t,e),pn=c):Tr(t,e),Yr(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&(e.mode&1)!==0)for(ae=e,d=e.child;d!==null;){for(p=ae=d;ae!==null;){switch(m=ae,v=m.child,m.tag){case 0:case 11:case 14:case 15:Fu(4,m,m.return);break;case 1:Fa(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){Ct(r,n,_)}}break;case 5:Fa(m,m.return);break;case 22:if(m.memoizedState!==null){bC(p);continue}}v!==null?(v.return=m,ae=v):bC(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Wx("display",o))}catch(_){Ct(e,e.return,_)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(_){Ct(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Tr(t,e),Yr(e),r&4&&OC(e);break;case 21:break;default:Tr(t,e),Yr(e)}}function Yr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vD(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ec(i,""),r.flags&=-33);var s=NC(e);e0(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=NC(e);Zv(e,a,o);break;default:throw Error(G(161))}}catch(u){Ct(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function j6(e,t,n){ae=e,SD(e)}function SD(e,t,n){for(var r=(e.mode&1)!==0;ae!==null;){var i=ae,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_d;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||pn;a=_d;var c=pn;if(_d=o,(pn=u)&&!c)for(ae=i;ae!==null;)o=ae,u=o.child,o.tag===22&&o.memoizedState!==null?PC(i):u!==null?(u.return=o,ae=u):PC(i);for(;s!==null;)ae=s,SD(s),s=s.sibling;ae=i,_d=a,pn=c}RC(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,ae=s):RC(e)}}function RC(e){for(;ae!==null;){var t=ae;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:pn||jp(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pn)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:xr(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&mC(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mC(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ic(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}pn||t.flags&512&&Jv(t)}catch(m){Ct(t,t.return,m)}}if(t===e){ae=null;break}if(n=t.sibling,n!==null){n.return=t.return,ae=n;break}ae=t.return}}function bC(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ae=n;break}ae=t.return}}function PC(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jp(4,t)}catch(u){Ct(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Ct(t,i,u)}}var s=t.return;try{Jv(t)}catch(u){Ct(t,s,u)}break;case 5:var o=t.return;try{Jv(t)}catch(u){Ct(t,o,u)}}}catch(u){Ct(t,t.return,u)}if(t===e){ae=null;break}var a=t.sibling;if(a!==null){a.return=t.return,ae=a;break}ae=t.return}}var Y6=Math.ceil,Lf=is.ReactCurrentDispatcher,iw=is.ReactCurrentOwner,pr=is.ReactCurrentBatchConfig,Be=0,Kt=null,Mt=null,rn=0,Hn=0,Ua=so(0),zt=0,mc=null,jo=0,Yp=0,sw=0,Uu=null,$n=null,ow=0,gl=1/0,xi=null,$f=!1,t0=null,Ms=null,Sd=!1,ks=null,Ff=0,Vu=0,n0=null,Qd=-1,Xd=0;function On(){return(Be&6)!==0?Ot():Qd!==-1?Qd:Qd=Ot()}function Ls(e){return(e.mode&1)===0?1:(Be&2)!==0&&rn!==0?rn&-rn:D6.transition!==null?(Xd===0&&(Xd=i2()),Xd):(e=Ge,e!==0||(e=window.event,e=e===void 0?16:h2(e.type)),e)}function Mr(e,t,n,r){if(50<Vu)throw Vu=0,n0=null,Error(G(185));Kc(e,n,r),((Be&2)===0||e!==Kt)&&(e===Kt&&((Be&2)===0&&(Yp|=n),zt===4&&ys(e,rn)),zn(e,r),n===1&&Be===0&&(t.mode&1)===0&&(gl=Ot()+500,Vp&&oo()))}function zn(e,t){var n=e.callbackNode;D$(e,t);var r=Sf(e,e===Kt?rn:0);if(r===0)n!==null&&jE(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&jE(n),t===1)e.tag===0?x6(MC.bind(null,e)):N2(MC.bind(null,e)),E6(function(){(Be&6)===0&&oo()}),n=null;else{switch(s2(r)){case 1:n=R1;break;case 4:n=n2;break;case 16:n=_f;break;case 536870912:n=r2;break;default:n=_f}n=AD(n,ED.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ED(e,t){if(Qd=-1,Xd=0,(Be&6)!==0)throw Error(G(327));var n=e.callbackNode;if(Ka()&&e.callbackNode!==n)return null;var r=Sf(e,e===Kt?rn:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Uf(e,r);else{t=r;var i=Be;Be|=2;var s=kD();(Kt!==e||rn!==t)&&(xi=null,gl=Ot()+500,bo(e,t));do try{G6();break}catch(a){CD(e,a)}while(1);W1(),Lf.current=s,Be=i,Mt!==null?t=0:(Kt=null,rn=0,t=zt)}if(t!==0){if(t===2&&(i=Av(e),i!==0&&(r=i,t=r0(e,i))),t===1)throw n=mc,bo(e,0),ys(e,r),zn(e,Ot()),n;if(t===6)ys(e,r);else{if(i=e.current.alternate,(r&30)===0&&!W6(i)&&(t=Uf(e,r),t===2&&(s=Av(e),s!==0&&(r=s,t=r0(e,s))),t===1))throw n=mc,bo(e,0),ys(e,r),zn(e,Ot()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(G(345));case 2:Eo(e,$n,xi);break;case 3:if(ys(e,r),(r&130023424)===r&&(t=ow+500-Ot(),10<t)){if(Sf(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){On(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$v(Eo.bind(null,e,$n,xi),t);break}Eo(e,$n,xi);break;case 4:if(ys(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Pr(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Y6(r/1960))-r,10<r){e.timeoutHandle=$v(Eo.bind(null,e,$n,xi),r);break}Eo(e,$n,xi);break;case 5:Eo(e,$n,xi);break;default:throw Error(G(329))}}}return zn(e,Ot()),e.callbackNode===n?ED.bind(null,e):null}function r0(e,t){var n=Uu;return e.current.memoizedState.isDehydrated&&(bo(e,t).flags|=256),e=Uf(e,t),e!==2&&(t=$n,$n=n,t!==null&&i0(t)),e}function i0(e){$n===null?$n=e:$n.push.apply($n,e)}function W6(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Lr(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ys(e,t){for(t&=~sw,t&=~Yp,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pr(t),r=1<<n;e[n]=-1,t&=~r}}function MC(e){if((Be&6)!==0)throw Error(G(327));Ka();var t=Sf(e,0);if((t&1)===0)return zn(e,Ot()),null;var n=Uf(e,t);if(e.tag!==0&&n===2){var r=Av(e);r!==0&&(t=r,n=r0(e,r))}if(n===1)throw n=mc,bo(e,0),ys(e,t),zn(e,Ot()),n;if(n===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Eo(e,$n,xi),zn(e,Ot()),null}function aw(e,t){var n=Be;Be|=1;try{return e(t)}finally{Be=n,Be===0&&(gl=Ot()+500,Vp&&oo())}}function Yo(e){ks!==null&&ks.tag===0&&(Be&6)===0&&Ka();var t=Be;Be|=1;var n=pr.transition,r=Ge;try{if(pr.transition=null,Ge=1,e)return e()}finally{Ge=r,pr.transition=n,Be=t,(Be&6)===0&&oo()}}function lw(){Hn=Ua.current,st(Ua)}function bo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,S6(n)),Mt!==null)for(n=Mt.return;n!==null;){var r=n;switch(z1(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xf();break;case 3:pl(),st(Vn),st(Sn),X1();break;case 5:Q1(r);break;case 4:pl();break;case 13:st(vt);break;case 19:st(vt);break;case 10:H1(r.type._context);break;case 22:case 23:lw()}n=n.return}if(Kt=e,Mt=e=$s(e.current,null),rn=Hn=t,zt=0,mc=null,sw=Yp=jo=0,$n=Uu=null,xo!==null){for(t=0;t<xo.length;t++)if(n=xo[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xo=null}return e}function CD(e,t){do{var n=Mt;try{if(W1(),Gd.current=Mf,Pf){for(var r=wt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pf=!1}if(zo=0,Gt=Vt=wt=null,$u=!1,dc=0,iw.current=null,n===null||n.return===null){zt=1,mc=t,Mt=null;break}e:{var s=e,o=n.return,a=n,u=t;if(t=rn,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,p=d.tag;if((d.mode&1)===0&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=EC(o);if(v!==null){v.flags&=-257,CC(v,o,a,s,t),v.mode&1&&SC(s,c,t),t=v,u=c;var w=t.updateQueue;if(w===null){var _=new Set;_.add(u),t.updateQueue=_}else w.add(u);break e}else{if((t&1)===0){SC(s,c,t),uw();break e}u=Error(G(426))}}else if(ft&&a.mode&1){var k=EC(o);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),CC(k,o,a,s,t),j1(ml(u,a));break e}}s=u=ml(u,a),zt!==4&&(zt=2),Uu===null?Uu=[s]:Uu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var S=oD(s,u,t);pC(s,S);break e;case 1:a=u;var y=s.type,C=s.stateNode;if((s.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Ms===null||!Ms.has(C)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=aD(s,a,t);pC(s,x);break e}}s=s.return}while(s!==null)}xD(n)}catch(A){t=A,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(1)}function kD(){var e=Lf.current;return Lf.current=Mf,e===null?Mf:e}function uw(){(zt===0||zt===3||zt===2)&&(zt=4),Kt===null||(jo&268435455)===0&&(Yp&268435455)===0||ys(Kt,rn)}function Uf(e,t){var n=Be;Be|=2;var r=kD();(Kt!==e||rn!==t)&&(xi=null,bo(e,t));do try{H6();break}catch(i){CD(e,i)}while(1);if(W1(),Be=n,Lf.current=r,Mt!==null)throw Error(G(261));return Kt=null,rn=0,zt}function H6(){for(;Mt!==null;)TD(Mt)}function G6(){for(;Mt!==null&&!v$();)TD(Mt)}function TD(e){var t=ID(e.alternate,e,Hn);e.memoizedProps=e.pendingProps,t===null?xD(e):Mt=t,iw.current=null}function xD(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=U6(n,t,Hn),n!==null){Mt=n;return}}else{if(n=V6(n,t),n!==null){n.flags&=32767,Mt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{zt=6,Mt=null;return}}if(t=t.sibling,t!==null){Mt=t;return}Mt=t=e}while(t!==null);zt===0&&(zt=5)}function Eo(e,t,n){var r=Ge,i=pr.transition;try{pr.transition=null,Ge=1,q6(e,t,n,r)}finally{pr.transition=i,Ge=r}return null}function q6(e,t,n,r){do Ka();while(ks!==null);if((Be&6)!==0)throw Error(G(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(I$(e,s),e===Kt&&(Mt=Kt=null,rn=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Sd||(Sd=!0,AD(_f,function(){return Ka(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=pr.transition,pr.transition=null;var o=Ge;Ge=1;var a=Be;Be|=4,iw.current=null,z6(e,n),_D(n,e),p6(Mv),Ef=!!Pv,Mv=Pv=null,e.current=n,j6(n),w$(),Be=a,Ge=o,pr.transition=s}else e.current=n;if(Sd&&(Sd=!1,ks=e,Ff=i),s=e.pendingLanes,s===0&&(Ms=null),E$(n.stateNode),zn(e,Ot()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($f)throw $f=!1,e=t0,t0=null,e;return(Ff&1)!==0&&e.tag!==0&&Ka(),s=e.pendingLanes,(s&1)!==0?e===n0?Vu++:(Vu=0,n0=e):Vu=0,oo(),null}function Ka(){if(ks!==null){var e=s2(Ff),t=pr.transition,n=Ge;try{if(pr.transition=null,Ge=16>e?16:e,ks===null)var r=!1;else{if(e=ks,ks=null,Ff=0,(Be&6)!==0)throw Error(G(331));var i=Be;for(Be|=4,ae=e.current;ae!==null;){var s=ae,o=s.child;if((ae.flags&16)!==0){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(ae=c;ae!==null;){var d=ae;switch(d.tag){case 0:case 11:case 15:Fu(8,d,s)}var p=d.child;if(p!==null)p.return=d,ae=p;else for(;ae!==null;){d=ae;var m=d.sibling,v=d.return;if(yD(d),d===c){ae=null;break}if(m!==null){m.return=v,ae=m;break}ae=v}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var k=_.sibling;_.sibling=null,_=k}while(_!==null)}}ae=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,ae=o;else e:for(;ae!==null;){if(s=ae,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Fu(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,ae=S;break e}ae=s.return}}var y=e.current;for(ae=y;ae!==null;){o=ae;var C=o.child;if((o.subtreeFlags&2064)!==0&&C!==null)C.return=o,ae=C;else e:for(o=y;ae!==null;){if(a=ae,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:jp(9,a)}}catch(A){Ct(a,a.return,A)}if(a===o){ae=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,ae=x;break e}ae=a.return}}if(Be=i,oo(),Jr&&typeof Jr.onPostCommitFiberRoot=="function")try{Jr.onPostCommitFiberRoot(Mp,e)}catch{}r=!0}return r}finally{Ge=n,pr.transition=t}}return!1}function LC(e,t,n){t=ml(n,t),t=oD(e,t,1),e=Ps(e,t,1),t=On(),e!==null&&(Kc(e,1,t),zn(e,t))}function Ct(e,t,n){if(e.tag===3)LC(e,e,n);else for(;t!==null;){if(t.tag===3){LC(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ms===null||!Ms.has(r))){e=ml(n,e),e=aD(t,e,1),t=Ps(t,e,1),e=On(),t!==null&&(Kc(t,1,e),zn(t,e));break}}t=t.return}}function K6(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=On(),e.pingedLanes|=e.suspendedLanes&n,Kt===e&&(rn&n)===n&&(zt===4||zt===3&&(rn&130023424)===rn&&500>Ot()-ow?bo(e,0):sw|=n),zn(e,t)}function DD(e,t){t===0&&((e.mode&1)===0?t=1:(t=hd,hd<<=1,(hd&130023424)===0&&(hd=4194304)));var n=On();e=Gi(e,t),e!==null&&(Kc(e,t,n),zn(e,n))}function Q6(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),DD(e,n)}function X6(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(t),DD(e,n)}var ID;ID=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Vn.current)Fn=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Fn=!1,F6(e,t,n);Fn=(e.flags&131072)!==0}else Fn=!1,ft&&(t.flags&1048576)!==0&&O2(t,Af,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Kd(e,t),e=t.pendingProps;var i=hl(t,Sn.current);qa(t,n),i=Z1(null,t,r,e,i,n);var s=ew();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Bn(r)?(s=!0,Df(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,q1(t),i.updater=Bp,t.stateNode=i,i._reactInternals=t,Yv(t,r,e,n),t=Gv(null,t,r,!0,s,n)):(t.tag=0,ft&&s&&B1(t),An(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Kd(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Z6(r),e=xr(r,e),i){case 0:t=Hv(null,t,r,e,n);break e;case 1:t=xC(null,t,r,e,n);break e;case 11:t=kC(null,t,r,e,n);break e;case 14:t=TC(null,t,r,xr(r.type,e),n);break e}throw Error(G(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xr(r,i),Hv(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xr(r,i),xC(e,t,r,i,n);case 3:e:{if(hD(t),e===null)throw Error(G(387));r=t.pendingProps,s=t.memoizedState,i=s.element,M2(e,t),Rf(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=ml(Error(G(423)),t),t=DC(e,t,r,n,i);break e}else if(r!==i){i=ml(Error(G(424)),t),t=DC(e,t,r,n,i);break e}else for(Kn=bs(t.stateNode.containerInfo.firstChild),Xn=t,ft=!0,Ir=null,n=U2(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dl(),r===i){t=qi(e,t,n);break e}An(e,t,r,n)}t=t.child}return t;case 5:return V2(t),e===null&&Bv(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Lv(r,i)?o=null:s!==null&&Lv(r,s)&&(t.flags|=32),cD(e,t),An(e,t,o,n),t.child;case 6:return e===null&&Bv(t),null;case 13:return dD(e,t,n);case 4:return K1(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fl(t,null,r,n):An(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xr(r,i),kC(e,t,r,i,n);case 7:return An(e,t,t.pendingProps,n),t.child;case 8:return An(e,t,t.pendingProps.children,n),t.child;case 12:return An(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,et(Nf,r._currentValue),r._currentValue=o,s!==null)if(Lr(s.value,o)){if(s.children===i.children&&!Vn.current){t=qi(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Bi(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),zv(s.return,n,t),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(G(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zv(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}An(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,qa(t,n),i=mr(i),r=r(i),t.flags|=1,An(e,t,r,n),t.child;case 14:return r=t.type,i=xr(r,t.pendingProps),i=xr(r.type,i),TC(e,t,r,i,n);case 15:return lD(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xr(r,i),Kd(e,t),t.tag=1,Bn(r)?(e=!0,Df(t)):e=!1,qa(t,n),$2(t,r,i),Yv(t,r,i,n),Gv(null,t,r,!0,e,n);case 19:return fD(e,t,n);case 22:return uD(e,t,n)}throw Error(G(156,t.tag))};function AD(e,t){return t2(e,t)}function J6(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dr(e,t,n,r){return new J6(e,t,n,r)}function cw(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Z6(e){if(typeof e=="function")return cw(e)?1:0;if(e!=null){if(e=e.$$typeof,e===A1)return 11;if(e===N1)return 14}return 2}function $s(e,t){var n=e.alternate;return n===null?(n=dr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Jd(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")cw(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Aa:return Po(n.children,i,s,t);case I1:o=8,i|=8;break;case pv:return e=dr(12,n,t,i|2),e.elementType=pv,e.lanes=s,e;case mv:return e=dr(13,n,t,i),e.elementType=mv,e.lanes=s,e;case gv:return e=dr(19,n,t,i),e.elementType=gv,e.lanes=s,e;case Fx:return Wp(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lx:o=10;break e;case $x:o=9;break e;case A1:o=11;break e;case N1:o=14;break e;case ps:o=16,r=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=dr(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Po(e,t,n,r){return e=dr(7,e,r,t),e.lanes=n,e}function Wp(e,t,n,r){return e=dr(22,e,r,t),e.elementType=Fx,e.lanes=n,e.stateNode={isHidden:!1},e}function _y(e,t,n){return e=dr(6,e,null,t),e.lanes=n,e}function Sy(e,t,n){return t=dr(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function e3(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ty(0),this.expirationTimes=ty(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ty(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hw(e,t,n,r,i,s,o,a,u){return e=new e3(e,t,n,a,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=dr(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},q1(s),e}function t3(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ia,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ND(e){if(!e)return qs;e=e._reactInternals;e:{if(sa(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Bn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var n=e.type;if(Bn(n))return A2(e,n,t)}return t}function OD(e,t,n,r,i,s,o,a,u){return e=hw(n,r,!0,e,i,s,o,a,u),e.context=ND(null),n=e.current,r=On(),i=Ls(n),s=Bi(r,i),s.callback=t!=null?t:null,Ps(n,s,i),e.current.lanes=i,Kc(e,i,r),zn(e,r),e}function Hp(e,t,n,r){var i=t.current,s=On(),o=Ls(i);return n=ND(n),t.context===null?t.context=n:t.pendingContext=n,t=Bi(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ps(i,t,o),e!==null&&(Mr(e,i,o,s),Hd(e,i,o)),o}function Vf(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $C(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function dw(e,t){$C(e,t),(e=e.alternate)&&$C(e,t)}function n3(){return null}var RD=typeof reportError=="function"?reportError:function(e){console.error(e)};function fw(e){this._internalRoot=e}Gp.prototype.render=fw.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));Hp(e,t,null,null)};Gp.prototype.unmount=fw.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yo(function(){Hp(null,e,null,null)}),t[Hi]=null}};function Gp(e){this._internalRoot=e}Gp.prototype.unstable_scheduleHydration=function(e){if(e){var t=l2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gs.length&&t!==0&&t<gs[n].priority;n++);gs.splice(n,0,e),n===0&&c2(e)}};function pw(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function FC(){}function r3(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Vf(o);s.call(c)}}var o=OD(t,r,e,0,null,!1,!1,"",FC);return e._reactRootContainer=o,e[Hi]=o.current,ac(e.nodeType===8?e.parentNode:e),Yo(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Vf(u);a.call(c)}}var u=hw(e,0,!1,null,null,!1,!1,"",FC);return e._reactRootContainer=u,e[Hi]=u.current,ac(e.nodeType===8?e.parentNode:e),Yo(function(){Hp(t,u,n,r)}),u}function Kp(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Vf(o);a.call(u)}}Hp(t,o,e,i)}else o=r3(n,t,e,i,r);return Vf(o)}o2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Eu(t.pendingLanes);n!==0&&(b1(t,n|1),zn(t,Ot()),(Be&6)===0&&(gl=Ot()+500,oo()))}break;case 13:Yo(function(){var r=Gi(e,1);if(r!==null){var i=On();Mr(r,e,1,i)}}),dw(e,1)}};P1=function(e){if(e.tag===13){var t=Gi(e,134217728);if(t!==null){var n=On();Mr(t,e,134217728,n)}dw(e,134217728)}};a2=function(e){if(e.tag===13){var t=Ls(e),n=Gi(e,t);if(n!==null){var r=On();Mr(n,e,t,r)}dw(e,t)}};l2=function(){return Ge};u2=function(e,t){var n=Ge;try{return Ge=e,t()}finally{Ge=n}};xv=function(e,t,n){switch(t){case"input":if(wv(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Up(r);if(!i)throw Error(G(90));Vx(r),wv(r,i)}}}break;case"textarea":zx(e,n);break;case"select":t=n.value,t!=null&&Ya(e,!!n.multiple,t,!1)}};Kx=aw;Qx=Yo;var i3={usingClientEntryPoint:!1,Events:[Xc,ba,Up,Gx,qx,aw]},fu={findFiberByHostInstance:To,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},s3={bundleType:fu.bundleType,version:fu.version,rendererPackageName:fu.rendererPackageName,rendererConfig:fu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:is.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zx(e),e===null?null:e.stateNode},findFiberByHostInstance:fu.findFiberByHostInstance||n3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ed=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ed.isDisabled&&Ed.supportsFiber)try{Mp=Ed.inject(s3),Jr=Ed}catch{}}nr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i3;nr.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pw(t))throw Error(G(200));return t3(e,t,null,n)};nr.createRoot=function(e,t){if(!pw(e))throw Error(G(299));var n=!1,r="",i=RD;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=hw(e,1,!1,null,null,n,!1,r,i),e[Hi]=t.current,ac(e.nodeType===8?e.parentNode:e),new fw(t)};nr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=Zx(t),e=e===null?null:e.stateNode,e};nr.flushSync=function(e){return Yo(e)};nr.hydrate=function(e,t,n){if(!qp(t))throw Error(G(200));return Kp(null,e,t,!0,n)};nr.hydrateRoot=function(e,t,n){if(!pw(e))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=RD;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=OD(t,null,e,1,n!=null?n:null,i,!1,s,o),e[Hi]=t.current,ac(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Gp(t)};nr.render=function(e,t,n){if(!qp(t))throw Error(G(200));return Kp(null,e,t,!1,n)};nr.unmountComponentAtNode=function(e){if(!qp(e))throw Error(G(40));return e._reactRootContainer?(Yo(function(){Kp(null,null,e,!1,function(){e._reactRootContainer=null,e[Hi]=null})}),!0):!1};nr.unstable_batchedUpdates=aw;nr.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qp(n))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return Kp(e,t,n,!1,r)};nr.version="18.2.0-next-9e3b772b8-20220608";function bD(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bD)}catch(e){console.error(e)}}bD(),k1.exports=nr;var UC=k1.exports;dv.createRoot=UC.createRoot,dv.hydrateRoot=UC.hydrateRoot;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gc(){return gc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gc.apply(this,arguments)}var Ts;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ts||(Ts={}));const VC="popstate";function o3(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return s0("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Bf(i)}return l3(t,n,null,e)}function $t(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function mw(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function a3(){return Math.random().toString(36).substr(2,8)}function BC(e,t){return{usr:e.state,key:e.key,idx:t}}function s0(e,t,n,r){return n===void 0&&(n=null),gc({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pl(t):t,{state:n,key:t&&t.key||r||a3()})}function Bf(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Pl(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function l3(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ts.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(gc({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){a=Ts.Pop;let k=d(),S=k==null?null:k-c;c=k,u&&u({action:a,location:_.location,delta:S})}function m(k,S){a=Ts.Push;let y=s0(_.location,k,S);n&&n(y,k),c=d()+1;let C=BC(y,c),x=_.createHref(y);try{o.pushState(C,"",x)}catch{i.location.assign(x)}s&&u&&u({action:a,location:_.location,delta:1})}function v(k,S){a=Ts.Replace;let y=s0(_.location,k,S);n&&n(y,k),c=d();let C=BC(y,c),x=_.createHref(y);o.replaceState(C,"",x),s&&u&&u({action:a,location:_.location,delta:0})}function w(k){let S=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof k=="string"?k:Bf(k);return $t(S,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,S)}let _={get action(){return a},get location(){return e(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(VC,p),u=k,()=>{i.removeEventListener(VC,p),u=null}},createHref(k){return t(i,k)},createURL:w,encodeLocation(k){let S=w(k);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:v,go(k){return o.go(k)}};return _}var zC;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zC||(zC={}));function u3(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Pl(t):t,i=gw(r.pathname||"/",n);if(i==null)return null;let s=PD(e);c3(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=w3(s[a],E3(i));return o}function PD(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&($t(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Fs([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&($t(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),PD(s.children,t,d,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:y3(c,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of MD(s.path))i(s,o,u)}),t}function MD(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=MD(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function c3(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:v3(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const h3=/^:\w+$/,d3=3,f3=2,p3=1,m3=10,g3=-2,jC=e=>e==="*";function y3(e,t){let n=e.split("/"),r=n.length;return n.some(jC)&&(r+=g3),t&&(r+=f3),n.filter(i=>!jC(i)).reduce((i,s)=>i+(h3.test(s)?d3:s===""?p3:m3),r)}function v3(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function w3(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=_3({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!d)return null;Object.assign(r,d.params);let p=a.route;s.push({params:r,pathname:Fs([i,d.pathname]),pathnameBase:x3(Fs([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=Fs([i,d.pathnameBase]))}return s}function _3(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=S3(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,p)=>{if(d==="*"){let m=a[p]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}return c[d]=C3(a[p]||"",d),c},{}),pathname:s,pathnameBase:o,pattern:e}}function S3(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),mw(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function E3(e){try{return decodeURI(e)}catch(t){return mw(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function C3(e,t){try{return decodeURIComponent(e)}catch(n){return mw(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function gw(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function k3(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Pl(e):e;return{pathname:n?n.startsWith("/")?n:T3(n,t):t,search:D3(r),hash:I3(i)}}function T3(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ey(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function LD(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function $D(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Pl(e):(i=gc({},e),$t(!i.pathname||!i.pathname.includes("?"),Ey("?","pathname","search",i)),$t(!i.pathname||!i.pathname.includes("#"),Ey("#","pathname","hash",i)),$t(!i.search||!i.search.includes("#"),Ey("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let p=t.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?t[p]:"/"}let u=k3(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Fs=e=>e.join("/").replace(/\/\/+/g,"/"),x3=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),D3=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,I3=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function A3(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const N3=["post","put","patch","delete"];[...N3];/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zf(){return zf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zf.apply(this,arguments)}const FD=$.exports.createContext(null),O3=$.exports.createContext(null),Ml=$.exports.createContext(null),Qp=$.exports.createContext(null),ao=$.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),UD=$.exports.createContext(null);function R3(e,t){let{relative:n}=t===void 0?{}:t;Zc()||$t(!1);let{basename:r,navigator:i}=$.exports.useContext(Ml),{hash:s,pathname:o,search:a}=BD(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Fs([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Zc(){return $.exports.useContext(Qp)!=null}function eh(){return Zc()||$t(!1),$.exports.useContext(Qp).location}function VD(e){$.exports.useContext(Ml).static||$.exports.useLayoutEffect(e)}function Vr(){let{isDataRoute:e}=$.exports.useContext(ao);return e?W3():b3()}function b3(){Zc()||$t(!1);let{basename:e,navigator:t}=$.exports.useContext(Ml),{matches:n}=$.exports.useContext(ao),{pathname:r}=eh(),i=JSON.stringify(LD(n).map(a=>a.pathnameBase)),s=$.exports.useRef(!1);return VD(()=>{s.current=!0}),$.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){t.go(a);return}let c=$D(a,JSON.parse(i),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Fs([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,i,r])}function Xp(){let{matches:e}=$.exports.useContext(ao),t=e[e.length-1];return t?t.params:{}}function BD(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=$.exports.useContext(ao),{pathname:i}=eh(),s=JSON.stringify(LD(r).map(o=>o.pathnameBase));return $.exports.useMemo(()=>$D(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function P3(e,t){return M3(e,t)}function M3(e,t,n){Zc()||$t(!1);let{navigator:r}=$.exports.useContext(Ml),{matches:i}=$.exports.useContext(ao),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=eh(),c;if(t){var d;let _=typeof t=="string"?Pl(t):t;a==="/"||((d=_.pathname)==null?void 0:d.startsWith(a))||$t(!1),c=_}else c=u;let p=c.pathname||"/",m=a==="/"?p:p.slice(a.length)||"/",v=u3(e,{pathname:m}),w=V3(v&&v.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Fs([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Fs([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return t&&w?$.exports.createElement(Qp.Provider,{value:{location:zf({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ts.Pop}},w):w}function L3(){let e=Y3(),t=A3(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return $.exports.createElement($.exports.Fragment,null,$.exports.createElement("h2",null,"Unexpected Application Error!"),$.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?$.exports.createElement("pre",{style:i},n):null,s)}const $3=$.exports.createElement(L3,null);class F3 extends $.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?$.exports.createElement(ao.Provider,{value:this.props.routeContext},$.exports.createElement(UD.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function U3(e){let{routeContext:t,match:n,children:r}=e,i=$.exports.useContext(FD);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),$.exports.createElement(ao.Provider,{value:t},r)}function V3(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id]));a>=0||$t(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,u,c)=>{let d=u.route.id?o==null?void 0:o[u.route.id]:null,p=null;n&&(p=u.route.errorElement||$3);let m=t.concat(s.slice(0,c+1)),v=()=>{let w;return d?w=p:u.route.Component?w=$.exports.createElement(u.route.Component,null):u.route.element?w=u.route.element:w=a,$.exports.createElement(U3,{match:u,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:w})};return n&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?$.exports.createElement(F3,{location:n.location,revalidation:n.revalidation,component:p,error:d,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()},null)}var o0;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(o0||(o0={}));var yc;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(yc||(yc={}));function B3(e){let t=$.exports.useContext(FD);return t||$t(!1),t}function z3(e){let t=$.exports.useContext(O3);return t||$t(!1),t}function j3(e){let t=$.exports.useContext(ao);return t||$t(!1),t}function zD(e){let t=j3(),n=t.matches[t.matches.length-1];return n.route.id||$t(!1),n.route.id}function Y3(){var e;let t=$.exports.useContext(UD),n=z3(yc.UseRouteError),r=zD(yc.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function W3(){let{router:e}=B3(o0.UseNavigateStable),t=zD(yc.UseNavigateStable),n=$.exports.useRef(!1);return VD(()=>{n.current=!0}),$.exports.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,zf({fromRouteId:t},s)))},[e,t])}function jD(e){$t(!1)}function H3(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ts.Pop,navigator:s,static:o=!1}=e;Zc()&&$t(!1);let a=t.replace(/^\/*/,"/"),u=$.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Pl(r));let{pathname:c="/",search:d="",hash:p="",state:m=null,key:v="default"}=r,w=$.exports.useMemo(()=>{let _=gw(c,a);return _==null?null:{location:{pathname:_,search:d,hash:p,state:m,key:v},navigationType:i}},[a,c,d,p,m,v,i]);return w==null?null:$.exports.createElement(Ml.Provider,{value:u},$.exports.createElement(Qp.Provider,{children:n,value:w}))}function G3(e){let{children:t,location:n}=e;return P3(a0(t),n)}var YC;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(YC||(YC={}));new Promise(()=>{});function a0(e,t){t===void 0&&(t=[]);let n=[];return $.exports.Children.forEach(e,(r,i)=>{if(!$.exports.isValidElement(r))return;let s=[...t,i];if(r.type===$.exports.Fragment){n.push.apply(n,a0(r.props.children,s));return}r.type!==jD&&$t(!1),!r.props.index||!r.props.children||$t(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=a0(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function l0(){return l0=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l0.apply(this,arguments)}function q3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function K3(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Q3(e,t){return e.button===0&&(!t||t==="_self")&&!K3(e)}const X3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function J3(e){let{basename:t,children:n,window:r}=e,i=$.exports.useRef();i.current==null&&(i.current=o3({window:r,v5Compat:!0}));let s=i.current,[o,a]=$.exports.useState({action:s.action,location:s.location});return $.exports.useLayoutEffect(()=>s.listen(a),[s]),$.exports.createElement(H3,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s})}const Z3=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",e5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gn=$.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d}=t,p=q3(t,X3),{basename:m}=$.exports.useContext(Ml),v,w=!1;if(typeof c=="string"&&e5.test(c)&&(v=c,Z3))try{let y=new URL(window.location.href),C=c.startsWith("//")?new URL(y.protocol+c):new URL(c),x=gw(C.pathname,m);C.origin===y.origin&&x!=null?c=x+C.search+C.hash:w=!0}catch{}let _=R3(c,{relative:i}),k=t5(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i});function S(y){r&&r(y),y.defaultPrevented||k(y)}return $.exports.createElement("a",l0({},p,{href:v||_,onClick:w||s?r:S,ref:n,target:u}))});var WC;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(WC||(WC={}));var HC;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(HC||(HC={}));function t5(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=Vr(),u=eh(),c=BD(e,{relative:o});return $.exports.useCallback(d=>{if(Q3(d,n)){d.preventDefault();let p=r!==void 0?r:Bf(u)===Bf(c);a(e,{replace:p,state:i,preventScrollReset:s,relative:o})}},[u,a,c,r,i,n,e,s,o])}var yw={exports:{}},Ke={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vw=Symbol.for("react.element"),ww=Symbol.for("react.portal"),Jp=Symbol.for("react.fragment"),Zp=Symbol.for("react.strict_mode"),em=Symbol.for("react.profiler"),tm=Symbol.for("react.provider"),nm=Symbol.for("react.context"),n5=Symbol.for("react.server_context"),rm=Symbol.for("react.forward_ref"),im=Symbol.for("react.suspense"),sm=Symbol.for("react.suspense_list"),om=Symbol.for("react.memo"),am=Symbol.for("react.lazy"),r5=Symbol.for("react.offscreen"),YD;YD=Symbol.for("react.module.reference");function wr(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case vw:switch(e=e.type,e){case Jp:case em:case Zp:case im:case sm:return e;default:switch(e=e&&e.$$typeof,e){case n5:case nm:case rm:case am:case om:case tm:return e;default:return t}}case ww:return t}}}Ke.ContextConsumer=nm;Ke.ContextProvider=tm;Ke.Element=vw;Ke.ForwardRef=rm;Ke.Fragment=Jp;Ke.Lazy=am;Ke.Memo=om;Ke.Portal=ww;Ke.Profiler=em;Ke.StrictMode=Zp;Ke.Suspense=im;Ke.SuspenseList=sm;Ke.isAsyncMode=function(){return!1};Ke.isConcurrentMode=function(){return!1};Ke.isContextConsumer=function(e){return wr(e)===nm};Ke.isContextProvider=function(e){return wr(e)===tm};Ke.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===vw};Ke.isForwardRef=function(e){return wr(e)===rm};Ke.isFragment=function(e){return wr(e)===Jp};Ke.isLazy=function(e){return wr(e)===am};Ke.isMemo=function(e){return wr(e)===om};Ke.isPortal=function(e){return wr(e)===ww};Ke.isProfiler=function(e){return wr(e)===em};Ke.isStrictMode=function(e){return wr(e)===Zp};Ke.isSuspense=function(e){return wr(e)===im};Ke.isSuspenseList=function(e){return wr(e)===sm};Ke.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Jp||e===em||e===Zp||e===im||e===sm||e===r5||typeof e=="object"&&e!==null&&(e.$$typeof===am||e.$$typeof===om||e.$$typeof===tm||e.$$typeof===nm||e.$$typeof===rm||e.$$typeof===YD||e.getModuleId!==void 0)};Ke.typeOf=wr;yw.exports=Ke;function i5(e){function t(F,V,Y,B,D){for(var le=0,W=0,we=0,me=0,Ve,_e,te=0,De=0,ke,ut=ke=Ve=0,Le=0,Ft=0,mo=0,yt=0,Dt=Y.length,Wt=Dt-1,xn,ye="",Oe="",Xl="",ls="",It;Le<Dt;){if(_e=Y.charCodeAt(Le),Le===Wt&&W+me+we+le!==0&&(W!==0&&(_e=W===47?10:47),me=we=le=0,Dt++,Wt++),W+me+we+le===0){if(Le===Wt&&(0<Ft&&(ye=ye.replace(m,"")),0<ye.trim().length)){switch(_e){case 32:case 9:case 59:case 13:case 10:break;default:ye+=Y.charAt(Le)}_e=59}switch(_e){case 123:for(ye=ye.trim(),Ve=ye.charCodeAt(0),ke=1,yt=++Le;Le<Dt;){switch(_e=Y.charCodeAt(Le)){case 123:ke++;break;case 125:ke--;break;case 47:switch(_e=Y.charCodeAt(Le+1)){case 42:case 47:e:{for(ut=Le+1;ut<Wt;++ut)switch(Y.charCodeAt(ut)){case 47:if(_e===42&&Y.charCodeAt(ut-1)===42&&Le+2!==ut){Le=ut+1;break e}break;case 10:if(_e===47){Le=ut+1;break e}}Le=ut}}break;case 91:_e++;case 40:_e++;case 34:case 39:for(;Le++<Wt&&Y.charCodeAt(Le)!==_e;);}if(ke===0)break;Le++}switch(ke=Y.substring(yt,Le),Ve===0&&(Ve=(ye=ye.replace(p,"").trim()).charCodeAt(0)),Ve){case 64:switch(0<Ft&&(ye=ye.replace(m,"")),_e=ye.charCodeAt(1),_e){case 100:case 109:case 115:case 45:Ft=V;break;default:Ft=xe}if(ke=t(V,Ft,ke,_e,D+1),yt=ke.length,0<M&&(Ft=n(xe,ye,mo),It=a(3,ke,Ft,V,X,J,yt,_e,D,B),ye=Ft.join(""),It!==void 0&&(yt=(ke=It.trim()).length)===0&&(_e=0,ke="")),0<yt)switch(_e){case 115:ye=ye.replace(R,o);case 100:case 109:case 45:ke=ye+"{"+ke+"}";break;case 107:ye=ye.replace(y,"$1 $2"),ke=ye+"{"+ke+"}",ke=oe===1||oe===2&&s("@"+ke,3)?"@-webkit-"+ke+"@"+ke:"@"+ke;break;default:ke=ye+ke,B===112&&(ke=(Oe+=ke,""))}else ke="";break;default:ke=t(V,n(V,ye,mo),ke,B,D+1)}Xl+=ke,ke=mo=Ft=ut=Ve=0,ye="",_e=Y.charCodeAt(++Le);break;case 125:case 59:if(ye=(0<Ft?ye.replace(m,""):ye).trim(),1<(yt=ye.length))switch(ut===0&&(Ve=ye.charCodeAt(0),Ve===45||96<Ve&&123>Ve)&&(yt=(ye=ye.replace(" ",":")).length),0<M&&(It=a(1,ye,V,F,X,J,Oe.length,B,D,B))!==void 0&&(yt=(ye=It.trim()).length)===0&&(ye="\0\0"),Ve=ye.charCodeAt(0),_e=ye.charCodeAt(1),Ve){case 0:break;case 64:if(_e===105||_e===99){ls+=ye+Y.charAt(Le);break}default:ye.charCodeAt(yt-1)!==58&&(Oe+=i(ye,Ve,_e,ye.charCodeAt(2)))}mo=Ft=ut=Ve=0,ye="",_e=Y.charCodeAt(++Le)}}switch(_e){case 13:case 10:W===47?W=0:1+Ve===0&&B!==107&&0<ye.length&&(Ft=1,ye+="\0"),0<M*b&&a(0,ye,V,F,X,J,Oe.length,B,D,B),J=1,X++;break;case 59:case 125:if(W+me+we+le===0){J++;break}default:switch(J++,xn=Y.charAt(Le),_e){case 9:case 32:if(me+le+W===0)switch(te){case 44:case 58:case 9:case 32:xn="";break;default:_e!==32&&(xn=" ")}break;case 0:xn="\\0";break;case 12:xn="\\f";break;case 11:xn="\\v";break;case 38:me+W+le===0&&(Ft=mo=1,xn="\f"+xn);break;case 108:if(me+W+le+ue===0&&0<ut)switch(Le-ut){case 2:te===112&&Y.charCodeAt(Le-3)===58&&(ue=te);case 8:De===111&&(ue=De)}break;case 58:me+W+le===0&&(ut=Le);break;case 44:W+we+me+le===0&&(Ft=1,xn+="\r");break;case 34:case 39:W===0&&(me=me===_e?0:me===0?_e:me);break;case 91:me+W+we===0&&le++;break;case 93:me+W+we===0&&le--;break;case 41:me+W+le===0&&we--;break;case 40:if(me+W+le===0){if(Ve===0)switch(2*te+3*De){case 533:break;default:Ve=1}we++}break;case 64:W+we+me+le+ut+ke===0&&(ke=1);break;case 42:case 47:if(!(0<me+le+we))switch(W){case 0:switch(2*_e+3*Y.charCodeAt(Le+1)){case 235:W=47;break;case 220:yt=Le,W=42}break;case 42:_e===47&&te===42&&yt+2!==Le&&(Y.charCodeAt(yt+2)===33&&(Oe+=Y.substring(yt,Le+1)),xn="",W=0)}}W===0&&(ye+=xn)}De=te,te=_e,Le++}if(yt=Oe.length,0<yt){if(Ft=V,0<M&&(It=a(2,Oe,Ft,F,X,J,yt,B,D,B),It!==void 0&&(Oe=It).length===0))return ls+Oe+Xl;if(Oe=Ft.join(",")+"{"+Oe+"}",oe*ue!==0){switch(oe!==2||s(Oe,2)||(ue=0),ue){case 111:Oe=Oe.replace(x,":-moz-$1")+Oe;break;case 112:Oe=Oe.replace(C,"::-webkit-input-$1")+Oe.replace(C,"::-moz-$1")+Oe.replace(C,":-ms-input-$1")+Oe}ue=0}}return ls+Oe+Xl}function n(F,V,Y){var B=V.trim().split(k);V=B;var D=B.length,le=F.length;switch(le){case 0:case 1:var W=0;for(F=le===0?"":F[0]+" ";W<D;++W)V[W]=r(F,V[W],Y).trim();break;default:var we=W=0;for(V=[];W<D;++W)for(var me=0;me<le;++me)V[we++]=r(F[me]+" ",B[W],Y).trim()}return V}function r(F,V,Y){var B=V.charCodeAt(0);switch(33>B&&(B=(V=V.trim()).charCodeAt(0)),B){case 38:return V.replace(S,"$1"+F.trim());case 58:return F.trim()+V.replace(S,"$1"+F.trim());default:if(0<1*Y&&0<V.indexOf("\f"))return V.replace(S,(F.charCodeAt(0)===58?"":"$1")+F.trim())}return F+V}function i(F,V,Y,B){var D=F+";",le=2*V+3*Y+4*B;if(le===944){F=D.indexOf(":",9)+1;var W=D.substring(F,D.length-1).trim();return W=D.substring(0,F).trim()+W+";",oe===1||oe===2&&s(W,1)?"-webkit-"+W+W:W}if(oe===0||oe===2&&!s(D,1))return D;switch(le){case 1015:return D.charCodeAt(10)===97?"-webkit-"+D+D:D;case 951:return D.charCodeAt(3)===116?"-webkit-"+D+D:D;case 963:return D.charCodeAt(5)===110?"-webkit-"+D+D:D;case 1009:if(D.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+D+D;case 978:return"-webkit-"+D+"-moz-"+D+D;case 1019:case 983:return"-webkit-"+D+"-moz-"+D+"-ms-"+D+D;case 883:if(D.charCodeAt(8)===45)return"-webkit-"+D+D;if(0<D.indexOf("image-set(",11))return D.replace(j,"$1-webkit-$2")+D;break;case 932:if(D.charCodeAt(4)===45)switch(D.charCodeAt(5)){case 103:return"-webkit-box-"+D.replace("-grow","")+"-webkit-"+D+"-ms-"+D.replace("grow","positive")+D;case 115:return"-webkit-"+D+"-ms-"+D.replace("shrink","negative")+D;case 98:return"-webkit-"+D+"-ms-"+D.replace("basis","preferred-size")+D}return"-webkit-"+D+"-ms-"+D+D;case 964:return"-webkit-"+D+"-ms-flex-"+D+D;case 1023:if(D.charCodeAt(8)!==99)break;return W=D.substring(D.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+W+"-webkit-"+D+"-ms-flex-pack"+W+D;case 1005:return w.test(D)?D.replace(v,":-webkit-")+D.replace(v,":-moz-")+D:D;case 1e3:switch(W=D.substring(13).trim(),V=W.indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(V)){case 226:W=D.replace(A,"tb");break;case 232:W=D.replace(A,"tb-rl");break;case 220:W=D.replace(A,"lr");break;default:return D}return"-webkit-"+D+"-ms-"+W+D;case 1017:if(D.indexOf("sticky",9)===-1)break;case 975:switch(V=(D=F).length-10,W=(D.charCodeAt(V)===33?D.substring(0,V):D).substring(F.indexOf(":",7)+1).trim(),le=W.charCodeAt(0)+(W.charCodeAt(7)|0)){case 203:if(111>W.charCodeAt(8))break;case 115:D=D.replace(W,"-webkit-"+W)+";"+D;break;case 207:case 102:D=D.replace(W,"-webkit-"+(102<le?"inline-":"")+"box")+";"+D.replace(W,"-webkit-"+W)+";"+D.replace(W,"-ms-"+W+"box")+";"+D}return D+";";case 938:if(D.charCodeAt(5)===45)switch(D.charCodeAt(6)){case 105:return W=D.replace("-items",""),"-webkit-"+D+"-webkit-box-"+W+"-ms-flex-"+W+D;case 115:return"-webkit-"+D+"-ms-flex-item-"+D.replace(O,"")+D;default:return"-webkit-"+D+"-ms-flex-line-pack"+D.replace("align-content","").replace(O,"")+D}break;case 973:case 989:if(D.charCodeAt(3)!==45||D.charCodeAt(4)===122)break;case 931:case 953:if(L.test(F)===!0)return(W=F.substring(F.indexOf(":")+1)).charCodeAt(0)===115?i(F.replace("stretch","fill-available"),V,Y,B).replace(":fill-available",":stretch"):D.replace(W,"-webkit-"+W)+D.replace(W,"-moz-"+W.replace("fill-",""))+D;break;case 962:if(D="-webkit-"+D+(D.charCodeAt(5)===102?"-ms-"+D:"")+D,Y+B===211&&D.charCodeAt(13)===105&&0<D.indexOf("transform",10))return D.substring(0,D.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+D}return D}function s(F,V){var Y=F.indexOf(V===1?":":"{"),B=F.substring(0,V!==3?Y:10);return Y=F.substring(Y+1,F.length-1),z(V!==2?B:B.replace(Z,"$1"),Y,V)}function o(F,V){var Y=i(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return Y!==V+";"?Y.replace(N," or ($1)").substring(4):"("+V+")"}function a(F,V,Y,B,D,le,W,we,me,Ve){for(var _e=0,te=V,De;_e<M;++_e)switch(De=ge[_e].call(d,F,te,Y,B,D,le,W,we,me,Ve)){case void 0:case!1:case!0:case null:break;default:te=De}if(te!==V)return te}function u(F){switch(F){case void 0:case null:M=ge.length=0;break;default:if(typeof F=="function")ge[M++]=F;else if(typeof F=="object")for(var V=0,Y=F.length;V<Y;++V)u(F[V]);else b=!!F|0}return u}function c(F){return F=F.prefix,F!==void 0&&(z=null,F?typeof F!="function"?oe=1:(oe=2,z=F):oe=0),c}function d(F,V){var Y=F;if(33>Y.charCodeAt(0)&&(Y=Y.trim()),ee=Y,Y=[ee],0<M){var B=a(-1,V,Y,Y,X,J,0,0,0,0);B!==void 0&&typeof B=="string"&&(V=B)}var D=t(xe,Y,V,0,0);return 0<M&&(B=a(-2,D,Y,Y,X,J,D.length,0,0,0),B!==void 0&&(D=B)),ee="",ue=0,J=X=1,D}var p=/^\0+/g,m=/[\0\r\f]/g,v=/: */g,w=/zoo|gra/,_=/([,: ])(transform)/g,k=/,\r+?/g,S=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,C=/::(place)/g,x=/:(read-only)/g,A=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,O=/-self|flex-/g,Z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,L=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,J=1,X=1,ue=0,oe=1,xe=[],ge=[],M=0,z=null,b=0,ee="";return d.use=u,d.set=c,e!==void 0&&c(e),d}var s5={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function o5(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var a5=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,GC=o5(function(e){return a5.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),WD={exports:{}},Qe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jt=typeof Symbol=="function"&&Symbol.for,_w=Jt?Symbol.for("react.element"):60103,Sw=Jt?Symbol.for("react.portal"):60106,lm=Jt?Symbol.for("react.fragment"):60107,um=Jt?Symbol.for("react.strict_mode"):60108,cm=Jt?Symbol.for("react.profiler"):60114,hm=Jt?Symbol.for("react.provider"):60109,dm=Jt?Symbol.for("react.context"):60110,Ew=Jt?Symbol.for("react.async_mode"):60111,fm=Jt?Symbol.for("react.concurrent_mode"):60111,pm=Jt?Symbol.for("react.forward_ref"):60112,mm=Jt?Symbol.for("react.suspense"):60113,l5=Jt?Symbol.for("react.suspense_list"):60120,gm=Jt?Symbol.for("react.memo"):60115,ym=Jt?Symbol.for("react.lazy"):60116,u5=Jt?Symbol.for("react.block"):60121,c5=Jt?Symbol.for("react.fundamental"):60117,h5=Jt?Symbol.for("react.responder"):60118,d5=Jt?Symbol.for("react.scope"):60119;function ir(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case _w:switch(e=e.type,e){case Ew:case fm:case lm:case cm:case um:case mm:return e;default:switch(e=e&&e.$$typeof,e){case dm:case pm:case ym:case gm:case hm:return e;default:return t}}case Sw:return t}}}function HD(e){return ir(e)===fm}Qe.AsyncMode=Ew;Qe.ConcurrentMode=fm;Qe.ContextConsumer=dm;Qe.ContextProvider=hm;Qe.Element=_w;Qe.ForwardRef=pm;Qe.Fragment=lm;Qe.Lazy=ym;Qe.Memo=gm;Qe.Portal=Sw;Qe.Profiler=cm;Qe.StrictMode=um;Qe.Suspense=mm;Qe.isAsyncMode=function(e){return HD(e)||ir(e)===Ew};Qe.isConcurrentMode=HD;Qe.isContextConsumer=function(e){return ir(e)===dm};Qe.isContextProvider=function(e){return ir(e)===hm};Qe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===_w};Qe.isForwardRef=function(e){return ir(e)===pm};Qe.isFragment=function(e){return ir(e)===lm};Qe.isLazy=function(e){return ir(e)===ym};Qe.isMemo=function(e){return ir(e)===gm};Qe.isPortal=function(e){return ir(e)===Sw};Qe.isProfiler=function(e){return ir(e)===cm};Qe.isStrictMode=function(e){return ir(e)===um};Qe.isSuspense=function(e){return ir(e)===mm};Qe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===lm||e===fm||e===cm||e===um||e===mm||e===l5||typeof e=="object"&&e!==null&&(e.$$typeof===ym||e.$$typeof===gm||e.$$typeof===hm||e.$$typeof===dm||e.$$typeof===pm||e.$$typeof===c5||e.$$typeof===h5||e.$$typeof===d5||e.$$typeof===u5)};Qe.typeOf=ir;WD.exports=Qe;var Cw=WD.exports,f5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},p5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},m5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},GD={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kw={};kw[Cw.ForwardRef]=m5;kw[Cw.Memo]=GD;function qC(e){return Cw.isMemo(e)?GD:kw[e.$$typeof]||f5}var g5=Object.defineProperty,y5=Object.getOwnPropertyNames,KC=Object.getOwnPropertySymbols,v5=Object.getOwnPropertyDescriptor,w5=Object.getPrototypeOf,QC=Object.prototype;function qD(e,t,n){if(typeof t!="string"){if(QC){var r=w5(t);r&&r!==QC&&qD(e,r,n)}var i=y5(t);KC&&(i=i.concat(KC(t)));for(var s=qC(e),o=qC(t),a=0;a<i.length;++a){var u=i[a];if(!p5[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var c=v5(t,u);try{g5(e,u,c)}catch{}}}}return e}var _5=qD;function Kr(){return(Kr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var XC=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},u0=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!yw.exports.typeOf(e)},jf=Object.freeze([]),Us=Object.freeze({});function vc(e){return typeof e=="function"}function JC(e){return e.displayName||e.name||"Component"}function Tw(e){return e&&typeof e.styledComponentId=="string"}var yl=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",xw=typeof window!="undefined"&&"HTMLElement"in window,S5=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),E5={};function th(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var C5=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&th(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),c=0,d=r.length;c<d;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Zd=new Map,Yf=new Map,Bu=1,Cd=function(e){if(Zd.has(e))return Zd.get(e);for(;Yf.has(Bu);)Bu++;var t=Bu++;return Zd.set(e,t),Yf.set(t,e),t},k5=function(e){return Yf.get(e)},T5=function(e,t){t>=Bu&&(Bu=t+1),Zd.set(e,t),Yf.set(t,e)},x5="style["+yl+'][data-styled-version="5.3.10"]',D5=new RegExp("^"+yl+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),I5=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},A5=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(D5);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(T5(c,u),I5(e,c,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},N5=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},KD=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,c=u.length;c>=0;c--){var d=u[c];if(d&&d.nodeType===1&&d.hasAttribute(yl))return d}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(yl,"active"),r.setAttribute("data-styled-version","5.3.10");var o=N5();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},O5=function(){function e(n){var r=this.element=KD(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}th(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),R5=function(){function e(n){var r=this.element=KD(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),b5=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ZC=xw,P5={isServer:!xw,useCSSOMInjection:!S5},Wf=function(){function e(n,r,i){n===void 0&&(n=Us),r===void 0&&(r={}),this.options=Kr({},P5,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&xw&&ZC&&(ZC=!1,function(s){for(var o=document.querySelectorAll(x5),a=0,u=o.length;a<u;a++){var c=o[a];c&&c.getAttribute(yl)!=="active"&&(A5(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Cd(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Kr({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new b5(o):s?new O5(o):new R5(o),new C5(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Cd(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Cd(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Cd(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=k5(o);if(a!==void 0){var u=n.names.get(a),c=r.getGroup(o);if(u&&c&&u.size){var d=yl+".g"+o+'[id="'+a+'"]',p="";u!==void 0&&u.forEach(function(m){m.length>0&&(p+=m+",")}),s+=""+c+d+'{content:"'+p+`"}/*!sc*/
`}}}return s}(this)},e}(),M5=/(a)(d)/gi,ek=function(e){return String.fromCharCode(e+(e>25?39:97))};function c0(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ek(t%52)+n;return(ek(t%52)+n).replace(M5,"$1-$2")}var Va=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},QD=function(e){return Va(5381,e)};function XD(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vc(n)&&!Tw(n))return!1}return!0}var L5=QD("5.3.10"),$5=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&XD(t),this.componentId=n,this.baseHash=Va(L5,n),this.baseStyle=r,Wf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Wo(this.rules,t,n,r).join(""),a=c0(Va(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,d=Va(this.baseHash,r.hash),p="",m=0;m<c;m++){var v=this.rules[m];if(typeof v=="string")p+=v;else if(v){var w=Wo(v,t,n,r),_=Array.isArray(w)?w.join(""):w;d=Va(d,_+m),p+=_}}if(p){var k=c0(d>>>0);if(!n.hasNameForId(i,k)){var S=r(p,"."+k,void 0,i);n.insertRules(i,k,S)}s.push(k)}}return s.join(" ")},e}(),F5=/^\s*\/\/.*$/gm,U5=[":","[",".","#"];function V5(e){var t,n,r,i,s=e===void 0?Us:e,o=s.options,a=o===void 0?Us:o,u=s.plugins,c=u===void 0?jf:u,d=new i5(a),p=[],m=function(_){function k(S){if(S)try{_(S+"}")}catch{}}return function(S,y,C,x,A,R,N,O,Z,L){switch(S){case 1:if(Z===0&&y.charCodeAt(0)===64)return _(y+";"),"";break;case 2:if(O===0)return y+"/*|*/";break;case 3:switch(O){case 102:case 112:return _(C[0]+y),"";default:return y+(L===0?"/*|*/":"")}case-2:y.split("/*|*/}").forEach(k)}}}(function(_){p.push(_)}),v=function(_,k,S){return k===0&&U5.indexOf(S[n.length])!==-1||S.match(i)?_:"."+t};function w(_,k,S,y){y===void 0&&(y="&");var C=_.replace(F5,""),x=k&&S?S+" "+k+" { "+C+" }":C;return t=y,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(S||!k?"":k,x)}return d.use([].concat(c,[function(_,k,S){_===2&&S.length&&S[0].lastIndexOf(n)>0&&(S[0]=S[0].replace(r,v))},m,function(_){if(_===-2){var k=p;return p=[],k}}])),w.hash=c.length?c.reduce(function(_,k){return k.name||th(15),Va(_,k.name)},5381).toString():"",w}var JD=qt.createContext();JD.Consumer;var ZD=qt.createContext(),B5=(ZD.Consumer,new Wf),h0=V5();function eI(){return $.exports.useContext(JD)||B5}function tI(){return $.exports.useContext(ZD)||h0}var z5=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=h0);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return th(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=h0),this.name+t.hash},e}(),j5=/([A-Z])/,Y5=/([A-Z])/g,W5=/^ms-/,H5=function(e){return"-"+e.toLowerCase()};function tk(e){return j5.test(e)?e.replace(Y5,H5).replace(W5,"-ms-"):e}var nk=function(e){return e==null||e===!1||e===""};function Wo(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,a=e.length;o<a;o+=1)(i=Wo(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(nk(e))return"";if(Tw(e))return"."+e.styledComponentId;if(vc(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return Wo(u,t,n,r)}var c;return e instanceof z5?n?(e.inject(n,r),e.getName(r)):e:u0(e)?function d(p,m){var v,w,_=[];for(var k in p)p.hasOwnProperty(k)&&!nk(p[k])&&(Array.isArray(p[k])&&p[k].isCss||vc(p[k])?_.push(tk(k)+":",p[k],";"):u0(p[k])?_.push.apply(_,d(p[k],k)):_.push(tk(k)+": "+(v=k,(w=p[k])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||v in s5||v.startsWith("--")?String(w).trim():w+"px")+";"));return m?[m+" {"].concat(_,["}"]):_}(e):e.toString()}var rk=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function nh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return vc(e)||u0(e)?rk(Wo(XC(jf,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:rk(Wo(XC(e,n)))}var nI=function(e,t,n){return n===void 0&&(n=Us),e.theme!==n.theme&&e.theme||t||n.theme},G5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,q5=/(^-|-$)/g;function Cy(e){return e.replace(G5,"-").replace(q5,"")}var rI=function(e){return c0(QD(e)>>>0)};function kd(e){return typeof e=="string"&&!0}var d0=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},K5=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Q5(e,t,n){var r=e[n];d0(t)&&d0(r)?iI(r,t):e[n]=t}function iI(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(d0(o))for(var a in o)K5(a)&&Q5(e,o[a],a)}return e}var Dw=qt.createContext();Dw.Consumer;var ky={};function sI(e,t,n){var r=Tw(e),i=!kd(e),s=t.attrs,o=s===void 0?jf:s,a=t.componentId,u=a===void 0?function(y,C){var x=typeof y!="string"?"sc":Cy(y);ky[x]=(ky[x]||0)+1;var A=x+"-"+rI("5.3.10"+x+ky[x]);return C?C+"-"+A:A}(t.displayName,t.parentComponentId):a,c=t.displayName,d=c===void 0?function(y){return kd(y)?"styled."+y:"Styled("+JC(y)+")"}(e):c,p=t.displayName&&t.componentId?Cy(t.displayName)+"-"+t.componentId:t.componentId||u,m=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(y,C,x){return e.shouldForwardProp(y,C,x)&&t.shouldForwardProp(y,C,x)}:e.shouldForwardProp);var w,_=new $5(n,p,r?e.componentStyle:void 0),k=_.isStatic&&o.length===0,S=function(y,C){return function(x,A,R,N){var O=x.attrs,Z=x.componentStyle,L=x.defaultProps,j=x.foldedComponentIds,J=x.shouldForwardProp,X=x.styledComponentId,ue=x.target,oe=function(B,D,le){B===void 0&&(B=Us);var W=Kr({},D,{theme:B}),we={};return le.forEach(function(me){var Ve,_e,te,De=me;for(Ve in vc(De)&&(De=De(W)),De)W[Ve]=we[Ve]=Ve==="className"?(_e=we[Ve],te=De[Ve],_e&&te?_e+" "+te:_e||te):De[Ve]}),[W,we]}(nI(A,$.exports.useContext(Dw),L)||Us,A,O),xe=oe[0],ge=oe[1],M=function(B,D,le,W){var we=eI(),me=tI(),Ve=D?B.generateAndInjectStyles(Us,we,me):B.generateAndInjectStyles(le,we,me);return Ve}(Z,N,xe),z=R,b=ge.$as||A.$as||ge.as||A.as||ue,ee=kd(b),F=ge!==A?Kr({},A,{},ge):A,V={};for(var Y in F)Y[0]!=="$"&&Y!=="as"&&(Y==="forwardedAs"?V.as=F[Y]:(J?J(Y,GC,b):!ee||GC(Y))&&(V[Y]=F[Y]));return A.style&&ge.style!==A.style&&(V.style=Kr({},A.style,{},ge.style)),V.className=Array.prototype.concat(j,X,M!==X?M:null,A.className,ge.className).filter(Boolean).join(" "),V.ref=z,$.exports.createElement(b,V)}(w,y,C,k)};return S.displayName=d,(w=qt.forwardRef(S)).attrs=m,w.componentStyle=_,w.displayName=d,w.shouldForwardProp=v,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):jf,w.styledComponentId=p,w.target=r?e.target:e,w.withComponent=function(y){var C=t.componentId,x=function(R,N){if(R==null)return{};var O,Z,L={},j=Object.keys(R);for(Z=0;Z<j.length;Z++)O=j[Z],N.indexOf(O)>=0||(L[O]=R[O]);return L}(t,["componentId"]),A=C&&C+"-"+(kd(y)?y:Cy(JC(y)));return sI(y,Kr({},x,{attrs:m,componentId:A}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?iI({},e.defaultProps,y):y}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&_5(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var f0=function(e){return function t(n,r,i){if(i===void 0&&(i=Us),!yw.exports.isValidElementType(r))return th(1,String(r));var s=function(){return n(r,i,nh.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,Kr({},i,{},o))},s.attrs=function(o){return t(n,r,Kr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(sI,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){f0[e]=f0(e)});var X5=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=XD(n),Wf.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,s){var o=s(Wo(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,s){n>2&&Wf.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},e}();function J5(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=nh.apply(void 0,[e].concat(n)),s="sc-global-"+rI(JSON.stringify(i)),o=new X5(i,s);function a(c){var d=eI(),p=tI(),m=$.exports.useContext(Dw),v=$.exports.useRef(d.allocateGSInstance(s)).current;return d.server&&u(v,c,d,m,p),$.exports.useLayoutEffect(function(){if(!d.server)return u(v,c,d,m,p),function(){return o.removeStyles(v,d)}},[v,c,d,m,p]),null}function u(c,d,p,m,v){if(o.isStatic)o.renderStyles(c,E5,p,v);else{var w=Kr({},d,{theme:nI(d,m,a.defaultProps)});o.renderStyles(c,w,p,v)}}return qt.memo(a)}var gt=f0;const Z5=J5`
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
`,eF=gt.div`
    min-height: 100vh;
`,tF=gt.header`
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
        font-size: clamp(20px, 2.5vw, 24px);
        letter-spacing: -0.035rem;
        font-weight: 700;
        cursor: pointer;
        font-style: italic;
      }
    }

    .navbar {
      display: flex;
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
            font-size: clamp(12px, 1.5vw, 13.5px);
            font-weight: 400;
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
      display: none;
      width: 24px;
      height: 24px;
      cursor: pointer;

       svg {
        width: 100%;
        height: 100%;
       }
    }

    @media screen and (max-width: 768px) {
      overflow-x: scroll;
      gap: 16px;

        .toggle {
          display: flex;
          align-items: center;
          justify-content: center;
        }
    }
  }
`;var oI={exports:{}},aI={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=$.exports;function nF(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rF=typeof Object.is=="function"?Object.is:nF,iF=vl.useState,sF=vl.useEffect,oF=vl.useLayoutEffect,aF=vl.useDebugValue;function lF(e,t){var n=t(),r=iF({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return oF(function(){i.value=n,i.getSnapshot=t,Ty(i)&&s({inst:i})},[e,n,t]),sF(function(){return Ty(i)&&s({inst:i}),e(function(){Ty(i)&&s({inst:i})})},[e]),aF(n),n}function Ty(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rF(e,n)}catch{return!0}}function uF(e,t){return t()}var cF=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?uF:lF;aI.useSyncExternalStore=vl.useSyncExternalStore!==void 0?vl.useSyncExternalStore:cF;oI.exports=aI;var lI={exports:{}},uI={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm=$.exports,hF=oI.exports;function dF(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fF=typeof Object.is=="function"?Object.is:dF,pF=hF.useSyncExternalStore,mF=vm.useRef,gF=vm.useEffect,yF=vm.useMemo,vF=vm.useDebugValue;uI.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=mF(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=yF(function(){function u(v){if(!c){if(c=!0,d=v,v=r(v),i!==void 0&&o.hasValue){var w=o.value;if(i(w,v))return p=w}return p=v}if(w=p,fF(d,v))return w;var _=r(v);return i!==void 0&&i(w,_)?w:(d=v,p=_)}var c=!1,d,p,m=n===void 0?null:n;return[function(){return u(t())},m===null?void 0:function(){return u(m())}]},[t,n,r,i]);var a=pF(e,s[0],s[1]);return gF(function(){o.hasValue=!0,o.value=a},[a]),vF(a),a};lI.exports=uI;function wF(e){e()}let cI=wF;const _F=e=>cI=e,SF=()=>cI,Ks=$.exports.createContext(null);function hI(){return $.exports.useContext(Ks)}const EF=()=>{throw new Error("uSES not initialized!")};let dI=EF;const CF=e=>{dI=e},kF=(e,t)=>e===t;function TF(e=Ks){const t=e===Ks?hI:()=>$.exports.useContext(e);return function(r,i=kF){const{store:s,subscription:o,getServerState:a}=t(),u=dI(o.addNestedSub,s.getState,a||s.getState,r,i);return $.exports.useDebugValue(u),u}}const Rt=TF();function xF(){const e=SF();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:t=s,function(){!i||t===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}const ik={notify(){},get:()=>[]};function DF(e,t){let n,r=ik;function i(p){return u(),r.subscribe(p)}function s(){r.notify()}function o(){d.onStateChange&&d.onStateChange()}function a(){return Boolean(n)}function u(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=xF())}function c(){n&&(n(),n=void 0,r.clear(),r=ik)}const d={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:u,tryUnsubscribe:c,getListeners:()=>r};return d}const IF=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",AF=IF?$.exports.useLayoutEffect:$.exports.useEffect;var wm={exports:{}},_m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NF=$.exports,OF=Symbol.for("react.element"),RF=Symbol.for("react.fragment"),bF=Object.prototype.hasOwnProperty,PF=NF.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MF={key:!0,ref:!0,__self:!0,__source:!0};function fI(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)bF.call(t,r)&&!MF.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:OF,type:e,key:s,ref:o,props:i,_owner:PF.current}}_m.Fragment=RF;_m.jsx=fI;_m.jsxs=fI;wm.exports=_m;const T=wm.exports.jsx,U=wm.exports.jsxs,wc=wm.exports.Fragment;function LF({store:e,context:t,children:n,serverState:r}){const i=$.exports.useMemo(()=>{const a=DF(e);return{store:e,subscription:a,getServerState:r?()=>r:void 0}},[e,r]),s=$.exports.useMemo(()=>e.getState(),[e]);return AF(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]),T((t||Ks).Provider,{value:i,children:n})}function pI(e=Ks){const t=e===Ks?hI:()=>$.exports.useContext(e);return function(){const{store:r}=t();return r}}const $F=pI();function FF(e=Ks){const t=e===Ks?$F:pI(e);return function(){return t().dispatch}}const Mn=FF();CF(lI.exports.useSyncExternalStoreWithSelector);_F(k1.exports.unstable_batchedUpdates);function Nr(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Qs(e){return!!e&&!!e[dt]}function Ki(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===GF}(e)||Array.isArray(e)||!!e[hk]||!!(!((t=e.constructor)===null||t===void 0)&&t[hk])||Iw(e)||Aw(e))}function Ho(e,t,n){n===void 0&&(n=!1),Ll(e)===0?(n?Object.keys:Xa)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Ll(e){var t=e[dt];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Iw(e)?2:Aw(e)?3:0}function Qa(e,t){return Ll(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function UF(e,t){return Ll(e)===2?e.get(t):e[t]}function mI(e,t,n){var r=Ll(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function gI(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Iw(e){return WF&&e instanceof Map}function Aw(e){return HF&&e instanceof Set}function Co(e){return e.o||e.t}function Nw(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=vI(e);delete t[dt];for(var n=Xa(t),r=0;r<n.length;r++){var i=n[r],s=t[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Ow(e,t){return t===void 0&&(t=!1),Rw(e)||Qs(e)||!Ki(e)||(Ll(e)>1&&(e.set=e.add=e.clear=e.delete=VF),Object.freeze(e),t&&Ho(e,function(n,r){return Ow(r,!0)},!0)),e}function VF(){Nr(2)}function Rw(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function ei(e){var t=y0[e];return t||Nr(18,e),t}function BF(e,t){y0[e]||(y0[e]=t)}function p0(){return _c}function xy(e,t){t&&(ei("Patches"),e.u=[],e.s=[],e.v=t)}function Hf(e){m0(e),e.p.forEach(zF),e.p=null}function m0(e){e===_c&&(_c=e.l)}function sk(e){return _c={p:[],l:_c,h:e,m:!0,_:0}}function zF(e){var t=e[dt];t.i===0||t.i===1?t.j():t.g=!0}function Dy(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||ei("ES5").S(t,e,r),r?(n[dt].P&&(Hf(t),Nr(4)),Ki(e)&&(e=Gf(t,e),t.l||qf(t,e)),t.u&&ei("Patches").M(n[dt].t,e,t.u,t.s)):e=Gf(t,n,[]),Hf(t),t.u&&t.v(t.u,t.s),e!==yI?e:void 0}function Gf(e,t,n){if(Rw(t))return t;var r=t[dt];if(!r)return Ho(t,function(a,u){return ok(e,r,t,a,u,n)},!0),t;if(r.A!==e)return t;if(!r.P)return qf(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Nw(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),Ho(s,function(a,u){return ok(e,r,i,a,u,n,o)}),qf(e,i,!1),n&&e.u&&ei("Patches").N(r,n,e.u,e.s)}return r.o}function ok(e,t,n,r,i,s,o){if(Qs(i)){var a=Gf(e,i,s&&t&&t.i!==3&&!Qa(t.R,r)?s.concat(r):void 0);if(mI(n,r,a),!Qs(a))return;e.m=!1}else o&&n.add(i);if(Ki(i)&&!Rw(i)){if(!e.h.D&&e._<1)return;Gf(e,i),t&&t.A.l||qf(e,i)}}function qf(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Ow(t,n)}function Iy(e,t){var n=e[dt];return(n?Co(n):e)[t]}function ak(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function vs(e){e.P||(e.P=!0,e.l&&vs(e.l))}function Ay(e){e.o||(e.o=Nw(e.t))}function g0(e,t,n){var r=Iw(t)?ei("MapSet").F(t,n):Aw(t)?ei("MapSet").T(t,n):e.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:p0(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},u=a,c=Sc;o&&(u=[a],c=ku);var d=Proxy.revocable(u,c),p=d.revoke,m=d.proxy;return a.k=m,a.j=p,m}(t,n):ei("ES5").J(t,n);return(n?n.A:p0()).p.push(r),r}function jF(e){return Qs(e)||Nr(22,e),function t(n){if(!Ki(n))return n;var r,i=n[dt],s=Ll(n);if(i){if(!i.P&&(i.i<4||!ei("ES5").K(i)))return i.t;i.I=!0,r=lk(n,s),i.I=!1}else r=lk(n,s);return Ho(r,function(o,a){i&&UF(i.t,o)===a||mI(r,o,t(a))}),s===3?new Set(r):r}(e)}function lk(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Nw(e)}function YF(){function e(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var u=this[dt];return Sc.get(u,s)},set:function(u){var c=this[dt];Sc.set(c,s,u)}},a}function t(s){for(var o=s.length-1;o>=0;o--){var a=s[o][dt];if(!a.P)switch(a.i){case 5:r(a)&&vs(a);break;case 4:n(a)&&vs(a)}}}function n(s){for(var o=s.t,a=s.k,u=Xa(a),c=u.length-1;c>=0;c--){var d=u[c];if(d!==dt){var p=o[d];if(p===void 0&&!Qa(o,d))return!0;var m=a[d],v=m&&m[dt];if(v?v.t!==p:!gI(m,p))return!0}}var w=!!o[dt];return u.length!==Xa(o).length+(w?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var u=0;u<o.length;u++)if(!o.hasOwnProperty(u))return!0;return!1}var i={};BF("ES5",{J:function(s,o){var a=Array.isArray(s),u=function(d,p){if(d){for(var m=Array(p.length),v=0;v<p.length;v++)Object.defineProperty(m,""+v,e(v,!0));return m}var w=vI(p);delete w[dt];for(var _=Xa(w),k=0;k<_.length;k++){var S=_[k];w[S]=e(S,d||!!w[S].enumerable)}return Object.create(Object.getPrototypeOf(p),w)}(a,s),c={i:a?5:4,A:o?o.A:p0(),P:!1,I:!1,R:{},l:o,t:s,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,dt,{value:c,writable:!0}),u},S:function(s,o,a){a?Qs(o)&&o[dt].A===s&&t(s.p):(s.u&&function u(c){if(c&&typeof c=="object"){var d=c[dt];if(d){var p=d.t,m=d.k,v=d.R,w=d.i;if(w===4)Ho(m,function(C){C!==dt&&(p[C]!==void 0||Qa(p,C)?v[C]||u(m[C]):(v[C]=!0,vs(d)))}),Ho(p,function(C){m[C]!==void 0||Qa(m,C)||(v[C]=!1,vs(d))});else if(w===5){if(r(d)&&(vs(d),v.length=!0),m.length<p.length)for(var _=m.length;_<p.length;_++)v[_]=!1;else for(var k=p.length;k<m.length;k++)v[k]=!0;for(var S=Math.min(m.length,p.length),y=0;y<S;y++)m.hasOwnProperty(y)||(v[y]=!0),v[y]===void 0&&u(m[y])}}}}(s.p[0]),t(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var uk,_c,bw=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",WF=typeof Map!="undefined",HF=typeof Set!="undefined",ck=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",yI=bw?Symbol.for("immer-nothing"):((uk={})["immer-nothing"]=!0,uk),hk=bw?Symbol.for("immer-draftable"):"__$immer_draftable",dt=bw?Symbol.for("immer-state"):"__$immer_state",GF=""+Object.prototype.constructor,Xa=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,vI=Object.getOwnPropertyDescriptors||function(e){var t={};return Xa(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},y0={},Sc={get:function(e,t){if(t===dt)return e;var n=Co(e);if(!Qa(n,t))return function(i,s,o){var a,u=ak(s,o);return u?"value"in u?u.value:(a=u.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Ki(r)?r:r===Iy(e.t,t)?(Ay(e),e.o[t]=g0(e.A.h,r,e)):r},has:function(e,t){return t in Co(e)},ownKeys:function(e){return Reflect.ownKeys(Co(e))},set:function(e,t,n){var r=ak(Co(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Iy(Co(e),t),s=i==null?void 0:i[dt];if(s&&s.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(gI(n,i)&&(n!==void 0||Qa(e.t,t)))return!0;Ay(e),vs(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Iy(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Ay(e),vs(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Co(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Nr(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Nr(12)}},ku={};Ho(Sc,function(e,t){ku[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),ku.deleteProperty=function(e,t){return ku.set.call(this,e,t,void 0)},ku.set=function(e,t,n){return Sc.set.call(this,e[0],t,n,e[0])};var qF=function(){function e(n){var r=this;this.O=ck,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var u=r;return function(_){var k=this;_===void 0&&(_=a);for(var S=arguments.length,y=Array(S>1?S-1:0),C=1;C<S;C++)y[C-1]=arguments[C];return u.produce(_,function(x){var A;return(A=s).call.apply(A,[k,x].concat(y))})}}var c;if(typeof s!="function"&&Nr(6),o!==void 0&&typeof o!="function"&&Nr(7),Ki(i)){var d=sk(r),p=g0(r,i,void 0),m=!0;try{c=s(p),m=!1}finally{m?Hf(d):m0(d)}return typeof Promise!="undefined"&&c instanceof Promise?c.then(function(_){return xy(d,o),Dy(_,d)},function(_){throw Hf(d),_}):(xy(d,o),Dy(c,d))}if(!i||typeof i!="object"){if((c=s(i))===void 0&&(c=i),c===yI&&(c=void 0),r.D&&Ow(c,!0),o){var v=[],w=[];ei("Patches").M(i,c,v,w),o(v,w)}return c}Nr(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(c){for(var d=arguments.length,p=Array(d>1?d-1:0),m=1;m<d;m++)p[m-1]=arguments[m];return r.produceWithPatches(c,function(v){return i.apply(void 0,[v].concat(p))})};var o,a,u=r.produce(i,s,function(c,d){o=c,a=d});return typeof Promise!="undefined"&&u instanceof Promise?u.then(function(c){return[c,o,a]}):[u,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Ki(n)||Nr(8),Qs(n)&&(n=jF(n));var r=sk(this),i=g0(this,n,void 0);return i[dt].C=!0,m0(r),i},t.finishDraft=function(n,r){var i=n&&n[dt],s=i.A;return xy(s,r),Dy(void 0,s)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!ck&&Nr(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=ei("Patches").$;return Qs(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},e}(),er=new qF,wI=er.produce;er.produceWithPatches.bind(er);er.setAutoFreeze.bind(er);er.setUseProxies.bind(er);er.applyPatches.bind(er);er.createDraft.bind(er);er.finishDraft.bind(er);function Ec(e){return Ec=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ec(e)}function KF(e,t){if(Ec(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Ec(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function QF(e){var t=KF(e,"string");return Ec(t)==="symbol"?t:String(t)}function XF(e,t,n){return t=QF(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dk(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function fk(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dk(Object(n),!0).forEach(function(r){XF(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dk(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dn(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var pk=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Ny=function(){return Math.random().toString(36).substring(7).split("").join(".")},Kf={INIT:"@@redux/INIT"+Ny(),REPLACE:"@@redux/REPLACE"+Ny(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ny()}};function JF(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function _I(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(dn(0));if(typeof t=="function"&&typeof n=="undefined"&&(n=t,t=void 0),typeof n!="undefined"){if(typeof n!="function")throw new Error(dn(1));return n(_I)(e,t)}if(typeof e!="function")throw new Error(dn(2));var i=e,s=t,o=[],a=o,u=!1;function c(){a===o&&(a=o.slice())}function d(){if(u)throw new Error(dn(3));return s}function p(_){if(typeof _!="function")throw new Error(dn(4));if(u)throw new Error(dn(5));var k=!0;return c(),a.push(_),function(){if(!!k){if(u)throw new Error(dn(6));k=!1,c();var y=a.indexOf(_);a.splice(y,1),o=null}}}function m(_){if(!JF(_))throw new Error(dn(7));if(typeof _.type=="undefined")throw new Error(dn(8));if(u)throw new Error(dn(9));try{u=!0,s=i(s,_)}finally{u=!1}for(var k=o=a,S=0;S<k.length;S++){var y=k[S];y()}return _}function v(_){if(typeof _!="function")throw new Error(dn(10));i=_,m({type:Kf.REPLACE})}function w(){var _,k=p;return _={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(dn(11));function C(){y.next&&y.next(d())}C();var x=k(C);return{unsubscribe:x}}},_[pk]=function(){return this},_}return m({type:Kf.INIT}),r={dispatch:m,subscribe:p,getState:d,replaceReducer:v},r[pk]=w,r}function ZF(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Kf.INIT});if(typeof r=="undefined")throw new Error(dn(12));if(typeof n(void 0,{type:Kf.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(dn(13))})}function eU(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var s=Object.keys(n),o;try{ZF(n)}catch(a){o=a}return function(u,c){if(u===void 0&&(u={}),o)throw o;for(var d=!1,p={},m=0;m<s.length;m++){var v=s[m],w=n[v],_=u[v],k=w(_,c);if(typeof k=="undefined")throw c&&c.type,new Error(dn(14));p[v]=k,d=d||k!==_}return d=d||s.length!==Object.keys(u).length,d?p:u}}function Qf(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function tU(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(dn(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=t.map(function(u){return u(o)});return s=Qf.apply(void 0,a)(i.dispatch),fk(fk({},i),{},{dispatch:s})}}}function SI(e){var t=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,e):o(a)}}};return t}var EI=SI();EI.withExtraArgument=SI;var mk=EI,CI=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),nU=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(d){return u([c,d])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(d){c=[6,d],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},wl=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},rU=Object.defineProperty,iU=Object.defineProperties,sU=Object.getOwnPropertyDescriptors,gk=Object.getOwnPropertySymbols,oU=Object.prototype.hasOwnProperty,aU=Object.prototype.propertyIsEnumerable,yk=function(e,t,n){return t in e?rU(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Vs=function(e,t){for(var n in t||(t={}))oU.call(t,n)&&yk(e,n,t[n]);if(gk)for(var r=0,i=gk(t);r<i.length;r++){var n=i[r];aU.call(t,n)&&yk(e,n,t[n])}return e},Oy=function(e,t){return iU(e,sU(t))},lU=function(e,t,n){return new Promise(function(r,i){var s=function(u){try{a(n.next(u))}catch(c){i(c)}},o=function(u){try{a(n.throw(u))}catch(c){i(c)}},a=function(u){return u.done?r(u.value):Promise.resolve(u.value).then(s,o)};a((n=n.apply(e,t)).next())})},uU=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Qf:Qf.apply(null,arguments)};function cU(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var hU=function(e){CI(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,wl([void 0],n[0].concat(this)))):new(t.bind.apply(t,wl([void 0],n.concat(this))))},t}(Array),dU=function(e){CI(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,wl([void 0],n[0].concat(this)))):new(t.bind.apply(t,wl([void 0],n.concat(this))))},t}(Array);function v0(e){return Ki(e)?wI(e,function(){}):e}function fU(e){return typeof e=="boolean"}function pU(){return function(t){return mU(t)}}function mU(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new hU;return n&&(fU(n)?r.push(mk):r.push(mk.withExtraArgument(n.extraArgument))),r}var gU=!0;function yU(e){var t=pU(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?t():s,a=n.devTools,u=a===void 0?!0:a,c=n.preloadedState,d=c===void 0?void 0:c,p=n.enhancers,m=p===void 0?void 0:p,v;if(typeof i=="function")v=i;else if(cU(i))v=eU(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var w=o;typeof w=="function"&&(w=w(t));var _=tU.apply(void 0,w),k=Qf;u&&(k=uU(Vs({trace:!gU},typeof u=="object"&&u)));var S=new dU(_),y=S;Array.isArray(m)?y=wl([_],m):typeof m=="function"&&(y=m(S));var C=k.apply(void 0,y);return _I(v,d,C)}function Bs(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var s=t.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return Vs(Vs({type:e,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function kI(e){var t={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return e(i),[t,n,r]}function vU(e){return typeof e=="function"}function wU(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?kI(t):[t,n,r],s=i[0],o=i[1],a=i[2],u;if(vU(e))u=function(){return v0(e())};else{var c=v0(e);u=function(){return c}}function d(p,m){p===void 0&&(p=u());var v=wl([s[m.type]],o.filter(function(w){var _=w.matcher;return _(m)}).map(function(w){var _=w.reducer;return _}));return v.filter(function(w){return!!w}).length===0&&(v=[a]),v.reduce(function(w,_){if(_)if(Qs(w)){var k=w,S=_(k,m);return S===void 0?w:S}else{if(Ki(w))return wI(w,function(y){return _(y,m)});var S=_(w,m);if(S===void 0){if(w===null)return w;throw Error("A case reducer on a non-draftable value must not return undefined")}return S}return w},p)}return d.getInitialState=u,d}function _U(e,t){return e+"/"+t}function lo(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var n=typeof e.initialState=="function"?e.initialState:v0(e.initialState),r=e.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(d){var p=r[d],m=_U(t,d),v,w;"reducer"in p?(v=p.reducer,w=p.prepare):v=p,s[d]=v,o[m]=v,a[d]=w?Bs(m,w):Bs(m)});function u(){var d=typeof e.extraReducers=="function"?kI(e.extraReducers):[e.extraReducers],p=d[0],m=p===void 0?{}:p,v=d[1],w=v===void 0?[]:v,_=d[2],k=_===void 0?void 0:_,S=Vs(Vs({},m),o);return wU(n,function(y){for(var C in S)y.addCase(C,S[C]);for(var x=0,A=w;x<A.length;x++){var R=A[x];y.addMatcher(R.matcher,R.reducer)}k&&y.addDefaultCase(k)})}var c;return{name:t,reducer:function(d,p){return c||(c=u()),c(d,p)},actions:a,caseReducers:s,getInitialState:function(){return c||(c=u()),c.getInitialState()}}}var SU="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",EU=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=SU[Math.random()*64|0];return t},CU=["name","message","stack","code"],Ry=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),vk=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),kU=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=CU;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},jn=function(){function e(t,n,r){var i=Bs(t+"/fulfilled",function(c,d,p,m){return{payload:c,meta:Oy(Vs({},m||{}),{arg:p,requestId:d,requestStatus:"fulfilled"})}}),s=Bs(t+"/pending",function(c,d,p){return{payload:void 0,meta:Oy(Vs({},p||{}),{arg:d,requestId:c,requestStatus:"pending"})}}),o=Bs(t+"/rejected",function(c,d,p,m,v){return{payload:m,error:(r&&r.serializeError||kU)(c||"Rejected"),meta:Oy(Vs({},v||{}),{arg:p,requestId:d,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),a=typeof AbortController!="undefined"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function u(c){return function(d,p,m){var v=r!=null&&r.idGenerator?r.idGenerator(c):EU(),w=new a,_;function k(y){_=y,w.abort()}var S=function(){return lU(this,null,function(){var y,C,x,A,R,N,O;return nU(this,function(Z){switch(Z.label){case 0:return Z.trys.push([0,4,,5]),A=(y=r==null?void 0:r.condition)==null?void 0:y.call(r,c,{getState:p,extra:m}),xU(A)?[4,A]:[3,2];case 1:A=Z.sent(),Z.label=2;case 2:if(A===!1||w.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return R=new Promise(function(L,j){return w.signal.addEventListener("abort",function(){return j({name:"AbortError",message:_||"Aborted"})})}),d(s(v,c,(C=r==null?void 0:r.getPendingMeta)==null?void 0:C.call(r,{requestId:v,arg:c},{getState:p,extra:m}))),[4,Promise.race([R,Promise.resolve(n(c,{dispatch:d,getState:p,extra:m,requestId:v,signal:w.signal,abort:k,rejectWithValue:function(L,j){return new Ry(L,j)},fulfillWithValue:function(L,j){return new vk(L,j)}})).then(function(L){if(L instanceof Ry)throw L;return L instanceof vk?i(L.payload,v,c,L.meta):i(L,v,c)})])];case 3:return x=Z.sent(),[3,5];case 4:return N=Z.sent(),x=N instanceof Ry?o(null,v,c,N.payload,N.meta):o(N,v,c),[3,5];case 5:return O=r&&!r.dispatchConditionRejection&&o.match(x)&&x.meta.condition,O||d(x),[2,x]}})})}();return Object.assign(S,{abort:k,requestId:v,arg:c,unwrap:function(){return S.then(TU)}})}}return Object.assign(u,{pending:s,rejected:o,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function TU(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function xU(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var DU=function(e){return e&&typeof e.match=="function"},TI=function(e,t){return DU(e)?e.match(t):e(t)};function IU(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(n){return e.some(function(r){return TI(r,n)})}}function wk(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(n){return e.every(function(r){return TI(r,n)})}}function AU(e,t){if(!e||!e.meta)return!1;var n=typeof e.meta.requestId=="string",r=t.indexOf(e.meta.requestStatus)>-1;return n&&r}function xI(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function w0(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length===0?function(n){return AU(n,["rejected"])}:xI(e)?function(n){var r=e.map(function(s){return s.rejected}),i=IU.apply(void 0,r);return i(n)}:w0()(e[0])}function Pw(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=function(r){return r&&r.meta&&r.meta.rejectedWithValue};return e.length===0?function(r){var i=wk(w0.apply(void 0,e),n);return i(r)}:xI(e)?function(r){var i=wk(w0.apply(void 0,e),n);return i(r)}:Pw()(e[0])}var Mw="listenerMiddleware";Bs(Mw+"/add");Bs(Mw+"/removeAll");Bs(Mw+"/remove");var _k;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window!="undefined"?window:typeof global!="undefined"?global:globalThis);YF();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const DI=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},NU=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},II={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,d=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,v=c&63;u||(v=64,o||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(DI(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):NU(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new OU;const m=s<<2|a>>4;if(r.push(m),c!==64){const v=a<<4&240|c>>2;if(r.push(v),p!==64){const w=c<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class OU extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RU=function(e){const t=DI(e);return II.encodeByteArray(t,!0)},Xf=function(e){return RU(e).replace(/\./g,"")},AI=function(e){try{return II.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function bU(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PU=()=>bU().__FIREBASE_DEFAULTS__,MU=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},LU=()=>{if(typeof document=="undefined")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&AI(e[1]);return t&&JSON.parse(t)},Sm=()=>{try{return PU()||MU()||LU()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},NI=e=>{var t,n;return(n=(t=Sm())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},OI=e=>{const t=NI(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},$U=()=>{var e;return(e=Sm())===null||e===void 0?void 0:e.config},RI=e=>{var t;return(t=Sm())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FU{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function bI(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Xf(JSON.stringify(n)),Xf(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UU(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(En())}function VU(){var e;const t=(e=Sm())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BU(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function zU(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jU(){const e=En();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function YU(){try{return typeof indexedDB=="object"}catch{return!1}}function WU(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HU="FirebaseError";class hi extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=HU,Object.setPrototypeOf(this,hi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rh.prototype.create)}}class rh{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?GU(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hi(i,a,r)}}function GU(e,t){return e.replace(qU,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const qU=/\{\$([^}]+)}/g;function KU(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Jf(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Sk(s)&&Sk(o)){if(!Jf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sk(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Tu(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function xu(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function QU(e,t){const n=new XU(e,t);return n.subscribe.bind(n)}class XU{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");JU(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=by),i.error===void 0&&(i.error=by),i.complete===void 0&&(i.complete=by);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JU(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function by(){}/**
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
 */function Qt(e){return e&&e._delegate?e._delegate:e}class Xs{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class ZU{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new FU;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(t9(t))try{this.getOrInitializeService({instanceIdentifier:ko})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=ko){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ko){return this.instances.has(t)}getOptions(t=ko){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e9(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ko){return this.component?this.component.multipleInstances?t:ko:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function e9(e){return e===ko?void 0:e}function t9(e){return e.instantiationMode==="EAGER"}/**
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
 */class n9{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ZU(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(je||(je={}));const r9={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},i9=je.INFO,s9={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},o9=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=s9[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Lw{constructor(t){this.name=t,this._logLevel=i9,this._logHandler=o9,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in je))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?r9[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...t),this._logHandler(this,je.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...t),this._logHandler(this,je.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,je.INFO,...t),this._logHandler(this,je.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,je.WARN,...t),this._logHandler(this,je.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...t),this._logHandler(this,je.ERROR,...t)}}const a9=(e,t)=>t.some(n=>e instanceof n);let Ek,Ck;function l9(){return Ek||(Ek=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u9(){return Ck||(Ck=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const PI=new WeakMap,_0=new WeakMap,MI=new WeakMap,Py=new WeakMap,$w=new WeakMap;function c9(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(zs(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&PI.set(n,e)}).catch(()=>{}),$w.set(t,e),t}function h9(e){if(_0.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});_0.set(e,t)}let S0={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return _0.get(e);if(t==="objectStoreNames")return e.objectStoreNames||MI.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zs(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function d9(e){S0=e(S0)}function f9(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(My(this),t,...n);return MI.set(r,t.sort?t.sort():[t]),zs(r)}:u9().includes(e)?function(...t){return e.apply(My(this),t),zs(PI.get(this))}:function(...t){return zs(e.apply(My(this),t))}}function p9(e){return typeof e=="function"?f9(e):(e instanceof IDBTransaction&&h9(e),a9(e,l9())?new Proxy(e,S0):e)}function zs(e){if(e instanceof IDBRequest)return c9(e);if(Py.has(e))return Py.get(e);const t=p9(e);return t!==e&&(Py.set(e,t),$w.set(t,e)),t}const My=e=>$w.get(e);function m9(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=zs(o);return r&&o.addEventListener("upgradeneeded",u=>{r(zs(o.result),u.oldVersion,u.newVersion,zs(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const g9=["get","getKey","getAll","getAllKeys","count"],y9=["put","add","delete","clear"],Ly=new Map;function kk(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ly.get(t))return Ly.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=y9.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||g9.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Ly.set(t,s),s}d9(e=>({...e,get:(t,n,r)=>kk(t,n)||e.get(t,n,r),has:(t,n)=>!!kk(t,n)||e.has(t,n)}));/**
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
 */class v9{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(w9(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function w9(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const E0="@firebase/app",Tk="0.9.9";/**
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
 */const Go=new Lw("@firebase/app"),_9="@firebase/app-compat",S9="@firebase/analytics-compat",E9="@firebase/analytics",C9="@firebase/app-check-compat",k9="@firebase/app-check",T9="@firebase/auth",x9="@firebase/auth-compat",D9="@firebase/database",I9="@firebase/database-compat",A9="@firebase/functions",N9="@firebase/functions-compat",O9="@firebase/installations",R9="@firebase/installations-compat",b9="@firebase/messaging",P9="@firebase/messaging-compat",M9="@firebase/performance",L9="@firebase/performance-compat",$9="@firebase/remote-config",F9="@firebase/remote-config-compat",U9="@firebase/storage",V9="@firebase/storage-compat",B9="@firebase/firestore",z9="@firebase/firestore-compat",j9="firebase",Y9="9.21.0";/**
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
 */const C0="[DEFAULT]",W9={[E0]:"fire-core",[_9]:"fire-core-compat",[E9]:"fire-analytics",[S9]:"fire-analytics-compat",[k9]:"fire-app-check",[C9]:"fire-app-check-compat",[T9]:"fire-auth",[x9]:"fire-auth-compat",[D9]:"fire-rtdb",[I9]:"fire-rtdb-compat",[A9]:"fire-fn",[N9]:"fire-fn-compat",[O9]:"fire-iid",[R9]:"fire-iid-compat",[b9]:"fire-fcm",[P9]:"fire-fcm-compat",[M9]:"fire-perf",[L9]:"fire-perf-compat",[$9]:"fire-rc",[F9]:"fire-rc-compat",[U9]:"fire-gcs",[V9]:"fire-gcs-compat",[B9]:"fire-fst",[z9]:"fire-fst-compat","fire-js":"fire-js",[j9]:"fire-js-all"};/**
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
 */const Zf=new Map,k0=new Map;function H9(e,t){try{e.container.addComponent(t)}catch(n){Go.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function qo(e){const t=e.name;if(k0.has(t))return Go.debug(`There were multiple attempts to register component ${t}.`),!1;k0.set(t,e);for(const n of Zf.values())H9(n,e);return!0}function Em(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const G9={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},js=new rh("app","Firebase",G9);/**
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
 */class q9{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw js.create("app-deleted",{appName:this._name})}}/**
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
 */const oa=Y9;function LI(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:C0,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw js.create("bad-app-name",{appName:String(i)});if(n||(n=$U()),!n)throw js.create("no-options");const s=Zf.get(i);if(s){if(Jf(n,s.options)&&Jf(r,s.config))return s;throw js.create("duplicate-app",{appName:i})}const o=new n9(i);for(const u of k0.values())o.addComponent(u);const a=new q9(n,r,o);return Zf.set(i,a),a}function Fw(e=C0){const t=Zf.get(e);if(!t&&e===C0)return LI();if(!t)throw js.create("no-app",{appName:e});return t}function ti(e,t,n){var r;let i=(r=W9[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Go.warn(a.join(" "));return}qo(new Xs(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const K9="firebase-heartbeat-database",Q9=1,Cc="firebase-heartbeat-store";let $y=null;function $I(){return $y||($y=m9(K9,Q9,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Cc)}}}).catch(e=>{throw js.create("idb-open",{originalErrorMessage:e.message})})),$y}async function X9(e){try{return(await $I()).transaction(Cc).objectStore(Cc).get(FI(e))}catch(t){if(t instanceof hi)Go.warn(t.message);else{const n=js.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Go.warn(n.message)}}}async function xk(e,t){try{const r=(await $I()).transaction(Cc,"readwrite");return await r.objectStore(Cc).put(t,FI(e)),r.done}catch(n){if(n instanceof hi)Go.warn(n.message);else{const r=js.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Go.warn(r.message)}}}function FI(e){return`${e.name}!${e.options.appId}`}/**
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
 */const J9=1024,Z9=30*24*60*60*1e3;class e8{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new n8(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Dk();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Z9}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dk(),{heartbeatsToSend:n,unsentEntries:r}=t8(this._heartbeatsCache.heartbeats),i=Xf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Dk(){return new Date().toISOString().substring(0,10)}function t8(e,t=J9){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ik(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ik(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class n8{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YU()?WU().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await X9(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xk(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xk(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ik(e){return Xf(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function r8(e){qo(new Xs("platform-logger",t=>new v9(t),"PRIVATE")),qo(new Xs("heartbeat",t=>new e8(t),"PRIVATE")),ti(E0,Tk,e),ti(E0,Tk,"esm2017"),ti("fire-js","")}r8("");function Uw(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function UI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const i8=UI,VI=new rh("auth","Firebase",UI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=new Lw("@firebase/auth");function s8(e,...t){ep.logLevel<=je.WARN&&ep.warn(`Auth (${oa}): ${e}`,...t)}function ef(e,...t){ep.logLevel<=je.ERROR&&ep.error(`Auth (${oa}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(e,...t){throw Vw(e,...t)}function ni(e,...t){return Vw(e,...t)}function BI(e,t,n){const r=Object.assign(Object.assign({},i8()),{[t]:n});return new rh("auth","Firebase",r).create(t,{appName:e.name})}function o8(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&yr(e,"argument-error"),BI(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vw(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return VI.create(e,...t)}function ve(e,t,...n){if(!e)throw Vw(t,...n)}function bi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ef(t),new Error(t)}function Qi(e,t){e||bi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function a8(){return Ak()==="http:"||Ak()==="https:"}function Ak(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l8(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(a8()||BU()||"connection"in navigator)?navigator.onLine:!0}function u8(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,n){this.shortDelay=t,this.longDelay=n,Qi(n>t,"Short delay should be less than long delay!"),this.isMobile=UU()||zU()}get(){return l8()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(e,t){Qi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;bi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;bi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;bi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c8={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h8=new sh(3e4,6e4);function $l(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Fl(e,t,n,r,i={}){return jI(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=ih(Object.assign({key:e.config.apiKey},o)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),zI.fetch()(YI(e,e.config.apiHost,n,a),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},s))})}async function jI(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},c8),t);try{const i=new d8(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Td(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Td(e,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Td(e,"email-already-in-use",o);if(u==="USER_DISABLED")throw Td(e,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw BI(e,d,c);yr(e,d)}}catch(i){if(i instanceof hi)throw i;yr(e,"network-request-failed",{message:String(i)})}}async function oh(e,t,n,r,i={}){const s=await Fl(e,t,n,r,i);return"mfaPendingCredential"in s&&yr(e,"multi-factor-auth-required",{_serverResponse:s}),s}function YI(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Bw(e.config,i):`${e.config.apiScheme}://${i}`}class d8{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ni(this.auth,"network-request-failed")),h8.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Td(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ni(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f8(e,t){return Fl(e,"POST","/v1/accounts:delete",t)}async function p8(e,t){return Fl(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function m8(e,t=!1){const n=Qt(e),r=await n.getIdToken(t),i=zw(r);ve(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zu(Fy(i.auth_time)),issuedAtTime:zu(Fy(i.iat)),expirationTime:zu(Fy(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fy(e){return Number(e)*1e3}function zw(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ef("JWT malformed, contained fewer than 3 sections"),null;try{const i=AI(n);return i?JSON.parse(i):(ef("Failed to decode base64 JWT payload"),null)}catch(i){return ef("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function g8(e){const t=zw(e);return ve(t,"internal-error"),ve(typeof t.exp!="undefined","internal-error"),ve(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kc(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof hi&&y8(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function y8({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v8{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zu(this.lastLoginAt),this.creationTime=zu(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tp(e){var t;const n=e.auth,r=await e.getIdToken(),i=await kc(e,p8(n,{idToken:r}));ve(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?S8(s.providerUserInfo):[],a=_8(e.providerData,o),u=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new WI(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}async function w8(e){const t=Qt(e);await tp(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _8(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function S8(e){return e.map(t=>{var{providerId:n}=t,r=Uw(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E8(e,t){const n=await jI(e,{},async()=>{const r=ih({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=YI(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ve(t.idToken,"internal-error"),ve(typeof t.idToken!="undefined","internal-error"),ve(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):g8(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return ve(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await E8(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Tc;return r&&(ve(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(ve(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(ve(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Tc,this.toJSON())}_performRefresh(){return bi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(e,t){ve(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class Mo{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Uw(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new v8(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new WI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await kc(this,this.stsTokenManager.getToken(this.auth,t));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return m8(this,t)}reload(){return w8(this)}_assign(t){this!==t&&(ve(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Mo(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await tp(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await kc(this,f8(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:x,isAnonymous:A,providerData:R,stsTokenManager:N}=n;ve(C&&N,t,"internal-error");const O=Tc.fromJSON(this.name,N);ve(typeof C=="string",t,"internal-error"),fs(p,t.name),fs(m,t.name),ve(typeof x=="boolean",t,"internal-error"),ve(typeof A=="boolean",t,"internal-error"),fs(v,t.name),fs(w,t.name),fs(_,t.name),fs(k,t.name),fs(S,t.name),fs(y,t.name);const Z=new Mo({uid:C,auth:t,email:m,emailVerified:x,displayName:p,isAnonymous:A,photoURL:w,phoneNumber:v,tenantId:_,stsTokenManager:O,createdAt:S,lastLoginAt:y});return R&&Array.isArray(R)&&(Z.providerData=R.map(L=>Object.assign({},L))),k&&(Z._redirectEventId=k),Z}static async _fromIdTokenResponse(t,n,r=!1){const i=new Tc;i.updateFromServerResponse(n);const s=new Mo({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await tp(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=new Map;function Pi(e){Qi(e instanceof Function,"Expected a class definition");let t=Nk.get(e);return t?(Qi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Nk.set(e,t),t)}/**
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
 */class HI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}HI.type="NONE";const Ok=HI;/**
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
 */function tf(e,t,n){return`firebase:${e}:${t}:${n}`}class Ja{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=tf(this.userKey,i.apiKey,s),this.fullPersistenceKey=tf("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Mo._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Ja(Pi(Ok),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Pi(Ok);const o=tf(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Mo._fromJSON(t,d);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ja(s,t,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ja(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(KI(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(GI(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(XI(t))return"Blackberry";if(JI(t))return"Webos";if(jw(t))return"Safari";if((t.includes("chrome/")||qI(t))&&!t.includes("edge/"))return"Chrome";if(QI(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function GI(e=En()){return/firefox\//i.test(e)}function jw(e=En()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function qI(e=En()){return/crios\//i.test(e)}function KI(e=En()){return/iemobile/i.test(e)}function QI(e=En()){return/android/i.test(e)}function XI(e=En()){return/blackberry/i.test(e)}function JI(e=En()){return/webos/i.test(e)}function Cm(e=En()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function C8(e=En()){var t;return Cm(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function k8(){return jU()&&document.documentMode===10}function ZI(e=En()){return Cm(e)||QI(e)||JI(e)||XI(e)||/windows phone/i.test(e)||KI(e)}function T8(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(e,t=[]){let n;switch(e){case"Browser":n=Rk(En());break;case"Worker":n=`${Rk(En())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${oa}/${r}`}async function tA(e,t){return Fl(e,"GET","/v2/recaptchaConfig",$l(e,t))}function bk(e){return e!==void 0&&e.enterprise!==void 0}class nA{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x8(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function rA(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ni("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",x8().appendChild(r)})}function D8(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const I8="https://www.google.com/recaptcha/enterprise.js?render=",A8="recaptcha-enterprise",N8="NO_RECAPTCHA";class iA{constructor(t){this.type=A8,this.auth=aa(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{tA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new nA(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;bk(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:t}).then(c=>{o(c)}).catch(()=>{o(N8)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&bk(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}rA(I8+a).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function np(e,t,n,r=!1){const i=new iA(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class O8{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const u=t(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R8{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pk(this),this.idTokenSubscription=new Pk(this),this.beforeStateQueue=new O8(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=VI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Pi(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ja.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!o||o===a)&&(u==null?void 0:u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await tp(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=u8()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Qt(t):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ve(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pi(t))})}async initializeRecaptchaConfig(){const t=await tA(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new nA(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new iA(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new rh("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Pi(t)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await Ja.create(this,[Pi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ve(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=eA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&s8(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function aa(e){return Qt(e)}class Pk{constructor(t){this.auth=t,this.observer=null,this.addObserver=QU(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b8(e,t){const n=Em(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Jf(s,t!=null?t:{}))return i;yr(i,"already-initialized")}return n.initialize({options:t})}function P8(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pi);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function M8(e,t,n){const r=aa(e);ve(r._canInitEmulator,r,"emulator-config-failed"),ve(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=sA(t),{host:o,port:a}=L8(t),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||$8()}function sA(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function L8(e){const t=sA(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Mk(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Mk(o)}}}function Mk(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function $8(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return bi("not implemented")}_getIdTokenResponse(t){return bi("not implemented")}_linkToIdToken(t,n){return bi("not implemented")}_getReauthenticationResolver(t){return bi("not implemented")}}async function F8(e,t){return Fl(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uy(e,t){return oh(e,"POST","/v1/accounts:signInWithPassword",$l(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U8(e,t){return oh(e,"POST","/v1/accounts:signInWithEmailLink",$l(e,t))}async function V8(e,t){return oh(e,"POST","/v1/accounts:signInWithEmailLink",$l(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends Yw{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new xc(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new xc(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await np(t,r,"signInWithPassword");return Uy(t,i)}else return Uy(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await np(t,r,"signInWithPassword");return Uy(t,s)}else return Promise.reject(i)});case"emailLink":return U8(t,{email:this._email,oobCode:this._password});default:yr(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return F8(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return V8(t,{idToken:n,email:this._email,oobCode:this._password});default:yr(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(e,t){return oh(e,"POST","/v1/accounts:signInWithIdp",$l(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B8="http://localhost";class Ko extends Yw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ko(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):yr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Uw(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ko(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Za(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Za(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Za(t,n)}buildRequest(){const t={requestUri:B8,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ih(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z8(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function j8(e){const t=Tu(xu(e)).link,n=t?Tu(xu(t)).deep_link_id:null,r=Tu(xu(e)).deep_link_id;return(r?Tu(xu(r)).link:null)||r||n||t||e}class Ww{constructor(t){var n,r,i,s,o,a;const u=Tu(xu(t)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=z8((i=u.mode)!==null&&i!==void 0?i:null);ve(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=j8(t);try{return new Ww(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.providerId=Ul.PROVIDER_ID}static credential(t,n){return xc._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Ww.parseLink(n);return ve(r,"argument-error"),xc._fromEmailAndCode(t,r.code,r.tenantId)}}Ul.PROVIDER_ID="password";Ul.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ul.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ah extends Hw{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends ah{constructor(){super("facebook.com")}static credential(t){return Ko._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ws.credentialFromTaggedObject(t)}static credentialFromError(t){return ws.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ws.credential(t.oauthAccessToken)}catch{return null}}}ws.FACEBOOK_SIGN_IN_METHOD="facebook.com";ws.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends ah{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ko._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ni.credentialFromTaggedObject(t)}static credentialFromError(t){return Ni.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ni.credential(n,r)}catch{return null}}}Ni.GOOGLE_SIGN_IN_METHOD="google.com";Ni.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends ah{constructor(){super("github.com")}static credential(t){return Ko._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _s.credentialFromTaggedObject(t)}static credentialFromError(t){return _s.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _s.credential(t.oauthAccessToken)}catch{return null}}}_s.GITHUB_SIGN_IN_METHOD="github.com";_s.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends ah{constructor(){super("twitter.com")}static credential(t,n){return Ko._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ss.credentialFromTaggedObject(t)}static credentialFromError(t){return Ss.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ss.credential(n,r)}catch{return null}}}Ss.TWITTER_SIGN_IN_METHOD="twitter.com";Ss.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(e,t){return oh(e,"POST","/v1/accounts:signUp",$l(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Mo._fromIdTokenResponse(t,r,i),o=Lk(r);return new Qo({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Lk(r);return new Qo({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Lk(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp extends hi{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rp.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new rp(t,n,r,i)}}function oA(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?rp._fromErrorAndOperation(e,s,t,r):s})}async function Y8(e,t,n=!1){const r=await kc(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Qo._forOperation(e,"link",r)}/**
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
 */async function W8(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await kc(e,oA(r,i,t,e),n);ve(s.idToken,r,"internal-error");const o=zw(s.idToken);ve(o,r,"internal-error");const{sub:a}=o;return ve(e.uid===a,r,"user-mismatch"),Qo._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&yr(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(e,t,n=!1){const r="signIn",i=await oA(e,r,t),s=await Qo._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function H8(e,t){return aA(aa(e),t)}async function G8(e,t,n){var r;const i=aa(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await np(i,s,"signUpPassword");o=Vy(i,c)}else o=Vy(i,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const d=await np(i,s,"signUpPassword");return Vy(i,d)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),u=await Qo._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(u.user),u}function q8(e,t,n){return H8(Qt(e),Ul.credential(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(e,t){return Qt(e).setPersistence(t)}function K8(e,t,n,r){return Qt(e).onIdTokenChanged(t,n,r)}function Q8(e,t,n){return Qt(e).beforeAuthStateChanged(t,n)}function X8(e){return Qt(e).signOut()}const ip="__sak";/**
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
 */class uA{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ip,"1"),this.storage.removeItem(ip),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J8(){const e=En();return jw(e)||Cm(e)}const Z8=1e3,e7=10;class cA extends uA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=J8()&&T8(),this.fallbackToPolling=ZI(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);k8()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,e7):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Z8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}cA.type="LOCAL";const Gw=cA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA extends uA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}hA.type="SESSION";const dA=hA;/**
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
 */function t7(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class km{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new km(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await t7(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}km.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class n7{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=qw("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(){return window}function r7(e){ri().location.href=e}/**
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
 */function fA(){return typeof ri().WorkerGlobalScope!="undefined"&&typeof ri().importScripts=="function"}async function i7(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function s7(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function o7(){return fA()?self:null}/**
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
 */const pA="firebaseLocalStorageDb",a7=1,sp="firebaseLocalStorage",mA="fbase_key";class lh{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tm(e,t){return e.transaction([sp],t?"readwrite":"readonly").objectStore(sp)}function l7(){const e=indexedDB.deleteDatabase(pA);return new lh(e).toPromise()}function x0(){const e=indexedDB.open(pA,a7);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(sp,{keyPath:mA})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(sp)?t(r):(r.close(),await l7(),t(await x0()))})})}async function $k(e,t,n){const r=Tm(e,!0).put({[mA]:t,value:n});return new lh(r).toPromise()}async function u7(e,t){const n=Tm(e,!1).get(t),r=await new lh(n).toPromise();return r===void 0?null:r.value}function Fk(e,t){const n=Tm(e,!0).delete(t);return new lh(n).toPromise()}const c7=800,h7=3;class gA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await x0(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>h7)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=km._getInstance(o7()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await i7(),!this.activeServiceWorker)return;this.sender=new n7(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||s7()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await x0();return await $k(t,ip,"1"),await Fk(t,ip),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$k(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>u7(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fk(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Tm(i,!1).getAll();return new lh(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),c7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gA.type="LOCAL";const d7=gA;new sh(3e4,6e4);/**
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
 */function yA(e,t){return t?Pi(t):(ve(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Kw extends Yw{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Za(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Za(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Za(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function f7(e){return aA(e.auth,new Kw(e),e.bypassAuthState)}function p7(e){const{auth:t,user:n}=e;return ve(n,t,"internal-error"),W8(n,new Kw(e),e.bypassAuthState)}async function m7(e){const{auth:t,user:n}=e;return ve(n,t,"internal-error"),Y8(n,new Kw(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return f7;case"linkViaPopup":case"linkViaRedirect":return m7;case"reauthViaPopup":case"reauthViaRedirect":return p7;default:yr(this.auth,"internal-error")}}resolve(t){Qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g7=new sh(2e3,1e4);async function y7(e,t,n){const r=aa(e);o8(e,t,Hw);const i=yA(r,n);return new Io(r,"signInViaPopup",t,i).executeNotNull()}class Io extends vA{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Io.currentPopupAction&&Io.currentPopupAction.cancel(),Io.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ve(t,this.auth,"internal-error"),t}async onExecution(){Qi(this.filter.length===1,"Popup operations only handle one event");const t=qw();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ni(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ni(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Io.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ni(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,g7.get())};t()}}Io.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v7="pendingRedirect",nf=new Map;class w7 extends vA{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=nf.get(this.auth._key());if(!t){try{const r=await _7(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}nf.set(this.auth._key(),t)}return this.bypassAuthState||nf.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _7(e,t){const n=C7(t),r=E7(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function S7(e,t){nf.set(e._key(),t)}function E7(e){return Pi(e._redirectPersistence)}function C7(e){return tf(v7,e.config.apiKey,e.name)}async function k7(e,t,n=!1){const r=aa(e),i=yA(r,t),o=await new w7(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T7=10*60*1e3;class x7{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!D7(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!wA(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ni(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=T7&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uk(t))}saveEventToCache(t){this.cachedEventUids.add(Uk(t)),this.lastProcessedEventTime=Date.now()}}function Uk(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function wA({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function D7(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wA(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I7(e,t={}){return Fl(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A7=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,N7=/^https?/;async function O7(e){if(e.config.emulator)return;const{authorizedDomains:t}=await I7(e);for(const n of t)try{if(R7(n))return}catch{}yr(e,"unauthorized-domain")}function R7(e){const t=T0(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!N7.test(n))return!1;if(A7.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const b7=new sh(3e4,6e4);function Vk(){const e=ri().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function P7(e){return new Promise((t,n)=>{var r,i,s;function o(){Vk(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Vk(),n(ni(e,"network-request-failed"))},timeout:b7.get()})}if(!((i=(r=ri().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ri().gapi)===null||s===void 0)&&s.load)o();else{const a=D8("iframefcb");return ri()[a]=()=>{gapi.load?o():n(ni(e,"network-request-failed"))},rA(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(t=>{throw rf=null,t})}let rf=null;function M7(e){return rf=rf||P7(e),rf}/**
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
 */const L7=new sh(5e3,15e3),$7="__/auth/iframe",F7="emulator/auth/iframe",U7={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},V7=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function B7(e){const t=e.config;ve(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Bw(t,F7):`https://${e.config.authDomain}/${$7}`,r={apiKey:t.apiKey,appName:e.name,v:oa},i=V7.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ih(r).slice(1)}`}async function z7(e){const t=await M7(e),n=ri().gapi;return ve(n,e,"internal-error"),t.open({where:document.body,url:B7(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U7,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ni(e,"network-request-failed"),a=ri().setTimeout(()=>{s(o)},L7.get());function u(){ri().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const j7={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y7=500,W7=600,H7="_blank",G7="http://localhost";class Bk{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function q7(e,t,n,r=Y7,i=W7){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},j7),{width:r.toString(),height:i.toString(),top:s,left:o}),c=En().toLowerCase();n&&(a=qI(c)?H7:n),GI(c)&&(t=t||G7,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[v,w])=>`${m}${v}=${w},`,"");if(C8(c)&&a!=="_self")return K7(t||"",a),new Bk(null);const p=window.open(t||"",a,d);ve(p,e,"popup-blocked");try{p.focus()}catch{}return new Bk(p)}function K7(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Q7="__/auth/handler",X7="emulator/auth/handler",J7=encodeURIComponent("fac");async function zk(e,t,n,r,i,s){ve(e.config.authDomain,e,"auth-domain-config-required"),ve(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:oa,eventId:i};if(t instanceof Hw){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",KU(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,p]of Object.entries(s||{}))o[d]=p}if(t instanceof ah){const d=t.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await e._getAppCheckToken(),c=u?`#${J7}=${encodeURIComponent(u)}`:"";return`${Z7(e)}?${ih(a).slice(1)}${c}`}function Z7({config:e}){return e.emulator?Bw(e,X7):`https://${e.authDomain}/${Q7}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="webStorageSupport";class eV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dA,this._completeRedirectFn=k7,this._overrideRedirectResult=S7}async _openPopup(t,n,r,i){var s;Qi((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await zk(t,n,r,T0(),i);return q7(t,o,qw())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await zk(t,n,r,T0(),i);return r7(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qi(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await z7(t),r=new x7(t);return n.register("authEvent",i=>(ve(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(By,{type:By},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[By];o!==void 0&&n(!!o),yr(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=O7(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ZI()||jw()||Cm()}}const tV=eV;var jk="@firebase/auth",Yk="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rV(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function iV(e){qo(new Xs("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ve(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),ve(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eA(e)},c=new R8(r,i,s,u);return P8(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),qo(new Xs("auth-internal",t=>{const n=aa(t.getProvider("auth").getImmediate());return(r=>new nV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ti(jk,Yk,rV(e)),ti(jk,Yk,"esm2017")}/**
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
 */const sV=5*60,oV=RI("authIdTokenMaxAge")||sV;let Wk=null;const aV=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oV)return;const i=n==null?void 0:n.token;Wk!==i&&(Wk=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lV(e=Fw()){const t=Em(e,"auth");if(t.isInitialized())return t.getImmediate();const n=b8(e,{popupRedirectResolver:tV,persistence:[d7,Gw,dA]}),r=RI("authTokenSyncURL");if(r){const s=aV(r);Q8(n,s,()=>s(n.currentUser)),K8(n,o=>s(o))}const i=NI("auth");return i&&M8(n,`http://${i}`),n}iV("Browser");var uV="firebase",cV="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ti(uV,cV,"app");var hV=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},re,Qw=Qw||{},Ee=hV||self;function op(){}function xm(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function uh(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function dV(e){return Object.prototype.hasOwnProperty.call(e,zy)&&e[zy]||(e[zy]=++fV)}var zy="closure_uid_"+(1e9*Math.random()>>>0),fV=0;function pV(e,t,n){return e.call.apply(e.bind,arguments)}function mV(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function yn(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?yn=pV:yn=mV,yn.apply(null,arguments)}function xd(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Zt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function uo(){this.s=this.s,this.o=this.o}var gV=0;uo.prototype.s=!1;uo.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),gV!=0)&&dV(this)};uo.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _A=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Xw(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Hk(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(xm(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function vn(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}vn.prototype.h=function(){this.defaultPrevented=!0};var yV=function(){if(!Ee.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Ee.addEventListener("test",op,t),Ee.removeEventListener("test",op,t)}catch{}return e}();function ap(e){return/^[\s\xa0]*$/.test(e)}var Gk=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function jy(e,t){return e<t?-1:e>t?1:0}function Dm(){var e=Ee.navigator;return e&&(e=e.userAgent)?e:""}function Gr(e){return Dm().indexOf(e)!=-1}function Jw(e){return Jw[" "](e),e}Jw[" "]=op;function SA(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}var vV=Gr("Opera"),_l=Gr("Trident")||Gr("MSIE"),EA=Gr("Edge"),D0=EA||_l,CA=Gr("Gecko")&&!(Dm().toLowerCase().indexOf("webkit")!=-1&&!Gr("Edge"))&&!(Gr("Trident")||Gr("MSIE"))&&!Gr("Edge"),wV=Dm().toLowerCase().indexOf("webkit")!=-1&&!Gr("Edge");function kA(){var e=Ee.document;return e?e.documentMode:void 0}var lp;e:{var Yy="",Wy=function(){var e=Dm();if(CA)return/rv:([^\);]+)(\)|;)/.exec(e);if(EA)return/Edge\/([\d\.]+)/.exec(e);if(_l)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(wV)return/WebKit\/(\S+)/.exec(e);if(vV)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Wy&&(Yy=Wy?Wy[1]:""),_l){var Hy=kA();if(Hy!=null&&Hy>parseFloat(Yy)){lp=String(Hy);break e}}lp=Yy}var _V={};function SV(){return SA(_V,9,function(){let e=0;const t=Gk(String(lp)).split("."),n=Gk("9").split("."),r=Math.max(t.length,n.length);for(let o=0;e==0&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;e=jy(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||jy(i[2].length==0,s[2].length==0)||jy(i[2],s[2]),i=i[3],s=s[3]}while(e==0)}return 0<=e})}var I0;if(Ee.document&&_l){var qk=kA();I0=qk||parseInt(lp,10)||void 0}else I0=void 0;var EV=I0;function Dc(e,t){if(vn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(CA){e:{try{Jw(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:CV[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Dc.$.h.call(this)}}Zt(Dc,vn);var CV={2:"touch",3:"pen",4:"mouse"};Dc.prototype.h=function(){Dc.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ch="closure_listenable_"+(1e6*Math.random()|0),kV=0;function TV(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++kV,this.fa=this.ia=!1}function Im(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Zw(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function TA(e){const t={};for(const n in e)t[n]=e[n];return t}const Kk="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xA(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Kk.length;s++)n=Kk[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Am(e){this.src=e,this.g={},this.h=0}Am.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=N0(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new TV(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function A0(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=_A(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Im(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function N0(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var e_="closure_lm_"+(1e6*Math.random()|0),Gy={};function DA(e,t,n,r,i){if(r&&r.once)return AA(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)DA(e,t[s],n,r,i);return null}return n=r_(n),e&&e[ch]?e.O(t,n,uh(r)?!!r.capture:!!r,i):IA(e,t,n,!1,r,i)}function IA(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=uh(i)?!!i.capture:!!i,a=n_(e);if(a||(e[e_]=a=new Am(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=xV(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)yV||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(OA(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xV(){function e(n){return t.call(e.src,e.listener,n)}const t=DV;return e}function AA(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)AA(e,t[s],n,r,i);return null}return n=r_(n),e&&e[ch]?e.P(t,n,uh(r)?!!r.capture:!!r,i):IA(e,t,n,!0,r,i)}function NA(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)NA(e,t[s],n,r,i);else r=uh(r)?!!r.capture:!!r,n=r_(n),e&&e[ch]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=N0(s,n,r,i),-1<n&&(Im(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=n_(e))&&(t=e.g[t.toString()],e=-1,t&&(e=N0(t,n,r,i)),(n=-1<e?t[e]:null)&&t_(n))}function t_(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[ch])A0(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(OA(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=n_(t))?(A0(n,e),n.h==0&&(n.src=null,t[e_]=null)):Im(e)}}}function OA(e){return e in Gy?Gy[e]:Gy[e]="on"+e}function DV(e,t){if(e.fa)e=!0;else{t=new Dc(t,this);var n=e.listener,r=e.la||e.src;e.ia&&t_(e),e=n.call(r,t)}return e}function n_(e){return e=e[e_],e instanceof Am?e:null}var qy="__closure_events_fn_"+(1e9*Math.random()>>>0);function r_(e){return typeof e=="function"?e:(e[qy]||(e[qy]=function(t){return e.handleEvent(t)}),e[qy])}function Xt(){uo.call(this),this.i=new Am(this),this.S=this,this.J=null}Zt(Xt,uo);Xt.prototype[ch]=!0;Xt.prototype.removeEventListener=function(e,t,n,r){NA(this,e,t,n,r)};function sn(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new vn(t,e);else if(t instanceof vn)t.target=t.target||e;else{var i=t;t=new vn(r,e),xA(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Dd(o,r,!0,t)&&i}if(o=t.g=e,i=Dd(o,r,!0,t)&&i,i=Dd(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Dd(o,r,!1,t)&&i}Xt.prototype.N=function(){if(Xt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Im(n[r]);delete e.g[t],e.h--}}this.J=null};Xt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Xt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Dd(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&A0(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var i_=Ee.JSON.stringify;function IV(){var e=PA;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class AV{constructor(){this.h=this.g=null}add(t,n){const r=RA.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var RA=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new NV,e=>e.reset());class NV{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function OV(e){Ee.setTimeout(()=>{throw e},0)}function bA(e,t){O0||RV(),R0||(O0(),R0=!0),PA.add(e,t)}var O0;function RV(){var e=Ee.Promise.resolve(void 0);O0=function(){e.then(bV)}}var R0=!1,PA=new AV;function bV(){for(var e;e=IV();){try{e.h.call(e.g)}catch(n){OV(n)}var t=RA;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}R0=!1}function Nm(e,t){Xt.call(this),this.h=e||1,this.g=t||Ee,this.j=yn(this.qb,this),this.l=Date.now()}Zt(Nm,Xt);re=Nm.prototype;re.ga=!1;re.T=null;re.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),sn(this,"tick"),this.ga&&(s_(this),this.start()))}};re.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function s_(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}re.N=function(){Nm.$.N.call(this),s_(this),delete this.g};function o_(e,t,n){if(typeof e=="function")n&&(e=yn(e,n));else if(e&&typeof e.handleEvent=="function")e=yn(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:Ee.setTimeout(e,t||0)}function MA(e){e.g=o_(()=>{e.g=null,e.i&&(e.i=!1,MA(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class PV extends uo{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:MA(this)}N(){super.N(),this.g&&(Ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ic(e){uo.call(this),this.h=e,this.g={}}Zt(Ic,uo);var Qk=[];function LA(e,t,n,r){Array.isArray(n)||(n&&(Qk[0]=n.toString()),n=Qk);for(var i=0;i<n.length;i++){var s=DA(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function $A(e){Zw(e.g,function(t,n){this.g.hasOwnProperty(n)&&t_(t)},e),e.g={}}Ic.prototype.N=function(){Ic.$.N.call(this),$A(this)};Ic.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Om(){this.g=!0}Om.prototype.Ea=function(){this.g=!1};function MV(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var d=c[0];c=c[1];var p=d.split("_");o=2<=p.length&&p[1]=="type"?o+(d+"="+c+"&"):o+(d+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function LV(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Ba(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+FV(e,n)+(r?" "+r:"")})}function $V(e,t){e.info(function(){return"TIMEOUT: "+t})}Om.prototype.info=function(){};function FV(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return i_(n)}catch{return t}}var la={},Xk=null;function Rm(){return Xk=Xk||new Xt}la.Ta="serverreachability";function FA(e){vn.call(this,la.Ta,e)}Zt(FA,vn);function Ac(e){const t=Rm();sn(t,new FA(t))}la.STAT_EVENT="statevent";function UA(e,t){vn.call(this,la.STAT_EVENT,e),this.stat=t}Zt(UA,vn);function Nn(e){const t=Rm();sn(t,new UA(t,e))}la.Ua="timingevent";function VA(e,t){vn.call(this,la.Ua,e),this.size=t}Zt(VA,vn);function hh(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return Ee.setTimeout(function(){e()},t)}var bm={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},BA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function a_(){}a_.prototype.h=null;function Jk(e){return e.h||(e.h=e.i())}function zA(){}var dh={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function l_(){vn.call(this,"d")}Zt(l_,vn);function u_(){vn.call(this,"c")}Zt(u_,vn);var b0;function Pm(){}Zt(Pm,a_);Pm.prototype.g=function(){return new XMLHttpRequest};Pm.prototype.i=function(){return{}};b0=new Pm;function fh(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ic(this),this.P=UV,e=D0?125:void 0,this.V=new Nm(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new jA}function jA(){this.i=null,this.g="",this.h=!1}var UV=45e3,P0={},up={};re=fh.prototype;re.setTimeout=function(e){this.P=e};function M0(e,t,n){e.L=1,e.v=Lm(Xi(t)),e.s=n,e.S=!0,YA(e,null)}function YA(e,t){e.G=Date.now(),ph(e),e.A=Xi(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),JA(n.i,"t",r),e.C=0,n=e.l.I,e.h=new jA,e.g=wN(e.l,n?t:null,!e.s),0<e.O&&(e.M=new PV(yn(e.Pa,e,e.g),e.O)),LA(e.U,e.g,"readystatechange",e.nb),t=e.I?TA(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Ac(),MV(e.j,e.u,e.A,e.m,e.W,e.s)}re.nb=function(e){e=e.target;const t=this.M;t&&Mi(e)==3?t.l():this.Pa(e)};re.Pa=function(e){try{if(e==this.g)e:{const d=Mi(this.g);var t=this.g.Ia();const p=this.g.da();if(!(3>d)&&(d!=3||D0||this.g&&(this.h.h||this.g.ja()||nT(this.g)))){this.J||d!=4||t==7||(t==8||0>=p?Ac(3):Ac(2)),Mm(this);var n=this.g.da();this.aa=n;t:if(WA(this)){var r=nT(this.g);e="";var i=r.length,s=Mi(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ao(this),ju(this);var o="";break t}this.h.i=new Ee.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,LV(this.j,this.u,this.A,this.m,this.W,d,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ap(a)){var c=a;break t}}c=null}if(n=c)Ba(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,L0(this,n);else{this.i=!1,this.o=3,Nn(12),Ao(this),ju(this);break e}}this.S?(HA(this,d,o),D0&&this.i&&d==3&&(LA(this.U,this.V,"tick",this.mb),this.V.start())):(Ba(this.j,this.m,o,null),L0(this,o)),d==4&&Ao(this),this.i&&!this.J&&(d==4?mN(this.l,this):(this.i=!1,ph(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Nn(12)):(this.o=0,Nn(13)),Ao(this),ju(this)}}}catch{}finally{}};function WA(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function HA(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=VV(e,n),i==up){t==4&&(e.o=4,Nn(14),r=!1),Ba(e.j,e.m,null,"[Incomplete Response]");break}else if(i==P0){e.o=4,Nn(15),Ba(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Ba(e.j,e.m,i,null),L0(e,i);WA(e)&&i!=up&&i!=P0&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Nn(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),g_(t),t.L=!0,Nn(11))):(Ba(e.j,e.m,n,"[Invalid Chunked Response]"),Ao(e),ju(e))}re.mb=function(){if(this.g){var e=Mi(this.g),t=this.g.ja();this.C<t.length&&(Mm(this),HA(this,e,t),this.i&&e!=4&&ph(this))}};function VV(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?up:(n=Number(t.substring(n,r)),isNaN(n)?P0:(r+=1,r+n>t.length?up:(t=t.substr(r,n),e.C=r+n,t)))}re.cancel=function(){this.J=!0,Ao(this)};function ph(e){e.Y=Date.now()+e.P,GA(e,e.P)}function GA(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=hh(yn(e.lb,e),t)}function Mm(e){e.B&&(Ee.clearTimeout(e.B),e.B=null)}re.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?($V(this.j,this.A),this.L!=2&&(Ac(),Nn(17)),Ao(this),this.o=2,ju(this)):GA(this,this.Y-e)};function ju(e){e.l.H==0||e.J||mN(e.l,e)}function Ao(e){Mm(e);var t=e.M;t&&typeof t.ra=="function"&&t.ra(),e.M=null,s_(e.V),$A(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function L0(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||$0(n.h,e))){if(!e.K&&$0(n.h,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)dp(n),Um(n);else break e;m_(n),Nn(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=hh(yn(n.ib,n),6e3));if(1>=tN(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else No(n,11)}else if((e.K||n.g==e)&&dp(n),!ap(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const d=c[3];d!=null&&(n.qa=d,n.j.info("VER="+n.qa));const p=c[4];p!=null&&(n.Ga=p,n.j.info("SVER="+n.Ga));const m=c[5];m!=null&&typeof m=="number"&&0<m&&(r=1.5*m,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const v=e.g;if(v){const w=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.h;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(c_(s,s.h),s.h=null))}if(r.F){const _=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,pt(r.G,r.F,_))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=vN(r,r.I?r.oa:null,r.Y),o.K){nN(r.h,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(Mm(a),ph(a)),r.g=o}else fN(r);0<n.i.length&&Vm(n)}else c[0]!="stop"&&c[0]!="close"||No(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?No(n,7):p_(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}Ac(4)}catch{}}function BV(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map!="undefined"&&e instanceof Map||typeof Set!="undefined"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(xm(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function zV(e){if(e.sa&&typeof e.sa=="function")return e.sa();if(!e.Z||typeof e.Z!="function"){if(typeof Map!="undefined"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set!="undefined"&&e instanceof Set)){if(xm(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function qA(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(xm(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=zV(e),r=BV(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var KA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jV(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Lo(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Lo){this.h=t!==void 0?t:e.h,cp(this,e.j),this.s=e.s,this.g=e.g,hp(this,e.m),this.l=e.l,t=e.i;var n=new Nc;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Zk(this,n),this.o=e.o}else e&&(n=String(e).match(KA))?(this.h=!!t,cp(this,n[1]||"",!0),this.s=Du(n[2]||""),this.g=Du(n[3]||"",!0),hp(this,n[4]),this.l=Du(n[5]||"",!0),Zk(this,n[6]||"",!0),this.o=Du(n[7]||"")):(this.h=!!t,this.i=new Nc(null,this.h))}Lo.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Iu(t,eT,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Iu(t,eT,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Iu(n,n.charAt(0)=="/"?HV:WV,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Iu(n,qV)),e.join("")};function Xi(e){return new Lo(e)}function cp(e,t,n){e.j=n?Du(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function hp(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Zk(e,t,n){t instanceof Nc?(e.i=t,KV(e.i,e.h)):(n||(t=Iu(t,GV)),e.i=new Nc(t,e.h))}function pt(e,t,n){e.i.set(t,n)}function Lm(e){return pt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Du(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Iu(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,YV),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function YV(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var eT=/[#\/\?@]/g,WV=/[#\?:]/g,HV=/[#\?]/g,GV=/[#\?@]/g,qV=/#/g;function Nc(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function co(e){e.g||(e.g=new Map,e.h=0,e.i&&jV(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}re=Nc.prototype;re.add=function(e,t){co(this),this.i=null,e=Vl(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function QA(e,t){co(e),t=Vl(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function XA(e,t){return co(e),t=Vl(e,t),e.g.has(t)}re.forEach=function(e,t){co(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};re.sa=function(){co(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};re.Z=function(e){co(this);let t=[];if(typeof e=="string")XA(this,e)&&(t=t.concat(this.g.get(Vl(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};re.set=function(e,t){return co(this),this.i=null,e=Vl(this,e),XA(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};re.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function JA(e,t,n){QA(e,t),0<n.length&&(e.i=null,e.g.set(Vl(e,t),Xw(n)),e.h+=n.length)}re.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Vl(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function KV(e,t){t&&!e.j&&(co(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(QA(this,r),JA(this,i,n))},e)),e.j=t}var QV=class{constructor(e,t){this.h=e,this.g=t}};function ZA(e){this.l=e||XV,Ee.PerformanceNavigationTiming?(e=Ee.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(Ee.g&&Ee.g.Ka&&Ee.g.Ka()&&Ee.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var XV=10;function eN(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function tN(e){return e.h?1:e.g?e.g.size:0}function $0(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function c_(e,t){e.g?e.g.add(t):e.h=t}function nN(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ZA.prototype.cancel=function(){if(this.i=rN(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function rN(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Xw(e.i)}function h_(){}h_.prototype.stringify=function(e){return Ee.JSON.stringify(e,void 0)};h_.prototype.parse=function(e){return Ee.JSON.parse(e,void 0)};function JV(){this.g=new h_}function ZV(e,t,n){const r=n||"";try{qA(e,function(i,s){let o=i;uh(i)&&(o=i_(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function eB(e,t){const n=new Om;if(Ee.Image){const r=new Image;r.onload=xd(Id,n,r,"TestLoadImage: loaded",!0,t),r.onerror=xd(Id,n,r,"TestLoadImage: error",!1,t),r.onabort=xd(Id,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=xd(Id,n,r,"TestLoadImage: timeout",!1,t),Ee.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Id(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function mh(e){this.l=e.fc||null,this.j=e.ob||!1}Zt(mh,a_);mh.prototype.g=function(){return new $m(this.l,this.j)};mh.prototype.i=function(e){return function(){return e}}({});function $m(e,t){Xt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=d_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Zt($m,Xt);var d_=0;re=$m.prototype;re.open=function(e,t){if(this.readyState!=d_)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Oc(this)};re.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Ee).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};re.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gh(this)),this.readyState=d_};re.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Oc(this)),this.g&&(this.readyState=3,Oc(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Ee.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;iN(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function iN(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}re.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?gh(this):Oc(this),this.readyState==3&&iN(this)}};re.Za=function(e){this.g&&(this.response=this.responseText=e,gh(this))};re.Ya=function(e){this.g&&(this.response=e,gh(this))};re.ka=function(){this.g&&gh(this)};function gh(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Oc(e)}re.setRequestHeader=function(e,t){this.v.append(e,t)};re.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};re.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Oc(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty($m.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var tB=Ee.JSON.parse;function kt(e){Xt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=sN,this.L=this.M=!1}Zt(kt,Xt);var sN="",nB=/^https?$/i,rB=["POST","PUT"];re=kt.prototype;re.Oa=function(e){this.M=e};re.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():b0.g(),this.C=this.u?Jk(this.u):Jk(b0),this.g.onreadystatechange=yn(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){tT(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Ee.FormData&&e instanceof Ee.FormData,!(0<=_A(rB,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{lN(this),0<this.B&&((this.L=iB(this.g))?(this.g.timeout=this.B,this.g.ontimeout=yn(this.ua,this)):this.A=o_(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){tT(this,s)}};function iB(e){return _l&&SV()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}re.ua=function(){typeof Qw!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,sn(this,"timeout"),this.abort(8))};function tT(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,oN(e),Fm(e)}function oN(e){e.F||(e.F=!0,sn(e,"complete"),sn(e,"error"))}re.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,sn(this,"complete"),sn(this,"abort"),Fm(this))};re.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fm(this,!0)),kt.$.N.call(this)};re.La=function(){this.s||(this.G||this.v||this.l?aN(this):this.kb())};re.kb=function(){aN(this)};function aN(e){if(e.h&&typeof Qw!="undefined"&&(!e.C[1]||Mi(e)!=4||e.da()!=2)){if(e.v&&Mi(e)==4)o_(e.La,0,e);else if(sn(e,"readystatechange"),Mi(e)==4){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.I).match(KA)[1]||null;if(!i&&Ee.self&&Ee.self.location){var s=Ee.self.location.protocol;i=s.substr(0,s.length-1)}r=!nB.test(i?i.toLowerCase():"")}n=r}if(n)sn(e,"complete"),sn(e,"success");else{e.m=6;try{var o=2<Mi(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",oN(e)}}finally{Fm(e)}}}}function Fm(e,t){if(e.g){lN(e);const n=e.g,r=e.C[0]?op:null;e.g=null,e.C=null,t||sn(e,"ready");try{n.onreadystatechange=r}catch{}}}function lN(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Ee.clearTimeout(e.A),e.A=null)}function Mi(e){return e.g?e.g.readyState:0}re.da=function(){try{return 2<Mi(this)?this.g.status:-1}catch{return-1}};re.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};re.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),tB(t)}};function nT(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case sN:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}re.Ia=function(){return this.m};re.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function uN(e){let t="";return Zw(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function f_(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=uN(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):pt(e,t,n))}function pu(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function cN(e){this.Ga=0,this.i=[],this.j=new Om,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=pu("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=pu("baseRetryDelayMs",5e3,e),this.hb=pu("retryDelaySeedMs",1e4,e),this.eb=pu("forwardChannelMaxRetries",2,e),this.xa=pu("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new ZA(e&&e.concurrentRequestLimit),this.Ja=new JV,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}re=cN.prototype;re.qa=8;re.H=1;function p_(e){if(hN(e),e.H==3){var t=e.W++,n=Xi(e.G);pt(n,"SID",e.J),pt(n,"RID",t),pt(n,"TYPE","terminate"),yh(e,n),t=new fh(e,e.j,t,void 0),t.L=2,t.v=Lm(Xi(n)),n=!1,Ee.navigator&&Ee.navigator.sendBeacon&&(n=Ee.navigator.sendBeacon(t.v.toString(),"")),!n&&Ee.Image&&(new Image().src=t.v,n=!0),n||(t.g=wN(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ph(t)}yN(e)}function Um(e){e.g&&(g_(e),e.g.cancel(),e.g=null)}function hN(e){Um(e),e.u&&(Ee.clearTimeout(e.u),e.u=null),dp(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&Ee.clearTimeout(e.m),e.m=null)}function Vm(e){eN(e.h)||e.m||(e.m=!0,bA(e.Na,e),e.C=0)}function sB(e,t){return tN(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.F.concat(e.i),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=hh(yn(e.Na,e,t),gN(e,e.C)),e.C++,!0)}re.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new fh(this,this.j,e,void 0);let s=this.s;if(this.U&&(s?(s=TA(s),xA(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=dN(this,i,t),n=Xi(this.G),pt(n,"RID",e),pt(n,"CVER",22),this.F&&pt(n,"X-HTTP-Session-Id",this.F),yh(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(uN(s)))+"&"+t:this.o&&f_(n,this.o,s)),c_(this.h,i),this.bb&&pt(n,"TYPE","init"),this.P?(pt(n,"$req",t),pt(n,"SID","null"),i.ba=!0,M0(i,n,null)):M0(i,n,t),this.H=2}}else this.H==3&&(e?rT(this,e):this.i.length==0||eN(this.h)||rT(this))};function rT(e,t){var n;t?n=t.m:n=e.W++;const r=Xi(e.G);pt(r,"SID",e.J),pt(r,"RID",n),pt(r,"AID",e.V),yh(e,r),e.o&&e.s&&f_(r,e.o,e.s),n=new fh(e,e.j,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=dN(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),c_(e.h,n),M0(n,r,t)}function yh(e,t){e.ma&&Zw(e.ma,function(n,r){pt(t,r,n)}),e.l&&qA({},function(n,r){pt(t,r,n)})}function dN(e,t,n){n=Math.min(e.i.length,n);var r=e.l?yn(e.l.Va,e.l,e):null;e:{var i=e.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let c=i[u].h;const d=i[u].g;if(c-=s,0>c)s=Math.max(0,i[u].h-100),a=!1;else try{ZV(d,o,"req"+c+"_")}catch{r&&r(d)}}if(a){r=o.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,r}function fN(e){e.g||e.u||(e.ba=1,bA(e.Ma,e),e.A=0)}function m_(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=hh(yn(e.Ma,e),gN(e,e.A)),e.A++,!0)}re.Ma=function(){if(this.u=null,pN(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=hh(yn(this.jb,this),e)}};re.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Nn(10),Um(this),pN(this))};function g_(e){e.B!=null&&(Ee.clearTimeout(e.B),e.B=null)}function pN(e){e.g=new fh(e,e.j,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Xi(e.wa);pt(t,"RID","rpc"),pt(t,"SID",e.J),pt(t,"CI",e.M?"0":"1"),pt(t,"AID",e.V),pt(t,"TYPE","xmlhttp"),yh(e,t),e.o&&e.s&&f_(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Lm(Xi(t)),n.s=null,n.S=!0,YA(n,e)}re.ib=function(){this.v!=null&&(this.v=null,Um(this),m_(this),Nn(19))};function dp(e){e.v!=null&&(Ee.clearTimeout(e.v),e.v=null)}function mN(e,t){var n=null;if(e.g==t){dp(e),g_(e),e.g=null;var r=2}else if($0(e.h,t))n=t.F,nN(e.h,t),r=1;else return;if(e.H!=0){if(e.ta=t.aa,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Rm(),sn(r,new VA(r,n)),Vm(e)}else fN(e);else if(i=t.o,i==3||i==0&&0<e.ta||!(r==1&&sB(e,t)||r==2&&m_(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:No(e,5);break;case 4:No(e,10);break;case 3:No(e,6);break;default:No(e,2)}}}function gN(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function No(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=yn(e.pb,e);n||(n=new Lo("//www.google.com/images/cleardot.gif"),Ee.location&&Ee.location.protocol=="http"||cp(n,"https"),Lm(n)),eB(n.toString(),r)}else Nn(2);e.H=0,e.l&&e.l.za(t),yN(e),hN(e)}re.pb=function(e){e?(this.j.info("Successfully pinged google.com"),Nn(2)):(this.j.info("Failed to ping google.com"),Nn(1))};function yN(e){if(e.H=0,e.pa=[],e.l){const t=rN(e.h);(t.length!=0||e.i.length!=0)&&(Hk(e.pa,t),Hk(e.pa,e.i),e.h.i.length=0,Xw(e.i),e.i.length=0),e.l.ya()}}function vN(e,t,n){var r=n instanceof Lo?Xi(n):new Lo(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),hp(r,r.m);else{var i=Ee.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Lo(null,void 0);r&&cp(s,r),t&&(s.g=t),i&&hp(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&pt(r,n,t),pt(r,"VER",e.qa),yh(e,r),r}function wN(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new kt(new mh({ob:!0})):new kt(e.va),t.Oa(e.I),t}function _N(){}re=_N.prototype;re.Ba=function(){};re.Aa=function(){};re.za=function(){};re.ya=function(){};re.Va=function(){};function fp(){if(_l&&!(10<=Number(EV)))throw Error("Environmental error: no available transport.")}fp.prototype.g=function(e,t){return new tr(e,t)};function tr(e,t){Xt.call(this),this.g=new cN(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ap(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ap(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Bl(this)}Zt(tr,Xt);tr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;Nn(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=vN(e,null,e.Y),Vm(e)};tr.prototype.close=function(){p_(this.g)};tr.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=i_(e),e=n);t.i.push(new QV(t.fb++,e)),t.H==3&&Vm(t)};tr.prototype.N=function(){this.g.l=null,delete this.j,p_(this.g),delete this.g,tr.$.N.call(this)};function SN(e){l_.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Zt(SN,l_);function EN(){u_.call(this),this.status=1}Zt(EN,u_);function Bl(e){this.g=e}Zt(Bl,_N);Bl.prototype.Ba=function(){sn(this.g,"a")};Bl.prototype.Aa=function(e){sn(this.g,new SN(e))};Bl.prototype.za=function(e){sn(this.g,new EN)};Bl.prototype.ya=function(){sn(this.g,"b")};function oB(){this.blockSize=-1}function $r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Zt($r,oB);$r.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ky(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}$r.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Ky(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Ky(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Ky(this,r),i=0;break}}this.h=i,this.i+=t};$r.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function qe(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var aB={};function y_(e){return-128<=e&&128>e?SA(aB,e,function(t){return new qe([t|0],0>t?-1:0)}):new qe([e|0],0>e?-1:0)}function Qr(e){if(isNaN(e)||!isFinite(e))return el;if(0>e)return nn(Qr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=F0;return new qe(t,0)}function CN(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return nn(CN(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Qr(Math.pow(t,8)),r=el,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Qr(Math.pow(t,s)),r=r.R(s).add(Qr(o))):(r=r.R(n),r=r.add(Qr(o)))}return r}var F0=4294967296,el=y_(0),U0=y_(1),iT=y_(16777216);re=qe.prototype;re.ea=function(){if(cr(this))return-nn(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:F0+r)*t,t*=F0}return e};re.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Li(this))return"0";if(cr(this))return"-"+nn(this).toString(e);for(var t=Qr(Math.pow(e,6)),n=this,r="";;){var i=mp(n,t).g;n=pp(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Li(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};re.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Li(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function cr(e){return e.h==-1}re.X=function(e){return e=pp(this,e),cr(e)?-1:Li(e)?0:1};function nn(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new qe(n,~e.h).add(U0)}re.abs=function(){return cr(this)?nn(this):this};re.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new qe(n,n[n.length-1]&-2147483648?-1:0)};function pp(e,t){return e.add(nn(t))}re.R=function(e){if(Li(this)||Li(e))return el;if(cr(this))return cr(e)?nn(this).R(nn(e)):nn(nn(this).R(e));if(cr(e))return nn(this.R(nn(e)));if(0>this.X(iT)&&0>e.X(iT))return Qr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,Ad(n,2*r+2*i),n[2*r+2*i+1]+=s*u,Ad(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ad(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ad(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new qe(n,0)};function Ad(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function mu(e,t){this.g=e,this.h=t}function mp(e,t){if(Li(t))throw Error("division by zero");if(Li(e))return new mu(el,el);if(cr(e))return t=mp(nn(e),t),new mu(nn(t.g),nn(t.h));if(cr(t))return t=mp(e,nn(t)),new mu(nn(t.g),t.h);if(30<e.g.length){if(cr(e)||cr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=U0,r=t;0>=r.X(e);)n=sT(n),r=sT(r);var i=Sa(n,1),s=Sa(r,1);for(r=Sa(r,2),n=Sa(n,2);!Li(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Sa(r,1),n=Sa(n,1)}return t=pp(e,i.R(t)),new mu(i,t)}for(i=el;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Qr(n),o=s.R(t);cr(o)||0<o.X(e);)n-=r,s=Qr(n),o=s.R(t);Li(s)&&(s=U0),i=i.add(s),e=pp(e,o)}return new mu(i,e)}re.gb=function(e){return mp(this,e).h};re.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new qe(n,this.h&e.h)};re.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new qe(n,this.h|e.h)};re.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new qe(n,this.h^e.h)};function sT(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new qe(n,e.h)}function Sa(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new qe(i,e.h)}fp.prototype.createWebChannel=fp.prototype.g;tr.prototype.send=tr.prototype.u;tr.prototype.open=tr.prototype.m;tr.prototype.close=tr.prototype.close;bm.NO_ERROR=0;bm.TIMEOUT=8;bm.HTTP_ERROR=6;BA.COMPLETE="complete";zA.EventType=dh;dh.OPEN="a";dh.CLOSE="b";dh.ERROR="c";dh.MESSAGE="d";Xt.prototype.listen=Xt.prototype.O;kt.prototype.listenOnce=kt.prototype.P;kt.prototype.getLastError=kt.prototype.Sa;kt.prototype.getLastErrorCode=kt.prototype.Ia;kt.prototype.getStatus=kt.prototype.da;kt.prototype.getResponseJson=kt.prototype.Wa;kt.prototype.getResponseText=kt.prototype.ja;kt.prototype.send=kt.prototype.ha;kt.prototype.setWithCredentials=kt.prototype.Oa;$r.prototype.digest=$r.prototype.l;$r.prototype.reset=$r.prototype.reset;$r.prototype.update=$r.prototype.j;qe.prototype.add=qe.prototype.add;qe.prototype.multiply=qe.prototype.R;qe.prototype.modulo=qe.prototype.gb;qe.prototype.compare=qe.prototype.X;qe.prototype.toNumber=qe.prototype.ea;qe.prototype.toString=qe.prototype.toString;qe.prototype.getBits=qe.prototype.D;qe.fromNumber=Qr;qe.fromString=CN;var lB=function(){return new fp},uB=function(){return Rm()},Qy=bm,cB=BA,hB=la,oT={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},dB=mh,Nd=zA,fB=kt,pB=$r,tl=qe;const aT="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let zl="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Lw("@firebase/firestore");function lT(){return Xo.logLevel}function ce(e,...t){if(Xo.logLevel<=je.DEBUG){const n=t.map(v_);Xo.debug(`Firestore (${zl}): ${e}`,...n)}}function Ji(e,...t){if(Xo.logLevel<=je.ERROR){const n=t.map(v_);Xo.error(`Firestore (${zl}): ${e}`,...n)}}function Sl(e,...t){if(Xo.logLevel<=je.WARN){const n=t.map(v_);Xo.warn(`Firestore (${zl}): ${e}`,...n)}}function v_(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Se(e="Unexpected state"){const t=`FIRESTORE (${zl}) INTERNAL ASSERTION FAILED: `+e;throw Ji(t),new Error(t)}function ot(e,t){e||Se()}function Te(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends hi{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mB{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(fn.UNAUTHENTICATED))}shutdown(){}}class gB{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yB{constructor(t){this.t=t,this.currentUser=fn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new zi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zi,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zi)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ot(typeof r.accessToken=="string"),new kN(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ot(t===null||typeof t=="string"),new fn(t)}}class vB{constructor(t,n,r){this.h=t,this.l=n,this.m=r,this.type="FirstParty",this.user=fn.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class wB{constructor(t,n,r){this.h=t,this.l=n,this.m=r}getToken(){return Promise.resolve(new vB(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(fn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _B{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SB{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const r=s=>{s.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,ce("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ot(typeof n.token=="string"),this.T=n.token,new _B(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EB(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=EB(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function He(e,t){return e<t?-1:e>t?1:0}function El(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Rc{constructor(t,n,r){n===void 0?n=0:n>t.length&&Se(),r===void 0?r=t.length-n:r>t.length-n&&Se(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Rc.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Rc?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class mt extends Rc{construct(t,n,r){return new mt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new fe(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new mt(n)}static emptyPath(){return new mt([])}}const CB=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gn extends Rc{construct(t,n,r){return new gn(t,n,r)}static isValidIdentifier(t){return CB.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gn.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gn(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new fe(H.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new fe(H.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new fe(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new fe(H.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gn(n)}static emptyPath(){return new gn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t){this.path=t}static fromPath(t){return new pe(mt.fromString(t))}static fromName(t){return new pe(mt.fromString(t).popFirst(5))}static empty(){return new pe(mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&mt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return mt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new pe(new mt(t.slice()))}}function kB(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ce.fromTimestamp(r===1e9?new Yt(n+1,0):new Yt(n,r));return new Js(i,pe.empty(),t)}function TB(e){return new Js(e.readTime,e.key,-1)}class Js{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Js(Ce.min(),pe.empty(),-1)}static max(){return new Js(Ce.max(),pe.empty(),-1)}}function xB(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=pe.comparator(e.documentKey,t.documentKey),n!==0?n:He(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DB="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IB{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vh(e){if(e.code!==H.FAILED_PRECONDITION||e.message!==DB)throw e;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class w_{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}w_.ct=-1;function Bm(e){return e==null}function gp(e){return e===0&&1/e==-1/0}function AB(e){return typeof e=="number"&&Number.isInteger(e)&&!gp(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function jl(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function xN(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,n){this.comparator=t,this.root=n||tn.EMPTY}insert(t,n){return new St(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,tn.BLACK,null,null))}remove(t){return new St(this.comparator,this.root.remove(t,this.comparator).copy(null,null,tn.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Od(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Od(this.root,t,this.comparator,!1)}getReverseIterator(){return new Od(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Od(this.root,t,this.comparator,!0)}}class Od{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class tn{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r!=null?r:tn.RED,this.left=i!=null?i:tn.EMPTY,this.right=s!=null?s:tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new tn(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return tn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Se();const t=this.left.check();if(t!==this.right.check())throw Se();return t+(this.isRed()?0:1)}}tn.EMPTY=null,tn.RED=!0,tn.BLACK=!1;tn.EMPTY=new class{constructor(){this.size=0}get key(){throw Se()}get value(){throw Se()}get color(){throw Se()}get left(){throw Se()}get right(){throw Se()}copy(e,t,n,r,i){return this}insert(e,t,n){return new tn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t){this.comparator=t,this.data=new St(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new cT(this.data.getIterator())}getIteratorFrom(t){return new cT(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof wn)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new wn(this.comparator);return n.data=t,n}}class cT{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t){this.fields=t,t.sort(gn.comparator)}static empty(){return new Or([])}unionWith(t){let n=new wn(gn.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Or(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return El(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class DN extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException!="undefined"&&i instanceof DOMException?new DN("Invalid base64 string: "+i):i}}(t);return new Cn(n)}static fromUint8Array(t){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(t);return new Cn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return He(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Cn.EMPTY_BYTE_STRING=new Cn("");const NB=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zs(e){if(ot(!!e),typeof e=="string"){let t=0;const n=NB.exec(e);if(ot(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Pt(e.seconds),nanos:Pt(e.nanos)}}function Pt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Jo(e){return typeof e=="string"?Cn.fromBase64String(e):Cn.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function S_(e){const t=e.mapValue.fields.__previous_value__;return __(t)?S_(t):t}function bc(e){const t=Zs(e.mapValue.fields.__local_write_time__.timestampValue);return new Yt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OB{constructor(t,n,r,i,s,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Pc{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Pc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Pc&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zo(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?__(e)?4:RB(e)?9007199254740991:10:Se()}function oi(e,t){if(e===t)return!0;const n=Zo(e);if(n!==Zo(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return bc(e).isEqual(bc(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Zs(r.timestampValue),o=Zs(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return Jo(r.bytesValue).isEqual(Jo(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return Pt(r.geoPointValue.latitude)===Pt(i.geoPointValue.latitude)&&Pt(r.geoPointValue.longitude)===Pt(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Pt(r.integerValue)===Pt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Pt(r.doubleValue),o=Pt(i.doubleValue);return s===o?gp(s)===gp(o):isNaN(s)&&isNaN(o)}return!1}(e,t);case 9:return El(e.arrayValue.values||[],t.arrayValue.values||[],oi);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(uT(s)!==uT(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!oi(s[a],o[a])))return!1;return!0}(e,t);default:return Se()}}function Mc(e,t){return(e.values||[]).find(n=>oi(n,t))!==void 0}function Cl(e,t){if(e===t)return 0;const n=Zo(e),r=Zo(t);if(n!==r)return He(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return He(e.booleanValue,t.booleanValue);case 2:return function(i,s){const o=Pt(i.integerValue||i.doubleValue),a=Pt(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return hT(e.timestampValue,t.timestampValue);case 4:return hT(bc(e),bc(t));case 5:return He(e.stringValue,t.stringValue);case 6:return function(i,s){const o=Jo(i),a=Jo(s);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=He(o[u],a[u]);if(c!==0)return c}return He(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,s){const o=He(Pt(i.latitude),Pt(s.latitude));return o!==0?o:He(Pt(i.longitude),Pt(s.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=Cl(o[u],a[u]);if(c)return c}return He(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,s){if(i===Rd.mapValue&&s===Rd.mapValue)return 0;if(i===Rd.mapValue)return 1;if(s===Rd.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let d=0;d<a.length&&d<c.length;++d){const p=He(a[d],c[d]);if(p!==0)return p;const m=Cl(o[a[d]],u[c[d]]);if(m!==0)return m}return He(a.length,c.length)}(e.mapValue,t.mapValue);default:throw Se()}}function hT(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return He(e,t);const n=Zs(e),r=Zs(t),i=He(n.seconds,r.seconds);return i!==0?i:He(n.nanos,r.nanos)}function kl(e){return V0(e)}function V0(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(r){const i=Zs(r);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Jo(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,pe.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=V0(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${V0(r.fields[a])}`;return s+"}"}(e.mapValue):Se();var t,n}function B0(e){return!!e&&"integerValue"in e}function E_(e){return!!e&&"arrayValue"in e}function dT(e){return!!e&&"nullValue"in e}function fT(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function sf(e){return!!e&&"mapValue"in e}function Yu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return jl(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Yu(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Yu(e.arrayValue.values[n]);return t}return Object.assign({},e)}function RB(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t){this.value=t}static empty(){return new hr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!sf(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Yu(n)}setAll(t){let n=gn.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Yu(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());sf(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return oi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];sf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){jl(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new hr(Yu(this.value))}}function IN(e){const t=[];return jl(e.fields,(n,r)=>{const i=new gn([n]);if(sf(r)){const s=IN(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Or(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new mn(t,0,Ce.min(),Ce.min(),Ce.min(),hr.empty(),0)}static newFoundDocument(t,n,r,i){return new mn(t,1,n,Ce.min(),r,i,0)}static newNoDocument(t,n){return new mn(t,2,n,Ce.min(),Ce.min(),hr.empty(),0)}static newUnknownDocument(t,n){return new mn(t,3,n,Ce.min(),Ce.min(),hr.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=hr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=hr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof mn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new mn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yp{constructor(t,n){this.position=t,this.inclusive=n}}function pT(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=pe.comparator(pe.fromName(o.referenceValue),n.key):r=Cl(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function mT(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!oi(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Wu{constructor(t,n="asc"){this.field=t,this.dir=n}}function bB(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class AN{}class Bt extends AN{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new MB(t,n,r):n==="array-contains"?new FB(t,r):n==="in"?new UB(t,r):n==="not-in"?new VB(t,r):n==="array-contains-any"?new BB(t,r):new Bt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new LB(t,r):new $B(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Cl(n,this.value)):n!==null&&Zo(this.value)===Zo(n)&&this.matchesComparison(Cl(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ai extends AN{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new ai(t,n)}matches(t){return NN(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function NN(e){return e.op==="and"}function ON(e){return PB(e)&&NN(e)}function PB(e){for(const t of e.filters)if(t instanceof ai)return!1;return!0}function z0(e){if(e instanceof Bt)return e.field.canonicalString()+e.op.toString()+kl(e.value);if(ON(e))return e.filters.map(t=>z0(t)).join(",");{const t=e.filters.map(n=>z0(n)).join(",");return`${e.op}(${t})`}}function RN(e,t){return e instanceof Bt?function(n,r){return r instanceof Bt&&n.op===r.op&&n.field.isEqual(r.field)&&oi(n.value,r.value)}(e,t):e instanceof ai?function(n,r){return r instanceof ai&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&RN(s,r.filters[o]),!0):!1}(e,t):void Se()}function bN(e){return e instanceof Bt?function(t){return`${t.field.canonicalString()} ${t.op} ${kl(t.value)}`}(e):e instanceof ai?function(t){return t.op.toString()+" {"+t.getFilters().map(bN).join(" ,")+"}"}(e):"Filter"}class MB extends Bt{constructor(t,n,r){super(t,n,r),this.key=pe.fromName(r.referenceValue)}matches(t){const n=pe.comparator(t.key,this.key);return this.matchesComparison(n)}}class LB extends Bt{constructor(t,n){super(t,"in",n),this.keys=PN("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class $B extends Bt{constructor(t,n){super(t,"not-in",n),this.keys=PN("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function PN(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>pe.fromName(r.referenceValue))}class FB extends Bt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return E_(n)&&Mc(n.arrayValue,this.value)}}class UB extends Bt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Mc(this.value.arrayValue,n)}}class VB extends Bt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Mc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Mc(this.value.arrayValue,n)}}class BB extends Bt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!E_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mc(this.value.arrayValue,r))}}/**
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
 */class zB{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function gT(e,t=null,n=[],r=[],i=null,s=null,o=null){return new zB(e,t,n,r,i,s,o)}function C_(e){const t=Te(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>z0(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bm(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>kl(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>kl(r)).join(",")),t.ft=n}return t.ft}function k_(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!bB(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!RN(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!mT(e.startAt,t.startAt)&&mT(e.endAt,t.endAt)}function j0(e){return pe.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function jB(e,t,n,r,i,s,o,a){return new zm(e,t,n,r,i,s,o,a)}function T_(e){return new zm(e)}function yT(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function YB(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function WB(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function HB(e){return e.collectionGroup!==null}function nl(e){const t=Te(e);if(t.dt===null){t.dt=[];const n=WB(t),r=YB(t);if(n!==null&&r===null)n.isKeyField()||t.dt.push(new Wu(n)),t.dt.push(new Wu(gn.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Wu(gn.keyField(),s))}}}return t.dt}function Zi(e){const t=Te(e);if(!t._t)if(t.limitType==="F")t._t=gT(t.path,t.collectionGroup,nl(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of nl(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new Wu(s.field,o))}const r=t.endAt?new yp(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new yp(t.startAt.position,t.startAt.inclusive):null;t._t=gT(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t._t}function Y0(e,t,n){return new zm(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function jm(e,t){return k_(Zi(e),Zi(t))&&e.limitType===t.limitType}function MN(e){return`${C_(Zi(e))}|lt:${e.limitType}`}function W0(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(r=>bN(r)).join(", ")}]`),Bm(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>kl(r)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>kl(r)).join(",")),`Target(${n})`}(Zi(e))}; limitType=${e.limitType})`}function Ym(e,t){return t.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):pe.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,r){for(const i of nl(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=pT(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,nl(n),r)||n.endAt&&!function(i,s,o){const a=pT(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,nl(n),r))}(e,t)}function GB(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function LN(e){return(t,n)=>{let r=!1;for(const i of nl(e)){const s=qB(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qB(e,t,n){const r=e.field.isKeyField()?pe.comparator(t.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Cl(a,u):Se()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Se()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){jl(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return xN(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KB=new St(pe.comparator);function es(){return KB}const $N=new St(pe.comparator);function Au(...e){let t=$N;for(const n of e)t=t.insert(n.key,n);return t}function FN(e){let t=$N;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Oo(){return Hu()}function UN(){return Hu()}function Hu(){return new Yl(e=>e.toString(),(e,t)=>e.isEqual(t))}const QB=new St(pe.comparator),XB=new wn(pe.comparator);function Pe(...e){let t=XB;for(const n of e)t=t.add(n);return t}const JB=new wn(He);function ZB(){return JB}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gp(t)?"-0":t}}function BN(e){return{integerValue:""+e}}function ez(e,t){return AB(t)?BN(t):VN(e,t)}/**
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
 */class Wm{constructor(){this._=void 0}}function tz(e,t,n){return e instanceof vp?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&__(i)&&(i=S_(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,t):e instanceof Lc?jN(e,t):e instanceof $c?YN(e,t):function(r,i){const s=zN(r,i),o=vT(s)+vT(r.wt);return B0(s)&&B0(r.wt)?BN(o):VN(r.serializer,o)}(e,t)}function nz(e,t,n){return e instanceof Lc?jN(e,t):e instanceof $c?YN(e,t):n}function zN(e,t){return e instanceof wp?B0(n=t)||function(r){return!!r&&"doubleValue"in r}(n)?t:{integerValue:0}:null;var n}class vp extends Wm{}class Lc extends Wm{constructor(t){super(),this.elements=t}}function jN(e,t){const n=WN(t);for(const r of e.elements)n.some(i=>oi(i,r))||n.push(r);return{arrayValue:{values:n}}}class $c extends Wm{constructor(t){super(),this.elements=t}}function YN(e,t){let n=WN(t);for(const r of e.elements)n=n.filter(i=>!oi(i,r));return{arrayValue:{values:n}}}class wp extends Wm{constructor(t,n){super(),this.serializer=t,this.wt=n}}function vT(e){return Pt(e.integerValue||e.doubleValue)}function WN(e){return E_(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function rz(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof Lc&&r instanceof Lc||n instanceof $c&&r instanceof $c?El(n.elements,r.elements,oi):n instanceof wp&&r instanceof wp?oi(n.wt,r.wt):n instanceof vp&&r instanceof vp}(e.transform,t.transform)}class iz{constructor(t,n){this.version=t,this.transformResults=n}}class ii{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ii}static exists(t){return new ii(void 0,t)}static updateTime(t){return new ii(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function of(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Hm{}function HN(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new qN(e.key,ii.none()):new _h(e.key,e.data,ii.none());{const n=e.data,r=hr.empty();let i=new wn(gn.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ua(e.key,r,new Or(i.toArray()),ii.none())}}function sz(e,t,n){e instanceof _h?function(r,i,s){const o=r.value.clone(),a=_T(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(e,t,n):e instanceof ua?function(r,i,s){if(!of(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=_T(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(GN(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(e,t,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,t,n)}function Gu(e,t,n,r){return e instanceof _h?function(i,s,o,a){if(!of(i.precondition,s))return o;const u=i.value.clone(),c=ST(i.fieldTransforms,a,s);return u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof ua?function(i,s,o,a){if(!of(i.precondition,s))return o;const u=ST(i.fieldTransforms,a,s),c=s.data;return c.setAll(GN(i)),c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(e,t,n,r):function(i,s,o){return of(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(e,t,n)}function oz(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=zN(r.transform,i||null);s!=null&&(n===null&&(n=hr.empty()),n.set(r.field,s))}return n||null}function wT(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&El(n,r,(i,s)=>rz(i,s))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class _h extends Hm{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ua extends Hm{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function GN(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function _T(e,t,n){const r=new Map;ot(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,nz(o,a,n[i]))}return r}function ST(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tz(s,o,t))}return r}class qN extends Hm{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class az extends Hm{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lz{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&sz(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Gu(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Gu(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=UN();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=HN(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Ce.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Pe())}isEqual(t){return this.batchId===t.batchId&&El(this.mutations,t.mutations,(n,r)=>wT(n,r))&&El(this.baseMutations,t.baseMutations,(n,r)=>wT(n,r))}}class x_{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){ot(t.mutations.length===r.length);let i=QB;const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new x_(t,n,r,i)}}/**
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
 */class uz{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class cz{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt,Fe;function hz(e){switch(e){default:return Se();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function KN(e){if(e===void 0)return Ji("GRPC error has no .code"),H.UNKNOWN;switch(e){case bt.OK:return H.OK;case bt.CANCELLED:return H.CANCELLED;case bt.UNKNOWN:return H.UNKNOWN;case bt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case bt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case bt.INTERNAL:return H.INTERNAL;case bt.UNAVAILABLE:return H.UNAVAILABLE;case bt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case bt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case bt.NOT_FOUND:return H.NOT_FOUND;case bt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case bt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case bt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case bt.ABORTED:return H.ABORTED;case bt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case bt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case bt.DATA_LOSS:return H.DATA_LOSS;default:return Se()}}(Fe=bt||(bt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class D_{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return bd}static getOrCreateInstance(){return bd===null&&(bd=new D_),bd}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let bd=null;/**
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
 */function dz(){return new TextEncoder}/**
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
 */const fz=new tl([4294967295,4294967295],0);function ET(e){const t=dz().encode(e),n=new pB;return n.update(t),new Uint8Array(n.digest())}function CT(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new tl([n,r],0),new tl([i,s],0)]}class I_{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Nu(`Invalid padding: ${n}`);if(r<0)throw new Nu(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Nu(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Nu(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*t.length-n,this.It=tl.fromNumber(this.yt)}Tt(t,n,r){let i=t.add(n.multiply(tl.fromNumber(r)));return i.compare(fz)===1&&(i=new tl([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}At(t){if(this.yt===0)return!1;const n=ET(t),[r,i]=CT(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new I_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.yt===0)return;const n=ET(t),[r,i]=CT(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Nu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Sh.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Gm(Ce.min(),i,new St(He),es(),Pe())}}class Sh{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Sh(r,n,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,n,r,i){this.vt=t,this.removedTargetIds=n,this.key=r,this.Pt=i}}class QN{constructor(t,n){this.targetId=t,this.bt=n}}class XN{constructor(t,n,r=Cn.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class kT{constructor(){this.Vt=0,this.St=xT(),this.Dt=Cn.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(t){t.approximateByteSize()>0&&(this.xt=!0,this.Dt=t)}Ot(){let t=Pe(),n=Pe(),r=Pe();return this.St.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Se()}}),new Sh(this.Dt,this.Ct,t,n,r)}$t(){this.xt=!1,this.St=xT()}Ft(t,n){this.xt=!0,this.St=this.St.insert(t,n)}Bt(t){this.xt=!0,this.St=this.St.remove(t)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class pz{constructor(t){this.Kt=t,this.Gt=new Map,this.Qt=es(),this.jt=TT(),this.zt=new St(He)}Wt(t){for(const n of t.vt)t.Pt&&t.Pt.isFoundDocument()?this.Ht(n,t.Pt):this.Jt(n,t.key,t.Pt);for(const n of t.removedTargetIds)this.Jt(n,t.key,t.Pt)}Yt(t){this.forEachTarget(t,n=>{const r=this.Xt(n);switch(t.state){case 0:this.Zt(n)&&r.Mt(t.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(t.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(t.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(t.resumeToken));break;default:Se()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(t){var n;const r=t.targetId,i=t.bt.count,s=this.ne(r);if(s){const o=s.target;if(j0(o))if(i===0){const a=new pe(o.path);this.Jt(r,a,mn.newNoDocument(a,Ce.min()))}else ot(i===1);else{const a=this.se(r);if(a!==i){const u=this.ie(t,a);if(u!==0){this.te(r);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,c)}(n=D_.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,d,p){var m,v,w,_,k,S;const y={localCacheCount:d,existenceFilterCount:p.count},C=p.unchangedNames;return C&&(y.bloomFilter={applied:c===0,hashCount:(m=C==null?void 0:C.hashCount)!==null&&m!==void 0?m:0,bitmapLength:(_=(w=(v=C==null?void 0:C.bits)===null||v===void 0?void 0:v.bitmap)===null||w===void 0?void 0:w.length)!==null&&_!==void 0?_:0,padding:(S=(k=C==null?void 0:C.bits)===null||k===void 0?void 0:k.padding)!==null&&S!==void 0?S:0}),y}(u,a,t.bt))}}}}ie(t,n){const{unchangedNames:r,count:i}=t.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let u,c;try{u=Jo(s).toUint8Array()}catch(d){if(d instanceof DN)return Sl("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw d}try{c=new I_(u,o,a)}catch(d){return Sl(d instanceof Nu?"BloomFilter error: ":"Applying bloom filter failed: ",d),1}return c.yt===0?1:i!==n-this.re(t.targetId,c)?2:0}re(t,n){const r=this.Kt.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(t,s,null),i++)}),i}ue(t){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&j0(a.target)){const u=new pe(a.target.path);this.Qt.get(u)!==null||this.ce(o,u)||this.Jt(o,u,mn.newNoDocument(u,t))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=Pe();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.ne(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(t));const i=new Gm(t,n,this.zt,this.Qt,r);return this.Qt=es(),this.jt=TT(),this.zt=new St(He),i}Ht(t,n){if(!this.Zt(t))return;const r=this.ce(t,n.key)?2:0;this.Xt(t).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(t))}Jt(t,n,r){if(!this.Zt(t))return;const i=this.Xt(t);this.ce(t,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(t)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(t){this.Gt.delete(t)}se(t){const n=this.Xt(t).Ot();return this.Kt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Lt(t){this.Xt(t).Lt()}Xt(t){let n=this.Gt.get(t);return n||(n=new kT,this.Gt.set(t,n)),n}ae(t){let n=this.jt.get(t);return n||(n=new wn(He),this.jt=this.jt.insert(t,n)),n}Zt(t){const n=this.ne(t)!==null;return n||ce("WatchChangeAggregator","Detected inactive target",t),n}ne(t){const n=this.Gt.get(t);return n&&n.Nt?null:this.Kt.he(t)}te(t){this.Gt.set(t,new kT),this.Kt.getRemoteKeysForTarget(t).forEach(n=>{this.Jt(t,n,null)})}ce(t,n){return this.Kt.getRemoteKeysForTarget(t).has(n)}}function TT(){return new St(pe.comparator)}function xT(){return new St(pe.comparator)}const mz=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gz=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),yz=(()=>({and:"AND",or:"OR"}))();class vz{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function H0(e,t){return e.useProto3Json||Bm(t)?t:{value:t}}function _p(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function JN(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function wz(e,t){return _p(e,t.toTimestamp())}function si(e){return ot(!!e),Ce.fromTimestamp(function(t){const n=Zs(t);return new Yt(n.seconds,n.nanos)}(e))}function A_(e,t){return function(n){return new mt(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function ZN(e){const t=mt.fromString(e);return ot(rO(t)),t}function G0(e,t){return A_(e.databaseId,t.path)}function Xy(e,t){const n=ZN(t);if(n.get(1)!==e.databaseId.projectId)throw new fe(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new fe(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new pe(eO(n))}function q0(e,t){return A_(e.databaseId,t)}function _z(e){const t=ZN(e);return t.length===4?mt.emptyPath():eO(t)}function K0(e){return new mt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function eO(e){return ot(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function DT(e,t,n){return{name:G0(e,t),fields:n.value.mapValue.fields}}function Sz(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Se()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ot(c===void 0||typeof c=="string"),Cn.fromBase64String(c||"")):(ot(c===void 0||c instanceof Uint8Array),Cn.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?H.UNKNOWN:KN(u.code);return new fe(c,u.message||"")}(o);n=new XN(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xy(e,r.document.name),s=si(r.document.updateTime),o=r.document.createTime?si(r.document.createTime):Ce.min(),a=new hr({mapValue:{fields:r.document.fields}}),u=mn.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new af(c,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Xy(e,r.document),s=r.readTime?si(r.readTime):Ce.min(),o=mn.newNoDocument(i,s),a=r.removedTargetIds||[];n=new af([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Xy(e,r.document),s=r.removedTargetIds||[];n=new af([],s,i,null)}else{if(!("filter"in t))return Se();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new cz(i,s),a=r.targetId;n=new QN(a,o)}}return n}function Ez(e,t){let n;if(t instanceof _h)n={update:DT(e,t.key,t.value)};else if(t instanceof qN)n={delete:G0(e,t.key)};else if(t instanceof ua)n={update:DT(e,t.key,t.data),updateMask:Oz(t.fieldMask)};else{if(!(t instanceof az))return Se();n={verify:G0(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof vp)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Lc)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $c)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof wp)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw Se()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:wz(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Se()}(e,t.precondition)),n}function Cz(e,t){return e&&e.length>0?(ot(t!==void 0),e.map(n=>function(r,i){let s=r.updateTime?si(r.updateTime):si(i);return s.isEqual(Ce.min())&&(s=si(i)),new iz(s,r.transformResults||[])}(n,t))):[]}function kz(e,t){return{documents:[q0(e,t.path)]}}function Tz(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=q0(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=q0(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return nO(ai.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:Ca(d.field),direction:Iz(d.dir)}}(c))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=H0(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function xz(e){let t=_z(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ot(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:t=t.child(d.collectionId)}let s=[];n.where&&(s=function(d){const p=tO(d);return p instanceof ai&&ON(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(d=>function(p){return new Wu(ka(p.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d)));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Bm(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(d){const p=!!d.before,m=d.values||[];return new yp(m,p)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const p=!d.before,m=d.values||[];return new yp(m,p)}(n.endAt)),jB(t,i,o,s,a,"F",u,c)}function Dz(e,t){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function tO(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ka(t.unaryFilter.field);return Bt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ka(t.unaryFilter.field);return Bt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ka(t.unaryFilter.field);return Bt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ka(t.unaryFilter.field);return Bt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Se()}}(e):e.fieldFilter!==void 0?function(t){return Bt.create(ka(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return ai.create(t.compositeFilter.filters.map(n=>tO(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Se()}}(t.compositeFilter.op))}(e):Se()}function Iz(e){return mz[e]}function Az(e){return gz[e]}function Nz(e){return yz[e]}function Ca(e){return{fieldPath:e.canonicalString()}}function ka(e){return gn.fromServerFormat(e.fieldPath)}function nO(e){return e instanceof Bt?function(t){if(t.op==="=="){if(fT(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NAN"}};if(dT(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fT(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NOT_NAN"}};if(dT(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ca(t.field),op:Az(t.op),value:t.value}}}(e):e instanceof ai?function(t){const n=t.getFilters().map(r=>nO(r));return n.length===1?n[0]:{compositeFilter:{op:Nz(t.op),filters:n}}}(e):Se()}function Oz(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function rO(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,n,r,i,s=Ce.min(),o=Ce.min(),a=Cn.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new xs(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new xs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new xs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new xs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rz{constructor(t){this.le=t}}function bz(e){const t=xz({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Y0(t,t.limit,"L"):t}/**
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
 */class Pz{constructor(){this.sn=new Mz}addToCollectionParentIndex(t,n){return this.sn.add(n),Q.resolve()}getCollectionParents(t,n){return Q.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return Q.resolve()}deleteFieldIndex(t,n){return Q.resolve()}getDocumentsMatchingTarget(t,n){return Q.resolve(null)}getIndexType(t,n){return Q.resolve(0)}getFieldIndexes(t,n){return Q.resolve([])}getNextCollectionGroupToUpdate(t){return Q.resolve(null)}getMinOffset(t,n){return Q.resolve(Js.min())}getMinOffsetFromCollectionGroup(t,n){return Q.resolve(Js.min())}updateCollectionGroup(t,n,r){return Q.resolve()}updateIndexEntries(t,n){return Q.resolve()}}class Mz{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new wn(mt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new wn(mt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Lz{constructor(){this.changes=new Yl(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,mn.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?Q.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $z{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fz{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Gu(r.mutation,i,Or.empty(),Yt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Pe()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Pe()){const i=Oo();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Au();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Oo();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Pe()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=es();const o=Hu(),a=Hu();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ua)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Gu(d.mutation,c,d.mutation.getFieldMask(),Yt.now())):o.set(c.key,Or.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return a.set(c,new $z(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Hu();let i=new St((o,a)=>o-a),s=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Or.empty();d=a.applyToLocalView(c,d),r.set(u,d);const p=(i.get(a.batchId)||Pe()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,p=UN();d.forEach(m=>{if(!s.has(m)){const v=HN(n.get(m),r.get(m));v!==null&&p.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,p))}return Q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return pe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):HB(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):Q.resolve(Oo());let a=-1,u=s;return o.next(c=>Q.forEach(c,(d,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(d)?Q.resolve():this.remoteDocumentCache.getEntry(t,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,Pe())).next(d=>({batchId:a,changes:FN(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new pe(n)).next(r=>{let i=Au();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=Au();return this.indexManager.getCollectionParents(t,i).next(o=>Q.forEach(o,a=>{const u=function(c,d){return new zm(d,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r).next(c=>{c.forEach((d,p)=>{s=s.insert(d,p)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,u)=>{const c=u.getKey();s.get(c)===null&&(s=s.insert(c,mn.newInvalidDocument(c)))});let o=Au();return s.forEach((a,u)=>{const c=i.get(a);c!==void 0&&Gu(c.mutation,u,Or.empty(),Yt.now()),Ym(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uz{constructor(t){this.serializer=t,this.us=new Map,this.cs=new Map}getBundleMetadata(t,n){return Q.resolve(this.us.get(n))}saveBundleMetadata(t,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:si(r.createTime)}),Q.resolve()}getNamedQuery(t,n){return Q.resolve(this.cs.get(n))}saveNamedQuery(t,n){return this.cs.set(n.name,function(r){return{name:r.name,query:bz(r.bundledQuery),readTime:si(r.readTime)}}(n)),Q.resolve()}}/**
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
 */class Vz{constructor(){this.overlays=new St(pe.comparator),this.hs=new Map}getOverlay(t,n){return Q.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Oo();return Q.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.de(t,n,s)}),Q.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),Q.resolve()}getOverlaysForCollection(t,n,r){const i=Oo(),s=n.length+1,o=new pe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return Q.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new St((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Oo(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Oo(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return Q.resolve(a)}de(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uz(n,r));let s=this.hs.get(n);s===void 0&&(s=Pe(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.ls=new wn(Ht.fs),this.ds=new wn(Ht._s)}isEmpty(){return this.ls.isEmpty()}addReference(t,n){const r=new Ht(t,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.gs(new Ht(t,n))}ys(t,n){t.forEach(r=>this.removeReference(r,n))}ps(t){const n=new pe(new mt([])),r=new Ht(n,t),i=new Ht(n,t+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(t=>this.gs(t))}gs(t){this.ls=this.ls.delete(t),this.ds=this.ds.delete(t)}Ts(t){const n=new pe(new mt([])),r=new Ht(n,t),i=new Ht(n,t+1);let s=Pe();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Ht(t,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ht{constructor(t,n){this.key=t,this.Es=n}static fs(t,n){return pe.comparator(t.key,n.key)||He(t.Es,n.Es)}static _s(t,n){return He(t.Es,n.Es)||pe.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bz{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new wn(Ht.fs)}checkEmpty(t){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lz(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Ht(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return Q.resolve(o)}lookupMutationBatch(t,n){return Q.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return Q.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(t){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ht(n,0),i=new Ht(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),Q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new wn(He);return n.forEach(i=>{const s=new Ht(i,0),o=new Ht(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),Q.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;pe.isDocumentKey(s)||(s=s.child(""));const o=new Ht(new pe(s),0);let a=new wn(He);return this.Rs.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.Es)),!0)},o),Q.resolve(this.bs(a))}bs(t){const n=[];return t.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){ot(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return Q.forEach(n.mutations,i=>{const s=new Ht(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=r})}Dn(t){}containsKey(t,n){const r=new Ht(n,0),i=this.Rs.firstAfterOrEqual(r);return Q.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,Q.resolve()}Vs(t,n){return this.Ps(t)}Ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}vs(t){const n=this.Ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zz{constructor(t){this.Ss=t,this.docs=new St(pe.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return Q.resolve(r?r.document.mutableCopy():mn.newInvalidDocument(n))}getEntries(t,n){let r=es();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():mn.newInvalidDocument(i))}),Q.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=es();const o=n.path,a=new pe(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||xB(TB(d),r)<=0||(i.has(d.key)||Ym(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return Q.resolve(s)}getAllFromCollectionGroup(t,n,r,i){Se()}Ds(t,n){return Q.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new jz(this)}getSize(t){return Q.resolve(this.size)}}class jz extends Lz{constructor(t){super(),this.rs=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(t,i)):this.rs.removeEntry(r)}),Q.waitFor(n)}getFromCache(t,n){return this.rs.getEntry(t,n)}getAllFromCache(t,n){return this.rs.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yz{constructor(t){this.persistence=t,this.Cs=new Yl(n=>C_(n),k_),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.xs=0,this.Ns=new N_,this.targetCount=0,this.ks=Tl.Nn()}forEachTarget(t,n){return this.Cs.forEach((r,i)=>n(i)),Q.resolve()}getLastRemoteSnapshotVersion(t){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Q.resolve(this.xs)}allocateTargetId(t){return this.highestTargetId=this.ks.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),Q.resolve()}$n(t){this.Cs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ks=new Tl(n),this.highestTargetId=n),t.sequenceNumber>this.xs&&(this.xs=t.sequenceNumber)}addTargetData(t,n){return this.$n(n),this.targetCount+=1,Q.resolve()}updateTargetData(t,n){return this.$n(n),Q.resolve()}removeTargetData(t,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),Q.waitFor(s).next(()=>i)}getTargetCount(t){return Q.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cs.get(n)||null;return Q.resolve(r)}addMatchingKeys(t,n,r){return this.Ns.ws(n,r),Q.resolve()}removeMatchingKeys(t,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),Q.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Ns.ps(n),Q.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ns.Ts(n);return Q.resolve(r)}containsKey(t,n){return Q.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wz{constructor(t,n){this.Ms={},this.overlays={},this.Os=new w_(0),this.$s=!1,this.$s=!0,this.referenceDelegate=t(this),this.Fs=new Yz(this),this.indexManager=new Pz,this.remoteDocumentCache=function(r){return new zz(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new Rz(n),this.Ls=new Uz(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Vz,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Ms[t.toKey()];return r||(r=new Bz(n,this.referenceDelegate),this.Ms[t.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(t,n,r){ce("MemoryPersistence","Starting transaction:",t);const i=new Hz(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(t,n){return Q.or(Object.values(this.Ms).map(r=>()=>r.containsKey(t,n)))}}class Hz extends IB{constructor(t){super(),this.currentSequenceNumber=t}}class O_{constructor(t){this.persistence=t,this.Gs=new N_,this.Qs=null}static js(t){return new O_(t)}get zs(){if(this.Qs)return this.Qs;throw Se()}addReference(t,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),Q.resolve()}removeReference(t,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),Q.resolve()}markPotentiallyOrphaned(t,n){return this.zs.add(n.toString()),Q.resolve()}removeTarget(t,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}qs(){this.Qs=new Set}Us(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.zs,r=>{const i=pe.fromPath(r);return this.Ws(t,i).next(s=>{s||n.removeEntry(i,Ce.min())})}).next(()=>(this.Qs=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ws(t,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(t){return 0}Ws(t,n){return Q.or([()=>Q.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ks(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gz{constructor(){this.Li=!1}initialize(t,n){this.qi=t,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(t,n,r,i){return this.Ui(t,n).next(s=>s||this.Ki(t,n,i,r)).next(s=>s||this.Gi(t,n))}Ui(t,n){if(yT(n))return Q.resolve(null);let r=Zi(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Y0(n,null,"F"),r=Zi(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=Pe(...s);return this.qi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Qi(n,a);return this.ji(n,c,o,u.readTime)?this.Ui(t,Y0(n,null,"F")):this.zi(t,c,n,u)}))})))}Ki(t,n,r,i){return yT(n)||i.isEqual(Ce.min())?this.Gi(t,n):this.qi.getDocuments(t,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(t,n):(lT()<=je.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),W0(n)),this.zi(t,o,n,kB(i,-1)))})}Qi(t,n){let r=new wn(LN(t));return n.forEach((i,s)=>{Ym(t,s)&&(r=r.add(s))}),r}ji(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(t,n){return lT()<=je.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",W0(n)),this.qi.getDocumentsMatchingQuery(t,n,Js.min())}zi(t,n,r,i){return this.qi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qz{constructor(t,n,r,i){this.persistence=t,this.Wi=n,this.serializer=i,this.Hi=new St(He),this.Ji=new Yl(s=>C_(s),k_),this.Yi=new Map,this.Xi=t.getRemoteDocumentCache(),this.Fs=t.getTargetCache(),this.Ls=t.getBundleCache(),this.Zi(r)}Zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Fz(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Hi))}}function Kz(e,t,n,r){return new qz(e,t,n,r)}async function iO(e,t){const n=Te(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Pe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function Qz(e,t){const n=Te(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const d=u.batch,p=d.keys();let m=Q.resolve();return p.forEach(v=>{m=m.next(()=>c.getEntry(a,v)).next(w=>{const _=u.docVersions.get(v);ot(_!==null),w.version.compareTo(_)<0&&(d.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),m.next(()=>o.mutationQueue.removeMutationBatch(a,d))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Pe();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function sO(e){const t=Te(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Fs.getLastRemoteSnapshotVersion(n))}function Xz(e,t){const n=Te(e),r=t.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];t.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;a.push(n.Fs.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Fs.addMatchingKeys(s,d.addedDocuments,p)));let v=m.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(p)!==null?v=v.withResumeToken(Cn.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(p,v),function(w,_,k){return w.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,v,d)&&a.push(n.Fs.updateTargetData(s,v))});let u=es(),c=Pe();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(Jz(s,o,t.documentUpdates).next(d=>{u=d.er,c=d.nr})),!r.isEqual(Ce.min())){const d=n.Fs.getLastRemoteSnapshotVersion(s).next(p=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return Q.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Hi=i,s))}function Jz(e,t,n){let r=Pe(),i=Pe();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=es();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Ce.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):ce("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{er:o,nr:i}})}function Zz(e,t){const n=Te(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function ej(e,t){const n=Te(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,t).next(s=>s?(i=s,Q.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new xs(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(t,r.targetId)),r})}async function Q0(e,t,n){const r=Te(e),i=r.Hi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wh(o))throw o;ce("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Hi=r.Hi.remove(t),r.Ji.delete(i.target)}function IT(e,t,n){const r=Te(e);let i=Ce.min(),s=Pe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const d=Te(a),p=d.Ji.get(c);return p!==void 0?Q.resolve(d.Hi.get(p)):d.Fs.getTargetData(u,c)}(r,o,Zi(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,t,n?i:Ce.min(),n?s:Pe())).next(a=>(tj(r,GB(t),a),{documents:a,sr:s})))}function tj(e,t,n){let r=e.Yi.get(t)||Ce.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Yi.set(t,r)}class AT{constructor(){this.activeTargetIds=ZB()}hr(t){this.activeTargetIds=this.activeTargetIds.add(t)}lr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ar(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class nj{constructor(){this.Wr=new AT,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Wr.hr(t),this.Hr[t]||"not-current"}updateQueryState(t,n,r){this.Hr[t]=n}removeLocalQueryTarget(t){this.Wr.lr(t)}isLocalQueryTarget(t){return this.Wr.activeTargetIds.has(t)}clearQueryState(t){delete this.Hr[t]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(t){return this.Wr.activeTargetIds.has(t)}start(){return this.Wr=new AT,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class rj{Jr(t){}shutdown(){}}/**
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
 */class NT{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(t){this.no.push(t)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){ce("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.no)t(0)}eo(){ce("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.no)t(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pd=null;function Jy(){return Pd===null?Pd=268435456+Math.round(2147483648*Math.random()):Pd++,"0x"+Pd.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ij={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj{constructor(t){this.io=t.io,this.ro=t.ro}oo(t){this.uo=t}co(t){this.ao=t}onMessage(t){this.ho=t}close(){this.ro()}send(t){this.io(t)}lo(){this.uo()}fo(t){this.ao(t)}_o(t){this.ho(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="WebChannelConnection";class oj extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.wo=n+"://"+t.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(t,n,r,i,s){const o=Jy(),a=this.Io(t,n);ce("RestConnection",`Sending RPC '${t}' ${o}:`,a,r);const u={};return this.To(u,i,s),this.Eo(t,a,u,r).then(c=>(ce("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw Sl("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}Ao(t,n,r,i,s,o){return this.po(t,n,r,i,s)}To(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+zl,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>t[s]=i),r&&r.headers.forEach((i,s)=>t[s]=i)}Io(t,n){const r=ij[t];return`${this.wo}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Eo(t,n,r,i){const s=Jy();return new Promise((o,a)=>{const u=new fB;u.setWithCredentials(!0),u.listenOnce(cB.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Qy.NO_ERROR:const d=u.getResponseJson();ce(hn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(d)),o(d);break;case Qy.TIMEOUT:ce(hn,`RPC '${t}' ${s} timed out`),a(new fe(H.DEADLINE_EXCEEDED,"Request time out"));break;case Qy.HTTP_ERROR:const p=u.getStatus();if(ce(hn,`RPC '${t}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const w=function(_){const k=_.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(k)>=0?k:H.UNKNOWN}(v.status);a(new fe(w,v.message))}else a(new fe(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new fe(H.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{ce(hn,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);ce(hn,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Ro(t,n,r){const i=Jy(),s=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=lB(),a=uB(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(u.xmlHttpFactory=new dB({})),this.To(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=s.join("");ce(hn,`Creating RPC '${t}' stream ${i}: ${c}`,u);const d=o.createWebChannel(c,u);let p=!1,m=!1;const v=new sj({io:_=>{m?ce(hn,`Not sending because RPC '${t}' stream ${i} is closed:`,_):(p||(ce(hn,`Opening RPC '${t}' stream ${i} transport.`),d.open(),p=!0),ce(hn,`RPC '${t}' stream ${i} sending:`,_),d.send(_))},ro:()=>d.close()}),w=(_,k,S)=>{_.listen(k,y=>{try{S(y)}catch(C){setTimeout(()=>{throw C},0)}})};return w(d,Nd.EventType.OPEN,()=>{m||ce(hn,`RPC '${t}' stream ${i} transport opened.`)}),w(d,Nd.EventType.CLOSE,()=>{m||(m=!0,ce(hn,`RPC '${t}' stream ${i} transport closed`),v.fo())}),w(d,Nd.EventType.ERROR,_=>{m||(m=!0,Sl(hn,`RPC '${t}' stream ${i} transport errored:`,_),v.fo(new fe(H.UNAVAILABLE,"The operation could not be completed")))}),w(d,Nd.EventType.MESSAGE,_=>{var k;if(!m){const S=_.data[0];ot(!!S);const y=S,C=y.error||((k=y[0])===null||k===void 0?void 0:k.error);if(C){ce(hn,`RPC '${t}' stream ${i} received error:`,C);const x=C.status;let A=function(N){const O=bt[N];if(O!==void 0)return KN(O)}(x),R=C.message;A===void 0&&(A=H.INTERNAL,R="Unknown error status: "+x+" with message "+C.message),m=!0,v.fo(new fe(A,R)),d.close()}else ce(hn,`RPC '${t}' stream ${i} received:`,S),v._o(S)}}),w(a,hB.STAT_EVENT,_=>{_.stat===oT.PROXY?ce(hn,`RPC '${t}' stream ${i} detected buffering proxy`):_.stat===oT.NOPROXY&&ce(hn,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.lo()},0),v}}function Zy(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(e){return new vz(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(t){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&ce("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),t())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(t,n,r,i,s,o,a,u){this.si=t,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new oO(t,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(t){this.Wo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(t,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,t!==4?this.Lo.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Ji(n.toString()),Ji("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(n)}Jo(){}auth(){this.state=1;const t=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{t(()=>{const i=new fe(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(t,n){const r=this.Yo(this.$o);this.stream=this.tu(t,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(t){return ce("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Yo(t){return n=>{this.si.enqueueAndForget(()=>this.$o===t?n():(ce("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aj extends aO{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.Lo.reset();const n=Sz(this.serializer,t),r=function(i){if(!("targetChange"in i))return Ce.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Ce.min():s.readTime?si(s.readTime):Ce.min()}(t);return this.listener.eu(n,r)}nu(t){const n={};n.database=K0(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=j0(a)?{documents:kz(i,a)}:{query:Tz(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=JN(i,s.resumeToken);const u=H0(i,s.expectedCount);u!==null&&(o.expectedCount=u)}else if(s.snapshotVersion.compareTo(Ce.min())>0){o.readTime=_p(i,s.snapshotVersion.toTimestamp());const u=H0(i,s.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,t);const r=Dz(this.serializer,t);r&&(n.labels=r),this.zo(n)}su(t){const n={};n.database=K0(this.serializer),n.removeTarget=t,this.zo(n)}}class lj extends aO{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(ot(!!t.streamToken),this.lastStreamToken=t.streamToken,this.iu){this.Lo.reset();const n=Cz(t.writeResults,t.commitTime),r=si(t.commitTime);return this.listener.uu(r,n)}return ot(!t.writeResults||t.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const t={};t.database=K0(this.serializer),this.zo(t)}ou(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Ez(this.serializer,r))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uj extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new fe(H.FAILED_PRECONDITION,"The client has already been terminated.")}po(t,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new fe(H.UNKNOWN,i.toString())})}Ao(t,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new fe(H.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class cj{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(t){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.gu("Offline")))}set(t){this.Iu(),this.du=0,t==="Online"&&(this.wu=!1),this.gu(t)}gu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}yu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Ji(n),this.wu=!1):ce("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hj{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{ca(this)&&(ce("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=Te(a);u.Au.add(4),await Eh(u),u.Pu.set("Unknown"),u.Au.delete(4),await Km(u)}(this))})}),this.Pu=new cj(r,i)}}async function Km(e){if(ca(e))for(const t of e.Ru)await t(!0)}async function Eh(e){for(const t of e.Ru)await t(!1)}function lO(e,t){const n=Te(e);n.Eu.has(t.targetId)||(n.Eu.set(t.targetId,t),M_(n)?P_(n):Wl(n).Uo()&&b_(n,t))}function uO(e,t){const n=Te(e),r=Wl(n);n.Eu.delete(t),r.Uo()&&cO(n,t),n.Eu.size===0&&(r.Uo()?r.Qo():ca(n)&&n.Pu.set("Unknown"))}function b_(e,t){if(e.bu.Lt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ce.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Wl(e).nu(t)}function cO(e,t){e.bu.Lt(t),Wl(e).su(t)}function P_(e){e.bu=new pz({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),he:t=>e.Eu.get(t)||null,oe:()=>e.datastore.serializer.databaseId}),Wl(e).start(),e.Pu.mu()}function M_(e){return ca(e)&&!Wl(e).qo()&&e.Eu.size>0}function ca(e){return Te(e).Au.size===0}function hO(e){e.bu=void 0}async function dj(e){e.Eu.forEach((t,n)=>{b_(e,t)})}async function fj(e,t){hO(e),M_(e)?(e.Pu.pu(t),P_(e)):e.Pu.set("Unknown")}async function pj(e,t,n){if(e.Pu.set("Online"),t instanceof XN&&t.state===2&&t.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(e,t)}catch(r){ce("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Sp(e,r)}else if(t instanceof af?e.bu.Wt(t):t instanceof QN?e.bu.ee(t):e.bu.Yt(t),!n.isEqual(Ce.min()))try{const r=await sO(e.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Eu.get(u);c&&i.Eu.set(u,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,u)=>{const c=i.Eu.get(a);if(!c)return;i.Eu.set(a,c.withResumeToken(Cn.EMPTY_BYTE_STRING,c.snapshotVersion)),cO(i,a);const d=new xs(c.target,a,u,c.sequenceNumber);b_(i,d)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(r){ce("RemoteStore","Failed to raise snapshot:",r),await Sp(e,r)}}async function Sp(e,t,n){if(!wh(t))throw t;e.Au.add(1),await Eh(e),e.Pu.set("Offline"),n||(n=()=>sO(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{ce("RemoteStore","Retrying IndexedDB access"),await n(),e.Au.delete(1),await Km(e)})}function dO(e,t){return t().catch(n=>Sp(e,n,t))}async function Qm(e){const t=Te(e),n=eo(t);let r=t.Tu.length>0?t.Tu[t.Tu.length-1].batchId:-1;for(;mj(t);)try{const i=await Zz(t.localStore,r);if(i===null){t.Tu.length===0&&n.Qo();break}r=i.batchId,gj(t,i)}catch(i){await Sp(t,i)}fO(t)&&pO(t)}function mj(e){return ca(e)&&e.Tu.length<10}function gj(e,t){e.Tu.push(t);const n=eo(e);n.Uo()&&n.ru&&n.ou(t.mutations)}function fO(e){return ca(e)&&!eo(e).qo()&&e.Tu.length>0}function pO(e){eo(e).start()}async function yj(e){eo(e).au()}async function vj(e){const t=eo(e);for(const n of e.Tu)t.ou(n.mutations)}async function wj(e,t,n){const r=e.Tu.shift(),i=x_.from(r,t,n);await dO(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Qm(e)}async function _j(e,t){t&&eo(e).ru&&await async function(n,r){if(i=r.code,hz(i)&&i!==H.ABORTED){const s=n.Tu.shift();eo(n).Go(),await dO(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Qm(n)}var i}(e,t),fO(e)&&pO(e)}async function OT(e,t){const n=Te(e);n.asyncQueue.verifyOperationInProgress(),ce("RemoteStore","RemoteStore received new credentials");const r=ca(n);n.Au.add(3),await Eh(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Au.delete(3),await Km(n)}async function Sj(e,t){const n=Te(e);t?(n.Au.delete(2),await Km(n)):t||(n.Au.add(2),await Eh(n),n.Pu.set("Unknown"))}function Wl(e){return e.Vu||(e.Vu=function(t,n,r){const i=Te(t);return i.lu(),new aj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{oo:dj.bind(null,e),co:fj.bind(null,e),eu:pj.bind(null,e)}),e.Ru.push(async t=>{t?(e.Vu.Go(),M_(e)?P_(e):e.Pu.set("Unknown")):(await e.Vu.stop(),hO(e))})),e.Vu}function eo(e){return e.Su||(e.Su=function(t,n,r){const i=Te(t);return i.lu(),new lj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(e.datastore,e.asyncQueue,{oo:yj.bind(null,e),co:_j.bind(null,e),cu:vj.bind(null,e),uu:wj.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Go(),await Qm(e)):(await e.Su.stop(),e.Tu.length>0&&(ce("RemoteStore",`Stopping write stream with ${e.Tu.length} pending writes`),e.Tu=[]))})),e.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new L_(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(H.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $_(e,t){if(Ji("AsyncQueue",`${t}: ${e}`),wh(e))return new fe(H.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t){this.comparator=t?(n,r)=>t(n,r)||pe.comparator(n.key,r.key):(n,r)=>pe.comparator(n.key,r.key),this.keyedMap=Au(),this.sortedSet=new St(this.comparator)}static emptySet(t){return new rl(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof rl)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class RT{constructor(){this.Du=new St(pe.comparator)}track(t){const n=t.doc.key,r=this.Du.get(n);r?t.type!==0&&r.type===3?this.Du=this.Du.insert(n,t):t.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Du=this.Du.remove(n):t.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:t.doc}):Se():this.Du=this.Du.insert(n,t)}Cu(){const t=[];return this.Du.inorderTraversal((n,r)=>{t.push(r)}),t}}class xl{constructor(t,n,r,i,s,o,a,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xl(t,n,rl.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&jm(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ej{constructor(){this.xu=void 0,this.listeners=[]}}class Cj{constructor(){this.queries=new Yl(t=>MN(t),jm),this.onlineState="Unknown",this.Nu=new Set}}async function mO(e,t){const n=Te(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Ej),i)try{s.xu=await n.onListen(r)}catch(o){const a=$_(o,`Initialization of query '${W0(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.ku(n.onlineState),s.xu&&t.Mu(s.xu)&&F_(n)}async function gO(e,t){const n=Te(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function kj(e,t){const n=Te(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&F_(n)}function Tj(e,t,n){const r=Te(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function F_(e){e.Nu.forEach(t=>{t.next()})}class yO{constructor(t,n,r){this.query=t,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new xl(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.$u?this.Bu(t)&&(this.Ou.next(t),n=!0):this.Lu(t,this.onlineState)&&(this.qu(t),n=!0),this.Fu=t,n}onError(t){this.Ou.error(t)}ku(t){this.onlineState=t;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,t)&&(this.qu(this.Fu),n=!0),n}Lu(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Bu(t){if(t.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(t){t=xl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.$u=!0,this.Ou.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(t){this.key=t}}class wO{constructor(t){this.key=t}}class xj{constructor(t,n){this.query=t,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Pe(),this.mutatedKeys=Pe(),this.Zu=LN(t),this.tc=new rl(this.Zu)}get ec(){return this.Ju}nc(t,n){const r=n?n.sc:new RT,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((d,p)=>{const m=i.get(d),v=Ym(this.query,p)?p:null,w=!!m&&this.mutatedKeys.has(m.key),_=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let k=!1;m&&v?m.data.isEqual(v.data)?w!==_&&(r.track({type:3,doc:v}),k=!0):this.ic(m,v)||(r.track({type:2,doc:v}),k=!0,(u&&this.Zu(v,u)>0||c&&this.Zu(v,c)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),k=!0):m&&!v&&(r.track({type:1,doc:m}),k=!0,(u||c)&&(a=!0)),k&&(v?(o=o.add(v),s=_?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.tc;this.tc=t.tc,this.mutatedKeys=t.mutatedKeys;const s=t.sc.Cu();s.sort((c,d)=>function(p,m){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return v(p)-v(m)}(c.type,d.type)||this.Zu(c.doc,d.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,u=a!==this.Yu;return this.Yu=a,s.length!==0||u?{snapshot:new xl(this.query,t.tc,i,s,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new RT,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(t){return!this.Ju.has(t)&&!!this.tc.has(t)&&!this.tc.get(t).hasLocalMutations}rc(t){t&&(t.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=t.current)}oc(){if(!this.current)return[];const t=this.Xu;this.Xu=Pe(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return t.forEach(r=>{this.Xu.has(r)||n.push(new wO(r))}),this.Xu.forEach(r=>{t.has(r)||n.push(new vO(r))}),n}ac(t){this.Ju=t.sr,this.Xu=Pe();const n=this.nc(t.documents);return this.applyChanges(n,!0)}hc(){return xl.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class Dj{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Ij{constructor(t){this.key=t,this.lc=!1}}class Aj{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Yl(a=>MN(a),jm),this._c=new Map,this.wc=new Set,this.mc=new St(pe.comparator),this.gc=new Map,this.yc=new N_,this.Ic={},this.Tc=new Map,this.Ec=Tl.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function Nj(e,t){const n=Vj(e);let r,i;const s=n.dc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await ej(n.localStore,Zi(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Oj(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&lO(n.remoteStore,o)}return i}async function Oj(e,t,n,r,i){e.Rc=(p,m,v)=>async function(w,_,k,S){let y=_.view.nc(k);y.ji&&(y=await IT(w.localStore,_.query,!1).then(({documents:A})=>_.view.nc(A,y)));const C=S&&S.targetChanges.get(_.targetId),x=_.view.applyChanges(y,w.isPrimaryClient,C);return PT(w,_.targetId,x.uc),x.snapshot}(e,p,m,v);const s=await IT(e.localStore,t,!0),o=new xj(t,s.sr),a=o.nc(s.documents),u=Sh.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,u);PT(e,n,c.uc);const d=new Dj(t,n,o);return e.dc.set(t,d),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function Rj(e,t){const n=Te(e),r=n.dc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!jm(s,t))),void n.dc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Q0(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),uO(n.remoteStore,r.targetId),X0(n,r.targetId)}).catch(vh)):(X0(n,r.targetId),await Q0(n.localStore,r.targetId,!0))}async function bj(e,t,n){const r=Bj(e);try{const i=await function(s,o){const a=Te(s),u=Yt.now(),c=o.reduce((m,v)=>m.add(v.key),Pe());let d,p;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=es(),w=Pe();return a.Xi.getEntries(m,c).next(_=>{v=_,v.forEach((k,S)=>{S.isValidDocument()||(w=w.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,v)).next(_=>{d=_;const k=[];for(const S of o){const y=oz(S,d.get(S.key).overlayedDocument);y!=null&&k.push(new ua(S.key,y,IN(y.value.mapValue),ii.exists(!0)))}return a.mutationQueue.addMutationBatch(m,u,k,o)}).next(_=>{p=_;const k=_.applyToLocalDocumentSet(d,w);return a.documentOverlayCache.saveOverlays(m,_.batchId,k)})}).then(()=>({batchId:p.batchId,changes:FN(d)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Ic[s.currentUser.toKey()];u||(u=new St(He)),u=u.insert(o,a),s.Ic[s.currentUser.toKey()]=u}(r,i.batchId,n),await Ch(r,i.changes),await Qm(r.remoteStore)}catch(i){const s=$_(i,"Failed to persist write");n.reject(s)}}async function _O(e,t){const n=Te(e);try{const r=await Xz(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(ot(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?ot(o.lc):i.removedDocuments.size>0&&(ot(o.lc),o.lc=!1))}),await Ch(n,r,t)}catch(r){await vh(r)}}function bT(e,t,n){const r=Te(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(t);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Te(s);a.onlineState=o;let u=!1;a.queries.forEach((c,d)=>{for(const p of d.listeners)p.ku(o)&&(u=!0)}),u&&F_(a)}(r.eventManager,t),i.length&&r.fc.eu(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Pj(e,t,n){const r=Te(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.gc.get(t),s=i&&i.key;if(s){let o=new St(pe.comparator);o=o.insert(s,mn.newNoDocument(s,Ce.min()));const a=Pe().add(s),u=new Gm(Ce.min(),new Map,new St(He),o,a);await _O(r,u),r.mc=r.mc.remove(s),r.gc.delete(t),U_(r)}else await Q0(r.localStore,t,!1).then(()=>X0(r,t,n)).catch(vh)}async function Mj(e,t){const n=Te(e),r=t.batch.batchId;try{const i=await Qz(n.localStore,t);EO(n,r,null),SO(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ch(n,i)}catch(i){await vh(i)}}async function Lj(e,t,n){const r=Te(e);try{const i=await function(s,o){const a=Te(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(d=>(ot(d!==null),c=d.keys(),a.mutationQueue.removeMutationBatch(u,d))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(r.localStore,t);EO(r,t,n),SO(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ch(r,i)}catch(i){await vh(i)}}function SO(e,t){(e.Tc.get(t)||[]).forEach(n=>{n.resolve()}),e.Tc.delete(t)}function EO(e,t,n){const r=Te(e);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Ic[r.currentUser.toKey()]=i}}function X0(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.dc.delete(r),n&&e.fc.vc(r,n);e._c.delete(t),e.isPrimaryClient&&e.yc.ps(t).forEach(r=>{e.yc.containsKey(r)||CO(e,r)})}function CO(e,t){e.wc.delete(t.path.canonicalString());const n=e.mc.get(t);n!==null&&(uO(e.remoteStore,n),e.mc=e.mc.remove(t),e.gc.delete(n),U_(e))}function PT(e,t,n){for(const r of n)r instanceof vO?(e.yc.addReference(r.key,t),$j(e,r)):r instanceof wO?(ce("SyncEngine","Document no longer in limbo: "+r.key),e.yc.removeReference(r.key,t),e.yc.containsKey(r.key)||CO(e,r.key)):Se()}function $j(e,t){const n=t.key,r=n.path.canonicalString();e.mc.get(n)||e.wc.has(r)||(ce("SyncEngine","New document in limbo: "+n),e.wc.add(r),U_(e))}function U_(e){for(;e.wc.size>0&&e.mc.size<e.maxConcurrentLimboResolutions;){const t=e.wc.values().next().value;e.wc.delete(t);const n=new pe(mt.fromString(t)),r=e.Ec.next();e.gc.set(r,new Ij(n)),e.mc=e.mc.insert(n,r),lO(e.remoteStore,new xs(Zi(T_(n.path)),r,"TargetPurposeLimboResolution",w_.ct))}}async function Ch(e,t,n){const r=Te(e),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,u)=>{o.push(r.Rc(u,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const d=R_.Bi(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,u){const c=Te(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>Q.forEach(u,p=>Q.forEach(p.$i,m=>c.persistence.referenceDelegate.addReference(d,p.targetId,m)).next(()=>Q.forEach(p.Fi,m=>c.persistence.referenceDelegate.removeReference(d,p.targetId,m)))))}catch(d){if(!wh(d))throw d;ce("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const m=c.Hi.get(p),v=m.snapshotVersion,w=m.withLastLimboFreeSnapshotVersion(v);c.Hi=c.Hi.insert(p,w)}}}(r.localStore,s))}async function Fj(e,t){const n=Te(e);if(!n.currentUser.isEqual(t)){ce("SyncEngine","User change. New user:",t.toKey());const r=await iO(n.localStore,t);n.currentUser=t,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new fe(H.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ch(n,r.tr)}}function Uj(e,t){const n=Te(e),r=n.gc.get(t);if(r&&r.lc)return Pe().add(r.key);{let i=Pe();const s=n._c.get(t);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function Vj(e){const t=Te(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=_O.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Uj.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Pj.bind(null,t),t.fc.eu=kj.bind(null,t.eventManager),t.fc.vc=Tj.bind(null,t.eventManager),t}function Bj(e){const t=Te(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Mj.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Lj.bind(null,t),t}class MT{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=qm(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Kz(this.persistence,new Gz,t.initialUser,this.serializer)}createPersistence(t){return new Wz(O_.js,this.serializer)}createSharedClientState(t){return new nj}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zj{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fj.bind(null,this.syncEngine),await Sj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Cj}createDatastore(t){const n=qm(t.databaseInfo.databaseId),r=(i=t.databaseInfo,new oj(i));var i;return function(s,o,a,u){return new uj(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return n=this.localStore,r=this.datastore,i=t.asyncQueue,s=a=>bT(this.syncEngine,a,0),o=NT.D()?new NT:new rj,new hj(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(t,n){return function(r,i,s,o,a,u,c){const d=new Aj(r,i,s,o,a,u);return c&&(d.Ac=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=Te(t);ce("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Eh(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kO{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Vc(this.observer.next,t)}error(t){this.observer.error?this.Vc(this.observer.error,t):Ji("Uncaught Error in snapshot listener:",t.toString())}Sc(){this.muted=!0}Vc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jj{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=fn.UNAUTHENTICATED,this.clientId=TN.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ce("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ce("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new fe(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=$_(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ev(e,t){e.asyncQueue.verifyOperationInProgress(),ce("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iO(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function LT(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Wj(e);ce("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>OT(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>OT(t.remoteStore,s)),e._onlineComponents=t}function Yj(e){return e.name==="FirebaseError"?e.code===H.FAILED_PRECONDITION||e.code===H.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Wj(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ce("FirestoreClient","Using user provided OfflineComponentProvider");try{await ev(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Yj(n))throw n;Sl("Error using user provided cache. Falling back to memory cache: "+n),await ev(e,new MT)}}else ce("FirestoreClient","Using default OfflineComponentProvider"),await ev(e,new MT);return e._offlineComponents}async function TO(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ce("FirestoreClient","Using user provided OnlineComponentProvider"),await LT(e,e._uninitializedComponentsProvider._online)):(ce("FirestoreClient","Using default OnlineComponentProvider"),await LT(e,new zj))),e._onlineComponents}function Hj(e){return TO(e).then(t=>t.syncEngine)}async function xO(e){const t=await TO(e),n=t.eventManager;return n.onListen=Nj.bind(null,t.syncEngine),n.onUnlisten=Rj.bind(null,t.syncEngine),n}function Gj(e,t,n={}){const r=new zi;return e.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const c=new kO({next:p=>{s.enqueueAndForget(()=>gO(i,d));const m=p.docs.has(o);!m&&p.fromCache?u.reject(new fe(H.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&a&&a.source==="server"?u.reject(new fe(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new yO(T_(o.path),c,{includeMetadataChanges:!0,Uu:!0});return mO(i,d)}(await xO(e),e.asyncQueue,t,n,r)),r.promise}function qj(e,t,n={}){const r=new zi;return e.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const c=new kO({next:p=>{s.enqueueAndForget(()=>gO(i,d)),p.fromCache&&a.source==="server"?u.reject(new fe(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new yO(o,c,{includeMetadataChanges:!0,Uu:!0});return mO(i,d)}(await xO(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(e,t,n){if(!n)throw new fe(H.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Kj(e,t,n,r){if(t===!0&&r===!0)throw new fe(H.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function FT(e){if(!pe.isDocumentKey(e))throw new fe(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function UT(e){if(pe.isDocumentKey(e))throw new fe(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function V_(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Se()}function to(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new fe(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=V_(e);throw new fe(H.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new fe(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new fe(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Kj("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new VT({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new fe(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new fe(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new VT(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mB;switch(n.type){case"firstParty":return new wB(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new fe(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=$T.get(t);n&&(ce("ComponentProvider","Removing Datastore"),$T.delete(t),n.terminate())}(this),Promise.resolve()}}function Qj(e,t,n,r={}){var i;const s=(e=to(e,Xm))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&Sl("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=fn.MOCK_USER;else{o=bI(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new fe(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new fn(u)}e._authCredentials=new gB(new kN(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Jn(this.firestore,t,this._key)}}class Jm{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Jm(this.firestore,t,this._query)}}class Ys extends Jm{constructor(t,n,r){super(t,n,T_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Jn(this.firestore,null,new pe(t))}withConverter(t){return new Ys(this.firestore,t,this._path)}}function di(e,t,...n){if(e=Qt(e),DO("collection","path",t),e instanceof Xm){const r=mt.fromString(t,...n);return UT(r),new Ys(e,null,r)}{if(!(e instanceof Jn||e instanceof Ys))throw new fe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(mt.fromString(t,...n));return UT(r),new Ys(e.firestore,null,r)}}function kh(e,t,...n){if(e=Qt(e),arguments.length===1&&(t=TN.A()),DO("doc","path",t),e instanceof Xm){const r=mt.fromString(t,...n);return FT(r),new Jn(e,null,new pe(r))}{if(!(e instanceof Jn||e instanceof Ys))throw new fe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(mt.fromString(t,...n));return FT(r),new Jn(e.firestore,e instanceof Ys?e.converter:null,new pe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xj{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new oO(this,"async_queue_retry"),this.Yc=()=>{const n=Zy();n&&ce("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const t=Zy();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xc(),this.Zc(t)}enterRestrictedMode(t){if(!this.Qc){this.Qc=!0,this.Hc=t||!1;const n=Zy();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(t){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new zi;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Gc.push(t),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(t){if(!wh(t))throw t;ce("AsyncQueue","Operation failed with retryable error: "+t)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(t){const n=this.Kc.then(()=>(this.Wc=!0,t().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ji("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(t,n,r){this.Xc(),this.Jc.indexOf(t)>-1&&(n=0);const i=L_.createAndSchedule(this,t,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&Se()}verifyOperationInProgress(){}async na(){let t;do t=this.Kc,await t;while(t!==this.Kc)}sa(t){for(const n of this.jc)if(n.timerId===t)return!0;return!1}ia(t){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.na()})}ra(t){this.Jc.push(t)}ea(t){const n=this.jc.indexOf(t);this.jc.splice(n,1)}}class Th extends Xm{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new Xj,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||IO(this),this._firestoreClient.terminate()}}function Jj(e,t){const n=typeof e=="object"?e:Fw(),r=typeof e=="string"?e:t||"(default)",i=Em(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=OI("firestore");s&&Qj(i,...s)}return i}function B_(e){return e._firestoreClient||IO(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function IO(e){var t,n,r;const i=e._freezeSettings(),s=function(o,a,u,c){return new OB(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new jj(e._authCredentials,e._appCheckCredentials,e._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Dl(Cn.fromBase64String(t))}catch(n){throw new fe(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Dl(Cn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new fe(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new fe(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new fe(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return He(this._lat,t._lat)||He(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zj=/^__.*__$/;class eY{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ua(t,this.data,this.fieldMask,n,this.fieldTransforms):new _h(t,this.data,n,this.fieldTransforms)}}function NO(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class Y_{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(t){return new Y_(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ca({path:r,ha:!1});return i.la(t),i}fa(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ca({path:r,ha:!1});return i.oa(),i}da(t){return this.ca({path:void 0,ha:!0})}_a(t){return Ep(t,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let t=0;t<this.path.length;t++)this.la(this.path.get(t))}la(t){if(t.length===0)throw this._a("Document fields must not be empty");if(NO(this.ua)&&Zj.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class tY{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||qm(t)}ga(t,n,r,i=!1){return new Y_({ua:t,methodName:n,ma:r,path:gn.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function OO(e){const t=e._freezeSettings(),n=qm(e._databaseId);return new tY(e._databaseId,!!t.ignoreUndefinedProperties,n)}function RO(e,t,n,r,i,s={}){const o=e.ga(s.merge||s.mergeFields?2:0,t,n,i);LO("Data must be an object, but it was:",o,r);const a=PO(r,o);let u,c;if(s.merge)u=new Or(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=nY(t,p,n);if(!o.contains(m))throw new fe(H.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);iY(d,m)||d.push(m)}u=new Or(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new eY(new hr(a),u,c)}function bO(e,t){if(MO(e=Qt(e)))return LO("Unsupported field value:",t,e),PO(e,t);if(e instanceof AO)return function(n,r){if(!NO(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ha&&t.ua!==4)throw t._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=bO(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(e,t)}return function(n,r){if((n=Qt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ez(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Yt.fromDate(n);return{timestampValue:_p(r.serializer,i)}}if(n instanceof Yt){const i=new Yt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:_p(r.serializer,i)}}if(n instanceof j_)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Dl)return{bytesValue:JN(r.serializer,n._byteString)};if(n instanceof Jn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:A_(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${V_(n)}`)}(e,t)}function PO(e,t){const n={};return xN(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):jl(e,(r,i)=>{const s=bO(i,t.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function MO(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Yt||e instanceof j_||e instanceof Dl||e instanceof Jn||e instanceof AO)}function LO(e,t,n){if(!MO(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=V_(n);throw r==="an object"?t._a(e+" a custom object"):t._a(e+" "+r)}}function nY(e,t,n){if((t=Qt(t))instanceof z_)return t._internalPath;if(typeof t=="string")return $O(e,t);throw Ep("Field path arguments must be of type string or ",e,!1,void 0,n)}const rY=new RegExp("[~\\*/\\[\\]]");function $O(e,t,n){if(t.search(rY)>=0)throw Ep(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new z_(...t.split("."))._internalPath}catch{throw Ep(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ep(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new fe(H.INVALID_ARGUMENT,a+e+u)}function iY(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Jn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new sY(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(UO("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sY extends FO{data(){return super.data()}}function UO(e,t){return typeof t=="string"?$O(e,t):t instanceof z_?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oY(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new fe(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class aY{convertValue(t,n="none"){switch(Zo(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Pt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Jo(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Se()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return jl(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new j_(Pt(t.latitude),Pt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=S_(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bc(t));default:return null}}convertTimestamp(t){const n=Zs(t);return new Yt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=mt.fromString(t);ot(rO(r));const i=new Pc(r.get(1),r.get(3)),s=new pe(r.popFirst(5));return i.isEqual(n)||Ji(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class BO extends FO{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new lf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(UO("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class lf extends BO{data(t={}){return super.data(t)}}class lY{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ou(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new lf(this._firestore,this._userDataWriter,r.key,r,new Ou(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new lf(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ou(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new lf(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ou(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,c=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:uY(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uY(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(e){e=to(e,Jn);const t=to(e.firestore,Th);return Gj(B_(t),e._key).then(n=>hY(t,e,n))}class zO extends aY{constructor(t){super(),this.firestore=t}convertBytes(t){return new Dl(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Jn(this.firestore,null,n)}}function Zm(e){e=to(e,Jm);const t=to(e.firestore,Th),n=B_(t),r=new zO(t);return oY(e._query),qj(n,e._query).then(i=>new lY(t,r,e,i))}function cY(e,t,n){e=to(e,Jn);const r=to(e.firestore,Th),i=VO(e.converter,t,n);return jO(r,[RO(OO(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,ii.none())])}function xh(e,t){const n=to(e.firestore,Th),r=kh(e),i=VO(e.converter,t);return jO(n,[RO(OO(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,ii.exists(!1))]).then(()=>r)}function jO(e,t){return function(n,r){const i=new zi;return n.asyncQueue.enqueueAndForget(async()=>bj(await Hj(n),r,i)),i.promise}(B_(e),t)}function hY(e,t,n){const r=n.docs.get(t._key),i=new zO(e);return new BO(e,i,t._key,r,new Ou(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){zl=n})(oa),qo(new Xs("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Th(new yB(n.getProvider("auth-internal")),new SB(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new fe(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pc(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ti(aT,"3.11.0",e),ti(aT,"3.11.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO="firebasestorage.googleapis.com",WO="storageBucket",dY=2*60*1e3,fY=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends hi{constructor(t,n,r=0){super(tv(t),`Firebase Storage: ${n} (${tv(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return tv(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Tt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Tt||(Tt={}));function tv(e){return"storage/"+e}function H_(){const e="An unknown error occurred, please check the error payload for server response.";return new xt(Tt.UNKNOWN,e)}function pY(e){return new xt(Tt.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function mY(e){return new xt(Tt.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function gY(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xt(Tt.UNAUTHENTICATED,e)}function yY(){return new xt(Tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function vY(e){return new xt(Tt.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function wY(){return new xt(Tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _Y(){return new xt(Tt.CANCELED,"User canceled the upload/download.")}function SY(e){return new xt(Tt.INVALID_URL,"Invalid URL '"+e+"'.")}function EY(e){return new xt(Tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function CY(){return new xt(Tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+WO+"' property when initializing the app?")}function kY(){return new xt(Tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function TY(){return new xt(Tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function xY(e){return new xt(Tt.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function J0(e){return new xt(Tt.INVALID_ARGUMENT,e)}function HO(){return new xt(Tt.APP_DELETED,"The Firebase app was deleted.")}function DY(e){return new xt(Tt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function qu(e,t){return new xt(Tt.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function gu(e){throw new xt(Tt.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Qn.makeFromUrl(t,n)}catch{return new Qn(t,"")}if(r.path==="")return r;throw EY(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),w={bucket:1,path:3},_=n===YO?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",S=new RegExp(`^https?://${_}/${i}/${k}`,"i"),C=[{regex:a,indices:u,postModify:s},{regex:v,indices:w,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<C.length;x++){const A=C[x],R=A.regex.exec(t);if(R){const N=R[A.indices.bucket];let O=R[A.indices.path];O||(O=""),r=new Qn(N,O),A.postModify(r);break}}if(r==null)throw SY(t);return r}}class IY{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AY(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...k){c||(c=!0,t.apply(null,k))}function p(k){i=setTimeout(()=>{i=null,e(v,u())},k)}function m(){s&&clearTimeout(s)}function v(k,...S){if(c){m();return}if(k){m(),d.call(null,k,...S);return}if(u()||o){m(),d.call(null,k,...S);return}r<64&&(r*=2);let C;a===1?(a=2,C=0):C=(r+Math.random())*1e3,p(C)}let w=!1;function _(k){w||(w=!0,m(),!c&&(i!==null?(k||(a=2),clearTimeout(i),p(0)):k||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function NY(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OY(e){return e!==void 0}function RY(e){return typeof e=="object"&&!Array.isArray(e)}function G_(e){return typeof e=="string"||e instanceof String}function BT(e){return q_()&&e instanceof Blob}function q_(){return typeof Blob!="undefined"&&!VU()}function zT(e,t,n,r){if(r<t)throw J0(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw J0(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function GO(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function bY(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PY{constructor(t,n,r,i,s,o,a,u,c,d,p,m=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,w)=>{this.resolve_=v,this.reject_=w,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Md(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===$o.NO_ERROR,u=s.getStatus();if(!a||bY(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===$o.ABORT;r(!1,new Md(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Md(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());OY(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=H_();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?HO():_Y();o(u)}else{const u=wY();o(u)}};this.canceled_?n(!1,new Md(!1,null,!0)):this.backoffId_=AY(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&NY(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Md{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function MY(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function LY(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function $Y(e,t){t&&(e["X-Firebase-GMPID"]=t)}function FY(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function UY(e,t,n,r,i,s,o=!0){const a=GO(e.urlParams),u=e.url+a,c=Object.assign({},e.headers);return $Y(c,t),MY(c,n),LY(c,s),FY(c,r),new PY(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VY(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function BY(...e){const t=VY();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(q_())return new Blob(e);throw new xt(Tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function zY(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function jY(e){if(typeof atob=="undefined")throw xY("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class nv{constructor(t,n){this.data=t,this.contentType=n||null}}function YY(e,t){switch(e){case Xr.RAW:return new nv(qO(t));case Xr.BASE64:case Xr.BASE64URL:return new nv(KO(e,t));case Xr.DATA_URL:return new nv(HY(t),GY(t))}throw H_()}function qO(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,o=e.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function WY(e){let t;try{t=decodeURIComponent(e)}catch{throw qu(Xr.DATA_URL,"Malformed data URL.")}return qO(t)}function KO(e,t){switch(e){case Xr.BASE64:{const i=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(i||s)throw qu(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Xr.BASE64URL:{const i=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(i||s)throw qu(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=jY(t)}catch(i){throw i.message.includes("polyfill")?i:qu(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class QO{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw qu(Xr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=qY(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function HY(e){const t=new QO(e);return t.base64?KO(Xr.BASE64,t.rest):WY(t.rest)}function GY(e){return new QO(e).contentType}function qY(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,n){let r=0,i="";BT(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(BT(this.data_)){const r=this.data_,i=zY(r,t,n);return i===null?null:new Es(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Es(r,!0)}}static getBlob(...t){if(q_()){const n=t.map(r=>r instanceof Es?r.data_:r);return new Es(BY.apply(null,n))}else{const n=t.map(o=>G_(o)?YY(Xr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Es(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(e){let t;try{t=JSON.parse(e)}catch{return null}return RY(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KY(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function QY(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function JO(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XY(e,t){return t}class In{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||XY}}let Ld=null;function JY(e){return!G_(e)||e.length<2?e:JO(e)}function ZO(){if(Ld)return Ld;const e=[];e.push(new In("bucket")),e.push(new In("generation")),e.push(new In("metageneration")),e.push(new In("name","fullPath",!0));function t(s,o){return JY(o)}const n=new In("name");n.xform=t,e.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new In("size");return i.xform=r,e.push(i),e.push(new In("timeCreated")),e.push(new In("updated")),e.push(new In("md5Hash",null,!0)),e.push(new In("cacheControl",null,!0)),e.push(new In("contentDisposition",null,!0)),e.push(new In("contentEncoding",null,!0)),e.push(new In("contentLanguage",null,!0)),e.push(new In("contentType",null,!0)),e.push(new In("metadata","customMetadata",!0)),Ld=e,Ld}function ZY(e,t){function n(){const r=e.bucket,i=e.fullPath,s=new Qn(r,i);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function eW(e,t,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,t[o.server])}return ZY(r,e),r}function eR(e,t,n){const r=XO(t);return r===null?null:eW(e,r,n)}function tW(e,t,n,r){const i=XO(t);if(i===null||!G_(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=e.bucket,p=e.fullPath,m="/b/"+o(d)+"/o/"+o(p),v=K_(m,n,r),w=GO({alt:"media",token:c});return v+w})[0]}function nW(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class tR{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(e){if(!e)throw H_()}function rW(e,t){function n(r,i){const s=eR(e,i,t);return nR(s!==null),s}return n}function iW(e,t){function n(r,i){const s=eR(e,i,t);return nR(s!==null),tW(s,i,e.host,e._protocol)}return n}function rR(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=yY():i=gY():n.getStatus()===402?i=mY(e.bucket):n.getStatus()===403?i=vY(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function sW(e){const t=rR(e);function n(r,i){let s=t(r,i);return r.getStatus()===404&&(s=pY(e.path)),s.serverResponse=i.serverResponse,s}return n}function oW(e,t,n){const r=t.fullServerUrl(),i=K_(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new tR(i,s,iW(e,n),o);return a.errorHandler=sW(t),a}function aW(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function lW(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=aW(null,t)),r}function uW(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let x=0;x<2;x++)C=C+Math.random().toString().slice(2);return C}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=lW(t,r,i),d=nW(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",v=Es.getBlob(p,r,m);if(v===null)throw kY();const w={name:c.fullPath},_=K_(s,e.host,e._protocol),k="POST",S=e.maxUploadRetryTime,y=new tR(_,k,rW(e,n),S);return y.urlParams=w,y.headers=o,y.body=v.uploadData(),y.errorHandler=rR(t),y}class cW{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$o.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$o.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$o.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw gu("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw gu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class hW extends cW{initXhr(){this.xhr_.responseType="text"}}function iR(){return new hW}/**
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
 */class ea{constructor(t,n){this._service=t,n instanceof Qn?this._location=n:this._location=Qn.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new ea(t,n)}get root(){const t=new Qn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return JO(this._location.path)}get storage(){return this._service}get parent(){const t=KY(this._location.path);if(t===null)return null;const n=new Qn(this._location.bucket,t);return new ea(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw DY(t)}}function dW(e,t,n){e._throwIfRoot("uploadBytes");const r=uW(e.storage,e._location,ZO(),new Es(t,!0),n);return e.storage.makeRequestWithTokens(r,iR).then(i=>({metadata:i,ref:e}))}function fW(e){e._throwIfRoot("getDownloadURL");const t=oW(e.storage,e._location,ZO());return e.storage.makeRequestWithTokens(t,iR).then(n=>{if(n===null)throw TY();return n})}function pW(e,t){const n=QY(e._location.path,t),r=new Qn(e._location.bucket,n);return new ea(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mW(e){return/^[A-Za-z]+:\/\//.test(e)}function gW(e,t){return new ea(e,t)}function sR(e,t){if(e instanceof Q_){const n=e;if(n._bucket==null)throw CY();const r=new ea(n,n._bucket);return t!=null?sR(r,t):r}else return t!==void 0?pW(e,t):e}function yW(e,t){if(t&&mW(t)){if(e instanceof Q_)return gW(e,t);throw J0("To use ref(service, url), the first argument must be a Storage instance.")}else return sR(e,t)}function jT(e,t){const n=t==null?void 0:t[WO];return n==null?null:Qn.makeFromBucketSpec(n,e)}function vW(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:bI(i,e.app.options.projectId))}class Q_{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=YO,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dY,this._maxUploadRetryTime=fY,this._requests=new Set,i!=null?this._bucket=Qn.makeFromBucketSpec(i,this._host):this._bucket=jT(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Qn.makeFromBucketSpec(this._url,t):this._bucket=jT(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){zT("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){zT("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ea(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new IY(HO());{const o=UY(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const YT="@firebase/storage",WT="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR="storage";function eg(e,t,n){return e=Qt(e),dW(e,t,n)}function tg(e){return e=Qt(e),fW(e)}function fi(e,t){return e=Qt(e),yW(e,t)}function wW(e=Fw(),t){e=Qt(e);const r=Em(e,oR).getImmediate({identifier:t}),i=OI("storage");return i&&_W(r,...i),r}function _W(e,t,n,r={}){vW(e,t,n,r)}function SW(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Q_(n,r,i,t,oa)}function EW(){qo(new Xs(oR,SW,"PUBLIC").setMultipleInstances(!0)),ti(YT,WT,""),ti(YT,WT,"esm2017")}EW();const CW={apiKey:"AIzaSyB6eD_2vEo_ZIjZbDoRg7cX92y81sB0Auc",authDomain:"myclothesapp-cf59a.firebaseapp.com",projectId:"myclothesapp-cf59a",storageBucket:"myclothesapp-cf59a.appspot.com",messagingSenderId:"610226156284",appId:"1:610226156284:web:9336ebebf0a17d99eb1d79",measurementId:"G-LNG72F75QC"},aR=LI(CW),ta=lV(aR),_r=Jj(aR),Dh=wW(),Z0=jn("login/googleLogin",async()=>{const e=new Ni,n=(await y7(ta,e)).user;console.log(n);const r=kh(_r,"users",n.uid);return(await W_(r)).data()}),e1=jn("auth/login",async e=>{try{const{email:t,password:n}=e;await lA(ta,Gw);const i=(await q8(ta,t,n)).user,s=kh(_r,"users",i.uid),o=await W_(s);if(!o.exists())throw new Error("\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC720\uC800\uC785\uB2C8\uB2E4.");return o.data()}catch(t){return Pw(t.message)}}),t1=jn("auth/signOut",async()=>{try{await X8(ta),await lA(ta,Gw)}catch(e){return Pw(e.message)}}),kW=()=>e=>{ta.onAuthStateChanged(async t=>{if(t){const n=kh(_r,"users",t.uid),r=await W_(n);if(r.exists()){const i=r.data();e({type:"login/loginSuccess",payload:i}),localStorage.setItem("user",JSON.stringify(i))}}else e({type:"login/logout"}),localStorage.removeItem("user")})},TW=()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):null},xW=lo({name:"login",initialState:{user:TW()},extraReducers:e=>{e.addCase(`${Z0.fulfilled}`,(t,n)=>{t.user=n.payload}),e.addCase(`${Z0.rejected}`,(t,n)=>{alert("\uB85C\uADF8\uC778 \uC2E4\uD328!"),console.log(n.payload)}),e.addCase(`${e1.fulfilled}`,(t,n)=>{t.user=n.payload}),e.addCase(`${e1.rejected}`,(t,n)=>n.error),e.addCase(`${t1.fulfilled}`,(t,n)=>{alert("\uB85C\uADF8\uC544\uC6C3 \uC131\uACF5!"),t.user=null}),e.addCase(`${t1.rejected}`,(t,n)=>{alert("\uB85C\uADF8\uC544\uC6C3 \uC2E4\uD328!"),console.log(n.payload)})}});var DW=xW.reducer,lR={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},HT=qt.createContext&&qt.createContext(lR),Ws=globalThis&&globalThis.__assign||function(){return Ws=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ws.apply(this,arguments)},IW=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function uR(e){return e&&e.map(function(t,n){return qt.createElement(t.tag,Ws({key:n},t.attr),uR(t.child))})}function ss(e){return function(t){return qt.createElement(AW,Ws({attr:Ws({},e.attr)},t),uR(e.child))}}function AW(e){var t=function(n){var r=e.attr,i=e.size,s=e.title,o=IW(e,["attr","size","title"]),a=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),qt.createElement("svg",Ws({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Ws(Ws({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&qt.createElement("title",null,s),e.children)};return HT!==void 0?qt.createElement(HT.Consumer,null,function(n){return t(n)}):t(lR)}function cR(e){return ss({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}}]})(e)}function NW(e){return ss({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z"}}]})(e)}function OW(e){return ss({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"}}]})(e)}function RW(e){return ss({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44z"}}]})(e)}function ng(e){return ss({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z"}}]})(e)}function bW(e){return ss({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"}}]})(e)}const PW=()=>{const[e,t]=$.exports.useState(!1),[n,r]=$.exports.useState(!1),[i,s]=$.exports.useState(null),o=Rt(_=>_.login.user),a=Vr(),u=eh(),c=Mn(),d=o==null?void 0:o.nickname,p=()=>{confirm("\uC815\uB9D0 \uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&c(t1())},m=_=>{s(_)},v=()=>o?U("div",{className:"users",children:[T("li",{className:"item user_nickname",onClick:()=>s(null),children:T(Gn,{to:"/account",children:d})}),T("li",{className:"item logOut",onClick:p,children:T("span",{children:T(bW,{})})})]}):T("div",{className:"users",children:T("li",{className:"item_account",children:T(Gn,{to:"account/login",className:"account",children:"\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785"})})});return $.exports.useEffect(()=>{const _=()=>{window.scrollY>=60?t(!0):t(!1)},k=()=>{window.innerWidth>=768?r(!0):r(!1)};return window.addEventListener("scroll",_),window.addEventListener("resize",k),()=>{window.removeEventListener("scroll",_),window.removeEventListener("resize",k)}},[]),u.pathname==="/account/signup"||u.pathname==="/account/login"?null:T(tF,{style:{borderBottom:e?"1px solid #e3e3e3":""},children:U("div",{className:"contents",children:[T("div",{className:"logo",children:T("h1",{onClick:()=>{a("/"),s(null)},children:"ModArt"})}),U("ul",{className:"navbar",children:[U("div",{className:"list",children:[T("li",{className:`item ${i===0?"active":""}`,children:T(Gn,{to:"/board",onClick:()=>m(0),children:"OOTD"})}),T("li",{className:`item ${i===1?"active":""}`,children:T(Gn,{to:"/photo",onClick:()=>m(1),children:"Photo"})}),T("li",{className:`item ${i===2?"active":""}`,children:T(Gn,{to:"/today",onClick:()=>m(2),children:"TodayStory"})}),T("li",{className:`item ${i===3?"active":""}`,children:T(Gn,{to:"/qna",onClick:()=>m(3),children:"QnA"})})]}),v()]})]})})};var MW=qt.memo(PW);function GT(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function LW(e,t,n){return t&&GT(e.prototype,t),n&&GT(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var qT="(prefers-reduced-motion: reduce)",za=1,$W=2,Il=3,Hl=4,Ih=5,uf=6,Cp=7,FW={CREATED:za,MOUNTED:$W,IDLE:Il,MOVING:Hl,SCROLLING:Ih,DRAGGING:uf,DESTROYED:Cp};function ts(e){e.length=0}function ho(e,t,n){return Array.prototype.slice.call(e,t,n)}function tt(e){return e.bind.apply(e,[null].concat(ho(arguments,1)))}var hR=setTimeout,n1=function(){};function KT(e){return requestAnimationFrame(e)}function rg(e,t){return typeof t===e}function Fc(e){return!J_(e)&&rg("object",e)}var X_=Array.isArray,dR=tt(rg,"function"),no=tt(rg,"string"),Ah=tt(rg,"undefined");function J_(e){return e===null}function fR(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Nh(e){return X_(e)?e:[e]}function vr(e,t){Nh(e).forEach(t)}function Z_(e,t){return e.indexOf(t)>-1}function cf(e,t){return e.push.apply(e,Nh(t)),e}function $i(e,t,n){e&&vr(t,function(r){r&&e.classList[n?"add":"remove"](r)})}function li(e,t){$i(e,no(t)?t.split(" "):t,!0)}function Oh(e,t){vr(t,e.appendChild.bind(e))}function eS(e,t){vr(e,function(n){var r=(t||n).parentNode;r&&r.insertBefore(n,t)})}function Uc(e,t){return fR(e)&&(e.msMatchesSelector||e.matches).call(e,t)}function pR(e,t){var n=e?ho(e.children):[];return t?n.filter(function(r){return Uc(r,t)}):n}function Rh(e,t){return t?pR(e,t)[0]:e.firstElementChild}var Vc=Object.keys;function Fo(e,t,n){return e&&(n?Vc(e).reverse():Vc(e)).forEach(function(r){r!=="__proto__"&&t(e[r],r)}),e}function Bc(e){return ho(arguments,1).forEach(function(t){Fo(t,function(n,r){e[r]=t[r]})}),e}function Ds(e){return ho(arguments,1).forEach(function(t){Fo(t,function(n,r){X_(n)?e[r]=n.slice():Fc(n)?e[r]=Ds({},Fc(e[r])?e[r]:{},n):e[r]=n})}),e}function QT(e,t){vr(t||Vc(e),function(n){delete e[n]})}function ui(e,t){vr(e,function(n){vr(t,function(r){n&&n.removeAttribute(r)})})}function Ie(e,t,n){Fc(t)?Fo(t,function(r,i){Ie(e,i,r)}):vr(e,function(r){J_(n)||n===""?ui(r,t):r.setAttribute(t,String(n))})}function il(e,t,n){var r=document.createElement(e);return t&&(no(t)?li(r,t):Ie(r,t)),n&&Oh(n,r),r}function Ar(e,t,n){if(Ah(n))return getComputedStyle(e)[t];J_(n)||(e.style[t]=""+n)}function zc(e,t){Ar(e,"display",t)}function mR(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function Rr(e,t){return e.getAttribute(t)}function XT(e,t){return e&&e.classList.contains(t)}function lr(e){return e.getBoundingClientRect()}function na(e){vr(e,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function gR(e){return Rh(new DOMParser().parseFromString(e,"text/html").body)}function Ai(e,t){e.preventDefault(),t&&(e.stopPropagation(),e.stopImmediatePropagation())}function yR(e,t){return e&&e.querySelector(t)}function tS(e,t){return t?ho(e.querySelectorAll(t)):[]}function Fi(e,t){$i(e,t,!1)}function r1(e){return e.timeStamp}function wo(e){return no(e)?e:e?e+"px":""}var bh="splide",nS="data-"+bh;function Ku(e,t){if(!e)throw new Error("["+bh+"] "+(t||""))}var ro=Math.min,kp=Math.max,Tp=Math.floor,jc=Math.ceil,Un=Math.abs;function vR(e,t,n){return Un(e-t)<n}function hf(e,t,n,r){var i=ro(t,n),s=kp(t,n);return r?i<e&&e<s:i<=e&&e<=s}function Ta(e,t,n){var r=ro(t,n),i=kp(t,n);return ro(kp(r,e),i)}function i1(e){return+(e>0)-+(e<0)}function s1(e,t){return vr(t,function(n){e=e.replace("%s",""+n)}),e}function rS(e){return e<10?"0"+e:""+e}var JT={};function UW(e){return""+e+rS(JT[e]=(JT[e]||0)+1)}function wR(){var e=[];function t(o,a,u,c){i(o,a,function(d,p,m){var v="addEventListener"in d,w=v?d.removeEventListener.bind(d,p,u,c):d.removeListener.bind(d,u);v?d.addEventListener(p,u,c):d.addListener(u),e.push([d,p,m,u,w])})}function n(o,a,u){i(o,a,function(c,d,p){e=e.filter(function(m){return m[0]===c&&m[1]===d&&m[2]===p&&(!u||m[3]===u)?(m[4](),!1):!0})})}function r(o,a,u){var c,d=!0;return typeof CustomEvent=="function"?c=new CustomEvent(a,{bubbles:d,detail:u}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(a,d,!1,u)),o.dispatchEvent(c),c}function i(o,a,u){vr(o,function(c){c&&vr(a,function(d){d.split(" ").forEach(function(p){var m=p.split(".");u(c,m[0],m[1])})})})}function s(){e.forEach(function(o){o[4]()}),ts(e)}return{bind:t,unbind:n,dispatch:r,destroy:s}}var fo="mounted",o1="ready",ns="move",Gl="moved",iS="click",_R="active",SR="inactive",ER="visible",CR="hidden",Lt="refresh",Rn="updated",Al="resize",ig="resized",kR="drag",TR="dragging",xR="dragged",sg="scroll",ha="scrolled",VW="overflow",sS="destroy",DR="arrows:mounted",IR="arrows:updated",AR="pagination:mounted",NR="pagination:updated",oS="navigation:mounted",aS="autoplay:play",OR="autoplay:playing",lS="autoplay:pause",uS="lazyload:loaded",RR="sk",bR="sh",xp="ei";function Et(e){var t=e?e.event.bus:document.createDocumentFragment(),n=wR();function r(s,o){n.bind(t,Nh(s).join(" "),function(a){o.apply(o,X_(a.detail)?a.detail:[])})}function i(s){n.dispatch(t,s,ho(arguments,1))}return e&&e.event.on(sS,n.destroy),Bc(n,{bus:t,on:r,off:tt(n.unbind,t),emit:i})}function og(e,t,n,r){var i=Date.now,s,o=0,a,u=!0,c=0;function d(){if(!u){if(o=e?ro((i()-s)/e,1):1,n&&n(o),o>=1&&(t(),s=i(),r&&++c>=r))return m();a=KT(d)}}function p(S){S||w(),s=i()-(S?o*e:0),u=!1,a=KT(d)}function m(){u=!0}function v(){s=i(),o=0,n&&n(o)}function w(){a&&cancelAnimationFrame(a),o=0,a=0,u=!0}function _(S){e=S}function k(){return u}return{start:p,rewind:v,pause:m,cancel:w,set:_,isPaused:k}}function BW(e){var t=e;function n(i){t=i}function r(i){return Z_(Nh(i),t)}return{set:n,is:r}}function zW(e,t){var n=og(t||0,e,null,1);return function(){n.isPaused()&&n.start()}}function jW(e,t,n){var r=e.state,i=n.breakpoints||{},s=n.reducedMotion||{},o=wR(),a=[];function u(){var w=n.mediaQuery==="min";Vc(i).sort(function(_,k){return w?+_-+k:+k-+_}).forEach(function(_){d(i[_],"("+(w?"min":"max")+"-width:"+_+"px)")}),d(s,qT),p()}function c(w){w&&o.destroy()}function d(w,_){var k=matchMedia(_);o.bind(k,"change",p),a.push([w,k])}function p(){var w=r.is(Cp),_=n.direction,k=a.reduce(function(S,y){return Ds(S,y[1].matches?y[0]:{})},{});QT(n),v(k),n.destroy?e.destroy(n.destroy==="completely"):w?(c(!0),e.mount()):_!==n.direction&&e.refresh()}function m(w){matchMedia(qT).matches&&(w?Ds(n,s):QT(n,Vc(s)))}function v(w,_,k){Ds(n,w),_&&Ds(Object.getPrototypeOf(n),w),(k||!r.is(za))&&e.emit(Rn,n)}return{setup:u,destroy:c,reduce:m,set:v}}var ag="Arrow",lg=ag+"Left",ug=ag+"Right",PR=ag+"Up",MR=ag+"Down",ZT="rtl",cg="ttb",rv={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[PR,ug],ArrowRight:[MR,lg]};function YW(e,t,n){function r(s,o,a){a=a||n.direction;var u=a===ZT&&!o?1:a===cg?0:-1;return rv[s]&&rv[s][u]||s.replace(/width|left|right/i,function(c,d){var p=rv[c.toLowerCase()][u]||c;return d>0?p.charAt(0).toUpperCase()+p.slice(1):p})}function i(s){return s*(n.direction===ZT?1:-1)}return{resolve:r,orient:i}}var ji="role",sl="tabindex",WW="disabled",Br="aria-",Ph=Br+"controls",LR=Br+"current",ex=Br+"selected",fr=Br+"label",cS=Br+"labelledby",$R=Br+"hidden",hS=Br+"orientation",Yc=Br+"roledescription",tx=Br+"live",nx=Br+"busy",rx=Br+"atomic",dS=[ji,sl,WW,Ph,LR,fr,cS,$R,hS,Yc],pi=bh+"__",po="is-",iv=bh,ix=pi+"track",HW=pi+"list",hg=pi+"slide",FR=hg+"--clone",GW=hg+"__container",fS=pi+"arrows",dg=pi+"arrow",UR=dg+"--prev",VR=dg+"--next",fg=pi+"pagination",BR=fg+"__page",qW=pi+"progress",KW=qW+"__bar",QW=pi+"toggle",XW=pi+"spinner",JW=pi+"sr",ZW=po+"initialized",ra=po+"active",zR=po+"prev",jR=po+"next",a1=po+"visible",l1=po+"loading",YR=po+"focus-in",WR=po+"overflow",eH=[ra,a1,zR,jR,l1,YR,WR],tH={slide:hg,clone:FR,arrows:fS,arrow:dg,prev:UR,next:VR,pagination:fg,page:BR,spinner:XW};function nH(e,t){if(dR(e.closest))return e.closest(t);for(var n=e;n&&n.nodeType===1&&!Uc(n,t);)n=n.parentElement;return n}var rH=5,sx=200,HR="touchstart mousedown",sv="touchmove mousemove",ov="touchend touchcancel mouseup click";function iH(e,t,n){var r=Et(e),i=r.on,s=r.bind,o=e.root,a=n.i18n,u={},c=[],d=[],p=[],m,v,w;function _(){C(),x(),y()}function k(){i(Lt,S),i(Lt,_),i(Rn,y),s(document,HR+" keydown",function(N){w=N.type==="keydown"},{capture:!0}),s(o,"focusin",function(){$i(o,YR,!!w)})}function S(N){var O=dS.concat("style");ts(c),Fi(o,d),Fi(m,p),ui([m,v],O),ui(o,N?O:["style",Yc])}function y(){Fi(o,d),Fi(m,p),d=R(iv),p=R(ix),li(o,d),li(m,p),Ie(o,fr,n.label),Ie(o,cS,n.labelledby)}function C(){m=A("."+ix),v=Rh(m,"."+HW),Ku(m&&v,"A track/list element is missing."),cf(c,pR(v,"."+hg+":not(."+FR+")")),Fo({arrows:fS,pagination:fg,prev:UR,next:VR,bar:KW,toggle:QW},function(N,O){u[O]=A("."+N)}),Bc(u,{root:o,track:m,list:v,slides:c})}function x(){var N=o.id||UW(bh),O=n.role;o.id=N,m.id=m.id||N+"-track",v.id=v.id||N+"-list",!Rr(o,ji)&&o.tagName!=="SECTION"&&O&&Ie(o,ji,O),Ie(o,Yc,a.carousel),Ie(v,ji,"presentation")}function A(N){var O=yR(o,N);return O&&nH(O,"."+iv)===o?O:void 0}function R(N){return[N+"--"+n.type,N+"--"+n.direction,n.drag&&N+"--draggable",n.isNavigation&&N+"--nav",N===iv&&ra]}return Bc(u,{setup:_,mount:k,destroy:S})}var Nl="slide",ql="loop",Mh="fade";function sH(e,t,n,r){var i=Et(e),s=i.on,o=i.emit,a=i.bind,u=e.Components,c=e.root,d=e.options,p=d.isNavigation,m=d.updateOnMove,v=d.i18n,w=d.pagination,_=d.slideFocus,k=u.Direction.resolve,S=Rr(r,"style"),y=Rr(r,fr),C=n>-1,x=Rh(r,"."+GW),A;function R(){C||(r.id=c.id+"-slide"+rS(t+1),Ie(r,ji,w?"tabpanel":"group"),Ie(r,Yc,v.slide),Ie(r,fr,y||s1(v.slideLabel,[t+1,e.length]))),N()}function N(){a(r,"click",tt(o,iS,M)),a(r,"keydown",tt(o,RR,M)),s([Gl,bR,ha],j),s(oS,Z),m&&s(ns,L)}function O(){A=!0,i.destroy(),Fi(r,eH),ui(r,dS),Ie(r,"style",S),Ie(r,fr,y||"")}function Z(){var z=e.splides.map(function(b){var ee=b.splide.Components.Slides.getAt(t);return ee?ee.slide.id:""}).join(" ");Ie(r,fr,s1(v.slideX,(C?n:t)+1)),Ie(r,Ph,z),Ie(r,ji,_?"button":""),_&&ui(r,Yc)}function L(){A||j()}function j(){if(!A){var z=e.index;J(),X(),$i(r,zR,t===z-1),$i(r,jR,t===z+1)}}function J(){var z=oe();z!==XT(r,ra)&&($i(r,ra,z),Ie(r,LR,p&&z||""),o(z?_R:SR,M))}function X(){var z=xe(),b=!z&&(!oe()||C);if(e.state.is([Hl,Ih])||Ie(r,$R,b||""),Ie(tS(r,d.focusableNodes||""),sl,b?-1:""),_&&Ie(r,sl,b?-1:0),z!==XT(r,a1)&&($i(r,a1,z),o(z?ER:CR,M)),!z&&document.activeElement===r){var ee=u.Slides.getAt(e.index);ee&&mR(ee.slide)}}function ue(z,b,ee){Ar(ee&&x||r,z,b)}function oe(){var z=e.index;return z===t||d.cloneStatus&&z===n}function xe(){if(e.is(Mh))return oe();var z=lr(u.Elements.track),b=lr(r),ee=k("left",!0),F=k("right",!0);return Tp(z[ee])<=jc(b[ee])&&Tp(b[F])<=jc(z[F])}function ge(z,b){var ee=Un(z-t);return!C&&(d.rewind||e.is(ql))&&(ee=ro(ee,e.length-ee)),ee<=b}var M={index:t,slideIndex:n,slide:r,container:x,isClone:C,mount:R,destroy:O,update:j,style:ue,isWithin:ge};return M}function oH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=r.bind,a=t.Elements,u=a.slides,c=a.list,d=[];function p(){m(),i(Lt,v),i(Lt,m)}function m(){u.forEach(function(j,J){_(j,J,-1)})}function v(){A(function(j){j.destroy()}),ts(d)}function w(){A(function(j){j.update()})}function _(j,J,X){var ue=sH(e,J,X,j);ue.mount(),d.push(ue),d.sort(function(oe,xe){return oe.index-xe.index})}function k(j){return j?R(function(J){return!J.isClone}):d}function S(j){var J=t.Controller,X=J.toIndex(j),ue=J.hasFocus()?1:n.perPage;return R(function(oe){return hf(oe.index,X,X+ue-1)})}function y(j){return R(j)[0]}function C(j,J){vr(j,function(X){if(no(X)&&(X=gR(X)),fR(X)){var ue=u[J];ue?eS(X,ue):Oh(c,X),li(X,n.classes.slide),O(X,tt(s,Al))}}),s(Lt)}function x(j){na(R(j).map(function(J){return J.slide})),s(Lt)}function A(j,J){k(J).forEach(j)}function R(j){return d.filter(dR(j)?j:function(J){return no(j)?Uc(J.slide,j):Z_(Nh(j),J.index)})}function N(j,J,X){A(function(ue){ue.style(j,J,X)})}function O(j,J){var X=tS(j,"img"),ue=X.length;ue?X.forEach(function(oe){o(oe,"load error",function(){--ue||J()})}):J()}function Z(j){return j?u.length:d.length}function L(){return d.length>n.perPage}return{mount:p,destroy:v,update:w,register:_,get:k,getIn:S,getAt:y,add:C,remove:x,forEach:A,filter:R,style:N,getLength:Z,isEnough:L}}function aH(e,t,n){var r=Et(e),i=r.on,s=r.bind,o=r.emit,a=t.Slides,u=t.Direction.resolve,c=t.Elements,d=c.root,p=c.track,m=c.list,v=a.getAt,w=a.style,_,k,S;function y(){C(),s(window,"resize load",zW(tt(o,Al))),i([Rn,Lt],C),i(Al,x)}function C(){_=n.direction===cg,Ar(d,"maxWidth",wo(n.width)),Ar(p,u("paddingLeft"),A(!1)),Ar(p,u("paddingRight"),A(!0)),x(!0)}function x(M){var z=lr(d);(M||k.width!==z.width||k.height!==z.height)&&(Ar(p,"height",R()),w(u("marginRight"),wo(n.gap)),w("width",O()),w("height",Z(),!0),k=z,o(ig),S!==(S=ge())&&($i(d,WR,S),o(VW,S)))}function A(M){var z=n.padding,b=u(M?"right":"left");return z&&wo(z[b]||(Fc(z)?0:z))||"0px"}function R(){var M="";return _&&(M=N(),Ku(M,"height or heightRatio is missing."),M="calc("+M+" - "+A(!1)+" - "+A(!0)+")"),M}function N(){return wo(n.height||lr(m).width*n.heightRatio)}function O(){return n.autoWidth?null:wo(n.fixedWidth)||(_?"":L())}function Z(){return wo(n.fixedHeight)||(_?n.autoHeight?null:L():N())}function L(){var M=wo(n.gap);return"calc((100%"+(M&&" + "+M)+")/"+(n.perPage||1)+(M&&" - "+M)+")"}function j(){return lr(m)[u("width")]}function J(M,z){var b=v(M||0);return b?lr(b.slide)[u("width")]+(z?0:oe()):0}function X(M,z){var b=v(M);if(b){var ee=lr(b.slide)[u("right")],F=lr(m)[u("left")];return Un(ee-F)+(z?0:oe())}return 0}function ue(M){return X(e.length-1)-X(0)+J(0,M)}function oe(){var M=v(0);return M&&parseFloat(Ar(M.slide,u("marginRight")))||0}function xe(M){return parseFloat(Ar(p,u("padding"+(M?"Right":"Left"))))||0}function ge(){return e.is(Mh)||ue(!0)>j()}return{mount:y,resize:x,listSize:j,slideSize:J,sliderSize:ue,totalSize:X,getPadding:xe,isOverflow:ge}}var lH=2;function uH(e,t,n){var r=Et(e),i=r.on,s=t.Elements,o=t.Slides,a=t.Direction.resolve,u=[],c;function d(){i(Lt,p),i([Rn,Al],v),(c=k())&&(w(c),t.Layout.resize(!0))}function p(){m(),d()}function m(){na(u),ts(u),r.destroy()}function v(){var S=k();c!==S&&(c<S||!S)&&r.emit(Lt)}function w(S){var y=o.get().slice(),C=y.length;if(C){for(;y.length<S;)cf(y,y);cf(y.slice(-S),y.slice(0,S)).forEach(function(x,A){var R=A<S,N=_(x.slide,A);R?eS(N,y[0].slide):Oh(s.list,N),cf(u,N),o.register(N,A-S+(R?0:C),x.index)})}}function _(S,y){var C=S.cloneNode(!0);return li(C,n.classes.clone),C.id=e.root.id+"-clone"+rS(y+1),C}function k(){var S=n.clones;if(!e.is(ql))S=0;else if(Ah(S)){var y=n[a("fixedWidth")]&&t.Layout.slideSize(0),C=y&&jc(lr(s.track)[a("width")]/y);S=C||n[a("autoWidth")]&&e.length||n.perPage*lH}return S}return{mount:d,destroy:m}}function cH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=e.state.set,a=t.Layout,u=a.slideSize,c=a.getPadding,d=a.totalSize,p=a.listSize,m=a.sliderSize,v=t.Direction,w=v.resolve,_=v.orient,k=t.Elements,S=k.list,y=k.track,C;function x(){C=t.Transition,i([fo,ig,Rn,Lt],A)}function A(){t.Controller.isBusy()||(t.Scroll.cancel(),N(e.index),t.Slides.update())}function R(b,ee,F,V){b!==ee&&M(b>F)&&(j(),O(L(ue(),b>F),!0)),o(Hl),s(ns,ee,F,b),C.start(ee,function(){o(Il),s(Gl,ee,F,b),V&&V()})}function N(b){O(X(b,!0))}function O(b,ee){if(!e.is(Mh)){var F=ee?b:Z(b);Ar(S,"transform","translate"+w("X")+"("+F+"px)"),b!==F&&s(bR)}}function Z(b){if(e.is(ql)){var ee=J(b),F=ee>t.Controller.getEnd(),V=ee<0;(V||F)&&(b=L(b,F))}return b}function L(b,ee){var F=b-ge(ee),V=m();return b-=_(V*(jc(Un(F)/V)||1))*(ee?1:-1),b}function j(){O(ue(),!0),C.cancel()}function J(b){for(var ee=t.Slides.get(),F=0,V=1/0,Y=0;Y<ee.length;Y++){var B=ee[Y].index,D=Un(X(B,!0)-b);if(D<=V)V=D,F=B;else break}return F}function X(b,ee){var F=_(d(b-1)-xe(b));return ee?oe(F):F}function ue(){var b=w("left");return lr(S)[b]-lr(y)[b]+_(c(!1))}function oe(b){return n.trimSpace&&e.is(Nl)&&(b=Ta(b,0,_(m(!0)-p()))),b}function xe(b){var ee=n.focus;return ee==="center"?(p()-u(b,!0))/2:+ee*u(b)||0}function ge(b){return X(b?t.Controller.getEnd():0,!!n.trimSpace)}function M(b){var ee=_(L(ue(),b));return b?ee>=0:ee<=S[w("scrollWidth")]-lr(y)[w("width")]}function z(b,ee){ee=Ah(ee)?ue():ee;var F=b!==!0&&_(ee)<_(ge(!1)),V=b!==!1&&_(ee)>_(ge(!0));return F||V}return{mount:x,move:R,jump:N,translate:O,shift:L,cancel:j,toIndex:J,toPosition:X,getPosition:ue,getLimit:ge,exceededLimit:z,reposition:A}}function hH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=t.Move,a=o.getPosition,u=o.getLimit,c=o.toPosition,d=t.Slides,p=d.isEnough,m=d.getLength,v=n.omitEnd,w=e.is(ql),_=e.is(Nl),k=tt(ue,!1),S=tt(ue,!0),y=n.start||0,C,x=y,A,R,N;function O(){Z(),i([Rn,Lt,xp],Z),i(ig,L)}function Z(){A=m(!0),R=n.perMove,N=n.perPage,C=M();var D=Ta(y,0,v?C:A-1);D!==y&&(y=D,o.reposition())}function L(){C!==M()&&s(xp)}function j(D,le,W){if(!B()){var we=X(D),me=ge(we);me>-1&&(le||me!==y)&&(F(me),o.move(we,me,x,W))}}function J(D,le,W,we){t.Scroll.scroll(D,le,W,function(){var me=ge(o.toIndex(a()));F(v?ro(me,C):me),we&&we()})}function X(D){var le=y;if(no(D)){var W=D.match(/([+\-<>])(\d+)?/)||[],we=W[1],me=W[2];we==="+"||we==="-"?le=oe(y+ +(""+we+(+me||1)),y):we===">"?le=me?z(+me):k(!0):we==="<"&&(le=S(!0))}else le=w?D:Ta(D,0,C);return le}function ue(D,le){var W=R||(Y()?1:N),we=oe(y+W*(D?-1:1),y,!(R||Y()));return we===-1&&_&&!vR(a(),u(!D),1)?D?0:C:le?we:ge(we)}function oe(D,le,W){if(p()||Y()){var we=xe(D);we!==D&&(le=D,D=we,W=!1),D<0||D>C?!R&&(hf(0,D,le,!0)||hf(C,le,D,!0))?D=z(b(D)):w?D=W?D<0?-(A%N||N):A:D:n.rewind?D=D<0?C:0:D=-1:W&&D!==le&&(D=z(b(le)+(D<le?-1:1)))}else D=-1;return D}function xe(D){if(_&&n.trimSpace==="move"&&D!==y)for(var le=a();le===c(D,!0)&&hf(D,0,e.length-1,!n.rewind);)D<y?--D:++D;return D}function ge(D){return w?(D+A)%A||0:D}function M(){for(var D=A-(Y()||w&&R?1:N);v&&D-- >0;)if(c(A-1,!0)!==c(D,!0)){D++;break}return Ta(D,0,A-1)}function z(D){return Ta(Y()?D:N*D,0,C)}function b(D){return Y()?ro(D,C):Tp((D>=C?A-1:D)/N)}function ee(D){var le=o.toIndex(D);return _?Ta(le,0,C):le}function F(D){D!==y&&(x=y,y=D)}function V(D){return D?x:y}function Y(){return!Ah(n.focus)||n.isNavigation}function B(){return e.state.is([Hl,Ih])&&!!n.waitForTransition}return{mount:O,go:j,scroll:J,getNext:k,getPrev:S,getAdjacent:ue,getEnd:M,setIndex:F,getIndex:V,toIndex:z,toPage:b,toDest:ee,hasFocus:Y,isBusy:B}}var dH="http://www.w3.org/2000/svg",fH="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",$d=40;function pH(e,t,n){var r=Et(e),i=r.on,s=r.bind,o=r.emit,a=n.classes,u=n.i18n,c=t.Elements,d=t.Controller,p=c.arrows,m=c.track,v=p,w=c.prev,_=c.next,k,S,y={};function C(){A(),i(Rn,x)}function x(){R(),C()}function A(){var J=n.arrows;J&&!(w&&_)&&Z(),w&&_&&(Bc(y,{prev:w,next:_}),zc(v,J?"":"none"),li(v,S=fS+"--"+n.direction),J&&(N(),j(),Ie([w,_],Ph,m.id),o(DR,w,_)))}function R(){r.destroy(),Fi(v,S),k?(na(p?[w,_]:v),w=_=null):ui([w,_],dS)}function N(){i([fo,Gl,Lt,ha,xp],j),s(_,"click",tt(O,">")),s(w,"click",tt(O,"<"))}function O(J){d.go(J,!0)}function Z(){v=p||il("div",a.arrows),w=L(!0),_=L(!1),k=!0,Oh(v,[w,_]),!p&&eS(v,m)}function L(J){var X='<button class="'+a.arrow+" "+(J?a.prev:a.next)+'" type="button"><svg xmlns="'+dH+'" viewBox="0 0 '+$d+" "+$d+'" width="'+$d+'" height="'+$d+'" focusable="false"><path d="'+(n.arrowPath||fH)+'" />';return gR(X)}function j(){if(w&&_){var J=e.index,X=d.getPrev(),ue=d.getNext(),oe=X>-1&&J<X?u.last:u.prev,xe=ue>-1&&J>ue?u.first:u.next;w.disabled=X<0,_.disabled=ue<0,Ie(w,fr,oe),Ie(_,fr,xe),o(IR,w,_,X,ue)}}return{arrows:y,mount:C,destroy:R,update:j}}var mH=nS+"-interval";function gH(e,t,n){var r=Et(e),i=r.on,s=r.bind,o=r.emit,a=og(n.interval,e.go.bind(e,">"),N),u=a.isPaused,c=t.Elements,d=t.Elements,p=d.root,m=d.toggle,v=n.autoplay,w,_,k=v==="pause";function S(){v&&(y(),m&&Ie(m,Ph,c.track.id),k||C(),R())}function y(){n.pauseOnHover&&s(p,"mouseenter mouseleave",function(Z){w=Z.type==="mouseenter",A()}),n.pauseOnFocus&&s(p,"focusin focusout",function(Z){_=Z.type==="focusin",A()}),m&&s(m,"click",function(){k?C():x(!0)}),i([ns,sg,Lt],a.rewind),i(ns,O)}function C(){u()&&t.Slides.isEnough()&&(a.start(!n.resetProgress),_=w=k=!1,R(),o(aS))}function x(Z){Z===void 0&&(Z=!0),k=!!Z,R(),u()||(a.pause(),o(lS))}function A(){k||(w||_?x(!1):C())}function R(){m&&($i(m,ra,!k),Ie(m,fr,n.i18n[k?"play":"pause"]))}function N(Z){var L=c.bar;L&&Ar(L,"width",Z*100+"%"),o(OR,Z)}function O(Z){var L=t.Slides.getAt(Z);a.set(L&&+Rr(L.slide,mH)||n.interval)}return{mount:S,destroy:a.cancel,play:C,pause:x,isPaused:u}}function yH(e,t,n){var r=Et(e),i=r.on;function s(){n.cover&&(i(uS,tt(a,!0)),i([fo,Rn,Lt],tt(o,!0)))}function o(u){t.Slides.forEach(function(c){var d=Rh(c.container||c.slide,"img");d&&d.src&&a(u,d,c)})}function a(u,c,d){d.style("background",u?'center/cover no-repeat url("'+c.src+'")':"",!0),zc(c,u?"none":"")}return{mount:s,destroy:tt(o,!1)}}var vH=10,wH=600,_H=.6,SH=1.5,EH=800;function CH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=e.state.set,a=t.Move,u=a.getPosition,c=a.getLimit,d=a.exceededLimit,p=a.translate,m=e.is(Nl),v,w,_=1;function k(){i(ns,x),i([Rn,Lt],A)}function S(N,O,Z,L,j){var J=u();if(x(),Z&&(!m||!d())){var X=t.Layout.sliderSize(),ue=i1(N)*X*Tp(Un(N)/X)||0;N=a.toPosition(t.Controller.toDest(N%X))+ue}var oe=vR(J,N,1);_=1,O=oe?0:O||kp(Un(N-J)/SH,EH),w=L,v=og(O,y,tt(C,J,N,j),1),o(Ih),s(sg),v.start()}function y(){o(Il),w&&w(),s(ha)}function C(N,O,Z,L){var j=u(),J=N+(O-N)*R(L),X=(J-j)*_;p(j+X),m&&!Z&&d()&&(_*=_H,Un(X)<vH&&S(c(d(!0)),wH,!1,w,!0))}function x(){v&&v.cancel()}function A(){v&&!v.isPaused()&&(x(),y())}function R(N){var O=n.easingFunc;return O?O(N):1-Math.pow(1-N,4)}return{mount:k,destroy:x,scroll:S,cancel:A}}var xa={passive:!1,capture:!0};function kH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=r.bind,a=r.unbind,u=e.state,c=t.Move,d=t.Scroll,p=t.Controller,m=t.Elements.track,v=t.Media.reduce,w=t.Direction,_=w.resolve,k=w.orient,S=c.getPosition,y=c.exceededLimit,C,x,A,R,N,O=!1,Z,L,j;function J(){o(m,sv,n1,xa),o(m,ov,n1,xa),o(m,HR,ue,xa),o(m,"click",ge,{capture:!0}),o(m,"dragstart",Ai),i([fo,Rn],X)}function X(){var te=n.drag;_e(!te),R=te==="free"}function ue(te){if(Z=!1,!L){var De=me(te);we(te.target)&&(De||!te.button)&&(p.isBusy()?Ai(te,!0):(j=De?m:window,N=u.is([Hl,Ih]),A=null,o(j,sv,oe,xa),o(j,ov,xe,xa),c.cancel(),d.cancel(),M(te)))}}function oe(te){if(u.is(uf)||(u.set(uf),s(kR)),te.cancelable)if(N){c.translate(C+W(Y(te)));var De=B(te)>sx,ke=O!==(O=y());(De||ke)&&M(te),Z=!0,s(TR),Ai(te)}else ee(te)&&(N=b(te),Ai(te))}function xe(te){u.is(uf)&&(u.set(Il),s(xR)),N&&(z(te),Ai(te)),a(j,sv,oe),a(j,ov,xe),N=!1}function ge(te){!L&&Z&&Ai(te,!0)}function M(te){A=x,x=te,C=S()}function z(te){var De=F(te),ke=V(De),ut=n.rewind&&n.rewindByDrag;v(!1),R?p.scroll(ke,0,n.snap):e.is(Mh)?p.go(k(i1(De))<0?ut?"<":"-":ut?">":"+"):e.is(Nl)&&O&&ut?p.go(y(!0)?">":"<"):p.go(p.toDest(ke),!0),v(!0)}function b(te){var De=n.dragMinThreshold,ke=Fc(De),ut=ke&&De.mouse||0,Le=(ke?De.touch:+De)||10;return Un(Y(te))>(me(te)?Le:ut)}function ee(te){return Un(Y(te))>Un(Y(te,!0))}function F(te){if(e.is(ql)||!O){var De=B(te);if(De&&De<sx)return Y(te)/De}return 0}function V(te){return S()+i1(te)*ro(Un(te)*(n.flickPower||600),R?1/0:t.Layout.listSize()*(n.flickMaxPages||1))}function Y(te,De){return le(te,De)-le(D(te),De)}function B(te){return r1(te)-r1(D(te))}function D(te){return x===te&&A||x}function le(te,De){return(me(te)?te.changedTouches[0]:te)["page"+_(De?"Y":"X")]}function W(te){return te/(O&&e.is(Nl)?rH:1)}function we(te){var De=n.noDrag;return!Uc(te,"."+BR+", ."+dg)&&(!De||!Uc(te,De))}function me(te){return typeof TouchEvent!="undefined"&&te instanceof TouchEvent}function Ve(){return N}function _e(te){L=te}return{mount:J,disable:_e,isDragging:Ve}}var TH={Spacebar:" ",Right:ug,Left:lg,Up:PR,Down:MR};function pS(e){return e=no(e)?e:e.key,TH[e]||e}var ox="keydown";function xH(e,t,n){var r=Et(e),i=r.on,s=r.bind,o=r.unbind,a=e.root,u=t.Direction.resolve,c,d;function p(){m(),i(Rn,v),i(Rn,m),i(ns,_)}function m(){var S=n.keyboard;S&&(c=S==="global"?window:a,s(c,ox,k))}function v(){o(c,ox)}function w(S){d=S}function _(){var S=d;d=!0,hR(function(){d=S})}function k(S){if(!d){var y=pS(S);y===u(lg)?e.go("<"):y===u(ug)&&e.go(">")}}return{mount:p,destroy:v,disable:w}}var Qu=nS+"-lazy",df=Qu+"-srcset",DH="["+Qu+"], ["+df+"]";function IH(e,t,n){var r=Et(e),i=r.on,s=r.off,o=r.bind,a=r.emit,u=n.lazyLoad==="sequential",c=[Gl,ha],d=[];function p(){n.lazyLoad&&(m(),i(Lt,m))}function m(){ts(d),v(),u?S():(s(c),i(c,w),w())}function v(){t.Slides.forEach(function(y){tS(y.slide,DH).forEach(function(C){var x=Rr(C,Qu),A=Rr(C,df);if(x!==C.src||A!==C.srcset){var R=n.classes.spinner,N=C.parentElement,O=Rh(N,"."+R)||il("span",R,N);d.push([C,y,O]),C.src||zc(C,"none")}})})}function w(){d=d.filter(function(y){var C=n.perPage*((n.preloadPages||1)+1)-1;return y[1].isWithin(e.index,C)?_(y):!0}),d.length||s(c)}function _(y){var C=y[0];li(y[1].slide,l1),o(C,"load error",tt(k,y)),Ie(C,"src",Rr(C,Qu)),Ie(C,"srcset",Rr(C,df)),ui(C,Qu),ui(C,df)}function k(y,C){var x=y[0],A=y[1];Fi(A.slide,l1),C.type!=="error"&&(na(y[2]),zc(x,""),a(uS,x,A),a(Al)),u&&S()}function S(){d.length&&_(d.shift())}return{mount:p,destroy:tt(ts,d),check:w}}function AH(e,t,n){var r=Et(e),i=r.on,s=r.emit,o=r.bind,a=t.Slides,u=t.Elements,c=t.Controller,d=c.hasFocus,p=c.getIndex,m=c.go,v=t.Direction.resolve,w=u.pagination,_=[],k,S;function y(){C(),i([Rn,Lt,xp],y);var L=n.pagination;w&&zc(w,L?"":"none"),L&&(i([ns,sg,ha],Z),x(),Z(),s(AR,{list:k,items:_},O(e.index)))}function C(){k&&(na(w?ho(k.children):k),Fi(k,S),ts(_),k=null),r.destroy()}function x(){var L=e.length,j=n.classes,J=n.i18n,X=n.perPage,ue=d()?c.getEnd()+1:jc(L/X);k=w||il("ul",j.pagination,u.track.parentElement),li(k,S=fg+"--"+N()),Ie(k,ji,"tablist"),Ie(k,fr,J.select),Ie(k,hS,N()===cg?"vertical":"");for(var oe=0;oe<ue;oe++){var xe=il("li",null,k),ge=il("button",{class:j.page,type:"button"},xe),M=a.getIn(oe).map(function(b){return b.slide.id}),z=!d()&&X>1?J.pageX:J.slideX;o(ge,"click",tt(A,oe)),n.paginationKeyboard&&o(ge,"keydown",tt(R,oe)),Ie(xe,ji,"presentation"),Ie(ge,ji,"tab"),Ie(ge,Ph,M.join(" ")),Ie(ge,fr,s1(z,oe+1)),Ie(ge,sl,-1),_.push({li:xe,button:ge,page:oe})}}function A(L){m(">"+L,!0)}function R(L,j){var J=_.length,X=pS(j),ue=N(),oe=-1;X===v(ug,!1,ue)?oe=++L%J:X===v(lg,!1,ue)?oe=(--L+J)%J:X==="Home"?oe=0:X==="End"&&(oe=J-1);var xe=_[oe];xe&&(mR(xe.button),m(">"+oe),Ai(j,!0))}function N(){return n.paginationDirection||n.direction}function O(L){return _[c.toPage(L)]}function Z(){var L=O(p(!0)),j=O(p());if(L){var J=L.button;Fi(J,ra),ui(J,ex),Ie(J,sl,-1)}if(j){var X=j.button;li(X,ra),Ie(X,ex,!0),Ie(X,sl,"")}s(NR,{list:k,items:_},L,j)}return{items:_,mount:y,destroy:C,getAt:O,update:Z}}var NH=[" ","Enter"];function OH(e,t,n){var r=n.isNavigation,i=n.slideFocus,s=[];function o(){e.splides.forEach(function(w){w.isParent||(c(e,w.splide),c(w.splide,e))}),r&&d()}function a(){s.forEach(function(w){w.destroy()}),ts(s)}function u(){a(),o()}function c(w,_){var k=Et(w);k.on(ns,function(S,y,C){_.go(_.is(ql)?C:S)}),s.push(k)}function d(){var w=Et(e),_=w.on;_(iS,m),_(RR,v),_([fo,Rn],p),s.push(w),w.emit(oS,e.splides)}function p(){Ie(t.Elements.list,hS,n.direction===cg?"vertical":"")}function m(w){e.go(w.index)}function v(w,_){Z_(NH,pS(_))&&(m(w),Ai(_))}return{setup:tt(t.Media.set,{slideFocus:Ah(i)?r:i},!0),mount:o,destroy:a,remount:u}}function RH(e,t,n){var r=Et(e),i=r.bind,s=0;function o(){n.wheel&&i(t.Elements.track,"wheel",a,xa)}function a(c){if(c.cancelable){var d=c.deltaY,p=d<0,m=r1(c),v=n.wheelMinThreshold||0,w=n.wheelSleep||0;Un(d)>v&&m-s>w&&(e.go(p?"<":">"),s=m),u(p)&&Ai(c)}}function u(c){return!n.releaseWheel||e.state.is(Hl)||t.Controller.getAdjacent(c)!==-1}return{mount:o}}var bH=90;function PH(e,t,n){var r=Et(e),i=r.on,s=t.Elements.track,o=n.live&&!n.isNavigation,a=il("span",JW),u=og(bH,tt(d,!1));function c(){o&&(m(!t.Autoplay.isPaused()),Ie(s,rx,!0),a.textContent="\u2026",i(aS,tt(m,!0)),i(lS,tt(m,!1)),i([Gl,ha],tt(d,!0)))}function d(v){Ie(s,nx,v),v?(Oh(s,a),u.start()):(na(a),u.cancel())}function p(){ui(s,[tx,rx,nx]),na(a)}function m(v){o&&Ie(s,tx,v?"off":"polite")}return{mount:c,disable:m,destroy:p}}var MH=Object.freeze({__proto__:null,Media:jW,Direction:YW,Elements:iH,Slides:oH,Layout:aH,Clones:uH,Move:cH,Controller:hH,Arrows:pH,Autoplay:gH,Cover:yH,Scroll:CH,Drag:kH,Keyboard:xH,LazyLoad:IH,Pagination:AH,Sync:OH,Wheel:RH,Live:PH}),LH={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},$H={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:tH,i18n:LH,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function FH(e,t,n){var r=t.Slides;function i(){Et(e).on([fo,Lt],s)}function s(){r.forEach(function(a){a.style("transform","translateX(-"+100*a.index+"%)")})}function o(a,u){r.style("transition","opacity "+n.speed+"ms "+n.easing),hR(u)}return{mount:i,start:o,cancel:n1}}function UH(e,t,n){var r=t.Move,i=t.Controller,s=t.Scroll,o=t.Elements.list,a=tt(Ar,o,"transition"),u;function c(){Et(e).bind(o,"transitionend",function(v){v.target===o&&u&&(p(),u())})}function d(v,w){var _=r.toPosition(v,!0),k=r.getPosition(),S=m(v);Un(_-k)>=1&&S>=1?n.useScroll?s.scroll(_,S,!1,w):(a("transform "+S+"ms "+n.easing),r.translate(_,!0),u=w):(r.jump(v),w())}function p(){a(""),s.cancel()}function m(v){var w=n.rewindSpeed;if(e.is(Nl)&&w){var _=i.getIndex(!0),k=i.getEnd();if(_===0&&v>=k||_>=k&&v===0)return w}return n.speed}return{mount:c,start:d,cancel:p}}var VH=function(){function e(n,r){this.event=Et(),this.Components={},this.state=BW(za),this.splides=[],this._o={},this._E={};var i=no(n)?yR(document,n):n;Ku(i,i+" is invalid."),this.root=i,r=Ds({label:Rr(i,fr)||"",labelledby:Rr(i,cS)||""},$H,e.defaults,r||{});try{Ds(r,JSON.parse(Rr(i,nS)))}catch{Ku(!1,"Invalid JSON")}this._o=Object.create(Ds({},r))}var t=e.prototype;return t.mount=function(r,i){var s=this,o=this.state,a=this.Components;Ku(o.is([za,Cp]),"Already mounted!"),o.set(za),this._C=a,this._T=i||this._T||(this.is(Mh)?FH:UH),this._E=r||this._E;var u=Bc({},MH,this._E,{Transition:this._T});return Fo(u,function(c,d){var p=c(s,a,s._o);a[d]=p,p.setup&&p.setup()}),Fo(a,function(c){c.mount&&c.mount()}),this.emit(fo),li(this.root,ZW),o.set(Il),this.emit(o1),this},t.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(Il)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},t.go=function(r){return this._C.Controller.go(r),this},t.on=function(r,i){return this.event.on(r,i),this},t.off=function(r){return this.event.off(r),this},t.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(ho(arguments,1))),this},t.add=function(r,i){return this._C.Slides.add(r,i),this},t.remove=function(r){return this._C.Slides.remove(r),this},t.is=function(r){return this._o.type===r},t.refresh=function(){return this.emit(Lt),this},t.destroy=function(r){r===void 0&&(r=!0);var i=this.event,s=this.state;return s.is(za)?Et(this).on(o1,this.destroy.bind(this,r)):(Fo(this._C,function(o){o.destroy&&o.destroy(r)},!0),i.emit(sS),i.destroy(),r&&ts(this.splides),s.set(Cp)),this},LW(e,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),mS=VH;mS.defaults={};mS.STATES=FW;var ax=[[fo,"onMounted"],[o1,"onReady"],[ns,"onMove"],[Gl,"onMoved"],[iS,"onClick"],[_R,"onActive"],[SR,"onInactive"],[ER,"onVisible"],[CR,"onHidden"],[Lt,"onRefresh"],[Rn,"onUpdated"],[Al,"onResize"],[ig,"onResized"],[kR,"onDrag"],[TR,"onDragging"],[xR,"onDragged"],[sg,"onScroll"],[ha,"onScrolled"],[sS,"onDestroy"],[DR,"onArrowsMounted"],[IR,"onArrowsUpdated"],[AR,"onPaginationMounted"],[NR,"onPaginationUpdated"],[oS,"onNavigationMounted"],[aS,"onAutoplayPlay"],[OR,"onAutoplayPlaying"],[lS,"onAutoplayPause"],[uS,"onLazyLoadLoaded"]];function gS(...e){return e.filter(Boolean).join(" ")}function Dp(e){return e!==null&&typeof e=="object"}function u1(e,t){if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&!e.some((n,r)=>!u1(n,t[r]));if(Dp(e)&&Dp(t)){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&!n.some(i=>!Object.prototype.hasOwnProperty.call(t,i)||!u1(e[i],t[i]))}return e===t}function BH(e,t){return e.length===t.length&&!e.some((n,r)=>n!==t[r])}function zH(e,t){if(e){const n=Object.keys(e);for(let r=0;r<n.length;r++){const i=n[r];if(i!=="__proto__"&&t(e[i],i)===!1)break}}return e}function c1(e,t){const n=e;return zH(t,(r,i)=>{Array.isArray(r)?n[i]=r.slice():Dp(r)?n[i]=c1(Dp(n[i])?n[i]:{},r):n[i]=r}),n}var jH=({children:e,className:t,...n})=>T("div",{className:gS("splide__track",t),...n,children:T("ul",{className:"splide__list",children:e})}),GR=class extends qt.Component{constructor(){super(...arguments),this.splideRef=qt.createRef(),this.slides=[]}componentDidMount(){const{options:e,extensions:t,transition:n}=this.props,{current:r}=this.splideRef;r&&(this.splide=new mS(r,e),this.bind(this.splide),this.splide.mount(t,n),this.options=c1({},e||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:e}=this.props;e&&!u1(this.options,e)&&(this.splide.options=e,this.options=c1({},e));const t=this.getSlides();BH(this.slides,t)||(this.splide.refresh(),this.slides=t)}sync(e){var t;(t=this.splide)==null||t.sync(e)}go(e){var t;(t=this.splide)==null||t.go(e)}getSlides(){var e;if(this.splide){const t=(e=this.splide.Components.Elements)==null?void 0:e.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(e){ax.forEach(([t,n])=>{const r=this.props[n];typeof r=="function"&&e.on(t,(...i)=>{r(e,...i)})})}omit(e,t){return t.forEach(n=>{Object.prototype.hasOwnProperty.call(e,n)&&delete e[n]}),e}render(){const{className:e,tag:t="div",hasTrack:n=!0,children:r,...i}=this.props;return qt.createElement(t,{className:gS("splide",e),ref:this.splideRef,...this.omit(i,["options",...ax.map(s=>s[1])])},n?qt.createElement(jH,null,r):r)}},qR=({children:e,className:t,...n})=>qt.createElement("li",{className:gS("splide__slide",t),...n},e);/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 *///! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var KR;function ne(){return KR.apply(null,arguments)}function YH(e){KR=e}function Fr(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Uo(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function Ye(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function yS(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(Ye(e,t))return!1;return!0}function Ln(e){return e===void 0}function rs(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Lh(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function QR(e,t){var n=[],r,i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function Is(e,t){for(var n in t)Ye(t,n)&&(e[n]=t[n]);return Ye(t,"toString")&&(e.toString=t.toString),Ye(t,"valueOf")&&(e.valueOf=t.valueOf),e}function mi(e,t,n,r){return Sb(e,t,n,r,!0).utc()}function WH(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function Ae(e){return e._pf==null&&(e._pf=WH()),e._pf}var h1;Array.prototype.some?h1=Array.prototype.some:h1=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function vS(e){if(e._isValid==null){var t=Ae(e),n=h1.call(t.parsedDateParts,function(i){return i!=null}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r}return e._isValid}function pg(e){var t=mi(NaN);return e!=null?Is(Ae(t),e):Ae(t).userInvalidated=!0,t}var lx=ne.momentProperties=[],av=!1;function wS(e,t){var n,r,i,s=lx.length;if(Ln(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),Ln(t._i)||(e._i=t._i),Ln(t._f)||(e._f=t._f),Ln(t._l)||(e._l=t._l),Ln(t._strict)||(e._strict=t._strict),Ln(t._tzm)||(e._tzm=t._tzm),Ln(t._isUTC)||(e._isUTC=t._isUTC),Ln(t._offset)||(e._offset=t._offset),Ln(t._pf)||(e._pf=Ae(t)),Ln(t._locale)||(e._locale=t._locale),s>0)for(n=0;n<s;n++)r=lx[n],i=t[r],Ln(i)||(e[r]=i);return e}function $h(e){wS(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),av===!1&&(av=!0,ne.updateOffset(this),av=!1)}function Ur(e){return e instanceof $h||e!=null&&e._isAMomentObject!=null}function XR(e){ne.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+e)}function Sr(e,t){var n=!0;return Is(function(){if(ne.deprecationHandler!=null&&ne.deprecationHandler(null,e),n){var r=[],i,s,o,a=arguments.length;for(s=0;s<a;s++){if(i="",typeof arguments[s]=="object"){i+=`
[`+s+"] ";for(o in arguments[0])Ye(arguments[0],o)&&(i+=o+": "+arguments[0][o]+", ");i=i.slice(0,-2)}else i=arguments[s];r.push(i)}XR(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var ux={};function JR(e,t){ne.deprecationHandler!=null&&ne.deprecationHandler(e,t),ux[e]||(XR(t),ux[e]=!0)}ne.suppressDeprecationWarnings=!1;ne.deprecationHandler=null;function gi(e){return typeof Function!="undefined"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function HH(e){var t,n;for(n in e)Ye(e,n)&&(t=e[n],gi(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function d1(e,t){var n=Is({},e),r;for(r in t)Ye(t,r)&&(Uo(e[r])&&Uo(t[r])?(n[r]={},Is(n[r],e[r]),Is(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)Ye(e,r)&&!Ye(t,r)&&Uo(e[r])&&(n[r]=Is({},n[r]));return n}function _S(e){e!=null&&this.set(e)}var f1;Object.keys?f1=Object.keys:f1=function(e){var t,n=[];for(t in e)Ye(e,t)&&n.push(t);return n};var GH={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function qH(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return gi(r)?r.call(t,n):r}function ci(e,t,n){var r=""+Math.abs(e),i=t-r.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var SS=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Fd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,lv={},ol={};function de(e,t,n,r){var i=r;typeof r=="string"&&(i=function(){return this[r]()}),e&&(ol[e]=i),t&&(ol[t[0]]=function(){return ci(i.apply(this,arguments),t[1],t[2])}),n&&(ol[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function KH(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function QH(e){var t=e.match(SS),n,r;for(n=0,r=t.length;n<r;n++)ol[t[n]]?t[n]=ol[t[n]]:t[n]=KH(t[n]);return function(i){var s="",o;for(o=0;o<r;o++)s+=gi(t[o])?t[o].call(i,e):t[o];return s}}function ff(e,t){return e.isValid()?(t=ZR(t,e.localeData()),lv[t]=lv[t]||QH(t),lv[t](e)):e.localeData().invalidDate()}function ZR(e,t){var n=5;function r(i){return t.longDateFormat(i)||i}for(Fd.lastIndex=0;n>=0&&Fd.test(e);)e=e.replace(Fd,r),Fd.lastIndex=0,n-=1;return e}var XH={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function JH(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(SS).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var ZH="Invalid date";function eG(){return this._invalidDate}var tG="%d",nG=/\d{1,2}/;function rG(e){return this._ordinal.replace("%d",e)}var iG={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function sG(e,t,n,r){var i=this._relativeTime[n];return gi(i)?i(e,t,n,r):i.replace(/%d/i,e)}function oG(e,t){var n=this._relativeTime[e>0?"future":"past"];return gi(n)?n(t):n.replace(/%s/i,t)}var Xu={};function kn(e,t){var n=e.toLowerCase();Xu[n]=Xu[n+"s"]=Xu[t]=e}function Er(e){return typeof e=="string"?Xu[e]||Xu[e.toLowerCase()]:void 0}function ES(e){var t={},n,r;for(r in e)Ye(e,r)&&(n=Er(r),n&&(t[n]=e[r]));return t}var eb={};function Tn(e,t){eb[e]=t}function aG(e){var t=[],n;for(n in e)Ye(e,n)&&t.push({unit:n,priority:eb[n]});return t.sort(function(r,i){return r.priority-i.priority}),t}function mg(e){return e%4===0&&e%100!==0||e%400===0}function ur(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function be(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=ur(t)),n}function Kl(e,t){return function(n){return n!=null?(tb(this,e,n),ne.updateOffset(this,t),this):Ip(this,e)}}function Ip(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function tb(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&mg(e.year())&&e.month()===1&&e.date()===29?(n=be(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Sg(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function lG(e){return e=Er(e),gi(this[e])?this[e]():this}function uG(e,t){if(typeof e=="object"){e=ES(e);var n=aG(e),r,i=n.length;for(r=0;r<i;r++)this[n[r].unit](e[n[r].unit])}else if(e=Er(e),gi(this[e]))return this[e](t);return this}var nb=/\d/,sr=/\d\d/,rb=/\d{3}/,CS=/\d{4}/,gg=/[+-]?\d{6}/,lt=/\d\d?/,ib=/\d\d\d\d?/,sb=/\d\d\d\d\d\d?/,yg=/\d{1,3}/,kS=/\d{1,4}/,vg=/[+-]?\d{1,6}/,Ql=/\d+/,wg=/[+-]?\d+/,cG=/Z|[+-]\d\d:?\d\d/gi,_g=/Z|[+-]\d\d(?::?\d\d)?/gi,hG=/[+-]?\d+(\.\d{1,3})?/,Fh=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Ap;Ap={};function se(e,t,n){Ap[e]=gi(t)?t:function(r,i){return r&&n?n:t}}function dG(e,t){return Ye(Ap,e)?Ap[e](t._strict,t._locale):new RegExp(fG(e))}function fG(e){return qn(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,i,s){return n||r||i||s}))}function qn(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var p1={};function Ze(e,t){var n,r=t,i;for(typeof e=="string"&&(e=[e]),rs(t)&&(r=function(s,o){o[t]=be(s)}),i=e.length,n=0;n<i;n++)p1[e[n]]=r}function Uh(e,t){Ze(e,function(n,r,i,s){i._w=i._w||{},t(n,i._w,i,s)})}function pG(e,t,n){t!=null&&Ye(p1,e)&&p1[e](t,n._a,n,e)}var _n=0,Ui=1,qr=2,jt=3,br=4,Vi=5,Ro=6,mG=7,gG=8;function yG(e,t){return(e%t+t)%t}var Nt;Array.prototype.indexOf?Nt=Array.prototype.indexOf:Nt=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Sg(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=yG(t,12);return e+=(t-n)/12,n===1?mg(e)?29:28:31-n%7%2}de("M",["MM",2],"Mo",function(){return this.month()+1});de("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});de("MMMM",0,0,function(e){return this.localeData().months(this,e)});kn("month","M");Tn("month",8);se("M",lt);se("MM",lt,sr);se("MMM",function(e,t){return t.monthsShortRegex(e)});se("MMMM",function(e,t){return t.monthsRegex(e)});Ze(["M","MM"],function(e,t){t[Ui]=be(e)-1});Ze(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);i!=null?t[Ui]=i:Ae(n).invalidMonth=e});var vG="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ob="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ab=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,wG=Fh,_G=Fh;function SG(e,t){return e?Fr(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||ab).test(t)?"format":"standalone"][e.month()]:Fr(this._months)?this._months:this._months.standalone}function EG(e,t){return e?Fr(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[ab.test(t)?"format":"standalone"][e.month()]:Fr(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function CG(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)s=mi([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(s,"").toLocaleLowerCase();return n?t==="MMM"?(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:null):(i=Nt.call(this._longMonthsParse,o),i!==-1?i:null):t==="MMM"?(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:(i=Nt.call(this._longMonthsParse,o),i!==-1?i:null)):(i=Nt.call(this._longMonthsParse,o),i!==-1?i:(i=Nt.call(this._shortMonthsParse,o),i!==-1?i:null))}function kG(e,t,n){var r,i,s;if(this._monthsParseExact)return CG.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=mi([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(s="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function lb(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=be(t);else if(t=e.localeData().monthsParse(t),!rs(t))return e}return n=Math.min(e.date(),Sg(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function ub(e){return e!=null?(lb(this,e),ne.updateOffset(this,!0),this):Ip(this,"Month")}function TG(){return Sg(this.year(),this.month())}function xG(e){return this._monthsParseExact?(Ye(this,"_monthsRegex")||cb.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(Ye(this,"_monthsShortRegex")||(this._monthsShortRegex=wG),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function DG(e){return this._monthsParseExact?(Ye(this,"_monthsRegex")||cb.call(this),e?this._monthsStrictRegex:this._monthsRegex):(Ye(this,"_monthsRegex")||(this._monthsRegex=_G),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function cb(){function e(o,a){return a.length-o.length}var t=[],n=[],r=[],i,s;for(i=0;i<12;i++)s=mi([2e3,i]),t.push(this.monthsShort(s,"")),n.push(this.months(s,"")),r.push(this.months(s,"")),r.push(this.monthsShort(s,""));for(t.sort(e),n.sort(e),r.sort(e),i=0;i<12;i++)t[i]=qn(t[i]),n[i]=qn(n[i]);for(i=0;i<24;i++)r[i]=qn(r[i]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}de("Y",0,0,function(){var e=this.year();return e<=9999?ci(e,4):"+"+e});de(0,["YY",2],0,function(){return this.year()%100});de(0,["YYYY",4],0,"year");de(0,["YYYYY",5],0,"year");de(0,["YYYYYY",6,!0],0,"year");kn("year","y");Tn("year",1);se("Y",wg);se("YY",lt,sr);se("YYYY",kS,CS);se("YYYYY",vg,gg);se("YYYYYY",vg,gg);Ze(["YYYYY","YYYYYY"],_n);Ze("YYYY",function(e,t){t[_n]=e.length===2?ne.parseTwoDigitYear(e):be(e)});Ze("YY",function(e,t){t[_n]=ne.parseTwoDigitYear(e)});Ze("Y",function(e,t){t[_n]=parseInt(e,10)});function Ju(e){return mg(e)?366:365}ne.parseTwoDigitYear=function(e){return be(e)+(be(e)>68?1900:2e3)};var hb=Kl("FullYear",!0);function IG(){return mg(this.year())}function AG(e,t,n,r,i,s,o){var a;return e<100&&e>=0?(a=new Date(e+400,t,n,r,i,s,o),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,n,r,i,s,o),a}function Wc(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Np(e,t,n){var r=7+t-n,i=(7+Wc(e,0,r).getUTCDay()-t)%7;return-i+r-1}function fb(e,t,n,r,i){var s=(7+n-r)%7,o=Np(e,r,i),a=1+7*(t-1)+s+o,u,c;return a<=0?(u=e-1,c=Ju(u)+a):a>Ju(e)?(u=e+1,c=a-Ju(e)):(u=e,c=a),{year:u,dayOfYear:c}}function Hc(e,t,n){var r=Np(e.year(),t,n),i=Math.floor((e.dayOfYear()-r-1)/7)+1,s,o;return i<1?(o=e.year()-1,s=i+Yi(o,t,n)):i>Yi(e.year(),t,n)?(s=i-Yi(e.year(),t,n),o=e.year()+1):(o=e.year(),s=i),{week:s,year:o}}function Yi(e,t,n){var r=Np(e,t,n),i=Np(e+1,t,n);return(Ju(e)-r+i)/7}de("w",["ww",2],"wo","week");de("W",["WW",2],"Wo","isoWeek");kn("week","w");kn("isoWeek","W");Tn("week",5);Tn("isoWeek",5);se("w",lt);se("ww",lt,sr);se("W",lt);se("WW",lt,sr);Uh(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=be(e)});function NG(e){return Hc(e,this._week.dow,this._week.doy).week}var OG={dow:0,doy:6};function RG(){return this._week.dow}function bG(){return this._week.doy}function PG(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function MG(e){var t=Hc(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}de("d",0,"do","day");de("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});de("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});de("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});de("e",0,0,"weekday");de("E",0,0,"isoWeekday");kn("day","d");kn("weekday","e");kn("isoWeekday","E");Tn("day",11);Tn("weekday",11);Tn("isoWeekday",11);se("d",lt);se("e",lt);se("E",lt);se("dd",function(e,t){return t.weekdaysMinRegex(e)});se("ddd",function(e,t){return t.weekdaysShortRegex(e)});se("dddd",function(e,t){return t.weekdaysRegex(e)});Uh(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);i!=null?t.d=i:Ae(n).invalidWeekday=e});Uh(["d","e","E"],function(e,t,n,r){t[r]=be(e)});function LG(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function $G(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function TS(e,t){return e.slice(t,7).concat(e.slice(0,t))}var FG="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),pb="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),UG="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),VG=Fh,BG=Fh,zG=Fh;function jG(e,t){var n=Fr(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?TS(n,this._week.dow):e?n[e.day()]:n}function YG(e){return e===!0?TS(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function WG(e){return e===!0?TS(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function HG(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)s=mi([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(s,"").toLocaleLowerCase();return n?t==="dddd"?(i=Nt.call(this._weekdaysParse,o),i!==-1?i:null):t==="ddd"?(i=Nt.call(this._shortWeekdaysParse,o),i!==-1?i:null):(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null):t==="dddd"?(i=Nt.call(this._weekdaysParse,o),i!==-1||(i=Nt.call(this._shortWeekdaysParse,o),i!==-1)?i:(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null)):t==="ddd"?(i=Nt.call(this._shortWeekdaysParse,o),i!==-1||(i=Nt.call(this._weekdaysParse,o),i!==-1)?i:(i=Nt.call(this._minWeekdaysParse,o),i!==-1?i:null)):(i=Nt.call(this._minWeekdaysParse,o),i!==-1||(i=Nt.call(this._weekdaysParse,o),i!==-1)?i:(i=Nt.call(this._shortWeekdaysParse,o),i!==-1?i:null))}function GG(e,t,n){var r,i,s;if(this._weekdaysParseExact)return HG.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=mi([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(s="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function qG(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=LG(e,this.localeData()),this.add(e-t,"d")):t}function KG(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function QG(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=$G(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function XG(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||xS.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(Ye(this,"_weekdaysRegex")||(this._weekdaysRegex=VG),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function JG(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||xS.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(Ye(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=BG),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function ZG(e){return this._weekdaysParseExact?(Ye(this,"_weekdaysRegex")||xS.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(Ye(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=zG),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function xS(){function e(d,p){return p.length-d.length}var t=[],n=[],r=[],i=[],s,o,a,u,c;for(s=0;s<7;s++)o=mi([2e3,1]).day(s),a=qn(this.weekdaysMin(o,"")),u=qn(this.weekdaysShort(o,"")),c=qn(this.weekdays(o,"")),t.push(a),n.push(u),r.push(c),i.push(a),i.push(u),i.push(c);t.sort(e),n.sort(e),r.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function DS(){return this.hours()%12||12}function eq(){return this.hours()||24}de("H",["HH",2],0,"hour");de("h",["hh",2],0,DS);de("k",["kk",2],0,eq);de("hmm",0,0,function(){return""+DS.apply(this)+ci(this.minutes(),2)});de("hmmss",0,0,function(){return""+DS.apply(this)+ci(this.minutes(),2)+ci(this.seconds(),2)});de("Hmm",0,0,function(){return""+this.hours()+ci(this.minutes(),2)});de("Hmmss",0,0,function(){return""+this.hours()+ci(this.minutes(),2)+ci(this.seconds(),2)});function mb(e,t){de(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}mb("a",!0);mb("A",!1);kn("hour","h");Tn("hour",13);function gb(e,t){return t._meridiemParse}se("a",gb);se("A",gb);se("H",lt);se("h",lt);se("k",lt);se("HH",lt,sr);se("hh",lt,sr);se("kk",lt,sr);se("hmm",ib);se("hmmss",sb);se("Hmm",ib);se("Hmmss",sb);Ze(["H","HH"],jt);Ze(["k","kk"],function(e,t,n){var r=be(e);t[jt]=r===24?0:r});Ze(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});Ze(["h","hh"],function(e,t,n){t[jt]=be(e),Ae(n).bigHour=!0});Ze("hmm",function(e,t,n){var r=e.length-2;t[jt]=be(e.substr(0,r)),t[br]=be(e.substr(r)),Ae(n).bigHour=!0});Ze("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[jt]=be(e.substr(0,r)),t[br]=be(e.substr(r,2)),t[Vi]=be(e.substr(i)),Ae(n).bigHour=!0});Ze("Hmm",function(e,t,n){var r=e.length-2;t[jt]=be(e.substr(0,r)),t[br]=be(e.substr(r))});Ze("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[jt]=be(e.substr(0,r)),t[br]=be(e.substr(r,2)),t[Vi]=be(e.substr(i))});function tq(e){return(e+"").toLowerCase().charAt(0)==="p"}var nq=/[ap]\.?m?\.?/i,rq=Kl("Hours",!0);function iq(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var yb={calendar:GH,longDateFormat:XH,invalidDate:ZH,ordinal:tG,dayOfMonthOrdinalParse:nG,relativeTime:iG,months:vG,monthsShort:ob,week:OG,weekdays:FG,weekdaysMin:UG,weekdaysShort:pb,meridiemParse:nq},ht={},yu={},Gc;function sq(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function cx(e){return e&&e.toLowerCase().replace("_","-")}function oq(e){for(var t=0,n,r,i,s;t<e.length;){for(s=cx(e[t]).split("-"),n=s.length,r=cx(e[t+1]),r=r?r.split("-"):null;n>0;){if(i=Eg(s.slice(0,n).join("-")),i)return i;if(r&&r.length>=n&&sq(s,r)>=n-1)break;n--}t++}return Gc}function aq(e){return e.match("^[^/\\\\]*$")!=null}function Eg(e){var t=null,n;if(ht[e]===void 0&&typeof gf!="undefined"&&gf&&gf.exports&&aq(e))try{t=Gc._abbr,n=require,n("./locale/"+e),Hs(t)}catch{ht[e]=null}return ht[e]}function Hs(e,t){var n;return e&&(Ln(t)?n=os(e):n=IS(e,t),n?Gc=n:typeof console!="undefined"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Gc._abbr}function IS(e,t){if(t!==null){var n,r=yb;if(t.abbr=e,ht[e]!=null)JR("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=ht[e]._config;else if(t.parentLocale!=null)if(ht[t.parentLocale]!=null)r=ht[t.parentLocale]._config;else if(n=Eg(t.parentLocale),n!=null)r=n._config;else return yu[t.parentLocale]||(yu[t.parentLocale]=[]),yu[t.parentLocale].push({name:e,config:t}),null;return ht[e]=new _S(d1(r,t)),yu[e]&&yu[e].forEach(function(i){IS(i.name,i.config)}),Hs(e),ht[e]}else return delete ht[e],null}function lq(e,t){if(t!=null){var n,r,i=yb;ht[e]!=null&&ht[e].parentLocale!=null?ht[e].set(d1(ht[e]._config,t)):(r=Eg(e),r!=null&&(i=r._config),t=d1(i,t),r==null&&(t.abbr=e),n=new _S(t),n.parentLocale=ht[e],ht[e]=n),Hs(e)}else ht[e]!=null&&(ht[e].parentLocale!=null?(ht[e]=ht[e].parentLocale,e===Hs()&&Hs(e)):ht[e]!=null&&delete ht[e]);return ht[e]}function os(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Gc;if(!Fr(e)){if(t=Eg(e),t)return t;e=[e]}return oq(e)}function uq(){return f1(ht)}function AS(e){var t,n=e._a;return n&&Ae(e).overflow===-2&&(t=n[Ui]<0||n[Ui]>11?Ui:n[qr]<1||n[qr]>Sg(n[_n],n[Ui])?qr:n[jt]<0||n[jt]>24||n[jt]===24&&(n[br]!==0||n[Vi]!==0||n[Ro]!==0)?jt:n[br]<0||n[br]>59?br:n[Vi]<0||n[Vi]>59?Vi:n[Ro]<0||n[Ro]>999?Ro:-1,Ae(e)._overflowDayOfYear&&(t<_n||t>qr)&&(t=qr),Ae(e)._overflowWeeks&&t===-1&&(t=mG),Ae(e)._overflowWeekday&&t===-1&&(t=gG),Ae(e).overflow=t),e}var cq=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,hq=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,dq=/Z|[+-]\d\d(?::?\d\d)?/,Ud=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],uv=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],fq=/^\/?Date\((-?\d+)/i,pq=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,mq={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function vb(e){var t,n,r=e._i,i=cq.exec(r)||hq.exec(r),s,o,a,u,c=Ud.length,d=uv.length;if(i){for(Ae(e).iso=!0,t=0,n=c;t<n;t++)if(Ud[t][1].exec(i[1])){o=Ud[t][0],s=Ud[t][2]!==!1;break}if(o==null){e._isValid=!1;return}if(i[3]){for(t=0,n=d;t<n;t++)if(uv[t][1].exec(i[3])){a=(i[2]||" ")+uv[t][0];break}if(a==null){e._isValid=!1;return}}if(!s&&a!=null){e._isValid=!1;return}if(i[4])if(dq.exec(i[4]))u="Z";else{e._isValid=!1;return}e._f=o+(a||"")+(u||""),OS(e)}else e._isValid=!1}function gq(e,t,n,r,i,s){var o=[yq(e),ob.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return s&&o.push(parseInt(s,10)),o}function yq(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function vq(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function wq(e,t,n){if(e){var r=pb.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(r!==i)return Ae(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function _q(e,t,n){if(e)return mq[e];if(t)return 0;var r=parseInt(n,10),i=r%100,s=(r-i)/100;return s*60+i}function wb(e){var t=pq.exec(vq(e._i)),n;if(t){if(n=gq(t[4],t[3],t[2],t[5],t[6],t[7]),!wq(t[1],n,e))return;e._a=n,e._tzm=_q(t[8],t[9],t[10]),e._d=Wc.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),Ae(e).rfc2822=!0}else e._isValid=!1}function Sq(e){var t=fq.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(vb(e),e._isValid===!1)delete e._isValid;else return;if(wb(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:ne.createFromInputFallback(e)}ne.createFromInputFallback=Sr("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Da(e,t,n){return e!=null?e:t!=null?t:n}function Eq(e){var t=new Date(ne.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function NS(e){var t,n,r=[],i,s,o;if(!e._d){for(i=Eq(e),e._w&&e._a[qr]==null&&e._a[Ui]==null&&Cq(e),e._dayOfYear!=null&&(o=Da(e._a[_n],i[_n]),(e._dayOfYear>Ju(o)||e._dayOfYear===0)&&(Ae(e)._overflowDayOfYear=!0),n=Wc(o,0,e._dayOfYear),e._a[Ui]=n.getUTCMonth(),e._a[qr]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=i[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[jt]===24&&e._a[br]===0&&e._a[Vi]===0&&e._a[Ro]===0&&(e._nextDay=!0,e._a[jt]=0),e._d=(e._useUTC?Wc:AG).apply(null,r),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[jt]=24),e._w&&typeof e._w.d!="undefined"&&e._w.d!==s&&(Ae(e).weekdayMismatch=!0)}}function Cq(e){var t,n,r,i,s,o,a,u,c;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(s=1,o=4,n=Da(t.GG,e._a[_n],Hc(at(),1,4).year),r=Da(t.W,1),i=Da(t.E,1),(i<1||i>7)&&(u=!0)):(s=e._locale._week.dow,o=e._locale._week.doy,c=Hc(at(),s,o),n=Da(t.gg,e._a[_n],c.year),r=Da(t.w,c.week),t.d!=null?(i=t.d,(i<0||i>6)&&(u=!0)):t.e!=null?(i=t.e+s,(t.e<0||t.e>6)&&(u=!0)):i=s),r<1||r>Yi(n,s,o)?Ae(e)._overflowWeeks=!0:u!=null?Ae(e)._overflowWeekday=!0:(a=fb(n,r,i,s,o),e._a[_n]=a.year,e._dayOfYear=a.dayOfYear)}ne.ISO_8601=function(){};ne.RFC_2822=function(){};function OS(e){if(e._f===ne.ISO_8601){vb(e);return}if(e._f===ne.RFC_2822){wb(e);return}e._a=[],Ae(e).empty=!0;var t=""+e._i,n,r,i,s,o,a=t.length,u=0,c,d;for(i=ZR(e._f,e._locale).match(SS)||[],d=i.length,n=0;n<d;n++)s=i[n],r=(t.match(dG(s,e))||[])[0],r&&(o=t.substr(0,t.indexOf(r)),o.length>0&&Ae(e).unusedInput.push(o),t=t.slice(t.indexOf(r)+r.length),u+=r.length),ol[s]?(r?Ae(e).empty=!1:Ae(e).unusedTokens.push(s),pG(s,r,e)):e._strict&&!r&&Ae(e).unusedTokens.push(s);Ae(e).charsLeftOver=a-u,t.length>0&&Ae(e).unusedInput.push(t),e._a[jt]<=12&&Ae(e).bigHour===!0&&e._a[jt]>0&&(Ae(e).bigHour=void 0),Ae(e).parsedDateParts=e._a.slice(0),Ae(e).meridiem=e._meridiem,e._a[jt]=kq(e._locale,e._a[jt],e._meridiem),c=Ae(e).era,c!==null&&(e._a[_n]=e._locale.erasConvertYear(c,e._a[_n])),NS(e),AS(e)}function kq(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function Tq(e){var t,n,r,i,s,o,a=!1,u=e._f.length;if(u===0){Ae(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<u;i++)s=0,o=!1,t=wS({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],OS(t),vS(t)&&(o=!0),s+=Ae(t).charsLeftOver,s+=Ae(t).unusedTokens.length*10,Ae(t).score=s,a?s<r&&(r=s,n=t):(r==null||s<r||o)&&(r=s,n=t,o&&(a=!0));Is(e,n||t)}function xq(e){if(!e._d){var t=ES(e._i),n=t.day===void 0?t.date:t.day;e._a=QR([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),NS(e)}}function Dq(e){var t=new $h(AS(_b(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function _b(e){var t=e._i,n=e._f;return e._locale=e._locale||os(e._l),t===null||n===void 0&&t===""?pg({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),Ur(t)?new $h(AS(t)):(Lh(t)?e._d=t:Fr(n)?Tq(e):n?OS(e):Iq(e),vS(e)||(e._d=null),e))}function Iq(e){var t=e._i;Ln(t)?e._d=new Date(ne.now()):Lh(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Sq(e):Fr(t)?(e._a=QR(t.slice(0),function(n){return parseInt(n,10)}),NS(e)):Uo(t)?xq(e):rs(t)?e._d=new Date(t):ne.createFromInputFallback(e)}function Sb(e,t,n,r,i){var s={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(Uo(e)&&yS(e)||Fr(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=i,s._l=n,s._i=e,s._f=t,s._strict=r,Dq(s)}function at(e,t,n,r){return Sb(e,t,n,r,!1)}var Aq=Sr("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=at.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:pg()}),Nq=Sr("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=at.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:pg()});function Eb(e,t){var n,r;if(t.length===1&&Fr(t[0])&&(t=t[0]),!t.length)return at();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function Oq(){var e=[].slice.call(arguments,0);return Eb("isBefore",e)}function Rq(){var e=[].slice.call(arguments,0);return Eb("isAfter",e)}var bq=function(){return Date.now?Date.now():+new Date},vu=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Pq(e){var t,n=!1,r,i=vu.length;for(t in e)if(Ye(e,t)&&!(Nt.call(vu,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<i;++r)if(e[vu[r]]){if(n)return!1;parseFloat(e[vu[r]])!==be(e[vu[r]])&&(n=!0)}return!0}function Mq(){return this._isValid}function Lq(){return zr(NaN)}function Cg(e){var t=ES(e),n=t.year||0,r=t.quarter||0,i=t.month||0,s=t.week||t.isoWeek||0,o=t.day||0,a=t.hour||0,u=t.minute||0,c=t.second||0,d=t.millisecond||0;this._isValid=Pq(t),this._milliseconds=+d+c*1e3+u*6e4+a*1e3*60*60,this._days=+o+s*7,this._months=+i+r*3+n*12,this._data={},this._locale=os(),this._bubble()}function pf(e){return e instanceof Cg}function m1(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function $q(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),s=0,o;for(o=0;o<r;o++)(n&&e[o]!==t[o]||!n&&be(e[o])!==be(t[o]))&&s++;return s+i}function Cb(e,t){de(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+ci(~~(n/60),2)+t+ci(~~n%60,2)})}Cb("Z",":");Cb("ZZ","");se("Z",_g);se("ZZ",_g);Ze(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=RS(_g,e)});var Fq=/([\+\-]|\d\d)/gi;function RS(e,t){var n=(t||"").match(e),r,i,s;return n===null?null:(r=n[n.length-1]||[],i=(r+"").match(Fq)||["-",0,0],s=+(i[1]*60)+be(i[2]),s===0?0:i[0]==="+"?s:-s)}function bS(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(Ur(e)||Lh(e)?e.valueOf():at(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),ne.updateOffset(n,!1),n):at(e).local()}function g1(e){return-Math.round(e._d.getTimezoneOffset())}ne.updateOffset=function(){};function Uq(e,t,n){var r=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=RS(_g,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(i=g1(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?xb(this,zr(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,ne.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:g1(this)}function Vq(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Bq(e){return this.utcOffset(0,e)}function zq(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(g1(this),"m")),this}function jq(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=RS(cG,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Yq(e){return this.isValid()?(e=e?at(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Wq(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Hq(){if(!Ln(this._isDSTShifted))return this._isDSTShifted;var e={},t;return wS(e,this),e=_b(e),e._a?(t=e._isUTC?mi(e._a):at(e._a),this._isDSTShifted=this.isValid()&&$q(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Gq(){return this.isValid()?!this._isUTC:!1}function qq(){return this.isValid()?this._isUTC:!1}function kb(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Kq=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Qq=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function zr(e,t){var n=e,r=null,i,s,o;return pf(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:rs(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=Kq.exec(e))?(i=r[1]==="-"?-1:1,n={y:0,d:be(r[qr])*i,h:be(r[jt])*i,m:be(r[br])*i,s:be(r[Vi])*i,ms:be(m1(r[Ro]*1e3))*i}):(r=Qq.exec(e))?(i=r[1]==="-"?-1:1,n={y:_o(r[2],i),M:_o(r[3],i),w:_o(r[4],i),d:_o(r[5],i),h:_o(r[6],i),m:_o(r[7],i),s:_o(r[8],i)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(o=Xq(at(n.from),at(n.to)),n={},n.ms=o.milliseconds,n.M=o.months),s=new Cg(n),pf(e)&&Ye(e,"_locale")&&(s._locale=e._locale),pf(e)&&Ye(e,"_isValid")&&(s._isValid=e._isValid),s}zr.fn=Cg.prototype;zr.invalid=Lq;function _o(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function hx(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Xq(e,t){var n;return e.isValid()&&t.isValid()?(t=bS(t,e),e.isBefore(t)?n=hx(e,t):(n=hx(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Tb(e,t){return function(n,r){var i,s;return r!==null&&!isNaN(+r)&&(JR(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=r,r=s),i=zr(n,r),xb(this,i,e),this}}function xb(e,t,n,r){var i=t._milliseconds,s=m1(t._days),o=m1(t._months);!e.isValid()||(r=r==null?!0:r,o&&lb(e,Ip(e,"Month")+o*n),s&&tb(e,"Date",Ip(e,"Date")+s*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&ne.updateOffset(e,s||o))}var Jq=Tb(1,"add"),Zq=Tb(-1,"subtract");function Db(e){return typeof e=="string"||e instanceof String}function eK(e){return Ur(e)||Lh(e)||Db(e)||rs(e)||nK(e)||tK(e)||e===null||e===void 0}function tK(e){var t=Uo(e)&&!yS(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,s,o=r.length;for(i=0;i<o;i+=1)s=r[i],n=n||Ye(e,s);return t&&n}function nK(e){var t=Fr(e),n=!1;return t&&(n=e.filter(function(r){return!rs(r)&&Db(e)}).length===0),t&&n}function rK(e){var t=Uo(e)&&!yS(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,s;for(i=0;i<r.length;i+=1)s=r[i],n=n||Ye(e,s);return t&&n}function iK(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function sK(e,t){arguments.length===1&&(arguments[0]?eK(arguments[0])?(e=arguments[0],t=void 0):rK(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||at(),r=bS(n,this).startOf("day"),i=ne.calendarFormat(this,r)||"sameElse",s=t&&(gi(t[i])?t[i].call(this,n):t[i]);return this.format(s||this.localeData().calendar(i,this,at(n)))}function oK(){return new $h(this)}function aK(e,t){var n=Ur(e)?e:at(e);return this.isValid()&&n.isValid()?(t=Er(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function lK(e,t){var n=Ur(e)?e:at(e);return this.isValid()&&n.isValid()?(t=Er(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function uK(e,t,n,r){var i=Ur(e)?e:at(e),s=Ur(t)?t:at(t);return this.isValid()&&i.isValid()&&s.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(i,n):!this.isBefore(i,n))&&(r[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function cK(e,t){var n=Ur(e)?e:at(e),r;return this.isValid()&&n.isValid()?(t=Er(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function hK(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function dK(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function fK(e,t,n){var r,i,s;if(!this.isValid())return NaN;if(r=bS(e,this),!r.isValid())return NaN;switch(i=(r.utcOffset()-this.utcOffset())*6e4,t=Er(t),t){case"year":s=mf(this,r)/12;break;case"month":s=mf(this,r);break;case"quarter":s=mf(this,r)/3;break;case"second":s=(this-r)/1e3;break;case"minute":s=(this-r)/6e4;break;case"hour":s=(this-r)/36e5;break;case"day":s=(this-r-i)/864e5;break;case"week":s=(this-r-i)/6048e5;break;default:s=this-r}return n?s:ur(s)}function mf(e,t){if(e.date()<t.date())return-mf(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),i,s;return t-r<0?(i=e.clone().add(n-1,"months"),s=(t-r)/(r-i)):(i=e.clone().add(n+1,"months"),s=(t-r)/(i-r)),-(n+s)||0}ne.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";ne.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function pK(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function mK(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?ff(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):gi(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",ff(n,"Z")):ff(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function gK(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,i,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",s=t+'[")]',this.format(n+r+i+s)}function yK(e){e||(e=this.isUtc()?ne.defaultFormatUtc:ne.defaultFormat);var t=ff(this,e);return this.localeData().postformat(t)}function vK(e,t){return this.isValid()&&(Ur(e)&&e.isValid()||at(e).isValid())?zr({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function wK(e){return this.from(at(),e)}function _K(e,t){return this.isValid()&&(Ur(e)&&e.isValid()||at(e).isValid())?zr({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function SK(e){return this.to(at(),e)}function Ib(e){var t;return e===void 0?this._locale._abbr:(t=os(e),t!=null&&(this._locale=t),this)}var Ab=Sr("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Nb(){return this._locale}var Op=1e3,al=60*Op,Rp=60*al,Ob=(365*400+97)*24*Rp;function ll(e,t){return(e%t+t)%t}function Rb(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-Ob:new Date(e,t,n).valueOf()}function bb(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-Ob:Date.UTC(e,t,n)}function EK(e){var t,n;if(e=Er(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?bb:Rb,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=ll(t+(this._isUTC?0:this.utcOffset()*al),Rp);break;case"minute":t=this._d.valueOf(),t-=ll(t,al);break;case"second":t=this._d.valueOf(),t-=ll(t,Op);break}return this._d.setTime(t),ne.updateOffset(this,!0),this}function CK(e){var t,n;if(e=Er(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?bb:Rb,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Rp-ll(t+(this._isUTC?0:this.utcOffset()*al),Rp)-1;break;case"minute":t=this._d.valueOf(),t+=al-ll(t,al)-1;break;case"second":t=this._d.valueOf(),t+=Op-ll(t,Op)-1;break}return this._d.setTime(t),ne.updateOffset(this,!0),this}function kK(){return this._d.valueOf()-(this._offset||0)*6e4}function TK(){return Math.floor(this.valueOf()/1e3)}function xK(){return new Date(this.valueOf())}function DK(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function IK(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function AK(){return this.isValid()?this.toISOString():null}function NK(){return vS(this)}function OK(){return Is({},Ae(this))}function RK(){return Ae(this).overflow}function bK(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}de("N",0,0,"eraAbbr");de("NN",0,0,"eraAbbr");de("NNN",0,0,"eraAbbr");de("NNNN",0,0,"eraName");de("NNNNN",0,0,"eraNarrow");de("y",["y",1],"yo","eraYear");de("y",["yy",2],0,"eraYear");de("y",["yyy",3],0,"eraYear");de("y",["yyyy",4],0,"eraYear");se("N",PS);se("NN",PS);se("NNN",PS);se("NNNN",YK);se("NNNNN",WK);Ze(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?Ae(n).era=i:Ae(n).invalidEra=e});se("y",Ql);se("yy",Ql);se("yyy",Ql);se("yyyy",Ql);se("yo",HK);Ze(["y","yy","yyy","yyyy"],_n);Ze(["yo"],function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[_n]=n._locale.eraYearOrdinalParse(e,i):t[_n]=parseInt(e,10)});function PK(e,t){var n,r,i,s=this._eras||os("en")._eras;for(n=0,r=s.length;n<r;++n){switch(typeof s[n].since){case"string":i=ne(s[n].since).startOf("day"),s[n].since=i.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":i=ne(s[n].until).startOf("day").valueOf(),s[n].until=i.valueOf();break}}return s}function MK(e,t,n){var r,i,s=this.eras(),o,a,u;for(e=e.toUpperCase(),r=0,i=s.length;r<i;++r)if(o=s[r].name.toUpperCase(),a=s[r].abbr.toUpperCase(),u=s[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(a===e)return s[r];break;case"NNNN":if(o===e)return s[r];break;case"NNNNN":if(u===e)return s[r];break}else if([o,a,u].indexOf(e)>=0)return s[r]}function LK(e,t){var n=e.since<=e.until?1:-1;return t===void 0?ne(e.since).year():ne(e.since).year()+(t-e.offset)*n}function $K(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function FK(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function UK(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function VK(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-ne(i[e].since).year())*n+i[e].offset;return this.year()}function BK(e){return Ye(this,"_erasNameRegex")||MS.call(this),e?this._erasNameRegex:this._erasRegex}function zK(e){return Ye(this,"_erasAbbrRegex")||MS.call(this),e?this._erasAbbrRegex:this._erasRegex}function jK(e){return Ye(this,"_erasNarrowRegex")||MS.call(this),e?this._erasNarrowRegex:this._erasRegex}function PS(e,t){return t.erasAbbrRegex(e)}function YK(e,t){return t.erasNameRegex(e)}function WK(e,t){return t.erasNarrowRegex(e)}function HK(e,t){return t._eraYearOrdinalRegex||Ql}function MS(){var e=[],t=[],n=[],r=[],i,s,o=this.eras();for(i=0,s=o.length;i<s;++i)t.push(qn(o[i].name)),e.push(qn(o[i].abbr)),n.push(qn(o[i].narrow)),r.push(qn(o[i].name)),r.push(qn(o[i].abbr)),r.push(qn(o[i].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}de(0,["gg",2],0,function(){return this.weekYear()%100});de(0,["GG",2],0,function(){return this.isoWeekYear()%100});function kg(e,t){de(0,[e,e.length],0,t)}kg("gggg","weekYear");kg("ggggg","weekYear");kg("GGGG","isoWeekYear");kg("GGGGG","isoWeekYear");kn("weekYear","gg");kn("isoWeekYear","GG");Tn("weekYear",1);Tn("isoWeekYear",1);se("G",wg);se("g",wg);se("GG",lt,sr);se("gg",lt,sr);se("GGGG",kS,CS);se("gggg",kS,CS);se("GGGGG",vg,gg);se("ggggg",vg,gg);Uh(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=be(e)});Uh(["gg","GG"],function(e,t,n,r){t[r]=ne.parseTwoDigitYear(e)});function GK(e){return Pb.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function qK(e){return Pb.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function KK(){return Yi(this.year(),1,4)}function QK(){return Yi(this.isoWeekYear(),1,4)}function XK(){var e=this.localeData()._week;return Yi(this.year(),e.dow,e.doy)}function JK(){var e=this.localeData()._week;return Yi(this.weekYear(),e.dow,e.doy)}function Pb(e,t,n,r,i){var s;return e==null?Hc(this,r,i).year:(s=Yi(e,r,i),t>s&&(t=s),ZK.call(this,e,t,n,r,i))}function ZK(e,t,n,r,i){var s=fb(e,t,n,r,i),o=Wc(s.year,0,s.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}de("Q",0,"Qo","quarter");kn("quarter","Q");Tn("quarter",7);se("Q",nb);Ze("Q",function(e,t){t[Ui]=(be(e)-1)*3});function eQ(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}de("D",["DD",2],"Do","date");kn("date","D");Tn("date",9);se("D",lt);se("DD",lt,sr);se("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});Ze(["D","DD"],qr);Ze("Do",function(e,t){t[qr]=be(e.match(lt)[0])});var Mb=Kl("Date",!0);de("DDD",["DDDD",3],"DDDo","dayOfYear");kn("dayOfYear","DDD");Tn("dayOfYear",4);se("DDD",yg);se("DDDD",rb);Ze(["DDD","DDDD"],function(e,t,n){n._dayOfYear=be(e)});function tQ(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}de("m",["mm",2],0,"minute");kn("minute","m");Tn("minute",14);se("m",lt);se("mm",lt,sr);Ze(["m","mm"],br);var nQ=Kl("Minutes",!1);de("s",["ss",2],0,"second");kn("second","s");Tn("second",15);se("s",lt);se("ss",lt,sr);Ze(["s","ss"],Vi);var rQ=Kl("Seconds",!1);de("S",0,0,function(){return~~(this.millisecond()/100)});de(0,["SS",2],0,function(){return~~(this.millisecond()/10)});de(0,["SSS",3],0,"millisecond");de(0,["SSSS",4],0,function(){return this.millisecond()*10});de(0,["SSSSS",5],0,function(){return this.millisecond()*100});de(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});de(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});de(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});de(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});kn("millisecond","ms");Tn("millisecond",16);se("S",yg,nb);se("SS",yg,sr);se("SSS",yg,rb);var As,Lb;for(As="SSSS";As.length<=9;As+="S")se(As,Ql);function iQ(e,t){t[Ro]=be(("0."+e)*1e3)}for(As="S";As.length<=9;As+="S")Ze(As,iQ);Lb=Kl("Milliseconds",!1);de("z",0,0,"zoneAbbr");de("zz",0,0,"zoneName");function sQ(){return this._isUTC?"UTC":""}function oQ(){return this._isUTC?"Coordinated Universal Time":""}var K=$h.prototype;K.add=Jq;K.calendar=sK;K.clone=oK;K.diff=fK;K.endOf=CK;K.format=yK;K.from=vK;K.fromNow=wK;K.to=_K;K.toNow=SK;K.get=lG;K.invalidAt=RK;K.isAfter=aK;K.isBefore=lK;K.isBetween=uK;K.isSame=cK;K.isSameOrAfter=hK;K.isSameOrBefore=dK;K.isValid=NK;K.lang=Ab;K.locale=Ib;K.localeData=Nb;K.max=Nq;K.min=Aq;K.parsingFlags=OK;K.set=uG;K.startOf=EK;K.subtract=Zq;K.toArray=DK;K.toObject=IK;K.toDate=xK;K.toISOString=mK;K.inspect=gK;typeof Symbol!="undefined"&&Symbol.for!=null&&(K[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});K.toJSON=AK;K.toString=pK;K.unix=TK;K.valueOf=kK;K.creationData=bK;K.eraName=$K;K.eraNarrow=FK;K.eraAbbr=UK;K.eraYear=VK;K.year=hb;K.isLeapYear=IG;K.weekYear=GK;K.isoWeekYear=qK;K.quarter=K.quarters=eQ;K.month=ub;K.daysInMonth=TG;K.week=K.weeks=PG;K.isoWeek=K.isoWeeks=MG;K.weeksInYear=XK;K.weeksInWeekYear=JK;K.isoWeeksInYear=KK;K.isoWeeksInISOWeekYear=QK;K.date=Mb;K.day=K.days=qG;K.weekday=KG;K.isoWeekday=QG;K.dayOfYear=tQ;K.hour=K.hours=rq;K.minute=K.minutes=nQ;K.second=K.seconds=rQ;K.millisecond=K.milliseconds=Lb;K.utcOffset=Uq;K.utc=Bq;K.local=zq;K.parseZone=jq;K.hasAlignedHourOffset=Yq;K.isDST=Wq;K.isLocal=Gq;K.isUtcOffset=qq;K.isUtc=kb;K.isUTC=kb;K.zoneAbbr=sQ;K.zoneName=oQ;K.dates=Sr("dates accessor is deprecated. Use date instead.",Mb);K.months=Sr("months accessor is deprecated. Use month instead",ub);K.years=Sr("years accessor is deprecated. Use year instead",hb);K.zone=Sr("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Vq);K.isDSTShifted=Sr("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Hq);function aQ(e){return at(e*1e3)}function lQ(){return at.apply(null,arguments).parseZone()}function $b(e){return e}var We=_S.prototype;We.calendar=qH;We.longDateFormat=JH;We.invalidDate=eG;We.ordinal=rG;We.preparse=$b;We.postformat=$b;We.relativeTime=sG;We.pastFuture=oG;We.set=HH;We.eras=PK;We.erasParse=MK;We.erasConvertYear=LK;We.erasAbbrRegex=zK;We.erasNameRegex=BK;We.erasNarrowRegex=jK;We.months=SG;We.monthsShort=EG;We.monthsParse=kG;We.monthsRegex=DG;We.monthsShortRegex=xG;We.week=NG;We.firstDayOfYear=bG;We.firstDayOfWeek=RG;We.weekdays=jG;We.weekdaysMin=WG;We.weekdaysShort=YG;We.weekdaysParse=GG;We.weekdaysRegex=XG;We.weekdaysShortRegex=JG;We.weekdaysMinRegex=ZG;We.isPM=tq;We.meridiem=iq;function bp(e,t,n,r){var i=os(),s=mi().set(r,t);return i[n](s,e)}function Fb(e,t,n){if(rs(e)&&(t=e,e=void 0),e=e||"",t!=null)return bp(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=bp(e,r,n,"month");return i}function LS(e,t,n,r){typeof e=="boolean"?(rs(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,rs(t)&&(n=t,t=void 0),t=t||"");var i=os(),s=e?i._week.dow:0,o,a=[];if(n!=null)return bp(t,(n+s)%7,r,"day");for(o=0;o<7;o++)a[o]=bp(t,(o+s)%7,r,"day");return a}function uQ(e,t){return Fb(e,t,"months")}function cQ(e,t){return Fb(e,t,"monthsShort")}function hQ(e,t,n){return LS(e,t,n,"weekdays")}function dQ(e,t,n){return LS(e,t,n,"weekdaysShort")}function fQ(e,t,n){return LS(e,t,n,"weekdaysMin")}Hs("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=be(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});ne.lang=Sr("moment.lang is deprecated. Use moment.locale instead.",Hs);ne.langData=Sr("moment.langData is deprecated. Use moment.localeData instead.",os);var Ti=Math.abs;function pQ(){var e=this._data;return this._milliseconds=Ti(this._milliseconds),this._days=Ti(this._days),this._months=Ti(this._months),e.milliseconds=Ti(e.milliseconds),e.seconds=Ti(e.seconds),e.minutes=Ti(e.minutes),e.hours=Ti(e.hours),e.months=Ti(e.months),e.years=Ti(e.years),this}function Ub(e,t,n,r){var i=zr(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function mQ(e,t){return Ub(this,e,t,1)}function gQ(e,t){return Ub(this,e,t,-1)}function dx(e){return e<0?Math.floor(e):Math.ceil(e)}function yQ(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,s,o,a,u;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=dx(y1(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,i=ur(e/1e3),r.seconds=i%60,s=ur(i/60),r.minutes=s%60,o=ur(s/60),r.hours=o%24,t+=ur(o/24),u=ur(Vb(t)),n+=u,t-=dx(y1(u)),a=ur(n/12),n%=12,r.days=t,r.months=n,r.years=a,this}function Vb(e){return e*4800/146097}function y1(e){return e*146097/4800}function vQ(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=Er(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+Vb(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(y1(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function wQ(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+be(this._months/12)*31536e6:NaN}function as(e){return function(){return this.as(e)}}var _Q=as("ms"),SQ=as("s"),EQ=as("m"),CQ=as("h"),kQ=as("d"),TQ=as("w"),xQ=as("M"),DQ=as("Q"),IQ=as("y");function AQ(){return zr(this)}function NQ(e){return e=Er(e),this.isValid()?this[e+"s"]():NaN}function da(e){return function(){return this.isValid()?this._data[e]:NaN}}var OQ=da("milliseconds"),RQ=da("seconds"),bQ=da("minutes"),PQ=da("hours"),MQ=da("days"),LQ=da("months"),$Q=da("years");function FQ(){return ur(this.days()/7)}var Di=Math.round,ja={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function UQ(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function VQ(e,t,n,r){var i=zr(e).abs(),s=Di(i.as("s")),o=Di(i.as("m")),a=Di(i.as("h")),u=Di(i.as("d")),c=Di(i.as("M")),d=Di(i.as("w")),p=Di(i.as("y")),m=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||o<=1&&["m"]||o<n.m&&["mm",o]||a<=1&&["h"]||a<n.h&&["hh",a]||u<=1&&["d"]||u<n.d&&["dd",u];return n.w!=null&&(m=m||d<=1&&["w"]||d<n.w&&["ww",d]),m=m||c<=1&&["M"]||c<n.M&&["MM",c]||p<=1&&["y"]||["yy",p],m[2]=t,m[3]=+e>0,m[4]=r,UQ.apply(null,m)}function BQ(e){return e===void 0?Di:typeof e=="function"?(Di=e,!0):!1}function zQ(e,t){return ja[e]===void 0?!1:t===void 0?ja[e]:(ja[e]=t,e==="s"&&(ja.ss=t-1),!0)}function jQ(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=ja,i,s;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},ja,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),i=this.localeData(),s=VQ(this,!n,r,i),n&&(s=i.pastFuture(+this,s)),i.postformat(s)}var cv=Math.abs;function Ea(e){return(e>0)-(e<0)||+e}function Tg(){if(!this.isValid())return this.localeData().invalidDate();var e=cv(this._milliseconds)/1e3,t=cv(this._days),n=cv(this._months),r,i,s,o,a=this.asSeconds(),u,c,d,p;return a?(r=ur(e/60),i=ur(r/60),e%=60,r%=60,s=ur(n/12),n%=12,o=e?e.toFixed(3).replace(/\.?0+$/,""):"",u=a<0?"-":"",c=Ea(this._months)!==Ea(a)?"-":"",d=Ea(this._days)!==Ea(a)?"-":"",p=Ea(this._milliseconds)!==Ea(a)?"-":"",u+"P"+(s?c+s+"Y":"")+(n?c+n+"M":"")+(t?d+t+"D":"")+(i||r||e?"T":"")+(i?p+i+"H":"")+(r?p+r+"M":"")+(e?p+o+"S":"")):"P0D"}var Ue=Cg.prototype;Ue.isValid=Mq;Ue.abs=pQ;Ue.add=mQ;Ue.subtract=gQ;Ue.as=vQ;Ue.asMilliseconds=_Q;Ue.asSeconds=SQ;Ue.asMinutes=EQ;Ue.asHours=CQ;Ue.asDays=kQ;Ue.asWeeks=TQ;Ue.asMonths=xQ;Ue.asQuarters=DQ;Ue.asYears=IQ;Ue.valueOf=wQ;Ue._bubble=yQ;Ue.clone=AQ;Ue.get=NQ;Ue.milliseconds=OQ;Ue.seconds=RQ;Ue.minutes=bQ;Ue.hours=PQ;Ue.days=MQ;Ue.weeks=FQ;Ue.months=LQ;Ue.years=$Q;Ue.humanize=jQ;Ue.toISOString=Tg;Ue.toString=Tg;Ue.toJSON=Tg;Ue.locale=Ib;Ue.localeData=Nb;Ue.toIsoString=Sr("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Tg);Ue.lang=Ab;de("X",0,0,"unix");de("x",0,0,"valueOf");se("x",wg);se("X",hG);Ze("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});Ze("x",function(e,t,n){n._d=new Date(be(e))});//! moment.js
ne.version="2.29.4";YH(at);ne.fn=K;ne.min=Oq;ne.max=Rq;ne.now=bq;ne.utc=mi;ne.unix=aQ;ne.months=uQ;ne.isDate=Lh;ne.locale=Hs;ne.invalid=pg;ne.duration=zr;ne.isMoment=Ur;ne.weekdays=hQ;ne.parseZone=lQ;ne.localeData=os;ne.isDuration=pf;ne.monthsShort=cQ;ne.weekdaysMin=fQ;ne.defineLocale=IS;ne.updateLocale=lq;ne.locales=uq;ne.weekdaysShort=dQ;ne.normalizeUnits=Er;ne.relativeTimeRounding=BQ;ne.relativeTimeThreshold=zQ;ne.calendarFormat=iK;ne.prototype=K;ne.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};var $S={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Cx,function(){var n;function r(){return n.apply(null,arguments)}function i(l){n=l}function s(l){return l instanceof Array||Object.prototype.toString.call(l)==="[object Array]"}function o(l){return l!=null&&Object.prototype.toString.call(l)==="[object Object]"}function a(l,h){return Object.prototype.hasOwnProperty.call(l,h)}function u(l){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(l).length===0;var h;for(h in l)if(a(l,h))return!1;return!0}function c(l){return l===void 0}function d(l){return typeof l=="number"||Object.prototype.toString.call(l)==="[object Number]"}function p(l){return l instanceof Date||Object.prototype.toString.call(l)==="[object Date]"}function m(l,h){var f=[],g,E=l.length;for(g=0;g<E;++g)f.push(h(l[g],g));return f}function v(l,h){for(var f in h)a(h,f)&&(l[f]=h[f]);return a(h,"toString")&&(l.toString=h.toString),a(h,"valueOf")&&(l.valueOf=h.valueOf),l}function w(l,h,f,g){return uE(l,h,f,g,!0).utc()}function _(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function k(l){return l._pf==null&&(l._pf=_()),l._pf}var S;Array.prototype.some?S=Array.prototype.some:S=function(l){var h=Object(this),f=h.length>>>0,g;for(g=0;g<f;g++)if(g in h&&l.call(this,h[g],g,h))return!0;return!1};function y(l){if(l._isValid==null){var h=k(l),f=S.call(h.parsedDateParts,function(E){return E!=null}),g=!isNaN(l._d.getTime())&&h.overflow<0&&!h.empty&&!h.invalidEra&&!h.invalidMonth&&!h.invalidWeekday&&!h.weekdayMismatch&&!h.nullInput&&!h.invalidFormat&&!h.userInvalidated&&(!h.meridiem||h.meridiem&&f);if(l._strict&&(g=g&&h.charsLeftOver===0&&h.unusedTokens.length===0&&h.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(l))l._isValid=g;else return g}return l._isValid}function C(l){var h=w(NaN);return l!=null?v(k(h),l):k(h).userInvalidated=!0,h}var x=r.momentProperties=[],A=!1;function R(l,h){var f,g,E,I=x.length;if(c(h._isAMomentObject)||(l._isAMomentObject=h._isAMomentObject),c(h._i)||(l._i=h._i),c(h._f)||(l._f=h._f),c(h._l)||(l._l=h._l),c(h._strict)||(l._strict=h._strict),c(h._tzm)||(l._tzm=h._tzm),c(h._isUTC)||(l._isUTC=h._isUTC),c(h._offset)||(l._offset=h._offset),c(h._pf)||(l._pf=k(h)),c(h._locale)||(l._locale=h._locale),I>0)for(f=0;f<I;f++)g=x[f],E=h[g],c(E)||(l[g]=E);return l}function N(l){R(this,l),this._d=new Date(l._d!=null?l._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),A===!1&&(A=!0,r.updateOffset(this),A=!1)}function O(l){return l instanceof N||l!=null&&l._isAMomentObject!=null}function Z(l){r.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+l)}function L(l,h){var f=!0;return v(function(){if(r.deprecationHandler!=null&&r.deprecationHandler(null,l),f){var g=[],E,I,P,he=arguments.length;for(I=0;I<he;I++){if(E="",typeof arguments[I]=="object"){E+=`
[`+I+"] ";for(P in arguments[0])a(arguments[0],P)&&(E+=P+": "+arguments[0][P]+", ");E=E.slice(0,-2)}else E=arguments[I];g.push(E)}Z(l+`
Arguments: `+Array.prototype.slice.call(g).join("")+`
`+new Error().stack),f=!1}return h.apply(this,arguments)},h)}var j={};function J(l,h){r.deprecationHandler!=null&&r.deprecationHandler(l,h),j[l]||(Z(h),j[l]=!0)}r.suppressDeprecationWarnings=!1,r.deprecationHandler=null;function X(l){return typeof Function!="undefined"&&l instanceof Function||Object.prototype.toString.call(l)==="[object Function]"}function ue(l){var h,f;for(f in l)a(l,f)&&(h=l[f],X(h)?this[f]=h:this["_"+f]=h);this._config=l,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function oe(l,h){var f=v({},l),g;for(g in h)a(h,g)&&(o(l[g])&&o(h[g])?(f[g]={},v(f[g],l[g]),v(f[g],h[g])):h[g]!=null?f[g]=h[g]:delete f[g]);for(g in l)a(l,g)&&!a(h,g)&&o(l[g])&&(f[g]=v({},f[g]));return f}function xe(l){l!=null&&this.set(l)}var ge;Object.keys?ge=Object.keys:ge=function(l){var h,f=[];for(h in l)a(l,h)&&f.push(h);return f};var M={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function z(l,h,f){var g=this._calendar[l]||this._calendar.sameElse;return X(g)?g.call(h,f):g}function b(l,h,f){var g=""+Math.abs(l),E=h-g.length,I=l>=0;return(I?f?"+":"":"-")+Math.pow(10,Math.max(0,E)).toString().substr(1)+g}var ee=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,F=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},Y={};function B(l,h,f,g){var E=g;typeof g=="string"&&(E=function(){return this[g]()}),l&&(Y[l]=E),h&&(Y[h[0]]=function(){return b(E.apply(this,arguments),h[1],h[2])}),f&&(Y[f]=function(){return this.localeData().ordinal(E.apply(this,arguments),l)})}function D(l){return l.match(/\[[\s\S]/)?l.replace(/^\[|\]$/g,""):l.replace(/\\/g,"")}function le(l){var h=l.match(ee),f,g;for(f=0,g=h.length;f<g;f++)Y[h[f]]?h[f]=Y[h[f]]:h[f]=D(h[f]);return function(E){var I="",P;for(P=0;P<g;P++)I+=X(h[P])?h[P].call(E,l):h[P];return I}}function W(l,h){return l.isValid()?(h=we(h,l.localeData()),V[h]=V[h]||le(h),V[h](l)):l.localeData().invalidDate()}function we(l,h){var f=5;function g(E){return h.longDateFormat(E)||E}for(F.lastIndex=0;f>=0&&F.test(l);)l=l.replace(F,g),F.lastIndex=0,f-=1;return l}var me={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ve(l){var h=this._longDateFormat[l],f=this._longDateFormat[l.toUpperCase()];return h||!f?h:(this._longDateFormat[l]=f.match(ee).map(function(g){return g==="MMMM"||g==="MM"||g==="DD"||g==="dddd"?g.slice(1):g}).join(""),this._longDateFormat[l])}var _e="Invalid date";function te(){return this._invalidDate}var De="%d",ke=/\d{1,2}/;function ut(l){return this._ordinal.replace("%d",l)}var Le={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ft(l,h,f,g){var E=this._relativeTime[f];return X(E)?E(l,h,f,g):E.replace(/%d/i,l)}function mo(l,h){var f=this._relativeTime[l>0?"future":"past"];return X(f)?f(h):f.replace(/%s/i,h)}var yt={};function Dt(l,h){var f=l.toLowerCase();yt[f]=yt[f+"s"]=yt[h]=l}function Wt(l){return typeof l=="string"?yt[l]||yt[l.toLowerCase()]:void 0}function xn(l){var h={},f,g;for(g in l)a(l,g)&&(f=Wt(g),f&&(h[f]=l[g]));return h}var ye={};function Oe(l,h){ye[l]=h}function Xl(l){var h=[],f;for(f in l)a(l,f)&&h.push({unit:f,priority:ye[f]});return h.sort(function(g,E){return g.priority-E.priority}),h}function ls(l){return l%4===0&&l%100!==0||l%400===0}function It(l){return l<0?Math.ceil(l)||0:Math.floor(l)}function Re(l){var h=+l,f=0;return h!==0&&isFinite(h)&&(f=It(h)),f}function fa(l,h){return function(f){return f!=null?(jS(this,l,f),r.updateOffset(this,h),this):Bh(this,l)}}function Bh(l,h){return l.isValid()?l._d["get"+(l._isUTC?"UTC":"")+h]():NaN}function jS(l,h,f){l.isValid()&&!isNaN(f)&&(h==="FullYear"&&ls(l.year())&&l.month()===1&&l.date()===29?(f=Re(f),l._d["set"+(l._isUTC?"UTC":"")+h](f,l.month(),qh(f,l.month()))):l._d["set"+(l._isUTC?"UTC":"")+h](f))}function sP(l){return l=Wt(l),X(this[l])?this[l]():this}function oP(l,h){if(typeof l=="object"){l=xn(l);var f=Xl(l),g,E=f.length;for(g=0;g<E;g++)this[f[g].unit](l[f[g].unit])}else if(l=Wt(l),X(this[l]))return this[l](h);return this}var YS=/\d/,Yn=/\d\d/,WS=/\d{3}/,Ng=/\d{4}/,zh=/[+-]?\d{6}/,nt=/\d\d?/,HS=/\d\d\d\d?/,GS=/\d\d\d\d\d\d?/,jh=/\d{1,3}/,Og=/\d{1,4}/,Yh=/[+-]?\d{1,6}/,pa=/\d+/,Wh=/[+-]?\d+/,aP=/Z|[+-]\d\d:?\d\d/gi,Hh=/Z|[+-]\d\d(?::?\d\d)?/gi,lP=/[+-]?\d+(\.\d{1,3})?/,Jl=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Gh;Gh={};function ie(l,h,f){Gh[l]=X(h)?h:function(g,E){return g&&f?f:h}}function uP(l,h){return a(Gh,l)?Gh[l](h._strict,h._locale):new RegExp(cP(l))}function cP(l){return Wn(l.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(h,f,g,E,I){return f||g||E||I}))}function Wn(l){return l.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Rg={};function Xe(l,h){var f,g=h,E;for(typeof l=="string"&&(l=[l]),d(h)&&(g=function(I,P){P[h]=Re(I)}),E=l.length,f=0;f<E;f++)Rg[l[f]]=g}function Zl(l,h){Xe(l,function(f,g,E,I){E._w=E._w||{},h(f,E._w,E,I)})}function hP(l,h,f){h!=null&&a(Rg,l)&&Rg[l](h,f._a,f,l)}var ln=0,yi=1,jr=2,Ut=3,Cr=4,vi=5,go=6,dP=7,fP=8;function pP(l,h){return(l%h+h)%h}var At;Array.prototype.indexOf?At=Array.prototype.indexOf:At=function(l){var h;for(h=0;h<this.length;++h)if(this[h]===l)return h;return-1};function qh(l,h){if(isNaN(l)||isNaN(h))return NaN;var f=pP(h,12);return l+=(h-f)/12,f===1?ls(l)?29:28:31-f%7%2}B("M",["MM",2],"Mo",function(){return this.month()+1}),B("MMM",0,0,function(l){return this.localeData().monthsShort(this,l)}),B("MMMM",0,0,function(l){return this.localeData().months(this,l)}),Dt("month","M"),Oe("month",8),ie("M",nt),ie("MM",nt,Yn),ie("MMM",function(l,h){return h.monthsShortRegex(l)}),ie("MMMM",function(l,h){return h.monthsRegex(l)}),Xe(["M","MM"],function(l,h){h[yi]=Re(l)-1}),Xe(["MMM","MMMM"],function(l,h,f,g){var E=f._locale.monthsParse(l,g,f._strict);E!=null?h[yi]=E:k(f).invalidMonth=l});var mP="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),qS="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),KS=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,gP=Jl,yP=Jl;function vP(l,h){return l?s(this._months)?this._months[l.month()]:this._months[(this._months.isFormat||KS).test(h)?"format":"standalone"][l.month()]:s(this._months)?this._months:this._months.standalone}function wP(l,h){return l?s(this._monthsShort)?this._monthsShort[l.month()]:this._monthsShort[KS.test(h)?"format":"standalone"][l.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function _P(l,h,f){var g,E,I,P=l.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],g=0;g<12;++g)I=w([2e3,g]),this._shortMonthsParse[g]=this.monthsShort(I,"").toLocaleLowerCase(),this._longMonthsParse[g]=this.months(I,"").toLocaleLowerCase();return f?h==="MMM"?(E=At.call(this._shortMonthsParse,P),E!==-1?E:null):(E=At.call(this._longMonthsParse,P),E!==-1?E:null):h==="MMM"?(E=At.call(this._shortMonthsParse,P),E!==-1?E:(E=At.call(this._longMonthsParse,P),E!==-1?E:null)):(E=At.call(this._longMonthsParse,P),E!==-1?E:(E=At.call(this._shortMonthsParse,P),E!==-1?E:null))}function SP(l,h,f){var g,E,I;if(this._monthsParseExact)return _P.call(this,l,h,f);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),g=0;g<12;g++){if(E=w([2e3,g]),f&&!this._longMonthsParse[g]&&(this._longMonthsParse[g]=new RegExp("^"+this.months(E,"").replace(".","")+"$","i"),this._shortMonthsParse[g]=new RegExp("^"+this.monthsShort(E,"").replace(".","")+"$","i")),!f&&!this._monthsParse[g]&&(I="^"+this.months(E,"")+"|^"+this.monthsShort(E,""),this._monthsParse[g]=new RegExp(I.replace(".",""),"i")),f&&h==="MMMM"&&this._longMonthsParse[g].test(l))return g;if(f&&h==="MMM"&&this._shortMonthsParse[g].test(l))return g;if(!f&&this._monthsParse[g].test(l))return g}}function QS(l,h){var f;if(!l.isValid())return l;if(typeof h=="string"){if(/^\d+$/.test(h))h=Re(h);else if(h=l.localeData().monthsParse(h),!d(h))return l}return f=Math.min(l.date(),qh(l.year(),h)),l._d["set"+(l._isUTC?"UTC":"")+"Month"](h,f),l}function XS(l){return l!=null?(QS(this,l),r.updateOffset(this,!0),this):Bh(this,"Month")}function EP(){return qh(this.year(),this.month())}function CP(l){return this._monthsParseExact?(a(this,"_monthsRegex")||JS.call(this),l?this._monthsShortStrictRegex:this._monthsShortRegex):(a(this,"_monthsShortRegex")||(this._monthsShortRegex=gP),this._monthsShortStrictRegex&&l?this._monthsShortStrictRegex:this._monthsShortRegex)}function kP(l){return this._monthsParseExact?(a(this,"_monthsRegex")||JS.call(this),l?this._monthsStrictRegex:this._monthsRegex):(a(this,"_monthsRegex")||(this._monthsRegex=yP),this._monthsStrictRegex&&l?this._monthsStrictRegex:this._monthsRegex)}function JS(){function l(P,he){return he.length-P.length}var h=[],f=[],g=[],E,I;for(E=0;E<12;E++)I=w([2e3,E]),h.push(this.monthsShort(I,"")),f.push(this.months(I,"")),g.push(this.months(I,"")),g.push(this.monthsShort(I,""));for(h.sort(l),f.sort(l),g.sort(l),E=0;E<12;E++)h[E]=Wn(h[E]),f[E]=Wn(f[E]);for(E=0;E<24;E++)g[E]=Wn(g[E]);this._monthsRegex=new RegExp("^("+g.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+h.join("|")+")","i")}B("Y",0,0,function(){var l=this.year();return l<=9999?b(l,4):"+"+l}),B(0,["YY",2],0,function(){return this.year()%100}),B(0,["YYYY",4],0,"year"),B(0,["YYYYY",5],0,"year"),B(0,["YYYYYY",6,!0],0,"year"),Dt("year","y"),Oe("year",1),ie("Y",Wh),ie("YY",nt,Yn),ie("YYYY",Og,Ng),ie("YYYYY",Yh,zh),ie("YYYYYY",Yh,zh),Xe(["YYYYY","YYYYYY"],ln),Xe("YYYY",function(l,h){h[ln]=l.length===2?r.parseTwoDigitYear(l):Re(l)}),Xe("YY",function(l,h){h[ln]=r.parseTwoDigitYear(l)}),Xe("Y",function(l,h){h[ln]=parseInt(l,10)});function eu(l){return ls(l)?366:365}r.parseTwoDigitYear=function(l){return Re(l)+(Re(l)>68?1900:2e3)};var ZS=fa("FullYear",!0);function TP(){return ls(this.year())}function xP(l,h,f,g,E,I,P){var he;return l<100&&l>=0?(he=new Date(l+400,h,f,g,E,I,P),isFinite(he.getFullYear())&&he.setFullYear(l)):he=new Date(l,h,f,g,E,I,P),he}function tu(l){var h,f;return l<100&&l>=0?(f=Array.prototype.slice.call(arguments),f[0]=l+400,h=new Date(Date.UTC.apply(null,f)),isFinite(h.getUTCFullYear())&&h.setUTCFullYear(l)):h=new Date(Date.UTC.apply(null,arguments)),h}function Kh(l,h,f){var g=7+h-f,E=(7+tu(l,0,g).getUTCDay()-h)%7;return-E+g-1}function eE(l,h,f,g,E){var I=(7+f-g)%7,P=Kh(l,g,E),he=1+7*(h-1)+I+P,Ne,Je;return he<=0?(Ne=l-1,Je=eu(Ne)+he):he>eu(l)?(Ne=l+1,Je=he-eu(l)):(Ne=l,Je=he),{year:Ne,dayOfYear:Je}}function nu(l,h,f){var g=Kh(l.year(),h,f),E=Math.floor((l.dayOfYear()-g-1)/7)+1,I,P;return E<1?(P=l.year()-1,I=E+wi(P,h,f)):E>wi(l.year(),h,f)?(I=E-wi(l.year(),h,f),P=l.year()+1):(P=l.year(),I=E),{week:I,year:P}}function wi(l,h,f){var g=Kh(l,h,f),E=Kh(l+1,h,f);return(eu(l)-g+E)/7}B("w",["ww",2],"wo","week"),B("W",["WW",2],"Wo","isoWeek"),Dt("week","w"),Dt("isoWeek","W"),Oe("week",5),Oe("isoWeek",5),ie("w",nt),ie("ww",nt,Yn),ie("W",nt),ie("WW",nt,Yn),Zl(["w","ww","W","WW"],function(l,h,f,g){h[g.substr(0,1)]=Re(l)});function DP(l){return nu(l,this._week.dow,this._week.doy).week}var IP={dow:0,doy:6};function AP(){return this._week.dow}function NP(){return this._week.doy}function OP(l){var h=this.localeData().week(this);return l==null?h:this.add((l-h)*7,"d")}function RP(l){var h=nu(this,1,4).week;return l==null?h:this.add((l-h)*7,"d")}B("d",0,"do","day"),B("dd",0,0,function(l){return this.localeData().weekdaysMin(this,l)}),B("ddd",0,0,function(l){return this.localeData().weekdaysShort(this,l)}),B("dddd",0,0,function(l){return this.localeData().weekdays(this,l)}),B("e",0,0,"weekday"),B("E",0,0,"isoWeekday"),Dt("day","d"),Dt("weekday","e"),Dt("isoWeekday","E"),Oe("day",11),Oe("weekday",11),Oe("isoWeekday",11),ie("d",nt),ie("e",nt),ie("E",nt),ie("dd",function(l,h){return h.weekdaysMinRegex(l)}),ie("ddd",function(l,h){return h.weekdaysShortRegex(l)}),ie("dddd",function(l,h){return h.weekdaysRegex(l)}),Zl(["dd","ddd","dddd"],function(l,h,f,g){var E=f._locale.weekdaysParse(l,g,f._strict);E!=null?h.d=E:k(f).invalidWeekday=l}),Zl(["d","e","E"],function(l,h,f,g){h[g]=Re(l)});function bP(l,h){return typeof l!="string"?l:isNaN(l)?(l=h.weekdaysParse(l),typeof l=="number"?l:null):parseInt(l,10)}function PP(l,h){return typeof l=="string"?h.weekdaysParse(l)%7||7:isNaN(l)?null:l}function bg(l,h){return l.slice(h,7).concat(l.slice(0,h))}var MP="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),tE="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),LP="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),$P=Jl,FP=Jl,UP=Jl;function VP(l,h){var f=s(this._weekdays)?this._weekdays:this._weekdays[l&&l!==!0&&this._weekdays.isFormat.test(h)?"format":"standalone"];return l===!0?bg(f,this._week.dow):l?f[l.day()]:f}function BP(l){return l===!0?bg(this._weekdaysShort,this._week.dow):l?this._weekdaysShort[l.day()]:this._weekdaysShort}function zP(l){return l===!0?bg(this._weekdaysMin,this._week.dow):l?this._weekdaysMin[l.day()]:this._weekdaysMin}function jP(l,h,f){var g,E,I,P=l.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],g=0;g<7;++g)I=w([2e3,1]).day(g),this._minWeekdaysParse[g]=this.weekdaysMin(I,"").toLocaleLowerCase(),this._shortWeekdaysParse[g]=this.weekdaysShort(I,"").toLocaleLowerCase(),this._weekdaysParse[g]=this.weekdays(I,"").toLocaleLowerCase();return f?h==="dddd"?(E=At.call(this._weekdaysParse,P),E!==-1?E:null):h==="ddd"?(E=At.call(this._shortWeekdaysParse,P),E!==-1?E:null):(E=At.call(this._minWeekdaysParse,P),E!==-1?E:null):h==="dddd"?(E=At.call(this._weekdaysParse,P),E!==-1||(E=At.call(this._shortWeekdaysParse,P),E!==-1)?E:(E=At.call(this._minWeekdaysParse,P),E!==-1?E:null)):h==="ddd"?(E=At.call(this._shortWeekdaysParse,P),E!==-1||(E=At.call(this._weekdaysParse,P),E!==-1)?E:(E=At.call(this._minWeekdaysParse,P),E!==-1?E:null)):(E=At.call(this._minWeekdaysParse,P),E!==-1||(E=At.call(this._weekdaysParse,P),E!==-1)?E:(E=At.call(this._shortWeekdaysParse,P),E!==-1?E:null))}function YP(l,h,f){var g,E,I;if(this._weekdaysParseExact)return jP.call(this,l,h,f);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),g=0;g<7;g++){if(E=w([2e3,1]).day(g),f&&!this._fullWeekdaysParse[g]&&(this._fullWeekdaysParse[g]=new RegExp("^"+this.weekdays(E,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[g]=new RegExp("^"+this.weekdaysShort(E,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[g]=new RegExp("^"+this.weekdaysMin(E,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[g]||(I="^"+this.weekdays(E,"")+"|^"+this.weekdaysShort(E,"")+"|^"+this.weekdaysMin(E,""),this._weekdaysParse[g]=new RegExp(I.replace(".",""),"i")),f&&h==="dddd"&&this._fullWeekdaysParse[g].test(l))return g;if(f&&h==="ddd"&&this._shortWeekdaysParse[g].test(l))return g;if(f&&h==="dd"&&this._minWeekdaysParse[g].test(l))return g;if(!f&&this._weekdaysParse[g].test(l))return g}}function WP(l){if(!this.isValid())return l!=null?this:NaN;var h=this._isUTC?this._d.getUTCDay():this._d.getDay();return l!=null?(l=bP(l,this.localeData()),this.add(l-h,"d")):h}function HP(l){if(!this.isValid())return l!=null?this:NaN;var h=(this.day()+7-this.localeData()._week.dow)%7;return l==null?h:this.add(l-h,"d")}function GP(l){if(!this.isValid())return l!=null?this:NaN;if(l!=null){var h=PP(l,this.localeData());return this.day(this.day()%7?h:h-7)}else return this.day()||7}function qP(l){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Pg.call(this),l?this._weekdaysStrictRegex:this._weekdaysRegex):(a(this,"_weekdaysRegex")||(this._weekdaysRegex=$P),this._weekdaysStrictRegex&&l?this._weekdaysStrictRegex:this._weekdaysRegex)}function KP(l){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Pg.call(this),l?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(a(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=FP),this._weekdaysShortStrictRegex&&l?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function QP(l){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Pg.call(this),l?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(a(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=UP),this._weekdaysMinStrictRegex&&l?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Pg(){function l(Dn,ki){return ki.length-Dn.length}var h=[],f=[],g=[],E=[],I,P,he,Ne,Je;for(I=0;I<7;I++)P=w([2e3,1]).day(I),he=Wn(this.weekdaysMin(P,"")),Ne=Wn(this.weekdaysShort(P,"")),Je=Wn(this.weekdays(P,"")),h.push(he),f.push(Ne),g.push(Je),E.push(he),E.push(Ne),E.push(Je);h.sort(l),f.sort(l),g.sort(l),E.sort(l),this._weekdaysRegex=new RegExp("^("+E.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+g.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+f.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+h.join("|")+")","i")}function Mg(){return this.hours()%12||12}function XP(){return this.hours()||24}B("H",["HH",2],0,"hour"),B("h",["hh",2],0,Mg),B("k",["kk",2],0,XP),B("hmm",0,0,function(){return""+Mg.apply(this)+b(this.minutes(),2)}),B("hmmss",0,0,function(){return""+Mg.apply(this)+b(this.minutes(),2)+b(this.seconds(),2)}),B("Hmm",0,0,function(){return""+this.hours()+b(this.minutes(),2)}),B("Hmmss",0,0,function(){return""+this.hours()+b(this.minutes(),2)+b(this.seconds(),2)});function nE(l,h){B(l,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),h)})}nE("a",!0),nE("A",!1),Dt("hour","h"),Oe("hour",13);function rE(l,h){return h._meridiemParse}ie("a",rE),ie("A",rE),ie("H",nt),ie("h",nt),ie("k",nt),ie("HH",nt,Yn),ie("hh",nt,Yn),ie("kk",nt,Yn),ie("hmm",HS),ie("hmmss",GS),ie("Hmm",HS),ie("Hmmss",GS),Xe(["H","HH"],Ut),Xe(["k","kk"],function(l,h,f){var g=Re(l);h[Ut]=g===24?0:g}),Xe(["a","A"],function(l,h,f){f._isPm=f._locale.isPM(l),f._meridiem=l}),Xe(["h","hh"],function(l,h,f){h[Ut]=Re(l),k(f).bigHour=!0}),Xe("hmm",function(l,h,f){var g=l.length-2;h[Ut]=Re(l.substr(0,g)),h[Cr]=Re(l.substr(g)),k(f).bigHour=!0}),Xe("hmmss",function(l,h,f){var g=l.length-4,E=l.length-2;h[Ut]=Re(l.substr(0,g)),h[Cr]=Re(l.substr(g,2)),h[vi]=Re(l.substr(E)),k(f).bigHour=!0}),Xe("Hmm",function(l,h,f){var g=l.length-2;h[Ut]=Re(l.substr(0,g)),h[Cr]=Re(l.substr(g))}),Xe("Hmmss",function(l,h,f){var g=l.length-4,E=l.length-2;h[Ut]=Re(l.substr(0,g)),h[Cr]=Re(l.substr(g,2)),h[vi]=Re(l.substr(E))});function JP(l){return(l+"").toLowerCase().charAt(0)==="p"}var ZP=/[ap]\.?m?\.?/i,eM=fa("Hours",!0);function tM(l,h,f){return l>11?f?"pm":"PM":f?"am":"AM"}var iE={calendar:M,longDateFormat:me,invalidDate:_e,ordinal:De,dayOfMonthOrdinalParse:ke,relativeTime:Le,months:mP,monthsShort:qS,week:IP,weekdays:MP,weekdaysMin:LP,weekdaysShort:tE,meridiemParse:ZP},ct={},ru={},iu;function nM(l,h){var f,g=Math.min(l.length,h.length);for(f=0;f<g;f+=1)if(l[f]!==h[f])return f;return g}function sE(l){return l&&l.toLowerCase().replace("_","-")}function rM(l){for(var h=0,f,g,E,I;h<l.length;){for(I=sE(l[h]).split("-"),f=I.length,g=sE(l[h+1]),g=g?g.split("-"):null;f>0;){if(E=Qh(I.slice(0,f).join("-")),E)return E;if(g&&g.length>=f&&nM(I,g)>=f-1)break;f--}h++}return iu}function iM(l){return l.match("^[^/\\\\]*$")!=null}function Qh(l){var h=null,f;if(ct[l]===void 0&&!0&&e&&e.exports&&iM(l))try{h=iu._abbr,f=kx,f("./locale/"+l),us(h)}catch{ct[l]=null}return ct[l]}function us(l,h){var f;return l&&(c(h)?f=_i(l):f=Lg(l,h),f?iu=f:typeof console!="undefined"&&console.warn&&console.warn("Locale "+l+" not found. Did you forget to load it?")),iu._abbr}function Lg(l,h){if(h!==null){var f,g=iE;if(h.abbr=l,ct[l]!=null)J("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),g=ct[l]._config;else if(h.parentLocale!=null)if(ct[h.parentLocale]!=null)g=ct[h.parentLocale]._config;else if(f=Qh(h.parentLocale),f!=null)g=f._config;else return ru[h.parentLocale]||(ru[h.parentLocale]=[]),ru[h.parentLocale].push({name:l,config:h}),null;return ct[l]=new xe(oe(g,h)),ru[l]&&ru[l].forEach(function(E){Lg(E.name,E.config)}),us(l),ct[l]}else return delete ct[l],null}function sM(l,h){if(h!=null){var f,g,E=iE;ct[l]!=null&&ct[l].parentLocale!=null?ct[l].set(oe(ct[l]._config,h)):(g=Qh(l),g!=null&&(E=g._config),h=oe(E,h),g==null&&(h.abbr=l),f=new xe(h),f.parentLocale=ct[l],ct[l]=f),us(l)}else ct[l]!=null&&(ct[l].parentLocale!=null?(ct[l]=ct[l].parentLocale,l===us()&&us(l)):ct[l]!=null&&delete ct[l]);return ct[l]}function _i(l){var h;if(l&&l._locale&&l._locale._abbr&&(l=l._locale._abbr),!l)return iu;if(!s(l)){if(h=Qh(l),h)return h;l=[l]}return rM(l)}function oM(){return ge(ct)}function $g(l){var h,f=l._a;return f&&k(l).overflow===-2&&(h=f[yi]<0||f[yi]>11?yi:f[jr]<1||f[jr]>qh(f[ln],f[yi])?jr:f[Ut]<0||f[Ut]>24||f[Ut]===24&&(f[Cr]!==0||f[vi]!==0||f[go]!==0)?Ut:f[Cr]<0||f[Cr]>59?Cr:f[vi]<0||f[vi]>59?vi:f[go]<0||f[go]>999?go:-1,k(l)._overflowDayOfYear&&(h<ln||h>jr)&&(h=jr),k(l)._overflowWeeks&&h===-1&&(h=dP),k(l)._overflowWeekday&&h===-1&&(h=fP),k(l).overflow=h),l}var aM=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,lM=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,uM=/Z|[+-]\d\d(?::?\d\d)?/,Xh=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Fg=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],cM=/^\/?Date\((-?\d+)/i,hM=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,dM={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function oE(l){var h,f,g=l._i,E=aM.exec(g)||lM.exec(g),I,P,he,Ne,Je=Xh.length,Dn=Fg.length;if(E){for(k(l).iso=!0,h=0,f=Je;h<f;h++)if(Xh[h][1].exec(E[1])){P=Xh[h][0],I=Xh[h][2]!==!1;break}if(P==null){l._isValid=!1;return}if(E[3]){for(h=0,f=Dn;h<f;h++)if(Fg[h][1].exec(E[3])){he=(E[2]||" ")+Fg[h][0];break}if(he==null){l._isValid=!1;return}}if(!I&&he!=null){l._isValid=!1;return}if(E[4])if(uM.exec(E[4]))Ne="Z";else{l._isValid=!1;return}l._f=P+(he||"")+(Ne||""),Vg(l)}else l._isValid=!1}function fM(l,h,f,g,E,I){var P=[pM(l),qS.indexOf(h),parseInt(f,10),parseInt(g,10),parseInt(E,10)];return I&&P.push(parseInt(I,10)),P}function pM(l){var h=parseInt(l,10);return h<=49?2e3+h:h<=999?1900+h:h}function mM(l){return l.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function gM(l,h,f){if(l){var g=tE.indexOf(l),E=new Date(h[0],h[1],h[2]).getDay();if(g!==E)return k(f).weekdayMismatch=!0,f._isValid=!1,!1}return!0}function yM(l,h,f){if(l)return dM[l];if(h)return 0;var g=parseInt(f,10),E=g%100,I=(g-E)/100;return I*60+E}function aE(l){var h=hM.exec(mM(l._i)),f;if(h){if(f=fM(h[4],h[3],h[2],h[5],h[6],h[7]),!gM(h[1],f,l))return;l._a=f,l._tzm=yM(h[8],h[9],h[10]),l._d=tu.apply(null,l._a),l._d.setUTCMinutes(l._d.getUTCMinutes()-l._tzm),k(l).rfc2822=!0}else l._isValid=!1}function vM(l){var h=cM.exec(l._i);if(h!==null){l._d=new Date(+h[1]);return}if(oE(l),l._isValid===!1)delete l._isValid;else return;if(aE(l),l._isValid===!1)delete l._isValid;else return;l._strict?l._isValid=!1:r.createFromInputFallback(l)}r.createFromInputFallback=L("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(l){l._d=new Date(l._i+(l._useUTC?" UTC":""))});function ma(l,h,f){return l!=null?l:h!=null?h:f}function wM(l){var h=new Date(r.now());return l._useUTC?[h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate()]:[h.getFullYear(),h.getMonth(),h.getDate()]}function Ug(l){var h,f,g=[],E,I,P;if(!l._d){for(E=wM(l),l._w&&l._a[jr]==null&&l._a[yi]==null&&_M(l),l._dayOfYear!=null&&(P=ma(l._a[ln],E[ln]),(l._dayOfYear>eu(P)||l._dayOfYear===0)&&(k(l)._overflowDayOfYear=!0),f=tu(P,0,l._dayOfYear),l._a[yi]=f.getUTCMonth(),l._a[jr]=f.getUTCDate()),h=0;h<3&&l._a[h]==null;++h)l._a[h]=g[h]=E[h];for(;h<7;h++)l._a[h]=g[h]=l._a[h]==null?h===2?1:0:l._a[h];l._a[Ut]===24&&l._a[Cr]===0&&l._a[vi]===0&&l._a[go]===0&&(l._nextDay=!0,l._a[Ut]=0),l._d=(l._useUTC?tu:xP).apply(null,g),I=l._useUTC?l._d.getUTCDay():l._d.getDay(),l._tzm!=null&&l._d.setUTCMinutes(l._d.getUTCMinutes()-l._tzm),l._nextDay&&(l._a[Ut]=24),l._w&&typeof l._w.d!="undefined"&&l._w.d!==I&&(k(l).weekdayMismatch=!0)}}function _M(l){var h,f,g,E,I,P,he,Ne,Je;h=l._w,h.GG!=null||h.W!=null||h.E!=null?(I=1,P=4,f=ma(h.GG,l._a[ln],nu(rt(),1,4).year),g=ma(h.W,1),E=ma(h.E,1),(E<1||E>7)&&(Ne=!0)):(I=l._locale._week.dow,P=l._locale._week.doy,Je=nu(rt(),I,P),f=ma(h.gg,l._a[ln],Je.year),g=ma(h.w,Je.week),h.d!=null?(E=h.d,(E<0||E>6)&&(Ne=!0)):h.e!=null?(E=h.e+I,(h.e<0||h.e>6)&&(Ne=!0)):E=I),g<1||g>wi(f,I,P)?k(l)._overflowWeeks=!0:Ne!=null?k(l)._overflowWeekday=!0:(he=eE(f,g,E,I,P),l._a[ln]=he.year,l._dayOfYear=he.dayOfYear)}r.ISO_8601=function(){},r.RFC_2822=function(){};function Vg(l){if(l._f===r.ISO_8601){oE(l);return}if(l._f===r.RFC_2822){aE(l);return}l._a=[],k(l).empty=!0;var h=""+l._i,f,g,E,I,P,he=h.length,Ne=0,Je,Dn;for(E=we(l._f,l._locale).match(ee)||[],Dn=E.length,f=0;f<Dn;f++)I=E[f],g=(h.match(uP(I,l))||[])[0],g&&(P=h.substr(0,h.indexOf(g)),P.length>0&&k(l).unusedInput.push(P),h=h.slice(h.indexOf(g)+g.length),Ne+=g.length),Y[I]?(g?k(l).empty=!1:k(l).unusedTokens.push(I),hP(I,g,l)):l._strict&&!g&&k(l).unusedTokens.push(I);k(l).charsLeftOver=he-Ne,h.length>0&&k(l).unusedInput.push(h),l._a[Ut]<=12&&k(l).bigHour===!0&&l._a[Ut]>0&&(k(l).bigHour=void 0),k(l).parsedDateParts=l._a.slice(0),k(l).meridiem=l._meridiem,l._a[Ut]=SM(l._locale,l._a[Ut],l._meridiem),Je=k(l).era,Je!==null&&(l._a[ln]=l._locale.erasConvertYear(Je,l._a[ln])),Ug(l),$g(l)}function SM(l,h,f){var g;return f==null?h:l.meridiemHour!=null?l.meridiemHour(h,f):(l.isPM!=null&&(g=l.isPM(f),g&&h<12&&(h+=12),!g&&h===12&&(h=0)),h)}function EM(l){var h,f,g,E,I,P,he=!1,Ne=l._f.length;if(Ne===0){k(l).invalidFormat=!0,l._d=new Date(NaN);return}for(E=0;E<Ne;E++)I=0,P=!1,h=R({},l),l._useUTC!=null&&(h._useUTC=l._useUTC),h._f=l._f[E],Vg(h),y(h)&&(P=!0),I+=k(h).charsLeftOver,I+=k(h).unusedTokens.length*10,k(h).score=I,he?I<g&&(g=I,f=h):(g==null||I<g||P)&&(g=I,f=h,P&&(he=!0));v(l,f||h)}function CM(l){if(!l._d){var h=xn(l._i),f=h.day===void 0?h.date:h.day;l._a=m([h.year,h.month,f,h.hour,h.minute,h.second,h.millisecond],function(g){return g&&parseInt(g,10)}),Ug(l)}}function kM(l){var h=new N($g(lE(l)));return h._nextDay&&(h.add(1,"d"),h._nextDay=void 0),h}function lE(l){var h=l._i,f=l._f;return l._locale=l._locale||_i(l._l),h===null||f===void 0&&h===""?C({nullInput:!0}):(typeof h=="string"&&(l._i=h=l._locale.preparse(h)),O(h)?new N($g(h)):(p(h)?l._d=h:s(f)?EM(l):f?Vg(l):TM(l),y(l)||(l._d=null),l))}function TM(l){var h=l._i;c(h)?l._d=new Date(r.now()):p(h)?l._d=new Date(h.valueOf()):typeof h=="string"?vM(l):s(h)?(l._a=m(h.slice(0),function(f){return parseInt(f,10)}),Ug(l)):o(h)?CM(l):d(h)?l._d=new Date(h):r.createFromInputFallback(l)}function uE(l,h,f,g,E){var I={};return(h===!0||h===!1)&&(g=h,h=void 0),(f===!0||f===!1)&&(g=f,f=void 0),(o(l)&&u(l)||s(l)&&l.length===0)&&(l=void 0),I._isAMomentObject=!0,I._useUTC=I._isUTC=E,I._l=f,I._i=l,I._f=h,I._strict=g,kM(I)}function rt(l,h,f,g){return uE(l,h,f,g,!1)}var xM=L("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var l=rt.apply(null,arguments);return this.isValid()&&l.isValid()?l<this?this:l:C()}),DM=L("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var l=rt.apply(null,arguments);return this.isValid()&&l.isValid()?l>this?this:l:C()});function cE(l,h){var f,g;if(h.length===1&&s(h[0])&&(h=h[0]),!h.length)return rt();for(f=h[0],g=1;g<h.length;++g)(!h[g].isValid()||h[g][l](f))&&(f=h[g]);return f}function IM(){var l=[].slice.call(arguments,0);return cE("isBefore",l)}function AM(){var l=[].slice.call(arguments,0);return cE("isAfter",l)}var NM=function(){return Date.now?Date.now():+new Date},su=["year","quarter","month","week","day","hour","minute","second","millisecond"];function OM(l){var h,f=!1,g,E=su.length;for(h in l)if(a(l,h)&&!(At.call(su,h)!==-1&&(l[h]==null||!isNaN(l[h]))))return!1;for(g=0;g<E;++g)if(l[su[g]]){if(f)return!1;parseFloat(l[su[g]])!==Re(l[su[g]])&&(f=!0)}return!0}function RM(){return this._isValid}function bM(){return kr(NaN)}function Jh(l){var h=xn(l),f=h.year||0,g=h.quarter||0,E=h.month||0,I=h.week||h.isoWeek||0,P=h.day||0,he=h.hour||0,Ne=h.minute||0,Je=h.second||0,Dn=h.millisecond||0;this._isValid=OM(h),this._milliseconds=+Dn+Je*1e3+Ne*6e4+he*1e3*60*60,this._days=+P+I*7,this._months=+E+g*3+f*12,this._data={},this._locale=_i(),this._bubble()}function Zh(l){return l instanceof Jh}function Bg(l){return l<0?Math.round(-1*l)*-1:Math.round(l)}function PM(l,h,f){var g=Math.min(l.length,h.length),E=Math.abs(l.length-h.length),I=0,P;for(P=0;P<g;P++)(f&&l[P]!==h[P]||!f&&Re(l[P])!==Re(h[P]))&&I++;return I+E}function hE(l,h){B(l,0,0,function(){var f=this.utcOffset(),g="+";return f<0&&(f=-f,g="-"),g+b(~~(f/60),2)+h+b(~~f%60,2)})}hE("Z",":"),hE("ZZ",""),ie("Z",Hh),ie("ZZ",Hh),Xe(["Z","ZZ"],function(l,h,f){f._useUTC=!0,f._tzm=zg(Hh,l)});var MM=/([\+\-]|\d\d)/gi;function zg(l,h){var f=(h||"").match(l),g,E,I;return f===null?null:(g=f[f.length-1]||[],E=(g+"").match(MM)||["-",0,0],I=+(E[1]*60)+Re(E[2]),I===0?0:E[0]==="+"?I:-I)}function jg(l,h){var f,g;return h._isUTC?(f=h.clone(),g=(O(l)||p(l)?l.valueOf():rt(l).valueOf())-f.valueOf(),f._d.setTime(f._d.valueOf()+g),r.updateOffset(f,!1),f):rt(l).local()}function Yg(l){return-Math.round(l._d.getTimezoneOffset())}r.updateOffset=function(){};function LM(l,h,f){var g=this._offset||0,E;if(!this.isValid())return l!=null?this:NaN;if(l!=null){if(typeof l=="string"){if(l=zg(Hh,l),l===null)return this}else Math.abs(l)<16&&!f&&(l=l*60);return!this._isUTC&&h&&(E=Yg(this)),this._offset=l,this._isUTC=!0,E!=null&&this.add(E,"m"),g!==l&&(!h||this._changeInProgress?mE(this,kr(l-g,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,r.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?g:Yg(this)}function $M(l,h){return l!=null?(typeof l!="string"&&(l=-l),this.utcOffset(l,h),this):-this.utcOffset()}function FM(l){return this.utcOffset(0,l)}function UM(l){return this._isUTC&&(this.utcOffset(0,l),this._isUTC=!1,l&&this.subtract(Yg(this),"m")),this}function VM(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var l=zg(aP,this._i);l!=null?this.utcOffset(l):this.utcOffset(0,!0)}return this}function BM(l){return this.isValid()?(l=l?rt(l).utcOffset():0,(this.utcOffset()-l)%60===0):!1}function zM(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function jM(){if(!c(this._isDSTShifted))return this._isDSTShifted;var l={},h;return R(l,this),l=lE(l),l._a?(h=l._isUTC?w(l._a):rt(l._a),this._isDSTShifted=this.isValid()&&PM(l._a,h.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function YM(){return this.isValid()?!this._isUTC:!1}function WM(){return this.isValid()?this._isUTC:!1}function dE(){return this.isValid()?this._isUTC&&this._offset===0:!1}var HM=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,GM=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function kr(l,h){var f=l,g=null,E,I,P;return Zh(l)?f={ms:l._milliseconds,d:l._days,M:l._months}:d(l)||!isNaN(+l)?(f={},h?f[h]=+l:f.milliseconds=+l):(g=HM.exec(l))?(E=g[1]==="-"?-1:1,f={y:0,d:Re(g[jr])*E,h:Re(g[Ut])*E,m:Re(g[Cr])*E,s:Re(g[vi])*E,ms:Re(Bg(g[go]*1e3))*E}):(g=GM.exec(l))?(E=g[1]==="-"?-1:1,f={y:yo(g[2],E),M:yo(g[3],E),w:yo(g[4],E),d:yo(g[5],E),h:yo(g[6],E),m:yo(g[7],E),s:yo(g[8],E)}):f==null?f={}:typeof f=="object"&&("from"in f||"to"in f)&&(P=qM(rt(f.from),rt(f.to)),f={},f.ms=P.milliseconds,f.M=P.months),I=new Jh(f),Zh(l)&&a(l,"_locale")&&(I._locale=l._locale),Zh(l)&&a(l,"_isValid")&&(I._isValid=l._isValid),I}kr.fn=Jh.prototype,kr.invalid=bM;function yo(l,h){var f=l&&parseFloat(l.replace(",","."));return(isNaN(f)?0:f)*h}function fE(l,h){var f={};return f.months=h.month()-l.month()+(h.year()-l.year())*12,l.clone().add(f.months,"M").isAfter(h)&&--f.months,f.milliseconds=+h-+l.clone().add(f.months,"M"),f}function qM(l,h){var f;return l.isValid()&&h.isValid()?(h=jg(h,l),l.isBefore(h)?f=fE(l,h):(f=fE(h,l),f.milliseconds=-f.milliseconds,f.months=-f.months),f):{milliseconds:0,months:0}}function pE(l,h){return function(f,g){var E,I;return g!==null&&!isNaN(+g)&&(J(h,"moment()."+h+"(period, number) is deprecated. Please use moment()."+h+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),I=f,f=g,g=I),E=kr(f,g),mE(this,E,l),this}}function mE(l,h,f,g){var E=h._milliseconds,I=Bg(h._days),P=Bg(h._months);!l.isValid()||(g=g==null?!0:g,P&&QS(l,Bh(l,"Month")+P*f),I&&jS(l,"Date",Bh(l,"Date")+I*f),E&&l._d.setTime(l._d.valueOf()+E*f),g&&r.updateOffset(l,I||P))}var KM=pE(1,"add"),QM=pE(-1,"subtract");function gE(l){return typeof l=="string"||l instanceof String}function XM(l){return O(l)||p(l)||gE(l)||d(l)||ZM(l)||JM(l)||l===null||l===void 0}function JM(l){var h=o(l)&&!u(l),f=!1,g=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],E,I,P=g.length;for(E=0;E<P;E+=1)I=g[E],f=f||a(l,I);return h&&f}function ZM(l){var h=s(l),f=!1;return h&&(f=l.filter(function(g){return!d(g)&&gE(l)}).length===0),h&&f}function e4(l){var h=o(l)&&!u(l),f=!1,g=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],E,I;for(E=0;E<g.length;E+=1)I=g[E],f=f||a(l,I);return h&&f}function t4(l,h){var f=l.diff(h,"days",!0);return f<-6?"sameElse":f<-1?"lastWeek":f<0?"lastDay":f<1?"sameDay":f<2?"nextDay":f<7?"nextWeek":"sameElse"}function n4(l,h){arguments.length===1&&(arguments[0]?XM(arguments[0])?(l=arguments[0],h=void 0):e4(arguments[0])&&(h=arguments[0],l=void 0):(l=void 0,h=void 0));var f=l||rt(),g=jg(f,this).startOf("day"),E=r.calendarFormat(this,g)||"sameElse",I=h&&(X(h[E])?h[E].call(this,f):h[E]);return this.format(I||this.localeData().calendar(E,this,rt(f)))}function r4(){return new N(this)}function i4(l,h){var f=O(l)?l:rt(l);return this.isValid()&&f.isValid()?(h=Wt(h)||"millisecond",h==="millisecond"?this.valueOf()>f.valueOf():f.valueOf()<this.clone().startOf(h).valueOf()):!1}function s4(l,h){var f=O(l)?l:rt(l);return this.isValid()&&f.isValid()?(h=Wt(h)||"millisecond",h==="millisecond"?this.valueOf()<f.valueOf():this.clone().endOf(h).valueOf()<f.valueOf()):!1}function o4(l,h,f,g){var E=O(l)?l:rt(l),I=O(h)?h:rt(h);return this.isValid()&&E.isValid()&&I.isValid()?(g=g||"()",(g[0]==="("?this.isAfter(E,f):!this.isBefore(E,f))&&(g[1]===")"?this.isBefore(I,f):!this.isAfter(I,f))):!1}function a4(l,h){var f=O(l)?l:rt(l),g;return this.isValid()&&f.isValid()?(h=Wt(h)||"millisecond",h==="millisecond"?this.valueOf()===f.valueOf():(g=f.valueOf(),this.clone().startOf(h).valueOf()<=g&&g<=this.clone().endOf(h).valueOf())):!1}function l4(l,h){return this.isSame(l,h)||this.isAfter(l,h)}function u4(l,h){return this.isSame(l,h)||this.isBefore(l,h)}function c4(l,h,f){var g,E,I;if(!this.isValid())return NaN;if(g=jg(l,this),!g.isValid())return NaN;switch(E=(g.utcOffset()-this.utcOffset())*6e4,h=Wt(h),h){case"year":I=ed(this,g)/12;break;case"month":I=ed(this,g);break;case"quarter":I=ed(this,g)/3;break;case"second":I=(this-g)/1e3;break;case"minute":I=(this-g)/6e4;break;case"hour":I=(this-g)/36e5;break;case"day":I=(this-g-E)/864e5;break;case"week":I=(this-g-E)/6048e5;break;default:I=this-g}return f?I:It(I)}function ed(l,h){if(l.date()<h.date())return-ed(h,l);var f=(h.year()-l.year())*12+(h.month()-l.month()),g=l.clone().add(f,"months"),E,I;return h-g<0?(E=l.clone().add(f-1,"months"),I=(h-g)/(g-E)):(E=l.clone().add(f+1,"months"),I=(h-g)/(E-g)),-(f+I)||0}r.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",r.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function h4(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function d4(l){if(!this.isValid())return null;var h=l!==!0,f=h?this.clone().utc():this;return f.year()<0||f.year()>9999?W(f,h?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):X(Date.prototype.toISOString)?h?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",W(f,"Z")):W(f,h?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function f4(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var l="moment",h="",f,g,E,I;return this.isLocal()||(l=this.utcOffset()===0?"moment.utc":"moment.parseZone",h="Z"),f="["+l+'("]',g=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",E="-MM-DD[T]HH:mm:ss.SSS",I=h+'[")]',this.format(f+g+E+I)}function p4(l){l||(l=this.isUtc()?r.defaultFormatUtc:r.defaultFormat);var h=W(this,l);return this.localeData().postformat(h)}function m4(l,h){return this.isValid()&&(O(l)&&l.isValid()||rt(l).isValid())?kr({to:this,from:l}).locale(this.locale()).humanize(!h):this.localeData().invalidDate()}function g4(l){return this.from(rt(),l)}function y4(l,h){return this.isValid()&&(O(l)&&l.isValid()||rt(l).isValid())?kr({from:this,to:l}).locale(this.locale()).humanize(!h):this.localeData().invalidDate()}function v4(l){return this.to(rt(),l)}function yE(l){var h;return l===void 0?this._locale._abbr:(h=_i(l),h!=null&&(this._locale=h),this)}var vE=L("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(l){return l===void 0?this.localeData():this.locale(l)});function wE(){return this._locale}var td=1e3,ga=60*td,nd=60*ga,_E=(365*400+97)*24*nd;function ya(l,h){return(l%h+h)%h}function SE(l,h,f){return l<100&&l>=0?new Date(l+400,h,f)-_E:new Date(l,h,f).valueOf()}function EE(l,h,f){return l<100&&l>=0?Date.UTC(l+400,h,f)-_E:Date.UTC(l,h,f)}function w4(l){var h,f;if(l=Wt(l),l===void 0||l==="millisecond"||!this.isValid())return this;switch(f=this._isUTC?EE:SE,l){case"year":h=f(this.year(),0,1);break;case"quarter":h=f(this.year(),this.month()-this.month()%3,1);break;case"month":h=f(this.year(),this.month(),1);break;case"week":h=f(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":h=f(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":h=f(this.year(),this.month(),this.date());break;case"hour":h=this._d.valueOf(),h-=ya(h+(this._isUTC?0:this.utcOffset()*ga),nd);break;case"minute":h=this._d.valueOf(),h-=ya(h,ga);break;case"second":h=this._d.valueOf(),h-=ya(h,td);break}return this._d.setTime(h),r.updateOffset(this,!0),this}function _4(l){var h,f;if(l=Wt(l),l===void 0||l==="millisecond"||!this.isValid())return this;switch(f=this._isUTC?EE:SE,l){case"year":h=f(this.year()+1,0,1)-1;break;case"quarter":h=f(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":h=f(this.year(),this.month()+1,1)-1;break;case"week":h=f(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":h=f(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":h=f(this.year(),this.month(),this.date()+1)-1;break;case"hour":h=this._d.valueOf(),h+=nd-ya(h+(this._isUTC?0:this.utcOffset()*ga),nd)-1;break;case"minute":h=this._d.valueOf(),h+=ga-ya(h,ga)-1;break;case"second":h=this._d.valueOf(),h+=td-ya(h,td)-1;break}return this._d.setTime(h),r.updateOffset(this,!0),this}function S4(){return this._d.valueOf()-(this._offset||0)*6e4}function E4(){return Math.floor(this.valueOf()/1e3)}function C4(){return new Date(this.valueOf())}function k4(){var l=this;return[l.year(),l.month(),l.date(),l.hour(),l.minute(),l.second(),l.millisecond()]}function T4(){var l=this;return{years:l.year(),months:l.month(),date:l.date(),hours:l.hours(),minutes:l.minutes(),seconds:l.seconds(),milliseconds:l.milliseconds()}}function x4(){return this.isValid()?this.toISOString():null}function D4(){return y(this)}function I4(){return v({},k(this))}function A4(){return k(this).overflow}function N4(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}B("N",0,0,"eraAbbr"),B("NN",0,0,"eraAbbr"),B("NNN",0,0,"eraAbbr"),B("NNNN",0,0,"eraName"),B("NNNNN",0,0,"eraNarrow"),B("y",["y",1],"yo","eraYear"),B("y",["yy",2],0,"eraYear"),B("y",["yyy",3],0,"eraYear"),B("y",["yyyy",4],0,"eraYear"),ie("N",Wg),ie("NN",Wg),ie("NNN",Wg),ie("NNNN",B4),ie("NNNNN",z4),Xe(["N","NN","NNN","NNNN","NNNNN"],function(l,h,f,g){var E=f._locale.erasParse(l,g,f._strict);E?k(f).era=E:k(f).invalidEra=l}),ie("y",pa),ie("yy",pa),ie("yyy",pa),ie("yyyy",pa),ie("yo",j4),Xe(["y","yy","yyy","yyyy"],ln),Xe(["yo"],function(l,h,f,g){var E;f._locale._eraYearOrdinalRegex&&(E=l.match(f._locale._eraYearOrdinalRegex)),f._locale.eraYearOrdinalParse?h[ln]=f._locale.eraYearOrdinalParse(l,E):h[ln]=parseInt(l,10)});function O4(l,h){var f,g,E,I=this._eras||_i("en")._eras;for(f=0,g=I.length;f<g;++f){switch(typeof I[f].since){case"string":E=r(I[f].since).startOf("day"),I[f].since=E.valueOf();break}switch(typeof I[f].until){case"undefined":I[f].until=1/0;break;case"string":E=r(I[f].until).startOf("day").valueOf(),I[f].until=E.valueOf();break}}return I}function R4(l,h,f){var g,E,I=this.eras(),P,he,Ne;for(l=l.toUpperCase(),g=0,E=I.length;g<E;++g)if(P=I[g].name.toUpperCase(),he=I[g].abbr.toUpperCase(),Ne=I[g].narrow.toUpperCase(),f)switch(h){case"N":case"NN":case"NNN":if(he===l)return I[g];break;case"NNNN":if(P===l)return I[g];break;case"NNNNN":if(Ne===l)return I[g];break}else if([P,he,Ne].indexOf(l)>=0)return I[g]}function b4(l,h){var f=l.since<=l.until?1:-1;return h===void 0?r(l.since).year():r(l.since).year()+(h-l.offset)*f}function P4(){var l,h,f,g=this.localeData().eras();for(l=0,h=g.length;l<h;++l)if(f=this.clone().startOf("day").valueOf(),g[l].since<=f&&f<=g[l].until||g[l].until<=f&&f<=g[l].since)return g[l].name;return""}function M4(){var l,h,f,g=this.localeData().eras();for(l=0,h=g.length;l<h;++l)if(f=this.clone().startOf("day").valueOf(),g[l].since<=f&&f<=g[l].until||g[l].until<=f&&f<=g[l].since)return g[l].narrow;return""}function L4(){var l,h,f,g=this.localeData().eras();for(l=0,h=g.length;l<h;++l)if(f=this.clone().startOf("day").valueOf(),g[l].since<=f&&f<=g[l].until||g[l].until<=f&&f<=g[l].since)return g[l].abbr;return""}function $4(){var l,h,f,g,E=this.localeData().eras();for(l=0,h=E.length;l<h;++l)if(f=E[l].since<=E[l].until?1:-1,g=this.clone().startOf("day").valueOf(),E[l].since<=g&&g<=E[l].until||E[l].until<=g&&g<=E[l].since)return(this.year()-r(E[l].since).year())*f+E[l].offset;return this.year()}function F4(l){return a(this,"_erasNameRegex")||Hg.call(this),l?this._erasNameRegex:this._erasRegex}function U4(l){return a(this,"_erasAbbrRegex")||Hg.call(this),l?this._erasAbbrRegex:this._erasRegex}function V4(l){return a(this,"_erasNarrowRegex")||Hg.call(this),l?this._erasNarrowRegex:this._erasRegex}function Wg(l,h){return h.erasAbbrRegex(l)}function B4(l,h){return h.erasNameRegex(l)}function z4(l,h){return h.erasNarrowRegex(l)}function j4(l,h){return h._eraYearOrdinalRegex||pa}function Hg(){var l=[],h=[],f=[],g=[],E,I,P=this.eras();for(E=0,I=P.length;E<I;++E)h.push(Wn(P[E].name)),l.push(Wn(P[E].abbr)),f.push(Wn(P[E].narrow)),g.push(Wn(P[E].name)),g.push(Wn(P[E].abbr)),g.push(Wn(P[E].narrow));this._erasRegex=new RegExp("^("+g.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+h.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+l.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+f.join("|")+")","i")}B(0,["gg",2],0,function(){return this.weekYear()%100}),B(0,["GG",2],0,function(){return this.isoWeekYear()%100});function rd(l,h){B(0,[l,l.length],0,h)}rd("gggg","weekYear"),rd("ggggg","weekYear"),rd("GGGG","isoWeekYear"),rd("GGGGG","isoWeekYear"),Dt("weekYear","gg"),Dt("isoWeekYear","GG"),Oe("weekYear",1),Oe("isoWeekYear",1),ie("G",Wh),ie("g",Wh),ie("GG",nt,Yn),ie("gg",nt,Yn),ie("GGGG",Og,Ng),ie("gggg",Og,Ng),ie("GGGGG",Yh,zh),ie("ggggg",Yh,zh),Zl(["gggg","ggggg","GGGG","GGGGG"],function(l,h,f,g){h[g.substr(0,2)]=Re(l)}),Zl(["gg","GG"],function(l,h,f,g){h[g]=r.parseTwoDigitYear(l)});function Y4(l){return CE.call(this,l,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function W4(l){return CE.call(this,l,this.isoWeek(),this.isoWeekday(),1,4)}function H4(){return wi(this.year(),1,4)}function G4(){return wi(this.isoWeekYear(),1,4)}function q4(){var l=this.localeData()._week;return wi(this.year(),l.dow,l.doy)}function K4(){var l=this.localeData()._week;return wi(this.weekYear(),l.dow,l.doy)}function CE(l,h,f,g,E){var I;return l==null?nu(this,g,E).year:(I=wi(l,g,E),h>I&&(h=I),Q4.call(this,l,h,f,g,E))}function Q4(l,h,f,g,E){var I=eE(l,h,f,g,E),P=tu(I.year,0,I.dayOfYear);return this.year(P.getUTCFullYear()),this.month(P.getUTCMonth()),this.date(P.getUTCDate()),this}B("Q",0,"Qo","quarter"),Dt("quarter","Q"),Oe("quarter",7),ie("Q",YS),Xe("Q",function(l,h){h[yi]=(Re(l)-1)*3});function X4(l){return l==null?Math.ceil((this.month()+1)/3):this.month((l-1)*3+this.month()%3)}B("D",["DD",2],"Do","date"),Dt("date","D"),Oe("date",9),ie("D",nt),ie("DD",nt,Yn),ie("Do",function(l,h){return l?h._dayOfMonthOrdinalParse||h._ordinalParse:h._dayOfMonthOrdinalParseLenient}),Xe(["D","DD"],jr),Xe("Do",function(l,h){h[jr]=Re(l.match(nt)[0])});var kE=fa("Date",!0);B("DDD",["DDDD",3],"DDDo","dayOfYear"),Dt("dayOfYear","DDD"),Oe("dayOfYear",4),ie("DDD",jh),ie("DDDD",WS),Xe(["DDD","DDDD"],function(l,h,f){f._dayOfYear=Re(l)});function J4(l){var h=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return l==null?h:this.add(l-h,"d")}B("m",["mm",2],0,"minute"),Dt("minute","m"),Oe("minute",14),ie("m",nt),ie("mm",nt,Yn),Xe(["m","mm"],Cr);var Z4=fa("Minutes",!1);B("s",["ss",2],0,"second"),Dt("second","s"),Oe("second",15),ie("s",nt),ie("ss",nt,Yn),Xe(["s","ss"],vi);var eL=fa("Seconds",!1);B("S",0,0,function(){return~~(this.millisecond()/100)}),B(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),B(0,["SSS",3],0,"millisecond"),B(0,["SSSS",4],0,function(){return this.millisecond()*10}),B(0,["SSSSS",5],0,function(){return this.millisecond()*100}),B(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),B(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),B(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),B(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),Dt("millisecond","ms"),Oe("millisecond",16),ie("S",jh,YS),ie("SS",jh,Yn),ie("SSS",jh,WS);var cs,TE;for(cs="SSSS";cs.length<=9;cs+="S")ie(cs,pa);function tL(l,h){h[go]=Re(("0."+l)*1e3)}for(cs="S";cs.length<=9;cs+="S")Xe(cs,tL);TE=fa("Milliseconds",!1),B("z",0,0,"zoneAbbr"),B("zz",0,0,"zoneName");function nL(){return this._isUTC?"UTC":""}function rL(){return this._isUTC?"Coordinated Universal Time":""}var q=N.prototype;q.add=KM,q.calendar=n4,q.clone=r4,q.diff=c4,q.endOf=_4,q.format=p4,q.from=m4,q.fromNow=g4,q.to=y4,q.toNow=v4,q.get=sP,q.invalidAt=A4,q.isAfter=i4,q.isBefore=s4,q.isBetween=o4,q.isSame=a4,q.isSameOrAfter=l4,q.isSameOrBefore=u4,q.isValid=D4,q.lang=vE,q.locale=yE,q.localeData=wE,q.max=DM,q.min=xM,q.parsingFlags=I4,q.set=oP,q.startOf=w4,q.subtract=QM,q.toArray=k4,q.toObject=T4,q.toDate=C4,q.toISOString=d4,q.inspect=f4,typeof Symbol!="undefined"&&Symbol.for!=null&&(q[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),q.toJSON=x4,q.toString=h4,q.unix=E4,q.valueOf=S4,q.creationData=N4,q.eraName=P4,q.eraNarrow=M4,q.eraAbbr=L4,q.eraYear=$4,q.year=ZS,q.isLeapYear=TP,q.weekYear=Y4,q.isoWeekYear=W4,q.quarter=q.quarters=X4,q.month=XS,q.daysInMonth=EP,q.week=q.weeks=OP,q.isoWeek=q.isoWeeks=RP,q.weeksInYear=q4,q.weeksInWeekYear=K4,q.isoWeeksInYear=H4,q.isoWeeksInISOWeekYear=G4,q.date=kE,q.day=q.days=WP,q.weekday=HP,q.isoWeekday=GP,q.dayOfYear=J4,q.hour=q.hours=eM,q.minute=q.minutes=Z4,q.second=q.seconds=eL,q.millisecond=q.milliseconds=TE,q.utcOffset=LM,q.utc=FM,q.local=UM,q.parseZone=VM,q.hasAlignedHourOffset=BM,q.isDST=zM,q.isLocal=YM,q.isUtcOffset=WM,q.isUtc=dE,q.isUTC=dE,q.zoneAbbr=nL,q.zoneName=rL,q.dates=L("dates accessor is deprecated. Use date instead.",kE),q.months=L("months accessor is deprecated. Use month instead",XS),q.years=L("years accessor is deprecated. Use year instead",ZS),q.zone=L("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",$M),q.isDSTShifted=L("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",jM);function iL(l){return rt(l*1e3)}function sL(){return rt.apply(null,arguments).parseZone()}function xE(l){return l}var ze=xe.prototype;ze.calendar=z,ze.longDateFormat=Ve,ze.invalidDate=te,ze.ordinal=ut,ze.preparse=xE,ze.postformat=xE,ze.relativeTime=Ft,ze.pastFuture=mo,ze.set=ue,ze.eras=O4,ze.erasParse=R4,ze.erasConvertYear=b4,ze.erasAbbrRegex=U4,ze.erasNameRegex=F4,ze.erasNarrowRegex=V4,ze.months=vP,ze.monthsShort=wP,ze.monthsParse=SP,ze.monthsRegex=kP,ze.monthsShortRegex=CP,ze.week=DP,ze.firstDayOfYear=NP,ze.firstDayOfWeek=AP,ze.weekdays=VP,ze.weekdaysMin=zP,ze.weekdaysShort=BP,ze.weekdaysParse=YP,ze.weekdaysRegex=qP,ze.weekdaysShortRegex=KP,ze.weekdaysMinRegex=QP,ze.isPM=JP,ze.meridiem=tM;function id(l,h,f,g){var E=_i(),I=w().set(g,h);return E[f](I,l)}function DE(l,h,f){if(d(l)&&(h=l,l=void 0),l=l||"",h!=null)return id(l,h,f,"month");var g,E=[];for(g=0;g<12;g++)E[g]=id(l,g,f,"month");return E}function Gg(l,h,f,g){typeof l=="boolean"?(d(h)&&(f=h,h=void 0),h=h||""):(h=l,f=h,l=!1,d(h)&&(f=h,h=void 0),h=h||"");var E=_i(),I=l?E._week.dow:0,P,he=[];if(f!=null)return id(h,(f+I)%7,g,"day");for(P=0;P<7;P++)he[P]=id(h,(P+I)%7,g,"day");return he}function oL(l,h){return DE(l,h,"months")}function aL(l,h){return DE(l,h,"monthsShort")}function lL(l,h,f){return Gg(l,h,f,"weekdays")}function uL(l,h,f){return Gg(l,h,f,"weekdaysShort")}function cL(l,h,f){return Gg(l,h,f,"weekdaysMin")}us("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(l){var h=l%10,f=Re(l%100/10)===1?"th":h===1?"st":h===2?"nd":h===3?"rd":"th";return l+f}}),r.lang=L("moment.lang is deprecated. Use moment.locale instead.",us),r.langData=L("moment.langData is deprecated. Use moment.localeData instead.",_i);var Si=Math.abs;function hL(){var l=this._data;return this._milliseconds=Si(this._milliseconds),this._days=Si(this._days),this._months=Si(this._months),l.milliseconds=Si(l.milliseconds),l.seconds=Si(l.seconds),l.minutes=Si(l.minutes),l.hours=Si(l.hours),l.months=Si(l.months),l.years=Si(l.years),this}function IE(l,h,f,g){var E=kr(h,f);return l._milliseconds+=g*E._milliseconds,l._days+=g*E._days,l._months+=g*E._months,l._bubble()}function dL(l,h){return IE(this,l,h,1)}function fL(l,h){return IE(this,l,h,-1)}function AE(l){return l<0?Math.floor(l):Math.ceil(l)}function pL(){var l=this._milliseconds,h=this._days,f=this._months,g=this._data,E,I,P,he,Ne;return l>=0&&h>=0&&f>=0||l<=0&&h<=0&&f<=0||(l+=AE(qg(f)+h)*864e5,h=0,f=0),g.milliseconds=l%1e3,E=It(l/1e3),g.seconds=E%60,I=It(E/60),g.minutes=I%60,P=It(I/60),g.hours=P%24,h+=It(P/24),Ne=It(NE(h)),f+=Ne,h-=AE(qg(Ne)),he=It(f/12),f%=12,g.days=h,g.months=f,g.years=he,this}function NE(l){return l*4800/146097}function qg(l){return l*146097/4800}function mL(l){if(!this.isValid())return NaN;var h,f,g=this._milliseconds;if(l=Wt(l),l==="month"||l==="quarter"||l==="year")switch(h=this._days+g/864e5,f=this._months+NE(h),l){case"month":return f;case"quarter":return f/3;case"year":return f/12}else switch(h=this._days+Math.round(qg(this._months)),l){case"week":return h/7+g/6048e5;case"day":return h+g/864e5;case"hour":return h*24+g/36e5;case"minute":return h*1440+g/6e4;case"second":return h*86400+g/1e3;case"millisecond":return Math.floor(h*864e5)+g;default:throw new Error("Unknown unit "+l)}}function gL(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+Re(this._months/12)*31536e6:NaN}function Ei(l){return function(){return this.as(l)}}var yL=Ei("ms"),vL=Ei("s"),wL=Ei("m"),_L=Ei("h"),SL=Ei("d"),EL=Ei("w"),CL=Ei("M"),kL=Ei("Q"),TL=Ei("y");function xL(){return kr(this)}function DL(l){return l=Wt(l),this.isValid()?this[l+"s"]():NaN}function vo(l){return function(){return this.isValid()?this._data[l]:NaN}}var IL=vo("milliseconds"),AL=vo("seconds"),NL=vo("minutes"),OL=vo("hours"),RL=vo("days"),bL=vo("months"),PL=vo("years");function ML(){return It(this.days()/7)}var Ci=Math.round,va={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function LL(l,h,f,g,E){return E.relativeTime(h||1,!!f,l,g)}function $L(l,h,f,g){var E=kr(l).abs(),I=Ci(E.as("s")),P=Ci(E.as("m")),he=Ci(E.as("h")),Ne=Ci(E.as("d")),Je=Ci(E.as("M")),Dn=Ci(E.as("w")),ki=Ci(E.as("y")),hs=I<=f.ss&&["s",I]||I<f.s&&["ss",I]||P<=1&&["m"]||P<f.m&&["mm",P]||he<=1&&["h"]||he<f.h&&["hh",he]||Ne<=1&&["d"]||Ne<f.d&&["dd",Ne];return f.w!=null&&(hs=hs||Dn<=1&&["w"]||Dn<f.w&&["ww",Dn]),hs=hs||Je<=1&&["M"]||Je<f.M&&["MM",Je]||ki<=1&&["y"]||["yy",ki],hs[2]=h,hs[3]=+l>0,hs[4]=g,LL.apply(null,hs)}function FL(l){return l===void 0?Ci:typeof l=="function"?(Ci=l,!0):!1}function UL(l,h){return va[l]===void 0?!1:h===void 0?va[l]:(va[l]=h,l==="s"&&(va.ss=h-1),!0)}function VL(l,h){if(!this.isValid())return this.localeData().invalidDate();var f=!1,g=va,E,I;return typeof l=="object"&&(h=l,l=!1),typeof l=="boolean"&&(f=l),typeof h=="object"&&(g=Object.assign({},va,h),h.s!=null&&h.ss==null&&(g.ss=h.s-1)),E=this.localeData(),I=$L(this,!f,g,E),f&&(I=E.pastFuture(+this,I)),E.postformat(I)}var Kg=Math.abs;function wa(l){return(l>0)-(l<0)||+l}function sd(){if(!this.isValid())return this.localeData().invalidDate();var l=Kg(this._milliseconds)/1e3,h=Kg(this._days),f=Kg(this._months),g,E,I,P,he=this.asSeconds(),Ne,Je,Dn,ki;return he?(g=It(l/60),E=It(g/60),l%=60,g%=60,I=It(f/12),f%=12,P=l?l.toFixed(3).replace(/\.?0+$/,""):"",Ne=he<0?"-":"",Je=wa(this._months)!==wa(he)?"-":"",Dn=wa(this._days)!==wa(he)?"-":"",ki=wa(this._milliseconds)!==wa(he)?"-":"",Ne+"P"+(I?Je+I+"Y":"")+(f?Je+f+"M":"")+(h?Dn+h+"D":"")+(E||g||l?"T":"")+(E?ki+E+"H":"")+(g?ki+g+"M":"")+(l?ki+P+"S":"")):"P0D"}var $e=Jh.prototype;$e.isValid=RM,$e.abs=hL,$e.add=dL,$e.subtract=fL,$e.as=mL,$e.asMilliseconds=yL,$e.asSeconds=vL,$e.asMinutes=wL,$e.asHours=_L,$e.asDays=SL,$e.asWeeks=EL,$e.asMonths=CL,$e.asQuarters=kL,$e.asYears=TL,$e.valueOf=gL,$e._bubble=pL,$e.clone=xL,$e.get=DL,$e.milliseconds=IL,$e.seconds=AL,$e.minutes=NL,$e.hours=OL,$e.days=RL,$e.weeks=ML,$e.months=bL,$e.years=PL,$e.humanize=VL,$e.toISOString=sd,$e.toString=sd,$e.toJSON=sd,$e.locale=yE,$e.localeData=wE,$e.toIsoString=L("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",sd),$e.lang=vE,B("X",0,0,"unix"),B("x",0,0,"valueOf"),ie("x",Wh),ie("X",lP),Xe("X",function(l,h,f){f._d=new Date(parseFloat(l)*1e3)}),Xe("x",function(l,h,f){f._d=new Date(Re(l))});//! moment.js
return r.version="2.29.4",i(rt),r.fn=q,r.min=IM,r.max=AM,r.now=NM,r.utc=w,r.unix=iL,r.months=oL,r.isDate=p,r.locale=us,r.invalid=C,r.duration=kr,r.isMoment=O,r.weekdays=lL,r.parseZone=sL,r.localeData=_i,r.isDuration=Zh,r.monthsShort=aL,r.weekdaysMin=cL,r.defineLocale=Lg,r.updateLocale=sM,r.locales=oM,r.weekdaysShort=uL,r.normalizeUnits=Wt,r.relativeTimeRounding=FL,r.relativeTimeThreshold=UL,r.calendarFormat=t4,r.prototype=q,r.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},r})})($S);var ul=$S.exports;(function(e,t){(function(n,r){r(typeof kx=="function"?$S.exports:n.moment)})(Cx,function(n){//! moment.js locale configuration
var r=n.defineLocale("ko",{months:"1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),monthsShort:"1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),weekdays:"\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split("_"),weekdaysShort:"\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),weekdaysMin:"\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY\uB144 MMMM D\uC77C",LLL:"YYYY\uB144 MMMM D\uC77C A h:mm",LLLL:"YYYY\uB144 MMMM D\uC77C dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY\uB144 MMMM D\uC77C",lll:"YYYY\uB144 MMMM D\uC77C A h:mm",llll:"YYYY\uB144 MMMM D\uC77C dddd A h:mm"},calendar:{sameDay:"\uC624\uB298 LT",nextDay:"\uB0B4\uC77C LT",nextWeek:"dddd LT",lastDay:"\uC5B4\uC81C LT",lastWeek:"\uC9C0\uB09C\uC8FC dddd LT",sameElse:"L"},relativeTime:{future:"%s \uD6C4",past:"%s \uC804",s:"\uBA87 \uCD08",ss:"%d\uCD08",m:"1\uBD84",mm:"%d\uBD84",h:"\uD55C \uC2DC\uAC04",hh:"%d\uC2DC\uAC04",d:"\uD558\uB8E8",dd:"%d\uC77C",M:"\uD55C \uB2EC",MM:"%d\uB2EC",y:"\uC77C \uB144",yy:"%d\uB144"},dayOfMonthOrdinalParse:/\d{1,2}(일|월|주)/,ordinal:function(i,s){switch(s){case"d":case"D":case"DDD":return i+"\uC77C";case"M":return i+"\uC6D4";case"w":case"W":return i+"\uC8FC";default:return i}},meridiemParse:/오전|오후/,isPM:function(i){return i==="\uC624\uD6C4"},meridiem:function(i,s,o){return i<12?"\uC624\uC804":"\uC624\uD6C4"}});return r})})();const YQ=fi(Dh,"board_photos"),WQ=async e=>{const t=fi(YQ,e.name);return await eg(t,e),await tg(t)},Bb=jn("boards/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("boardData is undefined");const{brand:n,height:r,weight:i,title:s,desc:o,photo:a,nickname:u}=e,c=await WQ(a);return{id:(await xh(di(_r,"boards"),{brand:n,height:r,weight:i,title:s,desc:o,photo:c,nickname:u,createdAt:Date.now()})).id,brand:n,height:r,weight:i,title:s,desc:o,photo:c,nickname:u,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),xg=jn("boards/get",async()=>(ne.locale("ko"),(await Zm(di(_r,"boards"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=ne(),u=ne(i);return a.diff(u,"days")<=1?o=u.fromNow():o=u.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}}))),HQ=lo({name:"board",initialState:{boards:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(Bb.fulfilled,(t,n)=>{const r=n.payload;return{...t,boards:[...t.boards,r],postCount:t.postCount+1}}).addCase(xg.fulfilled,(t,n)=>({...t,boards:n.payload,postCount:n.payload.length}))}});var GQ=HQ.reducer;const qQ=nh`
  width: 100%;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  padding: 16px;
  cursor: pointer;
`,KQ=nh`
  width: 100%;
  padding: 6px 12px;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  cursor: pointer;
`,QQ=nh`
  width: 100%;
  display: flex;
  flex-direction: column;
`,an=gt.section`
  width: 100%;
  padding-top: 60px;
  min-height: 100vh;
  background: #ffffff;

  @media screen and (max-width: 768px) {
    /* padding-left: 16px;
    padding-right: 16px; */
  }
`,Dg=gt.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 40px;

  .title {
    h1 {
      font-size: clamp(16px, 1.5vw, 18px);
    }
    span {
      font-size: clamp(12px, 1vw , 13px);
    }
  }

  .contents {
    margin-top: 20px;

    .no-photos,
    .no-boards {
      padding-left: 20px;
    }
  }
`,XQ=gt.div`
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
`,zb=gt.div`
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
`,Vh=gt.div`
  margin: 0 auto;
  max-width: 564px;
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
      font-size: clamp(16px, 2.5vw, 22px);
    }
  }

  form {
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .nickname {
      font-size: clamp(16px, 2vw, 20px);
      font-weight: 600;
      min-height: 36px;
      line-height: 36px;

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

    input {
      height: 46px;
      border-bottom: 1px solid rgb(153, 153, 153);
      padding: 12px 16px;
      margin-bottom: 6px;
      transition: all 0.15s ease-in-out;
      font-size: clamp(12.5px, 1.5vw, 15px);

      &::placeholder {
        color: #908787;
      }

      &:focus {
        border-bottom: 1.5px solid #08f;
      }
    }

    textarea {
      min-height: 120px;
      padding: 6px 16px;
      font-size: clamp(12.5px, 1.5vw, 15px);
      resize: none;
    }

    button[type='submit'] {
      background: #181818;
      height: 46px;
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
      gap: 12px;

      label {
        display: flex;
        align-items: center;
        gap: 6px;

        input[type='checkbox'] {
          width: 20px;
          height: 20px;
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
`,JQ=gt.div`
  width: 100%;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.86);
  background: #f8d7da;
  text-align: center;

  p {
    padding: 12px;
    font-size: clamp(14px, 2vw, 15px);
  }
`;gt.form`
  ${QQ}
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1 1 50%;

  h1 {
    font-size: clamp(18px, 2.5vw, 20px);
    margin: 12px 0;
  }
`;const wu=gt.input`
  ${qQ}
`,hv=gt.button`
  ${KQ}
`,jb=gt.div`
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
 */function ZQ(e){e.length=0}function FS(e,t,n){return Array.prototype.slice.call(e,t,n)}function Ig(e){return e.bind.apply(e,[null].concat(FS(arguments,1)))}function fx(e){return requestAnimationFrame(e)}function US(e,t){return typeof t===e}var Yb=Array.isArray;Ig(US,"function");Ig(US,"string");Ig(US,"undefined");function Wb(e){return Yb(e)?e:[e]}function px(e,t){Wb(e).forEach(t)}var eX=Object.keys;function tX(e,t,n){if(e){var r=eX(e);r=n?r.reverse():r;for(var i=0;i<r.length;i++){var s=r[i];if(s!=="__proto__"&&t(e[s],s)===!1)break}}return e}function nX(e){return FS(arguments,1).forEach(function(t){tX(t,function(n,r){e[r]=t[r]})}),e}var rX=Math.min;function iX(){var e=[];function t(o,a,u,c){i(o,a,function(d,p,m){var v="addEventListener"in d,w=v?d.removeEventListener.bind(d,p,u,c):d.removeListener.bind(d,u);v?d.addEventListener(p,u,c):d.addListener(u),e.push([d,p,m,u,w])})}function n(o,a,u){i(o,a,function(c,d,p){e=e.filter(function(m){return m[0]===c&&m[1]===d&&m[2]===p&&(!u||m[3]===u)?(m[4](),!1):!0})})}function r(o,a,u){var c,d=!0;return typeof CustomEvent=="function"?c=new CustomEvent(a,{bubbles:d,detail:u}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(a,d,!1,u)),o.dispatchEvent(c),c}function i(o,a,u){px(o,function(c){c&&px(a,function(d){d.split(" ").forEach(function(p){var m=p.split(".");u(c,m[0],m[1])})})})}function s(){e.forEach(function(o){o[4]()}),ZQ(e)}return{bind:t,unbind:n,dispatch:r,destroy:s}}var mx="move",gx="moved",sX="updated",yx="drag",oX="dragged",vx="scroll",wx="scrolled",aX="destroy";function lX(e){var t=e?e.event.bus:document.createDocumentFragment(),n=iX();function r(s,o){n.bind(t,Wb(s).join(" "),function(a){o.apply(o,Yb(a.detail)?a.detail:[])})}function i(s){n.dispatch(t,s,FS(arguments,1))}return e&&e.event.on(aX,n.destroy),nX(n,{bus:t,on:r,off:Ig(n.unbind,t),emit:i})}function Hb(e,t,n,r){var i=Date.now,s,o=0,a,u=!0,c=0;function d(){if(!u){if(o=e?rX((i()-s)/e,1):1,n&&n(o),o>=1&&(t(),s=i(),r&&++c>=r))return m();fx(d)}}function p(S){!S&&w(),s=i()-(S?o*e:0),u=!1,fx(d)}function m(){u=!0}function v(){s=i(),o=0,n&&n(o)}function w(){a&&cancelAnimationFrame(a),o=0,a=0,u=!0}function _(S){e=S}function k(){return u}return{start:p,rewind:v,pause:m,cancel:w,set:_,isPaused:k}}function uX(e,t){var n;function r(){n||(n=Hb(t||0,function(){e(),n=null},null,1),n.start())}return r}var cX="is-active",hX="slide",dX="fade";function Gb(e,t,n){return Array.prototype.slice.call(e,t,n)}function VS(e){return e.bind(null,...Gb(arguments,1))}function Ag(e,t){return typeof t===e}function v1(e){return!qb(e)&&Ag("object",e)}const fX=Array.isArray;VS(Ag,"function");VS(Ag,"string");const pX=VS(Ag,"undefined");function qb(e){return e===null}function mX(e){return fX(e)?e:[e]}function Pp(e,t){mX(e).forEach(t)}function gX(e,t,n){e&&Pp(t,r=>{r&&e.classList[n?"add":"remove"](r)})}const yX=Object.keys;function Kb(e,t,n){if(e){let r=yX(e);r=n?r.reverse():r;for(let i=0;i<r.length;i++){const s=r[i];if(s!=="__proto__"&&t(e[s],s)===!1)break}}return e}function _x(e){return Gb(arguments,1).forEach(t=>{Kb(t,(n,r)=>{e[r]=t[r]})}),e}function vX(e,t){Pp(e,n=>{Pp(t,r=>{n&&n.removeAttribute(r)})})}function Qb(e,t,n){v1(t)?Kb(t,(r,i)=>{Qb(e,i,r)}):Pp(e,r=>{qb(n)||n===""?vX(r,t):r.setAttribute(t,String(n))})}const{min:Sx,max:Ex,floor:xJ,ceil:DJ,abs:IJ}=Math;function wX(e,t,n){const r=Sx(t,n),i=Ex(t,n);return Sx(Ex(r,e),i)}const _X={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},SX={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function Xb(e,t,n){const{on:r,off:i,bind:s,unbind:o}=lX(e),{translate:a,getPosition:u,toIndex:c,getLimit:d}=t.Move,{setIndex:p,getIndex:m}=t.Controller,{orient:v}=t.Direction,{toggle:w}=t.Elements,{Live:_}=t,{root:k}=e,S=uX(t.Arrows.update,500);let y={},C,x,A,R,N,O;function Z(){const{autoScroll:V}=n;y=_x({},_X,v1(V)?V:{})}function L(){e.is(dX)||!C&&n.autoScroll!==!1&&(C=Hb(0,M),J(),ue())}function j(){C&&(C.cancel(),C=null,O=void 0,i([mx,yx,vx,gx,wx]),o(k,"mouseenter mouseleave focusin focusout"),o(w,"click"))}function J(){y.pauseOnHover&&s(k,"mouseenter mouseleave",V=>{A=V.type==="mouseenter",ge()}),y.pauseOnFocus&&s(k,"focusin focusout",V=>{R=V.type==="focusin",ge()}),y.useToggleButton&&s(w,"click",()=>{x?oe():xe()}),r(sX,X),r([mx,yx,vx],()=>{N=!0,xe(!1)}),r([gx,oX,wx],()=>{N=!1,ge()})}function X(){const{autoScroll:V}=n;V!==!1?(y=_x({},y,v1(V)?V:{}),L()):j(),C&&!pX(O)&&a(O)}function ue(){y.autoStart&&(document.readyState==="complete"?oe():s(window,"load",oe))}function oe(){F()&&(C.start(!0),_.disable(!0),R=A=x=!1,ee())}function xe(V=!0){x||(x=V,ee(),F()||(C.pause(),_.disable(!1)))}function ge(){x||(A||R||N?xe(!1):oe())}function M(){const V=u(),Y=z(V);V!==Y?(a(Y),b(O=u())):(xe(!1),y.rewind&&e.go(y.speed>0?0:t.Controller.getEnd())),S()}function z(V){const Y=y.speed||1;return V+=v(Y),e.is(hX)&&(V=wX(V,d(!1),d(!0))),V}function b(V){const{length:Y}=e,B=(c(V)+Y)%Y;B!==m()&&(p(B),t.Slides.update(),t.Pagination.update(),n.lazyLoad==="nearby"&&t.LazyLoad.check())}function ee(){if(w){const V=x?"startScroll":"pauseScroll";gX(w,cX,!x),Qb(w,"aria-label",n.i18n[V]||SX[V])}}function F(){return!C||C.isPaused()}return{setup:Z,mount:L,destroy:j,play:oe,pause:xe,isPaused:F}}const EX=()=>{const e=Rt(c=>c.board.boards),[t,n]=$.exports.useState(e.length),[r,i]=$.exports.useState("16px"),[s,o]=$.exports.useState("left"),a=Mn(),u=$.exports.useCallback(()=>{window.innerWidth>=1280?(n(5),o("left")):window.innerWidth>=1024?(n(4),i("14px"),o("left")):window.innerWidth>=768?(n(3),i("12px"),o("center")):(n(2),i("10px"),o("center"))},[]);return $.exports.useEffect(()=>(a(xg()),u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)),[a,u]),T(an,{children:U(Dg,{children:[U("div",{className:"title",children:[T("h1",{children:"OOTD"}),T("span",{children:"\uCD5C\uC2E0 OOTD \uB9AC\uC2A4\uD2B8"})]}),T("div",{className:"contents",children:e.length>0?T(GR,{options:{type:"loop",perPage:t,gap:r,focus:s,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!1,pauseOnFocus:!1,rewind:!1,speed:2}},extensions:{AutoScroll:Xb},children:e.slice(0,10).map(c=>T(qR,{children:U(zb,{children:[T("div",{className:"top",children:T(Gn,{to:`board/details/${c.id}`,children:T("img",{src:c.photo,alt:"board"})})}),U("div",{className:"bottom",children:[T("p",{className:"board_nickname",children:c.nickname}),T("p",{className:"board_title",children:c.title}),T("p",{className:"board_desc",children:c.desc.length>60?c.desc.slice(0,50)+"...":c.desc})]})]})},c.id))}):T("div",{className:"no-boards",children:"No Boards available && Loading.."})})]})})},CX=fi(Dh,"questions_photos"),kX=async e=>{const t=fi(CX,e.name);return await eg(t,e),await tg(t)},Jb=jn("question/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("qnaData is Not Fount");const{category:n,title:r,desc:i,photo:s,nickname:o}=e,a=await kX(s);return{id:(await xh(di(_r,"questions"),{category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()})).id,category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),BS=jn("question/get",async()=>(ne.locale("ko"),(await Zm(di(_r,"questions"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=ne(),u=ne(i);return a.diff(u,"days")<=1?o=u.fromNow():o=u.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}}))),TX=lo({name:"qna",initialState:{questions:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(Jb.fulfilled,(t,n)=>{const r=n.payload;return{...t,questions:[...t.questions,r],postCount:t.postCount+1}}).addCase(BS.fulfilled,(t,n)=>({...t,questions:n.payload,postCount:n.payload.length}))}});var xX=TX.reducer;const DX=()=>{const e=Rt(n=>n.qna.questions),t=Mn();return $.exports.useEffect(()=>{t(BS())},[t]),T(an,{children:U(Dg,{children:[U("div",{className:"title",children:[T("h1",{children:"QnA"}),T("span",{children:"\uCD5C\uC2E0 QnA \uB9AC\uC2A4\uD2B8"})]}),e.length>0?T("div",{className:"qna_card"}):T("div",{className:"no-qna",children:"No Questions available && Loading.. "})]})})},IX=fi(Dh,"photos_png"),AX=async e=>{const t=fi(IX,e.name);return await eg(t,e),await tg(t)},Zb=jn("photos/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("photoData is Not Fount");const{category:n,title:r,desc:i,photo:s,nickname:o}=e,a=await AX(s);return{id:(await xh(di(_r,"photos"),{category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()})).id,category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),zS=jn("photos/get",async()=>(ul.locale("ko"),(await Zm(di(_r,"photos"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=ul(),u=ul(i);return a.diff(u,"days")<=1?o=u.fromNow():o=u.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}}))),NX=lo({name:"photo",initialState:{photos:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(Zb.fulfilled,(t,n)=>{const r=n.payload;return{...t,photos:[...t.photos,r],postCount:t.postCount+1}}).addCase(zS.fulfilled,(t,n)=>({...t,photos:n.payload,postCount:n.payload.length}))}});var OX=NX.reducer;const RX=()=>{const e=Rt(p=>p.photo.photos),[t,n]=$.exports.useState([]),[r,i]=$.exports.useState(e.length),[s,o]=$.exports.useState("16px"),[a,u]=$.exports.useState("left"),c=Mn(),d=$.exports.useCallback(()=>{window.innerWidth>=1280?(i(5),u("left")):window.innerWidth>=1024?(i(4),o("14px"),u("left")):window.innerWidth>=768?(i(3),o("12px"),u("center")):(i(2),o("10px"),u("center"))},[]);return $.exports.useEffect(()=>(c(zS()),d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)),[c,d]),$.exports.useEffect(()=>{const p=[...e].sort((m,v)=>v.createdAt-m.createdAt);n(p)},[e]),T(an,{children:U(Dg,{children:[U("div",{className:"title",children:[T("h1",{children:"Photos"}),T("span",{children:"\uCD5C\uC2E0 photo \uB9AC\uC2A4\uD2B8"})]}),T("div",{className:"contents",children:t.length>0?T(GR,{options:{type:"loop",perPage:r,gap:s,focus:a,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!1,pauseOnFocus:!1,rewind:!1,speed:1.5}},extensions:{AutoScroll:Xb},children:t.slice(0,10).map(p=>T(qR,{children:U(zb,{children:[T("div",{className:"top",children:T(Gn,{to:`photo/details/${p.id}`,children:T("img",{src:p.photo,alt:"photo"})})}),U("div",{className:"bottom",children:[T("p",{className:"photo_category",children:`<${p.category}>`}),T("p",{className:"photo_nickname",children:p.nickname}),T("p",{className:"photo_title",children:p.title}),T("p",{className:"photo_desc",children:p.desc.length>60?p.desc.slice(0,50)+"...":p.desc})]})]})},p.id))}):T("div",{className:"no-photos",children:"No photos available && Loading.."})})]})})};gt.main`
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
`;const bX=fi(Dh,"todays_photos"),PX=async e=>{const t=fi(bX,e.name);return await uploadBytes(t,e),await getDownloadURL(t)},MX=jn("todays/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("todaysData Not Found..");const{title:n,desc:r,type:i,photo:s}=e,o=await PX(s);return{id:(await xh(di(db,"todays"),{title:n,desc:r,type:i,photo:o,nickname,createdAt:Data.now()})).id,title:n,desc:r,type:i,photo:o,nickname,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),eP=jn("todays/get",async()=>(moment.locale("ko"),(await getDocs(di(db,"todays"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=moment(),u=moment(i);return a.diff(u,"days")<=1?o=u.fromNow():o=u.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}}))),LX=lo({name:"today",initialState:{todays:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(MX.fulfilled,(t,n)=>{const r=n.payload;return{...t,todays:[...t.photos,r],postCount:t.postCount+1}}).addCase(eP.fulfilled,(t,n)=>({...t,todays:n.payload,postCount:n.payload.length}))}});var $X=LX.reducer;const FX=()=>{const e=Rt(n=>n.today.todays),t=Mn();return $.exports.useEffect(()=>{t(eP())},[t]),T(an,{children:U(Dg,{children:[U("div",{className:"title",children:[T("h1",{children:"Today Story"}),T("span",{children:"\uCD5C\uC2E0 \uC77C\uC0C1\uC774\uC57C\uAE30 \uB9AC\uC2A4\uD2B8"})]}),e.length>0?T("div",{className:"qna_card"}):T("div",{className:"no-qna",children:"No TodayList available && Loading.. "})]})})},UX=()=>U(wc,{children:[T(EX,{}),T(FX,{}),T(RX,{}),T(DX,{})]}),VX=gt.div`
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
`,BX=()=>{const{nickname:e,email:t}=Rt(n=>n.login.user);return T(an,{children:T(VX,{children:e&&t?U("div",{className:"contents",children:[U("div",{className:"users",children:[U("div",{className:"user_detail",children:[T("div",{className:"user_thumb",children:T("img",{src:"",alt:""})}),T("div",{className:"user_info",children:U("div",{className:"info_box",children:[T("strong",{className:"name",children:e}),T("p",{className:"email",children:t}),T(Gn,{to:"/",children:"\uD504\uB85C\uD544 \uC218\uC815"})]})})]}),U("div",{className:"board_detail",children:[U(Gn,{to:"/",className:"board_item",children:[T("strong",{className:"info",children:"\uAC8C\uC2DC\uAE00"}),T("p",{className:"title",children:"2 (\uAC1C)"})]}),U(Gn,{to:"/",className:"board_item",children:[T("strong",{className:"info",children:"2100P"}),T("p",{className:"title",children:"\uD3EC\uC778\uD2B8"})]})]})]}),T("div",{className:"items"}),T("div",{className:"items"})]}):T("div",{children:"No Data"})})})},w1=jn("auth/signUp",async e=>{try{const{email:t,password:n,nickname:r}=e,s=(await G8(ta,t,n)).user;return await cY(kh(_r,"users",s.uid),{uid:s.uid,nickname:r,email:t}),{uid:s.uid,email:t,nickname:r}}catch(t){throw t}}),zX=lo({name:"auth",initialState:null,extraReducers:e=>{e.addCase(w1.fulfilled,(t,n)=>{const{uid:r,email:i,nickname:s}=n.payload;return{...t,uid:r,email:i,nickname:s}}),e.addCase(w1.rejected,(t,n)=>n.error.message)}});var jX=zX.reducer;function YX(e){return ss({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(e)}function WX(e){return ss({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(e)}const HX=({text:e})=>T(JQ,{children:T("p",{children:e})}),tP=({text:e,link:t})=>{const[n,r]=$.exports.useState({});$.exports.useState({});const[i,s]=$.exports.useState(!1),[o,a]=$.exports.useState(""),u=Mn(),c=Vr(),d=v=>{r({...n,[v.target.name]:v.target.value})};return U(XQ,{children:[U("div",{className:"left",children:[T("div",{className:"toggle",onClick:()=>c("/"),children:T(YX,{})}),U("div",{className:"textbox",children:[T("strong",{className:"title",children:"ModArt"}),T("span",{children:"< \uBAA8\uB4DC\uC544\uD2B8 />"})]})]}),U("div",{className:"right",children:[i&&T(HX,{text:o}),T("form",{onSubmit:async v=>{if(v.preventDefault(),Object.values(n).every(_=>_!=="")){if(e==="\uD68C\uC6D0\uAC00\uC785")try{await u(w1(n)).unwrap(),a("\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC131\uACF5\uD558\uC600\uC2B5\uB2C8\uB2E4."),s(!0),c("/account/login")}catch{a("\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."),s(!0),setTimeout(()=>{s(!1)},2e3)}else if(e==="\uB85C\uADF8\uC778")try{if(!await u(e1(n)).unwrap()){a("\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC720\uC800\uC785\uB2C8\uB2E4."),s(!0),setTimeout(()=>{s(!1)},2e3);return}c("/")}catch{a("\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),s(!0),setTimeout(()=>{s(!1)},2e3)}}},children:e==="\uD68C\uC6D0\uAC00\uC785"?U(wc,{children:[U("div",{className:"area",children:[T(wu,{type:"email",name:"email",onChange:d,autoComplete:"off"}),T("label",{htmlFor:"email",children:"Email"})]}),U("div",{className:"area",children:[T(wu,{type:"password",name:"password",onChange:d,autoComplete:"off"}),T("label",{htmlFor:"password",children:"Password"})]}),U("div",{className:"area",children:[T(wu,{type:"text",name:"nickname",onChange:d,autoComplete:"off"}),T("label",{htmlFor:"nickname",children:"\uB2C9\uB124\uC784"})]}),T(hv,{type:"submit",children:e})]}):U(wc,{children:[U("div",{className:"area",children:[T(wu,{type:"email",name:"email",onChange:d}),T("label",{htmlFor:"email",children:"email"})]}),U("div",{className:"area",children:[T(wu,{type:"password",name:"password",onChange:d}),T("label",{htmlFor:"password",children:"Password"})]}),T(hv,{type:"submit",children:e})]})}),T("div",{className:"socialLogin",children:U(hv,{className:"googleLogin",onClick:async()=>{try{await u(Z0()).unwrap(),a("\uAD6C\uAE00\uACC4\uC815 \uB85C\uADF8\uC778 \uB418\uC168\uC2B5\uB2C8\uB2E4."),c("/")}catch(v){a(v.message)}},children:[T("div",{className:"googleIcon",children:T(WX,{})}),T("p",{className:"googleText",children:"Sign In With Google"})]})}),T("div",{className:"signUp_link",children:T(Gn,{to:`/account/${t==="\uD68C\uC6D0\uAC00\uC785"?"signup":"login"}`,children:t})})]})]})},nP=gt.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 0 16px;
    }
`,GX=()=>T(nP,{children:T(tP,{text:"\uD68C\uC6D0\uAC00\uC785",link:"\uB85C\uADF8\uC778"})}),qX=()=>T(nP,{children:T(tP,{text:"\uB85C\uADF8\uC778",link:"\uD68C\uC6D0\uAC00\uC785"})});(()=>{var e={d:(s,o)=>{for(var a in o)e.o(o,a)&&!e.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:o[a]})},o:(s,o)=>Object.prototype.hasOwnProperty.call(s,o),r:s=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}},t={};function n(s,o){for(var a=0;a<o.length;a++){var u=o[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(s,u.key,u)}}e.r(t),e.d(t,{default:()=>i});var r=function(){function s(){(function(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")})(this,s)}var o,a;return o=s,a=[{key:"changeHeightWidth",value:function(u,c,d,p,m,v){return d>p&&(u=Math.round(u*p/d),d=p),u>c&&(d=Math.round(d*c/u),u=c),m&&d<m&&(u=Math.round(u*m/d),d=m),v&&u<v&&(d=Math.round(d*v/u),u=v),{height:u,width:d}}},{key:"resizeAndRotateImage",value:function(u,c,d,p,m){var v=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"jpeg",w=arguments.length>6&&arguments[6]!==void 0?arguments[6]:100,_=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,k=w/100,S=document.createElement("canvas"),y=u.width,C=u.height,x=this.changeHeightWidth(C,d,y,c,p,m);!_||_!==90&&_!==270?(S.width=x.width,S.height=x.height):(S.width=x.height,S.height=x.width),y=x.width,C=x.height;var A=S.getContext("2d");return A.fillStyle="rgba(0, 0, 0, 0)",A.fillRect(0,0,y,C),A.imageSmoothingEnabled&&A.imageSmoothingQuality&&(A.imageSmoothingQuality="high"),_&&(A.rotate(_*Math.PI/180),_===90?A.translate(0,-S.width):_===180?A.translate(-S.width,-S.height):_===270?A.translate(-S.height,0):_!==0&&_!==360||A.translate(0,0)),A.drawImage(u,0,0,y,C),S.toDataURL("image/".concat(v),k)}},{key:"b64toByteArrays",value:function(u,c){for(var d=atob(u.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),p=[],m=0;m<d.length;m+=512){for(var v=d.slice(m,m+512),w=new Array(v.length),_=0;_<v.length;_++)w[_]=v.charCodeAt(_);var k=new Uint8Array(w);p.push(k)}return p}},{key:"b64toBlob",value:function(u,c){var d=this.b64toByteArrays(u,c);return new Blob(d,{type:c,lastModified:new Date})}},{key:"b64toFile",value:function(u,c,d){var p=this.b64toByteArrays(u,d);return new File(p,c,{type:d,lastModified:new Date})}},{key:"createResizedImage",value:function(u,c,d,p,m,v,w){var _=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"base64",k=arguments.length>8&&arguments[8]!==void 0?arguments[8]:null,S=arguments.length>9&&arguments[9]!==void 0?arguments[9]:null,y=new FileReader;if(!u)throw Error("File Not Found!");if(u.type&&!u.type.includes("image"))throw Error("File Is NOT Image!");y.readAsDataURL(u),y.onload=function(){var C=new Image;C.src=y.result,C.onload=function(){var x=s.resizeAndRotateImage(C,c,d,k,S,p,m,v),A="image/".concat(p);switch(_){case"blob":var R=s.b64toBlob(x,A);w(R);break;case"base64":w(x);break;case"file":var N=u.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(p.toString()),O=s.b64toFile(x,N,A);w(O);break;default:w(x)}}},y.onerror=function(C){throw Error(C)}}}],a&&n(o,a),s}();const i={imageFileResizer:function(s,o,a,u,c,d,p,m,v,w){return r.createResizedImage(s,o,a,u,c,d,p,m,v,w)}}})();const KX=()=>{const e=Rt(c=>c.login.user),t=e==null?void 0:e.nickname,n=$.exports.useRef(),[r,i]=$.exports.useState({}),s=Mn(),o=Vr(),a=c=>{c.target.name==="photo"?i({...r,[c.target.name]:c.target.files[0]}):i({...r,[c.target.name]:c.target.value})};return $.exports.useEffect(()=>{n.current.focus()},[n]),T(an,{children:U(Vh,{children:[T("div",{className:"post_title",children:T("h1",{children:"<OOTD>"})}),U("form",{onSubmit:async c=>{c.preventDefault();try{const d={...r,nickname:t};await s(Bb(d)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),o(-1),console.log(r)}catch(d){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(d)}},encType:"multipart/form-data",children:[U("p",{className:"nickname",children:[T("span",{className:"author",children:"\uC791\uC131\uC790"}),t]}),T("input",{ref:n,type:"text",onChange:a,autoComplete:"off",name:"title",placeholder:"\uAE00\uC81C\uBAA9"}),T("input",{type:"text",onChange:a,autoComplete:"off",name:"brand",placeholder:"\uBE0C\uB79C\uB4DC\uBA85 ex) \uB098\uC774\uD0A4"}),T("input",{type:"text",onChange:a,autoComplete:"off",name:"height",placeholder:"\uD0A4"}),T("input",{type:"text",onChange:a,autoComplete:"off",name:"weight",placeholder:"\uBAB8\uBB34\uAC8C"}),T("textarea",{type:"text",name:"desc",onChange:a,placeholder:"contents.."}),U("label",{htmlFor:"photo",children:[T(ng,{}),T("input",{type:"file",name:"photo",onChange:a})]}),T("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},Vd=()=>(Xp(),T(an,{children:T(Vh,{children:T("form",{children:T("p",{className:"nickname"})})})})),QX=()=>{const{id:e}=Xp(),t=Rt(i=>i.board.boards),n=Mn(),r=t.find(i=>i.id===e);return $.exports.useEffect(()=>{n(xg())},[n]),$.exports.useEffect(()=>{const i=t.find(s=>s.id===e);console.log(i)},[t,e]),T(an,{children:T(jb,{children:r&&U(wc,{children:[T("div",{className:"snapImg",children:T("img",{src:r.photo,alt:r.nickname})}),U("div",{className:"snapInfo",children:[T("div",{className:"title",children:U("p",{children:["Information ",T("span",{children:"\uC2A4\uD0C0\uC77C \uC815\uBCF4"})]})}),U("li",{className:"tr",children:[T("span",{className:"th",children:"Nickname"}),T("span",{className:"td",children:r.nickname})]}),U("li",{className:"tr",children:[T("span",{className:"th",children:"Brand"}),T("span",{className:"td",children:r.brand})]}),U("li",{className:"tr",children:[T("span",{className:"th",children:"Title"}),T("span",{className:"td",children:r.title})]}),U("li",{className:"tr",children:[T("span",{className:"th",children:"Body"}),U("span",{className:"td",style:{marginRight:"6px"},children:["\uD0A4 ",r.height]}),U("span",{className:"td",children:["\uBAB8\uBB34\uAC8C ",r.weight]})]}),U("li",{className:"tr",children:[T("span",{className:"th",children:"Contents"}),T("span",{className:"td",children:r.desc})]}),U("li",{className:"tr",children:[T("span",{className:"th",children:"Like"}),T("span",{className:"td",children:T(cR,{})})]})]})]})})})},XX=gt.div`
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
`,JX=gt.div`
  width: 100%;
  background: #fefefe;

  .photo_list {
    max-width: 1280px;
    margin: 12px auto 0px auto;
    padding: 1px 3px 0 1px;
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
`,ZX=()=>{const e=Rt(u=>u.login.user),t=Rt(u=>u.photo.photos)||null,n=Mn(),r=Vr(),[i,s]=$.exports.useState([]),o=()=>e?r("/photo/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),a=u=>{r(`/photo/details/${u.id}`)};return $.exports.useEffect(()=>{n(zS())},[n]),$.exports.useEffect(()=>{const u=[...t].sort((c,d)=>d.createdAt-c.createdAt);s(u)},[t]),U(an,{children:[T(XX,{children:U("div",{className:"contents",children:[U("div",{className:"text",children:[T("p",{children:"Free PhotoZone"}),T("span",{children:"\uC790\uC2E0\uC758 \uC0AC\uC9C4\uC2E4\uB825\uC744 \uBF50\uB0B4\uC8FC\uC138\uC694!"}),T("button",{className:"link-btn",onClick:o,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),T("div",{className:"image",children:T(NW,{})})]})}),U(JX,{children:[T("div",{className:"filter"}),T("ul",{className:"photo_list",children:i.length>0?i.slice(0,10).map(u=>U("li",{className:"photo_card",children:[T("div",{className:"photo_img",onClick:()=>a(u),children:T("img",{src:u.photo,alt:u.title})}),U("div",{className:"items",children:[T("h3",{className:"photo_title",onClick:()=>a(u),children:u.title.length>30?u.title.subString(0,30)+"...":u.title}),U("div",{className:"item_contents",children:[T("span",{className:"item_category",children:u.category}),U("div",{className:"sub_items",children:[T("span",{className:"item_nickname",children:u.nickname}),T("span",{className:"item_date",children:u.createdAt})]})]})]})]},u.id)):T("div",{className:"no-data",children:T("h3",{children:"\uC800\uC7A5\uB41C \uAC8C\uC2DC\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4..."})})})]})]})},eJ=()=>{const[e,t]=$.exports.useState({}),[n,r]=$.exports.useState([]),i=Rt(d=>d.login.user),s=i==null?void 0:i.nickname,o=Mn(),a=Vr(),u=d=>{if(d.target.name==="photo")t({...e,[d.target.name]:d.target.files[0]});else if(d.target.name==="category"){const{value:p,checked:m}=d.target;r(m?[...n,p]:n.filter(v=>v!==p))}else t({...e,[d.target.name]:d.target.value})};return T(an,{children:U(Vh,{children:[T("div",{className:"post_title",children:T("h1",{children:"<Photos>"})}),U("form",{encType:"multipart/form-data",onSubmit:async d=>{d.preventDefault();try{const p={...e,nickname:s,category:n};await o(Zb(p)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),a(-1)}catch(p){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(p)}},children:[U("p",{className:"nickname",children:[T("span",{className:"author",children:"\uC791\uC131\uC790"}),s]}),U("div",{className:"category-wrap",children:[U("label",{children:[T("input",{type:"checkbox",name:"category",value:"\uC790\uC5F0",onChange:u}),"\uC790\uC5F0"]}),U("label",{children:[T("input",{type:"checkbox",name:"category",value:"\uC778\uBB3C",onChange:u}),"\uC778\uBB3C"]}),U("label",{children:[T("input",{type:"checkbox",name:"category",value:"\uC74C\uC2DD",onChange:u}),"\uC74C\uC2DD"]}),U("label",{children:[T("input",{type:"checkbox",name:"category",value:"\uC77C\uC0C1",onChange:u}),"\uC77C\uC0C1"]})]}),T("input",{type:"text",placeholder:"\uC81C\uBAA9",name:"title",onChange:u}),T("input",{type:"text",placeholder:"\uC124\uBA85",name:"desc",onChange:u}),U("label",{htmlFor:"photo",children:[T(ng,{}),T("input",{type:"file",name:"photo",onChange:u})]}),T("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},tJ=gt.div`
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
`,nJ=gt.div`
  width: 100%;
  background: #fefefe;

  .board_list {
    margin: 12px auto 0px auto;
    max-width: 1280px;
    padding: 1px 3px 0 1px;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', arial, sans-serif;

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
`,rJ=()=>{const e=Rt(o=>o.login.user),t=Rt(o=>o.board.boards)||null,n=Vr(),r=Mn(),i=()=>e?n("/board/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),s=o=>{n(`/board/details/${o.id}`)};return $.exports.useEffect(()=>{r(xg())},[r]),U(an,{children:[T(tJ,{children:U("div",{className:"contents",children:[U("div",{className:"text",children:[T("p",{children:"OOTD of the day"}),T("span",{children:"\uC790\uC2E0\uC758 OOTD\uB97C \uACF5\uC720 \uD574\uC8FC\uC138\uC694!"}),T("button",{className:"link-btn",onClick:i,children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),T("div",{className:"image",children:T(RW,{})})]})}),T(nJ,{children:T("ul",{className:"board_list",children:t.length>0?t.map(o=>U("li",{className:"board_card",children:[T("div",{className:"board_img",onClick:()=>s(o),children:T("img",{src:o.photo,alt:o.title})}),U("div",{className:"items",children:[T("h3",{className:"board_title",onClick:()=>s(o),children:o.title.length>30?o.title.subString(0,30)+"...":o.title}),U("div",{className:"item_contents",children:[T("span",{className:"item_brand",children:o.brand}),U("div",{className:"sub_items",children:[T("span",{className:"item_nickname",children:o.nickname}),T("span",{className:"item_date",children:o.createdAt})]})]})]})]},o.id)):T("div",{className:"no-data",children:T("h3",{children:"\uC800\uC7A5\uB41C \uAC8C\uC2DC\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."})})})})]})},iJ=fi(Dh,"photos_png"),sJ=async e=>{const t=fi(iJ,e.name);return await eg(t,e),await tg(t)},oJ=jn("photos/add",async(e,{rejectWithValue:t})=>{try{if(!e)throw new Error("photoData is Not Fount");const{category:n,title:r,desc:i,photo:s,nickname:o}=e,a=await sJ(s);return{id:(await xh(di(_r,"photos"),{category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()})).id,category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()}}catch(n){return console.error(n),t("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),rP=jn("photos/get",async()=>(ul.locale("ko"),(await Zm(di(_r,"photos"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;let o;const a=ul(),u=ul(i);return a.diff(u,"days")<=1?o=u.fromNow():o=u.format("YYYY.MM.DD"),{id:n.id,createdAt:o,...s}})));lo({name:"photo",initialState:{photos:[],postCount:0},reducers:{},extraReducers:e=>{e.addCase(oJ.fulfilled,(t,n)=>{const r=n.payload;return{...t,photos:[...t.photos,r],postCount:t.postCount+1}}).addCase(rP.fulfilled,(t,n)=>({...t,photos:n.payload,postCount:n.payload.length}))}});const aJ=()=>{const{id:e}=Xp(),t=Rt(i=>i.photo.photos),n=Mn(),r=t.find(i=>i.id===e);return console.log(r),$.exports.useEffect(()=>{n(rP())},[n]),T(an,{children:T(jb,{children:r&&U(wc,{children:[T("div",{className:"snapImg",children:T("img",{src:r.photo,alt:r.nickname})}),U("div",{className:"snapInfo",children:[T("div",{className:"title",children:U("p",{children:["Information ",T("span",{children:"\uC0AC\uC9C4 \uC815\uBCF4"})]})}),U("li",{className:"tr",children:[T("span",{className:"th",children:"Nickname"}),T("span",{className:"td",children:r.nickname})]}),U("li",{className:"tr",children:[T("span",{className:"th",children:"Category"}),T("span",{className:"td",children:r.category})]}),U("li",{className:"tr",children:[T("span",{className:"th",children:"Title"}),T("span",{className:"td",children:r.title})]}),U("li",{className:"tr",children:[T("span",{className:"th",children:"Contents"}),T("span",{className:"td",children:r.desc})]}),U("li",{className:"tr",children:[T("span",{className:"th",children:"Like"}),T("span",{className:"td",children:T(cR,{})})]})]})]})})})},lJ=()=>T("div",{children:"TodayDetail"}),uJ=()=>{const[e,t]=$.exports.useState({}),n=Rt(s=>s.login.user),r=n==null?void 0:n.nickname;Mn(),Vr();const i=s=>{s.target.name==="photo"?t({...e,[s.target.name]:s.target.files[0]}):t({...e,[s.target.name]:s.target.value})};return T(an,{children:U(Vh,{children:[T("div",{className:"post_title",children:T("h1",{children:"<Todays Story>"})}),U("form",{encType:"multipart/form-data",children:[U("p",{className:"nickname",children:[T("span",{className:"author",children:"\uC791\uC131\uC790"}),r]}),T("input",{type:"text",name:"title",placeholder:"\uC81C\uBAA9",onChange:i}),T("input",{type:"text",name:"desc",placeholder:"\uB0B4\uC6A9",onChange:i}),T("input",{type:"text",name:"type",placeholder:"\uC885\uB958",onChange:i}),U("label",{htmlFor:"photo",children:[T(ng,{}),T("input",{type:"file",name:"photo",onChange:i})]}),T("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},cJ=gt.div`
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
`,hJ=gt.div`
  width: 100%;
  background: #fefefe;

  .today_list {
    margin: 12px auto 0px auto;
    max-width: 1280px;
    padding: 1px 3px 0 1px;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', arial,
      sans-serif;

    .today_card {
      display: flex;
      min-height: 57px;
      margin-bottom: 6px;
      background-color: #f6f6f6;
      border-bottom: 1px solid #fff;
      gap: 12px;

      &:last-child {
        margin-bottom: 0;
      }

      .today_img {
        img {
          width: 60px;
          height: 50px;
          vertical-align: top;
        }
      }
    }
  }
`;function dJ(e){return ss({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M11.667 0h-8.651v1.984h-0.516c-0.827 0-1.5 0.673-1.5 1.5v8.588l2.521 4.956 2.464-4.959v-8.585c0-0.827-0.673-1.5-1.5-1.5h-0.469v-0.984h6.984v5h5v10h-11.5v1h12.5v-11.692l-5.333-5.308zM3.908 14.002h-0.804l-1.104-2.17v-5.848h1v6.027h1v-6.027h0.984v5.851l-1.076 2.167zM4.984 3.484v1.5h-2.984v-1.5c0-0.275 0.225-0.5 0.5-0.5h1.984c0.276 0 0.5 0.225 0.5 0.5zM12 1.742l3.273 3.258h-3.273v-3.258z"}}]})(e)}const fJ=()=>{const e=Rt(r=>r.login.user),t=Vr();return U(an,{children:[T(cJ,{children:U("div",{className:"contents",children:[U("div",{className:"text",children:[T("p",{children:"Free Talking"}),T("span",{children:"\uD558\uB8E8\uC758 \uC77C\uC0C1\uC744 \uACF5\uC720\uD574\uBCF4\uC138\uC694:)"}),T("button",{className:"link-btn",onClick:()=>e?t("/today/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),T("div",{className:"image",children:T(dJ,{})})]})}),T(hJ,{children:T("ul",{className:"today_list",children:T("div",{className:"no-data",children:T("h3",{children:"\uC800\uC7A5\uB41C \uAC8C\uC2DC\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4..."})})})})]})},pJ=gt.div`
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
`,mJ=gt.article`
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
`,gJ=gt.div`
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
`,yJ=()=>{const e=Rt(i=>i.login.user),t=Rt(i=>i.qna.questions),n=Vr();return U(an,{children:[T(pJ,{children:U("div",{className:"contents",children:[U("div",{className:"text",children:[T("p",{children:"Ask me any questions"}),T("span",{children:"\uC9C8\uBB38\uACFC \uB2F5\uBCC0\uC744 \uD574\uC8FC\uC138\uC694!"}),T("button",{className:"link-btn",onClick:()=>e?n("/qna/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),children:"\uC9C8\uBB38\uD558\uAE30"})]}),T("div",{className:"image",children:T(OW,{})})]})}),T(gJ,{children:T("ul",{className:"qna_list",children:t.length>0?t.slice(0,10).map(i=>U("li",{className:"qna_card",children:[T("div",{className:"qna_img",children:T("img",{src:i.photo,loading:"lazy",alt:i.title})}),U("div",{className:"items",children:[T("h3",{className:"qna_title",children:i.title}),U("div",{className:"item_contents",children:[T("span",{className:"item_category",children:i.category}),T("span",{className:"item_date",children:"\uB0A0\uC9DC"}),T("span",{className:"item_nickname",children:i.nickname})]})]})]},i.id)):T("div",{className:"no-data",children:T("h3",{children:"\uC800\uC7A5\uB41C \uAC8C\uC2DC\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4..."})})})})]})},vJ=()=>{const{id:e}=Xp(),[t,n]=$.exports.useState(!1),r=Rt(u=>u.qna.questions),i=Rt(u=>u.login.user),s=Mn(),o=r.find(u=>u.id===e);console.log(o);const a=()=>(i||window.alert("\uB85C\uADF8\uC778\uD558\uC5EC\uC57C \uC785\uB825\uAC00\uB2A5\uD569\uB2C8\uB2E4!"),null);return $.exports.useEffect(()=>{s(BS())},[s]),T(an,{children:T(mJ,{children:U("div",{className:"qna_card",children:[U("header",{className:"card_header",children:[U("h1",{children:[T("span",{children:"Q."}),"\uC9C8\uBB38 title"]}),U("div",{className:"card_info",children:[U("div",{className:"inner",children:[T("span",{children:"\uC720\uC800\uC774\uBBF8\uC9C0?!"}),T("span",{children:"\uC720\uC800nickname"})]}),T("span",{className:"date",children:"2023-05-18"})]})]}),T("div",{className:"card_contents",children:T("p",{className:"card_desc",children:"qna\uB0B4\uC6A9"})}),U("footer",{className:"card_footer",children:[U("div",{className:"inner",children:[T("button",{children:"\uC88B\uC544\uC694"}),T("button",{onClick:()=>n(!t),children:"\uB313\uAE00"}),T("button",{children:"\uACF5\uC720\uD558\uAE30"})]}),t?T("div",{className:"comment",children:U("div",{className:"comment_in",children:[U("div",{className:"top",children:[T("span",{children:i?i.nickname:T(Gn,{to:"/account/login",children:"\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694."})}),T("button",{children:"\uB4F1\uB85D"})]}),T("div",{className:"bottom",children:T("textarea",{cols:"30",rows:"10",onClick:a,children:"\uB313\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."})})]})}):null]})]})})})},wJ=()=>{const[e,t]=$.exports.useState({}),[n,r]=$.exports.useState([]),i=Rt(d=>d.login.user),s=i==null?void 0:i.nickname,o=Mn(),a=Vr(),u=d=>{if(d.target.name==="photo")t({...e,[d.target.name]:d.target.files[0]});else if(d.target.name==="category"){const{value:p,checked:m}=d.target;r(m?[...n,p]:n.filter(v=>v!==p))}else t({...e,[d.target.name]:d.target.value})};return T(an,{children:U(Vh,{children:[T("div",{className:"post_title",children:T("h1",{children:"<Question>"})}),U("form",{encType:"multipart/form-data",onSubmit:async d=>{d.preventDefault();try{const p={...e,nickname:s,category:n};await o(Jb(p)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),a(-1)}catch(p){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(p)}},children:[U("p",{className:"nickname",children:[T("span",{className:"author",children:"\uC791\uC131\uC790"}),s]}),U("div",{className:"category-wrap",children:[U("label",{children:[T("input",{type:"checkbox",name:"category",value:"\uAC74\uAC15",onChange:u}),"\uAC74\uAC15"]}),U("label",{children:[T("input",{type:"checkbox",name:"category",value:"\uD328\uC158",onChange:u}),"\uD328\uC158"]}),U("label",{children:[T("input",{type:"checkbox",name:"category",value:"\uCDE8\uC5C5",onChange:u}),"\uCDE8\uC5C5"]}),U("label",{children:[T("input",{type:"checkbox",name:"category",value:"\uACF5\uBD80",onChange:u}),"\uACF5\uBD80"]}),U("label",{children:[T("input",{type:"checkbox",name:"category",value:"\uC77C\uC0C1",onChange:u}),"\uC77C\uC0C1"]})]}),T("input",{type:"text",name:"title",placeholder:"\uC81C\uBAA9",onChange:u}),T("input",{type:"text",name:"desc",placeholder:"\uB0B4\uC6A9",onChange:u}),U("label",{htmlFor:"photo",children:[T(ng,{}),T("input",{type:"file",name:"photo"})]}),T("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},_J=[{path:"/",element:T(UX,{})},{path:"/account",element:T(BX,{})},{path:"/account/signup",element:T(GX,{})},{path:"/account/login",element:T(qX,{})},{path:"/board",element:T(rJ,{})},{path:"/board/write",element:T(KX,{})},{path:"/board/:id",element:T(Vd,{})},{path:"/photo",element:T(ZX,{})},{path:"/photo/write",element:T(eJ,{})},{path:"/photo/:id",element:T(Vd,{})},{path:"/today",element:T(fJ,{})},{path:"/today/write",element:T(uJ,{})},{path:"/today/:id",element:T(Vd,{})},{path:"/qna",element:T(yJ,{})},{path:"/qna/write",element:T(wJ,{})},{path:"/qna/:id",element:T(Vd,{})},{path:"/today/details/:id",element:T(lJ,{})},{path:"/board/details/:id",element:T(QX,{})},{path:"/photo/details/:id",element:T(aJ,{})},{path:"/qna/details/:id",element:T(vJ,{})}];function SJ(){return T(eF,{children:U(J3,{basename:"modart",children:[T(Z5,{}),T(MW,{}),T(G3,{children:_J.map((e,t)=>T(jD,{path:e.path,element:e.element},t))})]})})}const EJ=lo({name:"users",initialState:{currentUser:null,postCount:0},reducers:{setCurrentUser:(e,t)=>{e.currentUser=t.payload,e.postCount=t.payload?t.payload.postCount:0},incrementPostCount:e=>{e.postCount+=1}}});var CJ=EJ.reducer;const iP=yU({reducer:{auth:jX,login:DW,users:CJ,board:GQ,photo:OX,today:$X,qna:xX}});iP.dispatch(kW());dv.createRoot(document.getElementById("root")).render(T(LF,{store:iP,children:T(SJ,{})}))});export default kJ();
