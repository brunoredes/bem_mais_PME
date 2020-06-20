import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxLoadingModule } from 'ngx-loading';
import { HomeComercialRoutingModule } from './home-comercial.routing';
import { HomeComercialComponent } from './home-comercial.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, MatDatepickerModule, MatFormFieldModule, MatCheckboxModule,
    MatInputModule, MatNativeDateModule, MatButtonModule, MatSelectModule, MatTabsModule,
    MatSortModule, MatRadioModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OwlModule } from 'ngx-owl-carousel';
import { SharedModule } from 'app/pages/shared.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
    declarations: [HomeComercialComponent],
    imports: [
        HomeComercialRoutingModule,
        TitleModule,
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
        PerfectScrollbarModule,
        MatPaginatorModule,
        MatTabsModule,
        MatSortModule,
        MatRadioModule,
        OwlModule,
        SharedModule
    ],

})
export class HomeComercialModule { }
