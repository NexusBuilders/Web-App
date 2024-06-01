import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {OrderConfirmationDialogComponent} from "../order-confirmation-dialog/order-confirmation-dialog.component";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {
  order={
    items:[
      {name: 'Entrada: Tequeños', quantity: 10},
      {name: 'Segundo: Lomo Saltado', quantity: 10},
      {name: 'Bebida: Maracuyá', quantity: 10},
    ],
    address: 'Av. Carlos Villarán 285',
    estimatedTime: '15:00 - 16:00',
    subtotal: 'S/.160.00'
  };

  increaseQuantity(item: any): void {
    item.quantity++;
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }
  constructor(private dialog: MatDialog) {}
  pay(): void {
    const dialogRef = this.dialog.open(OrderConfirmationDialogComponent, {
      width: '400px',
      data: { message: 'Pedido Recibido - Se te notificará sobre el estado a través de tu correo' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
