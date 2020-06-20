import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Subject, Observable } from 'rxjs';
import { ProspectModel } from 'app/models/prospect.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { SafeModel } from 'app/models/safe.model';
import { map } from 'rxjs/operators';
import { ProductModel } from 'app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProtectionService {
  public safe: any
  public product: any
  prospect: ProspectModel

  public safe$: Subject<any> = new Subject<any>();
  public product$: Subject<any> = new Subject<any>();

  constructor(private request: RequestService, private http: HttpClient) { }

  getInsurances(retailerId) {
    return this.http.get<any>(`${environment.api}/Insurances?retailerId=${retailerId}`);
  }

  getProduct(): Observable<Array<ProductModel>> {
    return this._requestProduct().pipe(
      map((res: any) => {
        return res.data.products;
      })
    );
  }

  private _requestProduct() {
    return this.request.getVendedor(
      '9_Menu_Sua_Protecao/1_Precificacao_Lista_Celulares/Lista_Produtos_Response.json'
    );
  }
  // getInsurances(retailerId): Observable<Array<SafeModel>> {
  //   return this._requestInsurances(retailerId).pipe(
  //     map((res: any) => {
  //       return res.data;
  //     })
  //   );
  // }

  // private _requestInsurances(retailerId) {
  //   return this.request.get(
  //     `${environment.api}/Insurances?retailerId=${retailerId}`
  //   );
  // }
  getSafe(): Observable<Array<SafeModel>> {
    return this._requestSafe().pipe(
      map((res: any) => {
        return res.data.insurances;
      })
    );
  }

  private _requestSafe() {
    return this.request.getVendedor(
      '9_Menu_Sua_Protecao/Menu_Suaprotecao_Response.json'
    );
  }
}
