import {Component, Input} from '@angular/core';
import {Plan} from "../../model/plan.entity";
import {PlanService} from "../../services/plan.service";
import {PurchaseDialogComponent} from "../../../components/purchase-dialog/purchase-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrl: './card-plan.component.css'
})
export class CardPlanComponent {
  title= "Plan";
  @Input() plans : Array<Plan> = [];

  constructor(private planApi:PlanService, private dialog: MatDialog){
    this.plans = [];
  }
  ngOnInit(){
    this.planApi.getAll().
    subscribe((data:any)=>{
      this.plans = data;
    })
  }
  openPurchaseDialog() {
    this.dialog.open(PurchaseDialogComponent);
  }
}
