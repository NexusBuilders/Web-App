import {Component, Input,OnInit} from '@angular/core';
import {Restaurant} from "../../model/restaurant.entity";
import {RestaurantService} from "../../services/restaurant.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-restaurant',
  templateUrl: './card-restaurant.component.html',
  styleUrl: './card-restaurant.component.css'
})
export class CardRestaurantComponent {
  title = "Restaurant"

  @Input() restaurants: Array<Restaurant> = [];

  constructor(private restaurantService : RestaurantService, private router: Router) {
    this.restaurants = []
  }
  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(
      (data: Restaurant[]) => {
        this.restaurants = data;
      },
      error => {
        console.error('Error fetching restaurants', error);
      }
    );
  }
  viewMenu() {
    this.router.navigate(['/order']);
  }

}
