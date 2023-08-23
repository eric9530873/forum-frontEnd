"use strict";(self["webpackChunkforum1231"]=self["webpackChunkforum1231"]||[]).push([[878],{5878:function(t,r,s){s.r(r),s.d(r,{default:function(){return A}});var e=function(){var t=this,r=t._self._c;return r("div",{staticClass:"main"},[r("div",{staticClass:"album py-5"},[r("div",{staticClass:"container"},[r("UserProfileCard",{key:t.profile.id,attrs:{initialprofile:t.profile,initialisfollowed:t.isFollowed}}),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("UserFollowingsCard",{attrs:{profile:t.profile}}),r("br"),r("UserFollowersCard",{attrs:{profile:t.profile}})],1),r("div",{staticClass:"col-md-8"},[r("UserCommentsCard",{attrs:{profile:t.profile}}),r("br"),r("UserFavoritedRestaurantsCard",{attrs:{profile:t.profile}})],1)])],1)])])},i=[],l=function(){var t=this,r=t._self._c;return r("div",{staticClass:"card mb-3"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-md-6"},[r("img",{attrs:{src:t.profile.image,width:"300px",height:"300px"}})]),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.profile.name))]),r("p",{staticClass:"card-text"},[t._v(t._s(t.profile.email))]),r("ul",{staticClass:"list-unstyled list-inline"},[r("li",[r("strong",[t._v(t._s(t.profile.Comments.length?t.profile.Comments.length:"0"))]),t._v(" 已評論餐廳 ")]),r("li",[r("strong",[t._v(t._s(t.profile.FavoritedRestaurants.length?t.profile.FavoritedRestaurants.length:"0"))]),t._v(" 收藏的餐廳 ")]),r("li",[r("strong",[t._v(t._s(t.profile.Followers.length?t.profile.Followers.length:"0"))]),t._v(" followings (追蹤者) ")]),r("li",[r("strong",[t._v(t._s(t.profile.Followings.length?t.profile.Followings.length:"0"))]),t._v(" followers (追隨者) ")])]),r("p"),[this.currentUser.id===this.profile.id?r("div",{staticStyle:{display:"contents"}},[r("router-link",{staticClass:"btn btn-primary mb-4",attrs:{to:{name:"user-edit",params:{id:t.profile.id}}}},[t._v(" EDIT ")])],1):r("form",{staticStyle:{display:"contents"}},[t.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"submit"},on:{click:function(r){return t.deleteFollow(t.profile.id)}}},[t._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(r){return t.addFollow(t.profile.id)}}},[t._v(" 追蹤 ")])])],r("p")],2)])])])},a=[],o=s(8390),n=s(629),d=s(6163),c={name:"UserProfileCard",props:{initialprofile:{type:Object,require:!0},initialisfollowed:{type:Boolean,require:!0}},data(){return{profile:this.initialprofile,isFollowed:this.initialisfollowed}},methods:{async deleteFollow(){try{const t=await o.Z.deleteFollowing({userId:this.profile.id});if("error"===t.data.status)throw new Error(t.data.message);this.profile={...this.profile,isFollowed:!1},this.isFollowed=!1}catch(t){d.F.fire({icon:"error",title:"無法取消追蹤"})}},async addFollow(){try{const t=await o.Z.addFollowing({userId:this.profile.id});if("error"===t.data.status)throw new Error(t.data.message);this.profile={...this.profile,isFollowed:!0},this.isFollowed=!0}catch(t){d.F.fire({icon:"error",title:"無法追蹤"})}}},computed:{...(0,n.rn)(["currentUser"])}},f=c,p=s(1001),u=(0,p.Z)(f,l,a,!1,null,null,null),h=u.exports,v=function(){var t=this,r=t._self._c;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[t._v(t._s(t.profile.Followers.length?t.profile.Followers.length:"0"))]),t._v(" followers (追蹤者) ")]),r("div",{staticClass:"card-body"},t._l(t.profile.Followers,(function(t){return r("a",{key:t.id,attrs:{href:"/users/11"}},[r("img",{staticClass:"avatar",attrs:{src:t.image,width:"60",height:"60"}})])})),0)])},m=[],C={name:"UserFollowersCard",props:{profile:{type:Object,require:!0}}},g=C,w=(0,p.Z)(g,v,m,!1,null,null,null),_=w.exports,F=function(){var t=this,r=t._self._c;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[t._v(t._s(t.profile.Followings.length?t.profile.Followings.length:"0"))]),t._v(" followings (追蹤者) ")]),r("div",{staticClass:"card-body"},t._l(t.profile.Followings,(function(t){return r("a",{key:t.id,attrs:{href:"/users/11"}},[r("img",{staticClass:"avatar",attrs:{src:t.image,width:"60",height:"60"}})])})),0)])},y=[],b={name:"UserFollowingCard",props:{profile:{type:Object,require:!0}}},U=b,k=(0,p.Z)(U,F,y,!1,null,null,null),x=k.exports,R=function(){var t=this,r=t._self._c;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[t._v(t._s(t.profile.Comments.length?t.profile.Comments.length:"0"))]),t._v(" 已評論餐廳 ")]),r("div",{staticClass:"card-body"},t._l(t.profile.Comments,(function(t){return r("a",{key:t.id,attrs:{href:"/restaurants/231"}},[r("img",{staticClass:"avatar",attrs:{src:t.Restaurant.image,width:"60",height:"60"}})])})),0)])},Z=[],q={name:"UserCommentsCard",props:{profile:{type:Object,require:!0}}},P=q,j=(0,p.Z)(P,R,Z,!1,null,null,null),I=j.exports,O=function(){var t=this,r=t._self._c;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[t._v(t._s(t.profile.FavoritedRestaurants.length?t.profile.FavoritedRestaurants.length:"0"))]),t._v(" 收藏的餐廳 ")]),r("div",{staticClass:"card-body"},t._l(t.profile.FavoritedRestaurants,(function(t){return r("a",{key:t.id,attrs:{href:"/restaurants/231"}},[r("img",{staticClass:"avatar",attrs:{src:t.image,width:"60",height:"60"}})])})),0)])},E=[],S={name:"UserFavoritedCard",props:{profile:{type:Object,require:!0}}},B=S,D=(0,p.Z)(B,O,E,!1,null,null,null),M=D.exports,T={name:"UserMain",components:{UserProfileCard:h,UserFollowersCard:_,UserFollowingsCard:x,UserCommentsCard:I,UserFavoritedRestaurantsCard:M},data(){return{profile:{},isFollowed:""}},methods:{async fetchProfile(t){try{const r=await o.Z.get(t);this.profile=r.data.data,this.isFollowed=r.data.data.isFollowed}catch(r){d.F.fire({icon:"error",title:"無法取得"})}}},created(){const{id:t}=this.$route.params;this.fetchProfile({userId:t})},computed:{...(0,n.rn)(["currentUser"])},beforeRouteUpdate(t,r,s){const{id:e}=t.params;this.fetchProfile({userId:e}),s()}},$=T,z=(0,p.Z)($,e,i,!1,null,null,null),A=z.exports}}]);
//# sourceMappingURL=878.1d8f7a83.js.map