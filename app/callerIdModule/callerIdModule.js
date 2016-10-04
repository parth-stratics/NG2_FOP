"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var callerIdRouting_1 = require("./callerIdRouting");
var campaignsService_1 = require("../providers/campaignsService");
var concatenate_pipe_1 = require("../pipes/concatenate.pipe");
var base_1 = require("./pages/base");
var cards_1 = require("./pages/cards");
var view_1 = require("./pages/view");
var edit_1 = require("./pages/edit");
var CallerIdModule = (function () {
    function CallerIdModule() {
    }
    CallerIdModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ng2_bootstrap_1.Ng2BootstrapModule,
                callerIdRouting_1.calleridRouting,
            ],
            declarations: [
                concatenate_pipe_1.ConcatenatePipe,
                base_1.CallerIdBase,
                cards_1.CallerIdCards,
                view_1.CallerIdView,
                edit_1.CallerIdEdit
            ],
            providers: [
                callerIdRouting_1.calleridRoutingProviders,
                campaignsService_1.CampaignService
            ],
            bootstrap: [
                base_1.CallerIdBase
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CallerIdModule);
    return CallerIdModule;
}());
exports.CallerIdModule = CallerIdModule;
//# sourceMappingURL=callerIdModule.js.map