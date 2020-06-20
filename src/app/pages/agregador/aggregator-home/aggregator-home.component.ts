import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { UtilService } from 'app/helpers/utils';

@Component({
    templateUrl: './aggregator-home.component.html',
    styleUrls: ['./aggregator-home.component.scss']
})
export class AggregatorHomeComponent implements OnInit {

    cancellationSafeData: any = []
    cancellationSafeLabels: any = []
    cancellationSafeColor: any = []
    cancellationSafeOptions: any = []
    cancellationSafeType: any = []
    cancellationSafeExportId = 'cancellationSafeExport'
    cancellationSafeExportIconId = 'cancellationSafeIcon'
    cancellationSafeFilterDataId = 'cancellationSafeFilterData'
    cancellationSafeTitle: string

    cancellationCategoryData: any = []
    cancellationCategoryLabels: any = []
    cancellationCategoryColor: any = []
    cancellationCategoryOptions: any = []
    cancellationCategoryType: any = []
    cancellationCategoryExportId = 'cancellationCategoryExport'
    cancellationCategoryExportIconId = 'cancellationCategoryIcon'
    cancellationCategoryFilterDataId = 'cancellationCategoryFilterData'
    cancellationCategoryTitle: string

    salesSafeData: any = []
    salesSafeLabels: any = []
    salesSafeColor: any = []
    salesSafeOptions: any = []
    salesSafeType: any = []
    salesSafeExportId = 'salesSafeExport'
    salesSafeExportIconId = 'salesSafeIcon'
    salesSafeFilterDataId = 'salesSafeFilterData'
    salesSafeTitle: string

    salesCategoryData: any = []
    salesCategoryLabels: any = []
    salesCategoryColor: any = []
    salesCategoryOptions: any = []
    salesCategoryType: any = []
    salesCategoryExportId = 'salesCategoryExport'
    salesCategoryExportIconId = 'salesCategoryIcon'
    salesCategoryFilterDataId = 'salesCategoryFilterData'
    salesCategoryTitle: string

    amount: any
    days: any
    constructor(
        private activatedRoute: ActivatedRoute,
        private _adapter: DateAdapter<any>,
        private _translate: UtilService
    ) { }

    ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

        this._adapter.setLocale('br');

        window.addEventListener('resize', () => {
            this.loadingCompartivo();
            this.loadingCancellationSafe();
            this.loadingCancellationCategory();
            this.loadingSalesSafe();
            this.loadingSalesCategory();
        })

        this.activatedRoute.snapshot.data.comparativeSales.comparative.aggregators.forEach(element => {
            setTimeout(() => {
                document.getElementById(`position${element.position}`).style.width = `${element.percent}%`
            }, 10);
        });


        this.loadingCompartivo();
        this.loadingCancellationSafe();
        this.loadingCancellationCategory();
        this.loadingSalesSafe();
        this.loadingSalesCategory();
        this.amount = this.routeData().suggestions.goal.salesAmount;
        this.days = this.routeData().suggestions.goal.days;
        this.cancellationSafeTitle = this._translate.getCancellationSafeTitle(),
            this.cancellationCategoryTitle = this._translate.getCancellationCategoryTitle(),
            this.salesSafeTitle = this._translate.getSalesSafeTitle(),
            this.salesCategoryTitle = this._translate.getSalesCategoryTitle()

    }

    loadingCompartivo() {
        return this.routeData().comparativeSales.comparative.aggregators
    }

    loadingCancellationSafe() {
        const data = [], labels = []

        let fontSize = 12;
        let display = true;

        if (screen.width < 768) {
            display = false;
        } else if (screen.width < 1024) {
            fontSize = 10
        }

        this.cancellationSafeOptions = {
            responsive: true,
            aspectRatio: 0,
            legend: {
                display: display,
                labels: {
                    fontSize: fontSize
                }
            }
        };

        for (let i = 0; i < this.routeData().cancellationSafe.length; i++) {
            const element = this.routeData().cancellationSafe[i];
            data.push(element.value)
            labels.push(`${element.insurance}`)
        }
        this.cancellationSafeType = 'pie'

        this.cancellationSafeData = [
            {
                barThickness: 20,
                data: data
            }
        ]
        this.cancellationSafeLabels = labels
    }

    loadingCancellationCategory() {
        const data = [], labels = []

        let fontSize = 12;
        let display = true;

        if (screen.width < 768) {
            display = false;
        } else if (screen.width < 1024) {
            fontSize = 10
        }

        this.cancellationCategoryOptions = {
            responsive: true,
            aspectRatio: 0,
            legend: {
                display: display,
                labels: {
                    fontSize: fontSize
                }
            }
        };

        for (let i = 0; i < this.routeData().cancellationsProduct.length; i++) {
            const element = this.routeData().cancellationsProduct[i];
            data.push(element.value)
            labels.push(`${element.insurance}`)
        }
        this.cancellationCategoryType = 'pie'
        this.cancellationCategoryData = [
            {
                barThickness: 20,
                data: data
            }
        ]
        this.cancellationCategoryLabels = labels
    }

    loadingSalesSafe() {
        const data = [], labels = []

        let fontSize = 12;
        let display = true;

        if (screen.width < 768) {
            display = false;
        } else if (screen.width < 1024) {
            fontSize = 10
        }

        this.salesSafeOptions = {
            responsive: true,
            aspectRatio: 0,
            legend: {
                display: display,
                labels: {
                    fontSize: fontSize
                }
            }
        };

        for (let i = 0; i < this.routeData().SalesSafe.length; i++) {
            const element = this.routeData().SalesSafe[i];
            data.push(element.value)
            labels.push(`${element.insurance}`)
        }
        this.salesSafeType = 'pie'
        this.salesSafeData = [
            {
                barThickness: 20,
                data: data
            }
        ]
        this.salesSafeLabels = labels
    }

    loadingSalesCategory() {
        const data = [], labels = []

        let fontSize = 12;
        let display = true;

        if (screen.width < 768) {
            display = false;
        } else if (screen.width < 1024) {
            fontSize = 10
        }

        this.salesCategoryOptions = {
            responsive: true,
            aspectRatio: 0,
            legend: {
                display: display,
                labels: {
                    fontSize: fontSize
                }
            }
        };

        for (let i = 0; i < this.routeData().SalesCategory.length; i++) {
            const element = this.routeData().SalesCategory[i];
            data.push(element.value)
            labels.push(`${element.insurance}`)
        }
        this.salesCategoryType = 'pie'
        this.salesCategoryData = [
            {
                barThickness: 20,
                data: data
            }
        ]
        this.salesCategoryLabels = labels
    }

    cancellationSafeChangeDate(rangeDate: any) {
    }

    cancellationCategoryChangeDate(rangeDate: any) {
    }

    salesSafeChangeDate(rangeDate: any) {
    }

    salesCategoryChangeDate(rangeDate: any) {
    }

    private routeData = () => {
        return this.activatedRoute.snapshot.data
    }

    format = value => new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
}