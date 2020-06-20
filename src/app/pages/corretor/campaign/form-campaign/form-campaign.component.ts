import { Component, OnInit } from '@angular/core';
import { ComercialCampaign } from 'app/models/comercial-new-campaign-form.model';
import { InsuranceListModel } from 'app/models/insurance-list.model';
import { ProfileListModel } from 'app/models/profile-list.model';
import { GoalsListModel } from 'app/models/goals-list.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ComercialCampaignService } from 'app/service/comercial-campaign.service';
import { DateAdapter } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignCorretorService } from 'app/service/campaign-corretor.service';

@Component({
  templateUrl: './form-campaign.component.html',
  styleUrls: ['./form-campaign.component.scss']
})
export class FormCampaignComponent implements OnInit {
  profileList: ProfileListModel[] = [];
  insuranceList: InsuranceListModel[] = [];
  goalsList: GoalsListModel[] = [];

  formCampaign: FormGroup;
  _fileReader: FileReader;
  onlyView: boolean;

  constructor(
    private _formBuild: FormBuilder,
    private _service: CampaignCorretorService,
    private _adapter: DateAdapter<any>,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this._fileReader = new FileReader();
    this._fileReader.addEventListener('load', (event: any) => {
      this._imageControl.setValue(event.target.result);
    });
  }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this._adapter.setLocale('br');

    const campaignId = Number.parseInt(
      this._activatedRoute.snapshot.queryParamMap.get('id'), 10
    );
    if (campaignId) {
      const disableForm = !!this._activatedRoute.snapshot.queryParamMap.get(
        'disableForm'
      );
      this._service.getCampaignById$(campaignId).subscribe(value => {
        this.formCampaign.patchValue(value);
        if (disableForm) {
          this.formCampaign.disable();
          this.onlyView = disableForm;
        }
      });
    }
    this._initSelectValues();

    this._createFormCampaign();
  }

  submit() {
    this._service.sendCampaign$(this.campaign).subscribe(() => this.goBack());
  }

  formIsInvalid() {
    return this.formCampaign.invalid;
  }

  changeImageInput(event) {
    const file = event.target.files[0];
    this._fileReader.readAsDataURL(file);
    this.formCampaign.get('imageName').setValue(file.name);
  }

  goBack() {
    this._router.navigate(['private/corretor/campaign/list']);
  }

  private _createFormCampaign() {
    this.formCampaign = this._formBuild.group({
      id: 0,
      code: '',
      title: '',
      insurnce: '',
      profile: '',
      goal: '',
      amount: '',
      startDate: '',
      endDate: '',
      image: '',
      goalDescription: '',
      imageName: ''
    });
  }

  private _initSelectValues() {
    const { insuranceList, profileList, goalsList } = this._activatedRoute.parent.snapshot.data.values;
    this.profileList = profileList;
    this.goalsList = goalsList;
    this.insuranceList = insuranceList;
  }

  get campaign(): ComercialCampaign {
    return this.formCampaign.value;
  }

  get imageName() {
    return this.formCampaign.get('imageName').value || '';
  }

  get _imageControl() {
    return this.formCampaign.get('image');
  }
}
