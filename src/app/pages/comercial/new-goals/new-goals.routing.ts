import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewGoalsComponent } from './new-goals.component';
import { FormNewGoalComponent } from './form-new-goal/form-new-goal.component';
import { ListGoalsComponent } from './list-goals/list-goals.component';
import { GoalsResolve } from 'app/resolves/goals.resolve';
import { ProductListResolve } from 'app/resolves/productList.resolve';
import { ProfileListResolve } from 'app/resolves/profileList.resolve';

const routes: Routes = [
    {
        path: '',
        component: NewGoalsComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            {
                path: 'list',
                component: ListGoalsComponent,
                resolve: {
                    goals: GoalsResolve,
                    productList: ProductListResolve,
                    profileList: ProfileListResolve
                },
                data: {
                    title: 'ComercialNewGoalsTitlePag'
                }
            },
            {
                path: 'form',
                component: FormNewGoalComponent,
                resolve: {
                    productList: ProductListResolve,
                    profileList: ProfileListResolve
                },
                data: {
                    title: 'ComercialNewGoalsNewGoal'
                }
            },
            {
                path: ':id/update',
                component: FormNewGoalComponent,
                resolve: {
                    productList: ProductListResolve,
                    profileList: ProfileListResolve
                },
                data: {
                    title: 'edit-icon'
                }
            },
            {
                path: ':id/view',
                component: FormNewGoalComponent,
                resolve: {
                    productList: ProductListResolve,
                    profileList: ProfileListResolve
                },
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
export class NewGoalsRoutingModule { }

