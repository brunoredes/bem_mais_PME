import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class DashMetasGerenteService {

    constructor(
        private request: RequestService,
    ) { }

    getMetasVendedores(): Observable<Array<any>> {
        return this._requestMetasVendedores().pipe(
            map((res: any) => {
                return res.data;
            })

        );
    }

    private _requestMetasVendedores() {
        return this.request.getGerente(
            `7_Menu_Dashboard/4_Metas/1_Metas_Vendedor_Response.json`
        );
    }

    getMetasLojas(): Observable<Array<any>> {
        return this._requestMetasLojas().pipe(
            map((res: any) => {
                return res.data;
            })

        );
    }

    private _requestMetasLojas() {
        return this.request.getGerente(
            `7_Menu_Dashboard/4_Metas/2_Metas_Loja_Response.json`
        );
    }

    getMetasSeguros(): Observable<Array<any>> {
        return this._requestMetasSeguros().pipe(
            map((res: any) => {
                return res.data;
            })

        );
    }

    private _requestMetasSeguros() {
        return this.request.getGerente(
            `7_Menu_Dashboard/4_Metas/3_Metas_Vendas_Seguro.json`
        );
    }

    getMetasCategoria(): Observable<Array<any>> {
        return this._requestMetasCategoria().pipe(
            map((res: any) => {
                return res.data;
            })

        );
    }

    private _requestMetasCategoria() {
        return this.request.getGerente(
            `7_Menu_Dashboard/4_Metas/6_Metas_Vendas_Categorias_Produtos.json`
        );
    }

    getComparativoVendas(): Observable<Array<any>> {
        return this._requestComparativoVendas().pipe(
            map((res: any) => {
                return res.data;
            })

        );
    }

    private _requestComparativoVendas() {
        return this.request.getGerente(
            `7_Menu_Dashboard/4_Metas/7_Comparativo_Vendas_Response.json`
        );
    }
}
