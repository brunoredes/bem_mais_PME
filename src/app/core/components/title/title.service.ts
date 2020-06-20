import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IDataRoute } from 'app/core/interfaces/data-route.interface';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  title: string;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  startTrackingRouteEvent() {
    this._router.events
      .pipe(
        filter(event => {
          return event instanceof NavigationEnd;
        }),
        map(() => this._activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data),
        map((data: IDataRoute) => data.title)
      )
      .subscribe(title => {
        this.title = title;
      });
  }
}
