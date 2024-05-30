import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioComponent} from "./perfil/components/formulario/formulario.component";
import {AnalisisComponent} from "./perfil/components/analisis/analisis.component";
import {PedidosComponent} from "./perfil/components/pedidos/pedidos.component";
import {StockComponent} from "./perfil/components/stock/stock.component";
import {SeccionPerfilComponent} from "./perfil/components/seccion-perfil/seccion-perfil.component";
import {HomeComponent} from "./perfil/components/home/home.component";
import {OverviewComponent} from "./perfil/components/overview/overview.component";
import {TopClientesComponent} from "./perfil/components/top-clientes/top-clientes.component";
import {PageNotFoundComponent} from "./perfil/public/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path:'Pedidos',
    component:PedidosComponent
  },
  {
    path:'Analisis',
    component:AnalisisComponent,
    children:[
      {
        path:'',
        redirectTo: 'Overview', pathMatch: 'full'
      },
      {
        path:'Overview',
        component:OverviewComponent
      },
      {
        path:'Top-Clientes',
        component:TopClientesComponent
      },
      {
        path:'**',
        component:PageNotFoundComponent
      }
    ]
  },
  {
    path:'Perfil',
    component:SeccionPerfilComponent
  },
  {
    path:'Stock',
    component:StockComponent
  },
  {
    path:'',
    redirectTo: 'Home', pathMatch: 'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
