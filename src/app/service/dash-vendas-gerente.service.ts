import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
import { NivelService } from './nivel.service';

@Injectable({
  providedIn: 'root'
})
export class DashVendasGerenteService {
  constructor(private request: RequestService, public nivel: NivelService) { }

  getOrders(): Observable<Array<any>> {
    return this._requestOrders().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestOrders() {
    return this.request.getGerente(
      '7_Menu_Dashboard/1_Vendas/1_Dados_Orders_Response.json'
    );
  }

  getRanking(): Observable<Array<any>> {
    return this._requestRanking().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestRanking() {
    return this.request.getGerente(
      '7_Menu_Dashboard/1_Vendas/2_Ranking_Vendedores_Response.json'
    );
  }

  getPerformance(): Observable<Array<any>> {
    return this._requestPerformance().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestPerformance() {
    return this.request.getGerente(
      '7_Menu_Dashboard/1_Vendas/3_Performance_Vendedor_Response.Json'
    );
  }

  getVendasSeguro(): Observable<Array<any>> {
    return this._requestVendasSeguro().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestVendasSeguro() {
    return this.request.getGerente(
      '7_Menu_Dashboard/1_Vendas/4_Distribuicao_Vendas_Seguro_Response.json'
    );
  }

  getVendasCategoria(): Observable<Array<any>> {
    return this._requestVendasCategoria().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestVendasCategoria() {
    return this.request.getGerente(
      '7_Menu_Dashboard/1_Vendas/5_Distribuicao_Vendas_Categoria_Produtos_Response.json'
    );
  }
}
