webpackJsonp([5,73],{2:function(t,e,i){t.exports={default:i(3),__esModule:!0}},3:function(t,e,i){var a=i(4),s=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},47:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(2),n=a(s),r=i(146),l=a(r);e.default={data:function(){return{data:{},title:"",scroll:"",inputfile:"",sid:"",fileData:[],tempData:[],showInput:!0,hasChange:!1}},methods:{saveData:function(){var t=this;0===this.fileData.length?(this.$store.commit("uploadOhterPicData",{name:this.sid,val:""}),this.$store.commit("changeOhterPicStatu",{name:this.sid,val:!1})):(this.$store.commit("uploadOhterPicData",{name:this.sid,val:(0,n.default)(this.fileData)}),this.fileData.length===l.default[this.sid].num?this.$store.commit("changeOhterPicStatu",{name:this.sid,val:!0}):this.$store.commit("changeOhterPicStatu",{name:this.sid,val:!1})),this.$dialog(["保存成功","true"]),setTimeout(function(){t.$router.back()},2e3)},myChange:function(t){var e=this,i=t.target.files[0],a=["image/jpg","image/jpeg","image/png","image/gif"];if(i&&a.indexOf(i.type)>=0)if("undefined"!=typeof FileReader){var s=new FileReader;s.readAsDataURL(i),s.onload=function(){e.checkArry(e.fileData,this.result)?e.$dialog(["请不要重复上传同一张图片","text"]):(e.hasChange=!0,e.fileData.push(this.result))}}else this.$dialog(["您的浏览器版本过低无法预览","text"]);else this.$dialog("上传图片格式不对")},delThisImg:function(t){this.fileData.splice(t,1),this.hasChange=!0},limitImg:function(){this.fileData.length===this.data.num?this.showInput=!1:this.showInput=!0},checkArry:function(t,e){for(var i=t.length;i--;)if(t[i]===e)return!0;return!1}},watch:{fileData:"limitImg"},mounted:function(){this.sid=this.$route.params.param,this.data=l.default[this.sid];var t=this.$store.state.ohterPicDatas[this.sid];void 0!==t&&""!==t&&(this.fileData=JSON.parse(t))}}},146:function(t,e){t.exports={otherFile:{tit:"财力证明",num:"4",des:"如果提供房产证，需要基本信息页及盖章页各一张，共2张。如果提供机动车登记证书，需要正副本照片，需完整显示车辆登记信息及年检信息。"},salaryFile:{tit:"工资流水",num:"3",des:"本人银行卡正反面照片各一张，以及近3个月完整流水打印单或网银流水截屏。工资卡需显示代发工资项。"},personCreditFile:{tit:"个人征信报告",num:"2",des:"您可在中国人民银行征信中心进行查询（网址https://ipcrs.pbccrc.org.cn），并将查询结果拍照或者截图上传。"},socialSecurityFile:{tit:"社保",num:"3",des:"请上传连续3个月的社保/公积金网站截图，需完整显示本人姓名、身份证、缴费状态、缴费金额等关键信息"},creditCardFile:{tit:"信用卡账单",num:"3",des:"请上传用户本人信用卡正面照片及对应的近3 个月信用卡（电子或纸质）对账单照片"},workFile:{tit:"工作证明",num:"4",des:"本人当前的有效劳动合同/在职证明，从封面一页拍至最后一页。如果有工牌、名片的也可以同时上传，但必须完整显示单位信息及个人信息。"},marriageFile:{tit:"结婚证明",num:"2",des:"请上传结婚证照片或者两人户口本照片（同一户口本）"},businessLicenseFile:{tit:"营业执照",num:"4",des:"营业执照照片，必须清晰显示法人、成立时间、经营范围经营时间等关键信息。"},loanAgreementFile:{tit:"其它所有贷款协议/凭证",num:"5",des:"本人在其他金融机构申请借款所签署的协议或凭证证明。"}}},192:function(t,e,i){var a=i(1)(i(47),i(329),null,null);t.exports=a.exports},329:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("topComponent",{attrs:{title:t.data.tit}},[i("span",{staticClass:"save",attrs:{slot:"right"},on:{click:t.saveData},slot:"right"},[t._v("保存")])]),t._v(" "),i("p",{staticClass:"listTop"},[t._v(t._s(t.data.des))]),t._v(" "),i("ul",{staticClass:"uploadPic",attrs:{id:"setUploadWarp"}},[t._l(t.fileData,function(e,a){return i("li",{on:{click:function(e){t.delThisImg(a)}}},[i("img",{attrs:{src:e}})])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.showInput,expression:"showInput"}],staticClass:"upload-btn"},[i("label",[i("input",{attrs:{type:"file"},on:{change:t.myChange}})])])],2)],1)},staticRenderFns:[]}}});