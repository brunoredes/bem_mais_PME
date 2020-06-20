import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MasterDealerManagerFormModel } from 'app/models/master-dealer-manager-form.model';
import { MasterDealerManagerModel } from 'app/models/master-dealer-manager.model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';
import { ProfileListModel } from 'app/models/profile-list.model';
import { CityModel } from 'app/models/city.model';
import { StateModel } from 'app/models/state.model';

@Injectable({
  providedIn: 'root'
})
export class MasterDealerStoreManagerService {
  constructor(
    private _http: HttpClient,
    private _request: RequestService,
    private _toastrService: ToastrService
  ) {}

  getManangers$(): Observable<Array<MasterDealerManagerModel>> {
    return this._requestManangers().pipe(
      map((res: any) => {
        return res.data.managers;
      })
    );
  }

  getManagerById$(managerId: number): Observable<MasterDealerManagerFormModel> {
    return this._requestManangersById(managerId).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  sendMananger$(manager: MasterDealerManagerFormModel) {
    let obs$ = this._http.post('Managers', manager);
    if (manager.dealerId) {
      obs$ = this._http.put(`Managers/${manager.dealerId}`, manager);
    }
    // MOCK - Create manager
    obs$ = this._request.getMasterDealer(
      '4_Menu_Gerentes_de_Loja/2_Cadastra_Gerentes/Cadastra_Gerentes_Response.json'
    );
    return obs$.pipe(
      map((res: any) => {
        this._toastrService.success(res.message);
        return res;
      })
    );
  }

  private _requestManangers() {
    return this._request.getMasterDealer(
      '4_Menu_Gerentes_de_Loja/1_Consulta_Gerentes_de_Loja/Consulta_Gerentes_Response.json'
    );
  }

  private _requestManangersById(managerId) {
    return this._request.getMasterDealer(
      '4_Menu_Gerentes_de_Loja/3_Detalhe_Gerente_de_Loja/Detalhe_Gerente_Response.json'
    );
  }

  getProfile$(): Observable<Array<ProfileListModel>> {
    return this._requestProfile().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestProfile() {
    return this._request.getComercial(
      '10_Menu_Nova_Meta/2_Cadastra_Meta/1_Consulta_Combo_Perfil/Consulta_Perfil_Response.json'
    );
  }

  getCity$(): Observable<Array<CityModel>> {
    return this._requestCity().pipe(
      map((res: any) => {
        return res.data.cities;
      })
    )
  }

  private _requestCity() {
    return this._request.getComercial(
      'Consulta_Combo/Combo_Cidade/Consulta_Cidade_Response.json'
    );
  }

  getState$(): Observable<Array<StateModel>> {
    return this._requestState().pipe(
      map((res: any) => {
        return res.data.states;
      })
    )
  }

  private _requestState() {
    return this._request.getComercial(
      'Consulta_Combo/Combo_Estado/Consulta_Estado_Response.json'
    );
  }

}
