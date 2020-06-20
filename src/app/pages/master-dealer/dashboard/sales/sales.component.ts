import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from 'app/helpers/utils';

declare const $: any;

@Component({
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

    startDate: Date;
    endDate: Date;

    SalesDistributionData: any
    SalesDistributionLabels: any
    SalesDistributionColor: any
    SalesDistributionOptions: any
    SalesDistributionType: any = 'pie'
    SalesDistributionExportId = 'SalesDistributionExport'
    SalesDistributionExportIconId = 'SalesDistributionIcon'
    SalesDistributionFilterDataId = 'SalesDistributionFilterData'
    SalesDistributionTitle: string; // = 'Distribuição de Vendas por Seguro'

    SalesbyCategoryData: any
    SalesbyCategoryLabels: any
    SalesbyCategoryColor: any
    SalesbyCategoryOptions: any
    SalesbyCategoryType: any = 'pie'
    SalesbyCategoryExportId = 'SalesbyCategoryExport'
    SalesbyCategoryExportIconId = 'SalesbyCategoryIcon'
    SalesbyCategoryFilterDataId = 'SalesbyCategoryFilterData'
    SalesbyCategoryTitle: string; // = 'Distribuição de Vendas por Categoria de Produtos'

    SalesMonitoringData: any
    SalesMonitoringLabels: any
    SalesMonitoringColor: any
    SalesMonitoringOptions: any
    SalesMonitoringType: any = 'bar'
    SalesMonitoringTitle: string; // = 'Vendas por Loja'

    ShopXproductsData: any
    ShopXproductsLabels: any
    ShopXproductsColor: any
    ShopXproductsOptions: any
    ShopXproductsType: any = 'bar'
    ShopXproductsTitle: string; // = 'Loja X Produtos'
    ShopXproductExportId = 'exemploExport'
    ShopXproductExportIconId = 'exemploIcon'
    ShopXproductFilterDataId = 'exemploFilterData'
    ShopXproductTitle: string; // = 'Acompanhamento de Vendas'

    formFilter: FormGroup;

    constructor(
        private activatedRoute: ActivatedRoute,
        private _adapter: DateAdapter<any>,
        private fb: FormBuilder,
        private _translate: UtilService
    ) { }

    ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
        // Esconde a modal do filtro com classe
        $(document).mouseup(function (e) {
            const container = $('.filter-div');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide();
            }
            // Filter
        })
        this.SalesDistributionTitle = this._translate.getSalesSafeTitle();
        this.SalesbyCategoryTitle = this._translate.getSalesCategoryTitle()
        this.ShopXproductTitle = this._translate.getMasterDealerSalesFoll()
        this.SalesMonitoringTitle = this._translate.getMasterDealerSalesPerStore()
        this.ShopXproductsTitle = this._translate.getMasterDealerStoreVsProd()
        this._adapter.setLocale('br');

        $('#filter-dashSales').on('click', () => {
            $('.filter-dashSales').fadeToggle('fast');
        });

        this._createFormFilter();

        window.addEventListener('resize', () => {
            this.salesCategory();
            this.salesDistribution();
            this.salesMonitoring();
            this.shopxProducts();
        })

        this.salesCategory();
        this.salesDistribution();
        this.salesMonitoring();
        this.shopxProducts();
    }

    salesDistribution() {
        const data = [], label = [], api = this.routeData.seguro

        let fontSize = 12;
        let display = true;

        if (screen.width < 768) {
            display = false;
        } else if (screen.width < 1024) {
            fontSize = 10
        }

        this.SalesDistributionOptions = {
            responsive: true,
            aspectRatio: 0,
            legend: {
                display: display,
                labels: {
                    fontSize: fontSize
                }
            }
        };

        api.forEach(element => {
            data.push(element.value)
            label.push(element.insurance)
        });
        this.SalesDistributionData = [{ data: data }]
        this.SalesDistributionLabels = label;
    }

    SalesDistributionChangeDate(rangeDate: any) {
    }

    salesCategory() {
        const data = [], label = [], api = this.routeData.categoria

        let fontSize = 12;
        let display = true;

        if (screen.width < 768) {
            display = false;
        } else if (screen.width < 1024) {
            fontSize = 10
        }

        this.SalesbyCategoryOptions = {
            responsive: true,
            aspectRatio: 0,
            legend: {
                display: display,
                labels: {
                    fontSize: fontSize
                }
            }
        };

        api.forEach(element => {
            data.push(element.value)
            label.push(element.insurance)
        });
        this.SalesbyCategoryLabels = label
        this.SalesbyCategoryData = [{ data: data }]
    }

    SalesbyCategoryChangeDate(rangeDate: any) {
    }

    salesMonitoring() {

        let display: any = true;
        let fontSize = 12;

        if (screen.width < 768) {
            display = false;
        } else if (screen.width < 1024) {
            fontSize = 10;
        }

        this.SalesMonitoringOptions = {
            responsive: true,
            aspectRatio: 0,
            scales: {
                xAxes: [{
                    display: display
                }],
                yAxes: [{
                    ticks: {
                        display: display,
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: display,
                labels: {
                    fontSize: fontSize
                }
            }
        }

        this.SalesMonitoringData = this.routeData.value.loja.series
        this.SalesMonitoringLabels = this.routeData.value.loja.xAxys
        this.SalesMonitoringColor = []
    }

    shopxProducts() {
        const api = this.routeData.value.acompanhamento

        let display: any = true;
        let fontSize = 12;

        if (screen.width < 768) {
            display = false;
        } else if (screen.width < 1024) {
            fontSize = 10;
        }

        this.ShopXproductsOptions = {
            responsive: true,
            aspectRatio: 0,
            scales: {
                xAxes: [{
                    display: display
                }],
                yAxes: [{
                    ticks: {
                        display: display,
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: display,
                labels: {
                    fontSize: fontSize
                }
            }
        }

        api.forEach(element => {
            element['barThickness'] = 15
        });

        this.ShopXproductsData = api
        this.ShopXproductsLabels = ['Clube Zurich ADM']
        this.ShopXproductsColor = []
    }

    ShopXproductChangeDate(rangeDate: any) {
    }

    get routeData() {
        return this.activatedRoute.snapshot.data;
    }

    dateRangeChange() {
        if (this.startDate > this.endDate) {
            this.endDate = this.startDate;
        }
        if (!this.endDate) {
            this.endDate = this.startDate;
        }
    }

    private _createFormFilter() {
        this.formFilter = this.fb.group({
            startDate: '',
            endDate: '',
            status: ''
        })
    }

    findSales() {
        const filter = this._filterValue;
        $('.filter-dashSales').fadeOut('fast');
    }

    get _filterValue(): any {
        return this.formFilter.value;
    }
}
