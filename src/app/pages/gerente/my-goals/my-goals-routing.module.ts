import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormSellersGoalsComponent } from './form-sellers-goals/form-sellers-goals.component';
import { GoalsComponent } from './goals/goals.component';
import { ListGoalsComponent } from './list-goals/list-goals.component';
import { FormPersonalGoalsComponent } from './form-personal-goals/form-personal-goals.component';
import { MinhasMetasGerenteResolve } from 'app/resolves/minhas-metas-gerente.resolve';
import { LoadingUfResolve } from 'app/resolves/loadingUf.resolve';

const routes: Routes = [
  {
    path: '',
    component: GoalsComponent,
    children: [
      { path: '', redirectTo: 'list-goals', pathMatch: 'full' },
      {
        path: 'list-goals',
        component: ListGoalsComponent,
        resolve: {
          stores: MinhasMetasGerenteResolve,
          uf: LoadingUfResolve
        },
        data: { title: 'AggregTitleList' }
      },
      {
        path: 'form-personal-goals',
        component: FormPersonalGoalsComponent,
        data: {
          title: 'AggregMyGoals'
        }
      },
      { path: 'view-personal-goals/:id', component: FormPersonalGoalsComponent },
      { path: 'update-personal-goals/:id', component: FormPersonalGoalsComponent },
      {
        path: 'form-sellers-goals',
        component: FormSellersGoalsComponent,
        data: {
          title: 'AggregPartnGoals'
        }
      },
      { path: 'view-sellers-goals/:id', component: FormSellersGoalsComponent },
      {
        path: 'update-goals/:id/Pessoal',
        component: FormPersonalGoalsComponent,
        data: {
          title: 'Editar meta pessoal'
        }
      },
      {
        path: 'update-goals/:id/Vendedor',
        component: FormSellersGoalsComponent,
        data: {
          title: 'Editar meta vendedor'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyGoalsRoutingModule { }
