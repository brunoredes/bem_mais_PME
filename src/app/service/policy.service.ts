import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PolicyModel } from 'app/models/policy.model';
import { PolicyEmailModel } from 'app/models/PolicyEmail.model';
import { DetailsPolicyModel } from 'app/models/detailsPolicy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  public policy: any
  public detailsPolicy: any
  public email: any


  public policy$: Subject<any> = new Subject<any>();
  public detailsPolicy$: Subject<any> = new Subject<any>();
  public email$: Subject<any> = new Subject<any>();

  constructor(private request: RequestService) { }
  getPolicy(): Observable<Array<PolicyModel>> {
    return this._requestPolicy().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  getPolicyEmail(): Observable<Array<PolicyEmailModel>> {
    return this._requestPolicyEmail().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  getDetails(): Observable<Array<DetailsPolicyModel>> {
    return this._requestDetailsPolicy().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestPolicy() {
    return this.request.getVendedor(
      '4_Menu_Consulta_Vendas/Consulta_Apolice_Response.json'
    );
  }

  private _requestPolicyEmail() {
    return this.request.getVendedor(
      '4_Menu_Consulta_Vendas/Consultar_Detalhes_Da_Apolice/2A_Via_Email/Enviar_Certificado_Response.json'
    );
  }

  private _requestDetailsPolicy() {
    return this.request.getVendedor(
      '4_Menu_Consulta_Vendas/Consultar_Detalhes_Da_Apolice/Consultar_Detalhes_Apolice_Response.json'
    );
  }

}
