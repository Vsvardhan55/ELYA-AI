import { Routes } from '@angular/router';

import { Landing } from './features/landing/landing';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';

import { MainLayout } from './layouts/main-layout/main-layout';
import { Chat } from './features/chat/chat';
import { SettingsComponent } from './features/settings/settings';

export const routes: Routes = [

  {
    path: '',
    component: Landing
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: 'app',
    component: MainLayout,
    children: [

      {
        path: '',
        component: Chat
      },

      {
        path: 'settings',
        component: SettingsComponent
      }

    ]
  },

  {
    path: '**',
    redirectTo: ''
  }

];
