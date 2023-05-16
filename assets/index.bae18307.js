const d2=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};d2();var D={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bl=Symbol.for("react.element"),f2=Symbol.for("react.portal"),p2=Symbol.for("react.fragment"),m2=Symbol.for("react.strict_mode"),g2=Symbol.for("react.profiler"),v2=Symbol.for("react.provider"),y2=Symbol.for("react.context"),w2=Symbol.for("react.forward_ref"),E2=Symbol.for("react.suspense"),_2=Symbol.for("react.memo"),S2=Symbol.for("react.lazy"),M0=Symbol.iterator;function C2(t){return t===null||typeof t!="object"?null:(t=M0&&t[M0]||t["@@iterator"],typeof t=="function"?t:null)}var I_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k_=Object.assign,x_={};function No(t,e,n){this.props=t,this.context=e,this.refs=x_,this.updater=n||I_}No.prototype.isReactComponent={};No.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};No.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function A_(){}A_.prototype=No.prototype;function Rg(t,e,n){this.props=t,this.context=e,this.refs=x_,this.updater=n||I_}var Ng=Rg.prototype=new A_;Ng.constructor=Rg;k_(Ng,No.prototype);Ng.isPureReactComponent=!0;var F0=Array.isArray,R_=Object.prototype.hasOwnProperty,Pg={current:null},N_={key:!0,ref:!0,__self:!0,__source:!0};function P_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)R_.call(e,r)&&!N_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:bl,type:t,key:s,ref:o,props:i,_owner:Pg.current}}function T2(t,e){return{$$typeof:bl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dg(t){return typeof t=="object"&&t!==null&&t.$$typeof===bl}function I2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var U0=/\/+/g;function gf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?I2(""+t.key):e.toString(36)}function Zu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bl:case f2:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+gf(o,0):r,F0(i)?(n="",t!=null&&(n=t.replace(U0,"$&/")+"/"),Zu(i,e,n,"",function(u){return u})):i!=null&&(Dg(i)&&(i=T2(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(U0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",F0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+gf(s,a);o+=Zu(s,e,n,l,i)}else if(l=C2(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+gf(s,a++),o+=Zu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _u(t,e,n){if(t==null)return t;var r=[],i=0;return Zu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function k2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ut={current:null},ec={transition:null},x2={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:ec,ReactCurrentOwner:Pg};ge.Children={map:_u,forEach:function(t,e,n){_u(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _u(t,function(){e++}),e},toArray:function(t){return _u(t,function(e){return e})||[]},only:function(t){if(!Dg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ge.Component=No;ge.Fragment=p2;ge.Profiler=g2;ge.PureComponent=Rg;ge.StrictMode=m2;ge.Suspense=E2;ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x2;ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=k_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)R_.call(e,l)&&!N_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:bl,type:t.type,key:i,ref:s,props:r,_owner:o}};ge.createContext=function(t){return t={$$typeof:y2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:v2,_context:t},t.Consumer=t};ge.createElement=P_;ge.createFactory=function(t){var e=P_.bind(null,t);return e.type=t,e};ge.createRef=function(){return{current:null}};ge.forwardRef=function(t){return{$$typeof:w2,render:t}};ge.isValidElement=Dg;ge.lazy=function(t){return{$$typeof:S2,_payload:{_status:-1,_result:t},_init:k2}};ge.memo=function(t,e){return{$$typeof:_2,type:t,compare:e===void 0?null:e}};ge.startTransition=function(t){var e=ec.transition;ec.transition={};try{t()}finally{ec.transition=e}};ge.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ge.useCallback=function(t,e){return Ut.current.useCallback(t,e)};ge.useContext=function(t){return Ut.current.useContext(t)};ge.useDebugValue=function(){};ge.useDeferredValue=function(t){return Ut.current.useDeferredValue(t)};ge.useEffect=function(t,e){return Ut.current.useEffect(t,e)};ge.useId=function(){return Ut.current.useId()};ge.useImperativeHandle=function(t,e,n){return Ut.current.useImperativeHandle(t,e,n)};ge.useInsertionEffect=function(t,e){return Ut.current.useInsertionEffect(t,e)};ge.useLayoutEffect=function(t,e){return Ut.current.useLayoutEffect(t,e)};ge.useMemo=function(t,e){return Ut.current.useMemo(t,e)};ge.useReducer=function(t,e,n){return Ut.current.useReducer(t,e,n)};ge.useRef=function(t){return Ut.current.useRef(t)};ge.useState=function(t){return Ut.current.useState(t)};ge.useSyncExternalStore=function(t,e,n){return Ut.current.useSyncExternalStore(t,e,n)};ge.useTransition=function(){return Ut.current.useTransition()};ge.version="18.2.0";D.exports=ge;var st=D.exports,Ap={},Og={exports:{}},nn={},D_={exports:{}},O_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,O){var A=x.length;x.push(O);e:for(;0<A;){var z=A-1>>>1,R=x[z];if(0<i(R,O))x[z]=O,x[A]=R,A=z;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var O=x[0],A=x.pop();if(A!==O){x[0]=A;e:for(var z=0,R=x.length,N=R>>>1;z<N;){var M=2*(z+1)-1,J=x[M],_=M+1,Q=x[_];if(0>i(J,A))_<R&&0>i(Q,J)?(x[z]=Q,x[_]=A,z=_):(x[z]=J,x[M]=A,z=M);else if(_<R&&0>i(Q,A))x[z]=Q,x[_]=A,z=_;else break e}}return O}function i(x,O){var A=x.sortIndex-O.sortIndex;return A!==0?A:x.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,m=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(x){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=x)r(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function E(x){if(v=!1,y(x),!m)if(n(l)!==null)m=!0,pe(C);else{var O=n(u);O!==null&&le(E,O.startTime-x)}}function C(x,O){m=!1,v&&(v=!1,g(I),I=-1),p=!0;var A=d;try{for(y(O),h=n(l);h!==null&&(!(h.expirationTime>O)||x&&!b());){var z=h.callback;if(typeof z=="function"){h.callback=null,d=h.priorityLevel;var R=z(h.expirationTime<=O);O=t.unstable_now(),typeof R=="function"?h.callback=R:h===n(l)&&r(l),y(O)}else r(l);h=n(l)}if(h!==null)var N=!0;else{var M=n(u);M!==null&&le(E,M.startTime-O),N=!1}return N}finally{h=null,d=A,p=!1}}var k=!1,T=null,I=-1,V=5,P=-1;function b(){return!(t.unstable_now()-P<V)}function B(){if(T!==null){var x=t.unstable_now();P=x;var O=!0;try{O=T(!0,x)}finally{O?j():(k=!1,T=null)}}else k=!1}var j;if(typeof f=="function")j=function(){f(B)};else if(typeof MessageChannel!="undefined"){var Y=new MessageChannel,q=Y.port2;Y.port1.onmessage=B,j=function(){q.postMessage(null)}}else j=function(){w(B,0)};function pe(x){T=x,k||(k=!0,j())}function le(x,O){I=w(function(){x(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,pe(C))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var A=d;d=O;try{return x()}finally{d=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,O){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var A=d;d=x;try{return O()}finally{d=A}},t.unstable_scheduleCallback=function(x,O,A){var z=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?z+A:z):A=z,x){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=A+R,x={id:c++,callback:O,priorityLevel:x,startTime:A,expirationTime:R,sortIndex:-1},A>z?(x.sortIndex=A,e(u,x),n(l)===null&&x===n(u)&&(v?(g(I),I=-1):v=!0,le(E,A-z))):(x.sortIndex=R,e(l,x),m||p||(m=!0,pe(C))),x},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(x){var O=d;return function(){var A=d;d=O;try{return x.apply(this,arguments)}finally{d=A}}}})(O_);D_.exports=O_;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_=D.exports,Zt=D_.exports;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $_=new Set,za={};function gs(t,e){lo(t,e),lo(t+"Capture",e)}function lo(t,e){for(za[t]=e,t=0;t<e.length;t++)$_.add(e[t])}var Er=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Rp=Object.prototype.hasOwnProperty,A2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B0={},V0={};function R2(t){return Rp.call(V0,t)?!0:Rp.call(B0,t)?!1:A2.test(t)?V0[t]=!0:(B0[t]=!0,!1)}function N2(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P2(t,e,n,r){if(e===null||typeof e=="undefined"||N2(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Bt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yt[t]=new Bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yt[e]=new Bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yt[t]=new Bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yt[t]=new Bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yt[t]=new Bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yt[t]=new Bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yt[t]=new Bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yt[t]=new Bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yt[t]=new Bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var bg=/[\-:]([a-z])/g;function $g(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bg,$g);yt[e]=new Bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bg,$g);yt[e]=new Bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bg,$g);yt[e]=new Bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yt[t]=new Bt(t,1,!1,t.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yt[t]=new Bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lg(t,e,n,r){var i=yt.hasOwnProperty(e)?yt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(P2(e,n,i,r)&&(n=null),r||i===null?R2(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dr=b_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Su=Symbol.for("react.element"),Ps=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),Mg=Symbol.for("react.strict_mode"),Np=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),M_=Symbol.for("react.context"),Fg=Symbol.for("react.forward_ref"),Pp=Symbol.for("react.suspense"),Dp=Symbol.for("react.suspense_list"),Ug=Symbol.for("react.memo"),Lr=Symbol.for("react.lazy"),F_=Symbol.for("react.offscreen"),z0=Symbol.iterator;function Zo(t){return t===null||typeof t!="object"?null:(t=z0&&t[z0]||t["@@iterator"],typeof t=="function"?t:null)}var Fe=Object.assign,vf;function ha(t){if(vf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vf=e&&e[1]||""}return`
`+vf+t}var yf=!1;function wf(t,e){if(!t||yf)return"";yf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{yf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ha(t):""}function D2(t){switch(t.tag){case 5:return ha(t.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 2:case 15:return t=wf(t.type,!1),t;case 11:return t=wf(t.type.render,!1),t;case 1:return t=wf(t.type,!0),t;default:return""}}function Op(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case Ps:return"Portal";case Np:return"Profiler";case Mg:return"StrictMode";case Pp:return"Suspense";case Dp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M_:return(t.displayName||"Context")+".Consumer";case L_:return(t._context.displayName||"Context")+".Provider";case Fg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ug:return e=t.displayName||null,e!==null?e:Op(t.type)||"Memo";case Lr:e=t._payload,t=t._init;try{return Op(t(e))}catch{}}return null}function O2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Op(e);case 8:return e===Mg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function di(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function U_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function b2(t){var e=U_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Cu(t){t._valueTracker||(t._valueTracker=b2(t))}function B_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=U_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Tc(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function bp(t,e){var n=e.checked;return Fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function j0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=di(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function V_(t,e){e=e.checked,e!=null&&Lg(t,"checked",e,!1)}function $p(t,e){V_(t,e);var n=di(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lp(t,e.type,di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function H0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lp(t,e,n){(e!=="number"||Tc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var da=Array.isArray;function Gs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+di(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Mp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function W0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(da(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:di(n)}}function z_(t,e){var n=di(e.value),r=di(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function G0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function j_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?j_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Tu,H_=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Tu=Tu||document.createElement("div"),Tu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ja(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$2=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(t){$2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ca[e]=Ca[t]})});function W_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ca.hasOwnProperty(t)&&Ca[t]?(""+e).trim():e+"px"}function G_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=W_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var L2=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Up(t,e){if(e){if(L2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function Bp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vp=null;function Bg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zp=null,Ks=null,qs=null;function K0(t){if(t=Ml(t)){if(typeof zp!="function")throw Error(L(280));var e=t.stateNode;e&&(e=Bh(e),zp(t.stateNode,t.type,e))}}function K_(t){Ks?qs?qs.push(t):qs=[t]:Ks=t}function q_(){if(Ks){var t=Ks,e=qs;if(qs=Ks=null,K0(t),e)for(t=0;t<e.length;t++)K0(e[t])}}function Q_(t,e){return t(e)}function X_(){}var Ef=!1;function Y_(t,e,n){if(Ef)return t(e,n);Ef=!0;try{return Q_(t,e,n)}finally{Ef=!1,(Ks!==null||qs!==null)&&(X_(),q_())}}function Ha(t,e){var n=t.stateNode;if(n===null)return null;var r=Bh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var jp=!1;if(Er)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){jp=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{jp=!1}function M2(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ta=!1,Ic=null,kc=!1,Hp=null,F2={onError:function(t){Ta=!0,Ic=t}};function U2(t,e,n,r,i,s,o,a,l){Ta=!1,Ic=null,M2.apply(F2,arguments)}function B2(t,e,n,r,i,s,o,a,l){if(U2.apply(this,arguments),Ta){if(Ta){var u=Ic;Ta=!1,Ic=null}else throw Error(L(198));kc||(kc=!0,Hp=u)}}function vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function J_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function q0(t){if(vs(t)!==t)throw Error(L(188))}function V2(t){var e=t.alternate;if(!e){if(e=vs(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return q0(i),t;if(s===r)return q0(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function Z_(t){return t=V2(t),t!==null?eS(t):null}function eS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=eS(t);if(e!==null)return e;t=t.sibling}return null}var tS=Zt.unstable_scheduleCallback,Q0=Zt.unstable_cancelCallback,z2=Zt.unstable_shouldYield,j2=Zt.unstable_requestPaint,Ke=Zt.unstable_now,H2=Zt.unstable_getCurrentPriorityLevel,Vg=Zt.unstable_ImmediatePriority,nS=Zt.unstable_UserBlockingPriority,xc=Zt.unstable_NormalPriority,W2=Zt.unstable_LowPriority,rS=Zt.unstable_IdlePriority,Lh=null,jn=null;function G2(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(Lh,t,void 0,(t.current.flags&128)===128)}catch{}}var Nn=Math.clz32?Math.clz32:Q2,K2=Math.log,q2=Math.LN2;function Q2(t){return t>>>=0,t===0?32:31-(K2(t)/q2|0)|0}var Iu=64,ku=4194304;function fa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ac(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=fa(a):(s&=o,s!==0&&(r=fa(s)))}else o=n&~i,o!==0?r=fa(o):s!==0&&(r=fa(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nn(e),i=1<<n,r|=t[n],e&=~i;return r}function X2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y2(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Nn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=X2(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function iS(){var t=Iu;return Iu<<=1,(Iu&4194240)===0&&(Iu=64),t}function _f(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $l(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nn(e),t[e]=n}function J2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ce=0;function sS(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var oS,jg,aS,lS,uS,Gp=!1,xu=[],Xr=null,Yr=null,Jr=null,Wa=new Map,Ga=new Map,Fr=[],Z2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function X0(t,e){switch(t){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":Yr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":Wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(e.pointerId)}}function ta(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ml(e),e!==null&&jg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function eR(t,e,n,r,i){switch(e){case"focusin":return Xr=ta(Xr,t,e,n,r,i),!0;case"dragenter":return Yr=ta(Yr,t,e,n,r,i),!0;case"mouseover":return Jr=ta(Jr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wa.set(s,ta(Wa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ga.set(s,ta(Ga.get(s)||null,t,e,n,r,i)),!0}return!1}function cS(t){var e=Ui(t.target);if(e!==null){var n=vs(e);if(n!==null){if(e=n.tag,e===13){if(e=J_(n),e!==null){t.blockedOn=e,uS(t.priority,function(){aS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Vp=r,n.target.dispatchEvent(r),Vp=null}else return e=Ml(n),e!==null&&jg(e),t.blockedOn=n,!1;e.shift()}return!0}function Y0(t,e,n){tc(t)&&n.delete(e)}function tR(){Gp=!1,Xr!==null&&tc(Xr)&&(Xr=null),Yr!==null&&tc(Yr)&&(Yr=null),Jr!==null&&tc(Jr)&&(Jr=null),Wa.forEach(Y0),Ga.forEach(Y0)}function na(t,e){t.blockedOn===e&&(t.blockedOn=null,Gp||(Gp=!0,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,tR)))}function Ka(t){function e(i){return na(i,t)}if(0<xu.length){na(xu[0],t);for(var n=1;n<xu.length;n++){var r=xu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xr!==null&&na(Xr,t),Yr!==null&&na(Yr,t),Jr!==null&&na(Jr,t),Wa.forEach(e),Ga.forEach(e),n=0;n<Fr.length;n++)r=Fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fr.length&&(n=Fr[0],n.blockedOn===null);)cS(n),n.blockedOn===null&&Fr.shift()}var Qs=Dr.ReactCurrentBatchConfig,Rc=!0;function nR(t,e,n,r){var i=Ce,s=Qs.transition;Qs.transition=null;try{Ce=1,Hg(t,e,n,r)}finally{Ce=i,Qs.transition=s}}function rR(t,e,n,r){var i=Ce,s=Qs.transition;Qs.transition=null;try{Ce=4,Hg(t,e,n,r)}finally{Ce=i,Qs.transition=s}}function Hg(t,e,n,r){if(Rc){var i=Kp(t,e,n,r);if(i===null)Pf(t,e,r,Nc,n),X0(t,r);else if(eR(i,t,e,n,r))r.stopPropagation();else if(X0(t,r),e&4&&-1<Z2.indexOf(t)){for(;i!==null;){var s=Ml(i);if(s!==null&&oS(s),s=Kp(t,e,n,r),s===null&&Pf(t,e,r,Nc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Pf(t,e,r,null,n)}}var Nc=null;function Kp(t,e,n,r){if(Nc=null,t=Bg(r),t=Ui(t),t!==null)if(e=vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=J_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Nc=t,null}function hS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H2()){case Vg:return 1;case nS:return 4;case xc:case W2:return 16;case rS:return 536870912;default:return 16}default:return 16}}var Wr=null,Wg=null,nc=null;function dS(){if(nc)return nc;var t,e=Wg,n=e.length,r,i="value"in Wr?Wr.value:Wr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return nc=i.slice(t,1<r?1-r:void 0)}function rc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Au(){return!0}function J0(){return!1}function rn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Au:J0,this.isPropagationStopped=J0,this}return Fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Au)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Au)},persist:function(){},isPersistent:Au}),e}var Po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gg=rn(Po),Ll=Fe({},Po,{view:0,detail:0}),iR=rn(Ll),Sf,Cf,ra,Mh=Fe({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(Sf=t.screenX-ra.screenX,Cf=t.screenY-ra.screenY):Cf=Sf=0,ra=t),Sf)},movementY:function(t){return"movementY"in t?t.movementY:Cf}}),Z0=rn(Mh),sR=Fe({},Mh,{dataTransfer:0}),oR=rn(sR),aR=Fe({},Ll,{relatedTarget:0}),Tf=rn(aR),lR=Fe({},Po,{animationName:0,elapsedTime:0,pseudoElement:0}),uR=rn(lR),cR=Fe({},Po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hR=rn(cR),dR=Fe({},Po,{data:0}),e1=rn(dR),fR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mR[t])?!!e[t]:!1}function Kg(){return gR}var vR=Fe({},Ll,{key:function(t){if(t.key){var e=fR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kg,charCode:function(t){return t.type==="keypress"?rc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yR=rn(vR),wR=Fe({},Mh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),t1=rn(wR),ER=Fe({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kg}),_R=rn(ER),SR=Fe({},Po,{propertyName:0,elapsedTime:0,pseudoElement:0}),CR=rn(SR),TR=Fe({},Mh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),IR=rn(TR),kR=[9,13,27,32],qg=Er&&"CompositionEvent"in window,Ia=null;Er&&"documentMode"in document&&(Ia=document.documentMode);var xR=Er&&"TextEvent"in window&&!Ia,fS=Er&&(!qg||Ia&&8<Ia&&11>=Ia),n1=String.fromCharCode(32),r1=!1;function pS(t,e){switch(t){case"keyup":return kR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function AR(t,e){switch(t){case"compositionend":return mS(e);case"keypress":return e.which!==32?null:(r1=!0,n1);case"textInput":return t=e.data,t===n1&&r1?null:t;default:return null}}function RR(t,e){if(Os)return t==="compositionend"||!qg&&pS(t,e)?(t=dS(),nc=Wg=Wr=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fS&&e.locale!=="ko"?null:e.data;default:return null}}var NR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function i1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!NR[t.type]:e==="textarea"}function gS(t,e,n,r){K_(r),e=Pc(e,"onChange"),0<e.length&&(n=new Gg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ka=null,qa=null;function PR(t){xS(t,0)}function Fh(t){var e=Ls(t);if(B_(e))return t}function DR(t,e){if(t==="change")return e}var vS=!1;if(Er){var If;if(Er){var kf="oninput"in document;if(!kf){var s1=document.createElement("div");s1.setAttribute("oninput","return;"),kf=typeof s1.oninput=="function"}If=kf}else If=!1;vS=If&&(!document.documentMode||9<document.documentMode)}function o1(){ka&&(ka.detachEvent("onpropertychange",yS),qa=ka=null)}function yS(t){if(t.propertyName==="value"&&Fh(qa)){var e=[];gS(e,qa,t,Bg(t)),Y_(PR,e)}}function OR(t,e,n){t==="focusin"?(o1(),ka=e,qa=n,ka.attachEvent("onpropertychange",yS)):t==="focusout"&&o1()}function bR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fh(qa)}function $R(t,e){if(t==="click")return Fh(e)}function LR(t,e){if(t==="input"||t==="change")return Fh(e)}function MR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dn=typeof Object.is=="function"?Object.is:MR;function Qa(t,e){if(Dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rp.call(e,i)||!Dn(t[i],e[i]))return!1}return!0}function a1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function l1(t,e){var n=a1(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=a1(n)}}function wS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ES(){for(var t=window,e=Tc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tc(t.document)}return e}function Qg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function FR(t){var e=ES(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wS(n.ownerDocument.documentElement,n)){if(r!==null&&Qg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=l1(n,s);var o=l1(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var UR=Er&&"documentMode"in document&&11>=document.documentMode,bs=null,qp=null,xa=null,Qp=!1;function u1(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qp||bs==null||bs!==Tc(r)||(r=bs,"selectionStart"in r&&Qg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xa&&Qa(xa,r)||(xa=r,r=Pc(qp,"onSelect"),0<r.length&&(e=new Gg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bs)))}function Ru(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:Ru("Animation","AnimationEnd"),animationiteration:Ru("Animation","AnimationIteration"),animationstart:Ru("Animation","AnimationStart"),transitionend:Ru("Transition","TransitionEnd")},xf={},_S={};Er&&(_S=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Uh(t){if(xf[t])return xf[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _S)return xf[t]=e[n];return t}var SS=Uh("animationend"),CS=Uh("animationiteration"),TS=Uh("animationstart"),IS=Uh("transitionend"),kS=new Map,c1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ci(t,e){kS.set(t,e),gs(e,[t])}for(var Af=0;Af<c1.length;Af++){var Rf=c1[Af],BR=Rf.toLowerCase(),VR=Rf[0].toUpperCase()+Rf.slice(1);Ci(BR,"on"+VR)}Ci(SS,"onAnimationEnd");Ci(CS,"onAnimationIteration");Ci(TS,"onAnimationStart");Ci("dblclick","onDoubleClick");Ci("focusin","onFocus");Ci("focusout","onBlur");Ci(IS,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zR=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function h1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,B2(r,e,void 0,t),t.currentTarget=null}function xS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;h1(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;h1(i,a,u),s=l}}}if(kc)throw t=Hp,kc=!1,Hp=null,t}function Re(t,e){var n=e[em];n===void 0&&(n=e[em]=new Set);var r=t+"__bubble";n.has(r)||(AS(e,t,2,!1),n.add(r))}function Nf(t,e,n){var r=0;e&&(r|=4),AS(n,t,r,e)}var Nu="_reactListening"+Math.random().toString(36).slice(2);function Xa(t){if(!t[Nu]){t[Nu]=!0,$_.forEach(function(n){n!=="selectionchange"&&(zR.has(n)||Nf(n,!1,t),Nf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nu]||(e[Nu]=!0,Nf("selectionchange",!1,e))}}function AS(t,e,n,r){switch(hS(e)){case 1:var i=nR;break;case 4:i=rR;break;default:i=Hg}n=i.bind(null,e,n,t),i=void 0,!jp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Pf(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ui(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Y_(function(){var u=s,c=Bg(n),h=[];e:{var d=kS.get(t);if(d!==void 0){var p=Gg,m=t;switch(t){case"keypress":if(rc(n)===0)break e;case"keydown":case"keyup":p=yR;break;case"focusin":m="focus",p=Tf;break;case"focusout":m="blur",p=Tf;break;case"beforeblur":case"afterblur":p=Tf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Z0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=oR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_R;break;case SS:case CS:case TS:p=uR;break;case IS:p=CR;break;case"scroll":p=iR;break;case"wheel":p=IR;break;case"copy":case"cut":case"paste":p=hR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=t1}var v=(e&4)!==0,w=!v&&t==="scroll",g=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,y;f!==null;){y=f;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,g!==null&&(E=Ha(f,g),E!=null&&v.push(Ya(f,E,y)))),w)break;f=f.return}0<v.length&&(d=new p(d,m,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Vp&&(m=n.relatedTarget||n.fromElement)&&(Ui(m)||m[_r]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?Ui(m):null,m!==null&&(w=vs(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(v=Z0,E="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=t1,E="onPointerLeave",g="onPointerEnter",f="pointer"),w=p==null?d:Ls(p),y=m==null?d:Ls(m),d=new v(E,f+"leave",p,n,c),d.target=w,d.relatedTarget=y,E=null,Ui(c)===u&&(v=new v(g,f+"enter",m,n,c),v.target=y,v.relatedTarget=w,E=v),w=E,p&&m)t:{for(v=p,g=m,f=0,y=v;y;y=Is(y))f++;for(y=0,E=g;E;E=Is(E))y++;for(;0<f-y;)v=Is(v),f--;for(;0<y-f;)g=Is(g),y--;for(;f--;){if(v===g||g!==null&&v===g.alternate)break t;v=Is(v),g=Is(g)}v=null}else v=null;p!==null&&d1(h,d,p,v,!1),m!==null&&w!==null&&d1(h,w,m,v,!0)}}e:{if(d=u?Ls(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=DR;else if(i1(d))if(vS)C=LR;else{C=bR;var k=OR}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=$R);if(C&&(C=C(t,u))){gS(h,C,n,c);break e}k&&k(t,d,u),t==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&Lp(d,"number",d.value)}switch(k=u?Ls(u):window,t){case"focusin":(i1(k)||k.contentEditable==="true")&&(bs=k,qp=u,xa=null);break;case"focusout":xa=qp=bs=null;break;case"mousedown":Qp=!0;break;case"contextmenu":case"mouseup":case"dragend":Qp=!1,u1(h,n,c);break;case"selectionchange":if(UR)break;case"keydown":case"keyup":u1(h,n,c)}var T;if(qg)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Os?pS(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(fS&&n.locale!=="ko"&&(Os||I!=="onCompositionStart"?I==="onCompositionEnd"&&Os&&(T=dS()):(Wr=c,Wg="value"in Wr?Wr.value:Wr.textContent,Os=!0)),k=Pc(u,I),0<k.length&&(I=new e1(I,t,null,n,c),h.push({event:I,listeners:k}),T?I.data=T:(T=mS(n),T!==null&&(I.data=T)))),(T=xR?AR(t,n):RR(t,n))&&(u=Pc(u,"onBeforeInput"),0<u.length&&(c=new e1("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=T))}xS(h,e)})}function Ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ha(t,n),s!=null&&r.unshift(Ya(t,s,i)),s=Ha(t,e),s!=null&&r.push(Ya(t,s,i))),t=t.return}return r}function Is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function d1(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ha(n,s),l!=null&&o.unshift(Ya(n,l,a))):i||(l=Ha(n,s),l!=null&&o.push(Ya(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jR=/\r\n?/g,HR=/\u0000|\uFFFD/g;function f1(t){return(typeof t=="string"?t:""+t).replace(jR,`
`).replace(HR,"")}function Pu(t,e,n){if(e=f1(e),f1(t)!==e&&n)throw Error(L(425))}function Dc(){}var Xp=null,Yp=null;function Jp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zp=typeof setTimeout=="function"?setTimeout:void 0,WR=typeof clearTimeout=="function"?clearTimeout:void 0,p1=typeof Promise=="function"?Promise:void 0,GR=typeof queueMicrotask=="function"?queueMicrotask:typeof p1!="undefined"?function(t){return p1.resolve(null).then(t).catch(KR)}:Zp;function KR(t){setTimeout(function(){throw t})}function Df(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ka(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ka(e)}function Zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function m1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Do=Math.random().toString(36).slice(2),Fn="__reactFiber$"+Do,Ja="__reactProps$"+Do,_r="__reactContainer$"+Do,em="__reactEvents$"+Do,qR="__reactListeners$"+Do,QR="__reactHandles$"+Do;function Ui(t){var e=t[Fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_r]||n[Fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=m1(t);t!==null;){if(n=t[Fn])return n;t=m1(t)}return e}t=n,n=t.parentNode}return null}function Ml(t){return t=t[Fn]||t[_r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function Bh(t){return t[Ja]||null}var tm=[],Ms=-1;function Ti(t){return{current:t}}function Ne(t){0>Ms||(t.current=tm[Ms],tm[Ms]=null,Ms--)}function xe(t,e){Ms++,tm[Ms]=t.current,t.current=e}var fi={},Pt=Ti(fi),Ht=Ti(!1),Ji=fi;function uo(t,e){var n=t.type.contextTypes;if(!n)return fi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Wt(t){return t=t.childContextTypes,t!=null}function Oc(){Ne(Ht),Ne(Pt)}function g1(t,e,n){if(Pt.current!==fi)throw Error(L(168));xe(Pt,e),xe(Ht,n)}function RS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,O2(t)||"Unknown",i));return Fe({},n,r)}function bc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fi,Ji=Pt.current,xe(Pt,t),xe(Ht,Ht.current),!0}function v1(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=RS(t,e,Ji),r.__reactInternalMemoizedMergedChildContext=t,Ne(Ht),Ne(Pt),xe(Pt,t)):Ne(Ht),xe(Ht,n)}var or=null,Vh=!1,Of=!1;function NS(t){or===null?or=[t]:or.push(t)}function XR(t){Vh=!0,NS(t)}function Ii(){if(!Of&&or!==null){Of=!0;var t=0,e=Ce;try{var n=or;for(Ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}or=null,Vh=!1}catch(i){throw or!==null&&(or=or.slice(t+1)),tS(Vg,Ii),i}finally{Ce=e,Of=!1}}return null}var Fs=[],Us=0,$c=null,Lc=0,on=[],an=0,Zi=null,ur=1,cr="";function $i(t,e){Fs[Us++]=Lc,Fs[Us++]=$c,$c=t,Lc=e}function PS(t,e,n){on[an++]=ur,on[an++]=cr,on[an++]=Zi,Zi=t;var r=ur;t=cr;var i=32-Nn(r)-1;r&=~(1<<i),n+=1;var s=32-Nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ur=1<<32-Nn(e)+i|n<<i|r,cr=s+t}else ur=1<<s|n<<i|r,cr=t}function Xg(t){t.return!==null&&($i(t,1),PS(t,1,0))}function Yg(t){for(;t===$c;)$c=Fs[--Us],Fs[Us]=null,Lc=Fs[--Us],Fs[Us]=null;for(;t===Zi;)Zi=on[--an],on[an]=null,cr=on[--an],on[an]=null,ur=on[--an],on[an]=null}var Yt=null,Qt=null,Oe=!1,Tn=null;function DS(t,e){var n=hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function y1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Yt=t,Qt=Zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Yt=t,Qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zi!==null?{id:ur,overflow:cr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Yt=t,Qt=null,!0):!1;default:return!1}}function nm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rm(t){if(Oe){var e=Qt;if(e){var n=e;if(!y1(t,e)){if(nm(t))throw Error(L(418));e=Zr(n.nextSibling);var r=Yt;e&&y1(t,e)?DS(r,n):(t.flags=t.flags&-4097|2,Oe=!1,Yt=t)}}else{if(nm(t))throw Error(L(418));t.flags=t.flags&-4097|2,Oe=!1,Yt=t}}}function w1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Yt=t}function Du(t){if(t!==Yt)return!1;if(!Oe)return w1(t),Oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jp(t.type,t.memoizedProps)),e&&(e=Qt)){if(nm(t))throw OS(),Error(L(418));for(;e;)DS(t,e),e=Zr(e.nextSibling)}if(w1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qt=Zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qt=null}}else Qt=Yt?Zr(t.stateNode.nextSibling):null;return!0}function OS(){for(var t=Qt;t;)t=Zr(t.nextSibling)}function co(){Qt=Yt=null,Oe=!1}function Jg(t){Tn===null?Tn=[t]:Tn.push(t)}var YR=Dr.ReactCurrentBatchConfig;function Sn(t,e){if(t&&t.defaultProps){e=Fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Mc=Ti(null),Fc=null,Bs=null,Zg=null;function ev(){Zg=Bs=Fc=null}function tv(t){var e=Mc.current;Ne(Mc),t._currentValue=e}function im(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Xs(t,e){Fc=t,Zg=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(zt=!0),t.firstContext=null)}function pn(t){var e=t._currentValue;if(Zg!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(Fc===null)throw Error(L(308));Bs=t,Fc.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var Bi=null;function nv(t){Bi===null?Bi=[t]:Bi.push(t)}function bS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,nv(e)):(n.next=i.next,i.next=n),e.interleaved=n,Sr(t,r)}function Sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mr=!1;function rv(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $S(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ei(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ye&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Sr(t,n)}return i=r.interleaved,i===null?(e.next=e,nv(r)):(e.next=i.next,i.next=e),r.interleaved=e,Sr(t,n)}function ic(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zg(t,n)}}function E1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Uc(t,e,n,r){var i=t.updateQueue;Mr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,v=a;switch(d=e,p=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){h=m.call(p,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,d=typeof m=="function"?m.call(p,h,d):m,d==null)break e;h=Fe({},h,d);break e;case 2:Mr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=h}}function _1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var LS=new b_.Component().refs;function sm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zh={isMounted:function(t){return(t=t._reactInternals)?vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Mt(),i=ni(t),s=vr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ei(t,s,i),e!==null&&(Pn(e,t,i,r),ic(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Mt(),i=ni(t),s=vr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ei(t,s,i),e!==null&&(Pn(e,t,i,r),ic(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Mt(),r=ni(t),i=vr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ei(t,i,r),e!==null&&(Pn(e,t,r,n),ic(e,t,r))}};function S1(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qa(n,r)||!Qa(i,s):!0}function MS(t,e,n){var r=!1,i=fi,s=e.contextType;return typeof s=="object"&&s!==null?s=pn(s):(i=Wt(e)?Ji:Pt.current,r=e.contextTypes,s=(r=r!=null)?uo(t,i):fi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function C1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&zh.enqueueReplaceState(e,e.state,null)}function om(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=LS,rv(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pn(s):(s=Wt(e)?Ji:Pt.current,i.context=uo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&zh.enqueueReplaceState(i,i.state,null),Uc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ia(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===LS&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Ou(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function T1(t){var e=t._init;return e(t._payload)}function FS(t){function e(g,f){if(t){var y=g.deletions;y===null?(g.deletions=[f],g.flags|=16):y.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=ri(g,f),g.index=0,g.sibling=null,g}function s(g,f,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<f?(g.flags|=2,f):y):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,y,E){return f===null||f.tag!==6?(f=Bf(y,g.mode,E),f.return=g,f):(f=i(f,y),f.return=g,f)}function l(g,f,y,E){var C=y.type;return C===Ds?c(g,f,y.props.children,E,y.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Lr&&T1(C)===f.type)?(E=i(f,y.props),E.ref=ia(g,f,y),E.return=g,E):(E=cc(y.type,y.key,y.props,null,g.mode,E),E.ref=ia(g,f,y),E.return=g,E)}function u(g,f,y,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Vf(y,g.mode,E),f.return=g,f):(f=i(f,y.children||[]),f.return=g,f)}function c(g,f,y,E,C){return f===null||f.tag!==7?(f=Ki(y,g.mode,E,C),f.return=g,f):(f=i(f,y),f.return=g,f)}function h(g,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Bf(""+f,g.mode,y),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Su:return y=cc(f.type,f.key,f.props,null,g.mode,y),y.ref=ia(g,null,f),y.return=g,y;case Ps:return f=Vf(f,g.mode,y),f.return=g,f;case Lr:var E=f._init;return h(g,E(f._payload),y)}if(da(f)||Zo(f))return f=Ki(f,g.mode,y,null),f.return=g,f;Ou(g,f)}return null}function d(g,f,y,E){var C=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:a(g,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Su:return y.key===C?l(g,f,y,E):null;case Ps:return y.key===C?u(g,f,y,E):null;case Lr:return C=y._init,d(g,f,C(y._payload),E)}if(da(y)||Zo(y))return C!==null?null:c(g,f,y,E,null);Ou(g,y)}return null}function p(g,f,y,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(y)||null,a(f,g,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Su:return g=g.get(E.key===null?y:E.key)||null,l(f,g,E,C);case Ps:return g=g.get(E.key===null?y:E.key)||null,u(f,g,E,C);case Lr:var k=E._init;return p(g,f,y,k(E._payload),C)}if(da(E)||Zo(E))return g=g.get(y)||null,c(f,g,E,C,null);Ou(f,E)}return null}function m(g,f,y,E){for(var C=null,k=null,T=f,I=f=0,V=null;T!==null&&I<y.length;I++){T.index>I?(V=T,T=null):V=T.sibling;var P=d(g,T,y[I],E);if(P===null){T===null&&(T=V);break}t&&T&&P.alternate===null&&e(g,T),f=s(P,f,I),k===null?C=P:k.sibling=P,k=P,T=V}if(I===y.length)return n(g,T),Oe&&$i(g,I),C;if(T===null){for(;I<y.length;I++)T=h(g,y[I],E),T!==null&&(f=s(T,f,I),k===null?C=T:k.sibling=T,k=T);return Oe&&$i(g,I),C}for(T=r(g,T);I<y.length;I++)V=p(T,g,I,y[I],E),V!==null&&(t&&V.alternate!==null&&T.delete(V.key===null?I:V.key),f=s(V,f,I),k===null?C=V:k.sibling=V,k=V);return t&&T.forEach(function(b){return e(g,b)}),Oe&&$i(g,I),C}function v(g,f,y,E){var C=Zo(y);if(typeof C!="function")throw Error(L(150));if(y=C.call(y),y==null)throw Error(L(151));for(var k=C=null,T=f,I=f=0,V=null,P=y.next();T!==null&&!P.done;I++,P=y.next()){T.index>I?(V=T,T=null):V=T.sibling;var b=d(g,T,P.value,E);if(b===null){T===null&&(T=V);break}t&&T&&b.alternate===null&&e(g,T),f=s(b,f,I),k===null?C=b:k.sibling=b,k=b,T=V}if(P.done)return n(g,T),Oe&&$i(g,I),C;if(T===null){for(;!P.done;I++,P=y.next())P=h(g,P.value,E),P!==null&&(f=s(P,f,I),k===null?C=P:k.sibling=P,k=P);return Oe&&$i(g,I),C}for(T=r(g,T);!P.done;I++,P=y.next())P=p(T,g,I,P.value,E),P!==null&&(t&&P.alternate!==null&&T.delete(P.key===null?I:P.key),f=s(P,f,I),k===null?C=P:k.sibling=P,k=P);return t&&T.forEach(function(B){return e(g,B)}),Oe&&$i(g,I),C}function w(g,f,y,E){if(typeof y=="object"&&y!==null&&y.type===Ds&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Su:e:{for(var C=y.key,k=f;k!==null;){if(k.key===C){if(C=y.type,C===Ds){if(k.tag===7){n(g,k.sibling),f=i(k,y.props.children),f.return=g,g=f;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Lr&&T1(C)===k.type){n(g,k.sibling),f=i(k,y.props),f.ref=ia(g,k,y),f.return=g,g=f;break e}n(g,k);break}else e(g,k);k=k.sibling}y.type===Ds?(f=Ki(y.props.children,g.mode,E,y.key),f.return=g,g=f):(E=cc(y.type,y.key,y.props,null,g.mode,E),E.ref=ia(g,f,y),E.return=g,g=E)}return o(g);case Ps:e:{for(k=y.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(g,f.sibling),f=i(f,y.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=Vf(y,g.mode,E),f.return=g,g=f}return o(g);case Lr:return k=y._init,w(g,f,k(y._payload),E)}if(da(y))return m(g,f,y,E);if(Zo(y))return v(g,f,y,E);Ou(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,y),f.return=g,g=f):(n(g,f),f=Bf(y,g.mode,E),f.return=g,g=f),o(g)):n(g,f)}return w}var ho=FS(!0),US=FS(!1),Fl={},Hn=Ti(Fl),Za=Ti(Fl),el=Ti(Fl);function Vi(t){if(t===Fl)throw Error(L(174));return t}function iv(t,e){switch(xe(el,e),xe(Za,t),xe(Hn,Fl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fp(e,t)}Ne(Hn),xe(Hn,e)}function fo(){Ne(Hn),Ne(Za),Ne(el)}function BS(t){Vi(el.current);var e=Vi(Hn.current),n=Fp(e,t.type);e!==n&&(xe(Za,t),xe(Hn,n))}function sv(t){Za.current===t&&(Ne(Hn),Ne(Za))}var Le=Ti(0);function Bc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bf=[];function ov(){for(var t=0;t<bf.length;t++)bf[t]._workInProgressVersionPrimary=null;bf.length=0}var sc=Dr.ReactCurrentDispatcher,$f=Dr.ReactCurrentBatchConfig,es=0,Me=null,Ze=null,it=null,Vc=!1,Aa=!1,tl=0,JR=0;function Et(){throw Error(L(321))}function av(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dn(t[n],e[n]))return!1;return!0}function lv(t,e,n,r,i,s){if(es=s,Me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sc.current=t===null||t.memoizedState===null?nN:rN,t=n(r,i),Aa){s=0;do{if(Aa=!1,tl=0,25<=s)throw Error(L(301));s+=1,it=Ze=null,e.updateQueue=null,sc.current=iN,t=n(r,i)}while(Aa)}if(sc.current=zc,e=Ze!==null&&Ze.next!==null,es=0,it=Ze=Me=null,Vc=!1,e)throw Error(L(300));return t}function uv(){var t=tl!==0;return tl=0,t}function Mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Me.memoizedState=it=t:it=it.next=t,it}function mn(){if(Ze===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=it===null?Me.memoizedState:it.next;if(e!==null)it=e,Ze=t;else{if(t===null)throw Error(L(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},it===null?Me.memoizedState=it=t:it=it.next=t}return it}function nl(t,e){return typeof e=="function"?e(t):e}function Lf(t){var e=mn(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((es&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Me.lanes|=c,ts|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Dn(r,e.memoizedState)||(zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Me.lanes|=s,ts|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mf(t){var e=mn(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Dn(s,e.memoizedState)||(zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function VS(){}function zS(t,e){var n=Me,r=mn(),i=e(),s=!Dn(r.memoizedState,i);if(s&&(r.memoizedState=i,zt=!0),r=r.queue,cv(WS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,rl(9,HS.bind(null,n,r,i,e),void 0,null),ot===null)throw Error(L(349));(es&30)!==0||jS(n,e,i)}return i}function jS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function HS(t,e,n,r){e.value=n,e.getSnapshot=r,GS(e)&&KS(t)}function WS(t,e,n){return n(function(){GS(e)&&KS(t)})}function GS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Dn(t,n)}catch{return!0}}function KS(t){var e=Sr(t,1);e!==null&&Pn(e,t,1,-1)}function I1(t){var e=Mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:t},e.queue=t,t=t.dispatch=tN.bind(null,Me,t),[e.memoizedState,t]}function rl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qS(){return mn().memoizedState}function oc(t,e,n,r){var i=Mn();Me.flags|=t,i.memoizedState=rl(1|e,n,void 0,r===void 0?null:r)}function jh(t,e,n,r){var i=mn();r=r===void 0?null:r;var s=void 0;if(Ze!==null){var o=Ze.memoizedState;if(s=o.destroy,r!==null&&av(r,o.deps)){i.memoizedState=rl(e,n,s,r);return}}Me.flags|=t,i.memoizedState=rl(1|e,n,s,r)}function k1(t,e){return oc(8390656,8,t,e)}function cv(t,e){return jh(2048,8,t,e)}function QS(t,e){return jh(4,2,t,e)}function XS(t,e){return jh(4,4,t,e)}function YS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function JS(t,e,n){return n=n!=null?n.concat([t]):null,jh(4,4,YS.bind(null,e,t),n)}function hv(){}function ZS(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&av(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function eC(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&av(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function tC(t,e,n){return(es&21)===0?(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n):(Dn(n,e)||(n=iS(),Me.lanes|=n,ts|=n,t.baseState=!0),e)}function ZR(t,e){var n=Ce;Ce=n!==0&&4>n?n:4,t(!0);var r=$f.transition;$f.transition={};try{t(!1),e()}finally{Ce=n,$f.transition=r}}function nC(){return mn().memoizedState}function eN(t,e,n){var r=ni(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rC(t))iC(e,n);else if(n=bS(t,e,n,r),n!==null){var i=Mt();Pn(n,t,r,i),sC(n,e,r)}}function tN(t,e,n){var r=ni(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rC(t))iC(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Dn(a,o)){var l=e.interleaved;l===null?(i.next=i,nv(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=bS(t,e,i,r),n!==null&&(i=Mt(),Pn(n,t,r,i),sC(n,e,r))}}function rC(t){var e=t.alternate;return t===Me||e!==null&&e===Me}function iC(t,e){Aa=Vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sC(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zg(t,n)}}var zc={readContext:pn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},nN={readContext:pn,useCallback:function(t,e){return Mn().memoizedState=[t,e===void 0?null:e],t},useContext:pn,useEffect:k1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,oc(4194308,4,YS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return oc(4194308,4,t,e)},useInsertionEffect:function(t,e){return oc(4,2,t,e)},useMemo:function(t,e){var n=Mn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Mn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=eN.bind(null,Me,t),[r.memoizedState,t]},useRef:function(t){var e=Mn();return t={current:t},e.memoizedState=t},useState:I1,useDebugValue:hv,useDeferredValue:function(t){return Mn().memoizedState=t},useTransition:function(){var t=I1(!1),e=t[0];return t=ZR.bind(null,t[1]),Mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Me,i=Mn();if(Oe){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),ot===null)throw Error(L(349));(es&30)!==0||jS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,k1(WS.bind(null,r,s,t),[t]),r.flags|=2048,rl(9,HS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Mn(),e=ot.identifierPrefix;if(Oe){var n=cr,r=ur;n=(r&~(1<<32-Nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=tl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=JR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rN={readContext:pn,useCallback:ZS,useContext:pn,useEffect:cv,useImperativeHandle:JS,useInsertionEffect:QS,useLayoutEffect:XS,useMemo:eC,useReducer:Lf,useRef:qS,useState:function(){return Lf(nl)},useDebugValue:hv,useDeferredValue:function(t){var e=mn();return tC(e,Ze.memoizedState,t)},useTransition:function(){var t=Lf(nl)[0],e=mn().memoizedState;return[t,e]},useMutableSource:VS,useSyncExternalStore:zS,useId:nC,unstable_isNewReconciler:!1},iN={readContext:pn,useCallback:ZS,useContext:pn,useEffect:cv,useImperativeHandle:JS,useInsertionEffect:QS,useLayoutEffect:XS,useMemo:eC,useReducer:Mf,useRef:qS,useState:function(){return Mf(nl)},useDebugValue:hv,useDeferredValue:function(t){var e=mn();return Ze===null?e.memoizedState=t:tC(e,Ze.memoizedState,t)},useTransition:function(){var t=Mf(nl)[0],e=mn().memoizedState;return[t,e]},useMutableSource:VS,useSyncExternalStore:zS,useId:nC,unstable_isNewReconciler:!1};function po(t,e){try{var n="",r=e;do n+=D2(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ff(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function am(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sN=typeof WeakMap=="function"?WeakMap:Map;function oC(t,e,n){n=vr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Hc||(Hc=!0,vm=r),am(t,e)},n}function aC(t,e,n){n=vr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){am(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){am(t,e),typeof r!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function x1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new sN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=wN.bind(null,t,e,n),e.then(t,t))}function A1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function R1(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vr(-1,1),e.tag=2,ei(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var oN=Dr.ReactCurrentOwner,zt=!1;function $t(t,e,n,r){e.child=t===null?US(e,null,n,r):ho(e,t.child,n,r)}function N1(t,e,n,r,i){n=n.render;var s=e.ref;return Xs(e,i),r=lv(t,e,n,r,s,i),n=uv(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cr(t,e,i)):(Oe&&n&&Xg(e),e.flags|=1,$t(t,e,r,i),e.child)}function P1(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!wv(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lC(t,e,s,r,i)):(t=cc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qa,n(o,r)&&t.ref===e.ref)return Cr(t,e,i)}return e.flags|=1,t=ri(s,r),t.ref=e.ref,t.return=e,e.child=t}function lC(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Qa(s,r)&&t.ref===e.ref)if(zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(zt=!0);else return e.lanes=t.lanes,Cr(t,e,i)}return lm(t,e,n,r,i)}function uC(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(zs,qt),qt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xe(zs,qt),qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,xe(zs,qt),qt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,xe(zs,qt),qt|=r;return $t(t,e,i,n),e.child}function cC(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lm(t,e,n,r,i){var s=Wt(n)?Ji:Pt.current;return s=uo(e,s),Xs(e,i),n=lv(t,e,n,r,s,i),r=uv(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cr(t,e,i)):(Oe&&r&&Xg(e),e.flags|=1,$t(t,e,n,i),e.child)}function D1(t,e,n,r,i){if(Wt(n)){var s=!0;bc(e)}else s=!1;if(Xs(e,i),e.stateNode===null)ac(t,e),MS(e,n,r),om(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=pn(u):(u=Wt(n)?Ji:Pt.current,u=uo(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&C1(e,o,r,u),Mr=!1;var d=e.memoizedState;o.state=d,Uc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ht.current||Mr?(typeof c=="function"&&(sm(e,n,c,r),l=e.memoizedState),(a=Mr||S1(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$S(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Sn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=pn(l):(l=Wt(n)?Ji:Pt.current,l=uo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&C1(e,o,r,l),Mr=!1,d=e.memoizedState,o.state=d,Uc(e,r,o,i);var m=e.memoizedState;a!==h||d!==m||Ht.current||Mr?(typeof p=="function"&&(sm(e,n,p,r),m=e.memoizedState),(u=Mr||S1(e,n,u,r,d,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return um(t,e,n,r,s,i)}function um(t,e,n,r,i,s){cC(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&v1(e,n,!1),Cr(t,e,s);r=e.stateNode,oN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ho(e,t.child,null,s),e.child=ho(e,null,a,s)):$t(t,e,a,s),e.memoizedState=r.state,i&&v1(e,n,!0),e.child}function hC(t){var e=t.stateNode;e.pendingContext?g1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&g1(t,e.context,!1),iv(t,e.containerInfo)}function O1(t,e,n,r,i){return co(),Jg(i),e.flags|=256,$t(t,e,n,r),e.child}var cm={dehydrated:null,treeContext:null,retryLane:0};function hm(t){return{baseLanes:t,cachePool:null,transitions:null}}function dC(t,e,n){var r=e.pendingProps,i=Le.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),xe(Le,i&1),t===null)return rm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gh(o,r,0,null),t=Ki(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hm(n),e.memoizedState=cm,t):dv(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return aN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ri(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ri(a,s):(s=Ki(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?hm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cm,r}return s=t.child,t=s.sibling,r=ri(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function dv(t,e){return e=Gh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bu(t,e,n,r){return r!==null&&Jg(r),ho(e,t.child,null,n),t=dv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ff(Error(L(422))),bu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gh({mode:"visible",children:r.children},i,0,null),s=Ki(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&ho(e,t.child,null,o),e.child.memoizedState=hm(o),e.memoizedState=cm,s);if((e.mode&1)===0)return bu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(L(419)),r=Ff(s,r,void 0),bu(t,e,o,r)}if(a=(o&t.childLanes)!==0,zt||a){if(r=ot,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Sr(t,i),Pn(r,t,i,-1))}return yv(),r=Ff(Error(L(421))),bu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=EN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qt=Zr(i.nextSibling),Yt=e,Oe=!0,Tn=null,t!==null&&(on[an++]=ur,on[an++]=cr,on[an++]=Zi,ur=t.id,cr=t.overflow,Zi=e),e=dv(e,r.children),e.flags|=4096,e)}function b1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),im(t.return,e,n)}function Uf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fC(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if($t(t,e,r.children,n),r=Le.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&b1(t,n,e);else if(t.tag===19)b1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(xe(Le,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Uf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Uf(e,!0,n,null,s);break;case"together":Uf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ac(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=ri(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ri(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lN(t,e,n){switch(e.tag){case 3:hC(e),co();break;case 5:BS(e);break;case 1:Wt(e.type)&&bc(e);break;case 4:iv(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;xe(Mc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(xe(Le,Le.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?dC(t,e,n):(xe(Le,Le.current&1),t=Cr(t,e,n),t!==null?t.sibling:null);xe(Le,Le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return fC(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(Le,Le.current),r)break;return null;case 22:case 23:return e.lanes=0,uC(t,e,n)}return Cr(t,e,n)}var pC,dm,mC,gC;pC=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dm=function(){};mC=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Vi(Hn.current);var s=null;switch(n){case"input":i=bp(t,i),r=bp(t,r),s=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),s=[];break;case"textarea":i=Mp(t,i),r=Mp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Dc)}Up(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(za.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(za.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Re("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};gC=function(t,e,n,r){n!==r&&(e.flags|=4)};function sa(t,e){if(!Oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function uN(t,e,n){var r=e.pendingProps;switch(Yg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Wt(e.type)&&Oc(),_t(e),null;case 3:return r=e.stateNode,fo(),Ne(Ht),Ne(Pt),ov(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Du(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Tn!==null&&(Em(Tn),Tn=null))),dm(t,e),_t(e),null;case 5:sv(e);var i=Vi(el.current);if(n=e.type,t!==null&&e.stateNode!=null)mC(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return _t(e),null}if(t=Vi(Hn.current),Du(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Fn]=e,r[Ja]=s,t=(e.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(i=0;i<pa.length;i++)Re(pa[i],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":j0(r,s),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Re("invalid",r);break;case"textarea":W0(r,s),Re("invalid",r)}Up(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pu(r.textContent,a,t),i=["children",""+a]):za.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Re("scroll",r)}switch(n){case"input":Cu(r),H0(r,s,!0);break;case"textarea":Cu(r),G0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Dc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=j_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Fn]=e,t[Ja]=r,pC(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bp(n,r),n){case"dialog":Re("cancel",t),Re("close",t),i=r;break;case"iframe":case"object":case"embed":Re("load",t),i=r;break;case"video":case"audio":for(i=0;i<pa.length;i++)Re(pa[i],t);i=r;break;case"source":Re("error",t),i=r;break;case"img":case"image":case"link":Re("error",t),Re("load",t),i=r;break;case"details":Re("toggle",t),i=r;break;case"input":j0(t,r),i=bp(t,r),Re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),Re("invalid",t);break;case"textarea":W0(t,r),i=Mp(t,r),Re("invalid",t);break;default:i=r}Up(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?G_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&H_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ja(t,l):typeof l=="number"&&ja(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(za.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Re("scroll",t):l!=null&&Lg(t,s,l,o))}switch(n){case"input":Cu(t),H0(t,r,!1);break;case"textarea":Cu(t),G0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+di(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Dc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)gC(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=Vi(el.current),Vi(Hn.current),Du(e)){if(r=e.stateNode,n=e.memoizedProps,r[Fn]=e,(s=r.nodeValue!==n)&&(t=Yt,t!==null))switch(t.tag){case 3:Pu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fn]=e,e.stateNode=r}return _t(e),null;case 13:if(Ne(Le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&Qt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)OS(),co(),e.flags|=98560,s=!1;else if(s=Du(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[Fn]=e}else co(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;_t(e),s=!1}else Tn!==null&&(Em(Tn),Tn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Le.current&1)!==0?tt===0&&(tt=3):yv())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return fo(),dm(t,e),t===null&&Xa(e.stateNode.containerInfo),_t(e),null;case 10:return tv(e.type._context),_t(e),null;case 17:return Wt(e.type)&&Oc(),_t(e),null;case 19:if(Ne(Le),s=e.memoizedState,s===null)return _t(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)sa(s,!1);else{if(tt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Bc(t),o!==null){for(e.flags|=128,sa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xe(Le,Le.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ke()>mo&&(e.flags|=128,r=!0,sa(s,!1),e.lanes=4194304)}else{if(!r)if(t=Bc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Oe)return _t(e),null}else 2*Ke()-s.renderingStartTime>mo&&n!==1073741824&&(e.flags|=128,r=!0,sa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ke(),e.sibling=null,n=Le.current,xe(Le,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return vv(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(qt&1073741824)!==0&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function cN(t,e){switch(Yg(e),e.tag){case 1:return Wt(e.type)&&Oc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fo(),Ne(Ht),Ne(Pt),ov(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return sv(e),null;case 13:if(Ne(Le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ne(Le),null;case 4:return fo(),null;case 10:return tv(e.type._context),null;case 22:case 23:return vv(),null;case 24:return null;default:return null}}var $u=!1,It=!1,hN=typeof WeakSet=="function"?WeakSet:Set,G=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function fm(t,e,n){try{n()}catch(r){ze(t,e,r)}}var $1=!1;function dN(t,e){if(Xp=Rc,t=ES(),Qg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yp={focusedElem:t,selectionRange:n},Rc=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var m=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,w=m.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:Sn(e.type,v),w);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(E){ze(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return m=$1,$1=!1,m}function Ra(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&fm(e,n,s)}i=i.next}while(i!==r)}}function Hh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function pm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vC(t){var e=t.alternate;e!==null&&(t.alternate=null,vC(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Fn],delete e[Ja],delete e[em],delete e[qR],delete e[QR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yC(t){return t.tag===5||t.tag===3||t.tag===4}function L1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yC(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Dc));else if(r!==4&&(t=t.child,t!==null))for(mm(t,e,n),t=t.sibling;t!==null;)mm(t,e,n),t=t.sibling}function gm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(gm(t,e,n),t=t.sibling;t!==null;)gm(t,e,n),t=t.sibling}var ft=null,Cn=!1;function br(t,e,n){for(n=n.child;n!==null;)wC(t,e,n),n=n.sibling}function wC(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(Lh,n)}catch{}switch(n.tag){case 5:It||Vs(n,e);case 6:var r=ft,i=Cn;ft=null,br(t,e,n),ft=r,Cn=i,ft!==null&&(Cn?(t=ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(Cn?(t=ft,n=n.stateNode,t.nodeType===8?Df(t.parentNode,n):t.nodeType===1&&Df(t,n),Ka(t)):Df(ft,n.stateNode));break;case 4:r=ft,i=Cn,ft=n.stateNode.containerInfo,Cn=!0,br(t,e,n),ft=r,Cn=i;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&fm(n,e,o),i=i.next}while(i!==r)}br(t,e,n);break;case 1:if(!It&&(Vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ze(n,e,a)}br(t,e,n);break;case 21:br(t,e,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,br(t,e,n),It=r):br(t,e,n);break;default:br(t,e,n)}}function M1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hN),e.forEach(function(r){var i=_N.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _n(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ft=a.stateNode,Cn=!1;break e;case 3:ft=a.stateNode.containerInfo,Cn=!0;break e;case 4:ft=a.stateNode.containerInfo,Cn=!0;break e}a=a.return}if(ft===null)throw Error(L(160));wC(s,o,i),ft=null,Cn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ze(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)EC(e,t),e=e.sibling}function EC(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_n(e,t),Ln(t),r&4){try{Ra(3,t,t.return),Hh(3,t)}catch(v){ze(t,t.return,v)}try{Ra(5,t,t.return)}catch(v){ze(t,t.return,v)}}break;case 1:_n(e,t),Ln(t),r&512&&n!==null&&Vs(n,n.return);break;case 5:if(_n(e,t),Ln(t),r&512&&n!==null&&Vs(n,n.return),t.flags&32){var i=t.stateNode;try{ja(i,"")}catch(v){ze(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&V_(i,s),Bp(a,o);var u=Bp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?G_(i,h):c==="dangerouslySetInnerHTML"?H_(i,h):c==="children"?ja(i,h):Lg(i,c,h,u)}switch(a){case"input":$p(i,s);break;case"textarea":z_(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Gs(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Gs(i,!!s.multiple,s.defaultValue,!0):Gs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ja]=s}catch(v){ze(t,t.return,v)}}break;case 6:if(_n(e,t),Ln(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ze(t,t.return,v)}}break;case 3:if(_n(e,t),Ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ka(e.containerInfo)}catch(v){ze(t,t.return,v)}break;case 4:_n(e,t),Ln(t);break;case 13:_n(e,t),Ln(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mv=Ke())),r&4&&M1(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(It=(u=It)||c,_n(e,t),It=u):_n(e,t),Ln(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(G=t,c=t.child;c!==null;){for(h=G=c;G!==null;){switch(d=G,p=d.child,d.tag){case 0:case 11:case 14:case 15:Ra(4,d,d.return);break;case 1:Vs(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){ze(r,n,v)}}break;case 5:Vs(d,d.return);break;case 22:if(d.memoizedState!==null){U1(h);continue}}p!==null?(p.return=d,G=p):U1(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=W_("display",o))}catch(v){ze(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ze(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:_n(e,t),Ln(t),r&4&&M1(t);break;case 21:break;default:_n(e,t),Ln(t)}}function Ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yC(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ja(i,""),r.flags&=-33);var s=L1(t);gm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=L1(t);mm(t,a,o);break;default:throw Error(L(161))}}catch(l){ze(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fN(t,e,n){G=t,_C(t)}function _C(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$u;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||It;a=$u;var u=It;if($u=o,(It=l)&&!u)for(G=i;G!==null;)o=G,l=o.child,o.tag===22&&o.memoizedState!==null?B1(i):l!==null?(l.return=o,G=l):B1(i);for(;s!==null;)G=s,_C(s),s=s.sibling;G=i,$u=a,It=u}F1(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,G=s):F1(t)}}function F1(t){for(;G!==null;){var e=G;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:It||Hh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!It)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_1(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_1(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ka(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}It||e.flags&512&&pm(e)}catch(d){ze(e,e.return,d)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function U1(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function B1(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hh(4,e)}catch(l){ze(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ze(e,i,l)}}var s=e.return;try{pm(e)}catch(l){ze(e,s,l)}break;case 5:var o=e.return;try{pm(e)}catch(l){ze(e,o,l)}}}catch(l){ze(e,e.return,l)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var pN=Math.ceil,jc=Dr.ReactCurrentDispatcher,fv=Dr.ReactCurrentOwner,fn=Dr.ReactCurrentBatchConfig,ye=0,ot=null,Xe=null,gt=0,qt=0,zs=Ti(0),tt=0,il=null,ts=0,Wh=0,pv=0,Na=null,Vt=null,mv=0,mo=1/0,sr=null,Hc=!1,vm=null,ti=null,Lu=!1,Gr=null,Wc=0,Pa=0,ym=null,lc=-1,uc=0;function Mt(){return(ye&6)!==0?Ke():lc!==-1?lc:lc=Ke()}function ni(t){return(t.mode&1)===0?1:(ye&2)!==0&&gt!==0?gt&-gt:YR.transition!==null?(uc===0&&(uc=iS()),uc):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:hS(t.type)),t)}function Pn(t,e,n,r){if(50<Pa)throw Pa=0,ym=null,Error(L(185));$l(t,n,r),((ye&2)===0||t!==ot)&&(t===ot&&((ye&2)===0&&(Wh|=n),tt===4&&Ur(t,gt)),Gt(t,r),n===1&&ye===0&&(e.mode&1)===0&&(mo=Ke()+500,Vh&&Ii()))}function Gt(t,e){var n=t.callbackNode;Y2(t,e);var r=Ac(t,t===ot?gt:0);if(r===0)n!==null&&Q0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Q0(n),e===1)t.tag===0?XR(V1.bind(null,t)):NS(V1.bind(null,t)),GR(function(){(ye&6)===0&&Ii()}),n=null;else{switch(sS(r)){case 1:n=Vg;break;case 4:n=nS;break;case 16:n=xc;break;case 536870912:n=rS;break;default:n=xc}n=RC(n,SC.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function SC(t,e){if(lc=-1,uc=0,(ye&6)!==0)throw Error(L(327));var n=t.callbackNode;if(Ys()&&t.callbackNode!==n)return null;var r=Ac(t,t===ot?gt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Gc(t,r);else{e=r;var i=ye;ye|=2;var s=TC();(ot!==t||gt!==e)&&(sr=null,mo=Ke()+500,Gi(t,e));do try{vN();break}catch(a){CC(t,a)}while(1);ev(),jc.current=s,ye=i,Xe!==null?e=0:(ot=null,gt=0,e=tt)}if(e!==0){if(e===2&&(i=Wp(t),i!==0&&(r=i,e=wm(t,i))),e===1)throw n=il,Gi(t,0),Ur(t,r),Gt(t,Ke()),n;if(e===6)Ur(t,r);else{if(i=t.current.alternate,(r&30)===0&&!mN(i)&&(e=Gc(t,r),e===2&&(s=Wp(t),s!==0&&(r=s,e=wm(t,s))),e===1))throw n=il,Gi(t,0),Ur(t,r),Gt(t,Ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Li(t,Vt,sr);break;case 3:if(Ur(t,r),(r&130023424)===r&&(e=mv+500-Ke(),10<e)){if(Ac(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Zp(Li.bind(null,t,Vt,sr),e);break}Li(t,Vt,sr);break;case 4:if(Ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pN(r/1960))-r,10<r){t.timeoutHandle=Zp(Li.bind(null,t,Vt,sr),r);break}Li(t,Vt,sr);break;case 5:Li(t,Vt,sr);break;default:throw Error(L(329))}}}return Gt(t,Ke()),t.callbackNode===n?SC.bind(null,t):null}function wm(t,e){var n=Na;return t.current.memoizedState.isDehydrated&&(Gi(t,e).flags|=256),t=Gc(t,e),t!==2&&(e=Vt,Vt=n,e!==null&&Em(e)),t}function Em(t){Vt===null?Vt=t:Vt.push.apply(Vt,t)}function mN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Dn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ur(t,e){for(e&=~pv,e&=~Wh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nn(e),r=1<<n;t[n]=-1,e&=~r}}function V1(t){if((ye&6)!==0)throw Error(L(327));Ys();var e=Ac(t,0);if((e&1)===0)return Gt(t,Ke()),null;var n=Gc(t,e);if(t.tag!==0&&n===2){var r=Wp(t);r!==0&&(e=r,n=wm(t,r))}if(n===1)throw n=il,Gi(t,0),Ur(t,e),Gt(t,Ke()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Li(t,Vt,sr),Gt(t,Ke()),null}function gv(t,e){var n=ye;ye|=1;try{return t(e)}finally{ye=n,ye===0&&(mo=Ke()+500,Vh&&Ii())}}function ns(t){Gr!==null&&Gr.tag===0&&(ye&6)===0&&Ys();var e=ye;ye|=1;var n=fn.transition,r=Ce;try{if(fn.transition=null,Ce=1,t)return t()}finally{Ce=r,fn.transition=n,ye=e,(ye&6)===0&&Ii()}}function vv(){qt=zs.current,Ne(zs)}function Gi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,WR(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(Yg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oc();break;case 3:fo(),Ne(Ht),Ne(Pt),ov();break;case 5:sv(r);break;case 4:fo();break;case 13:Ne(Le);break;case 19:Ne(Le);break;case 10:tv(r.type._context);break;case 22:case 23:vv()}n=n.return}if(ot=t,Xe=t=ri(t.current,null),gt=qt=e,tt=0,il=null,pv=Wh=ts=0,Vt=Na=null,Bi!==null){for(e=0;e<Bi.length;e++)if(n=Bi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Bi=null}return t}function CC(t,e){do{var n=Xe;try{if(ev(),sc.current=zc,Vc){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vc=!1}if(es=0,it=Ze=Me=null,Aa=!1,tl=0,fv.current=null,n===null||n.return===null){tt=1,il=e,Xe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=gt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=A1(o);if(p!==null){p.flags&=-257,R1(p,o,a,s,e),p.mode&1&&x1(s,u,e),e=p,l=u;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if((e&1)===0){x1(s,u,e),yv();break e}l=Error(L(426))}}else if(Oe&&a.mode&1){var w=A1(o);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),R1(w,o,a,s,e),Jg(po(l,a));break e}}s=l=po(l,a),tt!==4&&(tt=2),Na===null?Na=[s]:Na.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=oC(s,l,e);E1(s,g);break e;case 1:a=l;var f=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ti===null||!ti.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=aC(s,a,e);E1(s,E);break e}}s=s.return}while(s!==null)}kC(n)}catch(C){e=C,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(1)}function TC(){var t=jc.current;return jc.current=zc,t===null?zc:t}function yv(){(tt===0||tt===3||tt===2)&&(tt=4),ot===null||(ts&268435455)===0&&(Wh&268435455)===0||Ur(ot,gt)}function Gc(t,e){var n=ye;ye|=2;var r=TC();(ot!==t||gt!==e)&&(sr=null,Gi(t,e));do try{gN();break}catch(i){CC(t,i)}while(1);if(ev(),ye=n,jc.current=r,Xe!==null)throw Error(L(261));return ot=null,gt=0,tt}function gN(){for(;Xe!==null;)IC(Xe)}function vN(){for(;Xe!==null&&!z2();)IC(Xe)}function IC(t){var e=AC(t.alternate,t,qt);t.memoizedProps=t.pendingProps,e===null?kC(t):Xe=e,fv.current=null}function kC(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=uN(n,e,qt),n!==null){Xe=n;return}}else{if(n=cN(n,e),n!==null){n.flags&=32767,Xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,Xe=null;return}}if(e=e.sibling,e!==null){Xe=e;return}Xe=e=t}while(e!==null);tt===0&&(tt=5)}function Li(t,e,n){var r=Ce,i=fn.transition;try{fn.transition=null,Ce=1,yN(t,e,n,r)}finally{fn.transition=i,Ce=r}return null}function yN(t,e,n,r){do Ys();while(Gr!==null);if((ye&6)!==0)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(J2(t,s),t===ot&&(Xe=ot=null,gt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Lu||(Lu=!0,RC(xc,function(){return Ys(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=fn.transition,fn.transition=null;var o=Ce;Ce=1;var a=ye;ye|=4,fv.current=null,dN(t,n),EC(n,t),FR(Yp),Rc=!!Xp,Yp=Xp=null,t.current=n,fN(n),j2(),ye=a,Ce=o,fn.transition=s}else t.current=n;if(Lu&&(Lu=!1,Gr=t,Wc=i),s=t.pendingLanes,s===0&&(ti=null),G2(n.stateNode),Gt(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hc)throw Hc=!1,t=vm,vm=null,t;return(Wc&1)!==0&&t.tag!==0&&Ys(),s=t.pendingLanes,(s&1)!==0?t===ym?Pa++:(Pa=0,ym=t):Pa=0,Ii(),null}function Ys(){if(Gr!==null){var t=sS(Wc),e=fn.transition,n=Ce;try{if(fn.transition=null,Ce=16>t?16:t,Gr===null)var r=!1;else{if(t=Gr,Gr=null,Wc=0,(ye&6)!==0)throw Error(L(331));var i=ye;for(ye|=4,G=t.current;G!==null;){var s=G,o=s.child;if((G.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(G=u;G!==null;){var c=G;switch(c.tag){case 0:case 11:case 15:Ra(8,c,s)}var h=c.child;if(h!==null)h.return=c,G=h;else for(;G!==null;){c=G;var d=c.sibling,p=c.return;if(vC(c),c===u){G=null;break}if(d!==null){d.return=p,G=d;break}G=p}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}G=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ra(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,G=g;break e}G=s.return}}var f=t.current;for(G=f;G!==null;){o=G;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,G=y;else e:for(o=f;G!==null;){if(a=G,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Hh(9,a)}}catch(C){ze(a,a.return,C)}if(a===o){G=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,G=E;break e}G=a.return}}if(ye=i,Ii(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(Lh,t)}catch{}r=!0}return r}finally{Ce=n,fn.transition=e}}return!1}function z1(t,e,n){e=po(n,e),e=oC(t,e,1),t=ei(t,e,1),e=Mt(),t!==null&&($l(t,1,e),Gt(t,e))}function ze(t,e,n){if(t.tag===3)z1(t,t,n);else for(;e!==null;){if(e.tag===3){z1(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ti===null||!ti.has(r))){t=po(n,t),t=aC(e,t,1),e=ei(e,t,1),t=Mt(),e!==null&&($l(e,1,t),Gt(e,t));break}}e=e.return}}function wN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Mt(),t.pingedLanes|=t.suspendedLanes&n,ot===t&&(gt&n)===n&&(tt===4||tt===3&&(gt&130023424)===gt&&500>Ke()-mv?Gi(t,0):pv|=n),Gt(t,e)}function xC(t,e){e===0&&((t.mode&1)===0?e=1:(e=ku,ku<<=1,(ku&130023424)===0&&(ku=4194304)));var n=Mt();t=Sr(t,e),t!==null&&($l(t,e,n),Gt(t,n))}function EN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xC(t,n)}function _N(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),xC(t,n)}var AC;AC=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ht.current)zt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return zt=!1,lN(t,e,n);zt=(t.flags&131072)!==0}else zt=!1,Oe&&(e.flags&1048576)!==0&&PS(e,Lc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ac(t,e),t=e.pendingProps;var i=uo(e,Pt.current);Xs(e,n),i=lv(null,e,r,t,i,n);var s=uv();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(r)?(s=!0,bc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rv(e),i.updater=zh,e.stateNode=i,i._reactInternals=e,om(e,r,t,n),e=um(null,e,r,!0,s,n)):(e.tag=0,Oe&&s&&Xg(e),$t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ac(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=CN(r),t=Sn(r,t),i){case 0:e=lm(null,e,r,t,n);break e;case 1:e=D1(null,e,r,t,n);break e;case 11:e=N1(null,e,r,t,n);break e;case 14:e=P1(null,e,r,Sn(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),lm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),D1(t,e,r,i,n);case 3:e:{if(hC(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$S(t,e),Uc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=po(Error(L(423)),e),e=O1(t,e,r,n,i);break e}else if(r!==i){i=po(Error(L(424)),e),e=O1(t,e,r,n,i);break e}else for(Qt=Zr(e.stateNode.containerInfo.firstChild),Yt=e,Oe=!0,Tn=null,n=US(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(co(),r===i){e=Cr(t,e,n);break e}$t(t,e,r,n)}e=e.child}return e;case 5:return BS(e),t===null&&rm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Jp(r,i)?o=null:s!==null&&Jp(r,s)&&(e.flags|=32),cC(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&rm(e),null;case 13:return dC(t,e,n);case 4:return iv(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ho(e,null,r,n):$t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),N1(t,e,r,i,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,xe(Mc,r._currentValue),r._currentValue=o,s!==null)if(Dn(s.value,o)){if(s.children===i.children&&!Ht.current){e=Cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=vr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),im(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),im(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Xs(e,n),i=pn(i),r=r(i),e.flags|=1,$t(t,e,r,n),e.child;case 14:return r=e.type,i=Sn(r,e.pendingProps),i=Sn(r.type,i),P1(t,e,r,i,n);case 15:return lC(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),ac(t,e),e.tag=1,Wt(r)?(t=!0,bc(e)):t=!1,Xs(e,n),MS(e,r,i),om(e,r,i,n),um(null,e,r,!0,t,n);case 19:return fC(t,e,n);case 22:return uC(t,e,n)}throw Error(L(156,e.tag))};function RC(t,e){return tS(t,e)}function SN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(t,e,n,r){return new SN(t,e,n,r)}function wv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function CN(t){if(typeof t=="function")return wv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fg)return 11;if(t===Ug)return 14}return 2}function ri(t,e){var n=t.alternate;return n===null?(n=hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")wv(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ds:return Ki(n.children,i,s,e);case Mg:o=8,i|=8;break;case Np:return t=hn(12,n,e,i|2),t.elementType=Np,t.lanes=s,t;case Pp:return t=hn(13,n,e,i),t.elementType=Pp,t.lanes=s,t;case Dp:return t=hn(19,n,e,i),t.elementType=Dp,t.lanes=s,t;case F_:return Gh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L_:o=10;break e;case M_:o=9;break e;case Fg:o=11;break e;case Ug:o=14;break e;case Lr:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=hn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ki(t,e,n,r){return t=hn(7,t,r,e),t.lanes=n,t}function Gh(t,e,n,r){return t=hn(22,t,r,e),t.elementType=F_,t.lanes=n,t.stateNode={isHidden:!1},t}function Bf(t,e,n){return t=hn(6,t,null,e),t.lanes=n,t}function Vf(t,e,n){return e=hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_f(0),this.expirationTimes=_f(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_f(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ev(t,e,n,r,i,s,o,a,l){return t=new TN(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rv(s),t}function IN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ps,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function NC(t){if(!t)return fi;t=t._reactInternals;e:{if(vs(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(Wt(n))return RS(t,n,e)}return e}function PC(t,e,n,r,i,s,o,a,l){return t=Ev(n,r,!0,t,i,s,o,a,l),t.context=NC(null),n=t.current,r=Mt(),i=ni(n),s=vr(r,i),s.callback=e!=null?e:null,ei(n,s,i),t.current.lanes=i,$l(t,i,r),Gt(t,r),t}function Kh(t,e,n,r){var i=e.current,s=Mt(),o=ni(i);return n=NC(n),e.context===null?e.context=n:e.pendingContext=n,e=vr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ei(i,e,o),t!==null&&(Pn(t,i,o,s),ic(t,i,o)),o}function Kc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function j1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _v(t,e){j1(t,e),(t=t.alternate)&&j1(t,e)}function kN(){return null}var DC=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sv(t){this._internalRoot=t}qh.prototype.render=Sv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));Kh(t,e,null,null)};qh.prototype.unmount=Sv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){Kh(null,t,null,null)}),e[_r]=null}};function qh(t){this._internalRoot=t}qh.prototype.unstable_scheduleHydration=function(t){if(t){var e=lS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fr.length&&e!==0&&e<Fr[n].priority;n++);Fr.splice(n,0,t),n===0&&cS(t)}};function Cv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function H1(){}function xN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Kc(o);s.call(u)}}var o=PC(e,r,t,0,null,!1,!1,"",H1);return t._reactRootContainer=o,t[_r]=o.current,Xa(t.nodeType===8?t.parentNode:t),ns(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Kc(l);a.call(u)}}var l=Ev(t,0,!1,null,null,!1,!1,"",H1);return t._reactRootContainer=l,t[_r]=l.current,Xa(t.nodeType===8?t.parentNode:t),ns(function(){Kh(e,l,n,r)}),l}function Xh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Kc(o);a.call(l)}}Kh(e,o,t,i)}else o=xN(n,e,t,i,r);return Kc(o)}oS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fa(e.pendingLanes);n!==0&&(zg(e,n|1),Gt(e,Ke()),(ye&6)===0&&(mo=Ke()+500,Ii()))}break;case 13:ns(function(){var r=Sr(t,1);if(r!==null){var i=Mt();Pn(r,t,1,i)}}),_v(t,1)}};jg=function(t){if(t.tag===13){var e=Sr(t,134217728);if(e!==null){var n=Mt();Pn(e,t,134217728,n)}_v(t,134217728)}};aS=function(t){if(t.tag===13){var e=ni(t),n=Sr(t,e);if(n!==null){var r=Mt();Pn(n,t,e,r)}_v(t,e)}};lS=function(){return Ce};uS=function(t,e){var n=Ce;try{return Ce=t,e()}finally{Ce=n}};zp=function(t,e,n){switch(e){case"input":if($p(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bh(r);if(!i)throw Error(L(90));B_(r),$p(r,i)}}}break;case"textarea":z_(t,n);break;case"select":e=n.value,e!=null&&Gs(t,!!n.multiple,e,!1)}};Q_=gv;X_=ns;var AN={usingClientEntryPoint:!1,Events:[Ml,Ls,Bh,K_,q_,gv]},oa={findFiberByHostInstance:Ui,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},RN={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Z_(t),t===null?null:t.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||kN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Lh=Mu.inject(RN),jn=Mu}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AN;nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cv(e))throw Error(L(200));return IN(t,e,null,n)};nn.createRoot=function(t,e){if(!Cv(t))throw Error(L(299));var n=!1,r="",i=DC;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ev(t,1,!1,null,null,n,!1,r,i),t[_r]=e.current,Xa(t.nodeType===8?t.parentNode:t),new Sv(e)};nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=Z_(e),t=t===null?null:t.stateNode,t};nn.flushSync=function(t){return ns(t)};nn.hydrate=function(t,e,n){if(!Qh(e))throw Error(L(200));return Xh(null,t,e,!0,n)};nn.hydrateRoot=function(t,e,n){if(!Cv(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=DC;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=PC(e,null,t,1,n!=null?n:null,i,!1,s,o),t[_r]=e.current,Xa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new qh(e)};nn.render=function(t,e,n){if(!Qh(e))throw Error(L(200));return Xh(null,t,e,!1,n)};nn.unmountComponentAtNode=function(t){if(!Qh(t))throw Error(L(40));return t._reactRootContainer?(ns(function(){Xh(null,null,t,!1,function(){t._reactRootContainer=null,t[_r]=null})}),!0):!1};nn.unstable_batchedUpdates=gv;nn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Qh(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return Xh(t,e,n,!1,r)};nn.version="18.2.0-next-9e3b772b8-20220608";function OC(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(OC)}catch(t){console.error(t)}}OC(),Og.exports=nn;var W1=Og.exports;Ap.createRoot=W1.createRoot,Ap.hydrateRoot=W1.hydrateRoot;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sl.apply(this,arguments)}var Kr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Kr||(Kr={}));const G1="popstate";function NN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return _m("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:qc(i)}return DN(e,n,null,t)}function Je(t,e){if(t===!1||t===null||typeof t=="undefined")throw new Error(e)}function Tv(t,e){if(!t){typeof console!="undefined"&&console.warn(e);try{throw new Error(e)}catch{}}}function PN(){return Math.random().toString(36).substr(2,8)}function K1(t,e){return{usr:t.state,key:t.key,idx:e}}function _m(t,e,n,r){return n===void 0&&(n=null),sl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Oo(e):e,{state:n,key:e&&e.key||r||PN()})}function qc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Oo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function DN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Kr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(sl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Kr.Pop;let w=c(),g=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:g})}function d(w,g){a=Kr.Push;let f=_m(v.location,w,g);n&&n(f,w),u=c()+1;let y=K1(f,u),E=v.createHref(f);try{o.pushState(y,"",E)}catch{i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function p(w,g){a=Kr.Replace;let f=_m(v.location,w,g);n&&n(f,w),u=c();let y=K1(f,u),E=v.createHref(f);o.replaceState(y,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function m(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:qc(w);return Je(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let v={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(G1,h),l=w,()=>{i.removeEventListener(G1,h),l=null}},createHref(w){return e(i,w)},createURL:m,encodeLocation(w){let g=m(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:p,go(w){return o.go(w)}};return v}var q1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(q1||(q1={}));function ON(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Oo(e):e,i=Iv(r.pathname||"/",n);if(i==null)return null;let s=bC(t);bN(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=jN(s[a],GN(i));return o}function bC(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Je(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ii([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Je(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),bC(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:VN(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of $C(s.path))i(s,o,l)}),e}function $C(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=$C(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function bN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:zN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $N=/^:\w+$/,LN=3,MN=2,FN=1,UN=10,BN=-2,Q1=t=>t==="*";function VN(t,e){let n=t.split("/"),r=n.length;return n.some(Q1)&&(r+=BN),e&&(r+=MN),n.filter(i=>!Q1(i)).reduce((i,s)=>i+($N.test(s)?LN:s===""?FN:UN),r)}function zN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jN(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=HN({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:ii([i,c.pathname]),pathnameBase:XN(ii([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=ii([i,c.pathnameBase]))}return s}function HN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=WN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=KN(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function WN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Tv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function GN(t){try{return decodeURI(t)}catch(e){return Tv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function KN(t,e){try{return decodeURIComponent(t)}catch(n){return Tv(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Iv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function qN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Oo(t):t;return{pathname:n?n.startsWith("/")?n:QN(n,e):e,search:YN(r),hash:JN(i)}}function QN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function LC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function MC(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Oo(t):(i=sl({},t),Je(!i.pathname||!i.pathname.includes("?"),zf("?","pathname","search",i)),Je(!i.pathname||!i.pathname.includes("#"),zf("#","pathname","hash",i)),Je(!i.search||!i.search.includes("#"),zf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=qN(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ii=t=>t.join("/").replace(/\/\/+/g,"/"),XN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),YN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,JN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ZN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const eP=["post","put","patch","delete"];[...eP];/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qc(){return Qc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qc.apply(this,arguments)}const FC=D.exports.createContext(null),tP=D.exports.createContext(null),bo=D.exports.createContext(null),Yh=D.exports.createContext(null),ki=D.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),UC=D.exports.createContext(null);function nP(t,e){let{relative:n}=e===void 0?{}:e;Ul()||Je(!1);let{basename:r,navigator:i}=D.exports.useContext(bo),{hash:s,pathname:o,search:a}=VC(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ii([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ul(){return D.exports.useContext(Yh)!=null}function Bl(){return Ul()||Je(!1),D.exports.useContext(Yh).location}function BC(t){D.exports.useContext(bo).static||D.exports.useLayoutEffect(t)}function ys(){let{isDataRoute:t}=D.exports.useContext(ki);return t?mP():rP()}function rP(){Ul()||Je(!1);let{basename:t,navigator:e}=D.exports.useContext(bo),{matches:n}=D.exports.useContext(ki),{pathname:r}=Bl(),i=JSON.stringify(LC(n).map(a=>a.pathnameBase)),s=D.exports.useRef(!1);return BC(()=>{s.current=!0}),D.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=MC(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:ii([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function kv(){let{matches:t}=D.exports.useContext(ki),e=t[t.length-1];return e?e.params:{}}function VC(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=D.exports.useContext(ki),{pathname:i}=Bl(),s=JSON.stringify(LC(r).map(o=>o.pathnameBase));return D.exports.useMemo(()=>MC(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function iP(t,e){return sP(t,e)}function sP(t,e,n){Ul()||Je(!1);let{navigator:r}=D.exports.useContext(bo),{matches:i}=D.exports.useContext(ki),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Bl(),u;if(e){var c;let v=typeof e=="string"?Oo(e):e;a==="/"||((c=v.pathname)==null?void 0:c.startsWith(a))||Je(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=ON(t,{pathname:d}),m=cP(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:ii([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:ii([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&m?D.exports.createElement(Yh.Provider,{value:{location:Qc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Kr.Pop}},m):m}function oP(){let t=pP(),e=ZN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return D.exports.createElement(D.exports.Fragment,null,D.exports.createElement("h2",null,"Unexpected Application Error!"),D.exports.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.exports.createElement("pre",{style:i},n):null,s)}const aP=D.exports.createElement(oP,null);class lP extends D.exports.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?D.exports.createElement(ki.Provider,{value:this.props.routeContext},D.exports.createElement(UC.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uP(t){let{routeContext:e,match:n,children:r}=t,i=D.exports.useContext(FC);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.exports.createElement(ki.Provider,{value:e},r)}function cP(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Je(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||aP);let d=e.concat(s.slice(0,u+1)),p=()=>{let m;return c?m=h:l.route.Component?m=D.exports.createElement(l.route.Component,null):l.route.element?m=l.route.element:m=a,D.exports.createElement(uP,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:m})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?D.exports.createElement(lP,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var Sm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Sm||(Sm={}));var ol;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(ol||(ol={}));function hP(t){let e=D.exports.useContext(FC);return e||Je(!1),e}function dP(t){let e=D.exports.useContext(tP);return e||Je(!1),e}function fP(t){let e=D.exports.useContext(ki);return e||Je(!1),e}function zC(t){let e=fP(),n=e.matches[e.matches.length-1];return n.route.id||Je(!1),n.route.id}function pP(){var t;let e=D.exports.useContext(UC),n=dP(ol.UseRouteError),r=zC(ol.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function mP(){let{router:t}=hP(Sm.UseNavigateStable),e=zC(ol.UseNavigateStable),n=D.exports.useRef(!1);return BC(()=>{n.current=!0}),D.exports.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Qc({fromRouteId:e},s)))},[t,e])}function Kt(t){Je(!1)}function gP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Kr.Pop,navigator:s,static:o=!1}=t;Ul()&&Je(!1);let a=e.replace(/^\/*/,"/"),l=D.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Oo(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,m=D.exports.useMemo(()=>{let v=Iv(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return m==null?null:D.exports.createElement(bo.Provider,{value:l},D.exports.createElement(Yh.Provider,{children:n,value:m}))}function vP(t){let{children:e,location:n}=t;return iP(Cm(e),n)}var X1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(X1||(X1={}));new Promise(()=>{});function Cm(t,e){e===void 0&&(e=[]);let n=[];return D.exports.Children.forEach(t,(r,i)=>{if(!D.exports.isValidElement(r))return;let s=[...e,i];if(r.type===D.exports.Fragment){n.push.apply(n,Cm(r.props.children,s));return}r.type!==Kt&&Je(!1),!r.props.index||!r.props.children||Je(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Cm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tm(){return Tm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tm.apply(this,arguments)}function yP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function wP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function EP(t,e){return t.button===0&&(!e||e==="_self")&&!wP(t)}const _P=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function SP(t){let{basename:e,children:n,window:r}=t,i=D.exports.useRef();i.current==null&&(i.current=NN({window:r,v5Compat:!0}));let s=i.current,[o,a]=D.exports.useState({action:s.action,location:s.location});return D.exports.useLayoutEffect(()=>s.listen(a),[s]),D.exports.createElement(gP,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const CP=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",TP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kn=D.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=yP(e,_P),{basename:d}=D.exports.useContext(bo),p,m=!1;if(typeof u=="string"&&TP.test(u)&&(p=u,CP))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=Iv(y.pathname,d);y.origin===f.origin&&E!=null?u=E+y.search+y.hash:m=!0}catch{}let v=nP(u,{relative:i}),w=IP(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(f){r&&r(f),f.defaultPrevented||w(f)}return D.exports.createElement("a",Tm({},h,{href:p||v,onClick:m||s?r:g,ref:n,target:l}))});var Y1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Y1||(Y1={}));var J1;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(J1||(J1={}));function IP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=ys(),l=Bl(),u=VC(t,{relative:o});return D.exports.useCallback(c=>{if(EP(c,n)){c.preventDefault();let h=r!==void 0?r:qc(l)===qc(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var xv={exports:{}},Ie={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av=Symbol.for("react.element"),Rv=Symbol.for("react.portal"),Jh=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),ed=Symbol.for("react.profiler"),td=Symbol.for("react.provider"),nd=Symbol.for("react.context"),kP=Symbol.for("react.server_context"),rd=Symbol.for("react.forward_ref"),id=Symbol.for("react.suspense"),sd=Symbol.for("react.suspense_list"),od=Symbol.for("react.memo"),ad=Symbol.for("react.lazy"),xP=Symbol.for("react.offscreen"),jC;jC=Symbol.for("react.module.reference");function yn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Av:switch(t=t.type,t){case Jh:case ed:case Zh:case id:case sd:return t;default:switch(t=t&&t.$$typeof,t){case kP:case nd:case rd:case ad:case od:case td:return t;default:return e}}case Rv:return e}}}Ie.ContextConsumer=nd;Ie.ContextProvider=td;Ie.Element=Av;Ie.ForwardRef=rd;Ie.Fragment=Jh;Ie.Lazy=ad;Ie.Memo=od;Ie.Portal=Rv;Ie.Profiler=ed;Ie.StrictMode=Zh;Ie.Suspense=id;Ie.SuspenseList=sd;Ie.isAsyncMode=function(){return!1};Ie.isConcurrentMode=function(){return!1};Ie.isContextConsumer=function(t){return yn(t)===nd};Ie.isContextProvider=function(t){return yn(t)===td};Ie.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Av};Ie.isForwardRef=function(t){return yn(t)===rd};Ie.isFragment=function(t){return yn(t)===Jh};Ie.isLazy=function(t){return yn(t)===ad};Ie.isMemo=function(t){return yn(t)===od};Ie.isPortal=function(t){return yn(t)===Rv};Ie.isProfiler=function(t){return yn(t)===ed};Ie.isStrictMode=function(t){return yn(t)===Zh};Ie.isSuspense=function(t){return yn(t)===id};Ie.isSuspenseList=function(t){return yn(t)===sd};Ie.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Jh||t===ed||t===Zh||t===id||t===sd||t===xP||typeof t=="object"&&t!==null&&(t.$$typeof===ad||t.$$typeof===od||t.$$typeof===td||t.$$typeof===nd||t.$$typeof===rd||t.$$typeof===jC||t.getModuleId!==void 0)};Ie.typeOf=yn;xv.exports=Ie;function AP(t){function e(R,N,M,J,_){for(var Q=0,F=0,ue=0,ne=0,_e,se,H=0,fe=0,de,Ve=de=_e=0,we=0,ht=0,Yo=0,dt=0,Eu=M.length,Jo=Eu-1,En,oe="",Ge="",pf="",mf="",Or;we<Eu;){if(se=M.charCodeAt(we),we===Jo&&F+ne+ue+Q!==0&&(F!==0&&(se=F===47?10:47),ne=ue=Q=0,Eu++,Jo++),F+ne+ue+Q===0){if(we===Jo&&(0<ht&&(oe=oe.replace(d,"")),0<oe.trim().length)){switch(se){case 32:case 9:case 59:case 13:case 10:break;default:oe+=M.charAt(we)}se=59}switch(se){case 123:for(oe=oe.trim(),_e=oe.charCodeAt(0),de=1,dt=++we;we<Eu;){switch(se=M.charCodeAt(we)){case 123:de++;break;case 125:de--;break;case 47:switch(se=M.charCodeAt(we+1)){case 42:case 47:e:{for(Ve=we+1;Ve<Jo;++Ve)switch(M.charCodeAt(Ve)){case 47:if(se===42&&M.charCodeAt(Ve-1)===42&&we+2!==Ve){we=Ve+1;break e}break;case 10:if(se===47){we=Ve+1;break e}}we=Ve}}break;case 91:se++;case 40:se++;case 34:case 39:for(;we++<Jo&&M.charCodeAt(we)!==se;);}if(de===0)break;we++}switch(de=M.substring(dt,we),_e===0&&(_e=(oe=oe.replace(h,"").trim()).charCodeAt(0)),_e){case 64:switch(0<ht&&(oe=oe.replace(d,"")),se=oe.charCodeAt(1),se){case 100:case 109:case 115:case 45:ht=N;break;default:ht=pe}if(de=e(N,ht,de,se,_+1),dt=de.length,0<x&&(ht=n(pe,oe,Yo),Or=a(3,de,ht,N,j,B,dt,se,_,J),oe=ht.join(""),Or!==void 0&&(dt=(de=Or.trim()).length)===0&&(se=0,de="")),0<dt)switch(se){case 115:oe=oe.replace(k,o);case 100:case 109:case 45:de=oe+"{"+de+"}";break;case 107:oe=oe.replace(f,"$1 $2"),de=oe+"{"+de+"}",de=q===1||q===2&&s("@"+de,3)?"@-webkit-"+de+"@"+de:"@"+de;break;default:de=oe+de,J===112&&(de=(Ge+=de,""))}else de="";break;default:de=e(N,n(N,oe,Yo),de,J,_+1)}pf+=de,de=Yo=ht=Ve=_e=0,oe="",se=M.charCodeAt(++we);break;case 125:case 59:if(oe=(0<ht?oe.replace(d,""):oe).trim(),1<(dt=oe.length))switch(Ve===0&&(_e=oe.charCodeAt(0),_e===45||96<_e&&123>_e)&&(dt=(oe=oe.replace(" ",":")).length),0<x&&(Or=a(1,oe,N,R,j,B,Ge.length,J,_,J))!==void 0&&(dt=(oe=Or.trim()).length)===0&&(oe="\0\0"),_e=oe.charCodeAt(0),se=oe.charCodeAt(1),_e){case 0:break;case 64:if(se===105||se===99){mf+=oe+M.charAt(we);break}default:oe.charCodeAt(dt-1)!==58&&(Ge+=i(oe,_e,se,oe.charCodeAt(2)))}Yo=ht=Ve=_e=0,oe="",se=M.charCodeAt(++we)}}switch(se){case 13:case 10:F===47?F=0:1+_e===0&&J!==107&&0<oe.length&&(ht=1,oe+="\0"),0<x*A&&a(0,oe,N,R,j,B,Ge.length,J,_,J),B=1,j++;break;case 59:case 125:if(F+ne+ue+Q===0){B++;break}default:switch(B++,En=M.charAt(we),se){case 9:case 32:if(ne+Q+F===0)switch(H){case 44:case 58:case 9:case 32:En="";break;default:se!==32&&(En=" ")}break;case 0:En="\\0";break;case 12:En="\\f";break;case 11:En="\\v";break;case 38:ne+F+Q===0&&(ht=Yo=1,En="\f"+En);break;case 108:if(ne+F+Q+Y===0&&0<Ve)switch(we-Ve){case 2:H===112&&M.charCodeAt(we-3)===58&&(Y=H);case 8:fe===111&&(Y=fe)}break;case 58:ne+F+Q===0&&(Ve=we);break;case 44:F+ue+ne+Q===0&&(ht=1,En+="\r");break;case 34:case 39:F===0&&(ne=ne===se?0:ne===0?se:ne);break;case 91:ne+F+ue===0&&Q++;break;case 93:ne+F+ue===0&&Q--;break;case 41:ne+F+Q===0&&ue--;break;case 40:if(ne+F+Q===0){if(_e===0)switch(2*H+3*fe){case 533:break;default:_e=1}ue++}break;case 64:F+ue+ne+Q+Ve+de===0&&(de=1);break;case 42:case 47:if(!(0<ne+Q+ue))switch(F){case 0:switch(2*se+3*M.charCodeAt(we+1)){case 235:F=47;break;case 220:dt=we,F=42}break;case 42:se===47&&H===42&&dt+2!==we&&(M.charCodeAt(dt+2)===33&&(Ge+=M.substring(dt,we+1)),En="",F=0)}}F===0&&(oe+=En)}fe=H,H=se,we++}if(dt=Ge.length,0<dt){if(ht=N,0<x&&(Or=a(2,Ge,ht,R,j,B,dt,J,_,J),Or!==void 0&&(Ge=Or).length===0))return mf+Ge+pf;if(Ge=ht.join(",")+"{"+Ge+"}",q*Y!==0){switch(q!==2||s(Ge,2)||(Y=0),Y){case 111:Ge=Ge.replace(E,":-moz-$1")+Ge;break;case 112:Ge=Ge.replace(y,"::-webkit-input-$1")+Ge.replace(y,"::-moz-$1")+Ge.replace(y,":-ms-input-$1")+Ge}Y=0}}return mf+Ge+pf}function n(R,N,M){var J=N.trim().split(w);N=J;var _=J.length,Q=R.length;switch(Q){case 0:case 1:var F=0;for(R=Q===0?"":R[0]+" ";F<_;++F)N[F]=r(R,N[F],M).trim();break;default:var ue=F=0;for(N=[];F<_;++F)for(var ne=0;ne<Q;++ne)N[ue++]=r(R[ne]+" ",J[F],M).trim()}return N}function r(R,N,M){var J=N.charCodeAt(0);switch(33>J&&(J=(N=N.trim()).charCodeAt(0)),J){case 38:return N.replace(g,"$1"+R.trim());case 58:return R.trim()+N.replace(g,"$1"+R.trim());default:if(0<1*M&&0<N.indexOf("\f"))return N.replace(g,(R.charCodeAt(0)===58?"":"$1")+R.trim())}return R+N}function i(R,N,M,J){var _=R+";",Q=2*N+3*M+4*J;if(Q===944){R=_.indexOf(":",9)+1;var F=_.substring(R,_.length-1).trim();return F=_.substring(0,R).trim()+F+";",q===1||q===2&&s(F,1)?"-webkit-"+F+F:F}if(q===0||q===2&&!s(_,1))return _;switch(Q){case 1015:return _.charCodeAt(10)===97?"-webkit-"+_+_:_;case 951:return _.charCodeAt(3)===116?"-webkit-"+_+_:_;case 963:return _.charCodeAt(5)===110?"-webkit-"+_+_:_;case 1009:if(_.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+_+_;case 978:return"-webkit-"+_+"-moz-"+_+_;case 1019:case 983:return"-webkit-"+_+"-moz-"+_+"-ms-"+_+_;case 883:if(_.charCodeAt(8)===45)return"-webkit-"+_+_;if(0<_.indexOf("image-set(",11))return _.replace(b,"$1-webkit-$2")+_;break;case 932:if(_.charCodeAt(4)===45)switch(_.charCodeAt(5)){case 103:return"-webkit-box-"+_.replace("-grow","")+"-webkit-"+_+"-ms-"+_.replace("grow","positive")+_;case 115:return"-webkit-"+_+"-ms-"+_.replace("shrink","negative")+_;case 98:return"-webkit-"+_+"-ms-"+_.replace("basis","preferred-size")+_}return"-webkit-"+_+"-ms-"+_+_;case 964:return"-webkit-"+_+"-ms-flex-"+_+_;case 1023:if(_.charCodeAt(8)!==99)break;return F=_.substring(_.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+F+"-webkit-"+_+"-ms-flex-pack"+F+_;case 1005:return m.test(_)?_.replace(p,":-webkit-")+_.replace(p,":-moz-")+_:_;case 1e3:switch(F=_.substring(13).trim(),N=F.indexOf("-")+1,F.charCodeAt(0)+F.charCodeAt(N)){case 226:F=_.replace(C,"tb");break;case 232:F=_.replace(C,"tb-rl");break;case 220:F=_.replace(C,"lr");break;default:return _}return"-webkit-"+_+"-ms-"+F+_;case 1017:if(_.indexOf("sticky",9)===-1)break;case 975:switch(N=(_=R).length-10,F=(_.charCodeAt(N)===33?_.substring(0,N):_).substring(R.indexOf(":",7)+1).trim(),Q=F.charCodeAt(0)+(F.charCodeAt(7)|0)){case 203:if(111>F.charCodeAt(8))break;case 115:_=_.replace(F,"-webkit-"+F)+";"+_;break;case 207:case 102:_=_.replace(F,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+_.replace(F,"-webkit-"+F)+";"+_.replace(F,"-ms-"+F+"box")+";"+_}return _+";";case 938:if(_.charCodeAt(5)===45)switch(_.charCodeAt(6)){case 105:return F=_.replace("-items",""),"-webkit-"+_+"-webkit-box-"+F+"-ms-flex-"+F+_;case 115:return"-webkit-"+_+"-ms-flex-item-"+_.replace(I,"")+_;default:return"-webkit-"+_+"-ms-flex-line-pack"+_.replace("align-content","").replace(I,"")+_}break;case 973:case 989:if(_.charCodeAt(3)!==45||_.charCodeAt(4)===122)break;case 931:case 953:if(P.test(R)===!0)return(F=R.substring(R.indexOf(":")+1)).charCodeAt(0)===115?i(R.replace("stretch","fill-available"),N,M,J).replace(":fill-available",":stretch"):_.replace(F,"-webkit-"+F)+_.replace(F,"-moz-"+F.replace("fill-",""))+_;break;case 962:if(_="-webkit-"+_+(_.charCodeAt(5)===102?"-ms-"+_:"")+_,M+J===211&&_.charCodeAt(13)===105&&0<_.indexOf("transform",10))return _.substring(0,_.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+_}return _}function s(R,N){var M=R.indexOf(N===1?":":"{"),J=R.substring(0,N!==3?M:10);return M=R.substring(M+1,R.length-1),O(N!==2?J:J.replace(V,"$1"),M,N)}function o(R,N){var M=i(N,N.charCodeAt(0),N.charCodeAt(1),N.charCodeAt(2));return M!==N+";"?M.replace(T," or ($1)").substring(4):"("+N+")"}function a(R,N,M,J,_,Q,F,ue,ne,_e){for(var se=0,H=N,fe;se<x;++se)switch(fe=le[se].call(c,R,H,M,J,_,Q,F,ue,ne,_e)){case void 0:case!1:case!0:case null:break;default:H=fe}if(H!==N)return H}function l(R){switch(R){case void 0:case null:x=le.length=0;break;default:if(typeof R=="function")le[x++]=R;else if(typeof R=="object")for(var N=0,M=R.length;N<M;++N)l(R[N]);else A=!!R|0}return l}function u(R){return R=R.prefix,R!==void 0&&(O=null,R?typeof R!="function"?q=1:(q=2,O=R):q=0),u}function c(R,N){var M=R;if(33>M.charCodeAt(0)&&(M=M.trim()),z=M,M=[z],0<x){var J=a(-1,N,M,M,j,B,0,0,0,0);J!==void 0&&typeof J=="string"&&(N=J)}var _=e(pe,M,N,0,0);return 0<x&&(J=a(-2,_,M,M,j,B,_.length,0,0,0),J!==void 0&&(_=J)),z="",Y=0,B=j=1,_}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,m=/zoo|gra/,v=/([,: ])(transform)/g,w=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,E=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,I=/-self|flex-/g,V=/[^]*?(:[rp][el]a[\w-]+)[^]*/,P=/stretch|:\s*\w+\-(?:conte|avail)/,b=/([^-])(image-set\()/,B=1,j=1,Y=0,q=1,pe=[],le=[],x=0,O=null,A=0,z="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var RP={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function NP(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var PP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Z1=NP(function(t){return PP.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),HC={exports:{}},ke={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ut=typeof Symbol=="function"&&Symbol.for,Nv=ut?Symbol.for("react.element"):60103,Pv=ut?Symbol.for("react.portal"):60106,ld=ut?Symbol.for("react.fragment"):60107,ud=ut?Symbol.for("react.strict_mode"):60108,cd=ut?Symbol.for("react.profiler"):60114,hd=ut?Symbol.for("react.provider"):60109,dd=ut?Symbol.for("react.context"):60110,Dv=ut?Symbol.for("react.async_mode"):60111,fd=ut?Symbol.for("react.concurrent_mode"):60111,pd=ut?Symbol.for("react.forward_ref"):60112,md=ut?Symbol.for("react.suspense"):60113,DP=ut?Symbol.for("react.suspense_list"):60120,gd=ut?Symbol.for("react.memo"):60115,vd=ut?Symbol.for("react.lazy"):60116,OP=ut?Symbol.for("react.block"):60121,bP=ut?Symbol.for("react.fundamental"):60117,$P=ut?Symbol.for("react.responder"):60118,LP=ut?Symbol.for("react.scope"):60119;function sn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Nv:switch(t=t.type,t){case Dv:case fd:case ld:case cd:case ud:case md:return t;default:switch(t=t&&t.$$typeof,t){case dd:case pd:case vd:case gd:case hd:return t;default:return e}}case Pv:return e}}}function WC(t){return sn(t)===fd}ke.AsyncMode=Dv;ke.ConcurrentMode=fd;ke.ContextConsumer=dd;ke.ContextProvider=hd;ke.Element=Nv;ke.ForwardRef=pd;ke.Fragment=ld;ke.Lazy=vd;ke.Memo=gd;ke.Portal=Pv;ke.Profiler=cd;ke.StrictMode=ud;ke.Suspense=md;ke.isAsyncMode=function(t){return WC(t)||sn(t)===Dv};ke.isConcurrentMode=WC;ke.isContextConsumer=function(t){return sn(t)===dd};ke.isContextProvider=function(t){return sn(t)===hd};ke.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nv};ke.isForwardRef=function(t){return sn(t)===pd};ke.isFragment=function(t){return sn(t)===ld};ke.isLazy=function(t){return sn(t)===vd};ke.isMemo=function(t){return sn(t)===gd};ke.isPortal=function(t){return sn(t)===Pv};ke.isProfiler=function(t){return sn(t)===cd};ke.isStrictMode=function(t){return sn(t)===ud};ke.isSuspense=function(t){return sn(t)===md};ke.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ld||t===fd||t===cd||t===ud||t===md||t===DP||typeof t=="object"&&t!==null&&(t.$$typeof===vd||t.$$typeof===gd||t.$$typeof===hd||t.$$typeof===dd||t.$$typeof===pd||t.$$typeof===bP||t.$$typeof===$P||t.$$typeof===LP||t.$$typeof===OP)};ke.typeOf=sn;HC.exports=ke;var Ov=HC.exports,MP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},FP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},UP={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},GC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bv={};bv[Ov.ForwardRef]=UP;bv[Ov.Memo]=GC;function ew(t){return Ov.isMemo(t)?GC:bv[t.$$typeof]||MP}var BP=Object.defineProperty,VP=Object.getOwnPropertyNames,tw=Object.getOwnPropertySymbols,zP=Object.getOwnPropertyDescriptor,jP=Object.getPrototypeOf,nw=Object.prototype;function KC(t,e,n){if(typeof e!="string"){if(nw){var r=jP(e);r&&r!==nw&&KC(t,r,n)}var i=VP(e);tw&&(i=i.concat(tw(e)));for(var s=ew(t),o=ew(e),a=0;a<i.length;++a){var l=i[a];if(!FP[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=zP(e,l);try{BP(t,l,u)}catch{}}}}return t}var HP=KC;function Bn(){return(Bn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var rw=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Im=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!xv.exports.typeOf(t)},Xc=Object.freeze([]),si=Object.freeze({});function al(t){return typeof t=="function"}function iw(t){return t.displayName||t.name||"Component"}function $v(t){return t&&typeof t.styledComponentId=="string"}var go=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Lv=typeof window!="undefined"&&"HTMLElement"in window,WP=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),GP={};function Vl(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var KP=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Vl(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),hc=new Map,Yc=new Map,Da=1,Fu=function(t){if(hc.has(t))return hc.get(t);for(;Yc.has(Da);)Da++;var e=Da++;return hc.set(t,e),Yc.set(e,t),e},qP=function(t){return Yc.get(t)},QP=function(t,e){e>=Da&&(Da=e+1),hc.set(t,e),Yc.set(e,t)},XP="style["+go+'][data-styled-version="5.3.10"]',YP=new RegExp("^"+go+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),JP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},ZP=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(YP);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(QP(u,l),JP(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},eD=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},qC=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(go))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(go,"active"),r.setAttribute("data-styled-version","5.3.10");var o=eD();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},tD=function(){function t(n){var r=this.element=qC(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Vl(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),nD=function(){function t(n){var r=this.element=qC(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),rD=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),sw=Lv,iD={isServer:!Lv,useCSSOMInjection:!WP},Jc=function(){function t(n,r,i){n===void 0&&(n=si),r===void 0&&(r={}),this.options=Bn({},iD,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Lv&&sw&&(sw=!1,function(s){for(var o=document.querySelectorAll(XP),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(go)!=="active"&&(ZP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Fu(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Bn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new rD(o):s?new tD(o):new nD(o),new KP(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Fu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Fu(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Fu(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=qP(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=go+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),sD=/(a)(d)/gi,ow=function(t){return String.fromCharCode(t+(t>25?39:97))};function km(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=ow(e%52)+n;return(ow(e%52)+n).replace(sD,"$1-$2")}var js=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},QC=function(t){return js(5381,t)};function XC(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(al(n)&&!$v(n))return!1}return!0}var oD=QC("5.3.10"),aD=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&XC(e),this.componentId=n,this.baseHash=js(oD,n),this.baseStyle=r,Jc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=rs(this.rules,e,n,r).join(""),a=km(js(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=js(this.baseHash,r.hash),h="",d=0;d<u;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var m=rs(p,e,n,r),v=Array.isArray(m)?m.join(""):m;c=js(c,v+d),h+=v}}if(h){var w=km(c>>>0);if(!n.hasNameForId(i,w)){var g=r(h,"."+w,void 0,i);n.insertRules(i,w,g)}s.push(w)}}return s.join(" ")},t}(),lD=/^\s*\/\/.*$/gm,uD=[":","[",".","#"];function cD(t){var e,n,r,i,s=t===void 0?si:t,o=s.options,a=o===void 0?si:o,l=s.plugins,u=l===void 0?Xc:l,c=new AP(a),h=[],d=function(v){function w(g){if(g)try{v(g+"}")}catch{}}return function(g,f,y,E,C,k,T,I,V,P){switch(g){case 1:if(V===0&&f.charCodeAt(0)===64)return v(f+";"),"";break;case 2:if(I===0)return f+"/*|*/";break;case 3:switch(I){case 102:case 112:return v(y[0]+f),"";default:return f+(P===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(w)}}}(function(v){h.push(v)}),p=function(v,w,g){return w===0&&uD.indexOf(g[n.length])!==-1||g.match(i)?v:"."+e};function m(v,w,g,f){f===void 0&&(f="&");var y=v.replace(lD,""),E=w&&g?g+" "+w+" { "+y+" }":y;return e=f,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(g||!w?"":w,E)}return c.use([].concat(u,[function(v,w,g){v===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,p))},d,function(v){if(v===-2){var w=h;return h=[],w}}])),m.hash=u.length?u.reduce(function(v,w){return w.name||Vl(15),js(v,w.name)},5381).toString():"",m}var YC=st.createContext();YC.Consumer;var JC=st.createContext(),hD=(JC.Consumer,new Jc),xm=cD();function ZC(){return D.exports.useContext(YC)||hD}function eT(){return D.exports.useContext(JC)||xm}var dD=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=xm);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Vl(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=xm),this.name+e.hash},t}(),fD=/([A-Z])/,pD=/([A-Z])/g,mD=/^ms-/,gD=function(t){return"-"+t.toLowerCase()};function aw(t){return fD.test(t)?t.replace(pD,gD).replace(mD,"-ms-"):t}var lw=function(t){return t==null||t===!1||t===""};function rs(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=rs(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(lw(t))return"";if($v(t))return"."+t.styledComponentId;if(al(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return rs(l,e,n,r)}var u;return t instanceof dD?n?(t.inject(n,r),t.getName(r)):t:Im(t)?function c(h,d){var p,m,v=[];for(var w in h)h.hasOwnProperty(w)&&!lw(h[w])&&(Array.isArray(h[w])&&h[w].isCss||al(h[w])?v.push(aw(w)+":",h[w],";"):Im(h[w])?v.push.apply(v,c(h[w],w)):v.push(aw(w)+": "+(p=w,(m=h[w])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||p in RP||p.startsWith("--")?String(m).trim():m+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(t):t.toString()}var uw=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function zl(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return al(t)||Im(t)?uw(rs(rw(Xc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:uw(rs(rw(t,n)))}var tT=function(t,e,n){return n===void 0&&(n=si),t.theme!==n.theme&&t.theme||e||n.theme},vD=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yD=/(^-|-$)/g;function jf(t){return t.replace(vD,"-").replace(yD,"")}var nT=function(t){return km(QC(t)>>>0)};function Uu(t){return typeof t=="string"&&!0}var Am=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},wD=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function ED(t,e,n){var r=t[n];Am(e)&&Am(r)?rT(r,e):t[n]=e}function rT(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Am(o))for(var a in o)wD(a)&&ED(t,o[a],a)}return t}var Mv=st.createContext();Mv.Consumer;var Hf={};function iT(t,e,n){var r=$v(t),i=!Uu(t),s=e.attrs,o=s===void 0?Xc:s,a=e.componentId,l=a===void 0?function(f,y){var E=typeof f!="string"?"sc":jf(f);Hf[E]=(Hf[E]||0)+1;var C=E+"-"+nT("5.3.10"+E+Hf[E]);return y?y+"-"+C:C}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Uu(f)?"styled."+f:"Styled("+iw(f)+")"}(t):u,h=e.displayName&&e.componentId?jf(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,y,E){return t.shouldForwardProp(f,y,E)&&e.shouldForwardProp(f,y,E)}:t.shouldForwardProp);var m,v=new aD(n,h,r?t.componentStyle:void 0),w=v.isStatic&&o.length===0,g=function(f,y){return function(E,C,k,T){var I=E.attrs,V=E.componentStyle,P=E.defaultProps,b=E.foldedComponentIds,B=E.shouldForwardProp,j=E.styledComponentId,Y=E.target,q=function(J,_,Q){J===void 0&&(J=si);var F=Bn({},_,{theme:J}),ue={};return Q.forEach(function(ne){var _e,se,H,fe=ne;for(_e in al(fe)&&(fe=fe(F)),fe)F[_e]=ue[_e]=_e==="className"?(se=ue[_e],H=fe[_e],se&&H?se+" "+H:se||H):fe[_e]}),[F,ue]}(tT(C,D.exports.useContext(Mv),P)||si,C,I),pe=q[0],le=q[1],x=function(J,_,Q,F){var ue=ZC(),ne=eT(),_e=_?J.generateAndInjectStyles(si,ue,ne):J.generateAndInjectStyles(Q,ue,ne);return _e}(V,T,pe),O=k,A=le.$as||C.$as||le.as||C.as||Y,z=Uu(A),R=le!==C?Bn({},C,{},le):C,N={};for(var M in R)M[0]!=="$"&&M!=="as"&&(M==="forwardedAs"?N.as=R[M]:(B?B(M,Z1,A):!z||Z1(M))&&(N[M]=R[M]));return C.style&&le.style!==C.style&&(N.style=Bn({},C.style,{},le.style)),N.className=Array.prototype.concat(b,j,x!==j?x:null,C.className,le.className).filter(Boolean).join(" "),N.ref=O,D.exports.createElement(A,N)}(m,f,y,w)};return g.displayName=c,(m=st.forwardRef(g)).attrs=d,m.componentStyle=v,m.displayName=c,m.shouldForwardProp=p,m.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Xc,m.styledComponentId=h,m.target=r?t.target:t,m.withComponent=function(f){var y=e.componentId,E=function(k,T){if(k==null)return{};var I,V,P={},b=Object.keys(k);for(V=0;V<b.length;V++)I=b[V],T.indexOf(I)>=0||(P[I]=k[I]);return P}(e,["componentId"]),C=y&&y+"-"+(Uu(f)?f:jf(iw(f)));return iT(f,Bn({},E,{attrs:d,componentId:C}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?rT({},t.defaultProps,f):f}}),Object.defineProperty(m,"toString",{value:function(){return"."+m.styledComponentId}}),i&&HP(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var Rm=function(t){return function e(n,r,i){if(i===void 0&&(i=si),!xv.exports.isValidElementType(r))return Vl(1,String(r));var s=function(){return n(r,i,zl.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Bn({},i,{},o))},s.attrs=function(o){return e(n,r,Bn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(iT,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Rm[t]=Rm(t)});var _D=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=XC(n),Jc.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(rs(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&Jc.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function SD(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=zl.apply(void 0,[t].concat(n)),s="sc-global-"+nT(JSON.stringify(i)),o=new _D(i,s);function a(u){var c=ZC(),h=eT(),d=D.exports.useContext(Mv),p=D.exports.useRef(c.allocateGSInstance(s)).current;return c.server&&l(p,u,c,d,h),D.exports.useLayoutEffect(function(){if(!c.server)return l(p,u,c,d,h),function(){return o.removeStyles(p,c)}},[p,u,c,d,h]),null}function l(u,c,h,d,p){if(o.isStatic)o.renderStyles(u,GP,h,p);else{var m=Bn({},c,{theme:tT(c,d,a.defaultProps)});o.renderStyles(u,m,h,p)}}return st.memo(a)}var wt=Rm;const CD=SD`
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
`,TD=wt.div`
    min-height: 100vh;
`,ID=wt.header`
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;

  .contents {
    margin: 0 auto;
    display: flex;
    max-width: 1500px;
    padding-left: 20px;
    padding-right: 20px;
    height: 60px;
    line-height: 60px;
    justify-content: space-between;
    align-items: center;

    .logo {
      display: flex;
      gap: 2px;
      align-items: center;

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: clamp(16px, 2.5vw, 20px);
        color: #08f;
      }

      h1 {
        font-size: clamp(16px, 2.5vw, 20px);
        letter-spacing: -0.035rem;
        font-weight: 400;
        cursor: pointer;
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
            border-bottom: 1.5px solid #09f;
            background-color: rgba(32, 33, 36, 0.04);
            a {
              color: #000;
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
  }
`;var sT={exports:{}},oT={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=D.exports;function kD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xD=typeof Object.is=="function"?Object.is:kD,AD=vo.useState,RD=vo.useEffect,ND=vo.useLayoutEffect,PD=vo.useDebugValue;function DD(t,e){var n=e(),r=AD({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return ND(function(){i.value=n,i.getSnapshot=e,Wf(i)&&s({inst:i})},[t,n,e]),RD(function(){return Wf(i)&&s({inst:i}),t(function(){Wf(i)&&s({inst:i})})},[t]),PD(n),n}function Wf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xD(t,n)}catch{return!0}}function OD(t,e){return e()}var bD=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?OD:DD;oT.useSyncExternalStore=vo.useSyncExternalStore!==void 0?vo.useSyncExternalStore:bD;sT.exports=oT;var aT={exports:{}},lT={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd=D.exports,$D=sT.exports;function LD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var MD=typeof Object.is=="function"?Object.is:LD,FD=$D.useSyncExternalStore,UD=yd.useRef,BD=yd.useEffect,VD=yd.useMemo,zD=yd.useDebugValue;lT.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=UD(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=VD(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var m=o.value;if(i(m,p))return h=m}return h=p}if(m=h,MD(c,p))return m;var v=r(p);return i!==void 0&&i(m,v)?m:(c=p,h=v)}var u=!1,c,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,r,i]);var a=FD(t,s[0],s[1]);return BD(function(){o.hasValue=!0,o.value=a},[a]),zD(a),a};aT.exports=lT;function jD(t){t()}let uT=jD;const HD=t=>uT=t,WD=()=>uT,pi=D.exports.createContext(null);function cT(){return D.exports.useContext(pi)}const GD=()=>{throw new Error("uSES not initialized!")};let hT=GD;const KD=t=>{hT=t},qD=(t,e)=>t===e;function QD(t=pi){const e=t===pi?cT:()=>D.exports.useContext(t);return function(r,i=qD){const{store:s,subscription:o,getServerState:a}=e(),l=hT(o.addNestedSub,s.getState,a||s.getState,r,i);return D.exports.useDebugValue(l),l}}const On=QD();function XD(){const t=WD();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const cw={notify(){},get:()=>[]};function YD(t,e){let n,r=cw;function i(h){return l(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=XD())}function u(){n&&(n(),n=void 0,r.clear(),r=cw)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const JD=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",ZD=JD?D.exports.useLayoutEffect:D.exports.useEffect;var wd={exports:{}},Ed={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eO=D.exports,tO=Symbol.for("react.element"),nO=Symbol.for("react.fragment"),rO=Object.prototype.hasOwnProperty,iO=eO.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sO={key:!0,ref:!0,__self:!0,__source:!0};function dT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rO.call(e,r)&&!sO.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tO,type:t,key:s,ref:o,props:i,_owner:iO.current}}Ed.Fragment=nO;Ed.jsx=dT;Ed.jsxs=dT;wd.exports=Ed;const S=wd.exports.jsx,K=wd.exports.jsxs,ll=wd.exports.Fragment;function oO({store:t,context:e,children:n,serverState:r}){const i=D.exports.useMemo(()=>{const a=YD(t);return{store:t,subscription:a,getServerState:r?()=>r:void 0}},[t,r]),s=D.exports.useMemo(()=>t.getState(),[t]);return ZD(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==t.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]),S((e||pi).Provider,{value:i,children:n})}function fT(t=pi){const e=t===pi?cT:()=>D.exports.useContext(t);return function(){const{store:r}=e();return r}}const aO=fT();function lO(t=pi){const e=t===pi?aO:fT(t);return function(){return e().dispatch}}const xi=lO();KD(aT.exports.useSyncExternalStoreWithSelector);HD(Og.exports.unstable_batchedUpdates);function xn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function mi(t){return!!t&&!!t[De]}function Tr(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===vO}(t)||Array.isArray(t)||!!t[vw]||!!(!((e=t.constructor)===null||e===void 0)&&e[vw])||Fv(t)||Uv(t))}function is(t,e,n){n===void 0&&(n=!1),$o(t)===0?(n?Object.keys:Zs)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function $o(t){var e=t[De];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Fv(t)?2:Uv(t)?3:0}function Js(t,e){return $o(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function uO(t,e){return $o(t)===2?t.get(e):t[e]}function pT(t,e,n){var r=$o(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function mT(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Fv(t){return mO&&t instanceof Map}function Uv(t){return gO&&t instanceof Set}function Mi(t){return t.o||t.t}function Bv(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=vT(t);delete e[De];for(var n=Zs(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Vv(t,e){return e===void 0&&(e=!1),zv(t)||mi(t)||!Tr(t)||($o(t)>1&&(t.set=t.add=t.clear=t.delete=cO),Object.freeze(t),e&&is(t,function(n,r){return Vv(r,!0)},!0)),t}function cO(){xn(2)}function zv(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Wn(t){var e=Om[t];return e||xn(18,t),e}function hO(t,e){Om[t]||(Om[t]=e)}function Nm(){return ul}function Gf(t,e){e&&(Wn("Patches"),t.u=[],t.s=[],t.v=e)}function Zc(t){Pm(t),t.p.forEach(dO),t.p=null}function Pm(t){t===ul&&(ul=t.l)}function hw(t){return ul={p:[],l:ul,h:t,m:!0,_:0}}function dO(t){var e=t[De];e.i===0||e.i===1?e.j():e.g=!0}function Kf(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||Wn("ES5").S(e,t,r),r?(n[De].P&&(Zc(e),xn(4)),Tr(t)&&(t=eh(e,t),e.l||th(e,t)),e.u&&Wn("Patches").M(n[De].t,t,e.u,e.s)):t=eh(e,n,[]),Zc(e),e.u&&e.v(e.u,e.s),t!==gT?t:void 0}function eh(t,e,n){if(zv(e))return e;var r=e[De];if(!r)return is(e,function(a,l){return dw(t,r,e,a,l,n)},!0),e;if(r.A!==t)return e;if(!r.P)return th(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Bv(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),is(s,function(a,l){return dw(t,r,i,a,l,n,o)}),th(t,i,!1),n&&t.u&&Wn("Patches").N(r,n,t.u,t.s)}return r.o}function dw(t,e,n,r,i,s,o){if(mi(i)){var a=eh(t,i,s&&e&&e.i!==3&&!Js(e.R,r)?s.concat(r):void 0);if(pT(n,r,a),!mi(a))return;t.m=!1}else o&&n.add(i);if(Tr(i)&&!zv(i)){if(!t.h.D&&t._<1)return;eh(t,i),e&&e.A.l||th(t,i)}}function th(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&Vv(e,n)}function qf(t,e){var n=t[De];return(n?Mi(n):t)[e]}function fw(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Br(t){t.P||(t.P=!0,t.l&&Br(t.l))}function Qf(t){t.o||(t.o=Bv(t.t))}function Dm(t,e,n){var r=Fv(e)?Wn("MapSet").F(e,n):Uv(e)?Wn("MapSet").T(e,n):t.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:Nm(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=cl;o&&(l=[a],u=ma);var c=Proxy.revocable(l,u),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(e,n):Wn("ES5").J(e,n);return(n?n.A:Nm()).p.push(r),r}function fO(t){return mi(t)||xn(22,t),function e(n){if(!Tr(n))return n;var r,i=n[De],s=$o(n);if(i){if(!i.P&&(i.i<4||!Wn("ES5").K(i)))return i.t;i.I=!0,r=pw(n,s),i.I=!1}else r=pw(n,s);return is(r,function(o,a){i&&uO(i.t,o)===a||pT(r,o,e(a))}),s===3?new Set(r):r}(t)}function pw(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Bv(t)}function pO(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[De];return cl.get(l,s)},set:function(l){var u=this[De];cl.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][De];if(!a.P)switch(a.i){case 5:r(a)&&Br(a);break;case 4:n(a)&&Br(a)}}}function n(s){for(var o=s.t,a=s.k,l=Zs(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==De){var h=o[c];if(h===void 0&&!Js(o,c))return!0;var d=a[c],p=d&&d[De];if(p?p.t!==h:!mT(d,h))return!0}}var m=!!o[De];return l.length!==Zs(o).length+(m?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};hO("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,h){if(c){for(var d=Array(h.length),p=0;p<h.length;p++)Object.defineProperty(d,""+p,t(p,!0));return d}var m=vT(h);delete m[De];for(var v=Zs(m),w=0;w<v.length;w++){var g=v[w];m[g]=t(g,c||!!m[g].enumerable)}return Object.create(Object.getPrototypeOf(h),m)}(a,s),u={i:a?5:4,A:o?o.A:Nm(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,De,{value:u,writable:!0}),l},S:function(s,o,a){a?mi(o)&&o[De].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[De];if(c){var h=c.t,d=c.k,p=c.R,m=c.i;if(m===4)is(d,function(y){y!==De&&(h[y]!==void 0||Js(h,y)?p[y]||l(d[y]):(p[y]=!0,Br(c)))}),is(h,function(y){d[y]!==void 0||Js(d,y)||(p[y]=!1,Br(c))});else if(m===5){if(r(c)&&(Br(c),p.length=!0),d.length<h.length)for(var v=d.length;v<h.length;v++)p[v]=!1;else for(var w=h.length;w<d.length;w++)p[w]=!0;for(var g=Math.min(d.length,h.length),f=0;f<g;f++)d.hasOwnProperty(f)||(p[f]=!0),p[f]===void 0&&l(d[f])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var mw,ul,jv=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",mO=typeof Map!="undefined",gO=typeof Set!="undefined",gw=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",gT=jv?Symbol.for("immer-nothing"):((mw={})["immer-nothing"]=!0,mw),vw=jv?Symbol.for("immer-draftable"):"__$immer_draftable",De=jv?Symbol.for("immer-state"):"__$immer_state",vO=""+Object.prototype.constructor,Zs=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,vT=Object.getOwnPropertyDescriptors||function(t){var e={};return Zs(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Om={},cl={get:function(t,e){if(e===De)return t;var n=Mi(t);if(!Js(n,e))return function(i,s,o){var a,l=fw(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!Tr(r)?r:r===qf(t.t,e)?(Qf(t),t.o[e]=Dm(t.A.h,r,t)):r},has:function(t,e){return e in Mi(t)},ownKeys:function(t){return Reflect.ownKeys(Mi(t))},set:function(t,e,n){var r=fw(Mi(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=qf(Mi(t),e),s=i==null?void 0:i[De];if(s&&s.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(mT(n,i)&&(n!==void 0||Js(t.t,e)))return!0;Qf(t),Br(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return qf(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,Qf(t),Br(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=Mi(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){xn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){xn(12)}},ma={};is(cl,function(t,e){ma[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),ma.deleteProperty=function(t,e){return ma.set.call(this,t,e,void 0)},ma.set=function(t,e,n){return cl.set.call(this,t[0],e,n,t[0])};var yO=function(){function t(n){var r=this;this.O=gw,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(v){var w=this;v===void 0&&(v=a);for(var g=arguments.length,f=Array(g>1?g-1:0),y=1;y<g;y++)f[y-1]=arguments[y];return l.produce(v,function(E){var C;return(C=s).call.apply(C,[w,E].concat(f))})}}var u;if(typeof s!="function"&&xn(6),o!==void 0&&typeof o!="function"&&xn(7),Tr(i)){var c=hw(r),h=Dm(r,i,void 0),d=!0;try{u=s(h),d=!1}finally{d?Zc(c):Pm(c)}return typeof Promise!="undefined"&&u instanceof Promise?u.then(function(v){return Gf(c,o),Kf(v,c)},function(v){throw Zc(c),v}):(Gf(c,o),Kf(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===gT&&(u=void 0),r.D&&Vv(u,!0),o){var p=[],m=[];Wn("Patches").M(i,u,p,m),o(p,m)}return u}xn(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(u,function(p){return i.apply(void 0,[p].concat(h))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise!="undefined"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Tr(n)||xn(8),mi(n)&&(n=fO(n));var r=hw(this),i=Dm(this,n,void 0);return i[De].C=!0,Pm(r),i},e.finishDraft=function(n,r){var i=n&&n[De],s=i.A;return Gf(s,r),Kf(void 0,s)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!gw&&xn(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=Wn("Patches").$;return mi(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),en=new yO,yT=en.produce;en.produceWithPatches.bind(en);en.setAutoFreeze.bind(en);en.setUseProxies.bind(en);en.applyPatches.bind(en);en.createDraft.bind(en);en.finishDraft.bind(en);function hl(t){return hl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hl(t)}function wO(t,e){if(hl(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(hl(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function EO(t){var e=wO(t,"string");return hl(e)==="symbol"?e:String(e)}function _O(t,e,n){return e=EO(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ww(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yw(Object(n),!0).forEach(function(r){_O(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ct(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var Ew=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Xf=function(){return Math.random().toString(36).substring(7).split("").join(".")},nh={INIT:"@@redux/INIT"+Xf(),REPLACE:"@@redux/REPLACE"+Xf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Xf()}};function SO(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function wT(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ct(0));if(typeof e=="function"&&typeof n=="undefined"&&(n=e,e=void 0),typeof n!="undefined"){if(typeof n!="function")throw new Error(Ct(1));return n(wT)(t,e)}if(typeof t!="function")throw new Error(Ct(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(Ct(3));return s}function h(v){if(typeof v!="function")throw new Error(Ct(4));if(l)throw new Error(Ct(5));var w=!0;return u(),a.push(v),function(){if(!!w){if(l)throw new Error(Ct(6));w=!1,u();var f=a.indexOf(v);a.splice(f,1),o=null}}}function d(v){if(!SO(v))throw new Error(Ct(7));if(typeof v.type=="undefined")throw new Error(Ct(8));if(l)throw new Error(Ct(9));try{l=!0,s=i(s,v)}finally{l=!1}for(var w=o=a,g=0;g<w.length;g++){var f=w[g];f()}return v}function p(v){if(typeof v!="function")throw new Error(Ct(10));i=v,d({type:nh.REPLACE})}function m(){var v,w=h;return v={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(Ct(11));function y(){f.next&&f.next(c())}y();var E=w(y);return{unsubscribe:E}}},v[Ew]=function(){return this},v}return d({type:nh.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:p},r[Ew]=m,r}function CO(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:nh.INIT});if(typeof r=="undefined")throw new Error(Ct(12));if(typeof n(void 0,{type:nh.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(Ct(13))})}function TO(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{CO(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var p=s[d],m=n[p],v=l[p],w=m(v,u);if(typeof w=="undefined")throw u&&u.type,new Error(Ct(14));h[p]=w,c=c||w!==v}return c=c||s.length!==Object.keys(l).length,c?h:l}}function rh(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function IO(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(Ct(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=rh.apply(void 0,a)(i.dispatch),ww(ww({},i),{},{dispatch:s})}}}function ET(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var _T=ET();_T.withExtraArgument=ET;var _w=_T,ST=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),kO=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},yo=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},xO=Object.defineProperty,AO=Object.defineProperties,RO=Object.getOwnPropertyDescriptors,Sw=Object.getOwnPropertySymbols,NO=Object.prototype.hasOwnProperty,PO=Object.prototype.propertyIsEnumerable,Cw=function(t,e,n){return e in t?xO(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},oi=function(t,e){for(var n in e||(e={}))NO.call(e,n)&&Cw(t,n,e[n]);if(Sw)for(var r=0,i=Sw(e);r<i.length;r++){var n=i[r];PO.call(e,n)&&Cw(t,n,e[n])}return t},Yf=function(t,e){return AO(t,RO(e))},DO=function(t,e,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(t,e)).next())})},OO=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?rh:rh.apply(null,arguments)};function bO(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var $O=function(t){ST(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,yo([void 0],n[0].concat(this)))):new(e.bind.apply(e,yo([void 0],n.concat(this))))},e}(Array),LO=function(t){ST(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,yo([void 0],n[0].concat(this)))):new(e.bind.apply(e,yo([void 0],n.concat(this))))},e}(Array);function bm(t){return Tr(t)?yT(t,function(){}):t}function MO(t){return typeof t=="boolean"}function FO(){return function(e){return UO(e)}}function UO(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new $O;return n&&(MO(n)?r.push(_w):r.push(_w.withExtraArgument(n.extraArgument))),r}var BO=!0;function VO(t){var e=FO(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,h=n.enhancers,d=h===void 0?void 0:h,p;if(typeof i=="function")p=i;else if(bO(i))p=TO(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var m=o;typeof m=="function"&&(m=m(e));var v=IO.apply(void 0,m),w=rh;l&&(w=OO(oi({trace:!BO},typeof l=="object"&&l)));var g=new LO(v),f=g;Array.isArray(d)?f=yo([v],d):typeof d=="function"&&(f=d(g));var y=w.apply(void 0,f);return wT(p,c,y)}function ai(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return oi(oi({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function CT(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function zO(t){return typeof t=="function"}function jO(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?CT(e):[e,n,r],s=i[0],o=i[1],a=i[2],l;if(zO(t))l=function(){return bm(t())};else{var u=bm(t);l=function(){return u}}function c(h,d){h===void 0&&(h=l());var p=yo([s[d.type]],o.filter(function(m){var v=m.matcher;return v(d)}).map(function(m){var v=m.reducer;return v}));return p.filter(function(m){return!!m}).length===0&&(p=[a]),p.reduce(function(m,v){if(v)if(mi(m)){var w=m,g=v(w,d);return g===void 0?m:g}else{if(Tr(m))return yT(m,function(f){return v(f,d)});var g=v(m,d);if(g===void 0){if(m===null)return m;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return m},h)}return c.getInitialState=l,c}function HO(t,e){return t+"/"+e}function Lo(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");var n=typeof t.initialState=="function"?t.initialState:bm(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=HO(e,c),p,m;"reducer"in h?(p=h.reducer,m=h.prepare):p=h,s[c]=p,o[d]=p,a[c]=m?ai(d,m):ai(d)});function l(){var c=typeof t.extraReducers=="function"?CT(t.extraReducers):[t.extraReducers],h=c[0],d=h===void 0?{}:h,p=c[1],m=p===void 0?[]:p,v=c[2],w=v===void 0?void 0:v,g=oi(oi({},d),o);return jO(n,function(f){for(var y in g)f.addCase(y,g[y]);for(var E=0,C=m;E<C.length;E++){var k=C[E];f.addMatcher(k.matcher,k.reducer)}w&&f.addDefaultCase(w)})}var u;return{name:e,reducer:function(c,h){return u||(u=l()),u(c,h)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var WO="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",GO=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=WO[Math.random()*64|0];return e},KO=["name","message","stack","code"],Jf=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),Tw=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),qO=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=KO;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}},tr=function(){function t(e,n,r){var i=ai(e+"/fulfilled",function(u,c,h,d){return{payload:u,meta:Yf(oi({},d||{}),{arg:h,requestId:c,requestStatus:"fulfilled"})}}),s=ai(e+"/pending",function(u,c,h){return{payload:void 0,meta:Yf(oi({},h||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=ai(e+"/rejected",function(u,c,h,d,p){return{payload:d,error:(r&&r.serializeError||qO)(u||"Rejected"),meta:Yf(oi({},p||{}),{arg:h,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController!="undefined"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,h,d){var p=r!=null&&r.idGenerator?r.idGenerator(u):GO(),m=new a,v;function w(f){v=f,m.abort()}var g=function(){return DO(this,null,function(){var f,y,E,C,k,T,I;return kO(this,function(V){switch(V.label){case 0:return V.trys.push([0,4,,5]),C=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:h,extra:d}),XO(C)?[4,C]:[3,2];case 1:C=V.sent(),V.label=2;case 2:if(C===!1||m.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return k=new Promise(function(P,b){return m.signal.addEventListener("abort",function(){return b({name:"AbortError",message:v||"Aborted"})})}),c(s(p,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:p,arg:u},{getState:h,extra:d}))),[4,Promise.race([k,Promise.resolve(n(u,{dispatch:c,getState:h,extra:d,requestId:p,signal:m.signal,abort:w,rejectWithValue:function(P,b){return new Jf(P,b)},fulfillWithValue:function(P,b){return new Tw(P,b)}})).then(function(P){if(P instanceof Jf)throw P;return P instanceof Tw?i(P.payload,p,u,P.meta):i(P,p,u)})])];case 3:return E=V.sent(),[3,5];case 4:return T=V.sent(),E=T instanceof Jf?o(null,p,u,T.payload,T.meta):o(T,p,u),[3,5];case 5:return I=r&&!r.dispatchConditionRejection&&o.match(E)&&E.meta.condition,I||c(E),[2,E]}})})}();return Object.assign(g,{abort:w,requestId:p,arg:u,unwrap:function(){return g.then(QO)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t}();function QO(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function XO(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var YO=function(t){return t&&typeof t.match=="function"},TT=function(t,e){return YO(t)?t.match(e):t(e)};function JO(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n){return t.some(function(r){return TT(r,n)})}}function Iw(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n){return t.every(function(r){return TT(r,n)})}}function ZO(t,e){if(!t||!t.meta)return!1;var n=typeof t.meta.requestId=="string",r=e.indexOf(t.meta.requestStatus)>-1;return n&&r}function IT(t){return typeof t[0]=="function"&&"pending"in t[0]&&"fulfilled"in t[0]&&"rejected"in t[0]}function $m(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.length===0?function(n){return ZO(n,["rejected"])}:IT(t)?function(n){var r=t.map(function(s){return s.rejected}),i=JO.apply(void 0,r);return i(n)}:$m()(t[0])}function Hv(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=function(r){return r&&r.meta&&r.meta.rejectedWithValue};return t.length===0?function(r){var i=Iw($m.apply(void 0,t),n);return i(r)}:IT(t)?function(r){var i=Iw($m.apply(void 0,t),n);return i(r)}:Hv()(t[0])}var Wv="listenerMiddleware";ai(Wv+"/add");ai(Wv+"/removeAll");ai(Wv+"/remove");var kw;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window!="undefined"?window:typeof global!="undefined"?global:globalThis);pO();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const kT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},xT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new tb;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nb=function(t){const e=kT(t);return xT.encodeByteArray(e,!0)},ih=function(t){return nb(t).replace(/\./g,"")},AT=function(t){try{return xT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rb(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ib=()=>rb().__FIREBASE_DEFAULTS__,sb=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ob=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&AT(t[1]);return e&&JSON.parse(e)},_d=()=>{try{return ib()||sb()||ob()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},RT=t=>{var e,n;return(n=(e=_d())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},NT=t=>{const e=RT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ab=()=>{var t;return(t=_d())===null||t===void 0?void 0:t.config},PT=t=>{var e;return(e=_d())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function DT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ih(JSON.stringify(n)),ih(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ub(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function cb(){var t;const e=(t=_d())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function db(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fb(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pb(){try{return typeof indexedDB=="object"}catch{return!1}}function mb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="FirebaseError";class nr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gb,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jl.prototype.create)}}class jl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nr(i,a,r)}}function vb(t,e){return t.replace(yb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const yb=/\{\$([^}]+)}/g;function wb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xw(s)&&xw(o)){if(!sh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ga(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function va(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Eb(t,e){const n=new _b(t,e);return n.subscribe.bind(n)}class _b{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Sb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zf),i.error===void 0&&(i.error=Zf),i.complete===void 0&&(i.complete=Zf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zf(){}/**
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
 */function at(t){return t&&t._delegate?t._delegate:t}class gi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fi="[DEFAULT]";/**
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
 */class Cb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ib(e))try{this.getOrInitializeService({instanceIdentifier:Fi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fi){return this.instances.has(e)}getOptions(e=Fi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fi){return this.component?this.component.multipleInstances?e:Fi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tb(t){return t===Fi?void 0:t}function Ib(t){return t.instantiationMode==="EAGER"}/**
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
 */class kb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const xb={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Ab=Ee.INFO,Rb={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},Nb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Rb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gv{constructor(e){this.name=e,this._logLevel=Ab,this._logHandler=Nb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const Pb=(t,e)=>e.some(n=>t instanceof n);let Aw,Rw;function Db(){return Aw||(Aw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ob(){return Rw||(Rw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const OT=new WeakMap,Lm=new WeakMap,bT=new WeakMap,ep=new WeakMap,Kv=new WeakMap;function bb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(li(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&OT.set(n,t)}).catch(()=>{}),Kv.set(e,t),e}function $b(t){if(Lm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lm.set(t,e)}let Mm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return li(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lb(t){Mm=t(Mm)}function Mb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tp(this),e,...n);return bT.set(r,e.sort?e.sort():[e]),li(r)}:Ob().includes(t)?function(...e){return t.apply(tp(this),e),li(OT.get(this))}:function(...e){return li(t.apply(tp(this),e))}}function Fb(t){return typeof t=="function"?Mb(t):(t instanceof IDBTransaction&&$b(t),Pb(t,Db())?new Proxy(t,Mm):t)}function li(t){if(t instanceof IDBRequest)return bb(t);if(ep.has(t))return ep.get(t);const e=Fb(t);return e!==t&&(ep.set(t,e),Kv.set(e,t)),e}const tp=t=>Kv.get(t);function Ub(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=li(o);return r&&o.addEventListener("upgradeneeded",l=>{r(li(o.result),l.oldVersion,l.newVersion,li(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Bb=["get","getKey","getAll","getAllKeys","count"],Vb=["put","add","delete","clear"],np=new Map;function Nw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(np.get(e))return np.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Vb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Bb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return np.set(e,s),s}Lb(t=>({...t,get:(e,n,r)=>Nw(e,n)||t.get(e,n,r),has:(e,n)=>!!Nw(e,n)||t.has(e,n)}));/**
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
 */class zb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fm="@firebase/app",Pw="0.9.9";/**
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
 */const ss=new Gv("@firebase/app"),Hb="@firebase/app-compat",Wb="@firebase/analytics-compat",Gb="@firebase/analytics",Kb="@firebase/app-check-compat",qb="@firebase/app-check",Qb="@firebase/auth",Xb="@firebase/auth-compat",Yb="@firebase/database",Jb="@firebase/database-compat",Zb="@firebase/functions",e4="@firebase/functions-compat",t4="@firebase/installations",n4="@firebase/installations-compat",r4="@firebase/messaging",i4="@firebase/messaging-compat",s4="@firebase/performance",o4="@firebase/performance-compat",a4="@firebase/remote-config",l4="@firebase/remote-config-compat",u4="@firebase/storage",c4="@firebase/storage-compat",h4="@firebase/firestore",d4="@firebase/firestore-compat",f4="firebase",p4="9.21.0";/**
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
 */const Um="[DEFAULT]",m4={[Fm]:"fire-core",[Hb]:"fire-core-compat",[Gb]:"fire-analytics",[Wb]:"fire-analytics-compat",[qb]:"fire-app-check",[Kb]:"fire-app-check-compat",[Qb]:"fire-auth",[Xb]:"fire-auth-compat",[Yb]:"fire-rtdb",[Jb]:"fire-rtdb-compat",[Zb]:"fire-fn",[e4]:"fire-fn-compat",[t4]:"fire-iid",[n4]:"fire-iid-compat",[r4]:"fire-fcm",[i4]:"fire-fcm-compat",[s4]:"fire-perf",[o4]:"fire-perf-compat",[a4]:"fire-rc",[l4]:"fire-rc-compat",[u4]:"fire-gcs",[c4]:"fire-gcs-compat",[h4]:"fire-fst",[d4]:"fire-fst-compat","fire-js":"fire-js",[f4]:"fire-js-all"};/**
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
 */const oh=new Map,Bm=new Map;function g4(t,e){try{t.container.addComponent(e)}catch(n){ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function os(t){const e=t.name;if(Bm.has(e))return ss.debug(`There were multiple attempts to register component ${e}.`),!1;Bm.set(e,t);for(const n of oh.values())g4(n,t);return!0}function Sd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const v4={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ui=new jl("app","Firebase",v4);/**
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
 */class y4{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ui.create("app-deleted",{appName:this._name})}}/**
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
 */const ws=p4;function $T(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Um,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ui.create("bad-app-name",{appName:String(i)});if(n||(n=ab()),!n)throw ui.create("no-options");const s=oh.get(i);if(s){if(sh(n,s.options)&&sh(r,s.config))return s;throw ui.create("duplicate-app",{appName:i})}const o=new kb(i);for(const l of Bm.values())o.addComponent(l);const a=new y4(n,r,o);return oh.set(i,a),a}function qv(t=Um){const e=oh.get(t);if(!e&&t===Um)return $T();if(!e)throw ui.create("no-app",{appName:t});return e}function Gn(t,e,n){var r;let i=(r=m4[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ss.warn(a.join(" "));return}os(new gi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const w4="firebase-heartbeat-database",E4=1,dl="firebase-heartbeat-store";let rp=null;function LT(){return rp||(rp=Ub(w4,E4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dl)}}}).catch(t=>{throw ui.create("idb-open",{originalErrorMessage:t.message})})),rp}async function _4(t){try{return(await LT()).transaction(dl).objectStore(dl).get(MT(t))}catch(e){if(e instanceof nr)ss.warn(e.message);else{const n=ui.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ss.warn(n.message)}}}async function Dw(t,e){try{const r=(await LT()).transaction(dl,"readwrite");return await r.objectStore(dl).put(e,MT(t)),r.done}catch(n){if(n instanceof nr)ss.warn(n.message);else{const r=ui.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ss.warn(r.message)}}}function MT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const S4=1024,C4=30*24*60*60*1e3;class T4{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new k4(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ow();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=C4}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ow(),{heartbeatsToSend:n,unsentEntries:r}=I4(this._heartbeatsCache.heartbeats),i=ih(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ow(){return new Date().toISOString().substring(0,10)}function I4(t,e=S4){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),bw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class k4{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pb()?mb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _4(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bw(t){return ih(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function x4(t){os(new gi("platform-logger",e=>new zb(e),"PRIVATE")),os(new gi("heartbeat",e=>new T4(e),"PRIVATE")),Gn(Fm,Pw,t),Gn(Fm,Pw,"esm2017"),Gn("fire-js","")}x4("");function Qv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function FT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const A4=FT,UT=new jl("auth","Firebase",FT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=new Gv("@firebase/auth");function R4(t,...e){ah.logLevel<=Ee.WARN&&ah.warn(`Auth (${ws}): ${t}`,...e)}function dc(t,...e){ah.logLevel<=Ee.ERROR&&ah.error(`Auth (${ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,...e){throw Xv(t,...e)}function Kn(t,...e){return Xv(t,...e)}function BT(t,e,n){const r=Object.assign(Object.assign({},A4()),{[e]:n});return new jl("auth","Firebase",r).create(e,{appName:t.name})}function N4(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&gn(t,"argument-error"),BT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return UT.create(t,...e)}function te(t,e,...n){if(!t)throw Xv(e,...n)}function hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dc(e),new Error(e)}function Ir(t,e){t||hr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function P4(){return $w()==="http:"||$w()==="https:"}function $w(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D4(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(P4()||hb()||"connection"in navigator)?navigator.onLine:!0}function O4(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ir(n>e,"Short delay should be less than long delay!"),this.isMobile=ub()||db()}get(){return D4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t,e){Ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $4=new Wl(3e4,6e4);function Mo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fo(t,e,n,r,i={}){return zT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Hl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),VT.fetch()(jT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function zT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},b4),e);try{const i=new L4(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Bu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Bu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Bu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw BT(t,c,u);gn(t,c)}}catch(i){if(i instanceof nr)throw i;gn(t,"network-request-failed",{message:String(i)})}}async function Gl(t,e,n,r,i={}){const s=await Fo(t,e,n,r,i);return"mfaPendingCredential"in s&&gn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function jT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Yv(t.config,i):`${t.config.apiScheme}://${i}`}class L4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kn(this.auth,"network-request-failed")),$4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Kn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M4(t,e){return Fo(t,"POST","/v1/accounts:delete",e)}async function F4(t,e){return Fo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function U4(t,e=!1){const n=at(t),r=await n.getIdToken(e),i=Jv(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oa(ip(i.auth_time)),issuedAtTime:Oa(ip(i.iat)),expirationTime:Oa(ip(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ip(t){return Number(t)*1e3}function Jv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return dc("JWT malformed, contained fewer than 3 sections"),null;try{const i=AT(n);return i?JSON.parse(i):(dc("Failed to decode base64 JWT payload"),null)}catch(i){return dc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function B4(t){const e=Jv(t);return te(e,"internal-error"),te(typeof e.exp!="undefined","internal-error"),te(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nr&&V4(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function V4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oa(this.lastLoginAt),this.creationTime=Oa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lh(t){var e;const n=t.auth,r=await t.getIdToken(),i=await fl(t,F4(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?W4(s.providerUserInfo):[],a=H4(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new HT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function j4(t){const e=at(t);await lh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function H4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function W4(t){return t.map(e=>{var{providerId:n}=e,r=Qv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G4(t,e){const n=await zT(t,{},async()=>{const r=Hl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=jT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",VT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken!="undefined","internal-error"),te(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):B4(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return te(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await G4(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new pl;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pl,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t,e){te(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class qi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new HT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await fl(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return U4(this,e)}reload(){return j4(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fl(this,M4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:C,providerData:k,stsTokenManager:T}=n;te(y&&T,e,"internal-error");const I=pl.fromJSON(this.name,T);te(typeof y=="string",e,"internal-error"),$r(h,e.name),$r(d,e.name),te(typeof E=="boolean",e,"internal-error"),te(typeof C=="boolean",e,"internal-error"),$r(p,e.name),$r(m,e.name),$r(v,e.name),$r(w,e.name),$r(g,e.name),$r(f,e.name);const V=new qi({uid:y,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:C,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:I,createdAt:g,lastLoginAt:f});return k&&Array.isArray(k)&&(V.providerData=k.map(P=>Object.assign({},P))),w&&(V._redirectEventId=w),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new pl;i.updateFromServerResponse(n);const s=new qi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await lh(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=new Map;function dr(t){Ir(t instanceof Function,"Expected a class definition");let e=Lw.get(t);return e?(Ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lw.set(t,e),e)}/**
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
 */class WT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}WT.type="NONE";const Mw=WT;/**
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
 */function fc(t,e,n){return`firebase:${t}:${e}:${n}`}class eo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=fc(this.userKey,i.apiKey,s),this.fullPersistenceKey=fc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new eo(dr(Mw),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||dr(Mw);const o=fc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=qi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new eo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new eo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(GT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(XT(e))return"Blackberry";if(YT(e))return"Webos";if(Zv(e))return"Safari";if((e.includes("chrome/")||KT(e))&&!e.includes("edge/"))return"Chrome";if(QT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function GT(t=Dt()){return/firefox\//i.test(t)}function Zv(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function KT(t=Dt()){return/crios\//i.test(t)}function qT(t=Dt()){return/iemobile/i.test(t)}function QT(t=Dt()){return/android/i.test(t)}function XT(t=Dt()){return/blackberry/i.test(t)}function YT(t=Dt()){return/webos/i.test(t)}function Cd(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function K4(t=Dt()){var e;return Cd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function q4(){return fb()&&document.documentMode===10}function JT(t=Dt()){return Cd(t)||QT(t)||YT(t)||XT(t)||/windows phone/i.test(t)||qT(t)}function Q4(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t,e=[]){let n;switch(t){case"Browser":n=Fw(Dt());break;case"Worker":n=`${Fw(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${r}`}async function eI(t,e){return Fo(t,"GET","/v2/recaptchaConfig",Mo(t,e))}function Uw(t){return t!==void 0&&t.enterprise!==void 0}class tI{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Kn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",X4().appendChild(r)})}function Y4(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const J4="https://www.google.com/recaptcha/enterprise.js?render=",Z4="recaptcha-enterprise",e$="NO_RECAPTCHA";class rI{constructor(e){this.type=Z4,this.auth=Es(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{eI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new tI(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Uw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(e$)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Uw(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}nI(J4+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function uh(t,e,n,r=!1){const i=new rI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class t${constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n${constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bw(this),this.idTokenSubscription=new Bw(this),this.beforeStateQueue=new t$(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=UT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await eo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?at(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dr(e))})}async initializeRecaptchaConfig(){const e=await eI(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new tI(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new rI(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dr(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await eo.create(this,[dr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return te(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ZT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&R4(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Es(t){return at(t)}class Bw{constructor(e){this.auth=e,this.observer=null,this.addObserver=Eb(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r$(t,e){const n=Sd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(sh(s,e!=null?e:{}))return i;gn(i,"already-initialized")}return n.initialize({options:e})}function i$(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function s$(t,e,n){const r=Es(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=iI(e),{host:o,port:a}=o$(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||a$()}function iI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function o$(t){const e=iI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Vw(o)}}}function Vw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function a$(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,n){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}async function l$(t,e){return Fo(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sp(t,e){return Gl(t,"POST","/v1/accounts:signInWithPassword",Mo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u$(t,e){return Gl(t,"POST","/v1/accounts:signInWithEmailLink",Mo(t,e))}async function c$(t,e){return Gl(t,"POST","/v1/accounts:signInWithEmailLink",Mo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends ey{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ml(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ml(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await uh(e,r,"signInWithPassword");return sp(e,i)}else return sp(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await uh(e,r,"signInWithPassword");return sp(e,s)}else return Promise.reject(i)});case"emailLink":return u$(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return l$(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return c$(e,{idToken:n,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(t,e){return Gl(t,"POST","/v1/accounts:signInWithIdp",Mo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h$="http://localhost";class as extends ey{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new as(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return to(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,to(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,to(e,n)}buildRequest(){const e={requestUri:h$,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d$(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function f$(t){const e=ga(va(t)).link,n=e?ga(va(e)).deep_link_id:null,r=ga(va(t)).deep_link_id;return(r?ga(va(r)).link:null)||r||n||e||t}class ty{constructor(e){var n,r,i,s,o,a;const l=ga(va(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=d$((i=l.mode)!==null&&i!==void 0?i:null);te(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=f$(e);try{return new ty(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.providerId=Uo.PROVIDER_ID}static credential(e,n){return ml._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ty.parseLink(n);return te(r,"argument-error"),ml._fromEmailAndCode(e,r.code,r.tenantId)}}Uo.PROVIDER_ID="password";Uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kl extends ny{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Kl{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Kl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.GOOGLE_SIGN_IN_METHOD="google.com";lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends Kl{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.GITHUB_SIGN_IN_METHOD="github.com";zr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Kl{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jr.credential(n,r)}catch{return null}}}jr.TWITTER_SIGN_IN_METHOD="twitter.com";jr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function op(t,e){return Gl(t,"POST","/v1/accounts:signUp",Mo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await qi._fromIdTokenResponse(e,r,i),o=zw(r);return new ls({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=zw(r);return new ls({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function zw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch extends nr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ch.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ch(e,n,r,i)}}function sI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ch._fromErrorAndOperation(t,s,e,r):s})}async function p$(t,e,n=!1){const r=await fl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ls._forOperation(t,"link",r)}/**
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
 */async function m$(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await fl(t,sI(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=Jv(s.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(t.uid===a,r,"user-mismatch"),ls._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t,e,n=!1){const r="signIn",i=await sI(t,r,e),s=await ls._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function g$(t,e){return oI(Es(t),e)}async function v$(t,e,n){var r;const i=Es(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await uh(i,s,"signUpPassword");o=op(i,u)}else o=op(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await uh(i,s,"signUpPassword");return op(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await ls._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function y$(t,e,n){return g$(at(t),Uo.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(t,e){return at(t).setPersistence(e)}function w$(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function E$(t,e,n){return at(t).beforeAuthStateChanged(e,n)}function _$(t){return at(t).signOut()}const hh="__sak";/**
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
 */class lI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hh,"1"),this.storage.removeItem(hh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S$(){const t=Dt();return Zv(t)||Cd(t)}const C$=1e3,T$=10;class uI extends lI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=S$()&&Q4(),this.fallbackToPolling=JT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);q4()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,T$):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},C$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uI.type="LOCAL";const ry=uI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI extends lI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cI.type="SESSION";const hI=cI;/**
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
 */function I$(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Td{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Td(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await I$(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Td.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class k${constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=iy("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return window}function x$(t){qn().location.href=t}/**
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
 */function dI(){return typeof qn().WorkerGlobalScope!="undefined"&&typeof qn().importScripts=="function"}async function A$(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function R$(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function N$(){return dI()?self:null}/**
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
 */const fI="firebaseLocalStorageDb",P$=1,dh="firebaseLocalStorage",pI="fbase_key";class ql{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Id(t,e){return t.transaction([dh],e?"readwrite":"readonly").objectStore(dh)}function D$(){const t=indexedDB.deleteDatabase(fI);return new ql(t).toPromise()}function zm(){const t=indexedDB.open(fI,P$);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dh,{keyPath:pI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dh)?e(r):(r.close(),await D$(),e(await zm()))})})}async function jw(t,e,n){const r=Id(t,!0).put({[pI]:e,value:n});return new ql(r).toPromise()}async function O$(t,e){const n=Id(t,!1).get(e),r=await new ql(n).toPromise();return r===void 0?null:r.value}function Hw(t,e){const n=Id(t,!0).delete(e);return new ql(n).toPromise()}const b$=800,$$=3;class mI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$$)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Td._getInstance(N$()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await A$(),!this.activeServiceWorker)return;this.sender=new k$(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||R$()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zm();return await jw(e,hh,"1"),await Hw(e,hh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>O$(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Id(i,!1).getAll();return new ql(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),b$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mI.type="LOCAL";const L$=mI;new Wl(3e4,6e4);/**
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
 */function gI(t,e){return e?dr(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sy extends ey{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return to(e,this._buildIdpRequest())}_linkToIdToken(e,n){return to(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return to(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function M$(t){return oI(t.auth,new sy(t),t.bypassAuthState)}function F$(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),m$(n,new sy(t),t.bypassAuthState)}async function U$(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),p$(n,new sy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M$;case"linkViaPopup":case"linkViaRedirect":return U$;case"reauthViaPopup":case"reauthViaRedirect":return F$;default:gn(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B$=new Wl(2e3,1e4);async function V$(t,e,n){const r=Es(t);N4(t,e,ny);const i=gI(r,n);return new zi(r,"signInViaPopup",e,i).executeNotNull()}class zi extends vI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=iy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,B$.get())};e()}}zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z$="pendingRedirect",pc=new Map;class j$ extends vI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=pc.get(this.auth._key());if(!e){try{const r=await H$(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pc.set(this.auth._key(),e)}return this.bypassAuthState||pc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function H$(t,e){const n=K$(e),r=G$(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function W$(t,e){pc.set(t._key(),e)}function G$(t){return dr(t._redirectPersistence)}function K$(t){return fc(z$,t.config.apiKey,t.name)}async function q$(t,e,n=!1){const r=Es(t),i=gI(r,e),o=await new j$(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q$=10*60*1e3;class X${constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y$(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Q$&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ww(e))}saveEventToCache(e){this.cachedEventUids.add(Ww(e)),this.lastProcessedEventTime=Date.now()}}function Ww(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y$(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J$(t,e={}){return Fo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z$=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eL=/^https?/;async function tL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await J$(t);for(const n of e)try{if(nL(n))return}catch{}gn(t,"unauthorized-domain")}function nL(t){const e=Vm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eL.test(n))return!1;if(Z$.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const rL=new Wl(3e4,6e4);function Gw(){const t=qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iL(t){return new Promise((e,n)=>{var r,i,s;function o(){Gw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gw(),n(Kn(t,"network-request-failed"))},timeout:rL.get()})}if(!((i=(r=qn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=qn().gapi)===null||s===void 0)&&s.load)o();else{const a=Y4("iframefcb");return qn()[a]=()=>{gapi.load?o():n(Kn(t,"network-request-failed"))},nI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw mc=null,e})}let mc=null;function sL(t){return mc=mc||iL(t),mc}/**
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
 */const oL=new Wl(5e3,15e3),aL="__/auth/iframe",lL="emulator/auth/iframe",uL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hL(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yv(e,lL):`https://${t.config.authDomain}/${aL}`,r={apiKey:e.apiKey,appName:t.name,v:ws},i=cL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Hl(r).slice(1)}`}async function dL(t){const e=await sL(t),n=qn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:hL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Kn(t,"network-request-failed"),a=qn().setTimeout(()=>{s(o)},oL.get());function l(){qn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const fL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pL=500,mL=600,gL="_blank",vL="http://localhost";class Kw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yL(t,e,n,r=pL,i=mL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},fL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Dt().toLowerCase();n&&(a=KT(u)?gL:n),GT(u)&&(e=e||vL,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(K4(u)&&a!=="_self")return wL(e||"",a),new Kw(null);const h=window.open(e||"",a,c);te(h,t,"popup-blocked");try{h.focus()}catch{}return new Kw(h)}function wL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const EL="__/auth/handler",_L="emulator/auth/handler",SL=encodeURIComponent("fac");async function qw(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ws,eventId:i};if(e instanceof ny){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Kl){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${SL}=${encodeURIComponent(l)}`:"";return`${CL(t)}?${Hl(a).slice(1)}${u}`}function CL({config:t}){return t.emulator?Yv(t,_L):`https://${t.authDomain}/${EL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="webStorageSupport";class TL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hI,this._completeRedirectFn=q$,this._overrideRedirectResult=W$}async _openPopup(e,n,r,i){var s;Ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await qw(e,n,r,Vm(),i);return yL(e,o,iy())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await qw(e,n,r,Vm(),i);return x$(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dL(e),r=new X$(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ap,{type:ap},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ap];o!==void 0&&n(!!o),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return JT()||Zv()||Cd()}}const IL=TL;var Qw="@firebase/auth",Xw="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function AL(t){os(new gi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),te(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZT(t)},u=new n$(r,i,s,l);return i$(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),os(new gi("auth-internal",e=>{const n=Es(e.getProvider("auth").getImmediate());return(r=>new kL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gn(Qw,Xw,xL(t)),Gn(Qw,Xw,"esm2017")}/**
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
 */const RL=5*60,NL=PT("authIdTokenMaxAge")||RL;let Yw=null;const PL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NL)return;const i=n==null?void 0:n.token;Yw!==i&&(Yw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function DL(t=qv()){const e=Sd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=r$(t,{popupRedirectResolver:IL,persistence:[L$,ry,hI]}),r=PT("authTokenSyncURL");if(r){const s=PL(r);E$(n,s,()=>s(n.currentUser)),w$(n,o=>s(o))}const i=RT("auth");return i&&s$(n,`http://${i}`),n}AL("Browser");var OL="firebase",bL="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn(OL,bL,"app");var $L=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},W,oy=oy||{},ie=$L||self;function fh(){}function kd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ql(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function LL(t){return Object.prototype.hasOwnProperty.call(t,lp)&&t[lp]||(t[lp]=++ML)}var lp="closure_uid_"+(1e9*Math.random()>>>0),ML=0;function FL(t,e,n){return t.call.apply(t.bind,arguments)}function UL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function At(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?At=FL:At=UL,At.apply(null,arguments)}function Vu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ct(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ai(){this.s=this.s,this.o=this.o}var BL=0;Ai.prototype.s=!1;Ai.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),BL!=0)&&LL(this)};Ai.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ay(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Jw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(kd(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Rt.prototype.h=function(){this.defaultPrevented=!0};var VL=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ie.addEventListener("test",fh,e),ie.removeEventListener("test",fh,e)}catch{}return t}();function ph(t){return/^[\s\xa0]*$/.test(t)}var Zw=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function up(t,e){return t<e?-1:t>e?1:0}function xd(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function Un(t){return xd().indexOf(t)!=-1}function ly(t){return ly[" "](t),t}ly[" "]=fh;function EI(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var zL=Un("Opera"),wo=Un("Trident")||Un("MSIE"),_I=Un("Edge"),jm=_I||wo,SI=Un("Gecko")&&!(xd().toLowerCase().indexOf("webkit")!=-1&&!Un("Edge"))&&!(Un("Trident")||Un("MSIE"))&&!Un("Edge"),jL=xd().toLowerCase().indexOf("webkit")!=-1&&!Un("Edge");function CI(){var t=ie.document;return t?t.documentMode:void 0}var mh;e:{var cp="",hp=function(){var t=xd();if(SI)return/rv:([^\);]+)(\)|;)/.exec(t);if(_I)return/Edge\/([\d\.]+)/.exec(t);if(wo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(jL)return/WebKit\/(\S+)/.exec(t);if(zL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(hp&&(cp=hp?hp[1]:""),wo){var dp=CI();if(dp!=null&&dp>parseFloat(cp)){mh=String(dp);break e}}mh=cp}var HL={};function WL(){return EI(HL,9,function(){let t=0;const e=Zw(String(mh)).split("."),n=Zw("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=up(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||up(i[2].length==0,s[2].length==0)||up(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Hm;if(ie.document&&wo){var eE=CI();Hm=eE||parseInt(mh,10)||void 0}else Hm=void 0;var GL=Hm;function gl(t,e){if(Rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(SI){e:{try{ly(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:KL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&gl.$.h.call(this)}}ct(gl,Rt);var KL={2:"touch",3:"pen",4:"mouse"};gl.prototype.h=function(){gl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Xl="closure_listenable_"+(1e6*Math.random()|0),qL=0;function QL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++qL,this.fa=this.ia=!1}function Ad(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function uy(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function TI(t){const e={};for(const n in t)e[n]=t[n];return e}const tE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function II(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<tE.length;s++)n=tE[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Rd(t){this.src=t,this.g={},this.h=0}Rd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Gm(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new QL(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Wm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=wI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ad(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Gm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var cy="closure_lm_"+(1e6*Math.random()|0),fp={};function kI(t,e,n,r,i){if(r&&r.once)return AI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)kI(t,e[s],n,r,i);return null}return n=fy(n),t&&t[Xl]?t.O(e,n,Ql(r)?!!r.capture:!!r,i):xI(t,e,n,!1,r,i)}function xI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ql(i)?!!i.capture:!!i,a=dy(t);if(a||(t[cy]=a=new Rd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=XL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)VL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(NI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function XL(){function t(n){return e.call(t.src,t.listener,n)}const e=YL;return t}function AI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)AI(t,e[s],n,r,i);return null}return n=fy(n),t&&t[Xl]?t.P(e,n,Ql(r)?!!r.capture:!!r,i):xI(t,e,n,!0,r,i)}function RI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)RI(t,e[s],n,r,i);else r=Ql(r)?!!r.capture:!!r,n=fy(n),t&&t[Xl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Gm(s,n,r,i),-1<n&&(Ad(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=dy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Gm(e,n,r,i)),(n=-1<t?e[t]:null)&&hy(n))}function hy(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Xl])Wm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(NI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=dy(e))?(Wm(n,t),n.h==0&&(n.src=null,e[cy]=null)):Ad(t)}}}function NI(t){return t in fp?fp[t]:fp[t]="on"+t}function YL(t,e){if(t.fa)t=!0;else{e=new gl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&hy(t),t=n.call(r,e)}return t}function dy(t){return t=t[cy],t instanceof Rd?t:null}var pp="__closure_events_fn_"+(1e9*Math.random()>>>0);function fy(t){return typeof t=="function"?t:(t[pp]||(t[pp]=function(e){return t.handleEvent(e)}),t[pp])}function lt(){Ai.call(this),this.i=new Rd(this),this.S=this,this.J=null}ct(lt,Ai);lt.prototype[Xl]=!0;lt.prototype.removeEventListener=function(t,e,n,r){RI(this,t,e,n,r)};function vt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Rt(e,t);else if(e instanceof Rt)e.target=e.target||t;else{var i=e;e=new Rt(r,t),II(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=zu(o,r,!0,e)&&i}if(o=e.g=t,i=zu(o,r,!0,e)&&i,i=zu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=zu(o,r,!1,e)&&i}lt.prototype.N=function(){if(lt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ad(n[r]);delete t.g[e],t.h--}}this.J=null};lt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};lt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function zu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Wm(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var py=ie.JSON.stringify;function JL(){var t=OI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ZL{constructor(){this.h=this.g=null}add(e,n){const r=PI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var PI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new e3,t=>t.reset());class e3{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function t3(t){ie.setTimeout(()=>{throw t},0)}function DI(t,e){Km||n3(),qm||(Km(),qm=!0),OI.add(t,e)}var Km;function n3(){var t=ie.Promise.resolve(void 0);Km=function(){t.then(r3)}}var qm=!1,OI=new ZL;function r3(){for(var t;t=JL();){try{t.h.call(t.g)}catch(n){t3(n)}var e=PI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qm=!1}function Nd(t,e){lt.call(this),this.h=t||1,this.g=e||ie,this.j=At(this.qb,this),this.l=Date.now()}ct(Nd,lt);W=Nd.prototype;W.ga=!1;W.T=null;W.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),vt(this,"tick"),this.ga&&(my(this),this.start()))}};W.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function my(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}W.N=function(){Nd.$.N.call(this),my(this),delete this.g};function gy(t,e,n){if(typeof t=="function")n&&(t=At(t,n));else if(t&&typeof t.handleEvent=="function")t=At(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function bI(t){t.g=gy(()=>{t.g=null,t.i&&(t.i=!1,bI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class i3 extends Ai{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:bI(this)}N(){super.N(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vl(t){Ai.call(this),this.h=t,this.g={}}ct(vl,Ai);var nE=[];function $I(t,e,n,r){Array.isArray(n)||(n&&(nE[0]=n.toString()),n=nE);for(var i=0;i<n.length;i++){var s=kI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function LI(t){uy(t.g,function(e,n){this.g.hasOwnProperty(n)&&hy(e)},t),t.g={}}vl.prototype.N=function(){vl.$.N.call(this),LI(this)};vl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pd(){this.g=!0}Pd.prototype.Ea=function(){this.g=!1};function s3(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function o3(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Hs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+l3(t,n)+(r?" "+r:"")})}function a3(t,e){t.info(function(){return"TIMEOUT: "+e})}Pd.prototype.info=function(){};function l3(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return py(n)}catch{return e}}var _s={},rE=null;function Dd(){return rE=rE||new lt}_s.Ta="serverreachability";function MI(t){Rt.call(this,_s.Ta,t)}ct(MI,Rt);function yl(t){const e=Dd();vt(e,new MI(e))}_s.STAT_EVENT="statevent";function FI(t,e){Rt.call(this,_s.STAT_EVENT,t),this.stat=e}ct(FI,Rt);function Lt(t){const e=Dd();vt(e,new FI(e,t))}_s.Ua="timingevent";function UI(t,e){Rt.call(this,_s.Ua,t),this.size=e}ct(UI,Rt);function Yl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var Od={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},BI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function vy(){}vy.prototype.h=null;function iE(t){return t.h||(t.h=t.i())}function VI(){}var Jl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function yy(){Rt.call(this,"d")}ct(yy,Rt);function wy(){Rt.call(this,"c")}ct(wy,Rt);var Qm;function bd(){}ct(bd,vy);bd.prototype.g=function(){return new XMLHttpRequest};bd.prototype.i=function(){return{}};Qm=new bd;function Zl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new vl(this),this.P=u3,t=jm?125:void 0,this.V=new Nd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new zI}function zI(){this.i=null,this.g="",this.h=!1}var u3=45e3,Xm={},gh={};W=Zl.prototype;W.setTimeout=function(t){this.P=t};function Ym(t,e,n){t.L=1,t.v=Ld(kr(e)),t.s=n,t.S=!0,jI(t,null)}function jI(t,e){t.G=Date.now(),eu(t),t.A=kr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),YI(n.i,"t",r),t.C=0,n=t.l.I,t.h=new zI,t.g=yk(t.l,n?e:null,!t.s),0<t.O&&(t.M=new i3(At(t.Pa,t,t.g),t.O)),$I(t.U,t.g,"readystatechange",t.nb),e=t.I?TI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),yl(),s3(t.j,t.u,t.A,t.m,t.W,t.s)}W.nb=function(t){t=t.target;const e=this.M;e&&fr(t)==3?e.l():this.Pa(t)};W.Pa=function(t){try{if(t==this.g)e:{const c=fr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||jm||this.g&&(this.h.h||this.g.ja()||lE(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?yl(3):yl(2)),$d(this);var n=this.g.da();this.aa=n;t:if(HI(this)){var r=lE(this.g);t="";var i=r.length,s=fr(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ji(this),ba(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,o3(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ph(a)){var u=a;break t}}u=null}if(n=u)Hs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jm(this,n);else{this.i=!1,this.o=3,Lt(12),ji(this),ba(this);break e}}this.S?(WI(this,c,o),jm&&this.i&&c==3&&($I(this.U,this.V,"tick",this.mb),this.V.start())):(Hs(this.j,this.m,o,null),Jm(this,o)),c==4&&ji(this),this.i&&!this.J&&(c==4?pk(this.l,this):(this.i=!1,eu(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Lt(12)):(this.o=0,Lt(13)),ji(this),ba(this)}}}catch{}finally{}};function HI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function WI(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=c3(t,n),i==gh){e==4&&(t.o=4,Lt(14),r=!1),Hs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Xm){t.o=4,Lt(15),Hs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Hs(t.j,t.m,i,null),Jm(t,i);HI(t)&&i!=gh&&i!=Xm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ky(e),e.L=!0,Lt(11))):(Hs(t.j,t.m,n,"[Invalid Chunked Response]"),ji(t),ba(t))}W.mb=function(){if(this.g){var t=fr(this.g),e=this.g.ja();this.C<e.length&&($d(this),WI(this,t,e),this.i&&t!=4&&eu(this))}};function c3(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?gh:(n=Number(e.substring(n,r)),isNaN(n)?Xm:(r+=1,r+n>e.length?gh:(e=e.substr(r,n),t.C=r+n,e)))}W.cancel=function(){this.J=!0,ji(this)};function eu(t){t.Y=Date.now()+t.P,GI(t,t.P)}function GI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Yl(At(t.lb,t),e)}function $d(t){t.B&&(ie.clearTimeout(t.B),t.B=null)}W.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(a3(this.j,this.A),this.L!=2&&(yl(),Lt(17)),ji(this),this.o=2,ba(this)):GI(this,this.Y-t)};function ba(t){t.l.H==0||t.J||pk(t.l,t)}function ji(t){$d(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,my(t.V),LI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Jm(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Zm(n.h,t))){if(!t.K&&Zm(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)wh(n),Ud(n);else break e;Iy(n),Lt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=Yl(At(n.ib,n),6e3));if(1>=ek(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Hi(n,11)}else if((t.K||n.g==t)&&wh(n),!ph(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ey(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,be(r.G,r.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=vk(r,r.I?r.oa:null,r.Y),o.K){tk(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&($d(a),eu(a)),r.g=o}else dk(r);0<n.i.length&&Bd(n)}else u[0]!="stop"&&u[0]!="close"||Hi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Hi(n,7):Ty(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}yl(4)}catch{}}function h3(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(kd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function d3(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(kd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function KI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(kd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=d3(t),r=h3(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var qI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function f3(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Qi){this.h=e!==void 0?e:t.h,vh(this,t.j),this.s=t.s,this.g=t.g,yh(this,t.m),this.l=t.l,e=t.i;var n=new wl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),sE(this,n),this.o=t.o}else t&&(n=String(t).match(qI))?(this.h=!!e,vh(this,n[1]||"",!0),this.s=ya(n[2]||""),this.g=ya(n[3]||"",!0),yh(this,n[4]),this.l=ya(n[5]||"",!0),sE(this,n[6]||"",!0),this.o=ya(n[7]||"")):(this.h=!!e,this.i=new wl(null,this.h))}Qi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(wa(e,oE,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(wa(e,oE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(wa(n,n.charAt(0)=="/"?g3:m3,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",wa(n,y3)),t.join("")};function kr(t){return new Qi(t)}function vh(t,e,n){t.j=n?ya(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function yh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function sE(t,e,n){e instanceof wl?(t.i=e,w3(t.i,t.h)):(n||(e=wa(e,v3)),t.i=new wl(e,t.h))}function be(t,e,n){t.i.set(e,n)}function Ld(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ya(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function wa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,p3),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function p3(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var oE=/[#\/\?@]/g,m3=/[#\?:]/g,g3=/[#\?]/g,v3=/[#\?@]/g,y3=/#/g;function wl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ri(t){t.g||(t.g=new Map,t.h=0,t.i&&f3(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}W=wl.prototype;W.add=function(t,e){Ri(this),this.i=null,t=Bo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function QI(t,e){Ri(t),e=Bo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function XI(t,e){return Ri(t),e=Bo(t,e),t.g.has(e)}W.forEach=function(t,e){Ri(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};W.sa=function(){Ri(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};W.Z=function(t){Ri(this);let e=[];if(typeof t=="string")XI(this,t)&&(e=e.concat(this.g.get(Bo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};W.set=function(t,e){return Ri(this),this.i=null,t=Bo(this,t),XI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};W.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function YI(t,e,n){QI(t,e),0<n.length&&(t.i=null,t.g.set(Bo(t,e),ay(n)),t.h+=n.length)}W.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Bo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function w3(t,e){e&&!t.j&&(Ri(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(QI(this,r),YI(this,i,n))},t)),t.j=e}var E3=class{constructor(t,e){this.h=t,this.g=e}};function JI(t){this.l=t||_3,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ka&&ie.g.Ka()&&ie.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _3=10;function ZI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ek(t){return t.h?1:t.g?t.g.size:0}function Zm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ey(t,e){t.g?t.g.add(e):t.h=e}function tk(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}JI.prototype.cancel=function(){if(this.i=nk(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function nk(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ay(t.i)}function _y(){}_y.prototype.stringify=function(t){return ie.JSON.stringify(t,void 0)};_y.prototype.parse=function(t){return ie.JSON.parse(t,void 0)};function S3(){this.g=new _y}function C3(t,e,n){const r=n||"";try{KI(t,function(i,s){let o=i;Ql(i)&&(o=py(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function T3(t,e){const n=new Pd;if(ie.Image){const r=new Image;r.onload=Vu(ju,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Vu(ju,n,r,"TestLoadImage: error",!1,e),r.onabort=Vu(ju,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Vu(ju,n,r,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ju(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function tu(t){this.l=t.fc||null,this.j=t.ob||!1}ct(tu,vy);tu.prototype.g=function(){return new Md(this.l,this.j)};tu.prototype.i=function(t){return function(){return t}}({});function Md(t,e){lt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Sy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ct(Md,lt);var Sy=0;W=Md.prototype;W.open=function(t,e){if(this.readyState!=Sy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,El(this)};W.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ie).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};W.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nu(this)),this.readyState=Sy};W.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,El(this)),this.g&&(this.readyState=3,El(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ie.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rk(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function rk(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}W.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?nu(this):El(this),this.readyState==3&&rk(this)}};W.Za=function(t){this.g&&(this.response=this.responseText=t,nu(this))};W.Ya=function(t){this.g&&(this.response=t,nu(this))};W.ka=function(){this.g&&nu(this)};function nu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,El(t)}W.setRequestHeader=function(t,e){this.v.append(t,e)};W.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};W.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function El(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Md.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var I3=ie.JSON.parse;function je(t){lt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ik,this.L=this.M=!1}ct(je,lt);var ik="",k3=/^https?$/i,x3=["POST","PUT"];W=je.prototype;W.Oa=function(t){this.M=t};W.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Qm.g(),this.C=this.u?iE(this.u):iE(Qm),this.g.onreadystatechange=At(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){aE(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ie.FormData&&t instanceof ie.FormData,!(0<=wI(x3,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ak(this),0<this.B&&((this.L=A3(this.g))?(this.g.timeout=this.B,this.g.ontimeout=At(this.ua,this)):this.A=gy(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){aE(this,s)}};function A3(t){return wo&&WL()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}W.ua=function(){typeof oy!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,vt(this,"timeout"),this.abort(8))};function aE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,sk(t),Fd(t)}function sk(t){t.F||(t.F=!0,vt(t,"complete"),vt(t,"error"))}W.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,vt(this,"complete"),vt(this,"abort"),Fd(this))};W.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fd(this,!0)),je.$.N.call(this)};W.La=function(){this.s||(this.G||this.v||this.l?ok(this):this.kb())};W.kb=function(){ok(this)};function ok(t){if(t.h&&typeof oy!="undefined"&&(!t.C[1]||fr(t)!=4||t.da()!=2)){if(t.v&&fr(t)==4)gy(t.La,0,t);else if(vt(t,"readystatechange"),fr(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(qI)[1]||null;if(!i&&ie.self&&ie.self.location){var s=ie.self.location.protocol;i=s.substr(0,s.length-1)}r=!k3.test(i?i.toLowerCase():"")}n=r}if(n)vt(t,"complete"),vt(t,"success");else{t.m=6;try{var o=2<fr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",sk(t)}}finally{Fd(t)}}}}function Fd(t,e){if(t.g){ak(t);const n=t.g,r=t.C[0]?fh:null;t.g=null,t.C=null,e||vt(t,"ready");try{n.onreadystatechange=r}catch{}}}function ak(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}function fr(t){return t.g?t.g.readyState:0}W.da=function(){try{return 2<fr(this)?this.g.status:-1}catch{return-1}};W.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};W.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),I3(e)}};function lE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ik:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}W.Ia=function(){return this.m};W.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function lk(t){let e="";return uy(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Cy(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=lk(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function aa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function uk(t){this.Ga=0,this.i=[],this.j=new Pd,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=aa("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=aa("baseRetryDelayMs",5e3,t),this.hb=aa("retryDelaySeedMs",1e4,t),this.eb=aa("forwardChannelMaxRetries",2,t),this.xa=aa("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new JI(t&&t.concurrentRequestLimit),this.Ja=new S3,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}W=uk.prototype;W.qa=8;W.H=1;function Ty(t){if(ck(t),t.H==3){var e=t.W++,n=kr(t.G);be(n,"SID",t.J),be(n,"RID",e),be(n,"TYPE","terminate"),ru(t,n),e=new Zl(t,t.j,e,void 0),e.L=2,e.v=Ld(kr(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon&&(n=ie.navigator.sendBeacon(e.v.toString(),"")),!n&&ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=yk(e.l,null),e.g.ha(e.v)),e.G=Date.now(),eu(e)}gk(t)}function Ud(t){t.g&&(ky(t),t.g.cancel(),t.g=null)}function ck(t){Ud(t),t.u&&(ie.clearTimeout(t.u),t.u=null),wh(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function Bd(t){ZI(t.h)||t.m||(t.m=!0,DI(t.Na,t),t.C=0)}function R3(t,e){return ek(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Yl(At(t.Na,t,e),mk(t,t.C)),t.C++,!0)}W.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Zl(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=TI(s),II(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=hk(this,i,e),n=kr(this.G),be(n,"RID",t),be(n,"CVER",22),this.F&&be(n,"X-HTTP-Session-Id",this.F),ru(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(lk(s)))+"&"+e:this.o&&Cy(n,this.o,s)),Ey(this.h,i),this.bb&&be(n,"TYPE","init"),this.P?(be(n,"$req",e),be(n,"SID","null"),i.ba=!0,Ym(i,n,null)):Ym(i,n,e),this.H=2}}else this.H==3&&(t?uE(this,t):this.i.length==0||ZI(this.h)||uE(this))};function uE(t,e){var n;e?n=e.m:n=t.W++;const r=kr(t.G);be(r,"SID",t.J),be(r,"RID",n),be(r,"AID",t.V),ru(t,r),t.o&&t.s&&Cy(r,t.o,t.s),n=new Zl(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=hk(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ey(t.h,n),Ym(n,r,e)}function ru(t,e){t.ma&&uy(t.ma,function(n,r){be(e,r,n)}),t.l&&KI({},function(n,r){be(e,r,n)})}function hk(t,e,n){n=Math.min(t.i.length,n);var r=t.l?At(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{C3(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function dk(t){t.g||t.u||(t.ba=1,DI(t.Ma,t),t.A=0)}function Iy(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Yl(At(t.Ma,t),mk(t,t.A)),t.A++,!0)}W.Ma=function(){if(this.u=null,fk(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Yl(At(this.jb,this),t)}};W.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Lt(10),Ud(this),fk(this))};function ky(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function fk(t){t.g=new Zl(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=kr(t.wa);be(e,"RID","rpc"),be(e,"SID",t.J),be(e,"CI",t.M?"0":"1"),be(e,"AID",t.V),be(e,"TYPE","xmlhttp"),ru(t,e),t.o&&t.s&&Cy(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Ld(kr(e)),n.s=null,n.S=!0,jI(n,t)}W.ib=function(){this.v!=null&&(this.v=null,Ud(this),Iy(this),Lt(19))};function wh(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function pk(t,e){var n=null;if(t.g==e){wh(t),ky(t),t.g=null;var r=2}else if(Zm(t.h,e))n=e.F,tk(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Dd(),vt(r,new UI(r,n)),Bd(t)}else dk(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&R3(t,e)||r==2&&Iy(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Hi(t,5);break;case 4:Hi(t,10);break;case 3:Hi(t,6);break;default:Hi(t,2)}}}function mk(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Hi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=At(t.pb,t);n||(n=new Qi("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||vh(n,"https"),Ld(n)),T3(n.toString(),r)}else Lt(2);t.H=0,t.l&&t.l.za(e),gk(t),ck(t)}W.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function gk(t){if(t.H=0,t.pa=[],t.l){const e=nk(t.h);(e.length!=0||t.i.length!=0)&&(Jw(t.pa,e),Jw(t.pa,t.i),t.h.i.length=0,ay(t.i),t.i.length=0),t.l.ya()}}function vk(t,e,n){var r=n instanceof Qi?kr(n):new Qi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),yh(r,r.m);else{var i=ie.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Qi(null,void 0);r&&vh(s,r),e&&(s.g=e),i&&yh(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&be(r,n,e),be(r,"VER",t.qa),ru(t,r),r}function yk(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new je(new tu({ob:!0})):new je(t.va),e.Oa(t.I),e}function wk(){}W=wk.prototype;W.Ba=function(){};W.Aa=function(){};W.za=function(){};W.ya=function(){};W.Va=function(){};function Eh(){if(wo&&!(10<=Number(GL)))throw Error("Environmental error: no available transport.")}Eh.prototype.g=function(t,e){return new tn(t,e)};function tn(t,e){lt.call(this),this.g=new uk(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ph(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ph(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Vo(this)}ct(tn,lt);tn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Lt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=vk(t,null,t.Y),Bd(t)};tn.prototype.close=function(){Ty(this.g)};tn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=py(t),t=n);e.i.push(new E3(e.fb++,t)),e.H==3&&Bd(e)};tn.prototype.N=function(){this.g.l=null,delete this.j,Ty(this.g),delete this.g,tn.$.N.call(this)};function Ek(t){yy.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ct(Ek,yy);function _k(){wy.call(this),this.status=1}ct(_k,wy);function Vo(t){this.g=t}ct(Vo,wk);Vo.prototype.Ba=function(){vt(this.g,"a")};Vo.prototype.Aa=function(t){vt(this.g,new Ek(t))};Vo.prototype.za=function(t){vt(this.g,new _k)};Vo.prototype.ya=function(){vt(this.g,"b")};function N3(){this.blockSize=-1}function bn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ct(bn,N3);bn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function mp(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}bn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)mp(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){mp(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){mp(this,r),i=0;break}}this.h=i,this.i+=e};bn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Te(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var P3={};function xy(t){return-128<=t&&128>t?EI(P3,t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function Vn(t){if(isNaN(t)||!isFinite(t))return no;if(0>t)return mt(Vn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=eg;return new Te(e,0)}function Sk(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return mt(Sk(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Vn(Math.pow(e,8)),r=no,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Vn(Math.pow(e,s)),r=r.R(s).add(Vn(o))):(r=r.R(n),r=r.add(Vn(o)))}return r}var eg=4294967296,no=xy(0),tg=xy(1),cE=xy(16777216);W=Te.prototype;W.ea=function(){if(un(this))return-mt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:eg+r)*e,e*=eg}return t};W.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(pr(this))return"0";if(un(this))return"-"+mt(this).toString(t);for(var e=Vn(Math.pow(t,6)),n=this,r="";;){var i=Sh(n,e).g;n=_h(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,pr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};W.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function pr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function un(t){return t.h==-1}W.X=function(t){return t=_h(this,t),un(t)?-1:pr(t)?0:1};function mt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Te(n,~t.h).add(tg)}W.abs=function(){return un(this)?mt(this):this};W.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function _h(t,e){return t.add(mt(e))}W.R=function(t){if(pr(this)||pr(t))return no;if(un(this))return un(t)?mt(this).R(mt(t)):mt(mt(this).R(t));if(un(t))return mt(this.R(mt(t)));if(0>this.X(cE)&&0>t.X(cE))return Vn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Hu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Hu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Hu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Hu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Te(n,0)};function Hu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function la(t,e){this.g=t,this.h=e}function Sh(t,e){if(pr(e))throw Error("division by zero");if(pr(t))return new la(no,no);if(un(t))return e=Sh(mt(t),e),new la(mt(e.g),mt(e.h));if(un(e))return e=Sh(t,mt(e)),new la(mt(e.g),e.h);if(30<t.g.length){if(un(t)||un(e))throw Error("slowDivide_ only works with positive integers.");for(var n=tg,r=e;0>=r.X(t);)n=hE(n),r=hE(r);var i=ks(n,1),s=ks(r,1);for(r=ks(r,2),n=ks(n,2);!pr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ks(r,1),n=ks(n,1)}return e=_h(t,i.R(e)),new la(i,e)}for(i=no;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Vn(n),o=s.R(e);un(o)||0<o.X(t);)n-=r,s=Vn(n),o=s.R(e);pr(s)&&(s=tg),i=i.add(s),t=_h(t,o)}return new la(i,t)}W.gb=function(t){return Sh(this,t).h};W.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Te(n,this.h&t.h)};W.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Te(n,this.h|t.h)};W.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Te(n,this.h^t.h)};function hE(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Te(n,t.h)}function ks(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Te(i,t.h)}Eh.prototype.createWebChannel=Eh.prototype.g;tn.prototype.send=tn.prototype.u;tn.prototype.open=tn.prototype.m;tn.prototype.close=tn.prototype.close;Od.NO_ERROR=0;Od.TIMEOUT=8;Od.HTTP_ERROR=6;BI.COMPLETE="complete";VI.EventType=Jl;Jl.OPEN="a";Jl.CLOSE="b";Jl.ERROR="c";Jl.MESSAGE="d";lt.prototype.listen=lt.prototype.O;je.prototype.listenOnce=je.prototype.P;je.prototype.getLastError=je.prototype.Sa;je.prototype.getLastErrorCode=je.prototype.Ia;je.prototype.getStatus=je.prototype.da;je.prototype.getResponseJson=je.prototype.Wa;je.prototype.getResponseText=je.prototype.ja;je.prototype.send=je.prototype.ha;je.prototype.setWithCredentials=je.prototype.Oa;bn.prototype.digest=bn.prototype.l;bn.prototype.reset=bn.prototype.reset;bn.prototype.update=bn.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=Vn;Te.fromString=Sk;var D3=function(){return new Eh},O3=function(){return Dd()},gp=Od,b3=BI,$3=_s,dE={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},L3=tu,Wu=VI,M3=je,F3=bn,ro=Te;const fE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new Gv("@firebase/firestore");function pE(){return us.logLevel}function X(t,...e){if(us.logLevel<=Ee.DEBUG){const n=e.map(Ay);us.debug(`Firestore (${zo}): ${t}`,...n)}}function xr(t,...e){if(us.logLevel<=Ee.ERROR){const n=e.map(Ay);us.error(`Firestore (${zo}): ${t}`,...n)}}function Eo(t,...e){if(us.logLevel<=Ee.WARN){const n=e.map(Ay);us.warn(`Firestore (${zo}): ${t}`,...n)}}function Ay(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${zo}) INTERNAL ASSERTION FAILED: `+t;throw xr(e),new Error(e)}function Pe(t,e){t||re()}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends nr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class U3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class B3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class V3{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new yr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string"),new Ck(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new Tt(e)}}class z3{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class j3{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new z3(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class H3{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class W3{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.T=n.token,new H3(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G3(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=G3(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function _o(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new nt(0,0))}static max(){return new ae(new nt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _l.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _l?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends _l{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const K3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends _l{construct(e,n,r){return new xt(e,n,r)}static isValidIdentifier(e){return K3.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Z($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Z($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Z($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee($e.fromString(e))}static fromName(e){return new ee($e.fromString(e).popFirst(5))}static empty(){return new ee($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new $e(e.slice()))}}function q3(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new vi(i,ee.empty(),e)}function Q3(t){return new vi(t.readTime,t.key,-1)}class vi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vi(ae.min(),ee.empty(),-1)}static max(){return new vi(ae.max(),ee.empty(),-1)}}function X3(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class J3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iu(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==Y3)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function su(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ry{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ry.ct=-1;function Vd(t){return t==null}function Ch(t){return t===0&&1/t==-1/0}function Z3(t){return typeof t=="number"&&Number.isInteger(t)&&!Ch(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ik(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gu(this.root,e,this.comparator,!0)}}class Gu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:pt.RED,this.left=i!=null?i:pt.EMPTY,this.right=s!=null?s:pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new pt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(t,e,n,r,i){return this}insert(t,e,n){return new pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gE(this.data.getIterator())}getIteratorFrom(e){return new gE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Nt(this.comparator);return n.data=e,n}}class gE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new An([])}unionWith(e){let n=new Nt(xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new An(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _o(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class kk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException!="undefined"&&i instanceof DOMException?new kk("Invalid base64 string: "+i):i}}(e);return new Ot(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const eM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yi(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=eM.exec(t);if(Pe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function cs(t){return typeof t=="string"?Ot.fromBase64String(t):Ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Py(t){const e=t.mapValue.fields.__previous_value__;return Ny(e)?Py(e):e}function Sl(t){const e=yi(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Cl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Cl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ny(t)?4:nM(t)?9007199254740991:10:re()}function Yn(t,e){if(t===e)return!0;const n=hs(t);if(n!==hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sl(t).isEqual(Sl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=yi(r.timestampValue),o=yi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return cs(r.bytesValue).isEqual(cs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Qe(r.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(r.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Qe(r.integerValue)===Qe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Qe(r.doubleValue),o=Qe(i.doubleValue);return s===o?Ch(s)===Ch(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return _o(t.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(mE(s)!==mE(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Yn(s[a],o[a])))return!1;return!0}(t,e);default:return re()}}function Tl(t,e){return(t.values||[]).find(n=>Yn(n,e))!==void 0}function So(t,e){if(t===e)return 0;const n=hs(t),r=hs(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Qe(i.integerValue||i.doubleValue),a=Qe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return vE(t.timestampValue,e.timestampValue);case 4:return vE(Sl(t),Sl(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(i,s){const o=cs(i),a=cs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Se(o[l],a[l]);if(u!==0)return u}return Se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Se(Qe(i.latitude),Qe(s.latitude));return o!==0?o:Se(Qe(i.longitude),Qe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=So(o[l],a[l]);if(u)return u}return Se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ku.mapValue&&s===Ku.mapValue)return 0;if(i===Ku.mapValue)return 1;if(s===Ku.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Se(a[c],u[c]);if(h!==0)return h;const d=So(o[a[c]],l[u[c]]);if(d!==0)return d}return Se(a.length,u.length)}(t.mapValue,e.mapValue);default:throw re()}}function vE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=yi(t),r=yi(e),i=Se(n.seconds,r.seconds);return i!==0?i:Se(n.nanos,r.nanos)}function Co(t){return ng(t)}function ng(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=yi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?cs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ee.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=ng(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${ng(r.fields[a])}`;return s+"}"}(t.mapValue):re();var e,n}function rg(t){return!!t&&"integerValue"in t}function Dy(t){return!!t&&"arrayValue"in t}function yE(t){return!!t&&"nullValue"in t}function wE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gc(t){return!!t&&"mapValue"in t}function $a(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$a(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$a(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$a(n)}setAll(e){let n=xt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=$a(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());gc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];gc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){jo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new cn($a(this.value))}}function xk(t){const e=[];return jo(t.fields,(n,r)=>{const i=new xt([n]);if(gc(r)){const s=xk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new An(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new kt(e,0,ae.min(),ae.min(),ae.min(),cn.empty(),0)}static newFoundDocument(e,n,r,i){return new kt(e,1,n,ae.min(),r,i,0)}static newNoDocument(e,n){return new kt(e,2,n,ae.min(),ae.min(),cn.empty(),0)}static newUnknownDocument(e,n){return new kt(e,3,n,ae.min(),ae.min(),cn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Th{constructor(e,n){this.position=e,this.inclusive=n}}function EE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=So(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _E(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class La{constructor(e,n="asc"){this.field=e,this.dir=n}}function rM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ak{}class et extends Ak{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sM(e,n,r):n==="array-contains"?new lM(e,r):n==="in"?new uM(e,r):n==="not-in"?new cM(e,r):n==="array-contains-any"?new hM(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new oM(e,r):new aM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(So(n,this.value)):n!==null&&hs(this.value)===hs(n)&&this.matchesComparison(So(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Jn extends Ak{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Jn(e,n)}matches(e){return Rk(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Rk(t){return t.op==="and"}function Nk(t){return iM(t)&&Rk(t)}function iM(t){for(const e of t.filters)if(e instanceof Jn)return!1;return!0}function ig(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Co(t.value);if(Nk(t))return t.filters.map(e=>ig(e)).join(",");{const e=t.filters.map(n=>ig(n)).join(",");return`${t.op}(${e})`}}function Pk(t,e){return t instanceof et?function(n,r){return r instanceof et&&n.op===r.op&&n.field.isEqual(r.field)&&Yn(n.value,r.value)}(t,e):t instanceof Jn?function(n,r){return r instanceof Jn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Pk(s,r.filters[o]),!0):!1}(t,e):void re()}function Dk(t){return t instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Co(e.value)}`}(t):t instanceof Jn?function(e){return e.op.toString()+" {"+e.getFilters().map(Dk).join(" ,")+"}"}(t):"Filter"}class sM extends et{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class oM extends et{constructor(e,n){super(e,"in",n),this.keys=Ok("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aM extends et{constructor(e,n){super(e,"not-in",n),this.keys=Ok("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ok(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class lM extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dy(n)&&Tl(n.arrayValue,this.value)}}class uM extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Tl(this.value.arrayValue,n)}}class cM extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Tl(this.value.arrayValue,n)}}class hM extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Tl(this.value.arrayValue,r))}}/**
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
 */class dM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function SE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new dM(t,e,n,r,i,s,o)}function Oy(t){const e=ce(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ig(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Vd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Co(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Co(r)).join(",")),e.ft=n}return e.ft}function by(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Pk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_E(t.startAt,e.startAt)&&_E(t.endAt,e.endAt)}function sg(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function fM(t,e,n,r,i,s,o,a){return new zd(t,e,n,r,i,s,o,a)}function $y(t){return new zd(t)}function CE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pM(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function mM(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function gM(t){return t.collectionGroup!==null}function io(t){const e=ce(t);if(e.dt===null){e.dt=[];const n=mM(e),r=pM(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new La(n)),e.dt.push(new La(xt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new La(xt.keyField(),s))}}}return e.dt}function Ar(t){const e=ce(t);if(!e._t)if(e.limitType==="F")e._t=SE(e.path,e.collectionGroup,io(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of io(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new La(s.field,o))}const r=e.endAt?new Th(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Th(e.startAt.position,e.startAt.inclusive):null;e._t=SE(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function og(t,e,n){return new zd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jd(t,e){return by(Ar(t),Ar(e))&&t.limitType===e.limitType}function bk(t){return`${Oy(Ar(t))}|lt:${t.limitType}`}function ag(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Dk(r)).join(", ")}]`),Vd(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Co(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Co(r)).join(",")),`Target(${n})`}(Ar(t))}; limitType=${t.limitType})`}function Hd(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ee.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of io(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=EE(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,io(n),r)||n.endAt&&!function(i,s,o){const a=EE(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,io(n),r))}(t,e)}function vM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $k(t){return(e,n)=>{let r=!1;for(const i of io(t)){const s=yM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function yM(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?So(a,l):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){jo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ik(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM=new Ue(ee.comparator);function Rr(){return wM}const Lk=new Ue(ee.comparator);function Ea(...t){let e=Lk;for(const n of t)e=e.insert(n.key,n);return e}function Mk(t){let e=Lk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wi(){return Ma()}function Fk(){return Ma()}function Ma(){return new Ho(t=>t.toString(),(t,e)=>t.isEqual(e))}const EM=new Ue(ee.comparator),_M=new Nt(ee.comparator);function me(...t){let e=_M;for(const n of t)e=e.add(n);return e}const SM=new Nt(Se);function CM(){return SM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ch(e)?"-0":e}}function Bk(t){return{integerValue:""+t}}function TM(t,e){return Z3(e)?Bk(e):Uk(t,e)}/**
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
 */class Wd{constructor(){this._=void 0}}function IM(t,e,n){return t instanceof Ih?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Ny(i)&&(i=Py(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Il?zk(t,e):t instanceof kl?jk(t,e):function(r,i){const s=Vk(r,i),o=TE(s)+TE(r.wt);return rg(s)&&rg(r.wt)?Bk(o):Uk(r.serializer,o)}(t,e)}function kM(t,e,n){return t instanceof Il?zk(t,e):t instanceof kl?jk(t,e):n}function Vk(t,e){return t instanceof kh?rg(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ih extends Wd{}class Il extends Wd{constructor(e){super(),this.elements=e}}function zk(t,e){const n=Hk(e);for(const r of t.elements)n.some(i=>Yn(i,r))||n.push(r);return{arrayValue:{values:n}}}class kl extends Wd{constructor(e){super(),this.elements=e}}function jk(t,e){let n=Hk(e);for(const r of t.elements)n=n.filter(i=>!Yn(i,r));return{arrayValue:{values:n}}}class kh extends Wd{constructor(e,n){super(),this.serializer=e,this.wt=n}}function TE(t){return Qe(t.integerValue||t.doubleValue)}function Hk(t){return Dy(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function xM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Il&&r instanceof Il||n instanceof kl&&r instanceof kl?_o(n.elements,r.elements,Yn):n instanceof kh&&r instanceof kh?Yn(n.wt,r.wt):n instanceof Ih&&r instanceof Ih}(t.transform,e.transform)}class AM{constructor(e,n){this.version=e,this.transformResults=n}}class Qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gd{}function Wk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Kk(t.key,Qn.none()):new ou(t.key,t.data,Qn.none());{const n=t.data,r=cn.empty();let i=new Nt(xt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ss(t.key,r,new An(i.toArray()),Qn.none())}}function RM(t,e,n){t instanceof ou?function(r,i,s){const o=r.value.clone(),a=kE(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ss?function(r,i,s){if(!vc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=kE(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Gk(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Fa(t,e,n,r){return t instanceof ou?function(i,s,o,a){if(!vc(i.precondition,s))return o;const l=i.value.clone(),u=xE(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ss?function(i,s,o,a){if(!vc(i.precondition,s))return o;const l=xE(i.fieldTransforms,a,s),u=s.data;return u.setAll(Gk(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return vc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function NM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Vk(r.transform,i||null);s!=null&&(n===null&&(n=cn.empty()),n.set(r.field,s))}return n||null}function IE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&_o(n,r,(i,s)=>xM(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ou extends Gd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ss extends Gd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Gk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kE(t,e,n){const r=new Map;Pe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,kM(o,a,n[i]))}return r}function xE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,IM(s,o,e))}return r}class Kk extends Gd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PM extends Gd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&RM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Fk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Wk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&_o(this.mutations,e.mutations,(n,r)=>IE(n,r))&&_o(this.baseMutations,e.baseMutations,(n,r)=>IE(n,r))}}class Ly{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Pe(e.mutations.length===r.length);let i=EM;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ly(e,n,r,i)}}/**
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
 */class OM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,ve;function $M(t){switch(t){default:return re();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function qk(t){if(t===void 0)return xr("GRPC error has no .code"),$.UNKNOWN;switch(t){case qe.OK:return $.OK;case qe.CANCELLED:return $.CANCELLED;case qe.UNKNOWN:return $.UNKNOWN;case qe.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case qe.INTERNAL:return $.INTERNAL;case qe.UNAVAILABLE:return $.UNAVAILABLE;case qe.UNAUTHENTICATED:return $.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case qe.NOT_FOUND:return $.NOT_FOUND;case qe.ALREADY_EXISTS:return $.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return $.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case qe.ABORTED:return $.ABORTED;case qe.OUT_OF_RANGE:return $.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return $.UNIMPLEMENTED;case qe.DATA_LOSS:return $.DATA_LOSS;default:return re()}}(ve=qe||(qe={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class My{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return qu}static getOrCreateInstance(){return qu===null&&(qu=new My),qu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let qu=null;/**
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
 */function LM(){return new TextEncoder}/**
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
 */const MM=new ro([4294967295,4294967295],0);function AE(t){const e=LM().encode(t),n=new F3;return n.update(e),new Uint8Array(n.digest())}function RE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ro([n,r],0),new ro([i,s],0)]}class Fy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _a(`Invalid padding: ${n}`);if(r<0)throw new _a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _a(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=ro.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(ro.fromNumber(r)));return i.compare(MM)===1&&(i=new ro([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=AE(e),[r,i]=RE(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Fy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=AE(e),[r,i]=RE(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,au.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Kd(ae.min(),i,new Ue(Se),Rr(),me())}}class au{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new au(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class Qk{constructor(e,n){this.targetId=e,this.bt=n}}class Xk{constructor(e,n,r=Ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class NE{constructor(){this.Vt=0,this.St=DE(),this.Dt=Ot.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=me(),n=me(),r=me();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new au(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=DE()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class FM{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Rr(),this.jt=PE(),this.zt=new Ue(Se)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(sg(o))if(i===0){const a=new ee(o.path);this.Jt(r,a,kt.newNoDocument(a,ae.min()))}else Pe(i===1);else{const a=this.se(r);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,u)}(n=My.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,p,m,v,w,g;const f={localCacheCount:c,existenceFilterCount:h.count},y=h.unchangedNames;return y&&(f.bloomFilter={applied:u===0,hashCount:(d=y==null?void 0:y.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(m=(p=y==null?void 0:y.bits)===null||p===void 0?void 0:p.bitmap)===null||m===void 0?void 0:m.length)!==null&&v!==void 0?v:0,padding:(g=(w=y==null?void 0:y.bits)===null||w===void 0?void 0:w.padding)!==null&&g!==void 0?g:0}),f}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=cs(s).toUint8Array()}catch(c){if(c instanceof kk)return Eo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Fy(l,o,a)}catch(c){return Eo(c instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.yt===0?1:i!==n-this.re(e.targetId,u)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&sg(a.target)){const l=new ee(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,kt.newNoDocument(l,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=me();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ne(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new Kd(e,n,this.zt,this.Qt,r);return this.Qt=Rr(),this.jt=PE(),this.zt=new Ue(Se),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new NE,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new Nt(Se),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new NE),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function PE(){return new Ue(ee.comparator)}function DE(){return new Ue(ee.comparator)}const UM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),BM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),VM=(()=>({and:"AND",or:"OR"}))();class zM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lg(t,e){return t.useProto3Json||Vd(e)?e:{value:e}}function xh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jM(t,e){return xh(t,e.toTimestamp())}function Xn(t){return Pe(!!t),ae.fromTimestamp(function(e){const n=yi(e);return new nt(n.seconds,n.nanos)}(t))}function Uy(t,e){return function(n){return new $e(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Jk(t){const e=$e.fromString(t);return Pe(nx(e)),e}function ug(t,e){return Uy(t.databaseId,e.path)}function vp(t,e){const n=Jk(e);if(n.get(1)!==t.databaseId.projectId)throw new Z($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(Zk(n))}function cg(t,e){return Uy(t.databaseId,e)}function HM(t){const e=Jk(t);return e.length===4?$e.emptyPath():Zk(e)}function hg(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zk(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function OE(t,e,n){return{name:ug(t,e),fields:n.value.mapValue.fields}}function WM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Pe(u===void 0||typeof u=="string"),Ot.fromBase64String(u||"")):(Pe(u===void 0||u instanceof Uint8Array),Ot.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?$.UNKNOWN:qk(l.code);return new Z(u,l.message||"")}(o);n=new Xk(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=vp(t,r.document.name),s=Xn(r.document.updateTime),o=r.document.createTime?Xn(r.document.createTime):ae.min(),a=new cn({mapValue:{fields:r.document.fields}}),l=kt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new yc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=vp(t,r.document),s=r.readTime?Xn(r.readTime):ae.min(),o=kt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new yc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=vp(t,r.document),s=r.removedTargetIds||[];n=new yc([],s,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new bM(i,s),a=r.targetId;n=new Qk(a,o)}}return n}function GM(t,e){let n;if(e instanceof ou)n={update:OE(t,e.key,e.value)};else if(e instanceof Kk)n={delete:ug(t,e.key)};else if(e instanceof Ss)n={update:OE(t,e.key,e.data),updateMask:t6(e.fieldMask)};else{if(!(e instanceof PM))return re();n={verify:ug(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ih)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Il)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof kl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof kh)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:jM(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(t,e.precondition)),n}function KM(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Xn(r.updateTime):Xn(i);return s.isEqual(ae.min())&&(s=Xn(i)),new AM(s,r.transformResults||[])}(n,e))):[]}function qM(t,e){return{documents:[cg(t,e.path)]}}function QM(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=cg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=cg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return tx(Jn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:xs(c.field),direction:JM(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=lg(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function XM(t){let e=HM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Pe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=ex(c);return h instanceof Jn&&Nk(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new La(As(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Vd(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Th(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Th(d,h)}(n.endAt)),fM(e,i,o,s,a,"F",l,u)}function YM(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ex(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=As(e.unaryFilter.field);return et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=As(e.unaryFilter.field);return et.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=As(e.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=As(e.unaryFilter.field);return et.create(s,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(e){return et.create(As(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Jn.create(e.compositeFilter.filters.map(n=>ex(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return re()}}(e.compositeFilter.op))}(t):re()}function JM(t){return UM[t]}function ZM(t){return BM[t]}function e6(t){return VM[t]}function xs(t){return{fieldPath:t.canonicalString()}}function As(t){return xt.fromServerFormat(t.fieldPath)}function tx(t){return t instanceof et?function(e){if(e.op==="=="){if(wE(e.value))return{unaryFilter:{field:xs(e.field),op:"IS_NAN"}};if(yE(e.value))return{unaryFilter:{field:xs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(wE(e.value))return{unaryFilter:{field:xs(e.field),op:"IS_NOT_NAN"}};if(yE(e.value))return{unaryFilter:{field:xs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xs(e.field),op:ZM(e.op),value:e.value}}}(t):t instanceof Jn?function(e){const n=e.getFilters().map(r=>tx(r));return n.length===1?n[0]:{compositeFilter:{op:e6(e.op),filters:n}}}(t):re()}function t6(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r,i,s=ae.min(),o=ae.min(),a=Ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e){this.le=e}}function r6(t){const e=XM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?og(e,e.limit,"L"):e}/**
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
 */class i6{constructor(){this.sn=new s6}addToCollectionParentIndex(e,n){return this.sn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(vi.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(vi.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class s6{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Nt($e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Nt($e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new To(0)}static kn(){return new To(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o6{constructor(){this.changes=new Ho(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class a6{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Fa(r.mutation,i,An.empty(),nt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const i=Wi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ea();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Rr();const o=Ma(),a=Ma();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ss)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Fa(c.mutation,u,c.mutation.getFieldMask(),nt.now())):o.set(u.key,An.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new a6(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ma();let i=new Ue((o,a)=>o-a),s=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||An.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||me()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Fk();c.forEach(d=>{if(!s.has(d)){const p=Wk(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return ee.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gM(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(Wi());let a=-1,l=s;return o.next(u=>U.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?U.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,me())).next(c=>({batchId:a,changes:Mk(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let i=Ea();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ea();return this.indexManager.getCollectionParents(e,i).next(o=>U.forEach(o,a=>{const l=function(u,c){return new zd(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,kt.newInvalidDocument(u)))});let o=Ea();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Fa(u.mutation,l,An.empty(),nt.now()),Hd(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u6{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return U.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:Xn(r.createTime)}),U.resolve()}getNamedQuery(e,n){return U.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:r6(r.bundledQuery),readTime:Xn(r.readTime)}}(n)),U.resolve()}}/**
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
 */class c6{constructor(){this.overlays=new Ue(ee.comparator),this.hs=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wi();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=Wi(),s=n.length+1,o=new ee(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ue((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Wi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Wi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return U.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new OM(n,r));let s=this.hs.get(n);s===void 0&&(s=me(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.ls=new Nt(rt.fs),this.ds=new Nt(rt._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new rt(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new rt(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new ee(new $e([])),r=new rt(n,e),i=new rt(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new ee(new $e([])),r=new rt(n,e),i=new rt(n,e+1);let s=me();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new rt(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return ee.comparator(e.key,n.key)||Se(e.Es,n.Es)}static _s(e,n){return Se(e.Es,n.Es)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h6{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new Nt(rt.fs)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new rt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),i=new rt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Nt(Se);return n.forEach(i=>{const s=new rt(i,0),o=new rt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),U.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ee.isDocumentKey(s)||(s=s.child(""));const o=new rt(new ee(s),0);let a=new Nt(Se);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Es)),!0)},o),U.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Pe(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return U.forEach(n.mutations,i=>{const s=new rt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new rt(n,0),i=this.Rs.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d6{constructor(e){this.Ss=e,this.docs=new Ue(ee.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let r=Rr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():kt.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Rr();const o=n.path,a=new ee(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||X3(Q3(c),r)<=0||(i.has(c.key)||Hd(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re()}Ds(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new f6(this)}getSize(e){return U.resolve(this.size)}}class f6 extends o6{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p6{constructor(e){this.persistence=e,this.Cs=new Ho(n=>Oy(n),by),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.xs=0,this.Ns=new By,this.targetCount=0,this.ks=To.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),U.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new To(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.$n(n),U.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m6{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Ry(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new p6(this),this.indexManager=new i6,this.remoteDocumentCache=function(r){return new d6(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new n6(n),this.Ls=new u6(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new c6,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new h6(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new g6(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return U.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class g6 extends J3{constructor(e){super(),this.currentSequenceNumber=e}}class Vy{constructor(e){this.persistence=e,this.Gs=new By,this.Qs=null}static js(e){return new Vy(e)}get zs(){if(this.Qs)return this.Qs;throw re()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),U.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.zs,r=>{const i=ee.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,ae.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return U.or([()=>U.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=me(),i=me();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new zy(e,n.fromCache,r,i)}}/**
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
 */class v6{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(CE(n))return U.resolve(null);let r=Ar(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=og(n,null,"F"),r=Ar(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=me(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Qi(n,a);return this.ji(n,u,o,l.readTime)?this.Ui(e,og(n,null,"F")):this.zi(e,u,n,l)}))})))}Ki(e,n,r,i){return CE(n)||i.isEqual(ae.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(pE()<=Ee.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ag(n)),this.zi(e,o,n,q3(i,-1)))})}Qi(e,n){let r=new Nt($k(e));return n.forEach((i,s)=>{Hd(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return pE()<=Ee.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",ag(n)),this.qi.getDocumentsMatchingQuery(e,n,vi.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y6{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new Ue(Se),this.Ji=new Ho(s=>Oy(s),by),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new l6(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function w6(t,e,n,r){return new y6(t,e,n,r)}async function rx(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=me();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function E6(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=U.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(m=>{const v=l.docVersions.get(p);Pe(v!==null),m.version.compareTo(v)<0&&(c.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),u.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=me();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ix(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function _6(t,e){const n=ce(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Ot.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(m,v,w){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,p,c)&&a.push(n.Fs.updateTargetData(s,p))});let l=Rr(),u=me();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(S6(s,o,e.documentUpdates).next(c=>{l=c.er,u=c.nr})),!r.isEqual(ae.min())){const c=n.Fs.getLastRemoteSnapshotVersion(s).next(h=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Hi=i,s))}function S6(t,e,n){let r=me(),i=me();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Rr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{er:o,nr:i}})}function C6(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function T6(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new qr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function dg(t,e,n){const r=ce(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!su(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function bE(t,e,n){const r=ce(t);let i=ae.min(),s=me();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=ce(a),h=c.Ji.get(u);return h!==void 0?U.resolve(c.Hi.get(h)):c.Fs.getTargetData(l,u)}(r,o,Ar(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:ae.min(),n?s:me())).next(a=>(I6(r,vM(e),a),{documents:a,sr:s})))}function I6(t,e,n){let r=t.Yi.get(e)||ae.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}class $E{constructor(){this.activeTargetIds=CM()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class k6{constructor(){this.Wr=new $E,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new $E,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class x6{Jr(e){}shutdown(){}}/**
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
 */class LE{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qu=null;function yp(){return Qu===null?Qu=268435456+Math.round(2147483648*Math.random()):Qu++,"0x"+Qu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R6{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="WebChannelConnection";class N6 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=yp(),a=this.Io(e,n);X("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,i,s),this.Eo(e,a,l,r).then(u=>(X("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Eo("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+zo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=A6[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=yp();return new Promise((o,a)=>{const l=new M3;l.setWithCredentials(!0),l.listenOnce(b3.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case gp.NO_ERROR:const c=l.getResponseJson();X(St,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case gp.TIMEOUT:X(St,`RPC '${e}' ${s} timed out`),a(new Z($.DEADLINE_EXCEEDED,"Request time out"));break;case gp.HTTP_ERROR:const h=l.getStatus();if(X(St,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const m=function(v){const w=v.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(w)>=0?w:$.UNKNOWN}(p.status);a(new Z(m,p.message))}else a(new Z($.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Z($.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{X(St,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);X(St,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=yp(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=D3(),a=O3(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new L3({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");X(St,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const p=new R6({io:v=>{d?X(St,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(h||(X(St,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),X(St,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},ro:()=>c.close()}),m=(v,w,g)=>{v.listen(w,f=>{try{g(f)}catch(y){setTimeout(()=>{throw y},0)}})};return m(c,Wu.EventType.OPEN,()=>{d||X(St,`RPC '${e}' stream ${i} transport opened.`)}),m(c,Wu.EventType.CLOSE,()=>{d||(d=!0,X(St,`RPC '${e}' stream ${i} transport closed`),p.fo())}),m(c,Wu.EventType.ERROR,v=>{d||(d=!0,Eo(St,`RPC '${e}' stream ${i} transport errored:`,v),p.fo(new Z($.UNAVAILABLE,"The operation could not be completed")))}),m(c,Wu.EventType.MESSAGE,v=>{var w;if(!d){const g=v.data[0];Pe(!!g);const f=g,y=f.error||((w=f[0])===null||w===void 0?void 0:w.error);if(y){X(St,`RPC '${e}' stream ${i} received error:`,y);const E=y.status;let C=function(T){const I=qe[T];if(I!==void 0)return qk(I)}(E),k=y.message;C===void 0&&(C=$.INTERNAL,k="Unknown error status: "+E+" with message "+y.message),d=!0,p.fo(new Z(C,k)),c.close()}else X(St,`RPC '${e}' stream ${i} received:`,g),p._o(g)}}),m(a,$3.STAT_EVENT,v=>{v.stat===dE.PROXY?X(St,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===dE.NOPROXY&&X(St,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.lo()},0),p}}function wp(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t){return new zM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new sx(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(xr(n.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new Z($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class P6 extends ox{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=WM(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ae.min():s.readTime?Xn(s.readTime):ae.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=hg(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=sg(a)?{documents:qM(i,a)}:{query:QM(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=Yk(i,s.resumeToken);const l=lg(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(ae.min())>0){o.readTime=xh(i,s.snapshotVersion.toTimestamp());const l=lg(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=YM(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=hg(this.serializer),n.removeTarget=e,this.zo(n)}}class D6 extends ox{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=KM(e.writeResults,e.commitTime),r=Xn(e.commitTime);return this.listener.uu(r,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=hg(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>GM(this.serializer,r))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O6 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new Z($.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z($.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Z($.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class b6{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(xr(n),this.wu=!1):X("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $6{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{Cs(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ce(a);l.Au.add(4),await lu(l),l.Pu.set("Unknown"),l.Au.delete(4),await Qd(l)}(this))})}),this.Pu=new b6(r,i)}}async function Qd(t){if(Cs(t))for(const e of t.Ru)await e(!0)}async function lu(t){for(const e of t.Ru)await e(!1)}function ax(t,e){const n=ce(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Wy(n)?Hy(n):Wo(n).Uo()&&jy(n,e))}function lx(t,e){const n=ce(t),r=Wo(n);n.Eu.delete(e),r.Uo()&&ux(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():Cs(n)&&n.Pu.set("Unknown"))}function jy(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Wo(t).nu(e)}function ux(t,e){t.bu.Lt(e),Wo(t).su(e)}function Hy(t){t.bu=new FM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Wo(t).start(),t.Pu.mu()}function Wy(t){return Cs(t)&&!Wo(t).qo()&&t.Eu.size>0}function Cs(t){return ce(t).Au.size===0}function cx(t){t.bu=void 0}async function L6(t){t.Eu.forEach((e,n)=>{jy(t,e)})}async function M6(t,e){cx(t),Wy(t)?(t.Pu.pu(e),Hy(t)):t.Pu.set("Unknown")}async function F6(t,e,n){if(t.Pu.set("Online"),e instanceof Xk&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ah(t,r)}else if(e instanceof yc?t.bu.Wt(e):e instanceof Qk?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(ae.min()))try{const r=await ix(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Eu.get(l);u&&i.Eu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Eu.get(a);if(!u)return;i.Eu.set(a,u.withResumeToken(Ot.EMPTY_BYTE_STRING,u.snapshotVersion)),ux(i,a);const c=new qr(u.target,a,l,u.sequenceNumber);jy(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Ah(t,r)}}async function Ah(t,e,n){if(!su(e))throw e;t.Au.add(1),await lu(t),t.Pu.set("Offline"),n||(n=()=>ix(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Qd(t)})}function hx(t,e){return e().catch(n=>Ah(t,n,e))}async function Xd(t){const e=ce(t),n=wi(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;U6(e);)try{const i=await C6(e.localStore,r);if(i===null){e.Tu.length===0&&n.Qo();break}r=i.batchId,B6(e,i)}catch(i){await Ah(e,i)}dx(e)&&fx(e)}function U6(t){return Cs(t)&&t.Tu.length<10}function B6(t,e){t.Tu.push(e);const n=wi(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function dx(t){return Cs(t)&&!wi(t).qo()&&t.Tu.length>0}function fx(t){wi(t).start()}async function V6(t){wi(t).au()}async function z6(t){const e=wi(t);for(const n of t.Tu)e.ou(n.mutations)}async function j6(t,e,n){const r=t.Tu.shift(),i=Ly.from(r,e,n);await hx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xd(t)}async function H6(t,e){e&&wi(t).ru&&await async function(n,r){if(i=r.code,$M(i)&&i!==$.ABORTED){const s=n.Tu.shift();wi(n).Go(),await hx(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Xd(n)}var i}(t,e),dx(t)&&fx(t)}async function ME(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Cs(n);n.Au.add(3),await lu(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Qd(n)}async function W6(t,e){const n=ce(t);e?(n.Au.delete(2),await Qd(n)):e||(n.Au.add(2),await lu(n),n.Pu.set("Unknown"))}function Wo(t){return t.Vu||(t.Vu=function(e,n,r){const i=ce(e);return i.lu(),new P6(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:L6.bind(null,t),co:M6.bind(null,t),eu:F6.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Wy(t)?Hy(t):t.Pu.set("Unknown")):(await t.Vu.stop(),cx(t))})),t.Vu}function wi(t){return t.Su||(t.Su=function(e,n,r){const i=ce(e);return i.lu(),new D6(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:V6.bind(null,t),co:H6.bind(null,t),cu:z6.bind(null,t),uu:j6.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Xd(t)):(await t.Su.stop(),t.Tu.length>0&&(X("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Gy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ky(t,e){if(xr("AsyncQueue",`${e}: ${t}`),su(t))return new Z($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=Ea(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new so(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof so)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new so;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.Du=new Ue(ee.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):re():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class Io{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Io(e,n,so.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G6{constructor(){this.xu=void 0,this.listeners=[]}}class K6{constructor(){this.queries=new Ho(e=>bk(e),jd),this.onlineState="Unknown",this.Nu=new Set}}async function px(t,e){const n=ce(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new G6),i)try{s.xu=await n.onListen(r)}catch(o){const a=Ky(o,`Initialization of query '${ag(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&qy(n)}async function mx(t,e){const n=ce(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function q6(t,e){const n=ce(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&qy(n)}function Q6(t,e,n){const r=ce(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function qy(t){t.Nu.forEach(e=>{e.next()})}class gx{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Io(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=Io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e){this.key=e}}class yx{constructor(e){this.key=e}}class X6{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=me(),this.mutatedKeys=me(),this.Zu=$k(e),this.tc=new so(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new FE,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=Hd(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?m!==v&&(r.track({type:3,doc:p}),w=!0):this.ic(d,p)||(r.track({type:2,doc:p}),w=!0,(l&&this.Zu(p,l)>0||u&&this.Zu(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((u,c)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return p(h)-p(d)}(u.type,c.type)||this.Zu(u.doc,c.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,s.length!==0||l?{snapshot:new Io(this.query,e.tc,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new FE,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=me(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new yx(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new vx(r))}),n}ac(e){this.Ju=e.sr,this.Xu=me();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return Io.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class Y6{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class J6{constructor(e){this.key=e,this.lc=!1}}class Z6{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Ho(a=>bk(a),jd),this._c=new Map,this.wc=new Set,this.mc=new Ue(ee.comparator),this.gc=new Map,this.yc=new By,this.Ic={},this.Tc=new Map,this.Ec=To.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function e5(t,e){const n=c5(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await T6(n.localStore,Ar(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await t5(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&ax(n.remoteStore,o)}return i}async function t5(t,e,n,r,i){t.Rc=(h,d,p)=>async function(m,v,w,g){let f=v.view.nc(w);f.ji&&(f=await bE(m.localStore,v.query,!1).then(({documents:C})=>v.view.nc(C,f)));const y=g&&g.targetChanges.get(v.targetId),E=v.view.applyChanges(f,m.isPrimaryClient,y);return BE(m,v.targetId,E.uc),E.snapshot}(t,h,d,p);const s=await bE(t.localStore,e,!0),o=new X6(e,s.sr),a=o.nc(s.documents),l=au.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);BE(t,n,u.uc);const c=new Y6(e,n,o);return t.dc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function n5(t,e){const n=ce(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!jd(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dg(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),lx(n.remoteStore,r.targetId),fg(n,r.targetId)}).catch(iu)):(fg(n,r.targetId),await dg(n.localStore,r.targetId,!0))}async function r5(t,e,n){const r=h5(t);try{const i=await function(s,o){const a=ce(s),l=nt.now(),u=o.reduce((d,p)=>d.add(p.key),me());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Rr(),m=me();return a.Xi.getEntries(d,u).next(v=>{p=v,p.forEach((w,g)=>{g.isValidDocument()||(m=m.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{c=v;const w=[];for(const g of o){const f=NM(g,c.get(g.key).overlayedDocument);f!=null&&w.push(new Ss(g.key,f,xk(f.value.mapValue),Qn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(v=>{h=v;const w=v.applyToLocalDocumentSet(c,m);return a.documentOverlayCache.saveOverlays(d,v.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Mk(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Ic[s.currentUser.toKey()];l||(l=new Ue(Se)),l=l.insert(o,a),s.Ic[s.currentUser.toKey()]=l}(r,i.batchId,n),await uu(r,i.changes),await Xd(r.remoteStore)}catch(i){const s=Ky(i,"Failed to persist write");n.reject(s)}}async function wx(t,e){const n=ce(t);try{const r=await _6(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(Pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?Pe(o.lc):i.removedDocuments.size>0&&(Pe(o.lc),o.lc=!1))}),await uu(n,r,e)}catch(r){await iu(r)}}function UE(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ce(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.ku(o)&&(l=!0)}),l&&qy(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function i5(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new Ue(ee.comparator);o=o.insert(s,kt.newNoDocument(s,ae.min()));const a=me().add(s),l=new Kd(ae.min(),new Map,new Ue(Se),o,a);await wx(r,l),r.mc=r.mc.remove(s),r.gc.delete(e),Qy(r)}else await dg(r.localStore,e,!1).then(()=>fg(r,e,n)).catch(iu)}async function s5(t,e){const n=ce(t),r=e.batch.batchId;try{const i=await E6(n.localStore,e);_x(n,r,null),Ex(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uu(n,i)}catch(i){await iu(i)}}async function o5(t,e,n){const r=ce(t);try{const i=await function(s,o){const a=ce(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Pe(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);_x(r,e,n),Ex(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await uu(r,i)}catch(i){await iu(i)}}function Ex(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function _x(t,e,n){const r=ce(t);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function fg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||Sx(t,r)})}function Sx(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(lx(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Qy(t))}function BE(t,e,n){for(const r of n)r instanceof vx?(t.yc.addReference(r.key,e),a5(t,r)):r instanceof yx?(X("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||Sx(t,r.key)):re()}function a5(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(X("SyncEngine","New document in limbo: "+n),t.wc.add(r),Qy(t))}function Qy(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new ee($e.fromString(e)),r=t.Ec.next();t.gc.set(r,new J6(n)),t.mc=t.mc.insert(n,r),ax(t.remoteStore,new qr(Ar($y(n.path)),r,"TargetPurposeLimboResolution",Ry.ct))}}async function uu(t,e,n){const r=ce(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=zy.Bi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,l){const u=ce(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>U.forEach(l,h=>U.forEach(h.$i,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>U.forEach(h.Fi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!su(c))throw c;X("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Hi.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);u.Hi=u.Hi.insert(h,m)}}}(r.localStore,s))}async function l5(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await rx(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new Z($.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uu(n,r.tr)}}function u5(t,e){const n=ce(t),r=n.gc.get(e);if(r&&r.lc)return me().add(r.key);{let i=me();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function c5(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=u5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=i5.bind(null,e),e.fc.eu=q6.bind(null,e.eventManager),e.fc.vc=Q6.bind(null,e.eventManager),e}function h5(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=s5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=o5.bind(null,e),e}class VE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=qd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return w6(this.persistence,new v6,e.initialUser,this.serializer)}createPersistence(e){return new m6(Vy.js,this.serializer)}createSharedClientState(e){return new k6}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class d5{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>UE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=l5.bind(null,this.syncEngine),await W6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new K6}createDatastore(e){const n=qd(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new N6(i));var i;return function(s,o,a,l){return new O6(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>UE(this.syncEngine,a,0),o=LE.D()?new LE:new x6,new $6(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new Z6(r,i,s,o,a,l);return u&&(c.Ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ce(e);X("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await lu(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cx{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f5{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Tt.UNAUTHENTICATED,this.clientId=Tk.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Z($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ky(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ep(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await rx(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await m5(t);X("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>ME(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>ME(e.remoteStore,s)),t._onlineComponents=e}function p5(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function m5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ep(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!p5(n))throw n;Eo("Error using user provided cache. Falling back to memory cache: "+n),await Ep(t,new VE)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Ep(t,new VE);return t._offlineComponents}async function Tx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await zE(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await zE(t,new d5))),t._onlineComponents}function g5(t){return Tx(t).then(e=>e.syncEngine)}async function Ix(t){const e=await Tx(t),n=e.eventManager;return n.onListen=e5.bind(null,e.syncEngine),n.onUnlisten=n5.bind(null,e.syncEngine),n}function v5(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Cx({next:h=>{s.enqueueAndForget(()=>mx(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new Z($.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new Z($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new gx($y(o.path),u,{includeMetadataChanges:!0,Uu:!0});return px(i,c)}(await Ix(t),t.asyncQueue,e,n,r)),r.promise}function y5(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Cx({next:h=>{s.enqueueAndForget(()=>mx(i,c)),h.fromCache&&a.source==="server"?l.reject(new Z($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new gx(o,u,{includeMetadataChanges:!0,Uu:!0});return px(i,c)}(await Ix(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(t,e,n){if(!n)throw new Z($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function w5(t,e,n,r){if(e===!0&&r===!0)throw new Z($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function HE(t){if(!ee.isDocumentKey(t))throw new Z($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function WE(t){if(ee.isDocumentKey(t))throw new Z($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xy(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function Ei(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xy(t);throw new Z($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Z($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}w5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new GE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Z($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Z($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new GE(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new U3;switch(n.type){case"firstParty":return new j3(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Z($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=jE.get(e);n&&(X("ComponentProvider","Removing Datastore"),jE.delete(e),n.terminate())}(this),Promise.resolve()}}function E5(t,e,n,r={}){var i;const s=(t=Ei(t,Yd))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Eo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Tt.MOCK_USER;else{o=DT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new Z($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Tt(l)}t._authCredentials=new B3(new Ck(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Jt(this.firestore,e,this._key)}}class Jd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jd(this.firestore,e,this._query)}}class ci extends Jd{constructor(e,n,r){super(e,n,$y(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Jt(this.firestore,null,new ee(e))}withConverter(e){return new ci(this.firestore,e,this._path)}}function Go(t,e,...n){if(t=at(t),kx("collection","path",e),t instanceof Yd){const r=$e.fromString(e,...n);return WE(r),new ci(t,null,r)}{if(!(t instanceof Jt||t instanceof ci))throw new Z($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return WE(r),new ci(t.firestore,null,r)}}function cu(t,e,...n){if(t=at(t),arguments.length===1&&(e=Tk.A()),kx("doc","path",e),t instanceof Yd){const r=$e.fromString(e,...n);return HE(r),new Jt(t,null,new ee(r))}{if(!(t instanceof Jt||t instanceof ci))throw new Z($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return HE(r),new Jt(t.firestore,t instanceof ci?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _5{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new sx(this,"async_queue_retry"),this.Yc=()=>{const n=wp();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=wp();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=wp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new yr;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!su(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw xr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=Gy.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&re()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class hu extends Yd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new _5,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xx(this),this._firestoreClient.terminate()}}function S5(t,e){const n=typeof t=="object"?t:qv(),r=typeof t=="string"?t:e||"(default)",i=Sd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=NT("firestore");s&&E5(i,...s)}return i}function Yy(t){return t._firestoreClient||xx(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xx(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new tM(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new f5(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ko(Ot.fromBase64String(e))}catch(n){throw new Z($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ko(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C5=/^__.*__$/;class T5{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new ou(e,this.data,n,this.fieldTransforms)}}function Rx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class e0{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new e0(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.la(e),i}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Rh(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Rx(this.ua)&&C5.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class I5{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qd(e)}ga(e,n,r,i=!1){return new e0({ua:e,methodName:n,ma:r,path:xt.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nx(t){const e=t._freezeSettings(),n=qd(t._databaseId);return new I5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Px(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);$x("Data must be an object, but it was:",o,r);const a=Ox(r,o);let l,u;if(s.merge)l=new An(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=k5(e,h,n);if(!o.contains(d))throw new Z($.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);A5(c,d)||c.push(d)}l=new An(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new T5(new cn(a),l,u)}function Dx(t,e){if(bx(t=at(t)))return $x("Unsupported field value:",e,t),Ox(t,e);if(t instanceof Ax)return function(n,r){if(!Rx(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Dx(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=at(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return TM(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=nt.fromDate(n);return{timestampValue:xh(r.serializer,i)}}if(n instanceof nt){const i=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xh(r.serializer,i)}}if(n instanceof Zy)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ko)return{bytesValue:Yk(r.serializer,n._byteString)};if(n instanceof Jt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Uy(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Xy(n)}`)}(t,e)}function Ox(t,e){const n={};return Ik(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jo(t,(r,i)=>{const s=Dx(i,e.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function bx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof Zy||t instanceof ko||t instanceof Jt||t instanceof Ax)}function $x(t,e,n){if(!bx(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Xy(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function k5(t,e,n){if((e=at(e))instanceof Jy)return e._internalPath;if(typeof e=="string")return Lx(t,e);throw Rh("Field path arguments must be of type string or ",t,!1,void 0,n)}const x5=new RegExp("[~\\*/\\[\\]]");function Lx(t,e,n){if(e.search(x5)>=0)throw Rh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jy(...e.split("."))._internalPath}catch{throw Rh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Z($.INVALID_ARGUMENT,a+t+l)}function A5(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new R5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fx("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class R5 extends Mx{data(){return super.data()}}function Fx(t,e){return typeof e=="string"?Lx(t,e):e instanceof Jy?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N5(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class P5{convertValue(e,n="none"){switch(hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return jo(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Zy(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Py(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Sl(e));default:return null}}convertTimestamp(e){const n=yi(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);Pe(nx(r));const i=new Cl(r.get(1),r.get(3)),s=new ee(r.popFirst(5));return i.isEqual(n)||xr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bx extends Mx{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fx("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class wc extends Bx{data(e={}){return super.data(e)}}class D5{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Sa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wc(this._firestore,this._userDataWriter,r.key,r,new Sa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new wc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Sa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new wc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Sa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:O5(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function O5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t){t=Ei(t,Jt);const e=Ei(t.firestore,hu);return v5(Yy(e),t._key).then(n=>$5(e,t,n))}class Vx extends P5{constructor(e){super(),this.firestore=e}convertBytes(e){return new ko(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Jt(this.firestore,null,n)}}function n0(t){t=Ei(t,Jd);const e=Ei(t.firestore,hu),n=Yy(e),r=new Vx(e);return N5(t._query),y5(n,t._query).then(i=>new D5(e,r,t,i))}function b5(t,e,n){t=Ei(t,Jt);const r=Ei(t.firestore,hu),i=Ux(t.converter,e,n);return zx(r,[Px(Nx(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Qn.none())])}function r0(t,e){const n=Ei(t.firestore,hu),r=cu(t),i=Ux(t.converter,e);return zx(n,[Px(Nx(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Qn.exists(!1))]).then(()=>r)}function zx(t,e){return function(n,r){const i=new yr;return n.asyncQueue.enqueueAndForget(async()=>r5(await g5(n),r,i)),i.promise}(Yy(t),e)}function $5(t,e,n){const r=n.docs.get(e._key),i=new Vx(t);return new Bx(t,i,e._key,r,new Sa(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){zo=n})(ws),os(new gi("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new hu(new V3(n.getProvider("auth-internal")),new W3(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Z($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cl(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Gn(fE,"3.11.0",t),Gn(fE,"3.11.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx="firebasestorage.googleapis.com",Hx="storageBucket",L5=2*60*1e3,M5=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends nr{constructor(e,n,r=0){super(_p(e),`Firebase Storage: ${n} (${_p(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,We.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _p(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var He;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(He||(He={}));function _p(t){return"storage/"+t}function i0(){const t="An unknown error occurred, please check the error payload for server response.";return new We(He.UNKNOWN,t)}function F5(t){return new We(He.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function U5(t){return new We(He.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function B5(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new We(He.UNAUTHENTICATED,t)}function V5(){return new We(He.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function z5(t){return new We(He.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function j5(){return new We(He.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function H5(){return new We(He.CANCELED,"User canceled the upload/download.")}function W5(t){return new We(He.INVALID_URL,"Invalid URL '"+t+"'.")}function G5(t){return new We(He.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function K5(){return new We(He.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Hx+"' property when initializing the app?")}function q5(){return new We(He.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Q5(){return new We(He.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function X5(t){return new We(He.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function pg(t){return new We(He.INVALID_ARGUMENT,t)}function Wx(){return new We(He.APP_DELETED,"The Firebase app was deleted.")}function Y5(t){return new We(He.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ua(t,e){return new We(He.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ua(t){throw new We(He.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Xt.makeFromUrl(e,n)}catch{return new Xt(e,"")}if(r.path==="")return r;throw G5(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},v=n===jx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${v}/${i}/${w}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:p,indices:m,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<y.length;E++){const C=y[E],k=C.regex.exec(e);if(k){const T=k[C.indices.bucket];let I=k[C.indices.path];I||(I=""),r=new Xt(T,I),C.postModify(r);break}}if(r==null)throw W5(e);return r}}class J5{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z5(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function d(){s&&clearTimeout(s)}function p(w,...g){if(u){d();return}if(w){d(),c.call(null,w,...g);return}if(l()||o){d(),c.call(null,w,...g);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let m=!1;function v(w){m||(m=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function e9(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t9(t){return t!==void 0}function n9(t){return typeof t=="object"&&!Array.isArray(t)}function s0(t){return typeof t=="string"||t instanceof String}function KE(t){return o0()&&t instanceof Blob}function o0(){return typeof Blob!="undefined"&&!cb()}function qE(t,e,n,r){if(r<e)throw pg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw pg(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Gx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Xi||(Xi={}));/**
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
 */function r9(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i9{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Xu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Xi.NO_ERROR,l=s.getStatus();if(!a||r9(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Xi.ABORT;r(!1,new Xu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Xu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());t9(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=i0();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Wx():H5();o(l)}else{const l=j5();o(l)}};this.canceled_?n(!1,new Xu(!1,null,!0)):this.backoffId_=Z5(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&e9(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function s9(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function o9(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function a9(t,e){e&&(t["X-Firebase-GMPID"]=e)}function l9(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function u9(t,e,n,r,i,s,o=!0){const a=Gx(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return a9(u,e),s9(u,n),o9(u,s),l9(u,r),new i9(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c9(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function h9(...t){const e=c9();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(o0())return new Blob(t);throw new We(He.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function d9(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function f9(t){if(typeof atob=="undefined")throw X5("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sp{constructor(e,n){this.data=e,this.contentType=n||null}}function p9(t,e){switch(t){case zn.RAW:return new Sp(Kx(e));case zn.BASE64:case zn.BASE64URL:return new Sp(qx(t,e));case zn.DATA_URL:return new Sp(g9(e),v9(e))}throw i0()}function Kx(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function m9(t){let e;try{e=decodeURIComponent(t)}catch{throw Ua(zn.DATA_URL,"Malformed data URL.")}return Kx(e)}function qx(t,e){switch(t){case zn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ua(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case zn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ua(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=f9(e)}catch(i){throw i.message.includes("polyfill")?i:Ua(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Qx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ua(zn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=y9(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function g9(t){const e=new Qx(t);return e.base64?qx(zn.BASE64,e.rest):m9(e.rest)}function v9(t){return new Qx(t).contentType}function y9(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n){let r=0,i="";KE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(KE(this.data_)){const r=this.data_,i=d9(r,e,n);return i===null?null:new Hr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Hr(r,!0)}}static getBlob(...e){if(o0()){const n=e.map(r=>r instanceof Hr?r.data_:r);return new Hr(h9.apply(null,n))}else{const n=e.map(o=>s0(o)?p9(zn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Hr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(t){let e;try{e=JSON.parse(t)}catch{return null}return n9(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w9(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function E9(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Yx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _9(t,e){return e}class bt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||_9}}let Yu=null;function S9(t){return!s0(t)||t.length<2?t:Yx(t)}function Jx(){if(Yu)return Yu;const t=[];t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));function e(s,o){return S9(o)}const n=new bt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new bt("size");return i.xform=r,t.push(i),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),Yu=t,Yu}function C9(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Xt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function T9(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return C9(r,t),r}function Zx(t,e,n){const r=Xx(e);return r===null?null:T9(t,r,n)}function I9(t,e,n,r){const i=Xx(e);if(i===null||!s0(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),p=a0(d,n,r),m=Gx({alt:"media",token:u});return p+m})[0]}function k9(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class eA{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t){if(!t)throw i0()}function x9(t,e){function n(r,i){const s=Zx(t,i,e);return tA(s!==null),s}return n}function A9(t,e){function n(r,i){const s=Zx(t,i,e);return tA(s!==null),I9(s,i,t.host,t._protocol)}return n}function nA(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=V5():i=B5():n.getStatus()===402?i=U5(t.bucket):n.getStatus()===403?i=z5(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function R9(t){const e=nA(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=F5(t.path)),s.serverResponse=i.serverResponse,s}return n}function N9(t,e,n){const r=e.fullServerUrl(),i=a0(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new eA(i,s,A9(t,n),o);return a.errorHandler=R9(e),a}function P9(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function D9(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=P9(null,e)),r}function O9(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let E=0;E<2;E++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=D9(e,r,i),c=k9(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=Hr.getBlob(h,r,d);if(p===null)throw q5();const m={name:u.fullPath},v=a0(s,t.host,t._protocol),w="POST",g=t.maxUploadRetryTime,f=new eA(v,w,x9(t,n),g);return f.urlParams=m,f.headers=o,f.body=p.uploadData(),f.errorHandler=nA(e),f}class b9{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Xi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Xi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Xi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ua("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ua("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ua("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ua("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ua("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class $9 extends b9{initXhr(){this.xhr_.responseType="text"}}function rA(){return new $9}/**
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
 */class ds{constructor(e,n){this._service=e,n instanceof Xt?this._location=n:this._location=Xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ds(e,n)}get root(){const e=new Xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Yx(this._location.path)}get storage(){return this._service}get parent(){const e=w9(this._location.path);if(e===null)return null;const n=new Xt(this._location.bucket,e);return new ds(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Y5(e)}}function L9(t,e,n){t._throwIfRoot("uploadBytes");const r=O9(t.storage,t._location,Jx(),new Hr(e,!0),n);return t.storage.makeRequestWithTokens(r,rA).then(i=>({metadata:i,ref:t}))}function M9(t){t._throwIfRoot("getDownloadURL");const e=N9(t.storage,t._location,Jx());return t.storage.makeRequestWithTokens(e,rA).then(n=>{if(n===null)throw Q5();return n})}function F9(t,e){const n=E9(t._location.path,e),r=new Xt(t._location.bucket,n);return new ds(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U9(t){return/^[A-Za-z]+:\/\//.test(t)}function B9(t,e){return new ds(t,e)}function iA(t,e){if(t instanceof l0){const n=t;if(n._bucket==null)throw K5();const r=new ds(n,n._bucket);return e!=null?iA(r,e):r}else return e!==void 0?F9(t,e):t}function V9(t,e){if(e&&U9(e)){if(t instanceof l0)return B9(t,e);throw pg("To use ref(service, url), the first argument must be a Storage instance.")}else return iA(t,e)}function QE(t,e){const n=e==null?void 0:e[Hx];return n==null?null:Xt.makeFromBucketSpec(n,t)}function z9(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:DT(i,t.app.options.projectId))}class l0{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=jx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=L5,this._maxUploadRetryTime=M5,this._requests=new Set,i!=null?this._bucket=Xt.makeFromBucketSpec(i,this._host):this._bucket=QE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xt.makeFromBucketSpec(this._url,e):this._bucket=QE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){qE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){qE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ds(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new J5(Wx());{const o=u9(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const XE="@firebase/storage",YE="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="storage";function u0(t,e,n){return t=at(t),L9(t,e,n)}function c0(t){return t=at(t),M9(t)}function Ko(t,e){return t=at(t),V9(t,e)}function j9(t=qv(),e){t=at(t);const r=Sd(t,sA).getImmediate({identifier:e}),i=NT("storage");return i&&H9(r,...i),r}function H9(t,e,n,r={}){z9(t,e,n,r)}function W9(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new l0(n,r,i,e,ws)}function G9(){os(new gi(sA,W9,"PUBLIC").setMultipleInstances(!0)),Gn(XE,YE,""),Gn(XE,YE,"esm2017")}G9();const K9={apiKey:"AIzaSyB6eD_2vEo_ZIjZbDoRg7cX92y81sB0Auc",authDomain:"myclothesapp-cf59a.firebaseapp.com",projectId:"myclothesapp-cf59a",storageBucket:"myclothesapp-cf59a.appspot.com",messagingSenderId:"610226156284",appId:"1:610226156284:web:9336ebebf0a17d99eb1d79",measurementId:"G-LNG72F75QC"},oA=$T(K9),fs=DL(oA),rr=S5(oA),h0=j9(),mg=tr("login/googleLogin",async()=>{const t=new lr,n=(await V$(fs,t)).user;console.log(n);const r=cu(rr,"users",n.uid);return(await t0(r)).data()}),gg=tr("auth/login",async t=>{try{const{email:e,password:n}=t;await aI(fs,ry);const i=(await y$(fs,e,n)).user,s=cu(rr,"users",i.uid),o=await t0(s);if(!o.exists())throw new Error("\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC720\uC800\uC785\uB2C8\uB2E4.");return o.data()}catch(e){return Hv(e.message)}}),vg=tr("auth/signOut",async()=>{try{await _$(fs),await aI(fs,ry)}catch(t){return Hv(t.message)}}),q9=()=>t=>{fs.onAuthStateChanged(async e=>{if(e){const n=cu(rr,"users",e.uid),r=await t0(n);if(r.exists()){const i=r.data();t({type:"login/loginSuccess",payload:i}),localStorage.setItem("user",JSON.stringify(i))}}else t({type:"login/logout"}),localStorage.removeItem("user")})},Q9=()=>{const t=localStorage.getItem("user");return t?JSON.parse(t):null},X9=Lo({name:"login",initialState:{user:Q9()},extraReducers:t=>{t.addCase(`${mg.fulfilled}`,(e,n)=>{e.user=n.payload}),t.addCase(`${mg.rejected}`,(e,n)=>{alert("\uB85C\uADF8\uC778 \uC2E4\uD328!"),console.log(n.payload)}),t.addCase(`${gg.fulfilled}`,(e,n)=>{e.user=n.payload}),t.addCase(`${gg.rejected}`,(e,n)=>n.error),t.addCase(`${vg.fulfilled}`,(e,n)=>{alert("\uB85C\uADF8\uC544\uC6C3 \uC131\uACF5!"),e.user=null}),t.addCase(`${vg.rejected}`,(e,n)=>{alert("\uB85C\uADF8\uC544\uC6C3 \uC2E4\uD328!"),console.log(n.payload)})}});var Y9=X9.reducer,aA={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},JE=st.createContext&&st.createContext(aA),hi=globalThis&&globalThis.__assign||function(){return hi=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},hi.apply(this,arguments)},J9=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function lA(t){return t&&t.map(function(e,n){return st.createElement(e.tag,hi({key:n},e.attr),lA(e.child))})}function Ni(t){return function(e){return st.createElement(Z9,hi({attr:hi({},t.attr)},e),lA(t.child))}}function Z9(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=J9(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),st.createElement("svg",hi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:hi(hi({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&st.createElement("title",null,s),t.children)};return JE!==void 0?st.createElement(JE.Consumer,null,function(n){return e(n)}):e(aA)}function eF(t){return Ni({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M133.3 33.41L77.89 47.25 34.6 148.3l33.29 22.2 27.46-54.9 17.05 4.9-15.07 150.1H245.2l9.2-87.9.9-8.1h4.5l-5.4-54.1 17.1-4.9 27.4 54.9 33.3-22.2-43.3-101.05-55.4-13.84c-5.5 3.87-12.2 6.21-19.5 7.95-9.4 2.21-20 3.24-30.6 3.24-10.6 0-21.2-1.03-30.6-3.24-7.3-1.74-14-4.07-19.5-7.95zM271.5 192.6l-1.5 14h178.8l-1.5-14zm-3.4 32l-26.7 254h62.7l46.5-216.9h17.6l46.5 216.9h62.7l-26.7-254z"}}]})(t)}function uA(t){return Ni({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}}]})(t)}function tF(t){return Ni({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z"}}]})(t)}function nF(t){return Ni({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44z"}}]})(t)}function cA(t){return Ni({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z"}}]})(t)}function rF(t){return Ni({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"}}]})(t)}const iF=()=>{const[t,e]=D.exports.useState(!1),[n,r]=D.exports.useState(null),i=On(p=>p.login.user),s=ys(),o=Bl(),a=xi(),l=i==null?void 0:i.nickname,u=()=>{confirm("\uC815\uB9D0 \uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&a(vg())};D.exports.useEffect(()=>{const p=()=>{window.scrollY>=60?e(!0):e(!1)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const c=p=>{r(p)},h=()=>i?K("div",{className:"users",children:[S("li",{className:"item user_nickname",onClick:()=>r(null),children:S(kn,{to:"/account",children:l})}),S("li",{className:"item logOut",onClick:u,children:S("span",{children:S(rF,{})})})]}):S("li",{className:"item_account",children:S(kn,{to:"account/login",className:"account",children:"\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785"})});return D.exports.useEffect(()=>{r(null)},[]),o.pathname==="/account/signup"||o.pathname==="/account/login"?null:S(ID,{style:{borderBottom:t?"1px solid #e3e3e3":""},children:K("div",{className:"contents",children:[K("div",{className:"logo",children:[S("span",{className:"icon",children:S(eF,{})}),S("h1",{onClick:()=>{s("/"),r(null)},children:"ModArt"})]}),K("ul",{className:"navbar",children:[K("div",{className:"list",children:[S("li",{className:`item ${n===0?"active":""}`,children:S(kn,{to:"/board",onClick:()=>c(0),children:"OOTD"})}),S("li",{className:`item ${n===1?"active":""}`,children:S(kn,{to:"/photo",onClick:()=>c(1),children:"Picture"})}),S("li",{className:`item ${n===2?"active":""}`,children:S(kn,{to:"/qna/write",onClick:()=>c(2),children:"QnA"})})]}),h()]})]})})};var sF=st.memo(iF);function ZE(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function oF(t,e,n){return e&&ZE(t.prototype,e),n&&ZE(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var e_="(prefers-reduced-motion: reduce)",Ws=1,aF=2,xo=3,qo=4,du=5,Ec=6,Nh=7,lF={CREATED:Ws,MOUNTED:aF,IDLE:xo,MOVING:qo,SCROLLING:du,DRAGGING:Ec,DESTROYED:Nh};function Nr(t){t.length=0}function Pi(t,e,n){return Array.prototype.slice.call(t,e,n)}function Ae(t){return t.bind.apply(t,[null].concat(Pi(arguments,1)))}var hA=setTimeout,yg=function(){};function t_(t){return requestAnimationFrame(t)}function Zd(t,e){return typeof e===t}function xl(t){return!f0(t)&&Zd("object",t)}var d0=Array.isArray,dA=Ae(Zd,"function"),_i=Ae(Zd,"string"),fu=Ae(Zd,"undefined");function f0(t){return t===null}function fA(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function pu(t){return d0(t)?t:[t]}function vn(t,e){pu(t).forEach(e)}function p0(t,e){return t.indexOf(e)>-1}function _c(t,e){return t.push.apply(t,pu(e)),t}function mr(t,e,n){t&&vn(e,function(r){r&&t.classList[n?"add":"remove"](r)})}function Zn(t,e){mr(t,_i(e)?e.split(" "):e,!0)}function mu(t,e){vn(e,t.appendChild.bind(t))}function m0(t,e){vn(t,function(n){var r=(e||n).parentNode;r&&r.insertBefore(n,e)})}function Al(t,e){return fA(t)&&(t.msMatchesSelector||t.matches).call(t,e)}function pA(t,e){var n=t?Pi(t.children):[];return e?n.filter(function(r){return Al(r,e)}):n}function gu(t,e){return e?pA(t,e)[0]:t.firstElementChild}var Rl=Object.keys;function Yi(t,e,n){return t&&(n?Rl(t).reverse():Rl(t)).forEach(function(r){r!=="__proto__"&&e(t[r],r)}),t}function Nl(t){return Pi(arguments,1).forEach(function(e){Yi(e,function(n,r){t[r]=e[r]})}),t}function Qr(t){return Pi(arguments,1).forEach(function(e){Yi(e,function(n,r){d0(n)?t[r]=n.slice():xl(n)?t[r]=Qr({},xl(t[r])?t[r]:{},n):t[r]=n})}),t}function n_(t,e){vn(e||Rl(t),function(n){delete t[n]})}function er(t,e){vn(t,function(n){vn(e,function(r){n&&n.removeAttribute(r)})})}function he(t,e,n){xl(e)?Yi(e,function(r,i){he(t,i,r)}):vn(t,function(r){f0(n)||n===""?er(r,e):r.setAttribute(e,String(n))})}function oo(t,e,n){var r=document.createElement(t);return e&&(_i(e)?Zn(r,e):he(r,e)),n&&mu(n,r),r}function In(t,e,n){if(fu(n))return getComputedStyle(t)[e];f0(n)||(t.style[e]=""+n)}function Pl(t,e){In(t,"display",e)}function mA(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function Rn(t,e){return t.getAttribute(e)}function r_(t,e){return t&&t.classList.contains(e)}function ln(t){return t.getBoundingClientRect()}function ps(t){vn(t,function(e){e&&e.parentNode&&e.parentNode.removeChild(e)})}function gA(t){return gu(new DOMParser().parseFromString(t,"text/html").body)}function ar(t,e){t.preventDefault(),e&&(t.stopPropagation(),t.stopImmediatePropagation())}function vA(t,e){return t&&t.querySelector(e)}function g0(t,e){return e?Pi(t.querySelectorAll(e)):[]}function gr(t,e){mr(t,e,!1)}function wg(t){return t.timeStamp}function bi(t){return _i(t)?t:t?t+"px":""}var vu="splide",v0="data-"+vu;function Ba(t,e){if(!t)throw new Error("["+vu+"] "+(e||""))}var Si=Math.min,Ph=Math.max,Dh=Math.floor,Dl=Math.ceil,jt=Math.abs;function yA(t,e,n){return jt(t-e)<n}function Sc(t,e,n,r){var i=Si(e,n),s=Ph(e,n);return r?i<t&&t<s:i<=t&&t<=s}function Rs(t,e,n){var r=Si(e,n),i=Ph(e,n);return Si(Ph(r,t),i)}function Eg(t){return+(t>0)-+(t<0)}function _g(t,e){return vn(e,function(n){t=t.replace("%s",""+n)}),t}function y0(t){return t<10?"0"+t:""+t}var i_={};function uF(t){return""+t+y0(i_[t]=(i_[t]||0)+1)}function wA(){var t=[];function e(o,a,l,u){i(o,a,function(c,h,d){var p="addEventListener"in c,m=p?c.removeEventListener.bind(c,h,l,u):c.removeListener.bind(c,l);p?c.addEventListener(h,l,u):c.addListener(l),t.push([c,h,d,l,m])})}function n(o,a,l){i(o,a,function(u,c,h){t=t.filter(function(d){return d[0]===u&&d[1]===c&&d[2]===h&&(!l||d[3]===l)?(d[4](),!1):!0})})}function r(o,a,l){var u,c=!0;return typeof CustomEvent=="function"?u=new CustomEvent(a,{bubbles:c,detail:l}):(u=document.createEvent("CustomEvent"),u.initCustomEvent(a,c,!1,l)),o.dispatchEvent(u),u}function i(o,a,l){vn(o,function(u){u&&vn(a,function(c){c.split(" ").forEach(function(h){var d=h.split(".");l(u,d[0],d[1])})})})}function s(){t.forEach(function(o){o[4]()}),Nr(t)}return{bind:e,unbind:n,dispatch:r,destroy:s}}var Di="mounted",Sg="ready",Pr="move",Qo="moved",w0="click",EA="active",_A="inactive",SA="visible",CA="hidden",Ye="refresh",Ft="updated",Ao="resize",ef="resized",TA="drag",IA="dragging",kA="dragged",tf="scroll",Ts="scrolled",cF="overflow",E0="destroy",xA="arrows:mounted",AA="arrows:updated",RA="pagination:mounted",NA="pagination:updated",_0="navigation:mounted",S0="autoplay:play",PA="autoplay:playing",C0="autoplay:pause",T0="lazyload:loaded",DA="sk",OA="sh",Oh="ei";function Be(t){var e=t?t.event.bus:document.createDocumentFragment(),n=wA();function r(s,o){n.bind(e,pu(s).join(" "),function(a){o.apply(o,d0(a.detail)?a.detail:[])})}function i(s){n.dispatch(e,s,Pi(arguments,1))}return t&&t.event.on(E0,n.destroy),Nl(n,{bus:e,on:r,off:Ae(n.unbind,e),emit:i})}function nf(t,e,n,r){var i=Date.now,s,o=0,a,l=!0,u=0;function c(){if(!l){if(o=t?Si((i()-s)/t,1):1,n&&n(o),o>=1&&(e(),s=i(),r&&++u>=r))return d();a=t_(c)}}function h(g){g||m(),s=i()-(g?o*t:0),l=!1,a=t_(c)}function d(){l=!0}function p(){s=i(),o=0,n&&n(o)}function m(){a&&cancelAnimationFrame(a),o=0,a=0,l=!0}function v(g){t=g}function w(){return l}return{start:h,rewind:p,pause:d,cancel:m,set:v,isPaused:w}}function hF(t){var e=t;function n(i){e=i}function r(i){return p0(pu(i),e)}return{set:n,is:r}}function dF(t,e){var n=nf(e||0,t,null,1);return function(){n.isPaused()&&n.start()}}function fF(t,e,n){var r=t.state,i=n.breakpoints||{},s=n.reducedMotion||{},o=wA(),a=[];function l(){var m=n.mediaQuery==="min";Rl(i).sort(function(v,w){return m?+v-+w:+w-+v}).forEach(function(v){c(i[v],"("+(m?"min":"max")+"-width:"+v+"px)")}),c(s,e_),h()}function u(m){m&&o.destroy()}function c(m,v){var w=matchMedia(v);o.bind(w,"change",h),a.push([m,w])}function h(){var m=r.is(Nh),v=n.direction,w=a.reduce(function(g,f){return Qr(g,f[1].matches?f[0]:{})},{});n_(n),p(w),n.destroy?t.destroy(n.destroy==="completely"):m?(u(!0),t.mount()):v!==n.direction&&t.refresh()}function d(m){matchMedia(e_).matches&&(m?Qr(n,s):n_(n,Rl(s)))}function p(m,v,w){Qr(n,m),v&&Qr(Object.getPrototypeOf(n),m),(w||!r.is(Ws))&&t.emit(Ft,n)}return{setup:l,destroy:u,reduce:d,set:p}}var rf="Arrow",sf=rf+"Left",of=rf+"Right",bA=rf+"Up",$A=rf+"Down",s_="rtl",af="ttb",Cp={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[bA,of],ArrowRight:[$A,sf]};function pF(t,e,n){function r(s,o,a){a=a||n.direction;var l=a===s_&&!o?1:a===af?0:-1;return Cp[s]&&Cp[s][l]||s.replace(/width|left|right/i,function(u,c){var h=Cp[u.toLowerCase()][l]||u;return c>0?h.charAt(0).toUpperCase()+h.slice(1):h})}function i(s){return s*(n.direction===s_?1:-1)}return{resolve:r,orient:i}}var wr="role",ao="tabindex",mF="disabled",$n="aria-",yu=$n+"controls",LA=$n+"current",o_=$n+"selected",dn=$n+"label",I0=$n+"labelledby",MA=$n+"hidden",k0=$n+"orientation",Ol=$n+"roledescription",a_=$n+"live",l_=$n+"busy",u_=$n+"atomic",x0=[wr,ao,mF,yu,LA,dn,I0,MA,k0,Ol],ir=vu+"__",Oi="is-",Tp=vu,c_=ir+"track",gF=ir+"list",lf=ir+"slide",FA=lf+"--clone",vF=lf+"__container",A0=ir+"arrows",uf=ir+"arrow",UA=uf+"--prev",BA=uf+"--next",cf=ir+"pagination",VA=cf+"__page",yF=ir+"progress",wF=yF+"__bar",EF=ir+"toggle",_F=ir+"spinner",SF=ir+"sr",CF=Oi+"initialized",ms=Oi+"active",zA=Oi+"prev",jA=Oi+"next",Cg=Oi+"visible",Tg=Oi+"loading",HA=Oi+"focus-in",WA=Oi+"overflow",TF=[ms,Cg,zA,jA,Tg,HA,WA],IF={slide:lf,clone:FA,arrows:A0,arrow:uf,prev:UA,next:BA,pagination:cf,page:VA,spinner:_F};function kF(t,e){if(dA(t.closest))return t.closest(e);for(var n=t;n&&n.nodeType===1&&!Al(n,e);)n=n.parentElement;return n}var xF=5,h_=200,GA="touchstart mousedown",Ip="touchmove mousemove",kp="touchend touchcancel mouseup click";function AF(t,e,n){var r=Be(t),i=r.on,s=r.bind,o=t.root,a=n.i18n,l={},u=[],c=[],h=[],d,p,m;function v(){y(),E(),f()}function w(){i(Ye,g),i(Ye,v),i(Ft,f),s(document,GA+" keydown",function(T){m=T.type==="keydown"},{capture:!0}),s(o,"focusin",function(){mr(o,HA,!!m)})}function g(T){var I=x0.concat("style");Nr(u),gr(o,c),gr(d,h),er([d,p],I),er(o,T?I:["style",Ol])}function f(){gr(o,c),gr(d,h),c=k(Tp),h=k(c_),Zn(o,c),Zn(d,h),he(o,dn,n.label),he(o,I0,n.labelledby)}function y(){d=C("."+c_),p=gu(d,"."+gF),Ba(d&&p,"A track/list element is missing."),_c(u,pA(p,"."+lf+":not(."+FA+")")),Yi({arrows:A0,pagination:cf,prev:UA,next:BA,bar:wF,toggle:EF},function(T,I){l[I]=C("."+T)}),Nl(l,{root:o,track:d,list:p,slides:u})}function E(){var T=o.id||uF(vu),I=n.role;o.id=T,d.id=d.id||T+"-track",p.id=p.id||T+"-list",!Rn(o,wr)&&o.tagName!=="SECTION"&&I&&he(o,wr,I),he(o,Ol,a.carousel),he(p,wr,"presentation")}function C(T){var I=vA(o,T);return I&&kF(I,"."+Tp)===o?I:void 0}function k(T){return[T+"--"+n.type,T+"--"+n.direction,n.drag&&T+"--draggable",n.isNavigation&&T+"--nav",T===Tp&&ms]}return Nl(l,{setup:v,mount:w,destroy:g})}var Ro="slide",Xo="loop",wu="fade";function RF(t,e,n,r){var i=Be(t),s=i.on,o=i.emit,a=i.bind,l=t.Components,u=t.root,c=t.options,h=c.isNavigation,d=c.updateOnMove,p=c.i18n,m=c.pagination,v=c.slideFocus,w=l.Direction.resolve,g=Rn(r,"style"),f=Rn(r,dn),y=n>-1,E=gu(r,"."+vF),C;function k(){y||(r.id=u.id+"-slide"+y0(e+1),he(r,wr,m?"tabpanel":"group"),he(r,Ol,p.slide),he(r,dn,f||_g(p.slideLabel,[e+1,t.length]))),T()}function T(){a(r,"click",Ae(o,w0,x)),a(r,"keydown",Ae(o,DA,x)),s([Qo,OA,Ts],b),s(_0,V),d&&s(Pr,P)}function I(){C=!0,i.destroy(),gr(r,TF),er(r,x0),he(r,"style",g),he(r,dn,f||"")}function V(){var O=t.splides.map(function(A){var z=A.splide.Components.Slides.getAt(e);return z?z.slide.id:""}).join(" ");he(r,dn,_g(p.slideX,(y?n:e)+1)),he(r,yu,O),he(r,wr,v?"button":""),v&&er(r,Ol)}function P(){C||b()}function b(){if(!C){var O=t.index;B(),j(),mr(r,zA,e===O-1),mr(r,jA,e===O+1)}}function B(){var O=q();O!==r_(r,ms)&&(mr(r,ms,O),he(r,LA,h&&O||""),o(O?EA:_A,x))}function j(){var O=pe(),A=!O&&(!q()||y);if(t.state.is([qo,du])||he(r,MA,A||""),he(g0(r,c.focusableNodes||""),ao,A?-1:""),v&&he(r,ao,A?-1:0),O!==r_(r,Cg)&&(mr(r,Cg,O),o(O?SA:CA,x)),!O&&document.activeElement===r){var z=l.Slides.getAt(t.index);z&&mA(z.slide)}}function Y(O,A,z){In(z&&E||r,O,A)}function q(){var O=t.index;return O===e||c.cloneStatus&&O===n}function pe(){if(t.is(wu))return q();var O=ln(l.Elements.track),A=ln(r),z=w("left",!0),R=w("right",!0);return Dh(O[z])<=Dl(A[z])&&Dh(A[R])<=Dl(O[R])}function le(O,A){var z=jt(O-e);return!y&&(c.rewind||t.is(Xo))&&(z=Si(z,t.length-z)),z<=A}var x={index:e,slideIndex:n,slide:r,container:E,isClone:y,mount:k,destroy:I,update:b,style:Y,isWithin:le};return x}function NF(t,e,n){var r=Be(t),i=r.on,s=r.emit,o=r.bind,a=e.Elements,l=a.slides,u=a.list,c=[];function h(){d(),i(Ye,p),i(Ye,d)}function d(){l.forEach(function(b,B){v(b,B,-1)})}function p(){C(function(b){b.destroy()}),Nr(c)}function m(){C(function(b){b.update()})}function v(b,B,j){var Y=RF(t,B,j,b);Y.mount(),c.push(Y),c.sort(function(q,pe){return q.index-pe.index})}function w(b){return b?k(function(B){return!B.isClone}):c}function g(b){var B=e.Controller,j=B.toIndex(b),Y=B.hasFocus()?1:n.perPage;return k(function(q){return Sc(q.index,j,j+Y-1)})}function f(b){return k(b)[0]}function y(b,B){vn(b,function(j){if(_i(j)&&(j=gA(j)),fA(j)){var Y=l[B];Y?m0(j,Y):mu(u,j),Zn(j,n.classes.slide),I(j,Ae(s,Ao))}}),s(Ye)}function E(b){ps(k(b).map(function(B){return B.slide})),s(Ye)}function C(b,B){w(B).forEach(b)}function k(b){return c.filter(dA(b)?b:function(B){return _i(b)?Al(B.slide,b):p0(pu(b),B.index)})}function T(b,B,j){C(function(Y){Y.style(b,B,j)})}function I(b,B){var j=g0(b,"img"),Y=j.length;Y?j.forEach(function(q){o(q,"load error",function(){--Y||B()})}):B()}function V(b){return b?l.length:c.length}function P(){return c.length>n.perPage}return{mount:h,destroy:p,update:m,register:v,get:w,getIn:g,getAt:f,add:y,remove:E,forEach:C,filter:k,style:T,getLength:V,isEnough:P}}function PF(t,e,n){var r=Be(t),i=r.on,s=r.bind,o=r.emit,a=e.Slides,l=e.Direction.resolve,u=e.Elements,c=u.root,h=u.track,d=u.list,p=a.getAt,m=a.style,v,w,g;function f(){y(),s(window,"resize load",dF(Ae(o,Ao))),i([Ft,Ye],y),i(Ao,E)}function y(){v=n.direction===af,In(c,"maxWidth",bi(n.width)),In(h,l("paddingLeft"),C(!1)),In(h,l("paddingRight"),C(!0)),E(!0)}function E(x){var O=ln(c);(x||w.width!==O.width||w.height!==O.height)&&(In(h,"height",k()),m(l("marginRight"),bi(n.gap)),m("width",I()),m("height",V(),!0),w=O,o(ef),g!==(g=le())&&(mr(c,WA,g),o(cF,g)))}function C(x){var O=n.padding,A=l(x?"right":"left");return O&&bi(O[A]||(xl(O)?0:O))||"0px"}function k(){var x="";return v&&(x=T(),Ba(x,"height or heightRatio is missing."),x="calc("+x+" - "+C(!1)+" - "+C(!0)+")"),x}function T(){return bi(n.height||ln(d).width*n.heightRatio)}function I(){return n.autoWidth?null:bi(n.fixedWidth)||(v?"":P())}function V(){return bi(n.fixedHeight)||(v?n.autoHeight?null:P():T())}function P(){var x=bi(n.gap);return"calc((100%"+(x&&" + "+x)+")/"+(n.perPage||1)+(x&&" - "+x)+")"}function b(){return ln(d)[l("width")]}function B(x,O){var A=p(x||0);return A?ln(A.slide)[l("width")]+(O?0:q()):0}function j(x,O){var A=p(x);if(A){var z=ln(A.slide)[l("right")],R=ln(d)[l("left")];return jt(z-R)+(O?0:q())}return 0}function Y(x){return j(t.length-1)-j(0)+B(0,x)}function q(){var x=p(0);return x&&parseFloat(In(x.slide,l("marginRight")))||0}function pe(x){return parseFloat(In(h,l("padding"+(x?"Right":"Left"))))||0}function le(){return t.is(wu)||Y(!0)>b()}return{mount:f,resize:E,listSize:b,slideSize:B,sliderSize:Y,totalSize:j,getPadding:pe,isOverflow:le}}var DF=2;function OF(t,e,n){var r=Be(t),i=r.on,s=e.Elements,o=e.Slides,a=e.Direction.resolve,l=[],u;function c(){i(Ye,h),i([Ft,Ao],p),(u=w())&&(m(u),e.Layout.resize(!0))}function h(){d(),c()}function d(){ps(l),Nr(l),r.destroy()}function p(){var g=w();u!==g&&(u<g||!g)&&r.emit(Ye)}function m(g){var f=o.get().slice(),y=f.length;if(y){for(;f.length<g;)_c(f,f);_c(f.slice(-g),f.slice(0,g)).forEach(function(E,C){var k=C<g,T=v(E.slide,C);k?m0(T,f[0].slide):mu(s.list,T),_c(l,T),o.register(T,C-g+(k?0:y),E.index)})}}function v(g,f){var y=g.cloneNode(!0);return Zn(y,n.classes.clone),y.id=t.root.id+"-clone"+y0(f+1),y}function w(){var g=n.clones;if(!t.is(Xo))g=0;else if(fu(g)){var f=n[a("fixedWidth")]&&e.Layout.slideSize(0),y=f&&Dl(ln(s.track)[a("width")]/f);g=y||n[a("autoWidth")]&&t.length||n.perPage*DF}return g}return{mount:c,destroy:d}}function bF(t,e,n){var r=Be(t),i=r.on,s=r.emit,o=t.state.set,a=e.Layout,l=a.slideSize,u=a.getPadding,c=a.totalSize,h=a.listSize,d=a.sliderSize,p=e.Direction,m=p.resolve,v=p.orient,w=e.Elements,g=w.list,f=w.track,y;function E(){y=e.Transition,i([Di,ef,Ft,Ye],C)}function C(){e.Controller.isBusy()||(e.Scroll.cancel(),T(t.index),e.Slides.update())}function k(A,z,R,N){A!==z&&x(A>R)&&(b(),I(P(Y(),A>R),!0)),o(qo),s(Pr,z,R,A),y.start(z,function(){o(xo),s(Qo,z,R,A),N&&N()})}function T(A){I(j(A,!0))}function I(A,z){if(!t.is(wu)){var R=z?A:V(A);In(g,"transform","translate"+m("X")+"("+R+"px)"),A!==R&&s(OA)}}function V(A){if(t.is(Xo)){var z=B(A),R=z>e.Controller.getEnd(),N=z<0;(N||R)&&(A=P(A,R))}return A}function P(A,z){var R=A-le(z),N=d();return A-=v(N*(Dl(jt(R)/N)||1))*(z?1:-1),A}function b(){I(Y(),!0),y.cancel()}function B(A){for(var z=e.Slides.get(),R=0,N=1/0,M=0;M<z.length;M++){var J=z[M].index,_=jt(j(J,!0)-A);if(_<=N)N=_,R=J;else break}return R}function j(A,z){var R=v(c(A-1)-pe(A));return z?q(R):R}function Y(){var A=m("left");return ln(g)[A]-ln(f)[A]+v(u(!1))}function q(A){return n.trimSpace&&t.is(Ro)&&(A=Rs(A,0,v(d(!0)-h()))),A}function pe(A){var z=n.focus;return z==="center"?(h()-l(A,!0))/2:+z*l(A)||0}function le(A){return j(A?e.Controller.getEnd():0,!!n.trimSpace)}function x(A){var z=v(P(Y(),A));return A?z>=0:z<=g[m("scrollWidth")]-ln(f)[m("width")]}function O(A,z){z=fu(z)?Y():z;var R=A!==!0&&v(z)<v(le(!1)),N=A!==!1&&v(z)>v(le(!0));return R||N}return{mount:E,move:k,jump:T,translate:I,shift:P,cancel:b,toIndex:B,toPosition:j,getPosition:Y,getLimit:le,exceededLimit:O,reposition:C}}function $F(t,e,n){var r=Be(t),i=r.on,s=r.emit,o=e.Move,a=o.getPosition,l=o.getLimit,u=o.toPosition,c=e.Slides,h=c.isEnough,d=c.getLength,p=n.omitEnd,m=t.is(Xo),v=t.is(Ro),w=Ae(Y,!1),g=Ae(Y,!0),f=n.start||0,y,E=f,C,k,T;function I(){V(),i([Ft,Ye,Oh],V),i(ef,P)}function V(){C=d(!0),k=n.perMove,T=n.perPage,y=x();var _=Rs(f,0,p?y:C-1);_!==f&&(f=_,o.reposition())}function P(){y!==x()&&s(Oh)}function b(_,Q,F){if(!J()){var ue=j(_),ne=le(ue);ne>-1&&(Q||ne!==f)&&(R(ne),o.move(ue,ne,E,F))}}function B(_,Q,F,ue){e.Scroll.scroll(_,Q,F,function(){var ne=le(o.toIndex(a()));R(p?Si(ne,y):ne),ue&&ue()})}function j(_){var Q=f;if(_i(_)){var F=_.match(/([+\-<>])(\d+)?/)||[],ue=F[1],ne=F[2];ue==="+"||ue==="-"?Q=q(f+ +(""+ue+(+ne||1)),f):ue===">"?Q=ne?O(+ne):w(!0):ue==="<"&&(Q=g(!0))}else Q=m?_:Rs(_,0,y);return Q}function Y(_,Q){var F=k||(M()?1:T),ue=q(f+F*(_?-1:1),f,!(k||M()));return ue===-1&&v&&!yA(a(),l(!_),1)?_?0:y:Q?ue:le(ue)}function q(_,Q,F){if(h()||M()){var ue=pe(_);ue!==_&&(Q=_,_=ue,F=!1),_<0||_>y?!k&&(Sc(0,_,Q,!0)||Sc(y,Q,_,!0))?_=O(A(_)):m?_=F?_<0?-(C%T||T):C:_:n.rewind?_=_<0?y:0:_=-1:F&&_!==Q&&(_=O(A(Q)+(_<Q?-1:1)))}else _=-1;return _}function pe(_){if(v&&n.trimSpace==="move"&&_!==f)for(var Q=a();Q===u(_,!0)&&Sc(_,0,t.length-1,!n.rewind);)_<f?--_:++_;return _}function le(_){return m?(_+C)%C||0:_}function x(){for(var _=C-(M()||m&&k?1:T);p&&_-- >0;)if(u(C-1,!0)!==u(_,!0)){_++;break}return Rs(_,0,C-1)}function O(_){return Rs(M()?_:T*_,0,y)}function A(_){return M()?Si(_,y):Dh((_>=y?C-1:_)/T)}function z(_){var Q=o.toIndex(_);return v?Rs(Q,0,y):Q}function R(_){_!==f&&(E=f,f=_)}function N(_){return _?E:f}function M(){return!fu(n.focus)||n.isNavigation}function J(){return t.state.is([qo,du])&&!!n.waitForTransition}return{mount:I,go:b,scroll:B,getNext:w,getPrev:g,getAdjacent:Y,getEnd:x,setIndex:R,getIndex:N,toIndex:O,toPage:A,toDest:z,hasFocus:M,isBusy:J}}var LF="http://www.w3.org/2000/svg",MF="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",Ju=40;function FF(t,e,n){var r=Be(t),i=r.on,s=r.bind,o=r.emit,a=n.classes,l=n.i18n,u=e.Elements,c=e.Controller,h=u.arrows,d=u.track,p=h,m=u.prev,v=u.next,w,g,f={};function y(){C(),i(Ft,E)}function E(){k(),y()}function C(){var B=n.arrows;B&&!(m&&v)&&V(),m&&v&&(Nl(f,{prev:m,next:v}),Pl(p,B?"":"none"),Zn(p,g=A0+"--"+n.direction),B&&(T(),b(),he([m,v],yu,d.id),o(xA,m,v)))}function k(){r.destroy(),gr(p,g),w?(ps(h?[m,v]:p),m=v=null):er([m,v],x0)}function T(){i([Di,Qo,Ye,Ts,Oh],b),s(v,"click",Ae(I,">")),s(m,"click",Ae(I,"<"))}function I(B){c.go(B,!0)}function V(){p=h||oo("div",a.arrows),m=P(!0),v=P(!1),w=!0,mu(p,[m,v]),!h&&m0(p,d)}function P(B){var j='<button class="'+a.arrow+" "+(B?a.prev:a.next)+'" type="button"><svg xmlns="'+LF+'" viewBox="0 0 '+Ju+" "+Ju+'" width="'+Ju+'" height="'+Ju+'" focusable="false"><path d="'+(n.arrowPath||MF)+'" />';return gA(j)}function b(){if(m&&v){var B=t.index,j=c.getPrev(),Y=c.getNext(),q=j>-1&&B<j?l.last:l.prev,pe=Y>-1&&B>Y?l.first:l.next;m.disabled=j<0,v.disabled=Y<0,he(m,dn,q),he(v,dn,pe),o(AA,m,v,j,Y)}}return{arrows:f,mount:y,destroy:k,update:b}}var UF=v0+"-interval";function BF(t,e,n){var r=Be(t),i=r.on,s=r.bind,o=r.emit,a=nf(n.interval,t.go.bind(t,">"),T),l=a.isPaused,u=e.Elements,c=e.Elements,h=c.root,d=c.toggle,p=n.autoplay,m,v,w=p==="pause";function g(){p&&(f(),d&&he(d,yu,u.track.id),w||y(),k())}function f(){n.pauseOnHover&&s(h,"mouseenter mouseleave",function(V){m=V.type==="mouseenter",C()}),n.pauseOnFocus&&s(h,"focusin focusout",function(V){v=V.type==="focusin",C()}),d&&s(d,"click",function(){w?y():E(!0)}),i([Pr,tf,Ye],a.rewind),i(Pr,I)}function y(){l()&&e.Slides.isEnough()&&(a.start(!n.resetProgress),v=m=w=!1,k(),o(S0))}function E(V){V===void 0&&(V=!0),w=!!V,k(),l()||(a.pause(),o(C0))}function C(){w||(m||v?E(!1):y())}function k(){d&&(mr(d,ms,!w),he(d,dn,n.i18n[w?"play":"pause"]))}function T(V){var P=u.bar;P&&In(P,"width",V*100+"%"),o(PA,V)}function I(V){var P=e.Slides.getAt(V);a.set(P&&+Rn(P.slide,UF)||n.interval)}return{mount:g,destroy:a.cancel,play:y,pause:E,isPaused:l}}function VF(t,e,n){var r=Be(t),i=r.on;function s(){n.cover&&(i(T0,Ae(a,!0)),i([Di,Ft,Ye],Ae(o,!0)))}function o(l){e.Slides.forEach(function(u){var c=gu(u.container||u.slide,"img");c&&c.src&&a(l,c,u)})}function a(l,u,c){c.style("background",l?'center/cover no-repeat url("'+u.src+'")':"",!0),Pl(u,l?"none":"")}return{mount:s,destroy:Ae(o,!1)}}var zF=10,jF=600,HF=.6,WF=1.5,GF=800;function KF(t,e,n){var r=Be(t),i=r.on,s=r.emit,o=t.state.set,a=e.Move,l=a.getPosition,u=a.getLimit,c=a.exceededLimit,h=a.translate,d=t.is(Ro),p,m,v=1;function w(){i(Pr,E),i([Ft,Ye],C)}function g(T,I,V,P,b){var B=l();if(E(),V&&(!d||!c())){var j=e.Layout.sliderSize(),Y=Eg(T)*j*Dh(jt(T)/j)||0;T=a.toPosition(e.Controller.toDest(T%j))+Y}var q=yA(B,T,1);v=1,I=q?0:I||Ph(jt(T-B)/WF,GF),m=P,p=nf(I,f,Ae(y,B,T,b),1),o(du),s(tf),p.start()}function f(){o(xo),m&&m(),s(Ts)}function y(T,I,V,P){var b=l(),B=T+(I-T)*k(P),j=(B-b)*v;h(b+j),d&&!V&&c()&&(v*=HF,jt(j)<zF&&g(u(c(!0)),jF,!1,m,!0))}function E(){p&&p.cancel()}function C(){p&&!p.isPaused()&&(E(),f())}function k(T){var I=n.easingFunc;return I?I(T):1-Math.pow(1-T,4)}return{mount:w,destroy:E,scroll:g,cancel:C}}var Ns={passive:!1,capture:!0};function qF(t,e,n){var r=Be(t),i=r.on,s=r.emit,o=r.bind,a=r.unbind,l=t.state,u=e.Move,c=e.Scroll,h=e.Controller,d=e.Elements.track,p=e.Media.reduce,m=e.Direction,v=m.resolve,w=m.orient,g=u.getPosition,f=u.exceededLimit,y,E,C,k,T,I=!1,V,P,b;function B(){o(d,Ip,yg,Ns),o(d,kp,yg,Ns),o(d,GA,Y,Ns),o(d,"click",le,{capture:!0}),o(d,"dragstart",ar),i([Di,Ft],j)}function j(){var H=n.drag;se(!H),k=H==="free"}function Y(H){if(V=!1,!P){var fe=ne(H);ue(H.target)&&(fe||!H.button)&&(h.isBusy()?ar(H,!0):(b=fe?d:window,T=l.is([qo,du]),C=null,o(b,Ip,q,Ns),o(b,kp,pe,Ns),u.cancel(),c.cancel(),x(H)))}}function q(H){if(l.is(Ec)||(l.set(Ec),s(TA)),H.cancelable)if(T){u.translate(y+F(M(H)));var fe=J(H)>h_,de=I!==(I=f());(fe||de)&&x(H),V=!0,s(IA),ar(H)}else z(H)&&(T=A(H),ar(H))}function pe(H){l.is(Ec)&&(l.set(xo),s(kA)),T&&(O(H),ar(H)),a(b,Ip,q),a(b,kp,pe),T=!1}function le(H){!P&&V&&ar(H,!0)}function x(H){C=E,E=H,y=g()}function O(H){var fe=R(H),de=N(fe),Ve=n.rewind&&n.rewindByDrag;p(!1),k?h.scroll(de,0,n.snap):t.is(wu)?h.go(w(Eg(fe))<0?Ve?"<":"-":Ve?">":"+"):t.is(Ro)&&I&&Ve?h.go(f(!0)?">":"<"):h.go(h.toDest(de),!0),p(!0)}function A(H){var fe=n.dragMinThreshold,de=xl(fe),Ve=de&&fe.mouse||0,we=(de?fe.touch:+fe)||10;return jt(M(H))>(ne(H)?we:Ve)}function z(H){return jt(M(H))>jt(M(H,!0))}function R(H){if(t.is(Xo)||!I){var fe=J(H);if(fe&&fe<h_)return M(H)/fe}return 0}function N(H){return g()+Eg(H)*Si(jt(H)*(n.flickPower||600),k?1/0:e.Layout.listSize()*(n.flickMaxPages||1))}function M(H,fe){return Q(H,fe)-Q(_(H),fe)}function J(H){return wg(H)-wg(_(H))}function _(H){return E===H&&C||E}function Q(H,fe){return(ne(H)?H.changedTouches[0]:H)["page"+v(fe?"Y":"X")]}function F(H){return H/(I&&t.is(Ro)?xF:1)}function ue(H){var fe=n.noDrag;return!Al(H,"."+VA+", ."+uf)&&(!fe||!Al(H,fe))}function ne(H){return typeof TouchEvent!="undefined"&&H instanceof TouchEvent}function _e(){return T}function se(H){P=H}return{mount:B,disable:se,isDragging:_e}}var QF={Spacebar:" ",Right:of,Left:sf,Up:bA,Down:$A};function R0(t){return t=_i(t)?t:t.key,QF[t]||t}var d_="keydown";function XF(t,e,n){var r=Be(t),i=r.on,s=r.bind,o=r.unbind,a=t.root,l=e.Direction.resolve,u,c;function h(){d(),i(Ft,p),i(Ft,d),i(Pr,v)}function d(){var g=n.keyboard;g&&(u=g==="global"?window:a,s(u,d_,w))}function p(){o(u,d_)}function m(g){c=g}function v(){var g=c;c=!0,hA(function(){c=g})}function w(g){if(!c){var f=R0(g);f===l(sf)?t.go("<"):f===l(of)&&t.go(">")}}return{mount:h,destroy:p,disable:m}}var Va=v0+"-lazy",Cc=Va+"-srcset",YF="["+Va+"], ["+Cc+"]";function JF(t,e,n){var r=Be(t),i=r.on,s=r.off,o=r.bind,a=r.emit,l=n.lazyLoad==="sequential",u=[Qo,Ts],c=[];function h(){n.lazyLoad&&(d(),i(Ye,d))}function d(){Nr(c),p(),l?g():(s(u),i(u,m),m())}function p(){e.Slides.forEach(function(f){g0(f.slide,YF).forEach(function(y){var E=Rn(y,Va),C=Rn(y,Cc);if(E!==y.src||C!==y.srcset){var k=n.classes.spinner,T=y.parentElement,I=gu(T,"."+k)||oo("span",k,T);c.push([y,f,I]),y.src||Pl(y,"none")}})})}function m(){c=c.filter(function(f){var y=n.perPage*((n.preloadPages||1)+1)-1;return f[1].isWithin(t.index,y)?v(f):!0}),c.length||s(u)}function v(f){var y=f[0];Zn(f[1].slide,Tg),o(y,"load error",Ae(w,f)),he(y,"src",Rn(y,Va)),he(y,"srcset",Rn(y,Cc)),er(y,Va),er(y,Cc)}function w(f,y){var E=f[0],C=f[1];gr(C.slide,Tg),y.type!=="error"&&(ps(f[2]),Pl(E,""),a(T0,E,C),a(Ao)),l&&g()}function g(){c.length&&v(c.shift())}return{mount:h,destroy:Ae(Nr,c),check:m}}function ZF(t,e,n){var r=Be(t),i=r.on,s=r.emit,o=r.bind,a=e.Slides,l=e.Elements,u=e.Controller,c=u.hasFocus,h=u.getIndex,d=u.go,p=e.Direction.resolve,m=l.pagination,v=[],w,g;function f(){y(),i([Ft,Ye,Oh],f);var P=n.pagination;m&&Pl(m,P?"":"none"),P&&(i([Pr,tf,Ts],V),E(),V(),s(RA,{list:w,items:v},I(t.index)))}function y(){w&&(ps(m?Pi(w.children):w),gr(w,g),Nr(v),w=null),r.destroy()}function E(){var P=t.length,b=n.classes,B=n.i18n,j=n.perPage,Y=c()?u.getEnd()+1:Dl(P/j);w=m||oo("ul",b.pagination,l.track.parentElement),Zn(w,g=cf+"--"+T()),he(w,wr,"tablist"),he(w,dn,B.select),he(w,k0,T()===af?"vertical":"");for(var q=0;q<Y;q++){var pe=oo("li",null,w),le=oo("button",{class:b.page,type:"button"},pe),x=a.getIn(q).map(function(A){return A.slide.id}),O=!c()&&j>1?B.pageX:B.slideX;o(le,"click",Ae(C,q)),n.paginationKeyboard&&o(le,"keydown",Ae(k,q)),he(pe,wr,"presentation"),he(le,wr,"tab"),he(le,yu,x.join(" ")),he(le,dn,_g(O,q+1)),he(le,ao,-1),v.push({li:pe,button:le,page:q})}}function C(P){d(">"+P,!0)}function k(P,b){var B=v.length,j=R0(b),Y=T(),q=-1;j===p(of,!1,Y)?q=++P%B:j===p(sf,!1,Y)?q=(--P+B)%B:j==="Home"?q=0:j==="End"&&(q=B-1);var pe=v[q];pe&&(mA(pe.button),d(">"+q),ar(b,!0))}function T(){return n.paginationDirection||n.direction}function I(P){return v[u.toPage(P)]}function V(){var P=I(h(!0)),b=I(h());if(P){var B=P.button;gr(B,ms),er(B,o_),he(B,ao,-1)}if(b){var j=b.button;Zn(j,ms),he(j,o_,!0),he(j,ao,"")}s(NA,{list:w,items:v},P,b)}return{items:v,mount:f,destroy:y,getAt:I,update:V}}var eU=[" ","Enter"];function tU(t,e,n){var r=n.isNavigation,i=n.slideFocus,s=[];function o(){t.splides.forEach(function(m){m.isParent||(u(t,m.splide),u(m.splide,t))}),r&&c()}function a(){s.forEach(function(m){m.destroy()}),Nr(s)}function l(){a(),o()}function u(m,v){var w=Be(m);w.on(Pr,function(g,f,y){v.go(v.is(Xo)?y:g)}),s.push(w)}function c(){var m=Be(t),v=m.on;v(w0,d),v(DA,p),v([Di,Ft],h),s.push(m),m.emit(_0,t.splides)}function h(){he(e.Elements.list,k0,n.direction===af?"vertical":"")}function d(m){t.go(m.index)}function p(m,v){p0(eU,R0(v))&&(d(m),ar(v))}return{setup:Ae(e.Media.set,{slideFocus:fu(i)?r:i},!0),mount:o,destroy:a,remount:l}}function nU(t,e,n){var r=Be(t),i=r.bind,s=0;function o(){n.wheel&&i(e.Elements.track,"wheel",a,Ns)}function a(u){if(u.cancelable){var c=u.deltaY,h=c<0,d=wg(u),p=n.wheelMinThreshold||0,m=n.wheelSleep||0;jt(c)>p&&d-s>m&&(t.go(h?"<":">"),s=d),l(h)&&ar(u)}}function l(u){return!n.releaseWheel||t.state.is(qo)||e.Controller.getAdjacent(u)!==-1}return{mount:o}}var rU=90;function iU(t,e,n){var r=Be(t),i=r.on,s=e.Elements.track,o=n.live&&!n.isNavigation,a=oo("span",SF),l=nf(rU,Ae(c,!1));function u(){o&&(d(!e.Autoplay.isPaused()),he(s,u_,!0),a.textContent="\u2026",i(S0,Ae(d,!0)),i(C0,Ae(d,!1)),i([Qo,Ts],Ae(c,!0)))}function c(p){he(s,l_,p),p?(mu(s,a),l.start()):(ps(a),l.cancel())}function h(){er(s,[a_,u_,l_]),ps(a)}function d(p){o&&he(s,a_,p?"off":"polite")}return{mount:u,disable:d,destroy:h}}var sU=Object.freeze({__proto__:null,Media:fF,Direction:pF,Elements:AF,Slides:NF,Layout:PF,Clones:OF,Move:bF,Controller:$F,Arrows:FF,Autoplay:BF,Cover:VF,Scroll:KF,Drag:qF,Keyboard:XF,LazyLoad:JF,Pagination:ZF,Sync:tU,Wheel:nU,Live:iU}),oU={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},aU={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:IF,i18n:oU,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function lU(t,e,n){var r=e.Slides;function i(){Be(t).on([Di,Ye],s)}function s(){r.forEach(function(a){a.style("transform","translateX(-"+100*a.index+"%)")})}function o(a,l){r.style("transition","opacity "+n.speed+"ms "+n.easing),hA(l)}return{mount:i,start:o,cancel:yg}}function uU(t,e,n){var r=e.Move,i=e.Controller,s=e.Scroll,o=e.Elements.list,a=Ae(In,o,"transition"),l;function u(){Be(t).bind(o,"transitionend",function(p){p.target===o&&l&&(h(),l())})}function c(p,m){var v=r.toPosition(p,!0),w=r.getPosition(),g=d(p);jt(v-w)>=1&&g>=1?n.useScroll?s.scroll(v,g,!1,m):(a("transform "+g+"ms "+n.easing),r.translate(v,!0),l=m):(r.jump(p),m())}function h(){a(""),s.cancel()}function d(p){var m=n.rewindSpeed;if(t.is(Ro)&&m){var v=i.getIndex(!0),w=i.getEnd();if(v===0&&p>=w||v>=w&&p===0)return m}return n.speed}return{mount:u,start:c,cancel:h}}var cU=function(){function t(n,r){this.event=Be(),this.Components={},this.state=hF(Ws),this.splides=[],this._o={},this._E={};var i=_i(n)?vA(document,n):n;Ba(i,i+" is invalid."),this.root=i,r=Qr({label:Rn(i,dn)||"",labelledby:Rn(i,I0)||""},aU,t.defaults,r||{});try{Qr(r,JSON.parse(Rn(i,v0)))}catch{Ba(!1,"Invalid JSON")}this._o=Object.create(Qr({},r))}var e=t.prototype;return e.mount=function(r,i){var s=this,o=this.state,a=this.Components;Ba(o.is([Ws,Nh]),"Already mounted!"),o.set(Ws),this._C=a,this._T=i||this._T||(this.is(wu)?lU:uU),this._E=r||this._E;var l=Nl({},sU,this._E,{Transition:this._T});return Yi(l,function(u,c){var h=u(s,a,s._o);a[c]=h,h.setup&&h.setup()}),Yi(a,function(u){u.mount&&u.mount()}),this.emit(Di),Zn(this.root,CF),o.set(xo),this.emit(Sg),this},e.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(xo)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},e.go=function(r){return this._C.Controller.go(r),this},e.on=function(r,i){return this.event.on(r,i),this},e.off=function(r){return this.event.off(r),this},e.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(Pi(arguments,1))),this},e.add=function(r,i){return this._C.Slides.add(r,i),this},e.remove=function(r){return this._C.Slides.remove(r),this},e.is=function(r){return this._o.type===r},e.refresh=function(){return this.emit(Ye),this},e.destroy=function(r){r===void 0&&(r=!0);var i=this.event,s=this.state;return s.is(Ws)?Be(this).on(Sg,this.destroy.bind(this,r)):(Yi(this._C,function(o){o.destroy&&o.destroy(r)},!0),i.emit(E0),i.destroy(),r&&Nr(this.splides),s.set(Nh)),this},oF(t,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),t}(),N0=cU;N0.defaults={};N0.STATES=lF;var f_=[[Di,"onMounted"],[Sg,"onReady"],[Pr,"onMove"],[Qo,"onMoved"],[w0,"onClick"],[EA,"onActive"],[_A,"onInactive"],[SA,"onVisible"],[CA,"onHidden"],[Ye,"onRefresh"],[Ft,"onUpdated"],[Ao,"onResize"],[ef,"onResized"],[TA,"onDrag"],[IA,"onDragging"],[kA,"onDragged"],[tf,"onScroll"],[Ts,"onScrolled"],[E0,"onDestroy"],[xA,"onArrowsMounted"],[AA,"onArrowsUpdated"],[RA,"onPaginationMounted"],[NA,"onPaginationUpdated"],[_0,"onNavigationMounted"],[S0,"onAutoplayPlay"],[PA,"onAutoplayPlaying"],[C0,"onAutoplayPause"],[T0,"onLazyLoadLoaded"]];function P0(...t){return t.filter(Boolean).join(" ")}function bh(t){return t!==null&&typeof t=="object"}function Ig(t,e){if(Array.isArray(t)&&Array.isArray(e))return t.length===e.length&&!t.some((n,r)=>!Ig(n,e[r]));if(bh(t)&&bh(e)){const n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&!n.some(i=>!Object.prototype.hasOwnProperty.call(e,i)||!Ig(t[i],e[i]))}return t===e}function hU(t,e){return t.length===e.length&&!t.some((n,r)=>n!==e[r])}function dU(t,e){if(t){const n=Object.keys(t);for(let r=0;r<n.length;r++){const i=n[r];if(i!=="__proto__"&&e(t[i],i)===!1)break}}return t}function kg(t,e){const n=t;return dU(e,(r,i)=>{Array.isArray(r)?n[i]=r.slice():bh(r)?n[i]=kg(bh(n[i])?n[i]:{},r):n[i]=r}),n}var fU=({children:t,className:e,...n})=>S("div",{className:P0("splide__track",e),...n,children:S("ul",{className:"splide__list",children:t})}),KA=class extends st.Component{constructor(){super(...arguments),this.splideRef=st.createRef(),this.slides=[]}componentDidMount(){const{options:t,extensions:e,transition:n}=this.props,{current:r}=this.splideRef;r&&(this.splide=new N0(r,t),this.bind(this.splide),this.splide.mount(e,n),this.options=kg({},t||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:t}=this.props;t&&!Ig(this.options,t)&&(this.splide.options=t,this.options=kg({},t));const e=this.getSlides();hU(this.slides,e)||(this.splide.refresh(),this.slides=e)}sync(t){var e;(e=this.splide)==null||e.sync(t)}go(t){var e;(e=this.splide)==null||e.go(t)}getSlides(){var t;if(this.splide){const e=(t=this.splide.Components.Elements)==null?void 0:t.list.children;return e&&Array.prototype.slice.call(e)||[]}return[]}bind(t){f_.forEach(([e,n])=>{const r=this.props[n];typeof r=="function"&&t.on(e,(...i)=>{r(t,...i)})})}omit(t,e){return e.forEach(n=>{Object.prototype.hasOwnProperty.call(t,n)&&delete t[n]}),t}render(){const{className:t,tag:e="div",hasTrack:n=!0,children:r,...i}=this.props;return st.createElement(e,{className:P0("splide",t),ref:this.splideRef,...this.omit(i,["options",...f_.map(s=>s[1])])},n?st.createElement(fU,null,r):r)}},qA=({children:t,className:e,...n})=>st.createElement("li",{className:P0("splide__slide",e),...n},t);/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */const pU=Ko(h0,"board_photos"),mU=async t=>{const e=Ko(pU,t.name);return await u0(e,t),await c0(e)},QA=tr("boards/add",async(t,{rejectWithValue:e})=>{try{if(!t)throw new Error("boardData is undefined");const{brand:n,height:r,weight:i,title:s,desc:o,photo:a,nickname:l}=t,u=await mU(a);return{id:(await r0(Go(rr,"boards"),{brand:n,height:r,weight:i,title:s,desc:o,photo:u,nickname:l,createAt:Date.now()})).id,brand:n,height:r,weight:i,title:s,desc:o,photo:u,nickname:l,createAt:Date.now()}}catch(n){return console.error(n),e("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),D0=tr("boards/get",async()=>(await n0(Go(rr,"boards"))).docs.map(n=>{const r=n.data(),{createAt:i,...s}=r;return{id:n.id,...s}})),gU=Lo({name:"board",initialState:{boards:[],postCount:0},reducers:{updateBoard:(t,e)=>{}},extraReducers:t=>{t.addCase(QA.fulfilled,(e,n)=>{const r=n.payload;return{...e,boards:[...e.boards,r],postCount:e.postCount+1}}).addCase(D0.fulfilled,(e,n)=>({...e,boards:n.payload,postCount:n.payload.length}))}});var vU=gU.reducer;const yU=zl`
  width: 100%;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  padding: 16px;
  cursor: pointer;
`,wU=zl`
  width: 100%;
  padding: 6px 12px;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  cursor: pointer;
`,EU=zl`
  width: 100%;
  display: flex;
  flex-direction: column;
`,wn=wt.section`
  width: 100%;
  padding-top: 60px;
  min-height: 100vh;
  background: #FFFFFF;

  @media screen and (max-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`,hf=wt.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 40px;

  .title {
    padding-left: 12px;
  }

  .contents {
    .no-photos, 
    .no-boards {
      padding-left: 20px;
    }
  }
`,_U=wt.div`
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
          background: #FEFEFE;
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
`,XA=wt.div`
  min-width: 260px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 6px;

  .top {
    position: relative;
    height: 300px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
      /* object-fit: fill; */
    }
  }

  .bottom {
    p {
      font-size: clamp(12.5px, 1.5vw, 13px);

      &:nth-of-type(1) {
        font-size: clamp(16px, 2.5vw, 16px);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .top {
      height: 260px;
    }
  }
`,O0=wt.div`
  margin: 0 auto;
  max-width: 564px;
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;

    input,
    textarea,
    button {
      outline: none;
    }

    input {
      height: 46px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.72);
      padding: 12px 16px;
      transition: background 0.15s ease-in-out;
      font-size: clamp(12.5px, 1.5vw, 15px);

      &::placeholder {
        color: #908787;
      }

      &:focus {
        background: #f8f3f3;
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

        input[type="checkbox"] {
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

      input {
        padding: 6px 10px;
        height: 36px;
      }

      button[type='submit'] {
        line-height: 1.5;
        height: 36px;
        padding: 12px 20px;
      }
    }
  }
`,SU=wt.div`
  width: 100%;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.86);
  background: #f8d7da;
  text-align: center;

  p {
    padding: 12px;
    font-size: clamp(14px, 2vw, 15px);
  }
`;wt.form`
  ${EU}
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1 1 50%;

  h1 {
    font-size: clamp(18px, 2.5vw, 20px);
    margin: 12px 0;
  }
`;const ca=wt.input`
  ${yU}
`,xp=wt.button`
  ${wU}
`,YA=wt.div`
  margin: 0 auto;
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
 */function CU(t){t.length=0}function b0(t,e,n){return Array.prototype.slice.call(t,e,n)}function df(t){return t.bind.apply(t,[null].concat(b0(arguments,1)))}function p_(t){return requestAnimationFrame(t)}function $0(t,e){return typeof e===t}var JA=Array.isArray;df($0,"function");df($0,"string");df($0,"undefined");function ZA(t){return JA(t)?t:[t]}function m_(t,e){ZA(t).forEach(e)}var TU=Object.keys;function IU(t,e,n){if(t){var r=TU(t);r=n?r.reverse():r;for(var i=0;i<r.length;i++){var s=r[i];if(s!=="__proto__"&&e(t[s],s)===!1)break}}return t}function kU(t){return b0(arguments,1).forEach(function(e){IU(e,function(n,r){t[r]=e[r]})}),t}var xU=Math.min;function AU(){var t=[];function e(o,a,l,u){i(o,a,function(c,h,d){var p="addEventListener"in c,m=p?c.removeEventListener.bind(c,h,l,u):c.removeListener.bind(c,l);p?c.addEventListener(h,l,u):c.addListener(l),t.push([c,h,d,l,m])})}function n(o,a,l){i(o,a,function(u,c,h){t=t.filter(function(d){return d[0]===u&&d[1]===c&&d[2]===h&&(!l||d[3]===l)?(d[4](),!1):!0})})}function r(o,a,l){var u,c=!0;return typeof CustomEvent=="function"?u=new CustomEvent(a,{bubbles:c,detail:l}):(u=document.createEvent("CustomEvent"),u.initCustomEvent(a,c,!1,l)),o.dispatchEvent(u),u}function i(o,a,l){m_(o,function(u){u&&m_(a,function(c){c.split(" ").forEach(function(h){var d=h.split(".");l(u,d[0],d[1])})})})}function s(){t.forEach(function(o){o[4]()}),CU(t)}return{bind:e,unbind:n,dispatch:r,destroy:s}}var g_="move",v_="moved",RU="updated",y_="drag",NU="dragged",w_="scroll",E_="scrolled",PU="destroy";function DU(t){var e=t?t.event.bus:document.createDocumentFragment(),n=AU();function r(s,o){n.bind(e,ZA(s).join(" "),function(a){o.apply(o,JA(a.detail)?a.detail:[])})}function i(s){n.dispatch(e,s,b0(arguments,1))}return t&&t.event.on(PU,n.destroy),kU(n,{bus:e,on:r,off:df(n.unbind,e),emit:i})}function e2(t,e,n,r){var i=Date.now,s,o=0,a,l=!0,u=0;function c(){if(!l){if(o=t?xU((i()-s)/t,1):1,n&&n(o),o>=1&&(e(),s=i(),r&&++u>=r))return d();p_(c)}}function h(g){!g&&m(),s=i()-(g?o*t:0),l=!1,p_(c)}function d(){l=!0}function p(){s=i(),o=0,n&&n(o)}function m(){a&&cancelAnimationFrame(a),o=0,a=0,l=!0}function v(g){t=g}function w(){return l}return{start:h,rewind:p,pause:d,cancel:m,set:v,isPaused:w}}function OU(t,e){var n;function r(){n||(n=e2(e||0,function(){t(),n=null},null,1),n.start())}return r}var bU="is-active",$U="slide",LU="fade";function t2(t,e,n){return Array.prototype.slice.call(t,e,n)}function L0(t){return t.bind(null,...t2(arguments,1))}function ff(t,e){return typeof e===t}function xg(t){return!n2(t)&&ff("object",t)}const MU=Array.isArray;L0(ff,"function");L0(ff,"string");const FU=L0(ff,"undefined");function n2(t){return t===null}function UU(t){return MU(t)?t:[t]}function $h(t,e){UU(t).forEach(e)}function BU(t,e,n){t&&$h(e,r=>{r&&t.classList[n?"add":"remove"](r)})}const VU=Object.keys;function r2(t,e,n){if(t){let r=VU(t);r=n?r.reverse():r;for(let i=0;i<r.length;i++){const s=r[i];if(s!=="__proto__"&&e(t[s],s)===!1)break}}return t}function __(t){return t2(arguments,1).forEach(e=>{r2(e,(n,r)=>{t[r]=e[r]})}),t}function zU(t,e){$h(t,n=>{$h(e,r=>{n&&n.removeAttribute(r)})})}function i2(t,e,n){xg(e)?r2(e,(r,i)=>{i2(t,i,r)}):$h(t,r=>{n2(n)||n===""?zU(r,e):r.setAttribute(e,String(n))})}const{min:S_,max:C_,floor:k8,ceil:x8,abs:A8}=Math;function jU(t,e,n){const r=S_(e,n),i=C_(e,n);return S_(C_(r,t),i)}const HU={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},WU={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function s2(t,e,n){const{on:r,off:i,bind:s,unbind:o}=DU(t),{translate:a,getPosition:l,toIndex:u,getLimit:c}=e.Move,{setIndex:h,getIndex:d}=e.Controller,{orient:p}=e.Direction,{toggle:m}=e.Elements,{Live:v}=e,{root:w}=t,g=OU(e.Arrows.update,500);let f={},y,E,C,k,T,I;function V(){const{autoScroll:N}=n;f=__({},HU,xg(N)?N:{})}function P(){t.is(LU)||!y&&n.autoScroll!==!1&&(y=e2(0,x),B(),Y())}function b(){y&&(y.cancel(),y=null,I=void 0,i([g_,y_,w_,v_,E_]),o(w,"mouseenter mouseleave focusin focusout"),o(m,"click"))}function B(){f.pauseOnHover&&s(w,"mouseenter mouseleave",N=>{C=N.type==="mouseenter",le()}),f.pauseOnFocus&&s(w,"focusin focusout",N=>{k=N.type==="focusin",le()}),f.useToggleButton&&s(m,"click",()=>{E?q():pe()}),r(RU,j),r([g_,y_,w_],()=>{T=!0,pe(!1)}),r([v_,NU,E_],()=>{T=!1,le()})}function j(){const{autoScroll:N}=n;N!==!1?(f=__({},f,xg(N)?N:{}),P()):b(),y&&!FU(I)&&a(I)}function Y(){f.autoStart&&(document.readyState==="complete"?q():s(window,"load",q))}function q(){R()&&(y.start(!0),v.disable(!0),k=C=E=!1,z())}function pe(N=!0){E||(E=N,z(),R()||(y.pause(),v.disable(!1)))}function le(){E||(C||k||T?pe(!1):q())}function x(){const N=l(),M=O(N);N!==M?(a(M),A(I=l())):(pe(!1),f.rewind&&t.go(f.speed>0?0:e.Controller.getEnd())),g()}function O(N){const M=f.speed||1;return N+=p(M),t.is($U)&&(N=jU(N,c(!1),c(!0))),N}function A(N){const{length:M}=t,J=(u(N)+M)%M;J!==d()&&(h(J),e.Slides.update(),e.Pagination.update(),n.lazyLoad==="nearby"&&e.LazyLoad.check())}function z(){if(m){const N=E?"startScroll":"pauseScroll";BU(m,bU,!E),i2(m,"aria-label",n.i18n[N]||WU[N])}}function R(){return!y||y.isPaused()}return{setup:V,mount:P,destroy:b,play:q,pause:pe,isPaused:R}}const GU=()=>{const t=On(c=>c.board.boards),[e,n]=D.exports.useState(t.length),[r,i]=D.exports.useState("12px"),[s,o]=D.exports.useState("left"),a=xi(),l=D.exports.useCallback(()=>{window.innerWidth>=1280?(n(t.length),i("12px"),o("left")):window.innerWidth>=1024?(n(t.length),i("14px"),o("left")):window.innerWidth>=768?(n(3),i("16px"),o("center")):window.innerWidth>=564?(n(2),i("20px"),o("center")):(n(1),i("12px"),o("center"))},[t.length]);D.exports.useEffect(()=>(a(D0()),l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)),[a,l]);const u=t.slice(0,e);return S(wn,{children:K(hf,{children:[S("div",{className:"title",children:S("h1",{children:"OOTD"})}),S("div",{className:"contents",children:u.length>0?S(KA,{options:{type:"loop",perPage:e,gap:r,focus:s,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!1,pauseOnFocus:!1,rewind:!1,speed:2}},extensions:{AutoScroll:s2},children:u.map(c=>S(qA,{children:K(XA,{children:[S("div",{className:"top",children:S(kn,{to:`board/details/${c.id}`,children:S("img",{src:c.photo,alt:"board"})})}),K("div",{className:"bottom",children:[S("p",{children:c.title}),S("p",{children:c.nickname}),S("p",{children:c.desc.length>60?c.desc.slice(0,50)+"...":c.desc})]})]})},c.id))}):S("div",{className:"no-boards",children:"No Boards available && Loading.."})})]})})},KU=()=>S(wn,{children:S(hf,{children:S("div",{className:"title",children:S("h1",{children:"\uCD5C\uC2E0 QnA"})})})}),qU=Ko(h0,"picture_photos"),QU=async t=>{const e=Ko(qU,t.name);return await u0(e,t),await c0(e)},o2=tr("photos/add",async(t,{rejectWithValue:e})=>{try{if(!t)throw new Error("photoData is Not Fount");const{category:n,title:r,desc:i,photo:s,nickname:o}=t,a=await QU(s);return{id:(await r0(Go(rr,"photos"),{category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()})).id,category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()}}catch(n){return console.error(n),e("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),a2=tr("photos/get",async()=>(await n0(Go(rr,"photos"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;return{id:n.id,...s}})),XU=Lo({name:"photo",initialState:{photos:[],postCount:0},reducers:{},extraReducers:t=>{t.addCase(o2.fulfilled,(e,n)=>{const r=n.payload;return{...e,photos:[...e.photos,r],postCount:e.postCount+1}}).addCase(a2.fulfilled,(e,n)=>({...e,photos:n.payload,postCount:n.payload.length}))}});var YU=XU.reducer;const JU=()=>{const t=On(c=>c.photo.photos),[e,n]=D.exports.useState(t.length),[r,i]=D.exports.useState("12px"),[s,o]=D.exports.useState("left"),a=xi(),l=D.exports.useCallback(()=>{window.innerWidth>=1280?(n(t.length),i("12px"),o("left")):window.innerWidth>=1024?(n(t.length),i("14px"),o("left")):window.innerWidth>=768?(n(3),i("16px"),o("center")):window.innerWidth>=564?(n(2),i("20px"),o("center")):(n(1),i("12px"),o("center"))},[t.length]);D.exports.useEffect(()=>(a(a2()),l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)),[a,l]);const u=t.slice(0,e);return S(wn,{children:K(hf,{children:[S("div",{className:"title",children:S("h1",{children:"Photos"})}),S("div",{className:"contents",children:u.length>0?S(KA,{options:{type:"loop",perPage:e,gap:r,focus:s,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!1,pauseOnFocus:!1,rewind:!1,speed:1.5}},extensions:{AutoScroll:s2},children:u.map(c=>S(qA,{children:K(XA,{children:[S("div",{className:"top",children:S(kn,{to:`photo/details/${c.id}`,children:S("img",{src:c.photo,alt:"photo"})})}),K("div",{className:"bottom",children:[S("p",{children:c.category}),S("p",{children:c.title}),S("p",{children:c.nickname}),S("p",{children:c.desc.length>60?c.desc.slice(0,50)+"...":c.desc})]})]})},c.id))}):S("div",{className:"no-photos",children:"No photos available && Loading.."})})]})})},ZU=wt.main`
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
`;var e8="/modart/assets/main.eb927103.gif";const t8=()=>S(wn,{children:S(ZU,{children:S("div",{className:"main_image",children:S("img",{src:e8,alt:"mainImg.."})})})}),n8=()=>K(ll,{children:[S(t8,{}),S(GU,{}),S(JU,{}),S(KU,{})]}),r8=wt.div`
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
`,i8=()=>{const{nickname:t,email:e}=On(r=>r.login.user),n=On(r=>r.board.postCount);return console.log(n),S(wn,{children:S(r8,{children:K("div",{className:"contents",children:[K("div",{className:"users",children:[K("div",{className:"user_detail",children:[S("div",{className:"user_thumb",children:S("img",{src:"",alt:""})}),S("div",{className:"user_info",children:K("div",{className:"info_box",children:[S("strong",{className:"name",children:t}),S("p",{className:"email",children:e}),S(kn,{to:"/",children:"\uD504\uB85C\uD544 \uC218\uC815"})]})})]}),K("div",{className:"board_detail",children:[K(kn,{to:"/",className:"board_item",children:[S("strong",{className:"info",children:"\uAC8C\uC2DC\uAE00"}),S("p",{className:"title",children:"2 (\uAC1C)"})]}),K(kn,{to:"/",className:"board_item",children:[S("strong",{className:"info",children:"2100P"}),S("p",{className:"title",children:"\uD3EC\uC778\uD2B8"})]})]})]}),S("div",{className:"items"}),S("div",{className:"items"})]})})})},Ag=tr("auth/signUp",async t=>{try{const{email:e,password:n,nickname:r}=t,s=(await v$(fs,e,n)).user;return await b5(cu(rr,"users",s.uid),{uid:s.uid,nickname:r,email:e}),{uid:s.uid,email:e,nickname:r}}catch(e){throw e}}),s8=Lo({name:"auth",initialState:null,extraReducers:t=>{t.addCase(Ag.fulfilled,(e,n)=>{const{uid:r,email:i,nickname:s}=n.payload;return{...e,uid:r,email:i,nickname:s}}),t.addCase(Ag.rejected,(e,n)=>n.error.message)}});var o8=s8.reducer;function a8(t){return Ni({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(t)}function l8(t){return Ni({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(t)}const u8=({text:t})=>S(SU,{children:S("p",{children:t})}),l2=({text:t,link:e})=>{const[n,r]=D.exports.useState({});D.exports.useState({});const[i,s]=D.exports.useState(!1),[o,a]=D.exports.useState(""),l=xi(),u=ys(),c=p=>{r({...n,[p.target.name]:p.target.value})};return K(_U,{children:[K("div",{className:"left",children:[S("div",{className:"toggle",onClick:()=>u("/"),children:S(a8,{})}),K("div",{className:"textbox",children:[S("strong",{className:"title",children:"ModArt"}),S("span",{children:"< \uBAA8\uB4DC\uC544\uD2B8 />"})]})]}),K("div",{className:"right",children:[i&&S(u8,{text:o}),S("form",{onSubmit:async p=>{if(p.preventDefault(),Object.values(n).every(v=>v!=="")){if(t==="\uD68C\uC6D0\uAC00\uC785")try{await l(Ag(n)).unwrap(),a("\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC131\uACF5\uD558\uC600\uC2B5\uB2C8\uB2E4."),s(!0),u("/account/login")}catch{a("\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."),s(!0),setTimeout(()=>{s(!1)},2e3)}else if(t==="\uB85C\uADF8\uC778")try{if(!await l(gg(n)).unwrap()){a("\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC720\uC800\uC785\uB2C8\uB2E4."),s(!0),setTimeout(()=>{s(!1)},2e3);return}u("/")}catch{a("\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),s(!0),setTimeout(()=>{s(!1)},2e3)}}},children:t==="\uD68C\uC6D0\uAC00\uC785"?K(ll,{children:[K("div",{className:"area",children:[S(ca,{type:"email",name:"email",onChange:c,autoComplete:"off"}),S("label",{htmlFor:"email",children:"Email"})]}),K("div",{className:"area",children:[S(ca,{type:"password",name:"password",onChange:c,autoComplete:"off"}),S("label",{htmlFor:"password",children:"Password"})]}),K("div",{className:"area",children:[S(ca,{type:"text",name:"nickname",onChange:c,autoComplete:"off"}),S("label",{htmlFor:"nickname",children:"\uB2C9\uB124\uC784"})]}),S(xp,{type:"submit",children:t})]}):K(ll,{children:[K("div",{className:"area",children:[S(ca,{type:"email",name:"email",onChange:c}),S("label",{htmlFor:"email",children:"email"})]}),K("div",{className:"area",children:[S(ca,{type:"password",name:"password",onChange:c}),S("label",{htmlFor:"password",children:"Password"})]}),S(xp,{type:"submit",children:t})]})}),S("div",{className:"socialLogin",children:K(xp,{className:"googleLogin",onClick:async()=>{try{await l(mg()).unwrap(),a("\uAD6C\uAE00\uACC4\uC815 \uB85C\uADF8\uC778 \uB418\uC168\uC2B5\uB2C8\uB2E4."),u("/")}catch(p){a(p.message)}},children:[S("div",{className:"googleIcon",children:S(l8,{})}),S("p",{className:"googleText",children:"Sign In With Google"})]})}),S("div",{className:"signUp_link",children:S(kn,{to:`/account/${e==="\uD68C\uC6D0\uAC00\uC785"?"signup":"login"}`,children:e})})]})]})},u2=wt.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 0 16px;
    }
`,c8=()=>S(u2,{children:S(l2,{text:"\uD68C\uC6D0\uAC00\uC785",link:"\uB85C\uADF8\uC778"})}),h8=()=>S(u2,{children:S(l2,{text:"\uB85C\uADF8\uC778",link:"\uD68C\uC6D0\uAC00\uC785"})}),d8=()=>{const t=On(u=>u.login.user),e=t==null?void 0:t.nickname,n=D.exports.useRef(),[r,i]=D.exports.useState({}),s=xi(),o=ys(),a=u=>{u.target.name==="photo"?i({...r,[u.target.name]:u.target.files[0]}):i({...r,[u.target.name]:u.target.value})};return D.exports.useEffect(()=>{n.current.focus()},[n]),S(wn,{children:S(O0,{children:K("form",{onSubmit:async u=>{u.preventDefault();try{const c={...r,nickname:e};await s(QA(c)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),o("/"),console.log(r)}catch(c){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(c)}},encType:"multipart/form-data",children:[S("p",{className:"nickname",children:e}),S("input",{ref:n,type:"text",onChange:a,autoComplete:"off",name:"title",placeholder:"\uAE00\uC81C\uBAA9"}),S("input",{type:"text",onChange:a,autoComplete:"off",name:"brand",placeholder:"\uBE0C\uB79C\uB4DC\uBA85 ex) \uB098\uC774\uD0A4"}),S("input",{type:"text",onChange:a,autoComplete:"off",name:"height",placeholder:"\uD0A4"}),S("input",{type:"text",onChange:a,autoComplete:"off",name:"weight",placeholder:"\uBAB8\uBB34\uAC8C"}),S("textarea",{type:"text",name:"desc",onChange:a,placeholder:"contents.."}),K("label",{htmlFor:"photo",children:[S(cA,{}),S("input",{type:"file",name:"photo",onChange:a})]}),S("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})})})},T_=()=>(kv(),S(wn,{children:S(O0,{children:S("form",{children:S("p",{className:"nickname"})})})})),f8=()=>{const{id:t}=kv(),e=On(i=>i.board.boards),n=xi(),r=e.find(i=>i.id===t);return D.exports.useEffect(()=>{n(D0())},[n]),D.exports.useEffect(()=>{const i=e.find(s=>s.id===t);console.log(i)},[e,t]),S(wn,{children:S(YA,{children:r&&K(ll,{children:[S("div",{className:"snapImg",children:S("img",{src:r.photo,alt:r.nickname})}),K("div",{className:"snapInfo",children:[S("div",{className:"title",children:K("p",{children:["Information ",S("span",{children:"\uC2A4\uD0C0\uC77C \uC815\uBCF4"})]})}),K("li",{className:"tr",children:[S("span",{className:"th",children:"Nickname"}),S("span",{className:"td",children:r.nickname})]}),K("li",{className:"tr",children:[S("span",{className:"th",children:"Brand"}),S("span",{className:"td",children:r.brand})]}),K("li",{className:"tr",children:[S("span",{className:"th",children:"Title"}),S("span",{className:"td",children:r.title})]}),K("li",{className:"tr",children:[S("span",{className:"th",children:"Body"}),K("span",{className:"td",style:{marginRight:"6px"},children:["\uD0A4 ",r.height]}),K("span",{className:"td",children:["\uBAB8\uBB34\uAC8C ",r.weight]})]}),K("li",{className:"tr",children:[S("span",{className:"th",children:"Contents"}),S("span",{className:"td",children:r.desc})]}),K("li",{className:"tr",children:[S("span",{className:"th",children:"Like"}),S("span",{className:"td",children:S(uA,{})})]})]})]})})})},p8=wt.div`
    margin: auto;
    width: 100%;
    margin-top: 12px;
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
                color: #FEFEFE;
                font-size: clamp(20px, 2.5vw, 26px);
            }

            span {
                color: #FEFEFE;
                font-weight: 600;
                font-size: clamp(18px, 2vw, 20px);
            }

            .link-btn {
                margin-top: 20px;
                background: #181818;
                border-radius: 4px;
                color: #FEFEFE;
                padding: 12px 20px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.16);
            }
        }

        .image {
            width: 100%;

            svg {
                width: 100%;
                height: 100%;
                color: #FEFEFE;
            }
        }
    }
`,m8=()=>{const t=On(r=>r.login.user),e=ys();return K(wn,{children:[S(p8,{children:K("div",{className:"contents",children:[K("div",{className:"text",children:[S("p",{children:"Free PhotoZone"}),S("span",{children:"\uC790\uC2E0\uC758 \uC0AC\uC9C4\uC2E4\uB825\uC744 \uBF50\uB0B4\uC8FC\uC138\uC694!"}),S("button",{className:"link-btn",onClick:()=>t?e("/photo/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),S("div",{className:"image",children:S(tF,{})})]})}),S(hf,{})]})},g8=()=>{const[t,e]=D.exports.useState({}),[n,r]=D.exports.useState([]),i=On(c=>c.login.user),s=i==null?void 0:i.nickname;D.exports.useRef();const o=xi(),a=ys(),l=c=>{if(c.target.name==="photo")e({...t,[c.target.name]:c.target.files[0]});else if(c.target.name==="category"){const{value:h,checked:d}=c.target;r(d?[...n,h]:n.filter(p=>p!==h))}else e({...t,[c.target.name]:c.target.value})};return S(wn,{children:S(O0,{children:K("form",{encType:"multipart/form-data",onSubmit:async c=>{c.preventDefault();try{const h={...t,nickname:s,category:n};await o(o2(h)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),a(-1),console.log(t)}catch(h){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(h)}},children:[S("p",{className:"nickname",children:s}),K("div",{className:"category-wrap",children:[K("label",{children:[S("input",{type:"checkbox",name:"category",value:"\uC790\uC5F0",onChange:l}),"\uC790\uC5F0"]}),K("label",{children:[S("input",{type:"checkbox",name:"category",value:"\uC778\uBB3C",onChange:l}),"\uC778\uBB3C"]}),K("label",{children:[S("input",{type:"checkbox",name:"category",value:"\uD48D\uACBD",onChange:l}),"\uD48D\uACBD"]}),K("label",{children:[S("input",{type:"checkbox",name:"category",value:"\uC77C\uC0C1",onChange:l}),"\uC77C\uC0C1"]})]}),S("input",{type:"text",placeholder:"\uC81C\uBAA9",name:"title",onChange:l}),S("input",{type:"text",placeholder:"\uC124\uBA85",name:"desc",onChange:l}),K("label",{htmlFor:"photo",children:[S(cA,{}),S("input",{type:"file",name:"photo",onChange:l})]}),S("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})})})},v8=wt.div`
  background: rgb(49, 53, 51);
  margin: auto;
  margin-top: 12px;
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
        box-shadow: 0 2px 4px rgba(0,0,0,0.16);
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
`,y8=()=>{const t=On(r=>r.login.user),e=ys();return S(wn,{children:S(v8,{children:K("div",{className:"contents",children:[K("div",{className:"text",children:[S("p",{children:"OOTD of the day"}),S("span",{children:"\uC790\uC2E0\uC758 OOTD\uB97C \uACF5\uC720 \uD574\uC8FC\uC138\uC694!"}),S("button",{className:"link-btn",onClick:()=>t?e("/board/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),S("div",{className:"image",children:S(nF,{})})]})})})},w8=Ko(h0,"picture_photos"),E8=async t=>{const e=Ko(w8,t.name);return await u0(e,t),await c0(e)},_8=tr("photos/add",async(t,{rejectWithValue:e})=>{try{if(!t)throw new Error("photoData is Not Fount");const{category:n,title:r,desc:i,photo:s,nickname:o}=t,a=await E8(s);return{id:(await r0(Go(rr,"photos"),{category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()})).id,category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()}}catch(n){return console.error(n),e("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),c2=tr("photos/get",async()=>(await n0(Go(rr,"photos"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;return{id:n.id,...s}}));Lo({name:"photo",initialState:{photos:[],postCount:0},reducers:{},extraReducers:t=>{t.addCase(_8.fulfilled,(e,n)=>{const r=n.payload;return{...e,photos:[...e.photos,r],postCount:e.postCount+1}}).addCase(c2.fulfilled,(e,n)=>({...e,photos:n.payload,postCount:n.payload.length}))}});const S8=()=>{const{id:t}=kv(),e=On(i=>i.photo.photos),n=xi(),r=e.find(i=>i.id===t);return console.log(r),D.exports.useEffect(()=>{n(c2())},[n]),S(wn,{children:S(YA,{children:r&&K(ll,{children:[S("div",{className:"snapImg",children:S("img",{src:r.photo,alt:r.nickname})}),K("div",{className:"snapInfo",children:[S("div",{className:"title",children:K("p",{children:["Information ",S("span",{children:"\uC0AC\uC9C4 \uC815\uBCF4"})]})}),K("li",{className:"tr",children:[S("span",{className:"th",children:"Nickname"}),S("span",{className:"td",children:r.nickname})]}),K("li",{className:"tr",children:[S("span",{className:"th",children:"Category"}),S("span",{className:"td",children:r.category})]}),K("li",{className:"tr",children:[S("span",{className:"th",children:"Title"}),S("span",{className:"td",children:r.title})]}),K("li",{className:"tr",children:[S("span",{className:"th",children:"Contents"}),S("span",{className:"td",children:r.desc})]}),K("li",{className:"tr",children:[S("span",{className:"th",children:"Like"}),S("span",{className:"td",children:S(uA,{})})]})]})]})})})};function C8(){return S(TD,{children:K(SP,{basename:"modart",children:[S(CD,{}),S(sF,{}),K(vP,{children:[S(Kt,{path:"/",element:S(n8,{})}),S(Kt,{path:"/account",element:S(i8,{})}),S(Kt,{path:"/account/signup",element:S(c8,{})}),S(Kt,{path:"/account/login",element:S(h8,{})}),S(Kt,{path:"/board",element:S(y8,{})}),S(Kt,{path:"/board/write",element:S(d8,{})}),S(Kt,{path:"/board/:id",element:S(T_,{})}),S(Kt,{path:"/photo",element:S(m8,{})}),S(Kt,{path:"/photo/write",element:S(g8,{})}),S(Kt,{path:"/photo/:id",element:S(T_,{})}),S(Kt,{path:"/board/details/:id",element:S(f8,{})}),S(Kt,{path:"/photo/details/:id",element:S(S8,{})})]})]})})}const T8=Lo({name:"users",initialState:{currentUser:null,postCount:0},reducers:{setCurrentUser:(t,e)=>{t.currentUser=e.payload,t.postCount=e.payload?e.payload.postCount:0},incrementPostCount:t=>{t.postCount+=1}}});var I8=T8.reducer;const h2=VO({reducer:{auth:o8,login:Y9,users:I8,board:vU,photo:YU}});h2.dispatch(q9());Ap.createRoot(document.getElementById("root")).render(S(oO,{store:h2,children:S(C8,{})}));
