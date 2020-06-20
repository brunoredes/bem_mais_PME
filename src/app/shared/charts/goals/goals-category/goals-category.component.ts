import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { DashGoalsService } from 'app/service/dash-goals.service';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-goals-category',
  templateUrl: './goals-category.component.html',
  styleUrls: ['./goals-category.component.scss']
})
export class GoalsCategoryComponent implements OnInit {
  public goalsCategory: any = []
  public chart: any = []

  constructor(
    public api: DashGoalsService,
    private _adapter: DateAdapter<any>,
    public activaredRoute: ActivatedRoute

  ) { }

  dateRangeChange() {
    if (this.api.dateDeGoalsCategory > this.api.dateAteGoalsCategory) {
      this.api.dateAteGoalsCategory = this.api.dateDeGoalsCategory;
    }
    if (!this.api.dateAteGoalsCategory) {
      this.api.dateAteGoalsCategory = this.api.dateDeGoalsCategory;
    }
  }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this._adapter.setLocale('br');

    (function () {
      $('#chart-goals-category').on('click', function () {
        $('.chart-goals-category').fadeToggle('fast');
      });
    })();

    this.goalsCategory = this.activaredRoute.snapshot.data.goalsSafe
    const goalsCategoryCanva: any = document.getElementById('goalsCategoryChart')
    const goalsCategoryChart = goalsCategoryCanva.getContext('2d')
    const labels = [], data = [];
    for (let i = 0; i < this.goalsCategory.length; i++) {
      labels.push(this.goalsCategory[i].insurance);
      data.push(this.goalsCategory[i].value);
    }
    this.chart = new Chart(goalsCategoryChart, {
      type: 'pie',
      data: {
        datasets: [
          {
            backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658'],
            data: data,
          }
        ],
        labels: labels,

      }
    })
  }
}
