import { Component, OnInit } from '@angular/core';
import { DashCancellationsService } from 'app/service/dash-cancellations.service';
import { ChartDataSets } from 'chart.js';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from '@angular/material/core';
import { FilterDashboardService } from 'app/service/filter-dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { SingleDataSet } from 'ng2-charts';
import { StateModel } from 'app/models/state.model';
import { CityModel } from 'app/models/city.model';
import { UtilService } from '../../../../helpers/utils'
import { FormGroup, FormBuilder } from '@angular/forms';
import { UfService } from 'app/service/uf.service';

declare let $: any;

@Component({
  selector: 'app-sinistrados',
  templateUrl: './sinistrados.component.html',
  styleUrls: ['./sinistrados.component.scss']
})
export class SinistradosComponent implements OnInit {

  barLineChartData: ChartDataSets[];
  barLineChartLabels: string[];
  barLineChartOptions: any;
  barLineChartExportId = 'barLineChartExport'
  barLineChartExportIconId = 'barLineChartIcon'
  barLineChartFilterDataId = 'barLineChartFilterData'
  barLineChartTitleSinist = 'barLineChartTitleSinist'

  pieClaimsInsuranceChartData: ChartDataSets[];
  pieClaimsInsuranceChartLabels: string[];
  pieClaimsInsuranceChartOptions: any;
  pieClaimsInsuranceChartType = 'pie';
  pieClaimsInsuranceChartColors: any;
  pieClaimsInsuranceChartExportId = 'pieClaimsInsuranceChartExport'
  pieClaimsInsuranceChartExportIconId = 'pieClaimsInsuranceChartIcon'
  pieClaimsInsuranceChartFilterDataId = 'pieClaimsInsuranceChartFilterData'
  pieClaimsInsuranceChartTitle = 'pieClaimsInsuranceChartTitle'

  pieClaimsCategoryChartData: ChartDataSets[];
  pieClaimsCategoryChartLabels: string[];
  pieClaimsCategoryChartOptions: any;
  pieClaimsCategoryChartType = 'pie';
  pieClaimsCategoryChartColors: any;
  pieClaimsCategoryChartExportId = 'pieClaimsCategoryChartExport'
  pieClaimsCategoryChartExportIconId = 'pieClaimsCategoryChartIcon'
  pieClaimsCategoryChartFilterDataId = 'pieClaimsCategoryChartFilterData'
  pieClaimsCategoryChartTitle = 'pieClaimsCategoryChartTitle'

  uf: StateModel[] = [];
  city: string[] = [];
  formFilter: FormGroup;

  constructor(
    public api: DashCancellationsService,
    private _adapter: DateAdapter<any>,
    public translate: TranslateService,
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

    $('#filter-dashSinistrados').on('click', () => {
      $('.filter-dashSinistrados').fadeToggle('fast');
    });

    this._buildFilterForm();
    this.barLineChartTitleSinist = this._translate.getbarLineChartTitleSinist();
    this.pieClaimsInsuranceChartTitle = this._translate.getpieClaimsInsuranceChartTitle();
    this.pieClaimsCategoryChartTitle = this._translate.getpieClaimsCategoryChartTitle();
    this._adapter.setLocale('br');

    window.addEventListener('resize', () => {
      this.loadingTotalClaimsVolume();
      this.loadingClaimsInsurance();
      this.loadingClaimsCategory();
    })

    this.uf = this.activatedRoute.snapshot.data.uf;
    this.city = this.activatedRoute.snapshot.data.cidade;

    this.loadingTotalClaimsVolume();
    this.loadingClaimsInsurance();
    this.loadingClaimsCategory();
  }

  loadingTotalClaimsVolume() {

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

    this.activatedRoute.snapshot.data.totalClaimsVolume.series[1]['type'] = 'line';

    this.barLineChartData = this.activatedRoute.snapshot.data.totalClaimsVolume.series;

    this.barLineChartLabels = this.activatedRoute.snapshot.data.totalClaimsVolume.xAxys;
  }

  loadingClaimsInsurance() {

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

    for (let i = 0; i < this.activatedRoute.snapshot.data.claimsInsurance.length; i++) {
      labels.push(this.activatedRoute.snapshot.data.claimsInsurance[i].insurance);
      data.push(this.activatedRoute.snapshot.data.claimsInsurance[i].value);
    }

    this.pieClaimsInsuranceChartData = [
      {
        data: data
      }
    ];
    this.pieClaimsInsuranceChartLabels = labels;
    this.pieClaimsInsuranceChartColors = [
      {
        backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658', '#000', '#aaa']
      }
    ]

    this.pieClaimsInsuranceChartOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: legend
    };
  }

  loadingClaimsCategory() {

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

    for (let i = 0; i < this.activatedRoute.snapshot.data.claimsCategory.length; i++) {
      labels.push(this.activatedRoute.snapshot.data.claimsCategory[i].insurance);
      data.push(this.activatedRoute.snapshot.data.claimsCategory[i].value);
    }

    this.pieClaimsCategoryChartData = [
      {
        data: data
      }
    ];
    this.pieClaimsCategoryChartLabels = labels;
    this.pieClaimsCategoryChartColors = [
      {
        backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658', '#000', '#aaa']
      }
    ]

    this.pieClaimsCategoryChartOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: legend
    };
  }

  pieClaimsInsuranceChartChangeDate(rangeDate: any) {
  }

  pieClaimsCategoryChartChangeDate(rangeDate: any) {
  }

  barLineChartChangeDate(rangeDate: any) {
  }

  loadClaims() {
    const filter = this._filterValue;
    $('.filter-dashSinistrados').fadeToggle('fast');
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
