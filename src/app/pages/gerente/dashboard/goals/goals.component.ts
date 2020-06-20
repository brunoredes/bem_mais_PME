import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { UtilService } from 'app/helpers/utils';

declare const $: any;

@Component({
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  GoalsSalespeopleData: any
  GoalsSalespeopleLabels: any
  GoalsSalespeopleColor: any
  GoalsSalespeopleOptions: any
  GoalsSalespeopleType: any = 'bar'
  GoalsSalespeopleExportId = 'GoalsSalespeopleExport'
  GoalsSalespeopleExportIconId = 'GoalsSalespeopleIcon'
  GoalsSalespeopleFilterDataId = 'GoalsSalespeopleFilterData'
  GoalsSalespeopleTitle: string; // = 'Metas Cadastradas para Vendedores'

  GoalsStoresData: any
  GoalsStoresLabels: any
  GoalsStoresColor: any
  GoalsStoresOptions: any
  GoalsStoresType: any = 'bar'
  GoalsStoresExportId = 'GoalsStoresExport'
  GoalsStoresExportIconId = 'GoalsStoresIcon'
  GoalsStoresFilterDataId = 'GoalsStoresFilterData'
  GoalsStoresTitle: string; // = 'Metas Cadastradas para as Lojas'

  InsuranceGoalsData: any
  InsuranceGoalsLabels: any
  InsuranceGoalsColor: any
  InsuranceGoalsOptions: any
  InsuranceGoalsType: any = 'pie'
  InsuranceGoalsExportId = 'InsuranceGoalsExport'
  InsuranceGoalsExportIconId = 'InsuranceGoalsIcon'
  InsuranceGoalsFilterDataId = 'InsuranceGoalsFilterData'
  InsuranceGoalsTitle: string; // = 'Metas de Vendas por Seguros'

  GoalsProductsData: any
  GoalsProductsLabels: any
  GoalsProductsColor: any
  GoalsProductsOptions: any
  GoalsProductsType: any = 'pie'
  GoalsProductsExportId = 'GoalsProductsExport'
  GoalsProductsExportIconId = 'GoalsProductsIcon'
  GoalsProductsFilterDataId = 'GoalsProductsFilterData'
  GoalsProductsTitle: string; // = 'Metas de Vendas por Seguros'

  formFilter: FormGroup;

  comparativo: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private _adapter: DateAdapter<any>,
    private _translate: UtilService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.GoalsSalespeopleTitle = this._translate.getManagerGoalsSellerRegis();
    this.GoalsStoresTitle = this._translate.getManagerGoalsSellerRegis();
    this.InsuranceGoalsTitle = this._translate.getAggregatorDashSaleInsurGoal();
    this.GoalsProductsTitle = this._translate.getAggregatorDashGoalSaleCatProduct();
    this.loadingPeople()
    this.loadingGoaolsStore()
    this.loadingInsuranceGoals()
    this.loadingProducts()

    this._createFormFilter();
    this._adapter.setLocale('br');

    $('#filter-dashGoals').on('click', () => {
      $('.filter-dashGoals').fadeToggle('fast');
    });

    this.comparativo = this.routeData().comparativo
    this.comparativo.forEach(element => {
      setTimeout(() => {
          document.getElementById(`position${element.position}`).style.width = `${element.percent}%`
      }, 10);
  });


  }

  loadingPeople = () => {
    this.GoalsSalespeopleData = this.routeData().vendedores.vendors
    this.GoalsSalespeopleLabels = this.routeData().vendedores.xAxys

    this.GoalsSalespeopleColor = [
      {
        backgroundColor: '#62BC00',
        borderColor: 'transparent',
        pointBackgroundColor: '#DEE4E8',
        pointBorderColor: '#005AAB',
        pointHoverBackgroundColor: '#005AAB',
        pointHoverBorderColor: '#DEE4E8'
      },

      {
        backgroundColor: '#02296A',
        borderColor: 'transparent',
        pointBackgroundColor: '#DEE4E8',
        pointBorderColor: '#005AAB',
        pointHoverBackgroundColor: '#005AAB',
        pointHoverBorderColor: '#DEE4E8'
      },
      {
        backgroundColor: '#005AAB',
        borderColor: 'transparent',
        pointBackgroundColor: '#DEE4E8',
        pointBorderColor: '#005AAB',
        pointHoverBackgroundColor: '#005AAB',
        pointHoverBorderColor: '#DEE4E8'
      }

    ]
    this.GoalsSalespeopleOptions = {
      responsive: true,
      aspectRatio: 3,
      legend:
      {
        display: true
      },

      scales: {
        xAxes: [{
          barThickness : 60,
          display: true,
          gridLines: {
            display: false
          },
          ticks: {
            display: true,
            beginAtZero: true,
          },
        }],
        yAxes: [{
          ticks: {
            display: true,
            beginAtZero: true,
          },
          gridLines: {
            display: true
          }
        }],
      },
    }
  }

  GoalsSalespeopleChangeDate(rangeDate: any) {
  }

  loadingGoaolsStore = () => {
    this.GoalsStoresData = this.routeData().lojas.vendors
    this.GoalsStoresLabels = this.routeData().lojas.xAxys

    this.GoalsStoresColor = [
      {
        backgroundColor: '#005AAB',
        borderColor: 'transparent',
        pointBackgroundColor: '#DEE4E8',
        pointBorderColor: '#005AAB',
        pointHoverBackgroundColor: '#005AAB',
        pointHoverBorderColor: '#DEE4E8'
      },

      {
        backgroundColor: '#62BC00',
        borderColor: 'transparent',
        pointBackgroundColor: '#DEE4E8',
        pointBorderColor: '#005AAB',
        pointHoverBackgroundColor: '#005AAB',
        pointHoverBorderColor: '#DEE4E8'
      }

    ]
    this.GoalsStoresOptions = {
      responsive: true,
      aspectRatio: 0,
      legend:
      {
        display: true
      },
      scales: {
        xAxes: [{
          barThickness : 60,
          display: true,
          gridLines: {
            display: false
          },
          ticks: {
            display: true,
            beginAtZero: true,
          },
        }],
        yAxes: [{
          ticks: {
            display: true,
            beginAtZero: true,
          },
          gridLines: {
            display: true
          }
        }],
      },
    }
  }

  GoalsStoresChangeDate(rangeDate: any) {
  }


  loadingInsuranceGoals = () => {
    const data = [];
    const label = [];
    const api = this.routeData().seguro
    api.forEach(element => {
      data.push(element.value)
      label.push(element.insurance)
    });
    this.InsuranceGoalsData = [{
      data: data
    }]
    this.InsuranceGoalsLabels = label
    this.InsuranceGoalsColor = []
    this.InsuranceGoalsOptions = {
      responsive: true,
      aspectRatio: 0,
    }
  }

  InsuranceGoalsChangeDate(rangeDate: any) {
  }

  loadingProducts = () => {
    const data = [];
    const label = [];
    const api = this.routeData().categoria
    api.forEach(element => {
      data.push(element.value)
      label.push(element.insurance)
    });
    this.GoalsProductsData = [{
      data: data
    }]
    this.GoalsProductsLabels = label
    this.GoalsProductsColor = []
    this.GoalsProductsOptions = {
      responsive: true,
      aspectRatio: 0,
    }
  }

  GoalsProductsChangeDate(rangeDate: any) {
  }

  routeData = () => {
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

  findGoals() {
    const filter = this._filterValue;
    $('.filter-dashGoals').fadeOut('fast');
  }

  get _filterValue(): any {
    return this.formFilter.value;
  }

  format = value => new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)

}
