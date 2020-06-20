import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDashModel } from 'app/models/orderDash.model';
import { DateAdapter } from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UtilService } from 'app/helpers/utils';

declare const $;

@Component({
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  salesOrders: OrderDashModel[] = []
  PartnerResultsType: any = []
  PartnerResultsOptions: any = []
  PartnerResultsData: any = []
  PartnerResultsLabels: any = []
  PartnerResultsColors: any = []
  PartnerResultsExportId = 'PartnerResultsExport'
  PartnerResultsExportIconId = 'PartnerResultsIcon'
  PartnerResultsFilterDataId = 'PartnerResultsFilterData'
  PartnerResultsTitle: string

  SalesVolumeType: any = []
  SalesVolumeOptions: any = []
  SalesVolumeData: any = []
  SalesVolumeLabels: any = []
  SalesVolumeColors: any = []
  SalesVolumeExportId = 'SalesVolumeExport'
  SalesVolumeExportIconId = 'SalesVolumeIcon'
  SalesVolumeFilterDataId = 'SalesVolumeFilterData'
  SalesVolumeTitle: string

  DistributionSecurityType: any = []
  DistributionSecurityOptions: any = []
  DistributionSecurityData: any = []
  DistributionSecurityLabels: any = []
  DistributionSecurityColors: any = []
  DistributionSecurityExportId = 'distributionSecurityExport'
  DistributionSecurityExportIconId = 'distributionSecurityIcon'
  DistributionSecurityFilterDataId = 'distributionSecurityFilterData'
  DistributionSecurityTitle: string

  DistributionProductsType: any = []
  DistributionProductsOptions: any = []
  DistributionProductsData: any = []
  DistributionProductsLabels: any = []
  DistributionProductsColors: any = []
  DistributionProductsExportId = 'distributioProductsExport'
  DistributionProductsExportIconId = 'distributionProductsIcon'
  DistributionProductsFilterDataId = 'distributionProductsFilterData'
  DistributionProductsTitle: string

  formFilter: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _adapter: DateAdapter<any>,
    private _translate: UtilService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
        // Esconde a modal do filtro com classe
        $(document).mouseup(function(e) {
          const container = $('.filter-div');
          if (!container.is(e.target) && container.has(e.target).length === 0)
          {
              container.hide();
          }
          // Filter
        }),
    this._adapter.setLocale('br');

    window.addEventListener('resize', () => {
      this.loadingPartnerResults();
      this.loadingSalesVolume();
      this.loadingDistributionSecurity();
      this.loadingDistributionProducts();
    })

    this.salesOrders = this.activatedRoute.snapshot.data.salesOrder;
    this.loadingPartnerResults();
    this.loadingSalesVolume();
    this.loadingDistributionSecurity();
    this.loadingDistributionProducts();
    this._createFormFilter();

    $('#filter-dashSales').on('click', () => {
      $('.filter-dashSales').fadeToggle('fast');
    });

    this.PartnerResultsTitle = this._translate.getPartnerResultsTitle()
    this.SalesVolumeTitle = this._translate.getAggregatorDashVolumeTitle()
    this.DistributionSecurityTitle = this._translate.getSalesSafeTitle()
    this.DistributionProductsTitle = this._translate.getSalesCategoryTitle()
  }

  // Resultado de Parceiros
  loadingPartnerResults() {
    let scales: any;
    let display: any = true;
    let fontSize = 12;

    if (screen.width < 768) {
      scales = {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          ticks: {
            display: false,
            beginAtZero: true
          }
        }]
      };
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10;
    }

    this.PartnerResultsOptions = {
      responsive: true,
      aspectRatio: 0,
      scales: scales,
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    }

    this.PartnerResultsType = 'line'
    this.PartnerResultsData = this.activatedRoute.snapshot.data.partnerResult.series;
    this.PartnerResultsLabels = this.activatedRoute.snapshot.data.partnerResult.xAxys;
    this.PartnerResultsColors = [
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

  // Volume de Vendas
  loadingSalesVolume() {

    let scales: any;
    let display: any = true;
    let fontSize = 12;

    if (screen.width < 768) {
      scales = {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          ticks: {
            display: false,
            beginAtZero: true
          }
        }]
      };
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10;
    }

    this.SalesVolumeOptions = {
      responsive: true,
      aspectRatio: 0,
      scales: scales,
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    }

    this.activatedRoute.snapshot.data.volumeSales.series[1]['type'] = 'bar';

    this.SalesVolumeType = 'line'
    this.SalesVolumeData = this.activatedRoute.snapshot.data.volumeSales.series
    this.SalesVolumeLabels = this.activatedRoute.snapshot.data.volumeSales.xAxys

    this.SalesVolumeColors = [
      {
        backgroundColor: 'transparent',
        borderColor: '#62BC00',
        pointBackgroundColor: '#62BC00',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#62BC00'
      },
      {
        backgroundColor: '#D8D8D8',
        borderColor: '##D8D8D8',
        pointBackgroundColor: '##D8D8D8',
        pointBorderColor: '##D8D8D8',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '##D8D8D8',
      },

    ]

  }

  // Distribuição de Vendas
  loadingDistributionSecurity() {

    const data = [];
    const labels = [];
    let fontSize = 12;
    let display = true;

    if (screen.width < 768) {
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10
    }

    this.DistributionSecurityOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    };

    this.activatedRoute.snapshot.data.salesInsurance.forEach(element => {
      data.push(element.value);
      labels.push(element.insurance);
    });

    this.DistributionSecurityType = 'pie'
    this.DistributionSecurityData = [
      {
        data: data
      }
    ]
    this.DistributionSecurityLabels = labels
  }

  // Distribuição de Produto
  loadingDistributionProducts() {

    const data = [];
    const labels = [];
    let fontSize = 12;
    let display = true;

    if (screen.width < 768) {
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10
    }

    this.DistributionProductsOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    };

    this.activatedRoute.snapshot.data.salesCategory.forEach(element => {
      data.push(element.value);
      labels.push(element.insurance);
    });

    this.DistributionProductsType = 'pie'
    this.DistributionProductsData = [
      {
        data: data
      }
    ]
    this.DistributionProductsLabels = labels
  }

  PartnerResultsChangeDate(rangeDate: any) {
  }

  SalesVolumeChangeDate(rangeDate: any) {
  }

  DistributionSecurityChangeDate(rangeDate: any) {
  }

  DistributionProductsChangeDate(rangeDate: any) {
  }

  private _createFormFilter() {
    this.formFilter = this.fb.group({
      startDate: '',
      endDate: '',
      partner: '',
      store: ''
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
