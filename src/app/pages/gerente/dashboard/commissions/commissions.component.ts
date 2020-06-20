import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DateAdapter } from '@angular/material';
import { UtilService } from 'app/helpers/utils';

declare const $: any;

@Component({
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.scss']
})
export class CommissionsComponent implements OnInit {

  comissaoVendasType: any = []
  comissaoVendasOptions: any = []
  comissaoVendaData: any = []
  comissaoVendaLabels: any = []
  comissaoVendaColor: any = []
  comissaoVendaExportId = 'comissaoVendaExport'
  comissaoVendaExportIconId = 'comissaoVendaIcon'
  comissaoVendaFilterDataId = 'comissaoVendaFilterData'
  comissaoVendaTitle: string;

  historySalesTriType: any = []
  historySalesTriOptions: any = []
  historySalesTriData: any = []
  historySalesTriLabels: any = []
  historySalesTriColor: any = []
  historySalesTriExportId = 'historySalesTriExport'
  historySalesTriExportIconId = 'historySalesTriExportIcon'
  historySalesTriFilterDataId = 'historySalesTriFilterData'
  historySalesTriTitle: string; // = 'Histórico de Vendas por Trimestre'

  lossCommissionsType: any = []
  lossCommissionsOptions: any = []
  lossCommissionsData: any = []
  lossCommissionsLabels: any = []
  lossCommissionsColor: any = []
  lossCommissionsExportId = 'lossCommissionExport'
  lossCommissionsExportIconId = 'lossCommissionExportIcon'
  lossCommissionsFilterDataId = 'lossCommissionFilterData'
  lossCommissionsTitle: string; // = 'Perda de Comissões'

  top: any = []
  formFilter: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _adapter: DateAdapter<any>,
    private _translate: UtilService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.comissaoVendaTitle = this._translate.getComissaoVendaTitle();
    this.historySalesTriTitle = this._translate.getHistorySalesTriTitle();
    this.lossCommissionsTitle = this._translate.getLossCommissionsTitle();
    this._adapter.setLocale('br');
    this._createFormFilter();
    $('#filter-dashCommission').on('click', () => {
      $('.filter-dashCommission').fadeToggle('fast');
    });
    window.addEventListener('resize', () => {
      this.loadingCommisionSales();
      this.loadingHistorySalesTri();
      this.loadingLossCommissions();
    })
    this.loadingCommisionSales();
    this.loadingHistorySalesTri();
    this.loadingLossCommissions();

    this.top = this.routerData().top.goals
    setTimeout(() => {
      for (let i = 0; i < this.top.length; i++) {
        const element = this.top[i];
        const div = document.getElementById(`top${element.id}`)
        div.style.width = `${element.percent}%`
      }
    }, 100);
  }

  loadingCommisionSales() {

    const commissionSales = this.routerData().vendor

    const data = [], labels = []

    let fontSize = 12;
    let display = true;

    if (screen.width < 768) {
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10
    }

    this.comissaoVendasOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    };

    for (let i = 0; i < commissionSales.length; i++) {
      const element = commissionSales[i];
      data.push(element.value)
      labels.push(`${element.insurance}`)
    }
    this.comissaoVendasType = 'pie'
    this.comissaoVendaData = [
      {
        data: data
      }
    ]
    this.comissaoVendaLabels = labels

  }

  loadingHistorySalesTri() {

    const HistorySalesTri = this.routerData().history

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

    this.historySalesTriOptions = {
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

    this.historySalesTriType = 'bar'
    this.historySalesTriData = HistorySalesTri.series
    this.historySalesTriLabels = HistorySalesTri.xAxys
  }

  loadingLossCommissions() {

    const lossComissions = this.routerData().perda

    let display: any = true;
    let fontSize = 12;
    let aspectRatio = 3;
    let beginAtZero = false
    const data = [], labels = []
    lossComissions.forEach(element => {
      data.push(element.value)
      labels.push(element.insurance)
    });
    if (screen.width < 768) {
      aspectRatio = 0;
      beginAtZero = true
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10;
    }

    this.lossCommissionsOptions = {
      responsive: true,
      aspectRatio: aspectRatio,
      scales: {
        xAxes: [{
          display: display,
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          ticks: {
            display: false,
            beginAtZero: beginAtZero
          },
          gridLines: {
            display: false
          }
        }]
      },
      legend: {
        display: false,
        labels: {
          fontSize: fontSize
        }
      }
    }

    this.lossCommissionsType = 'line'
    this.lossCommissionsData = [
      {
        data: data
      }
    ]
    this.lossCommissionsLabels = labels
    this.lossCommissionsColor = [
      {
        backgroundColor: 'transparent',
        borderColor: '#005AAB',
        pointBackgroundColor: '#DEE4E8',
        pointBorderColor: '#005AAB',
        pointHoverBackgroundColor: '#005AAB',
        pointHoverBorderColor: '#DEE4E8'
      }
    ]

  }

  comissaoVendaChangeDate(rangeDate: any) {
  }

  historySalesTriChangeDate(rangeDate: any) {
  }

  lossCommissionsChangeDate(rangeDate: any) {
  }

  private _createFormFilter() {
    this.formFilter = this.fb.group({
      startDate: '',
      endDate: '',
      status: '',
      category: ''
    })
  }

  findCommission() {
    const filter = this._filterValue;
    $('.filter-dashCommission').fadeOut('fast');
  }

  get _filterValue(): any {
    return this.formFilter.value;
  }

  routerData = () => {
    return this.activatedRoute.snapshot.data.values
  }

  format = value => new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)

}
