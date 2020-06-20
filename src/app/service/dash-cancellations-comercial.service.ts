import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashCanceledComercialService {

  constructor(
      private request: RequestService
  ) { }

  private _requestTotalCanceledVolume() {
    return this.request.getComercial(
      '6_Menu_Dashboard/3_Cancelados/1_Volume_Cancelados_Response.Json'
    );
  }

  getDataTotalCanceledVolume(): Observable<any> {
    return this._requestTotalCanceledVolume().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  private _requestCancelInsurance() {
    return this.request.getComercial(
      '6_Menu_Dashboard/3_Cancelados/2_Distribuicao_Cancelamento_Seguro_Response.json'
    );
  }

  getDataCancelInsurance(): Observable<any> {
    return this._requestCancelInsurance().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  private _requestCancelCategory() {
    return this.request.getComercial(
      '6_Menu_Dashboard/3_Cancelados/3_Distribuicao_Cancelamento_Categoria_Produtos_Response.json'
    );
  }

  getDataCancelCategory(): Observable<any> {
    return this._requestCancelCategory().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

}
