import{h as f,r as a,a as O}from"./index-248033fb.js";import{d as x,a as b,f as I,e as S,$ as T}from"./index-90ae8214.js";function w(e,t,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function k(e){const t=e+"CollectionProvider",[r,n]=x(t),[o,s]=r(t,{collectionRef:{current:null},itemMap:new Map}),A=l=>{const{scope:u,children:C}=l,$=f.useRef(null),N=f.useRef(new Map).current;return f.createElement(o,{scope:u,itemMap:N,collectionRef:$},C)},p=e+"CollectionSlot",i=f.forwardRef((l,u)=>{const{scope:C,children:$}=l,N=s(p,C),v=b(u,N.collectionRef);return f.createElement(I,{ref:v},$)}),c=e+"CollectionItemSlot",m="data-radix-collection-item",d=f.forwardRef((l,u)=>{const{scope:C,children:$,...N}=l,v=f.useRef(null),E=b(u,v),M=s(c,C);return f.useEffect(()=>(M.itemMap.set(v,{ref:v,...N}),()=>void M.itemMap.delete(v))),f.createElement(I,{[m]:"",ref:E},$)});function h(l){const u=s(e+"CollectionConsumer",l);return f.useCallback(()=>{const $=u.collectionRef.current;if(!$)return[];const N=Array.from($.querySelectorAll(`[${m}]`));return Array.from(u.itemMap.values()).sort((M,P)=>N.indexOf(M.ref.current)-N.indexOf(P.ref.current))},[u.collectionRef,u.itemMap])}return[{Provider:A,Slot:i,ItemSlot:d},h,n]}function y(e,t){return a.useReducer((r,n)=>{const o=t[r][n];return o??r},e)}const U=e=>{const{present:t,children:r}=e,n=g(t),o=typeof r=="function"?r({present:n.isPresent}):a.Children.only(r),s=b(n.ref,o.ref);return typeof r=="function"||n.isPresent?a.cloneElement(o,{ref:s}):null};U.displayName="Presence";function g(e){const[t,r]=a.useState(),n=a.useRef({}),o=a.useRef(e),s=a.useRef("none"),A=e?"mounted":"unmounted",[p,i]=y(A,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const c=R(n.current);s.current=p==="mounted"?c:"none"},[p]),S(()=>{const c=n.current,m=o.current;if(m!==e){const h=s.current,l=R(c);e?i("MOUNT"):l==="none"||(c==null?void 0:c.display)==="none"?i("UNMOUNT"):i(m&&h!==l?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,i]),S(()=>{if(t){const c=d=>{const l=R(n.current).includes(d.animationName);d.target===t&&l&&O.flushSync(()=>i("ANIMATION_END"))},m=d=>{d.target===t&&(s.current=R(n.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else i("ANIMATION_END")},[t,i]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:a.useCallback(c=>{c&&(n.current=getComputedStyle(c)),r(c)},[])}}function R(e){return(e==null?void 0:e.animationName)||"none"}function q({prop:e,defaultProp:t,onChange:r=()=>{}}){const[n,o]=_({defaultProp:t,onChange:r}),s=e!==void 0,A=s?e:n,p=T(r),i=a.useCallback(c=>{if(s){const d=typeof c=="function"?c(e):c;d!==e&&p(d)}else o(c)},[s,e,o,p]);return[A,i]}function _({defaultProp:e,onChange:t}){const r=a.useState(e),[n]=r,o=a.useRef(n),s=T(t);return a.useEffect(()=>{o.current!==n&&(s(n),o.current=n)},[n,o,s]),r}const F={hidden:{opacity:0,scale:.5},visible:{opacity:1,scale:1,transition:{duration:.8,delay:.2,ease:[0,.71,.2,1.01]}},whileTap:{scale:.95}};export{w as $,k as a,q as b,U as c,F as d};
