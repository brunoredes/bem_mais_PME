import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class CorretorDashboardPerformanceService {
  constructor(private _http: HttpClient, private _request: RequestService) {}

  getOrders$() {
    return this._requestOrders().pipe(
      map((res: any) => {
        return res.data.orders;
      })
    );
  }
  getMyPerformance$() {
    return this._requestMyPerformance().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
  getSalesAmount$() {
    return this._requestSalesAmount().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
  getSalesDistributionByInsurance$() {
    return this._requestSalesDistributionByInsurance().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
  getSalesDistributionByProduct$() {
    return this._requestSalesDistributionByProduct().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestOrders() {
    return this._request.getCorretor(
      '7_Menu_Dashboards/1_Performance/1_Dados_Orders_Response.json'
    );
  }

  private _requestMyPerformance() {
    return this._request.getCorretor(
      '7_Menu_Dashboards/1_Performance/2_Minha_Performance_Response.Json'
    );
  }

  private _requestSalesAmount() {
    return this._request.getCorretor(
      '7_Menu_Dashboards/1_Performance/3_Volume_Vendas_Response.Json'
    );
  }

  private _requestSalesDistributionByInsurance() {
    return this._request.getCorretor(
      '7_Menu_Dashboards/1_Performance/4_Distribuicao_Vendas_Seguro_Response.json'
    );
  }

  private _requestSalesDistributionByProduct() {
    return this._request.getCorretor(
      '7_Menu_Dashboards/1_Performance/5_Distribuicao_Vendas_Categoria_Produtos_Response.json'
    );
  }
}
