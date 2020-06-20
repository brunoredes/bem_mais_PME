import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HomeCardModel } from 'app/models/home-card.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';

@Injectable({ providedIn: 'root' })
export class CorretorHomeService {
  constructor(
    private _http: HttpClient,
    private _request: RequestService
  ) {}

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
        return res.data.links;
      })
    );
  }

  private _requestMarketCards() {
    return this._request.getCorretor(
      '3_Menu_Home/1_Consulta_Market/HOME_MARKET_RESPONSE.json'
    );
  }

  private _requestLinkCards() {
    return this._request.getCorretor(
      '3_Menu_Home/2_Consulta_Home_Links/HOME_LINKS_RESPONSE.json'
    );
  }
}
