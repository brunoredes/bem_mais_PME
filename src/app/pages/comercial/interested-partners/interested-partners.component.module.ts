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
import { TranslateModule } from '@ngx-translate/core';
import { TextMaskModule } from 'angular2-text-mask';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxLoadingModule } from 'ngx-loading';
import { NgxMaskModule } from 'ngx-mask';
import { OwlModule } from 'ngx-owl-carousel';
import { InterestedPartnersComponent } from './interested-partners.component';
import { InterestedPartnersRoutingModule } from './interested-partners.component.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/pages/shared.module';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  declarations: [InterestedPartnersComponent],
  imports: [
    InterestedPartnersRoutingModule,
    CommonModule,
    TitleModule,
    OwlModule,
    FormsModule,
    SharedModule,
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
    RouterModule
  ]
})
export class IntrestedPatersModule {}
