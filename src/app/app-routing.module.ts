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

const routes: Routes = [
  { path: 'login',component:InicioSesionComponent},
  { path: 'registro',component:RegisterComponent},
  { path: 'profile',component:UserProfileComponent},
  { path: 'plan', component: PlanComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'stock', component: StockComponent },
  { path: 'order', component: OrderComponent },
  { path: 'orderRestaurant', component: OrderRestaurantTableComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
