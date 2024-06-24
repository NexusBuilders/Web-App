import { Component, OnInit } from '@angular/core';
import { Lunch } from "../../model/lunch.entity";
import { LunchService } from "../../services/lunch.service";
import { CartService } from "../../services/cart.service";
import {Drink} from "../../model/drink.entity";

@Component({
  selector: 'app-card-lunch',
  templateUrl: './card-lunch.component.html',
  styleUrls: ['./card-lunch.component.css']
})
export class CardLunchComponent implements OnInit {
  title = "Lunch";
  lunches: Lunch[] = [];

  constructor(private lunchService: LunchService, private cartService: CartService) {}

  ngOnInit(): void {
    const restaurantId = +localStorage.getItem('selectedRestaurantId')!;
    this.lunchService.getLunches(restaurantId).subscribe(
      (data: Lunch[]) => {
        this.lunches = data;
      },
      error => {
        console.error('Error fetching lunches', error);
      }
    );
  }

  addToCart(lunch: Lunch) {
    const item = { ...lunch, quantity: 1 };
    this.cartService.addItem(lunch);
  }


}
