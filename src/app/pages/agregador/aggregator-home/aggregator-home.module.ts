import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AggregatorHomeRoutingModule } from './aggregator-home-routing.module';
import { AggregatorHomeComponent } from './aggregator-home.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'app/pages/shared.module';

@NgModule({
    declarations: [AggregatorHomeComponent],
    imports: [
        CommonModule,
        AggregatorHomeRoutingModule,
        TranslateModule,
        SharedModule
    ]
})
export class AggregatorHomeModule { }
