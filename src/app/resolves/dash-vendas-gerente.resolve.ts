import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DashVendasGerenteService } from 'app/service/dash-vendas-gerente.service';

@Injectable({ providedIn: 'root' })
export class DashVendasGerenteResolve implements Resolve<any> {
    constructor(
        private api: DashVendasGerenteService
    ) { }
    resolve() {
        const orders = this.api.getOrders()
        const ranking = this.api.getRanking()
        const performance = this.api.getPerformance()
        const vendasSeguro = this.api.getVendasSeguro()
        const vendasCategoria = this.api.getVendasCategoria()
        return forkJoin({
            orders,
            ranking,
            performance,
            vendasSeguro,
            vendasCategoria
        });
    }
}
