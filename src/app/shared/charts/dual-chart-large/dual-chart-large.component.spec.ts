import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DualChartLargeComponent } from './dual-chart-large.component';

describe('DualChartLargeComponent', () => {
  let component: DualChartLargeComponent;
  let fixture: ComponentFixture<DualChartLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualChartLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DualChartLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
