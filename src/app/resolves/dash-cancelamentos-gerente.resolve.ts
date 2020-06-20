import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DashCancelamentoGerenteService } from 'app/service/dash-cancelamentos-gerente.service';

@Injectable({ providedIn: 'root' })
export class DashCancelamentoGerenteResolve implements Resolve<any> {
    constructor(
        private api: DashCancelamentoGerenteService
    ) { }
    resolve() {
        const volume = this.api.getDataTotalCanceledVolume()
        const categoria = this.api.getDataCancelCategory()
        const seguro = this.api.getDataCancelInsurance()
        return forkJoin({
            volume,
            categoria,
            seguro
        });
    }
}
