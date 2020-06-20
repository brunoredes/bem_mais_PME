import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ProductsComponent } from './products.component';
import { MasterDealerProductResolve } from 'app/resolves/master-dealer-product.resolve';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: ListProductsComponent,
        resolve: {
          values: MasterDealerProductResolve
        },
        data: { title: 'MasterDealerProductsList' }
      },
      {
        path: 'create',
        component: FormProductComponent,
        resolve: {
          values: MasterDealerProductResolve
        },
        data: { title: 'MasterDealerNewProduct' }
      },
      {
        path: ':id/update',
        component: FormProductComponent,
        data: { title: 'MasterDealerNewProduct' }
      },
      {
        path: ':id/view',
        component: FormProductComponent,
        data: { title: 'MasterDealerNewProduct' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
