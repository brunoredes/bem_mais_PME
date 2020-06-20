import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { DashCanceledComercialService } from 'app/service/dash-cancellations-comercial.service';
import { DashCanceledAgregadorService } from 'app/service/dash-cancelados-agregador.service';

@Injectable({providedIn: 'root'})
export class CancelInsuranceAgregadorResolve implements Resolve<any> {

    constructor(private dash: DashCanceledAgregadorService) {}

    resolve() {
        return this.dash.getDataCancelInsurance()
    }
}
