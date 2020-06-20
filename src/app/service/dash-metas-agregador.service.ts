import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
import { GoalsCategoryModel } from 'app/models/goalsCategory.model';
import { GoalsSafeModel } from 'app/models/goalsSafeModel.model';

@Injectable({
    providedIn: 'root'
})
export class DashGoalsAgregadorService {

    constructor(
        private request: RequestService,
    ) { }

    getBestMonth(): Observable<Array<GoalsCategoryModel>> {
        return this._requestBestMonth().pipe(
            map((res: any) => {
                return res.data;
            })

        );
    }

    private _requestBestMonth() {
        return this.request.getAgregador(
            `6_Menu_Dashboards/4_Metas/3_Melhores_Mes_Response.json`
        );
    }

    getCategoryGoals(): Observable<Array<GoalsCategoryModel>> {
        return this._requestCategoryGoals().pipe(
            map((res: any) => {
                return res.data;
            })

        );
    }

    private _requestCategoryGoals() {
        return this.request.getAgregador(
            `6_Menu_Dashboards/4_Metas/5_Metas_Vendas_Categorias_Produtos.json`
        );
    }

    getGoalsSafe(): Observable<Array<GoalsSafeModel>> {
        return this._requestGoalsSafe().pipe(
            map((res: any) => {
                return res.data;
            })

        );
    }

    private _requestGoalsSafe() {
        return this.request.getAgregador(
            `6_Menu_Dashboards/4_Metas/4_Metas_Vendas_Seguro.json`
        );
    }
}
