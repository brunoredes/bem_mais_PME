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
import { EditSalesComponent } from './edit.component';
import { EditSalesRoutingModule } from './edit.routing';

@NgModule({
    declarations: [
        EditSalesComponent,
    ],
    imports: [
        EditSalesRoutingModule,
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
        MatTableModule

    ],

})
export class EditSalesModule { }
