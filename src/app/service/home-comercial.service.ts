import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FeedbackPercentModel } from 'app/models/feedback-percent.model';
import { SalesInsuranceModel } from 'app/models/sales-insurance.model';
import { WorstPartnersModel } from 'app/models/worst-partners.model';
import { BestPartnersModel } from 'app/models/best-partners.model';
import { NewInsterestedPartnersModel } from 'app/models/new-interested-partners.model';
import { SalesByStateModel } from 'app/models/sales-by-state.model';
import { SearchGoalsModel } from 'app/models/search-goals.model';
import { GoalsHomeModel } from 'app/models/goals-home.model';
import { StateModel } from 'app/models/state.model';
import { CityModel } from 'app/models/city.model';
import { InsuranceListModel } from 'app/models/insurance-list.model';

@Injectable({
  providedIn: 'root'
})
export class HomeComercialService {

  constructor(
      private http: HttpClient,
      private request: RequestService
  ) { }

  private _requestInsuranceList() {
    return this.request.getComercial(
      'Consulta_Combo/Combo_Seguros/Consulta_Seguros_Response.json'
    );
  }

  dataInsuranceList$(): Observable<Array<InsuranceListModel>> {
    return this._requestInsuranceList().pipe(
      map((res: any) => {
        return res.data.insurances;
      })
    )
  }

  private _requestCity() {
    return this.request.getComercial(
      'Consulta_Combo/Combo_Cidade/Consulta_Cidade_Response.json'
    );
  }

  dataCity$(): Observable<Array<CityModel>> {
    return this._requestCity().pipe(
      map((res: any) => {
        return res.data.cities;
      })
    )
  }

  private _requestState() {
    return this.request.getComercial(
      'Consulta_Combo/Combo_Estado/Consulta_Estado_Response.json'
    );
  }

  dataState$(): Observable<Array<StateModel>> {
    return this._requestState().pipe(
      map((res: any) => {
        return res.data.states;
      })
    )
  }

  private _requestGoals() {
    return this.request.getComercial(
      '3_Menu_Home/1_Consulta_Combo_Metas/Consulta_Combo_Metas_Response.json'
    );
  }

  dataGoals(): Observable<Array<GoalsHomeModel>> {
    return this._requestGoals().pipe(
      map((res: any) => {
        return res.data.goals;
      })
    )
  }

  private _requestSearchGoals() {
    return this.request.getComercial(
      '3_Menu_Home/2_Consulta_Dados_Por_Metas_e_Performance/Metas/Consulta_Metas_Response.json'
    );
  }

  dataSearchGoals(): Observable<Array<SearchGoalsModel>> {
    return this._requestSearchGoals().pipe(
      map((res: any) => {
        return res.data.goals;
      })
    )
  }

  private _requestSalesByState() {
    return this.request.getComercial(
      '3_Menu_Home/2_Consulta_Dados_Por_Metas_e_Performance/Volume_de_Vendas_por_Estados/Consulta_vendas_Estados_Response.json'
    );
  }

  dataSalesByState(): Observable<Array<SalesByStateModel>> {
    return this._requestSalesByState().pipe(
      map((res: any) => {
        return res.data.sales;
      })
    )
  }

  private _requestNewInterestedPartners() {
    return this.request.getComercial(
      '3_Menu_Home/3_Consulta_Novos_Parceiros_Interessados/Consulta_Novos_Parceiros_Interessados_Response.json'
    );
  }

  dataNewInterestedPartners(): Observable<Array<NewInsterestedPartnersModel>> {
    return this._requestNewInterestedPartners().pipe(
      map((res: any) => {
        return res.data.interestedPartners;
      })
    )
  }

  private _requestFeedbackPercent() {
    return this.request.getComercial(
      '3_Menu_Home/4_Consulta_Nivel_Satisfacao_Feedback/Consulta_Nivel_Satisfacao_Feedback_Response.json'
    );
  }

  dataFeedbackPercent(): Observable<Array<FeedbackPercentModel>> {
    return this._requestFeedbackPercent().pipe(
      map((res: any) => {
        return res.data.feedback;
      })
    )
  }

  private _requestBestPartners() {
    return this.request.getComercial(
      '3_Menu_Home/5_Consulta_Melhores_Parceiros/Consulta_Melhores_Parceiros_Response.json'
    );
  }

  dataBestPartners(): Observable<Array<BestPartnersModel>> {
    return this._requestBestPartners().pipe(
      map((res: any) => {
        return res.data.partners;
      })
    )
  }

  private _requestWorstPartners() {
    return this.request.getComercial(
      '3_Menu_Home/6_Consulta_Piores_Parceiros/Consulta_Piores_Parceiros_Response.json'
    );
  }

  dataWorstPartners(): Observable<Array<WorstPartnersModel>> {
    return this._requestWorstPartners().pipe(
      map((res: any) => {
        return res.data.partners;
      })
    )
  }

  private _requestSalesInsurance() {
    return this.request.getComercial(
      '3_Menu_Home/7_Consulta_Volume_Vendas_por_Seguro/Consulta_Volume_Vendas_Seguro_Response.json'
    );
  }

  dataSalesInsurance(): Observable<Array<SalesInsuranceModel>> {
    return this._requestSalesInsurance().pipe(
      map((res: any) => {
        return res.data.sales;
      })
    )
  }

}
