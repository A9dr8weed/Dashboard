"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesDataService = void 0;
var core_1 = require("@angular/core");
var SalesDataService = /** @class */ (function () {
    function SalesDataService(_http) {
        this._http = _http;
    }
    SalesDataService.prototype.getOrders = function (pageIndex, pageSize) {
        return this._http.get('https://localhost:5001/api/order/' + pageIndex + '/' + pageSize);
    };
    SalesDataService = __decorate([
        core_1.Injectable()
    ], SalesDataService);
    return SalesDataService;
}());
exports.SalesDataService = SalesDataService;
//# sourceMappingURL=sales-data.services.js.map