import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatNativeDateModule, MatPaginatorModule, MatRadioModule, MatSelectModule,
  MatSortModule, MatStepperModule, MatTableModule, MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TextMaskModule } from 'angular2-text-mask';
import { SharedModule } from 'app/pages/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxLoadingModule } from 'ngx-loading';
import { NgxMaskModule } from 'ngx-mask';
import { OwlModule } from 'ngx-owl-carousel';
import { FormCampaignComponent } from './form-campaign/form-campaign.component';
import { ListCampaignComponent } from './list-campaign/list-campaign.component';
import { NewCampaignComponent } from './new-campaign.component';
import { NewCampaignRoutingModule } from './new-campaign.routing';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  declarations: [
    NewCampaignComponent,
    FormCampaignComponent,
    ListCampaignComponent
  ],
  imports: [
    NewCampaignRoutingModule,
    CommonModule,
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
    SharedModule,
    RouterModule,
    TitleModule
  ]
})
export class NewCampaignModule {}
