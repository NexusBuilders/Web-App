import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../shared/services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const user = {
        username: this.registerForm.value.username,
        password: this.registerForm.value.password,
        roles: ['ROLE_CUSTOMER']
      };

      this.userService.register(user).subscribe(
        response => {
          const credentials = {
            username: this.registerForm.value.username,
            password: this.registerForm.value.password
          };

          this.userService.signIn(credentials).subscribe(
            signInResponse => {
              const token = signInResponse.token;
              const userId = signInResponse.id;
              const customer = {
                firstName: this.registerForm.value.name,
                lastName: this.registerForm.value.lastName,
                email: this.registerForm.value.email,
                phone: this.registerForm.value.phone,
                userId: userId
              };

              this.userService.createCustomer(customer, token).subscribe(
                customerResponse => {
                  console.log('Customer created:', customerResponse);
                  this.router.navigate(['/login']);
                },
                error => console.error('Error creating customer:', error)
              );
            },
            error => console.error('Error signing in:', error)
          );
        },
        error => console.error('Error registering user:', error)
      );
    }
  }
}
