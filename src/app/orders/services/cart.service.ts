import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<Array<any>>([]);
  items$ = this.itemsSubject.asObservable();

  private items: Array<any> = [];

  addItem(item: any) {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      item.quantity = 1;
      this.items.push(item);
    }
    this.itemsSubject.next(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.itemsSubject.next(this.items);
  }
}
