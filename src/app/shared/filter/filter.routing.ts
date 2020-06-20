import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FilterComponent } from './filter.component';

const routes: Routes = [
    {
        path: '',
        component: FilterComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FilterRoutingModule { }

