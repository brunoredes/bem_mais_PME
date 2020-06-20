import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { GoalsCommercialService } from 'app/service/goals-commercial.service';

@Injectable({providedIn: 'root'})
export class GoalsResolve implements Resolve<any> {

    constructor(private _apiGoalsCommercial: GoalsCommercialService) {}

    resolve() {
        return this._apiGoalsCommercial.getGoals();
    }
}
