import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSelectModule, MatSortModule,
  MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TextMaskModule } from 'angular2-text-mask';
import { SharedModule } from 'app/pages/shared.module';
import { NgxLoadingModule } from 'ngx-loading';
import { NgxMaskModule } from 'ngx-mask';
import { OwlModule } from 'ngx-owl-carousel';
import { CanceladosComponent } from './cancelados/cancelados.component';
import { DashboardComercialComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { SinistradosComponent } from './sinistrados/sinistrados.component';
import { VendasComercialComponent } from './vendas-comercial/vendas-comercial.component';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  declarations: [
    SinistradosComponent,
    VendasComercialComponent,
    CanceladosComponent,
    DashboardComercialComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSortModule,
    CommonModule,
    TranslateModule,
    NgxLoadingModule.forRoot({}),
    ReactiveFormsModule,
    TextMaskModule,
    NgxMaskModule,
    OwlModule,
    DashboardRoutingModule,
    RouterModule,
    TitleModule
  ]
})
export class DashboardModule {}
