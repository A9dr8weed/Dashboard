import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionHealthComponent } from './sections/section-health/section-health.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ServerComponent } from './server/server.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionOrdersComponent,
    SectionSalesComponent,
    SectionHealthComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    ServerComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot([
    { path: '', redirectTo: '/sales', pathMatch: 'full' },
    { path: 'sales', component: SectionSalesComponent },
    { path: 'orders', component: SectionOrdersComponent },
    { path: 'health', component: SectionHealthComponent }
], { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
