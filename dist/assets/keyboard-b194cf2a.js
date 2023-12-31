import{r as i,m as y,e as S}from"./index-7770be24.js";var P=Object.defineProperty,T=(e,t,n)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t,n)=>(T(e,typeof t!="symbol"?t+"":t,n),n);let x=class{constructor(){b(this,"current",this.detect()),b(this,"handoffState","pending"),b(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},p=new x,$=(e,t)=>{p.isServer?i.useEffect(e,t):i.useLayoutEffect(e,t)};function k(e){let t=i.useRef(e);return $(()=>{t.current=e},[e]),t}let D=function(e){let t=k(e);return y.useCallback((...n)=>t.current(...n),[t])};function R(){let e=typeof document>"u";return"useSyncExternalStore"in S?(t=>t.useSyncExternalStore)(S)(()=>()=>{},()=>!1,()=>!e):!1}function I(){let e=R(),[t,n]=i.useState(p.isHandoffComplete);return t&&p.isHandoffComplete===!1&&n(!1),i.useEffect(()=>{t!==!0&&n(!0)},[t]),i.useEffect(()=>p.handoff(),[]),e?!1:t}var j;let Y=(j=y.useId)!=null?j:function(){let e=I(),[t,n]=y.useState(e?()=>p.nextId():null);return $(()=>{t===null&&n(p.nextId())},[t]),t!=null?""+t:void 0};function C(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,C),o}function q(e){return p.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let A=Symbol();function z(e,t=!0){return Object.assign(e,{[A]:t})}function G(...e){let t=i.useRef(e);i.useEffect(()=>{t.current=e},[e]);let n=D(o=>{for(let r of t.current)r!=null&&(typeof r=="function"?r(o):r.current=o)});return e.every(o=>o==null||(o==null?void 0:o[A]))?void 0:n}function O(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var L=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(L||{}),F=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(F||{});function J({ourProps:e,theirProps:t,slot:n,defaultTag:o,features:r,visible:c=!0,name:u}){let l=H(t,e);if(c)return g(l,n,o,u);let m=r??0;if(m&2){let{static:a=!1,...d}=l;if(a)return g(d,n,o,u)}if(m&1){let{unmount:a=!0,...d}=l;return C(a?0:1,{0(){return null},1(){return g({...d,hidden:!0,style:{display:"none"}},n,o,u)}})}return g(l,n,o,u)}function g(e,t={},n,o){let{as:r=n,children:c,refName:u="ref",...l}=w(e,["unmount","static"]),m=e.ref!==void 0?{[u]:e.ref}:{},a=typeof c=="function"?c(t):c;"className"in l&&l.className&&typeof l.className=="function"&&(l.className=l.className(t));let d={};if(t){let s=!1,h=[];for(let[v,f]of Object.entries(t))typeof f=="boolean"&&(s=!0),f===!0&&h.push(v);s&&(d["data-headlessui-state"]=h.join(" "))}if(r===i.Fragment&&Object.keys(N(l)).length>0){if(!i.isValidElement(a)||Array.isArray(a)&&a.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));let s=a.props,h=typeof(s==null?void 0:s.className)=="function"?(...f)=>O(s==null?void 0:s.className(...f),l.className):O(s==null?void 0:s.className,l.className),v=h?{className:h}:{};return i.cloneElement(a,Object.assign({},H(a.props,N(w(l,["ref"]))),d,m,U(a.ref,m.ref),v))}return i.createElement(r,Object.assign({},w(l,["ref"]),r!==i.Fragment&&m,r!==i.Fragment&&d),a)}function U(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function H(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let o of e)for(let r in o)r.startsWith("on")&&typeof o[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(o[r])):t[r]=o[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(o=>[o,void 0])));for(let o in n)Object.assign(t,{[o](r,...c){let u=n[o];for(let l of u){if((r instanceof Event||(r==null?void 0:r.nativeEvent)instanceof Event)&&r.defaultPrevented)return;l(r,...c)}}});return t}function K(e){var t;return Object.assign(i.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function N(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function w(e,t=[]){let n=Object.assign({},e);for(let o of t)o in n&&delete n[o];return n}function Q(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let o=(t==null?void 0:t.getAttribute("disabled"))==="";return o&&M(n)?!1:o}function M(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let E=i.createContext(null);E.displayName="OpenClosedContext";var B=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(B||{});function Z(){return i.useContext(E)}function _({value:e,children:t}){return y.createElement(E.Provider,{value:e},t)}var V=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(V||{});export{Z as C,K as D,Y as I,L as S,z as T,J as X,V as a,I as b,_ as c,B as d,q as e,p as f,$ as l,D as o,Q as r,k as s,C as u,G as y};