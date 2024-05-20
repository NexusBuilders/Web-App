import {Injectable} from "@angular/core";
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";
import {Lunch} from "../model/lunch.entity";

@Injectable({
  providedIn: 'root'
})
export class LunchService extends BaseService<Lunch>{
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint= '/lunches'
  }
}
