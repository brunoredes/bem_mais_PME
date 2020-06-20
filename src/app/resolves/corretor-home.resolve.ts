import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CorretorHomeService } from 'app/service/corretor-home.service';
import { forkJoin } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CorretorHomeResolver implements Resolve<any> {

  constructor(private _corretorHomeService: CorretorHomeService) { }

  resolve() {
    return forkJoin({
      marketCards: this._corretorHomeService.getMarketCards$(),
      linkCards: this._corretorHomeService.getLinkCards$()
    });
  }

}
