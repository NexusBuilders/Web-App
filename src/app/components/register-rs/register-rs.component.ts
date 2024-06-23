import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-register-rs',
  templateUrl: './register-rs.component.html',
  styleUrl: './register-rs.component.css'
})
export class RegisterRsComponent implements OnInit{
  resgisterRForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
    this.resgisterRForm = this.fb.group({
      nameR: ['', Validators.required],
      emailR: ['', [Validators.required, Validators.email]],
      passwordR: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  registerR(): void {
    if (this.resgisterRForm.valid) {
      const { emailR } = this.resgisterRForm.value;
      this.userService.checkEmailExistsR(emailR).subscribe(
        exists => {
          if (exists) {
            alert('El correo electrónico ya está en uso. Por favor, elige otro.');
          } else {
            this.userService.registerR(this.resgisterRForm.value).subscribe(
              (response) => {
                alert('Registrado correctamente');
                this.router.navigate(['/loginR']);
              },
              (error) => {
                console.error('Error al registrar restaurante:', error);
              }
            );
          }
        },
        error => {
          console.error('Error al verificar correo electrónico:', error);
        }
      );
    } else {
      console.log('Formulario no válido. Por favor, completa todos los campos.');
    }
  }
}
