import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStoreManagerComponent } from './list-store-manager/list-store-manager.component';
import { FormStoreManagerComponent } from './form-store-manager/form-store-manager.component';
import { StoreManagerComponent } from './store-manager.component';

const routes: Routes = [
  {
    path: '',
    component: StoreManagerComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: ListStoreManagerComponent,
        data: {
          title: 'MasterDealerTitle'
        }
      },
      {
        path: 'create',
        component: FormStoreManagerComponent,
        data: {
          title: 'MasterDealerStoreNewManager'
        }
      },
      {
        path: ':id/update',
        component: FormStoreManagerComponent,
        data: {
          title: 'MasterDealerStoreNewManager'
        }
      },
      {
        path: ':id/view',
        component: FormStoreManagerComponent,
        data: {
          title: 'MasterDealerStoreNewManager'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreManagerRoutingModule {}
