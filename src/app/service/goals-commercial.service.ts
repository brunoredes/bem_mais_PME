import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GoalModel } from 'app/models/goal.model';
import { ToastrService } from 'ngx-toastr';
import { GoalFilterModel } from 'app/models/comercial-filter-goal.model';
import { ProfileListModel } from 'app/models/profile-list.model';
import { ProductListModel } from 'app/models/product-list.model';

@Injectable({
  providedIn: 'root'
})
export class GoalsCommercialService {

  constructor(private http: HttpClient,
              private request: RequestService,
              private _toastrService: ToastrService) { }


  private _requestGoals() {
    return this.request.getComercial(
      '10_Menu_Nova_Meta/1_Consulta_Metas/Consulta_Metas_Response.json'
    );
  }

  getGoals(): Observable<GoalFilterModel[]> {
    return this._requestGoals().pipe(
      map((res: any) => {
        return res.data.goals;
      })
    )
  }

  // filterGoals$(filter: GoalFilterModel) {
  //   return this._requestGoals(filter).pipe(
  //     map((res: any) => {
  //       return res.data.goals;
  //     })
  //   )
  // }

  sendGoal(goal?): Observable<any> {
    let obs$ = this.http.post('apiUrl/Goals/', goal);
    if (goal.id) {
      obs$ = this.http.put(`apiUrl/Goals/${goal.id}`, goal);
    }
    // MOCK - Create goal
    obs$ = this.request.getComercial(
      '10_Menu_Nova_Meta/1_Consulta_Metas/Consulta_Metas_Response.json'
    );
    return obs$.pipe(
      map((res: any) => {
        this._toastrService.success(res.message);
        return res;
      })
    );
  }

  getProfileList(): Observable<ProfileListModel[]> {
    return this._requestProfileList().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  private _requestProfileList() {
    return this.request.getComercial(
      '10_Menu_Nova_Meta/2_Cadastra_Meta/1_Consulta_Combo_Perfil/Consulta_Perfil_Response.json'
    );
  }

  getProductList(): Observable<ProductListModel[]> {
    return this._requestProductList().pipe(
      map((res: any) => {
        return res.data;
      })
    )
  }

  private _requestProductList() {
    return this.request.getComercial(
      '10_Menu_Nova_Meta/2_Cadastra_Meta/2_Consulta_Combo_Produto/Consulta_Produto_Response.json'
    );
  }

  getGoalById$(goalId: number) {
    return this._requestGoalById(goalId).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  private _requestGoalById(goalId: number) {
    return this.request.getComercial(
      '10_Menu_Nova_Meta/3_Detalhe_Meta/Detalhe_Meta_Response.json'
    );
  }

}
