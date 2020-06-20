import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ViewPartnersComponent } from './view-partners.component';

const routes: Routes = [
    {
        path: ':id',
        component: ViewPartnersComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewPartnersRoutingModule { }

