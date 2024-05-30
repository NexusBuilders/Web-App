import { Component } from '@angular/core';
import {Stock} from "../../models/stock";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {
  dataSource!: MatTableDataSource<any>;
  tableDisplayColumns: string[] = ['Especie','Cantidad', 'Unidad'];
  stocks : Array<Stock>;
  constructor(){
    this.stocks=new Array<Stock>();
    this.dataSource = new MatTableDataSource<any>();
    this.stocks.push(new Stock("das", 1, "dasd"));
    this.stocks.push(new Stock("fas", 4, "fad"));
    this.stocks.push(new Stock("dwqs", 6, "dwqdd"));


    this.dataSource.data=this.stocks;
  }


  ngOnInit(): void {
  }
}
