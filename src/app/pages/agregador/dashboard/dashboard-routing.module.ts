import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { CancellationsComponent } from './cancellations/cancellations.component';
import { CommisionComponent } from './commision/commision.component';
import { GoalsComponent } from './goals/goals.component';
import { ExtractsComponent } from './extracts/extracts.component';
import { DashboardComponent } from './dashboard.component';
import { AchievementGoalsResolve } from 'app/resolves/achievementGoals.resolve';
import { GoalsBeatsResolve } from 'app/resolves/goalsBeats.resolve';
import { SalesOrderDashResolve } from 'app/resolves/sales-order-agregador.resolve';
import { PartnerResultDashResolve } from 'app/resolves/partner-result-agregador.resolve';
import { VolumeSalesDashResolve } from 'app/resolves/volume-sales-agregador.resolve';
import { SalesInsuranceDashResolve } from 'app/resolves/sales-insurance-agregador.resolve';
import { SalesCategoryDashResolve } from 'app/resolves/sales-category-agregador.resolve';
import { ComissionVendorAgregadorResolve } from 'app/resolves/comission-vendor-agregador.resolve';
import { TopFiveAgregadorResolve } from 'app/resolves/top-five.resolve';
import { HistorySalesAgregadorResolve } from 'app/resolves/history-sales-agregador.resolve.';
import { CancelInsuranceAgregadorResolve } from 'app/resolves/cancel-insurance-agregador.resolve';
import { CancelVolumeAgregadorResolve } from 'app/resolves/canceled-volume-agregador.resolve';
import { CancelCategoryAgregadorResolve } from 'app/resolves/canceld-category-agregador.resolve';
import { ComparativaSalesHomeAgregadorResolve } from 'app/resolves/comparative-sales-agregador.resolve';
import { SuggestionsHomeAgregadorResolve } from 'app/resolves/suggestions-home-agregador.resolve';
import { BestMonthAgregadorResolve } from 'app/resolves/metas-melhores-mes-agregador.resolve';
import { GoalsSafeAgregadorResolve } from 'app/resolves/metas-vendas-seguro.resolve';
import { CategoryGoalsAgregadorResolve } from 'app/resolves/metas-categoria-vendas-agregador.resolve';
import { PerdaComissaoAgregadorResolve } from 'app/resolves/perda-comissao-agregador.resolve';
import { ExtratoAgreadorResolve } from 'app/resolves/extrato-agregador.resolve';
import { DashExtratoAgreadorResolve } from 'app/resolves/dash-extrato-agregador.resolve';
import { DetalheExtratoAgreadorResolve } from 'app/resolves/detalhe-extrato-agregador.resolve';

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
          salesOrder: SalesOrderDashResolve,
          partnerResult: PartnerResultDashResolve,
          volumeSales: VolumeSalesDashResolve,
          salesInsurance: SalesInsuranceDashResolve,
          salesCategory: SalesCategoryDashResolve
        },
        data: {
          title: 'AggregatorDashboardTitleSales'
        }
      },
      {
        path: 'cancellations',
        component: CancellationsComponent,
        resolve: {
          cancelados: CancelVolumeAgregadorResolve,
          insurance: CancelInsuranceAgregadorResolve,
          category: CancelCategoryAgregadorResolve
        },
        data: {
          title: 'AggregatorDashboardTitleCanc'
        }
      },
      {
        path: 'commision',
        component: CommisionComponent,
        resolve: {
          comissao: ComissionVendorAgregadorResolve,
          top: TopFiveAgregadorResolve,
          historico: HistorySalesAgregadorResolve,
          perda: PerdaComissaoAgregadorResolve
        },
        data: {
          title: 'AggregatorDashboardComis'
        }
      },
      {
        path: 'goals',
        component: GoalsComponent,
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
          title: 'AggregatorDashboardGoals'
        }
      },
      {
        path: 'extracts',
        component: ExtractsComponent,
        resolve: {
          extrato: ExtratoAgreadorResolve,
          grafico: DashExtratoAgreadorResolve,
          detalhe: DetalheExtratoAgreadorResolve
        },
        data: {
          title: 'AggregatorDashboardExtract'
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
