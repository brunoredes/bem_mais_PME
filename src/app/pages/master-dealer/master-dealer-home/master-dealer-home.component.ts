import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets } from 'chart.js';
import { DateAdapter } from '@angular/material/core';
import { UtilService } from 'app/helpers/utils';

@Component({
  templateUrl: './master-dealer-home.component.html',
  styleUrls: ['./master-dealer-home.component.scss']
})
export class MasterDealerHomeComponent implements OnInit {
  accumulatedValue;
  totalStoreCancellations;

  PerforLojasData: ChartDataSets[];
  PerforLojasLabels: string[];
  PerforLojasColor: any;
  PerforLojasOptions: any;
  PerforLojasType: any = 'line';
  PerforLojasExportId = 'PerforLojasExport';
  PerforLojasExportIconId = 'PerforLojasIcon';
  PerforLojasFilterDataId = 'PerforLojasFilterData';
  PerforLojasTitle: string


  VolVendasData: ChartDataSets[];
  VolVendasLabels: string[];
  VolVendasColor: any;
  VolVendasOptions: any;
  VolVendasType: any = 'line';
  VolVendasExportId = 'VolVendasExport';
  VolVendasExportIconId = 'VolVendasIcon';
  VolVendasFilterDataId = 'VolVendasFilterData';
  VolVendasTitle: string;

  VendasSeguroData: ChartDataSets[];
  VendasSeguroLabels: string[];
  VendasSeguroColor: any = [];
  VendasSeguroOptions: any;
  VendasSeguroType: any = 'pie';
  VendasSeguroExportId = 'VendasSeguroExport';
  VendasSeguroExportIconId = 'VendasSeguroIcon';
  VendasSeguroFilterDataId = 'VendasSeguroFilterData';
  VendasSeguroTitle: string;

  CatProdutosData: ChartDataSets[];
  CatProdutosLabels: string[];
  CatProdutosColor: any = [];
  CatProdutosOptions: any;
  CatProdutosType: any = 'pie';
  CatProdutosExportId = 'CatProdutosExport';
  CatProdutosExportIconId = 'CatProdutosIcon';
  CatProdutosFilterDataId = 'CatProdutosFilterData';
  CatProdutosTitle: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _adapter: DateAdapter<any>,
    private _translate: UtilService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.PerforLojasTitle = this._translate.getPerforLojasTitle();
    this.VolVendasTitle = this._translate.getSalesVolumeTitle();
    this.VendasSeguroTitle = this._translate.getInsuranceSalesTitle();
    this.CatProdutosTitle = this._translate.getProductCategoryTitle();
    this._adapter.setLocale('br');

    const {
      accumulatedValue,
      totalStoreCancellations,
      storePerformance,
      salesAmount,
      distributionOfSalesByInsurance,
      distributionOfSalesByProduct
    } = this._activatedRoute.snapshot.data.values;

    this.accumulatedValue = accumulatedValue;
    this.totalStoreCancellations = totalStoreCancellations;

    this.PerforLojasData = storePerformance.series;
    this.PerforLojasLabels = storePerformance.xAxys;

    this.VolVendasLabels = salesAmount.xAxys;
    salesAmount.series[1]['type'] = 'bar';
    this.VolVendasData = salesAmount.series;

    this.VendasSeguroData = [
      { data: distributionOfSalesByInsurance.map(e => e.percent) }
    ];
    this.VendasSeguroLabels = distributionOfSalesByInsurance.map(
      e => e.insurance
    );

    this.CatProdutosData = [
      { data: distributionOfSalesByProduct.map(e => e.percent) }
    ];
    this.CatProdutosLabels = distributionOfSalesByProduct.map(e => e.insurance);


    window.addEventListener('resize', () => {
      this.loadingPerforLojas();
      this.loadingCatProdutosData();
      this.loadingVendasSeguroData();
      this.loadingVolVendas();
    })

    this.loadingPerforLojas();
    this.loadingCatProdutosData();
    this.loadingVendasSeguroData();
    this.loadingVolVendas();
  }

  loadingPerforLojas() {

    let display: any = true;
    let fontSize = 12;

    if (screen.width < 768) {
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10;
    }

    this.PerforLojasOptions = {
      responsive: true,
      aspectRatio: 0,
      scales: {
        xAxes: [{
          display: display
        }],
        yAxes: [{
          ticks: {
            display: display,
            beginAtZero: true
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

    this.PerforLojasColor = [
      {
        backgroundColor: 'transparent',
        borderColor: '#005AAB',
        pointBackgroundColor: '#fff0',
        pointBorderColor: '#005AAB',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#005AAB'
      },
      {
        backgroundColor: 'transparent',
        borderColor: '#02296A',
        pointBackgroundColor: '#fff0',
        pointBorderColor: '#02296A',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#484848'
      },
      {
        backgroundColor: 'transparent',
        borderColor: '#041737',
        pointBackgroundColor: '#fff0',
        pointBorderColor: '#041737',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#041737'
      }
    ]
  }

  loadingVolVendas() {

    let display: any = true;
    let fontSize = 12;

    if (screen.width < 768) {
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10;
    }

    this.VolVendasOptions = {
      responsive: true,
      aspectRatio: 0,
      scales: {
        xAxes: [{
          display: display
        }],
        yAxes: [{
          ticks: {
            display: display,
            beginAtZero: true
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

    this.VolVendasColor = [
      {
        backgroundColor: 'transparent',
        borderColor: '#62BC00',
        pointBackgroundColor: '#62BC00',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#62BC00'
      },
      {
        backgroundColor: '#005AAB',
        borderColor: '#D5D5D5',
        pointBackgroundColor: '#484848',
        pointBorderColor: '#D5D5D5',
        pointHoverBackgroundColor: '#D5D5D5',
        pointHoverBorderColor: '#484848'
      }
    ]
  }

  loadingVendasSeguroData() {
    let fontSize = 12;
    let display = true;

    if (screen.width < 768) {
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10
    }

    this.VendasSeguroOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    };
  }

  loadingCatProdutosData() {
    let fontSize = 12;
    let display = true;

    if (screen.width < 768) {
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10
    }

    this.CatProdutosOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    };
  }

  PerforLojasChangeDate(rangeDate: any) {
  }

  VolVendasChangeDate(rangeDate: any) {
  }

  VendasSeguroChangeDate(rangeDate: any) {
  }

  CatProdutosChangeDate(rangeDate: any) {
  }

  format = value => new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
  formatPercent = value => new Intl.NumberFormat('pt-BR', {style: 'percent'}).format(value)
}
