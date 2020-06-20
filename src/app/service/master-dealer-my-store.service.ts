import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MasterDealerStoreFormModel } from 'app/models/master-dealer-store-form.model';
import { MasterDealerStoreModel } from 'app/models/master-dealer-store.model';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';
import { CategoryProductModel } from 'app/models/category-product.model';

@Injectable({
  providedIn: 'root'
})
export class MasterDealerMyStoreService {
  constructor(
    private _request: RequestService,
    private _http: HttpClient,
    private _toastrService: ToastrService
  ) {}

  getDataMyStores(): Observable<MasterDealerStoreModel> {
    return this._requestMyStores().pipe(
      map((res: any) => {
        return res.data.stores;
      })
    );
  }
  getStoreById$(storeId: number): Observable<MasterDealerStoreFormModel> {
    return Observable.create();
  }

  sendStore$(store: MasterDealerStoreFormModel) {
    let obs$ = this._http.post('Stores', store);
    if (store.id) {
      obs$ = this._http.put(`Stores/${store.id}`, store);
    }
    // MOCK - Create manager
    obs$ = this._request.getMasterDealer(
      '4-Menu_Gerentes_de_Loja/2_Cadastra_Gerentes/Cadastra_Gerentes_Response.json'
    );
    return obs$.pipe(
      map((res: any) => {
        this._toastrService.success(res.message);
        return res;
      })
    );
  }

  private _requestMyStores() {
    return this._request.getMasterDealer(
      '5_Menu_Minhas_Lojas/1_Consulta_Minhas_Lojas/Consulta_Lojas_Response.json'
    );
  }

}
