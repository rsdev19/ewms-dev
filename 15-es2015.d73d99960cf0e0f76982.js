(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{KtfP:function(t,e,n){"use strict";n.r(e),n.d(e,"OrderManagerModule",function(){return rt});var i=n("ofXK"),r=n("tyNb"),o=n("M9IT"),a=n("+0xr"),c=n("AytR"),s=n("nhqp"),b=n("fXoL"),d=n("tk/3"),l=n("R5+c");let h=(()=>{class t{constructor(t,e){this.http=t,this._handelErrorResponseService=e,this.APIEndpoint=c.a.baseUrl}getOrderListAPI(t,e){return this.http.get(this.APIEndpoint+"order-list/"+e+"?page="+t)}searchOrdersAPI(t){return this.http.post(this.APIEndpoint+"orders/search",t)}productDropDownAPI(){return this.http.get(this.APIEndpoint+"product-dropdown")}deleteOrderedProductsAPI(t){return this.http.post(this.APIEndpoint+"delete-ordered-products/"+t,t)}}return t.\u0275fac=function(e){return new(e||t)(b.cc(d.b),b.cc(l.a))},t.\u0275prov=b.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=n("0IaG"),u=n("EQBp"),g=n("kmnG"),m=n("qFsG"),f=n("bTqV"),C=n("Xa2L"),_=n("d2a5"),v=n("KpFd"),U=n("yDRh");function V(t,e){1&t&&(b.Vb(0,"div",41),b.Qb(1,"mat-spinner",42),b.Ub())}function P(t,e){1&t&&b.Qb(0,"th",43)}function x(t,e){if(1&t){const t=b.Wb();b.Vb(0,"td",44),b.gc("click",function(t){return t.stopPropagation()}),b.Vb(1,"label",12),b.Vb(2,"input",45),b.gc("click",function(e){return b.Ec(t),b.kc().getCheckedItemId(e)}),b.Ub(),b.jc(),b.Vb(3,"svg",14),b.Qb(4,"path",15),b.Ub(),b.Ub(),b.Ub()}if(2&t){const t=e.$implicit;b.Cb(2),b.sc("value",t.id)}}function O(t,e){1&t&&(b.Vb(0,"th",46),b.Nc(1," Patient Name "),b.Ub())}function w(t,e){if(1&t&&(b.Vb(0,"td",47),b.Nc(1),b.lc(2,"textLimit"),b.Ub()),2&t){const t=e.$implicit;b.Cb(1),b.Pc(" ",b.oc(2,1,t.patient_name,0,15),"")}}function N(t,e){1&t&&(b.Vb(0,"th",46),b.Nc(1," ^ Order Date "),b.Ub())}function L(t,e){if(1&t&&(b.Vb(0,"td",48),b.Nc(1),b.lc(2,"dateFormat"),b.Ub()),2&t){const t=e.$implicit;b.Cb(1),b.Pc(" ",b.mc(2,1,t.created_at)," ")}}function k(t,e){1&t&&(b.Vb(0,"th",46),b.Nc(1," Order Status "),b.Ub())}function M(t,e){if(1&t&&(b.Vb(0,"td",49),b.Nc(1),b.Ub()),2&t){const t=e.$implicit;b.Cb(1),b.Pc(" ",t.order_status," ")}}function I(t,e){1&t&&(b.Vb(0,"th",46),b.Nc(1," Tracking # "),b.Ub())}function y(t,e){if(1&t&&(b.Vb(0,"td",47),b.Nc(1),b.Ub()),2&t){const t=e.$implicit;b.Cb(1),b.Pc("",t.order_number," ")}}function D(t,e){1&t&&(b.Vb(0,"th",46),b.Nc(1," Prior Auth "),b.Ub())}function Q(t,e){if(1&t&&(b.Vb(0,"td",50),b.Nc(1),b.Qb(2,"div",51),b.Ub()),2&t){const t=e.$implicit;b.Cb(1),b.Pc(" ",t.last_online,"")}}function S(t,e){1&t&&(b.Vb(0,"th",52),b.Nc(1," ^ Contact Nurse "),b.Ub())}function A(t,e){if(1&t&&(b.Vb(0,"td",53),b.Nc(1),b.Ub()),2&t){const t=e.$implicit;b.Cb(1),b.Pc(" ",t.nurse_name," ")}}function F(t,e){1&t&&b.Qb(0,"tr",54)}const R=function(t){return["product-view/",t]};function j(t,e){1&t&&b.Qb(0,"tr",55),2&t&&b.sc("routerLink",b.wc(1,R,e.$implicit.id))}function E(t,e){if(1&t){const t=b.Wb();b.Vb(0,"app-paginator-component",56),b.gc("pageNo",function(e){return b.Ec(t),b.kc().displayPageNo(e)}),b.Ub()}if(2&t){const t=b.kc();b.sc("lPage",t.lastPage)("pageNumber",t.pageNumber)}}function T(t,e){1&t&&(b.Vb(0,"div",57),b.Qb(1,"img",58),b.Ub())}let G=(()=>{class t{constructor(t,e,n){this._orderService=t,this.dialog=e,this._nav=n,this.displayedColumns=["x","patientname","orderdate","orderstatus","tracking","priorauth","contactnurse"],this.dataSource=new a.k,this.pageCount=1,this.lastPage=0,this.dataNotFound=!1,this.scrollFlag=!1,this.pagination_flag=!0,this.id_arr=[],this.btn_flag=!0,this.msgIds="",this.isLoading=!0,this.pageNumber=1,this.productList=[],this.fetchOrderList=(t,e)=>{this.subscription=this._orderService.getOrderListAPI(t,e).subscribe(t=>{t.status&&(this.dataSource=new a.k(t.order.data),this.lastPage=t.order.last_page,this.pageNumber=t.order.current_page,0===t.order.total&&(this.dataNotFound=!0),this.pagination_flag=!0,this.isLoading=!1)},t=>{throw t})},this.messageNurses=()=>{this.msgIds="",this.makeString(),this._nav.navigateTo("messages/message-nurses/"+this.msgIds)}}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.fetchOrderList(this.pageCount,c.a.MAX_ROW_LENGTH)}openDialog(){this.dialog.open(s.a,{data:{msg:"Are you sure you want to deactivate?"}}).afterClosed().subscribe(t=>{})}displayPageNo(t){this.fetchOrderList(t,c.a.MAX_ROW_LENGTH)}getCheckedItemId(t){t.target.checked?this.id_arr.push(t.target.value):this.id_arr.splice(this.id_arr.indexOf(t.target.value),1),this.btn_flag=!(this.id_arr.length>0)}makeString(){for(let t=0;t<this.id_arr.length;t++)this.msgIds=this.msgIds+this.id_arr[t]+",";this.msgIds=this.msgIds.substring(0,this.msgIds.length-1)}searchOrders(t){let e={string:t.target.value,fields:"patient_name"},n=t.target.value;n&&n.length?(this.pagination_flag=!1,this.subscription=this._orderService.searchOrdersAPI(e).subscribe(t=>{this.dataSource=new a.k(t.orders),this.scrollFlag=t.nurses.length>c.a.MAX_ROW_LENGTH})):(this.scrollFlag=!1,this.fetchOrderList(this.pageCount,c.a.MAX_ROW_LENGTH))}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(b.Pb(h),b.Pb(p.b),b.Pb(u.a))},t.\u0275cmp=b.Jb({type:t,selectors:[["app-order-manager"]],viewQuery:function(t,e){if(1&t&&b.Rc(o.a,1),2&t){let t;b.zc(t=b.hc())&&(e.paginator=t.first)}},decls:49,vars:7,consts:[[1,"col-lg-12","right-panel-height"],[1,"white-wrapper"],["style","display: flex;\n      justify-content: center;\n      align-items: center;\n      position: absolute;\n      top: 40%;\n      left:45%;",4,"ngIf"],[1,"box-heading"],[1,"w-100","mb-3"],[1,"row"],[1,"col-lg-8","plane-ling"],[1,"form-inline","has-search"],["appearance","standard",1,"example-full-width"],[1,"fa","fa-search","form-control-feedback"],["matInput","","placeholder","Search","autocomplete","off",1,"form-control",3,"keyup"],[1,"auth-wrapper"],[1,"checkbox","path","float-left"],["type","checkbox"],["viewBox","0 0 21 21"],["d","M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"],[1,"box-heading-profile-name","float-left","auth-items"],[1,"col-lg-4","plane-ling"],["mat-stroked-button","","type","button",1,"regular-btn","ml-3","float-right","arc-btn"],[1,"mat-elevation-z8","no-shadow",3,"ngClass"],["mat-table","",1,"user-table",3,"dataSource"],["matColumnDef","x"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","width","8%",3,"click",4,"matCellDef"],["matColumnDef","patientname"],["class","text-left","mat-header-cell","",4,"matHeaderCellDef"],["class","text-left","mat-cell","","width","15%",4,"matCellDef"],["matColumnDef","orderdate"],["class","text-left","mat-cell","","width","10%",4,"matCellDef"],["matColumnDef","orderstatus"],["class","text-left","mat-cell","","width","25%",4,"matCellDef"],["matColumnDef","tracking"],["matColumnDef","priorauth"],["class","text-left","mat-cell","","width","8%",4,"matCellDef"],["matColumnDef","contactnurse"],["class","text-right","mat-header-cell","",4,"matHeaderCellDef"],["class","text-right","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"routerLink",4,"matRowDef","matRowDefColumns"],["class","page-number",3,"lPage","pageNumber","pageNo",4,"ngIf"],["class","d-block text-center",4,"ngIf"],[2,"display","flex","justify-content","center","align-items","center","position","absolute","top","40%","left","45%"],["color","primary"],["mat-header-cell",""],["mat-cell","","width","8%",3,"click"],["type","checkbox",3,"value","click"],["mat-header-cell","",1,"text-left"],["mat-cell","","width","15%",1,"text-left"],["mat-cell","","width","10%",1,"text-left"],["mat-cell","","width","25%",1,"text-left"],["mat-cell","","width","8%",1,"text-left"],[1,"auth-dot"],["mat-header-cell","",1,"text-right"],["mat-cell","",1,"text-right"],["mat-header-row",""],["mat-row","",3,"routerLink"],[1,"page-number",3,"lPage","pageNumber","pageNo"],[1,"d-block","text-center"],["src","../../../assets/img/nodata.png"]],template:function(t,e){1&t&&(b.Vb(0,"div",0),b.Vb(1,"div",1),b.Lc(2,V,2,0,"div",2),b.Vb(3,"h3",3),b.Nc(4,"Order Manager"),b.Ub(),b.Vb(5,"div",4),b.Vb(6,"div",5),b.Vb(7,"div",6),b.Vb(8,"div",7),b.Vb(9,"mat-form-field",8),b.Qb(10,"span",9),b.Vb(11,"input",10),b.gc("keyup",function(t){return e.searchOrders(t)}),b.Ub(),b.Ub(),b.Vb(12,"div",11),b.Vb(13,"label",12),b.Qb(14,"input",13),b.jc(),b.Vb(15,"svg",14),b.Qb(16,"path",15),b.Ub(),b.Ub(),b.ic(),b.Vb(17,"div",16),b.Nc(18,"Prior Auth Items Only"),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Vb(19,"div",17),b.Vb(20,"button",18),b.Nc(21,"Archive"),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Vb(22,"div",19),b.Vb(23,"table",20),b.Tb(24,21),b.Lc(25,P,1,0,"th",22),b.Lc(26,x,5,1,"td",23),b.Sb(),b.Tb(27,24),b.Lc(28,O,2,0,"th",25),b.Lc(29,w,3,5,"td",26),b.Sb(),b.Tb(30,27),b.Lc(31,N,2,0,"th",25),b.Lc(32,L,3,3,"td",28),b.Sb(),b.Tb(33,29),b.Lc(34,k,2,0,"th",25),b.Lc(35,M,2,1,"td",30),b.Sb(),b.Tb(36,31),b.Lc(37,I,2,0,"th",25),b.Lc(38,y,2,1,"td",26),b.Sb(),b.Tb(39,32),b.Lc(40,D,2,0,"th",25),b.Lc(41,Q,3,1,"td",33),b.Sb(),b.Tb(42,34),b.Lc(43,S,2,0,"th",35),b.Lc(44,A,2,1,"td",36),b.Sb(),b.Lc(45,F,1,0,"tr",37),b.Lc(46,j,1,3,"tr",38),b.Ub(),b.Lc(47,E,1,2,"app-paginator-component",39),b.Ub(),b.Lc(48,T,2,0,"div",40),b.Ub(),b.Ub()),2&t&&(b.Cb(2),b.sc("ngIf",e.isLoading),b.Cb(20),b.sc("ngClass",e.scrollFlag?"ex1":""),b.Cb(1),b.sc("dataSource",e.dataSource),b.Cb(22),b.sc("matHeaderRowDef",e.displayedColumns),b.Cb(1),b.sc("matRowDefColumns",e.displayedColumns),b.Cb(1),b.sc("ngIf",e.pagination_flag),b.Cb(1),b.sc("ngIf",e.dataNotFound))},directives:[i.m,g.b,m.b,f.a,i.k,a.j,a.c,a.e,a.b,a.g,a.i,C.b,a.d,a.a,a.f,a.h,r.g,_.a],pipes:[v.a,U.a],styles:["div.ex1[_ngcontent-%COMP%], table[_ngcontent-%COMP%]{width:100%}div.ex1[_ngcontent-%COMP%]{max-height:490px;min-height:0;overflow-y:scroll}.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:0!important}.auth-wrapper[_ngcontent-%COMP%]{margin-left:23px;margin-top:6px}.arc-btn[_ngcontent-%COMP%]{padding:0 30px!important}.auth-dot[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:100%;background-color:#508ff4;margin:0 auto}"]}),t})();var $=n("3Pt+"),H=n("z3Rz"),z=n("d3UM"),X=n("FKr1");function W(t,e){1&t&&(b.Vb(0,"div",20),b.Qb(1,"mat-spinner",21),b.Ub())}function B(t,e){if(1&t&&(b.Vb(0,"mat-option",32),b.Nc(1),b.Ub()),2&t){const t=e.$implicit;b.sc("value",t.product_id),b.Cb(1),b.Pc(" ",t.product_name,"")}}function J(t,e){if(1&t){const t=b.Wb();b.Vb(0,"tbody",22),b.Vb(1,"tr",23),b.Vb(2,"td"),b.Vb(3,"div",6),b.Vb(4,"label",7),b.Vb(5,"input",24),b.gc("click",function(){b.Ec(t);const n=e.$implicit;return b.kc().getCheckedItemId(n.value.id)}),b.Ub(),b.jc(),b.Vb(6,"svg",9),b.Qb(7,"path",10),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.ic(),b.Vb(8,"td"),b.Vb(9,"mat-select",25),b.Vb(10,"mat-option",26),b.Nc(11,"Choose a product"),b.Ub(),b.Lc(12,B,2,2,"mat-option",27),b.Ub(),b.Ub(),b.Vb(13,"td"),b.Qb(14,"input",28),b.Ub(),b.Vb(15,"td"),b.Qb(16,"input",29),b.Ub(),b.Vb(17,"td"),b.Qb(18,"div",30),b.Qb(19,"input",31),b.Ub(),b.Vb(20,"td"),b.Qb(21,"input",31),b.Ub(),b.Ub(),b.Ub()}if(2&t){const t=e.index,n=b.kc();b.Cb(1),b.sc("formGroupName",t),b.Cb(11),b.sc("ngForOf",n.productDetails)}}let q=(()=>{class t{constructor(t,e,n,i){this.activatedRoute=t,this.formBuilder=e,this._orderService=n,this._toastr=i,this.productDetails=[],this.productList=[],this.id_arr=[],this.delete_btn_flag=!0,this.msgIds="",this.isLoading=!0,this.getProductList=()=>{this._orderService.productDropDownAPI().subscribe(t=>{this.productList=t.productdropdown}),this.isLoading=!1}}ngOnInit(){this.orderForm=new $.k({items:new $.e([])}),this.getProductList(),this.productDetails=this.activatedRoute.snapshot.data.order.order.ordered_products,console.log("->",this.productDetails),this.productDetails.map(t=>{console.log(t),this.addItem(t.id,t.product_id,t.product_name,t.product_variant)})}createItem(t,e,n,i){return this.formBuilder.group({id:[t],product_id:[e],product_name:[e],product_variant:[i]})}addItem(t,e,n,i){this.items=this.orderForm.get("items"),this.items.push(this.createItem(t,e,n,i))}getControls(){return this.orderForm.get("items").controls}getCheckedItemId(t){this.id_arr.includes(t)?(console.log("exists"),this.id_arr.splice(this.id_arr.indexOf(t),1)):this.id_arr.push(t),this.delete_btn_flag=!(this.id_arr.length>0)}makeString(){for(let t=0;t<this.id_arr.length;t++)this.msgIds=this.msgIds+this.id_arr[t]+",";this.msgIds=this.msgIds.substring(0,this.msgIds.length-1)}deleteProducts(){this.msgIds="",this.makeString(),this.subscription=this._orderService.deleteOrderedProductsAPI(this.msgIds).subscribe(t=>{let e=Object.values(t);this.isLoading=!0,this._toastr.showAlert(e[2],"success"),this.getProductList()},t=>{throw t})}}return t.\u0275fac=function(e){return new(e||t)(b.Pb(r.a),b.Pb($.g),b.Pb(h),b.Pb(H.a))},t.\u0275cmp=b.Jb({type:t,selectors:[["app-product-edit"]],decls:50,vars:4,consts:[[1,"col-lg-12","right-panel-height"],[1,"white-wrapper"],["style","display: flex;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        top: 40%;\n        left:45%;",4,"ngIf"],[1,"row"],[1,"col-lg-7","header-checkbox"],[1,"box-heading","float-left","mr-4"],[1,"auth-wrapper"],[1,"checkbox","path","float-left"],["type","checkbox"],["viewBox","0 0 21 21"],["d","M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"],[1,"box-heading-profile-name","float-left","auth-items"],[1,"plane-ling","col-lg-5"],["mat-stroked-button","","type","button",1,"regular-btn","ml-3","float-right","arc-btn"],["mat-stroked-button","","type","button",1,"regular-btn","ml-3","float-right","arc-btn",3,"disabled","click"],[1,"clearfix"],[3,"formGroup"],[1,"table","table-borderless"],[1,"text-center"],["formArrayName","items",4,"ngFor","ngForOf"],[2,"display","flex","justify-content","center","align-items","center","position","absolute","top","40%","left","45%"],["color","primary"],["formArrayName","items"],[3,"formGroupName"],["type","checkbox",3,"click"],["formControlName","product_name",1,"custom-fild"],["value",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","product_variant","placeholder","Item name",1,"custom-fild"],["formControlName","product_variant","placeholder","Item name","readonly","",1,"custom-fild"],[1,"small-width"],["formControlName","product_name","placeholder","Item name","readonly","",1,"custom-fild"],[3,"value"]],template:function(t,e){1&t&&(b.Vb(0,"div",0),b.Vb(1,"div",1),b.Lc(2,W,2,0,"div",2),b.Vb(3,"div",3),b.Vb(4,"div",4),b.Vb(5,"h3",5),b.Nc(6,"Edit Order"),b.Ub(),b.Vb(7,"div",6),b.Vb(8,"label",7),b.Qb(9,"input",8),b.jc(),b.Vb(10,"svg",9),b.Qb(11,"path",10),b.Ub(),b.Ub(),b.ic(),b.Vb(12,"div",11),b.Nc(13,"Under Review"),b.Ub(),b.Ub(),b.Vb(14,"div",6),b.Vb(15,"label",7),b.Qb(16,"input",8),b.jc(),b.Vb(17,"svg",9),b.Qb(18,"path",10),b.Ub(),b.Ub(),b.ic(),b.Vb(19,"div",11),b.Nc(20,"Shipped"),b.Ub(),b.Ub(),b.Vb(21,"div",6),b.Vb(22,"label",7),b.Qb(23,"input",8),b.jc(),b.Vb(24,"svg",9),b.Qb(25,"path",10),b.Ub(),b.Ub(),b.ic(),b.Vb(26,"div",11),b.Nc(27,"Delivered"),b.Ub(),b.Ub(),b.Ub(),b.Vb(28,"div",12),b.Vb(29,"button",13),b.Nc(30,"Confirm Changes"),b.Ub(),b.Vb(31,"button",14),b.gc("click",function(){return e.deleteProducts()}),b.Nc(32,"Delete Item"),b.Ub(),b.Ub(),b.Ub(),b.Qb(33,"div",15),b.Vb(34,"div",16),b.Vb(35,"div"),b.Vb(36,"table",17),b.Vb(37,"tr"),b.Qb(38,"th"),b.Vb(39,"th"),b.Nc(40,"Item Name"),b.Ub(),b.Vb(41,"th",18),b.Nc(42,"Quantity"),b.Ub(),b.Vb(43,"th",18),b.Nc(44,"Specification"),b.Ub(),b.Vb(45,"th",18),b.Nc(46,"Specification2"),b.Ub(),b.Vb(47,"th",18),b.Nc(48,"Other"),b.Ub(),b.Ub(),b.Lc(49,J,22,2,"tbody",19),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&t&&(b.Cb(2),b.sc("ngIf",e.isLoading),b.Cb(29),b.sc("disabled",e.delete_btn_flag),b.Cb(3),b.sc("formGroup",e.orderForm),b.Cb(15),b.sc("ngForOf",e.getControls()))},directives:[i.m,f.a,$.t,$.l,i.l,C.b,$.f,$.m,z.a,$.s,$.j,X.m,$.d],styles:[".auth-items[_ngcontent-%COMP%], .mr-4[_ngcontent-%COMP%]{margin-right:20px}.checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .header-checkbox[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:20px!important;height:20px!important;top:5px}.header-checkbox[_ngcontent-%COMP%]   .auth-items[_ngcontent-%COMP%]{margin-top:3px!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:none!important;font-family:Lato,sans-serif!important;font-size:11px!important;color:rgba(0,0,0,.8705882352941177)!important}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:2px solid #eaf2ff!important;border-top:2px solid #eaf2ff!important;color:rgba(0,0,0,.5411764705882353);font-size:12px;font-weight:500}.plane-ling[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:110px}.header-checkbox[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{border-bottom:none!important}.table-borderless[_ngcontent-%COMP%]   .custom-fild[_ngcontent-%COMP%]{height:35px;padding:5px;margin-bottom:0!important;color:#666}.table-borderless[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{top:5px}.table-borderless[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{top:0!important;width:25px!important;height:25px!important}.small-width[_ngcontent-%COMP%]{width:30px}.table-borderless[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] + tbody[_ngcontent-%COMP%]{border:none}"]}),t})();function K(t,e){if(1&t&&(b.Vb(0,"tr"),b.Vb(1,"td"),b.Nc(2),b.Ub(),b.Vb(3,"td",16),b.Nc(4),b.Ub(),b.Vb(5,"td",16),b.Nc(6),b.Ub(),b.Vb(7,"td",16),b.Nc(8),b.Ub(),b.Vb(9,"td",16),b.Nc(10),b.Ub(),b.Ub()),2&t){const t=e.$implicit;b.Cb(2),b.Oc(t.product_name),b.Cb(2),b.Oc(t.quantity),b.Cb(2),b.Oc(t.product_variant),b.Cb(2),b.Oc(t.product_variant),b.Cb(2),b.Oc(t.product_variant)}}const Y=function(t){return["../../product-edit/",t]};let Z=(()=>{class t{constructor(t){this.activatedRoute=t,this.orderDetails=[],this.u_id=0}ngOnInit(){let t=this.activatedRoute.snapshot.data.order;t.status&&(this.u_id=t.order.id,this.orderDetails=t.order.ordered_products)}}return t.\u0275fac=function(e){return new(e||t)(b.Pb(r.a))},t.\u0275cmp=b.Jb({type:t,selectors:[["app-product-view"]],decls:47,vars:4,consts:[[1,"col-lg-12","right-panel-height"],[1,"white-wrapper"],[1,"row"],[1,"col-lg-7","header-checkbox"],[1,"box-heading","float-left","mr-4"],[1,"auth-wrapper"],[1,"checkbox","path","float-left"],["type","checkbox"],["viewBox","0 0 21 21"],["d","M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"],[1,"box-heading-profile-name","float-left","auth-items"],[1,"plane-ling","col-lg-5"],["mat-stroked-button","","type","button",1,"regular-btn","ml-3","float-right","arc-btn",3,"routerLink"],["mat-stroked-button","","type","button",1,"regular-btn","ml-3","float-right","arc-btn"],[1,"clearfix"],[1,"table"],[1,"text-center"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(b.Vb(0,"div",0),b.Vb(1,"div",1),b.Vb(2,"div",2),b.Vb(3,"div",3),b.Vb(4,"h3",4),b.Nc(5,"Order View"),b.Ub(),b.Vb(6,"div",5),b.Vb(7,"label",6),b.Qb(8,"input",7),b.jc(),b.Vb(9,"svg",8),b.Qb(10,"path",9),b.Ub(),b.Ub(),b.ic(),b.Vb(11,"div",10),b.Nc(12,"Under Review"),b.Ub(),b.Ub(),b.Vb(13,"div",5),b.Vb(14,"label",6),b.Qb(15,"input",7),b.jc(),b.Vb(16,"svg",8),b.Qb(17,"path",9),b.Ub(),b.Ub(),b.ic(),b.Vb(18,"div",10),b.Nc(19,"Shipped"),b.Ub(),b.Ub(),b.Vb(20,"div",5),b.Vb(21,"label",6),b.Qb(22,"input",7),b.jc(),b.Vb(23,"svg",8),b.Qb(24,"path",9),b.Ub(),b.Ub(),b.ic(),b.Vb(25,"div",10),b.Nc(26,"Delivered"),b.Ub(),b.Ub(),b.Ub(),b.Vb(27,"div",11),b.Vb(28,"button",12),b.Nc(29,"Edit"),b.Ub(),b.Vb(30,"button",13),b.Nc(31,"Archive"),b.Ub(),b.Ub(),b.Ub(),b.Qb(32,"div",14),b.Vb(33,"div"),b.Vb(34,"table",15),b.Vb(35,"tr"),b.Vb(36,"th"),b.Nc(37,"Item Name"),b.Ub(),b.Vb(38,"th",16),b.Nc(39,"Quantity"),b.Ub(),b.Vb(40,"th",16),b.Nc(41,"Specification"),b.Ub(),b.Vb(42,"th",16),b.Nc(43,"Specification2"),b.Ub(),b.Vb(44,"th",16),b.Nc(45,"Other"),b.Ub(),b.Ub(),b.Lc(46,K,11,5,"tr",17),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&t&&(b.Cb(28),b.sc("routerLink",b.wc(2,Y,e.u_id)),b.Cb(18),b.sc("ngForOf",e.orderDetails))},directives:[f.a,r.g,i.l],styles:[".auth-items[_ngcontent-%COMP%], .mr-4[_ngcontent-%COMP%]{margin-right:20px}.checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .header-checkbox[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:20px!important;height:20px!important;top:5px}.header-checkbox[_ngcontent-%COMP%]   .auth-items[_ngcontent-%COMP%]{margin-top:3px!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:none!important;font-family:Lato,sans-serif!important;font-size:11px!important;color:rgba(0,0,0,.8705882352941177)!important}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:2px solid #eaf2ff!important;border-top:2px solid #eaf2ff!important;color:rgba(0,0,0,.5411764705882353);font-size:12px;font-weight:500}.plane-ling[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:110px}.header-checkbox[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{border-bottom:none!important}"]}),t})(),tt=(()=>{class t{constructor(t){this.http=t}resolve(t){return this.id=t.paramMap.get("id"),this.http.get(c.a.baseUrl+"order-details/"+this.id,this.id)}}return t.\u0275fac=function(e){return new(e||t)(b.cc(d.b))},t.\u0275prov=b.Lb({token:t,factory:t.\u0275fac}),t})();const et=[{path:"",component:G},{path:"product-view/:id",component:Z,resolve:{order:tt}},{path:"product-edit/:id",component:q,resolve:{order:tt}}];let nt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Nb({type:t}),t.\u0275inj=b.Mb({imports:[[r.j.forChild(et)],r.j]}),t})();var it=n("FpXt");let rt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Nb({type:t}),t.\u0275inj=b.Mb({providers:[tt],imports:[[i.c,nt,it.a]]}),t})()}}]);