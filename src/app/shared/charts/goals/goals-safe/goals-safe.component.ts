import { Component, OnInit } from '@angular/core';
import { DashGoalsService } from 'app/service/dash-goals.service';
import { Chart } from 'chart.js';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-goals-safe',
  templateUrl: './goals-safe.component.html',
  styleUrls: ['./goals-safe.component.scss']
})
export class GoalsSafeComponent implements OnInit {
  public goalsSafe: any = []
  public chart: any = []

  constructor(
    public api: DashGoalsService,
    private _adapter: DateAdapter<any>,
    public activaredRoute: ActivatedRoute

  ) { }

  dateRangeChange() {
    if (this.api.dateDeGoalsSafe > this.api.dateAteGoalsSafe) {
      this.api.dateAteGoalsSafe = this.api.dateDeGoalsSafe;
    }
    if (!this.api.dateAteGoalsSafe) {
      this.api.dateAteGoalsSafe = this.api.dateDeGoalsSafe;
    }
  }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this._adapter.setLocale('br');

    (function () {
      $('#chart-goals-safe').on('click', function () {
        $('.chart-goals-safe').fadeToggle('fast');
      });
    })();

    this.goalsSafe = this.activaredRoute.snapshot.data.goalsSafe
    const goalsSafeCanva: any = document.getElementById('goalsSafeChart')
    const goalsSafeChart = goalsSafeCanva.getContext('2d')
    const labels = [], data = [];
    for (let i = 0; i < this.goalsSafe.length; i++) {
      labels.push(this.goalsSafe[i].insurance);
      data.push(this.goalsSafe[i].value);
    }
    this.chart = new Chart(goalsSafeChart, {
      type: 'pie',
      data: {
        datasets: [
          {
            backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658', '#000'],
            data: data,
          }
        ],
        labels: labels,

      }
    })
  }
}
