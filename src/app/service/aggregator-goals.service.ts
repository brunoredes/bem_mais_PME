import { Injectable } from '@angular/core';
import { GoalModel } from 'app/models/goal.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestService } from './request.service';
import { ToastrService } from 'ngx-toastr';
import { AggregatorGoalFilterModel } from 'app/models/aggregator-goal-filter.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AggregatorGoalsService {
  constructor(
    private _http: HttpClient,
    private _request: RequestService,
    private _toastrService: ToastrService
  ) {}

  getGoals$(
    filter: AggregatorGoalFilterModel
  ): Observable<Array<GoalModel>> {
    return this._requestGoals(filter).pipe(
      map((res: any) => {
        return res.data.goals;
      })
    );
  }

  getGoalById$(goalId: number) {
    return this._requestGoalById(goalId).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  sendGoal$(goal: GoalModel) {
    let obs$ = this._http.post<any>('Goals', goal);
    if (goal.id) {
      obs$ = this._http.put<any>(`Goals/${goal.id}`, goal);
    }
    // MOCK - Create campaign
    obs$ = this._request.getAgregador(
      '5_Menu_Metas/2_Cadastra_Meta/Cadastra_Metas.json'
    );
    return obs$.pipe(
      map((res: any) => {
        this._toastrService.success(res.message);
        return res;
      })
    );
  }

  private _requestGoals(filter: AggregatorGoalFilterModel) {
    return this._request.getAgregador(
      '5_Menu_Metas/1_Consulta_Metas/Consulta_Metas_Response.json'
    );
  }

  private _requestGoalById(goalId: number) {
    return this._request.getAgregador(
      '5_Menu_Metas/3_Detalhe_Meta/Detalhe_Meta_Response.json'
    );
  }
}
