import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPolicyResolve } from 'app/resolves/detailsPolicy.resolve';
import { PolicyComponent } from './policy.component';

const routes: Routes = [
    {
        path: '',
        component: PolicyComponent,
        data: {
            title: 'vend-consultavendas-title'
        }
    },
    {
        path: 'details',
        resolve: {
            details: DetailsPolicyResolve
        },
        loadChildren: () => import('./policy-details/policy-datails.module').then(m => m.PolicyDatailsModule)
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PolicyRoutingModule { }

