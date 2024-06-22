import { Component, Input } from '@angular/core';
import { Lunch } from "../../model/lunch.entity";
import { LunchService } from "../../services/lunch.service";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-card-lunch',
  templateUrl: './card-lunch.component.html',
  styleUrls: ['./card-lunch.component.css']
})
export class CardLunchComponent {
  title = "Lunch";
  @Input() lunches: Array<Lunch> = [];

  constructor(private lunchApi: LunchService, private cartService: CartService) {
    this.lunches = [];
  }

  ngOnInit() {
    this.lunchApi.getAll().subscribe((data: any) => {
      this.lunches = data;
    });
  }

  addToCart(lunch: Lunch) {
    const item = { ...lunch, quantity: 1 };
    this.cartService.addItem(lunch);
  }
}
