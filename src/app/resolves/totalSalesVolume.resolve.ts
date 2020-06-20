import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { DashSalesComercialService } from 'app/service/dash-sales-comercial.service';

@Injectable({providedIn: 'root'})
export class TotalSalesVolumeResolve implements Resolve<any> {

    constructor(private _apiDashVendasComercial: DashSalesComercialService) {}

    resolve() {
        return this._apiDashVendasComercial.getDataTotalSalesVolume()
    }
}
