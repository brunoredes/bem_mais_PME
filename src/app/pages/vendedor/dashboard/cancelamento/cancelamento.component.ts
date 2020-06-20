import { Component, OnInit } from '@angular/core';
import { DashCancellationsService } from 'app/service/dash-cancellations.service';
import { FilterDashboardService } from 'app/service/filter-dashboard.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { LoadingService } from 'app/service/loading.service';
import { ActivatedRoute } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { UtilService } from 'app/helpers/utils';
import { FormGroup, FormBuilder } from '@angular/forms';

declare let $: any;

@Component({
  selector: 'app-cancelamento',
  templateUrl: './cancelamento.component.html',
  styleUrls: ['./cancelamento.component.scss']
})
export class CancelamentoComponent implements OnInit {
  public dateDe: Date;
  public dateAte: Date;
  public status: string;
  public category: string;
  public filterStatus: any = [];
  public filterCategory: any = [];

  VolumeCancellationsType: any = []
  VolumeCancellationsOptions: any = []
  VolumeCancellationsData: any = []
  VolumeCancellationsLabels: any = []
  VolumeCancellationsExportId = 'VolumeCancellationsExport'
  VolumeCancellationsExportIconId = 'VolumeCancellationsIcon'
  VolumeCancellationsFilterDataId = 'VolumeCancellationsFilterData'
  VolumeCancellationsTitle: string;

  insuranceCancellationsType: any = []
  insuranceCancellationsOptions: any = []
  insuranceCancellationsData: any = []
  insuranceCancellationsLabels: any = []
  insuranceCancellationsColor: any = []
  insuranceCancellationsExportId = 'insuranceCancellationsExport'
  insuranceCancellationsExportIconId = 'insuranceCancellationsIcon'
  insuranceCancellationsFilterDataId = 'insuranceCancellationsFilterData'
  insuranceCancellationsTitle: string;

  productCancellationType: any = []
  productCancellationOptions: any = []
  productCancellationData: any = []
  productCancellationLabels: any = []
  productCancellationColor: any = []
  productCancellationExportId = 'productCancellationExport'
  productCancellationExportIconId = 'productCancellationIcon'
  productCancellationFilterDataId = 'productCancellationFilterData'
  productCancellationTitle: string;

  loadingTemplate = this.loading.loadingTemplate;
  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  formFilter: FormGroup;

  constructor(
    public api: DashCancellationsService,
    public filterDashboard: FilterDashboardService,
    public loading: LoadingService,
    public activatedRoute: ActivatedRoute,
    private _adapter: DateAdapter<any>,
    private _translate: UtilService,
    private fb: FormBuilder

  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.VolumeCancellationsTitle = this._translate.getbarLineChartTitle();
    this.insuranceCancellationsTitle = this._translate.getpieCancelInsuranceChartTitle();
    this.productCancellationTitle = this._translate.getCancellationCategoryTitle();
    // Esconde a modal do filtro com classe
    $(document).mouseup(function (e) {
      const container = $('.filter-div');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
      // Filter
    })

    $('#filter-dashCancellation').on('click', () => {
      $('.filter-dashCancellation').fadeToggle('fast');
    });

    this._adapter.setLocale('br');
    this._createFormFilter();

    window.addEventListener('resize', () => {
      this.loadingVolumeCancellations();
      this.loadinginsuranceCancellations();
      this.loadinginproductCancellation();
    })

    this.loadingVolumeCancellations();
    this.loadinginsuranceCancellations();
    this.loadinginproductCancellation();

    this.filterStatus = this.activatedRoute.snapshot.data.filterStatus
    this.filterCategory = this.activatedRoute.snapshot.data.filterCategory

    const rs = document.readyState;
    switch (rs) {
      case 'interactive':
      case 'complete':
        this.loading.offLoadingMenuComponents();
        break;
    }
  }

  dateRangeChange() {
    if (this.dateDe > this.dateAte) {
      this.dateAte = this.dateDe;
    }
    if (!this.dateAte) {
      this.dateAte = this.dateDe;
    }
  }

  loadingVolumeCancellations() {

    let display: any = true;
    let fontSize = 12;
    let aspectRatio = 3;
    let beginAtZero = false

    if (screen.width < 768) {
      aspectRatio = 0;
      beginAtZero = true
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10;
    }

    this.VolumeCancellationsOptions = {
      responsive: true,
      aspectRatio: aspectRatio,
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

    this.activatedRoute.snapshot.data.cancellationsNumber.series[1]['type'] = 'line'

    this.VolumeCancellationsType = 'bar'
    this.VolumeCancellationsData = this.activatedRoute.snapshot.data.cancellationsNumber.series
    this.VolumeCancellationsLabels = this.activatedRoute.snapshot.data.cancellationsNumber.xAxys
  }

  loadinginsuranceCancellations() {

    const data = [], labels = []
    let fontSize = 12;
    let display = true;

    if (screen.width < 768) {
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10
    }

    this.insuranceCancellationsOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    };

    for (let i = 0; i < this.activatedRoute.snapshot.data.cancellationsSafe.length; i++) {
      const element = this.activatedRoute.snapshot.data.cancellationsSafe[i];
      data.push(element.value)
      labels.push(element.insurance)
    }
    this.insuranceCancellationsType = 'pie'
    this.insuranceCancellationsData = [
      {
        data: data
      }
    ]
    this.insuranceCancellationsLabels = labels
  }

  loadinginproductCancellation() {
    const data = [], labels = []

    let fontSize = 12;
    let display = true;

    if (screen.width < 768) {
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10
    }

    this.productCancellationOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    };

    for (let i = 0; i < this.activatedRoute.snapshot.data.cancellationsProduct.length; i++) {
      const element = this.activatedRoute.snapshot.data.cancellationsProduct[i];
      data.push(element.value)
      labels.push(element.insurance)
    }

    this.productCancellationType = 'pie'
    this.productCancellationData = [
      {
        data: data
      }
    ]
    this.productCancellationLabels = labels
  }

  VolumeCancellationsChangeDate(rangeDate: any) {
  }

  insuranceCancellationsChangeDate(rangeDate: any) {
  }

  productCancellationChangeDate(rangeDate: any) {
  }

  private _createFormFilter() {
    this.formFilter = this.fb.group({
      startDate: '',
      endDate: '',
      status: '',
      category: ''
    })
  }

  findCancellations() {
    const filter = this._filterValue;
    $('.filter-dashCancellation').fadeOut('fast');
  }

  get _filterValue(): any {
    return this.formFilter.value;
  }

}
