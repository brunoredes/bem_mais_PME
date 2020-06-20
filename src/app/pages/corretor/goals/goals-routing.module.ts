import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListGoalsComponent } from './list-goals/list-goals.component';
import { FormGoalComponent } from './form-goal/form-goal.component';
import { GoalsComponent } from './goals.component';

const routes: Routes = [
  {
    path: '',
    component: GoalsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: ListGoalsComponent,
        data: {
          title: 'metasTitle'
        }
      },

      {
        path: 'create-personal-goal',
        component: FormGoalComponent,
        data: {
          title: 'personalGoalsTitle'
        }
      },
      {
        path: ':id/uptade-personal-goal',
        component: FormGoalComponent,
        data: {
          title: 'Atualizar metas'
        }
      },
      {
        path: ':id/view-personal-goal',
        component: FormGoalComponent
      },
      {
        path: 'create-partner-goal',
        component: FormGoalComponent,
        data: {
          title: 'partnerGoalsTitle'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }
