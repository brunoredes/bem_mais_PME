import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from 'app/helpers/utils';
import { UfService } from 'app/service/uf.service';

declare const $: any;
const PRIMARY_COLOR = '#02296A';
const SECONDARY_COLOR = '#005AAB';
const TERCIARY_COLOR = '#03193D'
@Component({
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  SalesHistoryData: any
  SalesHistoryLabels: any
  SalesHistoryColor: any
  SalesHistoryOptions: any
  SalesHistoryType: any = 'bar'
  SalesHistoryTitle: string; // = 'Histórico de Vendas'
  SalesHistoryInformations: any
  SalesHistoryFilter = 'SalesHistoryFilter'

  InsuranceCanceledData: any
  InsuranceCanceledLabels: any
  InsuranceCanceledColors: any
  InsuranceCanceledOptions: any
  InsuranceCanceledInformations: any
  InsuranceCanceledType: any = 'bar'
  InsuranceCanceledTitle: string; // = 'Seguro Cancelados'
  InsuranceCanceledFilter = 'InsuranceCanceledFilter'

  ResellerPerformanceData: any
  ResellerPerformanceLabels: any
  ResellerPerformanceColor: any
  ResellerPerformanceOptions: any
  ResellerPerformanceType: any = 'line'
  ResellerPerformanceTitle: string; // = 'Performance da Revenda'
  ResellerPerformanceFilterId = 'ResellerPerformanceFilterId'

  volumeSalesByResaleDe: Date = new Date();
  volumeSalesByResaleAte: Date = new Date();

  salesBySellerFormFilter: FormGroup;
  reseller: any;
  sellers: any;
  uf: any;
  cities: string[] = [];

  constructor(
    private fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _adapter: DateAdapter<any>,
    private _ufService: UfService,
    private _translate: UtilService
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
            }),
    this.SalesHistoryTitle = this._translate.getMasterDealerDashboardSalesHist();
    this.InsuranceCanceledTitle = this._translate.getMasterDealerDashCancelIns();
    this.ResellerPerformanceTitle = this._translate.getMasterDealerDashboardPerfResel();
    this._adapter.setLocale('br');

    window.addEventListener('resize', () => {
      this.salesHistory();
      this.InsuranceCanceled();
      this.ResellerPerformance();
    })

    this.reseller = this.routeData.reseller
    this.sellers = this.routeData.sellers
    this.uf = this.routeData.uf

    this.routeData.reseller.forEach(element => {
      setTimeout(() => {
        document.getElementById(`reseller${element.position}`).style.width = `${element.percent}%`
      }, 10);
    });
    this.routeData.sellers.forEach(element => {
      setTimeout(() => {
        document.getElementById(`sellers${element.position}`).style.width = `${element.percent}%`
      }, 10);
    });


    this.salesHistory();
    this.InsuranceCanceled();
    this.ResellerPerformance();

    this._createFormFilterSalesBySeller();

  }

  salesHistory() {

    let display: any = true;
    let fontSize = 12;
    let barThickness = 15;

    if (screen.width < 768) {
      display = false;
      barThickness = 10;
    } else if (screen.width < 1024) {
      fontSize = 10;
    }

    this.SalesHistoryOptions = {
      responsive: true,
      aspectRatio: 0,
      scales: {
        xAxes: [{
          display: display,
          stacked: true,
          barThickness: barThickness
        }],
        yAxes: [{
          ticks: {
            display: display,
            beginAtZero: true
          },
          stacked: true
        }]
      },
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    }

    this.SalesHistoryData = this.routeData.salesHistory.series.map((e, index) => {
      const backgroundColor = index % 2 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR;
      return {
        data: e.data, label: e.name, backgroundColor, barThickness: 15
      };
    });

    this.SalesHistoryLabels = this.routeData.salesHistory.xAxys;
    this.SalesHistoryColor = []

    this.SalesHistoryInformations = this.routeData.salesHistory.financialSummary.map(e => {
      return {
        name: e.name, value: e.amount
      };
    });
  }

  SalesHistoryChangeDate(rangeDate: any) {
  }

  InsuranceCanceled() {

    let display: any = true;
    let fontSize = 12;
    let barThickness = 15;

    if (screen.width < 768) {
      display = false;
      barThickness = 10;
    } else if (screen.width < 1024) {
      fontSize = 10;
    }

    this.InsuranceCanceledOptions = {
      responsive: true,
      aspectRatio: 0,
      scales: {
        xAxes: [{
          display: display,
          stacked: true,
          barThickness: barThickness
        }],
        yAxes: [{
          ticks: {
            display: display,
            beginAtZero: true
          },
          stacked: true
        }]
      },
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    }

    this.InsuranceCanceledData = this.routeData.canceledInsurance.series.map((e, index) => {
      const backgroundColor = index % 2 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR;
      return {
        data: e.data, label: e.name, backgroundColor, barThickness: 15
      };
    });

    this.InsuranceCanceledLabels = this.routeData.canceledInsurance.xAxys;
    this.InsuranceCanceledColors = []
    this.InsuranceCanceledInformations = this.routeData.canceledInsurance.financialSummary.map(e => {
      return {
        name: e.name, value: e.amount
      };
    });
  }

  showFilterCalendar(id: string) {
    if (document.getElementById(id).style.display === 'block') {
      document.getElementById(id).style.display = 'none';
    } else {
      document.getElementById(id).style.display = 'block';
    }
  }

  dateRangeChange() {
    if (this.volumeSalesByResaleDe > this.volumeSalesByResaleAte) {
      this.volumeSalesByResaleAte = this.volumeSalesByResaleDe;
    }
    if (!this.volumeSalesByResaleAte) {
      this.volumeSalesByResaleAte = this.volumeSalesByResaleDe;
    }
  }

  InsuranceCanceledChangeDate(rangeDate: any) {
  }

  ResellerPerformance() {
    const data = []
    const label = []
    const api = this.routeData.performance
    api.forEach(element => {
      data.push(element.value)
      label.push(element.insurance)
    });
    this.ResellerPerformanceData = [{
      data: data
    }]
    this.ResellerPerformanceLabels = label
    this.ResellerPerformanceColor = [
      {
        backgroundColor: 'transparent',
        borderColor: '#035DAE',
        pointBackgorundColor: '#035DAE'

      }
    ]
    this.ResellerPerformanceOptions = {
      responsive: true,
      aspectRatio: 3,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          ticks: {
            display: false,
            beginAtZero: 0
          },
          gridLines: {
            display: false
          }
        }]
      },

    }
  }

  ResellerPerformanceChangeDate(rangeDate: any) {
  }

  get routeData() {
    return this._activatedRoute.snapshot.data.values;
  }

  InsuranceCanceledFilterChart(filter: any) {
  }

  SalesHistoryFilterChart(filter: any) {
  }

  ResellerPerformanceFilterChart(filter: any) {
  }

  private _createFormFilterSalesBySeller() {
    this.salesBySellerFormFilter = this.fb.group({
      startDate: '',
      endDate: '',
      resale: '',
      uf: '',
      city: ''
    })
  }

  filter(id: string) {
    const filter = this._filterValue;
    this.showFilterCalendar(id);
  }

  get _filterValue(): any {
    return this.salesBySellerFormFilter.value;
  }

  change() {
    const id = this.salesBySellerFormFilter.get('uf').value;
    this._ufService.getCidade(id).subscribe(res => {
      this.cities = res;
    })
  }

  format = value => new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)

}
