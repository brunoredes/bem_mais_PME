import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { MasterDealerMyStoreService } from 'app/service/master-dealer-my-store.service';
import { forkJoin } from 'rxjs';
import { MasterDealerStoreManagerService } from 'app/service/master-dealer-store-manager.service';

@Injectable({providedIn: 'root'})
export class MasterDealerMyStoreResolve implements Resolve<any> {

    constructor(
        private _masterDealerMyStoreService: MasterDealerMyStoreService,
        private _masterDealerStoreManagerService: MasterDealerStoreManagerService,
    ) {}

    resolve () {
        const myStores = this._masterDealerMyStoreService.getDataMyStores();
        const city = this._masterDealerStoreManagerService.getCity$();
        const state = this._masterDealerStoreManagerService.getState$();

        return forkJoin({
            myStores,
            state,
            city
        });
    }
}

