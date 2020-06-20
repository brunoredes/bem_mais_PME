import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training/training.component';
import { MaterialComponent } from './material/material.component';
import { StatisticComponent } from './statistic/statistic.component';

@NgModule({
  declarations: [TrainingComponent, MaterialComponent, StatisticComponent],
  imports: [CommonModule, TrainingRoutingModule]
})
export class TrainingModule {}
