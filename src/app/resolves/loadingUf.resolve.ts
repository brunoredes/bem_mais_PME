import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { UfService } from 'app/service/uf.service';

@Injectable({providedIn: 'root'})
export class LoadingUfResolve implements Resolve<any> {

    constructor(private _ufService: UfService) {}

    resolve() {
        return this._ufService.getEstados()
    }
}
