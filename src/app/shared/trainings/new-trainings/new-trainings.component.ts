import { Component, OnInit } from '@angular/core';
import { NivelService } from 'app/service/nivel.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ComercialTrainingPartner } from 'app/models/comercial-training-partner.model';

@Component({
  selector: 'app-new-trainings',
  templateUrl: './new-trainings.component.html',
  styleUrls: ['./new-trainings.component.scss']
})
export class NewTrainingsComponent implements OnInit {


  newTrainingForm: FormGroup;

  partnersCombo: Array<ComercialTrainingPartner>;
  materialsCombo: Array<ComercialTrainingPartner>;

  showListGrid = true;
  formImportArchive: FormGroup;

  corretor: any
  vendedor: any

  constructor(
    private nivel: NivelService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.createFormImportArchive();

    this.createFormNewTraining();
    this.getMaterials();
    this.getPartenrs();
  }

  createFormNewTraining() {
    this.newTrainingForm = this.fb.group({
      subject: [''],
      partner: [''],
      typeMaterial: [''],
      archive: []
    });
  }

  createFormImportArchive() {
    this.formImportArchive = this.fb.group({
      data: ['', [Validators.required]],
      name: ['', [Validators.required]],
      size: [''],
      type: ['']
    });
  }

  clearFormImportArchive() {
    this.formImportArchive.reset();
  }

  getPartenrs() {
    this.partnersCombo = this.activatedRoute.snapshot.data.comboPartners
  }

  getMaterials() {
    this.materialsCombo = this.activatedRoute.snapshot.data.comboKind
  }

  addArchiveByUrl() {
    this._addArchive(this.formImportArchive.getRawValue())
    this.clearFormImportArchive();
  }

  removeArchive(index) {
    const archives = this._archiveControl.value || [];
    archives.splice(index, 1);
    this._archiveControl.setValue(archives);
  }

  private _addArchive(archive) {
    const archives = this._archiveControl.value || [];
    archives.push(archive);
    this._archiveControl.setValue(archives);
  }

  get _archiveControl() {
    return this.newTrainingForm.get('archive');
  }

  showEditMaterial(index: number) {
    if (document.getElementById(`editMaterial${index}`).style.display === 'block') {
      document.getElementById(`editMaterial${index}`).style.display = 'none';
    } else {
      document.getElementById(`editMaterial${index}`).style.display = 'block';
    }
  }

}
