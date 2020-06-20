import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSortModule,
  MatTabsModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/pages/shared.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ExtractsComponent } from './extracts/extracts.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { PaymentsComponent } from './payments/payments.component';
import { SalesComponent } from './sales/sales.component';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  declarations: [
    SalesComponent,
    PaymentsComponent,
    InsuranceComponent,
    DashboardComponent,
    ExtractsComponent
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
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSortModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TitleModule
  ]
})
export class DashboardModule {}
