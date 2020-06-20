import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxLoadingModule } from 'ngx-loading';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, MatSelectModule, MatCheckboxModule, MatTooltipModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';
import { ProductComponent } from '../product/product.component';
import { TimelineComponent } from './timeline.component';
import { PayComponent } from '../pay/pay.component';
import { FinishComponent } from '../finish/finish.component';
import { RegisterClientComponent } from '../register-client/register-client.component';
import { SafeComponent } from '../safe/safe.component';
import { TimelineRoutingModule } from './timeline.routing';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { CardModule } from 'ngx-card';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
    declarations: [
        ProductComponent,
        TimelineComponent,
        PayComponent,
        FinishComponent,
        RegisterClientComponent,
        SafeComponent,
    ],
    imports: [
        PerfectScrollbarModule,
        TimelineRoutingModule,
        CommonModule,
        TranslateModule,
        MatTooltipModule,
        NgxLoadingModule.forRoot({}),
        FormsModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        TextMaskModule,
        NgxMaskModule,
        MatRadioModule,
        MatIconModule,
        MatStepperModule,
        CardModule,
        MatSelectModule,
        MatCheckboxModule 
        
    ],

})
export class TimelineModule { }
