import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../shared/services/user.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,

  ) { }

  ngOnInit(): void {

  }
  register(): void {
    if (this.registerForm.valid) {
      const { email } = this.registerForm.value;
      this.userService.checkEmailExists(email).subscribe(
        exists => {
          if (exists) {
            alert('El correo electrónico ya está en uso. Por favor, elige otro.');
          } else {
            this.userService.register(this.registerForm.value).subscribe(
              (response) => {
               alert('Registrado correctamente');
                this.router.navigate(['/login']);
              },
              (error) => {
                console.error('Error al registrar usuario:', error);
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
