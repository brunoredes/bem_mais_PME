import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { VendasComponent } from './vendas/vendas.component';
import { CancelamentoComponent } from './cancelamento/cancelamento.component';
import { MetasComponent } from './metas/metas.component';
import { MyPerformaceResolve } from 'app/resolves/myPerformace.resolve';
import { MyPerformaceDashResolve } from 'app/resolves/MyPerformaceDash.resolve';
import { OrderSalesResolve } from 'app/resolves/orderSales.resolve';
import { SalesAmountResolve } from 'app/resolves/SalesAmount.resolve';
import { SalesCategoryResolve } from 'app/resolves/SalesCategory.resolve';
import { InsuranceSalesResolve } from 'app/resolves/InsuranceSales.resolve';
import { CancellationsNumberChartResolve } from 'app/resolves/cancellationsNumberChart.resolve';
import { CancellationsProductChartResolve } from 'app/resolves/cancellationsProductChart.resolve';
import { CancellationsSafeChartResolve } from 'app/resolves/cancellationsSafeChart.resolve';
import { AchievementGoalsResolve } from 'app/resolves/achievementGoals.resolve';
import { BestMonthResolve } from 'app/resolves/bestMonth.resolve';
import { ComparativeSalesResolve } from 'app/resolves/comparativeSales.resolve';
import { GoalsBeatsResolve } from 'app/resolves/goalsBeats.resolve';
import { GoalsCategoryResolve } from 'app/resolves/goalsCategory.resolve';
import { GoalsSafeResolve } from 'app/resolves/goalsSafe.resolve';
import { SuggestionsGoalsResolve } from 'app/resolves/suggestionsGoals.resolve';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'vendas', pathMatch: 'full' },
            {
                path: 'vendas',
                component: VendasComponent,
                resolve: {
                    myPerformace: MyPerformaceResolve,
                    myPerformaceDash: MyPerformaceDashResolve,
                    orderDash: OrderSalesResolve,
                    salesAmount: SalesAmountResolve,
                    salesCategory: SalesCategoryResolve,
                    insuranceSales: InsuranceSalesResolve,
                },
                data: {
                    title: 'TSdashAbaVendas'
                }
            },
            {
                path: 'cancelamentos',
                component: CancelamentoComponent,
                resolve: {
                    cancellationsNumber: CancellationsNumberChartResolve,
                    cancellationsProduct: CancellationsProductChartResolve,
                    cancellationsSafe: CancellationsSafeChartResolve,
                },
                data: {
                    title: 'TSdashAbaCancelamentos'
                }
            },
            {
                path: 'metas',
                component: MetasComponent,
                resolve: {
                    achievementGoals: AchievementGoalsResolve,
                    bestMonth: BestMonthResolve,
                    comparativeSales: ComparativeSalesResolve,
                    goalsBeats: GoalsBeatsResolve,
                    goalsCategory: GoalsCategoryResolve,
                    goalsSafe: GoalsSafeResolve,
                    suggestionsGoals: SuggestionsGoalsResolve
                },
                data: {
                    title: 'TSdashAbaMeta'
                }
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashRoutingModule { }

