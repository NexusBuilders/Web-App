import {Component, Input} from '@angular/core';
import {OrderRestaurant} from "../../../orders-restaurant/model/order-restaurant.entity";
import {Stock} from "../../model/stock.entity";
import {OrderRestaurantService} from "../../../orders-restaurant/services/order-restaurant.service.service";
import {StockService} from "../../services/stock.service";

@Component({
  selector: 'app-table-stock',
  templateUrl: './table-stock.component.html',
  styleUrl: './table-stock.component.css'
})
export class TableStockComponent {
  title = "TableStock";
  @Input() stocks: Array<Stock> = [];
  public displayColumn:string[] = ['id','product','quantity','unit'];
  constructor(private stockApi: StockService) {
    this.stocks = [];
  }

  ngOnInit(){
    this.stockApi.getAll()
    .subscribe((data:any)=>{
      this.stocks = data;
    })
  }
}
