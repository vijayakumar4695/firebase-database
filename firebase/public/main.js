(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-studata></app-studata>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'studentdb';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _studata_studata_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./studata/studata.component */ "./src/app/studata/studata.component.ts");
/* harmony import */ var _studata_add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./studata/add/add.component */ "./src/app/studata/add/add.component.ts");
/* harmony import */ var _studata_list_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./studata/list/list.component */ "./src/app/studata/list/list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_student_stu_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/student/stu.service */ "./src/app/student/stu.service.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _studata_add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"],
                _studata_list_list_component__WEBPACK_IMPORTED_MODULE_11__["ListComponent"],
                _studata_studata_component__WEBPACK_IMPORTED_MODULE_9__["StudataComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"],
            ],
            providers: [src_app_student_stu_service__WEBPACK_IMPORTED_MODULE_13__["StuService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/studata/add/add.component.css":
/*!***********************************************!*\
  !*** ./src/app/studata/add/add.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    font-family:sans-serif;\r\n}\r\n.container-fluid{\r\n  border:2px solid black;\r\n  border-radius: 10px;\r\n}\r\nh2{\r\n    border-top:3px #000;\r\n    border-bottom:3px #000; \r\n    text-align:center;\r\n}\r\nlable{\r\n   -webkit-text-decoration: uppercase;\r\n           text-decoration: uppercase;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGF0YS9hZGQvYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCO0FBQ0E7R0FDRyxrQ0FBMEI7V0FBMUIsMEJBQTBCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGF0YS9hZGQvYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxufVxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5oMntcclxuICAgIGJvcmRlci10b3A6M3B4ICMwMDA7XHJcbiAgICBib3JkZXItYm90dG9tOjNweCAjMDAwOyBcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbmxhYmxle1xyXG4gICB0ZXh0LWRlY29yYXRpb246IHVwcGVyY2FzZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/studata/add/add.component.html":
/*!************************************************!*\
  !*** ./src/app/studata/add/add.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 bg-warning\">\n      <h2>STUDENT DATABASE ADD</h2>\n      <form name=\"form\" #form=\"ngForm\" class=\"was-validated\" (ngSubmit)=addts(form.value)>\n        <input type=\"hidden\" name=\"id\" #id=\"ngModel\" [(ngModel)]=\"service.studentdata.id\">\n          <div class=\"form-group\">\n              <label>Name:</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter yourname\" name=\"uname\" #uname=\"ngModel\" [(ngModel)]=\"service.studentdata.uname\" required>\n              <div class=\"valid-feedback\">Valid.</div>\n              <div class=\"invalid-feedback\">Please fill out this field.</div>\n            </div>\n            <div class=\"form-group\">\n                <label>Email:</label>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter your email\" name=\"email\" #email=\"ngModel\"[(ngModel)]=\"service.studentdata.email\" required>\n                <div class=\"valid-feedback\">Valid.</div>\n                <div class=\"invalid-feedback\">Please fill out this field.</div>\n              </div>  \n              <div class=\"form-group\">\n                  <label>Reg.No:</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter your reg no\" name=\"regno\" #regno=\"ngModel\" [(ngModel)]=\"service.studentdata.regno\" required>\n                  <div class=\"valid-feedback\">Valid.</div>\n                  <div class=\"invalid-feedback\">Please fill out this field.</div>\n                </div>\n                <div class=\"form-group\">\n                    <label>class:</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter your class\" name=\"class\" #class=\"ngModel\" [(ngModel)]=\"service.studentdata.class\" required>\n                    <div class=\"valid-feedback\">Valid.</div>\n                    <div class=\"invalid-feedback\">Please fill out this field.</div>\n                  </div>\n                <div class=\"form-group\">\n                      <label>Dayscholer/hosteller:</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter your \" name=\"dayhostel\" #dayhostel=\"ngModel\" [(ngModel)]=\"service.studentdata.dayhostel\" required>\n                      <div class=\"valid-feedback\">Valid.</div>\n                      <div class=\"invalid-feedback\">Please fill out this field.</div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Contact No:</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter your contact no\" name=\"contactno\" #contactno=\"ngModel\" [(ngModel)]=\"service.studentdata.contactno\" required>\n                        <div class=\"valid-feedback\">Valid.</div>\n                        <div class=\"invalid-feedback\">Please fill out this field.</div>\n                      </div>\n                      <div class=\"col-lg-12 text-center\">\n                      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                    </div>\n                    <br>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/studata/add/add.component.ts":
/*!**********************************************!*\
  !*** ./src/app/studata/add/add.component.ts ***!
  \**********************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_student_stu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/student/stu.service */ "./src/app/student/stu.service.ts");




var AddComponent = /** @class */ (function () {
    function AddComponent(service, firestore) {
        this.service = service;
        this.firestore = firestore;
    }
    AddComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    AddComponent.prototype.addts = function (value) {
        delete value.id;
        if (value.id == null)
            this.firestore.collection('student').add(value);
        else
            this.firestore.doc('student/' + value.id).update(value);
        this.myForm.reset();
        console.log(value);
    };
    AddComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.resetForm();
        this.service.studentdata = {
            id: null,
            uname: "",
            email: "",
            regno: "",
            class: "",
            dayhostel: "",
            contactno: "",
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddComponent.prototype, "myForm", void 0);
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/studata/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/studata/add/add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_student_stu_service__WEBPACK_IMPORTED_MODULE_3__["StuService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/studata/list/list.component.css":
/*!*************************************************!*\
  !*** ./src/app/studata/list/list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nh2{\r\n    text-align:center;\r\n    background-color: rgb(6, 66, 66);\r\n    color:white;\r\n    border-radius: 20px;\r\n    border-left-width: 20px;\r\n  \r\n}\r\ntable{\r\n    background-color:cyan;\r\n}\r\nthead{\r\n    background-color: darkorange; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGF0YS9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7QUFFM0I7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGF0YS9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaDJ7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA2NiwgNjYpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDIwcHg7XHJcbiAgXHJcbn1cclxudGFibGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmN5YW47XHJcbn1cclxudGhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JhbmdlOyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/studata/list/list.component.html":
/*!**************************************************!*\
  !*** ./src/app/studata/list/list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>STUDENT DATABASE LIST</h2>\n<table class=\"table table-hover\" border=\"3\">\n  <thead>\n    <th> Name</th>\n    <th> Email</th>\n    <th> Registerno</th>\n    <th> Class</th>\n    <th> Dayscholer/Hosteller</th>\n    <th> Mobilenumber</th>\n    <th> Delete</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let study of list\">\n    <td (click)=\"onEdit(study)\">{{study.uname}}</td>\n    <td (click)=\"onEdit(study)\">{{study.email}}</td>\n    <td (click)=\"onEdit(study)\">{{study.regno}}</td>\n    <td (click)=\"onEdit(study)\">{{study.class}}</td>\n    <td (click)=\"onEdit(study)\">{{study.dayhostel}}</td>\n    <td (click)=\"onEdit(study)\">{{study.contactno}}</td>\n    <td><a class=\"btn text-danger\"(click)=\"onDelete(study.id)\"><i class=\"fa fa-trash\"></i></a></td>\n</tr>\n  </tbody> \n</table>\n"

/***/ }),

/***/ "./src/app/studata/list/list.component.ts":
/*!************************************************!*\
  !*** ./src/app/studata/list/list.component.ts ***!
  \************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_student_stu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/student/stu.service */ "./src/app/student/stu.service.ts");




var ListComponent = /** @class */ (function () {
    function ListComponent(firestore, service) {
        this.firestore = firestore;
        this.service = service;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getStudent().subscribe(function (actionArray) {
            _this.list = actionArray.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    };
    ListComponent.prototype.onEdit = function (stu) {
        this.service.studentdata = Object.assign({}, stu);
    };
    ListComponent.prototype.onDelete = function (id) {
        if (confirm("Are You Sure Want To Delete It")) {
            this.firestore.doc('student/' + id).delete();
        }
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/studata/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/studata/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], src_app_student_stu_service__WEBPACK_IMPORTED_MODULE_3__["StuService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/studata/studata.component.css":
/*!***********************************************!*\
  !*** ./src/app/studata/studata.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    overflow-x: hidden;\r\n}\r\nh2{\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n    background:black;\r\n    color:white;\r\n    border:1px solid black;\r\n    border-radius: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGF0YS9zdHVkYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGF0YS9zdHVkYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbmgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/studata/studata.component.html":
/*!************************************************!*\
  !*** ./src/app/studata/studata.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h2>STUDENT DATABASE ADD AND LIST</h2>\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-3 col-sm-12\">    \n  <app-add></app-add>\n  </div>\n  <div class=\"col-lg-9 col-md-9 col-sm-12\">\n      <app-list></app-list>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/studata/studata.component.ts":
/*!**********************************************!*\
  !*** ./src/app/studata/studata.component.ts ***!
  \**********************************************/
/*! exports provided: StudataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudataComponent", function() { return StudataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudataComponent = /** @class */ (function () {
    function StudataComponent() {
    }
    StudataComponent.prototype.ngOnInit = function () {
    };
    StudataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studata',
            template: __webpack_require__(/*! ./studata.component.html */ "./src/app/studata/studata.component.html"),
            styles: [__webpack_require__(/*! ./studata.component.css */ "./src/app/studata/studata.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudataComponent);
    return StudataComponent;
}());



/***/ }),

/***/ "./src/app/student/stu.service.ts":
/*!****************************************!*\
  !*** ./src/app/student/stu.service.ts ***!
  \****************************************/
/*! exports provided: StuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StuService", function() { return StuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var StuService = /** @class */ (function () {
    function StuService(firestore) {
        this.firestore = firestore;
    }
    StuService.prototype.getStudent = function () {
        return this.firestore.collection('student').snapshotChanges();
    };
    StuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], StuService);
    return StuService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyA2R66_nzwawjrrM30WsgkMVJbjMkES-hA",
        authDomain: "fir-student-database-a19c7.firebaseapp.com",
        databaseURL: "https://fir-student-database-a19c7.firebaseio.com",
        projectId: "fir-student-database-a19c7",
        storageBucket: "fir-student-database-a19c7.appspot.com",
        messagingSenderId: "757811042783"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular\studentdb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map