(()=>{var I=class extends HTMLElement{styles;state;connected;disconnected;constructor(){super();this.attachShadow({mode:"open"})}afterRender(){return null}appendToShadow(e){if(this.afterRender(),this.styles)if(typeof this.styles=="string"){let t=document.createElement("style");t.innerText=this.styles,this.shadowRoot.append(t,e)}else this.shadowRoot.adoptedStyleSheets=[this.styles],this.shadowRoot.append(e);else this.shadowRoot.append(e)}connectedCallback(){if(this.connected){let e=this.connected();e&&(this.disconnected=e)}}disconnectedCallback(){this.disconnected&&this.disconnected()}},b=I;var j=class extends b{renderShadow(...e){let t=this.render(...e);this.appendToShadow(t)}render(){return null}},l=j;var B=class extends b{async renderShadow(...e){let t=await this.render(...e);this.appendToShadow(t)}async render(){return null}},P=B;var A={},V=(n,e)=>{let t=document.createElement(n);return typeof e=="string"||typeof e=="number"?(t.innerText=e,t):e?(e.hasOwnProperty("class")&&(e.className=e.class,delete e.class),e.hasOwnProperty("text")&&(e.innerText=e.text,delete e.text),Object.assign(t,e)):t},ee={get:function(n,e,t){return A[e]||(A[e]=o=>V(e,o)),A[e]}},te=new Proxy(A,ee),i=te;var k={},oe=(n,e)=>{let t=document.createElementNS(n,"http://www.w3.org/2000/svg");if(!e)return t;for(let[o,r]of Object.entries(e))t.setAttribute(o,r);return t},ne={get:function(n,e,t){return k[e]||(k[e]=o=>oe(e,o)),k[e]}},Je=new Proxy(k,ne);var S={},re={get:function(n,e,t){if(!S[e]){let o=document.createElement("div");o.className=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),S[e]=o}return S[e].cloneNode()}},se=new Proxy(S,re),y=se;var R={},ce={get:function(n,e,t){if(!R[e]){let o=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=document.createElement(o);R[e]=r}return R[e].cloneNode()}},ae=new Proxy(R,ce),f=ae;var T={},ie={get:function(n,e,t){if(!T[e]){let o=e.substring(3);o=o[0].toLowerCase()+o.substring(1),o==="class"&&(o="className"),o==="text"&&(o="innerText"),T[e]=(r,s)=>{for(let[c,a]of Object.entries(r))s[c][o]=a}}return T[e]}},le=new Proxy(T,ie),C=le;var v={},de={get:function(n,e,t){if(!v[e]){let o=e.substring(2).toLowerCase();o==="submit"?v[e]=(r,s,c)=>{r.addEventListener(o,a=>{a.preventDefault(),s(a)},c)}:v[e]=(r,s,c)=>{r.addEventListener(o,s,c)}}return v[e]}},me=new Proxy(v,de),N=me;var $=(n,e,t)=>{n.htmlFor=t,e.id=t};var d=(n,e)=>(customElements.define(n,e),(...t)=>{let o=document.createElement(n);return o.state=t,o.renderShadow(...t),o}),W=(n,e)=>(customElements.define(n,e),async(...t)=>{let o=document.createElement(n);return o.state=t,await o.renderShadow(...t),o});var{a:ue,p:he}=i,p=[];history.scrollRestoration="manual";var O=()=>he("Page not found"),fe=n=>{for(let e=p.length-1;e>=0;e--){let t=p[e],o=t.getRoute(n);if(o)return{route:o,router:t}}return{route:{handler:O,groups:null},router:p[0]}},pe=n=>{let e={};for(let[t,o]of n)e[t]=o;return e},F=n=>{let e=new URL(n),{pathname:t,searchParams:o}=e,{route:r,router:s}=fe(t),{handler:c,groups:a}=r,m={...pe(o),...a},u=c(m),{root:h}=s;h&&h.replaceChildren(u)};window.addEventListener("popstate",n=>{F(window.location.href);let{x:e,y:t}=n.state.scroll;window.scrollTo(e,t)});window.addEventListener("clickart",n=>{F(n.href)});var x=class{stringRoutes=new Map;regexRoutes=[];root;constructor(e){this.root=e,p.push(this)}start(){F(window.location.href)}setNotFound(){O=()=>element}add(e,t){typeof e=="string"?this.stringRoutes.set(e,t):this.regexRoutes.push({match:e,handler:t})}getRoute(e){let t=this.stringRoutes.get(e);if(t)return{handler:t,groups:null};for(let o of this.regexRoutes){let{match:r,handler:s}=o,c=r.exec(e);if(c)return{handler:s,groups:c.groups}}}remove(){p.splice(p.findIndex(e=>e===this))}},E=n=>{let e=ue(n),t=e.href;return e.addEventListener("click",o=>{let r=o.button===0,s=!n.target||n.target==="_self",c=o.metaKey||o.altKey||o.ctrlKey||o.shiftKey;if(r&&s&&!c){o.preventDefault();let a={x:window.scrollX,y:window.scrollY};history.replaceState({...history.state,scroll:a},""),history.pushState(n.state,"",t);let m=new Event("clickart");m.href=t,window.dispatchEvent(m)}}),e};var{div:xe}=i,H=class extends l{render(e){return xe(`Hello ${e}`)}},ge=d("hello-world",H),K=ge;var z=class extends l{render(){let e=0,{div:t}=f,o=()=>{t.innerText=`Seconds: ${e}`,e++};return o(),this.connected=()=>{let r=setInterval(o,1e3);return()=>clearInterval(r)},t}},we=d("seconds-timer",z),D=we;var ye=i.li,ve=C.setText,Ee=N.onSubmit,M=class extends l{constructor(){super();this.styles="form > * { margin-right: 5px; }"}render(){let{div:e,h3:t,ul:o,form:r,label:s,input:c,button:a}=f;return ve({h3:"Todo",label:"What needs to be done?",button:"Add #1"},{h3:t,label:s,button:a}),$(s,c,"new-todo"),r.append(s,c,a),Ee(r,u=>{let h=c.value;if(h.length===0)return;let w=ye(h);o.append(w),a.innerText=`Add #${o.childElementCount+1}`,c.value=""}),e.append(t,o,r),e}},be=d("todo-list",M),Z=be;var q=`.root {
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
}`;var ke=(n,e)=>E({href:n,text:e||null}),Se=i.span,J=class extends l{constructor(){super();this.styles=q}render(e){let{root:t,thumbnail:o,details:r}=y,{id:s,name:c,year:a}=e;this.toggleSelected=u=>u===s?t.className="root selected":t.className="root",r.append(c,Se(a)),t.append(o,r);let m=ke(`/routes?v=${s}`);return m.append(t),m}},Re=d("movie-thumbnail",J),U=Re;var X=`.root {
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
`;var{h3:Le}=i,Pe=[{id:1,name:"Star Wars - A New Hope",year:1977},{id:2,name:"Star Wars - The Empire Strikes Back",year:1980},{id:3,name:"Star Wars - Return of the Jedi",year:1983}],Ce=()=>new Promise((n,e)=>{setTimeout(()=>n(Pe),1e3)}),Y=class extends P{constructor(){super();this.styles=X}async render(){let{root:e,sidePanel:t,content:o,video:r}=y,s=await Ce(),c=s.map(a=>U(a));return t.append(...c),this.connected=()=>{let a=new x;return a.add("/routes",({v:m})=>{let u=parseInt(m,10),{name:h}=s.find(w=>w.id===u);c.forEach(w=>w.toggleSelected(u)),o.replaceChildren(r,Le(h))}),a.start(),()=>a.remove()},e.append(o,t),e}},Ne=W("movie-routes",Y),_=Ne;var G=`div {
  display: flex;
  flex-direction: column;
}

a {
  margin-bottom: 10px;
}
`;var We=document.getElementById("root"),g=new x(We),{div:Fe}=i,L=(n,e)=>E({href:n,text:e}),Q=class extends l{constructor(){super();this.styles=G}render(){let{div:e}=f,t=L("/hello?name=World","Hello World"),o=L("/timer","Timer"),r=L("/todo","Todo"),s=L("/routes?v=1","Routes");return e.append(t,o,r,s),e}},Ie=d("home-page",Q);g.add("/",()=>Ie());g.add("/hello",({name:n})=>K(n));g.add("/timer",()=>D());g.add("/todo",()=>Z());g.add(/\/routes/,()=>{let n=Fe("Loading...");return _().then(e=>n.replaceWith(e)),n});g.start();})();
//# sourceMappingURL=index.js.map
