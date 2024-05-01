import {Component, Input} from '@angular/core';
import {OrderRestaurant} from "../../model/order-restaurant.entity";
import {OrderRestaurantService} from "../../services/order-restaurant.service.service";

@Component({
  selector: 'app-table-orders-restaurant',
  templateUrl: './table-orders-restaurant.component.html',
  styleUrl: './table-orders-restaurant.component.css'
})
export class TableOrdersRestaurantComponent {
  title ="TableOrders-Restaurant";

  @Input() ordersRestaurant: Array<OrderRestaurant> = [];
  public displayColumn:string[] = ['id','customer','nOrders']
  constructor(private ordersRestaurantApi:OrderRestaurantService) {
    this.ordersRestaurant = [];
  }

  ngOnInit(){
    this.ordersRestaurantApi.getAll().
      subscribe((data:any)=>{
        this.ordersRestaurant = data;
    })
  }
}
