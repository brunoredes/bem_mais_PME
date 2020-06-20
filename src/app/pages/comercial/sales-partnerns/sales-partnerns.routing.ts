import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesPartnernsComponent } from './sales-partnerns.component';

const routes: Routes = [
    {
        path: '',
        component: SalesPartnernsComponent,
        data:{title:"ComercialSalesPartnersTitle"}
    },
    {
        path: 'edit',
        loadChildren: () => import('./edit/edit.module').then(m => m.EditSalesModule)
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalesPartnersRoutingModule { }

