(self["webpackChunkweiss_chat"] = self["webpackChunkweiss_chat"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/register/register.component */ 193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    { path: '/api/user/register', component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _views_chat_chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/chat/chat.component */ 678);



class AppComponent {
    constructor() { }
    ngOnInit() {
    }
    ngDoCheck() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "container"], ["routerLink", "'/api/user/register'", "]", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _views_chat_chat_component__WEBPACK_IMPORTED_MODULE_0__.ChatComponent], styles: ["nav[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  width: 10%;\n  margin: 0 auto;\n  text-align: center;\n  padding: 1rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0FBQ2pCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm5hdiB1bCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5uYXYgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_module_chats_list_chats_list_chats_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/module-chats-list/chats-list/chats-list.component */ 5607);
/* harmony import */ var _components_module_chats_list_chat_item_chat_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/module-chats-list/chat-item/chat-item.component */ 9002);
/* harmony import */ var _components_module_chats_list_chats_list_header_chats_list_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/module-chats-list/chats-list-header/chats-list-header.component */ 3177);
/* harmony import */ var _components_module_chat_window_chat_window_header_chat_window_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/module-chat-window/chat-window-header/chat-window-header.component */ 7918);
/* harmony import */ var _components_module_chat_window_user_message_user_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/module-chat-window/user-message/user-message.component */ 6329);
/* harmony import */ var _components_module_chat_window_chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/module-chat-window/chat-form/chat-form.component */ 5395);
/* harmony import */ var _components_module_chat_window_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/module-chat-window/chat-window/chat-window.component */ 3935);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 707);
/* harmony import */ var _views_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/chat/chat.component */ 678);
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/register/register.component */ 193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_module_chats_list_chats_list_chats_list_component__WEBPACK_IMPORTED_MODULE_2__.ChatsListComponent,
        _components_module_chats_list_chat_item_chat_item_component__WEBPACK_IMPORTED_MODULE_3__.ChatItemComponent,
        _components_module_chats_list_chats_list_header_chats_list_header_component__WEBPACK_IMPORTED_MODULE_4__.ChatsListHeaderComponent,
        _components_module_chat_window_chat_window_header_chat_window_header_component__WEBPACK_IMPORTED_MODULE_5__.ChatWindowHeaderComponent,
        _components_module_chat_window_user_message_user_message_component__WEBPACK_IMPORTED_MODULE_6__.UserMessageComponent,
        _components_module_chat_window_chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_7__.ChatFormComponent,
        _components_module_chat_window_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_8__.ChatWindowComponent,
        _views_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__.ChatComponent,
        _views_register_register_component__WEBPACK_IMPORTED_MODULE_10__.RegisterComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule] }); })();


/***/ }),

/***/ 5395:
/*!********************************************************************************!*\
  !*** ./src/app/components/module-chat-window/chat-form/chat-form.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatFormComponent": () => (/* binding */ ChatFormComponent)
/* harmony export */ });
/* harmony import */ var _models_chatMessageDto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/chatMessageDto */ 973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/web-socket.service */ 509);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 707);




class ChatFormComponent {
    constructor(webSocketService) {
        this.webSocketService = webSocketService;
    }
    ngOnInit() {
        this.webSocketService.openWebSocket();
    }
    ngOnDestroy() {
        this.webSocketService.closeWebSocket();
    }
    sendMessage(sendForm) {
        const chatMessageDto = new _models_chatMessageDto__WEBPACK_IMPORTED_MODULE_0__.ChatMessageDto(sendForm.value.message);
        this.webSocketService.sendMessage(chatMessageDto);
        console.log(sendForm.value);
    }
}
ChatFormComponent.ɵfac = function ChatFormComponent_Factory(t) { return new (t || ChatFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_web_socket_service__WEBPACK_IMPORTED_MODULE_1__.WebSocketService)); };
ChatFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChatFormComponent, selectors: [["app-chat-form"]], decls: 8, vars: 0, consts: [[1, "chat-form"], ["action", "", 3, "ngSubmit"], ["sendForm", "ngForm"], ["name", "message", "id", "message", "placeholder", "Write a message...", "ngModel", ""], ["type", "submit"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chat-fill"], ["d", "M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"]], template: function ChatFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ChatFormComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return ctx.sendMessage(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: [".chat-form[_ngcontent-%COMP%] {\n  height: 10%;\n  width: 100%;\n  color: #2d2d2d;\n}\n\n.chat-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n}\n\n.chat-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  height: inherit;\n}\n\n.chat-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n  padding: .5rem;\n  background-color: #fff;\n  color: #2d2d2d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.chat-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\n  width: 98%;\n  padding: 1%;\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoiY2hhdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1mb3JtIHtcbiAgaGVpZ2h0OiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzJkMmQyZDtcbn1cblxuLmNoYXQtZm9ybSBmb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNoYXQtZm9ybSBmb3JtIHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cblxuLmNoYXQtZm9ybSBmb3JtIHAgYnV0dG9ue1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMyZDJkMmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2hhdC1mb3JtIGZvcm0gcCB0ZXh0YXJlYXtcbiAgd2lkdGg6IDk4JTtcbiAgcGFkZGluZzogMSU7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7918:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/module-chat-window/chat-window-header/chat-window-header.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatWindowHeaderComponent": () => (/* binding */ ChatWindowHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_data_exchange_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/data-exchange.service */ 3340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function ChatWindowHeaderComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.user[ctx_r0.userId].userName[0], " ");
} }
function ChatWindowHeaderComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.user[ctx_r1.userId].userName[0], " ");
} }
class ChatWindowHeaderComponent {
    constructor(dataExchangeService) {
        this.dataExchangeService = dataExchangeService;
        this.userId = 0;
        this.user = [
            { userId: 0, userName: 'Loading' }
        ];
        this.circleColor = '#5bd8d0';
    }
    ngOnInit() {
    }
    ngDoCheck() {
        this.dataExchangeService.users$.subscribe(response => this.user = response);
        this.dataExchangeService.userId$.subscribe(response => this.userId = response);
    }
}
ChatWindowHeaderComponent.ɵfac = function ChatWindowHeaderComponent_Factory(t) { return new (t || ChatWindowHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_exchange_service__WEBPACK_IMPORTED_MODULE_0__.DataExchangeService)); };
ChatWindowHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatWindowHeaderComponent, selectors: [["app-chat-window-header"]], decls: 5, vars: 3, consts: [[1, "chat-window-header"], ["class", "circle", "style", "background: #5bd8d0", 4, "ngIf"], ["class", "circle", "style", "background: #579c6d", 4, "ngIf"], [1, "name"], [1, "circle", 2, "background", "#5bd8d0"], [1, "circle", 2, "background", "#579c6d"]], template: function ChatWindowHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatWindowHeaderComponent_p_1_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatWindowHeaderComponent_p_2_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userId % 2 === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userId % 2 !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user[ctx.userId].userName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".chat-window-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 15%;\n  background-color: #2b2b2b;\n  color: #fff;\n}\n\n.chat-window-header[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.chat-window-header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtd2luZG93LWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBOztBQUVBIiwiZmlsZSI6ImNoYXQtd2luZG93LWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtd2luZG93LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jaGF0LXdpbmRvdy1oZWFkZXIgLmNpcmNsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5jaGF0LXdpbmRvdy1oZWFkZXIgLm5hbWUge1xuXG59XG4iXX0= */"] });


/***/ }),

/***/ 3935:
/*!************************************************************************************!*\
  !*** ./src/app/components/module-chat-window/chat-window/chat-window.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatWindowComponent": () => (/* binding */ ChatWindowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/web-socket.service */ 509);
/* harmony import */ var _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat-form/chat-form.component */ 5395);
/* harmony import */ var _user_message_user_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-message/user-message.component */ 6329);




function ChatWindowComponent_app_user_message_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-user-message", 4);
} }
class ChatWindowComponent {
    constructor(webSocketService) {
        this.webSocketService = webSocketService;
    }
    ngOnInit() {
    }
    ngDoCheck() {
        console.log(this.webSocketService);
    }
}
ChatWindowComponent.ɵfac = function ChatWindowComponent_Factory(t) { return new (t || ChatWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_web_socket_service__WEBPACK_IMPORTED_MODULE_0__.WebSocketService)); };
ChatWindowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChatWindowComponent, selectors: [["app-chat-window"]], decls: 5, vars: 0, consts: [[1, "chat-window"], [1, "chat-window-wrapper"], [1, "messages-window"], ["class", "message", 4, "ngFor"], [1, "message"]], template: function ChatWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ChatWindowComponent_app_user_message_3_Template, 1, 0, "app-user-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-chat-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_1__.ChatFormComponent, _user_message_user_message_component__WEBPACK_IMPORTED_MODULE_2__.UserMessageComponent], styles: [".chat-window[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 85%;\n  background-color: #fff;\n}\n\n.chat-window[_ngcontent-%COMP%]   .chat-window-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  color: #ffffff;\n  background-image: url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/tp190-sasi-07.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=96214648e7f65464403659b9a95e9073);\n}\n\n.chat-window[_ngcontent-%COMP%]   .chat-window-wrapper[_ngcontent-%COMP%]   .messages-window[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.message[_ngcontent-%COMP%] {\n  width: 70%;\n  padding: .5rem;\n  margin: 1rem;\n  background-color: #2d2d2d;\n}\n\n.message.answer[_ngcontent-%COMP%] {\n  align-self: end;\n  \n  background-color: darkgreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtd2luZG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLHVPQUF1TztBQUN6Tzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJjaGF0LXdpbmRvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtd2luZG93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY2hhdC13aW5kb3cgLmNoYXQtd2luZG93LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1nLnJhd3BpeGVsLmNvbS9zM2ZzLXByaXZhdGUvcmF3cGl4ZWxfaW1hZ2VzL3dlYnNpdGVfY29udGVudC90cDE5MC1zYXNpLTA3LmpwZz93PTgwMCZkcHI9MSZmaXQ9ZGVmYXVsdCZjcm9wPWRlZmF1bHQmcT02NSZ2aWI9MyZjb249MyZ1c209MTUmYmc9RjRGNEYzJml4bGliPWpzLTIuMi4xJnM9OTYyMTQ2NDhlN2Y2NTQ2NDQwMzY1OWI5YTk1ZTkwNzMpO1xufVxuXG4uY2hhdC13aW5kb3cgLmNoYXQtd2luZG93LXdyYXBwZXIgLm1lc3NhZ2VzLXdpbmRvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLm1lc3NhZ2Uge1xuICB3aWR0aDogNzAlO1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgbWFyZ2luOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xufVxuXG4ubWVzc2FnZS5hbnN3ZXIge1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIC8qbWFyZ2luLWxlZnQ6IDcuNnJlbTsqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XG59XG4iXX0= */"] });


/***/ }),

/***/ 6329:
/*!**************************************************************************************!*\
  !*** ./src/app/components/module-chat-window/user-message/user-message.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMessageComponent": () => (/* binding */ UserMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class UserMessageComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserMessageComponent.ɵfac = function UserMessageComponent_Factory(t) { return new (t || UserMessageComponent)(); };
UserMessageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserMessageComponent, selectors: [["app-user-message"]], decls: 2, vars: 0, template: function UserMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nesciunt possimus quod vel vitae voluptates. Aperiam, dignissimos, hic! Consectetur deserunt eos incidunt maiores officiis optio porro saepe, sequi sint voluptates.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 9002:
/*!*******************************************************************************!*\
  !*** ./src/app/components/module-chats-list/chat-item/chat-item.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatItemComponent": () => (/* binding */ ChatItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_data_exchange_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/data-exchange.service */ 3340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function ChatItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " M ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background-color: ", ctx_r0.circleColor[0].color, "");
} }
function ChatItemComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " M ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background-color: ", ctx_r1.circleColor[1].color, "");
} }
class ChatItemComponent {
    constructor(dataExchangeService) {
        this.dataExchangeService = dataExchangeService;
    }
    ngOnInit() {
    }
    openChat() {
        this.dataExchangeService.provideUserId(this.user.userId);
    }
}
ChatItemComponent.ɵfac = function ChatItemComponent_Factory(t) { return new (t || ChatItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_exchange_service__WEBPACK_IMPORTED_MODULE_0__.DataExchangeService)); };
ChatItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatItemComponent, selectors: [["app-chat-item"]], inputs: { user: "user", circleColor: "circleColor", index: "index" }, decls: 6, vars: 3, consts: [[1, "chat-item", 3, "click"], ["class", "circle", 3, "style", 4, "ngIf"], [1, "name-message"], [1, "user-name"], [1, "circle"]], template: function ChatItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatItemComponent_Template_div_click_0_listener() { return ctx.openChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatItemComponent_div_1_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatItemComponent_div_2_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.index % 2 === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.index % 2 !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.userName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".chat-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  align-content: center;\n  cursor: pointer;\n}\n\n.name-message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: start;\n  width: 40%;\n}\n\n.name-message[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%], .short-message[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.chat-item-wrapper[_ngcontent-%COMP%]   .message-date[_ngcontent-%COMP%] {\n  width: 40%;\n  text-align: right;\n  display: flex;\n  justify-content: end;\n  align-items: start;\n  margin-top: .2rem;\n  font-size: 12px;\n  color: inherit;\n  line-height: 1rem;\n}\n\n.chat-item-wrapper[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoiY2hhdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hbWUtbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLm5hbWUtbWVzc2FnZSAudXNlci1uYW1lLCAuc2hvcnQtbWVzc2FnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2hhdC1pdGVtLXdyYXBwZXIgLm1lc3NhZ2UtZGF0ZSB7XG4gIHdpZHRoOiA0MCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBtYXJnaW4tdG9wOiAuMnJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDFyZW07XG59XG5cbi5jaGF0LWl0ZW0td3JhcHBlciAudXNlci1uYW1lIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ 3177:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/module-chats-list/chats-list-header/chats-list-header.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsListHeaderComponent": () => (/* binding */ ChatsListHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_data_exchange_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/data-exchange.service */ 3340);


class ChatsListHeaderComponent {
    constructor(dataExchangeService) {
        this.dataExchangeService = dataExchangeService;
        this.usersCouner = 0;
    }
    ngOnInit() {
    }
    ngDoCheck() {
        this.dataExchangeService.users$.subscribe(response => this.usersCouner = response.length);
    }
}
ChatsListHeaderComponent.ɵfac = function ChatsListHeaderComponent_Factory(t) { return new (t || ChatsListHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_exchange_service__WEBPACK_IMPORTED_MODULE_0__.DataExchangeService)); };
ChatsListHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatsListHeaderComponent, selectors: [["app-chats-list-header"]], decls: 5, vars: 1, consts: [[1, "chats-list-header"], [1, "message-counter-title"], [1, "message-counter"]], template: function ChatsListHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.usersCouner);
    } }, styles: [".chats-list-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 15%;\n  background-color: #2b2b2b;\n  color: #fff;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n.chats-list-header[_ngcontent-%COMP%]   .message-counter-title[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  margin-right: 1rem;\n}\n\n.chats-list-header[_ngcontent-%COMP%]   .message-counter[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #fff;\n  padding: .2rem .3rem;\n  border-radius: 100%;\n  margin-right: 1rem;\n  color: #646464;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRzLWxpc3QtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCIiwiZmlsZSI6ImNoYXRzLWxpc3QtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdHMtbGlzdC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2hhdHMtbGlzdC1oZWFkZXIgLm1lc3NhZ2UtY291bnRlci10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5jaGF0cy1saXN0LWhlYWRlciAubWVzc2FnZS1jb3VudGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAuMnJlbSAuM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBjb2xvcjogIzY0NjQ2NDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5607:
/*!*********************************************************************************!*\
  !*** ./src/app/components/module-chats-list/chats-list/chats-list.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsListComponent": () => (/* binding */ ChatsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_data_exchange_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/data-exchange.service */ 3340);
/* harmony import */ var _chats_list_header_chats_list_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chats-list-header/chats-list-header.component */ 3177);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _chat_item_chat_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-item/chat-item.component */ 9002);





function ChatsListComponent_app_chat_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-chat-item", 3);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("user", item_r1)("circleColor", ctx_r0.colors)("index", index_r2);
} }
class ChatsListComponent {
    constructor(dataExchangeService) {
        this.dataExchangeService = dataExchangeService;
        this.list = [{ userName: 'Loading...' }];
        this.colors = [
            { color: '#5bd8d0' },
            { color: '#579c6d' },
        ];
    }
    ngOnInit() {
    }
    ngDoCheck() {
        this.dataExchangeService.users$.subscribe(response => this.list = response);
    }
}
ChatsListComponent.ɵfac = function ChatsListComponent_Factory(t) { return new (t || ChatsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_exchange_service__WEBPACK_IMPORTED_MODULE_0__.DataExchangeService)); };
ChatsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChatsListComponent, selectors: [["app-chats-list"]], decls: 4, vars: 1, consts: [[1, "chats-list-container"], [1, "chats-list"], ["class", "chat-item-wrapper", 3, "user", "circleColor", "index", 4, "ngFor", "ngForOf"], [1, "chat-item-wrapper", 3, "user", "circleColor", "index"]], template: function ChatsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-chats-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ChatsListComponent_app_chat_item_3_Template, 1, 3, "app-chat-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_chats_list_header_chats_list_header_component__WEBPACK_IMPORTED_MODULE_1__.ChatsListHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _chat_item_chat_item_component__WEBPACK_IMPORTED_MODULE_2__.ChatItemComponent], styles: [".chats-list-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: inherit;\n}\n\n.chats-list-container[_ngcontent-%COMP%]   .chats-list[_ngcontent-%COMP%] {\n  height: 85%;\n  background-color: #fff;\n  overflow: scroll;\n}\n\n.chats-list-container[_ngcontent-%COMP%]   .chats-list[_ngcontent-%COMP%]   .chat-item-wrapper[_ngcontent-%COMP%] {\n  height: 80px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  align-content: center;\n  cursor: pointer;\n}\n\n.chat-item-wrapper[_ngcontent-%COMP%]:hover{\n  background-color: #eee;\n}\n\n.chat-item-wrapper[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n}\n\n.chats-list-container[_ngcontent-%COMP%]   .chats-list[_ngcontent-%COMP%]   .chat-list-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJjaGF0cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdHMtbGlzdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi5jaGF0cy1saXN0LWNvbnRhaW5lciAuY2hhdHMtbGlzdCB7XG4gIGhlaWdodDogODUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uY2hhdHMtbGlzdC1jb250YWluZXIgLmNoYXRzLWxpc3QgLmNoYXQtaXRlbS13cmFwcGVyIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hhdC1pdGVtLXdyYXBwZXI6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbi5jaGF0LWl0ZW0td3JhcHBlciAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cblxuLmNoYXRzLWxpc3QtY29udGFpbmVyIC5jaGF0cy1saXN0IC5jaGF0LWxpc3Qtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 973:
/*!******************************************!*\
  !*** ./src/app/models/chatMessageDto.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatMessageDto": () => (/* binding */ ChatMessageDto)
/* harmony export */ });
class ChatMessageDto {
    //user: string,
    //this.user = user
    constructor(messege) {
        this.messege = messege;
    }
}


/***/ }),

/***/ 3340:
/*!***************************************************!*\
  !*** ./src/app/services/data-exchange.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataExchangeService": () => (/* binding */ DataExchangeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class DataExchangeService {
    constructor() {
        this.users$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.userId$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.circleColor$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    provideUsers(user) {
        this.users$.next(user);
    }
    provideUserId(id) {
        this.userId$.next(id);
    }
    provideCircleColor$(color) {
        this.circleColor$.next(color);
    }
}
DataExchangeService.ɵfac = function DataExchangeService_Factory(t) { return new (t || DataExchangeService)(); };
DataExchangeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataExchangeService, factory: DataExchangeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 509:
/*!************************************************!*\
  !*** ./src/app/services/web-socket.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSocketService": () => (/* binding */ WebSocketService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class WebSocketService {
    constructor() {
        this.chatMessages = [];
    }
    openWebSocket() {
        this.webSocket =
            new WebSocket("ws://localhost:5001/api");
        this.webSocket.onopen = event => {
            console.log('open: ', event);
        };
        this.webSocket.onmessage = event => {
            const chatMessageDto = JSON.parse(event.data);
            this.chatMessages.push(chatMessageDto);
            console.log('Message: ', event);
        };
        this.webSocket.onclose = event => {
            console.log('Close: ', event);
        };
    }
    sendMessage(chatMessageDto) {
        this.webSocket.send(JSON.stringify(chatMessageDto));
    }
    closeWebSocket() {
        this.webSocket.close();
    }
    getUsers() {
    }
}
WebSocketService.ɵfac = function WebSocketService_Factory(t) { return new (t || WebSocketService)(); };
WebSocketService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebSocketService, factory: WebSocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 678:
/*!**********************************************!*\
  !*** ./src/app/views/chat/chat.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_data_exchange_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/data-exchange.service */ 3340);
/* harmony import */ var _components_module_chats_list_chats_list_chats_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/module-chats-list/chats-list/chats-list.component */ 5607);
/* harmony import */ var _components_module_chat_window_chat_window_header_chat_window_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/module-chat-window/chat-window-header/chat-window-header.component */ 7918);
/* harmony import */ var _components_module_chat_window_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/module-chat-window/chat-window/chat-window.component */ 3935);





class ChatComponent {
    constructor(dataExchangeService) {
        this.dataExchangeService = dataExchangeService;
        this.chatList = [
            { userId: 0, userName: 'Mathias Weiss' },
            // {userId: 1, userName: 'Veronica Weiss'},
            // {userId: 2, userName: 'Andrew Pasynkov'},
            // {userId: 3, userName: 'German Ylizyn'},
            // {userId: 4, userName: 'Ergin Oyarcilicgil'},
            // {userId: 2, userName: 'Artyr Ivanov'},
            // {userId: 3, userName: 'Ivan Petrov'},
            // {userId: 4, userName: 'Homa Homaev'},
        ];
    }
    ngOnInit() {
    }
    ngDoCheck() {
        this.dataExchangeService.provideUsers(this.chatList);
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_exchange_service__WEBPACK_IMPORTED_MODULE_0__.DataExchangeService)); };
ChatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 5, vars: 0, consts: [[1, "chat-wrapper"], [2, "width", "35%", "height", "100%"], [1, "chat-header-window"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-chats-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-chat-window-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-chat-window");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, directives: [_components_module_chats_list_chats_list_chats_list_component__WEBPACK_IMPORTED_MODULE_1__.ChatsListComponent, _components_module_chat_window_chat_window_header_chat_window_header_component__WEBPACK_IMPORTED_MODULE_2__.ChatWindowHeaderComponent, _components_module_chat_window_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_3__.ChatWindowComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 193:
/*!******************************************************!*\
  !*** ./src/app/views/register/register.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 2, vars: 0, template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "register works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6461:
/*!***************************************************************!*\
  !*** ./node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./log": 708
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6461;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3208), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map