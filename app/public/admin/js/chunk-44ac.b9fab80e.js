(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-44ac"],{P14b:function(e,t,o){"use strict";o.d(t,"a",function(){return i});var s=o("t3Un");function i(e,t){var o=new FormData;return o.append("file",t,e),Object(s.a)({url:"/upload/image",method:"post",headers:{"Content-Type":"multipart/form-data"},data:o})}},ZAAW:function(e,t,o){"use strict";o.d(t,"c",function(){return i}),o.d(t,"e",function(){return n}),o.d(t,"d",function(){return a}),o.d(t,"b",function(){return r}),o.d(t,"a",function(){return l}),o.d(t,"f",function(){return c});var s=o("t3Un");function i(e,t){return Object(s.a)({url:"/model/"+e,method:"get",params:t})}function n(e){return Object(s.a)({url:"/region",method:"get",params:{parent_id:e}})}function a(e,t){return Object(s.a)({url:"/model/"+e+"/"+t,method:"get"})}function r(e,t){return Object(s.a)({url:"/model/"+e+"/"+t,method:"delete"})}function l(e,t){return Object(s.a)({url:"/model/"+e,method:"post",data:t})}function c(e,t,o){return Object(s.a)({url:"/model/"+e+"/"+t,method:"put",data:o})}},ajzM:function(e,t,o){"use strict";var s=o("fnNZ");o.n(s).a},fnNZ:function(e,t,o){},rlfi:function(e,t,o){"use strict";o.r(t);var s=o("cLjf"),i=o.n(s),n=o("hDQ3"),a=o.n(n),r=o("rerW"),l=o.n(r),c=o("ZAAW"),p={},m={name:"SystemConfig",components:{Croppa:o("Hy6Q").a},data:function(){return{uploadURL:"/admin/upload/image",activeName:"1",region:[{region_name:"中国",region_id:1,all:{region_name:"中国",region_id:1},cities:[]}],regionProps:{value:"all",label:"region_name",children:"cities"},shop:{shopID:"",_region:[],sender:"",shopName:"",shopTitle:"",shopDescribe:"",shopKeyWord:"",location:"",completeAddress:"",serviceQQ:"",serviceEmail:"",serviceCall:"",shopLogo:""},baseConfig:{isClose:!1,closeReason:"",isRegister:!1,ICPNO:"",marketPriceRatio:"",consumptionPointsName:"",integralConversionRatio:"",integralPaymentRatio:"",shopNumberPrefix:"",isCommentReviewed:!1,registerPresentExp:""}}},methods:{handleItemChange:function(e){var t=e[e.length-1].region_id;if(!p[t]){var o=this.getDataIndex(Number(t),this.region);if(o){if(p[t]=o,o.cities&&o.cities.length>0)return;Object(c.e)(t).then(function(e){e.result.length>0&&(o.cities=e.result)})}}},getDataIndex:function(e,t){var o=!0,s=!1,i=void 0;try{for(var n,a=l()(t);!(o=(n=a.next()).done);o=!0){var r=n.value;if(r.region_id==e)return r;if(r.cities&&r.cities.length>0){var c=this.getDataIndex(e,r.cities);if(c)return c}}}catch(e){s=!0,i=e}finally{try{!o&&a.return&&a.return()}finally{if(s)throw i}}},saveData:function(){var e=this;this.loading=!0,this.shop.location=this.shop._region[0].region_name+this.shop._region[1].region_name+this.shop._region[2].region_name+this.shop._region[3].region_name,Object(c.f)("shopConfig",this.shop.shopID,this.form).then(function(t){e.$notify({title:"成功",message:t.msg,type:"success",duration:2e3}),e.loading=!1}).catch(function(t){e.loading=!1,console.log(t)})},onSubmitConfig:function(){},onSubmit:function(){var e=this;return a()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.shopLogo.upload();case 2:t.sent&&e.$refs.shop.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.saveData()});case 4:case"end":return t.stop()}},t,e)}))()},handleAvatarSuccess:function(e,t){e.success?this.shop.shopLogo=e.result.docUrl:this.$message({message:e.msg,type:"error"})},beforeImgUpload:function(e){var t=/(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(e.type),o=e.size/1024/1024<2;return t||this.$message.error("上传图片只能是JPG/PNG/GIF格式!"),o||this.$message.error("上传图片大小不能超过 2MB!"),t&&o}}},u=(o("ajzM"),o("ZrdR")),f=Object(u.a)(m,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tab-container"},[o("el-tabs",{staticStyle:{"margin-top":"15px"},attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[o("el-tab-pane",{attrs:{label:"基本设置",name:"1"}},[o("keep-alive",[o("el-form",{ref:"baseConfig",staticStyle:{width:"600px"},attrs:{model:e.baseConfig,"label-width":"160px"}},[o("el-form-item",{attrs:{label:"关闭网站"}},[o("el-switch",{model:{value:e.baseConfig.isClose,callback:function(t){e.$set(e.baseConfig,"isClose",t)},expression:"baseConfig.isClose"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"关闭原因"}},[o("el-input",{attrs:{type:"textarea"},model:{value:e.baseConfig.closeReason,callback:function(t){e.$set(e.baseConfig,"closeReason",t)},expression:"baseConfig.closeReason"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"关闭注册"}},[o("el-switch",{model:{value:e.baseConfig.isRegister,callback:function(t){e.$set(e.baseConfig,"isRegister",t)},expression:"baseConfig.isRegister"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"ICP备案证书号"}},[o("el-input",{model:{value:e.baseConfig.ICPNO,callback:function(t){e.$set(e.baseConfig,"ICPNO",t)},expression:"baseConfig.ICPNO"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"市场价格比例"}},[o("el-input",{model:{value:e.baseConfig.marketPriceRatio,callback:function(t){e.$set(e.baseConfig,"marketPriceRatio",t)},expression:"baseConfig.marketPriceRatio"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"消费积分名称"}},[o("el-input",{model:{value:e.baseConfig.consumptionPointsName,callback:function(t){e.$set(e.baseConfig,"consumptionPointsName",t)},expression:"baseConfig.consumptionPointsName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"积分换算比例"}},[o("el-input",{model:{value:e.baseConfig.integralConversionRatio,callback:function(t){e.$set(e.baseConfig,"integralConversionRatio",t)},expression:"baseConfig.integralConversionRatio"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"积分支付比例"}},[o("el-input",{model:{value:e.baseConfig.integralPaymentRatio,callback:function(t){e.$set(e.baseConfig,"integralPaymentRatio",t)},expression:"baseConfig.integralPaymentRatio"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"商品货号前缀"}},[o("el-input",{model:{value:e.baseConfig.shopNumberPrefix,callback:function(t){e.$set(e.baseConfig,"shopNumberPrefix",t)},expression:"baseConfig.shopNumberPrefix"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"用户评论是否需要审核"}},[o("el-switch",{model:{value:e.baseConfig.isCommentReviewed,callback:function(t){e.$set(e.baseConfig,"isCommentReviewed",t)},expression:"baseConfig.isCommentReviewed"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"会员注册赠送积分"}},[o("el-input",{model:{value:e.baseConfig.registerPresentExp,callback:function(t){e.$set(e.baseConfig,"registerPresentExp",t)},expression:"baseConfig.registerPresentExp"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitConfig}},[e._v("保存")])],1)],1)],1)],1),e._v(" "),o("el-tab-pane",{attrs:{label:"商店信息",name:"2"}},[o("keep-alive",[o("el-form",{ref:"shop",staticStyle:{width:"600px"},attrs:{model:e.shop,"label-width":"160px"}},[o("el-form-item",{attrs:{label:"寄件人姓名"}},[o("el-input",{model:{value:e.shop.sender,callback:function(t){e.$set(e.shop,"sender",t)},expression:"shop.sender"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"商店名称"}},[o("el-input",{model:{value:e.shop.shopName,callback:function(t){e.$set(e.shop,"shopName",t)},expression:"shop.shopName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"商店标题"}},[o("el-input",{attrs:{placeholder:"商店的标题将显示在浏览器的标题栏"},model:{value:e.shop.shopTitle,callback:function(t){e.$set(e.shop,"shopTitle",t)},expression:"shop.shopTitle"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"商店描述"}},[o("el-input",{model:{value:e.shop.shopDescribe,callback:function(t){e.$set(e.shop,"shopDescribe",t)},expression:"shop.shopDescribe"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"商店关键字"}},[o("el-input",{model:{value:e.shop.shopKeyWord,callback:function(t){e.$set(e.shop,"shopKeyWord",t)},expression:"shop.shopKeyWord"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"所在省市区"}},[o("el-cascader",{attrs:{options:e.region,props:e.regionProps},on:{"active-item-change":e.handleItemChange},model:{value:e.shop._region,callback:function(t){e.$set(e.shop,"_region",t)},expression:"shop._region"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"详细地址"}},[o("el-input",{model:{value:e.shop.completeAddress,callback:function(t){e.$set(e.shop,"completeAddress",t)},expression:"shop.completeAddress"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"客服QQ"}},[o("el-input",{model:{value:e.shop.serviceQQ,callback:function(t){e.$set(e.shop,"serviceQQ",t)},expression:"shop.serviceQQ"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"邮件地址"}},[o("el-input",{model:{value:e.shop.serviceEmail,callback:function(t){e.$set(e.shop,"serviceEmail",t)},expression:"shop.serviceEmail"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"客服电话"}},[o("el-input",{model:{value:e.shop.serviceCall,callback:function(t){e.$set(e.shop,"serviceCall",t)},expression:"shop.serviceCall"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"商店 Logo(推荐分辨率180x90)"}},[o("Croppa",{ref:"shopLogo",attrs:{width:180,height:90},model:{value:e.shop.shopLogo,callback:function(t){e.$set(e.shop,"shopLogo",t)},expression:"shop.shopLogo"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],1)],1)],1)],1)],1)],1)},[],!1,null,"e4546dec",null);f.options.__file="index.vue";t.default=f.exports}}]);