import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoalModel } from 'app/models/goal.model';
import { GoalsCommercialService } from 'app/service/goals-commercial.service';
import { AggregatorGoalsService } from 'app/service/aggregator-goals.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './form-personal-goal.component.html',
  styleUrls: ['./form-personal-goal.component.scss']
})
export class FormPersonalGoalComponent implements OnInit {

  newGoalForm: FormGroup;

  constructor(
    private _formBuild: FormBuilder,
    private _goalsService: AggregatorGoalsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this._createGoalForm();
    const goalId: number = Number.parseInt(
      this._activatedRoute.snapshot.paramMap.get('goalId'), 10
    );
    if (goalId) {
      this._goalsService.getGoalById$(goalId).subscribe(value => {
        this.newGoalForm.patchValue(value);
      });
    }
  }

  submit() {
    this._goalsService.sendGoal$(this.goal).subscribe(() => this.goBack());
  }

  goBack() {
    history.back()
  }

  formIsInvalid() {
    return this.newGoalForm.invalid;
  }

  private _createGoalForm() {
    this.newGoalForm = this._formBuild.group({
      code: '',
      profile: '',
      insurance: '',
      product: '',
      amount: '',
      title: '',
      description: '',
      type: '',
      partner: '',
      sales: '',
      validityStartDate: '',
      validityEndDate: ''
    });
  }

  get goal() {
    return this.newGoalForm.value;
  }
}
