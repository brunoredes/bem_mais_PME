import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
import { NivelService } from './nivel.service';

@Injectable({
  providedIn: 'root'
})
export class DashVendasMasterDealerService {
  constructor(private request: RequestService, public nivel: NivelService) { }
  getAcompanhamento(): Observable<Array<any>> {
    return this._requestAcompanhamento().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestAcompanhamento() {
    return this.request.getMasterDealer(
      '7_Menu_Dashboard/1_Vendas/1_Consulta_Loja_Produtos_Response.json'
    );
  }

  getLoja(): Observable<Array<any>> {
    return this._requestLoja().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestLoja() {
    return this.request.getMasterDealer(
      '7_Menu_Dashboard/1_Vendas/2_Consulta_Vendas_Loja_Response.json'
    );
  }
}
