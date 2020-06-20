import { Component, OnInit } from '@angular/core';
import { DashGoalsService } from 'app/service/dash-goals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-best-month',
  templateUrl: './best-month.component.html',
  styleUrls: ['./best-month.component.scss']
})
export class BestMonthComponent implements OnInit {
  public bestMonth: any = []
  constructor(public activaredRoute: ActivatedRoute) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.bestMonth = this.activaredRoute.snapshot.data.bestMonth
    setTimeout(() => {
      for (let i = 0; i < this.bestMonth.vendors.length; i++) {
        const element = this.bestMonth.vendors[i].id;
        const sales = this.bestMonth.vendors[i].percent;
        document.getElementById(`sales${element}`).style.width = `${sales}%`
      }
    }, .1);
  }

}
