"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var ng2_charts_1 = require("ng2-charts");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar/navbar.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var section_orders_component_1 = require("./sections/section-orders/section-orders.component");
var section_sales_component_1 = require("./sections/section-sales/section-sales.component");
var section_health_component_1 = require("./sections/section-health/section-health.component");
var bar_chart_component_1 = require("./charts/bar-chart/bar-chart.component");
var line_chart_component_1 = require("./charts/line-chart/line-chart.component");
var pie_chart_component_1 = require("./charts/pie-chart/pie-chart.component");
var server_component_1 = require("./server/server.component");
var pagination_component_1 = require("./pagination/pagination.component");
var sales_data_services_1 = require("./services/sales-data.services");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                sidebar_component_1.SidebarComponent,
                section_orders_component_1.SectionOrdersComponent,
                section_sales_component_1.SectionSalesComponent,
                section_health_component_1.SectionHealthComponent,
                bar_chart_component_1.BarChartComponent,
                line_chart_component_1.LineChartComponent,
                pie_chart_component_1.PieChartComponent,
                server_component_1.ServerComponent,
                pagination_component_1.PaginationComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                http_1.HttpClientModule,
                forms_1.FormsModule,
                ng2_charts_1.ChartsModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/sales', pathMatch: 'full' },
                    { path: 'sales', component: section_sales_component_1.SectionSalesComponent },
                    { path: 'orders', component: section_orders_component_1.SectionOrdersComponent },
                    { path: 'health', component: section_health_component_1.SectionHealthComponent }
                ], { relativeLinkResolution: 'legacy' })
            ],
            providers: [
                sales_data_services_1.SalesDataService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map