import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BestWeekModel } from 'app/models/bestWeek.model';
import { IntitutionalModel } from 'app/models/institutional.model';
import { MarketModel } from 'app/models/market.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public intitutional: any
  public market: any
  public bestWeek: any

  public intitutional$: Subject<any> = new Subject<any>();
  public market$: Subject<any> = new Subject<any>();
  public bestWeek$: Subject<any> = new Subject<any>();

  constructor(private request: RequestService) { }

  getBestWeek(): Observable<Array<BestWeekModel>> {
    return this._requestBestWeek().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
  getIntitutional(): Observable<Array<IntitutionalModel>> {
    return this._requestInstitutional().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
  getMarket(): Observable<Array<MarketModel>> {
    return this._requestMarket().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  // private _requestBestWeek() {
  //   return this.request.get(
  //     'Menu Home/Melhores da Semana/HOME_MELHORES_DA SEMANA_RESPONSE.json'
  //   );
  // }
  private _requestBestWeek() {
    return this.request.getVendedor(
      'menu_home/melhoresSemana/home.json'
    );
  }
  // private _requestInstitutional() {
  //   return this.request.get(
  //     'Menu Home/Intitucional/HOME_LINKS_INSTITUCIONAL_RESPONSE.json'
  //   );
  // }
  private _requestInstitutional() {
    return this.request.getVendedor(
      'menu_home/in/home.json'
    );
  }
  // private _requestMarket() {
  //   return this.request.get(
  //     'Menu Home/Market/HOME_MARKET_RESPONSE.json'
  //   );
  // }
  private _requestMarket() {
    return this.request.getVendedor(
      'menu_home/Market/home.json'
    );
  }
}
