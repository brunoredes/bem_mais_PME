import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelComponent } from './cancel/cancel.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesComponent } from './sales/sales.component';
import { GoalsComponent } from './goals/goals.component';
import { AchievementGoalsResolve } from 'app/resolves/achievementGoals.resolve';
import { GoalsBeatsResolve } from 'app/resolves/goalsBeats.resolve';
import { DashVendasGerenteResolve } from 'app/resolves/dash-vendas-gerente.resolve';
import { DashCancelamentoGerenteResolve } from 'app/resolves/dash-cancelamentos-gerente.resolve';
import { DashMetasGerenteResolve } from 'app/resolves/dash-metas-gerentes.resolve';
import { DashComissaoGerenteResolve } from 'app/resolves/dash-comissao-gerente.resolve';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'sales', pathMatch: 'full' },
      {
        path: 'sales',
        component: SalesComponent,
        resolve: {
          values: DashVendasGerenteResolve
        },
        data: {
          title: 'ComercialDashboardSales'
        }
      },
      {
        path: 'cancel',
        component: CancelComponent,
        resolve: {
          values: DashCancelamentoGerenteResolve
        },
        data: {
          title: 'TSdashAbaCancelamentos'
        }
      },
      {
        path: 'commissions',
        component: CommissionsComponent,
        resolve: {
          values: DashComissaoGerenteResolve
        },
        data: {
          title: 'AggregatorDashboardComis'
        }
      },
      {
        path: 'goals',
        component: GoalsComponent,
        resolve: {
          values: DashMetasGerenteResolve,
          achievementGoals: AchievementGoalsResolve,
          goalsBeats: GoalsBeatsResolve
        },
        data: {
          title: 'AggregatorDashboardGoals'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
