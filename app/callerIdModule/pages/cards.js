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
var dtObjects_1 = require("../../objects/dto/dtObjects");
var CallerIdCards = (function (_super) {
    __extends(CallerIdCards, _super);
    function CallerIdCards(campaignService, router, route) {
        _super.call(this);
        this.campaignService = campaignService;
        this.router = router;
        this.route = route;
        this.selectedViewOption = 0;
        this.viewOptions = new Array();
        this.parameters = new baseObjects_1.RoutingParameters();
        this.viewOptions.push(new baseObjects_1.GlyphiconDto(0, 'List', true, 'list'));
        this.viewOptions.push(new baseObjects_1.GlyphiconDto(1, 'Card', false, 'th-large'));
        this.items = campaignService.getCampaigns();
        this.currentIndex = 0;
    }
    CallerIdCards.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            for (var i = 0; i < _this.parameters.params.length; i++) {
                var value = +params[_this.parameters.params[i]];
                _this.parameters[_this.parameters.params[i]] = value;
            }
            if (_this.parameters.id > 0) {
                _this.campaign = _this.campaignService.getCampaign(_this.parameters.id);
            }
            else {
                _this.campaign = new dtObjects_1.Campaign();
            }
            _this.items = _this.campaign.callerids;
        });
    };
    CallerIdCards.prototype.changeSelectedView = function (option) {
        var path = '/callerids';
        if (option.id == 0) {
            if (this.router.url.indexOf("campaigns/edit") > 0) {
                path = '/campaigns/edit/callerids';
            }
        }
        else {
            path = '/callerids/cards';
            if (this.router.url.indexOf("campaigns/edit") > 0) {
                path = '/campaigns/edit/callerids/cards';
            }
        }
        this.router.navigate([path, { id: this.parameters.id }]);
    };
    CallerIdCards.prototype.view = function (item) {
        var path = '/callerids/view';
        if (this.router.url.indexOf("campaigns/edit") > 0) {
            path = '/campaigns/edit/callerids/view';
        }
        this.router.navigate([path, { id: this.parameters.id, cid: this.parameters.cid }]);
    };
    CallerIdCards.prototype.edit = function (item) {
        var path = '/callerids/edit';
        if (this.router.url.indexOf("campaigns/edit") > 0) {
            path = '/campaigns/edit/callerids/edit';
        }
        this.router.navigate([path, { id: this.parameters.id, cid: item.id }]);
    };
    CallerIdCards.prototype.newItem = function () {
        var path = '/callerids/edit';
        if (this.router.url.indexOf("campaigns/edit") > 0) {
            path = '/campaigns/edit/callerids/edit';
        }
        this.router.navigate([path, { id: this.parameters.id, cid: 0 }]);
    };
    CallerIdCards = __decorate([
        core_1.Component({
            selector: 'callerid-cards',
            template: "\n<div class=\"row\">\n    <h2>Cards form CallerId</h2>\n</div>\n<div  class=\"row\">\n    <div class=\"col-sm-6\">\n        <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"button\">Go!</button>\n              </span>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"btn-group\">\n                <label class=\"btn btn-primary\" *ngFor=\"let option of viewOptions\" (click)=\"changeSelectedView ( option )\"\n                       [(ngModel)]=\"selectedViewOption\" btnRadio=\"{{option.id}}\">\n                    <span class=\"{{option.icon}}\" aria-hidden=\"true\"></span>  {{option.name}}</label>\n                <button type=\"button\" class=\"btn btn-default\" aria-label=\"New\" (click)=\"newItem()\">\n                   <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>  New\n                </button>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div>\n        <h2>{{selectedItem.value}}</h2>\n        <p>{{selectedItem.description}}</p>\n        <p><button type=\"button\" class=\"btn btn-default\" aria-label=\"Edit\" (click)=\"edit(selectedItem)\">\n                <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>  Edit\n            </button>\n        </p>\n        <p><button type=\"button\" class=\"btn btn-default\" aria-label=\"Prev\" (click)=\"prevItem()\" [disabled]=\"previousDisabled\">\n                <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n            </button>\n            <button type=\"button\" class=\"btn btn-default\" aria-label=\"Next\" (click)=\"nextItem()\" [disabled]=\"nextDisabled\">\n                <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n            </button>\n        </p>\n    </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [campaignsService_1.CampaignService, router_1.Router, router_1.ActivatedRoute])
    ], CallerIdCards);
    return CallerIdCards;
}(CardComponent_1.CardComponent));
exports.CallerIdCards = CallerIdCards;
//# sourceMappingURL=cards.js.map