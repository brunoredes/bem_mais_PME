import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { DashVendasService } from 'app/service/dash-vendas.service';

@Injectable({providedIn: 'root'})
export class OrderSalesResolve implements Resolve<any> {

    constructor(private dashVendas: DashVendasService) {}

    resolve() {
        return this.dashVendas.getOrder()
    }
}
