import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CorretorDashboardPerformanceService } from 'app/service/corretor-dashboard-performance.service';
import { forkJoin } from 'rxjs';
import { MeusVendedoreService } from 'app/service/meus-vendedores-gerente.service';

@Injectable({ providedIn: 'root' })
export class MeusVendedoresResolve implements Resolve<any> {
  constructor(
    private api: MeusVendedoreService
  ) {}
  resolve() {
    const list = this.api.getList()
    return forkJoin({
      list
    });
  }
}
