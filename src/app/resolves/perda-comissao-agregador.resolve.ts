import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashSalesAgregadorService } from 'app/service/dash-sales-agregador.service';
import { DashComissaoAgregadorService } from 'app/service/dash-comissao-agregador.service';

@Injectable({providedIn: 'root'})
export class PerdaComissaoAgregadorResolve implements Resolve<any> {

    constructor(private dash: DashComissaoAgregadorService) {}

    resolve(): Observable<any> {
        return this.dash.getPerda()
    }
}
