(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0811"],{EeDC:function(t,e,o){"use strict";var n=o("cLjf"),r=o.n(n),s=o("hDQ3"),a=o.n(s),i=o("6ZY3"),l=o.n(i),c=o("Y/SO"),u=o("Grqa"),m=o("uARZ"),p=(o("Yfch"),o("ZAAW")),d=o("t3Un");var f={props:{value:{type:Boolean,default:!1}},computed:{comment_disabled:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},h=o("ZrdR"),b=Object(h.a)(f,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[o("el-button",{attrs:{plain:""}},[t._v(t._s(t.comment_disabled?"评论已关闭":"评论已打开")+"\n    "),o("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),o("el-dropdown-menu",{staticClass:"no-padding",attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",[o("el-radio-group",{staticStyle:{padding:"10px"},model:{value:t.comment_disabled,callback:function(e){t.comment_disabled=e},expression:"comment_disabled"}},[o("el-radio",{attrs:{label:!0}},[t._v("关闭评论")]),t._v(" "),o("el-radio",{attrs:{label:!1}},[t._v("打开评论")])],1)],1)],1)],1)},[],!1,null,null,null);b.options.__file="Comment.vue";var v=b.exports,g={props:{value:{required:!0,default:function(){return[]},type:Array}},data:function(){return{platformsOptions:[{key:"a-platform",name:"a-platform"},{key:"b-platform",name:"b-platform"},{key:"c-platform",name:"c-platform"}]}},computed:{platforms:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},_=Object(h.a)(g,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dropdown",{attrs:{"hide-on-click":!1,"show-timeout":100,trigger:"click"}},[o("el-button",{attrs:{plain:""}},[t._v("\n    平台("+t._s(t.platforms.length)+")\n    "),o("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),o("el-dropdown-menu",{staticClass:"no-border",attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-checkbox-group",{staticStyle:{padding:"5px 15px"},model:{value:t.platforms,callback:function(e){t.platforms=e},expression:"platforms"}},t._l(t.platformsOptions,function(e){return o("el-checkbox",{key:e.key,attrs:{label:e.key}},[t._v("\n        "+t._s(e.name)+"\n      ")])}))],1)],1)},[],!1,null,null,null);_.options.__file="Platform.vue";var w=_.exports,F={props:{value:{type:String,default:""}},computed:{source_uri:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},x=Object(h.a)(F,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[o("el-button",{attrs:{plain:""}},[t._v("\n    外链\n    "),o("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),o("el-dropdown-menu",{staticClass:"no-padding no-border",staticStyle:{width:"400px"},attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{"label-width":"0px",prop:"source_uri"}},[o("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.source_uri,callback:function(e){t.source_uri=e},expression:"source_uri"}},[o("template",{slot:"prepend"},[t._v("填写url")])],2)],1)],1)],1)},[],!1,null,null,null);x.options.__file="SourceUrl.vue";var k=x.exports,D=o("Hy6Q"),$={title:"",subTitle:"",content:"",about:"",source_uri:"",coverImg:"",createTime:void 0,subjectID:void 0,platforms:["a-platform"],comment_disabled:!1,importance:0},j={name:"SubjectDetail",components:{Ueditor:c.a,MDinput:u.a,Croppa:D.a,Sticky:m.a,CommentDropdown:v,PlatformDropdown:w,SourceUrlDropdown:k},props:{isEdit:{type:Boolean,default:!1}},data:function(){var t=this,e=function(e,o,n){""===o?(t.$message({message:e.field+"为必传项",type:"error"}),n(new Error(e.field+"为必传项"))):n()};return{postForm:l()({},$),loading:!1,goods_options:[],goodsIDs:[],rules:{subjectClassID:[{validator:e,trigger:"blur"}],title:[{validator:e}],content:[{validator:e}]},tempRoute:{}}},computed:{contentShortLength:function(){return this.postForm.about.length},lang:function(){return this.$store.getters.language}},created:function(){if(this.initData(),this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}else this.postForm=l()({},$);this.tempRoute=l()({},this.$route)},methods:{initData:function(){var t=this;Object(p.c)("shop_goods",{where:"goodsStatus ='U'",page:1,limit:10}).then(function(e){t.goods_options=e.result})},fetchData:function(t){var e=this;Object(p.d)("subject",t).then(function(t){e.postForm=t.result}).catch(function(t){console.log(t)})},setTagsViewTitle:function(){var t="zh"===this.lang?"编辑文章":"Edit Subject",e=l()({},this.tempRoute,{title:t+"-"+this.postForm.id});this.$store.dispatch("updateVisitedView",e)},resetForm:function(t){this.$refs[t].resetFields(),this.$refs.coverImg.clear(),this.$refs.editor.setContent("")},saveGoods:function(t){var e=this;(function(t){return Object(d.a)({url:"/subject/goods",method:"post",data:t})})({subjectID:t,goodsIDs:this.goodsIDs}).then(function(t){e.$notify({title:"成功",message:t.msg,type:"success",duration:2e3})})},saveData:function(){var t=this;this.loading=!0,this.isEdit?Object(p.f)("subject",this.postForm.subjectID,this.postForm).then(function(e){t.saveGoods(e.result.subjectID),t.isEdit||t.resetForm("postForm"),t.loading=!1}).catch(function(e){t.loading=!1,console.log(e)}):Object(p.a)("subject",this.postForm).then(function(e){t.saveGoods(e.result.subjectID),t.isEdit||t.resetForm("postForm"),t.loading=!1}).catch(function(e){t.loading=!1,console.log(e)})},submitForm:function(){var t=this;return a()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.coverImg.upload();case 2:e.sent&&t.$refs.postForm.validate(function(e){e?t.saveData():console.log("error submit!!")});case 4:case"end":return e.stop()}},e,t)}))()},draftForm:function(){0!==this.postForm.content.length&&0!==this.postForm.title.length?this.$message({message:"保存成功",type:"success",showClose:!0,duration:1e3}):this.$message({message:"请填写必要的标题和内容",type:"warning"})}}},y=(o("ISo2"),Object(h.a)(j,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"createPost-container"},[o("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm,rules:t.rules}},[o("sticky",{attrs:{"class-name":"sub-navbar"}},[o("CommentDropdown",{model:{value:t.postForm.comment_disabled,callback:function(e){t.$set(t.postForm,"comment_disabled",e)},expression:"postForm.comment_disabled"}}),t._v(" "),o("PlatformDropdown",{model:{value:t.postForm.platforms,callback:function(e){t.$set(t.postForm,"platforms",e)},expression:"postForm.platforms"}}),t._v(" "),o("SourceUrlDropdown",{model:{value:t.postForm.source_uri,callback:function(e){t.$set(t.postForm,"source_uri",e)},expression:"postForm.source_uri"}}),t._v(" "),o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v("发布\n      ")]),t._v(" "),o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{type:"warning"},on:{click:t.draftForm}},[t._v("草稿")])],1),t._v(" "),o("div",{staticClass:"createPost-main-container"},[o("el-row",[o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:"封面(940x470):",prop:"coverImg"}},[o("Croppa",{ref:"coverImg",attrs:{width:470,height:235,quality:2},model:{value:t.postForm.coverImg,callback:function(e){t.$set(t.postForm,"coverImg",e)},expression:"postForm.coverImg"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"title"}},[o("MDinput",{attrs:{maxlength:64,name:"name",required:""},model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}},[t._v("\n              标题\n            ")])],1),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"subTitle"}},[o("MDinput",{attrs:{maxlength:100,name:"name"},model:{value:t.postForm.subTitle,callback:function(e){t.$set(t.postForm,"subTitle",e)},expression:"postForm.subTitle"}},[t._v("\n              副标题\n            ")])],1),t._v(" "),o("div",{staticClass:"postInfo-container"},[o("el-row",[o("el-col",{attrs:{span:18}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"80px",label:"关联产品:",prop:"subjectClassID"}},[o("el-select",{staticStyle:{width:"400px"},attrs:{multiple:"",placeholder:"关联产品",clearable:""},model:{value:t.goodsIDs,callback:function(e){t.goodsIDs=e},expression:"goodsIDs"}},t._l(t.goods_options,function(t){return o("el-option",{key:t.goodsID,attrs:{label:t.name,value:t.goodsID}})}))],1)],1),t._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"推荐:","label-width":"45px"}},[o("el-checkbox",{staticStyle:{"min-width":"200px"},attrs:{label:"首页",border:""},model:{value:t.postForm.recommendFlag,callback:function(e){t.$set(t.postForm,"recommendFlag",e)},expression:"postForm.recommendFlag"}})],1)],1)],1)],1)],1)],1),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"45px",label:"摘要:",prop:"about"}},[o("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.postForm.about,callback:function(e){t.$set(t.postForm,"about",e)},expression:"postForm.about"}}),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[t._v(t._s(t.contentShortLength)+"字")])],1),t._v(" "),o("div",{staticClass:"editor-container"},[o("Ueditor",{ref:"editor",attrs:{height:400},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1)],1)],1)],1)},[],!1,null,"53ae57b9",null));y.options.__file="SubjectDetail.vue";e.a=y.exports},ISo2:function(t,e,o){"use strict";var n=o("kC08");o.n(n).a},P14b:function(t,e,o){"use strict";o.d(e,"a",function(){return r});var n=o("t3Un");function r(t,e){var o=new FormData;return o.append("file",e,t),Object(n.a)({url:"/upload/image",method:"post",headers:{"Content-Type":"multipart/form-data"},data:o})}},Yfch:function(t,e,o){"use strict";function n(t){return/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(t)}o.d(e,"a",function(){return n})},ZAAW:function(t,e,o){"use strict";o.d(e,"c",function(){return r}),o.d(e,"e",function(){return s}),o.d(e,"d",function(){return a}),o.d(e,"b",function(){return i}),o.d(e,"a",function(){return l}),o.d(e,"f",function(){return c});var n=o("t3Un");function r(t,e){return Object(n.a)({url:"/model/"+t,method:"get",params:e})}function s(t){return Object(n.a)({url:"/region",method:"get",params:{parent_id:t}})}function a(t,e){return Object(n.a)({url:"/model/"+t+"/"+e,method:"get"})}function i(t,e){return Object(n.a)({url:"/model/"+t+"/"+e,method:"delete"})}function l(t,e){return Object(n.a)({url:"/model/"+t,method:"post",data:e})}function c(t,e,o){return Object(n.a)({url:"/model/"+t+"/"+e,method:"put",data:o})}},bhAT:function(t,e,o){"use strict";o.r(e);var n={name:"EditForm",components:{SubjectDetail:o("EeDC").a}},r=o("ZrdR"),s=Object(r.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("subject-detail",{attrs:{"is-edit":!0}})},[],!1,null,null,null);s.options.__file="edit.vue";e.default=s.exports},kC08:function(t,e,o){}}]);