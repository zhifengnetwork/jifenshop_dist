webpackJsonp([6],{"0i+s":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("zEW2"),n=e("Fd2+"),o={name:"vip",data:function(){return{checked:!0,data:"",user_info:"",radio:"0",pwd:""}},components:{TopHeader:s.a},mounted:function(){this.requestData()},methods:{balance:function(){this.checked=!this.checked},requestData:function(){var t=this;this.$axios.get("user/member_card",{params:{token:t.$store.state.token}}).then(function(a){console.log(a.data),t.data=a.data.data,console.log(t.data)}).catch(function(t){console.log(t)}),this.$axios.get("home/get_user_info",{params:{token:t.$store.state.token}}).then(function(a){console.log(a.data),t.user_info=a.data.data,console.log(t.user_info)}).catch(function(t){console.log(t)})},buy:function(){var t=null;if("0"==this.radio&&""==this.pwd)return Object(n.f)("请输入支付密码"),!1;switch(this.radio){case"0":t=1;break;case"1":t=2}this.$axios.post("user/member_pay",{token:this.$store.state.token,type:t,pwd:this.pwd}).then(function(t){1==t.data.status&&n.f.success("购买成功"),console.log(t.data)}).catch(function(t){console.log(t)})}}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"vip"},[e("TopHeader",{attrs:{"custom-title":"确认订单","custom-fixed":""}},[e("i",{staticClass:"iconfont iconfanhui",attrs:{slot:"backBtn"},slot:"backBtn"})]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card_title"},[t._v("\n                臻致康健康商城\n            ")]),t._v(" "),e("div",{staticClass:"card_code"},[t._v("\n                NO:"+t._s(t.data.number)+"\n            ")])]),t._v(" "),e("div",{staticClass:"balance"},[e("van-radio-group",{model:{value:t.radio,callback:function(a){t.radio=a},expression:"radio"}},[e("van-cell-group",[e("van-cell",{attrs:{title:"余额支付 ￥"+t.user_info.money,clickable:""},on:{click:function(a){t.radio="0"}}},[e("van-radio",{attrs:{slot:"right-icon",name:"0"},slot:"right-icon"})],1),t._v(" "),e("van-cell",{attrs:{title:"微信支付",clickable:""},on:{click:function(a){t.radio="1"}}},[e("van-radio",{attrs:{slot:"right-icon",name:"1"},slot:"right-icon"})],1)],1)],1)],1),t._v(" "),0==t.radio?e("div",{staticClass:"password"},[e("van-cell-group",[e("van-field",{attrs:{placeholder:"请输入支付密码",type:"password"},model:{value:t.pwd,callback:function(a){t.pwd=a},expression:"pwd"}})],1)],1):t._e(),t._v(" "),e("div",{staticClass:"menu"},[e("p",{staticClass:"menu_item"},[t._v("\n                实付款"),e("span",{staticClass:"menu_text"},[t._v("￥"),e("b",{staticClass:"menu_price"},[t._v(t._s(t.data.money))])])]),t._v(" "),e("p",{staticClass:"menu_item",on:{click:t.buy}},[t._v("\n                立即购买\n            ")])])],1)},staticRenderFns:[]};var c=e("VU/8")(o,i,!1,function(t){e("LXKw")},"data-v-1003fc94",null);a.default=c.exports},LXKw:function(t,a){}});
//# sourceMappingURL=6.3aa165446d2156376fbc.js.map