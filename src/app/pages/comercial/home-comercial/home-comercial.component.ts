import { Component, OnInit } from '@angular/core';
import { HomeComercialService } from '../../../service/home-comercial.service';
import { FeedbackPercentModel } from '../../../models/feedback-percent.model';
import { SalesInsuranceModel } from '../../../models/sales-insurance.model';
import { WorstPartnersModel } from 'app/models/worst-partners.model';
import { BestPartnersModel } from 'app/models/best-partners.model';
import { NewInsterestedPartnersModel } from 'app/models/new-interested-partners.model';
import { SalesByStateModel } from 'app/models/sales-by-state.model';
import { SearchGoalsModel } from 'app/models/search-goals.model';
import { GoalsHomeModel } from 'app/models/goals-home.model';
import { ActivatedRoute } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { UtilService } from '../../../helpers/utils'

declare var $

@Component({
  selector: 'app-home-comercial',
  templateUrl: './home-comercial.component.html',
  styleUrls: ['./home-comercial.component.scss']
})

export class HomeComercialComponent implements OnInit {

  goals: GoalsHomeModel[];
  searchGoals: SearchGoalsModel[];
  salesByState: SalesByStateModel[];
  newInterestedPartners: NewInsterestedPartnersModel[];
  feedbackPercent: FeedbackPercentModel;
  bestPartners: BestPartnersModel[];
  worstPartners: WorstPartnersModel[];
  salesInsurance: SalesInsuranceModel[];
  maior = true;
  menor = false;

  salesStateData: any;
  salesStateLabels: any;
  salesStateOptions: any
  salesStateColor: any;
  salesStateType: any;

  safeVendasData: any;
  safeVendasLabels: any;
  safeVendasOptions: any
  safeVendasColor: any;
  safeVendasType: any;
  safeVendasExportId = 'safeVendasExport';
  safeVendasExportIconId = 'safeVendasIcon';
  safeVendasFilterDataId = 'safeVendasFilterData';
  safeVendasTitle = 'safeVendasTitle';

  resaleDataColors: any = [
    'rgba(0, 90, 171, 1)',
    'rgba(0, 0, 0, 0.1)',
  ];

  constructor(
    private _apiHomeComercial: HomeComercialService,
    private activatedRoute: ActivatedRoute,
    private _adapter: DateAdapter<any>,
    private _translate: UtilService,
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.safeVendasTitle = this._translate.getsafeVendasTitle();
    this._adapter.setLocale('br');

    window.addEventListener('resize', () => {
      this.loadingSalesByState();
      this.loadingSalesInsurance();
    })

    this.loadingGoals();
    this.loadingSearchGoals();
    this.loadingSalesByState();
    this.loadingNewInterestedPartners();
    this.loadingFeedbackPercent();
    this.loadingBestPartners();
    this.loadingWorstPartners();
    this.loadingSalesInsurance();

  }

  maiorf() {
    this.maior = true
    this.menor = false
    this.resaleDataColors = [
      'rgba(0, 90, 171, 1)',
      'rgba(0, 0, 0, 0.1)',
    ]
  }

  menorf() {
    this.maior = false
    this.menor = true
    this.resaleDataColors = [
      '#ff3636',
      'rgba(0, 0, 0, 0.1)',
    ]
  }

  loadingGoals() {
    this.goals = this.activatedRoute.snapshot.data.dataGoals
  }

  loadingSearchGoals() {
    this.searchGoals = this.activatedRoute.snapshot.data.dataSearchGoals
  }

  loadingSalesByState() {

    const labels = [];
    const data = [];

    let aspectRatio = 3;
    let display = true;
    let barThickness = 15;

    if (screen.width < 768) {
      aspectRatio = 0;
      display = false;
      barThickness = 5;
    }

    this.salesByState = this.activatedRoute.snapshot.data.dataSalesByState;

    if (this.salesByState) {
      this.salesByState.forEach((value) => {
        labels.push(value.state);
        data.push(value.value);
      });
    }

    this.salesStateData = [
      {
        barThickness: barThickness,
        data: data
      }
    ]

    this.salesStateLabels = labels;

    this.salesStateOptions = {
      responsive: true,
      aspectRatio: aspectRatio,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          display: display,
          stacked: true
        }],
        yAxes: [{
          display: display,
          stacked: true
        }]
      }
    }

    this.salesStateColor = [
      {
        backgroundColor: '#1862c6',
        borderColor: '#1862c6',
        pointBackgroundColor: '#1862c6',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#1862c6',
        pointRadius: 1,
        pointHoverRadius: 1
      }
    ]
    this.salesStateType = 'bar';
  }

  loadingNewInterestedPartners() {
    this.newInterestedPartners = this.activatedRoute.snapshot.data.dataNewInterestedPartners;
  }

  loadingFeedbackPercent() {
    this.feedbackPercent = this.activatedRoute.snapshot.data.dataFeedbackPercent;

    const dial = $('.dial .inner');
    const gauge_value = $('.gauge .value');

    const deg = (this.feedbackPercent.percent * 177.5) / 100;

    gauge_value.html(this.feedbackPercent.percent + '%');

    dial.css({ 'transform': 'rotate(' + deg + 'deg)' });
    dial.css({ '-ms-transform': 'rotate(' + deg + 'deg)' });
    dial.css({ '-moz-transform': 'rotate(' + deg + 'deg)' });
    dial.css({ '-o-transform': 'rotate(' + deg + 'deg)' });
    dial.css({ '-webkit-transform': 'rotate(' + deg + 'deg)' });

  }

  loadingBestPartners() {
    this.bestPartners = this.activatedRoute.snapshot.data.dataBestPartners;
  }

  loadingWorstPartners() {
    this.worstPartners = this.activatedRoute.snapshot.data.dataWorstPartners;
  }

  loadingSalesInsurance() {
    const safe = this.activatedRoute.snapshot.data.dataSalesInsurance
    const data = [], labels = []

    let scales: any;
    let aspectRatio: any = 3;

    if (screen.width < 768) {
      aspectRatio = 0;
      scales = {
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true
          },
        }],
        yAxes: [{
          display: false,
          barThickness: 10
        }]
      };
    }

    this.safeVendasOptions = {
      responsive: true,
      aspectRatio: aspectRatio,
      scales: scales,
      legend: {
        display: false,
      },
    }

    safe.forEach((value) => {
      labels.push(value.insurance);
      data.push(value.amount);
    });

    this.safeVendasType = 'horizontalBar'

    this.safeVendasData = [
      {
        barThickness: 15,
        data: data
      }
    ]
    this.safeVendasLabels = labels
    this.safeVendasColor = [
      {
        backgroundColor: '#1862c6',
        borderColor: '#1862c6',
        pointBackgroundColor: '#1862c6',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#1862c6',
      }
    ]
  }

  safeVendasChangeDate(rangeDate: any) {
  }

  format = value => Intl.NumberFormat('pt-BR', {style: 'decimal'}).format(value)

}
