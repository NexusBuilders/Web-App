import { Component, OnInit } from '@angular/core';
import { Drink } from "../../../../orders/model/drink.entity";
import { DrinkService } from "../../../../orders/services/drink.service";
import { Lunch } from "../../../../orders/model/lunch.entity";
import { LunchService } from "../../../../orders/services/lunch.service";
import { MatDialog } from "@angular/material/dialog";
import { AgregarMenuDialogComponent } from "../agregar-menu-dialog/agregar-menu-dialog.component";
import {TokenStorageService} from "../../../../shared/services/token.service";
import {AgregarBebidaDialogComponent} from "../agregar-bebida-dialog/agregar-bebida-dialog.component";

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

  constructor(private drinkService: DrinkService, private lunchService: LunchService, private dialog: MatDialog, private tokenService: TokenStorageService) {}

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

  openAddMenuDialog(): void {

    const dialogRef = this.dialog.open(AgregarMenuDialogComponent, {
      width: '400px',
      data: { starterPlate: '', mainDish: '', price: 0 }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const restaurantId = +localStorage.getItem('selectedRestaurantId')!;
        const menuData = {
          starterPlate: result.starterPlate,
          mainDish: result.mainDish,
          price: result.price,
          image: '',
          restaurantId: restaurantId
        };
        this.lunchService.addLunch(menuData).subscribe(
          (response) => {
            console.log('Menú agregado exitosamente', response);
            // Actualizar la lista de menús si es necesario
            this.fetchLunches(); // Método para actualizar la lista de lunches
          },
          error => {
            console.error('Error al agregar menú', error);
          }
        );
      }
    });
  }
  openAddDrinkDialog(): void {

    const dialogRef = this.dialog.open(AgregarBebidaDialogComponent, {
      width: '400px',
      data: {  name: '', price: 0 }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const restaurantId = +localStorage.getItem('selectedRestaurantId')!;
        const drinkData = {
          name: result.name,
          price: result.price,
          image: '',
          restaurantId: restaurantId
        };
        this.drinkService.addDrink(drinkData).subscribe(
          (response) => {
            console.log('Bebida agregada exitosamente', response);
            // Actualizar la lista de menús si es necesario
            this.fetchDrinks(); // Método para actualizar la lista de lunches
          },
          error => {
            console.error('Error al agregar la bebida', error);
          }
        );
      }
    });
  }
  fetchLunches(): void {
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
  fetchDrinks(): void {
    const restaurantId = +localStorage.getItem('selectedRestaurantId')!;
    this.drinkService.getDrinks(restaurantId).subscribe(
      (data: Drink[]) => {
        this.drinks = data;
      },
      error => {
        console.error('Error fetching lunches', error);
      }
    );
  }
}
