import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DashGoalsService } from 'app/service/dash-goals.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-achievement-goals',
  templateUrl: './achievement-goals.component.html',
  styleUrls: ['./achievement-goals.component.scss']
})
export class AchievementGoalsComponent implements OnInit {

  public achievementGoals: any = [];
  public chart: any = [];

  constructor(
    public activaredRoute: ActivatedRoute
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.achievementGoals = this.activaredRoute.snapshot.data.achievementGoals
    const achievementGoalsCanva: any = document.getElementById('achievementGoalsChart')
    const achievementGoalsChart = achievementGoalsCanva.getContext('2d')
    this.chart = new Chart(achievementGoalsChart, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            backgroundColor: ['#3a84eb', '#1862c6'],
            data: [this.achievementGoals.percent, this.achievementGoals.goal]
          }
        ]
      }
    })

  }

  format = (value, options) => new Intl.NumberFormat('pt-BR', options).format(value);

  status = {
    style: 'percent',
    maximumFractionDigits: 2
  }

  decimal = {
    style: 'decimal'
  }
}
