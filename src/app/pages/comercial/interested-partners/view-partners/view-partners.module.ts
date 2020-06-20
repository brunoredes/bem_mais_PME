import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxLoadingModule } from 'ngx-loading';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, MatDatepickerModule, MatFormFieldModule,
    MatCheckboxModule, MatInputModule, MatNativeDateModule, MatButtonModule,
    MatSelectModule, MatTabsModule, MatSortModule, MatRadioModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OwlModule } from 'ngx-owl-carousel';
import { ViewPartnersComponent } from './view-partners.component';
import { ViewPartnersRoutingModule } from './view-partners.routing';

@NgModule({
    declarations: [
        ViewPartnersComponent
    ],
    imports: [
        ViewPartnersRoutingModule,
        CommonModule,
        TranslateModule,
        NgxLoadingModule.forRoot({}),
        FormsModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        TextMaskModule,
        NgxMaskModule,
        Ng2SearchPipeModule,
        MatPaginatorModule,
        TextMaskModule,
        NgxMaskModule,
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
        OwlModule

    ],

})
export class ViewPatersModule { }
