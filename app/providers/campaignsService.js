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
var core_1 = require("@angular/core");
var dtoGenerator_1 = require("../objects/dto/dtoGenerator");
/**
 * Created by User on 9/28/2016.
 */
var CampaignService = (function () {
    function CampaignService() {
        this.campaigns = new Array();
        this.campaigns = [dtoGenerator_1.MockCampaign.create(), dtoGenerator_1.MockCampaign.create(), dtoGenerator_1.MockCampaign.create(), dtoGenerator_1.MockCampaign.create()];
    }
    CampaignService.prototype.getCallerIds = function () {
        var array = [];
        for (var i = 0; i < this.campaigns.length; i++) {
            var campaign = this.campaigns[i];
            for (var j = 0; j < campaign.callerids.length; j++) {
                array.push(campaign.callerids[j]);
            }
        }
        return array;
    };
    CampaignService.prototype.getCampaigns = function () {
        return this.campaigns;
    };
    CampaignService.prototype.getCampaign = function (id) {
        var campaign = null;
        for (var i = 0; i < this.campaigns.length; i++) {
            if (this.campaigns[i].id == id) {
                return this.campaigns[i];
            }
        }
        return campaign;
    };
    CampaignService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CampaignService);
    return CampaignService;
}());
exports.CampaignService = CampaignService;
//# sourceMappingURL=campaignsService.js.map