import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { UtilService } from '../../../../helpers/utils'

@Component({
    templateUrl: './campaigns-and-goals.component.html',
    styleUrls: ['./campaigns-and-goals.component.scss']
})
export class CampaignsAndGoalsComponent implements OnInit {

    SalesGoalsType: any = []
    SalesGoalsOptions: any = []
    SalesGoalsData: any = []
    SalesGoalsLabels: any = []
    SalesGoalsColor: any = []
    SalesGoalsExportId = 'SalesGoalsExport'
    SalesGoalsExportIconId = 'SalesGoalsIcon'
    SalesGoalsFilterDataId = 'SalesGoalsFilterData'
    AggregatorDashSaleInsurGoal = 'AggregatorDashSaleInsurGoal'

    ProductGoalsType: any = []
    ProductGoalsOptions: any = []
    ProductGoalsData: any = []
    ProductGoalsLabels: any = []
    ProductGoalsColor: any = []
    ProductGoalsExportId = 'ProductGoalsExport'
    ProductGoalsExportIconId = 'ProductGoalsIcon'
    ProductGoalsFilterDataId = 'ProductGoalsFilterData'
    AggregatorDashGoalSaleCatProduct = 'AggregatorDashGoalSaleCatProduct'

    SalesComparisonType: any = []
    SalesComparisonOptions: any = []
    SalesComparisonData: any = []
    SalesComparisonLabels: any = []
    SalesComparisonColor: any = []

    amount: any
    days: any
    top: any
    constructor(
        private activatedRoute: ActivatedRoute,
        private _translate: UtilService,
        private _adapter: DateAdapter<any>
    ) { }

    ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
        this.AggregatorDashSaleInsurGoal = this._translate.getAggregatorDashSaleInsurGoal();
        this.AggregatorDashGoalSaleCatProduct = this._translate.getAggregatorDashGoalSaleCatProduct();
        this._adapter.setLocale('br');
        this.loadingSalesGoals()
        this.loadingProductGoals()
        this.loadingSalesComparison()
        this.amount = this.activatedRoute.snapshot.data.suggestions.goal.salesAmount
        this.days = this.activatedRoute.snapshot.data.suggestions.goal.days
        this.top = this.activatedRoute.snapshot.data.melhores.vendors
        setTimeout(() => {
            for (let i = 0; i < this.top.length; i++) {
                const element = this.top[i];

                const div = document.getElementById(`top${element.id}`)
                div.style.width = `${element.percent}%`
            }
        }, 10);
    }

    // Metas de Vendas por Seguros
    loadingSalesGoals() {
        const data = [], labels = []
        for (let i = 0; i < this.activatedRoute.snapshot.data.vendasSeguros.length; i++) {
            const element = this.activatedRoute.snapshot.data.vendasSeguros[i];
            data.push(element.value)
            labels.push(`${element.insurance}`)
        }
        this.SalesGoalsType = 'pie'
        this.SalesGoalsData = [
            {
                data: data
            }
        ]
        this.SalesGoalsLabels = labels
    }

    // Metas de Vendas por Categoria de Produtos
    loadingProductGoals() {
        const data = [], labels = []
        for (let i = 0; i < this.activatedRoute.snapshot.data.vendasCategoria.length; i++) {
            const element = this.activatedRoute.snapshot.data.vendasCategoria[i];
            data.push(element.value)
            labels.push(`${element.insurance}`)
        }
        this.ProductGoalsType = 'pie'
        this.ProductGoalsData = [
            {
                data: data
            }
        ]
        this.ProductGoalsLabels = labels
    }

    // Comparativo de vendas
    loadingSalesComparison() {
        const data = [], labels = []
        for (let i = 0; i < this.activatedRoute.snapshot.data.comparativeSales.comparative.aggregators.length; i++) {
            const element = this.activatedRoute.snapshot.data.comparativeSales.comparative.aggregators[i];
            data.push(element.salesAmount)
            labels.push(`${element.position}º ${element.name}`)
        }
        this.SalesComparisonType = 'horizontalBar'
        this.SalesComparisonData = [
            {
                data: data,
            }
        ]
        this.SalesComparisonLabels = labels
        this.SalesComparisonOptions = {
            responsive: true,
            aspectRatio: 8,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    barThickness: 15,

                    ticks: {
                        beginAtZero: true
                    },
                    gridLines: {
                        drawOnChartArea: false,
                        display: false
                    }
                }],
                yAxes: [{
                    barThickness: 15,

                    ticks: {
                        beginAtZero: true
                    },
                    gridLines: {
                        drawOnChartArea: false,
                        display: false
                    }
                }]
            }
        }
    }

    SalesGoalsChangeDate(rangeDate: any) {
    }

    ProductGoalsChangeDate(rangeDate: any) {
    }

    format = value => new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)

}
