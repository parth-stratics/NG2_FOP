"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var router_1 = require("@angular/router");
var campaignsService_1 = require("../../providers/campaignsService");
var dtObjects_1 = require("../../objects/dto/dtObjects");
var edit_1 = require("../../components/edit/edit");
var baseObjects_1 = require("../../objects/dto/baseObjects");
/**
 * Created by User on 10/1/2016.
 */
var CampaignEdit = (function (_super) {
    __extends(CampaignEdit, _super);
    function CampaignEdit(campaignService, router, route) {
        _super.call(this);
        this.campaignService = campaignService;
        this.router = router;
        this.route = route;
        this.selectedViewOption = 0;
        this.viewOptions = new Array();
        this.stepNumber = 0;
        this.parameters = new baseObjects_1.RoutingParameters();
        this.viewOptions.push(new baseObjects_1.GlyphiconDto(0, 'List', true, 'list'));
        this.viewOptions.push(new baseObjects_1.GlyphiconDto(1, 'Card', false, 'th-large'));
    }
    CampaignEdit.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            for (var i = 0; i < _this.parameters.params.length; i++) {
                var value = +params[_this.parameters.params[i]];
                _this.parameters[_this.parameters.params[i]] = value;
            }
            if (_this.parameters.id > 0) {
                _this.campaign = _this.campaignService.getCampaign(_this.parameters.id);
            }
        });
        this.editStep(0);
    };
    CampaignEdit.prototype.editStep = function (num) {
        this.stepNumber = num;
        if (num == 1) {
            this.router.navigate(['/campaigns/edit/callerids', { id: this.campaign.id }]);
        }
        else {
            this.router.navigate(['/campaigns/edit', { id: this.campaign.id }]);
        }
    };
    CampaignEdit.prototype.backToLists = function () {
        this.router.navigate(['/campaigns']);
    };
    CampaignEdit.prototype.newItem = function () {
        this.campaign = new dtObjects_1.Campaign();
    };
    CampaignEdit = __decorate([
        core_1.Component({
            selector: 'campaign-edit',
            template: "\n<div class=\"row\">\n    <h2>Campaign Edit</h2>\n</div>\n<div  class=\"row\">\n    <div class=\"col-sm-3\">\n        \n        <ul class=\"nav nav-pills nav-stacked\">\n          <li role=\"presentation\"><a [routerLink]=\"[ '/campaigns/edit', { id: this.campaign.id } ]\">General</a></li>\n          <li role=\"presentation\"><a [routerLink]=\"[ '/campaigns/edit/callerids', { id: this.campaign.id } ]\">Caller Ids</a></li>\n        </ul>\n    </div>\n    <div class=\"col-sm-9\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [campaignsService_1.CampaignService, router_1.Router, router_1.ActivatedRoute])
    ], CampaignEdit);
    return CampaignEdit;
}(edit_1.EditComponent));
exports.CampaignEdit = CampaignEdit;
//# sourceMappingURL=edit.js.map