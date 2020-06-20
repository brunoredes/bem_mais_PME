import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AggregatorGoalsService } from 'app/service/aggregator-goals.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './form-sellers-goals.component.html',
  styleUrls: ['./form-sellers-goals.component.scss']
})
export class FormSellersGoalsComponent implements OnInit {

  newGoalForm: FormGroup;
  sallers: Array<any>;

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
      this._activatedRoute.snapshot.paramMap.get('id'), 10
    );
    if (goalId) {
      this._goalsService.getGoalById$(goalId).subscribe(value => {
        this.newGoalForm.patchValue(value);
      });
    }
  }

  submit() {
    this._goalsService.sendGoal$(this._goal).subscribe(() => this.goBack());
  }

  goBack() {
    this._router.navigateByUrl('private/gerentedeloja/goals/list-goals');
  }

  formIsInvalid() {
    return this.newGoalForm.invalid;
  }

  private _createGoalForm() {
    this.newGoalForm = this._formBuild.group({
      code: '',
      profile: '',
      saller: '',
      amount: '',
      title: '',
      description: '',
      insurance: '',
      validityStartDate: '',
      validityEndDate: '',
      type: 2
    });
  }

  get _goal() {
    return this.newGoalForm.value;
  }

}
