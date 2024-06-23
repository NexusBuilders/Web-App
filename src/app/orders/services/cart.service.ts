import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  addItem(item: any) {
    if (!item.name) {
      item.name = 'Menú ' + (this.items.length + 1);
    }
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
}
