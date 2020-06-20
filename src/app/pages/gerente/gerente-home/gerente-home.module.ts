import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { GerenteHomeRoutingModule } from './gerente-home-routing.module';
import { GerenteHomeComponent } from './gerente-home.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [GerenteHomeComponent],
  imports: [
    CommonModule,
    TranslateModule,
    PerfectScrollbarModule,
    GerenteHomeRoutingModule
  ]
})
export class GerenteHomeModule { }
