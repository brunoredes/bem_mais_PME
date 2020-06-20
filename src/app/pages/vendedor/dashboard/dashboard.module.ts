import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { VendasComponent } from './vendas/vendas.component';
import { CancelamentoComponent } from './cancelamento/cancelamento.component';
import { MetasComponent } from './metas/metas.component';
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
    MatIconModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyPerformanceComponent } from 'app/shared/charts/sales/my-performance/my-performance.component';
import { SalesAmountComponent } from 'app/shared/charts/sales/sales-amount/sales-amount.component';
import { InsuranceSalesComponent } from 'app/shared/charts/sales/insurance-sales/insurance-sales.component';
import { SalesCategoryComponent } from 'app/shared/charts/sales/sales-category/sales-category.component';
import { OrderComponent } from 'app/shared/charts/sales/order/order.component';
import { NumberCancellationsComponent } from 'app/shared/charts/cancellations/number-cancellations/number-cancellations.component';
import { CancellationsSafeComponent } from 'app/shared/charts/cancellations/cancellations-safe/cancellations-safe.component';
import { CancellationsProductComponent } from 'app/shared/charts/cancellations/cancellations-product/cancellations-product.component';
import { AchievementGoalsComponent } from 'app/shared/charts/goals/achievement-goals/achievement-goals.component';
import { GoalsBeatsComponent } from 'app/shared/charts/goals/goals-beats/goals-beats.component';
import { GoalsSafeComponent } from 'app/shared/charts/goals/goals-safe/goals-safe.component';
import { GoalsCategoryComponent } from 'app/shared/charts/goals/goals-category/goals-category.component';
import { ComparativeSalesComponent } from 'app/shared/charts/goals/comparative-sales/comparative-sales.component';
import { SuggestionsGoalsComponent } from 'app/shared/charts/goals/suggestions-goals/suggestions-goals.component';
import { BestMonthComponent } from 'app/shared/charts/goals/best-month/best-month.component';
import { NgxLoadingModule } from 'ngx-loading';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';
import { DashboardComponent } from './dashboard.component';
import { DashRoutingModule } from './dashboard.routing';
import { SharedModule } from 'app/pages/shared.module';
import { TitleModule } from 'app/core/components/title/title.module';

@NgModule({
    declarations: [
        VendasComponent,
        CancelamentoComponent,
        MetasComponent,
        DashboardComponent
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
        PerfectScrollbarModule,
        MatTabsModule,
        MatSortModule,
        CommonModule,
        TranslateModule,
        TranslateModule,
        NgxLoadingModule.forRoot({}),
        ReactiveFormsModule,
        TextMaskModule,
        NgxMaskModule,
        DashRoutingModule,
        TitleModule
    ],

})
export class DashboardModule { }
