import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class MasterDealerDashboardPaymentService {
  constructor(private _http: HttpClient, private _request: RequestService) { }

  getSalesHistory$() {
    return this._requestSalesHistory().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
  getCanceledInsurance$() {
    return this._requestCanceledInsurance().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  getResalePerformance$() {
    return this._requestResalePerformance().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  getSalesReseller$() {
    return this._requestSalesReseller().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }


  getSalesSellers$() {
    return this._requestSalesSellers().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }


  private _requestSalesSellers() {
    return this._request.getMasterDealer(
      '7_Menu_Dashboard/2_Pagamento/4_Consulta_Volume_Vendedor_Response.json'
    );
  }

  private _requestSalesReseller() {
    return this._request.getMasterDealer(
      '7_Menu_Dashboard/2_Pagamento/3_Consulta_Volume_Revenda_Response.json'
    );
  }

  private _requestResalePerformance() {
    return this._request.getMasterDealer(
      '7_Menu_Dashboard/2_Pagamento/5_Perda_Revenda.json'
    );
  }


  private _requestSalesHistory() {
    return this._request.getMasterDealer(
      '7_Menu_Dashboard/2_Pagamento/1_Consulta_Historico_Vendas_Response.json'
    );
  }

  private _requestCanceledInsurance() {
    return this._request.getMasterDealer(
      '7_Menu_Dashboard/2_Pagamento/2_Consulta_Seguros_Cancelados_Response.json'
    );
  }
}
