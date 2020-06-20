import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceSalesComponent } from './insurance-sales.component';

describe('InsuranceSalesComponent', () => {
  let component: InsuranceSalesComponent;
  let fixture: ComponentFixture<InsuranceSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
