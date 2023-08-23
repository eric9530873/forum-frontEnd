"use strict";(self["webpackChunkforum1231"]=self["webpackChunkforum1231"]||[]).push([[609],{2189:function(t,a,e){e.d(a,{Z:function(){return o}});var r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"mb-3"},[a("h1",[t._v("餐廳後台")]),a("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},s=[],n={name:"AdminNav"},u=n,i=e(1001),l=(0,i.Z)(u,r,s,!1,null,null,null),o=l.exports},3609:function(t,a,e){e.r(a),e.d(a,{default:function(){return g}});var r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("router-link",{staticClass:"btn btn-primary mb-4",attrs:{to:"/admin/restaurants/new"}},[t._v(" New Restaurant ")]),a("AdminRestaurantsTable")],1)},s=[],n=e(2189),u=function(){var t=this,a=t._self._c;return a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.restaurants,(function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),a("td",[t._v(t._s(e.Category?e.Category.name:"未分類"))]),a("td",[t._v(t._s(e.name))]),a("td",{staticClass:"d-flex justify-content-between"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant",params:{id:e.id}}}},[t._v("Show")]),a("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant-edit",params:{id:e.id}}}},[t._v("Edit")]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.deleteRestaurant(e.id)}}},[t._v(" Delete ")])],1)])})),0)])},i=[function(){var t=this,a=t._self._c;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Category")]),a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col",width:"300"}},[t._v("操作")])])])}],l=e(4711),o=e(6163),d={data(){return{restaurants:[]}},methods:{async fetchRestaurants(){try{const t=await l.Z.restaurants.get();console.log(t),this.restaurants=t.data.data.restaurants}catch(t){o.F.fire({icon:"error",title:"無法取得"})}},async deleteRestaurant(t){try{const a=await l.Z.restaurants.deleteRestaurant({restaurantId:t});if("success"!==a.data.status)throw new Error(a.data.message);this.restaurants=this.restaurants.filter((a=>a.id!==t))}catch(a){o.F.fire({icon:"error",title:"無法刪除"})}}},created(){this.fetchRestaurants()}},c=d,m=e(1001),f=(0,m.Z)(c,u,i,!1,null,null,null),v=f.exports,_={components:{AdminNav:n.Z,AdminRestaurantsTable:v}},h=_,p=(0,m.Z)(h,r,s,!1,null,null,null),g=p.exports},4711:function(t,a,e){var r=e(6163);a["Z"]={categories:{get(){return r.l.get("admin/categories")},delete({categoryId:t}){return r.l["delete"](`admin/categories/${t}`)},upDate({categoryId:t,name:a}){return r.l.put(`admin/categories/${t}`,{name:a})},create({name:t}){return r.l.post("/admin/categories",{name:t})}},restaurants:{create({formData:t}){return r.l.post("admin/restaurants",t)},get(){return r.l.get("admin/restaurants")},getDetail({restaurantId:t}){return r.l.get(`admin/restaurants/${t}`)},upDate({formData:t,restaurantId:a}){return r.l.put(`admin/restaurants/${a}`,t)},deleteRestaurant({restaurantId:t}){return r.l["delete"](`admin/restaurants/${t}`)}},users:{get(){return r.l.get("admin/users")},upDate({userId:t,isAdmin:a}){return r.l.put(`admin/users/${t}`,{isAdmin:a})}}}}}]);
//# sourceMappingURL=609.de4aee07.js.map