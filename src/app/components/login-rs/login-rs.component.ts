import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../shared/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-rs',
  templateUrl: './login-rs.component.html',
  styleUrl: './login-rs.component.css'
})
export class LoginRsComponent implements OnInit{
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      emailR: ['', [Validators.required, Validators.email]],
      passwordR: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { emailR, passwordR } = this.loginForm.value;
      console.log('Intentando iniciar sesión con:', emailR, passwordR);
      this.userService.loginR(emailR, passwordR).subscribe(
        (restaurant) => {
          console.log('Usuario autenticado:', restaurant);
          if (restaurant) {
            this.router.navigate(['/home']);
          } else {
            alert('Correo electrónico o contraseña incorrectos');
          }
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
          alert('Hubo un problema al iniciar sesión. Inténtalo de nuevo.');
        }
      );
    } else {
      console.log('Formulario no válido. Por favor, completa todos los campos.');
    }
  }
}
