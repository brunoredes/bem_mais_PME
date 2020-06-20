import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyStoresRoutingModule } from './my-stores-routing.module';
import { FormStoreComponent } from './form-store/form-store.component';
import { ListStoresComponent } from './list-stores/list-stores.component';
import { MyStoresComponent } from './my-stores.component';
import {
  MatFormFieldModule,
  MatStepperModule,
  MatIconModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatPaginatorModule,
  MatTabsModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import { SharedModule } from 'app/pages/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TextMaskModule } from 'angular2-text-mask';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  imports: [
    CommonModule,
    MyStoresRoutingModule,
    MatFormFieldModule,
    SharedModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatIconModule,
    NgxMaskModule.forRoot(),
    MatCheckboxModule,
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
    RouterModule,
    TitleModule
  ],
  declarations: [FormStoreComponent, ListStoresComponent, MyStoresComponent]
})
export class MyStoresModule {}
