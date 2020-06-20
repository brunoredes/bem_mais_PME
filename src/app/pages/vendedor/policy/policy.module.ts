import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxLoadingModule } from 'ngx-loading';
import { PolicyComponent } from './policy.component';
import { PolicyRoutingModule } from './policy.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatPaginatorModule, MatDatepickerModule, MatFormFieldModule,
  MatCheckboxModule, MatInputModule, MatNativeDateModule, MatButtonModule,
  MatIconModule, MatSelectModule, MatTabsModule, MatSortModule, MatRadioModule,
  MatTableModule, MatStepperModule
} from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'app/pages/shared.module';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  declarations: [PolicyComponent],
  imports: [
    PolicyRoutingModule,
    TitleModule,
    CommonModule,
    TranslateModule,
    NgxLoadingModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    TextMaskModule,
    NgxMaskModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatStepperModule,
    MatCheckboxModule,
    SharedModule
  ],

})
export class PolicyModule { }
