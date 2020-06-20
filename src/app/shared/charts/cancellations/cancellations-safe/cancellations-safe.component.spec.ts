import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationsSafeComponent } from './cancellations-safe.component';

describe('CancellationsSafeComponent', () => {
  let component: CancellationsSafeComponent;
  let fixture: ComponentFixture<CancellationsSafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancellationsSafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellationsSafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
