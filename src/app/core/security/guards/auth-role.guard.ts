import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { IDataRoute } from 'app/core/interfaces/data-route.interface';

/**
 * Authentication Role Guard,
 * redirects to the route according to the current user's role;
 *
 * @author Wesley Alves
 */
@Injectable()
export class AuthRoleGuard implements CanLoad {
  constructor(private _authService: AuthService, private _router: Router) {}

  canLoad(route: Route) {
    const routeData = route.data as IDataRoute;
    const currentUserProfileId = this._authService.currentUser.profile.id;
    const userRoleIsAllowed = currentUserProfileId === routeData.roleGuard;
    if (userRoleIsAllowed) {
      return true;
    }
    this._router.navigateByUrl('login');
  }
}
