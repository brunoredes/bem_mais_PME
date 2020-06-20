import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MasterDealerDashboardSalesService } from 'app/service/master-dealer-dashboard-sales.service';

@Injectable({ providedIn: 'root' })
export class MasterDealerDashboardSalesResolve implements Resolve<any> {
  constructor(
    private _masterDealerDashboardSalesService: MasterDealerDashboardSalesService
  ) {}
  resolve() {
    const salesByStore = this._masterDealerDashboardSalesService.getSalesByStore$();
    const storeByProducts = this._masterDealerDashboardSalesService.getStoreByProducts$();
    const salesDistributionByInsurance = this._masterDealerDashboardSalesService.getSalesDistributionByInsurance$();
    const salesDistributionByProductCategory = this._masterDealerDashboardSalesService.getSalesDistributionByProductCategory$();
    return forkJoin({
      salesByStore,
      storeByProducts,
      salesDistributionByInsurance,
      salesDistributionByProductCategory
    });
  }
}
