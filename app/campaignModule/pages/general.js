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
var CampaignGeneral = (function (_super) {
    __extends(CampaignGeneral, _super);
    function CampaignGeneral(campaignService, router, route) {
        _super.call(this);
        this.campaignService = campaignService;
        this.router = router;
        this.route = route;
        this.selectedViewOption = 0;
        this.viewOptions = new Array();
        this.stepNumber = 0;
        this.viewOptions.push(new baseObjects_1.GlyphiconDto(0, 'List', true, 'list'));
        this.viewOptions.push(new baseObjects_1.GlyphiconDto(1, 'Card', false, 'th-large'));
    }
    CampaignGeneral.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.campaignToEdit = _this.campaignService.getCampaign(id);
        });
        this.editStep(0);
    };
    CampaignGeneral.prototype.editStep = function (num) {
        this.stepNumber = num;
        if (num == 1) {
            this.router.navigate(['/campaigns/edit/callerids', { id: this.campaignToEdit.id }]);
        }
    };
    CampaignGeneral.prototype.backToLists = function () {
        this.router.navigate(['/campaigns']);
    };
    CampaignGeneral.prototype.newItem = function () {
        this.campaignToEdit = new dtObjects_1.Campaign();
    };
    CampaignGeneral.prototype.save = function () {
        this.router.navigate(['/campaigns']);
    };
    CampaignGeneral.prototype.doNotSave = function () {
        this.router.navigate(['/campaigns']);
    };
    CampaignGeneral = __decorate([
        core_1.Component({
            selector: 'campaign-general',
            template: "\n<div class=\"row\">\n    <form class=\"col-sm-6\">\n            <div class=\"form-group\">\n                <label for=\"title\">Title</label>\n                <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" required [(ngModel)]=\"campaignToEdit.title\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"description\">Description</label>\n                  <textarea class=\"form-control\" rows=\"3\" id=\"description\" name=\"description\" required [(ngModel)]=\"campaignToEdit.description\"></textarea>\n              </div>\n            <div class=\"form-group\">\n                  <label>Start Date:</label>\n                  <input type=\"text\" class=\"form-control\" id=\"startDate\" name=\"startDate\" required [(ngModel)]=\"campaignToEdit.startDate\">\n              </div>\n              <div class=\"form-group\">\n                  <label>End Date:</label>\n                  <input type=\"text\" class=\"form-control\" id=\"endDate\" name=\"endDate\" required [(ngModel)]=\"campaignToEdit.endDate\">\n              </div>\n              <div class=\"col-sm-12\">\n              <button type=\"button\" class=\"btn btn-default\" aria-label=\"Save\" (click)=\"doNotSave()\">\n                    <span class=\"glyphicon glyphicon-ban-circle\" aria-hidden=\"true\"></span>   Don't Save\n              </button>\n                <button type=\"button\" class=\"btn btn-default\" aria-label=\"Save\" (click)=\"save()\">\n                    <span class=\"glyphicon glyphicon-cloud-upload\" aria-hidden=\"true\"></span>   Save\n              </button>\n            </div>\n    </form>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [campaignsService_1.CampaignService, router_1.Router, router_1.ActivatedRoute])
    ], CampaignGeneral);
    return CampaignGeneral;
}(edit_1.EditComponent));
exports.CampaignGeneral = CampaignGeneral;
//# sourceMappingURL=general.js.map