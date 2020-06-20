import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterestedPartnersComponent } from './interested-partners.component';

const routes: Routes = [
    {
        path: '',
        component: InterestedPartnersComponent,
        data:{title:"ComercialInterestedPartnersTitle"}
    },
    {
        path: 'view',
        loadChildren: () => import('./view-partners/view-partners.module').then(m => m.ViewPatersModule)
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InterestedPartnersRoutingModule { }

