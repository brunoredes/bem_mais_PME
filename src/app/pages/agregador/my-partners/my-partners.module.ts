import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxLoadingModule } from 'ngx-loading';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, MatDatepickerModule, MatFormFieldModule,
    MatCheckboxModule, MatInputModule, MatNativeDateModule, MatButtonModule,
    MatSelectModule, MatTabsModule, MatSortModule, MatRadioModule, MatStepperModule,
    MatIconModule, MatTableModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OwlModule } from 'ngx-owl-carousel';
import { MyPartnersRoutingModule } from './my-partners-routing.module';
import { ListPartnersComponent } from './list-partners/list-partners.component';
import { FormPartnerComponent } from './form-partner/form-partner.component';
import { MyPartnersComponent } from './my-partners.component';
import { DetailsComponent } from './details/details.component';
import { ReportComponent } from './report/report.component';
import { SharedModule } from 'app/pages/shared.module';
import { InputImageModule } from 'app/shared/input-image/input-image.module';
import { RouterModule } from '@angular/router';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  declarations: [
    ListPartnersComponent,
    FormPartnerComponent,
    MyPartnersComponent,
    DetailsComponent,
    ReportComponent,
  ],
  imports: [CommonModule,
    CommonModule,
    TitleModule,
    OwlModule,
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
    MyPartnersRoutingModule,
    SharedModule,
    InputImageModule,
    RouterModule
  ]
})
export class MyPartnersModule {}
