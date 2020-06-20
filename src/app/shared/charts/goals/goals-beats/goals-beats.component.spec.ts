import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsBeatsComponent } from './goals-beats.component';

describe('GoalsBeatsComponent', () => {
  let component: GoalsBeatsComponent;
  let fixture: ComponentFixture<GoalsBeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsBeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsBeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
