import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { DashCanceledAgregadorService } from 'app/service/dash-cancelados-agregador.service';

@Injectable({providedIn: 'root'})
export class CancelVolumeAgregadorResolve implements Resolve<any> {

    constructor(private dash: DashCanceledAgregadorService) {}

    resolve() {
        return this.dash.getDataTotalCanceledVolume()
    }
}
