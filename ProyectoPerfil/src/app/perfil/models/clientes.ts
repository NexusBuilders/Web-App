export class Clientes {
  nombre: string;
  pedidos: number;
  constructor(public nomb: string,public  pedid: number) {
    this.nombre=nomb;
    this.pedidos=pedid;
  }
}
