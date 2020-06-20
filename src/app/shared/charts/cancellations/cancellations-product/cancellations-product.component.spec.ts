import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationsProductComponent } from './cancellations-product.component';

describe('CancellationsProductComponent', () => {
  let component: CancellationsProductComponent;
  let fixture: ComponentFixture<CancellationsProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancellationsProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellationsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
