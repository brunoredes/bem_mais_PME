import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DashVendasMasterDealerService } from 'app/service/dash-sales-masterdealer.service';

@Injectable({ providedIn: 'root' })
export class DashboardMasterdealerResolve implements Resolve<any> {
  constructor(
    private dash: DashVendasMasterDealerService
  ) {}
  resolve() {
    const acompanhamento = this.dash.getAcompanhamento()
    const loja = this.dash.getLoja()
    return forkJoin({
      acompanhamento,
      loja
    });
  }
}
