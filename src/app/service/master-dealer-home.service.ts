import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class MasterDealerHomeService {
  constructor(private _http: HttpClient, private _request: RequestService) {}

  getAccumulatedValue$() {
    return this._requestAccumulatedValue().pipe(this._mapToData());
  }

  getTotalStoreCancellations$() {
    return this._requestTotalStoreCancellations().pipe(this._mapToData());
  }

  getStorePerformance$() {
    return this._requestStorePerformance().pipe(this._mapToData());
  }

  getSalesAmount$() {
    return this._requestSalesAmount().pipe(this._mapToData());
  }

  getDistributionOfSalesByInsurance$() {
    return this._requestDistributionOfSalesByInsurance().pipe(this._mapToData());
  }

  getDistributionOfSalesByProduct$() {
    return this._requestDistributionOfSalesByProduct().pipe(this._mapToData());
  }

  private _requestAccumulatedValue() {
    return this._request.getMasterDealer(
      '3_Menu_Home/1_Consulta_Acumulado_Lojas_Response.json'
    );
  }

  private _requestTotalStoreCancellations() {
    return this._request.getMasterDealer(
      '3_Menu_Home/2_Consulta_Cancelamento_Lojas_Response.json'
    );
  }

  private _requestStorePerformance() {
    return this._request.getMasterDealer(
      '3_Menu_Home/3_Consulta_Performance_Lojas_Response_copy.json'
    );
  }

  private _requestSalesAmount() {
    return this._request.getMasterDealer(
      '3_Menu_Home/4_Consulta_Volume_Vendas_Response.json'
    );
  }

  private _requestDistributionOfSalesByInsurance() {
    return this._request.getMasterDealer(
      '3_Menu_Home/5_Distribuicao_Vendas_Seguro_Response.json'
    );
  }

  private _requestDistributionOfSalesByProduct() {
    return this._request.getMasterDealer(
      '3_Menu_Home/6_Distribuicao_Vendas_Categoria_Produtos_Response.json'
    );
  }

  private _mapToData() {
    return map((res: any) => res.data);
  }
}
