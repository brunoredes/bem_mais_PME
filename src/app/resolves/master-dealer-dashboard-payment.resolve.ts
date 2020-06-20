import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MasterDealerDashboardPaymentService } from 'app/service/master-dealer-dashboard-payment.service';
import { UfService } from 'app/service/uf.service';

@Injectable({ providedIn: 'root' })
export class MasterDealerDashboardPaymentResolve implements Resolve<any> {
  constructor(
    private _masterDealerDashboardPaymentService: MasterDealerDashboardPaymentService,
    private _ufService: UfService
  ) {}
  resolve() {
    const salesHistory = this._masterDealerDashboardPaymentService.getSalesHistory$();
    const canceledInsurance = this._masterDealerDashboardPaymentService.getCanceledInsurance$();
    const performance = this._masterDealerDashboardPaymentService.getResalePerformance$();
    const reseller = this._masterDealerDashboardPaymentService.getSalesReseller$();
    const sellers = this._masterDealerDashboardPaymentService.getSalesSellers$();
    const uf = this._ufService.getEstados();

    return forkJoin({
      salesHistory,
      canceledInsurance,
      performance,
      reseller,
      sellers,
      uf
    });
  }
}
