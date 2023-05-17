const dA=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};dA();var D={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ol=Symbol.for("react.element"),fA=Symbol.for("react.portal"),pA=Symbol.for("react.fragment"),mA=Symbol.for("react.strict_mode"),gA=Symbol.for("react.profiler"),vA=Symbol.for("react.provider"),yA=Symbol.for("react.context"),wA=Symbol.for("react.forward_ref"),EA=Symbol.for("react.suspense"),CA=Symbol.for("react.memo"),_A=Symbol.for("react.lazy"),F0=Symbol.iterator;function SA(t){return t===null||typeof t!="object"?null:(t=F0&&t[F0]||t["@@iterator"],typeof t=="function"?t:null)}var kC={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},IC=Object.assign,xC={};function Po(t,e,n){this.props=t,this.context=e,this.refs=xC,this.updater=n||kC}Po.prototype.isReactComponent={};Po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function AC(){}AC.prototype=Po.prototype;function bg(t,e,n){this.props=t,this.context=e,this.refs=xC,this.updater=n||kC}var Og=bg.prototype=new AC;Og.constructor=bg;IC(Og,Po.prototype);Og.isPureReactComponent=!0;var U0=Array.isArray,NC=Object.prototype.hasOwnProperty,$g={current:null},RC={key:!0,ref:!0,__self:!0,__source:!0};function DC(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)NC.call(e,r)&&!RC.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ol,type:t,key:s,ref:o,props:i,_owner:$g.current}}function TA(t,e){return{$$typeof:Ol,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ol}function kA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var B0=/\/+/g;function Ef(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kA(""+t.key):e.toString(36)}function tc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ol:case fA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ef(o,0):r,U0(i)?(n="",t!=null&&(n=t.replace(B0,"$&/")+"/"),tc(i,e,n,"",function(u){return u})):i!=null&&(Lg(i)&&(i=TA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(B0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",U0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ef(s,a);o+=tc(s,e,n,l,i)}else if(l=SA(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ef(s,a++),o+=tc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _u(t,e,n){if(t==null)return t;var r=[],i=0;return tc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function IA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var zt={current:null},nc={transition:null},xA={ReactCurrentDispatcher:zt,ReactCurrentBatchConfig:nc,ReactCurrentOwner:$g};ge.Children={map:_u,forEach:function(t,e,n){_u(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _u(t,function(){e++}),e},toArray:function(t){return _u(t,function(e){return e})||[]},only:function(t){if(!Lg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ge.Component=Po;ge.Fragment=pA;ge.Profiler=gA;ge.PureComponent=bg;ge.StrictMode=mA;ge.Suspense=EA;ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xA;ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=IC({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$g.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)NC.call(e,l)&&!RC.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ol,type:t.type,key:i,ref:s,props:r,_owner:o}};ge.createContext=function(t){return t={$$typeof:yA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vA,_context:t},t.Consumer=t};ge.createElement=DC;ge.createFactory=function(t){var e=DC.bind(null,t);return e.type=t,e};ge.createRef=function(){return{current:null}};ge.forwardRef=function(t){return{$$typeof:wA,render:t}};ge.isValidElement=Lg;ge.lazy=function(t){return{$$typeof:_A,_payload:{_status:-1,_result:t},_init:IA}};ge.memo=function(t,e){return{$$typeof:CA,type:t,compare:e===void 0?null:e}};ge.startTransition=function(t){var e=nc.transition;nc.transition={};try{t()}finally{nc.transition=e}};ge.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ge.useCallback=function(t,e){return zt.current.useCallback(t,e)};ge.useContext=function(t){return zt.current.useContext(t)};ge.useDebugValue=function(){};ge.useDeferredValue=function(t){return zt.current.useDeferredValue(t)};ge.useEffect=function(t,e){return zt.current.useEffect(t,e)};ge.useId=function(){return zt.current.useId()};ge.useImperativeHandle=function(t,e,n){return zt.current.useImperativeHandle(t,e,n)};ge.useInsertionEffect=function(t,e){return zt.current.useInsertionEffect(t,e)};ge.useLayoutEffect=function(t,e){return zt.current.useLayoutEffect(t,e)};ge.useMemo=function(t,e){return zt.current.useMemo(t,e)};ge.useReducer=function(t,e,n){return zt.current.useReducer(t,e,n)};ge.useRef=function(t){return zt.current.useRef(t)};ge.useState=function(t){return zt.current.useState(t)};ge.useSyncExternalStore=function(t,e,n){return zt.current.useSyncExternalStore(t,e,n)};ge.useTransition=function(){return zt.current.useTransition()};ge.version="18.2.0";D.exports=ge;var ot=D.exports,Pp={},Mg={exports:{}},sn={},PC={exports:{}},bC={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,O){var A=x.length;x.push(O);e:for(;0<A;){var j=A-1>>>1,N=x[j];if(0<i(N,O))x[j]=O,x[A]=N,A=j;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var O=x[0],A=x.pop();if(A!==O){x[0]=A;e:for(var j=0,N=x.length,R=N>>>1;j<R;){var F=2*(j+1)-1,J=x[F],_=F+1,Q=x[_];if(0>i(J,A))_<N&&0>i(Q,J)?(x[j]=Q,x[_]=A,j=_):(x[j]=J,x[F]=A,j=F);else if(_<N&&0>i(Q,A))x[j]=Q,x[_]=A,j=_;else break e}}return O}function i(x,O){var A=x.sortIndex-O.sortIndex;return A!==0?A:x.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,m=!1,g=!1,E=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(x){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=x)r(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function C(x){if(g=!1,y(x),!m)if(n(l)!==null)m=!0,pe(S);else{var O=n(u);O!==null&&le(C,O.startTime-x)}}function S(x,O){m=!1,g&&(g=!1,v(k),k=-1),p=!0;var A=d;try{for(y(O),h=n(l);h!==null&&(!(h.expirationTime>O)||x&&!$());){var j=h.callback;if(typeof j=="function"){h.callback=null,d=h.priorityLevel;var N=j(h.expirationTime<=O);O=t.unstable_now(),typeof N=="function"?h.callback=N:h===n(l)&&r(l),y(O)}else r(l);h=n(l)}if(h!==null)var R=!0;else{var F=n(u);F!==null&&le(C,F.startTime-O),R=!1}return R}finally{h=null,d=A,p=!1}}var I=!1,T=null,k=-1,V=5,P=-1;function $(){return!(t.unstable_now()-P<V)}function z(){if(T!==null){var x=t.unstable_now();P=x;var O=!0;try{O=T(!0,x)}finally{O?H():(I=!1,T=null)}}else I=!1}var H;if(typeof f=="function")H=function(){f(z)};else if(typeof MessageChannel!="undefined"){var Y=new MessageChannel,q=Y.port2;Y.port1.onmessage=z,H=function(){q.postMessage(null)}}else H=function(){E(z,0)};function pe(x){T=x,I||(I=!0,H())}function le(x,O){k=E(function(){x(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,pe(S))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var A=d;d=O;try{return x()}finally{d=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,O){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var A=d;d=x;try{return O()}finally{d=A}},t.unstable_scheduleCallback=function(x,O,A){var j=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?j+A:j):A=j,x){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=A+N,x={id:c++,callback:O,priorityLevel:x,startTime:A,expirationTime:N,sortIndex:-1},A>j?(x.sortIndex=A,e(u,x),n(l)===null&&x===n(u)&&(g?(v(k),k=-1):g=!0,le(C,A-j))):(x.sortIndex=N,e(l,x),m||p||(m=!0,pe(S))),x},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(x){var O=d;return function(){var A=d;d=O;try{return x.apply(this,arguments)}finally{d=A}}}})(bC);PC.exports=bC;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OC=D.exports,tn=PC.exports;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $C=new Set,Va={};function vs(t,e){co(t,e),co(t+"Capture",e)}function co(t,e){for(Va[t]=e,t=0;t<e.length;t++)$C.add(e[t])}var _r=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),bp=Object.prototype.hasOwnProperty,AA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z0={},V0={};function NA(t){return bp.call(V0,t)?!0:bp.call(z0,t)?!1:AA.test(t)?V0[t]=!0:(z0[t]=!0,!1)}function RA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DA(t,e,n,r){if(e===null||typeof e=="undefined"||RA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fg=/[\-:]([a-z])/g;function Ug(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fg,Ug);Et[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fg,Ug);Et[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fg,Ug);Et[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bg(t,e,n,r){var i=Et.hasOwnProperty(e)?Et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DA(e,n,i,r)&&(n=null),r||i===null?NA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Or=OC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Su=Symbol.for("react.element"),bs=Symbol.for("react.portal"),Os=Symbol.for("react.fragment"),zg=Symbol.for("react.strict_mode"),Op=Symbol.for("react.profiler"),LC=Symbol.for("react.provider"),MC=Symbol.for("react.context"),Vg=Symbol.for("react.forward_ref"),$p=Symbol.for("react.suspense"),Lp=Symbol.for("react.suspense_list"),jg=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),FC=Symbol.for("react.offscreen"),j0=Symbol.iterator;function Zo(t){return t===null||typeof t!="object"?null:(t=j0&&t[j0]||t["@@iterator"],typeof t=="function"?t:null)}var Fe=Object.assign,Cf;function ha(t){if(Cf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cf=e&&e[1]||""}return`
`+Cf+t}var _f=!1;function Sf(t,e){if(!t||_f)return"";_f=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_f=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ha(t):""}function PA(t){switch(t.tag){case 5:return ha(t.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 2:case 15:return t=Sf(t.type,!1),t;case 11:return t=Sf(t.type.render,!1),t;case 1:return t=Sf(t.type,!0),t;default:return""}}function Mp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Os:return"Fragment";case bs:return"Portal";case Op:return"Profiler";case zg:return"StrictMode";case $p:return"Suspense";case Lp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case MC:return(t.displayName||"Context")+".Consumer";case LC:return(t._context.displayName||"Context")+".Provider";case Vg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jg:return e=t.displayName||null,e!==null?e:Mp(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return Mp(t(e))}catch{}}return null}function bA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mp(e);case 8:return e===zg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function UC(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function OA(t){var e=UC(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tu(t){t._valueTracker||(t._valueTracker=OA(t))}function BC(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=UC(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ic(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fp(t,e){var n=e.checked;return Fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function H0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zC(t,e){e=e.checked,e!=null&&Bg(t,"checked",e,!1)}function Up(t,e){zC(t,e);var n=pi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bp(t,e.type,pi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function W0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bp(t,e,n){(e!=="number"||Ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var da=Array.isArray;function qs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function G0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(da(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pi(n)}}function VC(t,e){var n=pi(e.value),r=pi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function K0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jC(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jC(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ku,HC=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ku=ku||document.createElement("div"),ku.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ku.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ja(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$A=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(t){$A.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Sa[e]=Sa[t]})});function WC(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Sa.hasOwnProperty(t)&&Sa[t]?(""+e).trim():e+"px"}function GC(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=WC(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var LA=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jp(t,e){if(e){if(LA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Hp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wp=null;function Hg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gp=null,Qs=null,Xs=null;function q0(t){if(t=Ml(t)){if(typeof Gp!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Vh(e),Gp(t.stateNode,t.type,e))}}function KC(t){Qs?Xs?Xs.push(t):Xs=[t]:Qs=t}function qC(){if(Qs){var t=Qs,e=Xs;if(Xs=Qs=null,q0(t),e)for(t=0;t<e.length;t++)q0(e[t])}}function QC(t,e){return t(e)}function XC(){}var Tf=!1;function YC(t,e,n){if(Tf)return t(e,n);Tf=!0;try{return QC(t,e,n)}finally{Tf=!1,(Qs!==null||Xs!==null)&&(XC(),qC())}}function Ha(t,e){var n=t.stateNode;if(n===null)return null;var r=Vh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var Kp=!1;if(_r)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){Kp=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{Kp=!1}function MA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ta=!1,xc=null,Ac=!1,qp=null,FA={onError:function(t){Ta=!0,xc=t}};function UA(t,e,n,r,i,s,o,a,l){Ta=!1,xc=null,MA.apply(FA,arguments)}function BA(t,e,n,r,i,s,o,a,l){if(UA.apply(this,arguments),Ta){if(Ta){var u=xc;Ta=!1,xc=null}else throw Error(M(198));Ac||(Ac=!0,qp=u)}}function ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function JC(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Q0(t){if(ys(t)!==t)throw Error(M(188))}function zA(t){var e=t.alternate;if(!e){if(e=ys(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Q0(i),t;if(s===r)return Q0(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function ZC(t){return t=zA(t),t!==null?e_(t):null}function e_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=e_(t);if(e!==null)return e;t=t.sibling}return null}var t_=tn.unstable_scheduleCallback,X0=tn.unstable_cancelCallback,VA=tn.unstable_shouldYield,jA=tn.unstable_requestPaint,qe=tn.unstable_now,HA=tn.unstable_getCurrentPriorityLevel,Wg=tn.unstable_ImmediatePriority,n_=tn.unstable_UserBlockingPriority,Nc=tn.unstable_NormalPriority,WA=tn.unstable_LowPriority,r_=tn.unstable_IdlePriority,Fh=null,Hn=null;function GA(t){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(Fh,t,void 0,(t.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:QA,KA=Math.log,qA=Math.LN2;function QA(t){return t>>>=0,t===0?32:31-(KA(t)/qA|0)|0}var Iu=64,xu=4194304;function fa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=fa(a):(s&=o,s!==0&&(r=fa(s)))}else o=n&~i,o!==0?r=fa(o):s!==0&&(r=fa(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Rn(e),i=1<<n,r|=t[n],e&=~i;return r}function XA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Rn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=XA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Qp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function i_(){var t=Iu;return Iu<<=1,(Iu&4194240)===0&&(Iu=64),t}function kf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $l(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Rn(e),t[e]=n}function JA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Se=0;function s_(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var o_,Kg,a_,l_,u_,Xp=!1,Au=[],Jr=null,Zr=null,ei=null,Wa=new Map,Ga=new Map,Br=[],ZA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Y0(t,e){switch(t){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":ei=null;break;case"pointerover":case"pointerout":Wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(e.pointerId)}}function ta(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ml(e),e!==null&&Kg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function eN(t,e,n,r,i){switch(e){case"focusin":return Jr=ta(Jr,t,e,n,r,i),!0;case"dragenter":return Zr=ta(Zr,t,e,n,r,i),!0;case"mouseover":return ei=ta(ei,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wa.set(s,ta(Wa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ga.set(s,ta(Ga.get(s)||null,t,e,n,r,i)),!0}return!1}function c_(t){var e=Bi(t.target);if(e!==null){var n=ys(e);if(n!==null){if(e=n.tag,e===13){if(e=JC(n),e!==null){t.blockedOn=e,u_(t.priority,function(){a_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wp=r,n.target.dispatchEvent(r),Wp=null}else return e=Ml(n),e!==null&&Kg(e),t.blockedOn=n,!1;e.shift()}return!0}function J0(t,e,n){rc(t)&&n.delete(e)}function tN(){Xp=!1,Jr!==null&&rc(Jr)&&(Jr=null),Zr!==null&&rc(Zr)&&(Zr=null),ei!==null&&rc(ei)&&(ei=null),Wa.forEach(J0),Ga.forEach(J0)}function na(t,e){t.blockedOn===e&&(t.blockedOn=null,Xp||(Xp=!0,tn.unstable_scheduleCallback(tn.unstable_NormalPriority,tN)))}function Ka(t){function e(i){return na(i,t)}if(0<Au.length){na(Au[0],t);for(var n=1;n<Au.length;n++){var r=Au[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jr!==null&&na(Jr,t),Zr!==null&&na(Zr,t),ei!==null&&na(ei,t),Wa.forEach(e),Ga.forEach(e),n=0;n<Br.length;n++)r=Br[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Br.length&&(n=Br[0],n.blockedOn===null);)c_(n),n.blockedOn===null&&Br.shift()}var Ys=Or.ReactCurrentBatchConfig,Dc=!0;function nN(t,e,n,r){var i=Se,s=Ys.transition;Ys.transition=null;try{Se=1,qg(t,e,n,r)}finally{Se=i,Ys.transition=s}}function rN(t,e,n,r){var i=Se,s=Ys.transition;Ys.transition=null;try{Se=4,qg(t,e,n,r)}finally{Se=i,Ys.transition=s}}function qg(t,e,n,r){if(Dc){var i=Yp(t,e,n,r);if(i===null)$f(t,e,r,Pc,n),Y0(t,r);else if(eN(i,t,e,n,r))r.stopPropagation();else if(Y0(t,r),e&4&&-1<ZA.indexOf(t)){for(;i!==null;){var s=Ml(i);if(s!==null&&o_(s),s=Yp(t,e,n,r),s===null&&$f(t,e,r,Pc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $f(t,e,r,null,n)}}var Pc=null;function Yp(t,e,n,r){if(Pc=null,t=Hg(r),t=Bi(t),t!==null)if(e=ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=JC(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pc=t,null}function h_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(HA()){case Wg:return 1;case n_:return 4;case Nc:case WA:return 16;case r_:return 536870912;default:return 16}default:return 16}}var Kr=null,Qg=null,ic=null;function d_(){if(ic)return ic;var t,e=Qg,n=e.length,r,i="value"in Kr?Kr.value:Kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ic=i.slice(t,1<r?1-r:void 0)}function sc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nu(){return!0}function Z0(){return!1}function on(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Nu:Z0,this.isPropagationStopped=Z0,this}return Fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nu)},persist:function(){},isPersistent:Nu}),e}var bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xg=on(bo),Ll=Fe({},bo,{view:0,detail:0}),iN=on(Ll),If,xf,ra,Uh=Fe({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(If=t.screenX-ra.screenX,xf=t.screenY-ra.screenY):xf=If=0,ra=t),If)},movementY:function(t){return"movementY"in t?t.movementY:xf}}),e1=on(Uh),sN=Fe({},Uh,{dataTransfer:0}),oN=on(sN),aN=Fe({},Ll,{relatedTarget:0}),Af=on(aN),lN=Fe({},bo,{animationName:0,elapsedTime:0,pseudoElement:0}),uN=on(lN),cN=Fe({},bo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hN=on(cN),dN=Fe({},bo,{data:0}),t1=on(dN),fN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mN[t])?!!e[t]:!1}function Yg(){return gN}var vN=Fe({},Ll,{key:function(t){if(t.key){var e=fN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yg,charCode:function(t){return t.type==="keypress"?sc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yN=on(vN),wN=Fe({},Uh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),n1=on(wN),EN=Fe({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yg}),CN=on(EN),_N=Fe({},bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),SN=on(_N),TN=Fe({},Uh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kN=on(TN),IN=[9,13,27,32],Jg=_r&&"CompositionEvent"in window,ka=null;_r&&"documentMode"in document&&(ka=document.documentMode);var xN=_r&&"TextEvent"in window&&!ka,f_=_r&&(!Jg||ka&&8<ka&&11>=ka),r1=String.fromCharCode(32),i1=!1;function p_(t,e){switch(t){case"keyup":return IN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function m_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $s=!1;function AN(t,e){switch(t){case"compositionend":return m_(e);case"keypress":return e.which!==32?null:(i1=!0,r1);case"textInput":return t=e.data,t===r1&&i1?null:t;default:return null}}function NN(t,e){if($s)return t==="compositionend"||!Jg&&p_(t,e)?(t=d_(),ic=Qg=Kr=null,$s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return f_&&e.locale!=="ko"?null:e.data;default:return null}}var RN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function s1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RN[t.type]:e==="textarea"}function g_(t,e,n,r){KC(r),e=bc(e,"onChange"),0<e.length&&(n=new Xg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ia=null,qa=null;function DN(t){x_(t,0)}function Bh(t){var e=Fs(t);if(BC(e))return t}function PN(t,e){if(t==="change")return e}var v_=!1;if(_r){var Nf;if(_r){var Rf="oninput"in document;if(!Rf){var o1=document.createElement("div");o1.setAttribute("oninput","return;"),Rf=typeof o1.oninput=="function"}Nf=Rf}else Nf=!1;v_=Nf&&(!document.documentMode||9<document.documentMode)}function a1(){Ia&&(Ia.detachEvent("onpropertychange",y_),qa=Ia=null)}function y_(t){if(t.propertyName==="value"&&Bh(qa)){var e=[];g_(e,qa,t,Hg(t)),YC(DN,e)}}function bN(t,e,n){t==="focusin"?(a1(),Ia=e,qa=n,Ia.attachEvent("onpropertychange",y_)):t==="focusout"&&a1()}function ON(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bh(qa)}function $N(t,e){if(t==="click")return Bh(e)}function LN(t,e){if(t==="input"||t==="change")return Bh(e)}function MN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pn=typeof Object.is=="function"?Object.is:MN;function Qa(t,e){if(Pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bp.call(e,i)||!Pn(t[i],e[i]))return!1}return!0}function l1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function u1(t,e){var n=l1(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=l1(n)}}function w_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?w_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function E_(){for(var t=window,e=Ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ic(t.document)}return e}function Zg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function FN(t){var e=E_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&w_(n.ownerDocument.documentElement,n)){if(r!==null&&Zg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=u1(n,s);var o=u1(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var UN=_r&&"documentMode"in document&&11>=document.documentMode,Ls=null,Jp=null,xa=null,Zp=!1;function c1(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zp||Ls==null||Ls!==Ic(r)||(r=Ls,"selectionStart"in r&&Zg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xa&&Qa(xa,r)||(xa=r,r=bc(Jp,"onSelect"),0<r.length&&(e=new Xg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ls)))}function Ru(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:Ru("Animation","AnimationEnd"),animationiteration:Ru("Animation","AnimationIteration"),animationstart:Ru("Animation","AnimationStart"),transitionend:Ru("Transition","TransitionEnd")},Df={},C_={};_r&&(C_=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function zh(t){if(Df[t])return Df[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in C_)return Df[t]=e[n];return t}var __=zh("animationend"),S_=zh("animationiteration"),T_=zh("animationstart"),k_=zh("transitionend"),I_=new Map,h1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(t,e){I_.set(t,e),vs(e,[t])}for(var Pf=0;Pf<h1.length;Pf++){var bf=h1[Pf],BN=bf.toLowerCase(),zN=bf[0].toUpperCase()+bf.slice(1);ki(BN,"on"+zN)}ki(__,"onAnimationEnd");ki(S_,"onAnimationIteration");ki(T_,"onAnimationStart");ki("dblclick","onDoubleClick");ki("focusin","onFocus");ki("focusout","onBlur");ki(k_,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VN=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function d1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,BA(r,e,void 0,t),t.currentTarget=null}function x_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;d1(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;d1(i,a,u),s=l}}}if(Ac)throw t=qp,Ac=!1,qp=null,t}function Ne(t,e){var n=e[im];n===void 0&&(n=e[im]=new Set);var r=t+"__bubble";n.has(r)||(A_(e,t,2,!1),n.add(r))}function Of(t,e,n){var r=0;e&&(r|=4),A_(n,t,r,e)}var Du="_reactListening"+Math.random().toString(36).slice(2);function Xa(t){if(!t[Du]){t[Du]=!0,$C.forEach(function(n){n!=="selectionchange"&&(VN.has(n)||Of(n,!1,t),Of(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Du]||(e[Du]=!0,Of("selectionchange",!1,e))}}function A_(t,e,n,r){switch(h_(e)){case 1:var i=nN;break;case 4:i=rN;break;default:i=qg}n=i.bind(null,e,n,t),i=void 0,!Kp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $f(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Bi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}YC(function(){var u=s,c=Hg(n),h=[];e:{var d=I_.get(t);if(d!==void 0){var p=Xg,m=t;switch(t){case"keypress":if(sc(n)===0)break e;case"keydown":case"keyup":p=yN;break;case"focusin":m="focus",p=Af;break;case"focusout":m="blur",p=Af;break;case"beforeblur":case"afterblur":p=Af;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=e1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=oN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=CN;break;case __:case S_:case T_:p=uN;break;case k_:p=SN;break;case"scroll":p=iN;break;case"wheel":p=kN;break;case"copy":case"cut":case"paste":p=hN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=n1}var g=(e&4)!==0,E=!g&&t==="scroll",v=g?d!==null?d+"Capture":null:d;g=[];for(var f=u,y;f!==null;){y=f;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,v!==null&&(C=Ha(f,v),C!=null&&g.push(Ya(f,C,y)))),E)break;f=f.return}0<g.length&&(d=new p(d,m,null,n,c),h.push({event:d,listeners:g}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Wp&&(m=n.relatedTarget||n.fromElement)&&(Bi(m)||m[Sr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?Bi(m):null,m!==null&&(E=ys(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(g=e1,C="onMouseLeave",v="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(g=n1,C="onPointerLeave",v="onPointerEnter",f="pointer"),E=p==null?d:Fs(p),y=m==null?d:Fs(m),d=new g(C,f+"leave",p,n,c),d.target=E,d.relatedTarget=y,C=null,Bi(c)===u&&(g=new g(v,f+"enter",m,n,c),g.target=y,g.relatedTarget=E,C=g),E=C,p&&m)t:{for(g=p,v=m,f=0,y=g;y;y=xs(y))f++;for(y=0,C=v;C;C=xs(C))y++;for(;0<f-y;)g=xs(g),f--;for(;0<y-f;)v=xs(v),y--;for(;f--;){if(g===v||v!==null&&g===v.alternate)break t;g=xs(g),v=xs(v)}g=null}else g=null;p!==null&&f1(h,d,p,g,!1),m!==null&&E!==null&&f1(h,E,m,g,!0)}}e:{if(d=u?Fs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=PN;else if(s1(d))if(v_)S=LN;else{S=ON;var I=bN}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=$N);if(S&&(S=S(t,u))){g_(h,S,n,c);break e}I&&I(t,d,u),t==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&Bp(d,"number",d.value)}switch(I=u?Fs(u):window,t){case"focusin":(s1(I)||I.contentEditable==="true")&&(Ls=I,Jp=u,xa=null);break;case"focusout":xa=Jp=Ls=null;break;case"mousedown":Zp=!0;break;case"contextmenu":case"mouseup":case"dragend":Zp=!1,c1(h,n,c);break;case"selectionchange":if(UN)break;case"keydown":case"keyup":c1(h,n,c)}var T;if(Jg)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else $s?p_(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(f_&&n.locale!=="ko"&&($s||k!=="onCompositionStart"?k==="onCompositionEnd"&&$s&&(T=d_()):(Kr=c,Qg="value"in Kr?Kr.value:Kr.textContent,$s=!0)),I=bc(u,k),0<I.length&&(k=new t1(k,t,null,n,c),h.push({event:k,listeners:I}),T?k.data=T:(T=m_(n),T!==null&&(k.data=T)))),(T=xN?AN(t,n):NN(t,n))&&(u=bc(u,"onBeforeInput"),0<u.length&&(c=new t1("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=T))}x_(h,e)})}function Ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ha(t,n),s!=null&&r.unshift(Ya(t,s,i)),s=Ha(t,e),s!=null&&r.push(Ya(t,s,i))),t=t.return}return r}function xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function f1(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ha(n,s),l!=null&&o.unshift(Ya(n,l,a))):i||(l=Ha(n,s),l!=null&&o.push(Ya(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jN=/\r\n?/g,HN=/\u0000|\uFFFD/g;function p1(t){return(typeof t=="string"?t:""+t).replace(jN,`
`).replace(HN,"")}function Pu(t,e,n){if(e=p1(e),p1(t)!==e&&n)throw Error(M(425))}function Oc(){}var em=null,tm=null;function nm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rm=typeof setTimeout=="function"?setTimeout:void 0,WN=typeof clearTimeout=="function"?clearTimeout:void 0,m1=typeof Promise=="function"?Promise:void 0,GN=typeof queueMicrotask=="function"?queueMicrotask:typeof m1!="undefined"?function(t){return m1.resolve(null).then(t).catch(KN)}:rm;function KN(t){setTimeout(function(){throw t})}function Lf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ka(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ka(e)}function ti(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function g1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Oo=Math.random().toString(36).slice(2),Un="__reactFiber$"+Oo,Ja="__reactProps$"+Oo,Sr="__reactContainer$"+Oo,im="__reactEvents$"+Oo,qN="__reactListeners$"+Oo,QN="__reactHandles$"+Oo;function Bi(t){var e=t[Un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sr]||n[Un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=g1(t);t!==null;){if(n=t[Un])return n;t=g1(t)}return e}t=n,n=t.parentNode}return null}function Ml(t){return t=t[Un]||t[Sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Vh(t){return t[Ja]||null}var sm=[],Us=-1;function Ii(t){return{current:t}}function Re(t){0>Us||(t.current=sm[Us],sm[Us]=null,Us--)}function xe(t,e){Us++,sm[Us]=t.current,t.current=e}var mi={},bt=Ii(mi),Gt=Ii(!1),Zi=mi;function ho(t,e){var n=t.type.contextTypes;if(!n)return mi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Kt(t){return t=t.childContextTypes,t!=null}function $c(){Re(Gt),Re(bt)}function v1(t,e,n){if(bt.current!==mi)throw Error(M(168));xe(bt,e),xe(Gt,n)}function N_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,bA(t)||"Unknown",i));return Fe({},n,r)}function Lc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mi,Zi=bt.current,xe(bt,t),xe(Gt,Gt.current),!0}function y1(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=N_(t,e,Zi),r.__reactInternalMemoizedMergedChildContext=t,Re(Gt),Re(bt),xe(bt,t)):Re(Gt),xe(Gt,n)}var lr=null,jh=!1,Mf=!1;function R_(t){lr===null?lr=[t]:lr.push(t)}function XN(t){jh=!0,R_(t)}function xi(){if(!Mf&&lr!==null){Mf=!0;var t=0,e=Se;try{var n=lr;for(Se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}lr=null,jh=!1}catch(i){throw lr!==null&&(lr=lr.slice(t+1)),t_(Wg,xi),i}finally{Se=e,Mf=!1}}return null}var Bs=[],zs=0,Mc=null,Fc=0,ln=[],un=0,es=null,hr=1,dr="";function Li(t,e){Bs[zs++]=Fc,Bs[zs++]=Mc,Mc=t,Fc=e}function D_(t,e,n){ln[un++]=hr,ln[un++]=dr,ln[un++]=es,es=t;var r=hr;t=dr;var i=32-Rn(r)-1;r&=~(1<<i),n+=1;var s=32-Rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,hr=1<<32-Rn(e)+i|n<<i|r,dr=s+t}else hr=1<<s|n<<i|r,dr=t}function ev(t){t.return!==null&&(Li(t,1),D_(t,1,0))}function tv(t){for(;t===Mc;)Mc=Bs[--zs],Bs[zs]=null,Fc=Bs[--zs],Bs[zs]=null;for(;t===es;)es=ln[--un],ln[un]=null,dr=ln[--un],ln[un]=null,hr=ln[--un],ln[un]=null}var Zt=null,Yt=null,be=!1,kn=null;function P_(t,e){var n=fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function w1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Zt=t,Yt=ti(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Zt=t,Yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:hr,overflow:dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Zt=t,Yt=null,!0):!1;default:return!1}}function om(t){return(t.mode&1)!==0&&(t.flags&128)===0}function am(t){if(be){var e=Yt;if(e){var n=e;if(!w1(t,e)){if(om(t))throw Error(M(418));e=ti(n.nextSibling);var r=Zt;e&&w1(t,e)?P_(r,n):(t.flags=t.flags&-4097|2,be=!1,Zt=t)}}else{if(om(t))throw Error(M(418));t.flags=t.flags&-4097|2,be=!1,Zt=t}}}function E1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zt=t}function bu(t){if(t!==Zt)return!1;if(!be)return E1(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nm(t.type,t.memoizedProps)),e&&(e=Yt)){if(om(t))throw b_(),Error(M(418));for(;e;)P_(t,e),e=ti(e.nextSibling)}if(E1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Yt=ti(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Yt=null}}else Yt=Zt?ti(t.stateNode.nextSibling):null;return!0}function b_(){for(var t=Yt;t;)t=ti(t.nextSibling)}function fo(){Yt=Zt=null,be=!1}function nv(t){kn===null?kn=[t]:kn.push(t)}var YN=Or.ReactCurrentBatchConfig;function Sn(t,e){if(t&&t.defaultProps){e=Fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Uc=Ii(null),Bc=null,Vs=null,rv=null;function iv(){rv=Vs=Bc=null}function sv(t){var e=Uc.current;Re(Uc),t._currentValue=e}function lm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){Bc=t,rv=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ht=!0),t.firstContext=null)}function gn(t){var e=t._currentValue;if(rv!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(Bc===null)throw Error(M(308));Vs=t,Bc.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var zi=null;function ov(t){zi===null?zi=[t]:zi.push(t)}function O_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ov(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tr(t,r)}function Tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ur=!1;function av(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ni(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ye&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tr(t,n)}return i=r.interleaved,i===null?(e.next=e,ov(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tr(t,n)}function oc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gg(t,n)}}function C1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zc(t,e,n,r){var i=t.updateQueue;Ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,g=a;switch(d=e,p=n,g.tag){case 1:if(m=g.payload,typeof m=="function"){h=m.call(p,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,d=typeof m=="function"?m.call(p,h,d):m,d==null)break e;h=Fe({},h,d);break e;case 2:Ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ns|=o,t.lanes=o,t.memoizedState=h}}function _1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var L_=new OC.Component().refs;function um(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hh={isMounted:function(t){return(t=t._reactInternals)?ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ut(),i=ii(t),s=wr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ni(t,s,i),e!==null&&(Dn(e,t,i,r),oc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ut(),i=ii(t),s=wr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ni(t,s,i),e!==null&&(Dn(e,t,i,r),oc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ut(),r=ii(t),i=wr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ni(t,i,r),e!==null&&(Dn(e,t,r,n),oc(e,t,r))}};function S1(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qa(n,r)||!Qa(i,s):!0}function M_(t,e,n){var r=!1,i=mi,s=e.contextType;return typeof s=="object"&&s!==null?s=gn(s):(i=Kt(e)?Zi:bt.current,r=e.contextTypes,s=(r=r!=null)?ho(t,i):mi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function T1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hh.enqueueReplaceState(e,e.state,null)}function cm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=L_,av(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=gn(s):(s=Kt(e)?Zi:bt.current,i.context=ho(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(um(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hh.enqueueReplaceState(i,i.state,null),zc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ia(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===L_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function Ou(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function k1(t){var e=t._init;return e(t._payload)}function F_(t){function e(v,f){if(t){var y=v.deletions;y===null?(v.deletions=[f],v.flags|=16):y.push(f)}}function n(v,f){if(!t)return null;for(;f!==null;)e(v,f),f=f.sibling;return null}function r(v,f){for(v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function i(v,f){return v=si(v,f),v.index=0,v.sibling=null,v}function s(v,f,y){return v.index=y,t?(y=v.alternate,y!==null?(y=y.index,y<f?(v.flags|=2,f):y):(v.flags|=2,f)):(v.flags|=1048576,f)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,f,y,C){return f===null||f.tag!==6?(f=Hf(y,v.mode,C),f.return=v,f):(f=i(f,y),f.return=v,f)}function l(v,f,y,C){var S=y.type;return S===Os?c(v,f,y.props.children,C,y.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Fr&&k1(S)===f.type)?(C=i(f,y.props),C.ref=ia(v,f,y),C.return=v,C):(C=dc(y.type,y.key,y.props,null,v.mode,C),C.ref=ia(v,f,y),C.return=v,C)}function u(v,f,y,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Wf(y,v.mode,C),f.return=v,f):(f=i(f,y.children||[]),f.return=v,f)}function c(v,f,y,C,S){return f===null||f.tag!==7?(f=qi(y,v.mode,C,S),f.return=v,f):(f=i(f,y),f.return=v,f)}function h(v,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Hf(""+f,v.mode,y),f.return=v,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Su:return y=dc(f.type,f.key,f.props,null,v.mode,y),y.ref=ia(v,null,f),y.return=v,y;case bs:return f=Wf(f,v.mode,y),f.return=v,f;case Fr:var C=f._init;return h(v,C(f._payload),y)}if(da(f)||Zo(f))return f=qi(f,v.mode,y,null),f.return=v,f;Ou(v,f)}return null}function d(v,f,y,C){var S=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(v,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Su:return y.key===S?l(v,f,y,C):null;case bs:return y.key===S?u(v,f,y,C):null;case Fr:return S=y._init,d(v,f,S(y._payload),C)}if(da(y)||Zo(y))return S!==null?null:c(v,f,y,C,null);Ou(v,y)}return null}function p(v,f,y,C,S){if(typeof C=="string"&&C!==""||typeof C=="number")return v=v.get(y)||null,a(f,v,""+C,S);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Su:return v=v.get(C.key===null?y:C.key)||null,l(f,v,C,S);case bs:return v=v.get(C.key===null?y:C.key)||null,u(f,v,C,S);case Fr:var I=C._init;return p(v,f,y,I(C._payload),S)}if(da(C)||Zo(C))return v=v.get(y)||null,c(f,v,C,S,null);Ou(f,C)}return null}function m(v,f,y,C){for(var S=null,I=null,T=f,k=f=0,V=null;T!==null&&k<y.length;k++){T.index>k?(V=T,T=null):V=T.sibling;var P=d(v,T,y[k],C);if(P===null){T===null&&(T=V);break}t&&T&&P.alternate===null&&e(v,T),f=s(P,f,k),I===null?S=P:I.sibling=P,I=P,T=V}if(k===y.length)return n(v,T),be&&Li(v,k),S;if(T===null){for(;k<y.length;k++)T=h(v,y[k],C),T!==null&&(f=s(T,f,k),I===null?S=T:I.sibling=T,I=T);return be&&Li(v,k),S}for(T=r(v,T);k<y.length;k++)V=p(T,v,k,y[k],C),V!==null&&(t&&V.alternate!==null&&T.delete(V.key===null?k:V.key),f=s(V,f,k),I===null?S=V:I.sibling=V,I=V);return t&&T.forEach(function($){return e(v,$)}),be&&Li(v,k),S}function g(v,f,y,C){var S=Zo(y);if(typeof S!="function")throw Error(M(150));if(y=S.call(y),y==null)throw Error(M(151));for(var I=S=null,T=f,k=f=0,V=null,P=y.next();T!==null&&!P.done;k++,P=y.next()){T.index>k?(V=T,T=null):V=T.sibling;var $=d(v,T,P.value,C);if($===null){T===null&&(T=V);break}t&&T&&$.alternate===null&&e(v,T),f=s($,f,k),I===null?S=$:I.sibling=$,I=$,T=V}if(P.done)return n(v,T),be&&Li(v,k),S;if(T===null){for(;!P.done;k++,P=y.next())P=h(v,P.value,C),P!==null&&(f=s(P,f,k),I===null?S=P:I.sibling=P,I=P);return be&&Li(v,k),S}for(T=r(v,T);!P.done;k++,P=y.next())P=p(T,v,k,P.value,C),P!==null&&(t&&P.alternate!==null&&T.delete(P.key===null?k:P.key),f=s(P,f,k),I===null?S=P:I.sibling=P,I=P);return t&&T.forEach(function(z){return e(v,z)}),be&&Li(v,k),S}function E(v,f,y,C){if(typeof y=="object"&&y!==null&&y.type===Os&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Su:e:{for(var S=y.key,I=f;I!==null;){if(I.key===S){if(S=y.type,S===Os){if(I.tag===7){n(v,I.sibling),f=i(I,y.props.children),f.return=v,v=f;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Fr&&k1(S)===I.type){n(v,I.sibling),f=i(I,y.props),f.ref=ia(v,I,y),f.return=v,v=f;break e}n(v,I);break}else e(v,I);I=I.sibling}y.type===Os?(f=qi(y.props.children,v.mode,C,y.key),f.return=v,v=f):(C=dc(y.type,y.key,y.props,null,v.mode,C),C.ref=ia(v,f,y),C.return=v,v=C)}return o(v);case bs:e:{for(I=y.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(v,f.sibling),f=i(f,y.children||[]),f.return=v,v=f;break e}else{n(v,f);break}else e(v,f);f=f.sibling}f=Wf(y,v.mode,C),f.return=v,v=f}return o(v);case Fr:return I=y._init,E(v,f,I(y._payload),C)}if(da(y))return m(v,f,y,C);if(Zo(y))return g(v,f,y,C);Ou(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(v,f.sibling),f=i(f,y),f.return=v,v=f):(n(v,f),f=Hf(y,v.mode,C),f.return=v,v=f),o(v)):n(v,f)}return E}var po=F_(!0),U_=F_(!1),Fl={},Wn=Ii(Fl),Za=Ii(Fl),el=Ii(Fl);function Vi(t){if(t===Fl)throw Error(M(174));return t}function lv(t,e){switch(xe(el,e),xe(Za,t),xe(Wn,Fl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vp(e,t)}Re(Wn),xe(Wn,e)}function mo(){Re(Wn),Re(Za),Re(el)}function B_(t){Vi(el.current);var e=Vi(Wn.current),n=Vp(e,t.type);e!==n&&(xe(Za,t),xe(Wn,n))}function uv(t){Za.current===t&&(Re(Wn),Re(Za))}var Le=Ii(0);function Vc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ff=[];function cv(){for(var t=0;t<Ff.length;t++)Ff[t]._workInProgressVersionPrimary=null;Ff.length=0}var ac=Or.ReactCurrentDispatcher,Uf=Or.ReactCurrentBatchConfig,ts=0,Me=null,et=null,st=null,jc=!1,Aa=!1,tl=0,JN=0;function _t(){throw Error(M(321))}function hv(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pn(t[n],e[n]))return!1;return!0}function dv(t,e,n,r,i,s){if(ts=s,Me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ac.current=t===null||t.memoizedState===null?nR:rR,t=n(r,i),Aa){s=0;do{if(Aa=!1,tl=0,25<=s)throw Error(M(301));s+=1,st=et=null,e.updateQueue=null,ac.current=iR,t=n(r,i)}while(Aa)}if(ac.current=Hc,e=et!==null&&et.next!==null,ts=0,st=et=Me=null,jc=!1,e)throw Error(M(300));return t}function fv(){var t=tl!==0;return tl=0,t}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Me.memoizedState=st=t:st=st.next=t,st}function vn(){if(et===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=st===null?Me.memoizedState:st.next;if(e!==null)st=e,et=t;else{if(t===null)throw Error(M(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},st===null?Me.memoizedState=st=t:st=st.next=t}return st}function nl(t,e){return typeof e=="function"?e(t):e}function Bf(t){var e=vn(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ts&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Me.lanes|=c,ns|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Pn(r,e.memoizedState)||(Ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Me.lanes|=s,ns|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zf(t){var e=vn(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Pn(s,e.memoizedState)||(Ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function z_(){}function V_(t,e){var n=Me,r=vn(),i=e(),s=!Pn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ht=!0),r=r.queue,pv(W_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,rl(9,H_.bind(null,n,r,i,e),void 0,null),at===null)throw Error(M(349));(ts&30)!==0||j_(n,e,i)}return i}function j_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function H_(t,e,n,r){e.value=n,e.getSnapshot=r,G_(e)&&K_(t)}function W_(t,e,n){return n(function(){G_(e)&&K_(t)})}function G_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pn(t,n)}catch{return!0}}function K_(t){var e=Tr(t,1);e!==null&&Dn(e,t,1,-1)}function I1(t){var e=Fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:t},e.queue=t,t=t.dispatch=tR.bind(null,Me,t),[e.memoizedState,t]}function rl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function q_(){return vn().memoizedState}function lc(t,e,n,r){var i=Fn();Me.flags|=t,i.memoizedState=rl(1|e,n,void 0,r===void 0?null:r)}function Wh(t,e,n,r){var i=vn();r=r===void 0?null:r;var s=void 0;if(et!==null){var o=et.memoizedState;if(s=o.destroy,r!==null&&hv(r,o.deps)){i.memoizedState=rl(e,n,s,r);return}}Me.flags|=t,i.memoizedState=rl(1|e,n,s,r)}function x1(t,e){return lc(8390656,8,t,e)}function pv(t,e){return Wh(2048,8,t,e)}function Q_(t,e){return Wh(4,2,t,e)}function X_(t,e){return Wh(4,4,t,e)}function Y_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function J_(t,e,n){return n=n!=null?n.concat([t]):null,Wh(4,4,Y_.bind(null,e,t),n)}function mv(){}function Z_(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hv(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function eS(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hv(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function tS(t,e,n){return(ts&21)===0?(t.baseState&&(t.baseState=!1,Ht=!0),t.memoizedState=n):(Pn(n,e)||(n=i_(),Me.lanes|=n,ns|=n,t.baseState=!0),e)}function ZN(t,e){var n=Se;Se=n!==0&&4>n?n:4,t(!0);var r=Uf.transition;Uf.transition={};try{t(!1),e()}finally{Se=n,Uf.transition=r}}function nS(){return vn().memoizedState}function eR(t,e,n){var r=ii(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rS(t))iS(e,n);else if(n=O_(t,e,n,r),n!==null){var i=Ut();Dn(n,t,r,i),sS(n,e,r)}}function tR(t,e,n){var r=ii(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rS(t))iS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Pn(a,o)){var l=e.interleaved;l===null?(i.next=i,ov(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=O_(t,e,i,r),n!==null&&(i=Ut(),Dn(n,t,r,i),sS(n,e,r))}}function rS(t){var e=t.alternate;return t===Me||e!==null&&e===Me}function iS(t,e){Aa=jc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sS(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gg(t,n)}}var Hc={readContext:gn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},nR={readContext:gn,useCallback:function(t,e){return Fn().memoizedState=[t,e===void 0?null:e],t},useContext:gn,useEffect:x1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,lc(4194308,4,Y_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return lc(4194308,4,t,e)},useInsertionEffect:function(t,e){return lc(4,2,t,e)},useMemo:function(t,e){var n=Fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=eR.bind(null,Me,t),[r.memoizedState,t]},useRef:function(t){var e=Fn();return t={current:t},e.memoizedState=t},useState:I1,useDebugValue:mv,useDeferredValue:function(t){return Fn().memoizedState=t},useTransition:function(){var t=I1(!1),e=t[0];return t=ZN.bind(null,t[1]),Fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Me,i=Fn();if(be){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),at===null)throw Error(M(349));(ts&30)!==0||j_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,x1(W_.bind(null,r,s,t),[t]),r.flags|=2048,rl(9,H_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Fn(),e=at.identifierPrefix;if(be){var n=dr,r=hr;n=(r&~(1<<32-Rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=tl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=JN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rR={readContext:gn,useCallback:Z_,useContext:gn,useEffect:pv,useImperativeHandle:J_,useInsertionEffect:Q_,useLayoutEffect:X_,useMemo:eS,useReducer:Bf,useRef:q_,useState:function(){return Bf(nl)},useDebugValue:mv,useDeferredValue:function(t){var e=vn();return tS(e,et.memoizedState,t)},useTransition:function(){var t=Bf(nl)[0],e=vn().memoizedState;return[t,e]},useMutableSource:z_,useSyncExternalStore:V_,useId:nS,unstable_isNewReconciler:!1},iR={readContext:gn,useCallback:Z_,useContext:gn,useEffect:pv,useImperativeHandle:J_,useInsertionEffect:Q_,useLayoutEffect:X_,useMemo:eS,useReducer:zf,useRef:q_,useState:function(){return zf(nl)},useDebugValue:mv,useDeferredValue:function(t){var e=vn();return et===null?e.memoizedState=t:tS(e,et.memoizedState,t)},useTransition:function(){var t=zf(nl)[0],e=vn().memoizedState;return[t,e]},useMutableSource:z_,useSyncExternalStore:V_,useId:nS,unstable_isNewReconciler:!1};function go(t,e){try{var n="",r=e;do n+=PA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Vf(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function hm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sR=typeof WeakMap=="function"?WeakMap:Map;function oS(t,e,n){n=wr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Gc||(Gc=!0,Cm=r),hm(t,e)},n}function aS(t,e,n){n=wr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hm(t,e),typeof r!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function A1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new sR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=wR.bind(null,t,e,n),e.then(t,t))}function N1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function R1(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wr(-1,1),e.tag=2,ni(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var oR=Or.ReactCurrentOwner,Ht=!1;function Mt(t,e,n,r){e.child=t===null?U_(e,null,n,r):po(e,t.child,n,r)}function D1(t,e,n,r,i){n=n.render;var s=e.ref;return Js(e,i),r=dv(t,e,n,r,s,i),n=fv(),t!==null&&!Ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kr(t,e,i)):(be&&n&&ev(e),e.flags|=1,Mt(t,e,r,i),e.child)}function P1(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Sv(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lS(t,e,s,r,i)):(t=dc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qa,n(o,r)&&t.ref===e.ref)return kr(t,e,i)}return e.flags|=1,t=si(s,r),t.ref=e.ref,t.return=e,e.child=t}function lS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Qa(s,r)&&t.ref===e.ref)if(Ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ht=!0);else return e.lanes=t.lanes,kr(t,e,i)}return dm(t,e,n,r,i)}function uS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(Hs,Qt),Qt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xe(Hs,Qt),Qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,xe(Hs,Qt),Qt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,xe(Hs,Qt),Qt|=r;return Mt(t,e,i,n),e.child}function cS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dm(t,e,n,r,i){var s=Kt(n)?Zi:bt.current;return s=ho(e,s),Js(e,i),n=dv(t,e,n,r,s,i),r=fv(),t!==null&&!Ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kr(t,e,i)):(be&&r&&ev(e),e.flags|=1,Mt(t,e,n,i),e.child)}function b1(t,e,n,r,i){if(Kt(n)){var s=!0;Lc(e)}else s=!1;if(Js(e,i),e.stateNode===null)uc(t,e),M_(e,n,r),cm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=gn(u):(u=Kt(n)?Zi:bt.current,u=ho(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&T1(e,o,r,u),Ur=!1;var d=e.memoizedState;o.state=d,zc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Gt.current||Ur?(typeof c=="function"&&(um(e,n,c,r),l=e.memoizedState),(a=Ur||S1(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Sn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=gn(l):(l=Kt(n)?Zi:bt.current,l=ho(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&T1(e,o,r,l),Ur=!1,d=e.memoizedState,o.state=d,zc(e,r,o,i);var m=e.memoizedState;a!==h||d!==m||Gt.current||Ur?(typeof p=="function"&&(um(e,n,p,r),m=e.memoizedState),(u=Ur||S1(e,n,u,r,d,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return fm(t,e,n,r,s,i)}function fm(t,e,n,r,i,s){cS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&y1(e,n,!1),kr(t,e,s);r=e.stateNode,oR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=po(e,t.child,null,s),e.child=po(e,null,a,s)):Mt(t,e,a,s),e.memoizedState=r.state,i&&y1(e,n,!0),e.child}function hS(t){var e=t.stateNode;e.pendingContext?v1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&v1(t,e.context,!1),lv(t,e.containerInfo)}function O1(t,e,n,r,i){return fo(),nv(i),e.flags|=256,Mt(t,e,n,r),e.child}var pm={dehydrated:null,treeContext:null,retryLane:0};function mm(t){return{baseLanes:t,cachePool:null,transitions:null}}function dS(t,e,n){var r=e.pendingProps,i=Le.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),xe(Le,i&1),t===null)return am(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=qh(o,r,0,null),t=qi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mm(n),e.memoizedState=pm,t):gv(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return aR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=si(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=si(a,s):(s=qi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?mm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=pm,r}return s=t.child,t=s.sibling,r=si(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gv(t,e){return e=qh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $u(t,e,n,r){return r!==null&&nv(r),po(e,t.child,null,n),t=gv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Vf(Error(M(422))),$u(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=qh({mode:"visible",children:r.children},i,0,null),s=qi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&po(e,t.child,null,o),e.child.memoizedState=mm(o),e.memoizedState=pm,s);if((e.mode&1)===0)return $u(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(M(419)),r=Vf(s,r,void 0),$u(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ht||a){if(r=at,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tr(t,i),Dn(r,t,i,-1))}return _v(),r=Vf(Error(M(421))),$u(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ER.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Yt=ti(i.nextSibling),Zt=e,be=!0,kn=null,t!==null&&(ln[un++]=hr,ln[un++]=dr,ln[un++]=es,hr=t.id,dr=t.overflow,es=e),e=gv(e,r.children),e.flags|=4096,e)}function $1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),lm(t.return,e,n)}function jf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Mt(t,e,r.children,n),r=Le.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$1(t,n,e);else if(t.tag===19)$1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(xe(Le,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),jf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}jf(e,!0,n,null,s);break;case"together":jf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function uc(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=si(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=si(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lR(t,e,n){switch(e.tag){case 3:hS(e),fo();break;case 5:B_(e);break;case 1:Kt(e.type)&&Lc(e);break;case 4:lv(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;xe(Uc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(xe(Le,Le.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?dS(t,e,n):(xe(Le,Le.current&1),t=kr(t,e,n),t!==null?t.sibling:null);xe(Le,Le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return fS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(Le,Le.current),r)break;return null;case 22:case 23:return e.lanes=0,uS(t,e,n)}return kr(t,e,n)}var pS,gm,mS,gS;pS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gm=function(){};mS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Vi(Wn.current);var s=null;switch(n){case"input":i=Fp(t,i),r=Fp(t,r),s=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),s=[];break;case"textarea":i=zp(t,i),r=zp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Oc)}jp(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Va.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Va.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};gS=function(t,e,n,r){n!==r&&(e.flags|=4)};function sa(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function uR(t,e,n){var r=e.pendingProps;switch(tv(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return Kt(e.type)&&$c(),St(e),null;case 3:return r=e.stateNode,mo(),Re(Gt),Re(bt),cv(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(bu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,kn!==null&&(Tm(kn),kn=null))),gm(t,e),St(e),null;case 5:uv(e);var i=Vi(el.current);if(n=e.type,t!==null&&e.stateNode!=null)mS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return St(e),null}if(t=Vi(Wn.current),bu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Un]=e,r[Ja]=s,t=(e.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(i=0;i<pa.length;i++)Ne(pa[i],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":H0(r,s),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ne("invalid",r);break;case"textarea":G0(r,s),Ne("invalid",r)}jp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pu(r.textContent,a,t),i=["children",""+a]):Va.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ne("scroll",r)}switch(n){case"input":Tu(r),W0(r,s,!0);break;case"textarea":Tu(r),K0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Oc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jC(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Un]=e,t[Ja]=r,pS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Hp(n,r),n){case"dialog":Ne("cancel",t),Ne("close",t),i=r;break;case"iframe":case"object":case"embed":Ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<pa.length;i++)Ne(pa[i],t);i=r;break;case"source":Ne("error",t),i=r;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),i=r;break;case"details":Ne("toggle",t),i=r;break;case"input":H0(t,r),i=Fp(t,r),Ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),Ne("invalid",t);break;case"textarea":G0(t,r),i=zp(t,r),Ne("invalid",t);break;default:i=r}jp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?GC(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&HC(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ja(t,l):typeof l=="number"&&ja(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Va.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ne("scroll",t):l!=null&&Bg(t,s,l,o))}switch(n){case"input":Tu(t),W0(t,r,!1);break;case"textarea":Tu(t),K0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qs(t,!!r.multiple,s,!1):r.defaultValue!=null&&qs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Oc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(t&&e.stateNode!=null)gS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Vi(el.current),Vi(Wn.current),bu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Un]=e,(s=r.nodeValue!==n)&&(t=Zt,t!==null))switch(t.tag){case 3:Pu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Un]=e,e.stateNode=r}return St(e),null;case 13:if(Re(Le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&Yt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)b_(),fo(),e.flags|=98560,s=!1;else if(s=bu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Un]=e}else fo(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;St(e),s=!1}else kn!==null&&(Tm(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Le.current&1)!==0?nt===0&&(nt=3):_v())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return mo(),gm(t,e),t===null&&Xa(e.stateNode.containerInfo),St(e),null;case 10:return sv(e.type._context),St(e),null;case 17:return Kt(e.type)&&$c(),St(e),null;case 19:if(Re(Le),s=e.memoizedState,s===null)return St(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)sa(s,!1);else{if(nt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Vc(t),o!==null){for(e.flags|=128,sa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xe(Le,Le.current&1|2),e.child}t=t.sibling}s.tail!==null&&qe()>vo&&(e.flags|=128,r=!0,sa(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!be)return St(e),null}else 2*qe()-s.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,r=!0,sa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qe(),e.sibling=null,n=Le.current,xe(Le,r?n&1|2:n&1),e):(St(e),null);case 22:case 23:return Cv(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Qt&1073741824)!==0&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function cR(t,e){switch(tv(e),e.tag){case 1:return Kt(e.type)&&$c(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mo(),Re(Gt),Re(bt),cv(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return uv(e),null;case 13:if(Re(Le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));fo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Le),null;case 4:return mo(),null;case 10:return sv(e.type._context),null;case 22:case 23:return Cv(),null;case 24:return null;default:return null}}var Lu=!1,xt=!1,hR=typeof WeakSet=="function"?WeakSet:Set,K=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function vm(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var L1=!1;function dR(t,e){if(em=Dc,t=E_(),Zg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(tm={focusedElem:t,selectionRange:n},Dc=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var m=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,E=m.memoizedState,v=e.stateNode,f=v.getSnapshotBeforeUpdate(e.elementType===e.type?g:Sn(e.type,g),E);v.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(C){Ve(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return m=L1,L1=!1,m}function Na(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vm(e,n,s)}i=i.next}while(i!==r)}}function Gh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ym(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vS(t){var e=t.alternate;e!==null&&(t.alternate=null,vS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Un],delete e[Ja],delete e[im],delete e[qN],delete e[QN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yS(t){return t.tag===5||t.tag===3||t.tag===4}function M1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oc));else if(r!==4&&(t=t.child,t!==null))for(wm(t,e,n),t=t.sibling;t!==null;)wm(t,e,n),t=t.sibling}function Em(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Em(t,e,n),t=t.sibling;t!==null;)Em(t,e,n),t=t.sibling}var mt=null,Tn=!1;function Lr(t,e,n){for(n=n.child;n!==null;)wS(t,e,n),n=n.sibling}function wS(t,e,n){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(Fh,n)}catch{}switch(n.tag){case 5:xt||js(n,e);case 6:var r=mt,i=Tn;mt=null,Lr(t,e,n),mt=r,Tn=i,mt!==null&&(Tn?(t=mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mt.removeChild(n.stateNode));break;case 18:mt!==null&&(Tn?(t=mt,n=n.stateNode,t.nodeType===8?Lf(t.parentNode,n):t.nodeType===1&&Lf(t,n),Ka(t)):Lf(mt,n.stateNode));break;case 4:r=mt,i=Tn,mt=n.stateNode.containerInfo,Tn=!0,Lr(t,e,n),mt=r,Tn=i;break;case 0:case 11:case 14:case 15:if(!xt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&vm(n,e,o),i=i.next}while(i!==r)}Lr(t,e,n);break;case 1:if(!xt&&(js(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}Lr(t,e,n);break;case 21:Lr(t,e,n);break;case 22:n.mode&1?(xt=(r=xt)||n.memoizedState!==null,Lr(t,e,n),xt=r):Lr(t,e,n);break;default:Lr(t,e,n)}}function F1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hR),e.forEach(function(r){var i=CR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _n(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:mt=a.stateNode,Tn=!1;break e;case 3:mt=a.stateNode.containerInfo,Tn=!0;break e;case 4:mt=a.stateNode.containerInfo,Tn=!0;break e}a=a.return}if(mt===null)throw Error(M(160));wS(s,o,i),mt=null,Tn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ES(e,t),e=e.sibling}function ES(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_n(e,t),Mn(t),r&4){try{Na(3,t,t.return),Gh(3,t)}catch(g){Ve(t,t.return,g)}try{Na(5,t,t.return)}catch(g){Ve(t,t.return,g)}}break;case 1:_n(e,t),Mn(t),r&512&&n!==null&&js(n,n.return);break;case 5:if(_n(e,t),Mn(t),r&512&&n!==null&&js(n,n.return),t.flags&32){var i=t.stateNode;try{ja(i,"")}catch(g){Ve(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zC(i,s),Hp(a,o);var u=Hp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?GC(i,h):c==="dangerouslySetInnerHTML"?HC(i,h):c==="children"?ja(i,h):Bg(i,c,h,u)}switch(a){case"input":Up(i,s);break;case"textarea":VC(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?qs(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?qs(i,!!s.multiple,s.defaultValue,!0):qs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ja]=s}catch(g){Ve(t,t.return,g)}}break;case 6:if(_n(e,t),Mn(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(g){Ve(t,t.return,g)}}break;case 3:if(_n(e,t),Mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ka(e.containerInfo)}catch(g){Ve(t,t.return,g)}break;case 4:_n(e,t),Mn(t);break;case 13:_n(e,t),Mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wv=qe())),r&4&&F1(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(xt=(u=xt)||c,_n(e,t),xt=u):_n(e,t),Mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(K=t,c=t.child;c!==null;){for(h=K=c;K!==null;){switch(d=K,p=d.child,d.tag){case 0:case 11:case 14:case 15:Na(4,d,d.return);break;case 1:js(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(g){Ve(r,n,g)}}break;case 5:js(d,d.return);break;case 22:if(d.memoizedState!==null){B1(h);continue}}p!==null?(p.return=d,K=p):B1(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=WC("display",o))}catch(g){Ve(t,t.return,g)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(g){Ve(t,t.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:_n(e,t),Mn(t),r&4&&F1(t);break;case 21:break;default:_n(e,t),Mn(t)}}function Mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yS(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ja(i,""),r.flags&=-33);var s=M1(t);Em(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=M1(t);wm(t,a,o);break;default:throw Error(M(161))}}catch(l){Ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fR(t,e,n){K=t,CS(t)}function CS(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Lu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||xt;a=Lu;var u=xt;if(Lu=o,(xt=l)&&!u)for(K=i;K!==null;)o=K,l=o.child,o.tag===22&&o.memoizedState!==null?z1(i):l!==null?(l.return=o,K=l):z1(i);for(;s!==null;)K=s,CS(s),s=s.sibling;K=i,Lu=a,xt=u}U1(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,K=s):U1(t)}}function U1(t){for(;K!==null;){var e=K;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:xt||Gh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!xt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_1(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_1(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ka(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}xt||e.flags&512&&ym(e)}catch(d){Ve(e,e.return,d)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function B1(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function z1(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gh(4,e)}catch(l){Ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ve(e,i,l)}}var s=e.return;try{ym(e)}catch(l){Ve(e,s,l)}break;case 5:var o=e.return;try{ym(e)}catch(l){Ve(e,o,l)}}}catch(l){Ve(e,e.return,l)}if(e===t){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var pR=Math.ceil,Wc=Or.ReactCurrentDispatcher,vv=Or.ReactCurrentOwner,mn=Or.ReactCurrentBatchConfig,ye=0,at=null,Ye=null,yt=0,Qt=0,Hs=Ii(0),nt=0,il=null,ns=0,Kh=0,yv=0,Ra=null,jt=null,wv=0,vo=1/0,ar=null,Gc=!1,Cm=null,ri=null,Mu=!1,qr=null,Kc=0,Da=0,_m=null,cc=-1,hc=0;function Ut(){return(ye&6)!==0?qe():cc!==-1?cc:cc=qe()}function ii(t){return(t.mode&1)===0?1:(ye&2)!==0&&yt!==0?yt&-yt:YN.transition!==null?(hc===0&&(hc=i_()),hc):(t=Se,t!==0||(t=window.event,t=t===void 0?16:h_(t.type)),t)}function Dn(t,e,n,r){if(50<Da)throw Da=0,_m=null,Error(M(185));$l(t,n,r),((ye&2)===0||t!==at)&&(t===at&&((ye&2)===0&&(Kh|=n),nt===4&&zr(t,yt)),qt(t,r),n===1&&ye===0&&(e.mode&1)===0&&(vo=qe()+500,jh&&xi()))}function qt(t,e){var n=t.callbackNode;YA(t,e);var r=Rc(t,t===at?yt:0);if(r===0)n!==null&&X0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&X0(n),e===1)t.tag===0?XN(V1.bind(null,t)):R_(V1.bind(null,t)),GN(function(){(ye&6)===0&&xi()}),n=null;else{switch(s_(r)){case 1:n=Wg;break;case 4:n=n_;break;case 16:n=Nc;break;case 536870912:n=r_;break;default:n=Nc}n=NS(n,_S.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _S(t,e){if(cc=-1,hc=0,(ye&6)!==0)throw Error(M(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var r=Rc(t,t===at?yt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=qc(t,r);else{e=r;var i=ye;ye|=2;var s=TS();(at!==t||yt!==e)&&(ar=null,vo=qe()+500,Ki(t,e));do try{vR();break}catch(a){SS(t,a)}while(1);iv(),Wc.current=s,ye=i,Ye!==null?e=0:(at=null,yt=0,e=nt)}if(e!==0){if(e===2&&(i=Qp(t),i!==0&&(r=i,e=Sm(t,i))),e===1)throw n=il,Ki(t,0),zr(t,r),qt(t,qe()),n;if(e===6)zr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!mR(i)&&(e=qc(t,r),e===2&&(s=Qp(t),s!==0&&(r=s,e=Sm(t,s))),e===1))throw n=il,Ki(t,0),zr(t,r),qt(t,qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:Mi(t,jt,ar);break;case 3:if(zr(t,r),(r&130023424)===r&&(e=wv+500-qe(),10<e)){if(Rc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rm(Mi.bind(null,t,jt,ar),e);break}Mi(t,jt,ar);break;case 4:if(zr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pR(r/1960))-r,10<r){t.timeoutHandle=rm(Mi.bind(null,t,jt,ar),r);break}Mi(t,jt,ar);break;case 5:Mi(t,jt,ar);break;default:throw Error(M(329))}}}return qt(t,qe()),t.callbackNode===n?_S.bind(null,t):null}function Sm(t,e){var n=Ra;return t.current.memoizedState.isDehydrated&&(Ki(t,e).flags|=256),t=qc(t,e),t!==2&&(e=jt,jt=n,e!==null&&Tm(e)),t}function Tm(t){jt===null?jt=t:jt.push.apply(jt,t)}function mR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Pn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zr(t,e){for(e&=~yv,e&=~Kh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Rn(e),r=1<<n;t[n]=-1,e&=~r}}function V1(t){if((ye&6)!==0)throw Error(M(327));Zs();var e=Rc(t,0);if((e&1)===0)return qt(t,qe()),null;var n=qc(t,e);if(t.tag!==0&&n===2){var r=Qp(t);r!==0&&(e=r,n=Sm(t,r))}if(n===1)throw n=il,Ki(t,0),zr(t,e),qt(t,qe()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mi(t,jt,ar),qt(t,qe()),null}function Ev(t,e){var n=ye;ye|=1;try{return t(e)}finally{ye=n,ye===0&&(vo=qe()+500,jh&&xi())}}function rs(t){qr!==null&&qr.tag===0&&(ye&6)===0&&Zs();var e=ye;ye|=1;var n=mn.transition,r=Se;try{if(mn.transition=null,Se=1,t)return t()}finally{Se=r,mn.transition=n,ye=e,(ye&6)===0&&xi()}}function Cv(){Qt=Hs.current,Re(Hs)}function Ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,WN(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(tv(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$c();break;case 3:mo(),Re(Gt),Re(bt),cv();break;case 5:uv(r);break;case 4:mo();break;case 13:Re(Le);break;case 19:Re(Le);break;case 10:sv(r.type._context);break;case 22:case 23:Cv()}n=n.return}if(at=t,Ye=t=si(t.current,null),yt=Qt=e,nt=0,il=null,yv=Kh=ns=0,jt=Ra=null,zi!==null){for(e=0;e<zi.length;e++)if(n=zi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zi=null}return t}function SS(t,e){do{var n=Ye;try{if(iv(),ac.current=Hc,jc){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jc=!1}if(ts=0,st=et=Me=null,Aa=!1,tl=0,vv.current=null,n===null||n.return===null){nt=1,il=e,Ye=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=N1(o);if(p!==null){p.flags&=-257,R1(p,o,a,s,e),p.mode&1&&A1(s,u,e),e=p,l=u;var m=e.updateQueue;if(m===null){var g=new Set;g.add(l),e.updateQueue=g}else m.add(l);break e}else{if((e&1)===0){A1(s,u,e),_v();break e}l=Error(M(426))}}else if(be&&a.mode&1){var E=N1(o);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),R1(E,o,a,s,e),nv(go(l,a));break e}}s=l=go(l,a),nt!==4&&(nt=2),Ra===null?Ra=[s]:Ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=oS(s,l,e);C1(s,v);break e;case 1:a=l;var f=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ri===null||!ri.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=aS(s,a,e);C1(s,C);break e}}s=s.return}while(s!==null)}IS(n)}catch(S){e=S,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(1)}function TS(){var t=Wc.current;return Wc.current=Hc,t===null?Hc:t}function _v(){(nt===0||nt===3||nt===2)&&(nt=4),at===null||(ns&268435455)===0&&(Kh&268435455)===0||zr(at,yt)}function qc(t,e){var n=ye;ye|=2;var r=TS();(at!==t||yt!==e)&&(ar=null,Ki(t,e));do try{gR();break}catch(i){SS(t,i)}while(1);if(iv(),ye=n,Wc.current=r,Ye!==null)throw Error(M(261));return at=null,yt=0,nt}function gR(){for(;Ye!==null;)kS(Ye)}function vR(){for(;Ye!==null&&!VA();)kS(Ye)}function kS(t){var e=AS(t.alternate,t,Qt);t.memoizedProps=t.pendingProps,e===null?IS(t):Ye=e,vv.current=null}function IS(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=uR(n,e,Qt),n!==null){Ye=n;return}}else{if(n=cR(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nt=6,Ye=null;return}}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);nt===0&&(nt=5)}function Mi(t,e,n){var r=Se,i=mn.transition;try{mn.transition=null,Se=1,yR(t,e,n,r)}finally{mn.transition=i,Se=r}return null}function yR(t,e,n,r){do Zs();while(qr!==null);if((ye&6)!==0)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(JA(t,s),t===at&&(Ye=at=null,yt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Mu||(Mu=!0,NS(Nc,function(){return Zs(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=mn.transition,mn.transition=null;var o=Se;Se=1;var a=ye;ye|=4,vv.current=null,dR(t,n),ES(n,t),FN(tm),Dc=!!em,tm=em=null,t.current=n,fR(n),jA(),ye=a,Se=o,mn.transition=s}else t.current=n;if(Mu&&(Mu=!1,qr=t,Kc=i),s=t.pendingLanes,s===0&&(ri=null),GA(n.stateNode),qt(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gc)throw Gc=!1,t=Cm,Cm=null,t;return(Kc&1)!==0&&t.tag!==0&&Zs(),s=t.pendingLanes,(s&1)!==0?t===_m?Da++:(Da=0,_m=t):Da=0,xi(),null}function Zs(){if(qr!==null){var t=s_(Kc),e=mn.transition,n=Se;try{if(mn.transition=null,Se=16>t?16:t,qr===null)var r=!1;else{if(t=qr,qr=null,Kc=0,(ye&6)!==0)throw Error(M(331));var i=ye;for(ye|=4,K=t.current;K!==null;){var s=K,o=s.child;if((K.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(K=u;K!==null;){var c=K;switch(c.tag){case 0:case 11:case 15:Na(8,c,s)}var h=c.child;if(h!==null)h.return=c,K=h;else for(;K!==null;){c=K;var d=c.sibling,p=c.return;if(vS(c),c===u){K=null;break}if(d!==null){d.return=p,K=d;break}K=p}}}var m=s.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var E=g.sibling;g.sibling=null,g=E}while(g!==null)}}K=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,K=v;break e}K=s.return}}var f=t.current;for(K=f;K!==null;){o=K;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,K=y;else e:for(o=f;K!==null;){if(a=K,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Gh(9,a)}}catch(S){Ve(a,a.return,S)}if(a===o){K=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,K=C;break e}K=a.return}}if(ye=i,xi(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(Fh,t)}catch{}r=!0}return r}finally{Se=n,mn.transition=e}}return!1}function j1(t,e,n){e=go(n,e),e=oS(t,e,1),t=ni(t,e,1),e=Ut(),t!==null&&($l(t,1,e),qt(t,e))}function Ve(t,e,n){if(t.tag===3)j1(t,t,n);else for(;e!==null;){if(e.tag===3){j1(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ri===null||!ri.has(r))){t=go(n,t),t=aS(e,t,1),e=ni(e,t,1),t=Ut(),e!==null&&($l(e,1,t),qt(e,t));break}}e=e.return}}function wR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ut(),t.pingedLanes|=t.suspendedLanes&n,at===t&&(yt&n)===n&&(nt===4||nt===3&&(yt&130023424)===yt&&500>qe()-wv?Ki(t,0):yv|=n),qt(t,e)}function xS(t,e){e===0&&((t.mode&1)===0?e=1:(e=xu,xu<<=1,(xu&130023424)===0&&(xu=4194304)));var n=Ut();t=Tr(t,e),t!==null&&($l(t,e,n),qt(t,n))}function ER(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xS(t,n)}function CR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),xS(t,n)}var AS;AS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gt.current)Ht=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ht=!1,lR(t,e,n);Ht=(t.flags&131072)!==0}else Ht=!1,be&&(e.flags&1048576)!==0&&D_(e,Fc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;uc(t,e),t=e.pendingProps;var i=ho(e,bt.current);Js(e,n),i=dv(null,e,r,t,i,n);var s=fv();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(r)?(s=!0,Lc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,av(e),i.updater=Hh,e.stateNode=i,i._reactInternals=e,cm(e,r,t,n),e=fm(null,e,r,!0,s,n)):(e.tag=0,be&&s&&ev(e),Mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(uc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=SR(r),t=Sn(r,t),i){case 0:e=dm(null,e,r,t,n);break e;case 1:e=b1(null,e,r,t,n);break e;case 11:e=D1(null,e,r,t,n);break e;case 14:e=P1(null,e,r,Sn(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),dm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),b1(t,e,r,i,n);case 3:e:{if(hS(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$_(t,e),zc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=go(Error(M(423)),e),e=O1(t,e,r,n,i);break e}else if(r!==i){i=go(Error(M(424)),e),e=O1(t,e,r,n,i);break e}else for(Yt=ti(e.stateNode.containerInfo.firstChild),Zt=e,be=!0,kn=null,n=U_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fo(),r===i){e=kr(t,e,n);break e}Mt(t,e,r,n)}e=e.child}return e;case 5:return B_(e),t===null&&am(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,nm(r,i)?o=null:s!==null&&nm(r,s)&&(e.flags|=32),cS(t,e),Mt(t,e,o,n),e.child;case 6:return t===null&&am(e),null;case 13:return dS(t,e,n);case 4:return lv(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=po(e,null,r,n):Mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),D1(t,e,r,i,n);case 7:return Mt(t,e,e.pendingProps,n),e.child;case 8:return Mt(t,e,e.pendingProps.children,n),e.child;case 12:return Mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,xe(Uc,r._currentValue),r._currentValue=o,s!==null)if(Pn(s.value,o)){if(s.children===i.children&&!Gt.current){e=kr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=wr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),lm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),lm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Js(e,n),i=gn(i),r=r(i),e.flags|=1,Mt(t,e,r,n),e.child;case 14:return r=e.type,i=Sn(r,e.pendingProps),i=Sn(r.type,i),P1(t,e,r,i,n);case 15:return lS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),uc(t,e),e.tag=1,Kt(r)?(t=!0,Lc(e)):t=!1,Js(e,n),M_(e,r,i),cm(e,r,i,n),fm(null,e,r,!0,t,n);case 19:return fS(t,e,n);case 22:return uS(t,e,n)}throw Error(M(156,e.tag))};function NS(t,e){return t_(t,e)}function _R(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(t,e,n,r){return new _R(t,e,n,r)}function Sv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SR(t){if(typeof t=="function")return Sv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vg)return 11;if(t===jg)return 14}return 2}function si(t,e){var n=t.alternate;return n===null?(n=fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Sv(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Os:return qi(n.children,i,s,e);case zg:o=8,i|=8;break;case Op:return t=fn(12,n,e,i|2),t.elementType=Op,t.lanes=s,t;case $p:return t=fn(13,n,e,i),t.elementType=$p,t.lanes=s,t;case Lp:return t=fn(19,n,e,i),t.elementType=Lp,t.lanes=s,t;case FC:return qh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case LC:o=10;break e;case MC:o=9;break e;case Vg:o=11;break e;case jg:o=14;break e;case Fr:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=fn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qi(t,e,n,r){return t=fn(7,t,r,e),t.lanes=n,t}function qh(t,e,n,r){return t=fn(22,t,r,e),t.elementType=FC,t.lanes=n,t.stateNode={isHidden:!1},t}function Hf(t,e,n){return t=fn(6,t,null,e),t.lanes=n,t}function Wf(t,e,n){return e=fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kf(0),this.expirationTimes=kf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tv(t,e,n,r,i,s,o,a,l){return t=new TR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},av(s),t}function kR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function RS(t){if(!t)return mi;t=t._reactInternals;e:{if(ys(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(Kt(n))return N_(t,n,e)}return e}function DS(t,e,n,r,i,s,o,a,l){return t=Tv(n,r,!0,t,i,s,o,a,l),t.context=RS(null),n=t.current,r=Ut(),i=ii(n),s=wr(r,i),s.callback=e!=null?e:null,ni(n,s,i),t.current.lanes=i,$l(t,i,r),qt(t,r),t}function Qh(t,e,n,r){var i=e.current,s=Ut(),o=ii(i);return n=RS(n),e.context===null?e.context=n:e.pendingContext=n,e=wr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ni(i,e,o),t!==null&&(Dn(t,i,o,s),oc(t,i,o)),o}function Qc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function H1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kv(t,e){H1(t,e),(t=t.alternate)&&H1(t,e)}function IR(){return null}var PS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Iv(t){this._internalRoot=t}Xh.prototype.render=Iv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Qh(t,e,null,null)};Xh.prototype.unmount=Iv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rs(function(){Qh(null,t,null,null)}),e[Sr]=null}};function Xh(t){this._internalRoot=t}Xh.prototype.unstable_scheduleHydration=function(t){if(t){var e=l_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Br.length&&e!==0&&e<Br[n].priority;n++);Br.splice(n,0,t),n===0&&c_(t)}};function xv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function W1(){}function xR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Qc(o);s.call(u)}}var o=DS(e,r,t,0,null,!1,!1,"",W1);return t._reactRootContainer=o,t[Sr]=o.current,Xa(t.nodeType===8?t.parentNode:t),rs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Qc(l);a.call(u)}}var l=Tv(t,0,!1,null,null,!1,!1,"",W1);return t._reactRootContainer=l,t[Sr]=l.current,Xa(t.nodeType===8?t.parentNode:t),rs(function(){Qh(e,l,n,r)}),l}function Jh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Qc(o);a.call(l)}}Qh(e,o,t,i)}else o=xR(n,e,t,i,r);return Qc(o)}o_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fa(e.pendingLanes);n!==0&&(Gg(e,n|1),qt(e,qe()),(ye&6)===0&&(vo=qe()+500,xi()))}break;case 13:rs(function(){var r=Tr(t,1);if(r!==null){var i=Ut();Dn(r,t,1,i)}}),kv(t,1)}};Kg=function(t){if(t.tag===13){var e=Tr(t,134217728);if(e!==null){var n=Ut();Dn(e,t,134217728,n)}kv(t,134217728)}};a_=function(t){if(t.tag===13){var e=ii(t),n=Tr(t,e);if(n!==null){var r=Ut();Dn(n,t,e,r)}kv(t,e)}};l_=function(){return Se};u_=function(t,e){var n=Se;try{return Se=t,e()}finally{Se=n}};Gp=function(t,e,n){switch(e){case"input":if(Up(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Vh(r);if(!i)throw Error(M(90));BC(r),Up(r,i)}}}break;case"textarea":VC(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};QC=Ev;XC=rs;var AR={usingClientEntryPoint:!1,Events:[Ml,Fs,Vh,KC,qC,Ev]},oa={findFiberByHostInstance:Bi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},NR={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ZC(t),t===null?null:t.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||IR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fu.isDisabled&&Fu.supportsFiber)try{Fh=Fu.inject(NR),Hn=Fu}catch{}}sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AR;sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xv(e))throw Error(M(200));return kR(t,e,null,n)};sn.createRoot=function(t,e){if(!xv(t))throw Error(M(299));var n=!1,r="",i=PS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Tv(t,1,!1,null,null,n,!1,r,i),t[Sr]=e.current,Xa(t.nodeType===8?t.parentNode:t),new Iv(e)};sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=ZC(e),t=t===null?null:t.stateNode,t};sn.flushSync=function(t){return rs(t)};sn.hydrate=function(t,e,n){if(!Yh(e))throw Error(M(200));return Jh(null,t,e,!0,n)};sn.hydrateRoot=function(t,e,n){if(!xv(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=PS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=DS(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Sr]=e.current,Xa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xh(e)};sn.render=function(t,e,n){if(!Yh(e))throw Error(M(200));return Jh(null,t,e,!1,n)};sn.unmountComponentAtNode=function(t){if(!Yh(t))throw Error(M(40));return t._reactRootContainer?(rs(function(){Jh(null,null,t,!1,function(){t._reactRootContainer=null,t[Sr]=null})}),!0):!1};sn.unstable_batchedUpdates=Ev;sn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yh(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Jh(t,e,n,!1,r)};sn.version="18.2.0-next-9e3b772b8-20220608";function bS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bS)}catch(t){console.error(t)}}bS(),Mg.exports=sn;var G1=Mg.exports;Pp.createRoot=G1.createRoot,Pp.hydrateRoot=G1.hydrateRoot;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sl.apply(this,arguments)}var Qr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qr||(Qr={}));const K1="popstate";function RR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return km("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Xc(i)}return PR(e,n,null,t)}function Ze(t,e){if(t===!1||t===null||typeof t=="undefined")throw new Error(e)}function Av(t,e){if(!t){typeof console!="undefined"&&console.warn(e);try{throw new Error(e)}catch{}}}function DR(){return Math.random().toString(36).substr(2,8)}function q1(t,e){return{usr:t.state,key:t.key,idx:e}}function km(t,e,n,r){return n===void 0&&(n=null),sl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?$o(e):e,{state:n,key:e&&e.key||r||DR()})}function Xc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function $o(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function PR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Qr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(sl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Qr.Pop;let E=c(),v=E==null?null:E-u;u=E,l&&l({action:a,location:g.location,delta:v})}function d(E,v){a=Qr.Push;let f=km(g.location,E,v);n&&n(f,E),u=c()+1;let y=q1(f,u),C=g.createHref(f);try{o.pushState(y,"",C)}catch{i.location.assign(C)}s&&l&&l({action:a,location:g.location,delta:1})}function p(E,v){a=Qr.Replace;let f=km(g.location,E,v);n&&n(f,E),u=c();let y=q1(f,u),C=g.createHref(f);o.replaceState(y,"",C),s&&l&&l({action:a,location:g.location,delta:0})}function m(E){let v=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:Xc(E);return Ze(v,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,v)}let g={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(K1,h),l=E,()=>{i.removeEventListener(K1,h),l=null}},createHref(E){return e(i,E)},createURL:m,encodeLocation(E){let v=m(E);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:d,replace:p,go(E){return o.go(E)}};return g}var Q1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Q1||(Q1={}));function bR(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?$o(e):e,i=Nv(r.pathname||"/",n);if(i==null)return null;let s=OS(t);OR(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=jR(s[a],GR(i));return o}function OS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ze(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=oi([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),OS(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:zR(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of $S(s.path))i(s,o,l)}),e}function $S(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=$S(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function OR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:VR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $R=/^:\w+$/,LR=3,MR=2,FR=1,UR=10,BR=-2,X1=t=>t==="*";function zR(t,e){let n=t.split("/"),r=n.length;return n.some(X1)&&(r+=BR),e&&(r+=MR),n.filter(i=>!X1(i)).reduce((i,s)=>i+($R.test(s)?LR:s===""?FR:UR),r)}function VR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jR(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=HR({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:oi([i,c.pathname]),pathnameBase:XR(oi([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=oi([i,c.pathnameBase]))}return s}function HR(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=WR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=KR(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function WR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Av(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function GR(t){try{return decodeURI(t)}catch(e){return Av(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function KR(t,e){try{return decodeURIComponent(t)}catch(n){return Av(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Nv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function qR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?$o(t):t;return{pathname:n?n.startsWith("/")?n:QR(n,e):e,search:YR(r),hash:JR(i)}}function QR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Gf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function LS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function MS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=$o(t):(i=sl({},t),Ze(!i.pathname||!i.pathname.includes("?"),Gf("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),Gf("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),Gf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=qR(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const oi=t=>t.join("/").replace(/\/\/+/g,"/"),XR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),YR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,JR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ZR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const e4=["post","put","patch","delete"];[...e4];/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yc(){return Yc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yc.apply(this,arguments)}const FS=D.exports.createContext(null),t4=D.exports.createContext(null),Lo=D.exports.createContext(null),Zh=D.exports.createContext(null),Ai=D.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),US=D.exports.createContext(null);function n4(t,e){let{relative:n}=e===void 0?{}:e;Ul()||Ze(!1);let{basename:r,navigator:i}=D.exports.useContext(Lo),{hash:s,pathname:o,search:a}=zS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:oi([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ul(){return D.exports.useContext(Zh)!=null}function Bl(){return Ul()||Ze(!1),D.exports.useContext(Zh).location}function BS(t){D.exports.useContext(Lo).static||D.exports.useLayoutEffect(t)}function On(){let{isDataRoute:t}=D.exports.useContext(Ai);return t?m4():r4()}function r4(){Ul()||Ze(!1);let{basename:t,navigator:e}=D.exports.useContext(Lo),{matches:n}=D.exports.useContext(Ai),{pathname:r}=Bl(),i=JSON.stringify(LS(n).map(a=>a.pathnameBase)),s=D.exports.useRef(!1);return BS(()=>{s.current=!0}),D.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=MS(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:oi([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function Rv(){let{matches:t}=D.exports.useContext(Ai),e=t[t.length-1];return e?e.params:{}}function zS(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=D.exports.useContext(Ai),{pathname:i}=Bl(),s=JSON.stringify(LS(r).map(o=>o.pathnameBase));return D.exports.useMemo(()=>MS(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function i4(t,e){return s4(t,e)}function s4(t,e,n){Ul()||Ze(!1);let{navigator:r}=D.exports.useContext(Lo),{matches:i}=D.exports.useContext(Ai),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Bl(),u;if(e){var c;let g=typeof e=="string"?$o(e):e;a==="/"||((c=g.pathname)==null?void 0:c.startsWith(a))||Ze(!1),u=g}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=bR(t,{pathname:d}),m=c4(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:oi([a,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?a:oi([a,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,n);return e&&m?D.exports.createElement(Zh.Provider,{value:{location:Yc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Qr.Pop}},m):m}function o4(){let t=p4(),e=ZR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return D.exports.createElement(D.exports.Fragment,null,D.exports.createElement("h2",null,"Unexpected Application Error!"),D.exports.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.exports.createElement("pre",{style:i},n):null,s)}const a4=D.exports.createElement(o4,null);class l4 extends D.exports.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?D.exports.createElement(Ai.Provider,{value:this.props.routeContext},D.exports.createElement(US.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function u4(t){let{routeContext:e,match:n,children:r}=t,i=D.exports.useContext(FS);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.exports.createElement(Ai.Provider,{value:e},r)}function c4(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ze(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||a4);let d=e.concat(s.slice(0,u+1)),p=()=>{let m;return c?m=h:l.route.Component?m=D.exports.createElement(l.route.Component,null):l.route.element?m=l.route.element:m=a,D.exports.createElement(u4,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:m})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?D.exports.createElement(l4,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var Im;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Im||(Im={}));var ol;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(ol||(ol={}));function h4(t){let e=D.exports.useContext(FS);return e||Ze(!1),e}function d4(t){let e=D.exports.useContext(t4);return e||Ze(!1),e}function f4(t){let e=D.exports.useContext(Ai);return e||Ze(!1),e}function VS(t){let e=f4(),n=e.matches[e.matches.length-1];return n.route.id||Ze(!1),n.route.id}function p4(){var t;let e=D.exports.useContext(US),n=d4(ol.UseRouteError),r=VS(ol.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function m4(){let{router:t}=h4(Im.UseNavigateStable),e=VS(ol.UseNavigateStable),n=D.exports.useRef(!1);return BS(()=>{n.current=!0}),D.exports.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Yc({fromRouteId:e},s)))},[t,e])}function jS(t){Ze(!1)}function g4(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qr.Pop,navigator:s,static:o=!1}=t;Ul()&&Ze(!1);let a=e.replace(/^\/*/,"/"),l=D.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=$o(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,m=D.exports.useMemo(()=>{let g=Nv(u,a);return g==null?null:{location:{pathname:g,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return m==null?null:D.exports.createElement(Lo.Provider,{value:l},D.exports.createElement(Zh.Provider,{children:n,value:m}))}function v4(t){let{children:e,location:n}=t;return i4(xm(e),n)}var Y1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Y1||(Y1={}));new Promise(()=>{});function xm(t,e){e===void 0&&(e=[]);let n=[];return D.exports.Children.forEach(t,(r,i)=>{if(!D.exports.isValidElement(r))return;let s=[...e,i];if(r.type===D.exports.Fragment){n.push.apply(n,xm(r.props.children,s));return}r.type!==jS&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=xm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Am(){return Am=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Am.apply(this,arguments)}function y4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function w4(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function E4(t,e){return t.button===0&&(!e||e==="_self")&&!w4(t)}const C4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function _4(t){let{basename:e,children:n,window:r}=t,i=D.exports.useRef();i.current==null&&(i.current=RR({window:r,v5Compat:!0}));let s=i.current,[o,a]=D.exports.useState({action:s.action,location:s.location});return D.exports.useLayoutEffect(()=>s.listen(a),[s]),D.exports.createElement(g4,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const S4=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",T4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xt=D.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=y4(e,C4),{basename:d}=D.exports.useContext(Lo),p,m=!1;if(typeof u=="string"&&T4.test(u)&&(p=u,S4))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),C=Nv(y.pathname,d);y.origin===f.origin&&C!=null?u=C+y.search+y.hash:m=!0}catch{}let g=n4(u,{relative:i}),E=k4(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function v(f){r&&r(f),f.defaultPrevented||E(f)}return D.exports.createElement("a",Am({},h,{href:p||g,onClick:m||s?r:v,ref:n,target:l}))});var J1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(J1||(J1={}));var Z1;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Z1||(Z1={}));function k4(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=On(),l=Bl(),u=zS(t,{relative:o});return D.exports.useCallback(c=>{if(E4(c,n)){c.preventDefault();let h=r!==void 0?r:Xc(l)===Xc(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var Dv={exports:{}},ke={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv=Symbol.for("react.element"),bv=Symbol.for("react.portal"),ed=Symbol.for("react.fragment"),td=Symbol.for("react.strict_mode"),nd=Symbol.for("react.profiler"),rd=Symbol.for("react.provider"),id=Symbol.for("react.context"),I4=Symbol.for("react.server_context"),sd=Symbol.for("react.forward_ref"),od=Symbol.for("react.suspense"),ad=Symbol.for("react.suspense_list"),ld=Symbol.for("react.memo"),ud=Symbol.for("react.lazy"),x4=Symbol.for("react.offscreen"),HS;HS=Symbol.for("react.module.reference");function En(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Pv:switch(t=t.type,t){case ed:case nd:case td:case od:case ad:return t;default:switch(t=t&&t.$$typeof,t){case I4:case id:case sd:case ud:case ld:case rd:return t;default:return e}}case bv:return e}}}ke.ContextConsumer=id;ke.ContextProvider=rd;ke.Element=Pv;ke.ForwardRef=sd;ke.Fragment=ed;ke.Lazy=ud;ke.Memo=ld;ke.Portal=bv;ke.Profiler=nd;ke.StrictMode=td;ke.Suspense=od;ke.SuspenseList=ad;ke.isAsyncMode=function(){return!1};ke.isConcurrentMode=function(){return!1};ke.isContextConsumer=function(t){return En(t)===id};ke.isContextProvider=function(t){return En(t)===rd};ke.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pv};ke.isForwardRef=function(t){return En(t)===sd};ke.isFragment=function(t){return En(t)===ed};ke.isLazy=function(t){return En(t)===ud};ke.isMemo=function(t){return En(t)===ld};ke.isPortal=function(t){return En(t)===bv};ke.isProfiler=function(t){return En(t)===nd};ke.isStrictMode=function(t){return En(t)===td};ke.isSuspense=function(t){return En(t)===od};ke.isSuspenseList=function(t){return En(t)===ad};ke.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ed||t===nd||t===td||t===od||t===ad||t===x4||typeof t=="object"&&t!==null&&(t.$$typeof===ud||t.$$typeof===ld||t.$$typeof===rd||t.$$typeof===id||t.$$typeof===sd||t.$$typeof===HS||t.getModuleId!==void 0)};ke.typeOf=En;Dv.exports=ke;function A4(t){function e(N,R,F,J,_){for(var Q=0,U=0,ue=0,ne=0,Ce,se,W=0,fe=0,de,ze=de=Ce=0,we=0,ft=0,Yo=0,pt=0,Cu=F.length,Jo=Cu-1,Cn,oe="",Ke="",yf="",wf="",$r;we<Cu;){if(se=F.charCodeAt(we),we===Jo&&U+ne+ue+Q!==0&&(U!==0&&(se=U===47?10:47),ne=ue=Q=0,Cu++,Jo++),U+ne+ue+Q===0){if(we===Jo&&(0<ft&&(oe=oe.replace(d,"")),0<oe.trim().length)){switch(se){case 32:case 9:case 59:case 13:case 10:break;default:oe+=F.charAt(we)}se=59}switch(se){case 123:for(oe=oe.trim(),Ce=oe.charCodeAt(0),de=1,pt=++we;we<Cu;){switch(se=F.charCodeAt(we)){case 123:de++;break;case 125:de--;break;case 47:switch(se=F.charCodeAt(we+1)){case 42:case 47:e:{for(ze=we+1;ze<Jo;++ze)switch(F.charCodeAt(ze)){case 47:if(se===42&&F.charCodeAt(ze-1)===42&&we+2!==ze){we=ze+1;break e}break;case 10:if(se===47){we=ze+1;break e}}we=ze}}break;case 91:se++;case 40:se++;case 34:case 39:for(;we++<Jo&&F.charCodeAt(we)!==se;);}if(de===0)break;we++}switch(de=F.substring(pt,we),Ce===0&&(Ce=(oe=oe.replace(h,"").trim()).charCodeAt(0)),Ce){case 64:switch(0<ft&&(oe=oe.replace(d,"")),se=oe.charCodeAt(1),se){case 100:case 109:case 115:case 45:ft=R;break;default:ft=pe}if(de=e(R,ft,de,se,_+1),pt=de.length,0<x&&(ft=n(pe,oe,Yo),$r=a(3,de,ft,R,H,z,pt,se,_,J),oe=ft.join(""),$r!==void 0&&(pt=(de=$r.trim()).length)===0&&(se=0,de="")),0<pt)switch(se){case 115:oe=oe.replace(I,o);case 100:case 109:case 45:de=oe+"{"+de+"}";break;case 107:oe=oe.replace(f,"$1 $2"),de=oe+"{"+de+"}",de=q===1||q===2&&s("@"+de,3)?"@-webkit-"+de+"@"+de:"@"+de;break;default:de=oe+de,J===112&&(de=(Ke+=de,""))}else de="";break;default:de=e(R,n(R,oe,Yo),de,J,_+1)}yf+=de,de=Yo=ft=ze=Ce=0,oe="",se=F.charCodeAt(++we);break;case 125:case 59:if(oe=(0<ft?oe.replace(d,""):oe).trim(),1<(pt=oe.length))switch(ze===0&&(Ce=oe.charCodeAt(0),Ce===45||96<Ce&&123>Ce)&&(pt=(oe=oe.replace(" ",":")).length),0<x&&($r=a(1,oe,R,N,H,z,Ke.length,J,_,J))!==void 0&&(pt=(oe=$r.trim()).length)===0&&(oe="\0\0"),Ce=oe.charCodeAt(0),se=oe.charCodeAt(1),Ce){case 0:break;case 64:if(se===105||se===99){wf+=oe+F.charAt(we);break}default:oe.charCodeAt(pt-1)!==58&&(Ke+=i(oe,Ce,se,oe.charCodeAt(2)))}Yo=ft=ze=Ce=0,oe="",se=F.charCodeAt(++we)}}switch(se){case 13:case 10:U===47?U=0:1+Ce===0&&J!==107&&0<oe.length&&(ft=1,oe+="\0"),0<x*A&&a(0,oe,R,N,H,z,Ke.length,J,_,J),z=1,H++;break;case 59:case 125:if(U+ne+ue+Q===0){z++;break}default:switch(z++,Cn=F.charAt(we),se){case 9:case 32:if(ne+Q+U===0)switch(W){case 44:case 58:case 9:case 32:Cn="";break;default:se!==32&&(Cn=" ")}break;case 0:Cn="\\0";break;case 12:Cn="\\f";break;case 11:Cn="\\v";break;case 38:ne+U+Q===0&&(ft=Yo=1,Cn="\f"+Cn);break;case 108:if(ne+U+Q+Y===0&&0<ze)switch(we-ze){case 2:W===112&&F.charCodeAt(we-3)===58&&(Y=W);case 8:fe===111&&(Y=fe)}break;case 58:ne+U+Q===0&&(ze=we);break;case 44:U+ue+ne+Q===0&&(ft=1,Cn+="\r");break;case 34:case 39:U===0&&(ne=ne===se?0:ne===0?se:ne);break;case 91:ne+U+ue===0&&Q++;break;case 93:ne+U+ue===0&&Q--;break;case 41:ne+U+Q===0&&ue--;break;case 40:if(ne+U+Q===0){if(Ce===0)switch(2*W+3*fe){case 533:break;default:Ce=1}ue++}break;case 64:U+ue+ne+Q+ze+de===0&&(de=1);break;case 42:case 47:if(!(0<ne+Q+ue))switch(U){case 0:switch(2*se+3*F.charCodeAt(we+1)){case 235:U=47;break;case 220:pt=we,U=42}break;case 42:se===47&&W===42&&pt+2!==we&&(F.charCodeAt(pt+2)===33&&(Ke+=F.substring(pt,we+1)),Cn="",U=0)}}U===0&&(oe+=Cn)}fe=W,W=se,we++}if(pt=Ke.length,0<pt){if(ft=R,0<x&&($r=a(2,Ke,ft,N,H,z,pt,J,_,J),$r!==void 0&&(Ke=$r).length===0))return wf+Ke+yf;if(Ke=ft.join(",")+"{"+Ke+"}",q*Y!==0){switch(q!==2||s(Ke,2)||(Y=0),Y){case 111:Ke=Ke.replace(C,":-moz-$1")+Ke;break;case 112:Ke=Ke.replace(y,"::-webkit-input-$1")+Ke.replace(y,"::-moz-$1")+Ke.replace(y,":-ms-input-$1")+Ke}Y=0}}return wf+Ke+yf}function n(N,R,F){var J=R.trim().split(E);R=J;var _=J.length,Q=N.length;switch(Q){case 0:case 1:var U=0;for(N=Q===0?"":N[0]+" ";U<_;++U)R[U]=r(N,R[U],F).trim();break;default:var ue=U=0;for(R=[];U<_;++U)for(var ne=0;ne<Q;++ne)R[ue++]=r(N[ne]+" ",J[U],F).trim()}return R}function r(N,R,F){var J=R.charCodeAt(0);switch(33>J&&(J=(R=R.trim()).charCodeAt(0)),J){case 38:return R.replace(v,"$1"+N.trim());case 58:return N.trim()+R.replace(v,"$1"+N.trim());default:if(0<1*F&&0<R.indexOf("\f"))return R.replace(v,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+R}function i(N,R,F,J){var _=N+";",Q=2*R+3*F+4*J;if(Q===944){N=_.indexOf(":",9)+1;var U=_.substring(N,_.length-1).trim();return U=_.substring(0,N).trim()+U+";",q===1||q===2&&s(U,1)?"-webkit-"+U+U:U}if(q===0||q===2&&!s(_,1))return _;switch(Q){case 1015:return _.charCodeAt(10)===97?"-webkit-"+_+_:_;case 951:return _.charCodeAt(3)===116?"-webkit-"+_+_:_;case 963:return _.charCodeAt(5)===110?"-webkit-"+_+_:_;case 1009:if(_.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+_+_;case 978:return"-webkit-"+_+"-moz-"+_+_;case 1019:case 983:return"-webkit-"+_+"-moz-"+_+"-ms-"+_+_;case 883:if(_.charCodeAt(8)===45)return"-webkit-"+_+_;if(0<_.indexOf("image-set(",11))return _.replace($,"$1-webkit-$2")+_;break;case 932:if(_.charCodeAt(4)===45)switch(_.charCodeAt(5)){case 103:return"-webkit-box-"+_.replace("-grow","")+"-webkit-"+_+"-ms-"+_.replace("grow","positive")+_;case 115:return"-webkit-"+_+"-ms-"+_.replace("shrink","negative")+_;case 98:return"-webkit-"+_+"-ms-"+_.replace("basis","preferred-size")+_}return"-webkit-"+_+"-ms-"+_+_;case 964:return"-webkit-"+_+"-ms-flex-"+_+_;case 1023:if(_.charCodeAt(8)!==99)break;return U=_.substring(_.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+U+"-webkit-"+_+"-ms-flex-pack"+U+_;case 1005:return m.test(_)?_.replace(p,":-webkit-")+_.replace(p,":-moz-")+_:_;case 1e3:switch(U=_.substring(13).trim(),R=U.indexOf("-")+1,U.charCodeAt(0)+U.charCodeAt(R)){case 226:U=_.replace(S,"tb");break;case 232:U=_.replace(S,"tb-rl");break;case 220:U=_.replace(S,"lr");break;default:return _}return"-webkit-"+_+"-ms-"+U+_;case 1017:if(_.indexOf("sticky",9)===-1)break;case 975:switch(R=(_=N).length-10,U=(_.charCodeAt(R)===33?_.substring(0,R):_).substring(N.indexOf(":",7)+1).trim(),Q=U.charCodeAt(0)+(U.charCodeAt(7)|0)){case 203:if(111>U.charCodeAt(8))break;case 115:_=_.replace(U,"-webkit-"+U)+";"+_;break;case 207:case 102:_=_.replace(U,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+_.replace(U,"-webkit-"+U)+";"+_.replace(U,"-ms-"+U+"box")+";"+_}return _+";";case 938:if(_.charCodeAt(5)===45)switch(_.charCodeAt(6)){case 105:return U=_.replace("-items",""),"-webkit-"+_+"-webkit-box-"+U+"-ms-flex-"+U+_;case 115:return"-webkit-"+_+"-ms-flex-item-"+_.replace(k,"")+_;default:return"-webkit-"+_+"-ms-flex-line-pack"+_.replace("align-content","").replace(k,"")+_}break;case 973:case 989:if(_.charCodeAt(3)!==45||_.charCodeAt(4)===122)break;case 931:case 953:if(P.test(N)===!0)return(U=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?i(N.replace("stretch","fill-available"),R,F,J).replace(":fill-available",":stretch"):_.replace(U,"-webkit-"+U)+_.replace(U,"-moz-"+U.replace("fill-",""))+_;break;case 962:if(_="-webkit-"+_+(_.charCodeAt(5)===102?"-ms-"+_:"")+_,F+J===211&&_.charCodeAt(13)===105&&0<_.indexOf("transform",10))return _.substring(0,_.indexOf(";",27)+1).replace(g,"$1-webkit-$2")+_}return _}function s(N,R){var F=N.indexOf(R===1?":":"{"),J=N.substring(0,R!==3?F:10);return F=N.substring(F+1,N.length-1),O(R!==2?J:J.replace(V,"$1"),F,R)}function o(N,R){var F=i(R,R.charCodeAt(0),R.charCodeAt(1),R.charCodeAt(2));return F!==R+";"?F.replace(T," or ($1)").substring(4):"("+R+")"}function a(N,R,F,J,_,Q,U,ue,ne,Ce){for(var se=0,W=R,fe;se<x;++se)switch(fe=le[se].call(c,N,W,F,J,_,Q,U,ue,ne,Ce)){case void 0:case!1:case!0:case null:break;default:W=fe}if(W!==R)return W}function l(N){switch(N){case void 0:case null:x=le.length=0;break;default:if(typeof N=="function")le[x++]=N;else if(typeof N=="object")for(var R=0,F=N.length;R<F;++R)l(N[R]);else A=!!N|0}return l}function u(N){return N=N.prefix,N!==void 0&&(O=null,N?typeof N!="function"?q=1:(q=2,O=N):q=0),u}function c(N,R){var F=N;if(33>F.charCodeAt(0)&&(F=F.trim()),j=F,F=[j],0<x){var J=a(-1,R,F,F,H,z,0,0,0,0);J!==void 0&&typeof J=="string"&&(R=J)}var _=e(pe,F,R,0,0);return 0<x&&(J=a(-2,_,F,F,H,z,_.length,0,0,0),J!==void 0&&(_=J)),j="",Y=0,z=H=1,_}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,m=/zoo|gra/,g=/([,: ])(transform)/g,E=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,C=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,I=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,k=/-self|flex-/g,V=/[^]*?(:[rp][el]a[\w-]+)[^]*/,P=/stretch|:\s*\w+\-(?:conte|avail)/,$=/([^-])(image-set\()/,z=1,H=1,Y=0,q=1,pe=[],le=[],x=0,O=null,A=0,j="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var N4={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function R4(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var D4=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ew=R4(function(t){return D4.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),WS={exports:{}},Ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ht=typeof Symbol=="function"&&Symbol.for,Ov=ht?Symbol.for("react.element"):60103,$v=ht?Symbol.for("react.portal"):60106,cd=ht?Symbol.for("react.fragment"):60107,hd=ht?Symbol.for("react.strict_mode"):60108,dd=ht?Symbol.for("react.profiler"):60114,fd=ht?Symbol.for("react.provider"):60109,pd=ht?Symbol.for("react.context"):60110,Lv=ht?Symbol.for("react.async_mode"):60111,md=ht?Symbol.for("react.concurrent_mode"):60111,gd=ht?Symbol.for("react.forward_ref"):60112,vd=ht?Symbol.for("react.suspense"):60113,P4=ht?Symbol.for("react.suspense_list"):60120,yd=ht?Symbol.for("react.memo"):60115,wd=ht?Symbol.for("react.lazy"):60116,b4=ht?Symbol.for("react.block"):60121,O4=ht?Symbol.for("react.fundamental"):60117,$4=ht?Symbol.for("react.responder"):60118,L4=ht?Symbol.for("react.scope"):60119;function an(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ov:switch(t=t.type,t){case Lv:case md:case cd:case dd:case hd:case vd:return t;default:switch(t=t&&t.$$typeof,t){case pd:case gd:case wd:case yd:case fd:return t;default:return e}}case $v:return e}}}function GS(t){return an(t)===md}Ie.AsyncMode=Lv;Ie.ConcurrentMode=md;Ie.ContextConsumer=pd;Ie.ContextProvider=fd;Ie.Element=Ov;Ie.ForwardRef=gd;Ie.Fragment=cd;Ie.Lazy=wd;Ie.Memo=yd;Ie.Portal=$v;Ie.Profiler=dd;Ie.StrictMode=hd;Ie.Suspense=vd;Ie.isAsyncMode=function(t){return GS(t)||an(t)===Lv};Ie.isConcurrentMode=GS;Ie.isContextConsumer=function(t){return an(t)===pd};Ie.isContextProvider=function(t){return an(t)===fd};Ie.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ov};Ie.isForwardRef=function(t){return an(t)===gd};Ie.isFragment=function(t){return an(t)===cd};Ie.isLazy=function(t){return an(t)===wd};Ie.isMemo=function(t){return an(t)===yd};Ie.isPortal=function(t){return an(t)===$v};Ie.isProfiler=function(t){return an(t)===dd};Ie.isStrictMode=function(t){return an(t)===hd};Ie.isSuspense=function(t){return an(t)===vd};Ie.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===cd||t===md||t===dd||t===hd||t===vd||t===P4||typeof t=="object"&&t!==null&&(t.$$typeof===wd||t.$$typeof===yd||t.$$typeof===fd||t.$$typeof===pd||t.$$typeof===gd||t.$$typeof===O4||t.$$typeof===$4||t.$$typeof===L4||t.$$typeof===b4)};Ie.typeOf=an;WS.exports=Ie;var Mv=WS.exports,M4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},F4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},U4={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},KS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fv={};Fv[Mv.ForwardRef]=U4;Fv[Mv.Memo]=KS;function tw(t){return Mv.isMemo(t)?KS:Fv[t.$$typeof]||M4}var B4=Object.defineProperty,z4=Object.getOwnPropertyNames,nw=Object.getOwnPropertySymbols,V4=Object.getOwnPropertyDescriptor,j4=Object.getPrototypeOf,rw=Object.prototype;function qS(t,e,n){if(typeof e!="string"){if(rw){var r=j4(e);r&&r!==rw&&qS(t,r,n)}var i=z4(e);nw&&(i=i.concat(nw(e)));for(var s=tw(t),o=tw(e),a=0;a<i.length;++a){var l=i[a];if(!F4[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=V4(e,l);try{B4(t,l,u)}catch{}}}}return t}var H4=qS;function zn(){return(zn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var iw=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Nm=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Dv.exports.typeOf(t)},Jc=Object.freeze([]),ai=Object.freeze({});function al(t){return typeof t=="function"}function sw(t){return t.displayName||t.name||"Component"}function Uv(t){return t&&typeof t.styledComponentId=="string"}var yo=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Bv=typeof window!="undefined"&&"HTMLElement"in window,W4=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),G4={};function zl(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var K4=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&zl(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),fc=new Map,Zc=new Map,Pa=1,Uu=function(t){if(fc.has(t))return fc.get(t);for(;Zc.has(Pa);)Pa++;var e=Pa++;return fc.set(t,e),Zc.set(e,t),e},q4=function(t){return Zc.get(t)},Q4=function(t,e){e>=Pa&&(Pa=e+1),fc.set(t,e),Zc.set(e,t)},X4="style["+yo+'][data-styled-version="5.3.10"]',Y4=new RegExp("^"+yo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),J4=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},Z4=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(Y4);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(Q4(u,l),J4(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},eD=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},QS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(yo))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(yo,"active"),r.setAttribute("data-styled-version","5.3.10");var o=eD();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},tD=function(){function t(n){var r=this.element=QS(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}zl(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),nD=function(){function t(n){var r=this.element=QS(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),rD=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),ow=Bv,iD={isServer:!Bv,useCSSOMInjection:!W4},eh=function(){function t(n,r,i){n===void 0&&(n=ai),r===void 0&&(r={}),this.options=zn({},iD,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Bv&&ow&&(ow=!1,function(s){for(var o=document.querySelectorAll(X4),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(yo)!=="active"&&(Z4(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Uu(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(zn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new rD(o):s?new tD(o):new nD(o),new K4(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Uu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Uu(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Uu(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=q4(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=yo+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),sD=/(a)(d)/gi,aw=function(t){return String.fromCharCode(t+(t>25?39:97))};function Rm(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=aw(e%52)+n;return(aw(e%52)+n).replace(sD,"$1-$2")}var Ws=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},XS=function(t){return Ws(5381,t)};function YS(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(al(n)&&!Uv(n))return!1}return!0}var oD=XS("5.3.10"),aD=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&YS(e),this.componentId=n,this.baseHash=Ws(oD,n),this.baseStyle=r,eh.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=is(this.rules,e,n,r).join(""),a=Rm(Ws(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Ws(this.baseHash,r.hash),h="",d=0;d<u;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var m=is(p,e,n,r),g=Array.isArray(m)?m.join(""):m;c=Ws(c,g+d),h+=g}}if(h){var E=Rm(c>>>0);if(!n.hasNameForId(i,E)){var v=r(h,"."+E,void 0,i);n.insertRules(i,E,v)}s.push(E)}}return s.join(" ")},t}(),lD=/^\s*\/\/.*$/gm,uD=[":","[",".","#"];function cD(t){var e,n,r,i,s=t===void 0?ai:t,o=s.options,a=o===void 0?ai:o,l=s.plugins,u=l===void 0?Jc:l,c=new A4(a),h=[],d=function(g){function E(v){if(v)try{g(v+"}")}catch{}}return function(v,f,y,C,S,I,T,k,V,P){switch(v){case 1:if(V===0&&f.charCodeAt(0)===64)return g(f+";"),"";break;case 2:if(k===0)return f+"/*|*/";break;case 3:switch(k){case 102:case 112:return g(y[0]+f),"";default:return f+(P===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(E)}}}(function(g){h.push(g)}),p=function(g,E,v){return E===0&&uD.indexOf(v[n.length])!==-1||v.match(i)?g:"."+e};function m(g,E,v,f){f===void 0&&(f="&");var y=g.replace(lD,""),C=E&&v?v+" "+E+" { "+y+" }":y;return e=f,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(v||!E?"":E,C)}return c.use([].concat(u,[function(g,E,v){g===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(r,p))},d,function(g){if(g===-2){var E=h;return h=[],E}}])),m.hash=u.length?u.reduce(function(g,E){return E.name||zl(15),Ws(g,E.name)},5381).toString():"",m}var JS=ot.createContext();JS.Consumer;var ZS=ot.createContext(),hD=(ZS.Consumer,new eh),Dm=cD();function eT(){return D.exports.useContext(JS)||hD}function tT(){return D.exports.useContext(ZS)||Dm}var dD=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Dm);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return zl(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Dm),this.name+e.hash},t}(),fD=/([A-Z])/,pD=/([A-Z])/g,mD=/^ms-/,gD=function(t){return"-"+t.toLowerCase()};function lw(t){return fD.test(t)?t.replace(pD,gD).replace(mD,"-ms-"):t}var uw=function(t){return t==null||t===!1||t===""};function is(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=is(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(uw(t))return"";if(Uv(t))return"."+t.styledComponentId;if(al(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return is(l,e,n,r)}var u;return t instanceof dD?n?(t.inject(n,r),t.getName(r)):t:Nm(t)?function c(h,d){var p,m,g=[];for(var E in h)h.hasOwnProperty(E)&&!uw(h[E])&&(Array.isArray(h[E])&&h[E].isCss||al(h[E])?g.push(lw(E)+":",h[E],";"):Nm(h[E])?g.push.apply(g,c(h[E],E)):g.push(lw(E)+": "+(p=E,(m=h[E])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||p in N4||p.startsWith("--")?String(m).trim():m+"px")+";"));return d?[d+" {"].concat(g,["}"]):g}(t):t.toString()}var cw=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function Vl(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return al(t)||Nm(t)?cw(is(iw(Jc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:cw(is(iw(t,n)))}var nT=function(t,e,n){return n===void 0&&(n=ai),t.theme!==n.theme&&t.theme||e||n.theme},vD=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yD=/(^-|-$)/g;function Kf(t){return t.replace(vD,"-").replace(yD,"")}var rT=function(t){return Rm(XS(t)>>>0)};function Bu(t){return typeof t=="string"&&!0}var Pm=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},wD=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function ED(t,e,n){var r=t[n];Pm(e)&&Pm(r)?iT(r,e):t[n]=e}function iT(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Pm(o))for(var a in o)wD(a)&&ED(t,o[a],a)}return t}var zv=ot.createContext();zv.Consumer;var qf={};function sT(t,e,n){var r=Uv(t),i=!Bu(t),s=e.attrs,o=s===void 0?Jc:s,a=e.componentId,l=a===void 0?function(f,y){var C=typeof f!="string"?"sc":Kf(f);qf[C]=(qf[C]||0)+1;var S=C+"-"+rT("5.3.10"+C+qf[C]);return y?y+"-"+S:S}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Bu(f)?"styled."+f:"Styled("+sw(f)+")"}(t):u,h=e.displayName&&e.componentId?Kf(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,y,C){return t.shouldForwardProp(f,y,C)&&e.shouldForwardProp(f,y,C)}:t.shouldForwardProp);var m,g=new aD(n,h,r?t.componentStyle:void 0),E=g.isStatic&&o.length===0,v=function(f,y){return function(C,S,I,T){var k=C.attrs,V=C.componentStyle,P=C.defaultProps,$=C.foldedComponentIds,z=C.shouldForwardProp,H=C.styledComponentId,Y=C.target,q=function(J,_,Q){J===void 0&&(J=ai);var U=zn({},_,{theme:J}),ue={};return Q.forEach(function(ne){var Ce,se,W,fe=ne;for(Ce in al(fe)&&(fe=fe(U)),fe)U[Ce]=ue[Ce]=Ce==="className"?(se=ue[Ce],W=fe[Ce],se&&W?se+" "+W:se||W):fe[Ce]}),[U,ue]}(nT(S,D.exports.useContext(zv),P)||ai,S,k),pe=q[0],le=q[1],x=function(J,_,Q,U){var ue=eT(),ne=tT(),Ce=_?J.generateAndInjectStyles(ai,ue,ne):J.generateAndInjectStyles(Q,ue,ne);return Ce}(V,T,pe),O=I,A=le.$as||S.$as||le.as||S.as||Y,j=Bu(A),N=le!==S?zn({},S,{},le):S,R={};for(var F in N)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?R.as=N[F]:(z?z(F,ew,A):!j||ew(F))&&(R[F]=N[F]));return S.style&&le.style!==S.style&&(R.style=zn({},S.style,{},le.style)),R.className=Array.prototype.concat($,H,x!==H?x:null,S.className,le.className).filter(Boolean).join(" "),R.ref=O,D.exports.createElement(A,R)}(m,f,y,E)};return v.displayName=c,(m=ot.forwardRef(v)).attrs=d,m.componentStyle=g,m.displayName=c,m.shouldForwardProp=p,m.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Jc,m.styledComponentId=h,m.target=r?t.target:t,m.withComponent=function(f){var y=e.componentId,C=function(I,T){if(I==null)return{};var k,V,P={},$=Object.keys(I);for(V=0;V<$.length;V++)k=$[V],T.indexOf(k)>=0||(P[k]=I[k]);return P}(e,["componentId"]),S=y&&y+"-"+(Bu(f)?f:Kf(sw(f)));return sT(f,zn({},C,{attrs:d,componentId:S}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?iT({},t.defaultProps,f):f}}),Object.defineProperty(m,"toString",{value:function(){return"."+m.styledComponentId}}),i&&H4(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var bm=function(t){return function e(n,r,i){if(i===void 0&&(i=ai),!Dv.exports.isValidElementType(r))return zl(1,String(r));var s=function(){return n(r,i,Vl.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,zn({},i,{},o))},s.attrs=function(o){return e(n,r,zn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(sT,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){bm[t]=bm(t)});var CD=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=YS(n),eh.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(is(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&eh.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function _D(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Vl.apply(void 0,[t].concat(n)),s="sc-global-"+rT(JSON.stringify(i)),o=new CD(i,s);function a(u){var c=eT(),h=tT(),d=D.exports.useContext(zv),p=D.exports.useRef(c.allocateGSInstance(s)).current;return c.server&&l(p,u,c,d,h),D.exports.useLayoutEffect(function(){if(!c.server)return l(p,u,c,d,h),function(){return o.removeStyles(p,c)}},[p,u,c,d,h]),null}function l(u,c,h,d,p){if(o.isStatic)o.renderStyles(u,G4,h,p);else{var m=zn({},c,{theme:nT(c,d,a.defaultProps)});o.renderStyles(u,m,h,p)}}return ot.memo(a)}var We=bm;const SD=_D`
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
`,TD=We.div`
    min-height: 100vh;
`,kD=We.header`
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
        .toggle {
          display: flex;
          align-items: center;
          justify-content: center;
        }
    }
  }
`;var oT={exports:{}},aT={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=D.exports;function ID(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xD=typeof Object.is=="function"?Object.is:ID,AD=wo.useState,ND=wo.useEffect,RD=wo.useLayoutEffect,DD=wo.useDebugValue;function PD(t,e){var n=e(),r=AD({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return RD(function(){i.value=n,i.getSnapshot=e,Qf(i)&&s({inst:i})},[t,n,e]),ND(function(){return Qf(i)&&s({inst:i}),t(function(){Qf(i)&&s({inst:i})})},[t]),DD(n),n}function Qf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xD(t,n)}catch{return!0}}function bD(t,e){return e()}var OD=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?bD:PD;aT.useSyncExternalStore=wo.useSyncExternalStore!==void 0?wo.useSyncExternalStore:OD;oT.exports=aT;var lT={exports:{}},uT={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed=D.exports,$D=oT.exports;function LD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var MD=typeof Object.is=="function"?Object.is:LD,FD=$D.useSyncExternalStore,UD=Ed.useRef,BD=Ed.useEffect,zD=Ed.useMemo,VD=Ed.useDebugValue;uT.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=UD(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=zD(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var m=o.value;if(i(m,p))return h=m}return h=p}if(m=h,MD(c,p))return m;var g=r(p);return i!==void 0&&i(m,g)?m:(c=p,h=g)}var u=!1,c,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,r,i]);var a=FD(t,s[0],s[1]);return BD(function(){o.hasValue=!0,o.value=a},[a]),VD(a),a};lT.exports=uT;function jD(t){t()}let cT=jD;const HD=t=>cT=t,WD=()=>cT,gi=D.exports.createContext(null);function hT(){return D.exports.useContext(gi)}const GD=()=>{throw new Error("uSES not initialized!")};let dT=GD;const KD=t=>{dT=t},qD=(t,e)=>t===e;function QD(t=gi){const e=t===gi?hT:()=>D.exports.useContext(t);return function(r,i=qD){const{store:s,subscription:o,getServerState:a}=e(),l=dT(o.addNestedSub,s.getState,a||s.getState,r,i);return D.exports.useDebugValue(l),l}}const lt=QD();function XD(){const t=WD();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const hw={notify(){},get:()=>[]};function YD(t,e){let n,r=hw;function i(h){return l(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=XD())}function u(){n&&(n(),n=void 0,r.clear(),r=hw)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const JD=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",ZD=JD?D.exports.useLayoutEffect:D.exports.useEffect;var Cd={exports:{}},_d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eP=D.exports,tP=Symbol.for("react.element"),nP=Symbol.for("react.fragment"),rP=Object.prototype.hasOwnProperty,iP=eP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sP={key:!0,ref:!0,__self:!0,__source:!0};function fT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rP.call(e,r)&&!sP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tP,type:t,key:s,ref:o,props:i,_owner:iP.current}}_d.Fragment=nP;_d.jsx=fT;_d.jsxs=fT;Cd.exports=_d;const w=Cd.exports.jsx,b=Cd.exports.jsxs,ll=Cd.exports.Fragment;function oP({store:t,context:e,children:n,serverState:r}){const i=D.exports.useMemo(()=>{const a=YD(t);return{store:t,subscription:a,getServerState:r?()=>r:void 0}},[t,r]),s=D.exports.useMemo(()=>t.getState(),[t]);return ZD(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==t.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]),w((e||gi).Provider,{value:i,children:n})}function pT(t=gi){const e=t===gi?hT:()=>D.exports.useContext(t);return function(){const{store:r}=e();return r}}const aP=pT();function lP(t=gi){const e=t===gi?aP:pT(t);return function(){return e().dispatch}}const nr=lP();KD(lT.exports.useSyncExternalStoreWithSelector);HD(Mg.exports.unstable_batchedUpdates);function xn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function vi(t){return!!t&&!!t[Pe]}function Ir(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===vP}(t)||Array.isArray(t)||!!t[yw]||!!(!((e=t.constructor)===null||e===void 0)&&e[yw])||Vv(t)||jv(t))}function ss(t,e,n){n===void 0&&(n=!1),Mo(t)===0?(n?Object.keys:to)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function Mo(t){var e=t[Pe];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Vv(t)?2:jv(t)?3:0}function eo(t,e){return Mo(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function uP(t,e){return Mo(t)===2?t.get(e):t[e]}function mT(t,e,n){var r=Mo(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function gT(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Vv(t){return mP&&t instanceof Map}function jv(t){return gP&&t instanceof Set}function Fi(t){return t.o||t.t}function Hv(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=yT(t);delete e[Pe];for(var n=to(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Wv(t,e){return e===void 0&&(e=!1),Gv(t)||vi(t)||!Ir(t)||(Mo(t)>1&&(t.set=t.add=t.clear=t.delete=cP),Object.freeze(t),e&&ss(t,function(n,r){return Wv(r,!0)},!0)),t}function cP(){xn(2)}function Gv(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Gn(t){var e=Mm[t];return e||xn(18,t),e}function hP(t,e){Mm[t]||(Mm[t]=e)}function Om(){return ul}function Xf(t,e){e&&(Gn("Patches"),t.u=[],t.s=[],t.v=e)}function th(t){$m(t),t.p.forEach(dP),t.p=null}function $m(t){t===ul&&(ul=t.l)}function dw(t){return ul={p:[],l:ul,h:t,m:!0,_:0}}function dP(t){var e=t[Pe];e.i===0||e.i===1?e.j():e.g=!0}function Yf(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||Gn("ES5").S(e,t,r),r?(n[Pe].P&&(th(e),xn(4)),Ir(t)&&(t=nh(e,t),e.l||rh(e,t)),e.u&&Gn("Patches").M(n[Pe].t,t,e.u,e.s)):t=nh(e,n,[]),th(e),e.u&&e.v(e.u,e.s),t!==vT?t:void 0}function nh(t,e,n){if(Gv(e))return e;var r=e[Pe];if(!r)return ss(e,function(a,l){return fw(t,r,e,a,l,n)},!0),e;if(r.A!==t)return e;if(!r.P)return rh(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Hv(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),ss(s,function(a,l){return fw(t,r,i,a,l,n,o)}),rh(t,i,!1),n&&t.u&&Gn("Patches").N(r,n,t.u,t.s)}return r.o}function fw(t,e,n,r,i,s,o){if(vi(i)){var a=nh(t,i,s&&e&&e.i!==3&&!eo(e.R,r)?s.concat(r):void 0);if(mT(n,r,a),!vi(a))return;t.m=!1}else o&&n.add(i);if(Ir(i)&&!Gv(i)){if(!t.h.D&&t._<1)return;nh(t,i),e&&e.A.l||rh(t,i)}}function rh(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&Wv(e,n)}function Jf(t,e){var n=t[Pe];return(n?Fi(n):t)[e]}function pw(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Vr(t){t.P||(t.P=!0,t.l&&Vr(t.l))}function Zf(t){t.o||(t.o=Hv(t.t))}function Lm(t,e,n){var r=Vv(e)?Gn("MapSet").F(e,n):jv(e)?Gn("MapSet").T(e,n):t.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:Om(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=cl;o&&(l=[a],u=ma);var c=Proxy.revocable(l,u),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(e,n):Gn("ES5").J(e,n);return(n?n.A:Om()).p.push(r),r}function fP(t){return vi(t)||xn(22,t),function e(n){if(!Ir(n))return n;var r,i=n[Pe],s=Mo(n);if(i){if(!i.P&&(i.i<4||!Gn("ES5").K(i)))return i.t;i.I=!0,r=mw(n,s),i.I=!1}else r=mw(n,s);return ss(r,function(o,a){i&&uP(i.t,o)===a||mT(r,o,e(a))}),s===3?new Set(r):r}(t)}function mw(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Hv(t)}function pP(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[Pe];return cl.get(l,s)},set:function(l){var u=this[Pe];cl.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][Pe];if(!a.P)switch(a.i){case 5:r(a)&&Vr(a);break;case 4:n(a)&&Vr(a)}}}function n(s){for(var o=s.t,a=s.k,l=to(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==Pe){var h=o[c];if(h===void 0&&!eo(o,c))return!0;var d=a[c],p=d&&d[Pe];if(p?p.t!==h:!gT(d,h))return!0}}var m=!!o[Pe];return l.length!==to(o).length+(m?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};hP("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,h){if(c){for(var d=Array(h.length),p=0;p<h.length;p++)Object.defineProperty(d,""+p,t(p,!0));return d}var m=yT(h);delete m[Pe];for(var g=to(m),E=0;E<g.length;E++){var v=g[E];m[v]=t(v,c||!!m[v].enumerable)}return Object.create(Object.getPrototypeOf(h),m)}(a,s),u={i:a?5:4,A:o?o.A:Om(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,Pe,{value:u,writable:!0}),l},S:function(s,o,a){a?vi(o)&&o[Pe].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[Pe];if(c){var h=c.t,d=c.k,p=c.R,m=c.i;if(m===4)ss(d,function(y){y!==Pe&&(h[y]!==void 0||eo(h,y)?p[y]||l(d[y]):(p[y]=!0,Vr(c)))}),ss(h,function(y){d[y]!==void 0||eo(d,y)||(p[y]=!1,Vr(c))});else if(m===5){if(r(c)&&(Vr(c),p.length=!0),d.length<h.length)for(var g=d.length;g<h.length;g++)p[g]=!1;else for(var E=h.length;E<d.length;E++)p[E]=!0;for(var v=Math.min(d.length,h.length),f=0;f<v;f++)d.hasOwnProperty(f)||(p[f]=!0),p[f]===void 0&&l(d[f])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var gw,ul,Kv=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",mP=typeof Map!="undefined",gP=typeof Set!="undefined",vw=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",vT=Kv?Symbol.for("immer-nothing"):((gw={})["immer-nothing"]=!0,gw),yw=Kv?Symbol.for("immer-draftable"):"__$immer_draftable",Pe=Kv?Symbol.for("immer-state"):"__$immer_state",vP=""+Object.prototype.constructor,to=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,yT=Object.getOwnPropertyDescriptors||function(t){var e={};return to(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Mm={},cl={get:function(t,e){if(e===Pe)return t;var n=Fi(t);if(!eo(n,e))return function(i,s,o){var a,l=pw(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!Ir(r)?r:r===Jf(t.t,e)?(Zf(t),t.o[e]=Lm(t.A.h,r,t)):r},has:function(t,e){return e in Fi(t)},ownKeys:function(t){return Reflect.ownKeys(Fi(t))},set:function(t,e,n){var r=pw(Fi(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=Jf(Fi(t),e),s=i==null?void 0:i[Pe];if(s&&s.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(gT(n,i)&&(n!==void 0||eo(t.t,e)))return!0;Zf(t),Vr(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return Jf(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,Zf(t),Vr(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=Fi(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){xn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){xn(12)}},ma={};ss(cl,function(t,e){ma[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),ma.deleteProperty=function(t,e){return ma.set.call(this,t,e,void 0)},ma.set=function(t,e,n){return cl.set.call(this,t[0],e,n,t[0])};var yP=function(){function t(n){var r=this;this.O=vw,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(g){var E=this;g===void 0&&(g=a);for(var v=arguments.length,f=Array(v>1?v-1:0),y=1;y<v;y++)f[y-1]=arguments[y];return l.produce(g,function(C){var S;return(S=s).call.apply(S,[E,C].concat(f))})}}var u;if(typeof s!="function"&&xn(6),o!==void 0&&typeof o!="function"&&xn(7),Ir(i)){var c=dw(r),h=Lm(r,i,void 0),d=!0;try{u=s(h),d=!1}finally{d?th(c):$m(c)}return typeof Promise!="undefined"&&u instanceof Promise?u.then(function(g){return Xf(c,o),Yf(g,c)},function(g){throw th(c),g}):(Xf(c,o),Yf(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===vT&&(u=void 0),r.D&&Wv(u,!0),o){var p=[],m=[];Gn("Patches").M(i,u,p,m),o(p,m)}return u}xn(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(u,function(p){return i.apply(void 0,[p].concat(h))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise!="undefined"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Ir(n)||xn(8),vi(n)&&(n=fP(n));var r=dw(this),i=Lm(this,n,void 0);return i[Pe].C=!0,$m(r),i},e.finishDraft=function(n,r){var i=n&&n[Pe],s=i.A;return Xf(s,r),Yf(void 0,s)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!vw&&xn(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=Gn("Patches").$;return vi(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),nn=new yP,wT=nn.produce;nn.produceWithPatches.bind(nn);nn.setAutoFreeze.bind(nn);nn.setUseProxies.bind(nn);nn.applyPatches.bind(nn);nn.createDraft.bind(nn);nn.finishDraft.bind(nn);function hl(t){return hl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hl(t)}function wP(t,e){if(hl(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(hl(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function EP(t){var e=wP(t,"string");return hl(e)==="symbol"?e:String(e)}function CP(t,e,n){return e=EP(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ww(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ew(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ww(Object(n),!0).forEach(function(r){CP(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ww(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function kt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var Cw=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),ep=function(){return Math.random().toString(36).substring(7).split("").join(".")},ih={INIT:"@@redux/INIT"+ep(),REPLACE:"@@redux/REPLACE"+ep(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ep()}};function _P(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function ET(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(kt(0));if(typeof e=="function"&&typeof n=="undefined"&&(n=e,e=void 0),typeof n!="undefined"){if(typeof n!="function")throw new Error(kt(1));return n(ET)(t,e)}if(typeof t!="function")throw new Error(kt(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(kt(3));return s}function h(g){if(typeof g!="function")throw new Error(kt(4));if(l)throw new Error(kt(5));var E=!0;return u(),a.push(g),function(){if(!!E){if(l)throw new Error(kt(6));E=!1,u();var f=a.indexOf(g);a.splice(f,1),o=null}}}function d(g){if(!_P(g))throw new Error(kt(7));if(typeof g.type=="undefined")throw new Error(kt(8));if(l)throw new Error(kt(9));try{l=!0,s=i(s,g)}finally{l=!1}for(var E=o=a,v=0;v<E.length;v++){var f=E[v];f()}return g}function p(g){if(typeof g!="function")throw new Error(kt(10));i=g,d({type:ih.REPLACE})}function m(){var g,E=h;return g={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(kt(11));function y(){f.next&&f.next(c())}y();var C=E(y);return{unsubscribe:C}}},g[Cw]=function(){return this},g}return d({type:ih.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:p},r[Cw]=m,r}function SP(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:ih.INIT});if(typeof r=="undefined")throw new Error(kt(12));if(typeof n(void 0,{type:ih.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(kt(13))})}function TP(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{SP(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var p=s[d],m=n[p],g=l[p],E=m(g,u);if(typeof E=="undefined")throw u&&u.type,new Error(kt(14));h[p]=E,c=c||E!==g}return c=c||s.length!==Object.keys(l).length,c?h:l}}function sh(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function kP(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(kt(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=sh.apply(void 0,a)(i.dispatch),Ew(Ew({},i),{},{dispatch:s})}}}function CT(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var _T=CT();_T.withExtraArgument=CT;var _w=_T,ST=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),IP=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Eo=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},xP=Object.defineProperty,AP=Object.defineProperties,NP=Object.getOwnPropertyDescriptors,Sw=Object.getOwnPropertySymbols,RP=Object.prototype.hasOwnProperty,DP=Object.prototype.propertyIsEnumerable,Tw=function(t,e,n){return e in t?xP(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},li=function(t,e){for(var n in e||(e={}))RP.call(e,n)&&Tw(t,n,e[n]);if(Sw)for(var r=0,i=Sw(e);r<i.length;r++){var n=i[r];DP.call(e,n)&&Tw(t,n,e[n])}return t},tp=function(t,e){return AP(t,NP(e))},PP=function(t,e,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(t,e)).next())})},bP=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?sh:sh.apply(null,arguments)};function OP(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var $P=function(t){ST(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Eo([void 0],n[0].concat(this)))):new(e.bind.apply(e,Eo([void 0],n.concat(this))))},e}(Array),LP=function(t){ST(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Eo([void 0],n[0].concat(this)))):new(e.bind.apply(e,Eo([void 0],n.concat(this))))},e}(Array);function Fm(t){return Ir(t)?wT(t,function(){}):t}function MP(t){return typeof t=="boolean"}function FP(){return function(e){return UP(e)}}function UP(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new $P;return n&&(MP(n)?r.push(_w):r.push(_w.withExtraArgument(n.extraArgument))),r}var BP=!0;function zP(t){var e=FP(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,h=n.enhancers,d=h===void 0?void 0:h,p;if(typeof i=="function")p=i;else if(OP(i))p=TP(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var m=o;typeof m=="function"&&(m=m(e));var g=kP.apply(void 0,m),E=sh;l&&(E=bP(li({trace:!BP},typeof l=="object"&&l)));var v=new LP(g),f=v;Array.isArray(d)?f=Eo([g],d):typeof d=="function"&&(f=d(v));var y=E.apply(void 0,f);return ET(p,c,y)}function ui(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return li(li({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function TT(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function VP(t){return typeof t=="function"}function jP(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?TT(e):[e,n,r],s=i[0],o=i[1],a=i[2],l;if(VP(t))l=function(){return Fm(t())};else{var u=Fm(t);l=function(){return u}}function c(h,d){h===void 0&&(h=l());var p=Eo([s[d.type]],o.filter(function(m){var g=m.matcher;return g(d)}).map(function(m){var g=m.reducer;return g}));return p.filter(function(m){return!!m}).length===0&&(p=[a]),p.reduce(function(m,g){if(g)if(vi(m)){var E=m,v=g(E,d);return v===void 0?m:v}else{if(Ir(m))return wT(m,function(f){return g(f,d)});var v=g(m,d);if(v===void 0){if(m===null)return m;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}return m},h)}return c.getInitialState=l,c}function HP(t,e){return t+"/"+e}function ws(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");var n=typeof t.initialState=="function"?t.initialState:Fm(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=HP(e,c),p,m;"reducer"in h?(p=h.reducer,m=h.prepare):p=h,s[c]=p,o[d]=p,a[c]=m?ui(d,m):ui(d)});function l(){var c=typeof t.extraReducers=="function"?TT(t.extraReducers):[t.extraReducers],h=c[0],d=h===void 0?{}:h,p=c[1],m=p===void 0?[]:p,g=c[2],E=g===void 0?void 0:g,v=li(li({},d),o);return jP(n,function(f){for(var y in v)f.addCase(y,v[y]);for(var C=0,S=m;C<S.length;C++){var I=S[C];f.addMatcher(I.matcher,I.reducer)}E&&f.addDefaultCase(E)})}var u;return{name:e,reducer:function(c,h){return u||(u=l()),u(c,h)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var WP="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",GP=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=WP[Math.random()*64|0];return e},KP=["name","message","stack","code"],np=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),kw=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),qP=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=KP;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}},$n=function(){function t(e,n,r){var i=ui(e+"/fulfilled",function(u,c,h,d){return{payload:u,meta:tp(li({},d||{}),{arg:h,requestId:c,requestStatus:"fulfilled"})}}),s=ui(e+"/pending",function(u,c,h){return{payload:void 0,meta:tp(li({},h||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=ui(e+"/rejected",function(u,c,h,d,p){return{payload:d,error:(r&&r.serializeError||qP)(u||"Rejected"),meta:tp(li({},p||{}),{arg:h,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController!="undefined"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,h,d){var p=r!=null&&r.idGenerator?r.idGenerator(u):GP(),m=new a,g;function E(f){g=f,m.abort()}var v=function(){return PP(this,null,function(){var f,y,C,S,I,T,k;return IP(this,function(V){switch(V.label){case 0:return V.trys.push([0,4,,5]),S=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:h,extra:d}),XP(S)?[4,S]:[3,2];case 1:S=V.sent(),V.label=2;case 2:if(S===!1||m.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return I=new Promise(function(P,$){return m.signal.addEventListener("abort",function(){return $({name:"AbortError",message:g||"Aborted"})})}),c(s(p,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:p,arg:u},{getState:h,extra:d}))),[4,Promise.race([I,Promise.resolve(n(u,{dispatch:c,getState:h,extra:d,requestId:p,signal:m.signal,abort:E,rejectWithValue:function(P,$){return new np(P,$)},fulfillWithValue:function(P,$){return new kw(P,$)}})).then(function(P){if(P instanceof np)throw P;return P instanceof kw?i(P.payload,p,u,P.meta):i(P,p,u)})])];case 3:return C=V.sent(),[3,5];case 4:return T=V.sent(),C=T instanceof np?o(null,p,u,T.payload,T.meta):o(T,p,u),[3,5];case 5:return k=r&&!r.dispatchConditionRejection&&o.match(C)&&C.meta.condition,k||c(C),[2,C]}})})}();return Object.assign(v,{abort:E,requestId:p,arg:u,unwrap:function(){return v.then(QP)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t}();function QP(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function XP(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var YP=function(t){return t&&typeof t.match=="function"},kT=function(t,e){return YP(t)?t.match(e):t(e)};function JP(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n){return t.some(function(r){return kT(r,n)})}}function Iw(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n){return t.every(function(r){return kT(r,n)})}}function ZP(t,e){if(!t||!t.meta)return!1;var n=typeof t.meta.requestId=="string",r=e.indexOf(t.meta.requestStatus)>-1;return n&&r}function IT(t){return typeof t[0]=="function"&&"pending"in t[0]&&"fulfilled"in t[0]&&"rejected"in t[0]}function Um(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.length===0?function(n){return ZP(n,["rejected"])}:IT(t)?function(n){var r=t.map(function(s){return s.rejected}),i=JP.apply(void 0,r);return i(n)}:Um()(t[0])}function qv(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=function(r){return r&&r.meta&&r.meta.rejectedWithValue};return t.length===0?function(r){var i=Iw(Um.apply(void 0,t),n);return i(r)}:IT(t)?function(r){var i=Iw(Um.apply(void 0,t),n);return i(r)}:qv()(t[0])}var Qv="listenerMiddleware";ui(Qv+"/add");ui(Qv+"/removeAll");ui(Qv+"/remove");var xw;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window!="undefined"?window:typeof global!="undefined"?global:globalThis);pP();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const xT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},AT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new tb;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nb=function(t){const e=xT(t);return AT.encodeByteArray(e,!0)},oh=function(t){return nb(t).replace(/\./g,"")},NT=function(t){try{return AT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const ib=()=>rb().__FIREBASE_DEFAULTS__,sb=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ob=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&NT(t[1]);return e&&JSON.parse(e)},Sd=()=>{try{return ib()||sb()||ob()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},RT=t=>{var e,n;return(n=(e=Sd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},DT=t=>{const e=RT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ab=()=>{var t;return(t=Sd())===null||t===void 0?void 0:t.config},PT=t=>{var e;return(e=Sd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function bT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[oh(JSON.stringify(n)),oh(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ub(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function cb(){var t;const e=(t=Sd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pb(){const t=Ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mb(){try{return typeof indexedDB=="object"}catch{return!1}}function gb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb="FirebaseError";class rr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vb,Object.setPrototypeOf(this,rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jl.prototype.create)}}class jl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rr(i,a,r)}}function yb(t,e){return t.replace(wb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wb=/\{\$([^}]+)}/g;function Eb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ah(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Aw(s)&&Aw(o)){if(!ah(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Aw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ga(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function va(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Cb(t,e){const n=new _b(t,e);return n.subscribe.bind(n)}class _b{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Sb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=rp),i.error===void 0&&(i.error=rp),i.complete===void 0&&(i.complete=rp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rp(){}/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}class yi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ui="[DEFAULT]";/**
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
 */class Tb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ib(e))try{this.getOrInitializeService({instanceIdentifier:Ui})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ui){return this.instances.has(e)}getOptions(e=Ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ui){return this.component?this.component.multipleInstances?e:Ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kb(t){return t===Ui?void 0:t}function Ib(t){return t.instantiationMode==="EAGER"}/**
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
 */class xb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const Ab={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Nb=Ee.INFO,Rb={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},Db=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Rb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xv{constructor(e){this.name=e,this._logLevel=Nb,this._logHandler=Db,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ab[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const Pb=(t,e)=>e.some(n=>t instanceof n);let Nw,Rw;function bb(){return Nw||(Nw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ob(){return Rw||(Rw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const OT=new WeakMap,Bm=new WeakMap,$T=new WeakMap,ip=new WeakMap,Yv=new WeakMap;function $b(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ci(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&OT.set(n,t)}).catch(()=>{}),Yv.set(e,t),e}function Lb(t){if(Bm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bm.set(t,e)}let zm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$T.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ci(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Mb(t){zm=t(zm)}function Fb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sp(this),e,...n);return $T.set(r,e.sort?e.sort():[e]),ci(r)}:Ob().includes(t)?function(...e){return t.apply(sp(this),e),ci(OT.get(this))}:function(...e){return ci(t.apply(sp(this),e))}}function Ub(t){return typeof t=="function"?Fb(t):(t instanceof IDBTransaction&&Lb(t),Pb(t,bb())?new Proxy(t,zm):t)}function ci(t){if(t instanceof IDBRequest)return $b(t);if(ip.has(t))return ip.get(t);const e=Ub(t);return e!==t&&(ip.set(t,e),Yv.set(e,t)),e}const sp=t=>Yv.get(t);function Bb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ci(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ci(o.result),l.oldVersion,l.newVersion,ci(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const zb=["get","getKey","getAll","getAllKeys","count"],Vb=["put","add","delete","clear"],op=new Map;function Dw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(op.get(e))return op.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Vb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return op.set(e,s),s}Mb(t=>({...t,get:(e,n,r)=>Dw(e,n)||t.get(e,n,r),has:(e,n)=>!!Dw(e,n)||t.has(e,n)}));/**
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
 */class jb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vm="@firebase/app",Pw="0.9.9";/**
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
 */const os=new Xv("@firebase/app"),Wb="@firebase/app-compat",Gb="@firebase/analytics-compat",Kb="@firebase/analytics",qb="@firebase/app-check-compat",Qb="@firebase/app-check",Xb="@firebase/auth",Yb="@firebase/auth-compat",Jb="@firebase/database",Zb="@firebase/database-compat",eO="@firebase/functions",tO="@firebase/functions-compat",nO="@firebase/installations",rO="@firebase/installations-compat",iO="@firebase/messaging",sO="@firebase/messaging-compat",oO="@firebase/performance",aO="@firebase/performance-compat",lO="@firebase/remote-config",uO="@firebase/remote-config-compat",cO="@firebase/storage",hO="@firebase/storage-compat",dO="@firebase/firestore",fO="@firebase/firestore-compat",pO="firebase",mO="9.21.0";/**
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
 */const jm="[DEFAULT]",gO={[Vm]:"fire-core",[Wb]:"fire-core-compat",[Kb]:"fire-analytics",[Gb]:"fire-analytics-compat",[Qb]:"fire-app-check",[qb]:"fire-app-check-compat",[Xb]:"fire-auth",[Yb]:"fire-auth-compat",[Jb]:"fire-rtdb",[Zb]:"fire-rtdb-compat",[eO]:"fire-fn",[tO]:"fire-fn-compat",[nO]:"fire-iid",[rO]:"fire-iid-compat",[iO]:"fire-fcm",[sO]:"fire-fcm-compat",[oO]:"fire-perf",[aO]:"fire-perf-compat",[lO]:"fire-rc",[uO]:"fire-rc-compat",[cO]:"fire-gcs",[hO]:"fire-gcs-compat",[dO]:"fire-fst",[fO]:"fire-fst-compat","fire-js":"fire-js",[pO]:"fire-js-all"};/**
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
 */const lh=new Map,Hm=new Map;function vO(t,e){try{t.container.addComponent(e)}catch(n){os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function as(t){const e=t.name;if(Hm.has(e))return os.debug(`There were multiple attempts to register component ${e}.`),!1;Hm.set(e,t);for(const n of lh.values())vO(n,t);return!0}function Td(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const yO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hi=new jl("app","Firebase",yO);/**
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
 */class wO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hi.create("app-deleted",{appName:this._name})}}/**
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
 */const Es=mO;function LT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw hi.create("bad-app-name",{appName:String(i)});if(n||(n=ab()),!n)throw hi.create("no-options");const s=lh.get(i);if(s){if(ah(n,s.options)&&ah(r,s.config))return s;throw hi.create("duplicate-app",{appName:i})}const o=new xb(i);for(const l of Hm.values())o.addComponent(l);const a=new wO(n,r,o);return lh.set(i,a),a}function Jv(t=jm){const e=lh.get(t);if(!e&&t===jm)return LT();if(!e)throw hi.create("no-app",{appName:t});return e}function Kn(t,e,n){var r;let i=(r=gO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),os.warn(a.join(" "));return}as(new yi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const EO="firebase-heartbeat-database",CO=1,dl="firebase-heartbeat-store";let ap=null;function MT(){return ap||(ap=Bb(EO,CO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dl)}}}).catch(t=>{throw hi.create("idb-open",{originalErrorMessage:t.message})})),ap}async function _O(t){try{return(await MT()).transaction(dl).objectStore(dl).get(FT(t))}catch(e){if(e instanceof rr)os.warn(e.message);else{const n=hi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});os.warn(n.message)}}}async function bw(t,e){try{const r=(await MT()).transaction(dl,"readwrite");return await r.objectStore(dl).put(e,FT(t)),r.done}catch(n){if(n instanceof rr)os.warn(n.message);else{const r=hi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});os.warn(r.message)}}}function FT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const SO=1024,TO=30*24*60*60*1e3;class kO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ow();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=TO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ow(),{heartbeatsToSend:n,unsentEntries:r}=IO(this._heartbeatsCache.heartbeats),i=oh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ow(){return new Date().toISOString().substring(0,10)}function IO(t,e=SO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$w(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$w(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mb()?gb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _O(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $w(t){return oh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function AO(t){as(new yi("platform-logger",e=>new jb(e),"PRIVATE")),as(new yi("heartbeat",e=>new kO(e),"PRIVATE")),Kn(Vm,Pw,t),Kn(Vm,Pw,"esm2017"),Kn("fire-js","")}AO("");function Zv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function UT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NO=UT,BT=new jl("auth","Firebase",UT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=new Xv("@firebase/auth");function RO(t,...e){uh.logLevel<=Ee.WARN&&uh.warn(`Auth (${Es}): ${t}`,...e)}function pc(t,...e){uh.logLevel<=Ee.ERROR&&uh.error(`Auth (${Es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,...e){throw ey(t,...e)}function qn(t,...e){return ey(t,...e)}function zT(t,e,n){const r=Object.assign(Object.assign({},NO()),{[e]:n});return new jl("auth","Firebase",r).create(e,{appName:t.name})}function DO(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&yn(t,"argument-error"),zT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ey(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return BT.create(t,...e)}function te(t,e,...n){if(!t)throw ey(e,...n)}function fr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pc(e),new Error(e)}function xr(t,e){t||fr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PO(){return Lw()==="http:"||Lw()==="https:"}function Lw(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PO()||hb()||"connection"in navigator)?navigator.onLine:!0}function OO(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.shortDelay=e,this.longDelay=n,xr(n>e,"Short delay should be less than long delay!"),this.isMobile=ub()||fb()}get(){return bO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t,e){xr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;fr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;fr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;fr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO=new Wl(3e4,6e4);function Fo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Uo(t,e,n,r,i={}){return jT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Hl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),VT.fetch()(HT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function jT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$O),e);try{const i=new MO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw zu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw zu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw zT(t,c,u);yn(t,c)}}catch(i){if(i instanceof rr)throw i;yn(t,"network-request-failed",{message:String(i)})}}async function Gl(t,e,n,r,i={}){const s=await Uo(t,e,n,r,i);return"mfaPendingCredential"in s&&yn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function HT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ty(t.config,i):`${t.config.apiScheme}://${i}`}class MO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qn(this.auth,"network-request-failed")),LO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FO(t,e){return Uo(t,"POST","/v1/accounts:delete",e)}async function UO(t,e){return Uo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BO(t,e=!1){const n=ut(t),r=await n.getIdToken(e),i=ny(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ba(lp(i.auth_time)),issuedAtTime:ba(lp(i.iat)),expirationTime:ba(lp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function lp(t){return Number(t)*1e3}function ny(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pc("JWT malformed, contained fewer than 3 sections"),null;try{const i=NT(n);return i?JSON.parse(i):(pc("Failed to decode base64 JWT payload"),null)}catch(i){return pc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zO(t){const e=ny(t);return te(e,"internal-error"),te(typeof e.exp!="undefined","internal-error"),te(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rr&&VO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ba(this.lastLoginAt),this.creationTime=ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ch(t){var e;const n=t.auth,r=await t.getIdToken(),i=await fl(t,UO(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?GO(s.providerUserInfo):[],a=WO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new WT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function HO(t){const e=ut(t);await ch(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function GO(t){return t.map(e=>{var{providerId:n}=e,r=Zv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KO(t,e){const n=await jT(t,{},async()=>{const r=Hl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=HT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",VT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken!="undefined","internal-error"),te(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):zO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return te(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await KO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new pl;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pl,this.toJSON())}_performRefresh(){return fr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e){te(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Qi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Zv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new WT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await fl(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BO(this,e)}reload(){return HO(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ch(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fl(this,FO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:C,isAnonymous:S,providerData:I,stsTokenManager:T}=n;te(y&&T,e,"internal-error");const k=pl.fromJSON(this.name,T);te(typeof y=="string",e,"internal-error"),Mr(h,e.name),Mr(d,e.name),te(typeof C=="boolean",e,"internal-error"),te(typeof S=="boolean",e,"internal-error"),Mr(p,e.name),Mr(m,e.name),Mr(g,e.name),Mr(E,e.name),Mr(v,e.name),Mr(f,e.name);const V=new Qi({uid:y,auth:e,email:d,emailVerified:C,displayName:h,isAnonymous:S,photoURL:m,phoneNumber:p,tenantId:g,stsTokenManager:k,createdAt:v,lastLoginAt:f});return I&&Array.isArray(I)&&(V.providerData=I.map(P=>Object.assign({},P))),E&&(V._redirectEventId=E),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new pl;i.updateFromServerResponse(n);const s=new Qi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ch(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=new Map;function pr(t){xr(t instanceof Function,"Expected a class definition");let e=Mw.get(t);return e?(xr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mw.set(t,e),e)}/**
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
 */class GT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}GT.type="NONE";const Fw=GT;/**
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
 */function mc(t,e,n){return`firebase:${t}:${e}:${n}`}class no{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=mc(this.userKey,i.apiKey,s),this.fullPersistenceKey=mc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new no(pr(Fw),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||pr(Fw);const o=mc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Qi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new no(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new no(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(QT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(KT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(YT(e))return"Blackberry";if(JT(e))return"Webos";if(ry(e))return"Safari";if((e.includes("chrome/")||qT(e))&&!e.includes("edge/"))return"Chrome";if(XT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function KT(t=Ot()){return/firefox\//i.test(t)}function ry(t=Ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qT(t=Ot()){return/crios\//i.test(t)}function QT(t=Ot()){return/iemobile/i.test(t)}function XT(t=Ot()){return/android/i.test(t)}function YT(t=Ot()){return/blackberry/i.test(t)}function JT(t=Ot()){return/webos/i.test(t)}function kd(t=Ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qO(t=Ot()){var e;return kd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QO(){return pb()&&document.documentMode===10}function ZT(t=Ot()){return kd(t)||XT(t)||JT(t)||YT(t)||/windows phone/i.test(t)||QT(t)}function XO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t,e=[]){let n;switch(t){case"Browser":n=Uw(Ot());break;case"Worker":n=`${Uw(Ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Es}/${r}`}async function tk(t,e){return Uo(t,"GET","/v2/recaptchaConfig",Fo(t,e))}function Bw(t){return t!==void 0&&t.enterprise!==void 0}class nk{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function rk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=qn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",YO().appendChild(r)})}function JO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ZO="https://www.google.com/recaptcha/enterprise.js?render=",e$="recaptcha-enterprise",t$="NO_RECAPTCHA";class ik{constructor(e){this.type=e$,this.auth=Cs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{tk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new nk(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Bw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(t$)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Bw(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}rk(ZO+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function hh(t,e,n,r=!1){const i=new ik(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class n${constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r${constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zw(this),this.idTokenSubscription=new zw(this),this.beforeStateQueue=new n$(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=BT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ch(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ut(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pr(e))})}async initializeRecaptchaConfig(){const e=await tk(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new nk(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new ik(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pr(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[pr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return te(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ek(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&RO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cs(t){return ut(t)}class zw{constructor(e){this.auth=e,this.observer=null,this.addObserver=Cb(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i$(t,e){const n=Td(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ah(s,e!=null?e:{}))return i;yn(i,"already-initialized")}return n.initialize({options:e})}function s$(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function o$(t,e,n){const r=Cs(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=sk(e),{host:o,port:a}=a$(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||l$()}function sk(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function a$(t){const e=sk(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Vw(o)}}}function Vw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function l$(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fr("not implemented")}_getIdTokenResponse(e){return fr("not implemented")}_linkToIdToken(e,n){return fr("not implemented")}_getReauthenticationResolver(e){return fr("not implemented")}}async function u$(t,e){return Uo(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(t,e){return Gl(t,"POST","/v1/accounts:signInWithPassword",Fo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c$(t,e){return Gl(t,"POST","/v1/accounts:signInWithEmailLink",Fo(t,e))}async function h$(t,e){return Gl(t,"POST","/v1/accounts:signInWithEmailLink",Fo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends iy{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ml(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ml(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await hh(e,r,"signInWithPassword");return up(e,i)}else return up(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await hh(e,r,"signInWithPassword");return up(e,s)}else return Promise.reject(i)});case"emailLink":return c$(e,{email:this._email,oobCode:this._password});default:yn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return u$(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return h$(e,{idToken:n,email:this._email,oobCode:this._password});default:yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t,e){return Gl(t,"POST","/v1/accounts:signInWithIdp",Fo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d$="http://localhost";class ls extends iy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Zv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ls(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ro(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ro(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ro(e,n)}buildRequest(){const e={requestUri:d$,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f$(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function p$(t){const e=ga(va(t)).link,n=e?ga(va(e)).deep_link_id:null,r=ga(va(t)).deep_link_id;return(r?ga(va(r)).link:null)||r||n||e||t}class sy{constructor(e){var n,r,i,s,o,a;const l=ga(va(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=f$((i=l.mode)!==null&&i!==void 0?i:null);te(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=p$(e);try{return new sy(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.providerId=Bo.PROVIDER_ID}static credential(e,n){return ml._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sy.parseLink(n);return te(r,"argument-error"),ml._fromEmailAndCode(e,r.code,r.tenantId)}}Bo.PROVIDER_ID="password";Bo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kl extends oy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Kl{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";jr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Kl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Kl{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.GITHUB_SIGN_IN_METHOD="github.com";Hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Kl{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cp(t,e){return Gl(t,"POST","/v1/accounts:signUp",Fo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qi._fromIdTokenResponse(e,r,i),o=jw(r);return new us({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=jw(r);return new us({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function jw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends rr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new dh(e,n,r,i)}}function ok(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dh._fromErrorAndOperation(t,s,e,r):s})}async function m$(t,e,n=!1){const r=await fl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",r)}/**
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
 */async function g$(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await fl(t,ok(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=ny(s.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(t.uid===a,r,"user-mismatch"),us._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&yn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(t,e,n=!1){const r="signIn",i=await ok(t,r,e),s=await us._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function v$(t,e){return ak(Cs(t),e)}async function y$(t,e,n){var r;const i=Cs(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await hh(i,s,"signUpPassword");o=cp(i,u)}else o=cp(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await hh(i,s,"signUpPassword");return cp(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await us._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function w$(t,e,n){return v$(ut(t),Bo.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(t,e){return ut(t).setPersistence(e)}function E$(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function C$(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function _$(t){return ut(t).signOut()}const fh="__sak";/**
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
 */class uk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fh,"1"),this.storage.removeItem(fh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S$(){const t=Ot();return ry(t)||kd(t)}const T$=1e3,k$=10;class ck extends uk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=S$()&&XO(),this.fallbackToPolling=ZT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);QO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,k$):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},T$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ck.type="LOCAL";const ay=ck;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk extends uk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hk.type="SESSION";const dk=hk;/**
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
 */class Id{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Id(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await I$(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Id.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class x${constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ly("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){return window}function A$(t){Qn().location.href=t}/**
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
 */function fk(){return typeof Qn().WorkerGlobalScope!="undefined"&&typeof Qn().importScripts=="function"}async function N$(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function R$(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function D$(){return fk()?self:null}/**
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
 */const pk="firebaseLocalStorageDb",P$=1,ph="firebaseLocalStorage",mk="fbase_key";class ql{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xd(t,e){return t.transaction([ph],e?"readwrite":"readonly").objectStore(ph)}function b$(){const t=indexedDB.deleteDatabase(pk);return new ql(t).toPromise()}function Gm(){const t=indexedDB.open(pk,P$);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ph,{keyPath:mk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ph)?e(r):(r.close(),await b$(),e(await Gm()))})})}async function Hw(t,e,n){const r=xd(t,!0).put({[mk]:e,value:n});return new ql(r).toPromise()}async function O$(t,e){const n=xd(t,!1).get(e),r=await new ql(n).toPromise();return r===void 0?null:r.value}function Ww(t,e){const n=xd(t,!0).delete(e);return new ql(n).toPromise()}const $$=800,L$=3;class gk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>L$)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Id._getInstance(D$()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await N$(),!this.activeServiceWorker)return;this.sender=new x$(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||R$()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gm();return await Hw(e,fh,"1"),await Ww(e,fh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>O$(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ww(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xd(i,!1).getAll();return new ql(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gk.type="LOCAL";const M$=gk;new Wl(3e4,6e4);/**
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
 */function vk(t,e){return e?pr(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class uy extends iy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ro(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ro(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function F$(t){return ak(t.auth,new uy(t),t.bypassAuthState)}function U$(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),g$(n,new uy(t),t.bypassAuthState)}async function B$(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),m$(n,new uy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return F$;case"linkViaPopup":case"linkViaRedirect":return B$;case"reauthViaPopup":case"reauthViaRedirect":return U$;default:yn(this.auth,"internal-error")}}resolve(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z$=new Wl(2e3,1e4);async function V$(t,e,n){const r=Cs(t);DO(t,e,oy);const i=vk(r,n);return new ji(r,"signInViaPopup",e,i).executeNotNull()}class ji extends yk{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ji.currentPopupAction&&ji.currentPopupAction.cancel(),ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){xr(this.filter.length===1,"Popup operations only handle one event");const e=ly();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,z$.get())};e()}}ji.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j$="pendingRedirect",gc=new Map;class H$ extends yk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gc.get(this.auth._key());if(!e){try{const r=await W$(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gc.set(this.auth._key(),e)}return this.bypassAuthState||gc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W$(t,e){const n=q$(e),r=K$(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function G$(t,e){gc.set(t._key(),e)}function K$(t){return pr(t._redirectPersistence)}function q$(t){return mc(j$,t.config.apiKey,t.name)}async function Q$(t,e,n=!1){const r=Cs(t),i=vk(r,e),o=await new H$(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X$=10*60*1e3;class Y${constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!J$(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=X$&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gw(e))}saveEventToCache(e){this.cachedEventUids.add(Gw(e)),this.lastProcessedEventTime=Date.now()}}function Gw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function J$(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wk(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z$(t,e={}){return Uo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tL=/^https?/;async function nL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Z$(t);for(const n of e)try{if(rL(n))return}catch{}yn(t,"unauthorized-domain")}function rL(t){const e=Wm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tL.test(n))return!1;if(eL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const iL=new Wl(3e4,6e4);function Kw(){const t=Qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sL(t){return new Promise((e,n)=>{var r,i,s;function o(){Kw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kw(),n(qn(t,"network-request-failed"))},timeout:iL.get()})}if(!((i=(r=Qn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qn().gapi)===null||s===void 0)&&s.load)o();else{const a=JO("iframefcb");return Qn()[a]=()=>{gapi.load?o():n(qn(t,"network-request-failed"))},rk(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw vc=null,e})}let vc=null;function oL(t){return vc=vc||sL(t),vc}/**
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
 */const aL=new Wl(5e3,15e3),lL="__/auth/iframe",uL="emulator/auth/iframe",cL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dL(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ty(e,uL):`https://${t.config.authDomain}/${lL}`,r={apiKey:e.apiKey,appName:t.name,v:Es},i=hL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Hl(r).slice(1)}`}async function fL(t){const e=await oL(t),n=Qn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:dL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=qn(t,"network-request-failed"),a=Qn().setTimeout(()=>{s(o)},aL.get());function l(){Qn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const pL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mL=500,gL=600,vL="_blank",yL="http://localhost";class qw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wL(t,e,n,r=mL,i=gL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ot().toLowerCase();n&&(a=qT(u)?vL:n),KT(u)&&(e=e||yL,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(qO(u)&&a!=="_self")return EL(e||"",a),new qw(null);const h=window.open(e||"",a,c);te(h,t,"popup-blocked");try{h.focus()}catch{}return new qw(h)}function EL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const CL="__/auth/handler",_L="emulator/auth/handler",SL=encodeURIComponent("fac");async function Qw(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Es,eventId:i};if(e instanceof oy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Eb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Kl){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${SL}=${encodeURIComponent(l)}`:"";return`${TL(t)}?${Hl(a).slice(1)}${u}`}function TL({config:t}){return t.emulator?ty(t,_L):`https://${t.authDomain}/${CL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="webStorageSupport";class kL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dk,this._completeRedirectFn=Q$,this._overrideRedirectResult=G$}async _openPopup(e,n,r,i){var s;xr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Qw(e,n,r,Wm(),i);return wL(e,o,ly())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Qw(e,n,r,Wm(),i);return A$(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(xr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fL(e),r=new Y$(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hp,{type:hp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[hp];o!==void 0&&n(!!o),yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ZT()||ry()||kd()}}const IL=kL;var Xw="@firebase/auth",Yw="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function NL(t){as(new yi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),te(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ek(t)},u=new r$(r,i,s,l);return s$(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),as(new yi("auth-internal",e=>{const n=Cs(e.getProvider("auth").getImmediate());return(r=>new xL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(Xw,Yw,AL(t)),Kn(Xw,Yw,"esm2017")}/**
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
 */const RL=5*60,DL=PT("authIdTokenMaxAge")||RL;let Jw=null;const PL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>DL)return;const i=n==null?void 0:n.token;Jw!==i&&(Jw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bL(t=Jv()){const e=Td(t,"auth");if(e.isInitialized())return e.getImmediate();const n=i$(t,{popupRedirectResolver:IL,persistence:[M$,ay,dk]}),r=PT("authTokenSyncURL");if(r){const s=PL(r);C$(n,s,()=>s(n.currentUser)),E$(n,o=>s(o))}const i=RT("auth");return i&&o$(n,`http://${i}`),n}NL("Browser");var OL="firebase",$L="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn(OL,$L,"app");var LL=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},G,cy=cy||{},ie=LL||self;function mh(){}function Ad(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ql(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ML(t){return Object.prototype.hasOwnProperty.call(t,dp)&&t[dp]||(t[dp]=++FL)}var dp="closure_uid_"+(1e9*Math.random()>>>0),FL=0;function UL(t,e,n){return t.call.apply(t.bind,arguments)}function BL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Rt=UL:Rt=BL,Rt.apply(null,arguments)}function Vu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function dt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ni(){this.s=this.s,this.o=this.o}var zL=0;Ni.prototype.s=!1;Ni.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),zL!=0)&&ML(this)};Ni.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ek=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Zw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ad(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Dt.prototype.h=function(){this.defaultPrevented=!0};var VL=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ie.addEventListener("test",mh,e),ie.removeEventListener("test",mh,e)}catch{}return t}();function gh(t){return/^[\s\xa0]*$/.test(t)}var eE=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function fp(t,e){return t<e?-1:t>e?1:0}function Nd(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function Bn(t){return Nd().indexOf(t)!=-1}function dy(t){return dy[" "](t),t}dy[" "]=mh;function Ck(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var jL=Bn("Opera"),Co=Bn("Trident")||Bn("MSIE"),_k=Bn("Edge"),Km=_k||Co,Sk=Bn("Gecko")&&!(Nd().toLowerCase().indexOf("webkit")!=-1&&!Bn("Edge"))&&!(Bn("Trident")||Bn("MSIE"))&&!Bn("Edge"),HL=Nd().toLowerCase().indexOf("webkit")!=-1&&!Bn("Edge");function Tk(){var t=ie.document;return t?t.documentMode:void 0}var vh;e:{var pp="",mp=function(){var t=Nd();if(Sk)return/rv:([^\);]+)(\)|;)/.exec(t);if(_k)return/Edge\/([\d\.]+)/.exec(t);if(Co)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(HL)return/WebKit\/(\S+)/.exec(t);if(jL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(mp&&(pp=mp?mp[1]:""),Co){var gp=Tk();if(gp!=null&&gp>parseFloat(pp)){vh=String(gp);break e}}vh=pp}var WL={};function GL(){return Ck(WL,9,function(){let t=0;const e=eE(String(vh)).split("."),n=eE("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=fp(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||fp(i[2].length==0,s[2].length==0)||fp(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var qm;if(ie.document&&Co){var tE=Tk();qm=tE||parseInt(vh,10)||void 0}else qm=void 0;var KL=qm;function gl(t,e){if(Dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Sk){e:{try{dy(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:qL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&gl.$.h.call(this)}}dt(gl,Dt);var qL={2:"touch",3:"pen",4:"mouse"};gl.prototype.h=function(){gl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Xl="closure_listenable_"+(1e6*Math.random()|0),QL=0;function XL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++QL,this.fa=this.ia=!1}function Rd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function fy(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function kk(t){const e={};for(const n in t)e[n]=t[n];return e}const nE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ik(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<nE.length;s++)n=nE[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Dd(t){this.src=t,this.g={},this.h=0}Dd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Xm(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new XL(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Qm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Ek(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Rd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Xm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var py="closure_lm_"+(1e6*Math.random()|0),vp={};function xk(t,e,n,r,i){if(r&&r.once)return Nk(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)xk(t,e[s],n,r,i);return null}return n=vy(n),t&&t[Xl]?t.O(e,n,Ql(r)?!!r.capture:!!r,i):Ak(t,e,n,!1,r,i)}function Ak(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ql(i)?!!i.capture:!!i,a=gy(t);if(a||(t[py]=a=new Dd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=YL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)VL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Dk(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function YL(){function t(n){return e.call(t.src,t.listener,n)}const e=JL;return t}function Nk(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Nk(t,e[s],n,r,i);return null}return n=vy(n),t&&t[Xl]?t.P(e,n,Ql(r)?!!r.capture:!!r,i):Ak(t,e,n,!0,r,i)}function Rk(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Rk(t,e[s],n,r,i);else r=Ql(r)?!!r.capture:!!r,n=vy(n),t&&t[Xl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Xm(s,n,r,i),-1<n&&(Rd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=gy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Xm(e,n,r,i)),(n=-1<t?e[t]:null)&&my(n))}function my(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Xl])Qm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Dk(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=gy(e))?(Qm(n,t),n.h==0&&(n.src=null,e[py]=null)):Rd(t)}}}function Dk(t){return t in vp?vp[t]:vp[t]="on"+t}function JL(t,e){if(t.fa)t=!0;else{e=new gl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&my(t),t=n.call(r,e)}return t}function gy(t){return t=t[py],t instanceof Dd?t:null}var yp="__closure_events_fn_"+(1e9*Math.random()>>>0);function vy(t){return typeof t=="function"?t:(t[yp]||(t[yp]=function(e){return t.handleEvent(e)}),t[yp])}function ct(){Ni.call(this),this.i=new Dd(this),this.S=this,this.J=null}dt(ct,Ni);ct.prototype[Xl]=!0;ct.prototype.removeEventListener=function(t,e,n,r){Rk(this,t,e,n,r)};function wt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Dt(e,t);else if(e instanceof Dt)e.target=e.target||t;else{var i=e;e=new Dt(r,t),Ik(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ju(o,r,!0,e)&&i}if(o=e.g=t,i=ju(o,r,!0,e)&&i,i=ju(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ju(o,r,!1,e)&&i}ct.prototype.N=function(){if(ct.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Rd(n[r]);delete t.g[e],t.h--}}this.J=null};ct.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ct.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ju(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Qm(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var yy=ie.JSON.stringify;function ZL(){var t=Ok;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class e3{constructor(){this.h=this.g=null}add(e,n){const r=Pk.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Pk=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new t3,t=>t.reset());class t3{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function n3(t){ie.setTimeout(()=>{throw t},0)}function bk(t,e){Ym||r3(),Jm||(Ym(),Jm=!0),Ok.add(t,e)}var Ym;function r3(){var t=ie.Promise.resolve(void 0);Ym=function(){t.then(i3)}}var Jm=!1,Ok=new e3;function i3(){for(var t;t=ZL();){try{t.h.call(t.g)}catch(n){n3(n)}var e=Pk;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Jm=!1}function Pd(t,e){ct.call(this),this.h=t||1,this.g=e||ie,this.j=Rt(this.qb,this),this.l=Date.now()}dt(Pd,ct);G=Pd.prototype;G.ga=!1;G.T=null;G.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),wt(this,"tick"),this.ga&&(wy(this),this.start()))}};G.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wy(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}G.N=function(){Pd.$.N.call(this),wy(this),delete this.g};function Ey(t,e,n){if(typeof t=="function")n&&(t=Rt(t,n));else if(t&&typeof t.handleEvent=="function")t=Rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function $k(t){t.g=Ey(()=>{t.g=null,t.i&&(t.i=!1,$k(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class s3 extends Ni{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$k(this)}N(){super.N(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vl(t){Ni.call(this),this.h=t,this.g={}}dt(vl,Ni);var rE=[];function Lk(t,e,n,r){Array.isArray(n)||(n&&(rE[0]=n.toString()),n=rE);for(var i=0;i<n.length;i++){var s=xk(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Mk(t){fy(t.g,function(e,n){this.g.hasOwnProperty(n)&&my(e)},t),t.g={}}vl.prototype.N=function(){vl.$.N.call(this),Mk(this)};vl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function bd(){this.g=!0}bd.prototype.Ea=function(){this.g=!1};function o3(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function a3(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Gs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+u3(t,n)+(r?" "+r:"")})}function l3(t,e){t.info(function(){return"TIMEOUT: "+e})}bd.prototype.info=function(){};function u3(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return yy(n)}catch{return e}}var _s={},iE=null;function Od(){return iE=iE||new ct}_s.Ta="serverreachability";function Fk(t){Dt.call(this,_s.Ta,t)}dt(Fk,Dt);function yl(t){const e=Od();wt(e,new Fk(e))}_s.STAT_EVENT="statevent";function Uk(t,e){Dt.call(this,_s.STAT_EVENT,t),this.stat=e}dt(Uk,Dt);function Ft(t){const e=Od();wt(e,new Uk(e,t))}_s.Ua="timingevent";function Bk(t,e){Dt.call(this,_s.Ua,t),this.size=e}dt(Bk,Dt);function Yl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var $d={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},zk={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Cy(){}Cy.prototype.h=null;function sE(t){return t.h||(t.h=t.i())}function Vk(){}var Jl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function _y(){Dt.call(this,"d")}dt(_y,Dt);function Sy(){Dt.call(this,"c")}dt(Sy,Dt);var Zm;function Ld(){}dt(Ld,Cy);Ld.prototype.g=function(){return new XMLHttpRequest};Ld.prototype.i=function(){return{}};Zm=new Ld;function Zl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new vl(this),this.P=c3,t=Km?125:void 0,this.V=new Pd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new jk}function jk(){this.i=null,this.g="",this.h=!1}var c3=45e3,eg={},yh={};G=Zl.prototype;G.setTimeout=function(t){this.P=t};function tg(t,e,n){t.L=1,t.v=Fd(Ar(e)),t.s=n,t.S=!0,Hk(t,null)}function Hk(t,e){t.G=Date.now(),eu(t),t.A=Ar(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Jk(n.i,"t",r),t.C=0,n=t.l.I,t.h=new jk,t.g=wI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new s3(Rt(t.Pa,t,t.g),t.O)),Lk(t.U,t.g,"readystatechange",t.nb),e=t.I?kk(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),yl(),o3(t.j,t.u,t.A,t.m,t.W,t.s)}G.nb=function(t){t=t.target;const e=this.M;e&&mr(t)==3?e.l():this.Pa(t)};G.Pa=function(t){try{if(t==this.g)e:{const c=mr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Km||this.g&&(this.h.h||this.g.ja()||uE(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?yl(3):yl(2)),Md(this);var n=this.g.da();this.aa=n;t:if(Wk(this)){var r=uE(this.g);t="";var i=r.length,s=mr(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Hi(this),Oa(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,a3(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!gh(a)){var u=a;break t}}u=null}if(n=u)Gs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ng(this,n);else{this.i=!1,this.o=3,Ft(12),Hi(this),Oa(this);break e}}this.S?(Gk(this,c,o),Km&&this.i&&c==3&&(Lk(this.U,this.V,"tick",this.mb),this.V.start())):(Gs(this.j,this.m,o,null),ng(this,o)),c==4&&Hi(this),this.i&&!this.J&&(c==4?mI(this.l,this):(this.i=!1,eu(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ft(12)):(this.o=0,Ft(13)),Hi(this),Oa(this)}}}catch{}finally{}};function Wk(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Gk(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=h3(t,n),i==yh){e==4&&(t.o=4,Ft(14),r=!1),Gs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==eg){t.o=4,Ft(15),Gs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Gs(t.j,t.m,i,null),ng(t,i);Wk(t)&&i!=yh&&i!=eg&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ft(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ry(e),e.L=!0,Ft(11))):(Gs(t.j,t.m,n,"[Invalid Chunked Response]"),Hi(t),Oa(t))}G.mb=function(){if(this.g){var t=mr(this.g),e=this.g.ja();this.C<e.length&&(Md(this),Gk(this,t,e),this.i&&t!=4&&eu(this))}};function h3(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?yh:(n=Number(e.substring(n,r)),isNaN(n)?eg:(r+=1,r+n>e.length?yh:(e=e.substr(r,n),t.C=r+n,e)))}G.cancel=function(){this.J=!0,Hi(this)};function eu(t){t.Y=Date.now()+t.P,Kk(t,t.P)}function Kk(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Yl(Rt(t.lb,t),e)}function Md(t){t.B&&(ie.clearTimeout(t.B),t.B=null)}G.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(l3(this.j,this.A),this.L!=2&&(yl(),Ft(17)),Hi(this),this.o=2,Oa(this)):Kk(this,this.Y-t)};function Oa(t){t.l.H==0||t.J||mI(t.l,t)}function Hi(t){Md(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,wy(t.V),Mk(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function ng(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||rg(n.h,t))){if(!t.K&&rg(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ch(n),zd(n);else break e;Ny(n),Ft(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=Yl(Rt(n.ib,n),6e3));if(1>=tI(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Wi(n,11)}else if((t.K||n.g==t)&&Ch(n),!gh(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ty(s,s.h),s.h=null))}if(r.F){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,Oe(r.G,r.F,g))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=yI(r,r.I?r.oa:null,r.Y),o.K){nI(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Md(a),eu(a)),r.g=o}else fI(r);0<n.i.length&&Vd(n)}else u[0]!="stop"&&u[0]!="close"||Wi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Wi(n,7):Ay(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}yl(4)}catch{}}function d3(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ad(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function f3(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(Ad(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function qk(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ad(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=f3(t),r=d3(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Qk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function p3(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Xi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Xi){this.h=e!==void 0?e:t.h,wh(this,t.j),this.s=t.s,this.g=t.g,Eh(this,t.m),this.l=t.l,e=t.i;var n=new wl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),oE(this,n),this.o=t.o}else t&&(n=String(t).match(Qk))?(this.h=!!e,wh(this,n[1]||"",!0),this.s=ya(n[2]||""),this.g=ya(n[3]||"",!0),Eh(this,n[4]),this.l=ya(n[5]||"",!0),oE(this,n[6]||"",!0),this.o=ya(n[7]||"")):(this.h=!!e,this.i=new wl(null,this.h))}Xi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(wa(e,aE,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(wa(e,aE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(wa(n,n.charAt(0)=="/"?v3:g3,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",wa(n,w3)),t.join("")};function Ar(t){return new Xi(t)}function wh(t,e,n){t.j=n?ya(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Eh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function oE(t,e,n){e instanceof wl?(t.i=e,E3(t.i,t.h)):(n||(e=wa(e,y3)),t.i=new wl(e,t.h))}function Oe(t,e,n){t.i.set(e,n)}function Fd(t){return Oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ya(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function wa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,m3),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function m3(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var aE=/[#\/\?@]/g,g3=/[#\?:]/g,v3=/[#\?]/g,y3=/[#\?@]/g,w3=/#/g;function wl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ri(t){t.g||(t.g=new Map,t.h=0,t.i&&p3(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=wl.prototype;G.add=function(t,e){Ri(this),this.i=null,t=zo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Xk(t,e){Ri(t),e=zo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Yk(t,e){return Ri(t),e=zo(t,e),t.g.has(e)}G.forEach=function(t,e){Ri(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};G.sa=function(){Ri(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};G.Z=function(t){Ri(this);let e=[];if(typeof t=="string")Yk(this,t)&&(e=e.concat(this.g.get(zo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return Ri(this),this.i=null,t=zo(this,t),Yk(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Jk(t,e,n){Xk(t,e),0<n.length&&(t.i=null,t.g.set(zo(t,e),hy(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function zo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function E3(t,e){e&&!t.j&&(Ri(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Xk(this,r),Jk(this,i,n))},t)),t.j=e}var C3=class{constructor(t,e){this.h=t,this.g=e}};function Zk(t){this.l=t||_3,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ka&&ie.g.Ka()&&ie.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _3=10;function eI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function tI(t){return t.h?1:t.g?t.g.size:0}function rg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ty(t,e){t.g?t.g.add(e):t.h=e}function nI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Zk.prototype.cancel=function(){if(this.i=rI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function rI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return hy(t.i)}function ky(){}ky.prototype.stringify=function(t){return ie.JSON.stringify(t,void 0)};ky.prototype.parse=function(t){return ie.JSON.parse(t,void 0)};function S3(){this.g=new ky}function T3(t,e,n){const r=n||"";try{qk(t,function(i,s){let o=i;Ql(i)&&(o=yy(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function k3(t,e){const n=new bd;if(ie.Image){const r=new Image;r.onload=Vu(Hu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Vu(Hu,n,r,"TestLoadImage: error",!1,e),r.onabort=Vu(Hu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Vu(Hu,n,r,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Hu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function tu(t){this.l=t.fc||null,this.j=t.ob||!1}dt(tu,Cy);tu.prototype.g=function(){return new Ud(this.l,this.j)};tu.prototype.i=function(t){return function(){return t}}({});function Ud(t,e){ct.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Iy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dt(Ud,ct);var Iy=0;G=Ud.prototype;G.open=function(t,e){if(this.readyState!=Iy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,El(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ie).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nu(this)),this.readyState=Iy};G.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,El(this)),this.g&&(this.readyState=3,El(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ie.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;iI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function iI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}G.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?nu(this):El(this),this.readyState==3&&iI(this)}};G.Za=function(t){this.g&&(this.response=this.responseText=t,nu(this))};G.Ya=function(t){this.g&&(this.response=t,nu(this))};G.ka=function(){this.g&&nu(this)};function nu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,El(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function El(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ud.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var I3=ie.JSON.parse;function je(t){ct.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=sI,this.L=this.M=!1}dt(je,ct);var sI="",x3=/^https?$/i,A3=["POST","PUT"];G=je.prototype;G.Oa=function(t){this.M=t};G.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Zm.g(),this.C=this.u?sE(this.u):sE(Zm),this.g.onreadystatechange=Rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){lE(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ie.FormData&&t instanceof ie.FormData,!(0<=Ek(A3,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{lI(this),0<this.B&&((this.L=N3(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Rt(this.ua,this)):this.A=Ey(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){lE(this,s)}};function N3(t){return Co&&GL()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.ua=function(){typeof cy!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))};function lE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,oI(t),Bd(t)}function oI(t){t.F||(t.F=!0,wt(t,"complete"),wt(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,wt(this,"complete"),wt(this,"abort"),Bd(this))};G.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bd(this,!0)),je.$.N.call(this)};G.La=function(){this.s||(this.G||this.v||this.l?aI(this):this.kb())};G.kb=function(){aI(this)};function aI(t){if(t.h&&typeof cy!="undefined"&&(!t.C[1]||mr(t)!=4||t.da()!=2)){if(t.v&&mr(t)==4)Ey(t.La,0,t);else if(wt(t,"readystatechange"),mr(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(Qk)[1]||null;if(!i&&ie.self&&ie.self.location){var s=ie.self.location.protocol;i=s.substr(0,s.length-1)}r=!x3.test(i?i.toLowerCase():"")}n=r}if(n)wt(t,"complete"),wt(t,"success");else{t.m=6;try{var o=2<mr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",oI(t)}}finally{Bd(t)}}}}function Bd(t,e){if(t.g){lI(t);const n=t.g,r=t.C[0]?mh:null;t.g=null,t.C=null,e||wt(t,"ready");try{n.onreadystatechange=r}catch{}}}function lI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}function mr(t){return t.g?t.g.readyState:0}G.da=function(){try{return 2<mr(this)?this.g.status:-1}catch{return-1}};G.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),I3(e)}};function uE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case sI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}G.Ia=function(){return this.m};G.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function uI(t){let e="";return fy(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function xy(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=uI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Oe(t,e,n))}function aa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function cI(t){this.Ga=0,this.i=[],this.j=new bd,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=aa("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=aa("baseRetryDelayMs",5e3,t),this.hb=aa("retryDelaySeedMs",1e4,t),this.eb=aa("forwardChannelMaxRetries",2,t),this.xa=aa("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new Zk(t&&t.concurrentRequestLimit),this.Ja=new S3,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}G=cI.prototype;G.qa=8;G.H=1;function Ay(t){if(hI(t),t.H==3){var e=t.W++,n=Ar(t.G);Oe(n,"SID",t.J),Oe(n,"RID",e),Oe(n,"TYPE","terminate"),ru(t,n),e=new Zl(t,t.j,e,void 0),e.L=2,e.v=Fd(Ar(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon&&(n=ie.navigator.sendBeacon(e.v.toString(),"")),!n&&ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=wI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),eu(e)}vI(t)}function zd(t){t.g&&(Ry(t),t.g.cancel(),t.g=null)}function hI(t){zd(t),t.u&&(ie.clearTimeout(t.u),t.u=null),Ch(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function Vd(t){eI(t.h)||t.m||(t.m=!0,bk(t.Na,t),t.C=0)}function R3(t,e){return tI(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Yl(Rt(t.Na,t,e),gI(t,t.C)),t.C++,!0)}G.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Zl(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=kk(s),Ik(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=dI(this,i,e),n=Ar(this.G),Oe(n,"RID",t),Oe(n,"CVER",22),this.F&&Oe(n,"X-HTTP-Session-Id",this.F),ru(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(uI(s)))+"&"+e:this.o&&xy(n,this.o,s)),Ty(this.h,i),this.bb&&Oe(n,"TYPE","init"),this.P?(Oe(n,"$req",e),Oe(n,"SID","null"),i.ba=!0,tg(i,n,null)):tg(i,n,e),this.H=2}}else this.H==3&&(t?cE(this,t):this.i.length==0||eI(this.h)||cE(this))};function cE(t,e){var n;e?n=e.m:n=t.W++;const r=Ar(t.G);Oe(r,"SID",t.J),Oe(r,"RID",n),Oe(r,"AID",t.V),ru(t,r),t.o&&t.s&&xy(r,t.o,t.s),n=new Zl(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=dI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ty(t.h,n),tg(n,r,e)}function ru(t,e){t.ma&&fy(t.ma,function(n,r){Oe(e,r,n)}),t.l&&qk({},function(n,r){Oe(e,r,n)})}function dI(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Rt(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{T3(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function fI(t){t.g||t.u||(t.ba=1,bk(t.Ma,t),t.A=0)}function Ny(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Yl(Rt(t.Ma,t),gI(t,t.A)),t.A++,!0)}G.Ma=function(){if(this.u=null,pI(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Yl(Rt(this.jb,this),t)}};G.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Ft(10),zd(this),pI(this))};function Ry(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function pI(t){t.g=new Zl(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Ar(t.wa);Oe(e,"RID","rpc"),Oe(e,"SID",t.J),Oe(e,"CI",t.M?"0":"1"),Oe(e,"AID",t.V),Oe(e,"TYPE","xmlhttp"),ru(t,e),t.o&&t.s&&xy(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Fd(Ar(e)),n.s=null,n.S=!0,Hk(n,t)}G.ib=function(){this.v!=null&&(this.v=null,zd(this),Ny(this),Ft(19))};function Ch(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function mI(t,e){var n=null;if(t.g==e){Ch(t),Ry(t),t.g=null;var r=2}else if(rg(t.h,e))n=e.F,nI(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Od(),wt(r,new Bk(r,n)),Vd(t)}else fI(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&R3(t,e)||r==2&&Ny(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Wi(t,5);break;case 4:Wi(t,10);break;case 3:Wi(t,6);break;default:Wi(t,2)}}}function gI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Wi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Rt(t.pb,t);n||(n=new Xi("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||wh(n,"https"),Fd(n)),k3(n.toString(),r)}else Ft(2);t.H=0,t.l&&t.l.za(e),vI(t),hI(t)}G.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))};function vI(t){if(t.H=0,t.pa=[],t.l){const e=rI(t.h);(e.length!=0||t.i.length!=0)&&(Zw(t.pa,e),Zw(t.pa,t.i),t.h.i.length=0,hy(t.i),t.i.length=0),t.l.ya()}}function yI(t,e,n){var r=n instanceof Xi?Ar(n):new Xi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Eh(r,r.m);else{var i=ie.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Xi(null,void 0);r&&wh(s,r),e&&(s.g=e),i&&Eh(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Oe(r,n,e),Oe(r,"VER",t.qa),ru(t,r),r}function wI(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new je(new tu({ob:!0})):new je(t.va),e.Oa(t.I),e}function EI(){}G=EI.prototype;G.Ba=function(){};G.Aa=function(){};G.za=function(){};G.ya=function(){};G.Va=function(){};function _h(){if(Co&&!(10<=Number(KL)))throw Error("Environmental error: no available transport.")}_h.prototype.g=function(t,e){return new rn(t,e)};function rn(t,e){ct.call(this),this.g=new cI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!gh(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!gh(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Vo(this)}dt(rn,ct);rn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Ft(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=yI(t,null,t.Y),Vd(t)};rn.prototype.close=function(){Ay(this.g)};rn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=yy(t),t=n);e.i.push(new C3(e.fb++,t)),e.H==3&&Vd(e)};rn.prototype.N=function(){this.g.l=null,delete this.j,Ay(this.g),delete this.g,rn.$.N.call(this)};function CI(t){_y.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}dt(CI,_y);function _I(){Sy.call(this),this.status=1}dt(_I,Sy);function Vo(t){this.g=t}dt(Vo,EI);Vo.prototype.Ba=function(){wt(this.g,"a")};Vo.prototype.Aa=function(t){wt(this.g,new CI(t))};Vo.prototype.za=function(t){wt(this.g,new _I)};Vo.prototype.ya=function(){wt(this.g,"b")};function D3(){this.blockSize=-1}function bn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}dt(bn,D3);bn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function wp(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}bn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)wp(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){wp(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){wp(this,r),i=0;break}}this.h=i,this.i+=e};bn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Te(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var P3={};function Dy(t){return-128<=t&&128>t?Ck(P3,t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function Vn(t){if(isNaN(t)||!isFinite(t))return io;if(0>t)return vt(Vn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ig;return new Te(e,0)}function SI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return vt(SI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Vn(Math.pow(e,8)),r=io,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Vn(Math.pow(e,s)),r=r.R(s).add(Vn(o))):(r=r.R(n),r=r.add(Vn(o)))}return r}var ig=4294967296,io=Dy(0),sg=Dy(1),hE=Dy(16777216);G=Te.prototype;G.ea=function(){if(hn(this))return-vt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ig+r)*e,e*=ig}return t};G.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(gr(this))return"0";if(hn(this))return"-"+vt(this).toString(t);for(var e=Vn(Math.pow(t,6)),n=this,r="";;){var i=Th(n,e).g;n=Sh(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,gr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};G.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function gr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function hn(t){return t.h==-1}G.X=function(t){return t=Sh(this,t),hn(t)?-1:gr(t)?0:1};function vt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Te(n,~t.h).add(sg)}G.abs=function(){return hn(this)?vt(this):this};G.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function Sh(t,e){return t.add(vt(e))}G.R=function(t){if(gr(this)||gr(t))return io;if(hn(this))return hn(t)?vt(this).R(vt(t)):vt(vt(this).R(t));if(hn(t))return vt(this.R(vt(t)));if(0>this.X(hE)&&0>t.X(hE))return Vn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Wu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Wu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Wu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Wu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Te(n,0)};function Wu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function la(t,e){this.g=t,this.h=e}function Th(t,e){if(gr(e))throw Error("division by zero");if(gr(t))return new la(io,io);if(hn(t))return e=Th(vt(t),e),new la(vt(e.g),vt(e.h));if(hn(e))return e=Th(t,vt(e)),new la(vt(e.g),e.h);if(30<t.g.length){if(hn(t)||hn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=sg,r=e;0>=r.X(t);)n=dE(n),r=dE(r);var i=As(n,1),s=As(r,1);for(r=As(r,2),n=As(n,2);!gr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=As(r,1),n=As(n,1)}return e=Sh(t,i.R(e)),new la(i,e)}for(i=io;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Vn(n),o=s.R(e);hn(o)||0<o.X(t);)n-=r,s=Vn(n),o=s.R(e);gr(s)&&(s=sg),i=i.add(s),t=Sh(t,o)}return new la(i,t)}G.gb=function(t){return Th(this,t).h};G.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Te(n,this.h&t.h)};G.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Te(n,this.h|t.h)};G.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Te(n,this.h^t.h)};function dE(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Te(n,t.h)}function As(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Te(i,t.h)}_h.prototype.createWebChannel=_h.prototype.g;rn.prototype.send=rn.prototype.u;rn.prototype.open=rn.prototype.m;rn.prototype.close=rn.prototype.close;$d.NO_ERROR=0;$d.TIMEOUT=8;$d.HTTP_ERROR=6;zk.COMPLETE="complete";Vk.EventType=Jl;Jl.OPEN="a";Jl.CLOSE="b";Jl.ERROR="c";Jl.MESSAGE="d";ct.prototype.listen=ct.prototype.O;je.prototype.listenOnce=je.prototype.P;je.prototype.getLastError=je.prototype.Sa;je.prototype.getLastErrorCode=je.prototype.Ia;je.prototype.getStatus=je.prototype.da;je.prototype.getResponseJson=je.prototype.Wa;je.prototype.getResponseText=je.prototype.ja;je.prototype.send=je.prototype.ha;je.prototype.setWithCredentials=je.prototype.Oa;bn.prototype.digest=bn.prototype.l;bn.prototype.reset=bn.prototype.reset;bn.prototype.update=bn.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=Vn;Te.fromString=SI;var b3=function(){return new _h},O3=function(){return Od()},Ep=$d,$3=zk,L3=_s,fE={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},M3=tu,Gu=Vk,F3=je,U3=bn,so=Te;const pE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new Xv("@firebase/firestore");function mE(){return cs.logLevel}function X(t,...e){if(cs.logLevel<=Ee.DEBUG){const n=e.map(Py);cs.debug(`Firestore (${jo}): ${t}`,...n)}}function Nr(t,...e){if(cs.logLevel<=Ee.ERROR){const n=e.map(Py);cs.error(`Firestore (${jo}): ${t}`,...n)}}function _o(t,...e){if(cs.logLevel<=Ee.WARN){const n=e.map(Py);cs.warn(`Firestore (${jo}): ${t}`,...n)}}function Py(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function re(t="Unexpected state"){const e=`FIRESTORE (${jo}) INTERNAL ASSERTION FAILED: `+t;throw Nr(e),new Error(e)}function De(t,e){t||re()}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends rr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class B3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class z3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class V3{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Er,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new TI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new It(e)}}class j3{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class H3{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new j3(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class W3{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G3{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.T=n.token,new W3(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K3(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=K3(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function So(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new rt(0,0))}static max(){return new ae(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends Cl{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const q3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends Cl{construct(e,n,r){return new Nt(e,n,r)}static isValidIdentifier(e){return q3.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Z(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Z(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Z(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(n)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee($e.fromString(e))}static fromName(e){return new ee($e.fromString(e).popFirst(5))}static empty(){return new ee($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new $e(e.slice()))}}function Q3(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new wi(i,ee.empty(),e)}function X3(t){return new wi(t.readTime,t.key,-1)}class wi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wi(ae.min(),ee.empty(),-1)}static max(){return new wi(ae.max(),ee.empty(),-1)}}function Y3(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Z3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iu(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==J3)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function su(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class by{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}by.ct=-1;function jd(t){return t==null}function kh(t){return t===0&&1/t==-1/0}function eM(t){return typeof t=="number"&&Number.isInteger(t)&&!kh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ho(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function II(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ku(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ku(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ku(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ku(this.root,e,this.comparator,!0)}}class Ku{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:gt.RED,this.left=i!=null?i:gt.EMPTY,this.right=s!=null?s:gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new gt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(t,e,n,r,i){return this}insert(t,e,n){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new vE(this.data.getIterator())}getIteratorFrom(e){return new vE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pt(this.comparator);return n.data=e,n}}class vE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new An([])}unionWith(e){let n=new Pt(Nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new An(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return So(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException!="undefined"&&i instanceof DOMException?new xI("Invalid base64 string: "+i):i}}(e);return new $t(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new $t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$t.EMPTY_BYTE_STRING=new $t("");const tM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ei(t){if(De(!!t),typeof t=="string"){let e=0;const n=tM.exec(t);if(De(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hs(t){return typeof t=="string"?$t.fromBase64String(t):$t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $y(t){const e=t.mapValue.fields.__previous_value__;return Oy(e)?$y(e):e}function _l(t){const e=Ei(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Sl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Sl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ds(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Oy(t)?4:rM(t)?9007199254740991:10:re()}function Jn(t,e){if(t===e)return!0;const n=ds(t);if(n!==ds(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _l(t).isEqual(_l(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ei(r.timestampValue),o=Ei(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return hs(r.bytesValue).isEqual(hs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Xe(r.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(r.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Xe(r.integerValue)===Xe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Xe(r.doubleValue),o=Xe(i.doubleValue);return s===o?kh(s)===kh(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return So(t.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(gE(s)!==gE(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Jn(s[a],o[a])))return!1;return!0}(t,e);default:return re()}}function Tl(t,e){return(t.values||[]).find(n=>Jn(n,e))!==void 0}function To(t,e){if(t===e)return 0;const n=ds(t),r=ds(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Xe(i.integerValue||i.doubleValue),a=Xe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return yE(t.timestampValue,e.timestampValue);case 4:return yE(_l(t),_l(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(i,s){const o=hs(i),a=hs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=_e(o[l],a[l]);if(u!==0)return u}return _e(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=_e(Xe(i.latitude),Xe(s.latitude));return o!==0?o:_e(Xe(i.longitude),Xe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=To(o[l],a[l]);if(u)return u}return _e(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===qu.mapValue&&s===qu.mapValue)return 0;if(i===qu.mapValue)return 1;if(s===qu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=_e(a[c],u[c]);if(h!==0)return h;const d=To(o[a[c]],l[u[c]]);if(d!==0)return d}return _e(a.length,u.length)}(t.mapValue,e.mapValue);default:throw re()}}function yE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Ei(t),r=Ei(e),i=_e(n.seconds,r.seconds);return i!==0?i:_e(n.nanos,r.nanos)}function ko(t){return og(t)}function og(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Ei(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?hs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ee.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=og(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${og(r.fields[a])}`;return s+"}"}(t.mapValue):re();var e,n}function ag(t){return!!t&&"integerValue"in t}function Ly(t){return!!t&&"arrayValue"in t}function wE(t){return!!t&&"nullValue"in t}function EE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yc(t){return!!t&&"mapValue"in t}function $a(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ho(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$a(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$a(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$a(n)}setAll(e){let n=Nt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=$a(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());yc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];yc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ho(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dn($a(this.value))}}function AI(t){const e=[];return Ho(t.fields,(n,r)=>{const i=new Nt([n]);if(yc(r)){const s=AI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new An(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new At(e,0,ae.min(),ae.min(),ae.min(),dn.empty(),0)}static newFoundDocument(e,n,r,i){return new At(e,1,n,ae.min(),r,i,0)}static newNoDocument(e,n){return new At(e,2,n,ae.min(),ae.min(),dn.empty(),0)}static newUnknownDocument(e,n){return new At(e,3,n,ae.min(),ae.min(),dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ih{constructor(e,n){this.position=e,this.inclusive=n}}function CE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=To(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _E(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class La{constructor(e,n="asc"){this.field=e,this.dir=n}}function iM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class NI{}class tt extends NI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new oM(e,n,r):n==="array-contains"?new uM(e,r):n==="in"?new cM(e,r):n==="not-in"?new hM(e,r):n==="array-contains-any"?new dM(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new aM(e,r):new lM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(To(n,this.value)):n!==null&&ds(this.value)===ds(n)&&this.matchesComparison(To(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Zn extends NI{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Zn(e,n)}matches(e){return RI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function RI(t){return t.op==="and"}function DI(t){return sM(t)&&RI(t)}function sM(t){for(const e of t.filters)if(e instanceof Zn)return!1;return!0}function lg(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+ko(t.value);if(DI(t))return t.filters.map(e=>lg(e)).join(",");{const e=t.filters.map(n=>lg(n)).join(",");return`${t.op}(${e})`}}function PI(t,e){return t instanceof tt?function(n,r){return r instanceof tt&&n.op===r.op&&n.field.isEqual(r.field)&&Jn(n.value,r.value)}(t,e):t instanceof Zn?function(n,r){return r instanceof Zn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&PI(s,r.filters[o]),!0):!1}(t,e):void re()}function bI(t){return t instanceof tt?function(e){return`${e.field.canonicalString()} ${e.op} ${ko(e.value)}`}(t):t instanceof Zn?function(e){return e.op.toString()+" {"+e.getFilters().map(bI).join(" ,")+"}"}(t):"Filter"}class oM extends tt{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class aM extends tt{constructor(e,n){super(e,"in",n),this.keys=OI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lM extends tt{constructor(e,n){super(e,"not-in",n),this.keys=OI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function OI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class uM extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ly(n)&&Tl(n.arrayValue,this.value)}}class cM extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Tl(this.value.arrayValue,n)}}class hM extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Tl(this.value.arrayValue,n)}}class dM extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ly(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Tl(this.value.arrayValue,r))}}/**
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
 */class fM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function SE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new fM(t,e,n,r,i,s,o)}function My(t){const e=ce(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),jd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ko(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ko(r)).join(",")),e.ft=n}return e.ft}function Fy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!PI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_E(t.startAt,e.startAt)&&_E(t.endAt,e.endAt)}function ug(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function pM(t,e,n,r,i,s,o,a){return new Hd(t,e,n,r,i,s,o,a)}function Uy(t){return new Hd(t)}function TE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mM(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function gM(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function vM(t){return t.collectionGroup!==null}function oo(t){const e=ce(t);if(e.dt===null){e.dt=[];const n=gM(e),r=mM(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new La(n)),e.dt.push(new La(Nt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new La(Nt.keyField(),s))}}}return e.dt}function Rr(t){const e=ce(t);if(!e._t)if(e.limitType==="F")e._t=SE(e.path,e.collectionGroup,oo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of oo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new La(s.field,o))}const r=e.endAt?new Ih(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ih(e.startAt.position,e.startAt.inclusive):null;e._t=SE(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function cg(t,e,n){return new Hd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wd(t,e){return Fy(Rr(t),Rr(e))&&t.limitType===e.limitType}function $I(t){return`${My(Rr(t))}|lt:${t.limitType}`}function hg(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>bI(r)).join(", ")}]`),jd(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ko(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ko(r)).join(",")),`Target(${n})`}(Rr(t))}; limitType=${t.limitType})`}function Gd(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ee.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of oo(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=CE(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,oo(n),r)||n.endAt&&!function(i,s,o){const a=CE(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,oo(n),r))}(t,e)}function yM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function LI(t){return(e,n)=>{let r=!1;for(const i of oo(t)){const s=wM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function wM(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?To(a,l):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ho(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return II(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM=new Ue(ee.comparator);function Dr(){return EM}const MI=new Ue(ee.comparator);function Ea(...t){let e=MI;for(const n of t)e=e.insert(n.key,n);return e}function FI(t){let e=MI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gi(){return Ma()}function UI(){return Ma()}function Ma(){return new Wo(t=>t.toString(),(t,e)=>t.isEqual(e))}const CM=new Ue(ee.comparator),_M=new Pt(ee.comparator);function me(...t){let e=_M;for(const n of t)e=e.add(n);return e}const SM=new Pt(_e);function TM(){return SM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kh(e)?"-0":e}}function zI(t){return{integerValue:""+t}}function kM(t,e){return eM(e)?zI(e):BI(t,e)}/**
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
 */class Kd{constructor(){this._=void 0}}function IM(t,e,n){return t instanceof xh?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Oy(i)&&(i=$y(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof kl?jI(t,e):t instanceof Il?HI(t,e):function(r,i){const s=VI(r,i),o=kE(s)+kE(r.wt);return ag(s)&&ag(r.wt)?zI(o):BI(r.serializer,o)}(t,e)}function xM(t,e,n){return t instanceof kl?jI(t,e):t instanceof Il?HI(t,e):n}function VI(t,e){return t instanceof Ah?ag(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class xh extends Kd{}class kl extends Kd{constructor(e){super(),this.elements=e}}function jI(t,e){const n=WI(e);for(const r of t.elements)n.some(i=>Jn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Il extends Kd{constructor(e){super(),this.elements=e}}function HI(t,e){let n=WI(e);for(const r of t.elements)n=n.filter(i=>!Jn(i,r));return{arrayValue:{values:n}}}class Ah extends Kd{constructor(e,n){super(),this.serializer=e,this.wt=n}}function kE(t){return Xe(t.integerValue||t.doubleValue)}function WI(t){return Ly(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function AM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof kl&&r instanceof kl||n instanceof Il&&r instanceof Il?So(n.elements,r.elements,Jn):n instanceof Ah&&r instanceof Ah?Jn(n.wt,r.wt):n instanceof xh&&r instanceof xh}(t.transform,e.transform)}class NM{constructor(e,n){this.version=e,this.transformResults=n}}class Xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xn}static exists(e){return new Xn(void 0,e)}static updateTime(e){return new Xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qd{}function GI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qI(t.key,Xn.none()):new ou(t.key,t.data,Xn.none());{const n=t.data,r=dn.empty();let i=new Pt(Nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ss(t.key,r,new An(i.toArray()),Xn.none())}}function RM(t,e,n){t instanceof ou?function(r,i,s){const o=r.value.clone(),a=xE(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ss?function(r,i,s){if(!wc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=xE(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(KI(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Fa(t,e,n,r){return t instanceof ou?function(i,s,o,a){if(!wc(i.precondition,s))return o;const l=i.value.clone(),u=AE(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ss?function(i,s,o,a){if(!wc(i.precondition,s))return o;const l=AE(i.fieldTransforms,a,s),u=s.data;return u.setAll(KI(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return wc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function DM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=VI(r.transform,i||null);s!=null&&(n===null&&(n=dn.empty()),n.set(r.field,s))}return n||null}function IE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&So(n,r,(i,s)=>AM(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ou extends qd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ss extends qd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function KI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xE(t,e,n){const r=new Map;De(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,xM(o,a,n[i]))}return r}function AE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,IM(s,o,e))}return r}class qI extends qd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PM extends qd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&RM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=UI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=GI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&So(this.mutations,e.mutations,(n,r)=>IE(n,r))&&So(this.baseMutations,e.baseMutations,(n,r)=>IE(n,r))}}class By{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){De(e.mutations.length===r.length);let i=CM;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new By(e,n,r,i)}}/**
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
 */class $M{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,ve;function LM(t){switch(t){default:return re();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function QI(t){if(t===void 0)return Nr("GRPC error has no .code"),L.UNKNOWN;switch(t){case Qe.OK:return L.OK;case Qe.CANCELLED:return L.CANCELLED;case Qe.UNKNOWN:return L.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return L.INTERNAL;case Qe.UNAVAILABLE:return L.UNAVAILABLE;case Qe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Qe.NOT_FOUND:return L.NOT_FOUND;case Qe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Qe.ABORTED:return L.ABORTED;case Qe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Qe.DATA_LOSS:return L.DATA_LOSS;default:return re()}}(ve=Qe||(Qe={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class zy{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Qu}static getOrCreateInstance(){return Qu===null&&(Qu=new zy),Qu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Qu=null;/**
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
 */function MM(){return new TextEncoder}/**
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
 */const FM=new so([4294967295,4294967295],0);function NE(t){const e=MM().encode(t),n=new U3;return n.update(e),new Uint8Array(n.digest())}function RE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new so([n,r],0),new so([i,s],0)]}class Vy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ca(`Invalid padding: ${n}`);if(r<0)throw new Ca(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ca(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ca(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=so.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(so.fromNumber(r)));return i.compare(FM)===1&&(i=new so([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=NE(e),[r,i]=RE(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Vy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=NE(e),[r,i]=RE(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ca extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,au.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Qd(ae.min(),i,new Ue(_e),Dr(),me())}}class au{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new au(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class XI{constructor(e,n){this.targetId=e,this.bt=n}}class YI{constructor(e,n,r=$t.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class DE{constructor(){this.Vt=0,this.St=bE(),this.Dt=$t.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=me(),n=me(),r=me();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new au(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=bE()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class UM{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Dr(),this.jt=PE(),this.zt=new Ue(_e)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(ug(o))if(i===0){const a=new ee(o.path);this.Jt(r,a,At.newNoDocument(a,ae.min()))}else De(i===1);else{const a=this.se(r);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,u)}(n=zy.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,p,m,g,E,v;const f={localCacheCount:c,existenceFilterCount:h.count},y=h.unchangedNames;return y&&(f.bloomFilter={applied:u===0,hashCount:(d=y==null?void 0:y.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(g=(m=(p=y==null?void 0:y.bits)===null||p===void 0?void 0:p.bitmap)===null||m===void 0?void 0:m.length)!==null&&g!==void 0?g:0,padding:(v=(E=y==null?void 0:y.bits)===null||E===void 0?void 0:E.padding)!==null&&v!==void 0?v:0}),f}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=hs(s).toUint8Array()}catch(c){if(c instanceof xI)return _o("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Vy(l,o,a)}catch(c){return _o(c instanceof Ca?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.yt===0?1:i!==n-this.re(e.targetId,u)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&ug(a.target)){const l=new ee(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,At.newNoDocument(l,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=me();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ne(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new Qd(e,n,this.zt,this.Qt,r);return this.Qt=Dr(),this.jt=PE(),this.zt=new Ue(_e),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new DE,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new Pt(_e),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new DE),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function PE(){return new Ue(ee.comparator)}function bE(){return new Ue(ee.comparator)}const BM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),zM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),VM=(()=>({and:"AND",or:"OR"}))();class jM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dg(t,e){return t.useProto3Json||jd(e)?e:{value:e}}function Nh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function JI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function HM(t,e){return Nh(t,e.toTimestamp())}function Yn(t){return De(!!t),ae.fromTimestamp(function(e){const n=Ei(e);return new rt(n.seconds,n.nanos)}(t))}function jy(t,e){return function(n){return new $e(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ZI(t){const e=$e.fromString(t);return De(rx(e)),e}function fg(t,e){return jy(t.databaseId,e.path)}function Cp(t,e){const n=ZI(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(ex(n))}function pg(t,e){return jy(t.databaseId,e)}function WM(t){const e=ZI(t);return e.length===4?$e.emptyPath():ex(e)}function mg(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ex(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function OE(t,e,n){return{name:fg(t,e),fields:n.value.mapValue.fields}}function GM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(De(u===void 0||typeof u=="string"),$t.fromBase64String(u||"")):(De(u===void 0||u instanceof Uint8Array),$t.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?L.UNKNOWN:QI(l.code);return new Z(u,l.message||"")}(o);n=new YI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cp(t,r.document.name),s=Yn(r.document.updateTime),o=r.document.createTime?Yn(r.document.createTime):ae.min(),a=new dn({mapValue:{fields:r.document.fields}}),l=At.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ec(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cp(t,r.document),s=r.readTime?Yn(r.readTime):ae.min(),o=At.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ec([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cp(t,r.document),s=r.removedTargetIds||[];n=new Ec([],s,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new $M(i,s),a=r.targetId;n=new XI(a,o)}}return n}function KM(t,e){let n;if(e instanceof ou)n={update:OE(t,e.key,e.value)};else if(e instanceof qI)n={delete:fg(t,e.key)};else if(e instanceof Ss)n={update:OE(t,e.key,e.data),updateMask:n6(e.fieldMask)};else{if(!(e instanceof PM))return re();n={verify:fg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof xh)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof kl)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Il)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ah)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:HM(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(t,e.precondition)),n}function qM(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Yn(r.updateTime):Yn(i);return s.isEqual(ae.min())&&(s=Yn(i)),new NM(s,r.transformResults||[])}(n,e))):[]}function QM(t,e){return{documents:[pg(t,e.path)]}}function XM(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=pg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=pg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return nx(Zn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Ns(c.field),direction:ZM(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=dg(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function YM(t){let e=WM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){De(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=tx(c);return h instanceof Zn&&DI(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new La(Rs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,jd(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Ih(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Ih(d,h)}(n.endAt)),pM(e,i,o,s,a,"F",l,u)}function JM(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function tx(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Rs(e.unaryFilter.field);return tt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Rs(e.unaryFilter.field);return tt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rs(e.unaryFilter.field);return tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Rs(e.unaryFilter.field);return tt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(e){return tt.create(Rs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Zn.create(e.compositeFilter.filters.map(n=>tx(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return re()}}(e.compositeFilter.op))}(t):re()}function ZM(t){return BM[t]}function e6(t){return zM[t]}function t6(t){return VM[t]}function Ns(t){return{fieldPath:t.canonicalString()}}function Rs(t){return Nt.fromServerFormat(t.fieldPath)}function nx(t){return t instanceof tt?function(e){if(e.op==="=="){if(EE(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NAN"}};if(wE(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(EE(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NOT_NAN"}};if(wE(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ns(e.field),op:e6(e.op),value:e.value}}}(t):t instanceof Zn?function(e){const n=e.getFilters().map(r=>nx(r));return n.length===1?n[0]:{compositeFilter:{op:t6(e.op),filters:n}}}(t):re()}function n6(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n,r,i,s=ae.min(),o=ae.min(),a=$t.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(e){this.le=e}}function i6(t){const e=YM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cg(e,e.limit,"L"):e}/**
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
 */class s6{constructor(){this.sn=new o6}addToCollectionParentIndex(e,n){return this.sn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(wi.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(wi.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class o6{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Pt($e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pt($e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Io(0)}static kn(){return new Io(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a6{constructor(){this.changes=new Wo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class l6{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u6{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Fa(r.mutation,i,An.empty(),rt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const i=Gi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ea();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Gi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Dr();const o=Ma(),a=Ma();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ss)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Fa(c.mutation,u,c.mutation.getFieldMask(),rt.now())):o.set(u.key,An.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new l6(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ma();let i=new Ue((o,a)=>o-a),s=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||An.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||me()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=UI();c.forEach(d=>{if(!s.has(d)){const p=GI(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return ee.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vM(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(Gi());let a=-1,l=s;return o.next(u=>B.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?B.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,me())).next(c=>({batchId:a,changes:FI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let i=Ea();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ea();return this.indexManager.getCollectionParents(e,i).next(o=>B.forEach(o,a=>{const l=function(u,c){return new Hd(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,At.newInvalidDocument(u)))});let o=Ea();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Fa(u.mutation,l,An.empty(),rt.now()),Gd(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c6{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return B.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:Yn(r.createTime)}),B.resolve()}getNamedQuery(e,n){return B.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:i6(r.bundledQuery),readTime:Yn(r.readTime)}}(n)),B.resolve()}}/**
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
 */class h6{constructor(){this.overlays=new Ue(ee.comparator),this.hs=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gi();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=Gi(),s=n.length+1,o=new ee(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ue((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Gi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Gi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return B.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new OM(n,r));let s=this.hs.get(n);s===void 0&&(s=me(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.ls=new Pt(it.fs),this.ds=new Pt(it._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new it(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new it(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new ee(new $e([])),r=new it(n,e),i=new it(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new ee(new $e([])),r=new it(n,e),i=new it(n,e+1);let s=me();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new it(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return ee.comparator(e.key,n.key)||_e(e.Es,n.Es)}static _s(e,n){return _e(e.Es,n.Es)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d6{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new Pt(it.fs)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),i=new it(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pt(_e);return n.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),B.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ee.isDocumentKey(s)||(s=s.child(""));const o=new it(new ee(s),0);let a=new Pt(_e);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Es)),!0)},o),B.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){De(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return B.forEach(n.mutations,i=>{const s=new it(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new it(n,0),i=this.Rs.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f6{constructor(e){this.Ss=e,this.docs=new Ue(ee.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():At.newInvalidDocument(n))}getEntries(e,n){let r=Dr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():At.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Dr();const o=n.path,a=new ee(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Y3(X3(c),r)<=0||(i.has(c.key)||Gd(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re()}Ds(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new p6(this)}getSize(e){return B.resolve(this.size)}}class p6 extends a6{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m6{constructor(e){this.persistence=e,this.Cs=new Wo(n=>My(n),Fy),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Hy,this.targetCount=0,this.ks=Io.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),B.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new Io(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.$n(n),B.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g6{constructor(e,n){this.Ms={},this.overlays={},this.Os=new by(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new m6(this),this.indexManager=new s6,this.remoteDocumentCache=function(r){return new f6(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new r6(n),this.Ls=new c6(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new h6,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new d6(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new v6(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return B.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class v6 extends Z3{constructor(e){super(),this.currentSequenceNumber=e}}class Wy{constructor(e){this.persistence=e,this.Gs=new Hy,this.Qs=null}static js(e){return new Wy(e)}get zs(){if(this.Qs)return this.Qs;throw re()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),B.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.zs,r=>{const i=ee.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,ae.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return B.or([()=>B.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=me(),i=me();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Gy(e,n.fromCache,r,i)}}/**
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
 */class y6{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(TE(n))return B.resolve(null);let r=Rr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cg(n,null,"F"),r=Rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=me(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Qi(n,a);return this.ji(n,u,o,l.readTime)?this.Ui(e,cg(n,null,"F")):this.zi(e,u,n,l)}))})))}Ki(e,n,r,i){return TE(n)||i.isEqual(ae.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(mE()<=Ee.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hg(n)),this.zi(e,o,n,Q3(i,-1)))})}Qi(e,n){let r=new Pt(LI(e));return n.forEach((i,s)=>{Gd(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return mE()<=Ee.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",hg(n)),this.qi.getDocumentsMatchingQuery(e,n,wi.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w6{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new Ue(_e),this.Ji=new Wo(s=>My(s),Fy),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new u6(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function E6(t,e,n,r){return new w6(t,e,n,r)}async function ix(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=me();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function C6(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=B.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(m=>{const g=l.docVersions.get(p);De(g!==null),m.version.compareTo(g)<0&&(c.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),u.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=me();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function sx(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function _6(t,e){const n=ce(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken($t.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(m,g,E){return m.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,p,c)&&a.push(n.Fs.updateTargetData(s,p))});let l=Dr(),u=me();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(S6(s,o,e.documentUpdates).next(c=>{l=c.er,u=c.nr})),!r.isEqual(ae.min())){const c=n.Fs.getLastRemoteSnapshotVersion(s).next(h=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return B.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Hi=i,s))}function S6(t,e,n){let r=me(),i=me();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{er:o,nr:i}})}function T6(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function k6(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new Xr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function gg(t,e,n){const r=ce(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!su(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function $E(t,e,n){const r=ce(t);let i=ae.min(),s=me();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=ce(a),h=c.Ji.get(u);return h!==void 0?B.resolve(c.Hi.get(h)):c.Fs.getTargetData(l,u)}(r,o,Rr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:ae.min(),n?s:me())).next(a=>(I6(r,yM(e),a),{documents:a,sr:s})))}function I6(t,e,n){let r=t.Yi.get(e)||ae.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}class LE{constructor(){this.activeTargetIds=TM()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class x6{constructor(){this.Wr=new LE,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new LE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class A6{Jr(e){}shutdown(){}}/**
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
 */class ME{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xu=null;function _p(){return Xu===null?Xu=268435456+Math.round(2147483648*Math.random()):Xu++,"0x"+Xu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Tt="WebChannelConnection";class D6 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=_p(),a=this.Io(e,n);X("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,i,s),this.Eo(e,a,l,r).then(u=>(X("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw _o("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+jo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=N6[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=_p();return new Promise((o,a)=>{const l=new F3;l.setWithCredentials(!0),l.listenOnce($3.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ep.NO_ERROR:const c=l.getResponseJson();X(Tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ep.TIMEOUT:X(Tt,`RPC '${e}' ${s} timed out`),a(new Z(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ep.HTTP_ERROR:const h=l.getStatus();if(X(Tt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const m=function(g){const E=g.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(p.status);a(new Z(m,p.message))}else a(new Z(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Z(L.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{X(Tt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);X(Tt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=_p(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=b3(),a=O3(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new M3({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");X(Tt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const p=new R6({io:g=>{d?X(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,g):(h||(X(Tt,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),X(Tt,`RPC '${e}' stream ${i} sending:`,g),c.send(g))},ro:()=>c.close()}),m=(g,E,v)=>{g.listen(E,f=>{try{v(f)}catch(y){setTimeout(()=>{throw y},0)}})};return m(c,Gu.EventType.OPEN,()=>{d||X(Tt,`RPC '${e}' stream ${i} transport opened.`)}),m(c,Gu.EventType.CLOSE,()=>{d||(d=!0,X(Tt,`RPC '${e}' stream ${i} transport closed`),p.fo())}),m(c,Gu.EventType.ERROR,g=>{d||(d=!0,_o(Tt,`RPC '${e}' stream ${i} transport errored:`,g),p.fo(new Z(L.UNAVAILABLE,"The operation could not be completed")))}),m(c,Gu.EventType.MESSAGE,g=>{var E;if(!d){const v=g.data[0];De(!!v);const f=v,y=f.error||((E=f[0])===null||E===void 0?void 0:E.error);if(y){X(Tt,`RPC '${e}' stream ${i} received error:`,y);const C=y.status;let S=function(T){const k=Qe[T];if(k!==void 0)return QI(k)}(C),I=y.message;S===void 0&&(S=L.INTERNAL,I="Unknown error status: "+C+" with message "+y.message),d=!0,p.fo(new Z(S,I)),c.close()}else X(Tt,`RPC '${e}' stream ${i} received:`,v),p._o(v)}}),m(a,L3.STAT_EVENT,g=>{g.stat===fE.PROXY?X(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):g.stat===fE.NOPROXY&&X(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.lo()},0),p}}function Sp(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t){return new jM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new ox(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Nr(n.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new Z(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class P6 extends ax{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=GM(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ae.min():s.readTime?Yn(s.readTime):ae.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=mg(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=ug(a)?{documents:QM(i,a)}:{query:XM(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=JI(i,s.resumeToken);const l=dg(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(ae.min())>0){o.readTime=Nh(i,s.snapshotVersion.toTimestamp());const l=dg(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=JM(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=mg(this.serializer),n.removeTarget=e,this.zo(n)}}class b6 extends ax{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=qM(e.writeResults,e.commitTime),r=Yn(e.commitTime);return this.listener.uu(r,n)}return De(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=mg(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>KM(this.serializer,r))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O6 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new Z(L.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(L.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Z(L.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class $6{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Nr(n),this.wu=!1):X("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L6{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{Ts(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ce(a);l.Au.add(4),await lu(l),l.Pu.set("Unknown"),l.Au.delete(4),await Yd(l)}(this))})}),this.Pu=new $6(r,i)}}async function Yd(t){if(Ts(t))for(const e of t.Ru)await e(!0)}async function lu(t){for(const e of t.Ru)await e(!1)}function lx(t,e){const n=ce(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Qy(n)?qy(n):Go(n).Uo()&&Ky(n,e))}function ux(t,e){const n=ce(t),r=Go(n);n.Eu.delete(e),r.Uo()&&cx(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():Ts(n)&&n.Pu.set("Unknown"))}function Ky(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Go(t).nu(e)}function cx(t,e){t.bu.Lt(e),Go(t).su(e)}function qy(t){t.bu=new UM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Go(t).start(),t.Pu.mu()}function Qy(t){return Ts(t)&&!Go(t).qo()&&t.Eu.size>0}function Ts(t){return ce(t).Au.size===0}function hx(t){t.bu=void 0}async function M6(t){t.Eu.forEach((e,n)=>{Ky(t,e)})}async function F6(t,e){hx(t),Qy(t)?(t.Pu.pu(e),qy(t)):t.Pu.set("Unknown")}async function U6(t,e,n){if(t.Pu.set("Online"),e instanceof YI&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rh(t,r)}else if(e instanceof Ec?t.bu.Wt(e):e instanceof XI?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(ae.min()))try{const r=await sx(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Eu.get(l);u&&i.Eu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Eu.get(a);if(!u)return;i.Eu.set(a,u.withResumeToken($t.EMPTY_BYTE_STRING,u.snapshotVersion)),cx(i,a);const c=new Xr(u.target,a,l,u.sequenceNumber);Ky(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Rh(t,r)}}async function Rh(t,e,n){if(!su(e))throw e;t.Au.add(1),await lu(t),t.Pu.set("Offline"),n||(n=()=>sx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Yd(t)})}function dx(t,e){return e().catch(n=>Rh(t,n,e))}async function Jd(t){const e=ce(t),n=Ci(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;B6(e);)try{const i=await T6(e.localStore,r);if(i===null){e.Tu.length===0&&n.Qo();break}r=i.batchId,z6(e,i)}catch(i){await Rh(e,i)}fx(e)&&px(e)}function B6(t){return Ts(t)&&t.Tu.length<10}function z6(t,e){t.Tu.push(e);const n=Ci(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function fx(t){return Ts(t)&&!Ci(t).qo()&&t.Tu.length>0}function px(t){Ci(t).start()}async function V6(t){Ci(t).au()}async function j6(t){const e=Ci(t);for(const n of t.Tu)e.ou(n.mutations)}async function H6(t,e,n){const r=t.Tu.shift(),i=By.from(r,e,n);await dx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Jd(t)}async function W6(t,e){e&&Ci(t).ru&&await async function(n,r){if(i=r.code,LM(i)&&i!==L.ABORTED){const s=n.Tu.shift();Ci(n).Go(),await dx(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Jd(n)}var i}(t,e),fx(t)&&px(t)}async function FE(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Ts(n);n.Au.add(3),await lu(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Yd(n)}async function G6(t,e){const n=ce(t);e?(n.Au.delete(2),await Yd(n)):e||(n.Au.add(2),await lu(n),n.Pu.set("Unknown"))}function Go(t){return t.Vu||(t.Vu=function(e,n,r){const i=ce(e);return i.lu(),new P6(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:M6.bind(null,t),co:F6.bind(null,t),eu:U6.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Qy(t)?qy(t):t.Pu.set("Unknown")):(await t.Vu.stop(),hx(t))})),t.Vu}function Ci(t){return t.Su||(t.Su=function(e,n,r){const i=ce(e);return i.lu(),new b6(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:V6.bind(null,t),co:W6.bind(null,t),cu:j6.bind(null,t),uu:H6.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Jd(t)):(await t.Su.stop(),t.Tu.length>0&&(X("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Xy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yy(t,e){if(Nr("AsyncQueue",`${e}: ${t}`),su(t))return new Z(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=Ea(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new ao(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ao)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ao;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(){this.Du=new Ue(ee.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):re():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class xo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xo(e,n,ao.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K6{constructor(){this.xu=void 0,this.listeners=[]}}class q6{constructor(){this.queries=new Wo(e=>$I(e),Wd),this.onlineState="Unknown",this.Nu=new Set}}async function mx(t,e){const n=ce(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new K6),i)try{s.xu=await n.onListen(r)}catch(o){const a=Yy(o,`Initialization of query '${hg(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&Jy(n)}async function gx(t,e){const n=ce(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Q6(t,e){const n=ce(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&Jy(n)}function X6(t,e,n){const r=ce(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Jy(t){t.Nu.forEach(e=>{e.next()})}class vx{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new xo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.key=e}}class wx{constructor(e){this.key=e}}class Y6{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=me(),this.mutatedKeys=me(),this.Zu=LI(e),this.tc=new ao(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new UE,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=Gd(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?m!==g&&(r.track({type:3,doc:p}),E=!0):this.ic(d,p)||(r.track({type:2,doc:p}),E=!0,(l&&this.Zu(p,l)>0||u&&this.Zu(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(p?(o=o.add(p),s=g?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((u,c)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return p(h)-p(d)}(u.type,c.type)||this.Zu(u.doc,c.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,s.length!==0||l?{snapshot:new xo(this.query,e.tc,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new UE,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=me(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new wx(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new yx(r))}),n}ac(e){this.Ju=e.sr,this.Xu=me();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return xo.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class J6{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Z6{constructor(e){this.key=e,this.lc=!1}}class e5{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Wo(a=>$I(a),Wd),this._c=new Map,this.wc=new Set,this.mc=new Ue(ee.comparator),this.gc=new Map,this.yc=new Hy,this.Ic={},this.Tc=new Map,this.Ec=Io.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function t5(t,e){const n=h5(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await k6(n.localStore,Rr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await n5(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&lx(n.remoteStore,o)}return i}async function n5(t,e,n,r,i){t.Rc=(h,d,p)=>async function(m,g,E,v){let f=g.view.nc(E);f.ji&&(f=await $E(m.localStore,g.query,!1).then(({documents:S})=>g.view.nc(S,f)));const y=v&&v.targetChanges.get(g.targetId),C=g.view.applyChanges(f,m.isPrimaryClient,y);return zE(m,g.targetId,C.uc),C.snapshot}(t,h,d,p);const s=await $E(t.localStore,e,!0),o=new Y6(e,s.sr),a=o.nc(s.documents),l=au.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);zE(t,n,u.uc);const c=new J6(e,n,o);return t.dc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function r5(t,e){const n=ce(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Wd(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await gg(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ux(n.remoteStore,r.targetId),vg(n,r.targetId)}).catch(iu)):(vg(n,r.targetId),await gg(n.localStore,r.targetId,!0))}async function i5(t,e,n){const r=d5(t);try{const i=await function(s,o){const a=ce(s),l=rt.now(),u=o.reduce((d,p)=>d.add(p.key),me());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Dr(),m=me();return a.Xi.getEntries(d,u).next(g=>{p=g,p.forEach((E,v)=>{v.isValidDocument()||(m=m.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(g=>{c=g;const E=[];for(const v of o){const f=DM(v,c.get(v.key).overlayedDocument);f!=null&&E.push(new Ss(v.key,f,AI(f.value.mapValue),Xn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(g=>{h=g;const E=g.applyToLocalDocumentSet(c,m);return a.documentOverlayCache.saveOverlays(d,g.batchId,E)})}).then(()=>({batchId:h.batchId,changes:FI(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Ic[s.currentUser.toKey()];l||(l=new Ue(_e)),l=l.insert(o,a),s.Ic[s.currentUser.toKey()]=l}(r,i.batchId,n),await uu(r,i.changes),await Jd(r.remoteStore)}catch(i){const s=Yy(i,"Failed to persist write");n.reject(s)}}async function Ex(t,e){const n=ce(t);try{const r=await _6(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(De(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?De(o.lc):i.removedDocuments.size>0&&(De(o.lc),o.lc=!1))}),await uu(n,r,e)}catch(r){await iu(r)}}function BE(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ce(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.ku(o)&&(l=!0)}),l&&Jy(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function s5(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new Ue(ee.comparator);o=o.insert(s,At.newNoDocument(s,ae.min()));const a=me().add(s),l=new Qd(ae.min(),new Map,new Ue(_e),o,a);await Ex(r,l),r.mc=r.mc.remove(s),r.gc.delete(e),Zy(r)}else await gg(r.localStore,e,!1).then(()=>vg(r,e,n)).catch(iu)}async function o5(t,e){const n=ce(t),r=e.batch.batchId;try{const i=await C6(n.localStore,e);_x(n,r,null),Cx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uu(n,i)}catch(i){await iu(i)}}async function a5(t,e,n){const r=ce(t);try{const i=await function(s,o){const a=ce(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(De(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);_x(r,e,n),Cx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await uu(r,i)}catch(i){await iu(i)}}function Cx(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function _x(t,e,n){const r=ce(t);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function vg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||Sx(t,r)})}function Sx(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(ux(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Zy(t))}function zE(t,e,n){for(const r of n)r instanceof yx?(t.yc.addReference(r.key,e),l5(t,r)):r instanceof wx?(X("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||Sx(t,r.key)):re()}function l5(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(X("SyncEngine","New document in limbo: "+n),t.wc.add(r),Zy(t))}function Zy(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new ee($e.fromString(e)),r=t.Ec.next();t.gc.set(r,new Z6(n)),t.mc=t.mc.insert(n,r),lx(t.remoteStore,new Xr(Rr(Uy(n.path)),r,"TargetPurposeLimboResolution",by.ct))}}async function uu(t,e,n){const r=ce(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Gy.Bi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,l){const u=ce(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>B.forEach(l,h=>B.forEach(h.$i,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>B.forEach(h.Fi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!su(c))throw c;X("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Hi.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);u.Hi=u.Hi.insert(h,m)}}}(r.localStore,s))}async function u5(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await ix(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new Z(L.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uu(n,r.tr)}}function c5(t,e){const n=ce(t),r=n.gc.get(e);if(r&&r.lc)return me().add(r.key);{let i=me();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function h5(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ex.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=c5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=s5.bind(null,e),e.fc.eu=Q6.bind(null,e.eventManager),e.fc.vc=X6.bind(null,e.eventManager),e}function d5(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=o5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=a5.bind(null,e),e}class VE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Xd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return E6(this.persistence,new y6,e.initialUser,this.serializer)}createPersistence(e){return new g6(Wy.js,this.serializer)}createSharedClientState(e){return new x6}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class f5{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>BE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=u5.bind(null,this.syncEngine),await G6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new q6}createDatastore(e){const n=Xd(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new D6(i));var i;return function(s,o,a,l){return new O6(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>BE(this.syncEngine,a,0),o=ME.D()?new ME:new A6,new L6(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new e5(r,i,s,o,a,l);return u&&(c.Ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ce(e);X("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await lu(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Tx{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):Nr("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p5{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=kI.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Z(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Tp(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ix(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await g5(t);X("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>FE(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>FE(e.remoteStore,s)),t._onlineComponents=e}function m5(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function g5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Tp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!m5(n))throw n;_o("Error using user provided cache. Falling back to memory cache: "+n),await Tp(t,new VE)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Tp(t,new VE);return t._offlineComponents}async function kx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await jE(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await jE(t,new f5))),t._onlineComponents}function v5(t){return kx(t).then(e=>e.syncEngine)}async function Ix(t){const e=await kx(t),n=e.eventManager;return n.onListen=t5.bind(null,e.syncEngine),n.onUnlisten=r5.bind(null,e.syncEngine),n}function y5(t,e,n={}){const r=new Er;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Tx({next:h=>{s.enqueueAndForget(()=>gx(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new Z(L.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new Z(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new vx(Uy(o.path),u,{includeMetadataChanges:!0,Uu:!0});return mx(i,c)}(await Ix(t),t.asyncQueue,e,n,r)),r.promise}function w5(t,e,n={}){const r=new Er;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Tx({next:h=>{s.enqueueAndForget(()=>gx(i,c)),h.fromCache&&a.source==="server"?l.reject(new Z(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new vx(o,u,{includeMetadataChanges:!0,Uu:!0});return mx(i,c)}(await Ix(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(t,e,n){if(!n)throw new Z(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function E5(t,e,n,r){if(e===!0&&r===!0)throw new Z(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function WE(t){if(!ee.isDocumentKey(t))throw new Z(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function GE(t){if(ee.isDocumentKey(t))throw new Z(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function e0(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function _i(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=e0(t);throw new Z(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}E5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new KE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Z(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Z(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new KE(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new B3;switch(n.type){case"firstParty":return new H3(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Z(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=HE.get(e);n&&(X("ComponentProvider","Removing Datastore"),HE.delete(e),n.terminate())}(this),Promise.resolve()}}function C5(t,e,n,r={}){var i;const s=(t=_i(t,Zd))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&_o("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=It.MOCK_USER;else{o=bT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new Z(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new It(l)}t._authCredentials=new z3(new TI(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new di(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new en(this.firestore,e,this._key)}}class ef{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ef(this.firestore,e,this._query)}}class di extends ef{constructor(e,n,r){super(e,n,Uy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new en(this.firestore,null,new ee(e))}withConverter(e){return new di(this.firestore,e,this._path)}}function ks(t,e,...n){if(t=ut(t),xx("collection","path",e),t instanceof Zd){const r=$e.fromString(e,...n);return GE(r),new di(t,null,r)}{if(!(t instanceof en||t instanceof di))throw new Z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return GE(r),new di(t.firestore,null,r)}}function cu(t,e,...n){if(t=ut(t),arguments.length===1&&(e=kI.A()),xx("doc","path",e),t instanceof Zd){const r=$e.fromString(e,...n);return WE(r),new en(t,null,new ee(r))}{if(!(t instanceof en||t instanceof di))throw new Z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return WE(r),new en(t.firestore,t instanceof di?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _5{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new ox(this,"async_queue_retry"),this.Yc=()=>{const n=Sp();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Sp();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Sp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Er;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!su(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Nr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=Xy.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&re()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class hu extends Zd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new _5,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ax(this),this._firestoreClient.terminate()}}function S5(t,e){const n=typeof t=="object"?t:Jv(),r=typeof t=="string"?t:e||"(default)",i=Td(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=DT("firestore");s&&C5(i,...s)}return i}function t0(t){return t._firestoreClient||Ax(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ax(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new nM(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new p5(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ao($t.fromBase64String(e))}catch(n){throw new Z(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ao($t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T5=/^__.*__$/;class k5{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new ou(e,this.data,n,this.fieldTransforms)}}function Rx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class i0{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new i0(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.la(e),i}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Dh(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Rx(this.ua)&&T5.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class I5{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xd(e)}ga(e,n,r,i=!1){return new i0({ua:e,methodName:n,ma:r,path:Nt.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dx(t){const e=t._freezeSettings(),n=Xd(t._databaseId);return new I5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Px(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);Lx("Data must be an object, but it was:",o,r);const a=Ox(r,o);let l,u;if(s.merge)l=new An(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=x5(e,h,n);if(!o.contains(d))throw new Z(L.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);N5(c,d)||c.push(d)}l=new An(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new k5(new dn(a),l,u)}function bx(t,e){if($x(t=ut(t)))return Lx("Unsupported field value:",e,t),Ox(t,e);if(t instanceof Nx)return function(n,r){if(!Rx(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=bx(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ut(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return kM(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=rt.fromDate(n);return{timestampValue:Nh(r.serializer,i)}}if(n instanceof rt){const i=new rt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Nh(r.serializer,i)}}if(n instanceof r0)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ao)return{bytesValue:JI(r.serializer,n._byteString)};if(n instanceof en){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:jy(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${e0(n)}`)}(t,e)}function Ox(t,e){const n={};return II(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ho(t,(r,i)=>{const s=bx(i,e.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function $x(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof r0||t instanceof Ao||t instanceof en||t instanceof Nx)}function Lx(t,e,n){if(!$x(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=e0(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function x5(t,e,n){if((e=ut(e))instanceof n0)return e._internalPath;if(typeof e=="string")return Mx(t,e);throw Dh("Field path arguments must be of type string or ",t,!1,void 0,n)}const A5=new RegExp("[~\\*/\\[\\]]");function Mx(t,e,n){if(e.search(A5)>=0)throw Dh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new n0(...e.split("."))._internalPath}catch{throw Dh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Z(L.INVALID_ARGUMENT,a+t+l)}function N5(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new en(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new R5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ux("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class R5 extends Fx{data(){return super.data()}}function Ux(t,e){return typeof e=="string"?Mx(t,e):e instanceof n0?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D5(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class P5{convertValue(e,n="none"){switch(ds(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ho(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new r0(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$y(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_l(e));default:return null}}convertTimestamp(e){const n=Ei(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);De(rx(r));const i=new Sl(r.get(1),r.get(3)),s=new ee(r.popFirst(5));return i.isEqual(n)||Nr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zx extends Fx{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Cc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ux("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Cc extends zx{data(e={}){return super.data(e)}}class b5{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new _a(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Cc(this._firestore,this._userDataWriter,r.key,r,new _a(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Cc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new _a(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Cc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new _a(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:O5(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function O5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t){t=_i(t,en);const e=_i(t.firestore,hu);return y5(t0(e),t._key).then(n=>L5(e,t,n))}class Vx extends P5{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ao(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new en(this.firestore,null,n)}}function o0(t){t=_i(t,ef);const e=_i(t.firestore,hu),n=t0(e),r=new Vx(e);return D5(t._query),w5(n,t._query).then(i=>new b5(e,r,t,i))}function $5(t,e,n){t=_i(t,en);const r=_i(t.firestore,hu),i=Bx(t.converter,e,n);return jx(r,[Px(Dx(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Xn.none())])}function tf(t,e){const n=_i(t.firestore,hu),r=cu(t),i=Bx(t.converter,e);return jx(n,[Px(Dx(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Xn.exists(!1))]).then(()=>r)}function jx(t,e){return function(n,r){const i=new Er;return n.asyncQueue.enqueueAndForget(async()=>i5(await v5(n),r,i)),i.promise}(t0(t),e)}function L5(t,e,n){const r=n.docs.get(e._key),i=new Vx(t);return new zx(t,i,e._key,r,new _a(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){jo=n})(Es),as(new yi("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new hu(new V3(n.getProvider("auth-internal")),new G3(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Z(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sl(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Kn(pE,"3.11.0",t),Kn(pE,"3.11.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx="firebasestorage.googleapis.com",Wx="storageBucket",M5=2*60*1e3,F5=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends rr{constructor(e,n,r=0){super(kp(e),`Firebase Storage: ${n} (${kp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ge.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return kp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var He;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(He||(He={}));function kp(t){return"storage/"+t}function a0(){const t="An unknown error occurred, please check the error payload for server response.";return new Ge(He.UNKNOWN,t)}function U5(t){return new Ge(He.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function B5(t){return new Ge(He.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function z5(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ge(He.UNAUTHENTICATED,t)}function V5(){return new Ge(He.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function j5(t){return new Ge(He.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function H5(){return new Ge(He.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function W5(){return new Ge(He.CANCELED,"User canceled the upload/download.")}function G5(t){return new Ge(He.INVALID_URL,"Invalid URL '"+t+"'.")}function K5(t){return new Ge(He.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function q5(){return new Ge(He.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Wx+"' property when initializing the app?")}function Q5(){return new Ge(He.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function X5(){return new Ge(He.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Y5(t){return new Ge(He.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function yg(t){return new Ge(He.INVALID_ARGUMENT,t)}function Gx(){return new Ge(He.APP_DELETED,"The Firebase app was deleted.")}function J5(t){return new Ge(He.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ua(t,e){return new Ge(He.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ua(t){throw new Ge(He.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(r.path==="")return r;throw K5(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},g=n===Hx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",v=new RegExp(`^https?://${g}/${i}/${E}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:p,indices:m,postModify:u},{regex:v,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<y.length;C++){const S=y[C],I=S.regex.exec(e);if(I){const T=I[S.indices.bucket];let k=I[S.indices.path];k||(k=""),r=new Jt(T,k),S.postModify(r);break}}if(r==null)throw G5(e);return r}}class Z5{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e9(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(p,l())},E)}function d(){s&&clearTimeout(s)}function p(E,...v){if(u){d();return}if(E){d(),c.call(null,E,...v);return}if(l()||o){d(),c.call(null,E,...v);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let m=!1;function g(E){m||(m=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function t9(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n9(t){return t!==void 0}function r9(t){return typeof t=="object"&&!Array.isArray(t)}function l0(t){return typeof t=="string"||t instanceof String}function qE(t){return u0()&&t instanceof Blob}function u0(){return typeof Blob!="undefined"&&!cb()}function QE(t,e,n,r){if(r<e)throw yg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw yg(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Kx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Yi||(Yi={}));/**
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
 */function i9(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s9{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Yu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Yi.NO_ERROR,l=s.getStatus();if(!a||i9(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Yi.ABORT;r(!1,new Yu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Yu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());n9(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=a0();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Gx():W5();o(l)}else{const l=H5();o(l)}};this.canceled_?n(!1,new Yu(!1,null,!0)):this.backoffId_=e9(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&t9(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Yu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function o9(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function a9(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function l9(t,e){e&&(t["X-Firebase-GMPID"]=e)}function u9(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function c9(t,e,n,r,i,s,o=!0){const a=Kx(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return l9(u,e),o9(u,n),a9(u,s),u9(u,r),new s9(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h9(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function d9(...t){const e=h9();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(u0())return new Blob(t);throw new Ge(He.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function f9(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function p9(t){if(typeof atob=="undefined")throw Y5("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ip{constructor(e,n){this.data=e,this.contentType=n||null}}function m9(t,e){switch(t){case jn.RAW:return new Ip(qx(e));case jn.BASE64:case jn.BASE64URL:return new Ip(Qx(t,e));case jn.DATA_URL:return new Ip(v9(e),y9(e))}throw a0()}function qx(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function g9(t){let e;try{e=decodeURIComponent(t)}catch{throw Ua(jn.DATA_URL,"Malformed data URL.")}return qx(e)}function Qx(t,e){switch(t){case jn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ua(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case jn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ua(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=p9(e)}catch(i){throw i.message.includes("polyfill")?i:Ua(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Xx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ua(jn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=w9(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function v9(t){const e=new Xx(t);return e.base64?Qx(jn.BASE64,e.rest):g9(e.rest)}function y9(t){return new Xx(t).contentType}function w9(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n){let r=0,i="";qE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(qE(this.data_)){const r=this.data_,i=f9(r,e,n);return i===null?null:new Gr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Gr(r,!0)}}static getBlob(...e){if(u0()){const n=e.map(r=>r instanceof Gr?r.data_:r);return new Gr(d9.apply(null,n))}else{const n=e.map(o=>l0(o)?m9(jn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Gr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(t){let e;try{e=JSON.parse(t)}catch{return null}return r9(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E9(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function C9(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Jx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _9(t,e){return e}class Lt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||_9}}let Ju=null;function S9(t){return!l0(t)||t.length<2?t:Jx(t)}function Zx(){if(Ju)return Ju;const t=[];t.push(new Lt("bucket")),t.push(new Lt("generation")),t.push(new Lt("metageneration")),t.push(new Lt("name","fullPath",!0));function e(s,o){return S9(o)}const n=new Lt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Lt("size");return i.xform=r,t.push(i),t.push(new Lt("timeCreated")),t.push(new Lt("updated")),t.push(new Lt("md5Hash",null,!0)),t.push(new Lt("cacheControl",null,!0)),t.push(new Lt("contentDisposition",null,!0)),t.push(new Lt("contentEncoding",null,!0)),t.push(new Lt("contentLanguage",null,!0)),t.push(new Lt("contentType",null,!0)),t.push(new Lt("metadata","customMetadata",!0)),Ju=t,Ju}function T9(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Jt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function k9(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return T9(r,t),r}function e2(t,e,n){const r=Yx(e);return r===null?null:k9(t,r,n)}function I9(t,e,n,r){const i=Yx(e);if(i===null||!l0(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),p=c0(d,n,r),m=Kx({alt:"media",token:u});return p+m})[0]}function x9(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class t2{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n2(t){if(!t)throw a0()}function A9(t,e){function n(r,i){const s=e2(t,i,e);return n2(s!==null),s}return n}function N9(t,e){function n(r,i){const s=e2(t,i,e);return n2(s!==null),I9(s,i,t.host,t._protocol)}return n}function r2(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=V5():i=z5():n.getStatus()===402?i=B5(t.bucket):n.getStatus()===403?i=j5(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function R9(t){const e=r2(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=U5(t.path)),s.serverResponse=i.serverResponse,s}return n}function D9(t,e,n){const r=e.fullServerUrl(),i=c0(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new t2(i,s,N9(t,n),o);return a.errorHandler=R9(e),a}function P9(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function b9(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=P9(null,e)),r}function O9(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let C=0;C<2;C++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=b9(e,r,i),c=x9(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=Gr.getBlob(h,r,d);if(p===null)throw Q5();const m={name:u.fullPath},g=c0(s,t.host,t._protocol),E="POST",v=t.maxUploadRetryTime,f=new t2(g,E,A9(t,n),v);return f.urlParams=m,f.headers=o,f.body=p.uploadData(),f.errorHandler=r2(e),f}class $9{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Yi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Yi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Yi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ua("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ua("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ua("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ua("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ua("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class L9 extends $9{initXhr(){this.xhr_.responseType="text"}}function i2(){return new L9}/**
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
 */class fs{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new fs(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Jx(this._location.path)}get storage(){return this._service}get parent(){const e=E9(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new fs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw J5(e)}}function M9(t,e,n){t._throwIfRoot("uploadBytes");const r=O9(t.storage,t._location,Zx(),new Gr(e,!0),n);return t.storage.makeRequestWithTokens(r,i2).then(i=>({metadata:i,ref:t}))}function F9(t){t._throwIfRoot("getDownloadURL");const e=D9(t.storage,t._location,Zx());return t.storage.makeRequestWithTokens(e,i2).then(n=>{if(n===null)throw X5();return n})}function U9(t,e){const n=C9(t._location.path,e),r=new Jt(t._location.bucket,n);return new fs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B9(t){return/^[A-Za-z]+:\/\//.test(t)}function z9(t,e){return new fs(t,e)}function s2(t,e){if(t instanceof h0){const n=t;if(n._bucket==null)throw q5();const r=new fs(n,n._bucket);return e!=null?s2(r,e):r}else return e!==void 0?U9(t,e):t}function V9(t,e){if(e&&B9(e)){if(t instanceof h0)return z9(t,e);throw yg("To use ref(service, url), the first argument must be a Storage instance.")}else return s2(t,e)}function XE(t,e){const n=e==null?void 0:e[Wx];return n==null?null:Jt.makeFromBucketSpec(n,t)}function j9(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:bT(i,t.app.options.projectId))}class h0{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Hx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=M5,this._maxUploadRetryTime=F5,this._requests=new Set,i!=null?this._bucket=Jt.makeFromBucketSpec(i,this._host):this._bucket=XE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=XE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){QE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){QE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Z5(Gx());{const o=c9(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const YE="@firebase/storage",JE="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2="storage";function d0(t,e,n){return t=ut(t),M9(t,e,n)}function f0(t){return t=ut(t),F9(t)}function Di(t,e){return t=ut(t),V9(t,e)}function H9(t=Jv(),e){t=ut(t);const r=Td(t,o2).getImmediate({identifier:e}),i=DT("storage");return i&&W9(r,...i),r}function W9(t,e,n,r={}){j9(t,e,n,r)}function G9(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new h0(n,r,i,e,Es)}function K9(){as(new yi(o2,G9,"PUBLIC").setMultipleInstances(!0)),Kn(YE,JE,""),Kn(YE,JE,"esm2017")}K9();const q9={apiKey:"AIzaSyB6eD_2vEo_ZIjZbDoRg7cX92y81sB0Auc",authDomain:"myclothesapp-cf59a.firebaseapp.com",projectId:"myclothesapp-cf59a",storageBucket:"myclothesapp-cf59a.appspot.com",messagingSenderId:"610226156284",appId:"1:610226156284:web:9336ebebf0a17d99eb1d79",measurementId:"G-LNG72F75QC"},a2=LT(q9),ps=bL(a2),ir=S5(a2),nf=H9(),wg=$n("login/googleLogin",async()=>{const t=new cr,n=(await V$(ps,t)).user;console.log(n);const r=cu(ir,"users",n.uid);return(await s0(r)).data()}),Eg=$n("auth/login",async t=>{try{const{email:e,password:n}=t;await lk(ps,ay);const i=(await w$(ps,e,n)).user,s=cu(ir,"users",i.uid),o=await s0(s);if(!o.exists())throw new Error("\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC720\uC800\uC785\uB2C8\uB2E4.");return o.data()}catch(e){return qv(e.message)}}),Cg=$n("auth/signOut",async()=>{try{await _$(ps),await lk(ps,ay)}catch(t){return qv(t.message)}}),Q9=()=>t=>{ps.onAuthStateChanged(async e=>{if(e){const n=cu(ir,"users",e.uid),r=await s0(n);if(r.exists()){const i=r.data();t({type:"login/loginSuccess",payload:i}),localStorage.setItem("user",JSON.stringify(i))}}else t({type:"login/logout"}),localStorage.removeItem("user")})},X9=()=>{const t=localStorage.getItem("user");return t?JSON.parse(t):null},Y9=ws({name:"login",initialState:{user:X9()},extraReducers:t=>{t.addCase(`${wg.fulfilled}`,(e,n)=>{e.user=n.payload}),t.addCase(`${wg.rejected}`,(e,n)=>{alert("\uB85C\uADF8\uC778 \uC2E4\uD328!"),console.log(n.payload)}),t.addCase(`${Eg.fulfilled}`,(e,n)=>{e.user=n.payload}),t.addCase(`${Eg.rejected}`,(e,n)=>n.error),t.addCase(`${Cg.fulfilled}`,(e,n)=>{alert("\uB85C\uADF8\uC544\uC6C3 \uC131\uACF5!"),e.user=null}),t.addCase(`${Cg.rejected}`,(e,n)=>{alert("\uB85C\uADF8\uC544\uC6C3 \uC2E4\uD328!"),console.log(n.payload)})}});var J9=Y9.reducer,l2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ZE=ot.createContext&&ot.createContext(l2),fi=globalThis&&globalThis.__assign||function(){return fi=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},fi.apply(this,arguments)},Z9=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function u2(t){return t&&t.map(function(e,n){return ot.createElement(e.tag,fi({key:n},e.attr),u2(e.child))})}function sr(t){return function(e){return ot.createElement(e8,fi({attr:fi({},t.attr)},e),u2(t.child))}}function e8(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=Z9(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ot.createElement("svg",fi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:fi(fi({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&ot.createElement("title",null,s),t.children)};return ZE!==void 0?ot.createElement(ZE.Consumer,null,function(n){return e(n)}):e(l2)}function t8(t){return sr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(t)}function c2(t){return sr({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}}]})(t)}function n8(t){return sr({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z"}}]})(t)}function r8(t){return sr({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"}}]})(t)}function i8(t){return sr({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44z"}}]})(t)}function rf(t){return sr({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z"}}]})(t)}function s8(t){return sr({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"}}]})(t)}const o8=()=>{const[t,e]=D.exports.useState(!1),[n,r]=D.exports.useState(!1),[i,s]=D.exports.useState(null),o=lt(g=>g.login.user),a=On(),l=Bl(),u=nr(),c=o==null?void 0:o.nickname,h=()=>{confirm("\uC815\uB9D0 \uB85C\uADF8\uC544\uC6C3 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")&&u(Cg())},d=g=>{s(g)},p=()=>o?b("div",{className:"users",children:[w("li",{className:"item user_nickname",onClick:()=>s(null),children:w(Xt,{to:"/account",children:c})}),w("li",{className:"item logOut",onClick:h,children:w("span",{children:w(s8,{})})})]}):w("li",{className:"item_account",children:w(Xt,{to:"account/login",className:"account",children:"\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785"})});return D.exports.useEffect(()=>{s(null)},[]),D.exports.useEffect(()=>{const g=()=>{window.scrollY>=60?e(!0):e(!1)},E=()=>{window.innerWidth>=768?r(!0):r(!1)};return window.addEventListener("scroll",g),window.addEventListener("resize",E),()=>{window.removeEventListener("scroll",g),window.removeEventListener("resize",E)}},[]),l.pathname==="/account/signup"||l.pathname==="/account/login"?null:w(kD,{style:{borderBottom:t?"1px solid #e3e3e3":""},children:b("div",{className:"contents",children:[w("div",{className:"logo",children:w("h1",{onClick:()=>{a("/"),s(null)},children:"ModArt"})}),b("ul",{className:"navbar",children:[b("div",{className:"list",children:[w("li",{className:`item ${i===0?"active":""}`,children:w(Xt,{to:"/board",onClick:()=>d(0),children:"OOTD"})}),w("li",{className:`item ${i===1?"active":""}`,children:w(Xt,{to:"/photo",onClick:()=>d(1),children:"Photo"})}),w("li",{className:`item ${i===2?"active":""}`,children:w(Xt,{to:"/today",onClick:()=>d(2),children:"TodayStory"})}),w("li",{className:`item ${i===3?"active":""}`,children:w(Xt,{to:"/qna",onClick:()=>d(3),children:"QnA"})})]}),p()]}),w("div",{className:"toggle",children:w(t8,{})})]})})};var a8=ot.memo(o8);function eC(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l8(t,e,n){return e&&eC(t.prototype,e),n&&eC(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var tC="(prefers-reduced-motion: reduce)",Ks=1,u8=2,No=3,Ko=4,du=5,_c=6,Ph=7,c8={CREATED:Ks,MOUNTED:u8,IDLE:No,MOVING:Ko,SCROLLING:du,DRAGGING:_c,DESTROYED:Ph};function Pr(t){t.length=0}function Pi(t,e,n){return Array.prototype.slice.call(t,e,n)}function Ae(t){return t.bind.apply(t,[null].concat(Pi(arguments,1)))}var h2=setTimeout,_g=function(){};function nC(t){return requestAnimationFrame(t)}function sf(t,e){return typeof e===t}function xl(t){return!m0(t)&&sf("object",t)}var p0=Array.isArray,d2=Ae(sf,"function"),Si=Ae(sf,"string"),fu=Ae(sf,"undefined");function m0(t){return t===null}function f2(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function pu(t){return p0(t)?t:[t]}function wn(t,e){pu(t).forEach(e)}function g0(t,e){return t.indexOf(e)>-1}function Sc(t,e){return t.push.apply(t,pu(e)),t}function vr(t,e,n){t&&wn(e,function(r){r&&t.classList[n?"add":"remove"](r)})}function er(t,e){vr(t,Si(e)?e.split(" "):e,!0)}function mu(t,e){wn(e,t.appendChild.bind(t))}function v0(t,e){wn(t,function(n){var r=(e||n).parentNode;r&&r.insertBefore(n,e)})}function Al(t,e){return f2(t)&&(t.msMatchesSelector||t.matches).call(t,e)}function p2(t,e){var n=t?Pi(t.children):[];return e?n.filter(function(r){return Al(r,e)}):n}function gu(t,e){return e?p2(t,e)[0]:t.firstElementChild}var Nl=Object.keys;function Ji(t,e,n){return t&&(n?Nl(t).reverse():Nl(t)).forEach(function(r){r!=="__proto__"&&e(t[r],r)}),t}function Rl(t){return Pi(arguments,1).forEach(function(e){Ji(e,function(n,r){t[r]=e[r]})}),t}function Yr(t){return Pi(arguments,1).forEach(function(e){Ji(e,function(n,r){p0(n)?t[r]=n.slice():xl(n)?t[r]=Yr({},xl(t[r])?t[r]:{},n):t[r]=n})}),t}function rC(t,e){wn(e||Nl(t),function(n){delete t[n]})}function tr(t,e){wn(t,function(n){wn(e,function(r){n&&n.removeAttribute(r)})})}function he(t,e,n){xl(e)?Ji(e,function(r,i){he(t,i,r)}):wn(t,function(r){m0(n)||n===""?tr(r,e):r.setAttribute(e,String(n))})}function lo(t,e,n){var r=document.createElement(t);return e&&(Si(e)?er(r,e):he(r,e)),n&&mu(n,r),r}function In(t,e,n){if(fu(n))return getComputedStyle(t)[e];m0(n)||(t.style[e]=""+n)}function Dl(t,e){In(t,"display",e)}function m2(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function Nn(t,e){return t.getAttribute(e)}function iC(t,e){return t&&t.classList.contains(e)}function cn(t){return t.getBoundingClientRect()}function ms(t){wn(t,function(e){e&&e.parentNode&&e.parentNode.removeChild(e)})}function g2(t){return gu(new DOMParser().parseFromString(t,"text/html").body)}function ur(t,e){t.preventDefault(),e&&(t.stopPropagation(),t.stopImmediatePropagation())}function v2(t,e){return t&&t.querySelector(e)}function y0(t,e){return e?Pi(t.querySelectorAll(e)):[]}function yr(t,e){vr(t,e,!1)}function Sg(t){return t.timeStamp}function $i(t){return Si(t)?t:t?t+"px":""}var vu="splide",w0="data-"+vu;function Ba(t,e){if(!t)throw new Error("["+vu+"] "+(e||""))}var Ti=Math.min,bh=Math.max,Oh=Math.floor,Pl=Math.ceil,Wt=Math.abs;function y2(t,e,n){return Wt(t-e)<n}function Tc(t,e,n,r){var i=Ti(e,n),s=bh(e,n);return r?i<t&&t<s:i<=t&&t<=s}function Ds(t,e,n){var r=Ti(e,n),i=bh(e,n);return Ti(bh(r,t),i)}function Tg(t){return+(t>0)-+(t<0)}function kg(t,e){return wn(e,function(n){t=t.replace("%s",""+n)}),t}function E0(t){return t<10?"0"+t:""+t}var sC={};function h8(t){return""+t+E0(sC[t]=(sC[t]||0)+1)}function w2(){var t=[];function e(o,a,l,u){i(o,a,function(c,h,d){var p="addEventListener"in c,m=p?c.removeEventListener.bind(c,h,l,u):c.removeListener.bind(c,l);p?c.addEventListener(h,l,u):c.addListener(l),t.push([c,h,d,l,m])})}function n(o,a,l){i(o,a,function(u,c,h){t=t.filter(function(d){return d[0]===u&&d[1]===c&&d[2]===h&&(!l||d[3]===l)?(d[4](),!1):!0})})}function r(o,a,l){var u,c=!0;return typeof CustomEvent=="function"?u=new CustomEvent(a,{bubbles:c,detail:l}):(u=document.createEvent("CustomEvent"),u.initCustomEvent(a,c,!1,l)),o.dispatchEvent(u),u}function i(o,a,l){wn(o,function(u){u&&wn(a,function(c){c.split(" ").forEach(function(h){var d=h.split(".");l(u,d[0],d[1])})})})}function s(){t.forEach(function(o){o[4]()}),Pr(t)}return{bind:e,unbind:n,dispatch:r,destroy:s}}var bi="mounted",Ig="ready",br="move",qo="moved",C0="click",E2="active",C2="inactive",_2="visible",S2="hidden",Je="refresh",Bt="updated",Ro="resize",of="resized",T2="drag",k2="dragging",I2="dragged",af="scroll",Is="scrolled",d8="overflow",_0="destroy",x2="arrows:mounted",A2="arrows:updated",N2="pagination:mounted",R2="pagination:updated",S0="navigation:mounted",T0="autoplay:play",D2="autoplay:playing",k0="autoplay:pause",I0="lazyload:loaded",P2="sk",b2="sh",$h="ei";function Be(t){var e=t?t.event.bus:document.createDocumentFragment(),n=w2();function r(s,o){n.bind(e,pu(s).join(" "),function(a){o.apply(o,p0(a.detail)?a.detail:[])})}function i(s){n.dispatch(e,s,Pi(arguments,1))}return t&&t.event.on(_0,n.destroy),Rl(n,{bus:e,on:r,off:Ae(n.unbind,e),emit:i})}function lf(t,e,n,r){var i=Date.now,s,o=0,a,l=!0,u=0;function c(){if(!l){if(o=t?Ti((i()-s)/t,1):1,n&&n(o),o>=1&&(e(),s=i(),r&&++u>=r))return d();a=nC(c)}}function h(v){v||m(),s=i()-(v?o*t:0),l=!1,a=nC(c)}function d(){l=!0}function p(){s=i(),o=0,n&&n(o)}function m(){a&&cancelAnimationFrame(a),o=0,a=0,l=!0}function g(v){t=v}function E(){return l}return{start:h,rewind:p,pause:d,cancel:m,set:g,isPaused:E}}function f8(t){var e=t;function n(i){e=i}function r(i){return g0(pu(i),e)}return{set:n,is:r}}function p8(t,e){var n=lf(e||0,t,null,1);return function(){n.isPaused()&&n.start()}}function m8(t,e,n){var r=t.state,i=n.breakpoints||{},s=n.reducedMotion||{},o=w2(),a=[];function l(){var m=n.mediaQuery==="min";Nl(i).sort(function(g,E){return m?+g-+E:+E-+g}).forEach(function(g){c(i[g],"("+(m?"min":"max")+"-width:"+g+"px)")}),c(s,tC),h()}function u(m){m&&o.destroy()}function c(m,g){var E=matchMedia(g);o.bind(E,"change",h),a.push([m,E])}function h(){var m=r.is(Ph),g=n.direction,E=a.reduce(function(v,f){return Yr(v,f[1].matches?f[0]:{})},{});rC(n),p(E),n.destroy?t.destroy(n.destroy==="completely"):m?(u(!0),t.mount()):g!==n.direction&&t.refresh()}function d(m){matchMedia(tC).matches&&(m?Yr(n,s):rC(n,Nl(s)))}function p(m,g,E){Yr(n,m),g&&Yr(Object.getPrototypeOf(n),m),(E||!r.is(Ks))&&t.emit(Bt,n)}return{setup:l,destroy:u,reduce:d,set:p}}var uf="Arrow",cf=uf+"Left",hf=uf+"Right",O2=uf+"Up",$2=uf+"Down",oC="rtl",df="ttb",xp={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[O2,hf],ArrowRight:[$2,cf]};function g8(t,e,n){function r(s,o,a){a=a||n.direction;var l=a===oC&&!o?1:a===df?0:-1;return xp[s]&&xp[s][l]||s.replace(/width|left|right/i,function(u,c){var h=xp[u.toLowerCase()][l]||u;return c>0?h.charAt(0).toUpperCase()+h.slice(1):h})}function i(s){return s*(n.direction===oC?1:-1)}return{resolve:r,orient:i}}var Cr="role",uo="tabindex",v8="disabled",Ln="aria-",yu=Ln+"controls",L2=Ln+"current",aC=Ln+"selected",pn=Ln+"label",x0=Ln+"labelledby",M2=Ln+"hidden",A0=Ln+"orientation",bl=Ln+"roledescription",lC=Ln+"live",uC=Ln+"busy",cC=Ln+"atomic",N0=[Cr,uo,v8,yu,L2,pn,x0,M2,A0,bl],or=vu+"__",Oi="is-",Ap=vu,hC=or+"track",y8=or+"list",ff=or+"slide",F2=ff+"--clone",w8=ff+"__container",R0=or+"arrows",pf=or+"arrow",U2=pf+"--prev",B2=pf+"--next",mf=or+"pagination",z2=mf+"__page",E8=or+"progress",C8=E8+"__bar",_8=or+"toggle",S8=or+"spinner",T8=or+"sr",k8=Oi+"initialized",gs=Oi+"active",V2=Oi+"prev",j2=Oi+"next",xg=Oi+"visible",Ag=Oi+"loading",H2=Oi+"focus-in",W2=Oi+"overflow",I8=[gs,xg,V2,j2,Ag,H2,W2],x8={slide:ff,clone:F2,arrows:R0,arrow:pf,prev:U2,next:B2,pagination:mf,page:z2,spinner:S8};function A8(t,e){if(d2(t.closest))return t.closest(e);for(var n=t;n&&n.nodeType===1&&!Al(n,e);)n=n.parentElement;return n}var N8=5,dC=200,G2="touchstart mousedown",Np="touchmove mousemove",Rp="touchend touchcancel mouseup click";function R8(t,e,n){var r=Be(t),i=r.on,s=r.bind,o=t.root,a=n.i18n,l={},u=[],c=[],h=[],d,p,m;function g(){y(),C(),f()}function E(){i(Je,v),i(Je,g),i(Bt,f),s(document,G2+" keydown",function(T){m=T.type==="keydown"},{capture:!0}),s(o,"focusin",function(){vr(o,H2,!!m)})}function v(T){var k=N0.concat("style");Pr(u),yr(o,c),yr(d,h),tr([d,p],k),tr(o,T?k:["style",bl])}function f(){yr(o,c),yr(d,h),c=I(Ap),h=I(hC),er(o,c),er(d,h),he(o,pn,n.label),he(o,x0,n.labelledby)}function y(){d=S("."+hC),p=gu(d,"."+y8),Ba(d&&p,"A track/list element is missing."),Sc(u,p2(p,"."+ff+":not(."+F2+")")),Ji({arrows:R0,pagination:mf,prev:U2,next:B2,bar:C8,toggle:_8},function(T,k){l[k]=S("."+T)}),Rl(l,{root:o,track:d,list:p,slides:u})}function C(){var T=o.id||h8(vu),k=n.role;o.id=T,d.id=d.id||T+"-track",p.id=p.id||T+"-list",!Nn(o,Cr)&&o.tagName!=="SECTION"&&k&&he(o,Cr,k),he(o,bl,a.carousel),he(p,Cr,"presentation")}function S(T){var k=v2(o,T);return k&&A8(k,"."+Ap)===o?k:void 0}function I(T){return[T+"--"+n.type,T+"--"+n.direction,n.drag&&T+"--draggable",n.isNavigation&&T+"--nav",T===Ap&&gs]}return Rl(l,{setup:g,mount:E,destroy:v})}var Do="slide",Qo="loop",wu="fade";function D8(t,e,n,r){var i=Be(t),s=i.on,o=i.emit,a=i.bind,l=t.Components,u=t.root,c=t.options,h=c.isNavigation,d=c.updateOnMove,p=c.i18n,m=c.pagination,g=c.slideFocus,E=l.Direction.resolve,v=Nn(r,"style"),f=Nn(r,pn),y=n>-1,C=gu(r,"."+w8),S;function I(){y||(r.id=u.id+"-slide"+E0(e+1),he(r,Cr,m?"tabpanel":"group"),he(r,bl,p.slide),he(r,pn,f||kg(p.slideLabel,[e+1,t.length]))),T()}function T(){a(r,"click",Ae(o,C0,x)),a(r,"keydown",Ae(o,P2,x)),s([qo,b2,Is],$),s(S0,V),d&&s(br,P)}function k(){S=!0,i.destroy(),yr(r,I8),tr(r,N0),he(r,"style",v),he(r,pn,f||"")}function V(){var O=t.splides.map(function(A){var j=A.splide.Components.Slides.getAt(e);return j?j.slide.id:""}).join(" ");he(r,pn,kg(p.slideX,(y?n:e)+1)),he(r,yu,O),he(r,Cr,g?"button":""),g&&tr(r,bl)}function P(){S||$()}function $(){if(!S){var O=t.index;z(),H(),vr(r,V2,e===O-1),vr(r,j2,e===O+1)}}function z(){var O=q();O!==iC(r,gs)&&(vr(r,gs,O),he(r,L2,h&&O||""),o(O?E2:C2,x))}function H(){var O=pe(),A=!O&&(!q()||y);if(t.state.is([Ko,du])||he(r,M2,A||""),he(y0(r,c.focusableNodes||""),uo,A?-1:""),g&&he(r,uo,A?-1:0),O!==iC(r,xg)&&(vr(r,xg,O),o(O?_2:S2,x)),!O&&document.activeElement===r){var j=l.Slides.getAt(t.index);j&&m2(j.slide)}}function Y(O,A,j){In(j&&C||r,O,A)}function q(){var O=t.index;return O===e||c.cloneStatus&&O===n}function pe(){if(t.is(wu))return q();var O=cn(l.Elements.track),A=cn(r),j=E("left",!0),N=E("right",!0);return Oh(O[j])<=Pl(A[j])&&Oh(A[N])<=Pl(O[N])}function le(O,A){var j=Wt(O-e);return!y&&(c.rewind||t.is(Qo))&&(j=Ti(j,t.length-j)),j<=A}var x={index:e,slideIndex:n,slide:r,container:C,isClone:y,mount:I,destroy:k,update:$,style:Y,isWithin:le};return x}function P8(t,e,n){var r=Be(t),i=r.on,s=r.emit,o=r.bind,a=e.Elements,l=a.slides,u=a.list,c=[];function h(){d(),i(Je,p),i(Je,d)}function d(){l.forEach(function($,z){g($,z,-1)})}function p(){S(function($){$.destroy()}),Pr(c)}function m(){S(function($){$.update()})}function g($,z,H){var Y=D8(t,z,H,$);Y.mount(),c.push(Y),c.sort(function(q,pe){return q.index-pe.index})}function E($){return $?I(function(z){return!z.isClone}):c}function v($){var z=e.Controller,H=z.toIndex($),Y=z.hasFocus()?1:n.perPage;return I(function(q){return Tc(q.index,H,H+Y-1)})}function f($){return I($)[0]}function y($,z){wn($,function(H){if(Si(H)&&(H=g2(H)),f2(H)){var Y=l[z];Y?v0(H,Y):mu(u,H),er(H,n.classes.slide),k(H,Ae(s,Ro))}}),s(Je)}function C($){ms(I($).map(function(z){return z.slide})),s(Je)}function S($,z){E(z).forEach($)}function I($){return c.filter(d2($)?$:function(z){return Si($)?Al(z.slide,$):g0(pu($),z.index)})}function T($,z,H){S(function(Y){Y.style($,z,H)})}function k($,z){var H=y0($,"img"),Y=H.length;Y?H.forEach(function(q){o(q,"load error",function(){--Y||z()})}):z()}function V($){return $?l.length:c.length}function P(){return c.length>n.perPage}return{mount:h,destroy:p,update:m,register:g,get:E,getIn:v,getAt:f,add:y,remove:C,forEach:S,filter:I,style:T,getLength:V,isEnough:P}}function b8(t,e,n){var r=Be(t),i=r.on,s=r.bind,o=r.emit,a=e.Slides,l=e.Direction.resolve,u=e.Elements,c=u.root,h=u.track,d=u.list,p=a.getAt,m=a.style,g,E,v;function f(){y(),s(window,"resize load",p8(Ae(o,Ro))),i([Bt,Je],y),i(Ro,C)}function y(){g=n.direction===df,In(c,"maxWidth",$i(n.width)),In(h,l("paddingLeft"),S(!1)),In(h,l("paddingRight"),S(!0)),C(!0)}function C(x){var O=cn(c);(x||E.width!==O.width||E.height!==O.height)&&(In(h,"height",I()),m(l("marginRight"),$i(n.gap)),m("width",k()),m("height",V(),!0),E=O,o(of),v!==(v=le())&&(vr(c,W2,v),o(d8,v)))}function S(x){var O=n.padding,A=l(x?"right":"left");return O&&$i(O[A]||(xl(O)?0:O))||"0px"}function I(){var x="";return g&&(x=T(),Ba(x,"height or heightRatio is missing."),x="calc("+x+" - "+S(!1)+" - "+S(!0)+")"),x}function T(){return $i(n.height||cn(d).width*n.heightRatio)}function k(){return n.autoWidth?null:$i(n.fixedWidth)||(g?"":P())}function V(){return $i(n.fixedHeight)||(g?n.autoHeight?null:P():T())}function P(){var x=$i(n.gap);return"calc((100%"+(x&&" + "+x)+")/"+(n.perPage||1)+(x&&" - "+x)+")"}function $(){return cn(d)[l("width")]}function z(x,O){var A=p(x||0);return A?cn(A.slide)[l("width")]+(O?0:q()):0}function H(x,O){var A=p(x);if(A){var j=cn(A.slide)[l("right")],N=cn(d)[l("left")];return Wt(j-N)+(O?0:q())}return 0}function Y(x){return H(t.length-1)-H(0)+z(0,x)}function q(){var x=p(0);return x&&parseFloat(In(x.slide,l("marginRight")))||0}function pe(x){return parseFloat(In(h,l("padding"+(x?"Right":"Left"))))||0}function le(){return t.is(wu)||Y(!0)>$()}return{mount:f,resize:C,listSize:$,slideSize:z,sliderSize:Y,totalSize:H,getPadding:pe,isOverflow:le}}var O8=2;function $8(t,e,n){var r=Be(t),i=r.on,s=e.Elements,o=e.Slides,a=e.Direction.resolve,l=[],u;function c(){i(Je,h),i([Bt,Ro],p),(u=E())&&(m(u),e.Layout.resize(!0))}function h(){d(),c()}function d(){ms(l),Pr(l),r.destroy()}function p(){var v=E();u!==v&&(u<v||!v)&&r.emit(Je)}function m(v){var f=o.get().slice(),y=f.length;if(y){for(;f.length<v;)Sc(f,f);Sc(f.slice(-v),f.slice(0,v)).forEach(function(C,S){var I=S<v,T=g(C.slide,S);I?v0(T,f[0].slide):mu(s.list,T),Sc(l,T),o.register(T,S-v+(I?0:y),C.index)})}}function g(v,f){var y=v.cloneNode(!0);return er(y,n.classes.clone),y.id=t.root.id+"-clone"+E0(f+1),y}function E(){var v=n.clones;if(!t.is(Qo))v=0;else if(fu(v)){var f=n[a("fixedWidth")]&&e.Layout.slideSize(0),y=f&&Pl(cn(s.track)[a("width")]/f);v=y||n[a("autoWidth")]&&t.length||n.perPage*O8}return v}return{mount:c,destroy:d}}function L8(t,e,n){var r=Be(t),i=r.on,s=r.emit,o=t.state.set,a=e.Layout,l=a.slideSize,u=a.getPadding,c=a.totalSize,h=a.listSize,d=a.sliderSize,p=e.Direction,m=p.resolve,g=p.orient,E=e.Elements,v=E.list,f=E.track,y;function C(){y=e.Transition,i([bi,of,Bt,Je],S)}function S(){e.Controller.isBusy()||(e.Scroll.cancel(),T(t.index),e.Slides.update())}function I(A,j,N,R){A!==j&&x(A>N)&&($(),k(P(Y(),A>N),!0)),o(Ko),s(br,j,N,A),y.start(j,function(){o(No),s(qo,j,N,A),R&&R()})}function T(A){k(H(A,!0))}function k(A,j){if(!t.is(wu)){var N=j?A:V(A);In(v,"transform","translate"+m("X")+"("+N+"px)"),A!==N&&s(b2)}}function V(A){if(t.is(Qo)){var j=z(A),N=j>e.Controller.getEnd(),R=j<0;(R||N)&&(A=P(A,N))}return A}function P(A,j){var N=A-le(j),R=d();return A-=g(R*(Pl(Wt(N)/R)||1))*(j?1:-1),A}function $(){k(Y(),!0),y.cancel()}function z(A){for(var j=e.Slides.get(),N=0,R=1/0,F=0;F<j.length;F++){var J=j[F].index,_=Wt(H(J,!0)-A);if(_<=R)R=_,N=J;else break}return N}function H(A,j){var N=g(c(A-1)-pe(A));return j?q(N):N}function Y(){var A=m("left");return cn(v)[A]-cn(f)[A]+g(u(!1))}function q(A){return n.trimSpace&&t.is(Do)&&(A=Ds(A,0,g(d(!0)-h()))),A}function pe(A){var j=n.focus;return j==="center"?(h()-l(A,!0))/2:+j*l(A)||0}function le(A){return H(A?e.Controller.getEnd():0,!!n.trimSpace)}function x(A){var j=g(P(Y(),A));return A?j>=0:j<=v[m("scrollWidth")]-cn(f)[m("width")]}function O(A,j){j=fu(j)?Y():j;var N=A!==!0&&g(j)<g(le(!1)),R=A!==!1&&g(j)>g(le(!0));return N||R}return{mount:C,move:I,jump:T,translate:k,shift:P,cancel:$,toIndex:z,toPosition:H,getPosition:Y,getLimit:le,exceededLimit:O,reposition:S}}function M8(t,e,n){var r=Be(t),i=r.on,s=r.emit,o=e.Move,a=o.getPosition,l=o.getLimit,u=o.toPosition,c=e.Slides,h=c.isEnough,d=c.getLength,p=n.omitEnd,m=t.is(Qo),g=t.is(Do),E=Ae(Y,!1),v=Ae(Y,!0),f=n.start||0,y,C=f,S,I,T;function k(){V(),i([Bt,Je,$h],V),i(of,P)}function V(){S=d(!0),I=n.perMove,T=n.perPage,y=x();var _=Ds(f,0,p?y:S-1);_!==f&&(f=_,o.reposition())}function P(){y!==x()&&s($h)}function $(_,Q,U){if(!J()){var ue=H(_),ne=le(ue);ne>-1&&(Q||ne!==f)&&(N(ne),o.move(ue,ne,C,U))}}function z(_,Q,U,ue){e.Scroll.scroll(_,Q,U,function(){var ne=le(o.toIndex(a()));N(p?Ti(ne,y):ne),ue&&ue()})}function H(_){var Q=f;if(Si(_)){var U=_.match(/([+\-<>])(\d+)?/)||[],ue=U[1],ne=U[2];ue==="+"||ue==="-"?Q=q(f+ +(""+ue+(+ne||1)),f):ue===">"?Q=ne?O(+ne):E(!0):ue==="<"&&(Q=v(!0))}else Q=m?_:Ds(_,0,y);return Q}function Y(_,Q){var U=I||(F()?1:T),ue=q(f+U*(_?-1:1),f,!(I||F()));return ue===-1&&g&&!y2(a(),l(!_),1)?_?0:y:Q?ue:le(ue)}function q(_,Q,U){if(h()||F()){var ue=pe(_);ue!==_&&(Q=_,_=ue,U=!1),_<0||_>y?!I&&(Tc(0,_,Q,!0)||Tc(y,Q,_,!0))?_=O(A(_)):m?_=U?_<0?-(S%T||T):S:_:n.rewind?_=_<0?y:0:_=-1:U&&_!==Q&&(_=O(A(Q)+(_<Q?-1:1)))}else _=-1;return _}function pe(_){if(g&&n.trimSpace==="move"&&_!==f)for(var Q=a();Q===u(_,!0)&&Tc(_,0,t.length-1,!n.rewind);)_<f?--_:++_;return _}function le(_){return m?(_+S)%S||0:_}function x(){for(var _=S-(F()||m&&I?1:T);p&&_-- >0;)if(u(S-1,!0)!==u(_,!0)){_++;break}return Ds(_,0,S-1)}function O(_){return Ds(F()?_:T*_,0,y)}function A(_){return F()?Ti(_,y):Oh((_>=y?S-1:_)/T)}function j(_){var Q=o.toIndex(_);return g?Ds(Q,0,y):Q}function N(_){_!==f&&(C=f,f=_)}function R(_){return _?C:f}function F(){return!fu(n.focus)||n.isNavigation}function J(){return t.state.is([Ko,du])&&!!n.waitForTransition}return{mount:k,go:$,scroll:z,getNext:E,getPrev:v,getAdjacent:Y,getEnd:x,setIndex:N,getIndex:R,toIndex:O,toPage:A,toDest:j,hasFocus:F,isBusy:J}}var F8="http://www.w3.org/2000/svg",U8="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",Zu=40;function B8(t,e,n){var r=Be(t),i=r.on,s=r.bind,o=r.emit,a=n.classes,l=n.i18n,u=e.Elements,c=e.Controller,h=u.arrows,d=u.track,p=h,m=u.prev,g=u.next,E,v,f={};function y(){S(),i(Bt,C)}function C(){I(),y()}function S(){var z=n.arrows;z&&!(m&&g)&&V(),m&&g&&(Rl(f,{prev:m,next:g}),Dl(p,z?"":"none"),er(p,v=R0+"--"+n.direction),z&&(T(),$(),he([m,g],yu,d.id),o(x2,m,g)))}function I(){r.destroy(),yr(p,v),E?(ms(h?[m,g]:p),m=g=null):tr([m,g],N0)}function T(){i([bi,qo,Je,Is,$h],$),s(g,"click",Ae(k,">")),s(m,"click",Ae(k,"<"))}function k(z){c.go(z,!0)}function V(){p=h||lo("div",a.arrows),m=P(!0),g=P(!1),E=!0,mu(p,[m,g]),!h&&v0(p,d)}function P(z){var H='<button class="'+a.arrow+" "+(z?a.prev:a.next)+'" type="button"><svg xmlns="'+F8+'" viewBox="0 0 '+Zu+" "+Zu+'" width="'+Zu+'" height="'+Zu+'" focusable="false"><path d="'+(n.arrowPath||U8)+'" />';return g2(H)}function $(){if(m&&g){var z=t.index,H=c.getPrev(),Y=c.getNext(),q=H>-1&&z<H?l.last:l.prev,pe=Y>-1&&z>Y?l.first:l.next;m.disabled=H<0,g.disabled=Y<0,he(m,pn,q),he(g,pn,pe),o(A2,m,g,H,Y)}}return{arrows:f,mount:y,destroy:I,update:$}}var z8=w0+"-interval";function V8(t,e,n){var r=Be(t),i=r.on,s=r.bind,o=r.emit,a=lf(n.interval,t.go.bind(t,">"),T),l=a.isPaused,u=e.Elements,c=e.Elements,h=c.root,d=c.toggle,p=n.autoplay,m,g,E=p==="pause";function v(){p&&(f(),d&&he(d,yu,u.track.id),E||y(),I())}function f(){n.pauseOnHover&&s(h,"mouseenter mouseleave",function(V){m=V.type==="mouseenter",S()}),n.pauseOnFocus&&s(h,"focusin focusout",function(V){g=V.type==="focusin",S()}),d&&s(d,"click",function(){E?y():C(!0)}),i([br,af,Je],a.rewind),i(br,k)}function y(){l()&&e.Slides.isEnough()&&(a.start(!n.resetProgress),g=m=E=!1,I(),o(T0))}function C(V){V===void 0&&(V=!0),E=!!V,I(),l()||(a.pause(),o(k0))}function S(){E||(m||g?C(!1):y())}function I(){d&&(vr(d,gs,!E),he(d,pn,n.i18n[E?"play":"pause"]))}function T(V){var P=u.bar;P&&In(P,"width",V*100+"%"),o(D2,V)}function k(V){var P=e.Slides.getAt(V);a.set(P&&+Nn(P.slide,z8)||n.interval)}return{mount:v,destroy:a.cancel,play:y,pause:C,isPaused:l}}function j8(t,e,n){var r=Be(t),i=r.on;function s(){n.cover&&(i(I0,Ae(a,!0)),i([bi,Bt,Je],Ae(o,!0)))}function o(l){e.Slides.forEach(function(u){var c=gu(u.container||u.slide,"img");c&&c.src&&a(l,c,u)})}function a(l,u,c){c.style("background",l?'center/cover no-repeat url("'+u.src+'")':"",!0),Dl(u,l?"none":"")}return{mount:s,destroy:Ae(o,!1)}}var H8=10,W8=600,G8=.6,K8=1.5,q8=800;function Q8(t,e,n){var r=Be(t),i=r.on,s=r.emit,o=t.state.set,a=e.Move,l=a.getPosition,u=a.getLimit,c=a.exceededLimit,h=a.translate,d=t.is(Do),p,m,g=1;function E(){i(br,C),i([Bt,Je],S)}function v(T,k,V,P,$){var z=l();if(C(),V&&(!d||!c())){var H=e.Layout.sliderSize(),Y=Tg(T)*H*Oh(Wt(T)/H)||0;T=a.toPosition(e.Controller.toDest(T%H))+Y}var q=y2(z,T,1);g=1,k=q?0:k||bh(Wt(T-z)/K8,q8),m=P,p=lf(k,f,Ae(y,z,T,$),1),o(du),s(af),p.start()}function f(){o(No),m&&m(),s(Is)}function y(T,k,V,P){var $=l(),z=T+(k-T)*I(P),H=(z-$)*g;h($+H),d&&!V&&c()&&(g*=G8,Wt(H)<H8&&v(u(c(!0)),W8,!1,m,!0))}function C(){p&&p.cancel()}function S(){p&&!p.isPaused()&&(C(),f())}function I(T){var k=n.easingFunc;return k?k(T):1-Math.pow(1-T,4)}return{mount:E,destroy:C,scroll:v,cancel:S}}var Ps={passive:!1,capture:!0};function X8(t,e,n){var r=Be(t),i=r.on,s=r.emit,o=r.bind,a=r.unbind,l=t.state,u=e.Move,c=e.Scroll,h=e.Controller,d=e.Elements.track,p=e.Media.reduce,m=e.Direction,g=m.resolve,E=m.orient,v=u.getPosition,f=u.exceededLimit,y,C,S,I,T,k=!1,V,P,$;function z(){o(d,Np,_g,Ps),o(d,Rp,_g,Ps),o(d,G2,Y,Ps),o(d,"click",le,{capture:!0}),o(d,"dragstart",ur),i([bi,Bt],H)}function H(){var W=n.drag;se(!W),I=W==="free"}function Y(W){if(V=!1,!P){var fe=ne(W);ue(W.target)&&(fe||!W.button)&&(h.isBusy()?ur(W,!0):($=fe?d:window,T=l.is([Ko,du]),S=null,o($,Np,q,Ps),o($,Rp,pe,Ps),u.cancel(),c.cancel(),x(W)))}}function q(W){if(l.is(_c)||(l.set(_c),s(T2)),W.cancelable)if(T){u.translate(y+U(F(W)));var fe=J(W)>dC,de=k!==(k=f());(fe||de)&&x(W),V=!0,s(k2),ur(W)}else j(W)&&(T=A(W),ur(W))}function pe(W){l.is(_c)&&(l.set(No),s(I2)),T&&(O(W),ur(W)),a($,Np,q),a($,Rp,pe),T=!1}function le(W){!P&&V&&ur(W,!0)}function x(W){S=C,C=W,y=v()}function O(W){var fe=N(W),de=R(fe),ze=n.rewind&&n.rewindByDrag;p(!1),I?h.scroll(de,0,n.snap):t.is(wu)?h.go(E(Tg(fe))<0?ze?"<":"-":ze?">":"+"):t.is(Do)&&k&&ze?h.go(f(!0)?">":"<"):h.go(h.toDest(de),!0),p(!0)}function A(W){var fe=n.dragMinThreshold,de=xl(fe),ze=de&&fe.mouse||0,we=(de?fe.touch:+fe)||10;return Wt(F(W))>(ne(W)?we:ze)}function j(W){return Wt(F(W))>Wt(F(W,!0))}function N(W){if(t.is(Qo)||!k){var fe=J(W);if(fe&&fe<dC)return F(W)/fe}return 0}function R(W){return v()+Tg(W)*Ti(Wt(W)*(n.flickPower||600),I?1/0:e.Layout.listSize()*(n.flickMaxPages||1))}function F(W,fe){return Q(W,fe)-Q(_(W),fe)}function J(W){return Sg(W)-Sg(_(W))}function _(W){return C===W&&S||C}function Q(W,fe){return(ne(W)?W.changedTouches[0]:W)["page"+g(fe?"Y":"X")]}function U(W){return W/(k&&t.is(Do)?N8:1)}function ue(W){var fe=n.noDrag;return!Al(W,"."+z2+", ."+pf)&&(!fe||!Al(W,fe))}function ne(W){return typeof TouchEvent!="undefined"&&W instanceof TouchEvent}function Ce(){return T}function se(W){P=W}return{mount:z,disable:se,isDragging:Ce}}var Y8={Spacebar:" ",Right:hf,Left:cf,Up:O2,Down:$2};function D0(t){return t=Si(t)?t:t.key,Y8[t]||t}var fC="keydown";function J8(t,e,n){var r=Be(t),i=r.on,s=r.bind,o=r.unbind,a=t.root,l=e.Direction.resolve,u,c;function h(){d(),i(Bt,p),i(Bt,d),i(br,g)}function d(){var v=n.keyboard;v&&(u=v==="global"?window:a,s(u,fC,E))}function p(){o(u,fC)}function m(v){c=v}function g(){var v=c;c=!0,h2(function(){c=v})}function E(v){if(!c){var f=D0(v);f===l(cf)?t.go("<"):f===l(hf)&&t.go(">")}}return{mount:h,destroy:p,disable:m}}var za=w0+"-lazy",kc=za+"-srcset",Z8="["+za+"], ["+kc+"]";function eF(t,e,n){var r=Be(t),i=r.on,s=r.off,o=r.bind,a=r.emit,l=n.lazyLoad==="sequential",u=[qo,Is],c=[];function h(){n.lazyLoad&&(d(),i(Je,d))}function d(){Pr(c),p(),l?v():(s(u),i(u,m),m())}function p(){e.Slides.forEach(function(f){y0(f.slide,Z8).forEach(function(y){var C=Nn(y,za),S=Nn(y,kc);if(C!==y.src||S!==y.srcset){var I=n.classes.spinner,T=y.parentElement,k=gu(T,"."+I)||lo("span",I,T);c.push([y,f,k]),y.src||Dl(y,"none")}})})}function m(){c=c.filter(function(f){var y=n.perPage*((n.preloadPages||1)+1)-1;return f[1].isWithin(t.index,y)?g(f):!0}),c.length||s(u)}function g(f){var y=f[0];er(f[1].slide,Ag),o(y,"load error",Ae(E,f)),he(y,"src",Nn(y,za)),he(y,"srcset",Nn(y,kc)),tr(y,za),tr(y,kc)}function E(f,y){var C=f[0],S=f[1];yr(S.slide,Ag),y.type!=="error"&&(ms(f[2]),Dl(C,""),a(I0,C,S),a(Ro)),l&&v()}function v(){c.length&&g(c.shift())}return{mount:h,destroy:Ae(Pr,c),check:m}}function tF(t,e,n){var r=Be(t),i=r.on,s=r.emit,o=r.bind,a=e.Slides,l=e.Elements,u=e.Controller,c=u.hasFocus,h=u.getIndex,d=u.go,p=e.Direction.resolve,m=l.pagination,g=[],E,v;function f(){y(),i([Bt,Je,$h],f);var P=n.pagination;m&&Dl(m,P?"":"none"),P&&(i([br,af,Is],V),C(),V(),s(N2,{list:E,items:g},k(t.index)))}function y(){E&&(ms(m?Pi(E.children):E),yr(E,v),Pr(g),E=null),r.destroy()}function C(){var P=t.length,$=n.classes,z=n.i18n,H=n.perPage,Y=c()?u.getEnd()+1:Pl(P/H);E=m||lo("ul",$.pagination,l.track.parentElement),er(E,v=mf+"--"+T()),he(E,Cr,"tablist"),he(E,pn,z.select),he(E,A0,T()===df?"vertical":"");for(var q=0;q<Y;q++){var pe=lo("li",null,E),le=lo("button",{class:$.page,type:"button"},pe),x=a.getIn(q).map(function(A){return A.slide.id}),O=!c()&&H>1?z.pageX:z.slideX;o(le,"click",Ae(S,q)),n.paginationKeyboard&&o(le,"keydown",Ae(I,q)),he(pe,Cr,"presentation"),he(le,Cr,"tab"),he(le,yu,x.join(" ")),he(le,pn,kg(O,q+1)),he(le,uo,-1),g.push({li:pe,button:le,page:q})}}function S(P){d(">"+P,!0)}function I(P,$){var z=g.length,H=D0($),Y=T(),q=-1;H===p(hf,!1,Y)?q=++P%z:H===p(cf,!1,Y)?q=(--P+z)%z:H==="Home"?q=0:H==="End"&&(q=z-1);var pe=g[q];pe&&(m2(pe.button),d(">"+q),ur($,!0))}function T(){return n.paginationDirection||n.direction}function k(P){return g[u.toPage(P)]}function V(){var P=k(h(!0)),$=k(h());if(P){var z=P.button;yr(z,gs),tr(z,aC),he(z,uo,-1)}if($){var H=$.button;er(H,gs),he(H,aC,!0),he(H,uo,"")}s(R2,{list:E,items:g},P,$)}return{items:g,mount:f,destroy:y,getAt:k,update:V}}var nF=[" ","Enter"];function rF(t,e,n){var r=n.isNavigation,i=n.slideFocus,s=[];function o(){t.splides.forEach(function(m){m.isParent||(u(t,m.splide),u(m.splide,t))}),r&&c()}function a(){s.forEach(function(m){m.destroy()}),Pr(s)}function l(){a(),o()}function u(m,g){var E=Be(m);E.on(br,function(v,f,y){g.go(g.is(Qo)?y:v)}),s.push(E)}function c(){var m=Be(t),g=m.on;g(C0,d),g(P2,p),g([bi,Bt],h),s.push(m),m.emit(S0,t.splides)}function h(){he(e.Elements.list,A0,n.direction===df?"vertical":"")}function d(m){t.go(m.index)}function p(m,g){g0(nF,D0(g))&&(d(m),ur(g))}return{setup:Ae(e.Media.set,{slideFocus:fu(i)?r:i},!0),mount:o,destroy:a,remount:l}}function iF(t,e,n){var r=Be(t),i=r.bind,s=0;function o(){n.wheel&&i(e.Elements.track,"wheel",a,Ps)}function a(u){if(u.cancelable){var c=u.deltaY,h=c<0,d=Sg(u),p=n.wheelMinThreshold||0,m=n.wheelSleep||0;Wt(c)>p&&d-s>m&&(t.go(h?"<":">"),s=d),l(h)&&ur(u)}}function l(u){return!n.releaseWheel||t.state.is(Ko)||e.Controller.getAdjacent(u)!==-1}return{mount:o}}var sF=90;function oF(t,e,n){var r=Be(t),i=r.on,s=e.Elements.track,o=n.live&&!n.isNavigation,a=lo("span",T8),l=lf(sF,Ae(c,!1));function u(){o&&(d(!e.Autoplay.isPaused()),he(s,cC,!0),a.textContent="\u2026",i(T0,Ae(d,!0)),i(k0,Ae(d,!1)),i([qo,Is],Ae(c,!0)))}function c(p){he(s,uC,p),p?(mu(s,a),l.start()):(ms(a),l.cancel())}function h(){tr(s,[lC,cC,uC]),ms(a)}function d(p){o&&he(s,lC,p?"off":"polite")}return{mount:u,disable:d,destroy:h}}var aF=Object.freeze({__proto__:null,Media:m8,Direction:g8,Elements:R8,Slides:P8,Layout:b8,Clones:$8,Move:L8,Controller:M8,Arrows:B8,Autoplay:V8,Cover:j8,Scroll:Q8,Drag:X8,Keyboard:J8,LazyLoad:eF,Pagination:tF,Sync:rF,Wheel:iF,Live:oF}),lF={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},uF={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:x8,i18n:lF,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function cF(t,e,n){var r=e.Slides;function i(){Be(t).on([bi,Je],s)}function s(){r.forEach(function(a){a.style("transform","translateX(-"+100*a.index+"%)")})}function o(a,l){r.style("transition","opacity "+n.speed+"ms "+n.easing),h2(l)}return{mount:i,start:o,cancel:_g}}function hF(t,e,n){var r=e.Move,i=e.Controller,s=e.Scroll,o=e.Elements.list,a=Ae(In,o,"transition"),l;function u(){Be(t).bind(o,"transitionend",function(p){p.target===o&&l&&(h(),l())})}function c(p,m){var g=r.toPosition(p,!0),E=r.getPosition(),v=d(p);Wt(g-E)>=1&&v>=1?n.useScroll?s.scroll(g,v,!1,m):(a("transform "+v+"ms "+n.easing),r.translate(g,!0),l=m):(r.jump(p),m())}function h(){a(""),s.cancel()}function d(p){var m=n.rewindSpeed;if(t.is(Do)&&m){var g=i.getIndex(!0),E=i.getEnd();if(g===0&&p>=E||g>=E&&p===0)return m}return n.speed}return{mount:u,start:c,cancel:h}}var dF=function(){function t(n,r){this.event=Be(),this.Components={},this.state=f8(Ks),this.splides=[],this._o={},this._E={};var i=Si(n)?v2(document,n):n;Ba(i,i+" is invalid."),this.root=i,r=Yr({label:Nn(i,pn)||"",labelledby:Nn(i,x0)||""},uF,t.defaults,r||{});try{Yr(r,JSON.parse(Nn(i,w0)))}catch{Ba(!1,"Invalid JSON")}this._o=Object.create(Yr({},r))}var e=t.prototype;return e.mount=function(r,i){var s=this,o=this.state,a=this.Components;Ba(o.is([Ks,Ph]),"Already mounted!"),o.set(Ks),this._C=a,this._T=i||this._T||(this.is(wu)?cF:hF),this._E=r||this._E;var l=Rl({},aF,this._E,{Transition:this._T});return Ji(l,function(u,c){var h=u(s,a,s._o);a[c]=h,h.setup&&h.setup()}),Ji(a,function(u){u.mount&&u.mount()}),this.emit(bi),er(this.root,k8),o.set(No),this.emit(Ig),this},e.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(No)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},e.go=function(r){return this._C.Controller.go(r),this},e.on=function(r,i){return this.event.on(r,i),this},e.off=function(r){return this.event.off(r),this},e.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(Pi(arguments,1))),this},e.add=function(r,i){return this._C.Slides.add(r,i),this},e.remove=function(r){return this._C.Slides.remove(r),this},e.is=function(r){return this._o.type===r},e.refresh=function(){return this.emit(Je),this},e.destroy=function(r){r===void 0&&(r=!0);var i=this.event,s=this.state;return s.is(Ks)?Be(this).on(Ig,this.destroy.bind(this,r)):(Ji(this._C,function(o){o.destroy&&o.destroy(r)},!0),i.emit(_0),i.destroy(),r&&Pr(this.splides),s.set(Ph)),this},l8(t,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),t}(),P0=dF;P0.defaults={};P0.STATES=c8;var pC=[[bi,"onMounted"],[Ig,"onReady"],[br,"onMove"],[qo,"onMoved"],[C0,"onClick"],[E2,"onActive"],[C2,"onInactive"],[_2,"onVisible"],[S2,"onHidden"],[Je,"onRefresh"],[Bt,"onUpdated"],[Ro,"onResize"],[of,"onResized"],[T2,"onDrag"],[k2,"onDragging"],[I2,"onDragged"],[af,"onScroll"],[Is,"onScrolled"],[_0,"onDestroy"],[x2,"onArrowsMounted"],[A2,"onArrowsUpdated"],[N2,"onPaginationMounted"],[R2,"onPaginationUpdated"],[S0,"onNavigationMounted"],[T0,"onAutoplayPlay"],[D2,"onAutoplayPlaying"],[k0,"onAutoplayPause"],[I0,"onLazyLoadLoaded"]];function b0(...t){return t.filter(Boolean).join(" ")}function Lh(t){return t!==null&&typeof t=="object"}function Ng(t,e){if(Array.isArray(t)&&Array.isArray(e))return t.length===e.length&&!t.some((n,r)=>!Ng(n,e[r]));if(Lh(t)&&Lh(e)){const n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&!n.some(i=>!Object.prototype.hasOwnProperty.call(e,i)||!Ng(t[i],e[i]))}return t===e}function fF(t,e){return t.length===e.length&&!t.some((n,r)=>n!==e[r])}function pF(t,e){if(t){const n=Object.keys(t);for(let r=0;r<n.length;r++){const i=n[r];if(i!=="__proto__"&&e(t[i],i)===!1)break}}return t}function Rg(t,e){const n=t;return pF(e,(r,i)=>{Array.isArray(r)?n[i]=r.slice():Lh(r)?n[i]=Rg(Lh(n[i])?n[i]:{},r):n[i]=r}),n}var mF=({children:t,className:e,...n})=>w("div",{className:b0("splide__track",e),...n,children:w("ul",{className:"splide__list",children:t})}),K2=class extends ot.Component{constructor(){super(...arguments),this.splideRef=ot.createRef(),this.slides=[]}componentDidMount(){const{options:t,extensions:e,transition:n}=this.props,{current:r}=this.splideRef;r&&(this.splide=new P0(r,t),this.bind(this.splide),this.splide.mount(e,n),this.options=Rg({},t||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:t}=this.props;t&&!Ng(this.options,t)&&(this.splide.options=t,this.options=Rg({},t));const e=this.getSlides();fF(this.slides,e)||(this.splide.refresh(),this.slides=e)}sync(t){var e;(e=this.splide)==null||e.sync(t)}go(t){var e;(e=this.splide)==null||e.go(t)}getSlides(){var t;if(this.splide){const e=(t=this.splide.Components.Elements)==null?void 0:t.list.children;return e&&Array.prototype.slice.call(e)||[]}return[]}bind(t){pC.forEach(([e,n])=>{const r=this.props[n];typeof r=="function"&&t.on(e,(...i)=>{r(t,...i)})})}omit(t,e){return e.forEach(n=>{Object.prototype.hasOwnProperty.call(t,n)&&delete t[n]}),t}render(){const{className:t,tag:e="div",hasTrack:n=!0,children:r,...i}=this.props;return ot.createElement(e,{className:b0("splide",t),ref:this.splideRef,...this.omit(i,["options",...pC.map(s=>s[1])])},n?ot.createElement(mF,null,r):r)}},q2=({children:t,className:e,...n})=>ot.createElement("li",{className:b0("splide__slide",e),...n},t);/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */const gF=Di(nf,"board_photos"),vF=async t=>{const e=Di(gF,t.name);return await d0(e,t),await f0(e)},Q2=$n("boards/add",async(t,{rejectWithValue:e})=>{try{if(!t)throw new Error("boardData is undefined");const{brand:n,height:r,weight:i,title:s,desc:o,photo:a,nickname:l}=t,u=await vF(a);return{id:(await tf(ks(ir,"boards"),{brand:n,height:r,weight:i,title:s,desc:o,photo:u,nickname:l,createAt:Date.now()})).id,brand:n,height:r,weight:i,title:s,desc:o,photo:u,nickname:l,createAt:Date.now()}}catch(n){return console.error(n),e("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),O0=$n("boards/get",async()=>(await o0(ks(ir,"boards"))).docs.map(n=>{const r=n.data(),{createAt:i,...s}=r;return{id:n.id,...s}})),yF=ws({name:"board",initialState:{boards:[],postCount:0},reducers:{updateBoard:(t,e)=>{}},extraReducers:t=>{t.addCase(Q2.fulfilled,(e,n)=>{const r=n.payload;return{...e,boards:[...e.boards,r],postCount:e.postCount+1}}).addCase(O0.fulfilled,(e,n)=>({...e,boards:n.payload,postCount:n.payload.length}))}});var wF=yF.reducer;const EF=Vl`
  width: 100%;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  padding: 16px;
  cursor: pointer;
`,CF=Vl`
  width: 100%;
  padding: 6px 12px;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  cursor: pointer;
`,_F=Vl`
  width: 100%;
  display: flex;
  flex-direction: column;
`,Ct=We.section`
  width: 100%;
  padding-top: 60px;
  min-height: 100vh;
  background: #ffffff;

  @media screen and (max-width: 768px) {
    /* padding-left: 16px;
    padding-right: 16px; */
  }
`,Xo=We.div`
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
`,SF=We.div`
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
`,X2=We.div`
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
`,Eu=We.div`
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
`,TF=We.div`
  width: 100%;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.86);
  background: #f8d7da;
  text-align: center;

  p {
    padding: 12px;
    font-size: clamp(14px, 2vw, 15px);
  }
`;We.form`
  ${_F}
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1 1 50%;

  h1 {
    font-size: clamp(18px, 2.5vw, 20px);
    margin: 12px 0;
  }
`;const ca=We.input`
  ${EF}
`,Dp=We.button`
  ${CF}
`,Y2=We.div`
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
 */function kF(t){t.length=0}function $0(t,e,n){return Array.prototype.slice.call(t,e,n)}function gf(t){return t.bind.apply(t,[null].concat($0(arguments,1)))}function mC(t){return requestAnimationFrame(t)}function L0(t,e){return typeof e===t}var J2=Array.isArray;gf(L0,"function");gf(L0,"string");gf(L0,"undefined");function Z2(t){return J2(t)?t:[t]}function gC(t,e){Z2(t).forEach(e)}var IF=Object.keys;function xF(t,e,n){if(t){var r=IF(t);r=n?r.reverse():r;for(var i=0;i<r.length;i++){var s=r[i];if(s!=="__proto__"&&e(t[s],s)===!1)break}}return t}function AF(t){return $0(arguments,1).forEach(function(e){xF(e,function(n,r){t[r]=e[r]})}),t}var NF=Math.min;function RF(){var t=[];function e(o,a,l,u){i(o,a,function(c,h,d){var p="addEventListener"in c,m=p?c.removeEventListener.bind(c,h,l,u):c.removeListener.bind(c,l);p?c.addEventListener(h,l,u):c.addListener(l),t.push([c,h,d,l,m])})}function n(o,a,l){i(o,a,function(u,c,h){t=t.filter(function(d){return d[0]===u&&d[1]===c&&d[2]===h&&(!l||d[3]===l)?(d[4](),!1):!0})})}function r(o,a,l){var u,c=!0;return typeof CustomEvent=="function"?u=new CustomEvent(a,{bubbles:c,detail:l}):(u=document.createEvent("CustomEvent"),u.initCustomEvent(a,c,!1,l)),o.dispatchEvent(u),u}function i(o,a,l){gC(o,function(u){u&&gC(a,function(c){c.split(" ").forEach(function(h){var d=h.split(".");l(u,d[0],d[1])})})})}function s(){t.forEach(function(o){o[4]()}),kF(t)}return{bind:e,unbind:n,dispatch:r,destroy:s}}var vC="move",yC="moved",DF="updated",wC="drag",PF="dragged",EC="scroll",CC="scrolled",bF="destroy";function OF(t){var e=t?t.event.bus:document.createDocumentFragment(),n=RF();function r(s,o){n.bind(e,Z2(s).join(" "),function(a){o.apply(o,J2(a.detail)?a.detail:[])})}function i(s){n.dispatch(e,s,$0(arguments,1))}return t&&t.event.on(bF,n.destroy),AF(n,{bus:e,on:r,off:gf(n.unbind,e),emit:i})}function eA(t,e,n,r){var i=Date.now,s,o=0,a,l=!0,u=0;function c(){if(!l){if(o=t?NF((i()-s)/t,1):1,n&&n(o),o>=1&&(e(),s=i(),r&&++u>=r))return d();mC(c)}}function h(v){!v&&m(),s=i()-(v?o*t:0),l=!1,mC(c)}function d(){l=!0}function p(){s=i(),o=0,n&&n(o)}function m(){a&&cancelAnimationFrame(a),o=0,a=0,l=!0}function g(v){t=v}function E(){return l}return{start:h,rewind:p,pause:d,cancel:m,set:g,isPaused:E}}function $F(t,e){var n;function r(){n||(n=eA(e||0,function(){t(),n=null},null,1),n.start())}return r}var LF="is-active",MF="slide",FF="fade";function tA(t,e,n){return Array.prototype.slice.call(t,e,n)}function M0(t){return t.bind(null,...tA(arguments,1))}function vf(t,e){return typeof e===t}function Dg(t){return!nA(t)&&vf("object",t)}const UF=Array.isArray;M0(vf,"function");M0(vf,"string");const BF=M0(vf,"undefined");function nA(t){return t===null}function zF(t){return UF(t)?t:[t]}function Mh(t,e){zF(t).forEach(e)}function VF(t,e,n){t&&Mh(e,r=>{r&&t.classList[n?"add":"remove"](r)})}const jF=Object.keys;function rA(t,e,n){if(t){let r=jF(t);r=n?r.reverse():r;for(let i=0;i<r.length;i++){const s=r[i];if(s!=="__proto__"&&e(t[s],s)===!1)break}}return t}function _C(t){return tA(arguments,1).forEach(e=>{rA(e,(n,r)=>{t[r]=e[r]})}),t}function HF(t,e){Mh(t,n=>{Mh(e,r=>{n&&n.removeAttribute(r)})})}function iA(t,e,n){Dg(e)?rA(e,(r,i)=>{iA(t,i,r)}):Mh(t,r=>{nA(n)||n===""?HF(r,e):r.setAttribute(e,String(n))})}const{min:SC,max:TC,floor:jU,ceil:HU,abs:WU}=Math;function WF(t,e,n){const r=SC(e,n),i=TC(e,n);return SC(TC(r,t),i)}const GF={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},KF={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function sA(t,e,n){const{on:r,off:i,bind:s,unbind:o}=OF(t),{translate:a,getPosition:l,toIndex:u,getLimit:c}=e.Move,{setIndex:h,getIndex:d}=e.Controller,{orient:p}=e.Direction,{toggle:m}=e.Elements,{Live:g}=e,{root:E}=t,v=$F(e.Arrows.update,500);let f={},y,C,S,I,T,k;function V(){const{autoScroll:R}=n;f=_C({},GF,Dg(R)?R:{})}function P(){t.is(FF)||!y&&n.autoScroll!==!1&&(y=eA(0,x),z(),Y())}function $(){y&&(y.cancel(),y=null,k=void 0,i([vC,wC,EC,yC,CC]),o(E,"mouseenter mouseleave focusin focusout"),o(m,"click"))}function z(){f.pauseOnHover&&s(E,"mouseenter mouseleave",R=>{S=R.type==="mouseenter",le()}),f.pauseOnFocus&&s(E,"focusin focusout",R=>{I=R.type==="focusin",le()}),f.useToggleButton&&s(m,"click",()=>{C?q():pe()}),r(DF,H),r([vC,wC,EC],()=>{T=!0,pe(!1)}),r([yC,PF,CC],()=>{T=!1,le()})}function H(){const{autoScroll:R}=n;R!==!1?(f=_C({},f,Dg(R)?R:{}),P()):$(),y&&!BF(k)&&a(k)}function Y(){f.autoStart&&(document.readyState==="complete"?q():s(window,"load",q))}function q(){N()&&(y.start(!0),g.disable(!0),I=S=C=!1,j())}function pe(R=!0){C||(C=R,j(),N()||(y.pause(),g.disable(!1)))}function le(){C||(S||I||T?pe(!1):q())}function x(){const R=l(),F=O(R);R!==F?(a(F),A(k=l())):(pe(!1),f.rewind&&t.go(f.speed>0?0:e.Controller.getEnd())),v()}function O(R){const F=f.speed||1;return R+=p(F),t.is(MF)&&(R=WF(R,c(!1),c(!0))),R}function A(R){const{length:F}=t,J=(u(R)+F)%F;J!==d()&&(h(J),e.Slides.update(),e.Pagination.update(),n.lazyLoad==="nearby"&&e.LazyLoad.check())}function j(){if(m){const R=C?"startScroll":"pauseScroll";VF(m,LF,!C),iA(m,"aria-label",n.i18n[R]||KF[R])}}function N(){return!y||y.isPaused()}return{setup:V,mount:P,destroy:$,play:q,pause:pe,isPaused:N}}const qF=()=>{const t=lt(u=>u.board.boards),[e,n]=D.exports.useState(t.length),[r,i]=D.exports.useState("16px"),[s,o]=D.exports.useState("left"),a=nr();console.log(t);const l=D.exports.useCallback(()=>{window.innerWidth>=1280?(n(5),o("left")):window.innerWidth>=1024?(n(4),i("14px"),o("left")):window.innerWidth>=768?(n(3),i("12px"),o("center")):(n(2),i("10px"),o("center"))},[]);return D.exports.useEffect(()=>(a(O0()),l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)),[a,l]),w(Ct,{children:b(Xo,{children:[b("div",{className:"title",children:[w("h1",{children:"OOTD"}),w("span",{children:"\uCD5C\uC2E0 OOTD \uB9AC\uC2A4\uD2B8"})]}),w("div",{className:"contents",children:t.length>0?w(K2,{options:{type:"loop",perPage:e,gap:r,focus:s,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!1,pauseOnFocus:!1,rewind:!1,speed:2}},extensions:{AutoScroll:sA},children:t.map(u=>w(q2,{children:b(X2,{children:[w("div",{className:"top",children:w(Xt,{to:`board/details/${u.id}`,children:w("img",{src:u.photo,alt:"board"})})}),b("div",{className:"bottom",children:[w("p",{className:"board_nickname",children:u.nickname}),w("p",{className:"board_title",children:u.title}),w("p",{className:"board_desc",children:u.desc.length>60?u.desc.slice(0,50)+"...":u.desc})]})]})},u.id))}):w("div",{className:"no-boards",children:"No Boards available && Loading.."})})]})})},QF=()=>w(Ct,{children:w(Xo,{children:b("div",{className:"title",children:[w("h1",{children:"QnA"}),w("span",{children:"\uCD5C\uC2E0 QnA \uB9AC\uC2A4\uD2B8"})]})})}),XF=Di(nf,"picture_photos"),YF=async t=>{const e=Di(XF,t.name);return await d0(e,t),await f0(e)},oA=$n("photos/add",async(t,{rejectWithValue:e})=>{try{if(!t)throw new Error("photoData is Not Fount");const{category:n,title:r,desc:i,photo:s,nickname:o}=t,a=await YF(s);return{id:(await tf(ks(ir,"photos"),{category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()})).id,category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()}}catch(n){return console.error(n),e("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),aA=$n("photos/get",async()=>(await o0(ks(ir,"photos"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;return{id:n.id,...s}})),JF=ws({name:"photo",initialState:{photos:[],postCount:0},reducers:{},extraReducers:t=>{t.addCase(oA.fulfilled,(e,n)=>{const r=n.payload;return{...e,photos:[...e.photos,r],postCount:e.postCount+1}}).addCase(aA.fulfilled,(e,n)=>({...e,photos:n.payload,postCount:n.payload.length}))}});var ZF=JF.reducer;const eU=()=>{const t=lt(u=>u.photo.photos),[e,n]=D.exports.useState(t.length),[r,i]=D.exports.useState("16px"),[s,o]=D.exports.useState("left"),a=nr(),l=D.exports.useCallback(()=>{window.innerWidth>=1280?(n(5),o("left")):window.innerWidth>=1024?(n(4),i("14px"),o("left")):window.innerWidth>=768?(n(3),i("12px"),o("center")):(n(2),i("10px"),o("center"))},[]);return D.exports.useEffect(()=>(a(aA()),l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)),[a,l]),w(Ct,{children:b(Xo,{children:[b("div",{className:"title",children:[w("h1",{children:"Photos"}),w("span",{children:"\uCD5C\uC2E0 photo \uB9AC\uC2A4\uD2B8"})]}),w("div",{className:"contents",children:t.length>0?w(K2,{options:{type:"loop",perPage:e,gap:r,focus:s,pagination:!1,drag:"free",arrows:!1,autoScroll:{pauseOnHover:!1,pauseOnFocus:!1,rewind:!1,speed:1.5}},extensions:{AutoScroll:sA},children:t.map(u=>w(q2,{children:b(X2,{children:[w("div",{className:"top",children:w(Xt,{to:`photo/details/${u.id}`,children:w("img",{src:u.photo,alt:"photo"})})}),b("div",{className:"bottom",children:[w("p",{className:"photo_category",children:`<${u.category}>`}),w("p",{className:"photo_nickname",children:u.nickname}),w("p",{className:"photo_title",children:u.title}),w("p",{className:"photo_desc",children:u.desc.length>60?u.desc.slice(0,50)+"...":u.desc})]})]})},u.id))}):w("div",{className:"no-photos",children:"No photos available && Loading.."})})]})})};We.main`
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
`;const tU=()=>w(Ct,{children:w(Xo,{children:b("div",{className:"title",children:[w("h1",{children:"Today Story"}),w("span",{children:"\uCD5C\uC2E0 \uC77C\uC0C1\uC774\uC57C\uAE30 \uB9AC\uC2A4\uD2B8"})]})})}),nU=()=>b(ll,{children:[w(qF,{}),w(tU,{}),w(eU,{}),w(QF,{})]}),rU=We.div`
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
`,iU=()=>{const{nickname:t,email:e}=lt(r=>r.login.user),n=lt(r=>r.board.postCount);return console.log(n),w(Ct,{children:w(rU,{children:b("div",{className:"contents",children:[b("div",{className:"users",children:[b("div",{className:"user_detail",children:[w("div",{className:"user_thumb",children:w("img",{src:"",alt:""})}),w("div",{className:"user_info",children:b("div",{className:"info_box",children:[w("strong",{className:"name",children:t}),w("p",{className:"email",children:e}),w(Xt,{to:"/",children:"\uD504\uB85C\uD544 \uC218\uC815"})]})})]}),b("div",{className:"board_detail",children:[b(Xt,{to:"/",className:"board_item",children:[w("strong",{className:"info",children:"\uAC8C\uC2DC\uAE00"}),w("p",{className:"title",children:"2 (\uAC1C)"})]}),b(Xt,{to:"/",className:"board_item",children:[w("strong",{className:"info",children:"2100P"}),w("p",{className:"title",children:"\uD3EC\uC778\uD2B8"})]})]})]}),w("div",{className:"items"}),w("div",{className:"items"})]})})})},Pg=$n("auth/signUp",async t=>{try{const{email:e,password:n,nickname:r}=t,s=(await y$(ps,e,n)).user;return await $5(cu(ir,"users",s.uid),{uid:s.uid,nickname:r,email:e}),{uid:s.uid,email:e,nickname:r}}catch(e){throw e}}),sU=ws({name:"auth",initialState:null,extraReducers:t=>{t.addCase(Pg.fulfilled,(e,n)=>{const{uid:r,email:i,nickname:s}=n.payload;return{...e,uid:r,email:i,nickname:s}}),t.addCase(Pg.rejected,(e,n)=>n.error.message)}});var oU=sU.reducer;function aU(t){return sr({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(t)}function lU(t){return sr({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(t)}const uU=({text:t})=>w(TF,{children:w("p",{children:t})}),lA=({text:t,link:e})=>{const[n,r]=D.exports.useState({});D.exports.useState({});const[i,s]=D.exports.useState(!1),[o,a]=D.exports.useState(""),l=nr(),u=On(),c=p=>{r({...n,[p.target.name]:p.target.value})};return b(SF,{children:[b("div",{className:"left",children:[w("div",{className:"toggle",onClick:()=>u("/"),children:w(aU,{})}),b("div",{className:"textbox",children:[w("strong",{className:"title",children:"ModArt"}),w("span",{children:"< \uBAA8\uB4DC\uC544\uD2B8 />"})]})]}),b("div",{className:"right",children:[i&&w(uU,{text:o}),w("form",{onSubmit:async p=>{if(p.preventDefault(),Object.values(n).every(g=>g!=="")){if(t==="\uD68C\uC6D0\uAC00\uC785")try{await l(Pg(n)).unwrap(),a("\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC131\uACF5\uD558\uC600\uC2B5\uB2C8\uB2E4."),s(!0),u("/account/login")}catch{a("\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."),s(!0),setTimeout(()=>{s(!1)},2e3)}else if(t==="\uB85C\uADF8\uC778")try{if(!await l(Eg(n)).unwrap()){a("\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC720\uC800\uC785\uB2C8\uB2E4."),s(!0),setTimeout(()=>{s(!1)},2e3);return}u("/")}catch{a("\uC774\uBA54\uC77C \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),s(!0),setTimeout(()=>{s(!1)},2e3)}}},children:t==="\uD68C\uC6D0\uAC00\uC785"?b(ll,{children:[b("div",{className:"area",children:[w(ca,{type:"email",name:"email",onChange:c,autoComplete:"off"}),w("label",{htmlFor:"email",children:"Email"})]}),b("div",{className:"area",children:[w(ca,{type:"password",name:"password",onChange:c,autoComplete:"off"}),w("label",{htmlFor:"password",children:"Password"})]}),b("div",{className:"area",children:[w(ca,{type:"text",name:"nickname",onChange:c,autoComplete:"off"}),w("label",{htmlFor:"nickname",children:"\uB2C9\uB124\uC784"})]}),w(Dp,{type:"submit",children:t})]}):b(ll,{children:[b("div",{className:"area",children:[w(ca,{type:"email",name:"email",onChange:c}),w("label",{htmlFor:"email",children:"email"})]}),b("div",{className:"area",children:[w(ca,{type:"password",name:"password",onChange:c}),w("label",{htmlFor:"password",children:"Password"})]}),w(Dp,{type:"submit",children:t})]})}),w("div",{className:"socialLogin",children:b(Dp,{className:"googleLogin",onClick:async()=>{try{await l(wg()).unwrap(),a("\uAD6C\uAE00\uACC4\uC815 \uB85C\uADF8\uC778 \uB418\uC168\uC2B5\uB2C8\uB2E4."),u("/")}catch(p){a(p.message)}},children:[w("div",{className:"googleIcon",children:w(lU,{})}),w("p",{className:"googleText",children:"Sign In With Google"})]})}),w("div",{className:"signUp_link",children:w(Xt,{to:`/account/${e==="\uD68C\uC6D0\uAC00\uC785"?"signup":"login"}`,children:e})})]})]})},uA=We.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 0 16px;
    }
`,cU=()=>w(uA,{children:w(lA,{text:"\uD68C\uC6D0\uAC00\uC785",link:"\uB85C\uADF8\uC778"})}),hU=()=>w(uA,{children:w(lA,{text:"\uB85C\uADF8\uC778",link:"\uD68C\uC6D0\uAC00\uC785"})}),dU=()=>{const t=lt(u=>u.login.user),e=t==null?void 0:t.nickname,n=D.exports.useRef(),[r,i]=D.exports.useState({}),s=nr(),o=On(),a=u=>{u.target.name==="photo"?i({...r,[u.target.name]:u.target.files[0]}):i({...r,[u.target.name]:u.target.value})};return D.exports.useEffect(()=>{n.current.focus()},[n]),w(Ct,{children:b(Eu,{children:[w("div",{className:"post_title",children:w("h1",{children:"<OOTD>"})}),b("form",{onSubmit:async u=>{u.preventDefault();try{const c={...r,nickname:e};await s(Q2(c)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),o("/"),console.log(r)}catch(c){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(c)}},encType:"multipart/form-data",children:[b("p",{className:"nickname",children:[w("span",{className:"author",children:"\uC791\uC131\uC790"}),e]}),w("input",{ref:n,type:"text",onChange:a,autoComplete:"off",name:"title",placeholder:"\uAE00\uC81C\uBAA9"}),w("input",{type:"text",onChange:a,autoComplete:"off",name:"brand",placeholder:"\uBE0C\uB79C\uB4DC\uBA85 ex) \uB098\uC774\uD0A4"}),w("input",{type:"text",onChange:a,autoComplete:"off",name:"height",placeholder:"\uD0A4"}),w("input",{type:"text",onChange:a,autoComplete:"off",name:"weight",placeholder:"\uBAB8\uBB34\uAC8C"}),w("textarea",{type:"text",name:"desc",onChange:a,placeholder:"contents.."}),b("label",{htmlFor:"photo",children:[w(rf,{}),w("input",{type:"file",name:"photo",onChange:a})]}),w("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},ec=()=>(Rv(),w(Ct,{children:w(Eu,{children:w("form",{children:w("p",{className:"nickname"})})})})),fU=()=>{const{id:t}=Rv(),e=lt(i=>i.board.boards),n=nr(),r=e.find(i=>i.id===t);return D.exports.useEffect(()=>{n(O0())},[n]),D.exports.useEffect(()=>{const i=e.find(s=>s.id===t);console.log(i)},[e,t]),w(Ct,{children:w(Y2,{children:r&&b(ll,{children:[w("div",{className:"snapImg",children:w("img",{src:r.photo,alt:r.nickname})}),b("div",{className:"snapInfo",children:[w("div",{className:"title",children:b("p",{children:["Information ",w("span",{children:"\uC2A4\uD0C0\uC77C \uC815\uBCF4"})]})}),b("li",{className:"tr",children:[w("span",{className:"th",children:"Nickname"}),w("span",{className:"td",children:r.nickname})]}),b("li",{className:"tr",children:[w("span",{className:"th",children:"Brand"}),w("span",{className:"td",children:r.brand})]}),b("li",{className:"tr",children:[w("span",{className:"th",children:"Title"}),w("span",{className:"td",children:r.title})]}),b("li",{className:"tr",children:[w("span",{className:"th",children:"Body"}),b("span",{className:"td",style:{marginRight:"6px"},children:["\uD0A4 ",r.height]}),b("span",{className:"td",children:["\uBAB8\uBB34\uAC8C ",r.weight]})]}),b("li",{className:"tr",children:[w("span",{className:"th",children:"Contents"}),w("span",{className:"td",children:r.desc})]}),b("li",{className:"tr",children:[w("span",{className:"th",children:"Like"}),w("span",{className:"td",children:w(c2,{})})]})]})]})})})},pU=We.div`
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
      width: 100%;

      svg {
        width: 100%;
        height: 100%;
        color: #fefefe;
      }
    }
  }

  @media screen and (max-width: 768px) {
  }
`,mU=We.div`
  width: 100%;
  background: #fefefe;

  .photo_list {
    padding: 1px 3px 0 1px;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', arial,
      sans-serif;

    .photo_card {
      margin-bottom: 0;
      background-color: #f6f6f6;
      border-bottom: 1px solid #fff;
    }
  }
`,gU=()=>{const t=lt(i=>i.login.user),e=lt(i=>i.photo.photos),n=On();return b(Ct,{children:[w(pU,{children:b("div",{className:"contents",children:[b("div",{className:"text",children:[w("p",{children:"Free PhotoZone"}),w("span",{children:"\uC790\uC2E0\uC758 \uC0AC\uC9C4\uC2E4\uB825\uC744 \uBF50\uB0B4\uC8FC\uC138\uC694!"}),w("button",{className:"link-btn",onClick:()=>t?n("/photo/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),w("div",{className:"image",children:w(n8,{})})]})}),w(mU,{children:w("ul",{className:"photo_list",children:e&&e.map(i=>w("li",{className:"photo_card",children:b("div",{className:"items",children:[w("h3",{className:"photo_title",children:i.title}),b("div",{className:"item_contents",children:[w("span",{className:"item_category",children:i.category}),w("span",{className:"item_date",children:"\uB0A0\uC9DC"}),w("span",{className:"item_nickname",children:i.nickname})]})]})},i.id))})})]})},vU=()=>{const[t,e]=D.exports.useState({}),[n,r]=D.exports.useState([]),i=lt(c=>c.login.user),s=i==null?void 0:i.nickname;D.exports.useRef();const o=nr(),a=On(),l=c=>{if(c.target.name==="photo")e({...t,[c.target.name]:c.target.files[0]});else if(c.target.name==="category"){const{value:h,checked:d}=c.target;r(d?[...n,h]:n.filter(p=>p!==h))}else e({...t,[c.target.name]:c.target.value})};return w(Ct,{children:b(Eu,{children:[w("div",{className:"post_title",children:w("h1",{children:"<Photos>"})}),b("form",{encType:"multipart/form-data",onSubmit:async c=>{c.preventDefault();try{const h={...t,nickname:s,category:n};await o(oA(h)).unwrap(),alert("\uAC8C\uC2DC\uAE00\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),a(-1),console.log(t)}catch(h){alert("\uAC8C\uC2DC\uAE00 \uB4F1\uB85D\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4."),console.log(h)}},children:[b("p",{className:"nickname",children:[w("span",{className:"author",children:"\uC791\uC131\uC790"}),s]}),b("div",{className:"category-wrap",children:[b("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uC790\uC5F0",onChange:l}),"\uC790\uC5F0"]}),b("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uC778\uBB3C",onChange:l}),"\uC778\uBB3C"]}),b("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uD48D\uACBD",onChange:l}),"\uD48D\uACBD"]}),b("label",{children:[w("input",{type:"checkbox",name:"category",value:"\uC77C\uC0C1",onChange:l}),"\uC77C\uC0C1"]})]}),w("input",{type:"text",placeholder:"\uC81C\uBAA9",name:"title",onChange:l}),w("input",{type:"text",placeholder:"\uC124\uBA85",name:"desc",onChange:l}),b("label",{htmlFor:"photo",children:[w(rf,{}),w("input",{type:"file",name:"photo",onChange:l})]}),w("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},yU=We.div`
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
`,wU=We.div`
  width: 100%;
  background: #fefefe;

  .board_list {
    padding: 1px 3px 0 1px;
    font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', arial, sans-serif;

    .board_card {
      margin-bottom: 0;
      background-color: #f6f6f6;
      border-bottom: 1px solid #fff;
    }
  }
`,EU=()=>{const t=lt(i=>i.login.user),e=lt(i=>i.board.boards),n=On();return b(Ct,{children:[w(yU,{children:b("div",{className:"contents",children:[b("div",{className:"text",children:[w("p",{children:"OOTD of the day"}),w("span",{children:"\uC790\uC2E0\uC758 OOTD\uB97C \uACF5\uC720 \uD574\uC8FC\uC138\uC694!"}),w("button",{className:"link-btn",onClick:()=>t?n("/board/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),w("div",{className:"image",children:w(i8,{})})]})}),w(wU,{children:w("ul",{className:"board_list",children:e&&e.map(i=>w("li",{className:"board_card",children:b("div",{className:"items",children:[w("h3",{className:"board_title",children:i.title}),b("div",{className:"item_contents",children:[w("span",{className:"item_brand",children:i.brand}),w("span",{className:"item_date",children:"\uB0A0\uC9DC\uBC1B\uC544\uC640\uC57C\uB310"}),w("span",{className:"item_nickname",children:i.nickname})]})]})},i.id))})})]})},CU=Di(nf,"picture_photos"),_U=async t=>{const e=Di(CU,t.name);return await d0(e,t),await f0(e)},SU=$n("photos/add",async(t,{rejectWithValue:e})=>{try{if(!t)throw new Error("photoData is Not Fount");const{category:n,title:r,desc:i,photo:s,nickname:o}=t,a=await _U(s);return{id:(await tf(ks(ir,"photos"),{category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()})).id,category:n,title:r,desc:i,photo:a,nickname:o,createdAt:Date.now()}}catch(n){return console.error(n),e("\uC0C8 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")}}),cA=$n("photos/get",async()=>(await o0(ks(ir,"photos"))).docs.map(n=>{const r=n.data(),{createdAt:i,...s}=r;return{id:n.id,...s}}));ws({name:"photo",initialState:{photos:[],postCount:0},reducers:{},extraReducers:t=>{t.addCase(SU.fulfilled,(e,n)=>{const r=n.payload;return{...e,photos:[...e.photos,r],postCount:e.postCount+1}}).addCase(cA.fulfilled,(e,n)=>({...e,photos:n.payload,postCount:n.payload.length}))}});const TU=()=>{const{id:t}=Rv(),e=lt(i=>i.photo.photos),n=nr(),r=e.find(i=>i.id===t);return console.log(r),D.exports.useEffect(()=>{n(cA())},[n]),w(Ct,{children:w(Y2,{children:r&&b(ll,{children:[w("div",{className:"snapImg",children:w("img",{src:r.photo,alt:r.nickname})}),b("div",{className:"snapInfo",children:[w("div",{className:"title",children:b("p",{children:["Information ",w("span",{children:"\uC0AC\uC9C4 \uC815\uBCF4"})]})}),b("li",{className:"tr",children:[w("span",{className:"th",children:"Nickname"}),w("span",{className:"td",children:r.nickname})]}),b("li",{className:"tr",children:[w("span",{className:"th",children:"Category"}),w("span",{className:"td",children:r.category})]}),b("li",{className:"tr",children:[w("span",{className:"th",children:"Title"}),w("span",{className:"td",children:r.title})]}),b("li",{className:"tr",children:[w("span",{className:"th",children:"Contents"}),w("span",{className:"td",children:r.desc})]}),b("li",{className:"tr",children:[w("span",{className:"th",children:"Like"}),w("span",{className:"td",children:w(c2,{})})]})]})]})})})},kU=()=>w("div",{children:"TodayDetail"}),IU=()=>{const[t,e]=D.exports.useState({}),n=lt(s=>s.login.user),r=n==null?void 0:n.nickname;nr(),On();const i=s=>{s.target.name==="photo"?e({...t,[s.target.name]:s.target.files[0]}):e({...t,[s.target.name]:s.target.value})};return w(Ct,{children:b(Eu,{children:[w("div",{className:"post_title",children:w("h1",{children:"<Todays Story>"})}),b("form",{encType:"multipart/form-data",children:[b("p",{className:"nickname",children:[w("span",{className:"author",children:"\uC791\uC131\uC790"}),r]}),w("input",{type:"text",placeholder:"\uC81C\uBAA9",onChange:i}),w("input",{type:"text",placeholder:"\uC124\uBA85",onChange:i}),b("label",{htmlFor:"photo",children:[w(rf,{}),w("input",{type:"file",name:"photo",onChange:i})]}),w("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},xU=We.div`
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
            padding: 20px;
            width: 100%;

            svg {
                width: 100%;
                height: 100%;
                color: #FEFEFE;
            }
        }
    }
`;function AU(t){return sr({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M11.667 0h-8.651v1.984h-0.516c-0.827 0-1.5 0.673-1.5 1.5v8.588l2.521 4.956 2.464-4.959v-8.585c0-0.827-0.673-1.5-1.5-1.5h-0.469v-0.984h6.984v5h5v10h-11.5v1h12.5v-11.692l-5.333-5.308zM3.908 14.002h-0.804l-1.104-2.17v-5.848h1v6.027h1v-6.027h0.984v5.851l-1.076 2.167zM4.984 3.484v1.5h-2.984v-1.5c0-0.275 0.225-0.5 0.5-0.5h1.984c0.276 0 0.5 0.225 0.5 0.5zM12 1.742l3.273 3.258h-3.273v-3.258z"}}]})(t)}const NU=()=>{const t=lt(r=>r.login.user),e=On();return b(Ct,{children:[w(xU,{children:b("div",{className:"contents",children:[b("div",{className:"text",children:[w("p",{children:"Free Talking"}),w("span",{children:"\uD558\uB8E8\uC758 \uC77C\uC0C1\uC744 \uACF5\uC720\uD574\uBCF4\uC138\uC694:)"}),w("button",{className:"link-btn",onClick:()=>t?e("/today/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),children:"\uAC8C\uC2DC\uAE00\uC4F0\uAE30"})]}),w("div",{className:"image",children:w(AU,{})})]})}),w(Xo,{})]})},RU=We.div`
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
`,DU=We.article`
  max-width: 964px;
  position: relative;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;

  .qna_card {
    width: 100%;
    background-color: #fff;
    background-color: rgba(255, 255, 255, var(--bg-opacity));
    border-top-width: 1px;
    border-bottom-width: 0;
    word-break: break-all;
  }
`,PU=()=>{const t=lt(r=>r.login.user),e=On();return b(Ct,{children:[w(RU,{children:b("div",{className:"contents",children:[b("div",{className:"text",children:[w("p",{children:"Ask me any questions"}),w("span",{children:"\uC9C8\uBB38\uACFC \uB2F5\uBCC0\uC744 \uD574\uC8FC\uC138\uC694!"}),w("button",{className:"link-btn",onClick:()=>t?e("/qna/write"):(window.alert("\uB85C\uADF8\uC778\uD55C \uC720\uC800\uB9CC \uC791\uC131\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),null),children:"\uC9C8\uBB38\uD558\uAE30"})]}),w("div",{className:"image",children:w(r8,{})})]})}),w(Xo,{})]})},bU=()=>{const[t,e]=D.exports.useState(!1),n=lt(i=>i.login.user),r=()=>(n||window.alert("\uB85C\uADF8\uC778\uD558\uC5EC\uC57C \uC785\uB825\uAC00\uB2A5\uD569\uB2C8\uB2E4!"),null);return w(Ct,{children:w(DU,{children:b("div",{className:"qna_card",children:[b("header",{className:"card_header",children:[b("h1",{children:[w("span",{children:"Q."}),"\uC9C8\uBB38 title"]}),b("div",{className:"card_info",children:[b("div",{className:"inner",children:[w("span",{children:"\uC720\uC800\uC774\uBBF8\uC9C0?!"}),w("span",{children:"\uC720\uC800nickname"})]}),w("span",{children:"\uB0A0\uC9DC"})]})]}),w("div",{className:"card_contents",children:w("p",{className:"card_desc",children:"qna\uB0B4\uC6A9"})}),b("footer",{className:"card_footer",children:[b("div",{className:"inner",children:[w("button",{children:"\uC88B\uC544\uC694"}),w("button",{onClick:()=>e(!t),children:"\uB313\uAE00"})]}),t?w("div",{className:"comment",children:b("div",{className:"comment_in",children:[b("div",{className:"top",children:[w("span",{children:n?n.nickname:w(Xt,{to:"/account/login",children:"\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694."})}),w("button",{children:"\uB4F1\uB85D"})]}),w("div",{className:"bottom",children:w("textarea",{cols:"30",rows:"10",onClick:r,children:"\uB313\uAE00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."})})]})}):null]})]})})})},OU=()=>{const t=lt(n=>n.login.user),e=t==null?void 0:t.nickname;return nr(),On(),w(Ct,{children:b(Eu,{children:[w("div",{className:"post_title",children:w("h1",{children:"<Question>"})}),b("form",{encType:"multipart/form-data",children:[b("p",{className:"nickname",children:[w("span",{className:"author",children:"\uC791\uC131\uC790"}),e]}),w("input",{type:"text",placeholder:"\uC81C\uBAA9"}),w("input",{type:"text",placeholder:"\uB0B4\uC6A9"}),b("label",{htmlFor:"photo",children:[w(rf,{}),w("input",{type:"file",name:"photo"})]}),w("button",{type:"submit",children:"\uAC8C\uC2DC\uD558\uAE30"})]})]})})},$U=[{path:"/",element:w(nU,{})},{path:"/account",element:w(iU,{})},{path:"/account/signup",element:w(cU,{})},{path:"/account/login",element:w(hU,{})},{path:"/board",element:w(EU,{})},{path:"/board/write",element:w(dU,{})},{path:"/board/:id",element:w(ec,{})},{path:"/photo",element:w(gU,{})},{path:"/photo/write",element:w(vU,{})},{path:"/photo/:id",element:w(ec,{})},{path:"/today",element:w(NU,{})},{path:"/today/write",element:w(IU,{})},{path:"/today/:id",element:w(ec,{})},{path:"/qna",element:w(PU,{})},{path:"/qna/write",element:w(OU,{})},{path:"/qna/:id",element:w(ec,{})},{path:"/today/details/:id",element:w(kU,{})},{path:"/board/details/:id",element:w(fU,{})},{path:"/photo/details/:id",element:w(TU,{})},{path:"/qna/details/:id",element:w(bU,{})}];function LU(){return w(TD,{children:b(_4,{basename:"modart",children:[w(SD,{}),w(a8,{}),w(v4,{children:$U.map((t,e)=>w(jS,{path:t.path,element:t.element},e))})]})})}const MU=ws({name:"users",initialState:{currentUser:null,postCount:0},reducers:{setCurrentUser:(t,e)=>{t.currentUser=e.payload,t.postCount=e.payload?e.payload.postCount:0},incrementPostCount:t=>{t.postCount+=1}}});var FU=MU.reducer;const UU=Di(nf,"todays_photos"),BU=async t=>{Di(UU,t.name)};$n("daily/add",async(t,{rejectWithValue:e})=>{try{if(!t)throw new Error("todaysData Not Found..");const{title:n,desc:r,photo:i}=t,s=await BU(i),o=await tf(ks(db,"todays"),{title:n,desc:r,photo:s,nickname,createdAt:Data.now()})}catch{}});const zU=ws({name:"today",initialState:[],reducers:{}});var VU=zU.reducer;const hA=zP({reducer:{auth:oU,login:J9,users:FU,board:wF,photo:ZF,today:VU}});hA.dispatch(Q9());Pp.createRoot(document.getElementById("root")).render(w(oP,{store:hA,children:w(LU,{})}));
