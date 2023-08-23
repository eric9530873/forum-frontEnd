"use strict";(self["webpackChunkforum1231"]=self["webpackChunkforum1231"]||[]).push([[52],{2189:function(t,e,r){r.d(e,{Z:function(){return o}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("h1",[t._v("餐廳後台")]),e("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),e("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),e("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},a=[],n={name:"AdminNav"},i=n,u=r(1001),d=(0,u.Z)(i,s,a,!1,null,null,null),o=d.exports},7430:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("AdminNav"),e("table",{staticClass:"table"},[t._m(0),t._l(t.users,(function(r){return e("tbody",{key:r.id},[e("tr",[e("th",{attrs:{scope:"row"}},[t._v(" 1 ")]),e("td",[t._v(t._s(r.email))]),e("td",[t._v(t._s(r.isAdmin?"admin":"user"))]),e("td",[t.currentUser.id!==r.id?e("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.addAdmin({userId:r.id,isAdmin:r.isAdmin})}}},[t._v(" "+t._s(r.isAdmin?"set as user":"set as admin")+" ")]):t._e()])])])}))],2)],1)},a=[function(){var t=this,e=t._self._c;return e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v(" # ")]),e("th",{attrs:{scope:"col"}},[t._v(" Email ")]),e("th",{attrs:{scope:"col"}},[t._v(" Role ")]),e("th",{attrs:{scope:"col",width:"140"}},[t._v(" Action ")])])])}],n=r(2189),i=r(4711),u=r(6163),d=r(629),o={name:"AdminUsers",components:{AdminNav:n.Z},data(){return{users:[]}},methods:{async fetchUsers(){try{const t=await i.Z.users.get();if(console.log(t),"error"===t.data.status)throw new Error(t.data.message);this.users=t.data.data}catch(t){u.F.fire({icon:"error",title:"無法取得使用者資料"})}},async addAdmin({userId:t,isAdmin:e}){try{const r=await i.Z.users.upDate({userId:t,isAdmin:(!e).toString()});if("error"===r.data.status)throw new Error(r.data.message);this.users=this.users.map((r=>r.id===t?{...r,isAdmin:!e}:r))}catch(r){u.F.fire({icon:"error",title:"無法變更管理員"})}}},created(){this.fetchUsers()},computed:{...(0,d.rn)(["currentUser"])}},c=o,l=r(1001),m=(0,l.Z)(c,s,a,!1,null,null,null),f=m.exports},4711:function(t,e,r){var s=r(6163);e["Z"]={categories:{get(){return s.l.get("admin/categories")},delete({categoryId:t}){return s.l["delete"](`admin/categories/${t}`)},upDate({categoryId:t,name:e}){return s.l.put(`admin/categories/${t}`,{name:e})},create({name:t}){return s.l.post("/admin/categories",{name:t})}},restaurants:{create({formData:t}){return s.l.post("admin/restaurants",t)},get(){return s.l.get("admin/restaurants")},getDetail({restaurantId:t}){return s.l.get(`admin/restaurants/${t}`)},upDate({formData:t,restaurantId:e}){return s.l.put(`admin/restaurants/${e}`,t)},deleteRestaurant({restaurantId:t}){return s.l["delete"](`admin/restaurants/${t}`)}},users:{get(){return s.l.get("admin/users")},upDate({userId:t,isAdmin:e}){return s.l.put(`admin/users/${t}`,{isAdmin:e})}}}}}]);
//# sourceMappingURL=52.95ffc9bc.js.map