import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewGoalComponent } from './form-new-goal.component';

describe('FormNewGoalComponent', () => {
  let component: FormNewGoalComponent;
  let fixture: ComponentFixture<FormNewGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
