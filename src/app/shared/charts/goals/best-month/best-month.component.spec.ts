import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestMonthComponent } from './best-month.component';

describe('BestMonthComponent', () => {
  let component: BestMonthComponent;
  let fixture: ComponentFixture<BestMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
