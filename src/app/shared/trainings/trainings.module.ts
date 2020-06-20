import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxLoadingModule } from 'ngx-loading';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, MatDatepickerModule,
    MatFormFieldModule, MatCheckboxModule,
    MatInputModule, MatNativeDateModule, MatButtonModule, MatSelectModule, MatTabsModule,
    MatSortModule, MatRadioModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TrainingsComponent } from './trainings.component';
import { TrainingsRoutingModule } from './trainings.routing';
import { EstatisticaComponent } from './estatistica/estatistica.component';
import { OwlModule } from 'ngx-owl-carousel';
import { MaterialComponent } from './material/material.component';
import { NewTrainingsComponent } from './new-trainings/new-trainings.component';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
    declarations: [
        TrainingsComponent,
        EstatisticaComponent,
        MaterialComponent,
        NewTrainingsComponent,
    ],
    imports: [
        TrainingsRoutingModule,
        CommonModule,
        TranslateModule,
        NgxLoadingModule.forRoot({}),
        FormsModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        MatTooltipModule,
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
        OwlModule,
        MatIconModule,
        TitleModule
    ],

})
export class TrainingsnModule { }
