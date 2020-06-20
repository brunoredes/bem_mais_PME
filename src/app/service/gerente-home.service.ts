import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HomeCardModel } from 'app/models/home-card.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';
import { BestWeekModel } from 'app/models/bestWeek.model';

@Injectable({ providedIn: 'root' })
export class GerenteHomeService {
  constructor(private _http: HttpClient, private _request: RequestService) {}

  getMarketCards$(): Observable<Array<HomeCardModel>> {
    return this._requestMarketCards().pipe(
      map((res: any) => {
        return res.data.banners;
      })
    );
  }

  getLinkCards$(): Observable<Array<HomeCardModel>> {
    return this._requestLinkCards().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  getBestsOfTheWeek$(): Observable<Array<BestWeekModel>> {
    return this._requestBestsOfTheWeek().pipe(
      map((res: any) => {
        return res.data.vendors;
      })
    );
  }

  private _requestMarketCards() {
    return this._request.getGerente(
      '3_Menu_Home/1_Market/HOME_MARKET_RESPONSE.json'
    );
  }

  private _requestLinkCards() {
    return this._request.getGerente(
      '3_Menu_Home/2_Intitucional/HOME_LINKS_INSTITUCIONAL_RESPONSE.json'
    );
  }

  private _requestBestsOfTheWeek() {
    return this._request.getGerente(
      '3_Menu_Home/3_Melhores_da_Semana/HOME_MELHORES_DA_SEMANA_RESPONSE.json'
    );
  }
}
