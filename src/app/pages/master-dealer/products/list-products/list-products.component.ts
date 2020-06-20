import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ProductTableModel } from 'app/models/product-table.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { Options } from 'ng5-slider';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from 'app/helpers/utils';
import { CategoryProductModel } from 'app/models/category-product.model';

declare const $: any;

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  categoryProducts: CategoryProductModel;
  minValue = 0;
  maxValue = 500;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number): string => {
      return 'R$ ' + value;
    }
  };

  dataSource: MatTableDataSource<ProductTableModel>;

  displayedColumns: string[] = [
    'code',
    'image',
    'name',
    'brand',
    'model',
    'version',
    'amount',
    'categoryDescription',
    'editar',
    'remover'
  ];
  columnsTitle = [
    this._translate.getAggregatorListId(),
    this._translate.getMasterDealerListImage(),
    this._translate.getMasterDealerListName(),
    this._translate.getMasterDealerProdFilterBrand(),
    this._translate.getMasterDealerProdFilterModel(),
    this._translate.getMasterDealerListVersion(),
    this._translate.getMasterDealerListValue(),
    this._translate.getMasterDealerListCateg()
  ];

  recordDelete: ProductTableModel;
  formFilter: FormGroup;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _adapter: DateAdapter<any>,
    private fb: FormBuilder,
    private _translate: UtilService,
    private _router: Router
  ) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
        // Esconde a modal do filtro com classe
        $(document).mouseup(function(e) {
          const container = $('.filter-div');
          if (!container.is(e.target) && container.has(e.target).length === 0)
          {
              container.hide();
          }
          // Filter
        }),
    this._adapter.setLocale('br');
    this._createFormFilter();

    $('#filter-products').on('click', () => {
      $('.filter-products').fadeToggle('fast');
    });

    this.dataSource = new MatTableDataSource(this._activatedRoute.snapshot.data.values.products);
    this.categoryProducts = this._activatedRoute.snapshot.data.values.categoryProducts;

  }

  viewRecord(record: ProductTableModel) {
    this._router.navigate(['/private/masterdealer/products', record.id, 'view'], { queryParams: { disableForm: true } });
  }

  updateRecord(record: ProductTableModel) {
    this._router.navigate(['/private/masterdealer/products', record.id, 'update']);
  }


  setRecordDelete(recordDelete: ProductTableModel) {
    this.recordDelete = recordDelete;
  }

  deleteRecord() {
    this.recordDelete = undefined;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private _createFormFilter() {
    this.formFilter = this.fb.group({
      brand: '',
      model: '',
      category: '',
      minValue: this.minValue,
      maxValue: this.maxValue
    })
  }

  findProducts() {
    const filter = this._filterValue;
    $('.filter-products').fadeOut('fast');
  }

  get _filterValue(): any {
    this.formFilter.patchValue({
      minValue: this.minValue,
      maxValue: this.maxValue
    })
    return this.formFilter.value;
  }

}
