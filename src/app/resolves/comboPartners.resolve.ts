import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { TrainingsService } from 'app/service/trainings.service';

@Injectable({providedIn: 'root'})
export class ComboPartnersResolve implements Resolve<any> {

    constructor(private trainingsService: TrainingsService) {}

    resolve() {
        return this.trainingsService.getComboPartners()
    }
}
