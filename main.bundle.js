webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/aboutme/aboutme.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".font-size-small{\n    font-size:12px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aboutme/aboutme.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"fontSmall\">\n  <span>\n    Hi im <strong>Kent Fueconcillo</strong> \n  </span><br/><br/>\n  <strong>Personal Links</strong><br>\n  <span>\n   Github : <a href=\"https://github.com/sirb0rab0g1/\">https://github.com/sirb0rab0g1/</a>\n  </span><br/>\n  <span>\n   BItBucket : <a href=\"https://bitbucket.org/kentfueconcillo/\">https://bitbucket.org/kentfueconcillo/</a>\n  </span><br/>\n  <span>\n   linkedin : <a href=\"https://www.linkedin.com/in/kentfueconcillo/\">https://www.linkedin.com/in/kentfueconcillo/</a>\n  </span><br><br>\n  <strong>Social Media</strong><br>\n  <span>\n   Facebook : <a href=\"https://www.facebook.com/zxcasdqwe123qweasdzxc\">https://www.facebook.com/zxcasdqwe123qweasdzxc</a>\n  </span><br><br>\n  <strong>Work Experience</strong><br>\n  <span>\n   Web App Developer at <a href=\"http://infosoftstudio.com/\">http://infosoftstudio.com/</a>\n  </span><br>\n  <span>\n   Web Developer at <a href=\"http://infosoftstudio.com/\">http://infosoftstudio.com/</a>\n  </span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/aboutme/aboutme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutmeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutmeComponent = (function () {
    function AboutmeComponent() {
        //style
        this.fontSmall = 'font-size-small';
    }
    AboutmeComponent.prototype.ngOnInit = function () {
    };
    return AboutmeComponent;
}());
AboutmeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-aboutme',
        template: __webpack_require__("../../../../../src/app/aboutme/aboutme.component.html"),
        styles: [__webpack_require__("../../../../../src/app/aboutme/aboutme.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutmeComponent);

//# sourceMappingURL=aboutme.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-body></app-body>\n\n  <push-notification #notification [title]=\"name\" [body]=\"content\" \n    [icon]=\"icon\"\n    (load)=\"notification.show()\" closeDelay=\"7000\">\n  </push-notification>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.name = "Kent Fueconcillo";
        this.content = "Hi there! How may i help you ? Free free to talk with me !";
        this.icon = "https://scontent.fceb1-1.fna.fbcdn.net/v/t1.0-9/19961222_1740052446022448_1520076539138365916_n.jpg?oh=213e3372ea9a6687f80fa07822fb3059&oe=59F36FB0";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profileimage_profileimage_component__ = __webpack_require__("../../../../../src/app/profileimage/profileimage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__body_body_component__ = __webpack_require__("../../../../../src/app/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aboutme_aboutme_component__ = __webpack_require__("../../../../../src/app/aboutme/aboutme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__myspecialties_myspecialties_component__ = __webpack_require__("../../../../../src/app/myspecialties/myspecialties.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__skillsandabilities_skillsandabilities_component__ = __webpack_require__("../../../../../src/app/skillsandabilities/skillsandabilities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_ng_notification_ng_notification_directive__ = __webpack_require__("../../../../../src/app/directives/ng-notification/ng-notification.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_notifications_ng2_notifications__ = __webpack_require__("../../../../ng2-notifications/ng2-notifications.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_notifications_ng2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_notifications_ng2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_particle__ = __webpack_require__("../../../../angular-particle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//component






//directives

//libraries






//angular-material

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__body_body_component__["a" /* BodyComponent */],
            __WEBPACK_IMPORTED_MODULE_5__aboutme_aboutme_component__["a" /* AboutmeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__myspecialties_myspecialties_component__["a" /* MyspecialtiesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__skillsandabilities_skillsandabilities_component__["a" /* SkillsandabilitiesComponent */],
            __WEBPACK_IMPORTED_MODULE_3__profileimage_profileimage_component__["a" /* ProfileimageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__directives_ng_notification_ng_notification_directive__["a" /* NgNotificationDirective */],
            __WEBPACK_IMPORTED_MODULE_14_ng2_notifications_ng2_notifications__["PushNotificationComponent"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_material__["c" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_material__["d" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_material__["e" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_15_angular_particle__["a" /* ParticlesModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/body/body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".valign-center {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 15px;\n}\n\n.material-icons-small-size {\n  font-size: 12px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <particles [params]=\"myParams\" [style]=\"myStyle\" [width]=\"width\" [height]=\"height\"></particles>\n\n    <div class=\"col-lg-4 col-md-12\">\n      <app-profileimage></app-profileimage>\n\n      <div class=\"card\" style=\"margin-top:20px;\">\n        <h6 class=\"card-header\" [ngClass]=\"verticalAlign\">\n          <i class=\"material-icons\" [ngClass]=\"materialSmallIcon\">code</i>&nbsp;&nbsp;\n          <span><strong>About </strong>Me</span>\n        </h6>\n        <div class=\"card-block\">\n          <app-aboutme></app-aboutme>\n        </div>\n      </div>\n\n      <div class=\"card\" style=\"margin-top:20px;\">\n        <h6 class=\"card-header\" [ngClass]=\"verticalAlign\">\n          <i class=\"material-icons\" [ngClass]=\"materialSmallIcon\">build</i>&nbsp;\n          <span>My <strong>Specialties</strong></span>\n        </h6>\n        <div class=\"card-block\">\n          <app-myspecialties></app-myspecialties>\n        </div>\n      </div>\n\n      <div class=\"card\" style=\"margin-top:20px;\" >\n        <h6 class=\"card-header\" [ngClass]=\"verticalAlign\">\n          <i class=\"material-icons\" [ngClass]=\"materialSmallIcon\">mouse</i>&nbsp;\n          <span><strong>Skills</strong> & <strong>Abilities</strong></span>\n        </h6>\n        <div class=\"card-block\">\n          <app-skillsandabilities></app-skillsandabilities>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-8 col-md-12 \" >\n      <div style=\"margin-top:20px;\">\n        <ngb-tabset #t=\"ngbTabset\">\n          <ngb-tab id=\"tab-selectbyid1\">\n            <ng-template ngbTabTitle>\n              <span [ngClass]=\"materialSmallIcon\">\n                Projects &nbsp;&nbsp;\n              </span>\n              <span class=\"badge badge-default\">{{value}}</span>\n            </ng-template>\n            <ng-template ngbTabContent>\n              <app-projects></app-projects>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n    </div>\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyComponent = (function () {
    function BodyComponent() {
        //styles
        this.verticalAlign = "valign-center";
        this.materialSmallIcon = "material-icons-small-size";
        //functions
        this.isCollapsed = false;
        this.value = '2';
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
    }
    BodyComponent.prototype.ngOnInit = function () {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': 0,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            particles: {
                number: {
                    value: 100,
                },
                color: {
                    value: '#ff0000'
                },
                shape: {
                    type: 'circle',
                    "stroke": {
                        "width": 4,
                        "color": "#fff"
                    }, "circle": {
                        "nb_sides": 6
                    },
                }, "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#b3b3b3",
                    "opacity": 3,
                    "width": 1
                }
            },
            interactivity: {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        };
    };
    return BodyComponent;
}());
BodyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-body',
        template: __webpack_require__("../../../../../src/app/body/body.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/body.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BodyComponent);

//# sourceMappingURL=body.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/ng-notification/ng-notification.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgNotificationDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgNotificationDirective = (function () {
    function NgNotificationDirective() {
    }
    return NgNotificationDirective;
}());
NgNotificationDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appNgNotification]'
    }),
    __metadata("design:paramtypes", [])
], NgNotificationDirective);

//# sourceMappingURL=ng-notification.directive.js.map

/***/ }),

/***/ "../../../../../src/app/myspecialties/myspecialties.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".font-size-small {\n  font-size: 10px;\n}\n\n.valign-center {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 15px;\n}\n\n.speacialties-title{\n  font-size:18px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/myspecialties/myspecialties.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div [ngClass]=\"vallignCenter\" class=\"col-lg-12 \">\n    <i class=\"material-icons\">desktop_mac</i>\n    <div style=\"margin-left:40px;\" class=\"justify-content-center\">\n      <div [ngClass]=\"speciatiesTitle\">Website production</div>\n      <div [ngClass]=\"fontSmall\">Great, modern website designs.</div>\n    </div>\n  </div>\n  <div [ngClass]=\"vallignCenter\" class=\"col-lg-12 \">\n    <i class=\"material-icons\">view_carousel</i>\n    <div style=\"margin-left:40px;\" class=\"justify-content-center\">\n      <div [ngClass]=\"speciatiesTitle\">Front-End Development</div>\n      <div [ngClass]=\"fontSmall\">Front-End Development.</div>\n    </div>\n  </div>\n  <div [ngClass]=\"vallignCenter\" class=\"col-lg-12\">\n    <i class=\"material-icons\">phonelink</i>\n    <div style=\"margin-left:40px;\" class=\"justify-content-center\">\n      <div [ngClass]=\"speciatiesTitle\">Responsive design</div>\n      <div [ngClass]=\"fontSmall\">Great, modern website designs.</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/myspecialties/myspecialties.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyspecialtiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyspecialtiesComponent = (function () {
    function MyspecialtiesComponent() {
        //Styles
        this.fontSmall = 'font-size-small';
        this.vallignCenter = 'valign-center';
        this.speciatiesTitle = 'speacialties-title';
    }
    MyspecialtiesComponent.prototype.ngOnInit = function () {
    };
    return MyspecialtiesComponent;
}());
MyspecialtiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-myspecialties',
        template: __webpack_require__("../../../../../src/app/myspecialties/myspecialties.component.html"),
        styles: [__webpack_require__("../../../../../src/app/myspecialties/myspecialties.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MyspecialtiesComponent);

//# sourceMappingURL=myspecialties.component.js.map

/***/ }),

/***/ "../../../../../src/app/profileimage/profileimage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div-image-container {\n  margin-top: 20px;\n  height: 300px;\n  position: relative;\n  overflow: hidden;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profileimage/profileimage.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"imageContainer\">\n  <img class=\"rounded-circle\" draggable=\"false\" src=\"assets/images/19884116_1734168823277477_7782289430895912866_n.jpg\"\n    style=\"max-width:100%;max-height:100%;\">\n\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profileimage/profileimage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileimageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileimageComponent = (function () {
    function ProfileimageComponent() {
        //styles
        this.imageContainer = "div-image-container";
    }
    ProfileimageComponent.prototype.ngOnInit = function () {
    };
    return ProfileimageComponent;
}());
ProfileimageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profileimage',
        template: __webpack_require__("../../../../../src/app/profileimage/profileimage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profileimage/profileimage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileimageComponent);

//# sourceMappingURL=profileimage.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".font-size-small {\n  font-size: 12px;\n}\n\n.image-style {\n  height: 20px;\n  width: 20px;\n  max-width: 100%;\n  max-height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:20px;\">\n  <div class=\"row\">\n    <div style=\"margin-top:20px;\" class=\"col-lg-12\">\n      <h4>Main Projects & My Role</h4>\n    </div>\n    <div class=\"col-lg-6\" style=\"margin-top:10px;\" *ngFor=\"let projects of myMainProjects\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n          <div class=\"card-title\">\n            <a target=\"_blank\" href=\"{{projects.link}}\">{{projects.projectTitle}}</a>\n          </div>\n          <span [ngClass]=\"fontSmallSize\" class=\"card-subtitle mb-4 text-muted\">{{projects.role}}</span><br>\n          <div [ngClass]=\"fontSmallSize\" class=\"badge badge-default\">{{projects.language[0].html}}</div>\n          <div [ngClass]=\"fontSmallSize\" class=\"badge badge-default\">{{projects.language[0].css}}</div>\n          <div [ngClass]=\"fontSmallSize\" class=\"badge badge-info\">{{projects.language[0].boot}}</div>\n          <div [ngClass]=\"fontSmallSize\" class=\"badge badge-danger\">{{projects.language[0].angular}}</div>\n        </div>\n      </div>\n    </div>\n\n    <div style=\"margin-top:20px;\" class=\"col-lg-12\">\n      <h4>Excercise Programs</h4>\n    </div>\n\n    <div class=\"col-lg-6\" style=\"margin-top:10px;\" *ngFor=\"let projects of myExercisesPrograms\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n          <div class=\"card-title\">\n            <a target=\"_blank\" href=\"{{projects.link}}\">{{projects.projectTitle}}</a>\n          </div>\n          <span [ngClass]=\"fontSmallSize\" class=\"card-subtitle mb-4 text-muted\">{{projects.role}}</span><br>\n          <div [ngClass]=\"fontSmallSize\" class=\"badge badge-default\">{{projects.language[0].html}}</div>\n          <div [ngClass]=\"fontSmallSize\" class=\"badge badge-default\">{{projects.language[0].css}}</div>\n          <div [ngClass]=\"fontSmallSize\" class=\"badge badge-info\">{{projects.language[0].boot}}</div>\n          <div [ngClass]=\"fontSmallSize\" class=\"badge badge-danger\">{{projects.language[0].amaterial}}</div>\n          <div [ngClass]=\"fontSmallSize\" class=\"badge badge-danger\">{{projects.language[0].angular}}</div>\n          <div [ngClass]=\"fontSmallSize\" class=\"badge badge-danger\">{{projects.language[0].prime}}</div>\n          <div [ngClass]=\"fontSmallSize\" class=\"badge badge-success\">{{projects.language[0].django}}</div>\n        </div>\n      </div>\n    </div>\n    \n    <div style=\"margin-top:20px;\" class=\"col-lg-12\">\n      <h4>My Mentors</h4>\n    </div>\n\n    <div class=\"col-lg-12\">\n      <div class=\"list-group\" style=\"margin-top:10px;\">\n        <a href=\"https://www.facebook.com/{{master.fb}}\" class=\"list-group-item list-group-item-action flex-column align-items-start\"\n          *ngFor=\"let master of myMasters;let index = index;\">\n          <div class=\"d-flex w-100 justify-content-between\">\n            <h5 class=\"mb-1\">{{master.title}}</h5>\n            <small>{{master.year}}</small>\n          </div>\n          <p class=\"mb-1\">{{master.desc}}</p>\n          <small class=\"badge badge-{{master.btn}}\">\n            <img class=\"rounded-circle\" style=\"width:20px;height:20px;\" src=\"{{master.img}}\">\n            &nbsp;&nbsp;{{master.name}}&nbsp;&nbsp;\n          </small>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"col-lg-12\" style=\"margin-top:20px;\">\n      <div class=\"card\">\n        <div>\n          <img class=\"card-img-top \" draggable=\"false\" style=\"width:100%\" src=\"https://s-media-cache-ak0.pinimg.com/originals/73/a2/0e/73a20e46766497cce6c45dce5c31a1bd.gif\"\n            alt=\"Card image cap\">\n        </div>\n        <div class=\"card-block\">\n          <p class=\"text-center\">{{name}}</p>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
        //Styles
        this.fontSmallSize = 'font-size-small';
        this.imageStyle = 'image-style';
        //functions
        this.name = "Starts the passion of coding web applications from 2016";
        this.myMainProjects = [
            {
                projectTitle: 'Trivia Nights App v1',
                role: 'Front End Web Developer',
                link: 'http://trivtrak.com/#/',
                language: [
                    {
                        html: 'HTML',
                        css: 'CSS',
                        boot: 'Bootstrap',
                        angular: 'AngularJS'
                    }
                ]
            },
            {
                projectTitle: 'Mrs. Spanglish',
                role: 'Web Developer',
                link: 'http://infosoftstudio.com/mrsspanglish/',
                language: [
                    {
                        html: 'Wordpress',
                    }
                ]
            }
        ];
        this.myExercisesPrograms = [
            {
                projectTitle: 'AngularJS 1 Material Dashboard',
                role: 'Front End Web Developer',
                link: 'http://kentoyfueconcillo.000webhostapp.com/#/',
                language: [
                    {
                        html: 'HTML',
                        css: 'CSS',
                        boot: 'Bootstrap',
                        amaterial: 'Angular Material Design',
                        angular: 'AngularJS'
                    }
                ]
            },
            {
                projectTitle: 'AngularJS 1 Material Portfolio',
                role: 'Front End Web Developer',
                link: 'https://fueconcillo-old-portfolio.000webhostapp.com/',
                language: [
                    {
                        html: 'HTML',
                        css: 'CSS',
                        boot: 'Bootstrap',
                        amaterial: 'Angular Material Design',
                        angular: 'AngularJS'
                    }
                ]
            },
            {
                projectTitle: 'AngularJS 4 Material + Bootstrap 4 Portfolio',
                role: 'Front End Web Developer',
                link: 'https://sirb0rab0g1.github.io/angular4-portfolio/',
                language: [
                    {
                        html: 'HTML',
                        css: 'CSS',
                        boot: 'Bootstrap 4',
                        amaterial: 'Angular 4 Material Design',
                        angular: 'AngularJS 4'
                    }
                ]
            },
            {
                projectTitle: 'AngularJS4 + Material Design + Prime Faces',
                role: 'Front End Web Developer',
                link: 'https://sirb0rab0g1.github.io/angularjs4-word-online/',
                language: [
                    {
                        html: 'HTML',
                        css: 'CSS',
                        amaterial: 'Angular 4 Material Design',
                        angular: 'AngularJS 4',
                        prime: 'Prime Faces'
                    }
                ]
            },
            {
                projectTitle: 'AngularJS 4 Firebase',
                role: 'Front End Web Developer',
                link: 'https://fir-angular-47dce.firebaseapp.com/',
                language: [
                    {
                        html: 'HTML',
                        css: 'CSS',
                        angular: 'AngularJS 4',
                        prime: 'FIrebase'
                    }
                ]
            },
            {
                projectTitle: 'Django Rest Tutorial',
                role: 'Back End Developer',
                link: 'https://my-rest-api-postgre.herokuapp.com/info/personal/',
                language: [
                    {
                        html: 'Django Rest Api'
                    }
                ]
            },
            {
                projectTitle: 'Rest Angular Tutorial',
                role: 'Front & Back End Developer',
                link: 'https://sirb0rab0g1.github.io/angularjs4-tutorial/#/',
                language: [
                    {
                        html: 'HTML',
                        css: 'SASS',
                        angular: 'AngularJS 4',
                        amaterial: 'Angular 4 Material Design',
                        prime: 'Prime',
                        django: 'Django'
                    }
                ]
            },
            {
                projectTitle: 'Vue Rest',
                role: 'Front & Back End Developer',
                link: 'https://sirb0rab0g1.github.io/rest-vue/#/',
                language: [
                    {
                        html: 'HTML',
                        css: 'CSS',
                        angular: 'Vue',
                        amaterial: 'Vue Material',
                        django: 'Django Rest'
                    }
                ]
            },
            {
                projectTitle: 'Chat Application (unfinished)',
                role: 'Front & Back End Developer',
                link: 'https://sirb0rab0g1.github.io/vuejs2-chatapp/#/',
                language: [
                    {
                        html: 'HTML',
                        css: 'Stylus',
                        angular: 'Vuejs2',
                        amaterial: 'Vuetify',
                        django: 'Django Rest',
                    }
                ]
            }
        ];
        this.myMasters = [
            {
                title: 'Everything',
                desc: 'This site taught me everything so thanks for this!',
                name: 'Google',
                year: 'Present',
                btn: 'warning',
                img: 'data:image/png;base64,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',
                fb: 'googlephilippines/?brand_redir=104958162837',
                background: 'assets/images/grid.png'
            },
            {
                title: 'Python Django',
                desc: 'This guy ROCKS! Guides me from bacis to advance, and inspires me a lot.',
                name: 'Rieljun Liguid ',
                year: '2017 - Current',
                btn: 'success',
                img: 'https://scontent-hkg3-1.xx.fbcdn.net/v/t31.0-8/16665902_10208737043889603_5591910207594837889_o.jpg?oh=6b45a56c3c1c949ab6f90a9d89b73e18&oe=5A00EF60',
                fb: 'lryuk92',
                background: 'assets/images/grid.png'
            },
            {
                title: 'Wordpress + VVV',
                desc: 'He gives his ideas towards wordpress basics',
                name: 'Guy Romelle Magayno ',
                year: '2017',
                btn: 'default',
                img: 'https://scontent-hkg3-1.xx.fbcdn.net/v/t31.0-8/14372429_10206710453793056_6489077557797500514_o.jpg?oh=585c415fbf2a9d0c0bcab02c76b8357c&oe=5A11CEF8',
                fb: 'mguyromelle',
                background: 'assets/images/grid.png'
            },
            {
                title: 'AngularJS',
                desc: 'He taught me everything including the basic and advance learning regarding the framework called ANGULARJS',
                name: 'Daniel Padilla',
                year: '2017',
                btn: 'danger',
                img: 'https://scontent.fmnl9-1.fna.fbcdn.net/v/t31.0-8/18422526_10209111293808076_4247746191712721810_o.jpg?oh=1223befb041e91d418a153134527834c&oe=59CA9CE9',
                fb: 'daniel.fernando.padilla',
                background: 'assets/images/grid.png'
            },
            {
                title: 'Advance HTML + PHP',
                desc: 'He taught me everyhing including the basic in the beginning of my career as a web developer',
                name: 'Joven Lanoy',
                year: '2016',
                btn: 'default',
                img: 'https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.0-9/19225542_1540747479310169_300686832798472172_n.jpg?oh=0c8e8f12ad7dda12ad14634c1118d4ea&oe=59FF02D3',
                fb: 'vhenzreign',
                background: 'assets/images/grid.png'
            }
        ];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/skillsandabilities/skillsandabilities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".font-size-small{\n    font-size:12px;\n}\n\n.font-size-extra-small{\n    font-size:10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skillsandabilities/skillsandabilities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" *ngFor=\"let object of myObject\">\n  <div style=\"margin-top:10px;\">\n    <div style=\"float:left;\" >\n      <div [ngClass]=\"fontSmallSize\">{{object.name}}</div>\n      <div [ngClass]=\"fontExtraSmallSize\">{{object.knowledge}}</div>\n    </div>\n    <span style=\"float:right;margin-top:12px;\" [ngClass]=\"fontSmallSize\" ><span class=\"badge badge-default\" >{{object.value}}%</span>\n    </span>\n    <md-progress-bar class=\"example-margin\" [color]=\"object.color\" [mode]=\"object.mode\" [value]=\"object.value\" [bufferValue]=\"object.bufferValue\">\n    </md-progress-bar>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/skillsandabilities/skillsandabilities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsandabilitiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsandabilitiesComponent = (function () {
    function SkillsandabilitiesComponent() {
        //Styles
        this.fontSmallSize = 'font-size-small';
        this.fontExtraSmallSize = 'font-size-extra-small';
        //functions
        this.myObject = [
            {
                name: 'HTLM5',
                knowledge: 'KNOWLEDGE ABOUT HTML5',
                color: 'primary',
                mode: 'buffer',
                value: 90,
                bufferValue: 90
            },
            {
                name: 'JavaScript',
                knowledge: 'KNOWLEDGE ABOUT JAVASCRIPT',
                color: 'primary',
                mode: 'buffer',
                value: 90,
                bufferValue: 90
            },
            {
                name: 'Css',
                knowledge: 'KNOWLEDGE ABOUT CSS',
                color: 'primary',
                mode: 'buffer',
                value: 75,
                bufferValue: 90
            },
            {
                name: 'SASS',
                knowledge: 'KNOWLEDGE ABOUT SASS',
                color: 'primary',
                mode: 'buffer',
                value: 75,
                bufferValue: 90
            },
            {
                name: 'Bootstrap 3',
                knowledge: 'KNOWLEDGE ABOUT BOOTSTRAP',
                color: 'primary',
                mode: 'buffer',
                value: 85,
                bufferValue: 90
            },
            {
                name: 'Bootstrap 4',
                knowledge: 'KNOWLEDGE ABOUT BOOTSTRAP',
                color: 'primary',
                mode: 'buffer',
                value: 80,
                bufferValue: 90
            },
            {
                name: 'AngularJS 1 ',
                knowledge: 'KNOWLEDGE ABOUT ANGULARJS 1',
                color: 'primary',
                mode: 'buffer',
                value: 90,
                bufferValue: 90
            },
            {
                name: 'AngularJS 2',
                knowledge: 'KNOWLEDGE ABOUT ANGULARJS 2',
                color: 'primary',
                mode: 'buffer',
                value: 84,
                bufferValue: 90
            },
            {
                name: 'AngularJS 4',
                knowledge: 'KNOWLEDGE ABOUT ANGULARJS 4',
                color: 'primary',
                mode: 'buffer',
                value: 84,
                bufferValue: 90
            },
            {
                name: 'PHP',
                knowledge: 'KNOWLEDGE  ABOUT PHP 5 AND PHP 7',
                color: 'primary',
                mode: 'buffer',
                value: 90,
                bufferValue: 90
            },
            {
                name: 'Wordpress',
                knowledge: 'KNOWLEDGE  ABOUT WORDPRESS',
                color: 'primary',
                mode: 'buffer',
                value: 10,
                bufferValue: 90
            },
            {
                name: 'Python',
                knowledge: 'KNOWLEDGE  ABOUT PYTHON',
                color: 'primary',
                mode: 'buffer',
                value: 30,
                bufferValue: 90
            },
            {
                name: 'Django',
                knowledge: 'KNOWLEDGE  ABOUT DJANGO',
                color: 'primary',
                mode: 'buffer',
                value: 30,
                bufferValue: 90
            }, {
                name: 'Django Rest Api',
                knowledge: 'KNOWLEDGE  ABOUT DJANGO REST',
                color: 'primary',
                mode: 'buffer',
                value: 60,
                bufferValue: 90
            },
            {
                name: 'Ruby',
                knowledge: 'KNOWLEDGE  ABOUT RUBY',
                color: 'primary',
                mode: 'buffer',
                value: 15,
                bufferValue: 90
            },
            {
                name: 'Git',
                knowledge: 'KNOWLEDGE ABOUT GIT',
                color: 'primary',
                mode: 'buffer',
                value: 75,
                bufferValue: 90
            },
            {
                name: 'VueJS',
                knowledge: 'KNOWLEDGE ABOUT VUEJS',
                color: 'primary',
                mode: 'buffer',
                value: 87,
                bufferValue: 90
            }
        ];
    }
    SkillsandabilitiesComponent.prototype.ngOnInit = function () {
    };
    return SkillsandabilitiesComponent;
}());
SkillsandabilitiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-skillsandabilities',
        template: __webpack_require__("../../../../../src/app/skillsandabilities/skillsandabilities.component.html"),
        styles: [__webpack_require__("../../../../../src/app/skillsandabilities/skillsandabilities.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SkillsandabilitiesComponent);

//# sourceMappingURL=skillsandabilities.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map