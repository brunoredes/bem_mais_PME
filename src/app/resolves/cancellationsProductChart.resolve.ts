import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { DashCancellationsService } from 'app/service/dash-cancellations.service';

@Injectable({providedIn: 'root'})
export class CancellationsProductChartResolve implements Resolve<any> {

    constructor(private dashCancellations: DashCancellationsService) {}

    resolve() {
        return this.dashCancellations.getCancellationsProduct()
    }
}
