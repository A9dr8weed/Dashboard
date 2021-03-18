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
var moment = require("moment");
/*const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [32, 14, 46, 23, 38, 56], label: 'Sentiment Analysis' },
  { data: [12, 32, 65, 84, 8, 26], label: 'Image Recognition' },
  { data: [42, 18, 4, 43, 13, 66], label: 'Forecasting' }
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];*/
var LineChartComponent = /** @class */ (function () {
    function LineChartComponent(_salesDataService) {
        this._salesDataService = _salesDataService;
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartType = 'line';
        this.lineChartColors = chart_colors_1.LINE_CHART_COLORS;
    }
    LineChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._salesDataService.getOrders(1, 100).subscribe(function (res) {
            _this.allOrders = res['page']['data'];
            _this._salesDataService.getOrdersByCustomer(3).subscribe(function (cus) {
                _this.topCustomers = cus.map(function (x) { return x['name']; });
                var allChartData = _this.topCustomers.reduce(function (result, i) {
                    result.push(_this.getChartData(_this.allOrders, i));
                    return result;
                }, []);
                var dates = allChartData.map(function (x) { return x['data']; }).reduce(function (a, i) {
                    a.push(i.map(function (o) { return new Date(o[0]); }));
                    return a;
                }, []);
                dates = [].concat.apply([], dates);
                var r = _this.getCustomerOrdersByDate(allChartData, dates)['data'];
                console.log('r:', r);
                _this.lineChartLabels = r[0]['orders'].map(function (o) { return o['date']; });
                _this.lineChartData = [
                    {
                        'data': r[0].orders.map(function (x) { return x.total; }),
                        'label': r[0]['customer']
                    },
                    {
                        'data': r[1].orders.map(function (x) { return x.total; }),
                        'label': r[1]['customer']
                    },
                    {
                        'data': r[2].orders.map(function (x) { return x.total; }),
                        'label': r[2]['customer']
                    }
                ];
            });
        });
    };
    LineChartComponent.prototype.getChartData = function (allOrders, name) {
        var customerOrders = allOrders.filter(function (o) { return o.customer.name === name; });
        var formattedOrders = customerOrders.reduce(function (r, e) {
            r.push([e.placed, e.orderTotal]);
            return r;
        }, []);
        var result = { customer: name, data: formattedOrders };
        return result;
    };
    LineChartComponent.prototype.getCustomerOrdersByDate = function (orders, dates) {
        var _this = this;
        // for each customer -> for each date =>
        // { data: [{'customer': 'XYZ', 'orders': [{ 'date': '17-11-25', total: 2421}, {}]}, {}, {}]}
        var customers = this.topCustomers;
        var prettyDates = dates.map(function (x) { return _this.toFriendlyDate(x); });
        var u = Array.from(new Set(prettyDates)).sort();
        // define our result object to return:
        var result = {};
        var dataSets = result['data'] = [];
        customers.reduce(function (x, y, i) {
            var customerOrders = [];
            dataSets[i] = {
                customer: y,
                orders: u.reduce(function (r, e, j) {
                    var obj = {};
                    obj['date'] = e;
                    // sum total orders for this customer on this day
                    obj['total'] = _this.getCustomerDateTotal(e, y);
                    customerOrders.push(obj);
                    return customerOrders;
                })
            };
            return x;
        }, []);
        return result;
    };
    LineChartComponent.prototype.getCustomerDateTotal = function (date, customer) {
        var _this = this;
        var r = this.allOrders.filter(function (o) { return o.customer.name === customer && _this.toFriendlyDate(o.placed) === date; });
        var result = r.reduce(function (a, b) {
            return a + b.orderTotal;
        }, 0);
        return result;
    };
    LineChartComponent.prototype.toFriendlyDate = function (date) {
        return moment(date).endOf('day').format('YY-MM-DD');
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