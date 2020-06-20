import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComercialComponent } from './dashboard.component';
import { VendasComercialComponent } from './vendas-comercial/vendas-comercial.component';
import { SinistradosComponent } from './sinistrados/sinistrados.component';
import { CanceladosComponent } from './cancelados/cancelados.component';
import { SalesCategoryResolve } from 'app/resolves/SalesCategory.resolve';
import { InsuranceSalesResolve } from 'app/resolves/InsuranceSales.resolve';
import { MyPerformaceResolve } from 'app/resolves/myPerformace.resolve';
import { OrderSalesResolve } from 'app/resolves/orderSales.resolve';
import { TotalSalesVolumeResolve } from 'app/resolves/TotalSalesVolume.resolve';
import { TotalCanceledVolumeResolve } from 'app/resolves/TotalCanceledVolume.resolve';
import { TotalClaimsVolumeResolve } from 'app/resolves/totalClaimsVolume.resolve';
import { ClaimsInsuranceResolve } from 'app/resolves/claimsInsurance.resolve';
import { ClaimsCategoryResolve } from 'app/resolves/claimsCategory.resolve';
import { CancelCategoryResolve } from 'app/resolves/cancelCategory.resolve';
import { CancelInsuranceResolve } from 'app/resolves/cancelInsurance.resolve';
import { LoadingGoalsResolve } from 'app/resolves/loadingGoals.resolve';
import { SearchGoalsResolve } from 'app/resolves/loadingSearchGoals.resolve';
import { SalesByStateResolve } from 'app/resolves/loadingSalesByState.resolve';
import { LoadingSalesInsuranceResolve } from 'app/resolves/loadingSalesInsurance.resolve';
import { LoadingUfResolve } from 'app/resolves/loadingUf.resolve';

const routes: Routes = [
    {
        path: '',
        component: DashboardComercialComponent,
        children: [
            { path: '', redirectTo: 'vendas', pathMatch: 'full' },
            {
                path: 'vendas',
                component: VendasComercialComponent,
                resolve: {
                    salesCategory: SalesCategoryResolve,
                    insuranceSales: InsuranceSalesResolve,
                    myPerformace: MyPerformaceResolve,
                    orderDash: OrderSalesResolve,
                    totalSalesVolume: TotalSalesVolumeResolve,
                    totalCanceledVolume: TotalCanceledVolumeResolve,
                    totalClaimsVolume: TotalClaimsVolumeResolve,
                    claimsInsurance: ClaimsInsuranceResolve,
                    claimsCategory: ClaimsCategoryResolve,
                    cancelCategory: CancelCategoryResolve,
                    cancelInsurance: CancelInsuranceResolve,
                    dataGoals: LoadingGoalsResolve,
                    dataSearchGoals: SearchGoalsResolve,
                    dataSalesByState: SalesByStateResolve,
                    dataSalesInsurance: LoadingSalesInsuranceResolve,
                },
                data: {
                    title: 'ComercialDashboardSales'
                }
            },
            {
                path: 'sinistrado',
                component: SinistradosComponent,
                resolve: {
                    salesCategory: SalesCategoryResolve,
                    insuranceSales: InsuranceSalesResolve,
                    myPerformace: MyPerformaceResolve,
                    orderDash: OrderSalesResolve,
                    totalSalesVolume: TotalSalesVolumeResolve,
                    totalCanceledVolume: TotalCanceledVolumeResolve,
                    totalClaimsVolume: TotalClaimsVolumeResolve,
                    claimsInsurance: ClaimsInsuranceResolve,
                    claimsCategory: ClaimsCategoryResolve,
                    cancelCategory: CancelCategoryResolve,
                    cancelInsurance: CancelInsuranceResolve,
                    dataGoals: LoadingGoalsResolve,
                    dataSearchGoals: SearchGoalsResolve,
                    dataSalesByState: SalesByStateResolve,
                    dataSalesInsurance: LoadingSalesInsuranceResolve,
                    uf: LoadingUfResolve
                },
                data: {
                    title: 'ComercialDashboardAccident'
                }
            },
            {
                path: 'cancelamento',
                component: CanceladosComponent,
                resolve: {
                    salesCategory: SalesCategoryResolve,
                    insuranceSales: InsuranceSalesResolve,
                    myPerformace: MyPerformaceResolve,
                    orderDash: OrderSalesResolve,
                    totalSalesVolume: TotalSalesVolumeResolve,
                    totalCanceledVolume: TotalCanceledVolumeResolve,
                    totalClaimsVolume: TotalClaimsVolumeResolve,
                    claimsInsurance: ClaimsInsuranceResolve,
                    claimsCategory: ClaimsCategoryResolve,
                    cancelCategory: CancelCategoryResolve,
                    cancelInsurance: CancelInsuranceResolve,
                    dataGoals: LoadingGoalsResolve,
                    dataSearchGoals: SearchGoalsResolve,
                    dataSalesByState: SalesByStateResolve,
                    dataSalesInsurance: LoadingSalesInsuranceResolve,
                    uf: LoadingUfResolve
                },
                data: {
                    title: 'ComercialDashboardCancelled'
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

