webpackJsonp([4],{156:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o,c,a,s,l=n(23),r=n.n(l),u=n(273),v=n.n(u),f=[{title:"交通",click:!1,isActive:!0},{title:"生活",click:!1,isActive:!1},{title:"医疗",click:!1,isActive:!1},{title:"学校",click:!1,isActive:!1}],d=[],p=[],m=[],h=0;e.default={components:{},mounted:function(){var t=this;new r.a(function(e,n){t.init(),e()}).then(function(){t.searchData(t.callback),t.demo()}).then(function(){setTimeout(function(){t.glob.getClass("footer_button")[0].click()},300)})},data:function(){return c=this,{buttons:f,listCount:void 0,listText:d,center:{lng:0,lat:0},num:p,footer_button:"footer_button"}},methods:{init:function(){i=new v.a.Map("container",{center:[121.52710487067272,31.22889232359548],resizeEnable:!1,zoom:5}),v.a.plugin(["AMap.Geolocation","AMap.PlaceSearch","AMap.ToolBar"],function(){i.addControl(new v.a.ToolBar)})},searchData:function(t){var e=["地铁线路","大型购物广场","三甲医院","学校"],n=[1e3,3e3,3e3,3e3];return a={pageSize:10,pageIndex:1,city:"021",map:i,visible:!1},v.a.service("AMap.PlaceSearch",function(){i.clearMap(),o=new v.a.PlaceSearch(a);for(var c=0;c<e.length;c++)o.searchNearBy(e[c],[121.44343879031237,31.207570983863118],n[c],t)}),t},callback:function(t,e){new r.a(function(t,n){var i=e,o=i.poiList.pois;m=o.copyWithin(0),c.num.push(m),t()}).then(function(){return console.log("Resolved."),c.demo()})},onClick:function(){console.log("on item click:")},listClose:function(){document.getElementsByClassName("content")[0].style.visibility="hidden"},listOpen:function(){document.getElementsByClassName("content")[0].style.visibility="visible"},demo:function(){if(++h>4&&c.num.length>0)return i.clearMap()},clickItem:function(t,e){function n(t){console.log(t)}i.clearMap(),e.forEach(function(t,e){t.isActive=!1}),e[t].isActive=!0,c.listCount=c.num[t].length,c.listText=c.num[t];for(var o=0;o<c.num[t].length;o++)s=new v.a.Marker({title:"abc",icon:"https://webapi.amap.com/theme/v1.3/markers/n/mark_b"+(o+1)+".png",position:[c.num[t][o].location.lng,c.num[t][o].location.lat],offset:new v.a.Pixel(-24,5),zIndex:1,map:i,clickable:!0}),v.a.event.addListener(s,"click",n);return s}}}},161:function(t,e,n){e=t.exports=n(90)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"around.vue",sourceRoot:""}])},220:function(t,e,n){var i=n(161);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(91)("6eaa4b9b",i,!0)},230:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%",height:"100%"}},[n("header-item",{attrs:{message:"地图周边",backUrl:"/"}}),t._v(" "),n("div",{staticStyle:{width:"100%",height:"90%"},attrs:{id:"container"}}),t._v(" "),n("div",{staticClass:"footer_map_buttons"},t._l(t.buttons,function(e,i){return n("button",{key:e.id,class:[t.footer_button,{active:e.isActive}],on:{click:function(e){t.clickItem(i,t.buttons)}}},[t._v(t._s(e.title)+"\n\n    ")])})),t._v(" "),n("div",{attrs:{id:"panel"}}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"content-top"},t._l(t.listText,function(e){return n("div",[n("span",[t._v(t._s(e.name))]),n("span",[t._v(t._s(e.distance+"米"))])])})),t._v(" "),n("div",{staticClass:"content-bottom",on:{click:t.listClose}},[t._v("x")])]),t._v(" "),n("div",{staticClass:"list-button",on:{click:t.listOpen}},[n("div",[t._v("("+t._s(t.listCount)+")")]),t._v(" "),n("div",[t._v("查看列表")])])],1)},staticRenderFns:[]}},83:function(t,e,n){n(220);var i=n(22)(n(156),n(230),null,null);t.exports=i.exports}});
//# sourceMappingURL=4.30296dd78e7b3ed4abf4.js.map