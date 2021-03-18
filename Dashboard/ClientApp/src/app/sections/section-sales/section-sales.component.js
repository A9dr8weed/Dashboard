"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionSalesComponent = void 0;
var core_1 = require("@angular/core");
var SectionSalesComponent = /** @class */ (function () {
    function SectionSalesComponent(_salesDataService) {
        this._salesDataService = _salesDataService;
    }
    SectionSalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._salesDataService.getOrdersByState()
            .subscribe(function (res) {
            _this.salesDataByState = res;
        });
        this._salesDataService.getOrdersByCustomer(5)
            .subscribe(function (res) {
            _this.salesDataByCustomer = res;
        });
    };
    SectionSalesComponent = __decorate([
        core_1.Component({
            selector: 'app-section-sales',
            templateUrl: './section-sales.component.html',
            styleUrls: ['./section-sales.component.css']
        })
    ], SectionSalesComponent);
    return SectionSalesComponent;
}());
exports.SectionSalesComponent = SectionSalesComponent;
//# sourceMappingURL=section-sales.component.js.map