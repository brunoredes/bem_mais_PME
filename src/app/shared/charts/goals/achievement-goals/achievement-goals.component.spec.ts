import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementGoalsComponent } from './achievement-goals.component';

describe('AchievementGoalsComponent', () => {
  let component: AchievementGoalsComponent;
  let fixture: ComponentFixture<AchievementGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
