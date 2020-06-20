import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Observable } from 'rxjs';
import { ComparativeSalesAgregadorModel } from 'app/models/comparative-sales-agregador.model';
import { map } from 'rxjs/operators';
import { ConcellationsProductModel } from 'app/models/cancellationsProduct.model';
import { SuggestionsGoalsModel } from 'app/models/suggestionsGoals.model';

@Injectable({
  providedIn: 'root'
})
export class HomeAgregadorService {

  constructor(private request: RequestService) { }

  getComparativeSales(): Observable<Array<ComparativeSalesAgregadorModel>> {
    return this._requestComparativeSales().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestComparativeSales() {
    return this.request.getAgregador(
      '3_Menu_Home/1_Consulta_Comparativo_Vendas/Comparativo_Vendas_Response.json'
    );
  }
  getComparativeSale(): Observable<Array<SuggestionsGoalsModel>> {
    return this._requestComparativeSale().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestComparativeSale() {
    return this.request.getAgregador(
      '3_Menu_Home/2_Consulta_Sugetao_Atingimento_Metas/Atingimento_Metas_Response.json'
    );
  }
  getCancellationSafe(): Observable<Array<ConcellationsProductModel>> {
    return this._requestCancellationSafe().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestCancellationSafe() {
    return this.request.getAgregador(
      '3_Menu_Home/3_Consulta_Distribuicao_Cancelamentos_Seguro/Distribuicao_Cancelamentos_Seguro_Response.json'
    );
  }
  getCancellationProduct(): Observable<Array<ConcellationsProductModel>> {
    return this._requestCancellationProduct().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestCancellationProduct() {
    return this.request.getAgregador(
      '3_Menu_Home/4_Consulta_Cancelamentos_Categoria_Produtos/Cancelamentos_Categoria_Produtos_Response.json'
    );
  }
  getSalesSafe(): Observable<Array<ConcellationsProductModel>> {
    return this._requestSalesSafe().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestSalesSafe() {
    return this.request.getAgregador(
      '3_Menu_Home/5_Consulta_Distribuicao_Vendas_Seguro/Distribuicao_Vendas_Seguro_Response.json'
    );
  }
  getSalesCategory(): Observable<Array<ConcellationsProductModel>> {
    return this._requestSalesCategory().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestSalesCategory() {
    return this.request.getAgregador(
      '3_Menu_Home/6_Consulta_Vendas_Categoria_Produtos/Vendas_Categoria_Produtos_Response.json'
    );
  }
}
