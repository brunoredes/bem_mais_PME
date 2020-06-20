import { Component, OnInit } from '@angular/core';
import { DashGoalsService } from 'app/service/dash-goals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goals-beats',
  templateUrl: './goals-beats.component.html',
  styleUrls: ['./goals-beats.component.scss']
})
export class GoalsBeatsComponent implements OnInit {

  public goalsBeats: any = [];

  constructor(
    public activaredRoute: ActivatedRoute
  ) { }
  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.goalsBeats = this.activaredRoute.snapshot.data.goalsBeats
  }

  format = value => Intl.NumberFormat('pt-BR', {style: 'decimal'}).format(value) 
}
