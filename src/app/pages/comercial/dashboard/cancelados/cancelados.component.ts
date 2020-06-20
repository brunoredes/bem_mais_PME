import { Component, OnInit } from '@angular/core';
import { DashCancellationsService } from 'app/service/dash-cancellations.service';
import { FilterDashboardService } from 'app/service/filter-dashboard.service';
import { ChartDataSets } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { SingleDataSet } from 'ng2-charts';
import { DateAdapter } from '@angular/material/core';
import { StateModel } from 'app/models/state.model';
import { CityModel } from 'app/models/city.model';
import { UtilService } from '../../../../helpers/utils'
import { FormGroup, FormBuilder } from '@angular/forms';
import { UfService } from 'app/service/uf.service';

declare let $: any;

@Component({
  selector: 'app-cancelados',
  templateUrl: './cancelados.component.html',
  styleUrls: ['./cancelados.component.scss']
})
export class CanceladosComponent implements OnInit {
  barLineChartData: ChartDataSets[];
  barLineChartLabels: string[];
  barLineChartOptions: any;
  barLineChartExportId = 'barLineChartExport'
  barLineChartExportIconId = 'barLineChartIcon'
  barLineChartFilterDataId = 'barLineChartFilterData'
  barLineChartTitle = 'barLineChartTitle'

  pieCancelInsuranceChartData: ChartDataSets[];
  pieCancelInsuranceChartLabels: string[];
  pieCancelInsuranceChartOptions: any;
  pieCancelInsuranceChartType = 'pie';
  pieCancelInsuranceChartColors: any;
  pieCancelInsuranceChartExportId = 'pieCancelInsuranceChartExport'
  pieCancelInsuranceChartExportIconId = 'pieCancelInsuranceChartIcon'
  pieCancelInsuranceChartFilterDataId = 'pieCancelInsuranceChartFilterData'
  pieCancelInsuranceChartTitle = 'pieCancelInsuranceChartTitle'

  pieCancelCategoryChartData: ChartDataSets[];
  pieCancelCategoryChartLabels: string[];
  pieCancelCategoryChartOptions: any;
  pieCancelCategoryChartType = 'pie';
  pieCancelCategoryChartColors: any;
  pieCancelCategoryChartExportId = 'pieCancelCategoryChartExport'
  pieCancelCategoryChartExportIconId = 'pieCancelCategoryChartIcon'
  pieCancelCategoryChartFilterDataId = 'pieCancelCategoryChartFilterData'
  pieCancelCategoryChartTitle = 'pieCancelCategoryChartTitle'

  uf: StateModel[] = [];
  city: string[] = [];
  formFilter: FormGroup;

  constructor(
    public api: DashCancellationsService,
    private _adapter: DateAdapter<any>,
    private _formBuild: FormBuilder,
    public filterDashboard: FilterDashboardService,
    private activatedRoute: ActivatedRoute,
    private estadosService: UfService,
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

    $('#filter-dashCancelamento').on('click', () => {
      $('.filter-dashCancelamento').fadeToggle('fast');
    });

    this._buildFilterForm();

    this.barLineChartTitle = this._translate.getbarLineChartTitle();
    this.pieCancelInsuranceChartTitle = this._translate.getpieCancelInsuranceChartTitle();
    this.pieCancelCategoryChartTitle = this._translate.getpieCancelCategoryChartTitle();

    window.addEventListener('resize', () => {
      this.loadingTotalCanceledVolume();
      this.loadingCancelInsurance();
      this.loadingCancelCategory();
    })

    this._adapter.setLocale('br');

    this.uf = this.activatedRoute.snapshot.data.uf;
    this.city = this.activatedRoute.snapshot.data.cidade;

    this.loadingTotalCanceledVolume();
    this.loadingCancelInsurance();
    this.loadingCancelCategory();

  }

  loadingTotalCanceledVolume() {

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

    this.activatedRoute.snapshot.data.totalCanceledVolume.series[1]['type'] = 'line'

    this.barLineChartData = this.activatedRoute.snapshot.data.totalCanceledVolume.series;

    this.barLineChartLabels = this.activatedRoute.snapshot.data.totalCanceledVolume.xAxys;
  }

  loadingCancelInsurance() {

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

    this.pieCancelInsuranceChartData = [
      {
        data: data
      }
    ];
    this.pieCancelInsuranceChartLabels = labels;
    this.pieCancelInsuranceChartColors = [
      {
        backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658', '#000', '#aaa']
      }
    ]

    this.pieCancelInsuranceChartOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: legend
    };

  }

  loadingCancelCategory() {

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

    this.pieCancelCategoryChartData = [
      {
        data: data
      }
    ];
    this.pieCancelCategoryChartLabels = labels;
    this.pieCancelCategoryChartColors = [
      {
        backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658', '#000', '#aaa']
      }
    ]

    this.pieCancelCategoryChartOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: legend
    };

  }

  barLineChartChangeDate(rangeDate: any) {
  }

  pieCancelInsuranceChartChangeDate(rangeDate: any) {
  }

  pieCancelCategoryChartChangeDate(rangeDate: any) {
  }

  loadCancellation() {
    const filter = this._filterValue;
    $('.filter-dashCancelamento').fadeToggle('fast');
  }

  private _buildFilterForm() {
    this.formFilter = this._formBuild.group({
      partner: [''],
      store: [''],
      state: [''],
      city: ['']
    });
  }

  get _filterValue() {
    return this.formFilter.value;
  }

  change() {
    const id = this.formFilter.get('state').value;
    this.estadosService.getCidade(id).subscribe(res => {
      this.city = res;
    })
  }

}
