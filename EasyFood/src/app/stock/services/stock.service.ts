import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Stock} from "../model/stock.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StockService extends BaseService<Stock>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint= '/stocks';
  }
}
