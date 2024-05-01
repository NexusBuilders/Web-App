import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {OrderRestaurant} from "../model/order-restaurant.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderRestaurantService extends BaseService<OrderRestaurant>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint= '/ordersRestaurant'
  }
}
