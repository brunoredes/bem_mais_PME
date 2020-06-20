import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterestedPartnersModel } from 'app/models/interested-partners';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';
import { InterestedPartnersFilter } from 'app/models/interested-partners-filter.model';

@Injectable({
  providedIn: 'root'
})
export class InterestedPartnersService {
  public partner: any;
  public detailsPartner: any;
  public email: any;

  public partner$: Subject<any> = new Subject<any>();
  public detailsPartner$: Subject<any> = new Subject<any>();
  public email$: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient, private request: RequestService) {}

  getPartners$(
    partnersStatus: number,
    filter: InterestedPartnersFilter
  ): Observable<Array<InterestedPartnersModel>> {
    return this._requestPartners(partnersStatus, filter).pipe(
      map((res: any) => {
        return res.data.interestedPartners;
      })
    );
  }

  getPartnerById(partnerId: number) {
    return this._requestPartnersById(partnerId).pipe(
      map((res: any) => {
        return res.data.interestedPartners;
      })
    );
  }

  private _requestPartnersById(partnerId: number) {
    return this.request.getComercial(
      '4_Menu_Parceiros_Interessados/2_Detalhes_Parceiro_Interessado/Consulta_Detalhes_Parceiro_Interessado_Response.json'
    );
  }

  private _requestPartners(
    partnersStatus: number,
    filter: InterestedPartnersFilter
  ) {
    return this.request.getComercial(
      '4_Menu_Parceiros_Interessados/1_Consulta_Parceiros_Interessados/Consulta_Parceiros_Interessados_Response.json'
    );
  }
}
