import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { FilterDashboardService } from 'app/service/filter-dashboard.service';

@Injectable({providedIn: 'root'})
export class FilterCategoryResolve implements Resolve<any> {

    constructor(private filterService: FilterDashboardService) {}

    resolve() {
        return this.filterService.getFilterCategory()
    }
}