import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxLoadingModule } from 'ngx-loading';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, MatDatepickerModule, MatFormFieldModule, MatCheckboxModule,
    MatInputModule, MatNativeDateModule, MatButtonModule, MatSelectModule, MatTabsModule,
    MatSortModule, MatRadioModule, MatTooltipModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';
import { SelectComponent } from './select.component';
import { SelectRoutingModule } from './select.routing';
import { CardModule } from 'ngx-card/ngx-card';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
    declarations: [
        SelectComponent,
        // ProductComponent,
        // TimelineComponent,
        // PayComponent,
        // FinishComponent,
        // SelectComponent,
        // RegisterClientComponent,
        // SafeComponent,
    ],
    imports: [
        SelectRoutingModule,
        TitleModule,
        CommonModule,
        TranslateModule,
        NgxLoadingModule.forRoot({}),
        FormsModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        MatTooltipModule,
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
        CardModule

    ],

})
export class SelectModule { }
