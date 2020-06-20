import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { DashExtratoAgregadorService } from 'app/service/dash-extrato-agregador.service';

@Injectable({providedIn: 'root'})
export class ExtratoAgreadorResolve implements Resolve<any> {

    constructor(private dash: DashExtratoAgregadorService) {}

    resolve() {
        return this.dash.getExtrato()
    }
}
