import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ComercialCampaign } from 'app/models/comercial-new-campaign-form.model';
import { ComercialCampaignService } from 'app/service/comercial-campaign.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileListModel } from 'app/models/profile-list.model';
import { InsuranceListModel } from 'app/models/insurance-list.model';
import { DateAdapter } from '@angular/material/core';

declare const $;

@Component({
  selector: 'app-list-campaign',
  templateUrl: './list-campaign.component.html',
  styleUrls: ['./list-campaign.component.scss']
})
export class ListCampaignComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Output('campaign-selected')
  campaignSelect: EventEmitter<ComercialCampaign> = new EventEmitter();

  @Output('selected-option')
  selectedOption: EventEmitter<'VIEW' | 'EDIT' | 'DELETE'> = new EventEmitter();

  profileList: ProfileListModel[] = [];
  insuranceList: InsuranceListModel[] = [];
  recordDelete: ComercialCampaign;

  displayedColumns: string[] = [
    'code',
    'profile',
    'title',
    'startDate',
    'endDate',
    'insurance',
    'goalDescription',
    'visualizar',
    'editar',
    'remover'
  ];
  columnsTitle = ['Código', 'Perfil', 'Título', 'Data Início', 'Data Fim', 'Seguro', 'Meta Atribuída'];

  dataSource: MatTableDataSource<ComercialCampaign>;
  formFilter: FormGroup;

  constructor(
    private _service: ComercialCampaignService,
    private _formBuild: FormBuilder,
    private _adapter: DateAdapter<any>,
    private activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // Esconde a modal do filtro com classe
    $(document).mouseup(function (e) {
      const container = $('.filter-div');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
      // Filter
    })
    this._adapter.setLocale('br');

    this.getListProfile();
    this.getListInsurance();
    this._buildFilterForm();

    this.dataSource = new MatTableDataSource(this.activatedRoute.snapshot.data.campaign);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    $('#filter-campaign').on('click', () => {
      $('.filter-campaign').fadeToggle('fast');
    });
  }

  loadCampaigns() {
    const filter = this._filterValue;
    $('.filter-campaign').fadeToggle('fast');
  }

  showForm(campaign: ComercialCampaign, option: 'VIEW' | 'EDIT' | 'DELETE') {
    this.campaignSelect.emit(campaign);
    this.selectedOption.emit(option);
  }

  private _buildFilterForm() {
    this.formFilter = this._formBuild.group({
      code: [''],
      profile: [''],
      name: [''],
      validityStartDate: [''],
      validityEndDate: [''],
      insurance: ['']
    });
  }

  get _filterValue() {
    return this.formFilter.value;
  }

  getListProfile() {
    this.profileList = this.activatedRoute.snapshot.data.profileListCampaign;
  }

  getListInsurance() {
    this.insuranceList = this.activatedRoute.snapshot.data.insuranceListCampaign;
  }

  setRecordDelete(recordDelete: ComercialCampaign) {
    this.recordDelete = recordDelete;
  }

  deleteRecord() {
    this.recordDelete = undefined;
  }

  updateEvent(event: any) {
    this._router.navigate(['private/comercial/new-campaign/', event.id, 'update'],{
      queryParams: {disableForm: false}
    });
  }

  viewEvent(event: any) {
    this._router.navigate(['private/comercial/new-campaign/', event.id, 'view'], {
      queryParams: { disableForm: true }
    });
  }

  filter() {
  }

}
