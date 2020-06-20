import { LoginoneComponent } from './loginone/loginone.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from '@angular/router';

export const SessionRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginoneComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];
