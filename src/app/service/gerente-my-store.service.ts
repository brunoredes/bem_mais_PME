import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RequestService } from './request.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MasterDealerStoreFormModel } from 'app/models/master-dealer-store-form.model';

@Injectable({
  providedIn: 'root'
})
export class GerenteMyStoreService {
  constructor(
    private _request: RequestService,
    private _http: HttpClient,
    private _toastrService: ToastrService
  ) {}

  sendStore$(store: MasterDealerStoreFormModel) {
    let obs$ = this._http.put(`Stores/${store.id}`, store);

    // MOCK - Update store
    obs$ = this._request.getGerente(
      '4_Menu_Minha_Loja/Cadastra_Lojas_Response.json'
    );

    return obs$.pipe(
      map((res: any) => {
        this._toastrService.success(res.message);
        return res;
      })
    );
  }
}
