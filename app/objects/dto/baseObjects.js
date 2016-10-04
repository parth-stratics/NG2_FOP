/**
 * Created by User on 9/30/2016.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RoutingParameters = (function () {
    function RoutingParameters() {
        this.params = ["id", "cid"];
    }
    return RoutingParameters;
}());
exports.RoutingParameters = RoutingParameters;
var NameValueDto = (function () {
    function NameValueDto(name, value) {
        this.name = name;
        this.value = value;
    }
    return NameValueDto;
}());
exports.NameValueDto = NameValueDto;
var BasicDto = (function (_super) {
    __extends(BasicDto, _super);
    function BasicDto(id, title, description, value, name, flag) {
        _super.call(this, name, value);
        this.id = id;
        this.title = title;
        this.description = description;
        this.flag = flag;
    }
    return BasicDto;
}(NameValueDto));
exports.BasicDto = BasicDto;
var GlyphiconDto = (function (_super) {
    __extends(GlyphiconDto, _super);
    function GlyphiconDto(id, name, flag, icon) {
        _super.call(this, id, name, null, flag, name, flag);
        this.icon = "glyphicon glyphicon-" + icon;
    }
    return GlyphiconDto;
}(BasicDto));
exports.GlyphiconDto = GlyphiconDto;
//# sourceMappingURL=baseObjects.js.map