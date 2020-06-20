import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { PaymentsComponent } from './payments/payments.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { DashboardComponent } from './dashboard.component';
import { MasterDealerDashboardPaymentResolve } from 'app/resolves/master-dealer-dashboard-payment.resolve';
import { ExtractsComponent } from 'app/pages/agregador/dashboard/extracts/extracts.component';
import { ExtratoAgreadorResolve } from 'app/resolves/extrato-agregador.resolve';
import { DashExtratoAgreadorResolve } from 'app/resolves/dash-extrato-agregador.resolve';
import { DetalheExtratoAgreadorResolve } from 'app/resolves/detalhe-extrato-agregador.resolve';
import { InsuranceSalesResolve } from 'app/resolves/InsuranceSales.resolve';
import { SalesCategoryResolve } from 'app/resolves/SalesCategory.resolve';
import { DashboardMasterdealerResolve } from 'app/resolves/dash-vendas-masterdealer.resolve';

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
          value: DashboardMasterdealerResolve,
          seguro: InsuranceSalesResolve,
          categoria: SalesCategoryResolve
        },
        data: { title: 'MasterDealerDashboardTitle' }
      },
      {
        path: 'payments',
        component: PaymentsComponent,
        resolve: {
          values: MasterDealerDashboardPaymentResolve
        },
        data: { title: 'MasterDealerPayment' }
      },

      {
        path: 'extracts',
        component: ExtractsComponent,
        resolve: {
          extrato: ExtratoAgreadorResolve,
          grafico: DashExtratoAgreadorResolve,
          detalhe: DetalheExtratoAgreadorResolve
        },
        data: { title: 'MasterDealerDashboardExtr' }
      },
      {
        path: 'insurance',
        component: InsuranceComponent,
        data: { title: 'insuranceSalesTitle' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
