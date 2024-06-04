import {Component, Input} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Clientes} from "../../model/clientes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  dataSource!: MatTableDataSource<any>;
  tableDisplayColumns: string[] = ['Clientes', 'nPedidos'];
  clientes : Array<Clientes>;
  constructor(private router: Router){
    this.clientes=new Array<Clientes>();
    this.dataSource = new MatTableDataSource<any>();
    this.clientes.push(new Clientes("InstaClothes", 5));
    this.clientes.push(new Clientes("New Gafas", 4));


    this.dataSource.data=this.clientes;
  }

  onNavigateHome() {
    this.router.navigate(['Home']).then();
  }

  ngOnInit(): void {
  }
}
