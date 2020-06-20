import { Component, OnInit } from '@angular/core';
import { OrderDashModel } from 'app/models/orderDash.model';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { UtilService } from 'app/helpers/utils';

declare const $: any;

@Component({
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})

export class SalesComponent implements OnInit {

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

  PerformanceSalesmanData: any
  PerformanceSalesmanLabels: any
  PerformanceSalesmanColor: any
  PerformanceSalesmanOptions: any
  PerformanceSalesmanType: any = 'line'
  PerformanceSalesmanExportId = 'PerformanceSalesmanExport'
  PerformanceSalesmanExportIconId = 'PerformanceSalesmanIcon'
  PerformanceSalesmanFilterDataId = 'PerformanceSalesmanFilterData'
  PerformanceSalesmanTitle: string;

  salesOrders: OrderDashModel[] = []
  ranking = []
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
    this.PerformanceSalesmanTitle = this._translate.getManagerDashPerformBySel();
    // Esconde a modal do filtro com classe
    $(document).mouseup(function (e) {
      const container = $('.filter-div');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
      // Filter
    }),

      $('#filter-dashSales').on('click', () => {
        $('.filter-dashSales').fadeToggle('fast');
      });

    this._createFormFilter();
    this._adapter.setLocale('br');

    window.addEventListener('resize', () => {
      this.loadingDistributionSecurity();
      this.loadingDistributionProducts();
      this.loadingPerformance();
    })

    this.loadingDistributionSecurity();
    this.loadingDistributionProducts();
    this.loadingPerformance();

    this.salesOrders = this.routeData().orders.orders
    this.ranking = this.routeData().ranking.goals
    this.ranking.forEach(element => {
      setTimeout(() => {
        const el = document.getElementById(`barra${element.id}`)
        el.style.width = `${element.percent}%`
      }, 1);
    });
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

    this.routeData().vendasCategoria.forEach(element => {
      data.push(element.value);
      labels.push(element.insurance);
    });

    this.DistributionProductsType = 'pie'
    this.DistributionProductsData = [{ data: data }]
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

    this.routeData().vendasSeguro.forEach(element => {
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

  loadingPerformance() {

    let display: any = true;
    let fontSize = 12;

    if (screen.width < 768) {
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10;
    }

    this.PerformanceSalesmanOptions = {
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

    this.PerformanceSalesmanData = this.routeData().performance.series
    this.PerformanceSalesmanLabels = this.routeData().performance.xAxys
    this.PerformanceSalesmanColor = [
      {

        backgroundColor: 'transparent',
        borderColor: '#005AAB'

      },
      {

        backgroundColor: 'transparent',
        borderColor: '#02296A'

      },
      {

        backgroundColor: 'transparent',
        borderColor: '#FF3636'

      },
      {

        backgroundColor: 'transparent',
        borderColor: '#aa3321'

      },
      {

        backgroundColor: 'transparent',
        borderColor: '#111abb'

      }
    ]
  }

  PerformanceSalesmanChangeDate(rangeDate: any) {
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

  findSales() {
    const filter = this._filterValue;
    $('.filter-dashSales').fadeOut('fast');
  }

  get _filterValue(): any {
    return this.formFilter.value;
  }

  format = value => new Intl.NumberFormat('pt-BR', {style: 'decimal'}).format(value)

}
