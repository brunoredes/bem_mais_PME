import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { HomeService } from 'app/service/home.service';
import { DashGoalsAgregadorService } from 'app/service/dash-metas-agregador.service';

@Injectable({providedIn: 'root'})
export class CategoryGoalsAgregadorResolve implements Resolve<any> {

    constructor(private dash: DashGoalsAgregadorService) {}

    resolve() {
        return this.dash.getCategoryGoals()
    }
}
