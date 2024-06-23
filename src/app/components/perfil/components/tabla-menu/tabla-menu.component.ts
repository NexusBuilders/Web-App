import { Component, OnInit } from '@angular/core';
import { Drink } from "../../../../orders/model/drink.entity";
import { DrinkService } from "../../../../orders/services/drink.service";
import { Lunch } from "../../../../orders/model/lunch.entity";
import { LunchService } from "../../../../orders/services/lunch.service";

@Component({
  selector: 'app-tabla-menu',
  templateUrl: './tabla-menu.component.html',
  styleUrls: ['./tabla-menu.component.css']
})
export class TablaMenuComponent implements OnInit {
  title = "TableMenu";
  drinks: Drink[] = [];
  lunches: Lunch[] = [];

  displayedColumnsLunches: string[] = ['id', 'starterPlate', 'mainDish', 'price'];
  displayedColumnsDrinks: string[] = ['id', 'name', 'price'];

  constructor(private drinkService: DrinkService, private lunchService: LunchService) {}

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

    this.lunchService.getLunches(restaurantId).subscribe(
      (data: Lunch[]) => {
        this.lunches = data;
      },
      error => {
        console.error('Error fetching lunches', error);
      }
    );
  }
  addDrink() {

  }
  addLunch() {

  }
  deleteDrink() {}
  deleteLunch() {}

  // Implement add, update, delete methods if needed for drinks and lunches
}
