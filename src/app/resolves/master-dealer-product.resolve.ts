import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { MasterDealerProductService } from 'app/service/master-dealer-product.service';
import { forkJoin } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MasterDealerProductResolve implements Resolve<any> {

    constructor(private _masterDealerProductService: MasterDealerProductService) {}

    resolve() {
        const products = this._masterDealerProductService.getDataProduct();
        const categoryProducts = this._masterDealerProductService.getDataCategoryProduct();

        return forkJoin({
            products,
            categoryProducts
        });
    }
}
