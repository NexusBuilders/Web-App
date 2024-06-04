import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../shared/services/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class InicioSesionComponent implements OnInit{
  LoginForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService,
              private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.LoginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.LoginForm.valid){
      this.userService.getUserByEmail(this.LoginForm.value.correo).subscribe(user => {
        if (user && user.contrasena === this.LoginForm.value.contrasena) {

          this.userService.setUsuarioLogueado(user);
          alert("Inicio de sesión exitoso");

          //this.router.navigate(['/clientMenu']);
        } else {
          alert("Inicio de sesión fallido");
        }
      });
    }
  }
}
