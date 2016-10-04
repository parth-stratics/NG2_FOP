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
/**
 * Created by User on 9/28/2016.
 */
var core_1 = require('@angular/core');
var campaignsService_1 = require("../../providers/campaignsService");
var router_1 = require("@angular/router");
var CardComponent_1 = require("../../components/cards/CardComponent");
var baseObjects_1 = require("../../objects/dto/baseObjects");
var CampaignCards = (function (_super) {
    __extends(CampaignCards, _super);
    function CampaignCards(campaignService, router) {
        _super.call(this);
        this.campaignService = campaignService;
        this.router = router;
        this.selectedViewOption = 0;
        this.viewOptions = new Array();
        this.viewOptions.push(new baseObjects_1.GlyphiconDto(0, 'List', true, 'list'));
        this.viewOptions.push(new baseObjects_1.GlyphiconDto(1, 'Card', false, 'th-large'));
        this.items = campaignService.getCampaigns();
        this.currentIndex = 0;
    }
    CampaignCards.prototype.changeSelectedView = function (option) {
        if (option.id == 0) {
            this.router.navigate(['/campaigns']);
        }
        else {
            this.router.navigate(['/campaigns/cards']);
        }
    };
    CampaignCards.prototype.view = function (item) {
        this.router.navigate(['/campaigns/view', { id: item.id }]);
    };
    CampaignCards.prototype.edit = function (item) {
        this.router.navigate(['/campaigns/edit', { id: item.id }]);
    };
    CampaignCards.prototype.newItem = function () {
        this.router.navigate(['/campaigns/edit']);
    };
    CampaignCards = __decorate([
        core_1.Component({
            selector: 'campaign-cards',
            template: "\n<div class=\"row\">\n    <h2>Cards form Campaigns</h2>\n</div>\n<div  class=\"row\">\n    <div class=\"col-sm-6\">\n        <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"button\">Go!</button>\n              </span>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"btn-group\">\n                <label class=\"btn btn-primary\" *ngFor=\"let option of viewOptions\" (click)=\"changeSelectedView ( option )\"\n                       [(ngModel)]=\"selectedViewOption\" btnRadio=\"{{option.id}}\">\n                    <span class=\"{{option.icon}}\" aria-hidden=\"true\"></span>  {{option.name}}</label>\n                <button type=\"button\" class=\"btn btn-default\" aria-label=\"New\" (click)=\"newItem()\">\n                   <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>  New\n                </button>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div>\n        <h2>{{selectedItem.title}}</h2>\n        <p>{{selectedItem.description}}</p>\n        <p>\n            <button type=\"button\" class=\"btn btn-default\" aria-label=\"Edit\" (click)=\"view(selectedItem)\">\n                <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span>  View\n            </button>\n            <button type=\"button\" class=\"btn btn-default\" aria-label=\"Edit\" (click)=\"edit(selectedItem)\">\n                <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>  Edit\n            </button>\n        </p>\n        <p><button type=\"button\" class=\"btn btn-default\" aria-label=\"Prev\" (click)=\"prevItem()\" [disabled]=\"previousDisabled\">\n                <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n            </button>\n            <button type=\"button\" class=\"btn btn-default\" aria-label=\"Next\" (click)=\"nextItem()\" [disabled]=\"nextDisabled\">\n                <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n            </button>\n        </p>\n    </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [campaignsService_1.CampaignService, router_1.Router])
    ], CampaignCards);
    return CampaignCards;
}(CardComponent_1.CardComponent));
exports.CampaignCards = CampaignCards;
//# sourceMappingURL=cards.js.map