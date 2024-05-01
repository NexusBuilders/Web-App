import {Component, Input} from '@angular/core';
import {Plan} from "../../model/plan.entity";
import {PlanService} from "../../services/plan.service";

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrl: './card-plan.component.css'
})
export class CardPlanComponent {
  title= "Plan";
  @Input() plans : Array<Plan> = [];
  constructor(private planApi:PlanService) {
    this.plans = [];
  }
  ngOnInit(){
    this.planApi.getAll().
    subscribe((data:any)=>{
      this.plans = data;
    })
  }
}
