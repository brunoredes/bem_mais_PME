import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { HomeAgregadorService } from 'app/service/home-agregador.service';

@Injectable({providedIn: 'root'})
export class CancellationsSafeHomeAgregadorResolve implements Resolve<any> {

    constructor(private homeServiceAgregador: HomeAgregadorService) {}

    resolve() {
        return this.homeServiceAgregador.getCancellationSafe()
    }
}
