import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MasterDealerStoreManagerService } from 'app/service/master-dealer-store-manager.service';
import { UfService } from 'app/service/uf.service';

@Injectable({ providedIn: 'root' })
export class MasterDealerStoreManagerResolve implements Resolve<any> {
  constructor(
    private _service: MasterDealerStoreManagerService,
    private _ufService: UfService
  ) {}

  resolve() {
    const states = this._ufService.getEstados();
    const managers = this._service.getManangers$();
    const profile = this._service.getProfile$();
    const city = this._service.getCity$();
    const state = this._service.getState$();

    return forkJoin({
      states,
      managers,
      profile,
      state,
      city
    });
  }
}
