import {Component, Input} from '@angular/core';
import {Restaurant} from "../../model/restaurant.entity";
import {RestaurantService} from "../../services/restaurant.service";

@Component({
  selector: 'app-card-restaurant',
  templateUrl: './card-restaurant.component.html',
  styleUrl: './card-restaurant.component.css'
})
export class CardRestaurantComponent {
  title = "Restaurant"

  @Input() restaurants: Array<Restaurant> = [];

  constructor(private planApi : RestaurantService) {
    this.restaurants = []
  }
  ngOnInit(){
    this.planApi.getAll()
    .subscribe((data: any)=>{
      this.restaurants = data;
    })
  }

}
