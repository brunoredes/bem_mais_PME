import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { MaterialComponent } from './material/material.component';
import { StatisticComponent } from './statistic/statistic.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingComponent,
    children: [
      { path: '', redirectTo: 'material', pathMatch: 'full' },
      { path: 'material', component: MaterialComponent },
      { path: 'statistic', component: StatisticComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule {}
