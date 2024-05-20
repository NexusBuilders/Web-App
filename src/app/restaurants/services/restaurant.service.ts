import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Restaurant} from "../model/restaurant.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService extends BaseService<Restaurant>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint= '/restaurants'
  }
}
