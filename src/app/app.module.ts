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
import {InicioSesionComponent} from "./components/login/login.component";
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
import {UserProfileComponent} from "./components/userprofile/userprofile.component";
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { OrderConfirmationDialogComponent } from './components/order-confirmation-dialog/order-confirmation-dialog.component';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatList, MatListItem} from "@angular/material/list";
import { AnalisisComponent } from './components/perfil/components/analisis/analisis.component';
import { FormularioComponent } from './components/perfil/components/formulario/formulario.component';
import { HomeComponent } from './components/perfil/components/home/home.component';
import { OverviewComponent } from './components/perfil/components/overview/overview.component';
import { PedidosComponent } from './components/perfil/components/pedidos/pedidos.component';
import { SeccionPerfilComponent } from './components/perfil/components/seccion-perfil/seccion-perfil.component';
import { TopClientesComponent } from './components/perfil/components/top-clientes/top-clientes.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StockRestaurantComponent} from "./components/perfil/components/stock/stock.component";
import { NavbarRestaurantComponent } from './public/navbar-restaurant/navbar-restaurant.component';
import {UserService} from "./shared/services/user.service";
import { PurchaseDialogComponent } from './components/purchase-dialog/purchase-dialog.component';
import { LoginRsComponent } from './components/login-rs/login-rs.component';
import { RegisterRsComponent } from './components/register-rs/register-rs.component';
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
    NavbarComponent,
    UserProfileComponent,
    InicioSesionComponent,
    OrderSummaryComponent,
    OrderConfirmationDialogComponent,
    AnalisisComponent,
    FormularioComponent,
    HomeComponent,
    OverviewComponent,
    PedidosComponent,
    SeccionPerfilComponent,
    TopClientesComponent,
    StockRestaurantComponent,
    NavbarRestaurantComponent,
    PurchaseDialogComponent,
    LoginRsComponent,
    RegisterRsComponent

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
    MatDialogClose,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatList,
    MatListItem,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync(),
    UserService,
    {provide: 'environment', useValue: environment},

  ],
  exports: [
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
