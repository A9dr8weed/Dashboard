import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionHealthComponent } from './sections/section-health/section-health.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionOrdersComponent,
    SectionSalesComponent,
    SectionHealthComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/sales', pathMatch: 'full' },

      { path: 'sales', component: SectionSalesComponent},
      { path: 'orders', component: SectionOrdersComponent},
      { path: 'health', component: SectionHealthComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
