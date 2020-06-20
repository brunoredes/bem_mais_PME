import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterRoutingModule } from './filter.routing';
import { FilterComponent } from './filter.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatDatepickerModule, MatFormFieldModule, MatCheckboxModule, MatInputModule,
  MatNativeDateModule, MatButtonModule, MatSelectModule, MatPaginatorModule, MatTabsModule,
  MatSortModule, MatRadioModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [FilterComponent],
  imports: [
    CommonModule,
    FilterRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSortModule,
    MatRadioModule,
    MatTableModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({})
  ]
})
export class FilterModule { }
