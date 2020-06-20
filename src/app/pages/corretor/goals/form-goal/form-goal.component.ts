import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CorretorGoalsService } from 'app/service/corretor-goals.service';

@Component({
  templateUrl: './form-goal.component.html',
  styleUrls: ['./form-goal.component.scss']
})
export class FormGoalComponent implements OnInit {

  newGoalForm: FormGroup;
  onlyView: Boolean = true

  constructor(
    private _formBuild: FormBuilder,
    private _goalsService: CorretorGoalsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

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
      if (this._activatedRoute.snapshot.queryParams.disableForm === 'true') {
        this.newGoalForm.disable()
        this.onlyView = false
      } else {
        this.newGoalForm.enable()
        this.onlyView = true
      }
    } else {
      this.newGoalForm.enable()
    }
  }

  submit() {
    this._goalsService.sendGoal$(this.goal).subscribe(() => this.goBack());
  }

  goBack() {
    this._router.navigate(['private/corretor/my-goals/list']);
  }

  formIsInvalid() {
    return this.newGoalForm.invalid;
  }

  private _createGoalForm() {
    this.newGoalForm = this._formBuild.group({
      code: '',
      title: '',
      startDate: '',
      endDate: '',
      insurance: '',
      amount: '',
      description: ''
    });
  }

  get goal() {
    return this.newGoalForm.value;
  }
}
