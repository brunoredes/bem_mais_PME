import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxLoadingModule } from 'ngx-loading';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, MatDatepickerModule, MatFormFieldModule, MatCheckboxModule,
    MatInputModule, MatNativeDateModule, MatButtonModule, MatSelectModule, MatTabsModule,
    MatSortModule, MatRadioModule, MatStepperModule, MatIconModule, MatTableModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OwlModule } from 'ngx-owl-carousel';
import { SalesPartnernsComponent } from './sales-partnerns.component';
import { SalesPartnersRoutingModule } from './sales-partnerns.routing';
import { SharedModule } from 'app/pages/shared.module';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
    declarations: [
        SalesPartnernsComponent,
    ],
    imports: [
        SalesPartnersRoutingModule,
        TitleModule,
        CommonModule,
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
        MatTableModule

    ],

})
export class SalesPatersModule { }
