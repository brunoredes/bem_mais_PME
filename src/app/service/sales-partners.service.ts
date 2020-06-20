import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';
import { SalePartnerModel } from 'app/models/sale-partner.model';
import { SalePartnerFilter } from 'app/models/sale-partner-filter.model';

@Injectable({
  providedIn: 'root'
})
export class SalesPartnersService {
  constructor(private http: HttpClient, private request: RequestService) {}

  getPartners$(
    partnersStatus: number,
    filter: SalePartnerFilter
  ): Observable<Array<SalePartnerModel>> {
    return this._requestPartners(partnersStatus, filter).pipe(
      map((res: any) => {
        return res.data.partners;
      })
    );
  }

  getPartnerById(partnerId: number) {
    return this._requestPartnersById(partnerId);
  }

  getItems$(): Observable<Array<any>> {
    return this._requestItems().pipe(map( (res: any) => {
      return res.data.revendas;
    }));
  }

  private _requestPartnersById(partnerId: number) {
    return this.request
      .getComercial(
        '5_Menu_Parceiros_de_Venda/2_Detalhes_Parceiro/Consulta_Detalhes_Parceiro_Response.json'
      )
      .pipe(
        map((res: any) => {
          return res.data.partner;
        })
      );
  }

  private _requestPartners(partnersStatus: number, filter: SalePartnerFilter) {
    return this.request.getComercial(
      '5_Menu_Parceiros_de_Venda/1_Consulta_Parceiros/Consulta_Parceiros_Response.json'
    );
  }
  // TODO: Mock
  private _requestItems() {
    return this.request.getComercial(
      '5_Menu_Parceiros_de_Venda/1_Consulta_Parceiros/Revendas_Mock.json'
    );
  }
}
