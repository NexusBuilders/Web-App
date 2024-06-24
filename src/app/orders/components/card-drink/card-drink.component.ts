import { Component, OnInit } from '@angular/core';
import { Drink } from "../../model/drink.entity";
import { DrinkService } from "../../services/drink.service";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-card-drink',
  templateUrl: './card-drink.component.html',
  styleUrls: ['./card-drink.component.css']
})
export class CardDrinkComponent implements OnInit {
  title = "Drinks";
  drinks: Drink[] = [];

  constructor(private drinkService: DrinkService, private cartService: CartService) {}

  ngOnInit(): void {
    const restaurantId = +localStorage.getItem('selectedRestaurantId')!;
    this.drinkService.getDrinks(restaurantId).subscribe(
      (data: Drink[]) => {
        this.drinks = data;
      },
      error => {
        console.error('Error fetching drinks', error);
      }
    );
  }

  addToCart(drink: Drink) {
    const item = { ...drink, quantity: 1 };
    this.cartService.addItem(drink);
  }
}
