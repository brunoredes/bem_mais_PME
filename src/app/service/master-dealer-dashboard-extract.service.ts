import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class MasterDealerDashboardExtractService {
  constructor(private _http: HttpClient, private _request: RequestService) {}

  getExtract$() {
    return this._requestExtract().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  getGeneralChart$() {
    return this._requestGeneralChart().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestExtract() {
    return this._request.getMasterDealer(
      '7_Menu_Dashboard/3_Extrato/1_Consulta_Extratos_Response.Json'
    );
  }

  private _requestGeneralChart() {
    return this._request.getMasterDealer(
      '7_Menu_Dashboard/3_Extrato/2_Consulta_Grafico_Geral_Response.Json'
    );
  }

}
