import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListModel } from 'app/models/product-list.model';
import { ProfileListModel } from 'app/models/profile-list.model';
import { GoalsCommercialService } from 'app/service/goals-commercial.service';

@Component({
  templateUrl: './form-new-goal.component.html',
  styleUrls: ['./form-new-goal.component.scss']
})
export class FormNewGoalComponent implements OnInit {

  profileList: ProfileListModel[] = []
  productList: ProductListModel[] = []

  constructor(
    private fb: FormBuilder,
    private _goalsService: GoalsCommercialService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  onlyView: boolean = true;
  newGoalForm: FormGroup;

  ngOnInit() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.getListProfile();
    this.getListProduct();
    this.createForm();

    const goalId: number = Number.parseInt(
      this._activatedRoute.snapshot.paramMap.get('id'), 10
    );
    if (goalId) {
      this._goalsService.getGoalById$(goalId).subscribe(value => {
        this.newGoalForm.patchValue(value);
        console.log(value);
        
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

  createForm() {
    this.newGoalForm = this.fb.group({
      profile: ['', Validators.required],
      product: ['', Validators.required],
      valueGoal: ['', Validators.required],
      code: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  submit() {
    this._goalsService.sendGoal(this.goal).subscribe(() => this.goBack());
  }

  goBack() {
    this._router.navigateByUrl('/private/comercial/new-goals/list')
  }

  formIsInvalid() {
    return this.newGoalForm.invalid;
  }


  get goal() {
    return this.newGoalForm.value;
  }

  getListProfile() {
    this.profileList = this._activatedRoute.snapshot.data.profileList;
  }

  getListProduct() {
    this.productList = this._activatedRoute.snapshot.data.productList;
  }

}
