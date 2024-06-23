import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { UserService } from "../../shared/services/user.service";
import {TokenStorageService} from "../../shared/services/token.service";

@Component({
  selector: 'app-profile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileForm!: FormGroup;
  showPopup = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });

    this.loadUserProfile();
  }

  loadUserProfile(): void {
    const user = this.tokenStorage.getUser();
    const token = this.tokenStorage.getToken();
    if (user && user.id && token) {
      this.userService.getUserProfile(user.id, token).subscribe(
        data => {
          this.profileForm.patchValue({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone
          });
          console.log(data);
        },
        error => {
          console.error('Error loading user profile', error);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  showProfilePopup(): void {
    this.showPopup = !this.showPopup;
  }
}
