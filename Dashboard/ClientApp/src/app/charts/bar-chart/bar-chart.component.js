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
var moment = require("moment");
/*const SAMPLE_BARCHART_DATA: any[] = [
  { data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Sales' },
  { data: [25, 39, 60, 91, 36, 54, 50], label: 'Q4 Sales' }
];

const SAMPLE_BARCHART_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];*/
var BarChartComponent = /** @class */ (function () {
    function BarChartComponent(_salesDataService) {
        this._salesDataService = _salesDataService;
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
    }
    BarChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._salesDataService.getOrders(1, 100)
            .subscribe(function (res) {
            // console.log(res['page']['data']);
            var localChartData = _this.getChartData(res);
            _this.barChartLabels = localChartData.map(function (x) { return x[0]; }).reverse();
            _this.barChartData = [{ 'data': localChartData.map(function (x) { return x[1]; }), 'label': 'Sales' }];
        });
    };
    BarChartComponent.prototype.getChartData = function (res) {
        this.orders = res['page']['data'];
        var formattedOrders = this.orders.reduce(function (r, e) {
            r.push([moment(e.placed).format('YY-MM-DD'), e.orderTotal]);
            return r;
        }, []);
        var p = [];
        var chartData = formattedOrders.reduce(function (r, e) {
            var key = e[0];
            if (!p[key]) {
                p[key] = e;
                r.push(p[key]);
            }
            else {
                p[key][1] += e[1];
            }
            return r;
        }, []);
        return chartData;
        /*const myData = [3, 4, 5].reduce((sum, value) => {
          return sum + value;
        }, 0);
        console.log('MyDate', myData);*/
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