import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashCancelamentoGerenteService {

  constructor(
      private request: RequestService
  ) { }

  private _requestTotalCanceledVolume() {
    return this.request.getGerente(
      '7_Menu_Dashboard/2_Cancelamentos/1_Volume_Cancelamentos_Response.Json'
    );
  }

  getDataTotalCanceledVolume(): Observable<Array<any>> {
    return this._requestTotalCanceledVolume().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  private _requestCancelInsurance() {
    return this.request.getGerente(
      '7_Menu_Dashboard/2_Cancelamentos/2_Distribuicao_Cancelamentos_Seguro_Response.json'
    );
  }

  getDataCancelInsurance(): Observable<Array<any>> {
    return this._requestCancelInsurance().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  private _requestCancelCategory() {
    return this.request.getGerente(
      '7_Menu_Dashboard/2_Cancelamentos/3_Distribuicao_Cancelamentos_Categoria_Produtos_Response.json'
    );
  }

  getDataCancelCategory(): Observable<Array<any>> {
    return this._requestCancelCategory().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }
}
