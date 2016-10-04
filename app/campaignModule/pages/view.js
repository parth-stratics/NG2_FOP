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
var CampaignView = (function (_super) {
    __extends(CampaignView, _super);
    function CampaignView(campaignService, router) {
        _super.call(this);
        this.campaignService = campaignService;
        this.router = router;
        this.selectedViewOption = 0;
        this.viewOptions = new Array();
        this.viewOptions.push(new baseObjects_1.GlyphiconDto(0, 'List', true, 'list'));
        this.viewOptions.push(new baseObjects_1.GlyphiconDto(1, 'Card', false, 'th-large'));
        this.campaign = new dtObjects_1.Campaign();
    }
    CampaignView.prototype.backToLists = function () {
        this.router.navigate(['/campaigns']);
    };
    CampaignView.prototype.view = function (item) {
        this.router.navigate(['/campaigns/view', { id: item.id }]);
    };
    CampaignView.prototype.edit = function (item) {
        this.router.navigate(['/campaigns/edit', { id: item.id }]);
    };
    CampaignView.prototype.newItem = function () {
        this.router.navigate(['/campaigns/edit']);
    };
    CampaignView = __decorate([
        core_1.Component({
            selector: 'campaign-view',
            template: "\n<div class=\"row\">\n    <h2>Campaign View</h2>\n</div>\n\n<div  class=\"row\">\n    <div class=\"col-sm-6\">\n        <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"button\">Go!</button>\n              </span>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-default\" aria-label=\"New\" (click)=\"backToLists()\">\n                   <span class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span>  Back\n                </button>\n                <button type=\"button\" class=\"btn btn-default\" aria-label=\"New\" (click)=\"newItem()\">\n                   <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>  New\n                </button>\n        </div>\n    </div>\n</div>\n<div  class=\"row\">\n\n</div>\n"
        }), 
        __metadata('design:paramtypes', [campaignsService_1.CampaignService, router_1.Router])
    ], CampaignView);
    return CampaignView;
}(edit_1.EditComponent));
exports.CampaignView = CampaignView;
//# sourceMappingURL=view.js.map