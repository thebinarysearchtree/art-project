(()=>{var N=class extends HTMLElement{connected;disconnected;stringStyles=[];adoptedStyles=[];set styles(e){if(typeof e=="string")if("adoptedStyleSheets"in document){let n=new CSSStyleSheet;n.replaceSync(e),this.adoptedStyles.push(n)}else this.stringStyles.push(e);else if(e instanceof CSSStyleSheet)this.adoptedStyles.push(e);else if(e.length>0)if(typeof e[0]=="string")if("adoptedStyleSheets"in document){let n=e.map(t=>{let r=new CSSStyleSheet;return r.replaceSync(t),r});this.adoptedStyles=this.adoptedStyles.concat(n)}else this.stringStyles=this.stringStyles.concat(e);else this.adoptedStyles=this.adoptedStyles.concat(e)}get styles(){return this.stringStyles.length>0?this.stringStyles:this.adoptedStyles}constructor(){super(),this.attachShadow({mode:"open"})}afterRender(){return null}appendToShadow(e){this.afterRender();for(let n of this.stringStyles){let t=document.createElement("style");t.innerText=n,this.shadowRoot.append(t)}this.adoptedStyles.length>0&&(this.shadowRoot.adoptedStyleSheets=this.adoptedStyles),this.shadowRoot.append(e)}connectedCallback(){if(this.connected){let e=this.connected();e&&(this.disconnected=e)}}disconnectedCallback(){this.disconnected&&this.disconnected()}},E=N;var W=class extends E{renderShadow(...e){let n=this.render(...e);this.appendToShadow(n)}render(){return null}},l=W;var $=class extends E{async renderShadow(...e){let n=await this.render(...e);this.appendToShadow(n)}async render(){return null}},F=$;var ae=new Set(["onEncrypted","onWaitingForKey","onEnterPictureInPicture","onLeavePictureInPicture","onFullScreenChange","onFullScreenError","onPointerLockChange","onPointerLockError","onReadyStateChange","onVisibilityChange","onCopy","onCut","onPaste","onAfterPrint","onBeforePrint","onBeforeUnload","onGamepadConnected","onGamepadDisconnected","onHashChange","onLanguageChange","onMessage","onMessageError","onOffline","onOnline","onPageHide","onPageShow","onPopState","onRejectionHandled","onStorage","onUnhandledRejection","onUnload","onAbort","onAnimationCancel","onAnimationEnd","onAnimationIteration","onAnimationStart","onAuxClick","onBlur","onCanPlay","onCanPlayThrough","onChange","onClick","onClose","onContextMenu","onCueChange","onDblClick","onDrag","onDragEnd","onDragEnter","onDragLeave","onDragOver","onDragStart","onDrop","onDurationChange","onEmptied","onEnded","onError","onFocus","onFormData","onGotPointerCapture","onInput","onInvalid","onKeyDown","onKeyUp","onLoad","onLoadedData","onLoadedMetadata","onLoadStart","onLostPointerCapture","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onPause","onPlay","onPlaying","onPointerCancel","onPointerDown","onPointerEnter","onPointerLeave","onPointerMove","onPointerOut","onPointerOver","onPointerUp","onProgress","onRateChange","onReset","onResize","onScroll","onSecurityPolicyViolation","onSeeked","onSeeking","onSelect","onSelectionChange","onSelectStart","onSlotChange","onStalled","onSubmit","onSuspend","onTimeUpdate","onToggle","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onTransitionCancel","onTransitionEnd","onTransitionRun","onTransitionStart","onVolumeChange","onWaiting","onWheel"]),ie=o=>ae.has(o),C=ie;var b={},ce=(o,e)=>{let n=document.createElement(o);if(typeof e=="string"||typeof e=="number")return n.innerText=e,n;if(Array.isArray(e))return n.append(...e),n;if(!e)return n;for(let[t,r]of Object.entries(e))if(t==="class")n.className=r;else if(t==="text")n.innerText=r;else if(t==="children")n.append(...r);else if(t.startsWith("on")&&t.length>2&&C(t)){let s=t.substring(2).toLowerCase();n.addEventListener(s,r)}else n[t]=r;return n},le={get:function(o,e,n){return b[e]||(b[e]=t=>ce(e,t)),b[e]}},de=new Proxy(b,le),c=de;var A={},ue=(o,e)=>{let n=document.createElementNS("http://www.w3.org/2000/svg",o);if(!e)return n;if(Array.isArray(e))return n.append(...e),n;for(let[t,r]of Object.entries(e))if(t==="class")n.setAttribute("className",r);else if(t==="children")n.append(...r);else if(t.startsWith("on")&&t.length>2&&C(t)){let s=t.substring(2).toLowerCase();n.addEventListener(s,r)}else n.setAttribute(t,r);return n},me={get:function(o,e,n){return A[e]||(A[e]=t=>ue(e,t)),A[e]}},tt=new Proxy(A,me);var P={},he={get:function(o,e,n){if(!P[e]){let t=document.createElement("div");t.className=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),P[e]=t}return P[e].cloneNode()}},pe=new Proxy(P,he),x=pe;var k={},fe={get:function(o,e,n){if(!k[e]){let t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=document.createElement(t);k[e]=r}return k[e].cloneNode()}},ge=new Proxy(k,fe),p=ge;var L={},ye={get:function(o,e,n){if(!L[e]){let t=e.substring(3);t=t[0].toLowerCase()+t.substring(1),t==="class"&&(t="className"),t==="text"&&(t="innerText"),L[e]=(r,s)=>{for(let[a,i]of Object.entries(r))s[a][t]=i}}return L[e]}},Se=new Proxy(L,ye),I=Se;var v={},xe={get:function(o,e,n){if(!v[e]){let t=e.substring(2).toLowerCase();t==="submit"?v[e]=(r,s,a)=>{r.addEventListener(t,i=>{i.preventDefault(),s(i)},a)}:v[e]=(r,s,a)=>{r.addEventListener(t,s,a)}}return v[e]}},ve=new Proxy(v,xe),O=ve;var U=(o,e,n)=>{o.htmlFor=n,e.id=n};var d=(o,e)=>(customElements.define(o,e),(...n)=>{let t=document.createElement(o);return t.renderShadow(...n),t}),j=(o,e)=>(customElements.define(o,e),async(...n)=>{let t=document.createElement(o);return await t.renderShadow(...n),t});var{a:we,p:Ee}=c,g=[];history.scrollRestoration="manual";var q=()=>Ee("Page not found"),Ce=o=>{for(let e=g.length-1;e>=0;e--){let n=g[e],t=n.getRoute(o);if(t)return{route:t,router:n}}return{route:{handler:q,groups:null},router:g[0]}},be=o=>{let e={};for(let[n,t]of o)e[n]=t;return e},B=o=>{let e=new URL(o),{pathname:n,searchParams:t}=e,{route:r,router:s}=Ce(n),{handler:a,groups:i}=r,u={...be(t),...i},m=a(u),{root:h}=s;h&&h.replaceChildren(m)};window.addEventListener("popstate",o=>{B(window.location.href);let{x:e,y:n}=o.state.scroll;window.scrollTo(e,n)});window.addEventListener("clickart",o=>{B(o.href)});var f=class{stringRoutes=new Map;regexRoutes=[];root;constructor(e){this.root=e,g.push(this)}start(){B(window.location.href)}setNotFound(){q=()=>element}add(e,n){typeof e=="string"?this.stringRoutes.set(e,n):this.regexRoutes.push({match:e,handler:n})}getRoute(e){let n=this.stringRoutes.get(e);if(n)return{handler:n,groups:null};for(let t of this.regexRoutes){let{match:r,handler:s}=t,a=r.exec(e);if(a)return{handler:s,groups:a.groups}}}remove(){g.splice(g.findIndex(e=>e===this))}},w=o=>{let e=we(o),n=e.href;return e.addEventListener("click",t=>{let r=t.button===0,s=!o.target||o.target==="_self",a=t.metaKey||t.altKey||t.ctrlKey||t.shiftKey;if(r&&s&&!a){t.preventDefault();let i={x:window.scrollX,y:window.scrollY};history.replaceState({...history.state,scroll:i},""),history.pushState(o.state,"",n);let u=new Event("clickart");u.href=n,window.dispatchEvent(u)}}),e};var{div:Ae}=c,K=class extends l{render(e){return Ae(`Hello ${e}`)}},Pe=d("hello-world",K),J=Pe;var H=class extends l{render(){let e=0,{div:n}=p,t=()=>{n.innerText=`Seconds: ${e}`,e++};return t(),this.connected=()=>{let r=setInterval(t,1e3);return()=>clearInterval(r)},n}},ke=d("seconds-timer",H),X=ke;var Le=c.li,Te=I.setText,Re=O.onSubmit,z=class extends l{constructor(){super(),this.styles="form > * { margin-right: 5px; }"}render(){let{div:e,h3:n,ul:t,form:r,label:s,input:a,button:i}=p;return Te({h3:"Todo",label:"What needs to be done?",button:"Add #1"},{h3:n,label:s,button:i}),U(s,a,"new-todo"),r.append(s,a,i),Re(r,m=>{let h=a.value;if(h.length===0)return;let S=Le(h);t.append(S),i.innerText=`Add #${t.childElementCount+1}`,a.value=""}),e.append(n,t,r),e}},De=d("todo-list",z),Y=De;var _=`.root {
  display: flex;
  margin-bottom: 15px;
}

a {
  text-decoration: none;
  color: inherit;
}

span {
  color: grey;
}

.thumbnail {
  border-radius: 3px;
  background-color: grey;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.selected {
  background-color: #ddd;
}`,T;"adoptedStyleSheets"in document?(T=new CSSStyleSheet,T.replaceSync(_)):T=_;var Q=T;var Me=(o,e)=>w({href:o,text:e||null}),Ne=c.span,G=class extends l{constructor(){super(),this.styles=Q}render(e){let{root:n,thumbnail:t,details:r}=x,{id:s,name:a,year:i}=e;this.toggleSelected=m=>m===s?n.className="root selected":n.className="root",r.append(a,Ne(i)),n.append(t,r);let u=Me(`/routes?v=${s}`);return u.append(n),u}},We=d("movie-thumbnail",G),ee=We;var te=`.root {
  display: flex;
}

.side-panel {
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}

.video {
  border-radius: 3px;
  width: 600px;
  height: 300px;
  background-color: #ddd;
}

h3 {
  margin-bottom: 0px;
}

p {
  width: 600px;
  line-height: 1.3em;
}
`,R;"adoptedStyleSheets"in document?(R=new CSSStyleSheet,R.replaceSync(te)):R=te;var ne=R;var{h3:$e}=c,Fe=[{id:1,name:"Star Wars - A New Hope",year:1977},{id:2,name:"Star Wars - The Empire Strikes Back",year:1980},{id:3,name:"Star Wars - Return of the Jedi",year:1983}],Ie=()=>new Promise((o,e)=>{setTimeout(()=>o(Fe),1e3)}),V=class extends F{constructor(){super(),this.styles=ne}async render(){let{root:e,sidePanel:n,content:t,video:r}=x,s=await Ie(),a=s.map(i=>ee(i));return n.append(...a),this.connected=()=>{let i=new f;return i.add("/routes",({v:u})=>{let m=parseInt(u,10),{name:h}=s.find(S=>S.id===m);a.forEach(S=>S.toggleSelected(m)),t.replaceChildren(r,$e(h))}),i.start(),()=>i.remove()},e.append(t,n),e}},Oe=j("movie-routes",V),oe=Oe;var re=`div {
  display: flex;
  flex-direction: column;
}

a {
  margin-bottom: 10px;
}
`,D;"adoptedStyleSheets"in document?(D=new CSSStyleSheet,D.replaceSync(re)):D=re;var se=D;var Ue=document.getElementById("root"),y=new f(Ue),{div:je}=c,M=(o,e)=>w({href:o,text:e}),Z=class extends l{constructor(){super(),this.styles=se}render(){let{div:e}=p,n=M("/hello?name=World","Hello World"),t=M("/timer","Timer"),r=M("/todo","Todo"),s=M("/routes?v=1","Routes");return e.append(n,t,r,s),e}},Be=d("home-page",Z);y.add("/",()=>Be());y.add("/hello",({name:o})=>J(o));y.add("/timer",()=>X());y.add("/todo",()=>Y());y.add(/\/routes/,()=>{let o=je("Loading...");return oe().then(e=>o.replaceWith(e)),o});y.start();})();
//# sourceMappingURL=index.js.map
