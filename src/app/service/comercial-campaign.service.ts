import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComercialCampaign } from 'app/models/comercial-new-campaign-form.model';
import { ComercialFilterCampaign } from 'app/models/comercial-filter-campaign.model';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';
import { ProfileListModel } from 'app/models/profile-list.model';
import { Observable } from 'rxjs';
import { InsuranceListModel } from 'app/models/insurance-list.model';
import { GoalsListModel } from 'app/models/goals-list.model';

/**
 * Serviço para o fluxo nova campanha;
 * @author Wesley Alves
 */
@Injectable({
  providedIn: 'root'
})
export class ComercialCampaignService {
  constructor(
    private _request: RequestService,
    private _http: HttpClient,
    private _toastrService: ToastrService
  ) {}

  sendCampaign(campaign: ComercialCampaign) {
    let obs$ = this._http.post('apiUrl/Campaigns', campaign);
    if (campaign.id) {
      obs$ = this._http.put(`apiUrl/Campaigns/${campaign.id}`, campaign);
    }
    // MOCK - Create campaign
    obs$ = this._request.getComercial(
      '11_Menu_Nova_Campanha/2_Cadastra_Campanha/Cadastra_Campanha.json'
    );
    return obs$.pipe(
      map((res: any) => {
        this._toastrService.success(res.message);
        return res;
      })
    );
  }

  // filterCampaigns$(filter: ComercialFilterCampaign)  {
  //   return this._requestCampaigns$(filter).pipe(map((res: any) => res.data.goals));
  // }

  getCampaign(): Observable<ComercialFilterCampaign[]> {
    return this._requestCampaigns().pipe(
      map((res: any) => {
        return res.data.goals;
      })
    )
  }

  getCampaignById$(id: number) {
    return this._requestCampaignsId(id).pipe(
      map((res: any) => {
        res.data.startDate = new Date(res.data.startDate)
        res.data.endDate = new Date(res.data.endDate)
        
        return res.data;
      })
    );
  }

  private _requestCampaignsId(id: number) {
    return this._request.getComercial(
      `11_Menu_Nova_Campanha/2_Cadastra_Campanha/Detalhe.json`
    );
  }

  private _requestCampaigns() {
    return this._request.getComercial(
      `11_Menu_Nova_Campanha/1_Consulta_Campanha/Consulta_Campanha_Response.json`
    );
  }

  getProfileList(): Observable<ProfileListModel[]> {
    return this._requestProfileList().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  private _requestProfileList() {
    return this._request.getComercial(
      '11_Menu_Nova_Campanha/2_Cadastra_Campanha/2_Consulta_Combo_Perfil/Consulta_Perfil_Response.json'
    );
  }

  getInsuranceList(): Observable<InsuranceListModel[]> {
    return this._requestInsuranceList().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  private _requestInsuranceList() {
    return this._request.getComercial(
      '11_Menu_Nova_Campanha/2_Cadastra_Campanha/1_Consulta_Combo_Seguro/Consulta_Seguro_Response.json'
    );
  }

  getGoalsList(): Observable<GoalsListModel[]> {
    return this._requestGoalsList().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  private _requestGoalsList() {
    return this._request.getComercial(
      '11_Menu_Nova_Campanha/2_Cadastra_Campanha/3_Consulta_Combo_Meta/Consulta_Perfil_Response.json'
    );
  }

}
