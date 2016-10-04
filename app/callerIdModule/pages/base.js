/**
 * Created by User on 9/28/2016.
 */
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
var core_1 = require('@angular/core');
var campaignsService_1 = require("../../providers/campaignsService");
var router_1 = require("@angular/router");
var ListComponent_1 = require("../../components/list/ListComponent");
var baseObjects_1 = require("../../objects/dto/baseObjects");
var CallerIdBase = (function (_super) {
    __extends(CallerIdBase, _super);
    function CallerIdBase(campaignService, router, route) {
        _super.call(this);
        this.campaignService = campaignService;
        this.router = router;
        this.route = route;
        this.selectedViewOption = 0;
        this.viewOptions = new Array();
        this.parameters = new baseObjects_1.RoutingParameters();
        this.viewOptions.push(new baseObjects_1.GlyphiconDto(0, 'List', true, 'list'));
        this.viewOptions.push(new baseObjects_1.GlyphiconDto(1, 'Card', false, 'th-large'));
    }
    CallerIdBase.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            for (var i = 0; i < _this.parameters.params.length; i++) {
                var value = +params[_this.parameters.params[i]];
                _this.parameters[_this.parameters.params[i]] = value;
            }
            if (_this.parameters.id > 0) {
                _this.selectedCampaign = _this.campaignService.getCampaign(_this.parameters.id);
                _this.items = _this.selectedCampaign.callerids;
            }
            else {
                _this.items = _this.campaignService.getCallerIds();
            }
        });
    };
    CallerIdBase.prototype.changeSelectedView = function (option) {
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
    CallerIdBase.prototype.view = function (item) {
        var path = '/callerids/view';
        if (this.router.url.indexOf("campaigns/edit") > 0) {
            path = '/campaigns/edit/callerids/view';
        }
        this.router.navigate([path, { id: this.parameters.id, cid: item.id }]);
    };
    CallerIdBase.prototype.edit = function (item) {
        var path = '/callerids/edit';
        if (this.router.url.indexOf("campaigns/edit") > 0) {
            path = '/campaigns/edit/callerids/edit';
        }
        this.router.navigate([path, { id: this.parameters.id, cid: item.id }]);
    };
    CallerIdBase.prototype.newItem = function () {
        var path = '/callerids/edit';
        if (this.router.url.indexOf("campaigns/edit") > 0) {
            path = '/campaigns/edit/callerids/edit';
        }
        this.router.navigate([path, { id: this.parameters.id, cid: 0 }]);
    };
    CallerIdBase = __decorate([
        core_1.Component({
            selector: 'callerid-list',
            template: "\n<div class=\"row\">\n    <h2>Base form CallerId</h2>\n</div>\n<div  class=\"row\">\n    <div class=\"col-sm-6\">\n        <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"button\">Go!</button>\n              </span>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"btn-group\">\n                <label class=\"btn btn-primary\" *ngFor=\"let option of viewOptions\" (click)=\"changeSelectedView ( option )\"\n                       [(ngModel)]=\"selectedViewOption\" btnRadio=\"{{option.id}}\">\n                    <span class=\"{{option.icon}}\" aria-hidden=\"true\"></span>  {{option.name}}</label>\n                <button type=\"button\" class=\"btn btn-default\" aria-label=\"New\" (click)=\"newItem()\">\n                   <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>  New\n                </button>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <table class=\"table table-striped\">\n            <tr>\n                <td>#</td>\n                <td>Phone</td>\n                <td>Description</td>\n                <td></td>\n            </tr>\n            <tr *ngFor=\"let item of items\">\n                <td>{{item.id}}</td>\n                <td width=\"30%\">{{item.value}}</td>\n                <td>{{item.description | concatenate:30}}</td>\n                <td width=\"20%\">\n                    <button type=\"button\" class=\"btn btn-default\" aria-label=\"View\" (click)=\"view(item)\">\n                        <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-default\" aria-label=\"Edit\" (click)=\"edit(item)\">\n                        <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-default\" aria-label=\"Delete\">\n                        <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span>\n                    </button>\n                </td>\n            </tr>\n        </table>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [campaignsService_1.CampaignService, router_1.Router, router_1.ActivatedRoute])
    ], CallerIdBase);
    return CallerIdBase;
}(ListComponent_1.ListComponent));
exports.CallerIdBase = CallerIdBase;
//# sourceMappingURL=base.js.map