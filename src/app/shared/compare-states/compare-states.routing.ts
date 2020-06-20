import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CompareStatesComponent } from './compare-states.component';

const routes: Routes = [
    {
        path: '',
        component: CompareStatesComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompareStateRoutingModule { }

