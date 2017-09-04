webpackJsonp([1],{123:function(t,e){e.f={}.propertyIsEnumerable},124:function(t,e,i){var n=i(0),r=i(2),o=i(24),a=i(125),s=i(8).f;t.exports=function(t){var e=r.Symbol||(r.Symbol=o?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},125:function(t,e,i){e.f=i(1)},134:function(t,e,i){var n=i(49),r=i(27).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},135:function(t,e){e.f=Object.getOwnPropertySymbols},166:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(176),r=i.n(n),o=i(173),a=i.n(o);e.default={name:"picture-input",props:{width:{type:[String,Number],default:a.a},height:{type:[String,Number],default:a.a},margin:{type:[String,Number],default:0},accept:{type:String,default:"image/*"},size:{type:[String,Number],default:a.a},name:{type:String,default:null},id:{type:[String,Number],default:null},buttonClass:{type:String,default:"btn btn-primary button"},removeButtonClass:{type:String,default:"btn btn-secondary button secondary"},aspectButtonClass:{type:String,default:"btn btn-secondary button secondary"},prefill:{type:[String,File],default:""},crop:{type:Boolean,default:!0},radius:{type:[String,Number],default:0},removable:{type:Boolean,default:!1},autoToggleAspectRatio:{type:Boolean,default:!1},toggleAspectRatio:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},zIndex:{type:Number,default:1e4},customStrings:{type:Object,default:function(){return{}}}},watch:{prefill:function(){this.prefill?this.preloadImage(this.prefill):this.removeImage()}},data:function(){return{imageSelected:!1,previewHeight:0,previewWidth:0,draggingOver:!1,canvasWidth:0,canvasHeight:0,strings:{upload:"<p>Your device does not support file uploading.</p>",drag:"Drag an image or <br>click here to select a file",tap:"Tap here to select a photo <br>from your gallery",change:"Change Photo",aspect:"Landscape/Portrait",remove:"Remove Photo",select:"Select a Photo",selected:"<p>Photo successfully selected!</p>",fileSize:"The file size exceeds the limit",fileType:"This file type is not supported."}}},mounted:function(){var t=this;if(this.updateStrings(),this.prefill&&this.preloadImage(this.prefill),this.$nextTick(function(){window.addEventListener("resize",t.onResize),t.onResize()}),this.supportsPreview){this.pixelRatio=Math.round(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI);var e=this.$refs.previewCanvas;e.getContext&&(this.context=e.getContext("2d"),this.context.scale(this.pixelRatio,this.pixelRatio))}"image/*"!==this.accept&&(this.fileTypes=this.accept.split(","),this.fileTypes=this.fileTypes.map(function(t){return t.trim()})),this.canvasWidth=this.width,this.canvasHeight=this.height},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{updateStrings:function(){for(var t in this.customStrings)t in this.strings&&"string"==typeof this.customStrings[t]&&(this.strings[t]=this.customStrings[t])},onResize:function(){this.resizeCanvas(),this.imageObject&&this.drawImage(this.imageObject)},onDragStart:function(){this.supportsDragAndDrop&&(this.draggingOver=!0)},onDragStop:function(){this.supportsDragAndDrop&&(this.draggingOver=!1)},onFileDrop:function(t){this.onDragStop(),this.onFileChange(t)},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;if(e.length){if(e[0].size<=0||e[0].size>1024*this.size*1024)return void alert(this.strings.fileSize+" ("+this.size+"MB)");if(e[0].name!==this.fileName||e[0].size!==this.fileSize||this.fileModified!==e[0].lastModified){if(this.file=e[0],this.fileName=e[0].name,this.fileSize=e[0].size,this.fileModified=e[0].lastModified,this.fileType=e[0].type,"image/*"===this.accept){if("image/"!==e[0].type.substr(0,6))return}else if(-1===this.fileTypes.indexOf(e[0].type))return void alert(this.strings.fileType);this.imageSelected=!0,this.image="",this.supportsPreview?this.loadImage(e[0]):this.$emit("change")}}},loadImage:function(t){var e=this;this.getEXIFOrientation(t,function(i){e.setOrientation(i);var n=new FileReader;n.onload=function(t){e.image=t.target.result,e.$emit("change"),e.imageObject=new Image,e.imageObject.onload=function(){if(e.autoToggleAspectRatio){e.getOrientation(e.canvasWidth,e.canvasHeight)!==e.getOrientation(e.imageObject.width,e.imageObject.height)&&e.rotateCanvas()}e.drawImage(e.imageObject)},e.imageObject.src=e.image},n.readAsDataURL(t)})},drawImage:function(t){this.imageWidth=t.width,this.imageHeight=t.height,this.imageRatio=t.width/t.height;var e=0,i=0,n=this.previewWidth,r=this.previewHeight;this.crop?this.imageRatio>1?(n=r*this.imageRatio,e=(this.previewWidth-n)/2):(r=n/this.imageRatio,i=(this.previewHeight-r)/2):this.imageRatio>1?(r=n/this.imageRatio,i=(this.previewHeight-r)/2):(n=r*this.imageRatio,e=(this.previewWidth-n)/2);var o=this.$refs.previewCanvas;o.style.background="none",o.width=this.previewWidth*this.pixelRatio,o.height=this.previewHeight*this.pixelRatio,this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,o.width,o.height),this.rotate&&(this.context.translate(e*this.pixelRatio,i*this.pixelRatio),this.context.translate(n/2*this.pixelRatio,r/2*this.pixelRatio),this.context.rotate(this.rotate),e=-n/2,i=-r/2),this.context.drawImage(t,e*this.pixelRatio,i*this.pixelRatio,n*this.pixelRatio,r*this.pixelRatio)},selectImage:function(){this.$refs.fileInput.click()},removeImage:function(){this.$refs.fileInput.value="",this.$refs.fileInput.type="",this.$refs.fileInput.type="file",this.fileName="",this.fileType="",this.fileSize=0,this.fileModified=0,this.imageSelected=!1,this.image="",this.file=null,this.imageObject=null,this.$refs.previewCanvas.style.backgroundColor="rgba(200,200,200,.25)",this.$refs.previewCanvas.width=this.previewWidth*this.pixelRatio,this.$emit("remove")},rotateImage:function(){this.rotateCanvas(),this.imageObject&&this.drawImage(this.imageObject);var t=this.getOrientation(this.canvasWidth,this.canvasHeight);this.$emit("aspectratiochange",t)},resizeCanvas:function(){var t=this.canvasWidth/this.canvasHeight,e=this.$refs.container.clientWidth;(this.toggleAspectRatio||e!==this.containerWidth)&&(this.containerWidth=e,this.previewWidth=Math.min(this.containerWidth-2*this.margin,this.canvasWidth),this.previewHeight=this.previewWidth/t)},getOrientation:function(t,e){var i="square";return t>e?i="landscape":t<e&&(i="portrait"),i},switchCanvasOrientation:function(){var t=this.canvasWidth,e=this.canvasHeight;this.canvasWidth=e,this.canvasHeight=t},rotateCanvas:function(){this.switchCanvasOrientation(),this.resizeCanvas()},setOrientation:function(t){this.rotate=!1,8===t?this.rotate=-Math.PI/2:6===t?this.rotate=Math.PI/2:3===t&&(this.rotate=-Math.PI)},getEXIFOrientation:function(t,e){var i=new FileReader;i.onload=function(t){var i=new DataView(t.target.result);if(65496!==i.getUint16(0,!1))return e(-2);for(var n=i.byteLength,r=2;r<n;){var o=i.getUint16(r,!1);if(r+=2,65505===o){if(1165519206!==i.getUint32(r+=2,!1))return e(-1);var a=18761===i.getUint16(r+=6,!1);r+=i.getUint32(r+4,a);var s=i.getUint16(r,a);r+=2;for(var c=0;c<s;c++)if(274===i.getUint16(r+12*c,a))return e(i.getUint16(r+12*c+8,a))}else{if(65280!=(65280&o))break;r+=i.getUint16(r,!1)}}return e(-1)},i.readAsArrayBuffer(t.slice(0,65536))},preloadImage:function(t){var e=this;if("object"===(void 0===t?"undefined":r()(t)))return this.imageSelected=!0,this.image="",void(this.supportsPreview?this.loadImage(t):this.$emit("change"));var i=new Headers;i.append("Accept","image/*"),fetch(t,{method:"GET",mode:"cors",headers:i}).then(function(t){return t.blob()}).then(function(i){var n={target:{files:[]}},r=t.split("/").slice(-1)[0],o=r.split(".").slice(-1)[0];o=o.replace("jpg","jpeg"),n.target.files[0]=new File([i],r,{type:"image/"+o}),e.onFileChange(n)}).catch(function(t){console.log("Failed loading prefill image: "+t.message)})}},computed:{supportsUpload:function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var t=document.createElement("input");return t.type="file",!t.disabled},supportsPreview:function(){return window.FileReader&&!!window.CanvasRenderingContext2D},supportsDragAndDrop:function(){var t=document.createElement("div");return("draggable"in t||"ondragstart"in t&&"ondrop"in t)&&!("ontouchstart"in window||navigator.msMaxTouchPoints)},computedClasses:function(){var t={};return t["dragging-over"]=this.draggingOver,t},fontSize:function(){return Math.min(.04*this.previewWidth,21)+"px"}}}},171:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(264),r=i.n(n);e.default={name:"app",data:function(){return{}},components:{PictureInput:r.a},methods:{onChange:function(){console.log("New picture selected!"),this.$refs.pictureInput.image?console.log("Picture loaded."):console.log("FileReader API not supported: use the <form>, Luke!")}}}},173:function(t,e,i){t.exports={default:i(177),__esModule:!0}},174:function(t,e,i){t.exports={default:i(178),__esModule:!0}},175:function(t,e,i){t.exports={default:i(179),__esModule:!0}},176:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=i(175),o=n(r),a=i(174),s=n(a),c="function"==typeof s.default&&"symbol"==typeof o.default?function(t){return typeof t}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":typeof t};e.default="function"==typeof s.default&&"symbol"===c(o.default)?function(t){return void 0===t?"undefined":c(t)}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":void 0===t?"undefined":c(t)}},177:function(t,e,i){i(186),t.exports=9007199254740991},178:function(t,e,i){i(187),i(51),i(188),i(189),t.exports=i(2).Symbol},179:function(t,e,i){i(52),i(53),t.exports=i(125).f("iterator")},180:function(t,e,i){var n=i(44),r=i(135),o=i(123);t.exports=function(t){var e=n(t),i=r.f;if(i)for(var a,s=i(t),c=o.f,u=0;s.length>u;)c.call(t,a=s[u++])&&e.push(a);return e}},181:function(t,e,i){var n=i(10);t.exports=Array.isArray||function(t){return"Array"==n(t)}},182:function(t,e,i){var n=i(44),r=i(14);t.exports=function(t,e){for(var i,o=r(t),a=n(o),s=a.length,c=0;s>c;)if(o[i=a[c++]]===e)return i}},183:function(t,e,i){var n=i(26)("meta"),r=i(11),o=i(7),a=i(8).f,s=0,c=Object.isExtensible||function(){return!0},u=!i(23)(function(){return c(Object.preventExtensions({}))}),l=function(t){a(t,n,{value:{i:"O"+ ++s,w:{}}})},p=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,n)){if(!c(t))return"F";if(!e)return"E";l(t)}return t[n].i},f=function(t,e){if(!o(t,n)){if(!c(t))return!0;if(!e)return!1;l(t)}return t[n].w},h=function(t){return u&&d.NEED&&c(t)&&!o(t,n)&&l(t),t},d=t.exports={KEY:n,NEED:!1,fastKey:p,getWeak:f,onFreeze:h}},184:function(t,e,i){var n=i(123),r=i(25),o=i(14),a=i(45),s=i(7),c=i(47),u=Object.getOwnPropertyDescriptor;e.f=i(5)?u:function(t,e){if(t=o(t),e=a(e,!0),c)try{return u(t,e)}catch(t){}if(s(t,e))return r(!n.f.call(t,e),t[e])}},185:function(t,e,i){var n=i(14),r=i(134).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):r(n(t))}},186:function(t,e,i){var n=i(9);n(n.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},187:function(t,e,i){"use strict";var n=i(0),r=i(7),o=i(5),a=i(9),s=i(50),c=i(183).KEY,u=i(23),l=i(28),p=i(15),f=i(26),h=i(1),d=i(125),g=i(124),v=i(182),m=i(180),A=i(181),b=i(3),y=i(14),w=i(45),C=i(25),x=i(48),B=i(185),S=i(184),O=i(8),_=i(44),I=S.f,D=O.f,z=B.f,P=n.Symbol,R=n.JSON,k=R&&R.stringify,E=h("_hidden"),j=h("toPrimitive"),W={}.propertyIsEnumerable,F=l("symbol-registry"),M=l("symbols"),T=l("op-symbols"),H=Object.prototype,N="function"==typeof P,$=n.QObject,U=!$||!$.prototype||!$.prototype.findChild,L=o&&u(function(){return 7!=x(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a})?function(t,e,i){var n=I(H,e);n&&delete H[e],D(t,e,i),n&&t!==H&&D(H,e,n)}:D,Y=function(t){var e=M[t]=x(P.prototype);return e._k=t,e},X=N&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},G=function(t,e,i){return t===H&&G(T,e,i),b(t),e=w(e,!0),b(i),r(M,e)?(i.enumerable?(r(t,E)&&t[E][e]&&(t[E][e]=!1),i=x(i,{enumerable:C(0,!1)})):(r(t,E)||D(t,E,C(1,{})),t[E][e]=!0),L(t,e,i)):D(t,e,i)},J=function(t,e){b(t);for(var i,n=m(e=y(e)),r=0,o=n.length;o>r;)G(t,i=n[r++],e[i]);return t},K=function(t,e){return void 0===e?x(t):J(x(t),e)},Z=function(t){var e=W.call(this,t=w(t,!0));return!(this===H&&r(M,t)&&!r(T,t))&&(!(e||!r(this,t)||!r(M,t)||r(this,E)&&this[E][t])||e)},q=function(t,e){if(t=y(t),e=w(e,!0),t!==H||!r(M,e)||r(T,e)){var i=I(t,e);return!i||!r(M,e)||r(t,E)&&t[E][e]||(i.enumerable=!0),i}},Q=function(t){for(var e,i=z(y(t)),n=[],o=0;i.length>o;)r(M,e=i[o++])||e==E||e==c||n.push(e);return n},V=function(t){for(var e,i=t===H,n=z(i?T:y(t)),o=[],a=0;n.length>a;)!r(M,e=n[a++])||i&&!r(H,e)||o.push(M[e]);return o};N||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),e=function(i){this===H&&e.call(T,i),r(this,E)&&r(this[E],t)&&(this[E][t]=!1),L(this,t,C(1,i))};return o&&U&&L(H,t,{configurable:!0,set:e}),Y(t)},s(P.prototype,"toString",function(){return this._k}),S.f=q,O.f=G,i(134).f=B.f=Q,i(123).f=Z,i(135).f=V,o&&!i(24)&&s(H,"propertyIsEnumerable",Z,!0),d.f=function(t){return Y(h(t))}),a(a.G+a.W+a.F*!N,{Symbol:P});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)h(tt[et++]);for(var it=_(h.store),nt=0;it.length>nt;)g(it[nt++]);a(a.S+a.F*!N,"Symbol",{for:function(t){return r(F,t+="")?F[t]:F[t]=P(t)},keyFor:function(t){if(X(t))return v(F,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){U=!0},useSimple:function(){U=!1}}),a(a.S+a.F*!N,"Object",{create:K,defineProperty:G,defineProperties:J,getOwnPropertyDescriptor:q,getOwnPropertyNames:Q,getOwnPropertySymbols:V}),R&&a(a.S+a.F*(!N||u(function(){var t=P();return"[null]"!=k([t])||"{}"!=k({a:t})||"{}"!=k(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!X(t)){for(var e,i,n=[t],r=1;arguments.length>r;)n.push(arguments[r++]);return e=n[1],"function"==typeof e&&(i=e),!i&&A(e)||(e=function(t,e){if(i&&(e=i.call(this,t,e)),!X(e))return e}),n[1]=e,k.apply(R,n)}}}),P.prototype[j]||i(4)(P.prototype,j,P.prototype.valueOf),p(P,"Symbol"),p(Math,"Math",!0),p(n.JSON,"JSON",!0)},188:function(t,e,i){i(124)("asyncIterator")},189:function(t,e,i){i(124)("observable")},191:function(t,e,i){e=t.exports=i(95)(!0),e.push([t.i,".picture-input[data-v-2e190c08]{width:100%;margin:0 auto;text-align:center}.preview-container[data-v-2e190c08]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;cursor:pointer;overflow:hidden}.picture-preview[data-v-2e190c08]{width:100%;height:100%;position:relative;z-index:10001;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:hsla(0,0%,78%,.25)}.picture-preview.dragging-over[data-v-2e190c08]{-webkit-filter:brightness(.5);filter:brightness(.5)}.picture-inner[data-v-2e190c08]{position:relative;z-index:10002;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:1em auto;padding:3em;border:.3em dashed rgba(66,66,66,.15);border-radius:8px;width:calc(100% - 2.5em);height:calc(100% - 2.5em);display:table}.picture-inner .picture-inner-text[data-v-2e190c08]{display:table-cell;vertical-align:middle;text-align:center;font-size:2em;line-height:1.5}button[data-v-2e190c08]{margin:1em .25em;cursor:pointer}input[type=file][data-v-2e190c08]{display:none}","",{version:3,sources:["E:/github托管项目/vue2.0-demos/node_modules/vue-picture-input/PictureInput.vue"],names:[],mappings:"AACA,gCACE,WAAY,AACZ,cAAe,AACf,iBAAmB,CACpB,AACD,oCACE,WAAY,AACZ,8BAA+B,AACvB,sBAAuB,AAC/B,cAAe,AACf,eAAgB,AAChB,eAAiB,CAClB,AACD,kCACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,cAAe,AACf,8BAA+B,AACvB,sBAAuB,AAC/B,mCAAwC,CACzC,AACD,gDACE,8BAAgC,AACxB,qBAAwB,CACjC,AACD,gCACE,kBAAmB,AACnB,cAAe,AACf,oBAAqB,AACrB,8BAA+B,AACvB,sBAAuB,AAC/B,gBAAiB,AACjB,YAAa,AACb,sCAAuC,AACvC,kBAAmB,AACnB,yBAA0B,AAC1B,0BAA2B,AAC3B,aAAe,CAChB,AACD,oDACE,mBAAoB,AACpB,sBAAuB,AACvB,kBAAmB,AACnB,cAAe,AACf,eAAiB,CAClB,AACD,wBACE,iBAAkB,AAClB,cAAgB,CACjB,AACD,kCACE,YAAc,CACf",file:"PictureInput.vue",sourcesContent:["\n.picture-input[data-v-2e190c08] {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n.preview-container[data-v-2e190c08] {\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  cursor: pointer;\n  overflow: hidden;\n}\n.picture-preview[data-v-2e190c08] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 10001;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: rgba(200,200,200,.25);\n}\n.picture-preview.dragging-over[data-v-2e190c08] {\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5);\n}\n.picture-inner[data-v-2e190c08] {\n  position: relative;\n  z-index: 10002;\n  pointer-events: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 1em auto;\n  padding: 3em;\n  border: .3em dashed rgba(66,66,66,.15);\n  border-radius: 8px;\n  width: calc(100% - 2.5em);\n  height: calc(100% - 2.5em);\n  display: table;\n}\n.picture-inner .picture-inner-text[data-v-2e190c08] {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 2em;\n  line-height: 1.5;\n}\nbutton[data-v-2e190c08] {\n  margin: 1em .25em;\n  cursor: pointer;\n}\ninput[type=file][data-v-2e190c08] {\n  display: none;\n}\n"],sourceRoot:""}])},193:function(t,e,i){e=t.exports=i(95)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"uploadImg.vue",sourceRoot:""}])},252:function(t,e,i){var n=i(191);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(96)("34874c08",n,!0)},254:function(t,e,i){var n=i(193);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(96)("a4658f5e",n,!0)},264:function(t,e,i){function n(t){i(252)}var r=i(22)(i(166),i(266),n,"data-v-2e190c08",null);t.exports=r.exports},266:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"container",staticClass:"picture-input",attrs:{id:"picture-input"}},[t.supportsUpload?t.supportsPreview?i("div",[i("div",{staticClass:"preview-container",style:{maxWidth:t.previewWidth+"px",height:t.previewHeight+"px",borderRadius:t.radius+"%"}},[i("canvas",{ref:"previewCanvas",staticClass:"picture-preview",class:t.computedClasses,style:{height:t.previewHeight+"px",zIndex:t.zIndex+1},on:{drag:function(t){t.stopPropagation(),t.preventDefault()},dragover:function(t){t.stopPropagation(),t.preventDefault()},dragstart:function(e){e.stopPropagation(),e.preventDefault(),t.onDragStart(e)},dragenter:function(e){e.stopPropagation(),e.preventDefault(),t.onDragStart(e)},dragend:function(e){e.stopPropagation(),e.preventDefault(),t.onDragStop(e)},dragleave:function(e){e.stopPropagation(),e.preventDefault(),t.onDragStop(e)},drop:function(e){e.stopPropagation(),e.preventDefault(),t.onFileDrop(e)},click:function(e){e.preventDefault(),t.selectImage(e)}}}),t._v(" "),t.imageSelected||t.plain?t._e():i("div",{staticClass:"picture-inner",style:{top:-t.previewHeight+"px",marginBottom:-t.previewHeight+"px",fontSize:t.fontSize,borderRadius:t.radius+"%",zIndex:t.zIndex+2}},[t.supportsDragAndDrop?i("span",{staticClass:"picture-inner-text",domProps:{innerHTML:t._s(t.strings.drag)}}):i("span",{staticClass:"picture-inner-text",domProps:{innerHTML:t._s(t.strings.tap)}})])]),t._v(" "),t.imageSelected?i("button",{class:t.buttonClass,on:{click:function(e){e.preventDefault(),t.selectImage(e)}}},[t._v(t._s(t.strings.change))]):t._e(),t._v(" "),t.imageSelected&&t.removable?i("button",{class:t.removeButtonClass,on:{click:function(e){e.preventDefault(),t.removeImage(e)}}},[t._v(t._s(t.strings.remove))]):t._e(),t._v(" "),t.imageSelected&&t.toggleAspectRatio&&t.width!==t.height?i("button",{class:t.aspectButtonClass,on:{click:function(e){e.preventDefault(),t.rotateImage(e)}}},[t._v(t._s(t.strings.aspect))]):t._e()]):i("div",[t.imageSelected?i("div",[i("div",{domProps:{innerHTML:t._s(t.strings.selected)}}),t._v(" "),i("button",{class:t.buttonClass,on:{click:function(e){e.preventDefault(),t.selectImage(e)}}},[t._v(t._s(t.strings.change))]),t._v(" "),t.removable?i("button",{class:t.removeButtonClass,on:{click:function(e){e.preventDefault(),t.removeImage(e)}}},[t._v(t._s(t.strings.remove))]):t._e()]):i("button",{class:t.buttonClass,on:{click:function(e){e.preventDefault(),t.selectImage(e)}}},[t._v(t._s(t.strings.select))])]):i("div",{domProps:{innerHTML:t._s(t.strings.upload)}}),t._v(" "),i("input",{ref:"fileInput",attrs:{type:"file",name:t.name,id:t.id,accept:t.accept},on:{change:t.onFileChange}})])},staticRenderFns:[]}},269:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mt-header",{attrs:{title:"图表示例"}},[i("router-link",{attrs:{to:"/index"},slot:"left"},[i("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1),t._v(" "),i("mt-button",{attrs:{icon:"more"},slot:"right"})],1),t._v(" "),i("div",{staticClass:"hello"},[i("picture-input",{ref:"pictureInput",attrs:{width:"600",height:"600",margin:"16",accept:"image/jpeg,image/png",size:"10",buttonClass:"btn",customStrings:{upload:"<h1>Bummer!</h1>",drag:"Drag a 😺 GIF or GTFO"}},on:{change:t.onChange}})],1)],1)},staticRenderFns:[]}},90:function(t,e,i){function n(t){i(254)}var r=i(22)(i(171),i(269),n,"data-v-731b8886",null);t.exports=r.exports}});
//# sourceMappingURL=1.ce45c5b9195a2899c118.js.map