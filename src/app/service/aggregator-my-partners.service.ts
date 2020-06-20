import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from './request.service';
import { InterestedPartnersFilter } from 'app/models/interested-partners-filter.model';
import { Observable } from 'rxjs';
import { InterestedPartnersModel } from 'app/models/interested-partners';
import { map } from 'rxjs/operators';
import { PartnerFormModel } from 'app/models/partner-form.model';
import { ToastrService } from 'ngx-toastr';
import { AggregatorPartnerReportModel } from 'app/models/aggregator-partner-report.model';
import { DetailsPolicyModel } from 'app/models/detailsPolicy.model';

@Injectable({
  providedIn: 'root'
})
export class AggregatorMyPartnersService {
  constructor(
    private _http: HttpClient,
    private _request: RequestService,
    private _toastrService: ToastrService
  ) {}

  getPartners$(
    status: number,
    filter: InterestedPartnersFilter
  ): Observable<Array<InterestedPartnersModel>> {
    return this._requestPartners(status, filter).pipe(
      map((res: any) => {
        return res.data.partners;
      })
    );
  }

  getPartnerById$(partnerId: number) {
    return this._requestPartnersById(partnerId).pipe(
      map((res: any) => {
        return res.data.partner;
      })
    );
  }

  sendPartner$(partner: PartnerFormModel) {
    let obs$ = this._http.post<any>('Partners', partner);
    if (partner.id) {
      obs$ = this._http.put<any>(`Partners/${partner.id}`, partner);
    }
    // MOCK - Create campaign
    obs$ = this._request.getAgregador(
      '4_Menu_Meus_Parceiros/2_Detalhes_Parceiro/Salva_Edicao_Parceiro/Salva_Edicao_Parceiro_Response.json'
    );
    return obs$.pipe(
      map((res: any) => {
        this._toastrService.success(res.message);
        return res;
      })
    );
  }

  getReportByPartnerId$(
    partnerId: number
  ): Observable<Array<AggregatorPartnerReportModel>> {
    return this._requestReport(partnerId).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  getDetailsByReportId$(reportId: number): Observable<DetailsPolicyModel> {
    return this._requestDetails(reportId).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestPartners(status: number, filter: InterestedPartnersFilter) {
    return this._request.getAgregador(
      '4_Menu_Meus_Parceiros/1_Consulta_Parceiros/Consulta_Parceiros_Response.json'
    );
  }

  private _requestPartnersById(partnerId: number) {
    return this._request.getAgregador(
      '4_Menu_Meus_Parceiros/2_Detalhes_Parceiro/Consulta_Detalhes_Parceiro_Response.json'
    );
  }

  private _requestReport(partnerId: number) {
    return this._request.getAgregador(
      '4_Menu_Meus_Parceiros/5_Consulta_Relatorio_de_Vendas/Consulta_Relatorio_Vendas_Response.json'
    );
  }

  private _requestDetails(reportId: number) {
    return this._request.getAgregador(
      '4_Menu_Meus_Parceiros/6_Consulta_Detalhe_da_Venda/Consultar_Detalhes_Venda_Response.json'
    );
  }
}
