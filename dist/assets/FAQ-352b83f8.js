import{r as n,m as w,j as u}from"./index-b8cafb75.js";import{l as M,S as N,D as j,y as D,T as U,o as v,c as H,u as E,d as P,X as T,I as L,C as K,e as z,a as k,r as Q}from"./keyboard-944e995c.js";function O(e){var a;if(e.type)return e.type;let t=(a=e.as)!=null?a:"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function Y(e,a){let[t,s]=n.useState(()=>O(e));return M(()=>{s(O(e))},[e.type,e.as]),M(()=>{t||a.current&&a.current instanceof HTMLButtonElement&&!a.current.hasAttribute("type")&&s("button")},[t,a]),t}var A;let q=(A=w.startTransition)!=null?A:function(e){e()};var G=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(G||{}),V=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(V||{});let X={0:e=>({...e,disclosureState:E(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,a){return e.buttonId===a.buttonId?e:{...e,buttonId:a.buttonId}},3(e,a){return e.panelId===a.panelId?e:{...e,panelId:a.panelId}}},C=n.createContext(null);C.displayName="DisclosureContext";function R(e){let a=n.useContext(C);if(a===null){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,R),t}return a}let $=n.createContext(null);$.displayName="DisclosureAPIContext";function F(e){let a=n.useContext($);if(a===null){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,F),t}return a}let B=n.createContext(null);B.displayName="DisclosurePanelContext";function Z(){return n.useContext(B)}function J(e,a){return E(a.type,X,e,a)}let W=n.Fragment;function _(e,a){let{defaultOpen:t=!1,...s}=e,y=n.useRef(null),l=D(a,U(c=>{y.current=c},e.as===void 0||e.as===n.Fragment)),i=n.useRef(null),b=n.useRef(null),o=n.useReducer(J,{disclosureState:t?0:1,linkedPanel:!1,buttonRef:b,panelRef:i,buttonId:null,panelId:null}),[{disclosureState:d,buttonId:p},g]=o,m=v(c=>{g({type:1});let r=z(y);if(!r||!p)return;let f=(()=>c?c instanceof HTMLElement?c:c.current instanceof HTMLElement?c.current:r.getElementById(p):r.getElementById(p))();f==null||f.focus()}),h=n.useMemo(()=>({close:m}),[m]),I=n.useMemo(()=>({open:d===0,close:m}),[d,m]),x={ref:l};return w.createElement(C.Provider,{value:o},w.createElement($.Provider,{value:h},w.createElement(H,{value:E(d,{0:P.Open,1:P.Closed})},T({ourProps:x,theirProps:s,slot:I,defaultTag:W,name:"Disclosure"}))))}let ee="button";function ae(e,a){let t=L(),{id:s=`headlessui-disclosure-button-${t}`,...y}=e,[l,i]=R("Disclosure.Button"),b=Z(),o=b===null?!1:b===l.panelId,d=n.useRef(null),p=D(d,a,o?null:l.buttonRef);n.useEffect(()=>{if(!o)return i({type:2,buttonId:s}),()=>{i({type:2,buttonId:null})}},[s,i,o]);let g=v(r=>{var f;if(o){if(l.disclosureState===1)return;switch(r.key){case k.Space:case k.Enter:r.preventDefault(),r.stopPropagation(),i({type:0}),(f=l.buttonRef.current)==null||f.focus();break}}else switch(r.key){case k.Space:case k.Enter:r.preventDefault(),r.stopPropagation(),i({type:0});break}}),m=v(r=>{switch(r.key){case k.Space:r.preventDefault();break}}),h=v(r=>{var f;Q(r.currentTarget)||e.disabled||(o?(i({type:0}),(f=l.buttonRef.current)==null||f.focus()):i({type:0}))}),I=n.useMemo(()=>({open:l.disclosureState===0}),[l]),x=Y(e,d),c=o?{ref:p,type:x,onKeyDown:g,onClick:h}:{ref:p,id:s,type:x,"aria-expanded":l.disclosureState===0,"aria-controls":l.linkedPanel?l.panelId:void 0,onKeyDown:g,onKeyUp:m,onClick:h};return T({ourProps:c,theirProps:y,slot:I,defaultTag:ee,name:"Disclosure.Button"})}let ne="div",te=N.RenderStrategy|N.Static;function le(e,a){let t=L(),{id:s=`headlessui-disclosure-panel-${t}`,...y}=e,[l,i]=R("Disclosure.Panel"),{close:b}=F("Disclosure.Panel"),o=D(a,l.panelRef,h=>{q(()=>i({type:h?4:5}))});n.useEffect(()=>(i({type:3,panelId:s}),()=>{i({type:3,panelId:null})}),[s,i]);let d=K(),p=(()=>d!==null?(d&P.Open)===P.Open:l.disclosureState===0)(),g=n.useMemo(()=>({open:l.disclosureState===0,close:b}),[l,b]),m={ref:o,id:s};return w.createElement(B.Provider,{value:l.panelId},T({ourProps:m,theirProps:y,slot:g,defaultTag:ne,features:te,visible:p,name:"Disclosure.Panel"}))}let re=j(_),se=j(ae),ie=j(le),S=Object.assign(re,{Button:se,Panel:ie});function oe({title:e,titleId:a,...t},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":a},t),e?n.createElement("title",{id:a},e):null,n.createElement("path",{fillRule:"evenodd",d:"M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z",clipRule:"evenodd"}))}const ue=n.forwardRef(oe),de=ue,ce=[{id:1,pertanyaan:"Apakah saya yang membuat websitenya sendiri ?",jawaban:"Tidak, anda terima beres hanya perlu memberitahukan apa yang anda butuhkan."},{id:2,pertanyaan:"Apakah saya harus bisa ngoding untuk mengelola website saya ?",jawaban:"Tidak, Tampilan admin yang ramah pengguna dapat membantu anda mengelola website tanpa perlu coding."},{id:3,pertanyaan:"Bagaimana jika saya mengalami kesulitasn ?",jawaban:"Tidak perlu khawatir, Tim kami siap membantu anda mengatasi masalah di website anda."},{id:4,pertanyaan:"Apakah website saya bisa cepat dan aman ?",jawaban:"Tim kami siap siaga menjaga dan melayani website anda 24 jam."},{id:5,pertanyaan:"Saya sudah punya hosting dan domain sendiri, apakah masih bisa membuat website di Mirland.id ?",jawaban:"Bisa, Anda hanya kana dikenakan biaya pembuatan websitenya saja."},{id:6,pertanyaan:"Apakah ada garansi ?",jawaban:"Ya ada, Garansi revisi sampe Oke dan sesuai keinginan anda."}],fe=()=>u.jsxs("div",{className:"w-full px-4 py-10",children:[u.jsx("h2",{className:"text-center text-2xl font-semibold text-indigo-600 w-10/12 mx-auto mb-5",children:"Pertanyaan yang sering diajukan kepada kami."}),u.jsx("div",{className:"mx-auto w-full max-w-2xl rounded-2xl bg-white p-2",children:ce.map((e,a)=>u.jsx(S,{children:({open:t})=>u.jsxs(u.Fragment,{children:[u.jsxs(S.Button,{className:"flex w-full justify-between rounded-lg bg-indigo-600 px-4 py-2 text-left text-base lg:text-base font-normal text-white hover:bg- focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75 mb-2","data-aos":"fade-up","data-aos-delay":a*10,children:[u.jsx("span",{children:e.pertanyaan}),u.jsx(de,{className:`${t?"rotate-180 transform transition-all duration-300":""} h-5 w-5 text-white`})]}),u.jsx(S.Panel,{className:"px-4 pt-1 pb-2 text-base text-gray-600",children:e.jawaban})]})},e.id))})]});export{fe as default};
