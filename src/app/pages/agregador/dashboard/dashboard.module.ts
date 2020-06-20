import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatNativeDateModule, MatPaginatorModule, MatRadioModule, MatSelectModule, MatSortModule,
  MatTabsModule } from '@angular/material';
import { TitleModule } from 'app/core/components/title/title.module';
import { SharedModule } from 'app/pages/shared.module';
import { CancellationsComponent } from './cancellations/cancellations.component';
import { CommisionComponent } from './commision/commision.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { GoalsComponent } from './goals/goals.component';
import { SalesComponent } from './sales/sales.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


@NgModule({
  declarations: [
    SalesComponent,
    CancellationsComponent,
    CommisionComponent,
    GoalsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    PerfectScrollbarModule,
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSortModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    TitleModule
  ]
})
export class DashboardModule {}
