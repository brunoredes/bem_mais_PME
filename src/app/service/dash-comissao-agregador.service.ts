import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashComissaoAgregadorService {

    constructor(
        private request: RequestService
    ) { }

    private _requestComissionVendor() {
        return this.request.getAgregador(
            '6_Menu_Dashboards/3_Comissoes/1_Comissoes_Vendedor_Response.json'
        );
    }

    getComissionVendor(): Observable<any> {
        return this._requestComissionVendor().pipe(
            map((res: any) => {
                return res.data;
            })
        )
    }

    private _requestTopFive() {
        return this.request.getAgregador(
            '6_Menu_Dashboards/3_Comissoes/2_Top_Comissoes_Response.json'
        );
    }

    getTopFive(): Observable<any> {
        return this._requestTopFive().pipe(
            map((res: any) => {
                return res.data;
            })
        )
    }

    private _requestHistorySales() {
        return this.request.getAgregador(
            '6_Menu_Dashboards/3_Comissoes/3_Historico_Vendas_Trimestre_Response.json'
        );
    }

    getHistorySales(): Observable<any> {
        return this._requestHistorySales().pipe(
            map((res: any) => {
                return res.data;
            })
        )
    }

    getPerda(): Observable<any> {
        return this._requestPerda().pipe(
            map((res: any) => {
                return res.data;
            })
        )
    }

    private _requestPerda() {
        return this.request.getAgregador(
            '6_Menu_Dashboards/3_Comissoes/4_Perda_Comissoes.json'
        );
    }

}
