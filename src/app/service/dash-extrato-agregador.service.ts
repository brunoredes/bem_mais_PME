import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NivelService } from './nivel.service';

@Injectable({
    providedIn: 'root'
})
export class DashExtratoAgregadorService {

    constructor(
        private request: RequestService,
        private nivel: NivelService
    ) { }

    private _requestExtrato() {
        let request
        this.nivel.verificaUrl('/agregador')
            ? request = this.request.getAgregador(
                '6_Menu_Dashboards/5_Extrato/1_Consulta_Extratos_Response.Json'
            )
            : request = this.request.getMasterDealer(
                '7_Menu_Dashboard/3_Extrato/1_Consulta_Extratos_Response.Json'
            );

        return request
    }

    getExtrato(): Observable<any> {
        return this._requestExtrato().pipe(
            map((res: any) => {
                return res.data;
            })
        )
    }

    private _requestGrafico() {
        let request
        this.nivel.verificaUrl('/agregador')
            ? request = this.request.getAgregador(
                '6_Menu_Dashboards/5_Extrato/2_Consulta_Grafico_Geral_Response.Json'
            )
            : request = this.request.getMasterDealer(
                '7_Menu_Dashboard/3_Extrato/2_Consulta_Grafico_Geral_Response.Json'
            );

        return request
    }

    getGrafico(): Observable<any> {
        return this._requestGrafico().pipe(
            map((res: any) => {
                return res.data;
            })
        )
    }

    private _requestDetalhe() {
        return this.request.getAgregador(
            '6_Menu_Dashboards/5_Extrato/3_Consulta_Detalhes_Lancamento_Response.json'
        );
    }

    getDetalhe(): Observable<any> {
        return this._requestDetalhe().pipe(
            map((res: any) => {
                return res.data;
            })
        )
    }
}
