import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { HomeAgregadorService } from 'app/service/home-agregador.service';
import { DashComissaoAgregadorService } from 'app/service/dash-comissao-agregador.service';

@Injectable({providedIn: 'root'})
export class TopFiveAgregadorResolve implements Resolve<any> {

    constructor(private dash: DashComissaoAgregadorService) {}

    resolve() {
        return this.dash.getTopFive()
    }
}
