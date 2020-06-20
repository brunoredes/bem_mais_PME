import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { RequestService } from './request.service';
import { ToastrService } from 'ngx-toastr';
import { AchievementGoalsModel } from 'app/models/achievementGoals.model';
import { map } from 'rxjs/operators';
import { GoalsBeatsModel } from 'app/models/goalsBeats.model';
import { BestMonthModel } from 'app/models/bestMonth.model';
import { GoalsCategoryModel } from 'app/models/goalsCategory.model';
import { GoalsSafeModel } from 'app/models/goalsSafeModel.model';
import { ComparativeSalesModel } from 'app/models/comparativeSales.model';
import { SuggestionsGoalsModel } from 'app/models/suggestionsGoals.model';

@Injectable({
  providedIn: 'root'
})
export class DashGoalsService {

  public urlGoals = '5_Menu_Dashboard/Metas'

  public achievementGoals: any
  public goalsBeats: any
  public golasSafe: any
  public comparativeSales: any
  public categoryGoals: any
  public bestMonth: any
  public suggestionsGoals: any

  public achievementGoals$: Subject<any> = new Subject<any>();
  public goalsBeats$: Subject<any> = new Subject<any>();
  public golasSafe$: Subject<any> = new Subject<any>();
  public comparativeSales$: Subject<any> = new Subject<any>();
  public categoryGoals$: Subject<any> = new Subject<any>();
  public bestMonth$: Subject<any> = new Subject<any>();
  public suggestionsGoals$: Subject<any> = new Subject<any>();

  public dateDeGoalsCategory: Date = new Date();
  public dateAteGoalsCategory: Date = new Date();
  public dateDeGoalsSafe: Date = new Date();
  public dateAteGoalsSafe: Date = new Date();
  public filterStatusGoals: string;
  public filterCategoryGoals: string;

  constructor(
    private request: RequestService,
    private toastr: ToastrService,
  ) { }

  getAchievementGoals(): Observable<Array<AchievementGoalsModel>> {
    return this._requestAchievementGoals().pipe(
      map((res: any) => {
        return res.data;
      })

    );
  }

  private _requestAchievementGoals() {
    return this.request.getVendedor(
      `${this.urlGoals}/1_Porcentagem_Para_Meta_Response.json`
    );
  }

  getGoalsBeats(): Observable<Array<GoalsBeatsModel>> {
    return this._requestGoalsBeats().pipe(
      map((res: any) => {
        return res.data;
      })

    );
  }

  private _requestGoalsBeats() {
    return this.request.getVendedor(
      `${this.urlGoals}/2_Batimento_Metas.json`
    );
  }

  getBestMonth(): Observable<Array<BestMonthModel>> {
    return this._requestBestMonth().pipe(
      map((res: any) => {
        return res.data;
      })

    );
  }

  private _requestBestMonth() {
    return this.request.getVendedor(
      `${this.urlGoals}/3_Melhores_Mes_Response.json`
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
    return this.request.getVendedor(
      `${this.urlGoals}/4_Metas_Vendas_Categorias_Produtos.json`
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
    return this.request.getVendedor(
      `${this.urlGoals}/5_Metas_Vendas_Seguro.json`
    );
  }

  getComparativeSales(): Observable<Array<ComparativeSalesModel>> {
    return this._requestComparativeSales().pipe(
      map((res: any) => {
        return res.data;
      })

    );
  }

  private _requestComparativeSales() {
    return this.request.getVendedor(
      `${this.urlGoals}/6_Comparativo_Vendas_Response.json`
    );
  }

  getSuggestionsGoals(): Observable<Array<SuggestionsGoalsModel>> {
    return this._requestSuggestionsGoals().pipe(
      map((res: any) => {
        return res.data;
      })

    );
  }

  private _requestSuggestionsGoals() {
    return this.request.getVendedor(
      `${this.urlGoals}/7_Sugestao_Atingir_Metas_Response.json`
    );
  }


  // getAchievementGoals() {
  //   this.request.get(`${this.urlGoals}/1_Porcentagem_Para_Meta_Response.json`).subscribe((data: any) => {
  //     // this.verifica(data, this.achievementGoals = data, this.achievementGoals$.next(true))
  //     if (this.verifica(data)) {
  //       this.achievementGoals = data;
  //       this.achievementGoals$.next(true);
  //     }
  //   })
  // }

  // getGoalsBeats() {
  //   this.request.get(`${this.urlGoals}/2_Batimento_Metas.json`).subscribe((data: any) => {
  //     if (this.verifica(data)) {
  //       this.goalsBeats = data;
  //       this.goalsBeats$.next(true);
  //     }
  //   })
  // }

  // getBestMonth() {
  //   this.request.get(`${this.urlGoals}/3_Melhores_Mes_Response.json`).subscribe((data: any) => {
  //     // this.verifica(data, this.bestMonth = data, this.bestMonth$.next(true))
  //     if (this.verifica(data)) {
  //       this.bestMonth = data;
  //       this.bestMonth$.next(true);
  //     }
  //   })
  // }

  // getCategoryGoals() {
  //   this.request.get(`${this.urlGoals}/4_Metas_Vendas_Categorias_Produtos.json`).subscribe((data: any) => {
  //     // this.verifica(data, this.categoryGoals = data, this.categoryGoals$.next(true))
  //     if (this.verifica(data)) {
  //       this.categoryGoals = data;
  //       this.categoryGoals$.next(true);
  //     }
  //   })
  // }

  // getGoalsSafe() {
  //   this.request.get(`${this.urlGoals}/5_Metas_Vendas_Seguro.json`).subscribe((data: any) => {
  //     // this.verifica(data, this.golasSafe = data, this.golasSafe$.next(true))
  //     if (this.verifica(data)) {
  //       this.golasSafe = data;
  //       this.golasSafe$.next(true);
  //     }
  //   })
  // }

  // getComparativeSales() {
  //   this.request.get(`${this.urlGoals}/6_Comparativo_Vendas_Response.json`).subscribe((data: any) => {
  //     // this.verifica(data, this.comparativeSales = data, this.comparativeSales$.next(true))
  //     if (this.verifica(data)) {
  //       this.comparativeSales = data;
  //       this.comparativeSales$.next(true);
  //     }
  //   })
  // }

  // getSuggestionsGoals() {
  //   this.request.get(`${this.urlGoals}/7_Sugestao_Atingir_Metas_Response.json`).subscribe((data: any) => {
  //     // this.verifica(data, this.suggestionsGoals = data, this.suggestionsGoals$.next(true))
  //     if (this.verifica(data)) {
  //       this.suggestionsGoals = data;
  //       this.suggestionsGoals$.next(true);
  //     }
  //   })
  // }
}
