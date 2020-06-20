import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxLoadingModule } from 'ngx-loading';
import { FaqComponent } from './faq.component';
import { FaqRoutingModule } from './faq.routing';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    FaqRoutingModule,
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({}),
    Ng2SearchPipeModule
  ],

})
export class FaqModule { }
