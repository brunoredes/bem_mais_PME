import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MasterDealerDashboardExtractService } from 'app/service/master-dealer-dashboard-extract.service';

@Injectable({ providedIn: 'root' })
export class MasterDealerDashboardExtractResolve implements Resolve<any> {
  constructor(
    private _masterDealerDashboardExtractService: MasterDealerDashboardExtractService
  ) {}
  resolve() {
    const extract = this._masterDealerDashboardExtractService.getExtract$();
    const generalChart = this._masterDealerDashboardExtractService.getGeneralChart$();
    return forkJoin({
      extract,
      generalChart
    });
  }
}
