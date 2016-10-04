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
/**
 * Created by User on 9/20/2016.
 */
var core_1 = require('@angular/core');
/*
 */
var ConcatenatePipe = (function () {
    function ConcatenatePipe() {
    }
    ConcatenatePipe.prototype.transform = function (value, length) {
        if (value.length > length) {
            return value.substring(0, length) + "...";
        }
        return value.substring(0, length);
    };
    ConcatenatePipe = __decorate([
        core_1.Pipe({ name: 'concatenate' }), 
        __metadata('design:paramtypes', [])
    ], ConcatenatePipe);
    return ConcatenatePipe;
}());
exports.ConcatenatePipe = ConcatenatePipe;
//# sourceMappingURL=concatenate.pipe.js.map