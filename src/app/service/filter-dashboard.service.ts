import { Injectable, TemplateRef, Output, EventEmitter } from '@angular/core';
import { RequestService } from './request.service';
import { Subject, Observable } from 'rxjs';
import { FilterStatusModel } from 'app/models/filterStatus.model';
import { map } from 'rxjs/operators';
import { FilterCategoryModel } from 'app/models/filterCategory.model';

@Injectable({
    providedIn: 'root'
})

export class FilterDashboardService {

    public urlFilterDashboard = '2_Filtros'

    public filterStatus: any;
    public filterCategory: any;

    public filterStatus$: Subject<any> = new Subject<any>();
    public filterCategory$: Subject<any> = new Subject<any>();

    constructor(private request: RequestService) { }
    getFilterStatus(): Observable<Array<FilterStatusModel>> {
        return this._requestFilterStatus().pipe(
            map((res: any) => {
                return res.data.sales;
            })
        );
    }

    private _requestFilterStatus() {
        return this.request.getVendedor(
            `${this.urlFilterDashboard}/1-Status_Vendas/Consulta_Statusvendas_Response.json`
        );
    }

    getFilterCategory(): Observable<Array<FilterCategoryModel>> {
        return this._requestFilterCategory().pipe(
            map((res: any) => {
                return res.data.categories;
            })
        );
    }

    private _requestFilterCategory() {
        return this.request.getVendedor(
            `${this.urlFilterDashboard}/2-Categorias_De_Produtos/Consulta_Categoriasprodutos_Response.json`
        );
    }
}
