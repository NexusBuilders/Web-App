import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { OrderConfirmationDialogComponent } from "../order-confirmation-dialog/order-confirmation-dialog.component";
import {CartService} from "../../orders/services/cart.service";


@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {
  order = {
    items: [] as any[],
    address: 'Av. Carlos Villarán 285',
    estimatedTime: '15:00 - 16:00',
    subtotal: 0
  };

  constructor(private dialog: MatDialog, private cartService: CartService) {
    this.loadCartItems();
    this.calculateSubtotal();
  }

  loadCartItems() {
    this.order.items = this.cartService.getItems();
  }

  increaseQuantity(item: any): void {
    item.quantity++;
    this.calculateSubtotal();
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 0) {
      item.quantity--;
    }
    this.calculateSubtotal();
  }

  calculateSubtotal() {
    let subtotal = 0;
    this.order.items.forEach(item => {
      subtotal += item.price * item.quantity;
    });
    this.order.subtotal = subtotal;
  }

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
