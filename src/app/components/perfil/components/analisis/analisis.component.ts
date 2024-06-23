import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrl: './analisis.component.css'
})
export class AnalisisComponent {

  ventas = [
    { nombre: 'Ceviche', cantidad: 10, precio: 8.99 },
    { nombre: 'Lomo Saltado', cantidad: 20, precio: 5.99 },
    { nombre: 'Inca Cola', cantidad: 50, precio: 3.50 },
    { nombre: 'Limonada', cantidad: 30, precio: 4 }
  ];

  constructor(private route: Router) {}

  gotopage(pagina: string) {
    this.route.navigate([pagina]);
  }
}
