import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { HomeComercialService } from 'app/service/home-comercial.service';

@Injectable({providedIn: 'root'})
export class LoadingInsuranceResolve implements Resolve<any> {

    constructor(private homeService: HomeComercialService) {}

    resolve() {
        return this.homeService.dataInsuranceList$()
    }
}
