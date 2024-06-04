import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrl: './analisis.component.css'
})
export class AnalisisComponent {

  constructor(private route: Router) {
  }

  gotopage(pagina:string) {
    this.route.navigate([pagina]);
  }
}
