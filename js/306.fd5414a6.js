"use strict";(self["webpackChunkrujiayouxuan"]=self["webpackChunkrujiayouxuan"]||[]).push([[306],{2306:function(t,s,i){i.r(s),i.d(s,{default:function(){return u}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main"},[s("div",{staticClass:"retbtn",on:{click:t.retClick}},[s("span",{staticClass:"iconfont icon-zuo"})]),t._l(t.list,(function(i){return s("div",{key:i.id,staticClass:"addresslist"},[s("div",{staticClass:"address",on:{click:function(s){return t.chooseClick(i)}}},[t._m(0,!0),s("div",{staticClass:"address-text"},[s("div",{staticClass:"name"},[t._v(" "+t._s(i.name)+" "),s("span",{staticClass:"phone"},[t._v(t._s(i.tel))])]),s("div",{staticClass:"detail"},[t._v(" "+t._s(i.province+i.city+i.county+i.addressDetail)+" ")])]),s("div",{staticClass:"iconyou"})]),s("div",{staticClass:"addressbtn"},[s("div",{staticClass:"addressbtn-left"},[s("van-checkbox",{attrs:{value:i.isDefault,"icon-size":"18px","checked-color":"#4b4a52"},on:{click:function(s){return t.changeDefault(i)}}},[t._v("默认地址")])],1),s("div",{staticClass:"addressbtn-right"},[s("div",{staticClass:"editbtn",on:{click:function(s){return t.edit(i)}}},[s("span",{staticClass:"iconfont icon-bianji"}),s("span",[t._v("编辑")])]),s("div",{staticClass:"delbtn",on:{click:function(s){return t.del(i)}}},[s("span",{staticClass:"iconfont icon-lajitong"}),s("span",[t._v("删除")])])])])])})),s("div",{staticClass:"addbtn",on:{click:t.gotoAddressEdit}},[t._v("新建收货地址")])],2)},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"iconleft"},[s("span",{staticClass:"iconfont icon-ditu_dingwei_o"})])}],n=i(2932),c=i(3822),d={mixins:[n.Z],data(){return{checked:!1}},computed:{...(0,c.rn)("address",["list"])},methods:{...(0,c.nv)("address",["initList","delList","updateList"]),...(0,c.OI)("address",["setChoose"]),retClick(){this.setChoose(),this.$router.go(-1)},chooseClick(t){this.setChoose(t),this.$router.go(-1)},gotoAddressEdit(){this.$router.push("/addressedit")},del(t){this.$dialog.confirm({title:"是否删除？"}).then((()=>{this.delList(t.id)})).catch((()=>{}))},edit(t){this.$router.push("/addressedit?id="+t.id)},changeDefault(t){t.isDefault?this.updateList({...t,isDefault:!1}).then((()=>{this.$toast("设置成功")})):this.updateList({...t,isDefault:!0}).then((()=>{this.$toast("设置成功")}))}},created(){this.initList(this.$store.state.userinfo.id)}},o=d,r=i(1001),l=(0,r.Z)(o,a,e,!1,null,"3cdcb6c2",null),u=l.exports},2932:function(t,s){s["Z"]={mounted(){this.$store.commit("isShowTabbar",!1)},destroyed(){this.$store.commit("isShowTabbar",!0)}}}}]);
//# sourceMappingURL=306.fd5414a6.js.map