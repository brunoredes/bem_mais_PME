import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsSafeComponent } from './goals-safe.component';

describe('GoalsSafeComponent', () => {
  let component: GoalsSafeComponent;
  let fixture: ComponentFixture<GoalsSafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsSafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsSafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
