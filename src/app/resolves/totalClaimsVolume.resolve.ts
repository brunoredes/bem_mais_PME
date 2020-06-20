import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { DashClaimsComercialService } from 'app/service/dash-claims-comercial.service';

@Injectable({providedIn: 'root'})
export class TotalClaimsVolumeResolve implements Resolve<any> {

    constructor(private _apiDashClaimsComercial: DashClaimsComercialService) {}

    resolve() {
        return this._apiDashClaimsComercial.getDataTotalClaimsVolume()
    }
}
