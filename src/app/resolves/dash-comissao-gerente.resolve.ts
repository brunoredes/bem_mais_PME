import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DashComissaoGerenteService } from 'app/service/dash-comissao-gerente.service';

@Injectable({ providedIn: 'root' })
export class DashComissaoGerenteResolve implements Resolve<any> {
    constructor(
        private api: DashComissaoGerenteService
    ) { }
    resolve() {
        const vendor = this.api.getComissionVendor()
        const top = this.api.getTopFive()
        const history = this.api.getHistorySales()
        const perda = this.api.getPerda()
        return forkJoin({
            vendor,
            top,
            history,
            perda
        });
    }
}
