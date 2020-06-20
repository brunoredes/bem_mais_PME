import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { DashCanceledComercialService } from 'app/service/dash-cancellations-comercial.service';

@Injectable({providedIn: 'root'})
export class TotalCanceledVolumeResolve implements Resolve<any> {

    constructor(private _apiDashCanceledComercial: DashCanceledComercialService) {}

    resolve() {
        return this._apiDashCanceledComercial.getDataTotalCanceledVolume()
    }
}
