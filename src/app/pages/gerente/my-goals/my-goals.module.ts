import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core'
import { MyGoalsRoutingModule } from './my-goals-routing.module';
import { GoalsComponent } from './goals/goals.component';
import { ListGoalsComponent } from './list-goals/list-goals.component';
import { FormPersonalGoalsComponent } from './form-personal-goals/form-personal-goals.component';
import { FormSellersGoalsComponent } from './form-sellers-goals/form-sellers-goals.component';
import { SharedModule } from 'app/pages/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatFormFieldModule, MatSelectModule, MatPaginatorModule,
  MatCheckboxModule, MatInputModule, MatNativeDateModule, MatButtonModule, MatTabsModule,
  MatSortModule, MatRadioModule, MatStepperModule, MatIconModule, MatTableModule, MatProgressBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  declarations: [
    GoalsComponent,
    ListGoalsComponent,
    FormPersonalGoalsComponent,
    FormSellersGoalsComponent
  ],
  imports: [
    CommonModule,
    MyGoalsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    SharedModule,
    TranslateModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTabsModule,
    MatSortModule,
    MatRadioModule,
    MatStepperModule,
    MatIconModule,
    MatTableModule,
    MatProgressBarModule,
    RouterModule,
    TitleModule
  ]
})
export class MyGoalsModule { }
