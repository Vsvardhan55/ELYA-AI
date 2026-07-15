import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

  fullName = '';
  email = '';
  password = '';

  loading = false;

  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register() {

    this.loading = true;

    this.error = '';

    this.authService.register({

      fullName: this.fullName,

      email: this.email,

      password: this.password

    }).subscribe({

      next: () => {

        this.router.navigate(['/login']);

      },

      error: (err) => {

        this.loading = false;

        this.error =
          err.error?.message ??
          'Registration Failed';

      }

    });

  }

}
