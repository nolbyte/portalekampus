(function(e){function t(t){for(var a,r,o=t[0],u=t[1],i=t[2],f=0,d=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},s={app:0},c=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-bf3961dc":"d1243a98","chunk-cb1aa956":"843cfe2c","chunk-1bfa867a":"9826d0fa","chunk-925751d8":"6a4ec3d0","chunk-0ff5eaa1":"72729bd8","chunk-1275ccd9":"a585f856","chunk-3f97e03a":"89844303","chunk-5f9f11b2":"9263017f","chunk-0db1281a":"7907add5","chunk-2d0aba98":"5d2d3619","chunk-ef71bd42":"52f6200c","chunk-ef731b98":"bad267cb","chunk-ef731bb8":"b7c17e2f","chunk-ef7337b0":"6b4eb124","chunk-ef749cae":"4d8325b9","chunk-ef99e0d0":"fb82b151","chunk-ef9d2236":"587e2529","chunk-644ab46c":"c5d943e4","chunk-ef74fb7c":"4fc16260","chunk-1c1f09ec":"a65f2676"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-bf3961dc":1,"chunk-cb1aa956":1,"chunk-925751d8":1,"chunk-0ff5eaa1":1,"chunk-1275ccd9":1,"chunk-3f97e03a":1,"chunk-5f9f11b2":1,"chunk-0db1281a":1,"chunk-644ab46c":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-bf3961dc":"5c26bcba","chunk-cb1aa956":"84fdbce6","chunk-1bfa867a":"31d6cfe0","chunk-925751d8":"82283758","chunk-0ff5eaa1":"5bcbfa9d","chunk-1275ccd9":"340e1410","chunk-3f97e03a":"bffcd4b0","chunk-5f9f11b2":"548fe094","chunk-0db1281a":"ca087f51","chunk-2d0aba98":"31d6cfe0","chunk-ef71bd42":"31d6cfe0","chunk-ef731b98":"31d6cfe0","chunk-ef731bb8":"31d6cfe0","chunk-ef7337b0":"31d6cfe0","chunk-ef749cae":"31d6cfe0","chunk-ef99e0d0":"31d6cfe0","chunk-ef9d2236":"31d6cfe0","chunk-644ab46c":"d4205f10","chunk-ef74fb7c":"31d6cfe0","chunk-1c1f09ec":"31d6cfe0"}[e]+".css",s=u.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var i=c[o],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===a||f===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){i=d[o],f=i.getAttribute("data-href");if(f===a||f===s)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],l.parentNode.removeChild(l),n(c)},l.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=c);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=o(e);var d=new Error;i=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}s[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("4de4"),n("baa5"),n("a9e3"),n("b680"),n("ac1f"),n("5319"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view"),n("v-snackbar",{attrs:{color:e.snackbar_color,top:!0},model:{value:e.snackbar_success,callback:function(t){e.snackbar_success=t},expression:"snackbar_success"}},[e._v(" "+e._s(e.page_message)),n("br")]),n("v-snackbar",{attrs:{color:e.snackbar_color,top:!0},model:{value:e.snackbar_error,callback:function(t){e.snackbar_error=t},expression:"snackbar_error"}},[e._v(" "+e._s(e.page_message)),n("br"),e._l(e.page_form_error_message,(function(t){return n("div",{key:t.name},[n("strong",[e._v(e._s(t.field))]),e._l(t.error,(function(t){return n("div",{key:t.message},[e._v(" "+e._s(t.message)+" ")])}))],2)}))],2),n("confirm",{ref:"confirm"})],1)},s=[],c=(n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{style:{zIndex:e.options.zIndex},attrs:{"max-width":e.options.width},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.cancel(t)}},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:e.options.color,dense:"",flat:""}},[n("v-toolbar-title",{staticClass:"white--text"},[e._v(e._s(e.title))])],1),n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!e.message,expression:"!!message"}],staticClass:"pa-4"},[e._v(e._s(e.message))]),n("v-card-actions",{staticClass:"pt-0"},[n("v-spacer"),n("v-btn",{attrs:{color:"primary darken-1",text:""},nativeOn:{click:function(t){return e.agree(t)}}},[e._v("Yes")]),n("v-btn",{attrs:{color:"grey",text:""},nativeOn:{click:function(t){return e.cancel(t)}}},[e._v("Cancel")])],1)],1)],1)}),o=[],u={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"primary",width:290,zIndex:200}}},methods:{open:function(e,t,n){var a=this;return this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,n),new Promise((function(e,t){a.resolve=e,a.reject=t}))},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1}}},i=u,f=n("2877"),d=n("6544"),l=n.n(d),h=n("8336"),b=n("b0af"),m=n("99d9"),p=n("169a"),k=n("2fa4"),g=n("71d9"),j=n("2a7f"),v=Object(f["a"])(i,c,o,!1,null,null,null),_=v.exports;l()(v,{VBtn:h["a"],VCard:b["a"],VCardActions:m["a"],VCardText:m["c"],VDialog:p["a"],VSpacer:k["a"],VToolbar:g["a"],VToolbarTitle:j["a"]});var y={name:"PortalEkampus",created:function(){var e=this;this.$ajax.interceptors.response.use((function(t){var n=t.data;switch(n.pid){case"store":case"update":case"destroy":e.snackbar_color="success",e.snackbar_success=!0,e.page_message=n.message;break}return t}),(function(t){var n=t.config,a=t.response,r=a.data,s=a.status;switch(s){case 401:"login"!=r.page&&(e.$store.dispatch("auth/logout"),e.$store.dispatch("uifront/reinit"),e.$store.dispatch("uiadmin/reinit"),e.snackbar_color="error",e.snackbar_error=!0,e.page_message="("+s+": "+r.error+") Token telah expire mohon login kembali");break;case 403:e.snackbar_error=!0,e.snackbar_color="error",e.page_message="("+s+": Forbidden) "+r.message+" to access resource ["+n.baseURL+n.url+"]";break;case 404:e.snackbar_error=!0,e.snackbar_color="error",e.page_message="("+s+": "+r.error+") Mohon untuk dicek url route ("+n.baseURL+n.url+") apakah tersedia";break;case 405:e.snackbar_error=!0,e.snackbar_color="error",e.page_message="("+s+": "+r.exception+") Mohon untuk dicek HTTP METHOD ";break;case 422:e.snackbar_color="error",e.snackbar_error=!0;var c=[];for(var o in r){for(var u=[],i=r[o],f=0;f<i.length;f++)u.push({message:i[f]});c.push({field:o,error:u})}e.page_form_error_message=c,e.page_message="("+s+": Unprocessible Entity) ";break;case 500:e.snackbar_error=!0,e.snackbar_color="error",e.page_message="("+s+" (internal server eror): "+r.message;break}return Promise.reject(t)}))},mounted:function(){this.$root.$confirm=this.$refs.confirm},data:function(){return{snackbar_success:!1,snackbar_error:!1,snackbar_color:"error",page_message:"",page_form_error_message:{}}},components:{confirm:_}},A=y,P=n("7496"),T=n("2db4"),w=Object(f["a"])(A,r,s,!1,null,null,null),S=w.exports;l()(w,{VApp:P["a"],VSnackbar:T["a"]});n("45fc");var x=n("8c4f"),O=n("2f62"),E=n("bfa9"),M=(n("96cf"),n("1da1")),D=function(){return{loaded:!1,captcha_site_key:"",tahun_pendaftaran:(new Date).getFullYear(),identitas:{nama_pt:"",nama_pt_alias:""}}},R=D(),N={setLoaded:function(e,t){e.loaded=t},setCaptchaSiteKey:function(e,t){e.captcha_site_key=t},setTahunPendaftaran:function(e,t){e.tahun_pendaftaran=t},setIdentitas:function(e,t){e.identitas=t},resetState:function(e){Object.assign(e,D())}},z={isLoaded:function(e){return e.loaded},getCaptchaKey:function(e){return e.captcha_site_key},getTahunPendaftaran:function(e){return e.tahun_pendaftaran},getNamaPT:function(e){return e.identitas.nama_pt},getNamaPTAlias:function(e){return e.identitas.nama_pt_alias},getBentukPT:function(e){return e.identitas.bentuk_pt}},C={init:function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,r=t.state,r.loaded){e.next=4;break}return e.next=4,n.get("/system/setting/uifront").then((function(e){var t=e.data;a("setCaptchaSiteKey",t.captcha_site_key),a("setTahunPendaftaran",t.tahun_pendaftaran),a("setIdentitas",t.identitas),a("setLoaded",!0)}));case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),reinit:function(e){var t=e.commit;t("resetState")}},I={namespaced:!0,state:R,mutations:N,getters:z,actions:C},B=(n("7db0"),n("a434"),n("b0c0"),function(){return{loaded:!1,pages:[],daftar_ta:[],tahun_masuk:0,default_dashboard:null}}),L=B(),U={setNewPage:function(e,t){e.pages.push(t)},replacePage:function(e,t,n){e.pages[n]=t},removePage:function(e,t){var n;for(n=0;n<e.pages.length;n++)if(e.pages[n].name==t.name){e.pages.splice(n,1);break}},setLoaded:function(e,t){e.loaded=t},setDashboard:function(e,t){e.default_dashboard=t},setDaftarTA:function(e,t){e.daftar_ta=t},setTahunMasuk:function(e,t){e.tahun_masuk=t},resetState:function(e){Object.assign(e,B())}},F={getDefaultDashboard:function(e){return e.default_dashboard},getDaftarTA:function(e){return e.daftar_ta},getTahunMasuk:function(e){return parseInt(e.tahun_masuk)}},q={init:function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,r=t.state,s=t.rootGetters,r.loaded||!s["auth/Authenticated"]){e.next=6;break}return a("setTahunMasuk",s["uifront/getTahunPendaftaran"]),c=s["auth/Token"],e.next=6,n.get("/system/setting/uiadmin",{headers:{Authorization:c}}).then((function(e){var t=e.data;a("setDaftarTA",t.daftar_ta),a("setLoaded",!0)}));case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),changeDashboard:function(e,t){var n=e.commit;n("setDashboard",t)},addToPages:function(e,t){var n=e.commit,a=e.state,r=a.pages.find((function(e){return e.name==t.name}));r||n("setNewPage",t)},updatePage:function(e,t){var n,a=e.commit,r=e.state;for(n=0;n<r.pages.length;n++)if(r.pages[n].name==t.name)break;a("replacePage",t,n)},updateTahunMasuk:function(e,t){var n=e.commit;n("setTahunMasuk",t)},reinit:function(e){var t=e.commit;t("resetState")}},$={namespaced:!0,state:L,mutations:U,getters:F,actions:q},V=function(){return{access_token:null,token_type:null,expires_in:null,user:null}},G=V(),K={setToken:function(e,t){e.access_token=t.access_token,e.token_type=t.token_type,e.expires_in=t.expires_in},setUser:function(e,t){e.user=t},resetState:function(e){Object.assign(e,V())}},H={Authenticated:function(e){return null!=e.access_token&&null!=e.user},AccessToken:function(e){return e.access_token},Token:function(e){return e.token_type+" "+e.access_token},Roles:function(e){return e.user.role},Role:function(e){var t="";if(null!=e.access_token&&null!=e.user)for(var n=e.user.role,a=0;a<n.length;a++)switch(n[a]){case"mahasiswabaru":t+="[mahasiswabaru] ";break;case"mahasiswa":t+="[mahasiswa] ";break;default:t=t+"["+n[a]+"] "}return t},User:function(e){return e.user},AtributeUser:function(e){return function(t){return null==e.user?"":e.user[t]}},can:function(e){return function(t){if(null==e.user)return!1;if(e.user.issuperadmin)return!0;var n=e.user.permissions;return t in n}}},Y={afterLoginSuccess:function(e,t){var n=e.commit;n("setToken",t.token),n("setUser",t.user)},logout:function(e){var t=e.commit;t("resetState")}},J={namespaced:!0,state:G,mutations:K,getters:H,actions:Y},W=new E["a"]({storage:localStorage});a["a"].use(O["a"]);var Q=new O["a"].Store({modules:{uifront:I,auth:J,uiadmin:$},plugins:[W.plugin]}),X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"text-center",staticStyle:{height:"calc(100vh - 58px)"},attrs:{"fill-height":""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",[n("h1",{staticClass:"display-2 primary--text"},[e._v("Whoops, 404")]),n("p",[e._v("The page you were looking for does not exist")]),n("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(t){return e.$router.go(-1)}}},[e._v(" Get me out of here! ")])],1)],1)],1)},Z=[],ee={name:"NotFound"},te=ee,ne=n("62ad"),ae=n("a523"),re=n("0fd9"),se=Object(f["a"])(te,X,Z,!1,null,null,null),ce=se.exports;l()(se,{VBtn:h["a"],VCol:ne["a"],VContainer:ae["a"],VRow:re["a"]}),a["a"].use(x["a"]);var oe=[{path:"/",name:"FrontDashboard",meta:{title:"DASHBOARD"},component:function(){return n.e("chunk-bf3961dc").then(n.bind(null,"bfc7"))}},{path:"/pmb",name:"FrontPMB",meta:{title:"PENDAFTARAN MAHASISWA BARU"},component:function(){return Promise.all([n.e("chunk-cb1aa956"),n.e("chunk-925751d8"),n.e("chunk-1c1f09ec")]).then(n.bind(null,"905d"))}},{path:"/login",name:"FrontLogin",meta:{title:"LOGIN"},component:function(){return Promise.all([n.e("chunk-cb1aa956"),n.e("chunk-1bfa867a")]).then(n.bind(null,"a56a"))}},{path:"/dashboard/:token",name:"AdminDashboard",meta:{title:"DASHBOARD"},component:function(){return Promise.all([n.e("chunk-cb1aa956"),n.e("chunk-925751d8"),n.e("chunk-0ff5eaa1"),n.e("chunk-644ab46c")]).then(n.bind(null,"969c"))}},{path:"/dmaster/fakultas",name:"DMasterFakultas",meta:{title:"DATA MASTER - FAKULTAS",requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-cb1aa956"),n.e("chunk-925751d8"),n.e("chunk-0ff5eaa1"),n.e("chunk-5f9f11b2"),n.e("chunk-ef749cae")]).then(n.bind(null,"aaec"))},beforeEnter:function(e,t,n){"sekolahtinggi"==Q.getters["uifront/getBentukPT"]?n("/dashboard/"+Q.getters["auth/AccessToken"]):n()}},{path:"/dmaster/programstudi",name:"DMasterProgramStudi",meta:{title:"DATA MASTER - PROGRAM STUDI",requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-cb1aa956"),n.e("chunk-925751d8"),n.e("chunk-0ff5eaa1"),n.e("chunk-5f9f11b2"),n.e("chunk-ef71bd42")]).then(n.bind(null,"dfe7"))}},{path:"/dmaster/kelas",name:"DMasterKelas",meta:{title:"DATA MASTER - KELAS",requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-cb1aa956"),n.e("chunk-925751d8"),n.e("chunk-0ff5eaa1"),n.e("chunk-5f9f11b2"),n.e("chunk-ef731bb8")]).then(n.bind(null,"d915"))}},{path:"/spmb/soalpmb",name:"SPMBSoal",meta:{title:"SPMB - SOAL",requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-cb1aa956"),n.e("chunk-925751d8"),n.e("chunk-0ff5eaa1"),n.e("chunk-5f9f11b2"),n.e("chunk-ef9d2236")]).then(n.bind(null,"6220"))}},{path:"/spmb/pendaftaranbaru",name:"SPMBPendaftaranBaru",meta:{title:"SPMB - PENDAFTARAN BARU",requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-cb1aa956"),n.e("chunk-925751d8"),n.e("chunk-0ff5eaa1"),n.e("chunk-5f9f11b2"),n.e("chunk-0db1281a")]).then(n.bind(null,"be81"))}},{path:"/spmb/konfirmasipembayaran",name:"SPMBKonfirmasiPembayaran",meta:{title:"SPMB - KONFIRMASI PEMBAYARAN",requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-cb1aa956"),n.e("chunk-925751d8"),n.e("chunk-0ff5eaa1"),n.e("chunk-5f9f11b2"),n.e("chunk-2d0aba98")]).then(n.bind(null,"15db"))}},{path:"/spmb/formulirpendaftaran",name:"SPMBFormulirPendaftaran",meta:{title:"SPMB - FORMULIR PENDAFTARAN",requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-cb1aa956"),n.e("chunk-925751d8"),n.e("chunk-0ff5eaa1"),n.e("chunk-1275ccd9")]).then(n.bind(null,"6a9d"))}},{path:"/system-setting/identitasdiri",name:"SettingIdentitasDiri",meta:{title:"SETTING - IDENTITAS DIRI",requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-cb1aa956"),n.e("chunk-925751d8"),n.e("chunk-0ff5eaa1"),n.e("chunk-3f97e03a")]).then(n.bind(null,"a899"))}},{path:"/system-setting/permissions",name:"SettingPermissions",meta:{title:"SETTING - PERMISSIONS",requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-cb1aa956"),n.e("chunk-925751d8"),n.e("chunk-0ff5eaa1"),n.e("chunk-5f9f11b2"),n.e("chunk-ef99e0d0")]).then(n.bind(null,"8c24"))}},{path:"/system-setting/roles",name:"SettingRoles",meta:{title:"SETTING - ROLES",requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-cb1aa956"),n.e("chunk-925751d8"),n.e("chunk-0ff5eaa1"),n.e("chunk-5f9f11b2"),n.e("chunk-ef731b98")]).then(n.bind(null,"d90d"))}},{path:"/system-setting/captcha",name:"SettingCaptcha",meta:{title:"SETTING - CAPTCHA",requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-cb1aa956"),n.e("chunk-925751d8"),n.e("chunk-0ff5eaa1"),n.e("chunk-ef74fb7c")]).then(n.bind(null,"b746"))}},{path:"/system-users/pmb",name:"UsersPMB",meta:{title:"USERS - PMB",requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-cb1aa956"),n.e("chunk-925751d8"),n.e("chunk-0ff5eaa1"),n.e("chunk-5f9f11b2"),n.e("chunk-ef7337b0")]).then(n.bind(null,"d58d"))}},{path:"/404",name:"NotFoundComponent",meta:{title:"PAGE NOT FOUND"},component:ce},{path:"*",redirect:"/404"}],ue=new x["a"]({mode:"history",base:"/",routes:oe});ue.beforeEach((function(e,t,n){if(document.title=e.meta.title,e.matched.some((function(e){return e.meta.requiresAuth}))){if(Q.getters["auth/Authenticated"])return void n();n("/login")}else n()}));var ie=ue,fe=n("f309");a["a"].use(fe["a"]);var de=new fe["a"]({}),le=n("c1df"),he=n.n(le),be=n("bc3a"),me=n.n(be),pe={install:function(e){var t=me.a.create({baseURL:"https://api.stisipolrajahaji.ac.id/v3"});e.prototype.$api={url:"https://api.stisipolrajahaji.ac.id",post:function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.post(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()},e.prototype.$ajax=t}};a["a"].use(pe),a["a"].config.productionTip=!1,a["a"].filter("formatTanggal",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DD/MM/YYYY hh:mm",n=he()(String(e)).format(t);return n})),a["a"].filter("formatTA",(function(e){return e=parseInt(e),e+"/"+(e+1)})),a["a"].filter("formatUang",(function(e){var t=new Number(e).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1."),n=t.lastIndexOf(".");return t=t.substring(0,n)+","+t.substring(n+1),t})),new a["a"]({router:ie,store:Q,vuetify:de,render:function(e){return e(S)}}).$mount("#app")}});