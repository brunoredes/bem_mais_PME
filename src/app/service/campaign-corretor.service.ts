import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComercialCampaign } from 'app/models/comercial-new-campaign-form.model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';
import { ComercialFilterCampaign } from 'app/models/comercial-filter-campaign.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignCorretorService {
  constructor(
    private _http: HttpClient,
    private _request: RequestService,
    private _toastrService: ToastrService
  ) {}

  getCampaigns$(
    filter: ComercialFilterCampaign
  ): Observable<Array<ComercialCampaign>> {
    return this._requestCampaigns().pipe(
      map((res: any) => {
        return res.data.goals;
      })
    );
  }

  getCampaignById$(campaignId: number) {
    return this._requestCampaignById(campaignId).pipe(
      map((res: any) => {
        return res.data.campaign;
      })
    );
  }

  sendCampaign$(campaign: ComercialCampaign) {
    let obs$ = this._http.post('Campaigns', campaign);
    if (campaign.id) {
      obs$ = this._http.put(`Campaigns/${campaign.id}`, campaign);
    }
    // MOCK - Create campaign
    obs$ = this._request.getCorretor(
      '5_Menu_Nova_Campanha/2_Cadastra_Campanha/Cadastra_Campanha.json'
    );
    return obs$.pipe(
      map((res: any) => {
        this._toastrService.success(res.message);
        return res;
      })
    );
  }

  private _requestCampaigns() {
    return this._request.getCorretor(
      '5_Menu_Nova_Campanha/1_Consulta_Campanha/Consulta_Campanha_Response.json'
    );
  }

  private _requestCampaignById(goalId: number) {
    return this._request.getCorretor(
      '5_Menu_Nova_Campanha/1_Detalhe_Campanha/Consulta_Detalhe_Campanha_Response.json'
   );
  }
}
