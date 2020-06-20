import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesComponent } from './sales/sales.component';
import { CancelComponent } from './cancel/cancel.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { GoalsComponent } from './goals/goals.component';
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
    SalesComponent,
    CancelComponent,
    CommissionsComponent,
    GoalsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PerfectScrollbarModule,
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
    MatTabsModule,
    MatSortModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
    TitleModule
  ]
})
export class DashboardModule { }
