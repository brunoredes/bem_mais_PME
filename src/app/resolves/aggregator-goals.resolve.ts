import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UfService } from 'app/service/uf.service';
import { forkJoin } from 'rxjs'
import { AggregatorGoalsService } from 'app/service/aggregator-goals.service';

@Injectable({ providedIn: 'root' })
export class AggregatorGoalsResolve implements Resolve<any> {
  constructor(
    private _goalsService: AggregatorGoalsService,
    private _ufService: UfService
  ) {}

  resolve() {
    return forkJoin({
      goals: this._goalsService.getGoals$(undefined),
      states: this._ufService.getEstados()
    });
  }
}
