import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxLoadingModule } from 'ngx-loading';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback.component';
import { FeedbackRoutingModule } from './feedback.routing';
import { RegistryComponent } from './registry/registry.component';
import { ReplyComponent } from './reply/reply.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {
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
  MatTooltipModule
} from '@angular/material';
import {
  FroalaEditorModule,
  FroalaViewModule
} from 'angular-froala-wysiwyg';
import { NgxEditorModule } from 'ngx-editor';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
  declarations: [
    FeedbackComponent,
    RegistryComponent,
    ReplyComponent
  ],
  imports: [
    NgxEditorModule,
    TitleModule,
    FeedbackRoutingModule,
    CommonModule,
    TranslateModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({}),
    Ng2SearchPipeModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSortModule,
    MatRadioModule,
    FroalaEditorModule,
    FroalaViewModule
  ],

})
export class FeedbackModule { }
