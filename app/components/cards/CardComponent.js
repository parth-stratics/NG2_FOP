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
 * Created by User on 9/28/2016.
 */
var core_1 = require('@angular/core');
var dpo_1 = require("../../objects/display/dpo");
var CardComponent = (function () {
    function CardComponent() {
        this.viewItem = new core_1.EventEmitter();
        this.editItem = new core_1.EventEmitter();
        this.showNavigationControls = true;
        this.previousDisabled = true;
        this.nextDisabled = false;
        this.columns = [new dpo_1.ColumnData("#", "id", "col-sm-2")];
        this.columns.push(new dpo_1.ColumnData("Title", "title", "col-sm-4"));
        this.columns.push(new dpo_1.ColumnData("Description", "description", "col-sm-4"));
    }
    Object.defineProperty(CardComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
            if (this._items.length > this.currentIndex) {
                this.currentIndex = 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CardComponent.prototype, "currentIndex", {
        get: function () {
            return this._currentIndex;
        },
        set: function (value) {
            this._currentIndex = value;
            if (this._items != null && this._items.length > value) {
                this.selectedItem = this._items[value];
            }
            this.enableNavigationControls();
        },
        enumerable: true,
        configurable: true
    });
    ;
    CardComponent.prototype.prevItem = function () {
        if (this.currentIndex > 0) {
            this.currentIndex = this.currentIndex - 1;
            this.selectedItem = this._items[this.currentIndex];
        }
        this.enableNavigationControls();
    };
    CardComponent.prototype.nextItem = function () {
        if (this.currentIndex < this._items.length - 1) {
            this.currentIndex = this.currentIndex + 1;
            this.selectedItem = this._items[this.currentIndex];
        }
        this.enableNavigationControls();
    };
    CardComponent.prototype.enableNavigationControls = function () {
        this.previousDisabled = (this.currentIndex == 0);
        this.nextDisabled = (this.currentIndex == this._items.length - 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CardComponent.prototype, "columns", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CardComponent.prototype, "selectedItem", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CardComponent.prototype, "viewItem", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CardComponent.prototype, "editItem", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], CardComponent.prototype, "items", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], CardComponent.prototype, "currentIndex", null);
    CardComponent = __decorate([
        core_1.Component({
            selector: 'card-component'
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=CardComponent.js.map