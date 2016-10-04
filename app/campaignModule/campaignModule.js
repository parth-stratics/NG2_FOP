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
var campaignRouting_1 = require("./campaignRouting");
var base_1 = require("./pages/base");
var campaignsService_1 = require("../providers/campaignsService");
var cards_1 = require("./pages/cards");
var edit_1 = require("./pages/edit");
var view_1 = require("./pages/view");
var general_1 = require("./pages/general");
var CampaignModule = (function () {
    function CampaignModule() {
    }
    CampaignModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ng2_bootstrap_1.Ng2BootstrapModule,
                campaignRouting_1.campaignRouting,
            ],
            declarations: [
                view_1.CampaignView,
                edit_1.CampaignEdit,
                base_1.CampaignBase,
                cards_1.CampaignCards,
                general_1.CampaignGeneral,
            ],
            providers: [
                campaignRouting_1.campaignRoutingProviders,
                campaignsService_1.CampaignService
            ],
            bootstrap: [
                base_1.CampaignBase
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CampaignModule);
    return CampaignModule;
}());
exports.CampaignModule = CampaignModule;
//# sourceMappingURL=campaignModule.js.map