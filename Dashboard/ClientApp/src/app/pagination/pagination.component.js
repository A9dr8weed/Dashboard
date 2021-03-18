"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationComponent = void 0;
var core_1 = require("@angular/core");
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.goPrev = new core_1.EventEmitter();
        this.goNext = new core_1.EventEmitter();
        this.goPage = new core_1.EventEmitter();
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.onPrev = function () {
        this.goPrev.emit(true);
    };
    PaginationComponent.prototype.onNext = function () {
        this.goNext.emit(true);
    };
    PaginationComponent.prototype.onPage = function (n) {
        this.goPage.emit(n);
    };
    PaginationComponent.prototype.totalPages = function () {
        return Math.ceil(this.count / this.perPage) || 0;
    };
    PaginationComponent.prototype.isLastPage = function () {
        return this.perPage * this.page >= this.count;
    };
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "page", void 0);
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "count", void 0);
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "perPage", void 0);
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "pagesToShow", void 0);
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "loading", void 0);
    __decorate([
        core_1.Output()
    ], PaginationComponent.prototype, "goPrev", void 0);
    __decorate([
        core_1.Output()
    ], PaginationComponent.prototype, "goNext", void 0);
    __decorate([
        core_1.Output()
    ], PaginationComponent.prototype, "goPage", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'app-pagination',
            templateUrl: './pagination.component.html',
            styleUrls: ['./pagination.component.css']
        })
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map