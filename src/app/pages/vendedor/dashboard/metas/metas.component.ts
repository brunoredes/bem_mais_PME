import { Component, OnInit } from '@angular/core';
import { DashGoalsService } from 'app/service/dash-goals.service';
import { ActivatedRoute } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { UtilService } from 'app/helpers/utils';
import { FormGroup, FormBuilder } from '@angular/forms';

declare let $: any;

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.scss']
})

export class MetasComponent implements OnInit {

  filterStatus: any = [];
  filterCategory: any = [];

  insuranceGoalsType: any = []
  insuranceGoalsOptions: any = []
  insuranceGoalsData: any = []
  insuranceGoalsLabels: any = []
  insuranceGoalsColor: any = []
  insuranceGoalsExportId = 'insuranceGoalsExport'
  insuranceGoalsExportIconId = 'insuranceGoalsIcon'
  insuranceGoalsFilterDataId = 'insuranceGoalsFilterData'
  insuranceGoalsTitle: string;

  productGoalsType: any = []
  productGoalsOptions: any = []
  productGoalsData: any = []
  productGoalsLabels: any = []
  productGoalsColor: any = []
  productGoalsExportId = 'productCancellatiosnExport'
  productGoalsExportIconId = 'productGoalsIcon'
  productGoalsFilterDataId = 'productGoalsFilterData'
  productGoalsTitle: string;

  formFilter: FormGroup;
  comparativo: any
  day: any
  amount: any

  constructor(
    public api: DashGoalsService,
    public activatedRoute: ActivatedRoute,
    private _adapter: DateAdapter<any>,
    private _translate: UtilService,
    private fb: FormBuilder,
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.day = this.activatedRoute.snapshot.data.suggestionsGoals.days
    this.amount = this.activatedRoute.snapshot.data.suggestionsGoals.amount    
    this.comparativo = this.activatedRoute.snapshot.data.comparativeSales.vendors
    this.comparativo.forEach(element => {
      setTimeout(() => {
        document.getElementById(`position${element.position}`).style.width = `${element.percent}%`
      }, 10);
    });
    this.insuranceGoalsTitle = this._translate.getbarLineChartTitle();
    this.productGoalsTitle = this._translate.getVendedorProdCatCancel();
    // Esconde a modal do filtro com classe
    $(document).mouseup(function (e) {
      const container = $('.filter-div');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
      // Filter
    })

    $('#filter-dashGoals').on('click', () => {
      $('.filter-dashGoals').fadeToggle('fast');
    });

    this._createFormFilter();

    this._adapter.setLocale('br');

    window.addEventListener('resize', () => {
      this.loadinginsuranceGoals();
      this.loadinginproductGoals();
    })
    this.loadinginsuranceGoals();
    this.loadinginproductGoals();

    this.filterStatus = this.activatedRoute.snapshot.data.filterStatus
    this.filterCategory = this.activatedRoute.snapshot.data.filterCategory

  }

  loadinginsuranceGoals() {

    const data = [], labels = []
    let fontSize = 12;
    let display = true;

    if (screen.width < 768) {
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10
    }

    this.insuranceGoalsOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    };

    for (let i = 0; i < this.activatedRoute.snapshot.data.goalsSafe.length; i++) {
      const element = this.activatedRoute.snapshot.data.goalsSafe[i];
      data.push(element.value)
      labels.push(element.insurance)
    }
    this.insuranceGoalsType = 'pie'
    this.insuranceGoalsData = [
      {
        data: data
      }
    ]
    this.insuranceGoalsLabels = labels
  }

  loadinginproductGoals() {
    const data = [], labels = []

    let fontSize = 12;
    let display = true;

    if (screen.width < 768) {
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10
    }

    this.productGoalsOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    };

    for (let i = 0; i < this.activatedRoute.snapshot.data.goalsCategory.length; i++) {
      const element = this.activatedRoute.snapshot.data.goalsCategory[i];
      data.push(element.value)
      labels.push(element.insurance)
    }

    this.productGoalsType = 'pie'
    this.productGoalsData = [
      {
        data: data
      }
    ]
    this.productGoalsLabels = labels
  }

  insuranceGoalsChangeDate(rangeDate: any) {
  }

  productGoalsChangeDate(rangeDate: any) {
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

  format = value => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
}
