import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { RequestService } from './request.service';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InsuranceModel } from 'app/models/insurance.model';
import { DataPlanInsuranceModel } from 'app/models/data-plan-insurance.model';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  dataInsurance: any;
  dataInsurance$: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient, private request: RequestService) {}

  getInsuranceMobile(retailerId, productId) {
    return this.http.get<any>(
      `${environment.api}/Insurances/Retails?retailerId=${retailerId}&productId=${productId}`
    );
  }

  getInsuranceCar(retailerId, car) {
    return this.http.post<any>(
      `${environment.api}/Insurances/Cars?retailerId=${retailerId}`,
      car
    );
  }

  getInsuranceTravel(retailerId, travel) {
    return this.http.post<any>(
      `${environment.api}/Insurances/Tavels?retailerId=${retailerId}`,
      travel
    );
  }

  getInsuranceMock(): void {
    this.request
      .getVendedor(
        '9_Menu_Sua_Protecao/2_Consulta_Selecione_Seguro/Consulta_Seguro_Response.json'
      )
      .subscribe((data: any) => {
        this.dataInsurance = data;
        this.dataInsurance$.next(true);
      });
  }

  private _requestInsurances() {
    return this.request.getVendedor('9_Menu_Sua_Protecao/Menu_Suaprotecao_Response.json');
  }

  private _requestPlans() {
    return this.request.getVendedor(
      '9_Menu_Sua_Protecao/2_Consulta_Selecione_Seguro/Consulta_Seguro_Response.json'
    );
  }

  get insurances$(): Observable<Array<InsuranceModel>> {
    return this._requestInsurances().pipe(
      map((res: any) => {
        return res.data.insurances;
      })
    );
  }

  get dataPlansInsuranceDetails$(): Observable<DataPlanInsuranceModel> {
    return this._requestPlans().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

}
