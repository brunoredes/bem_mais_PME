import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrderDashModel } from 'app/models/orderDash.model';
import { ResultPartnersModel } from 'app/models/resultPartners.model';
import { VolumeSalesModel } from 'app/models/volumeSales.model';
import { SalesInsuranceModel } from 'app/models/sales-insurance.model';

@Injectable({
  providedIn: 'root'
})
export class DashSalesAgregadorService {

  constructor(
      private request: RequestService
  ) { }

  private _requestSalesOrders() {
    return this.request.getAgregador(
      '6_Menu_Dashboards/1_Vendas/1_Dados_Orders_Response.json'
    );
  }

  getDataSalesOrders(): Observable<OrderDashModel> {
    return this._requestSalesOrders().pipe(
      map((res: any) => {
        return res.data.orders;
      })
    )
  }

  private _requestPartnersResult() {
    return this.request.getAgregador(
      '6_Menu_Dashboards/1_Vendas/2_Resultado_Parceiros_Response.Json'
    );
  }

  getDataPartnersResult(): Observable<ResultPartnersModel> {
    return this._requestPartnersResult().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  private _requestVolumeSales() {
    return this.request.getAgregador(
      '6_Menu_Dashboards/1_Vendas/3_Volume_Vendas_Response.Json'
    );
  }

  getDataVolumeSales(): Observable<VolumeSalesModel> {
    return this._requestVolumeSales().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  private _requestSalesInsurance() {
    return this.request.getAgregador(
      '6_Menu_Dashboards/1_Vendas/4_Distribuicao_Vendas_Seguro_Response.json'
    );
  }

  getDataSalesInsurance(): Observable<SalesInsuranceModel> {
    return this._requestSalesInsurance().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  private _requestSalesCategory() {
    return this.request.getAgregador(
      '6_Menu_Dashboards/1_Vendas/5_Distribuicao_Vendas_Categoria_Produtos_Response.json'
    );
  }

  getDataSalesCategory(): Observable<SalesInsuranceModel> {
    return this._requestSalesCategory().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

}
