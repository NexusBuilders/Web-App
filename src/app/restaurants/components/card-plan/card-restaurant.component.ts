import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from "../../model/restaurant.entity";
import { RestaurantService } from "../../services/restaurant.service";

@Component({
  selector: 'app-card-restaurant',
  templateUrl: './card-restaurant.component.html',
  styleUrls: ['./card-restaurant.component.css']
})
export class CardRestaurantComponent implements OnInit {
  title = "Restaurant";
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService, private router: Router) {}

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

  viewMenu(restaurantId: number): void {
    localStorage.setItem('selectedRestaurantId', restaurantId.toString());
    this.router.navigate(['/order']);
  }
}
