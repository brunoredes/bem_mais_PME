import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { DashCanceledComercialService } from 'app/service/dash-cancellations-comercial.service';

@Injectable({providedIn: 'root'})
export class CancelCategoryResolve implements Resolve<any> {

    constructor(private _apiDashCancelComercial: DashCanceledComercialService) {}

    resolve() {
        return this._apiDashCancelComercial.getDataCancelCategory()
    }
}
