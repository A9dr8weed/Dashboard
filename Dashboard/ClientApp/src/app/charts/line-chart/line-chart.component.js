"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineChartComponent = void 0;
var core_1 = require("@angular/core");
var chart_colors_1 = require("../../shared/chart.colors");
var LINE_CHART_SAMPLE_DATA = [
    { data: [32, 14, 46, 23, 38, 56], label: 'Sentiment Analysis' },
    { data: [12, 32, 65, 84, 8, 26], label: 'Image Recognition' },
    { data: [42, 18, 4, 43, 13, 66], label: 'Forecasting' }
];
var LINE_CHART_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
var LineChartComponent = /** @class */ (function () {
    function LineChartComponent() {
        this.lineChartData = LINE_CHART_SAMPLE_DATA;
        this.lineChartLabels = LINE_CHART_LABELS;
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartType = 'line';
        this.lineChartColors = chart_colors_1.LINE_CHART_COLORS;
    }
    LineChartComponent.prototype.ngOnInit = function () {
    };
    LineChartComponent = __decorate([
        core_1.Component({
            selector: 'app-line-chart',
            templateUrl: './line-chart.component.html',
            styleUrls: ['./line-chart.component.css']
        })
    ], LineChartComponent);
    return LineChartComponent;
}());
exports.LineChartComponent = LineChartComponent;
//# sourceMappingURL=line-chart.component.js.map