import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { EditUserComponent } from './edit-user.component';
import { EditUserRoutingModule } from './edit-user.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatPaginatorModule, MatDatepickerModule, MatFormFieldModule, MatCheckboxModule,
    MatInputModule, MatNativeDateModule, MatButtonModule, MatSelectModule, MatTabsModule,
    MatSortModule, MatRadioModule, MatStepperModule, MatIconModule, MatTableModule
} from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';
import { NgxLoadingModule } from 'ngx-loading';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
    declarations: [EditUserComponent],
    imports: [
        EditUserRoutingModule,
        CommonModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMaskModule,
        TextMaskModule,
        NgxLoadingModule.forRoot({}),
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatPaginatorModule,
        MatTabsModule,
        MatSortModule,
        MatTableModule,
        MatIconModule,
        MatStepperModule,
        MatCheckboxModule,
        TextMaskModule,
        TranslateModule,
        TitleModule
    ],

})
export class EditUserModule { }
