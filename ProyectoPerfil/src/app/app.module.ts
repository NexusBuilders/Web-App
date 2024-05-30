import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeccionPerfilComponent } from './perfil/components/seccion-perfil/seccion-perfil.component';
import { FormularioComponent } from './perfil/components/formulario/formulario.component';
import { PedidosComponent } from './perfil/components/pedidos/pedidos.component';
import { AnalisisComponent } from './perfil/components/analisis/analisis.component';
import { StockComponent } from './perfil/components/stock/stock.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCard, MatCardContent} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import { HomeComponent } from './perfil/components/home/home.component';
import { OverviewComponent } from './perfil/components/overview/overview.component';
import { TopClientesComponent } from './perfil/components/top-clientes/top-clientes.component';
import { PageNotFoundComponent } from './perfil/public/page-not-found/page-not-found.component';
import {MatButton} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    SeccionPerfilComponent,
    FormularioComponent,
    PedidosComponent,
    AnalisisComponent,
    StockComponent,
    HomeComponent,
    OverviewComponent,
    TopClientesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCard,
    ReactiveFormsModule,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatButton,
    MatCardContent
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
