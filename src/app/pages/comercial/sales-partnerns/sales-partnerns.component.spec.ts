import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPartnernsComponent } from './sales-partnerns.component';

describe('SalesPartnernsComponent', () => {
  let component: SalesPartnernsComponent;
  let fixture: ComponentFixture<SalesPartnernsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPartnernsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPartnernsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
