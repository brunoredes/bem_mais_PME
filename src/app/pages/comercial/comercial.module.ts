import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ComercialRouting} from './comercial.routing';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [
        RouterModule.forChild(ComercialRouting),
        SharedModule
    ],
    declarations: [],
    providers: []
})

export class ComercialModule { }
