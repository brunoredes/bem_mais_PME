import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CampaignCorretorService } from 'app/service/campaign-corretor.service';
import { forkJoin } from 'rxjs';
import { ComercialCampaignService } from 'app/service/comercial-campaign.service';

@Injectable({ providedIn: 'root' })
export class CampaignCorretorResolve implements Resolve<any> {
  constructor(
    private _campaignCorretorService: CampaignCorretorService,
    private _campaignService: ComercialCampaignService
  ) {}
  resolve() {
    return forkJoin({
      campaigns: this._campaignCorretorService.getCampaigns$(undefined),
      insuranceList: this._campaignService.getInsuranceList(),
      profileList: this._campaignService.getProfileList(),
      goalsList: this._campaignService.getGoalsList()
    });
  }
}
