import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashGoalsService } from 'app/service/dash-goals.service';
import { ProtectionService } from 'app/service/protection.service';

@Injectable({providedIn: 'root'})
export class ProductResolve implements Resolve<any> {

    constructor(private protectionService: ProtectionService) {}

    resolve(): Observable<any> {
        return this.protectionService.getProduct()
    }
}
