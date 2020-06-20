import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellersComponent } from './sellers/sellers.component';
import { ListSellersComponent } from './list-sellers/list-sellers.component';
import { FormSellersComponent } from './form-sellers/form-sellers.component';
import { MeusVendedoresResolve } from 'app/resolves/meusVendedores.resolve';
import { LoadingUfResolve } from 'app/resolves/loadingUf.resolve';

const routes: Routes = [
  {
    path: '',
    component: SellersComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: ListSellersComponent,
        resolve: {
          stores: MeusVendedoresResolve,
          uf: LoadingUfResolve
        },
        data: { title: 'ManagerSellersTitle' }
      },
      {
        path: 'create',
        component: FormSellersComponent,
        resolve: {
          uf: LoadingUfResolve
        },
        data: { title: 'ManagerSellerNewSal' }
      },
      {
        path: ':id/view',
        component: FormSellersComponent,
        data: { title: 'ManagerSellerNewSal' }
      },
      {
        path: ':id/update',
        component: FormSellersComponent,
        data: { title: 'ManagerSellerNewSal' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySellersRoutingModule {}
