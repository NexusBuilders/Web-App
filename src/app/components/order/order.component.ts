import { Component } from '@angular/core';
import {CardLunchComponent} from "../../orders/components/card-lunch/card-lunch.component";
import {CardDrinkComponent} from "../../orders/components/card-drink/card-drink.component";
import {Router} from "@angular/router";
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(private router: Router) { }
  viewCart(){
    this.router.navigate(['/orderSummary']);
  }
}
