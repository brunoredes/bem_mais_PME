import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashSalesComercialService {

  constructor(
      private request: RequestService
  ) { }

  private _requestTotalSalesVolume() {
    return this.request.getComercial(
      '6_Menu_Dashboard/1_Vendas/2_Volume_Vendas_Dash_Response.Json'
    );
  }

  getDataTotalSalesVolume(): Observable<any> {
    return this._requestTotalSalesVolume().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

}
