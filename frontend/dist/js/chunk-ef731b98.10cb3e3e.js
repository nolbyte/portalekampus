(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef731b98"],{"4bd4":function(t,e,a){"use strict";a("4de4"),a("7db0"),a("4160"),a("caad"),a("07ac"),a("2532"),a("159b");var s=a("5530"),i=a("58df"),n=a("7e2b"),r=a("3206");e["a"]=Object(i["a"])(n["a"],Object(r["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},s={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(s.valid=a(t)))})):s.valid=a(t),s},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(s["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},d90d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("AdminLayout",[a("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-account-group ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" ROLES ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[a("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Masing-masing user bisa memiliki beberapa role, minimal 1 role untuk bisa menggunakan sistem. Setiap role memiliki permission. ")])]},proxy:!0}])}),a("v-container",[a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{xs:"12",sm:"12",md:"12"}},[a("v-card",[a("v-card-text",[a("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1),a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{xs:"12",sm:"12",md:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,search:t.search,"item-key":"id","sort-by":"name","show-expand":"",expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(e){t.expanded=e},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("DAFTAR ROLE")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-alert",{attrs:{color:"error",value:t.form_error_message.length>0,icon:"mdi-close-octagon-outline"}},[t._v(" "+t._s(t.form_error_message)+" ")]),a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{label:"NAMA ROLE",rules:t.rule_role_name},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("BATAL")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v(" SIMPAN ")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"800px",persistent:""},model:{value:t.dialogRolePermission,callback:function(e){t.dialogRolePermission=e},expression:"dialogRolePermission"}},[a("RolePermissions",{attrs:{role:t.editedItem,daftarpermissions:t.daftar_permissions,permissionsselected:t.permissions_selected},on:{closeRolePermissions:t.closeRolePermissions}})],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var s=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.viewItem(s)}}},[t._v(" mdi-eye ")]),a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return e.stopPropagation(),t.editItem(s)}}},[t._v(" mdi-pencil ")])]}},{key:"expanded-item",fn:function(e){var s=e.headers,i=e.item;return[a("td",{staticClass:"text-center",attrs:{colspan:s.length}},[a("strong",[t._v("ID:")]),t._v(t._s(i.id)+" "),a("strong",[t._v("created_at:")]),t._v(t._s(t._f("formatTanggal")(i.created_at))+" "),a("strong",[t._v("updated_at:")]),t._v(t._s(t._f("formatTanggal")(i.created_at))+" ")])]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},i=[],n=(a("c975"),a("b0c0"),a("5530")),r=a("2f62"),o=a("a1b3"),d=a("e477"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("ROLE PERMISSIONS")])]),a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{xs:"12",sm:"12",md:"12"}},[a("v-card",[a("v-card-text",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("ID :")]),a("v-card-text",[t._v(" "+t._s(t.role.id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("TANGGAL BUAT :")]),a("v-card-text",[t._v(" "+t._s(t._f("formatTanggal")(t.role.created_at))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("NAMA ROLE :")]),a("v-card-text",[t._v(" "+t._s(t.role.name)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e(),a("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("TANGGAL UBAH :")]),a("v-card-text",[t._v(" "+t._s(t._f("formatTanggal")(t.role.updated_at))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?a("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1)],1)],1)],1),a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-text",[a("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{col:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.daftar_permissions,search:t.search,"item-key":"name","sort-by":"name","show-select":""},scopedSlots:t._u([{key:"item.actions",fn:function(e){var s=e.item;return[a("v-icon",{attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.revoke(s)}}},[t._v(" mdi-delete ")])]}}]),model:{value:t.permissions_selected,callback:function(e){t.permissions_selected=e},expression:"permissions_selected"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("KELUAR")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:t.btnLoading||!t.perm_selected.length>0},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v(" SIMPAN ")])],1)],1)},c=[],u={name:"RolePermissions",data:function(){return{btnLoading:!1,headers:[{text:"NAMA PERMISSION",value:"name"},{text:"GUARD",value:"guard_name"},{text:"AKSI",value:"actions",sortable:!1,width:100}],search:"",perm_selected:[]}},methods:{save:function(){var t=this;this.btnLoading=!0,this.$ajax.post("/system/setting/roles/storerolepermissions",{role_id:this.role.id,chkpermission:this.permissions_selected},{headers:{Authorization:this.TOKEN}}).then((function(){t.btnLoading=!1,t.close()})).catch((function(){t.btnLoading=!1}))},revoke:function(t){var e=this;this.btnLoading=!0,this.$ajax.post("/system/setting/roles/revokerolepermissions",{role_id:this.role.id,name:t.name},{headers:{Authorization:this.TOKEN}}).then((function(){e.btnLoading=!1,e.close()})).catch((function(){e.btnLoading=!1}))},close:function(){this.btnLoading=!1,this.permissions_selected=[],this.$emit("closeRolePermissions",this.role.id)}},props:{role:Object,daftarpermissions:Array,permissionsselected:Array},computed:Object(n["a"])({},Object(r["b"])("auth",{TOKEN:"Token"}),{daftar_permissions:function(){return this.daftarpermissions},permissions_selected:{get:function(){return this.perm_selected.length>0?this.perm_selected:this.permissionsselected},set:function(t){this.perm_selected=t}}})},m=u,h=a("2877"),v=a("6544"),f=a.n(v),p=a("8336"),b=a("b0af"),_=a("99d9"),g=a("62ad"),x=a("a523"),k=a("8fea"),y=a("132d"),w=a("6b53"),A=a("0fd9"),T=a("2fa4"),L=a("8654"),O=Object(h["a"])(m,l,c,!1,null,null,null),V=O.exports;f()(O,{VBtn:p["a"],VCard:b["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VCol:g["a"],VContainer:x["a"],VDataTable:k["a"],VIcon:y["a"],VResponsive:w["a"],VRow:A["a"],VSpacer:T["a"],VTextField:L["a"]});var I={name:"Roles",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"SETTING",disabled:!1,href:"#"},{text:"ROLES",disabled:!0,href:"#"}],this.initialize()},data:function(){return{breadcrumbs:[],datatableLoading:!1,btnLoading:!1,expanded:[],datatable:[],daftar_permissions:[],permissions_selected:[],headers:[{text:"NAMA ROLE",value:"name"},{text:"GUARD",value:"guard_name"},{text:"AKSI",value:"actions",sortable:!1,width:100}],search:"",form_valid:!0,dialog:!1,dialogRolePermission:!1,editedIndex:-1,editedItem:{id:0,name:"",guard:"",created_at:"",updated_at:""},defaultItem:{id:0,name:"",guard:"api",created_at:"",updated_at:""},rule_role_name:[function(t){return!!t||"Mohon untuk di isi nama Role !!!"},function(t){return/^[A-Za-z]*$/.test(t)||"Nama Role hanya boleh string"}],form_error_message:""}},methods:{initialize:function(){var t=this;this.datatableLoading=!0,this.$ajax.get("/system/setting/roles",{headers:{Authorization:this.TOKEN}}).then((function(e){var a=e.data,s=e.status;200==s&&(t.datatable=a.roles,t.datatableLoading=!1)}))},dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},editItem:function(t){this.editedIndex=this.datatable.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},viewItem:function(t){var e=this;this.$ajax.get("/system/setting/permissions",{headers:{Authorization:this.TOKEN}}).then((function(t){var a=t.data,s=t.status;200==s&&(e.daftar_permissions=a.permissions)})),this.$ajax.get("/system/setting/roles/"+t.id+"/permission",{headers:{Authorization:this.TOKEN}}).then((function(t){var a=t.data,s=t.status;200==s&&(e.permissions_selected=a.permissions)})),this.dialogRolePermission=!0,this.editedItem=t},close:function(){var t=this;this.btnLoading=!1,this.dialog=!1,this.$refs.frmdata.resetValidation(),this.form_error_message="",setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},closeRolePermissions:function(){this.permissions_selected=[],this.dialogRolePermission=!1},save:function(){var t=this;this.form_error_message="",this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.editedIndex>-1?this.$ajax.post("/system/setting/roles/"+this.editedItem.id,{_method:"PUT",name:this.editedItem.name.toLowerCase()},{headers:{Authorization:this.TOKEN}}).then((function(e){var a=e.data;Object.assign(t.datatable[t.editedIndex],a.roles),t.close()})).catch((function(){t.btnLoading=!1})):this.$ajax.post("/system/setting/roles/store",{name:this.editedItem.name.toLowerCase()},{headers:{Authorization:this.TOKEN}}).then((function(e){var a=e.data;t.datatable.push(a.roles),t.close()})).catch((function(){t.btnLoading=!1})))}},computed:Object(n["a"])({formTitle:function(){return-1===this.editedIndex?"TAMBAH ROLE":"EDIT ROLE"}},Object(r["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),watch:{dialog:function(t){t||this.close()}},components:{AdminLayout:o["a"],ModuleHeader:d["a"],RolePermissions:V}},E=I,R=a("0798"),C=a("2bc5"),P=a("169a"),$=a("ce7e"),S=a("4bd4"),N=a("71d9"),j=a("2a7f"),B=Object(h["a"])(E,s,i,!1,null,null,null);e["default"]=B.exports;f()(B,{VAlert:R["a"],VBreadcrumbs:C["a"],VBtn:p["a"],VCard:b["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VCol:g["a"],VContainer:x["a"],VDataTable:k["a"],VDialog:P["a"],VDivider:$["a"],VForm:S["a"],VIcon:y["a"],VRow:A["a"],VSpacer:T["a"],VTextField:L["a"],VToolbar:N["a"],VToolbarTitle:j["a"]})}}]);