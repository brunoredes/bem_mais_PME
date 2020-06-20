import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CorretorHomeService } from 'app/service/corretor-home.service';
import { forkJoin } from 'rxjs';
import { GerenteHomeService } from 'app/service/gerente-home.service';

@Injectable({ providedIn: 'root' })
export class GerenteHomeResolver implements Resolve<any> {

  constructor(private _gerenteHomeService: GerenteHomeService) { }

  resolve() {
    return forkJoin({
      marketCards: this._gerenteHomeService.getMarketCards$(),
      linkCards: this._gerenteHomeService.getLinkCards$(),
      bestsOfTheWeek: this._gerenteHomeService.getBestsOfTheWeek$()
    });
  }

}
