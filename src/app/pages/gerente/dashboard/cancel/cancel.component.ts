import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { UtilService } from 'app/helpers/utils';

declare const $: any;

@Component({
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent implements OnInit {

  DistributionSecurityType: any = []
  DistributionSecurityOptions: any = []
  DistributionSecurityData: any = []
  DistributionSecurityLabels: any = []
  DistributionSecurityColors: any = []
  DistributionSecurityExportId = 'distributionSecurityExport'
  DistributionSecurityExportIconId = 'distributionSecurityIcon'
  DistributionSecurityFilterDataId = 'distributionSecurityFilterData'
  DistributionSecurityTitle: string;

  DistributionProductsType: any = []
  DistributionProductsOptions: any = []
  DistributionProductsData: any = []
  DistributionProductsLabels: any = []
  DistributionProductsColors: any = []
  DistributionProductsExportId = 'distributioProductsExport'
  DistributionProductsExportIconId = 'distributionProductsIcon'
  DistributionProductsFilterDataId = 'distributionProductsFilterData'
  DistributionProductsTitle: string;

  CancellationVolumeData: any = []
  CancellationVolumeLabels: any = []
  CancellationVolumeColor: any = []
  CancellationVolumeOptions: any = []
  CancellationVolumeType: any = 'bar'
  CancellationVolumeExportId = 'CancellationVolumeExport'
  CancellationVolumeExportIconId = 'CancellationVolumeIcon'
  CancellationVolumeFilterDataId = 'CancellationVolumeFilterData'
  CancellationVolumeTitle: string; // = 'Volume de Cancelamento'

  formFilter: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _adapter: DateAdapter<any>,
    private _translate: UtilService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.DistributionSecurityTitle = this._translate.getInsuranceSalesTitle();
    this.DistributionProductsTitle = this._translate.getpieSalesCategoryChartTitle();
    this.CancellationVolumeTitle = this._translate.getbarLineChartTitle();
    this._createFormFilter();
    this._adapter.setLocale('br');

    $('#filter-dashCancelation').on('click', () => {
      $('.filter-dashCancelation').fadeToggle('fast');
    });

    window.addEventListener('resize', () => {
      this.loadingDistributionSecurity();
      this.loadingDistributionProducts();
      this.loadingVolume();
    })

    this.loadingDistributionSecurity();
    this.loadingDistributionProducts();
    this.loadingVolume();
  }


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

    this.routeData().categoria.forEach(element => {
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

    this.routeData().seguro.forEach(element => {
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

  loadingVolume() {
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

    this.CancellationVolumeOptions = {
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
      },

    }

    this.routeData().volume.series[1]['type'] = 'line'
    this.CancellationVolumeData = this.routeData().volume.series
    this.CancellationVolumeLabels = this.routeData().volume.xAxys
    this.CancellationVolumeColor = [
      {

      },
      {

        backgroundColor: 'transparent',
        borderColor: '#02296A'

      }
    ]

  }

  CancellationVolumeChangeDate(rangeDate: any) {
  }

  private routeData = () => {
    return this.activatedRoute.snapshot.data.values
  }

  private _createFormFilter() {
    this.formFilter = this.fb.group({
      startDate: '',
      endDate: '',
      status: '',
      category: ''
    })
  }

  findCancelation() {
    const filter = this._filterValue;
    $('.filter-dashCancelation').fadeOut('fast');
  }

  get _filterValue(): any {
    return this.formFilter.value;
  }
}
