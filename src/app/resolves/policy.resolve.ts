import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { PolicyService } from 'app/service/policy.service';

@Injectable({providedIn: 'root'})
export class PolicyResolve implements Resolve<any> {

    constructor(private policyService: PolicyService) {}

    resolve() {
        return this.policyService.getPolicy()
    }
}
