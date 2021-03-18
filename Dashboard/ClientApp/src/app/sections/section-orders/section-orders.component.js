"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionOrdersComponent = void 0;
var core_1 = require("@angular/core");
var SectionOrdersComponent = /** @class */ (function () {
    function SectionOrdersComponent(_salesData) {
        this._salesData = _salesData;
        this.total = 0;
        this.page = 1;
        this.limit = 10;
        this.loading = false;
    }
    SectionOrdersComponent.prototype.ngOnInit = function () {
        this.getOrders();
    };
    SectionOrdersComponent.prototype.getOrders = function () {
        var _this = this;
        this._salesData.getOrders(this.page, this.limit)
            .subscribe(function (res) {
            console.log('Result from getOrders: ', res);
            _this.orders = res['page']['data'];
            _this.total = res['page'].total;
            _this.loading = false;
        });
    };
    SectionOrdersComponent.prototype.goToPrevious = function () {
        //console.log('Previous Button Clicked!');
        this.page--;
        this.getOrders();
    };
    SectionOrdersComponent.prototype.goToNext = function () {
        //console.log('Next Button Clicked!');
        this.page++;
        this.getOrders();
    };
    SectionOrdersComponent.prototype.goToPage = function (n) {
        this.page = n;
        this.getOrders();
    };
    SectionOrdersComponent = __decorate([
        core_1.Component({
            selector: 'app-section-orders',
            templateUrl: './section-orders.component.html',
            styleUrls: ['./section-orders.component.css']
        })
    ], SectionOrdersComponent);
    return SectionOrdersComponent;
}());
exports.SectionOrdersComponent = SectionOrdersComponent;
//# sourceMappingURL=section-orders.component.js.map