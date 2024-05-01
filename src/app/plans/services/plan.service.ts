import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Plan} from "../model/plan.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlanService extends BaseService<Plan>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint= '/plans'
  }
}
