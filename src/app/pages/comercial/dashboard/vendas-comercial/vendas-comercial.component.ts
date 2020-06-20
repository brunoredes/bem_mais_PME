import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { DashCancellationsService } from 'app/service/dash-cancellations.service';
import { FilterDashboardService } from 'app/service/filter-dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { GoalsHomeModel } from 'app/models/goals-home.model';
import { SearchGoalsModel } from 'app/models/search-goals.model';
import { DateAdapter } from '@angular/material/core';
import { SalesByStateModel } from 'app/models/sales-by-state.model';
import { UtilService } from '../../../../helpers/utils'
import { FormGroup, FormBuilder } from '@angular/forms';

declare var $

@Component({
  selector: 'app-vendas-comercial',
  templateUrl: './vendas-comercial.component.html',
  styleUrls: ['./vendas-comercial.component.scss']
})
export class VendasComercialComponent implements OnInit {

  salesByState: SalesByStateModel[];
  goals: GoalsHomeModel[];
  searchGoals: SearchGoalsModel[];
  filterStatus: any = [];
  filterCategory: any = [];
  maior = true
  menor = false
  chart: any = [];

  barLineChartData: ChartDataSets[];
  barLineChartLabels: string[];
  barLineChartOptions: any;
  barLineChartExportId = 'barLineChartExport';
  barLineChartExportIconId = 'barLineChartIcon';
  barLineChartFilterDataId = 'barLineChartFilterData';
  barLineChartTitle = 'Volume de Vendas';

  pieSalesInsuranceChartData: ChartDataSets[];
  pieSalesInsuranceChartLabels: string[];
  pieSalesInsuranceChartOptions: any;
  pieSalesInsuranceChartType = 'pie';
  pieSalesInsuranceChartColors: any;
  pieSalesInsuranceChartExportId = 'pieSalesInsuranceChartExport';
  pieSalesInsuranceChartExportIconId = 'pieSalesInsuranceChartIcon';
  pieSalesInsuranceChartFilterDataId = 'pieSalesInsuranceChartFilterData';
  pieSalesInsuranceChartTitle = ''; // pizza <

  pieSalesCategoryChartData: ChartDataSets[];
  pieSalesCategoryChartLabels: string[];
  pieSalesCategoryChartOptions: any;
  pieSalesCategoryChartType = 'pie';
  pieSalesCategoryChartColors: any;
  pieSalesCategoryChartExportId = 'pieSalesCategoryChartExport';
  pieSalesCategoryChartExportIconId = 'pieSalesCategoryChartIcon';
  pieSalesCategoryChartFilterDataId = 'pieSalesCategoryChartFilterData';
  pieSalesCategoryChartTitle = ''; // pizza  >
  barLineChartTitleVendasCom = '' // main chart =>

  salesStateData: any;
  salesStateLabels: any;
  salesStateOptions: any
  salesStateColor: any;
  salesStateType: any;

  safeVendasData: any;
  safeVendasLabels: any;
  safeVendasOptions: any
  safeVendasColor: any;
  safeVendasType: any;
  safeVendasExportId = 'safeVendasExport';
  safeVendasExportIconId = 'safeVendasIcon';
  safeVendasFilterDataId = 'safeVendasFilterData';
  safeVendasTitle = 'safeVendasTitle';

  resaleDataColors: any = [
    'rgba(0, 90, 171, 1)',
    'rgba(0, 0, 0, 0.1)',
  ];

  revendaData: any;
  revendaHeigth: any
  formFilter: FormGroup;

  constructor(
    public api: DashCancellationsService,
    private _formBuild: FormBuilder,
    public filterDashboard: FilterDashboardService,
    private activatedRoute: ActivatedRoute,
    private _adapter: DateAdapter<any>,
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
    this.barLineChartTitleVendasCom = this._translate.getbarLineChartTitleVendasCom();
    this.pieSalesInsuranceChartTitle = this._translate.getpieSalesInsuranceChartTitle();
    this.safeVendasTitle = this._translate.getsafeVendasTitle();
    this.pieSalesCategoryChartTitle = this._translate.getpieSalesCategoryChartTitle();
    this._adapter.setLocale('br');

    window.addEventListener('resize', () => {
      this.loadingTotalSalesVolume();
      this.loadingSafeSales();
      this.loadingSalesStates();
      this.loadingSalesInsurance();
      this.loadingSalesCategory();
    })

    this.filterStatus = this.activatedRoute.snapshot.data.filterStatus;
    this.filterCategory = this.activatedRoute.snapshot.data.filterCategory;

    this.loadingSalesStates()
    this.loadingSafeSales()
    this.loadingTotalSalesVolume();
    this.loadingGoals();
    this.loadingSearchGoals();
    this.loadingSalesInsurance();
    this.loadingSalesCategory();

    this._buildFilterForm();

    $('#filter-dashSales').on('click', () => {
      $('.filter-dashSales').fadeToggle('fast');
    });

    const dial = $('.dial .inner');
    const gauge_value = $('.gauge .value');
    let deg = 30;
    const value = Math.round(Math.random() * 100);
    deg = (value * 177.5) / 100;
    gauge_value.html(value + '%');
    dial.css({ 'transform': 'rotate(' + deg + 'deg)' });
    dial.css({ '-ms-transform': 'rotate(' + deg + 'deg)' });
    dial.css({ '-moz-transform': 'rotate(' + deg + 'deg)' });
    dial.css({ '-o-transform': 'rotate(' + deg + 'deg)' });
    dial.css({ '-webkit-transform': 'rotate(' + deg + 'deg)' });
  }

  maiorf() {
    this.maior = true
    this.menor = false

    this.resaleDataColors = [
      'rgba(0, 90, 171, 1)',
      'rgba(0, 0, 0, 0.1)',
    ]
  }

  menorf() {
    this.maior = false
    this.menor = true

    this.resaleDataColors = [
      '#ff3636',
      'rgba(0, 0, 0, 0.1)',
    ]
  }

  loadingGoals() {
    this.goals = this.activatedRoute.snapshot.data.dataGoals
  }

  loadingSearchGoals() {
    this.searchGoals = this.activatedRoute.snapshot.data.dataSearchGoals
  }


  loadingTotalSalesVolume() {

    let scales: any;
    let aspectRatio: any = 3;
    let legend = true;

    if (screen.width < 768) {
      aspectRatio = 0;
      scales = {
        xAxes: [{
          display: false,
          barThickness: 10
        }],
        yAxes: [{
          ticks: {
            display: false,
            beginAtZero: true
          }
        }]
      };
      legend = false;
    }

    this.barLineChartOptions = {
      responsive: true,
      aspectRatio: aspectRatio,
      scales: scales,
      layout: {
        padding: {
          left: 12,
          right: 12,
          top: 0,
          bottom: 12
        }
      },
      legend: {
        display: legend,
      }
    }

    this.barLineChartData = [
      {
        label: this.activatedRoute.snapshot.data.totalSalesVolume.series[0].name,
        data: this.activatedRoute.snapshot.data.totalSalesVolume.series[0].data,
      },
      {
        type: 'line',
        label: this.activatedRoute.snapshot.data.totalSalesVolume.series[1].name,
        data: this.activatedRoute.snapshot.data.totalSalesVolume.series[1].data,
        borderWidth: 1
      }
    ]

    this.barLineChartLabels = this.activatedRoute.snapshot.data.totalSalesVolume.xAxys;
  }

  loadingSalesStates() {
    const labels = [];
    const data = [];

    let aspectRatio = 3;
    let display = true;
    let barThickness = 15;

    if (screen.width < 768) {
      aspectRatio = 0;
      display = false;
      barThickness = 5;
    }

    this.salesByState = this.activatedRoute.snapshot.data.dataSalesByState

    if (this.salesByState) {
      this.salesByState.forEach((value) => {
        labels.push(value.state);
        data.push(value.value);
      });
    }

    this.salesStateData = [
      {
        barThickness: barThickness,
        data: data
      }
    ]

    this.salesStateLabels = labels;

    this.salesStateOptions = {
      responsive: true,
      aspectRatio: aspectRatio,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          display: display,
          stacked: true
        }],
        yAxes: [{
          display: display,
          stacked: true
        }]
      }
    }

    this.salesStateColor = [
      {
        backgroundColor: '#1862c6',
        borderColor: '#1862c6',
        pointBackgroundColor: '#1862c6',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#1862c6',
        pointRadius: 1,
        pointHoverRadius: 1
      }
    ]
    this.salesStateType = 'bar';
  }

  loadingSafeSales() {
    const safe = this.activatedRoute.snapshot.data.dataSalesInsurance
    const data = [], labels = []

    let scales: any;
    let aspectRatio: any = 3;

    if (screen.width < 768) {
      aspectRatio = 0;
      scales = {
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true
          },
        }],
        yAxes: [{
          display: false,
          barThickness: 10
        }]
      };
    }

    this.safeVendasOptions = {
      responsive: true,
      aspectRatio: aspectRatio,
      scales: scales,
      legend: {
        display: false,
      },
    }

    safe.forEach((value) => {
      labels.push(value.insurance);
      data.push(value.amount);
    });

    this.safeVendasType = 'horizontalBar'

    this.safeVendasData = [
      {
        barThickness: 15,
        data: data
      }
    ]
    this.safeVendasLabels = labels
    this.safeVendasColor = [
      {
        backgroundColor: '#1862c6',
        borderColor: '#1862c6',
        pointBackgroundColor: '#1862c6',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#1862c6',
      }
    ]
  }

  loadingSalesInsurance() {

    const labels = []
    const data = []
    let legend: any = {
      labels: {
        fontSize: 12
      }
    };

    if (screen.width < 768) {
      legend = false;
    } else if (screen.width < 1024) {
      legend = {
        labels: {
          fontSize: 10
        }
      }
    }

    for (let i = 0; i < this.activatedRoute.snapshot.data.cancelInsurance.length; i++) {
      labels.push(this.activatedRoute.snapshot.data.cancelInsurance[i].insurance);
      data.push(this.activatedRoute.snapshot.data.cancelInsurance[i].value);
    }

    this.pieSalesInsuranceChartData = [
      {
        data: data
      }
    ];
    this.pieSalesInsuranceChartLabels = labels;
    this.pieSalesInsuranceChartColors = [
      {
        backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658', '#000', '#aaa']
      }
    ]

    this.pieSalesInsuranceChartOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: legend
    };

  }

  loadingSalesCategory() {

    const labels = []
    const data = []
    let legend: any = {
      labels: {
        fontSize: 12
      }
    };

    if (screen.width < 768) {
      legend = false;
    } else if (screen.width < 1024) {
      legend = {
        labels: {
          fontSize: 10
        }
      }
    }

    for (let i = 0; i < this.activatedRoute.snapshot.data.cancelCategory.length; i++) {
      labels.push(this.activatedRoute.snapshot.data.cancelCategory[i].insurance);
      data.push(this.activatedRoute.snapshot.data.cancelCategory[i].value);
    }

    this.pieSalesCategoryChartData = [
      {
        data: data
      }
    ];
    this.pieSalesCategoryChartLabels = labels;
    this.pieSalesCategoryChartColors = [
      {
        backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658', '#000', '#aaa']
      }
    ]

    this.pieSalesCategoryChartOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: legend
    };

  }

  pieSalesInsuranceChartChangeDate(rangeDate: any) {
  }

  pieSalesCategoryChartChangeDate(rangeDate: any) {
  }

  barLineChartChangeDate(rangeDate: any) {
  }

  safeVendasChangeDate(rangeDate: any) {
  }

  loadSales() {
    const filter = this._filterValue;
    $('.filter-dashSales').fadeToggle('fast');
  }

  private _buildFilterForm() {
    this.formFilter = this._formBuild.group({
      startDate: [''],
      endDate: [''],
      status: [''],
      category: ['']
    });
  }

  get _filterValue() {
    return this.formFilter.value;
  }

}
