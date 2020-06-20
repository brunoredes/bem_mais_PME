import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DashMetasGerenteService } from 'app/service/dash-metas-gerente.service';

@Injectable({ providedIn: 'root' })
export class DashMetasGerenteResolve implements Resolve<any> {
    constructor(
        private api: DashMetasGerenteService
    ) { }
    resolve() {
        const vendedores = this.api.getMetasVendedores()
        const lojas = this.api.getMetasLojas()
        const categoria = this.api.getMetasCategoria()
        const seguro = this.api.getMetasSeguros()
        const comparativo = this.api.getComparativoVendas()
        return forkJoin({
            vendedores,
            lojas,
            categoria,
            seguro,
            comparativo
        });
    }
}
