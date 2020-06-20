import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { HomeService } from 'app/service/home.service';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class BestWeekResolve implements Resolve<any> {

    constructor(private homeService: HomeService) {}

    resolve(): Observable<any> {
        return this.homeService.getBestWeek();
    }
}
