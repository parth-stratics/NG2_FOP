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
var CallerIdEdit = (function (_super) {
    __extends(CallerIdEdit, _super);
    function CallerIdEdit(campaignService, router, route) {
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
    CallerIdEdit.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            for (var i = 0; i < _this.parameters.params.length; i++) {
                var value = +params[_this.parameters.params[i]];
                _this.parameters[_this.parameters.params[i]] = value;
            }
            if (_this.parameters.id > 0) {
                _this.selectedCampaign = _this.campaignService.getCampaign(_this.parameters.id);
            }
            else {
                _this.selectedCampaign = new dtObjects_1.Campaign();
            }
            if (_this.parameters.cid > 0) {
                _this.callerid = _this.selectedCampaign.callerids[0];
            }
            else {
                _this.callerid = new dtObjects_1.CallerId();
            }
        });
        this.editStep(0);
    };
    CallerIdEdit.prototype.editStep = function (num) {
        this.stepNumber = num;
    };
    CallerIdEdit.prototype.backToLists = function () {
        var path = '/callerids';
        if (this.router.url.indexOf("campaigns/edit") > 0) {
            path = '/campaigns/edit/callerids';
            this.router.navigate([path, { id: this.parameters.id }]);
            return;
        }
        this.router.navigate([path]);
    };
    CallerIdEdit.prototype.newItem = function () {
        this.callerid = new dtObjects_1.CallerId();
    };
    CallerIdEdit.prototype.save = function () {
        var path = '/callerids';
        if (this.router.url.indexOf("campaigns/edit") > 0) {
            path = '/campaigns/edit/callerids';
            this.router.navigate([path, { id: this.parameters.id }]);
            return;
        }
        this.router.navigate([path]);
    };
    CallerIdEdit.prototype.doNotSave = function () {
        var path = '/callerids';
        if (this.router.url.indexOf("campaigns/edit") > 0) {
            path = '/campaigns/edit/callerids';
            this.router.navigate([path, { id: this.parameters.id }]);
            return;
        }
        this.router.navigate([path]);
    };
    CallerIdEdit = __decorate([
        core_1.Component({
            selector: 'callerid-edit',
            template: "\n<div class=\"row\">\nCaller Id Edit {{callerid.id}}\n</div>\n<div class=\"row\">\n    <form class=\"col-sm-6\">\n            <div class=\"form-group\">\n                <label for=\"title\">Phone</label>\n                <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" required [(ngModel)]=\"callerid.value\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"description\">Description</label>\n                  <textarea class=\"form-control\" rows=\"3\" id=\"description\" name=\"description\" required [(ngModel)]=\"callerid.description\"></textarea>\n              </div>\n              <div class=\"col-sm-12\">\n                  <button type=\"button\" class=\"btn btn-default\" aria-label=\"Save\" (click)=\"doNotSave()\">\n                        <span class=\"glyphicon glyphicon-ban-circle\" aria-hidden=\"true\"></span>   Don't Save\n                  </button>\n                    <button type=\"button\" class=\"btn btn-default\" aria-label=\"Save\" (click)=\"save()\">\n                        <span class=\"glyphicon glyphicon-cloud-upload\" aria-hidden=\"true\"></span>   Save\n                  </button>\n               </div>\n    </form>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [campaignsService_1.CampaignService, router_1.Router, router_1.ActivatedRoute])
    ], CallerIdEdit);
    return CallerIdEdit;
}(edit_1.EditComponent));
exports.CallerIdEdit = CallerIdEdit;
//# sourceMappingURL=edit.js.map