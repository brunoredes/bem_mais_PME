import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PolicyDetailsComponent } from './policy-details.component';

const routes: Routes = [
    {
        path: '',
        component: PolicyDetailsComponent,
        data: {
            title: 'vend-consultavendas-details'
        }
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PolicyDetailsRoutingModule { }

