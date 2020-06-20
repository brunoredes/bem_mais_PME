import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormStoreComponent } from './form-store/form-store.component';
import { ListStoresComponent } from './list-stores/list-stores.component';
import { MyStoresComponent } from './my-stores.component';
import { MasterDealerMyStoreResolve } from 'app/resolves/master-dealer-my-store.resolve';
import { MasterDealerStoreManagerResolve } from 'app/resolves/master-dealer-store-manager.resolve';

const routes: Routes = [
  {
    path: '',
    component: MyStoresComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: ListStoresComponent,
        resolve: {
          values: MasterDealerMyStoreResolve
        },
        data: { title: 'MasterDealerStoreList' }
      },
      {
        path: 'create',
        component: FormStoreComponent,
        resolve: {
          values: MasterDealerStoreManagerResolve
        },
        data: { title: 'MasterDealerNewStore' }
      },
      {
        path: ':id/update',
        component: FormStoreComponent,
        data: { title: 'MasterDealerNewStore' }
      },
      {
        path: ':id/view',
        component: FormStoreComponent,
        data: { title: 'MasterDealerNewStore' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyStoresRoutingModule {}
