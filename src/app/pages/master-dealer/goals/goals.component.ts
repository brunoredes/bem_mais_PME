import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { UtilService } from 'app/helpers/utils';

@Component({
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  SalesGoalsType: any = [];
  SalesGoalsOptions: any = [];
  SalesGoalsData: any = [];
  SalesGoalsLabels: any = [];
  SalesGoalsColors: any = [];
  SalesGoalsExportId = 'SalesGoalsExport';
  SalesGoalsExportIconId = 'SalesGoalsIcon';
  SalesGoalsFilterDataId = 'SalesGoalsFilterData';
  SalesGoalsTitle: string; // = 'Metas de Vendas por Seguros';

  ProductGoalsType: any = [];
  ProductGoalsOptions: any = [];
  ProductGoalsData: any = [];
  ProductGoalsLabels: any = [];
  ProductGoalsColors: any = [];
  ProductGoalsExportId = 'ProductGoalsExport';
  ProductGoalsExportIconId = 'ProductGoalsIcon';
  ProductGoalsFilterDataId = 'ProductGoalsFilterData';
  ProductGoalsTitle: string; // = 'Metas de Vendas por Categorias de Produtos';

  SalesComparisonType: any = [];
  SalesComparisonOptions: any = [];
  SalesComparisonData: any = [];
  SalesComparisonLabels: any = [];
  SalesComparisonColors: any = [];

  amount: any;
  days: any;
  top: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _adapter: DateAdapter<any>,
    private _translate: UtilService
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.SalesGoalsTitle = this._translate.getAggregatorDashSaleInsurGoal();
    this.ProductGoalsTitle = this._translate.getAggregatorDashGoalSaleCatProduct();
    this._adapter.setLocale('br');

    window.addEventListener('resize', () => {
      this.loadingSalesGoals();
      this.loadingProductGoals();
    });

    this.loadingSalesGoals();
    this.loadingProductGoals();
    this.loadingSalesComparison();
    this.loadingSalesComparison().forEach(element => {
      setTimeout(() => {
        document.getElementById(`position${element.position}`).style.width = `${element.percent}%`
      }, 10);
    });
    this.amount = this.activatedRoute.snapshot.data.suggestions.goal.salesAmount;
    this.days = this.activatedRoute.snapshot.data.suggestions.goal.days;
    this.top = this.activatedRoute.snapshot.data.melhores.vendors;

    setTimeout(() => {
      for (let i = 0; i < this.top.length; i++) {
        const element = this.top[i];
        const div = document.getElementById(`top${element.id}`);
        div.style.width = `${element.percent}%`;
      }
    }, 10);
  }

  // Metas de Vendas por Seguros
  loadingSalesGoals() {
    const data = [],
      labels = [];

    let fontSize = 12;
    let display = true;

    if (screen.width < 768) {
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10;
    }

    this.SalesGoalsOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    };

    for (
      let i = 0;
      i < this.activatedRoute.snapshot.data.vendasSeguros.length;
      i++
    ) {
      const element = this.activatedRoute.snapshot.data.vendasSeguros[i];
      data.push(element.value);
      labels.push(`${element.insurance}`);
    }
    this.SalesGoalsType = 'pie';
    this.SalesGoalsData = [
      {
        data: data
      }
    ];
    this.SalesGoalsLabels = labels;
  }

  // Metas de Vendas por Categoria de Produtos
  loadingProductGoals() {
    const data = [],
      labels = [];

    let fontSize = 12;
    let display = true;

    if (screen.width < 768) {
      display = false;
    } else if (screen.width < 1024) {
      fontSize = 10;
    }

    this.ProductGoalsOptions = {
      responsive: true,
      aspectRatio: 0,
      legend: {
        display: display,
        labels: {
          fontSize: fontSize
        }
      }
    };

    for (
      let i = 0;
      i < this.activatedRoute.snapshot.data.vendasCategoria.length;
      i++
    ) {
      const element = this.activatedRoute.snapshot.data.vendasCategoria[i];
      data.push(element.value);
      labels.push(`${element.insurance}`);
    }
    this.ProductGoalsType = 'pie';
    this.ProductGoalsData = [
      {
        data: data
      }
    ];
    this.ProductGoalsLabels = labels;
  }

  // Comparativo de vendas
  loadingSalesComparison() {
    return this.activatedRoute.snapshot.data.comparativeSales.comparative.aggregators
  }

  SalesGoalsChangeDate(rangeDate: any) {
  }

  ProductGoalsChangeDate(rangeDate: any) {
  }

  format = value => new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
}