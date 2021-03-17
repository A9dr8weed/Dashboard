"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarChartComponent = void 0;
var core_1 = require("@angular/core");
var SAMPLE_BARCHART_DATA = [
    { data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Sales' },
    { data: [25, 39, 60, 91, 36, 54, 50], label: 'Q4 Sales' }
];
var SAMPLE_BARCHART_LABELS = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];
var BarChartComponent = /** @class */ (function () {
    function BarChartComponent() {
        this.barChartData = SAMPLE_BARCHART_DATA;
        this.barChartLabels = SAMPLE_BARCHART_LABELS;
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
    }
    BarChartComponent.prototype.ngOnInit = function () {
    };
    BarChartComponent = __decorate([
        core_1.Component({
            selector: 'app-bar-chart',
            templateUrl: './bar-chart.component.html',
            styleUrls: ['./bar-chart.component.css']
        })
    ], BarChartComponent);
    return BarChartComponent;
}());
exports.BarChartComponent = BarChartComponent;
//# sourceMappingURL=bar-chart.component.js.map