import {Component, Input} from '@angular/core';
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

  constructor(private planApi : RestaurantService, private router: Router) {
    this.restaurants = []
  }
  ngOnInit(){
    this.planApi.getAll()
    .subscribe((data: any)=>{
      this.restaurants = data;
    })
  }
  viewMenu() {
    this.router.navigate(['/order']);
  }

}
