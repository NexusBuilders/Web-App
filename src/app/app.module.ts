import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CardDrinkComponent } from './orders/components/card-drink/card-drink.component';
import { CardLunchComponent } from './orders/components/card-lunch/card-lunch.component';
import {MatCardModule} from '@angular/material/card';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environments";
import {DrinkService} from "./orders/services/drink.service";
import { CardRestaurantComponent } from './restaurants/components/card-plan/card-restaurant.component';
import {CardPlanComponent} from "./plans/components/card-plan/card-plan.component";
import { TableOrdersRestaurantComponent } from './orders-restaurant/components/table-orders-restaurant/table-orders-restaurant.component';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import { TableStockComponent } from './stock/components/table-stock/table-stock.component';
import { FooterComponent } from './public/footer/footer.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import {OrderComponent} from "./components/order/order.component";
import {RestaurantComponent} from "./components/restaurant/restaurant.component";
import {PlanComponent} from "./components/plan/plan.component";
import {OrderRestaurantTableComponent} from "./components/order-restaurant-table/order-restaurant-table.component";
import {StockComponent} from "./components/stock/stock.component";
@NgModule({
  declarations: [
    AppComponent,
    CardDrinkComponent,
    CardLunchComponent,
    OrderComponent,
    CardRestaurantComponent,
    RestaurantComponent,
    CardPlanComponent,
    PlanComponent,
    TableOrdersRestaurantComponent,
    OrderRestaurantTableComponent,
    TableStockComponent,
    StockComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatIconButton,
    MatButton,
    MatIcon,
    NgOptimizedImage,
    HttpClientModule,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
  ],
  providers: [
    provideAnimationsAsync(),
    DrinkService,
    {provide: 'environment', useValue: environment},

  ],
  exports: [
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
