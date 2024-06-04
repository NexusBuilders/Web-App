import { Component } from '@angular/core';
import {Stock} from "../../model/stock";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockRestaurantComponent {
  dataSource!: MatTableDataSource<any>;
  tableDisplayColumns: string[] = ['Especie','Cantidad', 'Unidad'];
  stocks : Array<Stock>;
  constructor(){
    this.stocks=new Array<Stock>();
    this.dataSource = new MatTableDataSource<any>();
    this.stocks.push(new Stock("Pollo", 5, "kilogramos"));
    this.stocks.push(new Stock("Pescado", 3, "kilogramos"));
    this.stocks.push(new Stock("Quinua", 10, "kilogramos"));
    this.stocks.push(new Stock("Papas", 50, "kilogramos"));
    this.stocks.push(new Stock("Camote", 25, "kilogramos"));
    this.stocks.push(new Stock("Aji Amarillo", 2, "kilogramos"));
    this.stocks.push(new Stock("Limón", 100, "unidades"));
    this.stocks.push(new Stock("Choclo", 30, "unidades"));
    this.stocks.push(new Stock("Yuca", 20, "kilogramos"));
    this.dataSource.data=this.stocks;
  }


  ngOnInit(): void {
  }
}
