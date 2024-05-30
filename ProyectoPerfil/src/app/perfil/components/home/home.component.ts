import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route: Router) {
  }
//Para navegar por otras rutas se puede hacer con esta funcion o con ROUTErLINK en el html (este ROUTERLINK PARACE MAS FACIL)
  gotopage(pagina:string) {
    this.route.navigate([pagina]);
  }
}
