import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class MasterDealerDashboardSalesService {
  constructor(private _http: HttpClient, private _request: RequestService) {}

  getStoreByProducts$() {
    return this._requestStoreByProducts().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
  getSalesByStore$() {
    return this._requestSalesByStore().pipe(
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
  getSalesDistributionByProductCategory$() {
    return this._requestSalesDistributionByProductCategory().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestStoreByProducts() {
    return this._request.getMasterDealer(
      '7_Menu_Dashboard/1_Vendas/1_Consulta_Loja_Produtos_Response.json'
    );
  }

  private _requestSalesByStore() {
    return this._request.getMasterDealer(
      '7_Menu_Dashboard/1_Vendas/2_Consulta_Vendas_Loja_Response.json'
    );
  }

  private _requestSalesDistributionByInsurance() {
    return this._request.getMasterDealer(
      '7_Menu_Dashboard/1_Vendas/3_Distribuicao_Vendas_Seguro_Response.json'
    );
  }

  private _requestSalesDistributionByProductCategory() {
    return this._request.getMasterDealer(
      '7_Menu_Dashboard/1_Vendas/4_Distribuicao_Vendas_Categoria_Produtos_Response.json'
    );
  }

}
