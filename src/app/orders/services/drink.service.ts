import {Injectable} from "@angular/core";
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Drink} from "../model/drink.entity";

@Injectable({
  providedIn: 'root'
})
export class DrinkService extends BaseService<Drink>{
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint= '/drinks'
  }

}

