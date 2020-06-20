import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCancellationsComponent } from './number-cancellations.component';

describe('NumberCancellationsComponent', () => {
  let component: NumberCancellationsComponent;
  let fixture: ComponentFixture<NumberCancellationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberCancellationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberCancellationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
