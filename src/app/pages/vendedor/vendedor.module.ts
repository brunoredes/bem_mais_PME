import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VendedorRouting } from './vendedor.routing';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [
        RouterModule.forChild(VendedorRouting),
        SharedModule
    ],
    declarations: [
    ],
    providers: []
})

export class DashboardModule { }
