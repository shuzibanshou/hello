"use strict";(self["webpackChunkthe9art"]=self["webpackChunkthe9art"]||[]).push([[233],{7233:function(t,r,o){o.r(r),o.d(r,{default:function(){return l}});var a=function(){var t=this,r=t._self._c;return r("div",[r("Form",{ref:"formCustom",attrs:{model:t.formData,rules:t.rule,"label-width":140}},[r("FormItem",{attrs:{label:"邮箱",prop:"account"}},[r("Input",{attrs:{type:"text",placeholder:"请输入正确的邮箱，方便找回密码"},model:{value:t.formData.account,callback:function(r){t.$set(t.formData,"account",r)},expression:"formData.account"}})],1),r("FormItem",{attrs:{label:"密码",prop:"password"}},[r("Input",{attrs:{type:"password"},model:{value:t.formData.password,callback:function(r){t.$set(t.formData,"password",r)},expression:"formData.password"}})],1),r("FormItem",{attrs:{label:"确认密码",prop:"confirmPassword"}},[r("Input",{attrs:{type:"password"},model:{value:t.formData.confirmPassword,callback:function(r){t.$set(t.formData,"confirmPassword",r)},expression:"formData.confirmPassword"}})],1),r("FormItem",{attrs:{label:"steamID",prop:"steamid"}},[r("Input",{attrs:{type:"text",placeholder:"可选填，方便后续收取礼物"},model:{value:t.formData.steamid,callback:function(r){t.$set(t.formData,"steamid",r)},expression:"formData.steamid"}})],1),r("FormItem",[r("Button",{staticClass:"loginbtn",on:{click:function(r){return t.handleReset("formCustom")}}},[t._v(" 注 册 ")])],1),r("FormItem",{staticClass:"forget"},[r("span",{on:{click:t.gotoForgetPassword}},[t._v("忘记密码？")]),r("span",{staticClass:"register",on:{click:t.gotoLogin}},[t._v("登录")])])],1)],1)},e=[],s=o(2900),n=o(1836),c={name:"Register",data(){const t=(t,r,o)=>{const a=/^.{6,}$/;""===r?o(new Error("密码不能为空")):a.test(r)?o():o(new Error("请输入6位以上的密码"))},r=(t,r,o)=>{""===r?o(new Error("请再次输入密码")):r!==this.formData.password?o(new Error("两次密码不一样")):o()};return{formData:{account:"",password:"",confirmPassword:"",steamid:""},rule:{account:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{validator:t,required:!0,trigger:"blur"}],confirmPassword:[{validator:r,required:!0,trigger:"blur"}]},hasSencode:!1,countDown:60}},methods:{getVerificationCode(){if(!this.formData.account)return this.$Message.error("请输入邮箱"),!1;const t={account:this.formData.account};(0,s.Z3)(t).then((t=>{this.hasSencode=!0,this.$Message.success("发送成功"),this.theCountdown()}))},theCountdown(){const t=setInterval((r=>{this.countDown--,0===this.countDown&&(clearInterval(t),this.countDown=60,this.hasSencode=!1)}),1e3)},handleReset(t){this.$refs[t].validate((t=>{if(t){const t={account:this.formData.account,pwd:this.formData.password,repwd:this.formData.confirmPassword,steamid:this.formData.steamid};(0,s.YD)(t).then((t=>{this.$Message.success("注册成功"),(0,n.o4)(t.data.token),window.location.href="/Home"}))}else this.$Message.warning("请完整输入必填信息")}))},gotoForgetPassword(){this.$router.replace({path:"/forgetPassword"})},gotoLogin(){this.$router.replace({path:"/login"})}}},i=c,u=o(3736),d=(0,u.Z)(i,a,e,!1,null,"185fb850",null),l=d.exports},2900:function(t,r,o){o.d(r,{LI:function(){return c},YD:function(){return s},Z3:function(){return n},x4:function(){return e}});var a=o(6361);function e(t){return(0,a.Z)({url:"/user/login",method:"post",data:t})}function s(t){return(0,a.Z)({url:"/user/reg",method:"post",data:t})}function n(t){return(0,a.Z)({url:"/user/sendCode",method:"post",data:t})}function c(t){return(0,a.Z)({url:"/user/findPassword",method:"post",data:t})}}}]);
//# sourceMappingURL=233.c708b997.js.map