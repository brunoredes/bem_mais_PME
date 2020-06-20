import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListGoalsComponent } from './list-goals/list-goals.component';
import { FormPersonalGoalComponent } from './form-personal-goal/form-personal-goal.component';
import { FormPartnerGoalComponent } from './form-partner-goal/form-partner-goal.component';
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
          title: 'AggregTitleList'
        }
      },

      {
        path: 'create-personal-goal',
        component: FormPersonalGoalComponent,
        data: {
          title: 'AggregMyGoals'
        }
      },
      {
        path: ':goalId/update-personal-goal',
        component: FormPersonalGoalComponent,
        data: {
          title: 'Atualizar metas'
        }
      },

      {
        path: 'create-partner-goal',
        component: FormPartnerGoalComponent,
        data: {
          title: 'AggregPartnGoals'
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
