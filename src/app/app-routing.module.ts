import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioSesionComponent} from "./public/pages/login/login.component";
import {RegisterComponent} from "./public/pages/register/register.component";
import {UserProfileComponent} from "./public/pages/userprofile/userprofile.component";
import {PlanComponent} from "./public/pages/plan/plan.component";
import {RestaurantComponent} from "./public/pages/restaurant/restaurant.component";
import {StockComponent} from "./public/pages/stock/stock.component";
import {OrderComponent} from "./public/pages/order/order.component";
import {OrderRestaurantTableComponent} from "./public/pages/order-restaurant-table/order-restaurant-table.component";

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
