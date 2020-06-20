import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CorretorDashboardPerformanceService } from 'app/service/corretor-dashboard-performance.service';
import { forkJoin } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CorretorDashboardPerformanceResolve implements Resolve<any> {
  constructor(
    private _performanceService: CorretorDashboardPerformanceService
  ) {}
  resolve() {
    const orders = this._performanceService.getOrders$();
    const myPerformance = this._performanceService.getMyPerformance$();
    const salesAmount = this._performanceService.getSalesAmount$();
    const salesDistributionByInsurance = this._performanceService.getSalesDistributionByInsurance$();
    const salesDistributionByProduct = this._performanceService.getSalesDistributionByProduct$();
    return forkJoin({
      orders,
      myPerformance,
      salesAmount,
      salesDistributionByInsurance,
      salesDistributionByProduct
    });
  }
}
