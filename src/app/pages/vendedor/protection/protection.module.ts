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
import { ProtectionComponent } from './protection.component';
import { ProtectionRoutingModule } from './protection.routing';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
    declarations: [
        ProtectionComponent,

        // ProductComponent,
        // TimelineComponent,
        // PayComponent,
        // FinishComponent,
        // SelectComponent,
        // RegisterClientComponent,
        // SafeComponent,

    ],
    imports: [
        ProtectionRoutingModule,
        TitleModule,
        CommonModule,
        TranslateModule,
        NgxLoadingModule.forRoot({}),
        FormsModule,
        MatTooltipModule,
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

    ],

})
export class ProtectionModule { }
