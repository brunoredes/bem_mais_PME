import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'ngx-owl-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { ChartsModule } from 'ng2-charts';
import { CardModule } from 'ngx-card/ngx-card';
import { NgxMaskModule } from 'ngx-mask';
import { NgxLoadingModule } from 'ngx-loading';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { TranslateModule } from '@ngx-translate/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule, MatFormFieldModule, MatCheckboxModule, MatInputModule,
    MatNativeDateModule, MatButtonModule, MatSelectModule, MatPaginatorModule, MatTabsModule,
    MatSortModule, MatProgressBarModule, MatTooltipModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask'
import { FormsComponent } from 'app/shared/forms/forms.component'
import { SelfServiceComponent } from './vendedor/self-service/self-service.component'
import { NextPreviusComponent } from 'app/shared/next-previus/next-previus.component'
import { MatTableModule } from '@angular/material/table'
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
import { BarLineChartComponent } from 'app/shared/charts/bar-line-chart/bar-line-chart.component';
import { PieChartComponent } from 'app/shared/charts/pie-chart/pie-chart.component';
import { TableComponent } from 'app/shared/table/table/table.component';
import { ChartLargeComponent } from 'app/shared/charts/chart-large/chart-large.component';
import { ChartSmallComponent } from 'app/shared/charts/chart-small/chart-small.component';
import { OrdersDashboardComponent } from 'app/shared/orders-dashboard/orders-dashboard.component';
import { CarouselComponent } from 'app/shared/charts/carousel/carousel.component';
import { DualChartLargeComponent } from 'app/shared/charts/dual-chart-large/dual-chart-large.component';
import { ChartInfoComponent } from 'app/shared/charts/chart-info/chart-info.component';
import { ExtractsComponent } from './agregador/dashboard/extracts/extracts.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ChartsModule,
        CardModule,
        FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
        OwlModule,
        FormsModule,
        NgxLoadingModule.forRoot({}),
        ReactiveFormsModule,
        MatStepperModule,
        MatIconModule,
        MatTooltipModule,
        NgxMaskModule,
        MatCheckboxModule,
        Ng2SearchPipeModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        PerfectScrollbarModule,
        MatNativeDateModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        TextMaskModule,
        TranslateModule,
        MatPaginatorModule,
        MatTabsModule,
        MatSortModule,
        MatTableModule,
        MatProgressBarModule
    ],
    declarations: [
        ExtractsComponent,
        // FilterComponent,
        SelfServiceComponent,
        NextPreviusComponent,
        FormsComponent,
        MyPerformanceComponent,
        SalesAmountComponent,
        InsuranceSalesComponent,
        SalesCategoryComponent,
        OrderComponent,
        NumberCancellationsComponent,
        CancellationsSafeComponent,
        CancellationsProductComponent,
        AchievementGoalsComponent,
        GoalsBeatsComponent,
        GoalsSafeComponent,
        GoalsCategoryComponent,
        ComparativeSalesComponent,
        SuggestionsGoalsComponent,
        BestMonthComponent,
        BarLineChartComponent,
        PieChartComponent,
        TableComponent,
        ChartLargeComponent,
        ChartSmallComponent,
        OrdersDashboardComponent,
        CarouselComponent,
        DualChartLargeComponent,
        ChartInfoComponent
    ],
    exports: [
        ExtractsComponent,
        // FilterComponent,
        SelfServiceComponent,
        NextPreviusComponent,
        FormsComponent,
        TranslateModule,
        MyPerformanceComponent,
        SalesAmountComponent,
        InsuranceSalesComponent,
        SalesCategoryComponent,
        OrderComponent,
        NumberCancellationsComponent,
        CancellationsSafeComponent,
        CancellationsProductComponent,
        AchievementGoalsComponent,
        GoalsBeatsComponent,
        GoalsSafeComponent,
        GoalsCategoryComponent,
        ComparativeSalesComponent,
        SuggestionsGoalsComponent,
        BestMonthComponent,
        BarLineChartComponent,
        PieChartComponent,
        TableComponent,
        ChartLargeComponent,
        ChartSmallComponent,
        OrdersDashboardComponent,
        CarouselComponent,
        DualChartLargeComponent,
        ChartInfoComponent
    ],
    providers: []

})

export class SharedModule { }
