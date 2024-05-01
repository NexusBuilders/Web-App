import {Component, Input} from '@angular/core';
import {Lunch} from "../../model/lunch.entity";
import {LunchService} from "../../services/lunch.service";

@Component({
  selector: 'app-card-lunch',
  templateUrl: './card-lunch.component.html',
  styleUrl: './card-lunch.component.css'
})
export class CardLunchComponent {
  title = "Lunch";

  @Input() lunches: Array<Lunch> = [];

  constructor(private lunchApi:LunchService) {
    this.lunches = [];
  }

  ngOnInit(){
    this.lunchApi.getAll().
    subscribe((data:any)=>{
      this.lunches = data;
    })
  }

}
