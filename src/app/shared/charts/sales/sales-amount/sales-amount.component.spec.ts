import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAmountComponent } from './sales-amount.component';

describe('SalesAmountComponent', () => {
  let component: SalesAmountComponent;
  let fixture: ComponentFixture<SalesAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
