// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import {TokenStorageService} from "../../shared/services/token.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class InicioSesionComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };

      this.userService.signIn(credentials).subscribe(
        response => {
          this.tokenStorage.saveToken(response.token);
          this.tokenStorage.saveUser(response);
          console.log('User logged in:', response);
          this.router.navigate(['/plan']); // Redirigir a la página de perfil
        },
        error => console.error('Error logging in:', error)
      );
    }
  }
  navigateToRestaurants(): void {
    this.router.navigate(['/home']);
  }
}
