import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsAndGoalsComponent } from './campaigns-and-goals/campaigns-and-goals.component';
import { PerformanceComponent } from './performance/performance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AchievementGoalsResolve } from 'app/resolves/achievementGoals.resolve';
import { GoalsBeatsResolve } from 'app/resolves/goalsBeats.resolve';
import { BestMonthAgregadorResolve } from 'app/resolves/metas-melhores-mes-agregador.resolve';
import { GoalsSafeAgregadorResolve } from 'app/resolves/metas-vendas-seguro.resolve';
import { CategoryGoalsAgregadorResolve } from 'app/resolves/metas-categoria-vendas-agregador.resolve';
import { ComparativaSalesHomeAgregadorResolve } from 'app/resolves/comparative-sales-agregador.resolve';
import { SuggestionsHomeAgregadorResolve } from 'app/resolves/suggestions-home-agregador.resolve';
import { CorretorDashboardPerformanceResolve } from 'app/resolves/corretor-dashboard-performance.service';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'performance', pathMatch: 'full' },
      {
        path: 'performance',
        component: PerformanceComponent,
        resolve: {
          values: CorretorDashboardPerformanceResolve
        },
        data: {
          title: 'Performance'
        }
      },
      {
        path: 'campaigns-goals', component: CampaignsAndGoalsComponent,
        resolve: {
          achievementGoals: AchievementGoalsResolve,
          goalsBeats: GoalsBeatsResolve,
          melhores: BestMonthAgregadorResolve,
          vendasSeguros: GoalsSafeAgregadorResolve,
          vendasCategoria: CategoryGoalsAgregadorResolve,
          comparativeSales: ComparativaSalesHomeAgregadorResolve,
          suggestions: SuggestionsHomeAgregadorResolve
        },
        data: {
          title: 'Campaigns/Goals'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
