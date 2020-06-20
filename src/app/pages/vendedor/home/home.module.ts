import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    TranslateModule,
    PerfectScrollbarModule,
    TitleModule
  ]
})
export class HomeModule {}
