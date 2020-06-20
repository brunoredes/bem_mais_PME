import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../../../../helpers/utils'
declare const $: any;
@Component({
  templateUrl: './extracts.component.html',
  styleUrls: ['./extracts.component.scss']
})
export class ExtractsComponent implements OnInit {
  GeralData: any;
  GeralLabels: any;
  GeralColors: any;
  GeralOptions: any;
  GeralType: any;
  GeralExportId = 'GeralExport'
  GeralExportIconId = 'GeralIcon'
  GeralFilterDataId = 'GeralFilterData'
  GeralTitle = 'GeralTitle'

  period: string;
  startDate: Date;
  endDate: Date;

  extrato: any
  table: any
  detalhe: any

  constructor(
    private _adapter: DateAdapter<any>,
    private _translate: UtilService,
    private activatedRoute: ActivatedRoute
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
            });
    this.GeralTitle = this._translate.getGeralTitle();
    this._adapter.setLocale('br');
    this.loadingGeralChart();

    window.addEventListener('resize', () => {
      this.loadingGeralChart();
    })
    this.extrato = this.activatedRoute.snapshot.data.extrato.extract
    this.table = this.activatedRoute.snapshot.data.detalhe.records
    this.detalhe = this.activatedRoute.snapshot.data.detalhe
      for (let i = 0; i < this.extrato.length; i++) {
      const color = this.extrato[i].color;
      const id = this.extrato[i].id;
      setTimeout(() => {
        document.getElementById(`color-border${id}`).classList.add(`border-color-${color}`)
        document.getElementById(`color-line${id}`).classList.add(`bg-${color}`)
      }, 10);
    }
  }

  loadingGeralChart() {
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
    this.GeralType = 'bar'
    this.GeralData = this.activatedRoute.snapshot.data.grafico.series
    this.GeralLabels = this.activatedRoute.snapshot.data.grafico.xAxys
    this.GeralOptions = {
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

  }

  changePeriod() {

    if (this.period === 'Semanal') {
      this.startDate = new Date();
      this.endDate = new Date(new Date().setDate(new Date().getDate() + 7));
    } else if (this.period === 'Quinzenal') {
      this.startDate = new Date();
      this.endDate = new Date(new Date().setDate(new Date().getDate() + 14));
    } else if (this.period === 'Periodo') {
      this.startDate = undefined;
      this.endDate = undefined;
    }
  }

  containerExport() {
    if (document.getElementById('containerExport').style.display === 'block') {
      document.getElementById('containerExport').style.display = 'none';
      document.getElementById('iconExport').classList.remove('fa-chevron-up');
      document.getElementById('iconExport').classList.add('fa-chevron-down');
    } else {
      document.getElementById('containerExport').style.display = 'block';
      document.getElementById('iconExport').classList.remove('fa-chevron-down');
      document.getElementById('iconExport').classList.add('fa-chevron-up');
    }
  }

  GeralChangeDate(rangeDate: any) {
  }

  format = value => new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
}
