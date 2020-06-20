import { Component, OnInit } from '@angular/core';
import { GoalsCommercialService } from 'app/service/goals-commercial.service';

import { GoalModel } from 'app/models/goal.model';

@Component({
  selector: 'app-new-goals',
  templateUrl: './new-goals.component.html',
  styleUrls: ['./new-goals.component.scss']
})
export class NewGoalsComponent implements OnInit {
  newGoal = false;
  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;}
}
