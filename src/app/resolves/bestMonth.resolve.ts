import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashGoalsService } from 'app/service/dash-goals.service';

@Injectable({providedIn: 'root'})
export class BestMonthResolve implements Resolve<any> {

    constructor(private goalsService: DashGoalsService) {}

    resolve(): Observable<any> {
        return this.goalsService.getBestMonth()
    }
}
