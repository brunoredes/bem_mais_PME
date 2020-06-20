import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DashVendasService } from 'app/service/dash-vendas.service';
import { FilterDashboardService } from 'app/service/filter-dashboard.service';
import { LoadingService } from 'app/service/loading.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { ActivatedRoute } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { UtilService } from 'app/helpers/utils';
import { FormGroup, FormBuilder } from '@angular/forms';

declare let $: any;

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {

  public filterStatus: any = [];
  public filterCategory: any = [];

  myPerformanceType: any = []
  myPerformanceOptions: any = []
  myPerformanceData: any = []
  myPerformanceLabels: any = []
  myPerformanceColor: any = []
  myPerformanceExportId = 'myPerformanceExport'
  myPerformanceExportIconId = 'myPerformanceIcon'
  myPerformanceFilterDataId = 'myPerformanceFilterData'
  myPerformanceTitle: string; // = 'Minha Performace'

  salesAmountType: any = []
  salesAmountOptions: any = []
  salesAmountData: any = []
  salesAmountLabels: any = []
  salesAmountColor: any = []
  salesAmountExportId = 'salesAmountExport'
  salesAmountExportIconId = 'salesAmountIcon'
  salesAmountFilterDataId = 'salesAmountFilterData'
  salesAmountTitle: string; // = 'Volume de Vendas'

  salesInsuranceType: any = []
  salesInsuranceOptions: any = []
  salesInsuranceData: any = []
  salesInsuranceLabels: any = []
  salesInsuranceColor: any = []
  salesInsuranceExportId = 'salesInsuranceExport'
  salesInsuranceExportIconId = 'salesInsuranceIcon'
  salesInsuranceFilterDataId = 'salesInsuranceFilterData'
  salesInsuranceTitle: string; // = 'Distribuição de Vendas por Seguro'

  salesCategoryType: any = []
  salesCategoryOptions: any = []
  salesCategoryData: any = []
  salesCategoryLabels: any = []
  salesCategoryColor: any = []
  salesCategoryExportId = 'salesCategoryExport'
  salesCategoryExportIconId = 'salesCategoryIcon'
  salesCategoryFilterDataId = 'salesCategoryFilterData'
  salesCategoryTitle: string; // = 'Distribuição de Vendas por Categoria de Produtos'

  loadingTemplate = this.loading.loadingTemplate;
  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  formFilter: FormGroup;

  constructor(
    public api: DashVendasService,
    public translate: TranslateService,
    public filterDashboard: FilterDashboardService,
    public loading: LoadingService,
    public activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private _adapter: DateAdapter<any>,
    private _translate: UtilService

  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.myPerformanceTitle = this._translate.getMyPerformanceTitle();
    this.salesAmountTitle = this._translate.getSalesVolumeTitle();
    this.salesInsuranceTitle = this._translate.getInsuranceSalesTitle();
    this.salesCategoryTitle = this._translate.getProductCategoryTitle();
    // Esconde a modal do filtro com classe
    $(document).mouseup(function (e) {
      const container = $('.filter-div');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
      // Filter
    })

    this._adapter.setLocale('br');

    window.addEventListener('resize', () => {
      this.loadingMyPerformace();
      this.loadingSalesAmount();
      this.loadingSalesInsurance();
      this.loadingSalesCategory();
    })

    this._createFormFilter();

    this.loadingMyPerformace();
    this.loadingSalesAmount();
    this.loadingSalesInsurance();
    this.loadingSalesCategory();

    this.filterStatus = this.activatedRoute.snapshot.data.filterStatus
    this.filterCategory = this.activatedRoute.snapshot.data.filterCategory
    const rs = document.readyState;
    switch (rs) {
      case 'interactive':
      case 'complete':
        this.loading.offLoadingMenuComponents();

        setTimeout(() => {
          $('#filter-dashSales').on('click', () => {
            $('.filter-dashSales').fadeToggle('fast');
          });
        }, 800);
        break;
    }
  }

  loadingMyPerformace() {
    let display: any = true;
    let fontSize = 12;
    let beginAtZero = false

    if (screen.width < 768) {
      beginAtZero = true
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10;
    }

    this.myPerformanceOptions = {
      responsive: true,
      aspectRatio: 0,
      scales: {
        xAxes: [{
          display: display
        }],
        yAxes: [{
          ticks: {
            display: display,
            beginAtZero: beginAtZero
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

    this.myPerformanceType = 'line'
    this.myPerformanceData = this.activatedRoute.snapshot.data.myPerformaceDash.series
    this.myPerformanceLabels = this.activatedRoute.snapshot.data.myPerformaceDash.xAxys
    this.myPerformanceColor = [
      {
        borderColor: 'rgba(52, 52, 52, .7)',
        backgroundColor: 'rgba(52, 52, 52, .2)',
        borderWidth: 2
      },
      {
        borderColor: 'rgba(98, 188, 0, .7)',
        backgroundColor: 'rgba(98, 188, 0, .2)',
        borderWidth: 2
      },
      {
        backgroundColor: 'rgba(0, 90, 171, .2)',
        borderColor: 'rgba(0, 90, 171, .7)',
        borderWidth: 2
      }
    ]
  }

  loadingSalesAmount() {
    let display: any = true;
    let fontSize = 12;
    let beginAtZero = false

    if (screen.width < 768) {
      beginAtZero = true
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10;
    }

    this.salesAmountOptions = {
      responsive: true,
      aspectRatio: 0,
      scales: {
        xAxes: [{
          display: display
        }],
        yAxes: [{
          ticks: {
            display: display,
            beginAtZero: beginAtZero
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

    this.activatedRoute.snapshot.data.salesAmount.series[1]['type'] = 'line'

    this.salesAmountType = 'bar'
    this.salesAmountData = this.activatedRoute.snapshot.data.salesAmount.series
    this.salesAmountLabels = this.activatedRoute.snapshot.data.salesAmount.xAxys
    this.salesAmountColor = [
      {
        backgroundColor: '#1862c6',
        borderColor: '#1862c6',
        pointBackgroundColor: '#1862c6',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#1862c6'
      },
      {
        backgroundColor: '#DEE4E8',
        borderColor: '#DEE4E8',
        pointBackgroundColor: '#DEE4E8',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#DEE4E8',
        borderWidth: 1
      }
    ]
  }

  loadingSalesInsurance() {
    const data = [], labels = []

    let fontSize = 12;
    let display = true;

    if (screen.width < 768) {
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10
    }

    this.salesInsuranceOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    };

    for (let i = 0; i < this.activatedRoute.snapshot.data.insuranceSales.length; i++) {
      const element = this.activatedRoute.snapshot.data.insuranceSales[i];
      data.push(element.value)
      labels.push(element.insurance)
    }

    this.salesInsuranceType = 'pie'
    this.salesInsuranceData = [
      {
        data: data
      }
    ]
    this.salesInsuranceLabels = labels
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

    for (let i = 0; i < this.activatedRoute.snapshot.data.salesCategory.length; i++) {
      const element = this.activatedRoute.snapshot.data.salesCategory[i];
      data.push(element.value)
      labels.push(element.insurance)
    }

    this.salesCategoryType = 'pie'
    this.salesCategoryData = [
      {
        data: data
      }
    ]
    this.salesCategoryLabels = labels
  }

  myPerformanceChangeDate(rangeDate: any) {
  }

  salesAmountChangeDate(rangeDate: any) {
  }

  salesInsuranceChangeDate(rangeDate: any) {
  }

  salesCategoryChangeDate(rangeDate: any) {
  }

  private _createFormFilter() {
    this.formFilter = this.fb.group({
      startDate: '',
      endDate: '',
      status: '',
      category: ''
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
