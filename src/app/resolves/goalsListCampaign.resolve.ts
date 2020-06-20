import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ComercialCampaignService } from 'app/service/comercial-campaign.service';

@Injectable({providedIn: 'root'})
export class GoalsListCampaignResolve implements Resolve<any> {

    constructor(private _apiCampaignCommercial: ComercialCampaignService) {}

    resolve() {
        return this._apiCampaignCommercial.getGoalsList();
    }
}