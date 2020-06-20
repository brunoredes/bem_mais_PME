import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SalesArgumentsComponent } from './sales-arguments.component';
import { FormNewArgumentsComponent } from './form-new-arguments/form-new-arguments.component';
import { ListArgumentsComponent } from './list-arguments/list-arguments.component';
import { InsuranceListResolve } from 'app/resolves/insurance-list.resolve';
import { ArgumentSalesResolve } from 'app/resolves/argument-sales.resolve';

const routes: Routes = [
    {
        path: '',
        component: SalesArgumentsComponent,
        
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            {
                path: 'list',
                component: ListArgumentsComponent,
                resolve: {
                    insuranceList: InsuranceListResolve,
                    argumentSales: ArgumentSalesResolve,

                },
                data:{title:"ComercialSalesArgumentsTitle"},
            },
            { 
                path: 'form', 
                component: FormNewArgumentsComponent,
                resolve: {
                    insuranceList: InsuranceListResolve,
                },
                data: {
                    title: 'ComercialSalesArgumentsCreateArg',
                }
             },
            { 
                path: ':id/update', 
                component: FormNewArgumentsComponent,
                data: {
                    title: 'edit-icon'
                }
            },
            { 
                path: ':id/view', 
                component: FormNewArgumentsComponent,
                data: {
                    title: 'view-icon'
                }
            }

        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalesArgumentsRoutingModule { }

{}