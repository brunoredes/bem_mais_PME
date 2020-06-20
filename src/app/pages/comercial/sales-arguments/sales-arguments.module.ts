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
  MatStepperModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TextMaskModule } from 'angular2-text-mask';
import { SharedModule } from 'app/pages/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxLoadingModule } from 'ngx-loading';
import { NgxMaskModule } from 'ngx-mask';
import { OwlModule } from 'ngx-owl-carousel';
import { FormNewArgumentsComponent } from './form-new-arguments/form-new-arguments.component';
import { ListArgumentsComponent } from './list-arguments/list-arguments.component';
import { SalesArgumentsComponent } from './sales-arguments.component';
import { SalesArgumentsRoutingModule } from './sales-arguments.routing';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  declarations: [
    SalesArgumentsComponent,
    FormNewArgumentsComponent,
    ListArgumentsComponent
  ],
  imports: [
    SalesArgumentsRoutingModule,
    CommonModule,
    OwlModule,
    TitleModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
    ReactiveFormsModule,
    MatStepperModule,
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
    SharedModule,
    RouterModule
  ]
})
export class SalesArgumentsModule {}
