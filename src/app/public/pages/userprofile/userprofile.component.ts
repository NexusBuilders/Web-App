import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";


@Component({
  selector: 'app-profile',
  templateUrl: 'userprofile.component.html',
  styleUrls: ['userprofile.component.css']
})
export class UserProfileComponent implements OnInit{

  nombreUsuario: string = '';
  nombre: string = '';
  apellido: string = '';
  correoElectronico: string = '';
  telefono: string = '';
  nombreEditado: string = '';
  correoEditado: string = '';
  editandoNombre: boolean = false;
  editandoCorreo: boolean = false;
  fotoPerfil: string = '';
  showPopup = false;

  constructor(private userService: UserService, private router: Router) {}

  menuItems = [
    { icon: 'fa fa-user', text: 'Mis Datos' },
    { icon: 'fa fa-lock', text: 'Acceso y Seguridad' },
    { icon: 'fa fa-cog', text: 'Configuración' },
    { icon: 'fa fa-question-circle', text: 'Ayuda' }
  ];

  onSelect(item: any): void {
    console.log('Selected:', item.text);
  }

  ngOnInit(): void {
    const usuarioLogueado = this.userService.getUsuarioLogueado();
    if (usuarioLogueado) {
      this.nombreUsuario = usuarioLogueado.nombre + ' ' + usuarioLogueado.apellido;
      this.correoElectronico = usuarioLogueado.correo;
      this.telefono = usuarioLogueado.telefono;
      this.fotoPerfil = usuarioLogueado.perfil;
    }
  }
  showProfilePopup() {
    this.showPopup = !this.showPopup;
  }


  guardarNombre() {
    this.nombreUsuario = this.nombreEditado;
    this.editandoNombre = false;

    const usuarioLogueado = this.userService.getUsuarioLogueado();
    usuarioLogueado.nombre = this.nombreUsuario;
    this.userService.editarUsuario(usuarioLogueado).subscribe(response => {
      if (response) {
        console.log('Nombre de usuario actualizado en el servidor');
      } else {
        console.error('Error al actualizar el nombre de usuario');
      }
    });
  }

  guardarCorreo() {
    this.correoElectronico = this.correoEditado;
    this.editandoCorreo = false;

    const usuarioLogueado = this.userService.getUsuarioLogueado();
    usuarioLogueado.correo = this.correoElectronico;
    this.userService.editarUsuario(usuarioLogueado).subscribe(response => {
      if (response) {
        console.log('Correo electrónico actualizado en el servidor');
      } else {
        console.error('Error al actualizar el correo electrónico');
      }
    });
  }

  editarNombre() {
    this.nombreEditado = this.nombreUsuario;
    this.editandoNombre = true;
  }

  editarCorreo() {
    this.correoEditado = this.correoElectronico;
    this.editandoCorreo = true;
  }

  cerrarSesion(){
    this.userService.cerrarSesion();
    this.router.navigate(['/iniciosesion']);
  }
}
