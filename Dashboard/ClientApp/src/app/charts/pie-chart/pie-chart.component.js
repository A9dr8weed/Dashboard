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
var PieChartComponent = /** @class */ (function () {
    function PieChartComponent() {
        this.pieChartData = [350, 450, 120];
        this.pieChartLabels = ['XYZ Logistics', 'Main St Backery', 'Acme Hosting'];
        this.colors = [
            {
                backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
                borderColor: '#111'
            }
        ];
        this.pieChartType = 'doughnut';
    }
    PieChartComponent.prototype.ngOnInit = function () {
    };
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