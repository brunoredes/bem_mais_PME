import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MasterDealerHomeService } from 'app/service/master-dealer-home.service';
import { forkJoin } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MasterDealerHomeResolve implements Resolve<any> {
  constructor(private _masterDealerService: MasterDealerHomeService) {}

  resolve() {
    const accumulatedValue = this._masterDealerService.getAccumulatedValue$();
    const totalStoreCancellations = this._masterDealerService.getTotalStoreCancellations$();
    const storePerformance = this._masterDealerService.getStorePerformance$();
    const salesAmount = this._masterDealerService.getSalesAmount$();
    const distributionOfSalesByInsurance = this._masterDealerService.getDistributionOfSalesByInsurance$();
    const distributionOfSalesByProduct = this._masterDealerService.getDistributionOfSalesByProduct$();

    return forkJoin({
      accumulatedValue,
      totalStoreCancellations,
      storePerformance,
      salesAmount,
      distributionOfSalesByInsurance,
      distributionOfSalesByProduct
    });
  }
}
