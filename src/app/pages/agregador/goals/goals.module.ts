import { TranslateModule } from '@ngx-translate/core';
import { NgxLoadingModule } from 'ngx-loading';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatPaginatorModule, MatDatepickerModule, MatFormFieldModule,
  MatCheckboxModule, MatInputModule, MatNativeDateModule, MatButtonModule,
  MatSelectModule, MatTabsModule, MatSortModule, MatRadioModule, MatStepperModule,
  MatIconModule, MatTableModule, MatProgressBarModule
} from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OwlModule } from 'ngx-owl-carousel';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormPartnerGoalComponent } from './form-partner-goal/form-partner-goal.component';
import { FormPersonalGoalComponent } from './form-personal-goal/form-personal-goal.component';
import { GoalsRoutingModule } from './goals-routing.module';
import { ListGoalsComponent } from './list-goals/list-goals.component';
import { GoalsComponent } from './goals.component';
import { SharedModule } from 'app/pages/shared.module';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  declarations: [
    ListGoalsComponent,
    FormPersonalGoalComponent,
    FormPartnerGoalComponent,
    GoalsComponent
  ],
  imports: [CommonModule, GoalsRoutingModule,
    CommonModule,
    SharedModule,
    OwlModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
    ReactiveFormsModule,
    MatStepperModule,
    MatProgressBarModule,
    MatIconModule,
    NgxMaskModule.forRoot(),
    MatCheckboxModule,
    Ng2SearchPipeModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    TextMaskModule,
    TranslateModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSortModule,
    MatTableModule,
    TitleModule
  ]
})
export class GoalsModule { }
