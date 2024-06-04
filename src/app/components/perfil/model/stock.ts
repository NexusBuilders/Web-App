export class Stock {
  especie: string;
  cantidad: number;
  unidad: string;

  constructor(public especi: string,public  cantida: number, public unida: string) {
    this.especie=especi;
    this.cantidad=cantida;
    this.unidad=unida;
  }
}
