import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxLoadingModule } from 'ngx-loading';
import {
  MatPaginatorModule, MatDatepickerModule, MatFormFieldModule, MatCheckboxModule,
  MatInputModule, MatNativeDateModule, MatButtonModule, MatSelectModule, MatTabsModule,
  MatSortModule, MatRadioModule, MatStepperModule, MatIconModule, MatTableModule
} from '@angular/material';
import { PolicyDetailsComponent } from './policy-details.component';
import { PolicyDetailsRoutingModule } from './policy-datails.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleModule } from 'app/core/components/title/title.module';


@NgModule({
  declarations: [PolicyDetailsComponent],
  imports: [
    PolicyDetailsRoutingModule,
    CommonModule,
    TranslateModule,
    NgxLoadingModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
        MatFormFieldModule,
        TitleModule,
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
  ],

})
export class PolicyDatailsModule { }
