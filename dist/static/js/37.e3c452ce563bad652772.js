webpackJsonp([37,73],{82:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{name:"",pwd:"",code:"",showPwd:!0,canvas:{}}},methods:{logIn:function(){/^[1][3578][0-9]{9}$/.test(this.name)===!1?this.$dialog("帐号不正确"):/^[\d\D]{6,12}$/.test(this.pwd)===!1?this.$dialog("密码不正确"):this.code.toUpperCase()!==this.canvasCode.codeNums.toUpperCase()?this.$dialog("验证码不正确"):this.$router.push("/loan")},goCancel:function(){this.$router.push("/loan")},sendCode:function(t){this.code=t}}}},230:function(t,e,o){var s=o(1)(o(82),o(312),null,null);t.exports=s.exports},312:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container bgF"},[o("topComponent",{attrs:{title:"登录",showLeft:!1}},[o("span",{staticClass:"back",attrs:{slot:"left"},on:{click:t.goCancel},slot:"left"},[t._v("取消")])]),t._v(" "),o("h2",{staticClass:"logoIcon"},[t._v(t._s(t.appName))]),t._v(" "),o("ul",{staticClass:"formCom form-login form-mini"},[o("li",{staticClass:"icon-clear"},[o("label",[o("span",[t._v("账号")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.name,expression:"name",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"请输入手机号"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),o("i",{on:{click:function(e){t.name=""}}})])]),t._v(" "),o("li",{class:[{"icon-eye1":t.showPwd},{"icon-eye2":!t.showPwd}]},[o("label",[o("span",[t._v("密码")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.pwd,expression:"pwd",modifiers:{trim:!0}}],attrs:{type:t.showPwd?"password":"text",placeholder:"请输入6-12位密码"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),o("i",{on:{click:function(e){t.showPwd=!t.showPwd}}})])]),t._v(" "),o("li",[o("canvasCode",{on:{codeHasChange:t.sendCode}})],1)]),t._v(" "),o("div",{staticClass:"btnWarp"},[o("span",{staticClass:"subBtn",on:{click:t.logIn}},[t._v("登录")])]),t._v(" "),o("div",{staticClass:"forgetWarp"},[o("span",{staticClass:"col6",on:{click:function(e){t.$router.push("/reg")}}},[t._v("马上注册")]),t._v(" "),o("span",{staticClass:"fr col6",on:{click:function(e){t.$router.push("/forget")}}},[t._v("忘记密码？")])])],1)},staticRenderFns:[]}}});