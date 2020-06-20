import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { SalesPartnersService } from 'app/service/sales-partners.service';
import { forkJoin } from 'rxjs';
import { UfService } from 'app/service/uf.service';

@Injectable({ providedIn: 'root' })
export class ComercialSalesPartnersResolve implements Resolve<any> {
  constructor(
    private partnersServices: SalesPartnersService,
    private _ufService: UfService
  ) {}

  resolve() {
    return forkJoin({
      items: this.partnersServices.getItems$(),
      partners: this.partnersServices.getPartners$(1, undefined),
      state: this._ufService.getEstados()
    });
  }
}
