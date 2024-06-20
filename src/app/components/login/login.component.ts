import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class InicioSesionComponent implements OnInit {
  title = 'login';
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Formulario válido, intentando iniciar sesión con:', email, password);
      this.userService.login(email, password).subscribe(
        (user) => {
          console.log('Usuario autenticado:', user);
          if (user && user.userType === 'usuario') {
            this.router.navigate(['/plan']);
          } else if (user && user.userType === 'restaurante') {
            this.router.navigate(['/home']);
          } else {
            console.error('Tipo de usuario no reconocido:', user ? user.userType : 'undefined');
          }
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
        }
      );
    } else {
      console.log('Formulario no válido. Por favor, completa todos los campos.');
    }
  }
  navigateToRestaurants(): void {
    this.router.navigate(['/home']);
  }
}
