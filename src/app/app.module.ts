import { AgmCoreModule } from '@agm/core';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UserIdleModule } from 'angular-user-idle';
import { LoadingConfig } from 'environments/loading.config';
import 'hammerjs';
import { SidebarModule } from 'ng-sidebar';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { ToastrModule } from 'ngx-toastr';
import { TourNgBootstrapModule } from 'ngx-tour-ng-bootstrap';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { RoutingModule } from './app-routing.module';
import { ChankyaAppComponent } from './app.component';
import { NgxMaskModule } from 'ngx-mask';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
/********** Custom option for ngx-translate ******/
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CdkTableModule,
        SidebarModule.forRoot(),
        MatTooltipModule,
        RoutingModule,
        RouterModule,
        TourNgBootstrapModule.forRoot(),
        NgbModalModule.forRoot(),
        AgmCoreModule.forRoot({ apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk' }),
        PerfectScrollbarModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        ToastrModule.forRoot({
            timeOut: 2000,
            preventDuplicates: true
        }),
        UserIdleModule.forRoot({idle: 300, timeout: 1, ping: 120}),
        NgxUiLoaderModule.forRoot(
          LoadingConfig
        ),
        NgxUiLoaderRouterModule,
        NgxUiLoaderHttpModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [
        ChankyaAppComponent
    ],
    bootstrap: [ChankyaAppComponent],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class ChankyaAppModule { }
