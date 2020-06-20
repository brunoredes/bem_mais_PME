import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './campaign/campaign.component';
import { ListCampaignComponent } from './list-campaign/list-campaign.component';
import { FormCampaignComponent } from './form-campaign/form-campaign.component';
import {
    MatPaginatorModule, MatDatepickerModule, MatFormFieldModule,
    MatCheckboxModule, MatInputModule, MatNativeDateModule, MatButtonModule,
    MatSelectModule, MatTabsModule, MatSortModule, MatRadioModule, MatStepperModule,
    MatIconModule, MatTableModule, MatProgressBarModule
} from '@angular/material';
import { SharedModule } from 'app/pages/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
    declarations: [
        CampaignComponent,
        ListCampaignComponent,
        FormCampaignComponent,
    ],
    imports: [
        SharedModule,
        CommonModule,
        CampaignRoutingModule,
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
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        TitleModule
    ]
})
export class CampaignModule { }
