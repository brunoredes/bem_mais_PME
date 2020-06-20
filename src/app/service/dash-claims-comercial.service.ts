import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashClaimsComercialService {

  constructor(
      private request: RequestService
  ) { }

  private _requestTotalClaimsVolume() {
    return this.request.getComercial(
      '6_Menu_Dashboard/2_Sinistrados/1_Volume_Sinistrados_Response.Json'
    );
  }

  getDataTotalClaimsVolume(): Observable<any> {
    return this._requestTotalClaimsVolume().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  private _requestClaimsInsurance() {
    return this.request.getComercial(
      '6_Menu_Dashboard/2_Sinistrados/2_Distribuicao_Sinistrado_Seguro_Response.json'
    );
  }

  getDataClaimsInsurance(): Observable<any> {
    return this._requestClaimsInsurance().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  private _requestClaimsCategory() {
    return this.request.getComercial(
      '6_Menu_Dashboard/2_Sinistrados/3_Distribuicao_Sinistrados_Categoria_Produtos_Response.json'
    );
  }

  getDataClaimsCategory(): Observable<any> {
    return this._requestClaimsCategory().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }
}
