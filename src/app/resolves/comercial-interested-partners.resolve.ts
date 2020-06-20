import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { InterestedPartnersService } from 'app/service/interested-partners.service';
import { UfService } from 'app/service/uf.service';
import { forkJoin } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ComercialInterestedPartnersResolve implements Resolve<any> {

    constructor(
      private _partnersServices: InterestedPartnersService,
      private _ufService: UfService
    ) {}

    resolve() {
      return forkJoin({
        partners: this._partnersServices.getPartners$(1, undefined),
        states: this._ufService.getEstados()
      });
    }
}
