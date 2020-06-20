import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ArgumentSalesService } from 'app/service/argument-sales.service';

@Injectable({providedIn: 'root'})
export class ArgumentSalesResolve implements Resolve<any> {

    constructor(private _apiArgumentSales: ArgumentSalesService) {}

    resolve() {
        return this._apiArgumentSales.getFilterArgumentSale();
    }
}
