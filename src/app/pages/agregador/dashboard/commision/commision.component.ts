import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { UtilService } from 'app/helpers/utils';

declare const $;

@Component({
  templateUrl: './commision.component.html',
  styleUrls: ['./commision.component.scss']
})
export class CommisionComponent implements OnInit {
  comissaoVendasType: any = []
  comissaoVendasOptions: any = []
  comissaoVendaData: any = []
  comissaoVendaLabels: any = []
  comissaoVendaColor: any = []
  comissaoVendaExportId = 'comissaoVendaExport'
  comissaoVendaExportIconId = 'comissaoVendaIcon'
  comissaoVendaFilterDataId = 'comissaoVendaFilterData'
  comissaoVendaTitle: string // = 'Comissão por Vendedor'

  historySalesTriType: any = []
  historySalesTriOptions: any = []
  historySalesTriData: any = []
  historySalesTriLabels: any = []
  historySalesTriColor: any = []
  historySalesTriExportId = 'historySalesTriExport'
  historySalesTriExportIconId = 'historySalesTriExportIcon'
  historySalesTriFilterDataId = 'historySalesTriFilterData'
  historySalesTriTitle: string// = 'Histórico de Vendas por Trimestre'

  lossCommissionsType: any = []
  lossCommissionsOptions: any = []
  lossCommissionsData: any = []
  lossCommissionsLabels: any = []
  lossCommissionsColor: any = []
  lossCommissionsExportId = 'lossCommissionExport'
  lossCommissionsExportIconId = 'lossCommissionExportIcon'
  lossCommissionsFilterDataId = 'lossCommissionFilterData'
  lossCommissionsTitle: string// = 'Perda de Comissões'

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
    // Esconde a modal do filtro com classe
    $(document).mouseup(function (e) {
      const container = $('.filter-div');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
      // Filter
    })

    this.comissaoVendaTitle = this._translate.getComissaoVendaTitle();
    this.historySalesTriTitle = this._translate.getHistorySalesTriTitle();
    this.lossCommissionsTitle = this._translate.getLossCommissionsTitle();

    this._adapter.setLocale('br');

    window.addEventListener('resize', () => {
      this.loadingCommisionSales();
      this.loadingHistorySalesTri();
      this.loadingLossCommissions();
    })

    this.loadingCommisionSales();
    this.loadingHistorySalesTri();
    this.loadingLossCommissions();
    this._createFormFilter();

    this.top = this.activatedRoute.snapshot.data.top.goals

    setTimeout(() => {
      for (let i = 0; i < this.top.length; i++) {
        const element = this.top[i];
        const div = document.getElementById(`top${element.id}`)
        div.style.width = `${element.percent}%`
      }
    }, 10);

    $('#filter-dashCommission').on('click', () => {
      $('.filter-dashCommission').fadeToggle('fast');
    });

  }

  loadingCommisionSales() {
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

    for (let i = 0; i < this.activatedRoute.snapshot.data.comissao.length; i++) {
      const element = this.activatedRoute.snapshot.data.comissao[i];
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
    this.historySalesTriData = this.activatedRoute.snapshot.data.historico.series
    this.historySalesTriLabels = this.activatedRoute.snapshot.data.historico.xAxys
  }

  loadingLossCommissions() {

    let display: any = true;
    let fontSize = 12;
    let aspectRatio = 3;
    let beginAtZero = false
    const data = [], labels = []
    this.activatedRoute.snapshot.data.perda.forEach(element => {
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
      partner: '',
      store: ''
    })
  }

  findCommission() {
    const filter = this._filterValue;
    $('.filter-dashCommission').fadeOut('fast');
  }

  get _filterValue(): any {
    return this.formFilter.value;
  }

  format = value => new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
}
