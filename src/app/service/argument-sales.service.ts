import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { ArgumentSalesFilterModel } from 'app/models/argument-sales-filter.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ArgumentSalesModel } from 'app/models/argument-sales.model';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { InsuranceListModel } from 'app/models/insurance-list.model';

@Injectable({
  providedIn: 'root'
})
export class ArgumentSalesService {

  constructor(private _request: RequestService,
              private http: HttpClient,
              private _toastrService: ToastrService) { }

  getFilterArgumentSale(): Observable<ArgumentSalesModel[]> {
    return this._requestArgumentSalesFilter().pipe(
      map((res: any) => {
        return res.data.sellingPoints;
      })
    )
  }

  // filterArgumentSale$(filter: ArgumentSalesFilterModel): Observable<Array<ArgumentSalesModel>> {
  //   return this._requestArgumentSalesFilter(filter).pipe(
  //     map((res: any) => {
  //       return res.data.sellingPoints;
  //     })
  //   )
  // }

  private _requestArgumentSalesFilter() {
    return this._request.getComercial(
      '9_Menu_Argumentos_de_Venda/1_Consulta_Argumentos_de_Vendas/Consulta_Argumentos_Vendas_Response.json'
    );
  }


  sendArgument(argument?): Observable<any> {
    let obs$ = this.http.post('apiUrl/SellingPoints', argument);
    if (argument.id) {
      obs$ = this.http.put(`apiUrl/SellingPoints/${argument.id}`, argument);
    }
    // MOCK - Create argument
    obs$ = this._request.getComercial(
      '9_Menu_Argumentos_de_Venda/1_Consulta_Argumentos_de_Vendas/Consulta_Argumentos_Vendas_Response.json'
    );
    return obs$.pipe(
      map((res: any) => {
        this._toastrService.success(res.message);
        return res;
      })
    );
  }

  private _requestInsuranceList() {
    return this._request.getComercial(
      '9_Menu_Argumentos_de_Venda/2_Cria_Argumentos_de_Venda/1_Consulta_Combo_Seguro/Consulta_Seguro_Response.json'
    );
  }

  getDataInsuranceList(): Observable<InsuranceListModel[]> {
    return this._requestInsuranceList().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

}
