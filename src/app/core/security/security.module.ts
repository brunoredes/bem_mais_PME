import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MenuModule } from '../components/menu/menu.module';

import { AuthRoleGuard } from '../security/guards/auth-role.guard';
import { SecurityComponent } from './security.component';
import { AuthGuard } from './guards/auth.guard';
import { privateRoutes } from './security-routes';
import { AuthService } from './services/auth.service';


const routes: Array<Route> = [
  {
    path: '',
    component: SecurityComponent,
    children: privateRoutes,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [SecurityComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MenuModule],
  providers: [AuthRoleGuard, AuthGuard]
})
export class SecurityModule {}
