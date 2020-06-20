import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeusVendedoreService {
  constructor(private request: RequestService) {}

  getList(): Observable<Array<any>> {
    return this._requestList().pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  getSellerById$(id: number) {
    return this._requestSellerById(id).pipe(map((res: any) => res.data));
  }

  private _requestList() {
    return this.request.getGerente(
      `5_Menu_Meus_Vendedores/1_Consulta_Meus_Vendedores/Consulta_Vendedores_Response.json`
    );
  }

  private _requestSellerById(id: number) {
    return this.request.getGerente(
      `5_Menu_Meus_Vendedores/3_Detalhe_Vendedor/Detalhe_Vendedor_Response.json`
    );
  }
}
