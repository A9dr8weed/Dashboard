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
    PaginationComponent.prototype.getMin = function () {
        return ((this.perPage * this.page) - this.perPage) + 1;
    };
    PaginationComponent.prototype.getMax = function () {
        var max = this.perPage * this.page;
        if (max > this.count) {
            max = this.count;
        }
        return max;
    };
    PaginationComponent.prototype.getPages = function () {
        // загальна кількість сторінок
        var totalPages = Math.ceil(this.count / this.perPage);
        var thisPage = this.page || 1;
        var pagesToShow = this.pagesToShow || 9;
        // новий масив сторінок
        var pages = [];
        pages.push(thisPage);
        console.log('Starting loop with', totalPages, 'thisPage:', thisPage, 'pagesToShow:', pagesToShow);
        // проходимося по сторінках
        for (var i = 0; i < pagesToShow - 1; i++) {
            console.log('pages[]:', pages);
            // якщо довжина масиву менша сторінок для показу
            if (pages.length < pagesToShow) {
                // якщо мінімальна значення нашого масиву більше одиниці
                if (Math.min.apply(null, pages) > 1) {
                    pages.push(Math.min.apply(null, pages) - 1);
                    console.log('pushing', Math.min.apply(null, pages) - 1, "on to array");
                }
            }
            // якщо довжина масиву менша сторінок для показу
            if (pages.length < pagesToShow) {
                // якщо максимальне значення масиву менше за кількість сторінок для показу
                if (Math.max.apply(null, pages) < totalPages) {
                    // додаємо максимальне значення масиву і додаємо 1
                    pages.push(Math.max.apply(null, pages) + 1);
                    console.log('pushing', Math.max.apply(null, pages) + 1, "on to array");
                }
            }
        }
        pages.sort(function (a, b) { return a - b; });
        return pages;
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