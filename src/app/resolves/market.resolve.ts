import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { HomeService } from 'app/service/home.service';

@Injectable({providedIn: 'root'})
export class MarketingResolve implements Resolve<any> {

    constructor(private homeService: HomeService) {}

    resolve() {
        return this.homeService.getMarket();
    }
}
