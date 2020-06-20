import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySellersRoutingModule } from './my-sellers-routing.module';
import { SellersComponent } from './sellers/sellers.component';
import { ListSellersComponent } from './list-sellers/list-sellers.component';
import { FormSellersComponent } from './form-sellers/form-sellers.component';
import { SharedModule } from 'app/pages/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatSelectModule,
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
  MatProgressBarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  declarations: [SellersComponent, ListSellersComponent, FormSellersComponent],
  imports: [
    CommonModule,
    MySellersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
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
    TranslateModule,
    RouterModule,
    TitleModule
  ]
})
export class MySellersModule {}
