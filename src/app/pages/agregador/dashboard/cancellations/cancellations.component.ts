import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { UtilService } from 'app/helpers/utils';

declare const $;

@Component({
  templateUrl: './cancellations.component.html',
  styleUrls: ['./cancellations.component.scss']
})
export class CancellationsComponent implements OnInit {

  VolumeCancellationsType: any = []
  VolumeCancellationsOptions: any = []
  VolumeCancellationsData: any = []
  VolumeCancellationsLabels: any = []
  VolumeCancellationsExportId = 'VolumeCancellationsExport'
  VolumeCancellationsExportIconId = 'VolumeCancellationsIcon'
  VolumeCancellationsFilterDataId = 'VolumeCancellationsFilterData'
  VolumeCancellationsTitle: string

  insuranceCancellationsType: any = []
  insuranceCancellationsOptions: any = []
  insuranceCancellationsData: any = []
  insuranceCancellationsLabels: any = []
  insuranceCancellationsColor: any = []
  insuranceCancellationsExportId = 'insuranceCancellationsExport'
  insuranceCancellationsExportIconId = 'insuranceCancellationsIcon'
  insuranceCancellationsFilterDataId = 'insuranceCancellationsFilterData'
  insuranceCancellationsTitle: string

  productCancellationType: any = []
  productCancellationOptions: any = []
  productCancellationData: any = []
  productCancellationLabels: any = []
  productCancellationColor: any = []
  productCancellationExportId = 'productCancellationExport'
  productCancellationExportIconId = 'productCancellationIcon'
  productCancellationFilterDataId = 'productCancellationFilterData'
  productCancellationTitle: string
  formFilter: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _adapter: DateAdapter<any>,
    private _translate: UtilService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this._adapter.setLocale('br');

    window.addEventListener('resize', () => {
      this.loadingVolumeCancellations();
      this.loadinginsuranceCancellations();
      this.loadinginproductCancellation();
    })

    this.loadingVolumeCancellations();
    this.loadinginsuranceCancellations();
    this.loadinginproductCancellation();
    this._createFormFilter();

    $('#filter-dashCancellations').on('click', () => {
      $('.filter-dashCancellations').fadeToggle('fast');
    });
    this.VolumeCancellationsTitle = this._translate.getbarLineChartTitle();
    this.insuranceCancellationsTitle = this._translate.getCancellationSafeTitle();
    this.productCancellationTitle = this._translate.getCancellationCategoryTitle();

    $(document).mouseup(function(e) {
      const container = $('.filter-div');
      if (!container.is(e.target) && container.has(e.target).length === 0)
      {
          container.hide();
      }
      // Filter
    });
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

    this.activatedRoute.snapshot.data.cancelados.series[1]['type'] = 'line'

    this.VolumeCancellationsType = 'bar'
    this.VolumeCancellationsData = this.activatedRoute.snapshot.data.cancelados.series
    this.VolumeCancellationsLabels = this.activatedRoute.snapshot.data.cancelados.xAxys
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

    for (let i = 0; i < this.activatedRoute.snapshot.data.insurance.length; i++) {
      const element = this.activatedRoute.snapshot.data.insurance[i];
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

    for (let i = 0; i < this.activatedRoute.snapshot.data.category.length; i++) {
      const element = this.activatedRoute.snapshot.data.category[i];
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
      partner: '',
      store: ''
    })
  }

  findCancellations() {
    const filter = this._filterValue;
    $('.filter-dashCancellations').fadeOut('fast');
  }

  get _filterValue(): any {
    return this.formFilter.value;
  }

}
