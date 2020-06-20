import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreManagerRoutingModule } from './store-manager-routing.module';
import { ListStoreManagerComponent } from './list-store-manager/list-store-manager.component';
import { FormStoreManagerComponent } from './form-store-manager/form-store-manager.component';
import { StoreManagerComponent } from './store-manager.component';
import {
  MatPaginatorModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule,
  MatNativeDateModule,
  MatButtonModule,
  MatSelectModule,
  MatTabsModule,
  MatSortModule,
  MatRadioModule,
  MatStepperModule,
  MatIconModule,
  MatTableModule,
  MatProgressBarModule
} from '@angular/material';
import { SharedModule } from 'app/pages/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  declarations: [
    ListStoreManagerComponent,
    FormStoreManagerComponent,
    StoreManagerComponent
  ],
  imports: [
    CommonModule,
    StoreManagerRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
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
export class StoreManagerModule {}
