webpackJsonp([2],{HDl9:function(t,a){},N3qF:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={name:"payment",data:function(){return{data:""}},components:{DataHeader:s("zEW2").a},mounted:function(){this.requestData()},methods:{requestData:function(){var t=this;this.$axios.get("home/get_user_info",{params:{token:t.$store.state.token}}).then(function(a){console.log(a),1==a.data.status&&(t.data=a.data.data),console.log(t.data)}).catch(function(t){console.log(t)})}}},i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"data_wrap"},[s("Data-Header",{attrs:{"custom-title":"个人资料","custom-fixed":""}},[s("i",{staticClass:"iconfont iconfanhui",attrs:{slot:"backBtn"},slot:"backBtn"})]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"nom_wrap"},[0==t.data.pwd?s("router-link",{staticClass:"my_look",attrs:{to:"/user/modifyUserName"}},[s("div",{staticClass:"item_wrap"},[s("div",{staticClass:"text"},[t._v("设置支付密码")]),t._v(" "),s("div",{staticClass:"name_wrap"},[s("i",{staticClass:"iconfont iconyou"})])])]):t._e(),t._v(" "),s("router-link",{staticClass:"my_look",attrs:{to:"/user/paymentEdit"}},[s("div",{staticClass:"item_wrap"},[s("div",{staticClass:"text"},[t._v("修改支付密码")]),t._v(" "),s("div",{staticClass:"name_wrap"},[s("i",{staticClass:"iconfont iconyou"})])])]),t._v(" "),1==t.data.pwd?s("router-link",{staticClass:"my_look",attrs:{to:"/user/paymentReset"}},[s("div",{staticClass:"item_wrap"},[s("div",{staticClass:"text"},[t._v("重置支付密码")]),t._v(" "),s("div",{staticClass:"name_wrap"},[s("i",{staticClass:"iconfont iconyou"})])])]):t._e()],1)])],1)},staticRenderFns:[]};var o=s("VU/8")(e,i,!1,function(t){s("HDl9")},"data-v-7e8e01c2",null);a.default=o.exports}});
//# sourceMappingURL=2.1192b8dea15d81f2d5be.js.map