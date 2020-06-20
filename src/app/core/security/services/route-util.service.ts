import { Injectable } from '@angular/core';
import { IDataRoute } from 'app/core/interfaces/data-route.interface';
import { privateRoutes } from '../security-routes';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteUtilService {
  constructor(private _authService: AuthService) {}
  /**
   * Find route path of the current user by your profile id;
   */
  getRoutePathByProfileID(): string {
    return privateRoutes.find(e => {
      const routeData = e.data as IDataRoute;
      const currentUserProfileId = this._authService.currentUser.profile.id;
      return routeData.roleGuard === currentUserProfileId;
    }).path;
  }
}
