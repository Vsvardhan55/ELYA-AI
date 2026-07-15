import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  email = '';
  password = '';

  loading = false;
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {

  console.log("Login clicked");

  this.loading = true;
  this.error = '';
    console.log({
      email: this.email,
      password: this.password
    });

  this.authService.login({
    email: this.email,
    password: this.password
  }).subscribe({

    next: (res: any) => {

  console.log("LOGIN SUCCESS");

  localStorage.setItem("token", res.token);
  localStorage.setItem("user", JSON.stringify(res.user));

  console.log("Token:", localStorage.getItem("token"));

  this.loading = false;

  alert("Before Navigation");

  this.router.navigate(['/app']).then(result => {

    alert("Navigation Result = " + result);

  });

},

    error: (err) => {

      console.log("Login Error", err);

      this.loading = false;

      this.error = err.error?.message || "Login Failed";

    },

    complete: () => {

      console.log("Request Completed");

    }

  });

}

}
