import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UfService } from 'app/service/uf.service';
import { forkJoin } from 'rxjs';
import { AggregatorMyPartnersService } from 'app/service/aggregator-my-partners.service';

@Injectable({ providedIn: 'root' })
export class AggregatorMyPartnersResolve implements Resolve<any> {
  constructor(
    private _partnersServices: AggregatorMyPartnersService,
    private _ufService: UfService
  ) {}

  resolve() {
    return forkJoin({
      partners: this._partnersServices.getPartners$(1, undefined),
      states: this._ufService.getEstados()
    });
  }
}
