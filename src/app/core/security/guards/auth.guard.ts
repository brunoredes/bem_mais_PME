import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { privateRoutes } from '../security-routes';
import { IDataRoute } from 'app/core/interfaces/data-route.interface';

/**
 * Authentication Guard,
 * Grants access to the user only if it is authenticated and valid;
 *
 * @author Wesley Alves
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate() {
    const isAuthenticate = this._authService.isAuthenticatedAndValid();
    if (isAuthenticate) {
      return true;
    }
    this._router.navigateByUrl('login');
  }
}
