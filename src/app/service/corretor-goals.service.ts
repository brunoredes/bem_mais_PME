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
export class CorretorGoalsService {
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
        res.data.goals.forEach(element => {          
          element.amount = new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(element.amount)        
        });
        return res.data.goals;
      })
    );
  }

  getGoalById$(goalId: number) {
    return this._requestGoalById(goalId).pipe(
      map((res: any) => {
        res.data.startDate = new Date(res.data.startDate)
        res.data.endDate = new Date(res.data.endDate)
        res.data.amount = new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(res.data.amount)
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
      '5_Menu_Minhas_Metas/2_Cadastra_Meta/Cadastra_Metas.json'
    );
    return obs$.pipe(
      map((res: any) => {
        this._toastrService.success(res.message);
        return res;
      })
    );
  }

  private _requestGoals(filter: AggregatorGoalFilterModel) {
    return this._request.getCorretor(
      '4_Menu_Minhas_Metas/1_Consulta_Metas/Consulta_Metas_Response.json'
    );
  }

  private _requestGoalById(goalId: number) {
    return this._request.getCorretor(
      '4_Menu_Minhas_Metas/2_Cadastra_Meta/detalhes.json'
    );
  }
}
