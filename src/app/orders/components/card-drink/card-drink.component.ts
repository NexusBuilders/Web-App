import { Component, Input } from '@angular/core';
import {Drink} from "../../model/drink.entity";
import {DrinkService} from "../../services/drink.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-card-drink',
  templateUrl: './card-drink.component.html',
  styleUrls: ['./card-drink.component.css']
})
export class CardDrinkComponent {
  title="Drinks";
  @Input() drinks: Array<Drink> = [];

  constructor(private drinkApi:DrinkService,  private cartService: CartService) {
    this.drinks = [];
  }
  ngOnInit(){
    this.drinkApi.getAll().
      subscribe((data:any)=>{
        this.drinks = data;
    })
  }
  addToCart(drink: Drink) {
    this.cartService.addItem(drink);
  }
}
