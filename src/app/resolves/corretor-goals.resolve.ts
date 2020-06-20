import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UfService } from 'app/service/uf.service';
import { forkJoin } from 'rxjs'
import { CorretorGoalsService } from 'app/service/corretor-goals.service';
import { ComercialCampaignService } from 'app/service/comercial-campaign.service';

@Injectable({ providedIn: 'root' })
export class CorretorGoalsResolve implements Resolve<any> {
  constructor(
    private _goalsService: CorretorGoalsService,
    private _ufService: UfService,
    private _campaignService: ComercialCampaignService
  ) {}

  resolve() {
    return forkJoin({
      goals: this._goalsService.getGoals$(undefined),
      states: this._ufService.getEstados(),
      profileList: this._campaignService.getProfileList(),
    });
  }
}
