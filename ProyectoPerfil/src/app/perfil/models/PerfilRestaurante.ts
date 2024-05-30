export class Stock {
  nombre: string;
  direccion: number;
  email: string;
  hora: string;
  telefono: string;

  constructor(public nombre_: string, public direccion_: number,public email_: string, public hora_: string, public telefono_: string) {
    this.nombre = nombre_;
    this.direccion = direccion_;
    this.email = email_;
    this.hora = hora_;
    this.telefono = telefono_;
  }
}
