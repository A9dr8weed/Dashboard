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
    function SectionOrdersComponent() {
        this.orders = [
            {
                id: 1, customer: { id: 1, name: 'Main St Bakery', state: 'C0', email: 'mainst@example.com' },
                total: 230, placed: new Date(2021, 12, 1), fulfilled: new Date(2021, 12, 2)
            },
            {
                id: 2, customer: { id: 1, name: 'Main St Bakery', state: 'C0', email: 'mainst@example.com' },
                total: 230, placed: new Date(2021, 12, 1), fulfilled: new Date(2021, 12, 2)
            },
            {
                id: 3, customer: { id: 1, name: 'Main St Bakery', state: 'C0', email: 'mainst@example.com' },
                total: 230, placed: new Date(2021, 12, 1), fulfilled: new Date(2021, 12, 2)
            },
            {
                id: 4, customer: { id: 1, name: 'Main St Bakery', state: 'C0', email: 'mainst@example.com' },
                total: 230, placed: new Date(2021, 12, 1), fulfilled: new Date(2021, 12, 2)
            },
            {
                id: 5, customer: { id: 1, name: 'Main St Bakery', state: 'C0', email: 'mainst@example.com' },
                total: 230, placed: new Date(2021, 12, 1), fulfilled: new Date(2021, 12, 2)
            }
        ];
    }
    SectionOrdersComponent.prototype.ngOnInit = function () {
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