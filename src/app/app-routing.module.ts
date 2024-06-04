import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioSesionComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {UserProfileComponent} from "./components/userprofile/userprofile.component";
import {PlanComponent} from "./components/plan/plan.component";
import {RestaurantComponent} from "./components/restaurant/restaurant.component";
import {StockComponent} from "./components/stock/stock.component";
import {OrderComponent} from "./components/order/order.component";
import {OrderRestaurantTableComponent} from "./components/order-restaurant-table/order-restaurant-table.component";
import {
  OrderConfirmationDialogComponent
} from "./components/order-confirmation-dialog/order-confirmation-dialog.component";
import {OrderSummaryComponent} from "./components/order-summary/order-summary.component";
import {AnalisisComponent} from "./components/perfil/components/analisis/analisis.component";
import {FormularioComponent} from "./components/perfil/components/formulario/formulario.component";
import {HomeComponent} from "./components/perfil/components/home/home.component";
import {PedidosComponent} from "./components/perfil/components/pedidos/pedidos.component";
import {StockRestaurantComponent} from "./components/perfil/components/stock/stock.component";
import {SeccionPerfilComponent} from "./components/perfil/components/seccion-perfil/seccion-perfil.component";
const routes: Routes = [
  { path: 'login',component:InicioSesionComponent},
  { path: 'registro',component:RegisterComponent},
  { path: 'profile',component:UserProfileComponent},
  { path: 'plan', component: PlanComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'stock', component: StockComponent },
  { path: 'order', component: OrderComponent },
  { path: 'orderRestaurant', component: OrderRestaurantTableComponent },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'orderConfirmation', component: OrderConfirmationDialogComponent },
  { path: 'orderSummary', component: OrderSummaryComponent },
  { path: 'home', component:  HomeComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'analisis', component: AnalisisComponent },
  { path: 'profileRestaurant', component: SeccionPerfilComponent },
  { path: 'Stock', component: StockRestaurantComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
