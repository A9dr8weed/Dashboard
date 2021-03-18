"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PieChartComponent = void 0;
var core_1 = require("@angular/core");
var lodash_1 = require("lodash");
var theme_colors_1 = require("../../shared/theme.colors");
var theme = 'Bright';
var PieChartComponent = /** @class */ (function () {
    function PieChartComponent() {
        this.colors = [
            {
                backgroundColor: this.themeColors(theme),
                borderColor: '#111'
            }
        ];
        this.pieChartType = 'doughnut';
    }
    PieChartComponent.prototype.ngOnInit = function () {
        this.parseChartData(this.inputData, this.limit);
    };
    PieChartComponent.prototype.parseChartData = function (res, limit) {
        var allData = res.slice(0, limit);
        this.pieChartData = allData.map(function (x) { return lodash_1.default.values(x)[1]; });
        this.pieChartLabels = allData.map(function (x) { return lodash_1.default.values(x)[0]; });
    };
    PieChartComponent.prototype.themeColors = function (setName) {
        var c = theme_colors_1.THEME_COLORS.slice(0).find(function (set) { return set.name === setName; }).colorSet;
        return c;
    };
    __decorate([
        core_1.Input()
    ], PieChartComponent.prototype, "inputData", void 0);
    __decorate([
        core_1.Input()
    ], PieChartComponent.prototype, "limit", void 0);
    PieChartComponent = __decorate([
        core_1.Component({
            selector: 'app-pie-chart',
            templateUrl: './pie-chart.component.html',
            styleUrls: ['./pie-chart.component.css']
        })
    ], PieChartComponent);
    return PieChartComponent;
}());
exports.PieChartComponent = PieChartComponent;
//# sourceMappingURL=pie-chart.component.js.map