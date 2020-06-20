import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDataRoute } from '../interfaces/data-route.interface';
import { IMenu } from '../interfaces/menu.interface';
import { RouteUtilService } from './services/route-util.service';

@Component({
  template: `
    <bem-mais-menu [config-menu]='currentMenuConfig | async'>
      <router-outlet></router-outlet>
    </bem-mais-menu>
  `
})
export class SecurityComponent implements OnInit {
  currentMenuConfig: Observable<Array<IMenu>>;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _routeUtil: RouteUtilService
  ) {}

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this._redirectToPath();
    document.getElementById('red-width').style.width = '100%';
    document.getElementById('red').style.margin = '0';
  }

  private async _redirectToPath() {
    if (this._router.url === '/private') {
      await this._router.navigate([
        'private',
        this._routeUtil.getRoutePathByProfileID()
      ]);
    }
    this.currentMenuConfig = this._activatedRoute.firstChild.data.pipe(
      map((data: IDataRoute) => {
        return data.menuConfig;
      })
    );
  }
}
