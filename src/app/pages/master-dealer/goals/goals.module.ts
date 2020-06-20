import { NgModule } from '@angular/core';

import { GoalsComponent } from './goals.component';
import { GoalsRoutingModule } from './goals-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/pages/shared.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {
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
  MatRadioModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  imports: [
    CommonModule,
    GoalsRoutingModule,
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
  ],
  declarations: [GoalsComponent]
})
export class GoalsModule {}
