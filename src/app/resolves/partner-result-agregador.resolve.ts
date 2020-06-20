import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashSalesAgregadorService } from 'app/service/dash-sales-agregador.service';

@Injectable({providedIn: 'root'})
export class PartnerResultDashResolve implements Resolve<any> {

    constructor(private dashSalesAgregadorService: DashSalesAgregadorService) {}

    resolve(): Observable<any> {
        return this.dashSalesAgregadorService.getDataPartnersResult()
    }
}
