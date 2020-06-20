import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerformanceComponent } from './performance/performance.component';
import { CampaignsAndGoalsComponent } from './campaigns-and-goals/campaigns-and-goals.component';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from 'app/pages/shared.module';
import { MatFormFieldModule, MatDatepickerModule, MatCheckboxModule, MatInputModule,
  MatNativeDateModule, MatButtonModule, MatIconModule, MatSelectModule, MatPaginatorModule,
  MatTabsModule, MatSortModule, MatRadioModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TitleModule } from 'app/core/components/title/title.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [
    DashboardComponent,
    PerformanceComponent,
    CampaignsAndGoalsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    ChartsModule,
    SharedModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    PerfectScrollbarModule,
    MatTabsModule,
    MatSortModule,
    MatRadioModule,
    RouterModule,
    TitleModule
  ]
})
export class DashboardModule {}
