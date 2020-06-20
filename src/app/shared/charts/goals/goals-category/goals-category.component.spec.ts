import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsCategoryComponent } from './goals-category.component';

describe('GoalsCategoryComponent', () => {
  let component: GoalsCategoryComponent;
  let fixture: ComponentFixture<GoalsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
