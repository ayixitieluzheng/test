webpackJsonp([2,73],{2:function(e,t,a){e.exports={default:a(3),__esModule:!0}},3:function(e,t,a){var r=a(4),i=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},85:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),s=r(i),o=a(149),n=r(o);t.default={data:function(){return{data:{},knowShow:!1}},methods:{goMore:function(){this.$router.push("/user/borrowDetail/"+this.$route.params.id+"/more")},goReason:function(){this.$router.push("/user/borrowReason/"+this.$route.params.id)},goDeal:function(){this.$router.push("/user/dealList")},goRepay:function(){this.$router.push("/user/repayGo")},checkOperates:function(e,t){return e.indexOf(t)>-1}},computed:{nextRefundDate:function(){return void 0===this.data.nextRefundDate?107===this.data.status||207===this.data.status?"无":"待定":this.data.nextRefundDate}},mounted:function(){var e=this.$route.params.id;this.data=n.default.data,this.$store.commit("addBorrow",{id:e,val:(0,s.default)(this.data)})}}},149:function(e,t){e.exports={data:{applyAmount:12e5,applyTime:"2016-12-13 10:53:49",auditFiles:[],borrowFiles:[],borrowLimit:180,breachAmount:0,contactTime:"",createTime:"2016-12-13 10:53:49",id:1419,isOffline:0,modelId:7,operateUsers:[],operates:"",orderAudits:[{aduitUserRole:1,auditTime:"2016-12-13 10:55:37",auditUserId:191810000001,auditUserName:"管理员",result:1}],orderNo:"20161213000003",rcvedDepositAmt:0,refundAmount:0,remark:"",repayType:1,serviceCost:0,serviceCostFiles:[],serviceCostRate:0,snapshootInfo:"{'userCompany':{'address':'大大路','comName':'草根金服','createTime':'2016-04-22 10:17:57','id':376,'inTime':'2015-03-31','salary':1000.000,'sort':0,'tel':'0383819013311','type':'1','userId':191800180277},'userContacts':[{'address':'湖北','createTime':'2016-02-23 16:18:53','id':873,'mobileNum':'13814555555','name':'张三','platType':1,'relation':'二弟','sort':0,'userId':191800180277},{'address':'四川','createTime':'2016-02-23 16:18:53','id':874,'mobileNum':'1358888555','name':'四李','platType':1,'relation':'大哥','sort':0,'userId':191800180277}],'personCardFile':[{'createTime':'2016-08-11 20:03:08','filePath':'/192002/62/77/34/2016/08/08/06d1920e-f1fd-44f4-8217-2aae3c8c0220.jpg','fileSize':-1,'fileType':'undefined','id':4788,'refId':191800180277,'refType':101,'sort':0},{'createTime':'2016-08-11 20:03:08','filePath':'/192002/62/77/34/2016/08/08/06d1920e-f1fd-44f4-8217-2aae3c8c0220.jpg','fileSize':-1,'fileType':'undefined','id':4789,'refId':191800180277,'refType':101,'sort':0}],'salaryFile':[{'createTime':'2016-08-11 11:37:49','filePath':'/192002/62/77/34/2016/08/08/06d1920e-f1fd-44f4-8217-2aae3c8c0220.jpg','fileSize':444,'fileType':'jpg','id':4627,'refId':191800180277,'refType':102,'sort':0}],'personCreditFile':[{'createTime':'2016-08-10 11:01:02','filePath':'https://cgtzimage.b0.upaiyun.com/191805/85/24/99/2016/07/22/D07076EC-FD42-49AD-1470-6FE3D054D4F1.png','fileSize':4115,'fileType':'.png','id':4581,'refId':191800180277,'refType':103,'sort':0}],'marriageFile':[],'otherFile':[{'createTime':'2016-08-18 17:20:23','filePath':'http://www.dd.com/file.jpg','fileSize':411558411,'fileType':'.jpg','id':4895,'refId':191800180277,'refType':105,'sort':0},{'createTime':'2016-08-18 17:20:23','filePath':'http://www.dd.com/file.jpg','fileSize':22222,'fileType':'.jpg','id':4896,'refId':191800180277,'refType':105,'sort':0}],'socialSecurityFile':[],'creditCardFile':[],'workFile':[],'businessLicenseFile':[{'createTime':'2016-08-30 11:48:28','filePath':'/191805/85/24/99/2016/08/12/ee5302ae-893a-4131-8c7d-22d8eb5edc09.jpg','fileSize':170522,'fileType':'jpg','id':4803,'refId':191800180277,'refType':115,'sort':0},{'createTime':'2016-08-30 11:48:28','filePath':'/191805/85/24/99/2016/07/29/97B82D68-98A5-7242-C5FB-884670B842C3.jpeg','fileSize':98635,'fileType':'jpeg','id':4804,'refId':191800180277,'refType':115,'sort':0},{'createTime':'2016-08-30 11:48:28','filePath':'/191805/85/24/99/2016/07/29/090579D5-B46B-347D-73FA-94CDA92C6729.png','fileSize':57735,'fileType':'png','id':4805,'refId':191800180277,'refType':115,'sort':0}],'loanAgreementFile':[],'personFacePhoto':[],'personIdCardOcrPhoto':[{'createTime':'2016-07-13 14:10:19','filePath':'/191800/18/02/77/2016/07/13/bd2f3e4c-f8af-4237-9692-e05b36b97e77.jpg','fileSize':411558411,'fileType':'.jpg','id':3959,'refId':191800180277,'refType':118,'sort':0}],'personBankCardOcrPhoto':[{'createTime':'2016-07-18 16:58:47','filePath':'/191800/18/02/77/2016/07/18/e781cb6e-b842-431f-8e4c-80610e6fb6a2.jpg','fileSize':411448411,'fileType':'.jpg','id':4092,'refId':191800180277,'refType':119,'sort':0}]}",sort:0,status:111,statusStr:"审核中",bankCard:"622012347890456711",useFor:"",usedDepositAmt:0,userId:191800180277,userInfo:{address:"1111",authMobile:1,authOcrIdCard:1,authOcrIdCardTime:"2016-11-07 16:51:35",authRongMobile:2,authRongTime:"2016-07-30 10:19:27",authTaobao:1,createTime:"2016-03-18 16:58:19",education:"",idCardIssuingAuthority:"",idCardVisa:"",identityStatus:1,levelId:1,levelName:"学徒",levelScore:50,levelTitle:"白手起家",levelValue:1,liveTime:"2014-01-01",marriage:1,orderAmountTotal:0,orderApply:1,orderBreachRepay:0,orderEnd:0,orderHasRepay:0,orderLeftTotal:0,orderNum:1,orderRepay:0,personCard:"420502198301286538",sex:1,shortUrl:"bcAJkJn",sort:0,userId:191800180277,userMobile:"15012345678",userRealName:"张明月"},userMobile:"15012345678",userRealName:"张明月"},success:!0}},233:function(e,t,a){var r=a(1)(a(85),a(259),null,null);e.exports=r.exports},259:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("topComponent",{attrs:{title:"借款详情"}},[a("span",{staticClass:"save",attrs:{slot:"right"},on:{click:function(t){e.$router.push("/user/repayRecord")}},slot:"right"},[e._v("还款记录")])]),e._v(" "),a("div",{staticClass:"borrowInfoTit"},[2===e.data.repayType?[a("dl",[e._m(0),e._v(" "),a("dd",[e._v("项目状态"),a("span",{staticClass:"blue"},[e._v(e._s(e.data.statusStr))])])]),e._v(" "),a("ul",[a("li",[a("b",[e._v(e._s(e.data.interestAmount?e.data.interestAmount:"待定"))]),e._v("利息金额(元)")]),e._v(" "),a("li",[a("b",[e._v(e._s(e.nextRefundDate))]),e._v("还款日")]),e._v(" "),a("li",[a("b",[e._v(e._s(e.data.interestAmount?e.data.interestAmount:"待定"))]),e._v("授信金额(元)"),a("i",{staticClass:"queryIcon",on:{click:function(t){e.alertKnow("sxje")}}},[e._v("?")])])])]:[a("dl",[e._m(1),e._v(" "),a("dd",[e._v("项目状态"),a("span",{staticClass:"blue"},[e._v(e._s(e.data.statusStr))])])]),e._v(" "),a("ul",[a("li",[a("b",[e._v(e._s(e.data.nextAmountNeed?e.data.nextAmountNeed:"待定"))]),e._v("应还金额(元）")]),e._v(" "),a("li",[a("b",[e._v(e._s(e.nextRefundDate))]),e._v("下一个还款日")]),e._v(" "),a("li",[a("b",[e._v(e._s(e.data.borrowAmount?e.data.borrowAmount:"待定"))]),e._v("授信金额(元)"),a("i",{staticClass:"queryIcon",on:{click:function(t){e.alertKnow("sxje")}}},[e._v("?")])])])]],2),e._v(" "),a("ul",{staticClass:"listCom list-arrow list-mini no-top"},[a("li",{on:{click:e.goMore}},[e._v("更多详情")])]),e._v(" "),""===e.data.operates?a("ul",{staticClass:"listCom list-arrow list-mini no-top mt20"},[e.checkOperates(e.data.operates,"failReason")?a("li",{on:{click:e.goReason}},[e._v("查看理由")]):e._e(),e._v(" "),e.checkOperates(e.data.operates,"view_contact")?a("li",{on:{click:e.goDeal}},[e._v("查看合同")]):e._e(),e._v(" "),e.checkOperates(e.data.operates,"repay")?a("li",{on:{click:e.goRepay}},[e._v("还款")]):e._e()]):e._e(),e._v(" "),e.knowShow?a("alertKnow",{attrs:{title:e.knowTit,content:e.knowCon},on:{goHide:function(t){e.knowShow=!e.knowShow}}}):e._e()],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("dt",[e._v("还款方式"),a("span",{staticClass:"col3"},[e._v("一次性还本付息")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("dt",[e._v("还款方式"),a("span",{staticClass:"col3"},[e._v("等额本息")])])}]}}});