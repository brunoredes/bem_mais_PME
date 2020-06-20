import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'app/helpers/utils';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OrderDashModel } from 'app/models/orderDash.model';

declare const $;

@Component({
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  MyPerformanceType: any = []
  MyPerformanceOptions: any = []
  MyPerformanceData: any = []
  MyPerformanceLabels: any = []
  MyPerformanceColors: any = []
  MyPerformanceExportId = 'MyPerformanceExport'
  MyPerformanceExportIconId = 'MyPerformanceIcon'
  MyPerformanceFilterDataId = 'MyPerformanceFilterData'

  SalesVolumeType: any = []
  SalesVolumeOptions: any = []
  SalesVolumeData: any = []
  SalesVolumeLabels: any = []
  SalesVolumeColors: any = []
  SalesVolumeExportId = 'SalesVolumeExport'
  SalesVolumeExportIconId = 'SalesVolumeIcon'
  SalesVolumeFilterDataId = 'SalesVolumeFilterData'

  salesVolumeTitle = 'salesVolumeTitle'
  myPerformanceTitle = 'myPerformanceTitle'
  insuranceSalesTitle = 'insuranceSalesTitle'
  productCategoryTitle = 'productCategoryTitle'

  InsuranceSalesType: any = []
  InsuranceSalesOptions: any = []
  InsuranceSalesData: any = []
  InsuranceSalesLabels: any = []
  InsuranceSalesColors: any = []
  InsuranceSalesExportId = 'InsuranceSalesExport'
  InsuranceSalesExportIconId = 'InsuranceSalesIcon'
  InsuranceSalesFilterDataId = 'InsuranceSalesFilterData'

  ProductCategoryType: any = []
  ProductCategoryOptions: any = []
  ProductCategoryData: any = []
  ProductCategoryLabels: any = []
  ProductCategoryColors: any = []
  ProductCategoryExportId = 'ProductCategoryExport'
  ProductCategoryExportIconId = 'ProductCategoryIcon'
  ProductCategoryFilterDataId = 'ProductCategoryFilterData'

  formFilter: FormGroup;
  salesOrders: OrderDashModel[] = []
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _translate: UtilService,
    private _formBuilder: FormBuilder
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

    this.productCategoryTitle = this._translate.getProductCategoryTitle();
    this.insuranceSalesTitle = this._translate.getInsuranceSalesTitle();
    this.salesVolumeTitle = this._translate.getSalesVolumeTitle();
    this.myPerformanceTitle = this._translate.getMyPerformanceTitle();

    this.loadingMyPerformance();
    this.loadingSalesVolume();
    this.loadingInsuranceSales();
    this.loadingProductCategory();

    this._buildFilterForm();

    $('#filter-dashPerf').on('click', () => {
      $('.filter-dashPerf').fadeToggle('fast');
    });
  }

  // Minha performance
  loadingMyPerformance() {

    this.MyPerformanceOptions = {
      responsive: true,
      aspectRatio: 0,
      scales: {
        xAxes: [{
          beginAtZero: true
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    this.MyPerformanceType = 'line'
    this.MyPerformanceData = this.routeData.myPerformance.series;
    this.MyPerformanceLabels = this.routeData.myPerformance.xAxys;
    this.MyPerformanceColors = [
      {
        backgroundColor: 'transparent',
        borderColor: '#62BC00',
        pointBackgroundColor: '#62BC00',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#62BC00'
      },
      {
        backgroundColor: 'transparent',
        borderColor: '#005AAB',
        pointBackgroundColor: '#005AAB',
        pointBorderColor: '#005AAB',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#005AAB',
      },
      {
        backgroundColor: 'transparent',
        borderColor: '#02296A',
        pointBackgroundColor: '#02296A',
        pointBorderColor: '#02296A',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#02296A',
      }
    ]

  }

  // Volume de venda
  loadingSalesVolume() {

    this.SalesVolumeOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          beginAtZero: true
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    this.SalesVolumeType = 'bar'
    this.SalesVolumeData = [
      {
        data: this.routeData.salesAmount.map(element => element.percent),
        barThickness: 15,
      }
    ];
    this.SalesVolumeLabels = this.routeData.salesAmount.map(element => element.insurance);
    this.SalesVolumeColors = [
      {
        backgroundColor: '#005AAB',
        borderColor: '#005AAB',
        pointBackgroundColor: '#005AAB',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#005AAB'
      }
    ]

  }

  // Distribuição de Vendas por Seguro
  loadingInsuranceSales() {

    const data = [];
    const labels = [];
    const fontSize = 12;
    const display = true;
    this.InsuranceSalesOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    };
    this.InsuranceSalesType = 'pie'
    this.InsuranceSalesData = [
      {
        data: this.routeData.salesDistributionByInsurance.map(element => element.percent)
      }
    ]
    this.InsuranceSalesLabels = this.routeData.salesDistributionByInsurance.map(element => element.insurance)
  }

  // Distribuição de Vendas por Categoria de Produtos
  loadingProductCategory() {

    const data = [];
    const labels = [];
    const fontSize = 12;
    const display = true;
    this.ProductCategoryOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    };
    this.ProductCategoryType = 'pie'
    this.ProductCategoryData = [
      {
        data: this.routeData.salesDistributionByProduct.map(element => element.percent)
      }
    ]
    this.ProductCategoryLabels = this.routeData.salesDistributionByProduct.map(element => element.insurance);
  }

  MyPerformanceChangeDate(rangeDate: any) {
  }

  SalesVolumeChangeDate(rangeDate: any) {
  }

  InsuranceSalesChangeDate(rangeDate: any) {
  }

  ProductCategoryChangeDate(rangeDate: any) {
  }

  get routeData() {
    return this._activatedRoute.snapshot.data.values;
  }

  findPerformance() {
    const filter = this._filterValue;
    $('.filter-dashPerf').fadeToggle('fast');
  }

  private _buildFilterForm() {
    this.formFilter = this._formBuilder.group({
      startDate: [''],
      endDate: [''],
      partner: [''],
      store: ['']
    });
  }

  get _filterValue(): any {
    return this.formFilter.value;
  }

}
