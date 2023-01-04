(function(){"use strict";var t={561:function(t,e,n){n.d(e,{Z:function(){return c}});var r=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"nav nav-tabs mb-4"},t._l(t.tabs,(function(n){return e("li",{key:n.id,staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:n.path}},[t._v(" "+t._s(n.title)+" ")])],1)})),0)},a=[],s=n(632),i={data(){return{tabs:[{title:"首頁",path:"/restaurants",id:(0,s.Z)()},{title:"最新動態",path:"/restaurants/feeds",id:(0,s.Z)()},{title:"TOP 10 人氣餐廳",path:"/restaurants/top",id:(0,s.Z)()},{title:"美食達人",path:"/users/top",id:(0,s.Z)()}]}}},o=i,u=n(1),l=(0,u.Z)(o,r,a,!1,null,null,null),c=l.exports},354:function(t,e,n){var r=n(144),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"forum"}},[e("NavBar"),e("main",{staticClass:"mt-5 bg-white"},[e("router-view")],1)],1)},s=[],i=(n(734),function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" 餐廳評論網 ")]),e("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbarSupportedContent"}},[[e("div",{staticClass:"ml-auto d-flex align-items-center"},[t.currentUser.isAdmin?e("router-link",{staticClass:"text-white mr-3",attrs:{to:"#"}},[t._v(" 管理員後台 ")]):t._e(),t.isAuthenticated?[e("router-link",{staticClass:"text-white mr-3",attrs:{to:"#"}},[t._v(" "+t._s(t.currentUser.name||"使用者")+" 您好 ")]),e("button",{staticClass:"btn btn-sm btn-outline-success my-2 my-sm-0",attrs:{type:"button"}},[t._v(" 登出 ")])]:t._e()],2)]],2)],1)}),o=[];const u={currentUser:{id:1,name:"管理者",email:"root@example.com",image:"https://i.pravatar.cc/300",isAdmin:!0},isAuthenticated:!0};var l={data(){return{currentUser:{id:-1,name:"",email:"",image:"",isAdmin:!1},isAuthenticated:!1}},methods:{fetchUser(){this.currentUser={...this.currentUser,...u.currentUser},this.isAuthenticated=u.isAuthenticated}},created(){console.log("fetchUser"),this.fetchUser()}},c=l,d=n(1),f=(0,d.Z)(c,i,o,!1,null,null,null),p=f.exports,m={components:{NavBar:p}},v=m,h=(0,d.Z)(v,a,s,!1,null,null,null),b=h.exports,g=n(345),y=function(){var t=this,e=t._self._c;return e("h1",[t._v("404 Page Not Found")])},w=[],C={},_=(0,d.Z)(C,y,w,!1,null,null,null),k=_.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("NavTabs"),e("h1",{staticClass:"mt-5"},[t._v("首頁 - 餐廳列表")])],1)},P=[],A=n(561),S={components:{NavTabs:A.Z}},N=S,O=(0,d.Z)(N,x,P,!1,null,null,null),Z=O.exports,T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("form",{staticClass:"w-100",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit.apply(null,arguments)}}},[t._m(0),e("div",{staticClass:"form-label-group mb-2"},[e("label",{attrs:{for:"email"}},[t._v("email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"username",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),e("div",{staticClass:"form-label-group mb-3"},[e("label",{attrs:{for:"password"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),e("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit"}},[t._v(" Submit ")]),e("div",{staticClass:"text-center mb-3"},[e("p",[e("router-link",{attrs:{to:"/signup"}},[t._v(" Sigh Up ")])],1)]),e("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[t._v(" © 2017-2018 ")])])])},j=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center mb-4"},[e("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v(" Sign In ")])])}],E={data(){return{email:"",password:""}},methods:{handleSubmit(){console.log("handleSubmit",JSON.stringify({email:this.email,password:this.password}))}}},U=E,B=(0,d.Z)(U,T,j,!1,null,null,null),F=B.exports;r.ZP.use(g.ZP);const L=[{path:"/",name:"root",redirect:"/restaurants"},{path:"/signin",name:"sign-in",component:F},{path:"/signup",name:"sign-up",component:()=>n.e(529).then(n.bind(n,529))},{path:"/restaurants",name:"restaurants",component:Z},{path:"/restaurants/feeds",name:"restaurants-feeds",component:()=>n.e(791).then(n.bind(n,791))},{path:"/restaurants/top",name:"restaurants-top",component:()=>n.e(31).then(n.bind(n,31))},{path:"/users/top",name:"users-top",component:()=>n.e(410).then(n.bind(n,410))},{path:"*",name:"NotFound",component:k}],q=new g.ZP({linkExactActiveClass:"active",routes:L});var D=q;r.ZP.config.productionTip=!1,new r.ZP({router:D,render:t=>t(b)}).$mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,s){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],a=t[c][1],s=t[c][2];for(var o=!0,u=0;u<r.length;u++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(o=!1,s<i&&(i=s));if(o){t.splice(c--,1);var l=a();void 0!==l&&(e=l)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[r,a,s]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{31:"82d0d8f1",410:"6680391f",529:"8cdbdfde",791:"8d20c5ac"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".02bfecde.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="forum1231:";n.l=function(r,a,s,i){if(t[r])t[r].push(a);else{var o,u;if(void 0!==s)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+s){o=d;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",e+s),o.src=r),t[r]=[a];var f=function(e,n){o.onerror=o.onload=null,clearTimeout(p);var a=t[r];if(delete t[r],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,a){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var i=function(n){if(s.onerror=s.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=o,s.parentNode.removeChild(s),a(u)}};return s.onerror=s.onload=i,s.href=e,n?n.parentNode.insertBefore(s,n.nextSibling):document.head.appendChild(s),s},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===t||s===e))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],s=a.getAttribute("data-href");if(s===t||s===e)return a}},r=function(r){return new Promise((function(a,s){var i=n.miniCssF(r),o=n.p+i;if(e(i,o))return a();t(r,o,null,a,s)}))},a={143:0};n.f.miniCss=function(t,e){var n={791:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=r(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var s=new Promise((function(n,r){a=t[e]=[n,r]}));r.push(a[2]=s);var i=n.p+n.u(e),o=new Error,u=function(r){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",o.name="ChunkLoadError",o.type=s,o.request=i,a[1](o)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,s,i=r[0],o=r[1],u=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(u)var c=u(n)}for(e&&e(r);l<i.length;l++)s=i[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},r=self["webpackChunkforum1231"]=self["webpackChunkforum1231"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(354)}));r=n.O(r)})();
//# sourceMappingURL=app.fc86fa36.js.map