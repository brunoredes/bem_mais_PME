import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EditSalesComponent } from './edit.component';

const routes: Routes = [
    {
        path: ':id',
        component: EditSalesComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditSalesRoutingModule { }

