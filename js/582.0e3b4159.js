"use strict";(self["webpackChunkrujiayouxuan"]=self["webpackChunkrujiayouxuan"]||[]).push([[582],{5582:function(s,t,e){e.r(t),e.d(t,{default:function(){return m}});var a=function(){var s=this,t=s._self._c;return t("div",{staticClass:"main"},[t("div",{staticClass:"logintop"},[t("div",{staticClass:"logintop-left",on:{click:s.goBack}},[t("span",{staticClass:"iconfont icon-zuo"})]),t("div",{staticClass:"logintop-midd"},[s._v("会员登录")]),t("div",{staticClass:"logintop-right",on:{click:s.gotoReg}},[s._v("注册")])]),t("van-form",{on:{submit:s.onSubmit}},[t("van-field",{attrs:{name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"},{pattern:/^[a-z_$][0-9a-z_$]{3,9}$/i,message:"不能以数字开头 由数字字母_$组成 4-10位"}]},model:{value:s.username,callback:function(t){s.username=t},expression:"username"}}),t("van-field",{attrs:{type:"password",name:"userpwd",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"},{pattern:/^[0-9a-z]{5,11}$/i,message:"密码以数字字母组成 6-12位"}]},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",color:"#bd1a21"}},[s._v("登录")])],1)],1)],1)},i=[],o=e(7011),n=e(2932),r=e(3822),u={mixins:[n.Z],data(){return{username:"",password:""}},methods:{...(0,r.nv)(["getUserInfo"]),...(0,r.nv)("shoppingcar",["initList"]),async onSubmit(s){let{data:t}=await o.Z.query({username:s.username,userpwd:s.userpwd});t.length?(this.$toast.success("登录成功"),window.localStorage.setItem("userinfo",JSON.stringify(t[0])),await this.getUserInfo(),await this.initList(this.$store.state.userinfo.id),this.$router.go(-1)):this.$toast.fail("用户名或密码有误")},gotoReg(){this.$router.push("/register")},goBack(){this.$router.push("/home")}}},l=u,c=e(1001),d=(0,c.Z)(l,a,i,!1,null,"3e5d4714",null),m=d.exports},2932:function(s,t){t["Z"]={mounted(){this.$store.commit("isShowTabbar",!1)},destroyed(){this.$store.commit("isShowTabbar",!0)}}}}]);
//# sourceMappingURL=582.0e3b4159.js.map